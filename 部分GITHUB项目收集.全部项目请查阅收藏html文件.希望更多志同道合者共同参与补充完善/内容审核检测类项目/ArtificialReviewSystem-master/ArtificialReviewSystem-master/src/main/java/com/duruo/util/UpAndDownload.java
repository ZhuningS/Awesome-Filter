package com.duruo.util;

import com.jcraft.jsch.SftpException;
import lombok.extern.slf4j.Slf4j;

import javax.servlet.http.HttpServletResponse;
import java.io.*;

/**
 * Created by @Author tachai
 * date 2018/6/29 19:11
 *
 * @Email 1206966083@qq.com
 */
@Slf4j
public class UpAndDownload {

    /**
     * 根据路径下载本地文件
     * @param response
     * @param path
     */
    public static void downloadFileByPath(HttpServletResponse response, String path){
        byte[] buff = new byte[1024];
        BufferedInputStream bis = null;
        OutputStream os = null;
        try {
            os = response.getOutputStream();
            bis = new BufferedInputStream(new FileInputStream(new File(path)));
            int i = bis.read(buff);
            while(-1 != i){
                os.write(buff, 0, i);
                os.flush();
                i = bis.read(buff);
            }
        } catch (IOException e) {
            log.error("找不到下载文件路径:{}", path);
            e.printStackTrace();
        } finally {
            if (bis != null) {
                try {
                    bis.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    /**
     * 调用SFTP下载文件服务器的资源
     * @param response
     * @param filePath
     */
    public static void downloadFileByFilePath(HttpServletResponse response,String filePath){

        OutputStream os = null;
        int temp = filePath.lastIndexOf('/');
        String directory = filePath.substring(0,temp+1);
        String fileName = filePath.substring(temp+1);
        try {
            os = response.getOutputStream();
//            bis = new BufferedInputStream(new FileInputStream(new File(path)));
            byte[] result = SFTPUtil.downloadFile(directory,fileName);

            os.write(result);
            os.flush();
        } catch (IOException e) {
            log.error("文件下载错误:{}",e.getMessage() );
            e.printStackTrace();
        } catch (SftpException e) {
            log.error("SFTP服务器下载文件异常:{}", e.getStackTrace());
            e.printStackTrace();
        } finally {

        }
    }

}
