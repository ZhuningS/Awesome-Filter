package com.duruo.service.impl;

import com.duruo.common.ServerResponse;
import com.duruo.dao.*;
import com.duruo.dto.DataFields;
import com.duruo.dto.FlowData;
import com.duruo.dto.FlowDataChild.*;
import com.duruo.dto.PostData;
import com.duruo.po.*;
import com.duruo.service.IStAuditService;
import com.duruo.util.*;
import com.duruo.vo.StAuditVo;
import com.google.gson.*;
import lombok.extern.slf4j.Slf4j;
import okhttp3.*;
import okhttp3.Cookie;
import org.apache.commons.lang3.StringUtils;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.CookieStore;
import org.apache.http.client.ResponseHandler;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.cookie.*;
import org.apache.http.impl.client.*;
import org.apache.http.message.BasicNameValuePair;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.*;

/**
 * Created by @Author tachai
 * date 2018/6/19 14:38
 *
 * @Email 1206966083@qq.com
 */
@Slf4j
@Service("iStAuditService")
public class StAuditServiceImpl implements IStAuditService {
    @Autowired
    private ProjectdetailMapper projectdetailMapper;
    @Autowired
    private EnterpriseMapper enterpriseMapper;
    @Autowired
    private PersionsMapper persionsMapper;
    @Autowired
    private ProjectBudgetMapper projectBudgetMapper;
    @Autowired
    private ProjectBudgetDetailMapper projectBudgetDetailMapper;
    @Autowired
    private FilePathMapper filePathMapper;
    @Autowired
    private AuditTempDataMapper auditTempDataMapper;


    // 构造登录
    protected CloseableHttpClient _client;

    private CookieStore _cookies;
    private void init() {
        _cookies = new BasicCookieStore();

        HttpClientBuilder hcb = HttpClientBuilder.create();
//		 hcb.setProxy(new HttpHost("127.0.0.1", 8888));
        hcb.setRedirectStrategy(new LaxRedirectStrategy());
//        User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36
        hcb.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.82 Safari/537.36");
        hcb.setDefaultCookieStore(_cookies);
        _client = hcb.build();
    }


    @Override
    public ServerResponse<List<StAuditVo>> list(String realname, String project) {

        List<StAuditVo> list = projectdetailMapper.getAllStAuditVo(realname, project);
        if (list != null) {
            return ServerResponse.createBySuccess(list, "查询成功");
        } else {
            return ServerResponse.createByErrorMessage("查询失败");
        }
    }

    @Override
    public ServerResponse<Enterprise> getEnterprise(String sn) {
        Projectdetail project = projectdetailMapper.selectByPrimaryKey(sn);
        //todo 可能会报错没有找到project
        Enterprise enterprise = enterpriseMapper.selectByPrimaryKey(project.getEnterpriseId());

        if (enterprise != null) {
            return ServerResponse.createBySuccess(enterprise, "获得企业信息成功");
        } else {
            return ServerResponse.createByErrorMessage("没有找到企业信息");
        }
    }


    @Override
    public ServerResponse<Projectdetail> getProjectdetail(String sn) {
        Projectdetail project = projectdetailMapper.selectByPrimaryKey(sn);

        if (null != project) {
            return ServerResponse.createBySuccess(project, "查询成功");
        } else {
            return ServerResponse.createByErrorMessage("没有找到相关项目");
        }
    }

    @Override
    public ServerResponse<List<Persions>> getListPersions(String sn) {
        Projectdetail project = projectdetailMapper.selectByPrimaryKey(sn);

        if (null != project) {
            List<Persions> list = persionsMapper.getListPersions(sn);
            return ServerResponse.createBySuccess(list, "获得当前项目人员列表");
        } else {
            return ServerResponse.createByErrorMessage("没有找到相关项目");
        }
    }

    @Override
    public ServerResponse<ProjectBudget> getProjectBudget(String sn) {

        Projectdetail project = projectdetailMapper.selectByPrimaryKey(sn);
        if (null != project) {
            ProjectBudget projectBudget = projectBudgetMapper.selectBySN(sn);
            return ServerResponse.createBySuccess(projectBudget, "查询预算成功");

        } else {
            return ServerResponse.createByErrorMessage("没有找到相关项目");
        }
    }

    @Override
    public ServerResponse<List<ProjectBudgetDetail>> getListBudgetDetail(String sn) {

        Projectdetail project = projectdetailMapper.selectByPrimaryKey(sn);

        if (null != project) {
            List<ProjectBudgetDetail> list = projectBudgetDetailMapper.selectListBudgetDtailBySN(sn);
            return ServerResponse.createBySuccess(list, "查询列表成功");
        } else {
            return ServerResponse.createByErrorMessage("没有找到相关项目");
        }
    }

    @Override
    public ServerResponse<String> getOpinion(String sn) {
        Projectdetail project = projectdetailMapper.selectByPrimaryKey(sn);
        if (null != project) {
            return ServerResponse.createBySuccess(project.getAuditOpinion(), "获得审核信息");
        } else {
            return ServerResponse.createByErrorMessage("获得审核信息失败");
        }
    }

