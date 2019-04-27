package com.duruo.vo;

import lombok.Data;

/**
 * Created by @Author tachai
 * date 2018/9/20 15:37
 * GitHub https://github.com/TACHAI
 * Email 1206966083@qq.com
 */
//用来接收 多轮对话前端数据判断是那个类型
@Data
public class Qchuang {
    private String type;
    private QchuangVo data;
}
