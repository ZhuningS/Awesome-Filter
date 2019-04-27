package com.duruo.service.impl;

import com.duruo.common.MatterCode;
import com.duruo.common.ResponseCode;
import com.duruo.common.ServerResponse;
import com.duruo.dao.EvidenceFilesMapper;
import com.duruo.po.EvidenceFiles;
import com.duruo.service.IReturnWeiXinService;
import com.duruo.util.PropertiesUtil;
import com.duruo.util.ToWorld;
import com.duruo.util.WeChatParseJson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Map;

/**
 * Created by @Author tachai
 * date 2018/7/19 19:39
 *
 * @Email 1206966083@qq.com
 */
@Service("iReturnWeiXinService")
public class ReturnWeiXinServiceImpl implements IReturnWeiXinService {
    @Autowired
    private EvidenceFilesMapper evidenceFilesMapper;


    //酒类文件
    @Override
    public ServerResponse<String> getWeChatId(String weChatId, String matterName) {
        if (!StringUtils.isBlank(weChatId)) {
            //通过weChatId得到数据
            //清除任务
            String res = WeChatParseJson.checkNotNull(weChatId, "酒类商品零售许可证", "餐饮流程", "食品销售流程");
            JsonParser parser = new JsonParser();//创建json解析器
            if (res.length() > 40) {
                JsonObject jsonObject = (JsonObject) parser.parse(res);

                JsonObject jsonObject1 = WeChatParseJson.parseWeChatJson(jsonObject);
                // String str = WeChatParseJson.liquor(jsonObject1,0);
                Map<String, String> map = WeChatParseJson.liquorSigle(jsonObject1);

                String fileName = weChatId + "-5633-" + "酒类商品零售许可证-" + "酒类商品零售许申请表";

                // ToWorld.createLiquorWord(fileName,mapLiquor);
                System.out.println(map.toString());
                ToWorld.createWord(fileName, MatterCode.APPLY_LIQUOR, map);
                // 要把数据插入到数据库中

                EvidenceFiles evidenceFile = new EvidenceFiles();
                //保存到数据库
                //todo 这里的部门id要换
                evidenceFile.setDeptId(Integer.parseInt("25"));
                evidenceFile.setMatterId(Integer.parseInt("5633"));
                // MsgId变成weChatId要放传过来的值
                evidenceFile.setMsgId(weChatId);
                //存路径
                String path = PropertiesUtil.getProperty("outWord.Path") + fileName + ".doc";

                evidenceFile.setPath(path);
                Date date = new Date();
                evidenceFile.setCreateTime(date);
                evidenceFile.setDeptName("徐汇区商务委员会（酒类专卖管理局）");
                evidenceFile.setMatterName("酒类商品零售许可证");
                evidenceFile.setType("酒类商品零售许可申请表");
                //判断该文件是否存在，存在则不通过

                evidenceFilesMapper.insert(evidenceFile);
                return ServerResponse.createBySuccessMessage("接收数据成功，已生成Word");
            } else {
                return ServerResponse.createByErrorMessage("得到的数据为空");
            }
        } else {
            return ServerResponse.createByErrorCodeMessage(ResponseCode.ILLEGAL_ARGUMENT.getCode(), ResponseCode.ILLEGAL_ARGUMENT.getDesc());
        }

    }

