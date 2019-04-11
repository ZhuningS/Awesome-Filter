package com.duruo.util;

import java.util.Date;

/**
 * Created by @Author tachai
 * date 2018/7/18 13:40
 *
 * @Email 1206966083@qq.com
 */
public class IdUtils {
    public static String getId(String str){
        Date date = new Date();
        String result = str.substring(0,2)+DateTimeUtil.dateToStr(date,"yyMMddHHmmss");
        return result;
    }

    public static void main(String[] args) {
        System.out.println(getId("sdfdfdf").toUpperCase());
    }
}
