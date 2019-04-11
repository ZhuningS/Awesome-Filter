package com.duruo.util;

import com.baidu.aip.ocr.AipOcr;
import com.baidu.aip.util.Util;
import com.duruo.dto.BusinessLicence;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONObject;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * Created by @Author tachai
 * date 2018/6/30 19:05
 *
 * @Email 1206966083@qq.com
 */

@Slf4j
public class OCR {
    private static String clientId = "11467984";
    //官网获取的API key
    private static String clientKey = "xOLiVdYTZ34y1RnmxChC7H75";
    //官网获取的 Secret Key
    private static String clientSecret = "K6KK9ib5uQBXDHfUkzRRYolICIDvog2F";

    private static AipOcr client =null;

    static {
        client = new AipOcr(clientId,clientKey,clientSecret);
    }

   public static JSONObject  checkOne(String path){
//       AipOcr client = new AipOcr(clientId,clientKey,clientSecret);
       JSONObject res = client.basicGeneral(path,new HashMap<String,String>());
//       JSONObject res = client.basicAccurateGeneral(path,new HashMap<String,String>());
       return res;
   }



   public static JSONObject checkBusinessLicense (String imagePath){
       JSONObject res = client.businessLicense(imagePath,new HashMap<String,String>());
       return  res;
   }


   public static JSONObject checkIdcardBack(String imagePath){
       // 传入可选参数调用接口
       HashMap<String, String> options = new HashMap<String, String>();
       options.put("detect_direction", "true");
       options.put("detect_risk", "false");

       //国徽的一面
       String idCardSide = "back";
       //带照片的一面
//       String idCardSide = "front";

       // 参数为本地图片路径
       JSONObject res = client.idcard(imagePath, idCardSide, options);
       return res;
   }


    public static JSONObject checkIdcardBack(byte[] bytes){
        // 传入可选参数调用接口
        HashMap<String, String> options = new HashMap<String, String>();
        options.put("detect_direction", "true");
        options.put("detect_risk", "false");

        //国徽的一面
        String idCardSide = "back";
        //带照片的一面
//       String idCardSide = "front";

        // 参数为本地图片路径
        JSONObject res = client.idcard(bytes, idCardSide, options);
        return res;
    }

   public static JSONObject checkIdcard(String imagePath){
       // 传入可选参数调用接口
       HashMap<String, String> options = new HashMap<String, String>();
       options.put("detect_direction", "true");
       options.put("detect_risk", "false");

       //国徽的一面
//       String idCardSide = "back";
       //带照片的一面
       String idCardSide = "front";

       // 参数为本地图片路径
       JSONObject res = client.idcard(imagePath, idCardSide, options);
       return res;
   }

    public static JSONObject checkIdcard(byte[] bytes){
        // 传入可选参数调用接口
        HashMap<String, String> options = new HashMap<String, String>();
        options.put("detect_direction", "true");
        options.put("detect_risk", "false");

        //带照片的一面
        String idCardSide = "front";
        //国徽的一面
//       String idCardSide = "back";

        // 参数为本地图片路径
        JSONObject res = client.idcard(bytes, idCardSide, options);
        return res;
    }


    public static JSONObject checkBackCard(String imagePath){
        // 传入可选参数调用接口
        HashMap<String, String> options = new HashMap<String, String>();


        // 参数为本地图片路径
        JSONObject res = client.bankcard(imagePath, options);
        return res;
    }
    public static JSONObject checkBackCard(byte[] bytes){
        // 传入可选参数调用接口
        HashMap<String, String> options = new HashMap<String, String>();

        // 参数为本地图片路径
        JSONObject res = client.bankcard(bytes, options);
        return res;
    }

   public static JSONObject checkBusinessLicense(byte[] bytes){
       JSONObject res = client.businessLicense(bytes,new HashMap<String,String>());
       return res;
   }


   public static BusinessLicence ocrBusinessLicence(BusinessLicence businessLicence,byte[] bytes,String imagePath){
//       JSONObject jsonObject = client.businessLicense(bytes,new HashMap<String,String>());

       JSONObject jsonObject = client.businessLicense(imagePath,new HashMap<String,String>());
       JsonParser jsonParser = new JsonParser();
       Object jsonObject1 = jsonObject.get("words_result");
       JsonObject jsonArray = (JsonObject) jsonParser.parse(jsonObject1.toString());
       businessLicence.setSocialCreditCode(StringUtils.trim(jsonArray.get("社会信用代码").getAsJsonObject().get("words").toString(),'"'));
       businessLicence.setLegalPerson(StringUtils.trim(jsonArray.get("法人").getAsJsonObject().get("words").toString(),'"'));
       businessLicence.setEstablishmentDate(StringUtils.trim(jsonArray.get("成立日期").getAsJsonObject().get("words").toString(),'"'));
       businessLicence.setIdNumber(StringUtils.trim(jsonArray.get("证件编号").getAsJsonObject().get("words").toString(),'"'));
       businessLicence.setAddress(StringUtils.trim(jsonArray.get("地址").getAsJsonObject().get("words").toString(),'"'));
       businessLicence.setUnitName(StringUtils.trim(jsonArray.get("单位名称").getAsJsonObject().get("words").toString(),'"'));
       businessLicence.setValidityPeriod(StringUtils.trim(jsonArray.get("有效期").getAsJsonObject().get("words").toString(),'"'));


       log.info(jsonArray.toString());
       return businessLicence;
   }


