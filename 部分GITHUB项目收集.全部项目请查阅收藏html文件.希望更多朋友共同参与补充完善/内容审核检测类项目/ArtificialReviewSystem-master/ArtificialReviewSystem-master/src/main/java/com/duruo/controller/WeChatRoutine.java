package com.duruo.controller;

import ch.qos.logback.core.util.FileUtil;
import com.alibaba.fastjson.JSON;
import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.IAcsClient;
import com.aliyuncs.dysmsapi.model.v20170525.SendSmsRequest;
import com.aliyuncs.dysmsapi.model.v20170525.SendSmsResponse;
import com.aliyuncs.exceptions.ClientException;
import com.aliyuncs.http.MethodType;
import com.aliyuncs.profile.DefaultProfile;
import com.aliyuncs.profile.IClientProfile;
import com.baidu.aip.util.Base64Util;
import com.duruo.common.Const;
import com.duruo.common.DataSourceContextHolder;
import com.duruo.common.ResponseCode;
import com.duruo.common.ServerResponse;
import com.duruo.dao.CorpMapper;
import com.duruo.dao.EvidenceFilesMapper;
import com.duruo.dao.QchuangMapper;
import com.duruo.dao.RetailLicenseMapper;
import com.duruo.dto.Query;
import com.duruo.po.*;
import com.duruo.po.Qchuang;
import com.duruo.util.*;
import com.duruo.util.StringUtils;
import com.duruo.vo.*;
import com.duruo.webserviceClient.WebServiceClient2;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.iflytek.msp.cpdb.lfasr.client.LfasrClientImp;
import com.iflytek.msp.cpdb.lfasr.exception.LfasrException;
import com.iflytek.msp.cpdb.lfasr.model.LfasrType;
import com.iflytek.msp.cpdb.lfasr.model.Message;
import com.iflytek.msp.cpdb.lfasr.model.ProgressStatus;
import com.jcraft.jsch.SftpException;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.*;
import org.json.JSONObject;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

import javax.servlet.http.*;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.math.BigDecimal;
import java.net.URI;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.*;

/**
 * Created by @Author tachai
 * date 2018/8/14 15:23
 * GitHub https://github.com/TACHAI
 * Email 1206966083@qq.com   wechatroutine/qchuang.do
 */

//https://can.xmduruo.com:4000/wechatroutine/webWord.do
@CrossOrigin(origins = "*", maxAge = 3600)
@Controller
@RequestMapping("/wechatroutine/")
@Slf4j
public class WeChatRoutine {
    @Autowired
    private CorpMapper corpMapper;
    @Autowired
    private QchuangMapper qchuangMapper;
    @Autowired
    private RetailLicenseMapper retailLicenseMapper;
    @Autowired
    private EvidenceFilesMapper evidenceFilesMapper;



    //网页
    @PostMapping("webWord.do")
    @ResponseBody
    public ServerResponse<String> webWord(HttpServletRequest request, HttpServletResponse response, String word, String sessionId) {

        log.info("SESSION_ID:{}", sessionId);
        log.info("word:{}", word);
        Query query = new Query();
        query.setUserId(sessionId);
        if (StringUtils.isNum(word)) {
            query.setQuery(word);
        } else {
            word = word.toString().replaceAll("[\\pP‘’“”]", "").toUpperCase();
            query.setQuery(word);
        }
        String data = new Gson().toJson(query);
//        String result = HttpUtil.okhttp("http://139.219.105.178:82/shxh/mes!recvWeb.so", data);
        String result = HttpUtil.okhttp(PropertiesUtil.getProperty("weixin.url"), data);
//        String result = HttpUtil.okhttp("http://139.219.105.178:82/shxh/mes!recvWebTest.so", data);
        JsonParser parser = new JsonParser();
        System.out.println(result);
        log.info("webWord.do返回的值:{}",result);

        if(result==null){
            log.error("webWord.do返回的值为空");
            return ServerResponse.createBySuccess("十分抱歉，这个问题对于我还比较陌生，不过我已经做下相关记录。请问您还有什么事项想要了解吗？", "未识别");
        }
        JsonObject jsonObject=null;
        try{
            jsonObject = (JsonObject) parser.parse(result);
        }catch (Exception e){
            log.error("webWord.do发生错误返回的值:{}{}",result,e.getMessage());
            return ServerResponse.createBySuccess("十分抱歉，这个问题对于我还比较陌生，不过我已经做下相关记录。请问您还有什么事项想要了解吗？", "未识别");

        }



        // JsonObject jsonObject1 = (JsonObject) jsonObject.get("info");
        if (jsonObject.get("answer") != null) {
            result = jsonObject.get("answer").toString();
            String msgid = jsonObject.get("msgid").getAsString();
            return ServerResponse.createBySuccess(StringUtils.trim(StringUtils.trim(result, '"'), '"'), msgid);
//            if (result.indexOf("上海市及徐汇区有很多企业扶持政策可以申请") != -1) {
//
//            } else {
//
//            }
            // System.out.println(result);

        }

        return ServerResponse.createBySuccess("我会学习的", "未识别");
    }


    /**
     * 自助机
     * @param request
     * @param response
     * @param word
     * @param sessionId
     * @return
     */
    @PostMapping("zzj.do")
    @ResponseBody
    public ServerResponse<String> zzj(HttpServletRequest request, HttpServletResponse response, String word, String sessionId) {

        log.info("SESSION_ID:{}", sessionId);
        log.info("word:{}", word);
        Query query = new Query();
        query.setUserId(sessionId);
        if (StringUtils.isNum(word)) {
            query.setQuery(word);
        } else {
            word=word.toString().replaceAll("[\\pP‘’“”]", "").toUpperCase();
            query.setQuery(word);
        }
        String data = new Gson().toJson(query);
        String result = HttpUtil.okhttp(PropertiesUtil.getProperty("zzj.url"), data);
        JsonParser parser = new JsonParser();
        System.out.println(result);
        log.info("webWord.do返回的值:{}",result);

        if(result==null){
            log.error("webWord.do返回的值为空");
            return ServerResponse.createBySuccess("十分抱歉，这个问题对于我还比较陌生，不过我已经做下相关记录。请问您还有什么事项想要了解吗？", "未识别");
        }
        JsonObject jsonObject=null;
        try{
            jsonObject = (JsonObject) parser.parse(result);
        }catch (Exception e){
            log.error("webWord.do发生错误返回的值:{}{}",result,e.getMessage());
            return ServerResponse.createBySuccess("十分抱歉，这个问题对于我还比较陌生，不过我已经做下相关记录。请问您还有什么事项想要了解吗？", "未识别");

        }


        // JsonObject jsonObject1 = (JsonObject) jsonObject.get("info");
        if (jsonObject.get("answer") != null) {
            result = jsonObject.get("answer").toString();
            String msgid = jsonObject.get("msgid").getAsString();
            return ServerResponse.createBySuccess(StringUtils.trim(StringUtils.trim(result, '"'), '"'), msgid);

        }

        return ServerResponse.createBySuccess("我会学习的", "未识别");
    }



    //政务大厅
    @PostMapping("zwdt.do")
    @ResponseBody
    public ServerResponse<String> zwdt(HttpServletRequest request, HttpServletResponse response, String word, String sessionId) {

        log.info("SESSION_ID:{}", sessionId);
        log.info("word:{}", word);
        Query query = new Query();
        query.setUserId(sessionId);
        if (StringUtils.isNum(word)) {
            query.setQuery(word);
        } else {
            word = word.toString().replaceAll("[\\pP‘’“”]", "").toUpperCase();
            query.setQuery(word);
        }
        String data = new Gson().toJson(query);
        String result = HttpUtil.okhttp(PropertiesUtil.getProperty("zwdt.url"), data);
        JsonParser parser = new JsonParser();
        System.out.println(result);
        log.info("webWord.do返回的值:{}",result);

        if(result==null){
            log.error("webWord.do返回的值为空");
            return ServerResponse.createBySuccess("十分抱歉，这个问题对于我还比较陌生，不过我已经做下相关记录。请问您还有什么事项想要了解吗？", "未识别");
        }
        JsonObject jsonObject=null;
        try{
            jsonObject = (JsonObject) parser.parse(result);
        }catch (Exception e){
            log.error("webWord.do发生错误返回的值:{}{}",result,e.getMessage());
            return ServerResponse.createBySuccess("十分抱歉，这个问题对于我还比较陌生，不过我已经做下相关记录。请问您还有什么事项想要了解吗？", "未识别");

        }



        // JsonObject jsonObject1 = (JsonObject) jsonObject.get("info");
        if (jsonObject.get("answer") != null) {
            result = jsonObject.get("answer").toString();
            String msgid = jsonObject.get("msgid").toString();
            return ServerResponse.createBySuccess(StringUtils.trim(StringUtils.trim(result, '"'), '"'), msgid);
//            if (result.indexOf("上海市及徐汇区有很多企业扶持政策可以申请") != -1) {
//
//            } else {
//
//            }
            // System.out.println(result);

        }

        return ServerResponse.createBySuccess("我会学习的", "未识别");
    }