    //公共卫生
    @Override
    public ServerResponse<String> sentPublicPlace(String weChatId, String matterName) {
        if (null != weChatId) {
            String res = WeChatParseJson.checkNotNull(weChatId.toString(), "公共卫生流程", "餐饮流程", "食品销售流程");
            JsonParser parser = new JsonParser();//创建json解析器
            if (res.length() > 40) {
                JsonObject jsonObject = (JsonObject) parser.parse(res);

                JsonObject jsonObject1 = WeChatParseJson.parseWeChatJson(jsonObject);
                // 这里要替换成公共卫生许可证
                Map<String, String> map = WeChatParseJson.publicHelth(jsonObject1);

                String fileName = weChatId + "-5356-" + "上海市公共场所卫生许可证-" + "上海市公共场所卫生许可证申请书";
                //生成word
                ToWorld.createWord(fileName, MatterCode.PUBLIC_PLACE_HEALTH_PERMIT, map);
                // 要把数据插入到数据库中

                EvidenceFiles evidenceFile = new EvidenceFiles();
                //保存到数据库
                //todo 这里的部门id要换
                evidenceFile.setDeptId(Integer.parseInt("25"));
                evidenceFile.setMatterId(Integer.parseInt("5356"));
                evidenceFile.setMsgId(weChatId.toString());
                String path = PropertiesUtil.getProperty("outWord.Path") + fileName + ".doc";

                evidenceFile.setPath(path);
                Date date = new Date();
                evidenceFile.setCreateTime(date);
                evidenceFile.setDeptName("徐汇区卫生和计划生育委员会");
                evidenceFile.setMatterName("上海市公共场所卫生许可证");
                evidenceFile.setType("上海市公共场所卫生许可证申请书");
                //判断该文件是否存在，存在则不通过

                evidenceFilesMapper.insert(evidenceFile);
                return ServerResponse.createBySuccessMessage("接收数据成功，已生成Word");
            } else {
                return ServerResponse.createByErrorMessage("对话传过来的值为空");
            }
        }
        return ServerResponse.createByErrorCodeMessage(ResponseCode.ILLEGAL_ARGUMENT.getCode(), ResponseCode.ILLEGAL_ARGUMENT.getDesc());
    }

    //企业实行其他工作时间
    @Override
    public ServerResponse<String> sentOtherWorkingHoursApply(String weChatId, String matterName) {
        if (null != weChatId) {
            //todo  还没写
            //通过weChatId得到数据
            String res = WeChatParseJson.checkNotNull(weChatId.toString(), "");
            JsonParser parser = new JsonParser();//创建json解析器

            if (res.length() > 40) {
                JsonObject jsonObject = (JsonObject) parser.parse(res);

                JsonObject jsonObject1 = WeChatParseJson.parseWeChatJson(jsonObject);
                Map<String, String> map = WeChatParseJson.liquorSigle(jsonObject1);

                String fileName = weChatId + "-5171-" + "准予企业实行其他工作时间制度决定书-" + "上海市企业实行不定时工作制和综合计算工时工作制申请表";

                ToWorld.createWord(fileName, MatterCode.OTHER_WORKING_HOURS_APPLY, map);
                // 要把数据插入到数据库中

                EvidenceFiles evidenceFile = new EvidenceFiles();
                //保存到数据库
                //todo 这里的部门id要换
                evidenceFile.setDeptId(Integer.parseInt("25"));
                evidenceFile.setMatterId(Integer.parseInt("5171"));
                evidenceFile.setMsgId(weChatId.toString());
                String path = PropertiesUtil.getProperty("outWord.Path") + fileName + ".doc";

                evidenceFile.setPath(path);
                Date date = new Date();
                evidenceFile.setCreateTime(date);
                evidenceFile.setDeptName("上海市徐汇区人力资源和社会保障局");
                evidenceFile.setMatterName("准予企业实行其他工作时间制度决定书");
                evidenceFile.setType("上海市企业实行不定时工作制和综合计算工时工作制申请表");
                //判断该文件是否存在，存在则不通过

                evidenceFilesMapper.insert(evidenceFile);
                return ServerResponse.createBySuccessMessage("接收数据成功，已生成Word");
            } else {
                return ServerResponse.createByErrorMessage("对话返回的数据为空");
            }
        }
        return ServerResponse.createByErrorCodeMessage(ResponseCode.ILLEGAL_ARGUMENT.getCode(), ResponseCode.ILLEGAL_ARGUMENT.getDesc());
    }

