package com.IOPdemo.sysmanage.action;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import com.IOPdemo.sysmanage.util.Upload;
import com.baidu.aip.antiporn.AipAntiporn;
/**
 * 图片识别黄反action
 * @author Administrator
 *
 */
public class QueryAction extends HttpServlet{
	public static final String APP_ID = "9702247";
	public static final String API_KEY = "OorYXQ01LIE2b5TuF8GFm7bv";
	public static final String SECRET_KEY = "BOCC6XRsE3W4tOlxLLZd65EiFnsuxEAf";
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
		String path = request.getParameter("path");//upload/1.jpg
		//真实物理路径
		String realPath = request.getRealPath(path);
		
		String result = QueryAction.getResult(realPath);
		response.getWriter().write(result);
	}
	/**
	 * 调用百度大脑接口判断图片色情级别
	 * @param path
	 * @return
	 */
	public static String getResult(String path){
		AipAntiporn aipAntiporn = new AipAntiporn(APP_ID,API_KEY,SECRET_KEY);
		JSONObject detect = aipAntiporn.detect(path);
		return detect.toString();
	}
	public static void main(String[] args) {
		String result = getResult("D:\\develop\\webserver\\apache-tomcat-7.0.73-windows-x64\\apache-tomcat-7.0.73\\webapps\\IOPdemo\\img\\1.jpg");
		System.err.println(result);
	}
}
