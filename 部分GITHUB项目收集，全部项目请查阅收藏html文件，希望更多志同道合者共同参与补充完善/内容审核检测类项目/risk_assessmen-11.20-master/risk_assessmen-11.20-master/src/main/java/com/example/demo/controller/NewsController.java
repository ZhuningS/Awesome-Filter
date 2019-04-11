package com.example.demo.controller;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@EnableAutoConfiguration
@RequestMapping(value = "/news")
public class NewsController {
    @RequestMapping("/list")
    public String list(Model model){
        return "news";
    }
    @RequestMapping("/subject")
    public String subject(Model model){
        return "news_subject";
    }
    @RequestMapping("/hot")
    public String hot(Model model){
        return "news_hot";
    }
    @RequestMapping("/subject_1")
    public String news1(Model model){
      return "news_subject1";
    }
    @RequestMapping("/subject_2")
    public String news2(Model model){
        return "news_subject2";
    }
    @RequestMapping("/subject_3")
    public String news3(Model model){
        return "news_subject3";
    }
    @RequestMapping("/subject_4")
    public String news4(Model model){
        return "news_subject4";
    }
    @RequestMapping("/subject_5")
    public String news5(Model model){
        return "news_subject5";
    }
    @RequestMapping("/hot_1")
    public String hot1(Model model){
        return "news_hot1";
    }
    @RequestMapping("/hot_2")
    public String hot2(Model model){
        return "news_hot2";
    }
    @RequestMapping("/hot_3")
    public String hot3(Model model){
        return "news_hot3";
    }
    @RequestMapping("/hot_4")
    public String hot4(Model model){
        return "news_hot4";
    }
    @RequestMapping("/hot_5")
    public String hot5(Model model){
        return "news_hot5";
    }
}