    //新增数据给后台
    @Override
    public ServerResponse<String> updateOpinion(String opinion, String sn, String status) {
        Projectdetail projectdetail = projectdetailMapper.selectByPrimaryKey(sn);
//        Enterprise enterprise = enterpriseMapper.selectByPrimaryKey(projectdetail.getEnterpriseId());
        if (null != projectdetail) {
            if (!StringUtils.isBlank(opinion)) {
                projectdetail.setAuditOpinion(opinion);
            }
            int result = projectdetailMapper.updateByPrimaryKeySelective(projectdetail);
            return ServerResponse.createBySuccessMessage("更新数据成功");
        }
        return ServerResponse.createByErrorMessage("更新数据失败");
    }


    //提交数据给科委系统
    @Override
    public ServerResponse<String> postOpinion(String opinion, String sn, String status) {
        Projectdetail projectdetail = projectdetailMapper.selectByPrimaryKey(sn);
//        Enterprise enterprise = enterpriseMapper.selectByPrimaryKey(projectdetail.getEnterpriseId());
        if (null != projectdetail) {
            if (!StringUtils.isBlank(opinion)) {
                projectdetail.setAuditOpinion(opinion);
            }
            projectdetail.setXmstatuscode(status);

            projectdetailMapper.updateByPrimaryKeySelective(projectdetail);


            //返回审核结果给科委系统
            String url = PropertiesUtil.getProperty("kewei.url");
            PostData postData = new PostData();
            // 填充数据到postData中去


            //第一个list
            //泛型传惨脑袋爆炸
            List<FlowData> flowDataList = new ArrayList<>();
            FlowData<List<db_flow_jjkc_info>> flowData = new FlowData();

            List<db_flow_jjkc_info> infoList = new ArrayList<>();
            db_flow_jjkc_info info = new db_flow_jjkc_info();

            info.setTitle(projectdetail.getProject());
            //这里是前短穿过 来的值
            if (Integer.parseInt(status) == 12) {
                info.setStatus("待专家一次评审");
                info.setSHYJ("通过");
            } else {
                info.setStatus("待修改");
                info.setSHYJ("退回");
            }
            info.setStatusCode(status);
            Date date = new Date();
            String dateToStr = DateTimeUtil.dateToStr(date);
            info.setModifyTime(dateToStr);
            info.setProjectCode(projectdetail.getId());
            info.setTechnicalFieldCode(CheckTechnicalCode.strToCode(projectdetail.getTechnical()));
            info.setTechnicalField(projectdetail.getTechnical());
            info.setCheckbox1("1");
            info.setCheckbox2("1");
            info.setSHYJTzqy("");
            info.setSHYJ1("");
            info.setSHYJ2("");
            infoList.add(info);
            flowData.setDb_flow_jjkc_info(infoList);
            flowDataList.add(flowData);

//            postData.setFlowData(flowDataList);
            List<db_flow_jjkc_cyry_info> cyrylist = new ArrayList<>();

            cyrylist.add(new db_flow_jjkc_cyry_info());

            FlowData<List<db_flow_jjkc_cyry_info>> flowData2 = new FlowData();
            flowData2.setDb_flow_jjkc_cyry_info(cyrylist);
            flowDataList.add(flowData2);

            List<db_flow_jjkc_kfys_info> kfyslist = new ArrayList<>();

            kfyslist.add(new db_flow_jjkc_kfys_info());
            FlowData<List<db_flow_jjkc_kfys_info>> flowData3 = new FlowData();
            flowData3.setDb_flow_jjkc_kfys_info(kfyslist);
            flowDataList.add(flowData3);


            List<db_flow_jjkc_qtfj_info> qtfjlist = new ArrayList<>();

            qtfjlist.add(new db_flow_jjkc_qtfj_info());
            FlowData<List<db_flow_jjkc_qtfj_info>> flowData4 = new FlowData();
            flowData4.setDb_flow_jjkc_qtfj_info(qtfjlist);
            flowDataList.add(flowData4);


            FlowData<List<Core_Flow_Opinion>> flowData1 = new FlowData();

            //第二个list
            List<Core_Flow_Opinion> opinionList = new ArrayList<>();
            Core_Flow_Opinion flow_opinion = new Core_Flow_Opinion();
            if (Integer.parseInt(status) == 12) {
                flow_opinion.setOpinion("基本符合申报要求，同意申报。");
            } else {
                flow_opinion.setOpinion(projectdetail.getAuditOpinion());
            }
            flow_opinion.setOpinion(projectdetail.getAuditOpinion());
            System.out.print(projectdetail.getAuditOpinion());
            flow_opinion.setTitle("企业研发费用加计扣除申报流程");
            flow_opinion.setProjectID(projectdetail.getSn());
            flow_opinion.setUserName("方超");
            flow_opinion.setUserUID("fangchao");
            flow_opinion.setUserOrgCode("D_2F9FB5B2-FF91-456B-AC9F-8818DCD74BF5");
            flow_opinion.setUserUnitCode("");
            flow_opinion.setUserOrgName("科技创新服务中心");
            flow_opinion.setUserUnitName("");
            flow_opinion.setCurrentNodeID("6");
            flow_opinion.setCurrentNodeName("形式审核");
            flow_opinion.setCurrentFlowName(projectdetail.getProject());
            flow_opinion.setTaskID("");
            flow_opinion.setPreWorkId(projectdetail.getStatus());
            flow_opinion.setUserOrgPath("C_20170417072903138.D_2F9FB5B2-FF91-456B-AC9F-8818DCD74BF5");
            flow_opinion.setCompanyCode("C_20170417072903138");
            flow_opinion.setCompanyName("徐汇区科学技术委员会");
            opinionList.add(flow_opinion);
            flowData1.setCore_Flow_Opinion(opinionList);
            flowDataList.add(flowData1);


//            flowDataList.add(flowData);

            postData.setFlowData(flowDataList);
            postData.setFlowKey(projectdetail.getId());
            postData.setFlowSN(projectdetail.getRealSn());
            postData.setProjectId(projectdetail.getSn());
            postData.setBizTable("DB_Flow_Jjkc_Info");
            postData.setNodeIsAuto("True");
            postData.setUpLoadFileId("");
            DataFields dataFields = new DataFields();
            dataFields.setApproveUsers("");
            dataFields.setNodeID("");
            dataFields.setTitle(projectdetail.getProject());
            dataFields.setApprovalFormURL("http://fwpt.yc.c.c/FlowManagerModule/Form");
            postData.setDataFields(dataFields);
            postData.setActionMode("Save");


            String data = new Gson().toJson(postData);


            System.out.println("测试生成的json:+++++" + data);

            //保存cookie
            final HashMap<String, List<Cookie>> cookieStore = new HashMap<>();
            OkHttpClient httpClient = new OkHttpClient().newBuilder()
                    .cookieJar(new CookieJar() {
                        @Override
                        public void saveFromResponse(HttpUrl httpUrl, List<Cookie> list) {
                            cookieStore.put(httpUrl.host(), list);
                        }

                        @Override
                        public List<Cookie> loadForRequest(HttpUrl httpUrl) {
                            List<Cookie> cookies = cookieStore.get(httpUrl.host());
                            return cookies != null ? cookies : new ArrayList<Cookie>();
                        }
                    }).build();
//            RequestBody requestBody = RequestBody.create(MediaType.parse("text/html;charset=utf-8"), data);
            //okHttp提交form表单
            FormBody formBody = new FormBody.Builder()
                    .add("formJson", data)
                    .build();
            Request request = new Request.Builder()
                    .url(url)
                    .header("Cookie", "UIthemeColor=%231e71b1; LoginUserKey=7B54E67704C8A1BBAD8A6D9914F5688B7B10E92BDB72B2688709E3EB79B1B7993DA27D76469A3B72017CC1195C45A8245D47A8632C6A69C526311CCDA1A3FD703E9FAE76132B754A75B6D246D176CABC187D3A3C5A52A80B5620A36C9324ACB8B27AFAEB199934375081C6DE97BF61695873257A133791CDCE2057243FDDD163CAA4A358C41FC24305325A2B1E0379B5CF2AB97F475556C0075AA7DDBAE90BD611FA1F86BE29C2DE00B81A3F7518F12D0960C9AA881887469244AFE102F7AA3673E32B578CEB500A4F337014D1DEE15D7398C6B218713BA8A7DDC58CC1BB2AF79C25DE5A1FD29D9FEC4ED745DE66CE7824512564E04BF500BCC342F0073C1849B8168D58A547B0E7A1D485A3FBA73BD44EFA93D8521A5A7E8FF41CB3F103426122EF777B8392C312DE0F8DAB3807B1A7196F7B2301A29684A611314680A8F5AEDD7969B652E466AC6CA587B8C549F007200C2F507B0FC347BDC44A3ACC179F1C7615138B4D60D332F16DBCAE35825EF7B7DDDFC0D9E9ACA42B10CF6663DA00C888DD99CF6A8C64AB3451647C085DDCFC5C2F5504473E8174AE531C8440288157D82AE01D8CB5F1F0891A06D41FC6DBF4E40EB67608D0CA69F800F69B2B4697959199C1D5F4C1E6A42956CF124E6F7156BF6E5AC3379E4A4F6B9F464C699D233CDB604BCBC74B8F7F1366FAD110CC24893E9323B9AB15D1093E9F81F02E60DAA0D411827CEB57ABC58E0E34C4FD8760D964293B4BF8345F20A3C4FE55F38021780BCDFFB28C0647AAD322FC2AB126486E42DE1777F4FD8E1E96577C3C396CBAE606862C9619600F4B6111FF97239841C4A0B6B7C0771B4083A56D7AE5CB930CEE01CC588A7E62CB4254E40A38208A9D4E; FrontLoginKey=7B54E67704C8A1BBAD8A6D9914F5688B7B10E92BDB72B2688709E3EB79B1B7993DA27D76469A3B72017CC1195C45A8245D47A8632C6A69C526311CCDA1A3FD703E9FAE76132B754A75B6D246D176CABC187D3A3C5A52A80B5620A36C9324ACB8B27AFAEB199934375081C6DE97BF61695873257A133791CDCE2057243FDDD163CAA4A358C41FC24305325A2B1E0379B5CF2AB97F475556C0075AA7DDBAE90BD611FA1F86BE29C2DE00B81A3F7518F12D0960C9AA881887469244AFE102F7AA3673E32B578CEB500A4F337014D1DEE15D7398C6B218713BA8A7DDC58CC1BB2AF79C25DE5A1FD29D9FEC4ED745DE66CE7824512564E04BF500BCC342F0073C1849B8168D58A547B0E7A1D485A3FBA73BD44EFA93D8521A5A7E8FF41CB3F103426122EF777B8392C312DE0F8DAB3807B1A7196F7B2301A29684A611314680A8F5AEDD7969B652E466AC6CA587B8C549F007200C2F507B0FC347BDC44A3ACC179F1C7615138B4D60D332F16DBCAE35825EF7B7DDDFC0D9E9ACA42B10CF6663DA00C888DD99CF6A8C64AB3451647C085DDCFC5C2F5504473E8174AE531C8440288157D82AE01D8CB5F1F0891A06D41FC6DBF4E40EB67608D0CA69F800F69B2B4697959199C1D5F4C1E6A42956CF124E6F7156BF6E5AC3379E4A4F6B9F464C699D233CDB604BCBC74B8F7F1366FAD110CC24893E9323B9AB15D1093E9F81F02E60DAA0D411827CEB57ABC58E0E34C4FD8760D964293B4BF8345F20A3C4FE55F38021780BCDFFB28C0647AAD322FC2AB126486E42DE1777F4FD8E1E96577C3C396CBAE606862C9619600F4B6111FF97239841C4A0B6B7C0771B4083A56D7AE5CB930CEE01CC588A7E62CB4254E40A38208A9D4E")
                    .post(formBody)
                    .build();

            //创建/Call
            Call call = httpClient.newCall(request);
            //加入队列 异步操作
            call.enqueue(new Callback() {
                //请求错误回调方法
                @Override
                public void onFailure(Call call, IOException e) {
                    System.out.println("连接失败");
                    log.error("提交信息给科委失败:{}", e.getMessage());
                }

                @Override
                public void onResponse(Call call, Response response) throws IOException {
                    if (response.code() == 200) {
//                        System.out.println(response.body().string());
                        //string方法只能用一次，多了会报错
                        log.error("提交信息给科委成功:{}", response.body().string());
                    }
                }
            });

            return ServerResponse.createBySuccessMessage("添加人工审核意见成功");
        }
        return ServerResponse.createByErrorMessage("该项目不存在");
    }

