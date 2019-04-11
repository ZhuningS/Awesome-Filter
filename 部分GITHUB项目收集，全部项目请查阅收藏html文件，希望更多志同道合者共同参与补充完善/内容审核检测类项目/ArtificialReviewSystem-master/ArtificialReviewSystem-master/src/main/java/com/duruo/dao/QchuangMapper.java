package com.duruo.dao;

import com.duruo.po.Qchuang;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface QchuangMapper {
    int deleteByPrimaryKey(String id);

    int insert(Qchuang record);

    int insertSelective(Qchuang record);

    Qchuang selectByPrimaryKey(String id);

    int updateByPrimaryKeySelective(Qchuang record);

    int updateByPrimaryKey(Qchuang record);

    Qchuang selectByIdcard(String idCard);

    List<Qchuang> list(@Param("companyName") String companyName,@Param("startTime") String startTime,@Param("endTime") String endTime);

    List<Qchuang> donelist(@Param("companyName") String companyName,@Param("startTime") String startTime,@Param("endTime") String endTime);

    Qchuang selectByUniScId(String uniScId);

    Qchuang selectByCompanyName(String companyName);
}