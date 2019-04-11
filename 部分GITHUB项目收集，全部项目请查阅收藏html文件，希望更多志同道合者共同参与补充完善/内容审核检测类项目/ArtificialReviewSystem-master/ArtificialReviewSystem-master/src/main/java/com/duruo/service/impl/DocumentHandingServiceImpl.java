package com.duruo.service.impl;

import com.duruo.common.ServerResponse;
import com.duruo.dao.RetailLicenseMapper;
import com.duruo.po.RetailLicense;
import com.duruo.service.IDocumentHandingService;
import com.duruo.util.HttpUtil;
import com.duruo.util.IdUtils;
import com.duruo.util.PropertiesUtil;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by @Author tachai
 * date 2018/7/18 9:25
 *
 * @Email 1206966083@qq.com
 */
@Service("iDocumentHandingService")
public class DocumentHandingServiceImpl implements IDocumentHandingService{
    @Autowired
    private RetailLicenseMapper retailLicenseMapper;

    @Override
    public ServerResponse<String> updateOpinion(Integer licenseId, String opinion, String result,String userName) {
        RetailLicense retailLicense = retailLicenseMapper.selectByPrimaryKey(licenseId);
        if(retailLicense.getStatus().indexOf("已审核")<=-1){
            retailLicense.setStatus("已审核"+"_"+result);
            retailLicense.setCreateTime(new Date());
            retailLicense.setUserName(userName);
            retailLicense.setOpinion(opinion);
            retailLicenseMapper.updateByPrimaryKeySelective(retailLicense);

            //             返回结果给微信客户端
            String url= PropertiesUtil.getProperty("return.weixin");
            Map<String,String> map= new HashMap<>();
            map.put("MsgId", IdUtils.getId(retailLicense.getMsgId()));
            map.put("WeChatId",retailLicense.getMsgId());
//            if("false".equals(result)){
//                map.put("auditresult",result);
//            }else {
//
//            }
            map.put("auditresult",result);
            System.out.println(result);
            map.put("auditopinion",opinion);
            String data=new Gson().toJson(map);
            //得到返回的数据
//            String res = HttpUtil.okhttp(url,data);
             HttpUtil.okhttp(url,data);

            System.out.println("+++++++++++"+data);

//            if(org.apache.commons.lang.StringUtils.isBlank(res)){
//                return ServerResponse.createByErrorMessage("处理失败");
//            }

            return ServerResponse.createBySuccessMessage("审核成功");
        }else {
            return ServerResponse.createByErrorMessage("该数据已被另外一位同事审核");
        }
    }
}
