package com.duruo.vo;

import lombok.Data;

/**
 * Created by @Author tachai
 * date 2018/6/19 14:20
 *
 * @Email 1206966083@qq.com
 */
@Data
public class StAuditVo {
    //企业id
    private String creditcode;
    //项目id
    private String sn;
    //企业名称
    private String realname;
    //项目名称
    private String project;
    //项目编号
    private String projectnum;
    //项目所属技术领域
    private String technical;
    //项目总预算
    private String generalBudget;
    //项目专项资金
    private String specialFunds;
    //项目自筹资金
    private String selfFinancing;
    //项目当年开发费用
    private String developmentCost;
    //专家评定结果
    private String shyj2;
}
