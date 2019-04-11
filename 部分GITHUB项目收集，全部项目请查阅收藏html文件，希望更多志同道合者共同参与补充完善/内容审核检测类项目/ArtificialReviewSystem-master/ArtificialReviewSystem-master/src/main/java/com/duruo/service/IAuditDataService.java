package com.duruo.service;

import com.duruo.common.ServerResponse;
import com.duruo.po.AuditData;

import java.math.BigInteger;
import java.util.List;

/**
 * Created by @Author tachai
 * date 2018/6/10 18:09
 *
 * @Email 1206966083@qq.com
 */
public interface IAuditDataService {
    ServerResponse<List<AuditData>> list(Integer bmId);
    ServerResponse<AuditData> getAuditDataById(String msgId);
    ServerResponse<String> updateAuditData(String msgId,String auditresult,String auditopinion);
    ServerResponse<String> insertAuditData(AuditData auditData);
}
