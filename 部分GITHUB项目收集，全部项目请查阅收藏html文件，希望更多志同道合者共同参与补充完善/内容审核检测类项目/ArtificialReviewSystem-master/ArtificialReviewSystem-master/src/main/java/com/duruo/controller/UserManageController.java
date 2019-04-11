package com.duruo.controller;

import com.duruo.common.Const;
import com.duruo.common.ResponseCode;
import com.duruo.common.ServerResponse;
import com.duruo.dao.UserMapper;
import com.duruo.po.User;
import com.duruo.po.UserPo;
import com.duruo.service.IUseService;
import com.duruo.util.MD5Util;
import com.duruo.vo.UserVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.util.List;

/**
 * Created by @Author tachai
 * date 2018/6/10 17:45
 *
 * @Email 1206966083@qq.com
 */
@Controller
@RequestMapping("/user/")
public class UserManageController {
    @Autowired
    private IUseService useService;
    @Autowired
    private UserMapper userMapper;

    @PostMapping("/login.do")
    @ResponseBody
    public ServerResponse<User> login(String userName, String userPassword, HttpSession session){
        ServerResponse<User> response=useService.login(userName,userPassword);
        if(response.isSuccess()){
            session.setAttribute(Const.CURRENT_USER,response.getData());
            //设置过期时间10小时
            session.setMaxInactiveInterval(60*60*10);
            return response;
//            User user=response.getData();
//            if(user.getUserId()){
//                session.setAttribute(Const.CURRENT_USER,response.getData());
//                //设置过期时间1小时
//                session.setMaxInactiveInterval(60*60);
//                return response;
//            }else if("1".equals(user.getDeptId())){
//
//            }else {
//                return ServerResponse.createByErrorMessage("不是管理员无法登录");
//            }
        }
        return response;
    }

    @PostMapping("selectById.do")
    @ResponseBody
    public ServerResponse<UserVo> selectById(Integer userId){
        return useService.selectById(userId);
    }

    @GetMapping("selectlist.do")
    @ResponseBody
    public ServerResponse<List<UserVo>> list(HttpSession session,UserPo user){
        User admin = (User) session.getAttribute(Const.CURRENT_USER);
        if(admin != null){
            return useService.list(user);
        }else {
            return ServerResponse.createByErrorCodeMessage(ResponseCode.NEED_LOGIN.getCode(),ResponseCode.NEED_LOGIN.getDesc());

        }
    }


    @PostMapping("addUser.do")
    @ResponseBody
    public ServerResponse<String> addUser(HttpSession session,UserPo user){
        User admin = (User) session.getAttribute(Const.CURRENT_USER);
        if(admin != null){
            return useService.insertUser(user);
        }else {
            return ServerResponse.createByErrorCodeMessage(ResponseCode.NEED_LOGIN.getCode(),ResponseCode.NEED_LOGIN.getDesc());

        }
    }


    @PostMapping("delUser.do")
    @ResponseBody
    public ServerResponse<String> delUser(HttpSession session,Integer userId){
        User admin = (User) session.getAttribute(Const.CURRENT_USER);
        if(admin != null){
            return useService.deleteUser(userId);
        }else {
            return ServerResponse.createByErrorCodeMessage(ResponseCode.NEED_LOGIN.getCode(),ResponseCode.NEED_LOGIN.getDesc());

        }
    }

    @PostMapping("updateUser.do")
    @ResponseBody
    public ServerResponse<String> updateUser(HttpSession session,UserPo user){
        User admin = (User) session.getAttribute(Const.CURRENT_USER);
        if(admin != null){
            return useService.updateUser(user);
        }else {
            return ServerResponse.createByErrorCodeMessage(ResponseCode.NEED_LOGIN.getCode(),ResponseCode.NEED_LOGIN.getDesc());

        }
    }


    @PostMapping("updatePassword.do")
    @ResponseBody
    public ServerResponse<String> updatePassword(HttpSession session,String oldPassword,String newPassword){
        User user = (User) session.getAttribute(Const.CURRENT_USER);
        if(user != null){
            User user1 = userMapper.selectLogin(user.getUserName(),MD5Util.MD5EncodeUtf8(oldPassword));
            if(user1 != null){
                user1.setPassword(newPassword);
                userMapper.updatePassword(MD5Util.MD5EncodeUtf8(newPassword),user1.getUserId());
                return ServerResponse.createBySuccessMessage("更改密码成功");
            }else {
                return ServerResponse.createByErrorMessage("输入密码错误");
            }
        }else {
            return ServerResponse.createByErrorCodeMessage(ResponseCode.NEED_LOGIN.getCode(),ResponseCode.NEED_LOGIN.getDesc());
        }
    }


    @PostMapping("resetPassword.do")
    @ResponseBody
    public ServerResponse<String> resetPassword(HttpSession session,Integer userId){
        User user = (User) session.getAttribute(Const.CURRENT_USER);
        if(user != null){
            return useService.resetPassword(userId);
        }else {
            return ServerResponse.createByErrorCodeMessage(ResponseCode.NEED_LOGIN.getCode(),ResponseCode.NEED_LOGIN.getDesc());
        }
    }


}
