package com.duruo.controller;

import com.duruo.common.ResponseCode;
import com.duruo.common.ServerResponse;
import com.duruo.dao.EvidenceFilesMapper;
import com.duruo.po.EvidenceFiles;
import com.duruo.util.UpAndDownload;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.URLDecoder;

/**
 * Created by @Author tachai
 * date 2018/6/25 15:47
 *
 * @Email 1206966083@qq.com
 */
@Slf4j
@Controller
@RequestMapping("/download/")
public class DownloadFileController {
    @Autowired
    private EvidenceFilesMapper evidenceFilesMapper;


    @RequestMapping("evidenceFileDownload.do")
    public void getFile(HttpServletResponse response, String type, Integer licenseId) {
        response.setHeader("content-type", "application/octet-stream");
        response.setContentType("application/octet-stream");


        EvidenceFiles evidenceFile = null;
        try {
            type = URLDecoder.decode(type, "utf-8");
//            licenseId = URLDecoder.decode(licenseId, "utf-8");
            evidenceFile = evidenceFilesMapper.selectByTypeAndLicenseId(type, licenseId);
            //获得文件名
            String[] fileNames = evidenceFile.getPath().split("_");
            //如果使用中文会丢失名字只留下后缀名
            response.setHeader("Content-Disposition", "attachment;filename=" + new String(fileNames[fileNames.length - 1].getBytes(), "ISO-8859-1"));
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        //证明材料不能为空
        if (null != evidenceFile) {
            String filePath = evidenceFile.getPath();
            //调用方法下载 到应用服务器
//            UpAndDownload.downloadFileByPath(response,filePath);

            // 调用SFTP方法下载文件
            UpAndDownload.downloadFileByFilePath(response,filePath);

            System.out.println("成功下载");
        }
    }




    /**
     * 下载文件
     * @param response
     * @param msgId
     * @param type
     */
    @RequestMapping("getSingleFile.do")
    public void getSingleFile(HttpServletResponse response,String msgId,String type,String matterName){
        response.setHeader("content-type", "application/octet-stream");
        response.setContentType("application/octet-stream");

        if (StringUtils.isNotEmpty(msgId)&&StringUtils.isNotEmpty(type)&&StringUtils.isNotEmpty(matterName)) {
            EvidenceFiles evidenceFile = null;
            try {
                type = URLDecoder.decode(type, "utf-8");
                matterName = URLDecoder.decode(matterName, "utf-8");
//            licenseId = URLDecoder.decode(licenseId, "utf-8");
                evidenceFile = evidenceFilesMapper.selectByTypeAndmsgId(msgId, type,matterName);

                if(evidenceFile!=null){
                    //获得文件名
                    String[] fileNames = evidenceFile.getPath().split("-");
                    //如果使用中文会丢失名字只留下后缀名
                    response.setHeader("Content-Disposition", "attachment;filename=" + new String(fileNames[fileNames.length - 1].getBytes(), "ISO-8859-1"));
                }
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            }

            //证明材料不能为空
            if (null != evidenceFile) {
                String filePath = evidenceFile.getPath();
                //调用方法下载
                UpAndDownload.downloadFileByPath(response,filePath);
                System.out.println("成功下载");
            }
        }
    }

    /**
     * 这个是写在生成Word后页面加载过程中判断是否为空
     * @param msgId
     * @param type
     * @return
     */
    @PostMapping("fileIsEmpty.do")
    @ResponseBody
    public ServerResponse<String> fileIsEmpty(String msgId,String type,String matterName){
        if(StringUtils.isNotEmpty(msgId)&&StringUtils.isNotEmpty(type)){
            EvidenceFiles evidenceFile = evidenceFilesMapper.selectByTypeAndmsgId(msgId, type,matterName);
            if (evidenceFile!=null){
                return ServerResponse.createBySuccess();
            }else {
                return ServerResponse.createByErrorMessage("文件不存在");
            }
        }
        return ServerResponse.createByErrorCodeMessage(ResponseCode.Missing_ARGS.getCode(),ResponseCode.Missing_ARGS.getDesc());
    }
}
