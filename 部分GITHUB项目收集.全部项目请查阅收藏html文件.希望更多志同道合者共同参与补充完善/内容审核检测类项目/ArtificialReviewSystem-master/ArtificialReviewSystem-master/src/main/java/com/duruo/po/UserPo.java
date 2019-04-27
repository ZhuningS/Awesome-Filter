package com.duruo.po;

import lombok.Data;

/**
 * Created by @Author tachai
 * date 2018/6/12 9:11
 *
 * @Email 1206966083@qq.com
 */
@Data
public class UserPo extends  User {
    private String sex;
    private String officePhone;
    private String phone;
    private String remark;
}
