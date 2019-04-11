package com.duruo.dao;

import com.duruo.po.Enterprise;

import java.util.List;

public interface EnterpriseMapper {
    int deleteByPrimaryKey(String creditcode);

    int insert(Enterprise record);

    int insertSelective(Enterprise record);

    Enterprise selectByPrimaryKey(String creditcode);

    int updateByPrimaryKeySelective(Enterprise record);

    int updateByPrimaryKey(Enterprise record);

    List<Enterprise> listEnterPrise();
}