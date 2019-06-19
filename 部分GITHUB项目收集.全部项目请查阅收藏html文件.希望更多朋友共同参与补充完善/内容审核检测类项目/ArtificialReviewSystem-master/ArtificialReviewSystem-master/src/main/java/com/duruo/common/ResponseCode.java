package com.duruo.common;

/**
 * Created by @Author tachai
 * date 2018/6/10 17:08
 *
 * @Email 1206966083@qq.com
 */
public enum ResponseCode {
    SUCCESS(0,"SUCCESS"),
    ERROR(1,"ERROR"),
    NEED_LOGIN(10,"NEED_LOGIN"),
    ILLEGAL_ARGUMENT(2,"ILLEGAL_ARGUMENT"),
    Missing_ARGS(3,"Missing_ARGS");

    private final int code;
    private final String desc;
    ResponseCode(int code,String desc){
        this.code=code;
        this.desc=desc;
    }

    public int getCode() {
        return code;
    }

    public String getDesc() {
        return desc;
    }
}
