package com.duruo.controller;

import com.duruo.common.ServerResponse;
import com.duruo.po.User;
import com.duruo.service.impl.UserServiceImpl;
import com.duruo.util.JWTUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by @Author tachai
 * date 2018/12/4 9:19
 * GitHub https://github.com/TACHAI
 * Email 1206966083@qq.com
 */
@RequestMapping("/token/")
@Controller
public class TokenController {
    @Autowired
    private UserServiceImpl userService;

    @ResponseBody
    @RequestMapping("login.do")
    public Map<String,String> login(String userName,String userPassword){
        ServerResponse<User> response=userService.login(userName,userPassword);
        Map<String,String > map = new HashMap<>();
        if(response.isSuccess()){
            // 登录成功 设置jwt
            JWTUtils utils = new JWTUtils();
            //设置信息
            Map<String,Object> payload = new HashMap<>();
            payload.put("user_id",response.getData().getUserId());

            try {
                String jwt = utils.createJWT("jwt","",600000,payload);
                map.put("status","success");
                map.put("token",jwt);
//                map.put("user_id",response.getData().getUserId()+"");
                return map;
            } catch (Exception e) {
                e.printStackTrace();
            }
            map.put("status","error");
            map.put("msg","发生了错误");
            return map;
        }
        map.put("status","error");
        map.put("msg",response.getMsg());
        return map;

    }

    @ResponseBody
    @RequestMapping("test.do")
    public Map<String,String> test(String content){
        Map<String,String> map = new HashMap<>();
        map.put("status","success");
        map.put("content",content);
        return map;

    }

}
