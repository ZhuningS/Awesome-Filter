package com.duruo.service.impl;

import com.duruo.common.ServerResponse;
import com.duruo.dao.AuditDataMapper;
import com.duruo.po.AuditData;
import com.duruo.service.IAuditDataService;
import com.duruo.util.HttpUtil;
import com.duruo.util.PropertiesUtil;
import com.google.gson.Gson;
import lombok.extern.slf4j.Slf4j;
import okhttp3.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.io.*;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by @Author tachai
 * date 2018/6/10 18:19
 *
 * @Email 1206966083@qq.com
 */
@Slf4j
@Service("iAuditDataService")
public class AuditDataServiceImpl implements IAuditDataService {

    public static final MediaType JSON = MediaType.parse("application/json; charset=utf-8");

    @Autowired
    private AuditDataMapper auditDataMapper;

    @Override
    public ServerResponse<List<AuditData>> list(Integer bmId) {
        List<AuditData> list=auditDataMapper.selectBybmId(bmId);
        if(list!=null){
            return ServerResponse.createBySuccess(list,"查询成功");
        }else {
            return ServerResponse.createByErrorMessage("未查到相关数据");
        }
    }

    @Override
    public ServerResponse<AuditData> getAuditDataById(String msgId) {
        AuditData auditData=auditDataMapper.selectByPrimaryKey(msgId);
        if(auditData!=null){
            return ServerResponse.createBySuccess(auditData,"查询成功");
        }else {
            return ServerResponse.createByErrorMessage("未查到相关数据");
        }
    }

    @Override
    public ServerResponse<String> updateAuditData(String msgId,String auditresult,String auditopinion) {
        if(msgId!=null){
            AuditData auditData=auditDataMapper.selectByPrimaryKey(msgId);
            if("true".equals(auditresult)){
                auditData.setAuditresult(true);
            }else {
                auditData.setAuditresult(false);
            }
            if(!StringUtils.isEmpty(auditopinion)){
                auditData.setAuditopinion(auditopinion);
            }
//            设置为已审核
            auditData.setStatus(true);
            int result=auditDataMapper.updateByPrimaryKeySelective(auditData);

            if(result>0){


//             返回结果给微信客户端
                String url= PropertiesUtil.getProperty("return.weixin");
                Map<String,String> map= new HashMap<>();
                map.put("MsgId",auditData.getMsgId());
                map.put("auditresult",auditresult);
                map.put("auditopinion",auditopinion);
                String data=new Gson().toJson(map);
                //得到返回的数据
                String res = HttpUtil.okhttp(url,data);

                if(org.apache.commons.lang.StringUtils.isBlank(res)){
                    return ServerResponse.createByErrorMessage("处理失败");
                }else {
                    return ServerResponse.createBySuccess("处理成功");
                }

            }else {
                return ServerResponse.createByErrorMessage("处理失败");
            }
        }
        return ServerResponse.createByErrorMessage("处理失败");

    }

    @Override
    public ServerResponse<String> insertAuditData(AuditData auditData) {

        //存微信发过来的图片
        downloadPicture(auditData.getPicUrl(),auditData.getMsgId());


       int result = auditDataMapper.insert(auditData);
       if(result>0){
           return ServerResponse.createBySuccessMessage("数据插入成功");
       }else {
           return ServerResponse.createByErrorMessage("数据插入失败");
       }
    }


    //链接url下载图片
    private static void downloadPicture(String urlList,String imageName) {
        URL url = null;
        int imageNumber = 0;

        try {
            url = new URL(urlList);
            DataInputStream dataInputStream = new DataInputStream(url.openStream());

            String imagePath =  PropertiesUtil.getProperty("img.Path")+imageName+".jpg";

            FileOutputStream fileOutputStream = new FileOutputStream(new File(imagePath));
            ByteArrayOutputStream output = new ByteArrayOutputStream();

            byte[] buffer = new byte[1024];
            int length;

            while ((length = dataInputStream.read(buffer)) > 0) {
                output.write(buffer, 0, length);
            }
            byte[] context=output.toByteArray();
            fileOutputStream.write(output.toByteArray());
            dataInputStream.close();
            fileOutputStream.close();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


}
