package com.duruo.dto;

import com.duruo.dto.FlowDataChild.*;
import lombok.Data;

import java.util.List;

/**
 * Created by @Author tachai
 * date 2018/6/27 10:21
 *
 * @Email 1206966083@qq.com
 */
@Data
public class FlowData<T> {
    private T data;
    private T db_flow_jjkc_info;
    private T db_flow_jjkc_cyry_info;
    private T db_flow_jjkc_kfys_info;
    private T db_flow_jjkc_qtfj_info;
    private T Core_Flow_Opinion;
}
