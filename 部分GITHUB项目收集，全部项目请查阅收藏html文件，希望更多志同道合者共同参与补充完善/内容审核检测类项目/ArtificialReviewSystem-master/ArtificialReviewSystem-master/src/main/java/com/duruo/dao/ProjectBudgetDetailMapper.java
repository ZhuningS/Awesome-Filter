package com.duruo.dao;

import com.duruo.po.ProjectBudgetDetail;

import java.util.List;

public interface ProjectBudgetDetailMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(ProjectBudgetDetail record);

    int insertSelective(ProjectBudgetDetail record);

    ProjectBudgetDetail selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(ProjectBudgetDetail record);

    int updateByPrimaryKey(ProjectBudgetDetail record);

    List<ProjectBudgetDetail> selectListBudgetDtailBySN(String sn);
}