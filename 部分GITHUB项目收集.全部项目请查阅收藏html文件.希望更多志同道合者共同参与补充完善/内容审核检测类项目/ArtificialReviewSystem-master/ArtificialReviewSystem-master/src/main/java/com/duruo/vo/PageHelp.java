package com.duruo.vo;

import lombok.Data;

/**
 * Created by @Author tachai
 * date 2018/7/15 19:23
 *
 * @Email 1206966083@qq.com
 */
@Data
public class PageHelp<T> {
    private Long total;
    private  T rows;
}
