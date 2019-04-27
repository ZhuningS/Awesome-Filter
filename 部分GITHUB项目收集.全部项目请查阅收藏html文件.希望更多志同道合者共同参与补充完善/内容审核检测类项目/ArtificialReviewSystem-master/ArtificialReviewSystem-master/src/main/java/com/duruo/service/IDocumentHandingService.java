package com.duruo.service;

import com.duruo.common.ServerResponse;

/**
 * Created by @Author tachai
 * date 2018/7/18 9:23
 *
 * @Email 1206966083@qq.com
 */
public interface IDocumentHandingService {
    ServerResponse<String> updateOpinion(Integer licenseId,String opinion,String result,String userName);
}
