package com.duruo.service.impl;

import com.duruo.common.ServerResponse;
import com.duruo.dao.EvidenceFilesMapper;
import com.duruo.dao.RetailLicenseMapper;
import com.duruo.po.EvidenceFiles;
import com.duruo.service.IEvidenceFilesService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by @Author tachai
 * date 2018/6/25 15:15
 *
 * @Email 1206966083@qq.com
 */
@Service("iEvidenceFilesService")
public class EvidenceFilesServiceImpl implements IEvidenceFilesService {
    @Autowired
    private EvidenceFilesMapper evidenceFilesMapper;
    @Autowired
    private RetailLicenseMapper retailLicenseMapper;

    @Override
    public ServerResponse<List<EvidenceFiles>> getEvidenceFiles(String deptId) {
        if(!StringUtils.isBlank(deptId)){
        }
        List<EvidenceFiles> list= evidenceFilesMapper.listEvidenceFiles(deptId);
        if(null != list){
            return ServerResponse.createBySuccess(list,"查询成功");
        }
        return ServerResponse.createByErrorMessage("未找到相关的数据");
    }


    @Override
    public ServerResponse<List<EvidenceFiles>> getEvidenceDetail(Integer licenseId) {
        //使用悲观锁
//        retailLicenseMapper.lockByPrimaryKey(licenseId);
        List<EvidenceFiles> list= evidenceFilesMapper.listEvidenceFileDetail(licenseId);
        if(null != list){
            return ServerResponse.createBySuccess(list,"查询成功");
        }
        return ServerResponse.createByErrorMessage("未找到相关的数据");    }
}
