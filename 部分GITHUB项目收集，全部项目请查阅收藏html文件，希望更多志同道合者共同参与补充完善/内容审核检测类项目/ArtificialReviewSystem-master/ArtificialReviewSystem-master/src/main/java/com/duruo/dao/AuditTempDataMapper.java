package com.duruo.dao;

import com.duruo.po.AuditTempData;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface AuditTempDataMapper {
    int deleteByPrimaryKey(String id);

    int insert(AuditTempData record);

    int insertSelective(AuditTempData record);

    AuditTempData selectByPrimaryKey(String id);

    int updateByPrimaryKeySelective(AuditTempData record);

    int updateByPrimaryKey(AuditTempData record);

    List<AuditTempData> listAll(@Param("realname")String realname,@Param("project")String project);
}