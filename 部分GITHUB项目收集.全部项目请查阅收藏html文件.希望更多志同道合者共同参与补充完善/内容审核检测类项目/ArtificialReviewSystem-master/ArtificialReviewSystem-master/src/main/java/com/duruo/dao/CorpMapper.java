package com.duruo.dao;

import com.duruo.po.Corp;

public interface CorpMapper {
    int insert(Corp record);

    int insertSelective(Corp record);

    Corp selectByUniScId(String uniScId);
}