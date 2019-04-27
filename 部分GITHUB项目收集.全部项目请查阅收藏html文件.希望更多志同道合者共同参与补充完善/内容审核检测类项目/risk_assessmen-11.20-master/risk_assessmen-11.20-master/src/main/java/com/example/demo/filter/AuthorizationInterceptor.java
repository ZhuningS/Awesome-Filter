package com.example.demo.filter;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


/**
 * 登录认证拦截器
 * 拦截器必须实现HandleInterceptor接口
 *
 * @author mioko
 */


public class AuthorizationInterceptor implements HandlerInterceptor {

    /**
     * 该方法将在整个请求完成之后执行，主要作用是清理资源
     * 该方法也只能在当前Interceptor的preHandle方法的返回值为true时才会执行
     */
    @Override
    public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) throws Exception {
    }

    /**
     * preHandle方法是进行处理器拦截用的
     * 该方法将在Controller处理之前调用
     * 该方法的返回值为true拦截器才会继续往下执行
     * 该方法的返回值为false的时候整个请求就结束了
     * @return
     * @throws Exception
     */
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String servletPath=request.getServletPath();
        String browser="MicroMessenger";
        String header=request.getHeader("User-Agent");
        if(servletPath.startsWith("/api/")){
            if(header.contains(browser)){
                return true;
            }
        }
        String referer = request.getHeader("referer");
        if (referer != null) {
            HttpSession session = request.getSession();
            if (session.getAttribute("user") != null) {
                return true;
            }
        }
        // 跳转登录
        String url = "/login";
        response.sendRedirect(url);
        return false;
    }

    /**
     * 该方法在Controller的方法调用之后执行，方法中可以对ModelAndView进行操作
     * 该方法也只能在当前Interceptor的preHandle方法的返回值为true时才会执行
     *
     * @param httpServletRequest
     * @param httpServletResponse
     * @param o
     * @param modelAndView
     * @throws Exception
     */
    @Override
    public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, ModelAndView modelAndView) throws Exception {
    }


}