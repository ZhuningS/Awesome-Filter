package com.duruo.dao;

import com.duruo.po.Gsquestion;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface GsquestionMapper {
    int deleteByPrimaryKey(Long id);

    int insert(Gsquestion record);

    int insertSelective(Gsquestion record);

    Gsquestion selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(Gsquestion record);

    int updateByPrimaryKey(Gsquestion record);

    List<Gsquestion> list(@Param("title") String title,@Param("askContent") String askContent, @Param("replyContent") String replyContent);
}