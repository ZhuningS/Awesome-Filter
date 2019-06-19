package com.duruo.vo.form;

import lombok.Data;

/**
 * Created by @Author tachai
 * date 2018/7/7 13:19
 *
 * @Email 1206966083@qq.com
 */
//海市企业实行不定时工作制和综合计算工时工作制申请表
@Data
public class OtherWorkingHoursApplyVO {
    //企业名称
    private String enterprise;
    //机构代码
    private String organizationCode;
    //职工总人数
    private String totalWorkers;
    //企业注册地所在区县
    private String registeredAddress;
    //地址
    private String address;
    //电话
    private String phone;
    //邮编
    private String postcode;
    //联系人
    private String linkman;
    //实行不定时工作制的岗位
    private String untimeStation;
    //实行不定时工作制的岗位的人数
    private String untimePeoples;
    //实行综合计算工时工作制的岗位
    private String multipleTimeStation;
    //实行综合计算工时工作制的岗位人数
    private String multipleTimePeoples;
    //综合计算工时工作制的周期
    private String multipleTimeCycle;

    //企业生产经营特点
    private String productionCharacteristics;
    //申请岗位的说明
    private String postDescription;
}
