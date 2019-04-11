package com.duruo.util;

import com.duruo.vo.QchaungVO;
import com.duruo.po.Qchuang;
import com.duruo.vo.form.ApplyLiquorVO;
import com.duruo.vo.form.ElectronicDigitalVO;
import com.duruo.vo.form.PublicPlaceHealthPermitVO;
import com.google.gson.Gson;
import lombok.extern.slf4j.Slf4j;
import org.apache.poi.ss.formula.functions.T;
import org.springframework.beans.BeanUtils;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

/**
 * Created by @Author tachai
 * date 2018/6/30 18:28
 *
 * @Email 1206966083@qq.com
 */
@Slf4j
public class Test {
    private static String clientId = "11467984";
    //官网获取的API key
    private static String clientKey = "xOLiVdYTZ34y1RnmxChC7H75";
    //官网获取的 Secret Key
    private static String clientSecret = "K6KK9ib5uQBXDHfUkzRRYolICIDvog2F";


    public static void main(String[] args) {
//        Map<String,String> codeMap = new HashMap<>();
//        String verifyCode = String.valueOf(new Random().nextInt(899999) + 100000);
//        codeMap.put("code",verifyCode);
//        String code = new Gson().toJson(codeMap);
//        System.out.println(code);


//        System.out.println(MD5Util.MD5EncodeUtf8("是"));
//        System.out.println(MD5Util.MD5EncodeUtf8("否"));


//        String idcard="330382199602155738";
//        System.out.println(Integer.parseInt(idcard.substring(6,10)));
//        System.out.println(2018-Integer.parseInt(idcard.substring(6,10))+"");
//
//        Qchuang qchuang = new Qchuang();
//        QchaungVO qchaungVO = new QchaungVO();
//        qchuang.setPersonName("张三");
//        qchuang.setStatus(1);
//        qchuang.setOpinion("是");
//        BeanUtils.copyProperties(qchuang,qchaungVO);
//        System.out.println(qchaungVO.getPersonName());



        String date="20270123";

        String year = date.substring(0,4);
        System.out.println("year:"+year);
        String month = date.substring(4,6);
        System.out.println("mouth:"+month);
        String day = date.substring(6,8);
        System.out.println("day:"+day);
        String time = year+"-"+month+"-"+day;
        System.out.println("time:"+time);
        Date source = DateTimeUtil.strToDate(time,"yyyy-MM-dd");
        System.out.println("source:"+source);
        Date target = new Date();
        target.getDay();
        System.out.println("days");
        System.out.println("target:"+target);
        String temp = DateTimeUtil.dateToStr(target);
        temp = temp.substring(0,10);
        target = DateTimeUtil.strToDate(temp,"yyyy-MM-dd");

        if(target.getTime()>source.getTime()){
            System.out.println("否");
        }
        System.out.println(target);



    }



//    public static void main(String[] args) {
//
//
////        String path = "F:\\JAVA\\weixin\\kewei_file\\维迈建筑物多维成象系统\\1.jpg";
//////        PdfToImage.pdfToImagePath()
//////       String xuhongyang =  OcrService.generalOCR(path);
////        AipOcr client = new AipOcr(clientId,clientKey,clientSecret);
////        JSONObject res = client.basicGeneral(path,new HashMap<String,String>());
////       System.out.println(res.toString(2));
//
//
////        ApplyLiquorVO vo = new ApplyLiquorVO();
//        ElectronicDigitalVO vo = new ElectronicDigitalVO();
////        Field[] f = ApplyLiquorVO.class.getDeclaredFields();
//        Field[] f = ElectronicDigitalVO.class.getDeclaredFields();
//        for (int i=0;i<f.length; i++){
//            String attributeName = f[i].getName();
//            String methodName = attributeName.substring(0,1).toUpperCase()+attributeName.substring(1);
//            Method setMethod = null;
//            try {
////                setMethod = ApplyLiquorVO.class.getMethod("set"+methodName,String.class);
//                setMethod = ElectronicDigitalVO.class.getMethod("set"+methodName,String.class);
//                setMethod.invoke(vo,attributeName+"赋值");
////                f[i].set(vo,"直接赋值");
//            } catch (NoSuchMethodException e) {
//                e.printStackTrace();
//                e.printStackTrace();
//            } catch (IllegalAccessException e) {
//                e.printStackTrace();
//            } catch (InvocationTargetException e) {
//
//                e.printStackTrace();
//            }
//        }
//        String data = new Gson().toJson(vo);
//        log.error(data);
//        System.out.println(data);
//
//
//    }
}
