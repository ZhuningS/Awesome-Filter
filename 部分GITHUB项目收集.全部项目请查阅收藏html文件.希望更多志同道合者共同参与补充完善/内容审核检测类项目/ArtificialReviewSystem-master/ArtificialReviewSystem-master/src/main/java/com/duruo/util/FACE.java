package com.duruo.util;

import com.baidu.aip.face.AipFace;
import com.baidu.aip.face.MatchRequest;
import com.baidu.aip.ocr.AipOcr;
import com.baidu.aip.util.Base64Util;
import com.duruo.dto.BusinessLicence;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONObject;

import java.io.*;
import java.util.ArrayList;
import java.util.Base64;
import java.util.HashMap;
import java.util.List;

/**
 * Created by @Author tachai
 * date 2018/6/30 19:05
 *
 * @Email 1206966083@qq.com
 */

@Slf4j
public class FACE {
    private static String clientId = "11467984";
    //官网获取的API key
    private static String clientKey = "xOLiVdYTZ34y1RnmxChC7H75";
    //官网获取的 Secret Key
    private static String clientSecret = "K6KK9ib5uQBXDHfUkzRRYolICIDvog2F";

    private static AipFace client =null;

    static {
        client = new AipFace(clientId,clientKey,clientSecret);
    }

   public static JSONObject  checkFace(byte[][] faces){

//       HashMap<String, String> options = new HashMap<String, String>();
//        options.put("image_liveness",",faceliveness");
//        options.put("types","7,13");
////        options.put("","");
//
//       JSONObject res = client.match(faces, options);
//       log.info("人脸识别:{}",res.toString(2));
//       return res;
       return null;
   }

   public static JSONObject checkFace(String live,String idcard){
       MatchRequest req1 = new MatchRequest(live, "BASE64","LIVE","LOW","NONE");
       MatchRequest req2 = new MatchRequest(idcard, "BASE64","CERT","LOW","NONE");
       ArrayList<MatchRequest> requests = new ArrayList<MatchRequest>();
       requests.add(req1);
       requests.add(req2);
       JSONObject res = client.match(requests);
       log.info("人脸识别:{}",res.toString(2));


       return res;

   }


    private static  byte[] toByteArray(InputStream in) throws IOException {

        ByteArrayOutputStream out = new ByteArrayOutputStream();
        byte[] buffer = new byte[1024 * 4];
        int n = 0;
        while ((n = in.read(buffer)) != -1) {
            out.write(buffer, 0, n);
        }
        return out.toByteArray();
    }

    public static void main(String[] args) throws IOException {

        //生活照
        String path="C:\\Users\\asus30\\Desktop\\人社\\青年创业\\王暑斌/003.jpg";
        String path0="C:\\Users\\asus30\\Desktop\\人社\\青年创业\\许泓洋/01.jpg";
        String path4="C:\\Users\\asus30\\Desktop\\人社\\青年创业\\许泓洋/03.jpg";
        String path5="C:\\Users\\asus30\\Desktop\\人社\\青年创业\\许泓洋/04.jpg";
        //证件照
        String path2="C:\\Users\\asus30\\Desktop\\人社\\青年创业\\王暑斌/001.jpg";

        String path3="C:\\Users\\asus30\\Desktop\\人社\\青年创业\\许泓洋/001.jpg";


//        System.out.println(checkBackCard(path2));
//        System.out.println(checkIdcard(path));
//        File file = new File(path);
//        FileInputStream fis = new FileInputStream(file);
//        byte[] b = new byte[fis.available()];
//        fis.read(b);
//        for(byte bb:b){
//            Integer.toBinaryString(bb);
//        }
//        String res = checkFace(path,path2).toString();

        JSONObject jsonObject = checkFace(Base64Util.encode(toByteArray(new FileInputStream(new File(path)))),Base64Util.encode(toByteArray(new FileInputStream(new File(path3)))));

        if(jsonObject.has("result")){
            if(jsonObject.getJSONObject("result").has("score")){
                if(jsonObject.getJSONObject("result").get("score").toString().equals("0")){
                    System.out.println("+++0");
                }else {
                    System.out.println(jsonObject.getJSONObject("result").get("score").toString().substring(0, 5));
                }
            }
        }
   }


}
