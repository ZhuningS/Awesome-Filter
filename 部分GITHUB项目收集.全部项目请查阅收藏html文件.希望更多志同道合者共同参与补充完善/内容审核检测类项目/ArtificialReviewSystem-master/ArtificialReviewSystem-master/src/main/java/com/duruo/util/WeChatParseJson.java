package com.duruo.util;

import com.duruo.dto.Duihua;
import com.duruo.dto.Objectjson;
import com.duruo.dto.Task;
import com.google.gson.*;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.json.JSONObject;

import java.util.*;

/**
 * Created by @Author tachai
 * date 2018/7/10 16:31
 *
 * @Email 1206966083@qq.com
 */
@Slf4j
public class WeChatParseJson {


    //无效代码
    public static JsonObject parseJson(String key, JsonObject jsonObject) {
        if (jsonObject.get("id").toString().equals(key)) {
            return jsonObject;
        } else {
            JsonArray jsonArray = jsonObject.getAsJsonArray("answer");
            if (jsonArray != null) {
                int len = jsonArray.size();
                for (int i = 0; i < len; i++) {

                    WeChatParseJson.parseJson(key, (JsonObject) jsonArray.get(i));
                }
            }

        }
        return null;
    }


    /**
     * 清除任务
     *
     * @param weChatId
     * @param flowName
     * @return
     */
    public static String clearTask(String weChatId, String flowName) {
        Task task = new Task();
        task.setUserId(weChatId);

        task.setTaskName(flowName);
        Duihua duihua = new Duihua();
        duihua.setData(task);
        duihua.setType("userTask");
        duihua.setEdit("3");

        String data = new Gson().toJson(duihua);

        String res = HttpUtil.okhttp(PropertiesUtil.getProperty("duihua.url"), data);

        log.info("删除任务；{}", flowName);

        return res;
    }


    /**
     * 删除session
     * @param weChatId
//     * @param flowName
     * @return
     */
    public static String clearSession(String weChatId) {
        Task task = new Task();
        task.setUserId(weChatId);

//        task.setTaskName(flowName);
        Duihua duihua = new Duihua();
        duihua.setData(task);
        duihua.setType("session");
        duihua.setEdit("3");

        String data = new Gson().toJson(duihua);

        String res = HttpUtil.okhttp(PropertiesUtil.getProperty("duihua.url"), data);

        log.info("删除session；{}", weChatId);

        return res;
    }




    /**
     * 多个数据源返回有数据的
     *
     * @param weChatId
     * @param taskName1 要输入的流程名1
     * @param taskName2 要输入的流程名2
     * @return
     */
    public static String checkNotNull(String weChatId, String taskName1, String taskName2, String taskName3) {
        Task task = new Task();
        task.setUserId(weChatId);
        // 设置微信接口要的数据
        task.setTaskName(taskName1);
        Duihua duihua = new Duihua();
        duihua.setData(task);
        duihua.setType("userTask");
        duihua.setEdit("1");

        String data = new Gson().toJson(duihua);
        //todo session里面
        String res = HttpUtil.okhttp(PropertiesUtil.getProperty("duihua.url"), data);


        task.setTaskName(taskName2);
        duihua.setData(task);
        String data1 = new Gson().toJson(duihua);
        String res1 = HttpUtil.okhttp(PropertiesUtil.getProperty("duihua.url"), data1);


        task.setTaskName(taskName3);
        duihua.setData(task);
        String data2 = new Gson().toJson(duihua);
        String res2 = HttpUtil.okhttp(PropertiesUtil.getProperty("duihua.url"), data2);


        //实时查询
        Map<String, String> map = new Hashtable<>();
        map.put("userId", weChatId);
        duihua.setData(map);
        duihua.setType("session");
        duihua.setEdit("1");
        String data0 = new Gson().toJson(duihua);
        String res0 = HttpUtil.okhttp(PropertiesUtil.getProperty("duihua.url"), data0);

        if (res0.length() > 50) {
            log.info("返回的数据：{}", res0);
            return res0;
        } else if (res.length() > 50) {
            log.info("返回的数据：{}", res);
            clearTask(weChatId,taskName1);
            clearSession(weChatId);
            return res;
        } else if (res1.length() > 50) {
            log.info("返回的数据：{}", res1);
            clearTask(weChatId,taskName2);
            clearSession(weChatId);
            return res1;
        } else if(res2.length()>50) {
            log.info("返回的数据：{}", res2);
            clearTask(weChatId,taskName3);
            clearSession(weChatId);
            return res2;
        }

        return "空";
    }


