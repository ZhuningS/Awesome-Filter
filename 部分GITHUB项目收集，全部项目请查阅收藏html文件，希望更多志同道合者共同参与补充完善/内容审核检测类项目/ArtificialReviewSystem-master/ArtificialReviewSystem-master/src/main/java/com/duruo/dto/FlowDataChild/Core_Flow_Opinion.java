package com.duruo.dto.FlowDataChild;

import lombok.Builder;
import lombok.Data;

/**
 * Created by @Author tachai
 * date 2018/6/27 10:39
 *
 * @Email 1206966083@qq.com
 */
@Data
public class Core_Flow_Opinion {
    private String Opinion;
    private String Title;
    private String ProjectID;
    @Builder.Default
    private String UserName = "方超";
    @Builder.Default
    private String UserUID = "fangchao";
    @Builder.Default
    private String UserOrgCode = "D_2F9FB5B2-FF91-456B-AC9F-8818DCD74BF5";
    @Builder.Default
    private String UserUnitCode = "";
    @Builder.Default
    private String UserOrgName = "科技创新服务中心";
    @Builder.Default
    private String UserUnitName = "";
    @Builder.Default
    private String CurrentNodeID = "6";
    @Builder.Default
    private String CurrentNodeName = "形式审核";
    private String CurrentFlowName;
    private String TaskID;
    private String PreWorkId;
    @Builder.Default
    private String UserOrgPath = "C_20170417072903138.D_2F9FB5B2-FF91-456B-AC9F-8818DCD74BF5";
    @Builder.Default
    private String CompanyCode = "C_20170417072903138";
    @Builder.Default
    private String CompanyName = "徐汇区科学技术委员会";
}
