package com.example.demo.controller;

import com.example.demo.dao.*;
import com.example.demo.pojo.*;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.sql.Timestamp;
import java.util.*;

@Controller
@EnableAutoConfiguration
@RequestMapping(value = "/main")
public class CompanyController {
    @Autowired
    private CompanyDAO companyDAO;
    @Autowired
    private FirstLevelRiskDAO firstLevelRiskDAO;
    @Autowired
    private SecondLevelRiskDAO secondLevelRiskDAO;
    @Autowired
    private ThirdLevelRiskDAO thirdLevelRiskDAO;
    @Autowired
    private FourthLevelRiskDAO fourthLevelRiskDAO;
    @Autowired
    private UserDAO userDAO;
    @Autowired
    private RiskEventLibraryDAO riskEventLibraryDAO;
    @Autowired
    private UserPermissionDAO userPermissionDAO;
    @Autowired
    private RiskDefinationDAO riskDefinationDAO;
    @Autowired
    private RulesRegulationsDAO rulesRegulationsDAO;
    @RequestMapping(value = "/main_page")
    public String index(HttpServletRequest request, Model model, HttpSession session, @PageableDefault(size = 5,sort = {"id"},direction = Sort.Direction.ASC)Pageable pageable){
        UserDO user=(UserDO)session.getAttribute("user");
        if(user.getPermission()==2){
            model.addAttribute("new_count",firstLevelRiskDAO.findByFirstLevelRiskApplication_setup(user.getWorkerName(),"刚创建",pageable).getTotalElements());
            model.addAttribute("ready_count",firstLevelRiskDAO.findByFirstLevelRiskApplication_setup(user.getWorkerName(),"待审批",pageable).getTotalElements());
            model.addAttribute("pass_count",firstLevelRiskDAO.findByFirstLevelRiskApplication_setup(user.getWorkerName(),"审批通过",pageable).getTotalElements());
            model.addAttribute("failure_count",firstLevelRiskDAO.findByFirstLevelRiskApplication_setup(user.getWorkerName(),"审批失败",pageable).getTotalElements());
            model.addAttribute("published_count",firstLevelRiskDAO.findByFirstLevelRiskApplication_setup(user.getWorkerName(),"已发布",pageable).getTotalElements());
            model.addAttribute("ing_count",firstLevelRiskDAO.findByFirstLevelRiskApplication_setup(user.getWorkerName(),"审批中",pageable).getTotalElements());
        }else if(user.getPermission()==1){
            model.addAttribute("new_count",firstLevelRiskDAO.findByfirstLevelRiskPerson_setup(user.getWorkerName(),"刚创建",pageable).getTotalElements());
            model.addAttribute("ready_count",firstLevelRiskDAO.findByfirstLevelRiskPerson_setup(user.getWorkerName(),"待审批",pageable).getTotalElements());
            model.addAttribute("pass_count",firstLevelRiskDAO.findByfirstLevelRiskPerson_setup(user.getWorkerName(),"审批通过",pageable).getTotalElements());
            model.addAttribute("failure_count",firstLevelRiskDAO.findByfirstLevelRiskPerson_setup(user.getWorkerName(),"审批失败",pageable).getTotalElements());
            model.addAttribute("published_count",firstLevelRiskDAO.findByfirstLevelRiskPerson_setup(user.getWorkerName(),"已发布",pageable).getTotalElements());
            model.addAttribute("ing_count",firstLevelRiskDAO.findByfirstLevelRiskPerson_setup(user.getWorkerName(),"审批中",pageable).getTotalElements());
        }
        model.addAttribute("index",1);
        System.out.println("request.getServletPath:"+request.getServletPath());
        System.out.println("request.getRealPath:"+request.getRealPath("WebAppConfigurer.java"));
        System.out.println("+request.getServletPath"+request.getServletContext().getRealPath("com.example.demo.controller.CompanyController"));
        return "index";
    }
    @RequestMapping(value = "/Risk_management_strategy")
    public String Risk_management_strategy(Model model,HttpSession session){
        UserDO user=(UserDO)session.getAttribute("user");
        return "index2";
    }
    @RequestMapping(value = "/group_topic")
    public String group_topic(Model model, HttpSession session){
        model.addAttribute("rule_regulation",rulesRegulationsDAO.findAll());
        return "group_topic";
    }
    @RequestMapping(value = "/yueyang_topic")
    public String yueyang_topic(Model model, HttpSession session){
        model.addAttribute("rule_regulation",rulesRegulationsDAO.findAll());
        return "yueyang_topic";
    }
    @RequestMapping(value = "/kaisheng_topic")
    public String kaisheng_topic(Model model, HttpSession session){
        model.addAttribute("rule_regulation",rulesRegulationsDAO.findAll());
        return "kaisheng_topic";
    }
    @RequestMapping(value = "/guanhao_topic")
    public String guanhao_topic(Model model, HttpSession session){
        model.addAttribute("rule_regulation",rulesRegulationsDAO.findAll());
        return "guanhao_topic";
    }
    @RequestMapping(value = "/group_list")
    public String group_list(Model model, HttpSession session){
        UserDO user=(UserDO)session.getAttribute("user");
        model.addAttribute("company",companyDAO.findAll());
        FirstLevelRiskDO firstLevelRiskDO = new FirstLevelRiskDO();
        model.addAttribute("fo",firstLevelRiskDO);
        model.addAttribute("first_level_pass",firstLevelRiskDAO.findBystatus("审批通过"));
        model.addAttribute("first_level_publish",firstLevelRiskDAO.findBycompanyandstatus(user.getUserCompany(),"已发布"));
        model.addAttribute("first_level_ing",firstLevelRiskDAO.findBystatus("审批中"));
        model.addAttribute("first_level_failure",firstLevelRiskDAO.findBystatus("审批失败"));
        CompanyDO companyDO=new CompanyDO();
        model.addAttribute("co",companyDO);
        Date date = new Date();
        UserDO userDO=new UserDO();
        model.addAttribute("uo",userDO);
        model.addAttribute("user",userDAO.findbycompany(user.getUserCompany()));
        Timestamp nousedate = new Timestamp(date.getTime());
        model.addAttribute("permission",userPermissionDAO.findAll());
        model.addAttribute("riskeventlibrary_group",riskEventLibraryDAO.findBycompany("集团"));
        model.addAttribute("riskeventlibrary_company",riskEventLibraryDAO.findBycompany("集团"));
        model.addAttribute("riskeventlibrary_defination",riskDefinationDAO.findAll());
        model.addAttribute("rule_regulation",rulesRegulationsDAO.findAll());
     
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());

