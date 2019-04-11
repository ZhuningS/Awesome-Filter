package com.duruo.service;

import com.duruo.common.ServerResponse;
import com.duruo.po.EvidenceFiles;

import java.util.List;

/**
 * Created by @Author tachai
 * date 2018/6/25 15:12
 *
 * @Email 1206966083@qq.com
 */
public interface IEvidenceFilesService {
    ServerResponse<List<EvidenceFiles>> getEvidenceFiles(String deptId);
    ServerResponse<List<EvidenceFiles>> getEvidenceDetail(Integer licenseId);
}
