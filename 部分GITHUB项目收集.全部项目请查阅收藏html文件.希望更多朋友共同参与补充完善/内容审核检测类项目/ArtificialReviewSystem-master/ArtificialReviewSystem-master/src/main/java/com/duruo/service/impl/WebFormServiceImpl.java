package com.duruo.service.impl;

import com.duruo.common.MatterCode;
import com.duruo.common.ServerResponse;
import com.duruo.po.PersonalInformationCollection;
import com.duruo.service.IWebFormService;
import com.duruo.util.ToWorld;
import org.springframework.stereotype.Service;

import java.util.Hashtable;
import java.util.Map;

/**
 * Created by @Author tachai
 * date 2018/7/27 15:00
 *
 * @Email 1206966083@qq.com
 */
@Service("iWebFormService")
public class WebFormServiceImpl implements IWebFormService{

    @Override
    public ServerResponse<String> getPersionCollection(String weChatId, String matterName, PersonalInformationCollection personal) {
        Map<String,String> map = new Hashtable<>();

        map.put("unitName",personal.getUnitName());
        // 这里要改成社会保险登记码
        String[] insuranceCodes = personal.getInsuranceCode().split("");
        for(int i=1;i<insuranceCodes.length;i++){
            map.put("A"+i,insuranceCodes[i-1]);
        }
        map.put("persionName",personal.getPersionName());
        //身份证存放
        map.put("oldName",personal.getOldName());
        String[] idCards = personal.getIdCard().split("");
        for (int i= 11;i<idCards.length+11;i++){
            map.put(i+"",idCards[i-11]);
        }

        map.put("sex",personal.getSex());
        map.put("nation",personal.getNation());
        map.put("politicalOutlook",personal.getPoliticalOutlook());
        map.put("educationalLevel",personal.getEducationalLevel());
        //户籍地址
        String[] permanentAddresss = personal.getPermanentAddress().split("-");
        map.put("permanentAddress1",permanentAddresss[0]);
        map.put("permanentAddress2",permanentAddresss[1]);

        map.put("detailedAddress",personal.getDetailedAddress());
        map.put("householdRegistrationCategory",personal.getHouseholdRegistrationCategory());
        //本市居住地址
        String[] addresss = personal.getLocalAddress().split("-");
        for(int i=1;i<=addresss.length;i++){
            map.put("address"+i,addresss[i]);
        }
        map.put("linkTel",personal.getLinkTel());
        map.put("postalCode",personal.getPostalCode());
        map.put("residentialStreet",personal.getResidentialStreet());
        map.put("otherWaysContact",personal.getOtherWaysContact());

        ToWorld.createWord(matterName, MatterCode.PERSONAL_INFORMATION_COLLECTION,map);
        return ServerResponse.createBySuccess("生成成功");
    }
}
