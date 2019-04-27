package com.duruo.dao;

import com.duruo.po.Persions;

import java.util.List;

public interface PersionsMapper {
    int deleteByPrimaryKey(Long id);

    int insert(Persions record);

    int insertSelective(Persions record);

    Persions selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(Persions record);

    int updateByPrimaryKey(Persions record);

    List<Persions> getListPersions(String sn);
    List<Persions> getListPersion();
}