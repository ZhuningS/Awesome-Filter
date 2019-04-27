package com.duruo.service;

import com.duruo.common.ServerResponse;
import com.duruo.po.PersonalInformationCollection;

/**
 * Created by @Author tachai
 * date 2018/7/27 14:56
 *
 * @Email 1206966083@qq.com
 */
public interface IWebFormService {
    ServerResponse<String> getPersionCollection(String weChatId, String matterName, PersonalInformationCollection personal);

}
