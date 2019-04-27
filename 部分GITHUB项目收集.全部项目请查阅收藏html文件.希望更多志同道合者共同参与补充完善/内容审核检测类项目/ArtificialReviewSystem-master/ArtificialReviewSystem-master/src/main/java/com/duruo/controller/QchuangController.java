package com.duruo.controller;

import com.duruo.common.Const;
import com.duruo.common.DataSourceContextHolder;
import com.duruo.common.ServerResponse;
import com.duruo.dao.CorpMapper;
import com.duruo.dao.QchuangMapper;
import com.duruo.po.Qchuang;
import com.duruo.po.User;
import com.duruo.service.IQchuangService;
import com.duruo.vo.PageHelp;
import com.duruo.vo.QchaungVO;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;

/**
 * Created by @Author tachai
 * date 2018/9/15 13:18
 * GitHub https://github.com/TACHAI
 * Email 1206966083@qq.com
 */
@Controller
@RequestMapping("/qchuang/")
public class QchuangController {
    @Autowired
    private IQchuangService qchuangService;
    @Autowired
    private CorpMapper corpMapper;
    @Autowired
    private QchuangMapper qchuangMapper;


    @GetMapping("list.do")
    @ResponseBody
    public PageHelp list(HttpSession session,String companyName,String startTime,String endTime, @RequestParam(value = "pageSize", defaultValue = "25") int pageSize, @RequestParam(value = "pageNumber", defaultValue = "1") int pageNumber) {
        Page page = PageHelper.startPage(pageNumber, pageSize);
        User user = (User) session.getAttribute(Const.CURRENT_USER);
        if (user != null) {
            List<QchaungVO> list = qchuangService.list(companyName,startTime,endTime).getData();
            PageHelp pageHelp = new PageHelp();
            pageHelp.setTotal(page.getTotal());
            pageHelp.setRows(list);
            return pageHelp;
        }
        return null;
    }

    @GetMapping("donelist.do")
    @ResponseBody
    public PageHelp donelist(HttpSession session,String companyName,String startTime,String endTime, @RequestParam(value = "pageSize", defaultValue = "25") int pageSize, @RequestParam(value = "pageNumber", defaultValue = "1") int pageNumber) {
        Page page = PageHelper.startPage(pageNumber, pageSize);
        User user = (User) session.getAttribute(Const.CURRENT_USER);
        if (user != null) {
            List<QchaungVO> list = qchuangService.donelist(companyName,startTime,endTime).getData();
            PageHelp pageHelp = new PageHelp();
            pageHelp.setTotal(page.getTotal());
            pageHelp.setRows(list);
            return pageHelp;
        }
        return null;
    }


    @PostMapping("update.do")
    @ResponseBody
    public ServerResponse<String> update(HttpSession session, Qchuang qchuang) {
        User user = (User) session.getAttribute(Const.CURRENT_USER);
        if (user != null) {
            return qchuangService.update(qchuang);
        }
        return ServerResponse.createByErrorMessage("用户未登录");
    }

    /**
     * @param session
     * @param agencyCode 组织机构代码
     * @return
     */
    //todo 新增用户要查法人库
    @PostMapping("add.do")
    @ResponseBody
    public ServerResponse<String> add(HttpSession session, String agencyCode) {
        //UNI_SC_ID
        DataSourceContextHolder.setDBType("oracle");
//        Corp corp = corpMapper.selectSCID(agencyCode);
//
//        if (corp != null) {
//            corp.
//        }
        return ServerResponse.createByErrorMessage("输入的社会统一信用代码有误或该用户不存在");
    }

    @PostMapping("selectById.do")
    @ResponseBody
    public ServerResponse<Qchuang> selectById(String id){
        if(id!=null){
            Qchuang qchuang = qchuangMapper.selectByPrimaryKey(id);
            if(qchuang!=null){
                return ServerResponse.createBySuccess(qchuang);
            }
            return ServerResponse.createByErrorMessage("该数据不存在");
        }
        return ServerResponse.createByErrorMessage("传入的值为空");
    }

}