    /**
     * 一个流程里面
     *
     * @param weChatId
     * @param taskName1
     * @return
     */
    public static String checkNotNull(String weChatId, String taskName1) {
        Task task = new Task();
        task.setUserId(weChatId);
        //todo 设置微信接口要的数据
        task.setTaskName(taskName1);
        Duihua duihua = new Duihua();
        duihua.setData(task);
        duihua.setType("userTask");
        duihua.setEdit("1");

        String data = new Gson().toJson(duihua);

        String res = HttpUtil.okhttp(PropertiesUtil.getProperty("duihua.url"), data);

        return res;
    }


    /**
     * 递归得到所有的json
     *
     * @param jsonObject
     * @return
     */
    public static List<Objectjson> diguiJson(List<Objectjson> listJson, JsonObject jsonObject) {

        JsonArray jsonArray = jsonObject.getAsJsonArray("answer");
        if (jsonArray != null) {
            int len = jsonArray.size();
            for (int i = 0; i < len; i++) {
                JsonObject json = (JsonObject) jsonArray.get(i);
                Objectjson objectjson = new Objectjson();
                objectjson.setJsonObject(json);
                objectjson.setKey(json.get("id").toString());
                listJson.add(objectjson);
                WeChatParseJson.diguiJson(listJson, json);
            }
        }

        return listJson;

    }


    /**
     * 通过id得到jsonObject对象
     *
     * @param id
     * @param jsonObject
     * @return
     */
    public static JsonObject getJsonObjectById(Integer id, JsonObject jsonObject) {
        List<Objectjson> list = new ArrayList<>();
        List<Objectjson> temp = WeChatParseJson.diguiJson(list, jsonObject);
        Objectjson objectjson = temp.stream().filter(u -> u.getKey().equals(id.toString()))
                .findAny()
                .orElse(null);
        return objectjson.getJsonObject();
    }

    /**
     * 通过问题id得到问题的值
     *
     * @param jsonObject
     * @param id
     * @return
     */
    public static String getValueById(JsonObject jsonObject, Integer id) {
        JsonObject jsonObject1 = getJsonObjectById(id, jsonObject);
        JsonArray jsonArray = jsonObject1.getAsJsonArray("answer");
        JsonObject jsonObject2 = (JsonObject) jsonArray.get(0);


        if (null != jsonObject2.get("userInput")) {
            //得到userInput中的值去掉首尾的“”
            return com.duruo.util.StringUtils.trim(jsonObject2.get("userInput").getAsJsonArray().get(0).toString().trim(), '"');
        } else {
            return " ";
        }
    }

    /**
     * 得到json对象中userQuery中的值
     *
     * @return
     */
    public static String getUserQuery(JsonObject jsonObject, Integer id) {

        JsonObject jsonObject3 = WeChatParseJson.getJsonObjectById(id, jsonObject);
        JsonArray jsonArray3 = jsonObject3.getAsJsonArray("userQuery");

        if (null != jsonArray3) {
            return com.duruo.util.StringUtils.trim(jsonArray3.get(jsonArray3.size() - 1).toString(), '"');
//            return jsonArray3.get(jsonArray3.size()-1).toString().replace("\"","");
        }
        return null;
    }


    /**
     * 递归json Answer对象
     *
     * @param key        递归的键
     * @param n          递归的层数
     * @param jsonObject 返回的json对象
     * @return
     */
    public static JsonObject recursionJson(String key, int n, JsonObject jsonObject) {
        JsonObject json;
        if (n == 0) {
            return jsonObject;
        } else {
            JsonArray jsonArray = jsonObject.getAsJsonArray(key);

            json = (JsonObject) jsonArray.get(0);

        }
        return recursionJson(key, n - 1, json);
    }


