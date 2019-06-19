package com.duruo.util;

import org.apache.commons.lang3.StringUtils;

/**
 * Created by @Author tachai
 * date 2018/6/28 9:33
 *
 * @Email 1206966083@qq.com
 */
public class CheckTechnicalCode {
    public static String strToCode(String tec){
        if(!StringUtils.isBlank(tec)){
            if("软件".equals(tec)){
                return "1";
            }else if("电子硬件".equals(tec)){
                return "2";
            }else if ("先进制造".equals(tec)){
                return "3";
            }else if("节能环保".equals(tec)){
                return "4";
            }else if("生物医药".equals(tec)){
                return "5";
            }else if("新材料".equals(tec)){
                return "6";
            }else if("建筑类".equals(tec)){
                return "7";
            }
        }
        return "没有值";
    }
}
