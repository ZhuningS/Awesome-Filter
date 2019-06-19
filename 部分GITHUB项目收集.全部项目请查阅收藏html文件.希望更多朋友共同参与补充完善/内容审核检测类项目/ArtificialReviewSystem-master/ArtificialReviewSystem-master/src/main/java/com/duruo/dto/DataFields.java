package com.duruo.dto;

import lombok.Builder;
import lombok.Data;

/**
 * Created by @Author tachai
 * date 2018/6/27 10:23
 *
 * @Email 1206966083@qq.com
 */
@Data
public class DataFields {
    @Builder.Default
    private String ApproveUsers = "";
    @Builder.Default
    private String NodeID = "";
    private String Title;
    @Builder.Default
    private String ApprovalFormURL = "http://fwpt.yc.c.c/FlowManagerModule/Form";

}
