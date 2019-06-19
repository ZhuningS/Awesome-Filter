package com.duruo.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

/**
 * Created by @Author tachai
 * date 2018/6/27 10:20
 *
 * @Email 1206966083@qq.com
 */
@Data
public class PostData {
    private List<FlowData> FlowData;
    @Builder.Default
    private String  FlowKey = "7522cf1d-ea2c-8605-7c83-c4e739338b14";
    private String FlowSN;
    private String ProjectId;
    @Builder.Default
    private String BizTable = "DB_Flow_Jjkc_Info";
    @Builder.Default
    private String NodeIsAuto = "True";
    @Builder.Default
    private String UpLoadFileId = "";
    private DataFields dataFields;
    @Builder.Default
    private String ActionMode = "Save";
}
