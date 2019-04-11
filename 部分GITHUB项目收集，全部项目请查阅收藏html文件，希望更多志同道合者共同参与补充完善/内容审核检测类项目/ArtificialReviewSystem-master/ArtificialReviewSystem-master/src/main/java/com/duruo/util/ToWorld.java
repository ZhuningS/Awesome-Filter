package com.duruo.util;

import com.duruo.common.MatterCode;
import com.duruo.vo.form.FormUser;
import freemarker.template.Configuration;
import freemarker.template.Template;
import org.apache.commons.collections.map.HashedMap;

import java.io.*;
import java.util.*;

/**
 * Created by @Author tachai
 * date 2018/7/4 15:13
 *
 * @Email 1206966083@qq.com
 */
public class ToWorld {
    public static void main(String[] args) {
        Map<String,String> map = new HashedMap();

        //酒类

//        map.put("check","true");
//        map.put("companyName","茅台");
//        map.put("enterpriseType","国企");
//        map.put("businessAddress","上海南站");
//        map.put("businessArea","4000m2");
//        map.put("staffNumber","35464");
//        map.put("businessLicenseValidity","2020-8-6");
//        map.put("legalRepresentName","刘思");
//        map.put("legalRepresentPhone","123465487564");
//        map.put("enterpriseCategory","有限责任公司");
//        map.put("foodLicenseValidity","2018-5-6");
//        map.put("streetName","南宁路");
//        map.put("faxNumber","46748964");
//        map.put("transactorName","王五");
//        map.put("transactorPhone","15066688888");
//        ToWorld.createLiquorWord("酒类零售word",map);


          //公共卫生安全
//        map.put("applyName","张三");
//        map.put("operatingAddress","南宁路");
//        map.put("competentDepartment","计划生育委员会");
//        map.put("totalArea","2000");
//        map.put("economicType","合资");
//        map.put("ownerStreet","镇坪路");
//        map.put("ownerCommunity","北蔡镇");
//        map.put("name","刘二");
//        map.put("idCard","325464545564533");
//        map.put("headHealth","王五");
//        map.put("postalCode","65465456");
//        map.put("contactTel","1832134654");
//        map.put("totalWorkers","56");
//        map.put("directCustomerEmploy","63");
//        map.put("healthCertificateNumber","86");
//        map.put("bus09","√");
////        map.put("scopeBusiness","冷热食品加工销售");
//        map.put("airConditioningType","B");
//        map.put("drinkingWaterType","二次供水");
//        map.put("publicUtensilsType","筷子");
//        map.put("disinfectionMethod","紫外线");
//
//        ToWorld.createPublicPlaceWord("测试生成word",map);


//        //不定时人员申请表
//        map.put("enterprise","腾讯公司");
//        map.put("organizationCode","0001");
//        map.put("totalWorkers","50");
//        map.put("registeredAddress","徐汇");
//        map.put("address","张江高科");
//        map.put("phone","120110119");
//        map.put("postcode","330500");
//        map.put("linkman","马化腾");
//        map.put("untimeStation","软件开发");
//        map.put("untimePeoples","49");
//        map.put("multipleTimeStation","扫地保洁");
//        map.put("multipleTimePeoples","5");
//        map.put("multipleTimeCycle","三班倒");
//        map.put("productionCharacteristics","所需材料：");
//        map.put("postDescription","师范生拉打飞机上单了分数低雷锋精神的");
//
//        ToWorld.createWord("不定时工作",MatterCode.OTHER_WORKING_HOURS_APPLY,map);


//        //法人一证通数字证书
//        map.put("serviceType","新办");
//        map.put("unitName","上海市阿里巴巴影业");
//        map.put("unitMailingAddress","浦东新区唐镇");
//        map.put("postalCode","6545224");
//        map.put("unifiedCreditCode","98746544564f");
//        map.put("businessLicenseNumber","9874df545646");
//        map.put("accountOfHousing","6548793442123");
//        map.put("organizationCode","658741");
//        map.put("socialInsuranceNumber","985765465545");
//        map.put("legalRepresentative","张三");
//        map.put("legalIdCard","35201455564552");
//        map.put("legalLinkTel","15095654655");
//        map.put("transactorName","刘老根");
//        map.put("transactorIdCard","3461543546465");
//        map.put("transactorLinkTel","13896547851");
//        map.put("fax","56464564");
//        map.put("email","154646@163.com");

//        ToWorld.createWord("法人一证通测试",MatterCode.ELECTRONIC_DIGITAL,map);

//        map.put("typeEquipment","电梯");
//        map.put("equipmentCategory","什么类别");
//        map.put("equipmentVariety","危险品");
//        map.put("productName","电梯设备");
//        map.put("deviceCode","02312");
//        map.put("model","中型");
//        map.put("designServiceLife","五年");
//        map.put("designUnitName","中建二局");
//        map.put("manufacturingUnitName","gg电梯厂");
//        map.put("constructionUnitName","中铁三局");
//        map.put("supervisionAgency","监督院");
//        map.put("testMechanismName","试验所");
//        map.put("useUnitName","学校使用");
//        map.put("useUnitAddress","南宁路");
//        map.put("useUnitSocialCreditCode","123456789-H");
//        map.put("postalCode","100000");
//        map.put("unitNumber","003");
//        map.put("useEquipmentPlace","一号楼");
//        map.put("useDate","2018-3-2");
//        map.put("unitTel","02012122");
//        map.put("securityAdministrator","张三");
//        map.put("mobilePhone","136452455");
//        map.put("unitRightName","电梯厂");
//        map.put("unitRightCreditCode","654892345");
//        map.put("linkTel","1806554354");
//        map.put("inspectionName","检验局");
//        map.put("insectionCategory","AAA");
//        map.put("insectionReportNumber","DSFDF454645");
//        map.put("inspectionDate","2018-5-9");
//        map.put("testConclusion","良");
//        map.put("nextTestDate","2020-5-9");
//
//        ToWorld.createWord("特种设备使用证1",MatterCode.SPECIAL_EQUIPMENT1,map);

//        map.put("equipmentCategory","高危品");
//        map.put("equipmentVariety","压力管道");
//        map.put("productName","锅炉");
//        map.put("equipmentNumber","6");
//        map.put("useUnitName","7号实验室");
//        map.put("useUnitName","西藏路");
//        map.put("useUnitAddress","南宁路");
//        map.put("useEquipmentPlace","一号楼");
//        map.put("unitTel","02165555");
//        map.put("useUnitSocialCreditCode","6543218-P");
//        map.put("postalCode","63524");
//        map.put("securityAdministrator","赵四");
//        map.put("mobilePhone","138654544");
//
//        ToWorld.createWord("按单位登记表",MatterCode.SPECIAL_EQUIPMENT2,map);



        Map<String,Object> map1 = new Hashtable<>();
//        List<FormUser> list = Collections.synchronizedList(new ArrayList<>());
        List<FormUser> list = Collections.synchronizedList(new ArrayList<>());

        for(int i=0;i<=3;i++){
           FormUser user = new FormUser();
           user.setPersonName("姓名"+i);
           user.setEndDate("结束时间"+i);
           user.setIdCard("身份证"+i);
           user.setIs("否"+i);
           user.setJob("高工"+i);
           user.setRemarks("备注"+i);
           user.setWorkForm("用工形式"+i);
           user.setStartDate("开始时间"+i);
           user.setNowDate("今天"+i);
           list.add(user);
        }
        List<FormUser> blanklist = new LinkedList<>();
        for(int i=0;i<(10-list.size());i++){
            FormUser user = new FormUser();
            user.setPersonName(i+"");
            blanklist.add(user);
        }

        map1.put("listUser",list);
        map1.put("blanklist",blanklist);
        map1.put("A",6);

        ToWorld.createWord1("外来从业人员用工备案登记表",MatterCode.RECORD_REGISTRATION_OF_MIGRANT_WORKERS,map1);


    }

