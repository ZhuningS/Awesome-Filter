package com.duruo.util;

import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.IAcsClient;
import com.aliyuncs.dysmsapi.model.v20170525.SendSmsRequest;
import com.aliyuncs.dysmsapi.model.v20170525.SendSmsResponse;
import com.aliyuncs.exceptions.ClientException;
import com.aliyuncs.http.MethodType;
import com.aliyuncs.profile.DefaultProfile;
import com.aliyuncs.profile.IClientProfile;
import com.duruo.po.Qchuang;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import lombok.extern.slf4j.Slf4j;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

/**
 * Created by @Author tachai
 * date 2018/9/26 14:31
 * GitHub https://github.com/TACHAI
 * Email 1206966083@qq.com
 */
//发送短信
@Slf4j
public class SentMessage {

    /**
     * 调用阿里云发送短信
     * @param phoneNum
     * @param type
     * @param name
     * @param content
     */
    public static void sentMessage(String phoneNum,String type,String name,String content){

        final String product = "Dysmsapi";//短信API产品名称（短信产品名固定，无需修改）
        final String domain = "dysmsapi.aliyuncs.com";//短信API产品域名（接口地址固定，无需修改）
//替换成你的AK
//        final String accessKeyId = "LTAIVRgyRqZzVFna";//你的accessKeyId,参考本文档步骤2
        final String accessKeyId = "LTAIG1t8Dm6yO8pg";//你的accessKeyId,参考本文档步骤2
//        final String accessKeySecret = "0V6jNnz5rylDdzCWfaOS7QENB9G6Q8";//你的accessKeySecret，参考本文档步骤2
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
        //todo
        request.setSignName("青创扶持");
        //必填:短信模板-可在短信控制台中找到，发送国际/港澳台消息时，请使用国际/港澳台短信模版
        //SMS_145501391 发送验证码
        //SMS_146290756 审核通过
        //SMS_146280948 审核不通过
        request.setTemplateCode(type);
        //可选:模板中的变量替换JSON串,如模板内容为"亲爱的${name},您的验证码为${code}"时,此处的值为
        //友情提示:如果JSON中需要带换行符,请参照标准的JSON协议对换行符的要求,比如短信内容中包含\r\n的情况在JSON中需要表示成\\r\\n,否则会导致JSON在服务端解析失败

        Map<String, String> codeMap = new HashMap<>();
        // todo 返回的给后台的 值
        // String verifyCode = String.valueOf(new Random().nextInt(899999) + 100000);
        // codeMap.put("code", verifyCode);
        codeMap.put("name",name);
        codeMap.put("reson",content);


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
            log.info("阿里短信状态码:{},{}", sendSmsResponse.getCode());
            if (sendSmsResponse.getCode() != null && sendSmsResponse.getCode().equals("OK")) {
//请求成功

                //
            }
        } catch (ClientException e) {
            e.printStackTrace();
        }
    }


    /**
     * 调用行政服务中心短信
     * @param phoneNum
     * @param content
     */
    public static void sendMessage(String phoneNum,String content){
        Map<String,String> query= new HashMap<>();
        query.put("phoneNum",phoneNum);
        query.put("content",content);
        String data = new Gson().toJson(query);
        String result = HttpUtil.okhttpJSON(PropertiesUtil.getProperty("SMS.url"), data);

        log.info("中心短信服务发送的:{},{},{}",phoneNum,content,result);

    }
}
