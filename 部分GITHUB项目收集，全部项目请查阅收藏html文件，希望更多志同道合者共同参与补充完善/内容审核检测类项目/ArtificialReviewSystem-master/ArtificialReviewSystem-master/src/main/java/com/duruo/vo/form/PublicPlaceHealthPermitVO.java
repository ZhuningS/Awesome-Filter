package com.duruo.vo.form;

import lombok.Data;

/**
 * Created by @Author tachai
 * date 2018/7/6 15:15
 *
 * @Email 1206966083@qq.com
 */
@Data
public class PublicPlaceHealthPermitVO {
    //申请人名称
    private String applyName;
    //经营地址
    private String operatingAddress;
    //主管部门
    private String competentDepartment;
    //经营总面积m2
    private String totalArea;
    //经济类型
    private String economicType;
    //所属街道
    private String ownerStreet;
    //所属社区-----+++++
    private String ownerCommunity;
    //姓名
    private String personName;
    //身份证
    private String idCard;
    //卫生负责人
    private String headHealth;
    //邮政编码
    private String postalCode;
    //联系电话
    private String contactTel;
    //职工总数
    private String totalWorkers;
    //直接为客户服务从业人员数
    private String directCustomerEmploy;
    //持健康合格证人数
    private String healthCertificateNumber;
    //经营范围
    private String scopeBusiness;
    //空调类型
    private String airConditioningType;
    //饮用水类别
    private String drinkingWaterType;
    //公共用具种类
    private String publicUtensilsType;
    //清洗方式
    private String cleaningMethod;
    //消毒方式
    private String disinfectionMethod;
    //使用一次性用具种类
    private String disposableUtensilsType;
}
