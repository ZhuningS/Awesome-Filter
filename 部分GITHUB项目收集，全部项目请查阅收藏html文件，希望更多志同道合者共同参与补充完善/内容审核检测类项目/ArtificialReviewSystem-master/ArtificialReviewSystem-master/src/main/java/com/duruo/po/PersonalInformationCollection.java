package com.duruo.po;

import lombok.Data;

import java.util.Date;

/**
 * Created by @Author tachai
 * date 2018/7/25 16:25
 *
 * @Email 1206966083@qq.com
 */
@Data
public class PersonalInformationCollection {
    //单位名称
    private String unitName;
    //社会保险登记码
    private String insuranceCode;
    //姓名
    private String persionName;
    //曾用名
    private String oldName;
    //身份证号码
    private String idCard;
    //性别
    private String sex;
    //民族
    private String nation;
    //政治面貌
    private String politicalOutlook;
    //受教育程度
    private String educationalLevel;
    //户籍地址
    private String permanentAddress;
    //详细地址
    private String detailedAddress;
    //户籍类别
    private String householdRegistrationCategory;
    //本市居住地地址
    private String localAddress;
    //联系电话
    private String linkTel;
    //邮政编码
    private String postalCode;
    //居住地街道
    private String residentialStreet;
    //其他联系方式
    private String otherWaysContact;
    //日期
    private Date createDate;

}
