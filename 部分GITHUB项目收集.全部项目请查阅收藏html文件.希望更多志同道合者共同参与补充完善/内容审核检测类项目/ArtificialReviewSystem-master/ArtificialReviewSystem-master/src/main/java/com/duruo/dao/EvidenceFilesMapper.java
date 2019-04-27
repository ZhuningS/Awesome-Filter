package com.duruo.dao;

import com.duruo.po.EvidenceFiles;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface EvidenceFilesMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(EvidenceFiles record);

    int insertSelective(EvidenceFiles record);

    EvidenceFiles selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(EvidenceFiles record);

    int updateByPrimaryKey(EvidenceFiles record);

    List<EvidenceFiles> listEvidenceFiles(String deptId);

    List<EvidenceFiles> listEvidenceFileDetail(int licenseId);

    EvidenceFiles selectByTypeAndLicenseId(@Param("type") String type, @Param("licenseId") int licenseId);

    int deleteByLicenseId(int licenseId);

    int deleteByLicenseIdAndType(@Param("licenseId") int licenseId,@Param("type") String type);

    EvidenceFiles selectByTypeAndmsgId(@Param("msgId") String msgId, @Param("type") String type,@Param("matterName")String matterName);

    EvidenceFiles selByTypeAndmsgId(@Param("msgId") String msgId, @Param("type") String type);

    List<EvidenceFiles> listByMsgId(String msgId);


}