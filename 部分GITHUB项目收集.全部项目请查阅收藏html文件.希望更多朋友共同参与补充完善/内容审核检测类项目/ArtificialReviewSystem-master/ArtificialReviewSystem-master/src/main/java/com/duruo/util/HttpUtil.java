package com.duruo.util;

import com.google.gson.Gson;
import lombok.extern.slf4j.Slf4j;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by @Author tachai
 * date 2018/7/12 15:18
 *
 * @Email 1206966083@qq.com
 */
@Slf4j
public class HttpUtil {

    /**
     * Content-Type text/html
     * @param url
     * @param data
     * @return
     */
    public static  String okhttp(String url,String data){
        String res ="";
        OkHttpClient httpClient = new OkHttpClient();
        okhttp3.RequestBody requestBody = okhttp3.RequestBody.create(MediaType.parse("text/html;charset=utf-8"), data);
        Request request = new Request.Builder().url(url).post(requestBody).build();
        try {
            Response response = httpClient.newCall(request).execute();
            res = response.body().string();
        } catch (IOException e) {
            log.error("连接url发生了异常：{}" ,Class.class.getCanonicalName());
            e.printStackTrace();
        }

        return res;
    }

    /**
     *Content-Type application/json
     * @param url
     * @param data
     * @return
     */
    public static  String okhttpJSON(String url,String data){
        String res ="";
        OkHttpClient httpClient = new OkHttpClient();
        okhttp3.RequestBody requestBody = okhttp3.RequestBody.create(MediaType.parse("application/json;charset=utf-8"), data);
        Request request = new Request.Builder().url(url).post(requestBody).build();
        try {
            Response response = httpClient.newCall(request).execute();
            res = response.body().string();
        } catch (IOException e) {
            log.error("连接url发生了异常：{}" ,Class.class.getCanonicalName());
            e.printStackTrace();
        }

        return res;
    }

    public static void main(String[] args) {
        Map<String,String> query= new HashMap<>();
        //
        query.put("queryInfo","91310104MA1FRBMT7K");
        String data = new Gson().toJson(query);
        String result = HttpUtil.okhttpJSON(PropertiesUtil.getProperty("fanren.url"), data);
        System.out.println(result);
    }
}
