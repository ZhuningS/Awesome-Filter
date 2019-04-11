package com.duruo.service;

import com.duruo.common.ServerResponse;
import com.duruo.po.*;
import com.duruo.vo.StAuditVo;

import java.util.List;

/**
 * Created by @Author tachai
 * date 2018/6/19 14:28
 *
 * @Email 1206966083@qq.com
 */
public interface IStAuditService {
    ServerResponse<List<StAuditVo>> list(String realname, String project);

    ServerResponse<List<AuditTempData>> listAll(String realname, String project);

    ServerResponse<Enterprise> getEnterprise(String sn);

    ServerResponse<Projectdetail> getProjectdetail(String sn);

    ServerResponse<List<Persions>> getListPersions(String sn);

    ServerResponse<ProjectBudget> getProjectBudget(String sn);

    ServerResponse<List<ProjectBudgetDetail>> getListBudgetDetail(String sn);

    ServerResponse<String> getOpinion(String sn);

    ServerResponse<String> updateOpinion(String opinion,String sn,String status);

    ServerResponse<String> postOpinion(String opinion,String sn,String status);

    ServerResponse<String> checkAll() throws Exception;
//    下载获得信息的json文件
    ServerResponse<String> getAll();

    ServerResponse<String> delectById(String id);

}
