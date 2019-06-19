package com.duruo.dao;

import com.duruo.po.AuditData;
import org.apache.ibatis.annotations.Mapper;

import java.math.BigInteger;
import java.util.List;

@Mapper
public interface AuditDataMapper {
    int deleteByPrimaryKey(String msgId);

    int insert(AuditData record);

    int insertSelective(AuditData record);

    AuditData selectByPrimaryKey(String msgId);
    List<AuditData> selectBybmId(Integer bmId);

    int updateByPrimaryKeySelective(AuditData record);

    int updateByPrimaryKey(AuditData record);

    int selectUnDo(Integer bmId);

}