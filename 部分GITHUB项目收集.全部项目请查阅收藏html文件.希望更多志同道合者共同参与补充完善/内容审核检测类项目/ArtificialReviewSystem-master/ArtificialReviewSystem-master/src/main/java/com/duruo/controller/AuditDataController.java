package com.duruo.controller;

import com.duruo.common.Const;
import com.duruo.common.ServerResponse;
import com.duruo.dao.AuditDataMapper;
import com.duruo.dao.RetailLicenseMapper;
import com.duruo.po.AuditData;
import com.duruo.po.User;
import com.duruo.service.IAuditDataService;
import com.duruo.util.DateTimeUtil;
import com.duruo.util.PropertiesUtil;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.collections.map.HashedMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.math.BigInteger;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Timer;

/**
 * Created by @Author tachai
 * date 2018/6/10 18:07
 *
 * @Email 1206966083@qq.com
 */
@Controller
@RequestMapping("/auditData/")
public class AuditDataController {
    @Autowired
    private IAuditDataService auditDataService;
    @Autowired
    private AuditDataMapper auditDataMapper;
    @Autowired
    private RetailLicenseMapper retailLicenseMapper;

    /**
     * 登录后根据用户部门获得所有的数据
     *
     * @param session
     * @return
     */
    @GetMapping("getList.do")
    @ResponseBody
    public ServerResponse<List<AuditData>> getAll(HttpSession session) {
        User user = (User) session.getAttribute(Const.CURRENT_USER);
        if (user != null) {
            return auditDataService.list(user.getDeptId());
        } else {
            return ServerResponse.createByErrorMessage("用户未登录");
        }
    }

    /**
     * 登录后点击获得单个数据
     *
     * @param session
     * @param msgId
     * @return
     */
    @PostMapping("getAuditData.do")
    @ResponseBody
    public ServerResponse<AuditData> getAuditData(HttpSession session, String msgId) {
        User user = (User) session.getAttribute(Const.CURRENT_USER);
        if (user != null) {
            return auditDataService.getAuditDataById(msgId);
        } else {
            return ServerResponse.createByErrorMessage("用户未登录");
        }
    }

    /**
     * 用户审核数据
     *
     * @param session
     * @param
     * @return
     */
    @PostMapping("updateAuditData.do")
    @ResponseBody
    public ServerResponse<String> updateAuditData(HttpSession session, String msgId,String auditresult,String auditopinion) {
        User user = (User) session.getAttribute(Const.CURRENT_USER);
        if (user != null) {
            return auditDataService.updateAuditData(msgId,auditresult,auditopinion);
        } else {
            return ServerResponse.createByErrorMessage("用户未登录");
        }
    }

    @GetMapping("getImg.do")
    public void  readImage(HttpServletRequest request, HttpServletResponse response,String msgId) throws ServletException, IOException {
        //读取本地图片输入流
        FileInputStream inputStream = new FileInputStream(PropertiesUtil.getProperty("img.Path")+msgId+".jpg");
        int i = inputStream.available();
        //byte数组用于存放图片字节数据
        byte[] buff = new byte[i];
        inputStream.read(buff);
        //记得关闭输入流
        inputStream.close();
        //设置发送到客户端的响应内容类型
        response.setContentType("image/*");
        OutputStream out = response.getOutputStream();
        out.write(buff);
        //关闭响应输出流
        out.close();
    }


    /**
     * 微信端接口存信息
     *
     */

    @PostMapping("insertAuditData.do")
    @ResponseBody
    public ServerResponse<String> insertAuditData(@RequestBody Map<String, String> map) {
        AuditData auditData=new AuditData();
        if(map.containsKey("MsgId")){
            auditData.setMsgId(map.get("MsgId"));
        }
        if(map.containsKey("BmId")){
            auditData.setBmId(Integer.parseInt(map.get("BmId")));
        }
        if(map.containsKey("MediaId")){
            auditData.setMediaId(map.get("MediaId"));
        }
        if(map.containsKey("MsgType")){
            auditData.setMsgType(map.get("MsgType"));
        }
        if(map.containsKey("PicUrl")){
            auditData.setPicUrl(map.get("PicUrl"));
        }

        Date date= new Date();
        auditData.setCreateTime(date);
        return auditDataService.insertAuditData(auditData);
    }

    /**
     * @param session
     * @param msgId
     * @return
     */
    //推送消息给前端
    @PostMapping("postMsg.do")
    @ResponseBody
    public ServerResponse<Integer> postMsg(HttpSession session,String msgId){
        User user = (User) session.getAttribute(Const.CURRENT_USER);
        if(user!=null){
            Integer result = retailLicenseMapper.selectUnDo(user.getDeptId());
            return ServerResponse.createBySuccess(result,"未审核的信息");
        }else {
            return ServerResponse.createByErrorMessage("用户未登录，请退出重新登录");
        }
    }

}
