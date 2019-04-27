package com.duruo.controller;

import com.duruo.common.Const;
import com.duruo.common.ResponseCode;
import com.duruo.common.ServerResponse;
import com.duruo.dao.FilePathMapper;
import com.duruo.po.*;
import com.duruo.service.IStAuditService;
import com.duruo.util.UpAndDownload;
import com.duruo.vo.PageHelp;
import com.duruo.vo.StAuditVo;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.*;
import java.net.URLDecoder;
import java.util.List;

/**
 * Created by @Author tachai
 * date 2018/6/19 14:19
 *
 * @Email 1206966083@qq.com
 */
@Slf4j
@RestController
@RequestMapping("/stAudit/")
public class StAuditController {
    @Autowired
    private IStAuditService stAuditService;
    @Autowired
    private FilePathMapper filePathMapper;

    @GetMapping("list.do")
    public ServerResponse<List<StAuditVo>> list(HttpSession session,String realname,String project ){
        User user=(User) session.getAttribute(Const.CURRENT_USER);
        if(user!=null){
            try {
                project =URLDecoder.decode(project,"utf-8");
                realname = URLDecoder.decode(realname,"utf-8");
                return stAuditService.list(realname,project);
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            }

        }else {
            return ServerResponse.createByErrorMessage(ResponseCode.NEED_LOGIN.getDesc());
        }
        return ServerResponse.createByErrorMessage("查询错误");
    }

    @PostMapping("getEnterprise.do")
    public ServerResponse<Enterprise> getEnterprise(HttpSession session,String sn){
        User user=(User) session.getAttribute(Const.CURRENT_USER);
        if(user!=null){
            System.out.println(sn);
                return stAuditService.getEnterprise(sn);
        }else {
            return ServerResponse.createByErrorMessage(ResponseCode.NEED_LOGIN.getDesc());
        }
    }

    @PostMapping("getProjectdetail.do")
    public ServerResponse<Projectdetail>getProjectdetail(HttpSession session,String sn){
        User user=(User) session.getAttribute(Const.CURRENT_USER);
        if(user!=null){
            return stAuditService.getProjectdetail(sn);
        }else {
            return ServerResponse.createByErrorMessage(ResponseCode.NEED_LOGIN.getDesc());
        }
    }

    @GetMapping("getListPersions.do")
    public ServerResponse<List<Persions>> getListPersions(HttpSession session,String sn){
        User user=(User) session.getAttribute(Const.CURRENT_USER);
        if(user!=null){
            try {
                sn = URLDecoder.decode(sn,"utf-8");
                return stAuditService.getListPersions(sn);
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            }
           return ServerResponse.createByError();
        }else {
            return ServerResponse.createByErrorMessage(ResponseCode.NEED_LOGIN.getDesc());
        }
    }

    @PostMapping("getProjectBudget.do")
    public ServerResponse<ProjectBudget> getProjectBudget(HttpSession session,String sn){
        User user=(User) session.getAttribute(Const.CURRENT_USER);
        if(user!=null){
            return stAuditService.getProjectBudget(sn);
        }else {
            return ServerResponse.createByErrorMessage(ResponseCode.NEED_LOGIN.getDesc());
        }
    }

    @GetMapping("getListBudgetDetail.do")
    public ServerResponse<List<ProjectBudgetDetail>>getListBudgetDetail(HttpSession session,String sn){
        User user=(User) session.getAttribute(Const.CURRENT_USER);
        if(user!=null){
            try {
                sn = URLDecoder.decode(sn,"utf-8");
                return stAuditService.getListBudgetDetail(sn);
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            }
            return ServerResponse.createByError();
        }else {
            return ServerResponse.createByErrorMessage(ResponseCode.NEED_LOGIN.getDesc());
        }
    }