    //模型
    @PostMapping("moxing.do")
    @ResponseBody
    public ServerResponse<String> moxing(HttpServletRequest request, HttpServletResponse response, String word, String sessionId) {

        log.info("SESSION_ID:{}", sessionId);
        log.info("word:{}", word);
        Query query = new Query();
        query.setUserId(sessionId);
        if (StringUtils.isNum(word)) {
            query.setQuery(word);
        } else {
            word = word.toString().replaceAll("[\\pP‘’“”]", "").toUpperCase();
            query.setQuery(word);
        }
        String data = new Gson().toJson(query);
//        String result = HttpUtil.okhttp("http://139.219.105.178:82/shxh/mes!recvWebTest.so", data);
        String result = HttpUtil.okhttp(PropertiesUtil.getProperty("moxing.url"), data);
        JsonParser parser = new JsonParser();
        System.out.println(result);
        log.info("webWord.do返回的值:{}",result);

        if(result==null){
            log.error("webWord.do返回的值为空");
            return ServerResponse.createBySuccess("十分抱歉，这个问题对于我还比较陌生，不过我已经做下相关记录。请问您还有什么事项想要了解吗？", "未识别");
        }
        JsonObject jsonObject=null;
        try{
            jsonObject = (JsonObject) parser.parse(result);
        }catch (Exception e){
            log.error("webWord.do发生错误返回的值:{}{}",result,e.getMessage());
            return ServerResponse.createBySuccess("十分抱歉，这个问题对于我还比较陌生，不过我已经做下相关记录。请问您还有什么事项想要了解吗？", "未识别");

        }



        // JsonObject jsonObject1 = (JsonObject) jsonObject.get("info");
        if (jsonObject.get("answer") != null) {
            result = jsonObject.get("answer").toString();
            String msgid = jsonObject.get("msgid").toString();
            return ServerResponse.createBySuccess(StringUtils.trim(StringUtils.trim(result, '"'), '"'), msgid);
//            if (result.indexOf("上海市及徐汇区有很多企业扶持政策可以申请") != -1) {
//
//            } else {
//
//            }
            // System.out.println(result);

        }

        return ServerResponse.createBySuccess("我会学习的", "未识别");
    }


    @PostMapping("test.do")
    @ResponseBody
    public ServerResponse<String> test(HttpServletRequest request, HttpServletResponse response, String word, String sessionId) {

        log.info("SESSION_ID:{}", sessionId);
        log.info("word:{}", word);
        Query query = new Query();
        query.setUserId(sessionId);
        if (StringUtils.isNum(word)) {
            query.setQuery(word);
        } else {
            word = word.toString().replaceAll("[\\pP‘’“”]", "").toUpperCase();
            query.setQuery(word);
        }
        String data = new Gson().toJson(query);
//        String result = HttpUtil.okhttp("http://139.219.105.178:82/shxh/mes!recvMoxing.so", data);
        String result = HttpUtil.okhttp(PropertiesUtil.getProperty("test.url"), data);
        JsonParser parser = new JsonParser();
        System.out.println(result);
        log.info("webWord.do返回的值:{}",result);

        if(result==null){
            log.error("webWord.do返回的值为空");
            return ServerResponse.createBySuccess("十分抱歉，这个问题对于我还比较陌生，不过我已经做下相关记录。请问您还有什么事项想要了解吗？", "未识别");
        }
        JsonObject jsonObject=null;
        try{
            jsonObject = (JsonObject) parser.parse(result);
        }catch (Exception e){
            log.error("webWord.do发生错误返回的值:{}{}",result,e.getMessage());
            return ServerResponse.createBySuccess("十分抱歉，这个问题对于我还比较陌生，不过我已经做下相关记录。请问您还有什么事项想要了解吗？", "未识别");

        }


        // JsonObject jsonObject1 = (JsonObject) jsonObject.get("info");
        if (jsonObject.get("answer") != null) {
            result = jsonObject.get("answer").toString();
            String msgid = jsonObject.get("msgid").toString();
            return ServerResponse.createBySuccess(StringUtils.trim(StringUtils.trim(result, '"'), '"'), msgid);

        }
        return ServerResponse.createBySuccess("我会学习的", "未识别");
    }

    //微信
    @PostMapping("byWord.do")
    @ResponseBody
    public ServerResponse<String> byWord(HttpSession session, @RequestParam("word") String word) throws UnsupportedEncodingException {
        String temp = URLDecoder.decode(word, "utf-8");
        //todo
        JSONObject json = new JSONObject(temp);
        System.out.println(json.get("word"));
//        System.out.println(session.getId());
        Query query = new Query();
        query.setUserId(session.getId());
        String wordTemp = json.get("word").toString().replaceAll("[\\pP‘’“”]", "").toUpperCase();
        query.setQuery(wordTemp);
        String data = new Gson().toJson(query);
//        String result = HttpUtil.okhttp("http://139.219.105.178:82/shxh/mes!recvWeb.so", data);
        String result = HttpUtil.okhttp("http://139.219.105.178:82/shxh/mes!recvWebTest.so", data);
        JsonParser parser = new JsonParser();
        System.out.println(result);
        JsonObject jsonObject = (JsonObject) parser.parse(result);

        // JsonObject jsonObject1 = (JsonObject) jsonObject.get("info");
        if (jsonObject.get("answer") != null) {
            result = jsonObject.get("answer").toString();
            String response = StringUtils.trim(StringUtils.trim(result, '"'), '"');
            String msgid = jsonObject.get("msgid").getAsString();
//            String reg = "/[a-zA-z]+:\/\/[^\s]*/g";
//            String url="";
//            while ((url = reg.exec(response)) != null) {
//                response = response
//                        .replace(url,
//                                "< a href='"+url+"' target='_blank'><font color='blue'>请点这里哦~</font></ a>");
//            }//这里的reg就是上面的正则表达式
//            response = response.replace("/\r\n/g", "<br/>");
//            response = response.replace("/\\n/g", "<br/>");
//            System.out.println(result);
            return ServerResponse.createBySuccess(response,msgid);
        }

        return ServerResponse.createBySuccess("我会学习的", "未识别");
    }


    // 用户满意度返回
    @PostMapping("csr.do")
    @ResponseBody
    public ServerResponse<String> sendCSR(String msgid,String csr,String suggestion){
        //http://139.219.105.178:82/shxh/mes!csr.so
        // {"msgid":obj.msgid,"csr":0,"suggestion":""}

        Map<String,String> map = new HashMap<>();
        map.put("msgid",msgid);
        map.put("csr",csr);
        map.put("suggestion",suggestion);
        String data = new Gson().toJson(map);
        String result = HttpUtil.okhttp("http://139.219.105.178:82/shxh/mes!csr.so", data);

        JsonParser parser = new JsonParser();
        if(result==null){
            log.error("csr.do返回的值为空msgid:{}",msgid);
        }
        JsonObject jsonObject=null;
        try{
            jsonObject = (JsonObject) parser.parse(result);
            if (jsonObject.toString().indexOf("404")!=-1){
                log.error("csr.do发生错误msgid:{}{}",msgid,jsonObject.toString());
            }
        }catch (Exception e){
            log.error("csr.do发生错误返回的值msgid:{}{}{}",msgid,result,e.getMessage());
        }
        return ServerResponse.createBySuccessMessage(result);
    }



