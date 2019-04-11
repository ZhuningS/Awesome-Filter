package com.duruo.util;

import com.duruo.common.DataSourceContextHolder;
import com.duruo.dao.CorpMapper;
import com.duruo.po.Corp;
import org.springframework.beans.factory.annotation.Autowired;

import javax.xml.crypto.Data;
import java.math.BigDecimal;
import java.util.Date;

/**
 * Created by @Author tachai
 * date 2018/9/17 12:16
 * GitHub https://github.com/TACHAI
 * Email 1206966083@qq.com
 */
public class CheckQchuang {
    @Autowired
    private CorpMapper corpMapper;

    private   String checkUniScId(String uniScId){
        //切换数据源到oracle
        DataSourceContextHolder.setDBType("oracle");

        Corp corp = corpMapper.selectByUniScId(uniScId);

        //切换数据源到mysql
        DataSourceContextHolder.setDBType("mysql");
        if(corp!=null){
//           1.判断企业经营范围（中介和劳务派遣打回）
            if(corp.getBusinessScope().indexOf("劳务派遣")!=-1||corp.getBusinessScope().indexOf("中介")!=-1){
                return "否";
            }
//           2.判断企业注册时间（判断注册时间是否为“上一年”如：2018年办理，判断企业注册时间是否为2017年，之前注册的都打回）
            Date date = new Date();
            date.getYear();
            if(corp.getEstablishDate().indexOf(date.getYear()-1+"")!=-1){
                return "否";
            }

////3.判断企业注册资金（判断注册资金是不是200W以下，以上的都打回）
            if(corp.getRegCapital().compareTo(new BigDecimal(2000000))>0){
                return "否";
            }
//           4.判断企业营业地点（是否是在徐汇）
            //可以不做判断
            if(corp.getBusinessAddress().indexOf("徐汇")==-1){
                return "否";
            }
////5.是否是合伙企业（合伙企业不能办）

        }
        return "没有找到相关的工商信息，可能输入的同一信用代码有误";
    }


    public static void main(String[] args) {
        String date = "02-12月-93 12.00.00.000000000 上午";
        System.out.println(DateTimeUtil.strToDate(date.substring(0,9).replace("月",""),"dd-MM-yy"));

        Date now = new Date();

        System.out.println(now.getYear()-100);
    }

}
