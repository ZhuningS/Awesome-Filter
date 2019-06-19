package com.duruo.controller;

import com.duruo.dao.EvidenceFilesMapper;
import com.duruo.dao.RetailLicenseMapper;
import com.duruo.dto.BusinessLicence;
import com.duruo.po.EvidenceFiles;
import com.duruo.po.RetailLicense;
import com.duruo.util.*;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.jcraft.jsch.SftpException;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.Date;
import java.util.Iterator;

/**
 * Created by @Author tachai
 * date 2018/6/23 19:17
 *
 * @Email 1206966083@qq.com
 */
@Slf4j
@Controller
@RequestMapping("/uploadFile/")
public class UploadFileController {
    @Autowired
    private EvidenceFilesMapper evidenceFilesMapper;
    @Autowired
    private RetailLicenseMapper retailLicenseMapper;


    //保存文件
    private boolean saveFile(MultipartFile file, String MsgId) {
        //判断文件是否为空
        if (!file.isEmpty()) {
            try {
                File filepath = new File(PropertiesUtil.getProperty("file.Path"));
                if (!filepath.exists())
                    filepath.mkdirs();
                //文件保存路径
                String savePath = PropertiesUtil.getProperty("evidenceFiles.Path") + MsgId + "_" + file.getOriginalFilename();
                System.out.println("文件名" + file.getOriginalFilename());
                //上传
                file.transferTo(new File(savePath));
            } catch (Exception e) {
                e.printStackTrace();
            }

        }
        return false;
    }


    //文件上传
    //@Param("files")MultipartFile[] files,
    @RequestMapping("springUpload.do")
//    @ResponseBody
    public String springUpload(HttpSession session, HttpServletRequest request, String deptId, String MsgId, String matterId, String deptName, String matterName, String flowName) throws IllegalStateException, IOException, SftpException {

//         clearTask(weChatId,taskName3);
//            clearSession(weChatId);


        if (!StringUtils.isBlank(MsgId)) {
            Date date = new Date();
            try {
                //插入文件list信息
                RetailLicense license = new RetailLicense();
                license.setCreateTime(date);
                license.setDeptId(Integer.parseInt(deptId));
                // MsgId（微信id）为
                license.setMsgId(MsgId);
                license.setMatterId(Integer.parseInt(matterId));
                license.setMatterName(matterName);
                license.setStatus("未审核");
                int result = retailLicenseMapper.insert(license);
                if (result > 0) {
                    log.info("事项插入成功：{}", MsgId);
                } else {
                    log.error("事项插入失败：{}", MsgId);
                }
            } catch (Exception e) {
//                retailLicenseMapper.deleteByPrimaryKey(MsgId+matterId);
//                evidenceFilesMapper.deleteByMsgId(MsgId);
//                return ServerResponse.createByErrorMessage("该用户已上传过该事项文件，正在清空，请再上传一次");
            }


            //清除任务
            String res = WeChatParseJson.clearTask(MsgId, flowName);

            //将当前上下文初始化给  CommonsMutipartResolver （多部分解析器）
            CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver(
                    request.getSession().getServletContext());
            //检查form中是否有enctype="multipart/form-data"
            if (multipartResolver.isMultipart(request)) {
                //将request变成多部分request
                MultipartHttpServletRequest multiRequest = (MultipartHttpServletRequest) request;
                //获取multiRequest 中所有的文件名
                Iterator iter = multiRequest.getFileNames();

                EvidenceFiles evidenceFile = new EvidenceFiles();
                while (iter.hasNext()) {
                    //一次遍历所有文件
                    MultipartFile file = multiRequest.getFile(iter.next().toString());
                    //防止插空的数据
                    if (!StringUtils.isBlank(file.getOriginalFilename())) {
                        String fileName = MsgId + "_" + matterId + "_" + file.getName() + "_" + file.getOriginalFilename();
                        String path = PropertiesUtil.getProperty("evidenceFiles.Path") + fileName;
                        log.info("文件名:{}", file.getOriginalFilename());
                        log.info("属性", file.getName());

                        System.out.println(file.getName());

                        //保存到数据库
                        evidenceFile.setDeptId(Integer.parseInt(deptId));
                        evidenceFile.setMatterId(Integer.parseInt(matterId));
                        evidenceFile.setMsgId(MsgId);
                        evidenceFile.setPath(path);
                        Date fileDate = new Date();
                        evidenceFile.setCreateTime(fileDate);
                        evidenceFile.setDeptName(deptName);
                        evidenceFile.setMatterName(matterName);
                        evidenceFile.setType(file.getName());

                        RetailLicense license = retailLicenseMapper.selectByTimeAndMsgId(MsgId, date);
                        evidenceFile.setLicenseId(license.getId());
                        //判断该文件是否存在，存在则不通过.不覆盖上传
//                    EvidenceFiles evidence = evidenceFilesMapper.selectByTypeAndMsgId(file.getName(), MsgId);
//                    if (evidence != null) {
//                        //该文件已存在
//                        return ServerResponse.createByErrorMessage("该文件已存在");
//                    } else {
//                        evidenceFilesMapper.insert(evidenceFile);
//                        //上传
//                        file.transferTo(new File(path));
//                    }

                        //覆盖上传
                        evidenceFilesMapper.insert(evidenceFile);
                        //上传到本地服务器
//                        file.transferTo(new File(path));
                        // 上传到文件服务器
                        SFTPUtil.uploadFile(PropertiesUtil.getProperty("evidenceFiles.Path"), fileName, file.getInputStream());

                    }
                }
            }
            return "redirect:/success.html";

        } else {
            return "redirect:/404.html";
        }

    }


