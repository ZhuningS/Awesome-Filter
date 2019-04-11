package com.duruo.dto;

import lombok.Data;

import java.util.List;

/**
 * Created by @Author tachai
 * date 2018/7/10 13:08
 *
 * @Email 1206966083@qq.com
 */
@Data
public class AnswerDTO <T>{
    private String id;
    private String name;
    private String state;
    private String type;
    private String ask;
    private List<T> answer;
}
