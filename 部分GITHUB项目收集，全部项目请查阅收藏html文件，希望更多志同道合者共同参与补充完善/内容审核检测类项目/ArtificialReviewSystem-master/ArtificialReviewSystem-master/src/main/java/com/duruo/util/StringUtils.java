package com.duruo.util;

import lombok.extern.slf4j.Slf4j;

import java.util.Date;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by @Author tachai
 * date 2018/7/17 11:03
 *
 * @Email 1206966083@qq.com
 */
@Slf4j
public class StringUtils {

    /**
     * 去除前后指定字符
     * @param args   目标字符串
     * @param beTrim 要删除的指定字符
     * @return       删除之后的字符串
     */
    public static String trim(String args,char beTrim){
        int st = 0;
        int len = args.length();
        char[] val = args.toCharArray();
        char sbeTrim = beTrim;

        while (val[st]<=sbeTrim){
            st++;
        }
        while (val[len-1]<=sbeTrim){
            len--;
        }
        return ((st>0)||(len<args.length()))?args.substring(st,len):args;
    }


    /**
     * @param str
     * @return
     */
    public static boolean isInteger(String str) {
        Pattern pattern = Pattern.compile("^[-\\+]?[\\d]*$");
        return pattern.matcher(str).matches();
    }


    /**
     * 判断字符串中包含数字是数字有小数点正负号
     * @param str
     * @return
     */
    public static boolean isNum(String str){
        Pattern pattern = Pattern.compile("\\+?\\-?[0-9]+.?[0-9]*");
        Matcher matcher = pattern.matcher(str);
        int i=0;
        while (matcher.find()) {
            System.out.println(matcher.group());
            i++;
        }
        if(i>1){
            return false;
        }
        return true;
    }

    public static void main(String[] args) {
//        String mm = "是的范德萨发asda+123.asda似懂非懂";
////        Pattern pattern = Pattern.compile("([\\+\\-]?\\d*?\\.?\\d*?)");
//        Pattern pattern = Pattern.compile("\\+?\\-?[0-9]+.?[0-9]*");
//        Matcher matcher = pattern.matcher(mm);
//        int i=0;
//        while (matcher.find()) {
//            System.out.println(matcher.group());
//            i++;
//        }


        String temp ="04-1月 -17 12.00.00.000000000 上午";
        Date mm1 = DateTimeUtil.strToDate(temp.substring(0,9).toString().replace("月", "").replace(" ",""), "dd-MM-yy");
        System.out.println(mm1.toString());
    }

}
