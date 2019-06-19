package com.duruo.common;

/**
 * Created by @Author tachai
 * date 2018/9/15 15:16
 * GitHub https://github.com/TACHAI
 * Email 1206966083@qq.com
 */
public  class DataSourceContextHolder  {

    private static final ThreadLocal<String> contextHolder = new ThreadLocal<String>();

    public static void setDBType(String dbType) {
        contextHolder.set(dbType);
    }
    public static String getDBType() {
        return ((String) contextHolder.get());
    }
    public static void clearDBType() {
        contextHolder.remove();
    }
}
