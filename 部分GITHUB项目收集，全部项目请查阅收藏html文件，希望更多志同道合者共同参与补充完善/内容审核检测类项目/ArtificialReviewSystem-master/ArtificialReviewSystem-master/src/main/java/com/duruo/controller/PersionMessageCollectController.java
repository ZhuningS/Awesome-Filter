package com.duruo.controller;

import com.duruo.common.ServerResponse;
import com.duruo.po.PersonalInformationCollection;
import com.duruo.service.IWebFormService;
import com.duruo.service.impl.WebFormServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.lang.reflect.Field;
import java.lang.reflect.Method;

/**
 * Created by @Author tachai
 * date 2018/7/26 10:28
 *
 * @Email 1206966083@qq.com
 */
@Controller
@RequestMapping("/persionMessage/")
public class PersionMessageCollectController {
    @Autowired
    private WebFormServiceImpl webFormService;

    @PostMapping("save.do")
    @ResponseBody
    public ServerResponse<String> save(PersonalInformationCollection personal,String permanentAddress1,String  permanentAddress2,String permanentAddress3, String localAddress1,String localAddress2,String localAddress3,String localAddress4,String localAddress5,String weChatId,String matterName) {
        personal.setPermanentAddress(permanentAddress1+"-"+permanentAddress2+"-"+permanentAddress3);
        personal.setLocalAddress(localAddress1+"-"+localAddress2+"-"+localAddress3+"-"+localAddress4+"-"+localAddress5);
        System.out.println(personal.toString());


        webFormService.getPersionCollection(weChatId,matterName,personal);
        return ServerResponse.createBySuccess("获得数据");
    }
}
