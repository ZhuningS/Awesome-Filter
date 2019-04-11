package com.duruo.controller;

import com.duruo.common.MatterCode;
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
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


import java.util.Date;
import java.util.Map;

/**
 * Created by @Author tachai
 * date 2018/7/4 20:11
 *
 * @Email 1206966083@qq.com
 */

@Controller
@RequestMapping("/wechat/")
public class ReturnWeiXin {
    @Autowired
    private EvidenceFilesMapper evidenceFilesMapper;
    @Autowired
    private IReturnWeiXinService returnWeiXinService;


    //酒类文件
    @PostMapping("getWeChatIdLiquor.do")
    @ResponseBody
    public ServerResponse<String> getWeChatId(String weChatId, String matterName) {
        return returnWeiXinService.getWeChatId(weChatId,matterName);
    }


    /**
     * 接收微信传过来的卫生许可证的信息
     *
     * @param weChatId
     * @return
     */
    @PostMapping("sentPublicPlace.do")
    @ResponseBody
    public ServerResponse<String> sentPublicPlace(String weChatId, String matterName) {
        return returnWeiXinService.sentPublicPlace(weChatId,matterName);
    }


    /**
     * 网页接收上海市企业实行不定时工作制和综合计算工时工作制申请表信息
     *
     * @param weChatId
     * @return
     */
    @PostMapping("sentOtherWorkingHoursApply.do")
    @ResponseBody
    public ServerResponse<String> sentOtherWorkingHoursApply(String weChatId, String matterName) {
        return returnWeiXinService.sentOtherWorkingHoursApply(weChatId,matterName);
    }


    /**
     * 微信传上海市法人一证通申请表信息
     */
    @PostMapping("sentElectronicDigitalApply.do")
    @ResponseBody
    public ServerResponse<String> sentElectronicDigitalApply(String weChatId, String matterId) {
        return returnWeiXinService.sentElectronicDigitalApply(weChatId,matterId);
    }


    /**
     * 生成微信特种设备（按台套）
     * @param weChatId
     * @param matterId
     * @return
     */
    @PostMapping("sentTZSB1.do")
    @ResponseBody
    public ServerResponse<String> sentTZSB1(String weChatId,String matterId){
        return returnWeiXinService.sentTZSB1(weChatId,matterId);
    }


    /**
     * 生成微信特种设备（按单位）
     * @param weChatId
     * @param matterId
     * @return
     */
    @PostMapping("sentTZSB2.do")
    @ResponseBody
    public ServerResponse<String> sentTZSB2(String weChatId,String matterId){
        return returnWeiXinService.sentTZSB2(weChatId,matterId);
    }

    /**
     * 生成外来从业人员用工备案登记
     * @param weChatId
     * @param matterId
     * @return
     */
    @PostMapping("wlcyryygbadj.do")
    @ResponseBody
    public ServerResponse<String> recordRegistrationOfMaigrantWorkers(String weChatId,String matterId){
        return returnWeiXinService.recordRegistrationOfMaigrantWorkers(weChatId,matterId);
    }



    /**
     * 公共接口接收微信Id去查对话数据  无效代码
     * @param weChatId
     * @param matterName
     * @param type
     * @param matterId
     * @param deptId
     * @param deptName
     * @return
     */
    @PostMapping("sentDuihuaData.do")
    @ResponseBody
    public ServerResponse<String> sentData(String weChatId,String matterName,String type,String matterId,String deptId,String deptName) {
        if (null != weChatId) {
            String res = WeChatParseJson.checkNotNull(weChatId.toString(),"数字证书流程","餐饮流程","食品销售流程");

            JsonParser parser = new JsonParser();//创建json解析器

            if (res.length()>40) {
                JsonObject jsonObject = (JsonObject) parser.parse(res);

                JsonObject jsonObject1 = WeChatParseJson.parseWeChatJson(jsonObject);
                // 这里要替换成公共卫生许可证
                Map<String, String> map = WeChatParseJson.liquorSigle(jsonObject1);

                String fileName = weChatId + "-" + matterId + "-" + matterName + "-" + type;
                ToWorld.createWord(fileName, MatterCode.ELECTRONIC_DIGITAL, map);

                // 要把数据插入到数据库中

                EvidenceFiles evidenceFile = new EvidenceFiles();
                //保存到数据库
                //todo 这里的部门id要换
                evidenceFile.setDeptId(Integer.parseInt(deptId));
                evidenceFile.setMatterId(Integer.parseInt(matterId));
                // MsgId变成weChatId要放传过来的值
                evidenceFile.setMsgId(weChatId);
                //存路径
                String path = PropertiesUtil.getProperty("outWord.Path") + fileName + ".doc";

                evidenceFile.setPath(path);
                Date date = new Date();
                evidenceFile.setCreateTime(date);
                evidenceFile.setDeptName(deptName);
                evidenceFile.setMatterName(matterName);
                evidenceFile.setType(type);

                evidenceFilesMapper.insert(evidenceFile);
                return ServerResponse.createBySuccessMessage("接收数据成功，已生成Word");
            }else {
                return ServerResponse.createByErrorMessage("对话返回的值为空");
            }
        }
        return ServerResponse.createByErrorMessage("数据为空，接收数据失败");
    }
}
