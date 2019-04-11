package com.duruo.dao;

import com.duruo.po.FilePath;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface FilePathMapper {
    int deleteByPrimaryKey(String id);

    int insert(FilePath record);

    int insertSelective(FilePath record);

    FilePath selectByPrimaryKey(String id);

    int updateByPrimaryKeySelective(FilePath record);

    int updateByPrimaryKey(FilePath record);
    FilePath selectByProjectIdAndId(@Param("projectId") Integer projectId, @Param("code") String code);
    List<FilePath> list(Integer sn);
}