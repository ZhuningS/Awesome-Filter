package com.baidu.ai.api.ocr;


import com.baidu.ai.api.auth.AuthService;
import com.baidu.ai.api.utils.HttpUtil;
import com.baidu.aip.util.Base64Util;
import org.aspectj.util.FileUtil;
import org.json.JSONObject;

import java.io.File;
import java.io.IOException;
import java.net.URLEncoder;

/**
 * Created by @Author tachai
 * date 2018/6/30 17:06
 *
 * @Email 1206966083@qq.com
 */
public class OcrService {
    // 通用识别URL
    private static String ocrHost = "https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic";

    /**
     * 传入图片存放地址
     * @param filePath
     * @return
     */
    public static String generalOCR(String filePath){
        try {
            byte[] imgData = FileUtil.readAsByteArray(new File(filePath));
            String imgStr = Base64Util.encode(imgData);
            String params = URLEncoder.encode("image","UTF-8") + "=" + URLEncoder.encode(imgStr,"UTF-8");
            /**
             * 注意这里只是为了简化编码每一次都去获取access_token,线上环境access_token
             * 客户端可自行缓存，过期后重新获取
             */
            String accessToken = AuthService.getAuth();
            String result = HttpUtil.post(ocrHost,accessToken,params);
            JSONObject jsonObject = new JSONObject(result);
            System.out.println(jsonObject);
            return result;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

}
