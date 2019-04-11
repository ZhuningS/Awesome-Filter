package com.duruo.util;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.jcraft.jsch.SftpException;
import org.json.JSONObject;
import org.python.core.*;
import org.python.util.PythonInterpreter;

import java.io.*;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by @Author tachai
 * date 2018/7/18 11:24
 *
 * @Email 1206966083@qq.com
 */
public class TeatMain {
    public static void main(String[] args) throws FileNotFoundException, SftpException {
//        Map<String,String> map= new HashMap<>();
//        map.put("MsgId", "AS13654654545");
//        map.put("WeChatId","SHDGJKHGDGJLGDG");
//        if("false".equals("true")){
//            map.put("auditresult","预审未通过");
//        }else {
//            map.put("auditresult","预审通过");
//        }
//
//        map.put("auditopinion","内容不够");
//        String data=new Gson().toJson(map);
//        //得到返回的数据
//        String res = HttpUtil.okhttp(url,data);

//          测试sftp文件服务器

//        File file = new File("C:/Users/asus30/Pictures/类图1.png");
//        InputStream inputStream = new FileInputStream(file);
//
//        String filePath = "C:/Users/asus30/Pictures/类图1.png";
//
//        System.out.println(file.getName());
//        boolean result =  SFTPUtil.uploadFile(PropertiesUtil.getProperty("evidenceFiles.Path"),file.getName(),inputStream);
//        int temp = filePath.lastIndexOf('/');
//        String directory = filePath.substring(0,temp+1);
//        String fileName = filePath.substring(temp+1);
//        System.out.println(directory+"路径");
//        System.out.println(fileName+"文件名");
//        System.out.println(result);





//        JsonParser parser = new JsonParser();
//        JsonObject jsonObject = (JsonObject) parser.parse(result);



//        PythonInterpreter interpreter = new PythonInterpreter();
//        PySystemState sys = Py.getSystemState();
//
//        sys.path.add("c:\\jython2.7.0\\Lib");
//
//        String code = "import json\n" +
//                "def transPython(str):\n" +
//                "   jsonObject = json.loads(str)\n" +
//                "   jsonObject['name'] = \"mary\"\n" +
//                "   return json.dumps(jsonObject)";
//        interpreter.exec(code);
//
//        PyFunction func = interpreter.get("transPython", PyFunction.class);
//        String str = "{\"CityId\":18,\"CityName\":xian\",\"ProvinceId\":27,\"CityOrder\":1}";
//        PyObject pyObject = func.__call__(new PyString(str));
//        JSONObject json = new JSONObject(pyObject.toString());
//
//        System.out.println(json);
//
//
//        /**
//         * 使用Runtime.getRuntime执行脚本
//         * 这种方式和cmd中使用python+文件名的命令调用python程序相同
//         */
//
//
//        String a = "import json\n" +
//                "def transPython(str):\n" +
//                "   jsonObject = json.loads(str)\n" +
//                "   jsonObject['name'] = \"mary\"\n" +
//                "   return json.dumps(jsonObject)";
//
//
//        //设置命令行传入参数
//        String[] arg = new String[] {"python","c:\\Users\\jj\\untitle1.py",a};
//
//        Process pr = null;
//        try {
//            pr=Runtime.getRuntime().exec(arg);
//            BufferedReader in = new BufferedReader(new InputStreamReader(pr.getInputStream()));
//            String line;
//            while ((line = in.readLine()) != null){
//                System.out.println(line);
//            }
//            in.close();
//            pr.waitFor();
//        } catch (IOException e) {
//            e.printStackTrace();
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
//
//        System.out.println(json);


        //String word="核发房地产开发企业(内资)暂定资质周日能办吗";
        String word ="去哪办换领独生子女父母光荣证\n" +
                "去哪办换领《独生子女父母光荣证》";
//        word = word.toString().replaceAll("[\\pP‘’“”]", "").toUpperCase();
        System.out.println(word);
        System.out.println(word.toString().replaceAll("[\\pP‘’“”]", "").toUpperCase());

    }
}
