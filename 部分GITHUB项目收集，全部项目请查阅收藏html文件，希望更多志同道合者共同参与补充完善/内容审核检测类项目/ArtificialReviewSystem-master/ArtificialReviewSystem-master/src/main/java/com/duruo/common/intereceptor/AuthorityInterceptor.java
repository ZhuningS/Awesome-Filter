package com.duruo.common.intereceptor;

import com.alibaba.fastjson.JSONObject;
import com.duruo.util.DateTimeUtil;
import com.duruo.util.JWTUtils;
import io.jsonwebtoken.Claims;
import lombok.extern.slf4j.Slf4j;
import org.springframework.lang.Nullable;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by @Author tachai
 * date 2018/7/17 13:42
 *
 * @Email 1206966083@qq.com
 */
@Slf4j
public class AuthorityInterceptor implements HandlerInterceptor{
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        log.info("preHandle");
        JWTUtils util = new JWTUtils();
        String jwt = request.getHeader("Authorization");
        Date now = new Date();
        try {
            if(jwt == null){
                System.out.println("用户未登录，验证失败");
                log.error("当前时间:{},token验证失败,用户未登录", DateTimeUtil.dateToStr(now));
            }else {
                Claims c;
                c = util.parseJWT(jwt);
                // 这里换成其他的东西
                if(c.get("user_id")!=null){
                    System.out.println("用户id" + c.get("user_id") + "已是登录状态");
                    log.info("当前时间:{},token验证成功，用户id:{}",DateTimeUtil.dateToStr(now),c.get("user_id"));
                    return true;
                }
            }
            response.setContentType("application/json; charset=utf-8");
            System.out.println("token解析错误，验证失败");
            log.error("当前时间:{}，token解析错误，验证失败",DateTimeUtil.dateToStr(now));
            Map<String,String> map= new HashMap<>();
            map.put("status","error");
            map.put("msg","token解析错误，验证失败");
            String json = JSONObject.toJSONString(map);
            response.getWriter().print(json);
            response.getWriter().flush();
            response.getWriter().close();
        }catch (Exception e){
            e.getStackTrace();
            response.setContentType("application/json; charset=utf-8");
            System.out.println("token解析错误，验证失败");
            log.error("当前时间:{},token解析错误，验证失败",DateTimeUtil.dateToStr(now));
            Map<String,String> map= new HashMap<>();
            map.put("status","error");
            map.put("msg","token解析错误，验证失败");
            String json = JSONObject.toJSONString(map);
            response.getWriter().print(json);
            response.getWriter().flush();
            response.getWriter().close();
        }
         return false;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, @Nullable ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, @Nullable Exception ex) throws Exception {

    }
}