   public static List<String> getFileList(List<String> listFile,String fileName){
       File dir = new File(fileName);
       File[] files= dir.listFiles();
       if(files!=null){
           for(int i=0;i<files.length;i++){
               String FileName = files[i].getName();
               if(files[i].isDirectory()){
                   getFileList(listFile,files[i].getAbsolutePath());
               }else if(FileName.endsWith("jpg")){
                    listFile.add(files[i].getAbsolutePath());
               }
           }
       }
       return listFile;
   }

    public static void main(String[] args) throws IOException {

        /**
         * 营业执照识别
         */
//       String path = "C:\\Users\\asus30\\Downloads/11.jpg";
//
////       BusinessLicence businessLicence=new BusinessLicence();
////         ocrBusinessLicence(businessLicence,null,path);
////        String res = checkOne("C:/Users/asus30/Desktop/MP3/图片/微软2/潘多拉珠宝（上海）有限公司/批复文件9.jpg").toString();
//
//        System.out.println(checkBusinessLicense(path).toString());


        /**
         * 循环遍历ORC图片使用基础方法
         */
//       List<String> list = new ArrayList<>();
//       //C:\Users\asus30\Desktop\MP3\图片\微软2
//       getFileList(list,"C:\\Users\\asus30\\Desktop\\事项\\酒类经营许可证\\图片\\酒类经营许可证样章");
//
//       for(String str:list){
//           File file = new File(str.replace("jpg","txt"));
//           if(!file.exists()){
//               file.createNewFile();
//           }
//           System.out.println(str.replaceAll("\\\\","/"));
//           String res = checkOne(str.replaceAll("\\\\","/")).toString();
//           System.out.println(res);
//           try {
//               FileOutputStream out = new FileOutputStream(file);
//               BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(out));
//               writer.write(res);
//               writer.flush();
//               writer.close();
//           }catch (Exception e){
//               System.out.println(e.getMessage());
//           }
//       }

        String path="c:/Users/asus30/Pictures/4564.png";
        String path2="c:/Users/asus30/Pictures/002.jpg";
        String path3="C:\\Users\\asus30\\Desktop\\人社\\青年创业\\许泓洋/001.jpg";
        String path4="C:\\Users\\asus30\\Desktop\\人社\\青年创业\\许泓洋/002.jpg";
        String path5="C:\\Users\\asus30\\Desktop\\人社\\青年创业\\许泓洋/003.jpg";
//        System.out.println(checkBackCard(path2));
//        System.out.println(checkIdcard(path));
//        File file = new File(path);
//        FileInputStream fis = new FileInputStream(file);
//        byte[] b = new byte[fis.available()];
//        fis.read(b);
//        for(byte bb:b){
//            Integer.toBinaryString(bb);
//        }


        JSONObject jsonObject1 = checkIdcard(Util.readFileByBytes(path3));
        System.out.println(jsonObject1);
//        JSONObject jsonObject1 = checkIdcard(FileUtil.readFileByBytes(path));
//        JSONObject jsonObject2 = checkIdcard(FileUtil.readFileByBytes(path4));
//        JSONObject jsonObject3 = checkBackCard(FileUtil.readFileByBytes(path3));

//          readImageFile();
//        System.out.println(jsonObject3.getJSONObject("result").getString("bank_name")==null?"为空":"非空");
//        System.out.println(jsonObject3.toString());

        // {"log_id":7905694305073008862,"words_result":{},"words_result_num":0,"image_status":"reversed_side","direction":3}


//        JSONObject jsonObject = checkIdcardBack(path4);
//
//       if(jsonObject.getJSONObject("words_result").has("失效日期")) {
//           System.out.println("123");
//       }else {
//           System.out.println(jsonObject.toString());
//       }



//        String mm = "是@@798786746465";
//        String temp = mm.toString().replaceAll("[\\pP‘’“”]", "").toUpperCase();
//        System.out.println(temp);


//        if (jsonObject1.get("words_result") != null) {
//            if (jsonObject1.getJSONObject("words_result").getJSONObject("姓名") != null) {
//                String name = jsonObject1.getJSONObject("words_result").getJSONObject("姓名").getString("words");
//                System.out.println(name);
//            }
//            if (jsonObject1.getJSONObject("words_result").getJSONObject("住址") != null) {
//                String address = jsonObject1.getJSONObject("words_result").getJSONObject("住址").getString("words");
//                System.out.println(address);
//            }
//            if (jsonObject1.getJSONObject("words_result").getJSONObject("公民身份号码") != null) {
//                String idCard = jsonObject1.getJSONObject("words_result").getJSONObject("公民身份号码").getString("words");
//                System.out.println(idCard);
//            }
//        }

    }

}