    @Override
    public ServerResponse<String> checkAll()throws Exception {
        List<Enterprise> listEnterPrise = enterpriseMapper.listEnterPrise();
        listEnterPrise.forEach(enterprise -> {
            String tel=enterprise.getWorktelephone();
            String phone=enterprise.getContactsphone();
            //这个暂时用不了
//            Projectdetail project =  projectdetailMapper.selectByEnterpriseId(enterprise.getCreditcode());
            Projectdetail project =  projectdetailMapper.selectByPrimaryKey(enterprise.getCreditcode());
            //注意判断project是否为空容易报空指针异常
            if(null!=project&&project.getSn()!=""){
                if(CheckProject.checkPhone(tel)||CheckProject.checkTel(tel)){
                    project.setAuditOpinion(" ");
                }else {
                    project.setAuditOpinion("【企业信息】:企业号码格式不对;");
                }

                if(StringUtils.isEmpty( enterprise.getContactsname())){
                    project.setAuditOpinion(project.getAuditOpinion()+"【加计扣除联系人】:联系人姓名不能为空;");
                }
                if(CheckProject.checkPhone(phone)||CheckProject.checkTel(phone)){

                }else {
                    project.setAuditOpinion(project.getAuditOpinion()+"【加计扣除联系人】:联系人联系号码格式不对;");
                }
                projectdetailMapper.updateByPrimaryKeySelective(project);
            }
        });

        List<Projectdetail> listProjectdetail = projectdetailMapper.listProjectdetail();
        listProjectdetail.forEach(project->{
            if(null!=project&&project.getSn()!=""){
                if(!CheckProject.checkWords(project.getTrts())){
                    project.setAuditOpinion(project.getAuditOpinion()+"【技术路线或者技术方案模块】:内容偏少，建议补充;");
                }
                if(!CheckProject.checkWords(project.getCip())){
                    project.setAuditOpinion(project.getAuditOpinion()+"【核心创新点模块】:内容偏少，建议详实一点;");
                }
                if(!CheckProject.checkWords(project.getWbrdc())){
                    project.setAuditOpinion(project.getAuditOpinion()+"【项目工作基础与研发条件模块】:内容偏少，建议补充;");
                }
                projectdetailMapper.updateByPrimaryKeySelective(project);
            }
        });

        List<Persions> list = persionsMapper.getListPersion();
        list.forEach(e -> {
            Projectdetail project = projectdetailMapper.selectByPrimaryKey(e.getSn());
            if(null!=project&&project.getSn()!=""){
                if (!CheckProject.checkAge(e.getAge().trim())) {
                    project.setAuditOpinion(project.getAuditOpinion()+"【项目参与人员】:请确实认"+e.getPersionName()+"的出生年月是否正确;");
                }
                projectdetailMapper.updateByPrimaryKeySelective(project);
            }
        });


        List<ProjectBudget> listProjectBudget = projectBudgetMapper.listProjectBudget();
        listProjectBudget.forEach(projectBudget -> {
            Projectdetail project = projectdetailMapper.selectByPrimaryKey(projectBudget.getSn());

            if(null!=project&&project.getSn()!=""){
                Double generalBudget=Double.parseDouble(projectBudget.getGeneralBudget());
                Double specialFunds=Double.parseDouble(projectBudget.getSpecialFunds());
                Double selfFinancing=Double.parseDouble(projectBudget.getSelfFinancing());
                Double developmentCost=Double.parseDouble(projectBudget.getDevelopmentCost());

                //一个条件一个意见
                if(generalBudget!=(selfFinancing+specialFunds)||selfFinancing==0||developmentCost>=(generalBudget*1.2)){
                    project.setAuditOpinion(project.getAuditOpinion()+"【项目开发预算】:建议核实项目开发预算;");
                    log.info("【项目开发预算】:建议核实项目开发预算:{}",project.getSn());
                }

                List<ProjectBudgetDetail> budgetDetailList = projectBudgetDetailMapper.selectListBudgetDtailBySN(project.getSn());

                if(budgetDetailList.size()<2){
                    if(null!=budgetDetailList){
                        ProjectBudgetDetail budgetDetail=budgetDetailList.get(0);
                        if(null !=budgetDetail){
                            String temp=budgetDetail.getDecomposeDetailed();
                            if(temp.split("\\s+").length>1){
                                project.setAuditOpinion(project.getAuditOpinion()+"【预算分解明细】:明细只有一行建议分行填写;");
                            }
                        }
                    }
                }

                if(StringUtils.isBlank(project.getAuditOpinion())){
                    project.setAuditOpinion("【表格内容无明显错误】");
                }
                projectdetailMapper.updateByPrimaryKeySelective(project);
            }
        });


        List<Projectdetail> listProjectdetail2 = projectdetailMapper.listProjectdetail();

        //附件文件校验
        listProjectdetail2.forEach(e -> {
            List<FilePath> listFilePath = filePathMapper.list(Integer.parseInt(e.getSn()));
            if (listFilePath.size() != 0) {
                Set<String> set = new HashSet<>();
                for (FilePath filePath : listFilePath) {
                    //OCR 判断第一文件
                    String strTemp = filePath.getName().substring(filePath.getName().lastIndexOf("."));

                    if (filePath.getTypeCode().equals("1000")) {
                        set.add("1000");
                        //如果是pdf则转图片
                        if (strTemp.equals(".pdf")) {
                            //将pdf文件转文图片
                            try{
                                List<String> imageList = PdfToImage.pdfToImagePath(filePath.getPath());

                                JSONObject json = OCR.checkOne(imageList.get(0));
//                            if (json.toString().length() < 200) {
//                                e.setAuditOpinion(e.getAuditOpinion() + "【优惠明细表或辅助账汇总表】内容不够详细，建议直接从税务申报系统中直接导出");
//                            }
                                filePath.setToString(json.toString());
                            }catch (Exception e1){
                                log.error("错误"+e1.getMessage());
                            }

                            //将文本解析后得到的数据存到filepath的tostring路径中
                            filePathMapper.updateByPrimaryKeySelective(filePath);
                        } else if (strTemp.equals(".jpg")) {
                            try{
                                JSONObject json = OCR.checkOne(filePath.getPath());

                                if (json.toString().indexOf("总经理办公室决议") != -1 && json.toString().indexOf("公司董事会决议") != -1) {
                                    e.setAuditOpinion(e.getAuditOpinion() + "【立项决议书】立项决议书应明确到底是董事会决议还是总经理办公会议决议");
                                }
                                filePath.setToString(json.toString());
                                //将文本解析后得到的数据存到filepath的tostring路径中
                            }catch (Exception e2){
                                log.error(e2.getMessage());
                            }

                            filePathMapper.updateByPrimaryKeySelective(filePath);
                            //OCR判断第二个文件
                        }
                    } else if (filePath.getTypeCode().equals("2000")) {
                        set.add("2000");
//                        String strTemp = filePath.getName().substring(filePath.getName().lastIndexOf("."));
                        if (strTemp.equals(".pdf")) {

                            try{
                                //将pdf文件转文图片
                                List<String> imageList = PdfToImage.pdfToImagePath(filePath.getPath());
                                JSONObject json = OCR.checkOne(imageList.get(0));
                                //todo 第二个表判断还没做完
                                if (json.toString().indexOf("总经理办公室决议") != -1 && json.toString().indexOf("公司董事会决议") != -1) {
                                    e.setAuditOpinion(e.getAuditOpinion() + "【立项决议书】立项决议书应明确到底是董事会决议还是总经理办公会议决议");
                                }
                                filePath.setToString(json.toString());
                                //将文本解析后得到的数据存到filepath的tostring路径中
                            }catch (Exception e3){
                                log.error(e3.getMessage());
                            }

                            filePathMapper.updateByPrimaryKeySelective(filePath);
//                        Iterator<String> iterator = imageList.iterator();
//                        while (iterator.hasNext()){
//                            //生成的文件路径
//                            System.out.println(iterator.next());
//                        }
                        } else if (strTemp.equals(".jpg") || strTemp.equals(".png")) {
                            try{
                                JSONObject json = OCR.checkOne(filePath.getPath());
                                if (json.toString().indexOf("总经理办公室决议") != -1 && json.toString().indexOf("公司董事会决议") != -1) {
                                    e.setAuditOpinion(e.getAuditOpinion() + "【立项决议书】立项决议书应明确到底是董事会决议还是总经理办公会议决议");
                                }
                                filePath.setToString(json.toString());
                                //将文本解析后得到的数据存到filepath的tostring路径中
                            }catch (Exception e4){
                                log.error(e4.getMessage());
                            }

                            filePathMapper.updateByPrimaryKeySelective(filePath);
                        }
                    } else if (filePath.getTypeCode().equals("3000")) {
                        set.add("3000");
//                        checkstrTemp(strTemp, filePath);
                        if (strTemp.equals(".pdf")) {
                            try{
                                List<String> imageList = PdfToImage.pdfToImagePath(filePath.getPath());
                                JSONObject json = OCR.checkOne(imageList.get(0));
                                Object listWords = json.get("words_result");

                                if(listWords.toString().indexOf("2015")!=-1||listWords.toString().indexOf("2016")!=-1){
                                    e.setAuditOpinion(e.getAuditOpinion() + "【申报单位诚信承诺书】诚信承诺书填写年份不对，请填写当年年份");
                                }
                                filePath.setToString(json.toString());
                                //将文本解析后得到的数据存到filepath的tostring路径中
                            }catch (Exception e5){

                            }
                            filePathMapper.updateByPrimaryKeySelective(filePath);
                        } else if (strTemp.equals(".jpg") || strTemp.equals(".png")) {
                            try {
                                JSONObject json = OCR.checkOne(filePath.getPath());
                                filePath.setToString(json.toString());
                                //将文本解析后得到的数据存到filepath的tostring路径中
                            }catch (Exception e6){

                            }
                            filePathMapper.updateByPrimaryKeySelective(filePath);
                        }
                    } else if (filePath.getTypeCode().equals("4000")) {
                        set.add("4000");
                        if (strTemp.equals(".pdf")) {
                            try {
                                List<String> imageList = PdfToImage.pdfToImagePath(filePath.getPath());
                                JSONObject json = OCR.checkOne(imageList.get(0));
                                filePath.setToString(json.toString());
                                //将文本解析后得到的数据存到filepath的tostring路径中
                            }catch (Exception e7){

                            }
                            filePathMapper.updateByPrimaryKeySelective(filePath);
                        } else if (strTemp.equals(".jpg") || strTemp.equals(".png")) {
                            try{
                                JSONObject json = OCR.checkOne(filePath.getPath());
                                filePath.setToString(json.toString());
                                //将文本解析后得到的数据存到filepath的tostring路径中
                            }catch (Exception e8){

                            }
                            filePathMapper.updateByPrimaryKeySelective(filePath);
                        }
                    }
                }
                if (set.size() < 4) {
                    e.setAuditOpinion(e.getAuditOpinion() + "【附件文件缺失】前4项文件都是必须上传的");
                }
                projectdetailMapper.updateByPrimaryKeySelective(e);
            }
        });


        return ServerResponse.createBySuccessMessage("查看数据库");
    }



//    //验证后缀名
//    public void checkstrTemp(String strTemp, FilePath filePath) {
//        if (strTemp.equals(".pdf")) {
//            List<String> imageList = PdfToImage.pdfToImagePath(filePath.getPath());
//            JSONObject json = OCR.checkOne(imageList.get(0));
//            filePath.setToString(json.toString());
//            //将文本解析后得到的数据存到filepath的tostring路径中
//            filePathMapper.updateByPrimaryKeySelective(filePath);
//        } else if (strTemp.equals(".jpg") || strTemp.equals(".png")) {
//            JSONObject json = OCR.checkOne(filePath.getPath());
//            filePath.setToString(json.toString());
//            //将文本解析后得到的数据存到filepath的tostring路径中
//            filePathMapper.updateByPrimaryKeySelective(filePath);
//        }
//    }

