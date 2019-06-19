package com.duruo.util;

import java.util.Calendar;
import java.util.Date;

/**
 * Created by @Author tachai
 * date 2018/8/18 15:26
 * GitHub https://github.com/TACHAI
 * Email 1206966083@qq.com
 */
public class Demo {
    public static void main(String[] args) {
        String idCard="330382198310235738";
        Date regDete = new Date();
        Date birthDate = DateTimeUtil.strToDate(idCard.substring(6,14),"yyyyMMdd");
        if(regDete!=null){
            Calendar cld = Calendar.getInstance();
            Calendar cal = Calendar.getInstance();
            cal.setTime(birthDate);
            cld.setTime(regDete);
            int yearReg=regDete.getYear();
            int monthReg = regDete.getMonth();
            int dayReg = cld.get(Calendar.DAY_OF_MONTH);
            System.out.println("birth"+birthDate);
            System.out.println("yearReg"+yearReg);
            System.out.println("monthReg"+monthReg);
            System.out.println("dayReg"+dayReg);
            int age = yearReg-(Integer.parseInt(idCard.substring(6,10))-1900);
            if(age>35){
                System.out.println("注册公司时年龄大于35岁1");
//                qchuang.setOpinion("注册公司时年龄大于35岁");
//                qchuangMapper.updateByPrimaryKey(qchuang);
//                return sentWord(userId,"96794927C872FD98AD1982B61BBE2223");
            } else if(age==35) {
                if(monthReg>birthDate.getMonth()){
                    //todo
                    System.out.println("注册公司时年龄大于35岁2");
//                    qchuang.setOpinion("注册公司时年龄大于35岁");
//                    qchuangMapper.updateByPrimaryKey(qchuang);
//                    return sentWord(userId,"96794927C872FD98AD1982B61BBE2223");
                }else if(monthReg==birthDate.getMonth()){
                    if(dayReg>=cal.get(Calendar.DAY_OF_MONTH)){
                        System.out.println(dayReg+"注册日"+cal.get(Calendar.DAY_OF_MONTH)+"出生日");
                        System.out.println(birthDate.getMonth()+"出生月"+birthDate.getDay()+"出生日");

                        System.out.println("注册公司时年龄大于35岁3");
//                        qchuang.setOpinion("注册公司时年龄大于35岁");
//                        qchuangMapper.updateByPrimaryKey(qchuang);
//                        return sentWord(userId,"96794927C872FD98AD1982B61BBE2223");
                    }
                }
            }
        }
    }
}
