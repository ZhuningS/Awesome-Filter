package com.duruo.service;

import com.duruo.common.ServerResponse;

/**
 * Created by @Author tachai
 * date 2018/7/19 19:34
 *
 * @Email 1206966083@qq.com
 */
public interface IReturnWeiXinService {
    ServerResponse<String> getWeChatId(String weChatId, String matterName);
    ServerResponse<String> sentPublicPlace(String weChatId, String matterName);
    ServerResponse<String> sentOtherWorkingHoursApply(String weChatId, String matterName);
    ServerResponse<String> sentElectronicDigitalApply(String weChatId, String matterId);
    ServerResponse<String> sentTZSB1(String weChatId,String matterId);
    ServerResponse<String> sentTZSB2(String weChatId,String matterId);
    ServerResponse<String> recordRegistrationOfMaigrantWorkers(String weChatId,String matterId);
}