    public String check() {
        List<Projectdetail> listProjectdetail2 = projectdetailMapper.listProjectdetail();

        listProjectdetail2.forEach(e -> {
            List<FilePath> listFilePath = filePathMapper.list(Integer.parseInt(e.getSn()));
            if (listFilePath.size() != 0) {
                Set<String> set = new HashSet<>();
                for (FilePath filePath : listFilePath) {
                    //OCR 判断第一文件
                    if (filePath.getTypeCode().equals("1000")) {
                        set.add("1000");
                        //如果是pdf则转图片
                        String strTemp = filePath.getName().substring(filePath.getName().lastIndexOf("."));
                        if (strTemp.equals(".pdf")) {
                            //将pdf文件转文图片
                            List<String> imageList = PdfToImage.pdfToImagePath(filePath.getPath());
                            ;
                            JSONObject json = OCR.checkOne(imageList.get(0));
//                            if(json.toString().length()<500){
//                                e.setAuditOpinion(e.getAuditOpinion()+"【优惠明细表或辅助账汇总表】内容不够详细，建议直接从税务申报系统中直接导出");
//                            }
                        }
                        //OCR判断第二个文件
                    } else if (filePath.getTypeCode().equals("2000")) {
                        set.add("2000");
                        String strTemp = filePath.getName().substring(filePath.getName().lastIndexOf("."));

                        if (strTemp.equals(".pdf")) {
                            //将pdf文件转文图片
                            List<String> imageList = PdfToImage.pdfToImagePath(filePath.getPath());
//                            JSONObject json = OCR.checkOne(imageList.get(0));
//                            //todo 第二个表判断还没做完
//                            if(json.toString().indexOf("总经理办公室决议")!=-1&&json.toString().indexOf("公司董事会决议")!=-1){
//                                e.setAuditOpinion(e.getAuditOpinion()+"【立项决议书】立项决议书应明确到底是董事会决议还是总经理办公会议决议");
//                            }
//                        Iterator<String> iterator = imageList.iterator();
//                        while (iterator.hasNext()){
//                            //生成的文件路径
//                            System.out.println(iterator.next());
//                        }
                        }
                    } else if (filePath.getTypeCode().equals("3000")) {
                        set.add("3000");
                        String strTemp = filePath.getName().substring(filePath.getName().lastIndexOf("."));

                        if (strTemp.equals(".pdf")) {
                            //将pdf文件转文图片
                            List<String> imageList = PdfToImage.pdfToImagePath(filePath.getPath());
                        }
                    } else if (filePath.getTypeCode().equals("4000")) {
                        set.add("4000");
//                        String strTemp = filePath.getName().substring(filePath.getName().lastIndexOf("."));
//
//                        if(strTemp.equals(".pdf")) {
//                            //将pdf文件转文图片
//                            List<String> imageList = PdfToImage.pdfToImagePath(filePath.getPath());
//                        }
                    }
                }
//                if(set.size()<4){
//                    e.setAuditOpinion(e.getAuditOpinion()+"【附件文件缺失】前4项文件都是必须上传的");
//                }
//                projectdetailMapper.updateByPrimaryKeySelective(e);
            }

//            listFilePath.size()
        });
        return null;
    }






