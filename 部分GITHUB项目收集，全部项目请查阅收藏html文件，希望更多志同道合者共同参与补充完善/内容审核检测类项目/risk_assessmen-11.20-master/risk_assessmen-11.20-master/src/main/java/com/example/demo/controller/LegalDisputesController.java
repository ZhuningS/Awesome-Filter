package com.example.demo.controller;

import com.alibaba.fastjson.JSON;
import com.example.demo.disputesDAO.LegalDisputesDAO;
import com.example.demo.disputespojo.*;
import com.example.demo.pojo.UserDO;
import com.example.demo.service.LegalDisputesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpSession;
import java.util.Date;
import java.util.List;

@Controller
@RequestMapping(value = "/legal_disputes")
public class LegalDisputesController {
    @Autowired
    LegalDisputesService legalDisputesService;
    @Autowired
    LegalDisputesDAO legalDisputesDAO;
    @RequestMapping(value = "/list/{id}")
    public String list(@PathVariable(value = "id")int id, Model model, HttpSession session,@RequestParam(defaultValue = "0") int index ){
        LegalDisputesDO legalDisputesDO=legalDisputesService.findLegalDisputesbymonthnum(id);

        LegalDisputesDO legalDisputesDO1=new LegalDisputesDO();
        model.addAttribute("lo",legalDisputesDO1);
        model.addAttribute("lo_update",legalDisputesDO);
        model.addAttribute("monthnum",id);
        model.addAttribute("index",index);
        return "legal_disputes_table";

    }
    @RequestMapping(value = "/add")
    public String add(final RedirectAttributes redirectAttributes, HttpSession session,
                      @ModelAttribute(value = "lo")LegalDisputesDO legalDisputesDO,
                      @RequestParam(value = "monthnum") int monthnum
    )
    {   List<LegalDisputesDO> legalDisputesDOS=legalDisputesService.findall();
    for(LegalDisputesDO legalDisputesDO1:legalDisputesDOS){
        if (legalDisputesDO1.getMonthnum()==monthnum){
            redirectAttributes.addFlashAttribute("add_failure",1);
            redirectAttributes.addFlashAttribute("monthnum",monthnum);
            return"redirect:/legal_disputes/list/"+monthnum;
        }

    }
        legalDisputesDO.setMonthnum(monthnum);
        legalDisputesDO.setDate(new Date());
        UserDO user=(UserDO)session.getAttribute("user");
        legalDisputesService.saveLegalDisputes(legalDisputesDO);
        redirectAttributes.addFlashAttribute("save_success",1);
        return"redirect:/legal_disputes/list/"+monthnum;
    }

    @RequestMapping(value = "/del/{id}")
    public String del(final RedirectAttributes redirectAttributes, HttpSession session, @PathVariable(value = "id") int id){
        int monthnum=legalDisputesService.findLegalDisputes(id).getMonthnum();
        legalDisputesService.deleteLegalDisputes(id);
        redirectAttributes.addFlashAttribute("del_success",1);
        return"redirect:/legal_disputes/list/"+monthnum;
    }
    @RequestMapping(value = "/edit/{id}")
    public String edit(final RedirectAttributes redirectAttributes,HttpSession session,@PathVariable(value = "id")int id){
        int monthnum=legalDisputesService.findLegalDisputes(id).getMonthnum();

        redirectAttributes.addFlashAttribute("edit",1);
        return"redirect:/legal_disputes/list/"+monthnum;
    }
    @RequestMapping(value = "/update")
    public String update(final RedirectAttributes redirectAttributes,HttpSession session,@ModelAttribute(value = "lo_update")LegalDisputesDO legalDisputesDO){
        System.out.println(JSON.toJSONString(legalDisputesDO));
        int monthnum=legalDisputesDO.getMonthnum();
        int id=legalDisputesService.findLegalDisputesbymonthnum(monthnum).getId();
        legalDisputesDO.setDate(new Date());
        legalDisputesDO.setId(id);
        legalDisputesService.updateLegalDisputes(legalDisputesDO);
        redirectAttributes.addFlashAttribute("update_success",1);
        System.out.println(JSON.toJSONString(legalDisputesDO));

        return"redirect:/legal_disputes/list/"+monthnum;
    }
    @RequestMapping(value = "/edit_second/{id}")
    public String edit_second(final RedirectAttributes redirectAttributes,HttpSession session,@PathVariable(value = "id")int id){
        int monthnum=legalDisputesService.findLegalDisputes(id).getMonthnum();
        LegalDisputesDO legalDisputesDO=legalDisputesService.findLegalDisputesbymonthnum(monthnum);

        redirectAttributes.addFlashAttribute("edit_second",1);
        return"redirect:/legal_disputes/list/"+monthnum+"?index=1";
    }
    @RequestMapping(value = "/update_second")
    public String update_second(final RedirectAttributes redirectAttributes,HttpSession session,@ModelAttribute(value = "lo_update")LegalDisputesDO legalDisputesDO){
        System.out.println(JSON.toJSONString(legalDisputesDO));
        int monthnum=legalDisputesDO.getMonthnum();
        int id=legalDisputesService.findLegalDisputesbymonthnum(monthnum).getId();
        legalDisputesDO.setDate(new Date());
        legalDisputesDO.setId(id);
        legalDisputesService.updateLegalDisputes(legalDisputesDO);
        redirectAttributes.addFlashAttribute("update_success",1);
        System.out.println(JSON.toJSONString(legalDisputesDO));

        return"redirect:/legal_disputes/list/"+monthnum+"?index=1";
    }
}
