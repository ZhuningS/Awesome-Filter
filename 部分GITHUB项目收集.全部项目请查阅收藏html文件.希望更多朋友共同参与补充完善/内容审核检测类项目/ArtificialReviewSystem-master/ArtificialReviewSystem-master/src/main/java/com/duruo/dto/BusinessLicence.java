package com.duruo.dto;

import lombok.Data;

/**
 * Created by @Author tachai
 * date 2018/8/11 15:29
 *
 * @Email 1206966083@qq.com
 */
@Data
public class BusinessLicence {
    //社会信用代码
    private String socialCreditCode;
    //法人
    private String legalPerson;
    //成立日期
    private String establishmentDate;
    //证件编号
    private String idNumber;
    //地址
    private String address;
    //单位名称
    private String unitName;
    //有效期
    private String validityPeriod;
}
