package com.duruo.vo.form;

import lombok.Data;

/**
 * Created by @Author tachai
 * date 2018/7/16 14:07
 *
 * @Email 1206966083@qq.com
 */
//特种设备登记使用 按单位来
@Data
public class SpecialEquipment2 {
    //设备类别
    private String equipmentCategory;
    //设备品种
    private String equipmentVariety;
    //产品名称
    private String productName;
    //设备数量
    private String equipmentNumber;
    //使用单位名称
    private String useUnitName;
    //使用单位地址
    private String useUnitAddress;
    //设备使用地点
    private String useEquipmentPlace;
    //单位固定电话
    private String unitTel;
    //使用单位统一社会信用代码
    private String useUnitSocialCreditCode;
    //邮政编码
    private String postalCode;
    //安全管理员
    private String securityAdministrator;
    //移动电话
    private String mobilePhone;

}
