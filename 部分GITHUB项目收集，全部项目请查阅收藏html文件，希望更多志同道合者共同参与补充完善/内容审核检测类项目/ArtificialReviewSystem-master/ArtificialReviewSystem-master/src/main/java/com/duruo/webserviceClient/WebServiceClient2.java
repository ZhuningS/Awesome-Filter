package com.duruo.webserviceClient;



import com.google.gson.Gson;
import lombok.extern.slf4j.Slf4j;
//import org.apache.axiom.om.OMAbstractFactory;
//import org.apache.axiom.om.OMElement;
//import org.apache.axiom.om.OMFactory;
//import org.apache.axiom.om.OMNamespace;
//import org.apache.axis2.AxisFault;
import org.apache.axis2.addressing.EndpointReference;
import org.apache.axis2.client.Options;
//import org.apache.axis2.client.ServiceClient;
import org.apache.axis2.rpc.client.RPCServiceClient;

import javax.xml.namespace.QName;


import org.apache.axis.client.Call;
import org.apache.axis.client.Service;

import java.util.HashMap;
import java.util.Map;
//import org.apache.axis.encoding.XMLType;
//import org.apache.axis.message.MessageElement;
//import org.apache.axis.message.SOAPHeaderElement;
//import org.apache.axis.types.Schema;
//
//import java.util.Date;


/**
 * Created by @Author tachai
 * date 2018/10/10 16:25
 * GitHub https://github.com/TACHAI
 * Email 1206966083@qq.com
 */
@Slf4j
public class WebServiceClient2 {


    //public static final String targetEndpoint = "http://31.0.1.234:9080/WebUCP/webservices/UCPCXFService?wsdl";
    public static final String targetEndpoint = "http://31.0.1.234:9080/WebUCP/webservices/UCPCXFService";
    public static final String targetNamespace = "http://impl.cxf.service.webucp.wondersgroup.com";
//    public static final String targetNamespace = "http://31.0.1.234:9080/WebUCP/webservices/UCPCXFService";
    public static final String method = "login";
    public static final String NAME = "weiruan";
    public static final String PASSWORD = "weiruan";


    public static String login() {
        log.info("WebService发送请求......");
        try {
            RPCServiceClient client = new RPCServiceClient();
            Options options = client.getOptions();
            options.setTo(new EndpointReference(targetEndpoint));
            options.setTimeOutInMilliSeconds(1000 * 60 * 5);// 毫秒单位
            options.setAction(method);
            Object[] response = client.invokeBlocking(new QName(targetNamespace, method), new Object[]{NAME,PASSWORD}, new Class[]{String.class});
            String results = (String) response[0];
            log.info("WebService请求返回结果: \r\n{}", results);
            return results;
        } catch (Exception e) {
            log.error("WebService请求异常, Cause:{}, Message:{}", e.getCause(), e.getMessage());
            e.printStackTrace();
            return null;
        }
    }

    public static String logoff(){
        try {
            // 直接引用远程的wsdl文件
            // 以下都是套路
            Service service = new Service();
            Call call = (Call) service.createCall();
            call.setTargetEndpointAddress(targetEndpoint);
            call.setOperationName("login");// WSDL里面描述的接口名称
            call.addParameter(new QName(targetNamespace,"account"),
                    org.apache.axis.encoding.XMLType.XSD_STRING,
                    javax.xml.rpc.ParameterMode.IN);// 接口的参数
            call.addParameter(new QName(targetNamespace,"password"),
                    org.apache.axis.encoding.XMLType.XSD_STRING,
                    javax.xml.rpc.ParameterMode.IN);
            call.setReturnType(org.apache.axis.encoding.XMLType.XSD_STRING);// 设置返回类型
            String temp = "weiruan";
            String temp2 = "weiruan";


            String result = (String) call.invoke(new QName(targetNamespace, method),new Object[] { "weiruan","weiruan"});
            //String result = (String) call.invoke(new Object[] { "weiruan","weiruan"});
            // 给方法传递参数，并且调用方法
            System.out.println("result is " + result);
            return result;
        } catch (Exception e) {
            System.err.println(e.toString());
            return "发生了错误";
        }
    }


    /**
     * 立即发送短信
     * @param sessionId
     * @param content
     * @param phoneNum
     * @return
     */
    public static String sentMessage(String sessionId,String content,String phoneNum){


        log.info("WebService发送请求......");
        try {
            RPCServiceClient client = new RPCServiceClient();
            Options options = client.getOptions();
            options.setTo(new EndpointReference(targetEndpoint));
            options.setTimeOutInMilliSeconds(1000 * 60 * 5);// 毫秒单位
            options.setAction("sendProxySMS");
            Object[] response = client.invokeBlocking(new QName(targetNamespace, "sendProxySMS"), new Object[]{sessionId,phoneNum,content}, new Class[]{String.class});
            String results = (String) response[0];
            log.info("WebService请求返回结果: \r\n{}", results);
            return results;
        } catch (Exception e) {
            log.error("WebService请求异常, Cause:{}, Message:{}", e.getCause(), e.getMessage());
            e.printStackTrace();
            return null;
        }
    }


    /**
     * 发送短信
     * @param sessionId
     * @param receiveNumbers
     * @param content
     * @return
     */
    public static String sendSMS(String sessionId,String receiveNumbers,String content){
        log.info("WebService发送请求......");
        try {
            RPCServiceClient client = new RPCServiceClient();
            Options options = client.getOptions();
            options.setTo(new EndpointReference(targetEndpoint));
            options.setTimeOutInMilliSeconds(1000 * 60 * 5);// 毫秒单位
            options.setAction("sendSMS");
            Object[] response = client.invokeBlocking(new QName(targetNamespace, "sendSMS"), new Object[]{sessionId,"NORM",receiveNumbers,null,content,null,false}, new Class[]{String.class});
            String results = (String) response[0];
            log.info("WebService请求返回结果: \r\n{}", results);
            return results;
        } catch (Exception e) {
            log.error("WebService请求异常, Cause:{}, Message:{}", e.getCause(), e.getMessage());
            e.printStackTrace();
            return null;
        }
    }


    public static void main(String[] args) {
//        String mm = login();
//        //String mm = logoff();
//
//       String ss = sentMessage(mm,"日了狗，一首凉凉","13767094798");
//
//       //用不了
//       //String ll = sendSMS(mm,"13767094798","日了狗");
//
//        System.out.println(ss);

        //System.out.println(ss);



        Map<String,String> query= new HashMap<>();
        query.put("queryInfo","91310104MA1FR74W65");
        String data = new Gson().toJson(query);
        System.out.println(data);
    }
}
