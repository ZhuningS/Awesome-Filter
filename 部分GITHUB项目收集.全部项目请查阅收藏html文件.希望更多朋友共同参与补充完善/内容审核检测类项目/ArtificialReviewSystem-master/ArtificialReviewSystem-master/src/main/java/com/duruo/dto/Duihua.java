package com.duruo.dto;

import lombok.Data;

/**
 * Created by @Author tachai
 * date 2018/7/12 14:56
 *
 * @Email 1206966083@qq.com
 */
//用来构造对话json
@Data
public class Duihua <T> {
    private String edit;
    private String type;
    private T data;
}
