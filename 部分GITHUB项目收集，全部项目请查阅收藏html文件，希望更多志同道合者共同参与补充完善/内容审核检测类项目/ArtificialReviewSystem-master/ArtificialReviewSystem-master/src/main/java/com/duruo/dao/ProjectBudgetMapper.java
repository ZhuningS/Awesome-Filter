package com.duruo.dao;

import com.duruo.po.ProjectBudget;

import java.util.List;

public interface ProjectBudgetMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(ProjectBudget record);

    int insertSelective(ProjectBudget record);

    ProjectBudget selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(ProjectBudget record);

    int updateByPrimaryKey(ProjectBudget record);

    ProjectBudget selectBySN(String sn);

    List<ProjectBudget> listProjectBudget();
}