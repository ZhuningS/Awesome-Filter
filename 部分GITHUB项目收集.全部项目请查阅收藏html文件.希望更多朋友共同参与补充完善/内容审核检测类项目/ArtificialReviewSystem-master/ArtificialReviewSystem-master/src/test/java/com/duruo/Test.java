package com.duruo;

/**
 * Created by @Author tachai
 * date 2018/7/24 19:06
 *
 * @Email 1206966083@qq.com
 */
public class Test {
    public static void main(String[] args) {
        String number = "137654895465";
        String[] str = number.split("");
//       for(String mm:str){
//           System.out.println("生成"+mm);
//       }

       for(int i=0;i<str.length;i++){
           System.out.println("A"+i);
       }
    }
}