    // 微信接收语音
    @PostMapping("byVice.do")
    @ResponseBody
    public ServerResponse<String> byVice(HttpSession session, @RequestParam("file") MultipartFile[] files) {
        //接收文件
        //多文件上传
        String fileName = "";
        log.info(files[0].getOriginalFilename() + "+++++______+++++" + files[0].getName());
        if (files != null && files.length >= 1) {
            BufferedOutputStream bw = null;
            try {
                fileName = files[0].getOriginalFilename();
                log.info(fileName + "fileName----");

                //判断是否有文件(实际生产中要判断是否是音频文件)
                if (!org.apache.commons.lang3.StringUtils.isBlank(fileName)) {
                    //创建输出文件对象
                    log.info(fileName + "fileName+++");
                    File outFile = new File(PropertiesUtil.getProperty("outVoice.Path") + session.getId() + fileName);
                    //拷贝文件到输出文件对象
                    files[0].transferTo(outFile);
//                    FileUtils.copyInputStreamToFile(files[0].getInputStream(), outFile);
                }
            } catch (Exception e) {
                e.printStackTrace();
            } finally {
                try {
                    if (bw != null) {
                        bw.close();
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }

        //下面是给讯飞转义


    /*
     * 转写类型选择：标准版和电话版分别为：
	 * LfasrType.LFASR_STANDARD_RECORDED_AUDIO 和 LfasrType.LFASR_TELEPHONY_RECORDED_AUDIO
	 * */

        LfasrType type = LfasrType.LFASR_STANDARD_RECORDED_AUDIO;
        // 等待时长（秒）
        int sleepSecond = 1;
        // 初始化LFASR实例
        LfasrClientImp lc = null;

        try {
            //初始化这里要加appid
            //"5b724a39","33213dc3772dbf009d6775d02bb7888f"
            lc = LfasrClientImp.initLfasrClient();
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
            Message uploadMsg = lc.lfasrUpload(PropertiesUtil.getProperty("outVoice.Path") + session.getId() + fileName, type, params);
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
                String word = StringUtils.trim(kdjson.get("onebest").toString(), '"');
                System.out.println(word + "解析得到的结果");
                Query query = new Query();
                query.setUserId(session.getId());
                query.setQuery(word.replaceAll("[\\pP‘’“”]", "").toUpperCase());
                String data = new Gson().toJson(query);
                String result = HttpUtil.okhttp(PropertiesUtil.getProperty("query.url"), data);
//                JsonParser parser = new JsonParser();
                System.out.println(result);
                JsonObject jsonObject = (JsonObject) parser.parse(result);
                if (jsonObject.get("state").toString().indexOf("10000") != -1) {
                    System.out.println(jsonObject.get("state").toString());
                }
                if (jsonObject.get("state").toString().indexOf("11000") != -1 || jsonObject.get("state").toString().indexOf("10003") != -1) {
                    System.out.println("发生了错误");
                } else {
                    JsonObject jsonObject1 = (JsonObject) jsonObject.get("info");
                    if (jsonObject1.get("ask") != null) {
                        result = jsonObject1.get("ask").toString();
                        return ServerResponse.createBySuccess(result, "返回结果成功");
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
        return ServerResponse.createByErrorMessage("返回结果失败");
    }


    @PostMapping("qchuang.do")
    @ResponseBody
    public Map<String, String> qchuang( @RequestBody com.duruo.vo.Qchuang qchuang){
        if(qchuang!=null){
            if(qchuang.getType().indexOf("sendMessage")!=-1){
               return sendMessage(qchuang.getData().getQueryInfo(),qchuang.getData().getUserId());
            }else if(qchuang.getType().indexOf("checkSUCC")!=-1){
//                return checkSUCC(qchuang.getData().getQueryInfo(),qchuang.getData().getUserId());
                return checkSUCC(qchuang.getData().getQueryInfo(),qchuang.getData().getUserId());
            }else if(qchuang.getType().indexOf("checkMessage")!=-1){
                return checkMessage(qchuang.getData().getQueryInfo(),qchuang.getData().getUserId());
            }else if(qchuang.getType().indexOf("")!=-1){
                return checkDreamStar(qchuang.getData().getUserId());
            }
        }
//     log.info("checkSUCC:{},{}", queryInfo, userId);
    Map<String, String> map = new HashMap<>();
        map.put("answer", "96794927C872FD98AD1982B61BBE2223");
        return map;
    }

    //todo 验证梦之星
    private Map<String,String> checkDreamStar(String userId) {
        return null;
    }


    //最近有没有好的政府补贴政策
    //多轮对话调用的接口
    //本地查询接口已过时
    @Deprecated
    public Map<String, String> checkUniScId(String queryInfo, String userId) {

//        //切换数据源到oracle
//        DataSourceContextHolder.setDBType("oracle");
//
//        Corp corp = corpMapper.selectByUniScId(queryInfo);
//
//        //切换数据源到mysql
//        DataSourceContextHolder.setDBType("mysql");

        Map<String, String> map = new HashMap<>();
        //新增一条数据
        Qchuang qchuang = new Qchuang();

//            log.info();
        qchuang.setId(userId);
        //+++++++++++++++++++++++++++改为内网写接口
//        Map<String,String> query= new HashMap<>();
//        query.put("queryInfo",queryInfo);
//        String data = new Gson().toJson(query);
//        String result = HttpUtil.okhttp(PropertiesUtil.getProperty("fanren.url"), data);
//        JsonParser parser = new JsonParser();
//        System.out.println(result);
//        JsonObject jsonObject = (JsonObject) parser.parse(result);
//
//        if(jsonObject.has("answer")&&jsonObject.get("answer").toString().indexOf("064B1A7993B253AA9290385B930E6CA4")!=-1){
//
//            Gson gs = new Gson();
//            Corp corp =(Corp) gs.fromJson(jsonObject.get("corp"),Corp.class);
//
//            qchuang.setPersonName(corp.getPersonName());
//            qchuang.setCompanyName(corp.getCorpName());
//            qchuang.setRegScope(corp.getBusinessScope());
//            //营业地址为空所以写这个
//            qchuang.setBusinessAddress(corp.getAddress());
//
//            qchuang.setRegCapital(corp.getRegCapital().toString());
//            qchuang.setRegDate(DateTimeUtil.strToDate(corp.getEstablishDate().substring(0, 9).replace("月", "").replace(" ",""), "dd-MM-yy"));
//            qchuang.setAgencyCode(queryInfo);
//            qchuang.setCreateDate(new Date());
//            qchuangMapper.insert(qchuang);
//            map.put("answer", "064B1A7993B253AA9290385B930E6CA4");
//
//            return map;
//        }else {
//            if(jsonObject.has("opinion")){
//                qchuang.setOpinion(jsonObject.get("opinion").getAsString());
//            }
//            map.put("answer", "96794927C872FD98AD1982B61BBE22231");
//        }
//


        //+++++++++++++++++++++++++++
        Corp corp = corpMapper.selectByUniScId(queryInfo);



        //todo 上线要把这个注释加上

//        Qchuang qchuang1 = qchuangMapper.selectByUniScId(queryInfo);
//
//        if(qchuang1!=null&&qchuang.getStatus()==2){
//            qchuang.setOpinion("该企业已经注册过");
//            qchuangMapper.insert(qchuang);
//            return map;
//        }

        if (corp != null) {
            //0.企业状态存在，则判断
            if(org.apache.commons.lang3.StringUtils.isNotBlank(corp.getCorpStatus())){
                if (corp.getCorpStatus().indexOf("1") == -1) {
                    map.put("answer", "96794927C872FD98AD1982B61BBE22232");
                    log.info("checkUniScId-0:{}","96794927C872FD98AD1982B61BBE22232");
                    qchuang.setOpinion("该企业为非正常营业");
                    qchuangMapper.insert(qchuang);
                    return map;
                }
            }


            //1.判断企业经营范围（中介和劳务派遣打回）
            if (corp.getBusinessScope().indexOf("劳务派遣") != -1 || corp.getBusinessScope().indexOf("中介") != -1) {
                 map.put("answer", "96794927C872FD98AD1982B61BBE22232");
                log.info("checkUniScId-1:{}","96794927C872FD98AD1982B61BBE22232");
                qchuang.setOpinion("介于查询到您的公司经营范围中含有“中介”或“劳务派遣”所以无法帮您线上办理。如有疑问，请与线下进行办理哦。地址：上海市南宁路999号五楼咨询窗口");
                qchuangMapper.insert(qchuang);
                return map;
            }
//           2.判断企业注册时间（判断注册时间是否为“上一年”如：2018年办理，判断企业注册时间是否为2017年，之前注册的都打回）
            Date date = new Date();
            //date.getYear()是得到从1900年开始的年龄
            //date.getYear();

            if(date.getYear()-100!=Integer.parseInt(corp.getEstablishDate().substring(7, 9))){
                if(date.getMonth()<6){
                    //todo  18年办的也可以在18年5.31前办
                    //17年可以在5.31前办
                    if (date.getYear() - 101 != Integer.parseInt(corp.getEstablishDate().substring(7, 9))) {
                        map.put("answer", "96794927C872FD98AD1982B61BBE22232");
                        log.info("checkUniScId-2:{}","96794927C872FD98AD1982B61BBE22232");
                        qchuang.setOpinion("您已超出此事项申请时间，无法办理，如有疑问，请与线下进行咨询哦。地址：上海市南宁路999号五楼咨询窗口");
                        qchuangMapper.insert(qchuang);
                        return map;
                    }
                }else {
                    map.put("answer", "96794927C872FD98AD1982B61BBE22232");
                    log.info("checkUniScId-2:{}","96794927C872FD98AD1982B61BBE22232");
                    qchuang.setOpinion("您已超出此事项申请时间，无法办理，如有疑问，请与线下进行咨询哦。地址：上海市南宁路999号五楼咨询窗口");
                    qchuangMapper.insert(qchuang);
                    return map;
                }
            }



////3.判断企业注册资金（判断注册资金是不是200W以下，以上的都打回）
            if (corp.getCurrency().indexOf("人民币") == -1) {
                 map.put("answer", "96794927C872FD98AD1982B61BBE22232");
                log.info("checkUniScId-3:{}","96794927C872FD98AD1982B61BBE22232");
                //对不起您的注册资金大于200万元人民币，无法办理此事项，如有疑问，请与线下进行咨询哦。地址：上海市南宁路999号五楼咨询窗口
                qchuang.setOpinion("您的企业类型不符合办理条件，无法办理此事项，如有疑问，请与线下进行咨询哦。地址：上海市南宁路999号五楼咨询窗口");
                qchuangMapper.insert(qchuang);
                return map;
            }

            if (corp.getRegCapital().compareTo(new BigDecimal(200)) > 0) {
                 map.put("answer", "96794927C872FD98AD1982B61BBE22232");
                log.info("checkUniScId-3-2:{}","96794927C872FD98AD1982B61BBE22232");
                qchuang.setOpinion("您的注册资金大于200万元人民币，无法办理此事项，如有疑问，请与线下进行咨询哦。地址：上海市南宁路999号五楼咨询窗口");
                qchuangMapper.insert(qchuang);
                return map;
            }
            //  4.判断企业营业地点（是否是在徐汇）
            //可以不做判断
//            if (corp.getBusinessAddress().indexOf("徐汇") == -1) {
//                 map.put("answer", "96794927C872FD98AD1982B61BBE2223");
//                log.info("checkUniScId-4:{}","96794927C872FD98AD1982B61BBE2223");
//                return map;
//            }
////5.是否是合伙企业（合伙企业不能办）

            // 5.根据企业类型来判断不能办理
            /**
             * 外国承包商 00010500
             * 分公司 00010200
             * 非公司法人机构 00010400
             * 合伙企业 00010600
             * 合伙企业分支机构 00010700
             * 个人分支机构 00010900
             * 农民专业合作社分支机构 00040300
             */
            String type = corp.getCorpType();
            if(type!=null){
                if(type.equals("00010500")||type.equals("00010200")||type.equals("00010400")||type.equals("00010600")||type.equals("00010700")||type.equals("00010900")||type.equals("00040300")){
                    map.put("answer", "96794927C872FD98AD1982B61BBE22232");
                    log.info("checkUniScId-5:{}","96794927C872FD98AD1982B61BBE22232");
                    qchuang.setOpinion("您的企业类型不符合办理条件，无法办理此事项，如有疑问，请与线下进行咨询哦。地址：上海市南宁路999号五楼咨询窗口");
                    qchuangMapper.insert(qchuang);
                    return map;
                }

            }

            qchuang.setPersonName(corp.getPersonName());
            qchuang.setCompanyName(corp.getCorpName());
            qchuang.setRegScope(corp.getBusinessScope());
            //营业地址为空所以写这个
            qchuang.setBusinessAddress(corp.getAddress());

            qchuang.setRegCapital(corp.getRegCapital().toString());
            qchuang.setRegDate(DateTimeUtil.strToDate(corp.getEstablishDate().substring(0, 9).replace("月", "").replace(" ",""), "dd-MM-yy"));
            qchuang.setAgencyCode(queryInfo);
            qchuang.setCreateDate(new Date());
            qchuangMapper.insert(qchuang);

             map.put("answer", "064B1A7993B253AA9290385B930E6CA4");
            return map;
        }
//        return "没有找到相关的工商信息，可能输入的同一信用代码有误";
         map.put("answer", "96794927C872FD98AD1982B61BBE22231");
        return map;
    }


    /**
     * 社会统一代码
     * 最新的从内网法人库查询
     * @param queryInfo
     * @param userId
     * @return
     */
    public Map<String, String> checkSUCC(String queryInfo, String userId ) {
        Map<String, String> map = new HashMap<>();
        //新增一条数据
        Qchuang qchuang = qchuangMapper.selectByIdcard(userId);
        if(qchuang!=null){
            qchuangMapper.deleteByPrimaryKey(qchuang.getId());
        }else {
             qchuang = new Qchuang();
        }


//            log.info();
        qchuang.setId(userId);
        //+++++++++++++++++++++++++++改为内网写接口
        log.info("进来了，内网查询接口");
        //todo 公司名称核重
        Qchuang qchuang1 = qchuangMapper.selectByUniScId(queryInfo);
        //该企业已经注册过了
        if(qchuang1!=null&&qchuang.getStatus()!=null){
            qchuang.setOpinion("该企业已经申请过");

            qchuangMapper.insert(qchuang);
            map.put("answer", "96794927C872FD98AD1982B61BBE2223");
            return map;
        }



        Map<String,String> query= new HashMap<>();
        query.put("queryInfo",queryInfo);
        String data = new Gson().toJson(query);
        String result = HttpUtil.okhttpJSON(PropertiesUtil.getProperty("fanren.url"), data);
        JsonParser parser = new JsonParser();
        System.out.println(result);
        JsonObject jsonObject = (JsonObject) parser.parse(result);
        if(jsonObject.has("opinion")){
            qchuang.setOpinion(jsonObject.get("opinion").getAsString());
            log.info("查询返回数据opinion:{}",jsonObject.get("opinion").getAsString());
        }

        if(jsonObject.has("answer")&&jsonObject.get("answer").toString().indexOf("064B1A7993B253AA9290385B930E6CA4")!=-1){

            Gson gs = new Gson();
            Corp corp =(Corp) gs.fromJson(jsonObject.get("corp"),Corp.class);


            // todo 把证照库中的营业执照存到青创的社保账单字段
            if(jsonObject.getAsJsonObject("workApplyvo").has("imStuff")&&jsonObject.getAsJsonObject("workApplyvo").get("imStuff").getAsString()!=null){
                qchuang.setSsbAddress(jsonObject.getAsJsonObject("workApplyvo").get("imStuff").getAsString());
            }

            // 公司名称核重
            if (corp.getCorpName()!=null){
                Qchuang qchuang2 = qchuangMapper.selectByCompanyName(corp.getCorpName());
                if(qchuang2!=null&&qchuang2.getStatus()!=null){
                    qchuang.setOpinion("该企业已经申请过,如有疑问请线下咨询");
                    qchuangMapper.insert(qchuang);
                    map.put("answer", "96794927C872FD98AD1982B61BBE2223");
                    return map;
                }
            }


            qchuang.setPersonName(corp.getPersonName());
            qchuang.setCompanyName(corp.getCorpName());
            qchuang.setRegScope(corp.getBusinessScope());
            //营业地址为空所以写这个
            qchuang.setBusinessAddress(corp.getAddress());

            qchuang.setRegCapital(corp.getRegCapital().toString());
            qchuang.setRegDate(DateTimeUtil.strToDate(corp.getEstablishDate().substring(0, 9).replace("月", "").replace(" ",""), "dd-MM-yy"));
            qchuang.setAgencyCode(queryInfo);
            qchuang.setCreateDate(new Date());
            qchuangMapper.insert(qchuang);
            map.put("answer", "064B1A7993B253AA9290385B930E6CA4");

            return map;
        }else {
            qchuangMapper.insert(qchuang);
            map.put("answer", "96794927C872FD98AD1982B61BBE2223");
//            map.put("answer", "96794927C872FD98AD1982B61BBE22231");
        }
      return   map;
    }


    //短信服务 阿里云弃用
//    @PostMapping("sentMessage.do")
//    @ResponseBody
    @Deprecated
    public Map<String, String> sentMessage(String phoneNum, String userId) {
        log.info("sentMessage:{},{}", phoneNum, userId);

        //sentMessage 中心平台

//        String sessionId = WebServiceClient2.login();
//        log.info("sentMessage-sessionId:{}", sessionId);
//
//        Map<String, String> map = new HashMap<>();
//
//        if(sessionId.indexOf("ERROR")!=-1){
//
//        }else {
//
//            String verifyCode = String.valueOf(new Random().nextInt(899999) + 100000);
//
//
//            String result = WebServiceClient2.sentMessage(sessionId,"您的验证码"+verifyCode+"，请勿泄漏于他人",phoneNum);
//            if(result.indexOf("ERROR")==-1){
//
//                Qchuang qchuang = qchuangMapper.selectByPrimaryKey(userId);
//                qchuang.setOpinion(verifyCode);
//                qchuang.setContactNumber(phoneNum);
//                qchuangMapper.updateByPrimaryKeySelective(qchuang);
//
//                map.put("answer", "064B1A7993B253AA9290385B930E6CA4");
//                return map;
//            }
//
//        }
//
//        //否的MD5编码
//        map.put("answer", "96794927C872FD98AD1982B61BBE2223");
//        return map;




        final String product = "Dysmsapi";//短信API产品名称（短信产品名固定，无需修改）
        final String domain = "dysmsapi.aliyuncs.com";//短信API产品域名（接口地址固定，无需修改）
//替换成你的AK
        final String accessKeyId = "LTAIG1t8Dm6yO8pg";//你的accessKeyId,参考本文档步骤2
        final String accessKeySecret = "Z51YnuPpif5Blazm0nnyKgaMuI9t1g";//你的accessKeySecret，参考本文档步骤2
//初始化ascClient,暂时不支持多region（请勿修改）
        IClientProfile profile = DefaultProfile.getProfile("cn-hangzhou", accessKeyId,
                accessKeySecret);
        try {
            DefaultProfile.addEndpoint("cn-hangzhou", "cn-hangzhou", product, domain);
        } catch (ClientException e) {
            log.error(e.getMessage());
        }
        IAcsClient acsClient = new DefaultAcsClient(profile);
        //组装请求对象
        SendSmsRequest request = new SendSmsRequest();
        //使用post提交
        request.setMethod(MethodType.POST);
        //必填:待发送手机号。支持以逗号分隔的形式进行批量调用，批量上限为1000个手机号码,批量调用相对于单条调用及时性稍有延迟,验证码类型的短信推荐使用单条调用的方式；发送国际/港澳台消息时，接收号码格式为00+国际区号+号码，如“0085200000000”
        request.setPhoneNumbers(phoneNum);
        //必填:短信签名-可在短信控制台中找到
        request.setSignName("青创扶持");
        //必填:短信模板-可在短信控制台中找到，发送国际/港澳台消息时，请使用国际/港澳台短信模版
        //SMS_145501391 发送验证码
        //SMS_146290756 审核通过
        //SMS_146280948 审核不通过
        request.setTemplateCode("SMS_147196028");
        //可选:模板中的变量替换JSON串,如模板内容为"亲爱的${name},您的验证码为${code}"时,此处的值为
        //友情提示:如果JSON中需要带换行符,请参照标准的JSON协议对换行符的要求,比如短信内容中包含\r\n的情况在JSON中需要表示成\\r\\n,否则会导致JSON在服务端解析失败

        Map<String, String> codeMap = new HashMap<>();
        String verifyCode = String.valueOf(new Random().nextInt(899999) + 100000);
        codeMap.put("code", verifyCode);

        String code = new Gson().toJson(codeMap);

        request.setTemplateParam(code);
//        request.setTemplateParam("{\"name\":\"Tom\", \"code\":\"123\"}");
        //可选-上行短信扩展码(扩展码字段控制在7位或以下，无特殊需求用户请忽略此字段)
        //request.setSmsUpExtendCode("90997");
        //可选:outId为提供给业务方扩展字段,最终在短信回执消息中将此值带回给调用者
//        request.setOutId("yourOutId");
//请求失败这里会抛ClientException异常
        Map<String, String> map = new HashMap<>();
        try {
            SendSmsResponse sendSmsResponse = acsClient.getAcsResponse(request);
            log.info("阿里短信状态码:{},{}", sendSmsResponse.getCode(),userId);
            if (sendSmsResponse.getCode() != null && sendSmsResponse.getCode().equals("OK")) {
//请求成功
                //todo 插数据到数据库 verifyCode
                //Map<String, String> map = new HashMap<>();

                Qchuang qchuang = qchuangMapper.selectByPrimaryKey(userId);
                qchuang.setOpinion(verifyCode);
                qchuang.setContactNumber(phoneNum);
                qchuangMapper.updateByPrimaryKeySelective(qchuang);

                map.put("answer", "064B1A7993B253AA9290385B930E6CA4");
                return map;
            }
        } catch (ClientException e) {
            e.printStackTrace();
        }

        map.put("answer", "96794927C872FD98AD1982B61BBE2223");
        return map;

    }



    //短信服务 中心
    public Map<String,String> sendMessage(String phoneNum,String userId){

        String verifyCode = String.valueOf(new Random().nextInt(899999) + 100000);

        String content = "您申请的青年创业一次扶持事项的短信验证码是"+verifyCode+"请勿告诉他人。";

        SentMessage.sendMessage(phoneNum, content);

        Qchuang qchuang = qchuangMapper.selectByPrimaryKey(userId);
        qchuang.setOpinion(verifyCode);
        qchuang.setContactNumber(phoneNum);
        qchuangMapper.updateByPrimaryKeySelective(qchuang);
        Map<String, String> map = new HashMap<>();

        map.put("answer", "064B1A7993B253AA9290385B930E6CA4");
        return map;

    }

    //验证短信
//    @PostMapping("checkMessage.do")
//    @ResponseBody
    public Map<String, String> checkMessage(String token, String userId) {
        log.info("checkMessage:{},{}", token, userId);
        Qchuang qchuang = qchuangMapper.selectByPrimaryKey(userId);
        Map<String, String> map = new HashMap<>();
        if (token.equals(qchuang.getOpinion())) {
            map.put("answer", "064B1A7993B253AA9290385B930E6CA4");
            return map;
        }
        map.put("answer", "96794927C872FD98AD1982B61BBE2223");
        return map;
    }


    // 接收身份证图片和银行卡图片
    @PostMapping("picture.do")
    @ResponseBody
    public ServerResponse<String> picture(String userId, @RequestParam("file") MultipartFile[] files) {
        //接收文件
        //多文件上传
        String fileName = "";
        log.info(files[0].getOriginalFilename() + "+++++______+++++" + files[0].getName());
        if (files != null && files.length >= 1) {
            BufferedOutputStream bw = null;
            try {
                fileName = userId+files[0].getOriginalFilename();
                log.info(fileName + "fileName----");

                String  reson="";
                if (!org.apache.commons.lang3.StringUtils.isBlank(fileName)) {
                    //创建输出文件对象
                    log.info(fileName + "fileName+++");
//                    File outFile = new File(PropertiesUtil.getProperty("img.Path") + userId + fileName);
//                    //拷贝文件到输出文件对象
//                    files[0].transferTo(outFile);
                    SFTPUtil.uploadFile(PropertiesUtil.getProperty("evidenceFiles.Path"), fileName, files[0].getInputStream());

                    Qchuang qchuang = qchuangMapper.selectByPrimaryKey(userId);

                    JSONObject jsonObject = OCR.checkBackCard(files[0].getBytes());
                    //如果银行卡存在
                    if (org.apache.commons.lang3.StringUtils.isNotBlank(jsonObject.getJSONObject("result").getString("bank_name"))) {
                        String bankName = jsonObject.getJSONObject("result").getString("bank_name");
                        String bank_card_number = jsonObject.getJSONObject("result").getString("bank_card_number");

                        // bank_card_number.length();

                        reson=bank_card_number;
                        qchuang.setPersonBank(bankName);
                        qchuang.setPersonBankid(bank_card_number);
                        //保存银行卡的存储地址
                        qchuang.setBankAddress(PropertiesUtil.getProperty("evidenceFiles.Path")  + fileName);


                        qchuangMapper.updateByPrimaryKeySelective(qchuang);
//                    SFTPUtil.uploadFile(PropertiesUtil.getProperty("evidenceFiles.Path"), fileName, files[0].getInputStream());
                        qchuang.setOpinion(reson);
                        qchuangMapper.updateByPrimaryKey(qchuang);
                        return sentWord(userId,"064B1A7993B253AA9290385B930E6CA4");
                    }
                    JSONObject jsonObject1 = OCR.checkIdcard(files[0].getBytes());
                    //如果身份证正面存在
                    //保存身份证的存储地址
                    if (jsonObject1.get("words_result") != null) {
                        if (org.apache.commons.lang3.StringUtils.isNotBlank(jsonObject1.getJSONObject("words_result").getJSONObject("姓名").getString("words"))) {
                            qchuang.setIdcardAddress(PropertiesUtil.getProperty("evidenceFiles.Path")  + fileName);

                            String name = jsonObject1.getJSONObject("words_result").getJSONObject("姓名").getString("words");
                            if (qchuang.getPersonName().indexOf(name) == -1) {
                                //  不是本人
                                qchuang.setOpinion("不是本人的身份证");
                                qchuangMapper.updateByPrimaryKey(qchuang);
                                return sentWord(userId,"96794927C872FD98AD1982B61BBE2223");
                            }
                            if (org.apache.commons.lang3.StringUtils.isNotBlank(jsonObject1.getJSONObject("words_result").getJSONObject("住址").getString("words"))) {
                                String address = jsonObject1.getJSONObject("words_result").getJSONObject("住址").getString("words");
                                qchuang.setHouseholdReg(address);
                            }
                            if (org.apache.commons.lang3.StringUtils.isNotBlank(jsonObject1.getJSONObject("words_result").getJSONObject("公民身份号码").getString("words"))) {
                                String idCard = jsonObject1.getJSONObject("words_result").getJSONObject("公民身份号码").getString("words");

                                //todo 法人核重
                                Qchuang qchuang1 =qchuangMapper.selectByIdcard(idCard);
                                if(qchuang1!=null&&qchuang1.getStatus()!=null){
                                    qchuang.setOpinion("该法人已经申请过，不能在次申请");
                                    qchuangMapper.updateByPrimaryKey(qchuang);
                                    return sentWord(userId,"96794927C872FD98AD1982B61BBE2223");
                                }

                                //todo 判断是否是35岁
                                Date regDete = qchuang.getRegDate();
                                Date birthDate = DateTimeUtil.strToDate(idCard.substring(6,14),"yyyyMMdd");
                                if(regDete!=null){
                                    Calendar cld = Calendar.getInstance();
                                    Calendar cal = Calendar.getInstance();
                                    cal.setTime(birthDate);
                                    cld.setTime(regDete);


                                    int yearReg=regDete.getYear();
                                    int monthReg = regDete.getMonth();
                                    int dayReg = cld.get(Calendar.DAY_OF_MONTH);

                                    int age = yearReg-(Integer.parseInt(idCard.substring(6,10))-1900);
                                    if(age>35){
                                        qchuang.setOpinion("注册公司时年龄大于35岁");
                                        qchuangMapper.updateByPrimaryKey(qchuang);
                                        return sentWord(userId,"96794927C872FD98AD1982B61BBE2223");
                                    } else if(age==35) {
                                        if(monthReg>birthDate.getMonth()){
                                            //todo
                                            qchuang.setOpinion("注册公司时年龄大于35岁");
                                            qchuangMapper.updateByPrimaryKey(qchuang);
                                            return sentWord(userId,"96794927C872FD98AD1982B61BBE2223");
                                        }else if(monthReg==birthDate.getMonth()){
                                            if(dayReg>=cal.get(Calendar.DAY_OF_MONTH)){
                                                qchuang.setOpinion("注册公司时年龄大于35岁");
                                                qchuangMapper.updateByPrimaryKey(qchuang);
                                                return sentWord(userId,"96794927C872FD98AD1982B61BBE2223");
                                            }
                                        }
                                    }
                                }


                                qchuang.setIdCard(idCard);
                            }

                            qchuangMapper.updateByPrimaryKeySelective(qchuang);
//                    SFTPUtil.uploadFile(PropertiesUtil.getProperty("evidenceFiles.Path"), fileName, files[0].getInputStream());
                            qchuang.setOpinion(reson);
                            qchuangMapper.updateByPrimaryKey(qchuang);
                            return sentWord(userId,"064B1A7993B253AA9290385B930E6CA4");
                        }

                    }

                    JSONObject jsonObject2 = OCR.checkIdcardBack(files[0].getBytes());
                    if (jsonObject2.get("words_result") != null && jsonObject2.getJSONObject("words_result").has("失效日期")) {
                        if (org.apache.commons.lang3.StringUtils.isNotBlank(jsonObject2.getJSONObject("words_result").getJSONObject("失效日期").getString("words"))) {
                           String date = jsonObject2.getJSONObject("words_result").getJSONObject("失效日期").getString("words");
                           //20270123
                            String year = date.substring(0,4);

                            String month = date.substring(4,6);

                            String day = date.substring(6,8);

                            String time = year+"-"+month+"-"+day;

                            Date source = DateTimeUtil.strToDate(time,"yyyy-MM-dd");
                            Date target = new Date();
                            target.getDay();


                            String temp = DateTimeUtil.dateToStr(target);
                            temp = temp.substring(0,10);
                            target = DateTimeUtil.strToDate(temp,"yyyy-MM-dd");
                            //  当前日期大于身份证过期日期   身份证过期了
                            if(target.getTime()>source.getTime()){
                                qchuang.setOpinion("身份证过期了");
                                qchuangMapper.updateByPrimaryKey(qchuang);
                                return sentWord(userId,"96794927C872FD98AD1982B61BBE2223");
                            }
                            EvidenceFiles evidenceFile = new EvidenceFiles();
                            evidenceFile.setDeptId(72);
                            evidenceFile.setMatterId(10000);
                            evidenceFile.setMsgId(userId);

                            evidenceFile.setPath(PropertiesUtil.getProperty("evidenceFiles.Path")+userId+files[0].getOriginalFilename());
                            Date fileDate = new Date();
                            evidenceFile.setCreateTime(fileDate);
                            evidenceFile.setDeptName("徐汇区社会保障局");
                            evidenceFile.setMatterName("青年创业扶持");
                           // type 身份证背面不带人脸的一面
                            evidenceFile.setType("身份证背面");


                           // qchuangMapper.updateByPrimaryKeySelective(qchuang);
//                    SFTPUtil.uploadFile(PropertiesUtil.getProperty("evidenceFiles.Path"), fileName, files[0].getInputStream());
                            qchuang.setOpinion(reson);
                            qchuangMapper.updateByPrimaryKey(qchuang);
                            return sentWord(userId,"064B1A7993B253AA9290385B930E6CA4");
                        }
                    }

                    //todo 加到里面去
                    return sentWord(userId,"96794927C872FD98AD1982B61BBE2223");

//                    FileUtils.copyInputStreamToFile(files[0].getInputStream(), outFile);
                }
            } catch (Exception e) {
                e.printStackTrace();
            } finally {
                try {
                    if (bw != null) {
                        bw.close();
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        return sentWord(userId,"96794927C872FD98AD1982B61BBE2223");
    }



    //人脸图片
    @PostMapping("getFace.do")
    public String face(String userId, @RequestParam("file") MultipartFile[] files) {
        //接收文件
        //多文件上传
        String fileName = "";
        log.info(files[0].getOriginalFilename() + "+++++______+++++" + files[0].getName());
        if (files != null && files.length >= 1) {
            BufferedOutputStream bw = null;
            try {
                fileName = userId + files[0].getOriginalFilename();
                log.info(fileName + "fileName----");

                //判断是否有文件(实际生产中要判断是否是音频文件)
                if (!org.apache.commons.lang3.StringUtils.isBlank(fileName)) {


                    EvidenceFiles evidenceFile = new EvidenceFiles();
                    //保存到数据库
                    evidenceFile.setMsgId(userId);
                    evidenceFile.setPath(PropertiesUtil.getProperty("evidenceFiles.Path")+fileName);
                    Date fileDate = new Date();
                    evidenceFile.setCreateTime(fileDate);
                    evidenceFile.setType("人脸图片");
//                    evidenceFile.setLicenseId(license.getId());
                    //上传人脸图片
                    SFTPUtil.uploadFile(PropertiesUtil.getProperty("evidenceFiles.Path"),fileName, files[0].getInputStream());

                    evidenceFilesMapper.insert(evidenceFile);
                    //todo 要做人脸识别
                    Qchuang qchuang = qchuangMapper.selectByPrimaryKey(userId);

                    //log.info("getImg.do IdcardAddress:{}",qchuang.getIdcardAddress());
                    //取身份证图片 todo 空指针
                    int temp = qchuang.getIdcardAddress().lastIndexOf('/');
                    String directory = qchuang.getIdcardAddress().substring(0,temp+1);
                    String idfileName = qchuang.getIdcardAddress().substring(temp+1);

                    byte[] idresult = SFTPUtil.downloadFile(directory,idfileName);

                    byte[] face = files[0].getBytes();
                    //todo 人脸识别
                    //JSONObject jsonObject =FACE.checkFace(URLEncoder.encode(Base64Util.encode(face)), URLEncoder.encode(Base64Util.encode(idresult)));

                    try{
                        JSONObject jsonObject =FACE.checkFace(Base64Util.encode(face), Base64Util.encode(idresult));
                        log.info("人脸识别:{}",jsonObject.toString());

                        // 将申请表地址改为存人脸分数
                        if(jsonObject.has("result")){
                            if(jsonObject.getJSONObject("result").has("score")){
                                if(jsonObject.getJSONObject("result").get("score").toString().equals("0")){
                                    qchuang.setAppleformAddress("0");
                                }else {
                                    qchuang.setAppleformAddress(jsonObject.getJSONObject("result").get("score").toString().substring(0,5));
                                }

                            }
                        }
                    }catch (Exception e){
                        log.error("人脸识别错误:{}",e.getMessage());
                    }
                    qchuangMapper.updateByPrimaryKeySelective(qchuang);

//                    return "redirect:http://webbot.xzfwzx.xuhui.gov.cn/qiangming/index.html?userId="+userId;
                    return "redirect:http://webbot.xzfwzx.xuhui.gov.cn/commit/commit.html?userId="+userId;
                }
            }catch (Exception e) {
                e.printStackTrace();
            } finally {
                try {
                    if (bw != null) {
                        bw.close();
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        return "redirect:http://webbot.xzfwzx.xuhui.gov.cn/index.html?userId="+userId;
    }


    /**
     * 青创审核
     * @param session
     * @param userId
     * @param opinion
     * @return
     */
    @PostMapping("opinion.do")
    @ResponseBody
    public ServerResponse<String> opinion(HttpSession session,String userId,@RequestParam(value = "opinion", defaultValue = "预审通过") String opinion,String result){

       // PortalMyNoteCacheService.getInstance().getMyNoteListResponse(CommonHttpUtil.getIdentity());

        User user = (User) session.getAttribute(Const.CURRENT_USER);
        if (user != null) {
            Qchuang qchuang = qchuangMapper.selectByPrimaryKey(userId);
            qchuang.setOpinion(opinion);
            qchuang.setStatus(Integer.parseInt(result));

            //String sessionId = WebServiceClient2.login();
            //log.info("sentMessage-sessionId:{}", sessionId);
            if(result.equals("0")){
                // 审核成功后发送通知  阿里云短信平台
               // SentMessage.sentMessage(qchuang.getContactNumber(),"SMS_147201031",qchuang.getPersonName(),"");

                SentMessage.sendMessage(qchuang.getContactNumber(),"尊敬的"+qchuang.getPersonName()+"先生/女士，您于"+DateTimeUtil.dateToStr(qchuang.getCreateDate())+"申请的青年创业一次性开办费已通过审核，补贴将于3个月内由徐汇区社会保障基金专户划拨到法定代表人（经营者）个人帐户，请耐心等待~");

            }else if(result.equals("2")) {
                // 审核失败后发送通知
                // SentMessage.sentMessage(qchuang.getContactNumber(),"SMS_147201030",qchuang.getPersonName(),opinion);


                SentMessage.sendMessage(qchuang.getContactNumber(),"尊敬的"+qchuang.getPersonName()+"先生/女士，您于"+DateTimeUtil.dateToStr(qchuang.getCreateDate())+"申请的青年创业一次性开办费由于"+opinion+"未通过审核，如有疑问请电话咨询：24092222*3507。您可以按照咨询建议准备相关材料前往徐汇区行政服务中心南宁路999号二号楼五楼办理。（办理时间：星期一至星期五上午9:00～11:30，下午13:30～16:30");
//                if(sessionId.indexOf("ERROR")!=-1){
//
//                }else {
//                    // 徐汇短信平台
//                    String returnResult = WebServiceClient2.sentMessage(sessionId, "尊敬的"+qchuang.getPersonName()+"先生/女士您好，很遗憾的通知您，您申请的青年创业一次性扶持因为"+opinion+"未通过", qchuang.getContactNumber());
//                    log.info("sentMessage-失败:{}", returnResult);
//                }
            }

            int result1=qchuangMapper.updateByPrimaryKeySelective(qchuang);
            return result1>0?ServerResponse.createBySuccessMessage("审核成功"):ServerResponse.createBySuccessMessage("审核失败");
        } else {
            return ServerResponse.createByErrorMessage(ResponseCode.NEED_LOGIN.getDesc());
        }
    }



    @RequestMapping("springUpload.do")
//    @ResponseBody
    public String springUpload(HttpSession session, HttpServletRequest request, String deptId, String MsgId, String matterId, String deptName, String matterName, String flowName) throws IllegalStateException, IOException, SftpException ,Exception{

        if (!org.apache.commons.lang3.StringUtils.isBlank(MsgId)) {
            Date date = new Date();

            try {
                //插入文件list信息
                RetailLicense license = new RetailLicense();
                license.setCreateTime(date);
                license.setDeptId(Integer.parseInt(deptId));
                // MsgId（微信id）为
                license.setMsgId(MsgId);
                license.setMatterId(Integer.parseInt(matterId));
                license.setMatterName(matterName);
                license.setStatus("未审核");
                int result = retailLicenseMapper.insert(license);
                if (result > 0) {
                    log.info("事项插入成功：{}", MsgId);
                } else {
                    log.error("事项插入失败：{}", MsgId);
                }
            } catch (Exception e) {
//                retailLicenseMapper.deleteByPrimaryKey(MsgId+matterId);
//                evidenceFilesMapper.deleteByMsgId(MsgId);
//                return ServerResponse.createByErrorMessage("该用户已上传过该事项文件，正在清空，请再上传一次");
            }

            //青创
            Qchuang qchuang = qchuangMapper.selectByPrimaryKey(MsgId);

            //将当前上下文初始化给  CommonsMutipartResolver （多部分解析器）
            CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver(
                    request.getSession().getServletContext());
            //检查form中是否有enctype="multipart/form-data"
            if (multipartResolver.isMultipart(request)) {
                //将request变成多部分request
                MultipartHttpServletRequest multiRequest = (MultipartHttpServletRequest) request;
                //获取multiRequest 中所有的文件名
//                Iterator iter = multiRequest.getFileNames();
                Iterator iter = multiRequest.getFileNames();

                EvidenceFiles evidenceFile = new EvidenceFiles();
                while (iter.hasNext()) {
                    //一次遍历所有文件
                    List<MultipartFile> files = multiRequest.getFiles(iter.next().toString());
                    //防止插空的数据
                    for(int i=0;i<files.size();i++){
                        MultipartFile file = files.get(i);

                        try{
                            if (!org.apache.commons.lang3.StringUtils.isBlank(file.getOriginalFilename())) {
                                String fileName = MsgId + "_" + matterId + "_" + file.getName() + "_" + file.getOriginalFilename();
                                String path = PropertiesUtil.getProperty("evidenceFiles.Path") + fileName;
                                log.info("文件名:{}", file.getOriginalFilename());
                                log.info("属性", file.getName());

                                System.out.println(file.getName());
                                RetailLicense license = retailLicenseMapper.selectByTimeAndMsgId(MsgId, date);

//                                if (file.getName().indexOf("银行卡") != -1) {
//                                    if (Contain.containImage(file.getOriginalFilename())) {
//
//                                        JSONObject jsonObject = OCR.checkBackCard(file.getBytes());
//                                        //如果银行卡存在
//                                        if(jsonObject.getJSONObject("result")!=null){
//                                            if(org.apache.commons.lang3.StringUtils.isNotBlank(jsonObject.getJSONObject("result").getString("bank_name"))){
//                                                String bankName = jsonObject.getJSONObject("result").getString("bank_name");
//                                                String bank_card_number = jsonObject.getJSONObject("result").getString("bank_card_number");
//                                                qchuang.setPersonBank(bankName);
//                                                qchuang.setPersonBankid(bank_card_number);
//                                                //保存银行卡的存储地址
////                                    qchuang.setBankAddress(PropertiesUtil.getProperty("img.Path")  + fileName);
//                                                qchuang.setBankAddress(path);
//                                            }
//                                        }
//                                    }
//                                }

//                                if (file.getName().indexOf("身份证") != -1) {
//                                    if (Contain.containImage(file.getOriginalFilename())) {
//
//                                        JSONObject jsonObject1 = OCR.checkIdcard(file.getBytes());
//                                        //如果身份证存在
//                                        if (jsonObject1.get("words_result") != null) {
//                                            if(org.apache.commons.lang3.StringUtils.isNotBlank(jsonObject1.getJSONObject("words_result").getJSONObject("姓名").getString("words"))){
//                                                String name = jsonObject1.getJSONObject("words_result").getJSONObject("姓名").getString("words");
//                                                //保存身份证的存储地址
//                                                qchuang.setIdcardAddress(path);
////                                        qchuang.setIdcardAddress(PropertiesUtil.getProperty("img.Path")  + fileName);
////                                        if (qchuang.getPersonName().indexOf(name) == -1) {
////                                            return sentWord(userId,"否");
////                                        }
//                                                String address = jsonObject1.getJSONObject("words_result").getJSONObject("住址").getString("words");
//                                                qchuang.setHouseholdReg(address);
//                                                String idCard = jsonObject1.getJSONObject("words_result").getJSONObject("公民身份号码").getString("words");
//                                                qchuang.setIdCard(idCard);
//                                            }
//                                        }
//                                    }
//                                }

                                //保存到数据库
                                evidenceFile.setDeptId(Integer.parseInt(deptId));
                                evidenceFile.setMatterId(Integer.parseInt(matterId));
                                evidenceFile.setMsgId(MsgId);
                                evidenceFile.setPath(path);
                                Date fileDate = new Date();
                                evidenceFile.setCreateTime(fileDate);
                                evidenceFile.setDeptName(deptName);
                                evidenceFile.setMatterName(matterName);
                                evidenceFile.setType(file.getName());

                                evidenceFile.setLicenseId(license.getId());

                                //覆盖上传
                                evidenceFilesMapper.insert(evidenceFile);
                                //上传到本地服务器
//                        file.transferTo(new File(path));
                                // 上传到文件服务器
                                SFTPUtil.uploadFile(PropertiesUtil.getProperty("evidenceFiles.Path"), fileName, file.getInputStream());

                            }
                        }catch (Exception e){
                            log.info("青创文件错误:{}",e.getMessage());
                        }
                    }
                }
                qchuang.setStatus(1);
                qchuangMapper.updateByPrimaryKeySelective(qchuang);
            }
            // todo 改成人脸识别或签名
            return "redirect:http://webbot.xzfwzx.xuhui.gov.cn/face/huoti.html?userId="+MsgId;

        } else {
            return "redirect:/404.html";
        }

    }




    /**
     * 青创身份证图片
     * @param response
     * @param userId
     */
    @RequestMapping("getImg.do")
    public void getImg(HttpServletResponse response, String userId) {
        response.setHeader("content-type", "application/octet-stream");
        response.setContentType("application/octet-stream");

        //证明材料不能为空
        if (null != userId) {

            //调用方法下载 到应用服务器
//            UpAndDownload.downloadFileByPath(response,filePath);
            log.info("getImg.do userId:{}",userId);
            Qchuang qchuang = qchuangMapper.selectByPrimaryKey(userId);

            log.info("getImg.do IdcardAddress:{}",qchuang.getIdcardAddress());
            // 调用SFTP方法下载文件
            UpAndDownload.downloadFileByFilePath(response,qchuang.getIdcardAddress());

            System.out.println("成功下载");
        }
    }





    /**
     * 签名图片
     * @param userId
     * @param signatureAddress
     * @return
     */
    @PostMapping("saveSignatureAddress.do")
    @ResponseBody
    public ServerResponse<String> saveSignatureAddress(String userId,String signatureAddress){
       Qchuang  qchuang = qchuangMapper.selectByPrimaryKey(userId);
        qchuang.setSignatureAddress(signatureAddress);
        qchuang.setStatus(1);
       int result = qchuangMapper.updateByPrimaryKeySelective(qchuang);
        if(result>0){
        }
//        return "redirect:/success.html";
        return ServerResponse.createBySuccessMessage("返回成功");
    }



    /**
     * 青创银行卡图片
     * @param response
     * @param userId
     */
    @RequestMapping("getbankImg.do")
    public void getbankImg(HttpServletResponse response, String userId) {
        response.setHeader("content-type", "application/octet-stream");
        response.setContentType("application/octet-stream");

        //证明材料不能为空
        if (null != userId) {

            //调用方法下载 到应用服务器
//            UpAndDownload.downloadFileByPath(response,filePath);
            log.info("getImg.do userId:{}",userId);
            Qchuang qchuang = qchuangMapper.selectByPrimaryKey(userId);

            log.info("getImg.do IdcardAddress:{}",qchuang.getBankAddress());
            // 调用SFTP方法下载文件
            UpAndDownload.downloadFileByFilePath(response,qchuang.getIdcardAddress());

            System.out.println("成功下载");
        }
    }

    /**
     * 青创普通图片
     * @param response
     * @param userId
     * @param type  图片类型
     */
    @RequestMapping("commonImg.do")
    public void getcommonImg(HttpServletResponse response, String userId,String type) {
        response.setHeader("content-type", "application/octet-stream");
        response.setContentType("application/octet-stream");

        response.setHeader("content-type", "application/octet-stream");
        response.setContentType("application/octet-stream");


        EvidenceFiles evidenceFiles = null;
        try {
            type = URLDecoder.decode(type, "utf-8");
//            licenseId = URLDecoder.decode(licenseId, "utf-8");
             evidenceFiles = evidenceFilesMapper.selByTypeAndmsgId(userId,type);
            //获得文件名
           // String[] fileNames = evidenceFile.getPath().split("_");
            //String directory = qchuang.getIdcardAddress().substring(0,temp+1);
            int temp = evidenceFiles.getPath().lastIndexOf('/');
            String idfileName = evidenceFiles.getPath().substring(temp+1);

            //如果使用中文会丢失名字只留下后缀名
            response.setHeader("Content-Disposition", "attachment;filename=" + new String(idfileName.getBytes(), "ISO-8859-1"));
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }


        //证明材料不能为空
        if (null != userId) {

            //调用方法下载 到应用服务器
//            UpAndDownload.downloadFileByPath(response,filePath);
            log.info("commonImg.do userId:{}",userId);
            evidenceFiles = evidenceFilesMapper.selByTypeAndmsgId(userId,type);

            log.info("commonImg.do IdcardAddress:{}",evidenceFiles.getPath());
            // 调用SFTP方法下载文件
            UpAndDownload.downloadFileByFilePath(response,evidenceFiles.getPath());

            System.out.println("成功下载");
        }
    }


    //查询青创文件列表
    @GetMapping("getlist.do")
    @ResponseBody
    public ServerResponse<List<EvidenceFiles>> listFile(HttpSession session, String userId){
        User user = (User) session.getAttribute(Const.CURRENT_USER);
        if (user != null) {
            return ServerResponse.createBySuccess(evidenceFilesMapper.listByMsgId(userId));
        } else {
            return ServerResponse.createByErrorMessage(ResponseCode.NEED_LOGIN.getDesc());
        }
    }

    @PostMapping("getdetail.do")
    @ResponseBody
    public ServerResponse<QchaungVO> getdetail(HttpSession session,String userId){
        User user = (User) session.getAttribute(Const.CURRENT_USER);
        if (user != null) {
            Qchuang qchuang = qchuangMapper.selectByPrimaryKey(userId);
            QchaungVO qchuangVO = new QchaungVO();
            BeanUtils.copyProperties(qchuang,qchuangVO);
            Date date = new Date();
            log.info("当前年份:{}",date.getYear()+1900);
            qchuangVO.setAge(date.getYear()+1900-Integer.parseInt(qchuang.getIdCard().substring(6,10))+"");
            qchuangVO.setApplyDate(DateTimeUtil.dateToStr(qchuang.getCreateDate()));
            return ServerResponse.createBySuccess(qchuangVO);
        } else {
            return ServerResponse.createByErrorMessage(ResponseCode.NEED_LOGIN.getDesc());
        }
    }

    //查询进度
    @PostMapping("queryProgress.do")
    @ResponseBody
    public ServerResponse<String> queryProgress(String number,String code){
       Qchuang qchuang = qchuangMapper.selectByIdcard(number);
        if(qchuang!=null||qchuang.getAppleformAddress().indexOf(code)!=-1){
            if(qchuang.getStatus()==1){
                return ServerResponse.createBySuccessMessage("该用户正在审核");
            }else if(qchuang.getStatus()==0){
                return ServerResponse.createBySuccessMessage("该用户已审核通过");
            }else if(qchuang.getStatus()==2){
                return ServerResponse.createBySuccessMessage("该用户未通过原因是："+qchuang.getOpinion());
            }
            return ServerResponse.createBySuccessMessage("该用户通过申核条件");
        }
        return ServerResponse.createBySuccessMessage("未找到相关信息或者验证码错误");
    }

    @PostMapping("checkUser.do")
    @ResponseBody
    public ServerResponse<String> checkUser(String number){
        Qchuang qchuang = qchuangMapper.selectByIdcard(number);
        if(qchuang!=null){
            String phoneNum = qchuang.getContactNumber();

            log.info("wechatroutine/checkUser.do:{}",phoneNum);

            if(phoneNum==null){
                return ServerResponse.createByErrorMessage("该用户的手机号为空");
            }


//            String sessionId = WebServiceClient2.login();
//            log.info("sentMessage-sessionId:{}", sessionId);
//            String verifyCode = String.valueOf(new Random().nextInt(899999) + 100000);
//
//            String result = WebServiceClient2.sentMessage(sessionId,"您的验证码"+verifyCode+"，请勿泄漏于他人",phoneNum);
//            if(result.indexOf("ERROR")==-1){
//                log.info("sentMessage-发送短信错误:{}", result);
//                qchuang.setAppleformAddress(verifyCode);
//                //qchuang.setContactNumber(phoneNum);
//                qchuangMapper.updateByPrimaryKeySelective(qchuang);
//                return ServerResponse.createBySuccessMessage("已发送短信");
//            }


            String verifyCode = String.valueOf(new Random().nextInt(899999) + 100000);

            String content = "您申请的青年创业一次性开办费扶持事项查询的短信验证码是"+verifyCode+"请勿告诉他人。";

            SentMessage.sendMessage(phoneNum, content);
            qchuang.setAppleformAddress(verifyCode);
            qchuang.setContactNumber(phoneNum);
            qchuangMapper.updateByPrimaryKeySelective(qchuang);
        }
        return ServerResponse.createByErrorMessage("未找到相关信息");
    }

    @PostMapping("returnReson.do")
    @ResponseBody
    public ServerResponse<String> returnReson(String userId){
      Qchuang qchuang =  qchuangMapper.selectByPrimaryKey(userId);

      if(qchuang!=null&&qchuang.getOpinion()!=null){
          return ServerResponse.createBySuccessMessage(qchuang.getOpinion());
      }
      return ServerResponse.createByErrorMessage("未找到该用户，请重新输入");
    }


    private ServerResponse<String> sentWord(String userId,String word){
        Query query = new Query();
        query.setUserId(userId);
        if (StringUtils.isNum(word)) {
            query.setQuery(word);
        } else {
            query.setQuery(word.toString().replaceAll("[\\pP‘’“”]", "").toUpperCase());
        }
        String data = new Gson().toJson(query);
        String result = HttpUtil.okhttp("http://139.219.105.178:82/shxh/mes!recvWeb.so", data);
        JsonParser parser = new JsonParser();
        System.out.println(result);
        JsonObject jsonObject = (JsonObject) parser.parse(result);

        // JsonObject jsonObject1 = (JsonObject) jsonObject.get("info");
        if (jsonObject.get("answer") != null) {
            result = jsonObject.get("answer").toString();

            return ServerResponse.createBySuccess(StringUtils.trim(StringUtils.trim(result, '"'), '"'), "返回后台数据");

            // System.out.println(result);

        }
        return ServerResponse.createBySuccess("十分抱歉，这个问题对于我还比较陌生，不过我已经做下相关记录。请问您还有什么事项想要了解吗？", "未识别");
    }

}
