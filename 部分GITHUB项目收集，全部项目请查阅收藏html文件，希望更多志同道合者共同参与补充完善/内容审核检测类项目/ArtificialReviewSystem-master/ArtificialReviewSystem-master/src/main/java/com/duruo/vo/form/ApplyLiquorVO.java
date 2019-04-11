package com.duruo.vo.form;

import lombok.Data;

/**
 * Created by @Author tachai
 * date 2018/7/5 10:45
 *
 * @Email 1206966083@qq.com
 */
@Data
public class ApplyLiquorVO {

    private String weChatId;
    //单位名称
    private String companyName;
    //企业类型
    private String enterpriseType;
    //法定代表人（负责人）
    private String legalRepresentName;
    //负责人联系电话、手机
    private String legalRepresentPhone;
    //企业分类
    private String enterpriseCategory;
    //所属街道
    private String streetName;
    //传真
    private String faxNumber;
    //餐饮服务（食品流通）许可证有效期
    private String foodLicenseValidity;
    //经营地址
    private String businessAddress;
    //经营面积
    private String businessArea;
    //员工人数
    private String staffNumber;
    //工商执照有效期
    private String businessLicenseValidity;
    //办理人
    private String transactorName;
    //办理人联系电话、手机
    private String transactorPhone;
}
