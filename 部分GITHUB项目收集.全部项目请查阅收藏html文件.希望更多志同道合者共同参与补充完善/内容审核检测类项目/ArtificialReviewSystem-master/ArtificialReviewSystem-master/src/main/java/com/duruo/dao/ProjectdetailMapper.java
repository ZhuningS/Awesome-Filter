package com.duruo.dao;

import com.duruo.po.Projectdetail;
import com.duruo.vo.StAuditVo;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ProjectdetailMapper {
    int deleteByPrimaryKey(String sn);

    int insert(Projectdetail record);

    int insertSelective(Projectdetail record);

    Projectdetail selectByPrimaryKey(String sn);

    int updateByPrimaryKeySelective(Projectdetail record);

    int updateByPrimaryKey(Projectdetail record);

    List<StAuditVo> getAllStAuditVo(@Param("realname") String realname,@Param("project") String project);

    List<Projectdetail> listProjectdetail();

    Projectdetail selectByEnterpriseId(String enterpriseId);

}