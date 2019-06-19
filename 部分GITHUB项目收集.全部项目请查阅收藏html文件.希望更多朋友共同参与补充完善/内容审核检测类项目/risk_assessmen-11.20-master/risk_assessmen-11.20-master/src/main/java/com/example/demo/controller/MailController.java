package com.example.demo.controller;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;

@Controller
@EnableAutoConfiguration
@RequestMapping(value = "/mail")
public class MailController {
    @RequestMapping(value = "/list")
    public String list(Model model, HttpSession httpSession){
        return "mailbox";
    }
    @RequestMapping(value = "/compose")
    public String compose(Model model, HttpSession httpSession){
        return "compose";
    }
    @RequestMapping(value = "/read")
    public String read(Model model, HttpSession httpSession){
        return "read-mail";
    }
}