    // 登录

    private void login() throws ClientProtocolException, IOException {
        String urlPre="http://120.26.211.21:10061/Login/Index?isLogin="+Math.random();
        HttpGet get = new HttpGet(urlPre);
        HttpResponse responsePre = _client.execute(get);
        ResponseHandler<String> rhPre = new BasicResponseHandler();
        @SuppressWarnings("unused")
        String htmlPre = rhPre.handleResponse(responsePre);


        //上面是登录前的前置操作

        String url = "http://120.26.211.21:10061/Login/CheckLogin";
        HttpPost request = new HttpPost(url);
        List<NameValuePair> params = new ArrayList<NameValuePair>();
        params.add(new BasicNameValuePair("Account", "zhouyichun"));
        params.add(new BasicNameValuePair("Password", "6001218a918da7598f55b0d77abdd8ae"));
        params.add(new BasicNameValuePair("VerifyCode", ""));

        request.setEntity(new UrlEncodedFormEntity(params, "UTF-8"));

        HttpResponse response = _client.execute(request);
        ResponseHandler<String> rh = new BasicResponseHandler();
        @SuppressWarnings("unused")
        String html = rh.handleResponse(response);

        System.out.println(html);
    }

//    @Override
//    public ServerResponse<String> getAll() {
//
//        try {
//            init();
//            login();
//
////            /CMS/CXFWQ/XMSB/XMSB_ProjectModifyRecord/FormalCheckPageJsonList?EnterpriseName=&Tax1=&Tax2=&ProjectName=&Yysr1=&Yysr2=&TechnicalField=&Years=2017&ProjectNum=&PStatus=&nodeId=6&_search=false&nd=1544578232144&rows=20&page=1&sidx=submited+desc%2C+notcheck+desc%2Csortcode++&sord=asc
//
//            String dateTime=new Date().getTime()+"";//1544509492808
//            System.out.println("当前的时间戳："+dateTime);
//            String url = "http://fwpt.yc.c.c/CMS/CXFWQ/XMSB/XMSB_ProjectModifyRecord/FormalCheckProjectsPageJsonList?ProjectName&Xmzys1&Xmzys2&Zczj1&Zczj2&EnterpriseName&TechnicalField&Zxzj1&Zxzj2&Xmdnkf1&Xmdnkf2&Years=2017&ProjectNum&PStatus&nodeId=6&_search=false&nd="+dateTime+"&rows=3000&page=1&sidx=ranksort%2Csort%2CEnterpriseId+desc%2Csortcode%2Ccreatetime+desc%2C+sn+desc%2Cwid+desc%2Cshyj+&sord=desc";
//            HttpPost request = new HttpPost(url);
//            request.setHeader("Content-Type","application/json");
//            //org.apache.http.cookie.Cookie cookie =_cookies.getCookies().get(0);
//
//
//            HttpResponse response = _client.execute(request);
//            ResponseHandler<String> rh = new BasicResponseHandler();
//            @SuppressWarnings("unused")
//            String html = rh.handleResponse(response);
//            // 得到json 数据
//            log.info("response:{}",response.toString());
//            log.info("html:{}",html);
//            JsonParser parser = new JsonParser();
//            JsonObject allObject = (JsonObject) parser.parse(html);
//
//
//            log.info("json解析:",allObject.toString());
//            System.out.println(html);
//        } catch (Exception e) {
//            return ServerResponse.createByErrorMessage("发生了错误"+e.getMessage());
//        }
//    return ServerResponse.createBySuccessMessage("成功了");
//    }



