package com.example.demo.util;


import org.apache.tomcat.util.http.fileupload.FileItem;
import org.apache.tomcat.util.http.fileupload.FileUploadException;
import org.apache.tomcat.util.http.fileupload.RequestContext;
import org.apache.tomcat.util.http.fileupload.disk.DiskFileItemFactory;
import org.apache.tomcat.util.http.fileupload.servlet.ServletFileUpload;

import javax.servlet.http.HttpServletRequest;
import java.io.*;
import java.util.List;

public class UploadUtil {

    /**
     * 附件上传方法 world文档类型
     * @param request
     * @param fileName 保存成的文件名字
     * @param url   保存的文档地址
     */
    public static void insertResume(HttpServletRequest request,String fileName,String url) {
        //改成需要存放的位置
        DiskFileItemFactory disk = new DiskFileItemFactory(20 * 1024, new File(url));
        ServletFileUpload up = new ServletFileUpload(disk);
        try {
            List<FileItem> list = up.parseRequest((RequestContext) request);
            FileItem file = list.get(0);
            InputStream in = file.getInputStream();
            int size = in.available();
            OutputStream outputStream = new FileOutputStream(url +fileName  + ".docx");
            byte[] bytes = new byte[1024 * 7];
            int len = 0;
            while ((len = in.read(bytes)) != -1) {
                outputStream.write(bytes, 0, len);
            }
            file.delete();
            outputStream.flush();
            outputStream.close();
        } catch (FileUploadException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    public static void uploadFile(byte[] file, String filePath, String fileName) throws Exception {
        File targetFile = new File(filePath);
        if(!targetFile.exists()){
            targetFile.mkdirs();
        }
        FileOutputStream out = new FileOutputStream(filePath+fileName);
        out.write(file);
        out.flush();
        out.close();
    }
}