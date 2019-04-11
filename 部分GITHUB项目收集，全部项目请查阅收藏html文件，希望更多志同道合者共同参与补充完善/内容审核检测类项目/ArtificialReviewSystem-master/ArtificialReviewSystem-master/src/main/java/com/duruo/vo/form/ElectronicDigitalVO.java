package com.duruo.vo.form;

import lombok.Data;

/**
 * Created by @Author tachai
 * date 2018/7/9 10:29
 *
 * @Email 1206966083@qq.com
 */

/**
 * 法人一证通数字证书
 */
@Data
public class ElectronicDigitalVO {
    //服务类型
    private String serviceType;
    //单位名称
    private String unitName;
    //单位邮寄地址
    private String unitMailingAddress;
    //邮政编码
    private String postalCode;
    //统一社会信用代码
    private String unifiedCreditCode;
    //工商营业执照注册号
    private String businessLicenseNumber;
    //住房公积金账号
    private String accountOfHousing;
    //组织机构代码证号
    private String organizationCode;
    //社会保险号
    private String socialInsuranceNumber;
    //单位法人代表姓名
    private String legalRepresentative;
    //法人代表身份证号码
    private String legalIdCard;
    //法人代表联系电话
    private String legalLinkTel;
    //办理人姓名
    private String transactorName;
    //办理人身份证号
    private String transactorIdCard;
    //办理人联系电话transactorlinkTel
    private String transactorLinkTel;
    //传真
    private String fax;
    //电子邮箱地址
    private String email;
}
