package com.baidu.ai.api.utils;

import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;
import java.util.Map;

/**
 * Created by @Author tachai
 * date 2018/6/30 17:28
 *
 * @Email 1206966083@qq.com
 */
public class HttpUtil {
    public static String post(String requestUrl, String accessToken,String params) throws Exception{
        String generalUrl = requestUrl+"?access_token=" + accessToken;
        URL url = new URL(generalUrl);
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("POST");
        //设置通用的请求属性
        connection.setRequestProperty("Content-Type","application/x-www-form-urlencoded");
        connection.setRequestProperty("Coonection","keep-Alice");
        connection.setUseCaches(false);
        connection.setDoOutput(true);
        connection.setDoInput(true);

        //得到请求的输出流对象
        DataOutputStream out = new DataOutputStream(connection.getOutputStream());
        out.writeBytes(params);
        out.flush();
        out.close();

        //建立实际的连接
        connection.connect();
        //获取所有响应头字段
        Map<String,List<String>> headers = connection.getHeaderFields();
        //遍历所有 的响应字头
        for(String key:headers.keySet()){
            System.out.println(key + "------->" + headers.get(key));
        }
        //定义 BufferedReader来读取URL的响应
        BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream(),"UTF-8"));
        String result = "";
        String getLine ;
        while ((getLine = in.readLine())!=null){
            result += getLine;
        }
        /**
         * 返回结果示例
         */
        System.out.println("result:" + result);
        JSONObject jsonObject = new JSONObject(result);
        String access_token = jsonObject.getString("access_token");
        return access_token;
    }
}
