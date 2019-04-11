package com.IOPdemo.sysmanage.action;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.IOPdemo.sysmanage.util.Upload;
/**
 * 图片上传action
 * @author Administrator
 *
 */
public class UploadAction extends HttpServlet{
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doPost(request, response);
	}
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		String fileName = Upload.upload(request, response);
		HttpSession session = request.getSession();
		session.setAttribute("fileName", "upload/"+fileName);
		response.sendRedirect("index.jsp");
	}
}
