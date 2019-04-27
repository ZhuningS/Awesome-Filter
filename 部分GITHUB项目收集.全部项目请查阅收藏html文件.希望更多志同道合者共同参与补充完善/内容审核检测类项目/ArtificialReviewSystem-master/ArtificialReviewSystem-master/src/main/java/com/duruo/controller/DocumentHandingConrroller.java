package com.duruo.controller;

import com.duruo.common.Const;
import com.duruo.common.ResponseCode;
import com.duruo.common.ServerResponse;
import com.duruo.dao.RetailLicenseMapper;
import com.duruo.po.EvidenceFiles;
import com.duruo.po.RetailLicense;
import com.duruo.po.User;
import com.duruo.service.impl.DocumentHandingServiceImpl;
import com.duruo.service.impl.EvidenceFilesServiceImpl;
import com.duruo.vo.PageHelp;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.Date;
import java.util.List;

/**
 * Created by @Author tachai
 * date 2018/6/25 13:48
 *
 * @Email 1206966083@qq.com
 */
//文件审核
@Controller
@RequestMapping("/documentHanding/")
public class DocumentHandingConrroller {
    @Autowired
    private EvidenceFilesServiceImpl evidenceFilesService;
    @Autowired
    private RetailLicenseMapper retailLicenseMapper;
    @Autowired
    private DocumentHandingServiceImpl documentHandingService;


    @RequestMapping("getlist.do")
    @ResponseBody
    public Object getList(HttpSession session, @RequestParam(value = "pageSize", defaultValue = "15") int pageSize, @RequestParam(value = "pageNumber", defaultValue = "1") int pageNumber) {
        Page page = PageHelper.startPage(pageNumber, pageSize);
        User user = (User) session.getAttribute(Const.CURRENT_USER);
        if (user != null) {
            List<RetailLicense> list = retailLicenseMapper.list(user.getDeptId());
            Long total = page.getTotal();
            PageHelp pageHelp = new PageHelp();
            pageHelp.setTotal(total);
            pageHelp.setRows(list);
            return pageHelp;
        } else {
            return ServerResponse.createByErrorMessage(ResponseCode.NEED_LOGIN.getDesc());
        }
    }

    @GetMapping("getdetail.do")
    @ResponseBody
    public ServerResponse<List<EvidenceFiles>> getListDetail(HttpSession session, Integer licenseId) {
        User user = (User) session.getAttribute(Const.CURRENT_USER);
        if (user != null) {
            return evidenceFilesService.getEvidenceDetail(licenseId);
        } else {
            return ServerResponse.createByErrorMessage(ResponseCode.NEED_LOGIN.getDesc());
        }
    }

    @PostMapping("getLicence.do")
    @ResponseBody
    public ServerResponse<RetailLicense> getRetailLicense(HttpSession session, Integer licenseId) {

        User user = (User) session.getAttribute(Const.CURRENT_USER);
        if (user != null) {
            return ServerResponse.createBySuccess(retailLicenseMapper.lockByPrimaryKey(licenseId));
        } else {
            return ServerResponse.createByErrorMessage(ResponseCode.NEED_LOGIN.getDesc());
        }
    }


    @GetMapping("getDonelist.do")
    @ResponseBody
    public Object getUndolist(HttpSession session,
                              @RequestParam(value = "pageSize", defaultValue = "15") int pageSize,
                              @RequestParam(value = "pageNumber", defaultValue = "1") int pageNumber) {
        Page page = PageHelper.startPage(pageNumber, pageSize);
        User user = (User) session.getAttribute(Const.CURRENT_USER);
        if (user != null) {
            List<RetailLicense> list = retailLicenseMapper.listDone(user.getDeptId());
            if (list != null) {

//                PageInfo pageResult=new PageInfo(list);

                Long total = page.getTotal();
                PageHelp pageHelp = new PageHelp();
                pageHelp.setTotal(total);
                pageHelp.setRows(list);
                return pageHelp;
            }
            return null;
        }
        return ServerResponse.createByErrorMessage(ResponseCode.NEED_LOGIN.getDesc());
    }

    @RequestMapping("updateOpinion")
    @ResponseBody
    public ServerResponse<String> updateOpinion(HttpSession session, Integer
            licenseId, @RequestParam(value = "opinion", defaultValue = "预审通过") String opinion, String result) {
        User user = (User) session.getAttribute(Const.CURRENT_USER);
        if (user != null) {
            return documentHandingService.updateOpinion(licenseId, opinion, result, user.getUserName());
        } else {
            return ServerResponse.createByErrorMessage(ResponseCode.NEED_LOGIN.getDesc());
        }
    }

    @PostMapping("getOption.do")
    @ResponseBody
    public ServerResponse<String> getOption(Integer licenseId) {
        RetailLicense retailLicense = retailLicenseMapper.selectByPrimaryKey(licenseId);
        if (null != retailLicense) {
            return ServerResponse.createBySuccess(retailLicense.getOpinion(), "得到审核意见成功");
        } else {
            return ServerResponse.createByErrorMessage("没有相关的值");
        }
    }

}
