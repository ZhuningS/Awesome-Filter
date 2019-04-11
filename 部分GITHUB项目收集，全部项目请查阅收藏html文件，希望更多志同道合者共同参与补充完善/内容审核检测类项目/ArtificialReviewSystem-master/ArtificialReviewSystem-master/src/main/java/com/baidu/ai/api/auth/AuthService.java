package com.baidu.ai.api.auth;

import org.json.JSONObject;
import java.net.HttpURLConnection;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.List;
import java.util.Map;

/**
 * Created by @Author tachai
 * date 2018/6/30 16:29
 *
 * @Email 1206966083@qq.com
 */
//获取token类
public class AuthService {
    //获取token地址
    private static String authHost = "https://aip.baidubce.com/oauth/2.0/token";
    //官网获取的API key
    private static String clientId = "xOLiVdYTZ34y1RnmxChC7H75";
    //官网获取的 Secret Key
    private static String clientSecret = "K6KK9ib5uQBXDHfUkzRRYolICIDvog2F";



    public static String getAuth(){
        String getAccessTokenUrl = authHost;

        try{
            URL realUrl = new URL(getAccessTokenUrl);
            //打开和URL之间的连接
            HttpURLConnection connection = (HttpURLConnection) realUrl.openConnection();
            connection.setRequestMethod("GET");
            connection.connect();
            //获得所有响应头字段
            Map<String,List<String>> map = connection.getHeaderFields();
            //遍历所有响应头字段
            for(String key:map.keySet()){
                System.out.println(key + "------>" + map.get(key));
            }
            //定义BufferReader输入输出流来获取URL的响应
            BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));

            String result = "";
            String line;
            while ((line = in.readLine())!=null){
                result += line;
            }
            /**
             * 返回结果示例
             */
            System.out.println("result:" + result);
            JSONObject jsonObject = new JSONObject(result);
//            String access_token = jsonObject.getString("access_token");
            return result;
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

}
