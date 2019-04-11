package com.duruo.vo.form;

import lombok.Data;

/**
 * Created by @Author tachai
 * date 2018/7/24 16:59
 *
 * @Email 1206966083@qq.com
 */

/**
 *从业人员信息
 */
@Data
public class FormUser {
    //姓名
    private String personName;
    //身份证编号
    private String idCard;
    //劳动合同是否签订
    private String is;
    //劳动合同起始日期
    private String startDate;
    //劳动合同终止日期
    private String endDate;
    //本次就业起始日期
    private String nowDate;
    //用工形式
    private String workForm;
    //从事的岗位或工种
    private String job;
    //备注
    private String remarks;

}
