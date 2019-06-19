package com.duruo.util;

/**
 * Created by @Author tachai
 * date 2018/8/10 15:05
 *
 * @Email 1206966083@qq.com
 */
public class Contain {
    public static boolean contain(String content,String core){
        if(content.indexOf(core)!=-1){
            return true;
        }
      return false;
    }

    public static boolean containLast(String content,String core){
        if (content.lastIndexOf(core)!=-1){
            return true;
        }
        return false;
    }

    public static boolean containImage(String str){
        if(str.indexOf(".jpg")!=-1||str.indexOf(".png")!=-1||str.indexOf(".jpeg")!=-1){
            return true;
        }
        return false;
    }
}