        model.addAttribute("first_level_publish",firstLevelRiskDAO.findBystatus("已发布"));
        model.addAttribute("ready_first_level",firstLevelRiskDAO.findBycompany("未分配"));
        model.addAttribute("first_level_pass",firstLevelRiskDAO.findBystatus("审批通过"));
        model.addAttribute("first_level_review_ready",firstLevelRiskDAO.findBystatus("待审批"));
        model.addAttribute("first_level_ing",firstLevelRiskDAO.findBystatus("审批中"));
        model.addAttribute("first_level_failure",firstLevelRiskDAO.findBystatus("审批失败"));
        return "group_main";
    }
    @RequestMapping(value = "/company_list")
    public String company_list(Model model, HttpSession session){
        model.addAttribute("company",companyDAO.findAll());
        FirstLevelRiskDO firstLevelRiskDO = new FirstLevelRiskDO();
        model.addAttribute("fo",firstLevelRiskDO);
        SecondLevelRiskDO secondLevelRiskDO = new SecondLevelRiskDO();
        model.addAttribute("so",secondLevelRiskDO);
        ThirdLevelRiskDO thirdLevelRiskDO = new ThirdLevelRiskDO();
        model.addAttribute("to",thirdLevelRiskDO);
        UserDO user=(UserDO)session.getAttribute("user");
        Date date = new Date();
        FourthLevelRiskDO fourthLevelRiskDO=new FourthLevelRiskDO();
        model.addAttribute("fouo",fourthLevelRiskDO);
        Timestamp nousedate = new Timestamp(date.getTime());
        System.out.println(user.getWorkerName());
        model.addAttribute("first_level_review_ready",firstLevelRiskDAO.findBycompanyandstatus(user.getUserCompany(),"待审批"));
        model.addAttribute("first_level_review_ing",firstLevelRiskDAO.findBycompanyandstatus(user.getUserCompany(),"审批中"));
        model.addAttribute("first_level_review_pass",firstLevelRiskDAO.findBycompanyandstatus(user.getUserCompany(),"审批通过"));
        model.addAttribute("first_level_review_failure",firstLevelRiskDAO.findBycompanyandstatus(user.getUserCompany(),"审批失败"));
        model.addAttribute("first_level_publish",firstLevelRiskDAO.findBycompanyandstatus(user.getUserCompany(),"已发布"));
        model.addAttribute("ready_first_level",firstLevelRiskDAO.findBycompany(user.getUserCompany()));
        model.addAttribute("second_level",secondLevelRiskDAO.findBycompany(user.getUserCompany()));
        model.addAttribute("third_level",thirdLevelRiskDAO.findBycompany(user.getUserCompany()));
        model.addAttribute("fourth_level",fourthLevelRiskDAO.findBycompany(user.getUserCompany()));
        RiskDefinationDO riskDefinationDO=new RiskDefinationDO();
        model.addAttribute("rdo",riskDefinationDO);
        RiskEventLibraryDO riskEventLibraryDO=new RiskEventLibraryDO();
        model.addAttribute("rio",riskEventLibraryDO);
        CompanyDO companyDO=new CompanyDO();
        model.addAttribute("co",companyDO);
        UserDO userDO=new UserDO();
        model.addAttribute("uo",userDO);
        model.addAttribute("user",userDAO.findbycompany(user.getUserCompany()));
        model.addAttribute("permission",userPermissionDAO.findbycompany(user.getUserCompany()));
        model.addAttribute("riskeventlibrary_group",riskEventLibraryDAO.findBycompany("集团"));
        model.addAttribute("riskeventlibrary_company",riskEventLibraryDAO.findBycompany("集团"));
        model.addAttribute("riskeventlibrary_defination",riskDefinationDAO.findAll());
        model.addAttribute("rule_regulation",rulesRegulationsDAO.findAll());

        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        model.addAttribute("ready_create_first_level",firstLevelRiskDAO.findBycompanyandstatus(user.getUserCompany(),"待创建"));
        System.out.println(user.getId());

        return "company_main";
    }
    @RequestMapping(value = "/risk_list")
    public String risk_list(Model model,HttpSession session){
        model.addAttribute("ready_first_level",firstLevelRiskDAO.findBycompany("未分配"));
        model.addAttribute("first_level_pass",firstLevelRiskDAO.findBystatus("审批通过"));
        model.addAttribute("first_level_publish",firstLevelRiskDAO.findBystatus("已发布"));
        model.addAttribute("first_level_ing",firstLevelRiskDAO.findBystatus("审批中"));
        model.addAttribute("first_level_failure",firstLevelRiskDAO.findBystatus("审批失败"));
        model.addAttribute("first_level_review_ready",firstLevelRiskDAO.findBystatus("待审批"));
        UserDO user=(UserDO)session.getAttribute("user");
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        model.addAttribute("first_level_review_ready",firstLevelRiskDAO.findBystatus("待审批"));
        return "risk_list";
    }
    @RequestMapping(value = "/select")
    public String select(Model model,HttpSession session){
        UserDO user=(UserDO)session.getAttribute("user");
        String company = user.getUserCompany();
        String group = "集团";
        if (group.equals(company)){
            return "redirect:/main/group_list";
        } else {
            return "redirect:/main/company_list";
        }
    }
    @RequestMapping(value = "list_all/{id}")
    public String list_all(Model model, HttpSession session, @PathVariable(value = "id") int id){
        model.addAttribute("first_level",firstLevelRiskDAO.findById(id));
        UserDO user=(UserDO)session.getAttribute("user");
        Date date = new Date();
        Timestamp nousedate = new Timestamp(date.getTime());
        FirstLevelRiskDO firstLevelRiskDO = new FirstLevelRiskDO();
        model.addAttribute("fo",firstLevelRiskDO);
        SecondLevelRiskDO secondLevelRiskDO = new SecondLevelRiskDO();
        model.addAttribute("so",secondLevelRiskDO);
        ThirdLevelRiskDO thirdLevelRiskDO = new ThirdLevelRiskDO();
        model.addAttribute("to",thirdLevelRiskDO);
        model.addAttribute("ready_first_level",firstLevelRiskDAO.findBycompany(user.getUserCompany()));
        FourthLevelRiskDO fourthLevelRiskDO=new FourthLevelRiskDO();
        model.addAttribute("fouo",fourthLevelRiskDO);
        String First_RISK_CODE=firstLevelRiskDAO.findById(id).getFirstLevelRiskCode();
        model.addAttribute("second_level",secondLevelRiskDAO.findByFirstLevelRiskCode(First_RISK_CODE));
        model.addAttribute("third_level",thirdLevelRiskDAO.findByFirstLevelRiskCode(First_RISK_CODE));
        model.addAttribute("fourth_level",fourthLevelRiskDAO.findByFirstLevelRiskCode(First_RISK_CODE));
        model.addAttribute("id",id);
        model.addAttribute("status",firstLevelRiskDAO.findById(id).getFirstLevelRiskStatus());
        RiskDefinationDO riskDefinationDO=new RiskDefinationDO();
        model.addAttribute("rdo",riskDefinationDO);
        RiskEventLibraryDO riskEventLibraryDO=new RiskEventLibraryDO();
        model.addAttribute("rio",riskEventLibraryDO);
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        return "list_all";

    }
    @RequestMapping(value = "/search")
    public String search(Model model, @RequestParam(value = "key")String key,HttpSession session){
        model.addAttribute("company",companyDAO.findAll());
        FirstLevelRiskDO firstLevelRiskDO = new FirstLevelRiskDO();
        model.addAttribute("fo",firstLevelRiskDO);
        SecondLevelRiskDO secondLevelRiskDO = new SecondLevelRiskDO();
        model.addAttribute("so",secondLevelRiskDO);
        ThirdLevelRiskDO thirdLevelRiskDO = new ThirdLevelRiskDO();
        model.addAttribute("to",thirdLevelRiskDO);
        UserDO user=(UserDO)session.getAttribute("user");
        model.addAttribute("ready_first_level",firstLevelRiskDAO.findBycompany(user.getUserCompany()));
        Date date = new Date();
        FourthLevelRiskDO fourthLevelRiskDO=new FourthLevelRiskDO();
        model.addAttribute("fouo",fourthLevelRiskDO);
        Timestamp nousedate = new Timestamp(date.getTime());
        model.addAttribute("first_level",firstLevelRiskDAO.findAll());
        model.addAttribute("second_level",secondLevelRiskDAO.findAll());
        model.addAttribute("third_level",thirdLevelRiskDAO.findAll());
        model.addAttribute("fourth_level",fourthLevelRiskDAO.findAll());
        model.addAttribute("key_return",key);
        return "search_all";
    }
    @RequestMapping(value = "/group_management")
    public String group_management(Model model,HttpSession session){
        UserDO user=(UserDO)session.getAttribute("user");
        model.addAttribute("company",companyDAO.findAll());
        model.addAttribute("user",userDAO.findbycompany(user.getUserCompany()));
        model.addAttribute("permission",userPermissionDAO.findbycompany(user.getUserCompany()));
        model.addAttribute("worknum",user.getWorkNumber());
        model.addAttribute("user_permission",user.getPermission());
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        return "group_management";
    }
    @RequestMapping(value = "/add")
    public String add(Model model, HttpSession session, @ModelAttribute(value = "co") CompanyDO companyDO){
        companyDO.setId(0);
        Date date = new Date();
        String companyname=companyDO.getCompanyName();
        Timestamp nousedate = new Timestamp(date.getTime());
        companyDO.setCompanyDate(nousedate);
        companyDO.setCompanyPemission("1");
        companyDAO.save(companyDO);
        model.addAttribute("company",companyDAO.findAll());
        FirstLevelRiskDO firstLevelRiskDO = new FirstLevelRiskDO();
        model.addAttribute("fo",firstLevelRiskDO);
        model.addAttribute("ready_first_level",firstLevelRiskDAO.findBycompany("未分配"));
        model.addAttribute("first_level_pass",firstLevelRiskDAO.findBystatus("审批通过"));
        model.addAttribute("first_level_publish",firstLevelRiskDAO.findBystatus("已发布"));
        model.addAttribute("first_level_ing",firstLevelRiskDAO.findBystatus("审批中"));
        model.addAttribute("first_level_failure",firstLevelRiskDAO.findBystatus("审批失败"));
        UserDO user=(UserDO)session.getAttribute("user");
        CompanyDO companyDO1=new CompanyDO();
        model.addAttribute("co",companyDO1);
        model.addAttribute("company_add_success",1);
        model.addAttribute("new_company_name",companyname);
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        return "group_company_management";

    }
    @RequestMapping(value = "/del/{id}")
    public String del(Model model, HttpSession session,@PathVariable(value = "id") int id){
       String companyname= companyDAO.findById(id).getCompanyName();
       companyDAO.deleteById(id);
        model.addAttribute("company",companyDAO.findAll());
        FirstLevelRiskDO firstLevelRiskDO = new FirstLevelRiskDO();
        model.addAttribute("fo",firstLevelRiskDO);
        model.addAttribute("ready_first_level",firstLevelRiskDAO.findBycompany("未分配"));
        model.addAttribute("first_level_pass",firstLevelRiskDAO.findBystatus("审批通过"));
        model.addAttribute("first_level_publish",firstLevelRiskDAO.findBystatus("已发布"));
        model.addAttribute("first_level_ing",firstLevelRiskDAO.findBystatus("审批中"));
        model.addAttribute("first_level_failure",firstLevelRiskDAO.findBystatus("审批失败"));
        UserDO user=(UserDO)session.getAttribute("user");
        CompanyDO companyDO1=new CompanyDO();
        model.addAttribute("co",companyDO1);
        model.addAttribute("company_del_success",1);
        model.addAttribute("new_company_name",companyname);
        model.addAttribute("user",userDAO.findAll());
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        return "group_company_management";

    }
    @RequestMapping(value = "/edit/{id}")
    public String edit(Model model, HttpSession session, @PathVariable(value = "id") int id){
        model.addAttribute("company",companyDAO.findAll());
        FirstLevelRiskDO firstLevelRiskDO = new FirstLevelRiskDO();
        model.addAttribute("fo",firstLevelRiskDO);
        model.addAttribute("ready_first_level",firstLevelRiskDAO.findBycompany("未分配"));
        model.addAttribute("first_level_pass",firstLevelRiskDAO.findBystatus("审批通过"));
        model.addAttribute("first_level_publish",firstLevelRiskDAO.findBystatus("已发布"));
        model.addAttribute("first_level_ing",firstLevelRiskDAO.findBystatus("审批中"));
        model.addAttribute("first_level_failure",firstLevelRiskDAO.findBystatus("审批失败"));
        UserDO user=(UserDO)session.getAttribute("user");
        CompanyDO companyDO1=new CompanyDO();
        model.addAttribute("id",id);
        model.addAttribute("co",companyDAO.findById(id));
        model.addAttribute("user",userDAO.findAll());
        model.addAttribute("company_edit",1);
        model.addAttribute("user_permission",user.getPermission());
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        return "group_company_management";

    }
    @RequestMapping(value = "/update/{id}")
    public String update(Model model, HttpSession session, @ModelAttribute(value = "co") CompanyDO companyDO,@PathVariable(value = "id") int id){
        String companyname=companyDO.getCompanyName();
        System.out.println(companyDO.getId());
        companyDAO.update(companyDO.getCompanyName(),companyDO.getCompanyRepresentative(),id);
        model.addAttribute("company",companyDAO.findAll());
        FirstLevelRiskDO firstLevelRiskDO = new FirstLevelRiskDO();
        model.addAttribute("fo",firstLevelRiskDO);
        model.addAttribute("ready_first_level",firstLevelRiskDAO.findBycompany("未分配"));
        model.addAttribute("first_level_pass",firstLevelRiskDAO.findBystatus("审批通过"));
        model.addAttribute("first_level_publish",firstLevelRiskDAO.findBystatus("已发布"));
        model.addAttribute("first_level_ing",firstLevelRiskDAO.findBystatus("审批中"));
        model.addAttribute("first_level_failure",firstLevelRiskDAO.findBystatus("审批失败"));
        UserDO user=(UserDO)session.getAttribute("user");
        CompanyDO companyDO1=new CompanyDO();
        model.addAttribute("co",companyDO1);
        model.addAttribute("company_update_success",1);
        model.addAttribute("new_company_name",companyname);
        model.addAttribute("user",userDAO.findAll());
        model.addAttribute("user_permission",user.getPermission());
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());

        return "group_company_management";

    }
    @RequestMapping(value = "/permission")
    public String permission(Model model,HttpSession session){
        UserDO user=(UserDO)session.getAttribute("user");
        model.addAttribute("permission",userPermissionDAO.findbycompany(user.getUserCompany()));
        model.addAttribute("worknum",user.getWorkNumber());
        model.addAttribute("user_permission",user.getPermission());
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        return "group_permission";
    }
    @RequestMapping(value = "/company")
    public String company(Model model,HttpSession session){
        model.addAttribute("company",companyDAO.findAll());
        UserDO user=(UserDO)session.getAttribute("user");
        model.addAttribute("user_permission",user.getPermission());
        CompanyDO companyDO=new CompanyDO();
        model.addAttribute("co",companyDO);
        model.addAttribute("user_permission",user.getPermission());
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        return "group_company_management";
    }

    @RequestMapping(value = "/update", method = RequestMethod.POST,produces="text/plain;charset=UTF-8")
    @ResponseBody
    public String doupdate(Model model, @RequestBody JSONObject jsonObject,HttpSession session) {
//        Iterator iterator = jsonObject.keys();
            System.out.println(jsonObject);
            String id = jsonObject.getString("ID");
            int ID = Integer.parseInt(id);
            String ableManageUser=jsonObject.getString("能否管理用户");
            String ableCreateNewProject = jsonObject.getString("能否创建新项目");
            String ableExaminationApprovalProject = jsonObject.getString("能否审批新项目");
            String ableModifyProject = jsonObject.getString("能否修改项目");
            String ablePushProject = jsonObject.getString("能否发布项目");

            userPermissionDAO.update(
                    ableManageUser,
                    ableCreateNewProject,
                    ableExaminationApprovalProject,
                    ableModifyProject,
                    ablePushProject,
                    ID);

        model.addAttribute("msg", 1);
        model.addAttribute("permission",userPermissionDAO.findAll());
        UserDO user=(UserDO)session.getAttribute("user");
        model.addAttribute("user_permission",user.getPermission());
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        return "group_permission";
    }
    @RequestMapping(value = "update_success")
    public String update_success(Model model,HttpSession session){
        UserDO user=(UserDO)session.getAttribute("user");
        UserDO userDO=new UserDO();
        model.addAttribute("uo",userDO);
        model.addAttribute("user_permission",user.getPermission());
        model.addAttribute("user",userDAO.findbycompany(user.getUserCompany()));
        model.addAttribute("permission",userPermissionDAO.findbycompany(user.getUserCompany()));
        model.addAttribute("msg",1);
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        model.addAttribute("point_permission",1);
        model.addAttribute("worknum",user.getWorkNumber());
        return "user_management";
    }

    @RequestMapping(value = "/chart_risk_all")
    public void chart_risk_all(HttpSession session, HttpServletResponse response){
        List<Map> list= new ArrayList<>();
        Map<String,Object> map_original = new HashMap<>();
        map_original.put("id","0.0");
        map_original.put("parent","");
        map_original.put("name","中华纸业风险分布");
        list.add(map_original);
        for(FirstLevelRiskDO firstLevelRiskDO:firstLevelRiskDAO.findAll()){
            Map<String,Object> map = new HashMap<>();
            String id="1."+firstLevelRiskDO.getFirstLevelRiskCode().substring(1);
            map.put("id",id);
            map.put("parent","0.0");
            String value=firstLevelRiskDO.getFirstLevelRiskDescription();
            String name=firstLevelRiskDO.getFirstLevelRiskName();
            map.put("name",name);

//            map.put("value",value);
            System.out.println(map);
            list.add(map);
            System.out.println(list);

        }
        int i=1;
        int n=1;
        for(SecondLevelRiskDO secondLevelRiskDO:secondLevelRiskDAO.findAll()){

            Map<String,Object> map = new HashMap<>();
            String id="2."+i;
            map.put("id",id);
            String name=secondLevelRiskDO.getSecondLevelRiskName();
            String value=secondLevelRiskDO.getSecondLevelRiskDescription();
            String parent="1."+secondLevelRiskDO.getFirstLevelRiskCode().substring(1);
            map.put("parent",parent);
            map.put("name",name);
//            map.put("value",value);
            list.add(map);
            for(ThirdLevelRiskDO thirdLevelRiskDO:thirdLevelRiskDAO.findAll()){
                if(thirdLevelRiskDO.getSecondLevelRiskCode().equals(secondLevelRiskDO.getSecondLevelRiskCode())){
                    Map<String,Object> map1 = new HashMap<>();
                    String id1="3."+n;
                    String name1=thirdLevelRiskDO.getThirdLevelRiskName();
                    String value1=thirdLevelRiskDO.getThirdLevelRiskDescription();
                    System.out.println(thirdLevelRiskDO.getThirdLevelRiskCode());
                    String parent1=id;
                    map1.put("id",id1);
                    map1.put("parent",parent1);
                    map1.put("name",name1);
                    map1.put("value",n);
//            map.put("value",value);
                    list.add(map1);
                    n=n+1;
                }

            }
            i=i+1;
        }

//        for(FourthLevelRiskDO fourthLevelRiskDO:fourthLevelRiskDAO.findAll()){
//            Map<String,Object> map = new HashMap<>();
//            int id=fourthLevelRiskDO.getId();
//            String name=fourthLevelRiskDO.getFourthLevelRiskName();
//            String value=fourthLevelRiskDO.getFourthLevelRiskDescription();
//            int parent=firstLevelRiskDAO.findByriskcode(fourthLevelRiskDO.getFirstLevelRiskCode()).getId();
//            map.put("id",Integer.toString(id));
//            map.put("parent",Integer.toString(parent));
//            map.put("name",name);
////            map.put("value",value);
//            list.add(map);
//        }
        JSONArray json=JSONArray.fromObject(list);
        System.out.println(json.toString());
        try {
            response.setContentType("text/html;charset=utf–8");
            response.setCharacterEncoding("UTF-8");
            response.getWriter().print(json.toString());

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    @RequestMapping(value = "project_allocation")
    public String project_allocation(Model model,HttpSession session){
        UserDO user=(UserDO)session.getAttribute("user");
        Date date = new Date();
        List<UserDO> userDOList=new ArrayList<>();
        List<FirstLevelRiskDO> firstLevelRiskDOS=new ArrayList<>();
       for(UserDO userDO:userDAO.findbycompany("岳阳林纸")) {
           userDOList.add(userDO);
       }
        for(UserDO userDO1:userDAO.findbycompany("凯胜园林")) {
            userDOList.add(userDO1);
        }
        for(UserDO userDO2:userDAO.findbycompany("冠豪高新")) {
            userDOList.add(userDO2);
        }
        for(UserDO userDO3:userDAO.findbycompany("红塔仁恒")) {
            userDOList.add(userDO3);
        }
        for(FirstLevelRiskDO firstLevelRiskDO:firstLevelRiskDAO.findBycompany("岳阳林纸")) {
            firstLevelRiskDOS.add(firstLevelRiskDO);
        }
        for(FirstLevelRiskDO firstLevelRiskDO:firstLevelRiskDAO.findBycompany("红塔仁恒")) {
            firstLevelRiskDOS.add(firstLevelRiskDO);
        }
        for(FirstLevelRiskDO firstLevelRiskDO:firstLevelRiskDAO.findBycompany("凯胜园林")) {
            firstLevelRiskDOS.add(firstLevelRiskDO);
        }
        for(FirstLevelRiskDO firstLevelRiskDO:firstLevelRiskDAO.findBycompany("冠豪高新")) {
            firstLevelRiskDOS.add(firstLevelRiskDO);
        }
        FirstLevelRiskDO firstLevelRiskDO=new FirstLevelRiskDO();
        model.addAttribute("fo",firstLevelRiskDO);
        model.addAttribute("first_ready",firstLevelRiskDAO.findBycompany("未分配"));
        model.addAttribute("first_finish",firstLevelRiskDOS);
        model.addAttribute("user",userDOList);
        return "project_allocation";
    }
    @RequestMapping(value = "project_allocation_success")
    public String project_allocation_success(Model model,HttpSession session){
        UserDO user=(UserDO)session.getAttribute("user");
        Date date = new Date();
        List<FirstLevelRiskDO> firstLevelRiskDOS=new ArrayList<>();
        for(FirstLevelRiskDO firstLevelRiskDO:firstLevelRiskDAO.findBycompany("岳阳林纸")) {
            firstLevelRiskDOS.add(firstLevelRiskDO);
        }
        for(FirstLevelRiskDO firstLevelRiskDO:firstLevelRiskDAO.findBycompany("红塔仁恒")) {
            firstLevelRiskDOS.add(firstLevelRiskDO);
        }
        for(FirstLevelRiskDO firstLevelRiskDO:firstLevelRiskDAO.findBycompany("凯胜园林")) {
            firstLevelRiskDOS.add(firstLevelRiskDO);
        }
        for(FirstLevelRiskDO firstLevelRiskDO:firstLevelRiskDAO.findBycompany("冠豪高新")) {
            firstLevelRiskDOS.add(firstLevelRiskDO);
        }
        List<UserDO> userDOList=new ArrayList<>();
        for(UserDO userDO:userDAO.findbycompany("岳阳林纸")) {
            userDOList.add(userDO);
        }
        for(UserDO userDO1:userDAO.findbycompany("凯胜园林")) {
            userDOList.add(userDO1);
        }
        for(UserDO userDO2:userDAO.findbycompany("冠豪高新")) {
            userDOList.add(userDO2);
        }
        for(UserDO userDO3:userDAO.findbycompany("红塔仁恒")) {
            userDOList.add(userDO3);
        }
        FirstLevelRiskDO firstLevelRiskDO=new FirstLevelRiskDO();
        model.addAttribute("fo",firstLevelRiskDO);
        model.addAttribute("first_ready",firstLevelRiskDAO.findBycompany("未分配"));
        model.addAttribute("first_finish",firstLevelRiskDOS);
        model.addAttribute("user",userDOList);
        model.addAttribute("allocation_success",1);
        return "project_allocation";
    }
    @RequestMapping(value = "/search_list")
    public String search_list(Model model,HttpSession session,@RequestParam(value = "condition") String condition,@RequestParam(value = "value") String value){
        UserDO user=(UserDO)session.getAttribute("user");
        Date date = new Date();
        model.addAttribute("value",value);
        if(condition.equals("风险查询")){
            model.addAttribute("first",firstLevelRiskDAO.findAllBykeyLike(value));
            model.addAttribute("second",secondLevelRiskDAO.findAllBykeyLike(value));
            model.addAttribute("third",thirdLevelRiskDAO.findAllBykeyLike(value));
            model.addAttribute("fourth",fourthLevelRiskDAO.findAllBykeyLike(value));
            return "search_risk_list";
        }else if(condition.equals("风险事件查询")){
            model.addAttribute("risk_event_group",riskEventLibraryDAO.findBykey(value,"集团"));
            model.addAttribute("risk_event_yueyang",riskEventLibraryDAO.findBykey(value,"岳阳林纸"));
            model.addAttribute("risk_event_hongta",riskEventLibraryDAO.findBykey(value,"红塔仁恒"));
            model.addAttribute("risk_event_kaisheng",riskEventLibraryDAO.findBykey(value,"凯胜园林"));
            model.addAttribute("risk_event_guanhao",riskEventLibraryDAO.findBykey(value,"冠豪高新"));
            return "search_risk_event";
        }
        return null;
    }
    @RequestMapping(value = "/notification_project/{type}")
    public String notification_project(Model model, HttpSession session, @PageableDefault(size = 5,sort = {"id"},direction = Sort.Direction.ASC)Pageable pageable,@PathVariable(value = "type") String type){
        UserDO user=(UserDO)session.getAttribute("user");
        model.addAttribute("new_count",firstLevelRiskDAO.findByfirstLevelRiskPerson_setup(user.getWorkerName(),"刚创建",pageable).getTotalElements());
        model.addAttribute("ready_count",firstLevelRiskDAO.findByfirstLevelRiskPerson_setup(user.getWorkerName(),"待审批",pageable).getTotalElements());
        model.addAttribute("pass_count",firstLevelRiskDAO.findByfirstLevelRiskPerson_setup(user.getWorkerName(),"审批通过",pageable).getTotalElements());
        model.addAttribute("failure_count",firstLevelRiskDAO.findByfirstLevelRiskPerson_setup(user.getWorkerName(),"审批失败",pageable).getTotalElements());
        model.addAttribute("published_count",firstLevelRiskDAO.findByfirstLevelRiskPerson_setup(user.getWorkerName(),"已发布",pageable).getTotalElements());
        model.addAttribute("ing_count",firstLevelRiskDAO.findByfirstLevelRiskPerson_setup(user.getWorkerName(),"审批中",pageable).getTotalElements());

        Page<FirstLevelRiskDO> page=firstLevelRiskDAO.findByfirstLevelRiskPerson_setup(user.getWorkerName(),"刚创建",pageable);
        if(user.getPermission()==1) {
            if (type.equals("new_project")) {
                page = firstLevelRiskDAO.findByfirstLevelRiskPerson_setup(user.getWorkerName(), "刚创建", pageable);
                model.addAttribute("first_new", page);
                model.addAttribute("Total_page", page.getTotalPages());
                model.addAttribute("Total_elements", page.getTotalElements());
                model.addAttribute("current_page", pageable.getPageNumber());
                return "notification_new_project";
            } else if (type.equals("pass")) {
                page = firstLevelRiskDAO.findByfirstLevelRiskPerson_setup(user.getWorkerName(), "审批通过", pageable);
                model.addAttribute("first_new", page);
                model.addAttribute("Total_page", page.getTotalPages());
                model.addAttribute("Total_elements", page.getTotalElements());
                model.addAttribute("current_page", pageable.getPageNumber());
                return "notification_my_passed_project";
            } else if (type.equals("failure")) {
                page = firstLevelRiskDAO.findByfirstLevelRiskPerson_setup(user.getWorkerName(), "审批失败", pageable);
                model.addAttribute("first_new", page);
                model.addAttribute("Total_page", page.getTotalPages());
                model.addAttribute("Total_elements", page.getTotalElements());
                model.addAttribute("current_page", pageable.getPageNumber());
                return "notification_my_failure_project";
            } else if (type.equals("published")) {
                page = firstLevelRiskDAO.findByfirstLevelRiskPerson_setup(user.getWorkerName(), "已发布", pageable);
                model.addAttribute("first_new", page);
                model.addAttribute("Total_page", page.getTotalPages());
                model.addAttribute("Total_elements", page.getTotalElements());
                model.addAttribute("current_page", pageable.getPageNumber());
                return "notification_my_published_project";
            } else if (type.equals("ready")) {
                page = firstLevelRiskDAO.findByfirstLevelRiskPerson_setup(user.getWorkerName(), "待审批", pageable);
                model.addAttribute("first_new", page);
                model.addAttribute("Total_page", page.getTotalPages());
                model.addAttribute("Total_elements", page.getTotalElements());
                model.addAttribute("current_page", pageable.getPageNumber());
                return "notification_ready_project";
            } else if (type.equals("ing")) {
                page = firstLevelRiskDAO.findByfirstLevelRiskPerson_setup(user.getWorkerName(), "审批中", pageable);
                model.addAttribute("first_new", page);
                model.addAttribute("Total_page", page.getTotalPages());
                model.addAttribute("Total_elements", page.getTotalElements());
                model.addAttribute("current_page", pageable.getPageNumber());
                return "notification_my_ing_project";
            }
        }else if (user.getPermission()==2){
            model.addAttribute("new_count",firstLevelRiskDAO.findByFirstLevelRiskApplication_setup(user.getWorkerName(),"刚创建",pageable).getTotalElements());
            model.addAttribute("ready_count",firstLevelRiskDAO.findByFirstLevelRiskApplication_setup(user.getWorkerName(),"待审批",pageable).getTotalElements());
            model.addAttribute("pass_count",firstLevelRiskDAO.findByFirstLevelRiskApplication_setup(user.getWorkerName(),"审批通过",pageable).getTotalElements());
            model.addAttribute("failure_count",firstLevelRiskDAO.findByFirstLevelRiskApplication_setup(user.getWorkerName(),"审批失败",pageable).getTotalElements());
            model.addAttribute("published_count",firstLevelRiskDAO.findByFirstLevelRiskApplication_setup(user.getWorkerName(),"已发布",pageable).getTotalElements());
            model.addAttribute("ing_count",firstLevelRiskDAO.findByFirstLevelRiskApplication_setup(user.getWorkerName(),"审批中",pageable).getTotalElements());
                if(type.equals("new_project")){
                    page=firstLevelRiskDAO.findByFirstLevelRiskApplication_setup(user.getWorkerName(),"刚创建",pageable);
                    model.addAttribute("first_new",page);
                    model.addAttribute("Total_page",page.getTotalPages());
                    model.addAttribute("Total_elements",page.getTotalElements());
                    model.addAttribute("current_page",pageable.getPageNumber());
                    return "notification_new_project";
                }else if(type.equals("pass")){
                    page=firstLevelRiskDAO.findByFirstLevelRiskApplication_setup(user.getWorkerName(),"审批通过",pageable);
                    model.addAttribute("first_new",page);
                    model.addAttribute("Total_page",page.getTotalPages());
                    model.addAttribute("Total_elements",page.getTotalElements());
                    model.addAttribute("current_page",pageable.getPageNumber());
                    return "notification_my_passed_project";
                }else if(type.equals("failure")){
                    page=firstLevelRiskDAO.findByFirstLevelRiskApplication_setup(user.getWorkerName(),"审批失败",pageable);
                    model.addAttribute("first_new",page);
                    model.addAttribute("Total_page",page.getTotalPages());
                    model.addAttribute("Total_elements",page.getTotalElements());
                    model.addAttribute("current_page",pageable.getPageNumber());
                    return "notification_my_failure_project";
                }else if(type.equals("published")){
                    page=firstLevelRiskDAO.findByFirstLevelRiskApplication_setup(user.getWorkerName(),"已发布",pageable);
                    model.addAttribute("first_new",page);
                    model.addAttribute("Total_page",page.getTotalPages());
                    model.addAttribute("Total_elements",page.getTotalElements());
                    model.addAttribute("current_page",pageable.getPageNumber());
                    return "notification_my_published_project";
                }else if(type.equals("ready")){
                    page=firstLevelRiskDAO.findByFirstLevelRiskApplication_setup(user.getWorkerName(),"待审批",pageable);
                    model.addAttribute("first_new",page);
                    model.addAttribute("Total_page",page.getTotalPages());
                    model.addAttribute("Total_elements",page.getTotalElements());
                    model.addAttribute("current_page",pageable.getPageNumber());
                    return "notification_ready_project";
                }else if(type.equals("ing")){
                    page=firstLevelRiskDAO.findByFirstLevelRiskApplication_setup(user.getWorkerName(),"审批中",pageable);
                    model.addAttribute("first_new",page);
                    model.addAttribute("Total_page",page.getTotalPages());
                    model.addAttribute("Total_elements",page.getTotalElements());
                    model.addAttribute("current_page",pageable.getPageNumber());
                    return "notification_my_ing_project";
                }
            }
        return null;
        }




    @RequestMapping(value = "/websocket_user")
    public String websocket_user(Model model,HttpSession session){
        return "index_test";
    }
    @RequestMapping(value = "/websocket_admin")
    public String websocket_admin(Model model,HttpSession session){
        return "admin";
    }
    @RequestMapping(value = "/websocket_chatroom")
    public String websocket_chatroom(Model model,HttpSession session){
        return "index_chatroom";
    }
}
