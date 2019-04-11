package com.duruo.common.filter;

import com.duruo.common.Const;
import com.duruo.po.User;
import lombok.extern.slf4j.Slf4j;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletResponseWrapper;
import java.io.IOException;

/**
 * Created by @Author tachai
 * date 2018/7/17 14:40
 *
 * @Email 1206966083@qq.com
 */
//判断html页面中是否是登录状态
@Slf4j
public class htmlFilter implements Filter {

    public FilterConfig config;

    public static boolean isContains(String container, String[] regx) {
        boolean result = false;

        for (int i = 0; i < regx.length; i++) {
            if (container.indexOf(regx[i]) != -1) {
                return true;
            }
        }
        return result;
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        //这里是得到webXML中的数字
        config = filterConfig;
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {

        HttpServletRequest hrequest = (HttpServletRequest)request;
        HttpServletResponseWrapper wrapper = new HttpServletResponseWrapper((HttpServletResponse) response);

//        System.out.println("过滤的页面:"+hrequest.getRequestURI());
        //不做过滤的页面  文件上传的页面不做上传，工商信息查询的页面不做上传
        String[] loginList = {"/login.html","/success.html","/404.html","/500.html"};
        String[] includeList = {"/page/fileUp/","/filePreview/","/fileUpForm/","queryGS.html","queryProgress","wordPre.html"};

        String redirectPath = hrequest.getContextPath() + "/login.html";// 没有登陆转向页面

        //对下面的不过滤
        if (this.isContains(hrequest.getRequestURI(), includeList)) {// 只对指定过滤参数后缀进行过滤
            chain.doFilter(request, response);
            return;
        }


        if (this.isContains(hrequest.getRequestURI(), loginList)) {// 对登录页面不进行过滤
            chain.doFilter(request, response);
            return;
        }

        User user = ( User ) hrequest.getSession().getAttribute(Const.CURRENT_USER);//判断用户是否登录
        if (user == null) {
            wrapper.sendRedirect(redirectPath);
            return;
        }else {
            chain.doFilter(request, response);
            return;
        }
    }

    @Override
    public void destroy() {
        this.config = null;
    }
}