    //法人一证通
    @Override
    public ServerResponse<String> sentElectronicDigitalApply(String weChatId, String matterId) {
        if (null != weChatId) {
            String res = WeChatParseJson.checkNotNull(weChatId.toString(), "数字证书流程", "餐饮流程", "食品销售流程");
            System.out.println(res);
            JsonParser parser = new JsonParser();//创建json解析器
            if (res.length() > 40) {
                JsonObject jsonObject = (JsonObject) parser.parse(res);

                JsonObject jsonObject1 = WeChatParseJson.parseWeChatJson(jsonObject);
                Map<String, String> map = WeChatParseJson.electronicDigital(jsonObject1);

                String fileName = weChatId + "-6666-" + "一证通法人数字证书-" + "上海市法人一证通数字证书申请表";
                ToWorld.createWord(fileName, MatterCode.ELECTRONIC_DIGITAL, map);

                EvidenceFiles evidenceFile = new EvidenceFiles();
                //保存到数据库
                //todo 这里的部门id要换
                evidenceFile.setDeptId(Integer.parseInt("25"));
                evidenceFile.setMatterId(Integer.parseInt("6666"));
                evidenceFile.setMsgId(weChatId.toString());
                String path = PropertiesUtil.getProperty("outWord.Path") + fileName + ".doc";

                evidenceFile.setPath(path);
                Date date = new Date();
                evidenceFile.setCreateTime(date);
                evidenceFile.setDeptName("上海市数字证书认证中心");
                evidenceFile.setMatterName("上海市法人一证通数字证书");
                evidenceFile.setType("上海市法人一证通数字证书申请表");
                //判断该文件是否存在，存在则不通过
                evidenceFilesMapper.insert(evidenceFile);
                return ServerResponse.createBySuccessMessage("接收数据成功，已生成Word");
            } else {
                return ServerResponse.createByErrorMessage("对话返回的数据为空");
            }
        }
        return ServerResponse.createByErrorCodeMessage(ResponseCode.ILLEGAL_ARGUMENT.getCode(), ResponseCode.ILLEGAL_ARGUMENT.getDesc());    }

    //生成微信特种设备（按台套）
    @Override
    public ServerResponse<String> sentTZSB1(String weChatId, String matterId) {
        if (null != weChatId) {
            String res = WeChatParseJson.checkNotNull(weChatId.toString(), "特种设备流程", "餐饮流程", "食品销售流程");
            System.out.println(res);
            JsonParser parser = new JsonParser();//创建json解析器
            if (res.length() > 40) {
                JsonObject jsonObject = (JsonObject) parser.parse(res);

                JsonObject jsonObject1 = WeChatParseJson.parseWeChatJson(jsonObject);

                Map<String, String> map = WeChatParseJson.specialEquipment1(jsonObject1);

                String fileName = weChatId + "-5679-" + "-特种设备使用登记-" + "使用登记表";
                ToWorld.createWord(fileName, MatterCode.SPECIAL_EQUIPMENT1, map);

                EvidenceFiles evidenceFile = new EvidenceFiles();
                //保存到数据库
                //todo 这里的部门id要换
                evidenceFile.setDeptId(Integer.parseInt("25"));
                evidenceFile.setMatterId(Integer.parseInt("5679"));
                evidenceFile.setMsgId(weChatId.toString());
                String path = PropertiesUtil.getProperty("outWord.Path") + fileName + ".doc";

                evidenceFile.setPath(path);
                Date date = new Date();
                evidenceFile.setCreateTime(date);
                evidenceFile.setDeptName("徐汇区市场监督管理局");
                evidenceFile.setMatterName("特种设备使用登记");
                evidenceFile.setType("使用登记表");
                //判断该文件是否存在，存在则不通过
                evidenceFilesMapper.insert(evidenceFile);
                return ServerResponse.createBySuccessMessage("接收数据成功，已生成Word");
            } else {
                return ServerResponse.createByErrorMessage("对话返回的数据为空");
            }
        }
        return ServerResponse.createByErrorCodeMessage(ResponseCode.ILLEGAL_ARGUMENT.getCode(), ResponseCode.ILLEGAL_ARGUMENT.getDesc());
    }

