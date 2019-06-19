package com.duruo.vo.form;

import lombok.Data;

/**
 * Created by @Author tachai
 * date 2018/7/16 13:27
 *
 * @Email 1206966083@qq.com
 */
//特种设备 1 按台套来
@Data
public class SpecialEquipment1 {
    //设备种类
    private String typeEquipment;
    //设备类别
    private String equipmentCategory;
    //设备品种
    private String equipmentVariety;
    //产品名称
    private String productName;
    //设备代码
    private String deviceCode;
    //型号（规格）
    private String model;
    //设计使用年限
    private String designServiceLife;
    //设计单位名称
    private String designUnitName;
    //制造单位名称
    private String manufacturingUnitName;
    //施工单位名称
    private String constructionUnitName;
    //监督检验机构名称
    private String supervisionAgency;
    //型式试验机构名称
    private String testMechanismName;
    //使用单位名称
    private String useUnitName;
    //使用单位地址
    private String useUnitAddress;
    //使用单位统一社会信用代码
    private String useUnitSocialCreditCode;
    //邮政编码
    private String postalCode;
    //单位内编号
    private String unitNumber;
    //设备使用地点
    private String useEquipmentPlace;
    //投入使用日期
    private String useDate;
    //单位固定电话
    private String unitTel;
    //安全管理员
    private String securityAdministrator;
    //移动电话
    private String mobilePhone;
    //产权单位名称
    private String unitRightName;
    //产权单位统一信用代码
    private String unitRightCreditCode;
    //联系电话
    private String linkTel;
    //检验机构名称
    private String inspectionName;
    //检验类别
    private String insectionCategory;
    //检验报告编号
    private String insectionReportNumber;
    //检验日期
    private String inspectionDate;
    //检验结论
    private String testConclusion;
    //下次检验日期
    private String nextTestDate;

}
