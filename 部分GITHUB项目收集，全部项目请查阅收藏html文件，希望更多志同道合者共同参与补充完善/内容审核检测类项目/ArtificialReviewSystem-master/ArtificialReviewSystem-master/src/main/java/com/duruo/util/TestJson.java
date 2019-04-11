package com.duruo.util;

import com.alibaba.fastjson.JSON;
import com.duruo.common.ServerResponse;
import com.duruo.dto.Query;
import com.google.gson.*;
import com.iflytek.msp.cpdb.lfasr.client.LfasrClientImp;
import com.iflytek.msp.cpdb.lfasr.exception.LfasrException;
import com.iflytek.msp.cpdb.lfasr.model.LfasrType;
import com.iflytek.msp.cpdb.lfasr.model.Message;
import com.iflytek.msp.cpdb.lfasr.model.ProgressStatus;
import org.json.JSONObject;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.HashMap;

/**
 * Created by @Author tachai
 * date 2018/7/10 10:47
 *
 * @Email 1206966083@qq.com
 */
public class TestJson {

    public static void main(String[] args) {
        LfasrType type = LfasrType.LFASR_STANDARD_RECORDED_AUDIO;
        // 等待时长（秒）
        int sleepSecond = 1;
        // 初始化LFASR实例
        LfasrClientImp lc = null;

        try {
            //初始化这里要加appid
            lc = LfasrClientImp.initLfasrClient("5b724a39","33213dc3772dbf009d6775d02bb7888f");
//            lc=LfasrClientImp.initLfasrClient();
        } catch (LfasrException e) {
            // 初始化异常，解析异常描述信息
            Message initMsg = JSON.parseObject(e.getMessage(), Message.class);
            System.out.println("ecode=" + initMsg.getErr_no());
            System.out.println("failed=" + initMsg.getFailed());
        }

        // 获取上传任务ID
        String task_id = "";
        HashMap<String, String> params = new HashMap<>();
        params.put("has_participle", "true");
        try {
            // 上传音频文件
            // todo
            /*
            * 1我现在真的很开心
            * 2 我要买酒
             */
            Message uploadMsg = lc.lfasrUpload("C:\\Users\\asus30\\Desktop\\MP3\\2.mp3", type, params);
            // 判断返回值
            int ok = uploadMsg.getOk();
            if (ok == 0) {
                // 创建任务成功
                task_id = uploadMsg.getData();
                System.out.println("task_id=" + task_id);
            } else {
                // 创建任务失败-服务端异常
                System.out.println("ecode=" + uploadMsg.getErr_no());
                System.out.println("failed=" + uploadMsg.getFailed());
            }
        } catch (LfasrException e) {
            // 上传异常，解析异常描述信息
            Message uploadMsg = JSON.parseObject(e.getMessage(), Message.class);
            System.out.println("ecode=" + uploadMsg.getErr_no());
            System.out.println("failed=" + uploadMsg.getFailed());
        }

        // 循环等待音频处理结果
        while (true) {
            try {
                // 睡眠1min。另外一个方案是让用户尝试多次获取，第一次假设等1分钟，获取成功后break；失败的话增加到2分钟再获取，获取成功后break；再失败的话加到4分钟；8分钟；……
                Thread.sleep(sleepSecond * 1000);
                System.out.println("waiting ...");
            } catch (InterruptedException e) {
            }
            try {
                // 获取处理进度
                Message progressMsg = lc.lfasrGetProgress(task_id);

                // 如果返回状态不等于0，则任务失败
                if (progressMsg.getOk() != 0) {
                    System.out.println("task was fail. task_id:" + task_id);
                    System.out.println("ecode=" + progressMsg.getErr_no());
                    System.out.println("failed=" + progressMsg.getFailed());

                    // 服务端处理异常-服务端内部有重试机制（不排查极端无法恢复的任务）
                    // 客户端可根据实际情况选择：
                    // 1. 客户端循环重试获取进度
                    // 2. 退出程序，反馈问题
                    continue;
                } else {
                    ProgressStatus progressStatus = JSON.parseObject(progressMsg.getData(), ProgressStatus.class);
                    if (progressStatus.getStatus() == 9) {
                        // 处理完成
                        System.out.println("task was completed. task_id:" + task_id);
                        break;
                    } else {
                        // 未处理完成
                        System.out.println("task was incomplete. task_id:" + task_id + ", status:" + progressStatus.getDesc());
                        continue;
                    }
                }
            } catch (LfasrException e) {
                // 获取进度异常处理，根据返回信息排查问题后，再次进行获取
                Message progressMsg = JSON.parseObject(e.getMessage(), Message.class);
                System.out.println("ecode=" + progressMsg.getErr_no());
                System.out.println("failed=" + progressMsg.getFailed());
            }
        }

        // 获取任务结果
        try {
            Message resultMsg = lc.lfasrGetResult(task_id);
            System.out.println(resultMsg.getData());
            // 如果返回状态等于0，则任务处理成功
            if (resultMsg.getOk() == 0) {
                // 打印转写结果

                //todo  得到语音转化结果
                //解析讯飞平台得到的结果
                JsonParser parser = new JsonParser();//创建json解析器
                JsonArray jsonArray = (JsonArray) parser.parse(resultMsg.getData());

                JsonObject kdjson = jsonArray.get(0).getAsJsonObject();
                String word = StringUtils.trim(kdjson.get("onebest").toString(),'"');
                System.out.println(word+"解析得到的结果");
                Query query = new Query();
                query.setUserId("test");
                query.setQuery(word.replaceAll("[\\pP‘’“”]", "").toUpperCase());
                String data = new Gson().toJson(query);
                String result = HttpUtil.okhttp(PropertiesUtil.getProperty("query.url"), data);
//                JsonParser parser = new JsonParser();
                System.out.println(result);
                JsonObject jsonObject = (JsonObject) parser.parse(result);
                if(jsonObject.get("state").toString().indexOf("10000")!=-1){
                    System.out.println(jsonObject.get("state").toString());
                }
                if (jsonObject.get("state").toString().indexOf("11000")!=-1||jsonObject.get("state").toString().indexOf("10003")!=-1) {
                    System.out.println("发生了错误");
                }else {
                    JsonObject jsonObject1 = (JsonObject) jsonObject.get("info");
                    if (jsonObject1.get("ask") != null) {
                        result = jsonObject1.get("ask").toString();
                        System.out.println("--------------"+result+"+++++++++++++");
                    }
                }
                System.out.println(resultMsg.getData());
            } else {
                // 转写失败，根据失败信息进行处理
                System.out.println("ecode=" + resultMsg.getErr_no());
                System.out.println("failed=" + resultMsg.getFailed());
            }
        } catch (LfasrException e) {
            // 获取结果异常处理，解析异常描述信息
            Message resultMsg = JSON.parseObject(e.getMessage(), Message.class);
            System.out.println("ecode=" + resultMsg.getErr_no());
            System.out.println("failed=" + resultMsg.getFailed());
        }
    }
}