    //生成微信特种设备（按单位）
    @Override
    public ServerResponse<String> sentTZSB2(String weChatId, String matterId) {
        if (null != weChatId) {
            String res = WeChatParseJson.checkNotNull(weChatId.toString(), "特种设备流程", "餐饮流程", "食品销售流程");
            System.out.println(res);
            JsonParser parser = new JsonParser();//创建json解析器
            if (res.length() > 40) {
                JsonObject jsonObject = (JsonObject) parser.parse(res);

                JsonObject jsonObject1 = WeChatParseJson.parseWeChatJson(jsonObject);

                Map<String, String> map = WeChatParseJson.specialEquipment2(jsonObject1);

                String fileName = weChatId + "-5679-" + "-特种设备使用登记-" + "使用登记表";
                ToWorld.createWord(fileName, MatterCode.SPECIAL_EQUIPMENT2, map);

                EvidenceFiles evidenceFile = new EvidenceFiles();
                //保存到数据库
                //todo 这里的部门id要换
                evidenceFile.setDeptId(Integer.parseInt("25"));
                evidenceFile.setMatterId(Integer.parseInt("5679"));
                evidenceFile.setMsgId(weChatId.toString());
                String path = PropertiesUtil.getProperty("outWord.Path") + fileName + ".doc";

                evidenceFile.setPath(path);
                Date date = new Date();
                evidenceFile.setCreateTime(date);
                evidenceFile.setDeptName("徐汇区市场监督管理局");
                evidenceFile.setMatterName("特种设备使用登记");
                evidenceFile.setType("使用登记表");
                //判断该文件是否存在，存在则不通过
                evidenceFilesMapper.insert(evidenceFile);
                return ServerResponse.createBySuccessMessage("接收数据成功，已生成Word");
            } else {
                return ServerResponse.createByErrorMessage("对话返回的数据为空");
            }
        }
        return ServerResponse.createByErrorCodeMessage(ResponseCode.ILLEGAL_ARGUMENT.getCode(), ResponseCode.ILLEGAL_ARGUMENT.getDesc());
    }

    //外来从业人员用工备案登记
    @Override
    public ServerResponse<String> recordRegistrationOfMaigrantWorkers(String weChatId, String matterId) {
        if (null != weChatId) {

            //这里要清除任务
            String res = WeChatParseJson.checkNotNull(weChatId.toString(), "特种设备流程", "餐饮流程", "食品销售流程");
            System.out.println(res);
            JsonParser parser = new JsonParser();//创建json解析器
            if (res.length() > 40) {
                JsonObject jsonObject = (JsonObject) parser.parse(res);

                JsonObject jsonObject1 = WeChatParseJson.parseWeChatJson(jsonObject);

                Map<String, Object> map = WeChatParseJson.recordRegistrationOfMaigrantWorkers(jsonObject1);

                String fileName = weChatId + "-5679-" + "-外来从业人员用工备案登记-" + "备案登记表";
                ToWorld.createWord1(fileName, MatterCode.RECORD_REGISTRATION_OF_MIGRANT_WORKERS, map);

                EvidenceFiles evidenceFile = new EvidenceFiles();
                //保存到数据库
                //todo 这里的部门id要换
                evidenceFile.setDeptId(Integer.parseInt("25"));
                //todo 这里的事项id要换
                evidenceFile.setMatterId(Integer.parseInt("9001"));
                evidenceFile.setMsgId(weChatId.toString());
                String path = PropertiesUtil.getProperty("outWord.Path") + fileName + ".doc";

                evidenceFile.setPath(path);
                Date date = new Date();
                evidenceFile.setCreateTime(date);
                evidenceFile.setDeptName("徐汇区人力资源和社会保障局");
                evidenceFile.setMatterName("外来从业人员用工备案登记");
                evidenceFile.setType("备案登记表");

                //判断该文件是否存在，存在则不通过
                evidenceFilesMapper.insert(evidenceFile);
                return ServerResponse.createBySuccessMessage("接收数据成功，已生成Word");
            } else {
                return ServerResponse.createByErrorMessage("对话返回的数据为空");
            }
        }
        return ServerResponse.createByErrorCodeMessage(ResponseCode.ILLEGAL_ARGUMENT.getCode(), ResponseCode.ILLEGAL_ARGUMENT.getDesc());
    }
}