    /**
     * 无用代码
     *
     * @param response
     * @param licenseId
     */
    @RequestMapping("downloadLiquor.do")
    public void getFile(HttpServletResponse response, Integer licenseId) {
        response.setHeader("content-type", "application/octet-stream");
        response.setContentType("application/octet-stream");


        EvidenceFiles evidenceFile = null;
        try {
//            type = URLDecoder.decode(type, "utf-8");
//            msgId = URLDecoder.decode(msgId, "utf-8");
            String type = "酒类商品零售许申请表";
            evidenceFile = evidenceFilesMapper.selectByTypeAndLicenseId(type, licenseId);
            //获得文件名
            String[] fileNames = evidenceFile.getPath().split("_");
            //如果使用中文会丢失名字只留下后缀名
            response.setHeader("Content-Disposition", "attachment;filename=" + new String(fileNames[fileNames.length - 1].getBytes(), "ISO-8859-1"));
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }

        //酒类经营许可证不为空
        //证明材料不能为空
        if (null != evidenceFile) {
            String filePath = evidenceFile.getPath();

            UpAndDownload.downloadFileByPath(response, filePath);

            System.out.println("成功下载");
        }
    }


    @RequestMapping("aiUpload.do")
    public String aiUpload(HttpSession session, HttpServletRequest request, String deptId, String MsgId, String matterId, String deptName, String matterName, String flowName) throws IllegalStateException, IOException, SftpException {
        if (!StringUtils.isBlank(MsgId)) {
            Date date = new Date();
            RetailLicense newlicense = new RetailLicense();
            try {
                //插入文件list信息
                newlicense.setCreateTime(date);
                newlicense.setDeptId(Integer.parseInt(deptId));
                // MsgId（微信id）为
                newlicense.setMsgId(MsgId);
                newlicense.setMatterId(Integer.parseInt(matterId));
                newlicense.setMatterName(matterName);
                newlicense.setStatus("未审核");
                newlicense.setStatus("未审核");
                int result = retailLicenseMapper.insert(newlicense);
                if (result > 0) {
                    log.info("事项插入成功：{}", MsgId);
                } else {
                    log.error("事项插入失败：{}", MsgId);
                }

            } catch (Exception e) {
//                retailLicenseMapper.deleteByPrimaryKey(MsgId+matterId);
//                evidenceFilesMapper.deleteByMsgId(MsgId);
//                return ServerResponse.createByErrorMessage("该用户已上传过该事项文件，正在清空，请再上传一次");
            }

            BusinessLicence businessLicence = new BusinessLicence();

            //清除任务
            String res = WeChatParseJson.clearTask(MsgId, flowName);

            //将当前上下文初始化给  CommonsMutipartResolver （多部分解析器）
            CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver(
                    request.getSession().getServletContext());
            //检查form中是否有enctype="multipart/form-data"
            if (multipartResolver.isMultipart(request)) {
                //将request变成多部分request
                MultipartHttpServletRequest multiRequest = (MultipartHttpServletRequest) request;
                //获取multiRequest 中所有的文件名
                Iterator iter = multiRequest.getFileNames();

                EvidenceFiles evidenceFile = new EvidenceFiles();
                while (iter.hasNext()) {
                    //一次遍历所有文件
                    MultipartFile file = multiRequest.getFile(iter.next().toString());
                    //防止插空的数据
                    if (!StringUtils.isBlank(file.getOriginalFilename())) {
                        String fileName = MsgId + "_" + matterId + "_" + file.getName() + "_" + file.getOriginalFilename();
                        String path = PropertiesUtil.getProperty("evidenceFiles.Path") + fileName;

                        //文件名例子  wp_ss_20160212_0003.png
                        log.info("文件名:{}", file.getOriginalFilename());
                        log.info("属性", file.getName());

                        System.out.println(file.getName() + "---------" + file.getOriginalFilename());

                        RetailLicense license = retailLicenseMapper.selectByTimeAndMsgId(MsgId, date);

                        // 读取营业执照
                        if (file.getName().indexOf("营业执照") != -1) {
                            if (Contain.containImage(file.getOriginalFilename())) {
                                //todo 做扫描 ai预审
                                JSONObject jsonObject = OCR.checkBusinessLicense(file.getBytes());
                                JsonParser jsonParser = new JsonParser();
                                Object jsonObject1 = jsonObject.get("words_result");
                                JsonObject jsonArray = (JsonObject) jsonParser.parse(jsonObject1.toString());
                                businessLicence.setSocialCreditCode(com.duruo.util.StringUtils.trim(jsonArray.get("社会信用代码").getAsJsonObject().get("words").toString(), '"'));
                                businessLicence.setLegalPerson(com.duruo.util.StringUtils.trim(jsonArray.get("法人").getAsJsonObject().get("words").toString(), '"'));
                                businessLicence.setEstablishmentDate(com.duruo.util.StringUtils.trim(jsonArray.get("成立日期").getAsJsonObject().get("words").toString(), '"'));
                                businessLicence.setIdNumber(com.duruo.util.StringUtils.trim(jsonArray.get("证件编号").getAsJsonObject().get("words").toString(), '"'));
                                businessLicence.setAddress(com.duruo.util.StringUtils.trim(jsonArray.get("地址").getAsJsonObject().get("words").toString(), '"'));
                                businessLicence.setUnitName(com.duruo.util.StringUtils.trim(jsonArray.get("单位名称").getAsJsonObject().get("words").toString(), '"'));
                                businessLicence.setValidityPeriod(com.duruo.util.StringUtils.trim(jsonArray.get("有效期").getAsJsonObject().get("words").toString(), '"'));
                            }
                        }

                        // 读取申请表审核
                        if (file.getName().indexOf("申请表") != -1) {
                            //todo 做输入流 ai预审
                            // file.getInputStream();
                            String result = "";
                            if (file.getOriginalFilename().indexOf(".docx") != -1) {
                                result = ReadWorderUtil.docxCheck(file.getInputStream(), businessLicence);
                                if(!StringUtils.isBlank(result)){
                                    license.setOpinion("【申请表】:"+result);
                                    retailLicenseMapper.updateByPrimaryKeySelective(license);
                                }
                            } else if (file.getOriginalFilename().indexOf(".doc") != -1) {
                                result = ReadWorderUtil.docCheck(file.getInputStream(), businessLicence);
                                if(!StringUtils.isBlank(result)){
                                    license.setOpinion("【申请表】:"+result);
                                    retailLicenseMapper.updateByPrimaryKeySelective(license);
                                }
                            }

                        }

                        //保存到数据库
                        evidenceFile.setDeptId(Integer.parseInt(deptId));
                        evidenceFile.setMatterId(Integer.parseInt(matterId));
                        evidenceFile.setMsgId(MsgId);
                        evidenceFile.setPath(path);
                        Date fileDate = new Date();
                        evidenceFile.setCreateTime(fileDate);
                        evidenceFile.setDeptName(deptName);
                        evidenceFile.setMatterName(matterName);
                        evidenceFile.setType(file.getName());


                        evidenceFile.setLicenseId(license.getId());

                        //覆盖上传
                        evidenceFilesMapper.insert(evidenceFile);

                        // 上传到文件服务器
                        SFTPUtil.uploadFile(PropertiesUtil.getProperty("evidenceFiles.Path"),fileName,file.getInputStream());
                    }
                }
            }
            return "redirect:/success.html";
        } else {
            return "redirect:/404.html";
        }
    }
}