    //意见更新
    @PostMapping("updateOpinion.do")
    public ServerResponse<String> updateOpinion(HttpSession session,String opinion,String sn,String status){
        User user=(User) session.getAttribute(Const.CURRENT_USER);
        if(user!=null){
            return stAuditService.updateOpinion(opinion,sn,status);
        }else {
            return ServerResponse.createByErrorMessage(ResponseCode.NEED_LOGIN.getDesc());
        }
    }
    //意见提交
    @PostMapping("postOpinion.do")
    public ServerResponse<String> postOpinion(HttpSession session,String opinion,String sn,String status){
        User user=(User) session.getAttribute(Const.CURRENT_USER);
        if(user!=null){
            return stAuditService.postOpinion(opinion,sn,status);
        }else {
            return ServerResponse.createByErrorMessage(ResponseCode.NEED_LOGIN.getDesc());
        }
    }


    @PostMapping("checkAll.do")
    public ServerResponse<String> checkAll(HttpSession session) throws Exception {
        User user=(User) session.getAttribute(Const.CURRENT_USER);
        if(user!=null){
            log.error(new Exception().getMessage());
            return stAuditService.checkAll();
        }else {
            return ServerResponse.createByErrorMessage(ResponseCode.NEED_LOGIN.getDesc());
        }
    }


    @PostMapping("getOpinion.do")
    public ServerResponse<String> getOpinion(HttpSession session,String sn){
        User user=(User) session.getAttribute(Const.CURRENT_USER);
        if(user!=null){
            return stAuditService.getOpinion(sn);
        }else {
            return ServerResponse.createByErrorMessage(ResponseCode.NEED_LOGIN.getDesc());
        }
    }


    @PostMapping("getlistFile.do")
    public ServerResponse<List<FilePath>> getlistFile(HttpSession session,String sn){
        User user=(User) session.getAttribute(Const.CURRENT_USER);
        if(user!=null){
            List<FilePath> list = filePathMapper.list(Integer.parseInt(sn));
            if(null!=list){
                return ServerResponse.createBySuccess(list,"数据返回成功");
            }
            return ServerResponse.createByErrorMessage("未找到相关数据");
        }else {
            return ServerResponse.createByErrorMessage(ResponseCode.NEED_LOGIN.getDesc());
        }
    }


    @PostMapping("getAll.do")
    public ServerResponse<String> getAll(HttpSession session){
        stAuditService.getAll();
        return ServerResponse.createBySuccessMessage("");
    }

    @RequestMapping("downloadFile.do")
    public ServerResponse<String> getFile(HttpSession session,HttpServletResponse response, String sn,String id) {
        response.setHeader("content-type", "application/octet-stream");
        response.setContentType("application/octet-stream");
        FilePath filePath=null;
        User user=(User) session.getAttribute(Const.CURRENT_USER);
        if(user!=null){
            filePath = filePathMapper.selectByProjectIdAndId(Integer.parseInt(sn),id);
            try {
                response.setHeader("Content-Disposition", "attachment;filename=" + java.net.URLEncoder.encode(filePath.getName(), "UTF-8"));
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            }

            //酒类经营许可证不为空
            //证明材料不能为空
            if (null != filePath) {
                String path = filePath.getPath();
                UpAndDownload.downloadFileByPath(response,path);
                System.out.println("成功下载");
            }
            return null;
        }else {
            return ServerResponse.createByErrorMessage(ResponseCode.NEED_LOGIN.getDesc());
        }

    }


    @GetMapping("listAll.do")
    public PageHelp listAll(HttpSession session, String realname, String project, @RequestParam(value = "pageSize", defaultValue = "25")int pageSize , @RequestParam(value="pageNumber",defaultValue = "1")int pageNumber ){
        Page page = PageHelper.startPage(pageNumber, pageSize);
        User user = (User) session.getAttribute(Const.CURRENT_USER);
        List<AuditTempData> list = stAuditService.listAll(realname, project).getData();
        Long total = page.getTotal();
        PageHelp pageHelp = new PageHelp();
        pageHelp.setTotal(total);
        pageHelp.setRows(list);
        return pageHelp;
    }

    @PostMapping("delectById.do")
    public ServerResponse<String> delectById(HttpSession session,String id){
        return stAuditService.delectById(id);
    }
}
