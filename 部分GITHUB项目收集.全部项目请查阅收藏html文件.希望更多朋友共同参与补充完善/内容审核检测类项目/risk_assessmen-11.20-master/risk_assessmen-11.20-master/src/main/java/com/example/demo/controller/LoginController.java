package com.example.demo.controller;

import com.example.demo.dao.UserDAO;
import com.example.demo.pojo.UserDO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@Controller
@EnableAutoConfiguration
public class LoginController {

    @Autowired
    private UserDAO userDAO;

    /**
     * 登录页面
     *
     * @return
     */

    @RequestMapping(value = {"/login"})
    public String login() {
        return "login";
    }


    /**
     * 认证
     *session就是一个map结构
     * @return
     */
    @RequestMapping(value = "/oauth", method = RequestMethod.POST)
    public String oauthUser(String username, String password, Model model, HttpSession session) {
        UserDO user = userDAO.findOne(username, password);
        if (user != null) {
            session.setAttribute("user", user);

//            return "redirect:/main/select";
            return "redirect:/main/main_page";
        } else {
            model.addAttribute("msg", "登录失败!账号或密码错误");
            return "login";
        }
    }

    @RequestMapping(value = "/logout")
    public String logout(HttpSession session,Model model) {
//        session.invalidate();
        session.removeAttribute("user");
        model.addAttribute("logout",1);
        return "login";
    }

    /**
     * 伯乐注册
     */
    @RequestMapping(value = {"/boleReg"})
    public String boleReg(Model model) {
        UserDO uo = new UserDO();
        model.addAttribute("uo", uo);
        return "user_add_bole";
    }

}