    @Override
    public ServerResponse<String> getAll() {

        try {
            String dateTime=new Date().getTime()+"";//1544509492808
            System.out.println("当前的时间戳："+dateTime);
            String url = "http://fwpt.yc.c.c/CMS/CXFWQ/XMSB/XMSB_ProjectModifyRecord/FormalCheckProjectsPageJsonList?ProjectName&Xmzys1&Xmzys2&Zczj1&Zczj2&EnterpriseName&TechnicalField&Zxzj1&Zxzj2&Xmdnkf1&Xmdnkf2&Years=2017&ProjectNum&PStatus&nodeId=6&_search=false&nd="+dateTime+"&rows=3000&page=1&sidx=ranksort%2Csort%2CEnterpriseId+desc%2Csortcode%2Ccreatetime+desc%2C+sn+desc%2Cwid+desc%2Cshyj+&sord=desc";

            OkHttpClient httpClient = new OkHttpClient().newBuilder()
                    .build();
            Request request = new Request.Builder()
                    .url(url)
                    .header("Cookie", "UIthemeColor=%231e71b1; LoginUserKey="+PropertiesUtil.getProperty("kewei.userKey")+"; FrontLoginKey="+PropertiesUtil.getProperty("kewei.loginKey"))
                    .build();
            //创建/Call
            Call call = httpClient.newCall(request);
            //加入队列 异步操作
            call.enqueue(new Callback() {
                //请求错误回调方法
                @Override
                public void onFailure(Call call, IOException e) {
                    System.out.println("连接失败");
                    log.error("提交信息给科委失败:{}", e.getMessage());
                }

                @Override
                public void onResponse(Call call, Response response) throws IOException {
                    if (response.code() == 200) {

                        JsonParser parser = new JsonParser();
                        JsonObject allObject =  parser.parse(response.body().string()).getAsJsonObject();
                        log.info("allObject:{}",allObject.toString());
                        JsonArray array = allObject.getAsJsonArray("rows");

                        for (int i=0;i<array.size();i++){
                            AuditTempData atd = new AuditTempData();
                            atd.setId(array.get(i).getAsJsonObject().get("id").getAsString());
                            atd.setSn(array.get(i).getAsJsonObject().get("sn").isJsonNull()?"":array.get(i).getAsJsonObject().get("sn").getAsString());
                            atd.setEnterpriseid(array.get(i).getAsJsonObject().get("enterpriseid").isJsonNull()?"":array.get(i).getAsJsonObject().get("enterpriseid").getAsString());
                            //
                            atd.setEnterprisename(array.get(i).getAsJsonObject().get("enterprisename").isJsonNull()?"":array.get(i).getAsJsonObject().get("enterprisename").getAsString());
                            //projectname
                            atd.setProjectname(array.get(i).getAsJsonObject().get("projectname").isJsonNull()?"":array.get(i).getAsJsonObject().get("projectname").getAsString());
                            //projectid
                            atd.setProjectid(array.get(i).getAsJsonObject().get("projectid").isJsonNull()?"":array.get(i).getAsJsonObject().get("projectid").getAsString());
                            //technicalfield
                            atd.setTechnicalfield(array.get(i).getAsJsonObject().get("technicalfield").isJsonNull()?"":array.get(i).getAsJsonObject().get("technicalfield").getAsString());
                            //zjpdjg
                            atd.setZjpdjg(array.get(i).getAsJsonObject().get("zjpdjg").isJsonNull()?"":array.get(i).getAsJsonObject().get("zjpdjg").getAsString());
                            atd.setCreateTime(new Date());
                            AuditTempData auditTempData =auditTempDataMapper.selectByPrimaryKey(atd.getId());
                            if(auditTempData==null){
                                int result = auditTempDataMapper.insertSelective(atd);
                            }
                        }
                    }
                }
            });
        } catch (Exception e) {
            return ServerResponse.createByErrorMessage("发生了错误"+e.getMessage());
        }
        return ServerResponse.createBySuccessMessage("成功了");
    }


    @Override
    public ServerResponse<List<AuditTempData>> listAll(String realname, String project) {

        List<AuditTempData> list = auditTempDataMapper.listAll(realname, project);
        if (list != null) {
            return ServerResponse.createBySuccess(list, "查询成功");
        } else {
            return ServerResponse.createByErrorMessage("查询失败");
        }
    }

    @Override
    public ServerResponse<String> delectById(String id) {
       int result = auditTempDataMapper.deleteByPrimaryKey(id);
        if(result>0){
            return ServerResponse.createBySuccessMessage("删除成功");
        }
        return ServerResponse.createByErrorMessage("删除失败");
    }
}


