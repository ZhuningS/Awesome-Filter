package com.IOPdemo.sysmanage.util;

import java.io.File;
import java.util.Iterator;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

/**
 * 图片上传处理类
 * @author Administrator
 *
 */
public class Upload {
	public static String upload(HttpServletRequest request,HttpServletResponse response){
		String fileName = null;
		File uploadFile = null;
		try {
			request.setCharacterEncoding("utf-8");
			response.setCharacterEncoding("utf-8");
			//判断文件上传类型
			boolean bol = ServletFileUpload.isMultipartContent(request);
			if (bol) {
				//构建文件上传对象
				DiskFileItemFactory factory = new DiskFileItemFactory();
				ServletFileUpload upload = new ServletFileUpload(factory);
				//创建迭代器
				Iterator<FileItem> items = upload.parseRequest(request).iterator();
				while (items.hasNext()) {
					FileItem item = items.next();
					//判断是否为普通类型表单,为什么还要再判断一次？
					boolean bl = item.isFormField();
					if (!bl) {
						//获取文件名
						fileName = item.getName();
						//定义文件上传目录
						String filePath = request.getRealPath("upload");
						//创建文件上传目录
						File file = new File(filePath);
						if (!file.exists()) {//如果不存在，就创建
							file.mkdirs();
						}
						uploadFile = new File(filePath+"//"+fileName);
						item.write(uploadFile);
					}else {
						return null;
					}
				}
			}else {
				return null;
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return fileName;
		
	}
}