    /**
     * @param key        递归的键
     * @param n          递归的层数
     * @param i          递归第几个对象
     * @param jsonObject 返回的json对象
     * @return
     */
    public static JsonObject recursionJson(String key, int n, int i, JsonObject jsonObject) {
        JsonObject json;
        if (n == 0) {
            return jsonObject;
        } else {
            JsonArray jsonArray = jsonObject.getAsJsonArray(key);

            json = (JsonObject) jsonArray.get(i);

        }
        return recursionJson(key, n - 1, i, json);
    }


    /**
     * 最后一层answer得到用户输入的值
     *
     * @param jsonObject 传入的json对象
     * @param i          第几个问题的答案
     * @return
     */
    public static String getValue(JsonObject jsonObject, int i) {

        JsonArray jsonArray = jsonObject.getAsJsonArray("answer");

        JsonObject value = (JsonObject) jsonArray.get(i);

        JsonObject value1 = (JsonObject) value.getAsJsonArray("answer").get(0);

        if (null != value1.get("userInput")) {
            return value1.get("userInput").getAsJsonArray().get(0).toString().trim();
        } else {
            return "false";
        }
    }


    /**
     * 解析微信json返回的值
     *
     * @param json
     * @return
     */
    public static JsonObject parseWeChatJson(JsonObject json) {

        try {

            JsonObject json1 = json.getAsJsonObject("info");

            JsonObject json2 = json1.getAsJsonObject("taskInfo");
            //实时查询中不会有taskInfo
            if (null == json2) {
                JsonObject json3 = json1.getAsJsonObject("tasks");
                return json3;
            } else {
                JsonObject json3 = json2.getAsJsonObject("tasks");
                return json3;
            }

        } catch (JsonIOException e) {
            e.getStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;

    }


    /**
     * 酒类零售许可证书
     *
     * @param jsonObject
     * @return
     */
    public static Map<String, String> liquorSigle(JsonObject jsonObject) {


        Map<String, String> map = new HashMap<>();
        map.put("companyName", WeChatParseJson.getValueById(jsonObject, 5001));
        map.put("legalRepresentName", WeChatParseJson.getValueById(jsonObject, 5007));
        map.put("enterpriseType", WeChatParseJson.getValueById(jsonObject, 5003));

        //企业类型是有多种  选择最后一个值
        map.put("enterpriseCategory", WeChatParseJson.getUserQuery(jsonObject, 5005));

        map.put("businessAddress", WeChatParseJson.getValueById(jsonObject, 5017));
        map.put("streetName", WeChatParseJson.getValueById(jsonObject, 5011));
        map.put("businessArea", WeChatParseJson.getValueById(jsonObject, 5019));
        map.put("legalRepresentPhone", WeChatParseJson.getValueById(jsonObject, 5009));
        map.put("staffNumber", WeChatParseJson.getValueById(jsonObject, 5015));
        map.put("faxNumber", WeChatParseJson.getValueById(jsonObject, 5013));
        map.put("businessLicenseValidity", WeChatParseJson.getValueById(jsonObject, 5021));
        map.put("foodLicenseValidity", WeChatParseJson.getValueById(jsonObject, 5023));
        map.put("transactorName", WeChatParseJson.getValueById(jsonObject, 5025));
        map.put("transactorPhone", WeChatParseJson.getValueById(jsonObject, 5027));

        return map;
    }


    /**
     * 解析公共卫生安全模块填表
     */
    public static Map<String, String> publicHelth(JsonObject jsonObject) {
        Map<String, String> map = new HashMap<>();
        map.put("applyName", WeChatParseJson.getValueById(jsonObject, 7055));
        map.put("operatingAddress", WeChatParseJson.getValueById(jsonObject, 7057));
        map.put("competentDepartment", WeChatParseJson.getValueById(jsonObject, 7059));
        map.put("totalArea", WeChatParseJson.getValueById(jsonObject, 7061));
        map.put("ownerStreet", WeChatParseJson.getValueById(jsonObject, 7074));
        map.put("ownerCommunity", WeChatParseJson.getValueById(jsonObject, 7076));
        map.put("personName", WeChatParseJson.getValueById(jsonObject, 7078));
        map.put("idCard", WeChatParseJson.getValueById(jsonObject, 7080));
        map.put("headHealth", WeChatParseJson.getValueById(jsonObject, 7082));
        map.put("postalCode", WeChatParseJson.getValueById(jsonObject, 7084));
        map.put("contactTel", WeChatParseJson.getValueById(jsonObject, 7086));
        map.put("totalWorkers", WeChatParseJson.getValueById(jsonObject, 7088));
        map.put("directCustomerEmploy", WeChatParseJson.getValueById(jsonObject, 7090));
        map.put("healthCertificateNumber", WeChatParseJson.getValueById(jsonObject, 7092));


        //饮用水  选择最后一个值
        map.put("drinkingWaterType", WeChatParseJson.getUserQuery(jsonObject, 7094).toUpperCase());

        //空调  选择最后一个值
        map.put("airConditioningType", WeChatParseJson.getUserQuery(jsonObject, 7105).toUpperCase());

        //经济类型  选择最后一个值
        JsonObject jsonObject3 = WeChatParseJson.getJsonObjectById(7063, jsonObject);

        String temp = WeChatParseJson.getUserQuery(jsonObject, 7063);
        if (WeChatParseJson.getUserQuery(jsonObject, 7063).equals("A")) {
            temp = "企业";
        } else if (WeChatParseJson.getUserQuery(jsonObject, 7063).equals("B")) {
            temp = "企业分支机构";
        } else if (WeChatParseJson.getUserQuery(jsonObject, 7063).equals("C")) {
            temp = "个体工商户";
        } else if (WeChatParseJson.getUserQuery(jsonObject, 7063).equals("D")) {
            temp = "事业单位";
        } else if (WeChatParseJson.getUserQuery(jsonObject, 7063).equals("E")) {
            temp = "民办非企业单位";
        }

        map.put("economicType", temp);

        return map;
    }

    /**
     * 数字证书办理
     *
     * @param jsonObject
     */
    public static Map<String, String> electronicDigital(JsonObject jsonObject) {
        Map<String, String> map = new HashMap<>();
        map.put("unitName", WeChatParseJson.getValueById(jsonObject, 8002));
        map.put("unitMailingAddress", WeChatParseJson.getValueById(jsonObject, 8004));
        map.put("postalCode", WeChatParseJson.getValueById(jsonObject, 8006));
        map.put("unifiedCreditCode", WeChatParseJson.getValueById(jsonObject, 8008));
        String value = WeChatParseJson.getValueById(jsonObject, 8010);
        map.put("businessLicenseNumber",value.equals("无")?"":value);
        String value1 = WeChatParseJson.getValueById(jsonObject, 8012);
        map.put("accountOfHousing",value1.equals("无")?"":value1 );
        String value2 = WeChatParseJson.getValueById(jsonObject, 8014);
        map.put("organizationCode", value2.equals("无")?"":value2);
        String value3 = WeChatParseJson.getValueById(jsonObject, 8014);
        map.put("socialInsuranceNumber", value3.equals("无")?"":value3);
        map.put("legalRepresentative", WeChatParseJson.getValueById(jsonObject, 8018));
        map.put("legalIdCard", WeChatParseJson.getValueById(jsonObject, 8020));
        map.put("legalLinkTel", WeChatParseJson.getValueById(jsonObject, 8022));
        map.put("transactorName", WeChatParseJson.getValueById(jsonObject, 8024));
        map.put("transactorIdCard", WeChatParseJson.getValueById(jsonObject, 8026));

        map.put("transactorLinkTel", WeChatParseJson.getValueById(jsonObject, 8028));
        map.put("email", WeChatParseJson.getValueById(jsonObject, 8030));
        map.put("fax", WeChatParseJson.getValueById(jsonObject, 8032));
        return map;
    }

    /**
     * 生成特种设备按台套
     *
     * @param jsonObject
     * @return
     */
    public static Map<String, String> specialEquipment1(JsonObject jsonObject) {

        Map<String, String> map = Collections.synchronizedMap(new HashMap<>());

        map.put("typeEquipment", WeChatParseJson.getValueById(jsonObject, 6028));
        map.put("equipmentCategory", WeChatParseJson.getValueById(jsonObject, 6004));
        map.put("productName", WeChatParseJson.getValueById(jsonObject, 6008));
        map.put("model", WeChatParseJson.getValueById(jsonObject, 6032));
        map.put("designUnitName", WeChatParseJson.getValueById(jsonObject, 6036));
        map.put("constructionUnitName", WeChatParseJson.getValueById(jsonObject, 6040));
        map.put("testMechanismName", WeChatParseJson.getValueById(jsonObject, 6044));
        map.put("equipmentVariety", WeChatParseJson.getValueById(jsonObject, 6006));
        map.put("deviceCode", WeChatParseJson.getValueById(jsonObject, 6030));
        map.put("designServiceLife", WeChatParseJson.getValueById(jsonObject, 6034));
        map.put("manufacturingUnitName", WeChatParseJson.getValueById(jsonObject, 6038));
        map.put("supervisionAgency", WeChatParseJson.getValueById(jsonObject, 6042));
        map.put("useUnitName", WeChatParseJson.getValueById(jsonObject, 6010));
        map.put("useUnitAddress", WeChatParseJson.getValueById(jsonObject, 6012));
        map.put("useUnitSocialCreditCode", WeChatParseJson.getValueById(jsonObject, 6018));
        map.put("unitNumber", WeChatParseJson.getValueById(jsonObject, 6046));
        map.put("useDate", WeChatParseJson.getValueById(jsonObject, 6048));
        map.put("securityAdministrator", WeChatParseJson.getValueById(jsonObject, 6022));
        map.put("unitRightName", WeChatParseJson.getValueById(jsonObject, 6050));
        map.put("unitRightCreditCode", WeChatParseJson.getValueById(jsonObject, 6052));
        map.put("inspectionName", WeChatParseJson.getValueById(jsonObject, 6056));
        map.put("insectionCategory", WeChatParseJson.getValueById(jsonObject, 6058));
        map.put("inspectionDate", WeChatParseJson.getValueById(jsonObject, 6062));
        map.put("nextTestDate", WeChatParseJson.getValueById(jsonObject, 6066));
        map.put("postalCode", WeChatParseJson.getValueById(jsonObject, 6020));
        map.put("useEquipmentPlace", WeChatParseJson.getValueById(jsonObject, 6014));
        map.put("unitTel", WeChatParseJson.getValueById(jsonObject, 6016));
        map.put("mobilePhone", WeChatParseJson.getValueById(jsonObject, 6024));
        map.put("linkTel", WeChatParseJson.getValueById(jsonObject, 6054));
        map.put("insectionReportNumber", WeChatParseJson.getValueById(jsonObject, 6060));
        map.put("testConclusion", WeChatParseJson.getValueById(jsonObject, 6064));

        return map;
    }


    /**
     * 生成特种设备按单位
     *
     * @param jsonObject
     * @return
     */
    public static Map<String, String> specialEquipment2(JsonObject jsonObject) {
        Map<String, String> map = Collections.synchronizedMap(new HashMap<>());

        map.put("equipmentCategory", WeChatParseJson.getValueById(jsonObject, 6004));
        map.put("productName", WeChatParseJson.getValueById(jsonObject, 6008));
        map.put("equipmentVariety", WeChatParseJson.getValueById(jsonObject, 6006));
        map.put("useUnitName", WeChatParseJson.getValueById(jsonObject, 6010));
        map.put("useUnitAddress", WeChatParseJson.getValueById(jsonObject, 6012));
        map.put("useUnitSocialCreditCode", WeChatParseJson.getValueById(jsonObject, 6018));
        map.put("securityAdministrator", WeChatParseJson.getValueById(jsonObject, 6022));
        map.put("postalCode", WeChatParseJson.getValueById(jsonObject, 6020));
        map.put("unitTel", WeChatParseJson.getValueById(jsonObject, 6016));
        map.put("mobilePhone", WeChatParseJson.getValueById(jsonObject, 6024));
        map.put("equipmentNumber", WeChatParseJson.getValueById(jsonObject, 6026));
        map.put("useEquipmentPlace", WeChatParseJson.getValueById(jsonObject, 6014));

        return map;
    }


    /**
     * 外来从业人员用工备案登记
     * @param jsonObject
     * @return
     */
    public static Map<String,Object> recordRegistrationOfMaigrantWorkers(JsonObject jsonObject){
        return null;
    }


}