    /**
     * 通用生成Word方法
     * @param fileName 生成的文件名
     * @param template 模板文件名
     * @param map 数据源
     */
    public static void createWord(String fileName,String template,Map<String,String>map){

        baseCreateWord(fileName,template,map);
    }


    /**
     * 创建酒类零售商品许可证申请表
     * @param fileName 生成的文件名
     * @param map 微信传过来的数据
     */
    public static void createLiquorWord(String fileName, Map<String,String> map){
        try {

            Configuration configuration = new Configuration();
            configuration.setDefaultEncoding("utf-8");
            //指定模板路径的第二种方式    还有其他方式
            configuration.setDirectoryForTemplateLoading(new File(PropertiesUtil.getProperty("wordTemplate.Path")));


            //TODO  输出文档路径及名称
//            String path = PropertiesUtil.getProperty("evidenceFiles.Path") + MsgId + "_" + "5633" + "_" + "酒类商品零售许申请表" + "_" + "酒类商品零售许申请表.doc";
            //todo 这里是测试文件存放路径，要把上面的输出文件路径替换下面的
            File outFile = new File(PropertiesUtil.getProperty("outWord.path")+fileName+".doc");
            //以utf-8的编码读取ftl文件
            Template t =  configuration.getTemplate(MatterCode.APPLY_LIQUOR,"utf-8");
            Writer out = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(outFile), "utf-8"),10240);
            t.process(map, out);
            out.close();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    /**
     * map方法里面放对象类型
     * @param fileName
     * @param template
     * @param map
     */
    public static void createWord1(String fileName,String template,Map<String,Object>map){
        baseCreateWord(fileName,template,map);
    }




    public static void baseCreateWord(String fileName, String template, Object map){
        try {
            Configuration configuration = new Configuration();
            configuration.setDefaultEncoding("UTF-8");
            configuration.setDirectoryForTemplateLoading(new File(PropertiesUtil.getProperty("wordTemplate.Path")));

            // 这里是文件存放路径，要把上面的输出文件路径替换下面的
            File outFile = new File(PropertiesUtil.getProperty("outWord.Path")+fileName+".doc");
            //以utf-8的编码读取ftl文件
            Template t =configuration.getTemplate(template,"utf-8");

            //输入流编码成utf-8 防止下载后打开不了
            Writer w = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(outFile),"utf-8"));

            t.process(map,w);
            w.close();
        } catch (IOException e) {
            e.printStackTrace();
        }catch (Exception e){
            e.printStackTrace();
        }
    }


}
