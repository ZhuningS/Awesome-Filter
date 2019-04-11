package com.example.demo.controller;

import com.example.demo.dao.*;
import com.example.demo.pojo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpSession;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Controller
@EnableAutoConfiguration
@RequestMapping(value = "/user")
public class UserController {

    @Autowired
    private UserDAO userDAO;
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
    private UserPermissionDAO userPermissionDAO;
    @Autowired
    private RiskEventLibraryDAO riskEventLibraryDAO;
    @Autowired
    private RiskDefinationDAO riskDefinationDAO;
    @Autowired
    private RulesRegulationsDAO rulesRegulationsDAO;
    @RequestMapping(value = "/user_add")
    public String userAddPage(Model model) {
        UserDO uo = new UserDO();
        model.addAttribute("uo", uo);
        model.addAttribute("company",companyDAO.findAll());
        return "register";
    }
    @RequestMapping(value = "/doadd")
    public String userAdd(Model model,@ModelAttribute(value = "uo") UserDO userDO,HttpSession session) {
        List<UserDO> userDOList=userDAO.findAll();
        String username=userDO.getUsername();
        System.out.println(username);
        for (UserDO userDO1:userDOList){
            System.out.println(userDO1.getUsername());

            if(userDO1.getUsername().equals(username)){

                System.out.println("+++++++++++++++++++++++++++++++++++++"+"用户已存在");
                UserDO uo = new UserDO();
                model.addAttribute("uo", uo);
                model.addAttribute("company",companyDAO.findAll());
                model.addAttribute("user_name_exist",1);
                return "register";
            }
        }
        for (UserDO userDO1:userDOList){

            if(userDO1.getWorkNumber().equals(userDO.getWorkNumber())){

                UserDO uo = new UserDO();
                model.addAttribute("uo", uo);
                model.addAttribute("company",companyDAO.findAll());
                model.addAttribute("user_WorkNumber_exist",1);
                return "register";
            }
        }
                userDO.setId(0);
                String a = "1";
                String b = "2";
                String c = "3";
                String d = "4";
                String e = "5";
                String f = "6";
                String worknum = userDO.getWorkNumber();
                String company = userDO.getUserCompany();
                String department = userDO.getDepartment();

                if (a.equals(worknum.substring(0, 1))) {
                    userDO.setPermission(1);
                    userDO.setMenuRole("初级用户");
                } else if (b.equals(worknum.substring(0, 1))) {
                    userDO.setPermission(2);
                    userDO.setMenuRole("高级用户");
                } else if (c.equals(worknum.substring(0, 1))) {
                    userDO.setPermission(3);
                    userDO.setMenuRole("初级管理员");
                } else if (d.equals(worknum.substring(0, 1))) {
                    userDO.setPermission(4);
                    userDO.setMenuRole("中级管理员");
                } else if (e.equals(worknum.substring(0, 1))) {
                    userDO.setPermission(5);
                    userDO.setMenuRole("高级管理员");
                } else if (f.equals(worknum.substring(0, 1))) {
                    userDO.setPermission(6);
                    userDO.setMenuRole("顶级管理员");
                }
                userDO.setUserGroup("中华纸业");
                userDO.setStatus("在职");
                userDAO.save(userDO);
                int userpermission = userDO.getPermission();
                UserPermissionDO userPermissionDO = new UserPermissionDO();
                userPermissionDO.setId(0);
                userPermissionDO.setWorkNumber(worknum);
                userPermissionDO.setUserName(username);
                userPermissionDO.setUserCompany(company);
                userPermissionDO.setUserDepartment(department);
                userDO.setWorkNumber(worknum);
                System.out.println(userDO.getPermission());
                if (userpermission == 1) {
                    userPermissionDO.setAbleManageUser("不能");
                    userPermissionDO.setAbleCreateNewProject("不能");
                    userPermissionDO.setAbleExaminationApprovalProject("不能");
                    userPermissionDO.setAbleModifyProject("能");
                    userPermissionDO.setAblePushProject("不能");
                    userPermissionDAO.save(userPermissionDO);
                    model.addAttribute("username",userDO.getUsername());
                    model.addAttribute("password",userDO.getPassword());
                    return "register_success";
                } else if (userpermission == 2) {
                    userPermissionDO.setAbleManageUser("不能");
                    userPermissionDO.setAbleCreateNewProject("不能");
                    userPermissionDO.setAbleExaminationApprovalProject("不能");
                    userPermissionDO.setAbleModifyProject("能");
                    userPermissionDO.setAblePushProject("能");
                    userPermissionDAO.save(userPermissionDO);
                    model.addAttribute("username",userDO.getUsername());
                    model.addAttribute("password",userDO.getPassword());
                    return "register_success";

                } else if (userpermission == 3 | userpermission == 4 ) {
                    userPermissionDO.setAbleManageUser("能");
                    userPermissionDO.setAbleCreateNewProject("不能");
                    userPermissionDO.setAbleExaminationApprovalProject("不能");
                    userPermissionDO.setAbleModifyProject("不能");
                    userPermissionDO.setAblePushProject("不能");
                    userPermissionDAO.save(userPermissionDO);
                    model.addAttribute("username",userDO.getUsername());
                    model.addAttribute("password",userDO.getPassword());
                    return "register_success";
                } else if(userpermission == 5 | userpermission == 6){
                    userPermissionDO.setAbleManageUser("能");
                    userPermissionDO.setAbleCreateNewProject("不能");
                    userPermissionDO.setAbleExaminationApprovalProject("不能");
                    userPermissionDO.setAbleModifyProject("不能");
                    userPermissionDO.setAblePushProject("不能");
                    userPermissionDAO.save(userPermissionDO);
                    model.addAttribute("username",userDO.getUsername());
                    model.addAttribute("password",userDO.getPassword());
                    return "register_success";
                }
        return null;
            }

    @RequestMapping(value = "/department_doadd")
    public String department_doadd(final RedirectAttributes redirectAttributes, @ModelAttribute(value = "uo") UserDO userDO, HttpSession session) {
        UserDO user=(UserDO)session.getAttribute("user");

        List<UserDO> userDOList=userDAO.findByDepartment(user.getDepartment());
        String username=userDO.getUsername();
        System.out.println(username);
        for (UserDO userDO1:userDOList){
            System.out.println(userDO1.getUsername());

            if(userDO1.getUsername().equals(username)){

               redirectAttributes.addFlashAttribute("add_failure","用户名已存在!");
                return "redirect:/user/user_management";
            }
        }
        for (UserDO userDO1:userDOList){

            if(userDO1.getWorkNumber().equals(userDO.getWorkNumber())){

                redirectAttributes.addFlashAttribute("add_failure","工号已存在!");
                return "redirect:/user/user_management";
            }
        }
        userDO.setId(0);
        String a = "1";
        String b = "2";
        String c = "3";
        String d = "4";
        String e = "5";
        String f = "6";
        String worknum = userDO.getWorkNumber();
        String company = user.getUserCompany();
        String department = user.getDepartment();

        if (a.equals(worknum.substring(0, 1))) {
            userDO.setPermission(1);
            userDO.setMenuRole("初级用户");
        } else if (b.equals(worknum.substring(0, 1))) {
            userDO.setPermission(2);
            userDO.setMenuRole("高级用户");
        } else if (c.equals(worknum.substring(0, 1))) {
            userDO.setPermission(3);
            userDO.setMenuRole("初级管理员");
        } else if (d.equals(worknum.substring(0, 1))) {
            userDO.setPermission(4);
            userDO.setMenuRole("中级管理员");
        } else if (e.equals(worknum.substring(0, 1))) {
            userDO.setPermission(5);
            userDO.setMenuRole("高级管理员");
        } else if (f.equals(worknum.substring(0, 1))) {
            userDO.setPermission(6);
            userDO.setMenuRole("顶级管理员");
        }
        userDO.setUserGroup("中华纸业");
        userDO.setStatus("在职");
        userDO.setDepartment("风控部");
        userDO.setUserCompany(company);
        userDO.setPosition("普通员工");
        userDAO.save(userDO);
        int userpermission = userDO.getPermission();
        UserPermissionDO userPermissionDO = new UserPermissionDO();
        userPermissionDO.setId(0);
        userPermissionDO.setWorkNumber(worknum);
        userPermissionDO.setUserName(username);
        userPermissionDO.setUserCompany(company);
        userPermissionDO.setUserDepartment(department);
        userDO.setWorkNumber(worknum);
        System.out.println(userDO.getPermission());
        UserDO userDO1=new UserDO();
        userPermissionDAO.save(userPermissionDO);
        redirectAttributes.addFlashAttribute("add_success","用户 "+username);
        return "redirect:/user/user_management";
    }
    @RequestMapping(value = "/register_success")
    public  String register_success(HttpSession session, Model model){
        return "register_success";
    }

    @RequestMapping(value = "/user_information")
    public  String user_information(HttpSession session, Model model){
        UserDO user=(UserDO)session.getAttribute("user");
        int id = user.getId();
        UserDO userDO = userDAO.getById(id);
        model.addAttribute("uo",userDO);
        model.addAttribute("user",user);
        model.addAttribute("success",1);
        model.addAttribute("company",companyDAO.findAll());
        return "user_information";
    }
    @RequestMapping(value = "/personal_information_del_success/{id}")
    public String personal_information_del_success(@PathVariable(value = "id") int did,Model model,HttpSession session){
        UserDO user=(UserDO)session.getAttribute("user");
        int id = user.getId();
        UserDO userDO = userDAO.getById(id);
        model.addAttribute("uo",userDO);
        model.addAttribute("user",user);
        model.addAttribute("success",1);
        model.addAttribute("usermanagement",userDAO.findByDepartment(user.getDepartment()));
        model.addAttribute("del_user_name",1);
        return "用户信息";
    }
//
    @RequestMapping(value = "/add")
    public String add(Model model,@ModelAttribute(value = "uo") UserDO userDO,HttpSession session){
        userDO.setId(0);
        userDO.setPermission(2);
        userDO.setUserGroup("集团");
        userDAO.save(userDO);
        model.addAttribute("company",companyDAO.findAll());
        FirstLevelRiskDO firstLevelRiskDO = new FirstLevelRiskDO();
        model.addAttribute("fo",firstLevelRiskDO);
        model.addAttribute("ready_first_level",firstLevelRiskDAO.findBycompany("未分配"));
        model.addAttribute("first_level_pass",firstLevelRiskDAO.findBystatus("审批通过"));
        model.addAttribute("first_level_publish",firstLevelRiskDAO.findBystatus("已发布"));
        model.addAttribute("first_level_ing",firstLevelRiskDAO.findBystatus("审批中"));
        model.addAttribute("first_level_failure",firstLevelRiskDAO.findBystatus("审批失败"));
        CompanyDO companyDO=new CompanyDO();
        model.addAttribute("co",companyDO);
        UserDO user=(UserDO)session.getAttribute("user");
        Date date = new Date();
        UserDO userDO1=new UserDO();
        model.addAttribute("uo",userDO1);
        model.addAttribute("user",userDAO.findAll());
        Timestamp nousedate = new Timestamp(date.getTime());
        model.addAttribute("user_add_success",1);
        model.addAttribute("worknum",user.getWorkNumber());
        return "group_user_management";

    }
    @RequestMapping(value = "/del/{id}")
    public String del(Model model, HttpSession session,@PathVariable(value = "id") int id){
        String username= userDAO.getById(id).getUsername();
        int pid =userPermissionDAO.findByWorkNumber(userDAO.getById(id).getWorkNumber()).getId();
        userDAO.deleteById(id);
        userPermissionDAO.deleteById(pid);
        UserDO user=(UserDO)session.getAttribute("user");
        UserDO userDO=new UserDO();
        model.addAttribute("uo",userDO);
        model.addAttribute("user",userDAO.findbycompany(user.getUserCompany()));
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        model.addAttribute("user_del_success",1);
        return "user_management";

    }
    @RequestMapping(value = "/edit/{id}")
    public String edit(Model model, HttpSession session, @PathVariable(value = "id") int id){
        UserDO user=(UserDO)session.getAttribute("user");
        model.addAttribute("id",id);
        model.addAttribute("uo1",userDAO.getById(id));
        System.out.println("++++++++++++++++++++++++++++++"+userDAO.getById(id).getPassword());
        model.addAttribute("user_edit",1);
        UserDO userDO=new UserDO();
        model.addAttribute("uo",userDO);
        model.addAttribute("user",userDAO.findbycompany(user.getUserCompany()));
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        model.addAttribute("password",userDAO.getById(id).getPassword());
        return "user_management";

    }

    @RequestMapping(value = "/update/{id}")
    public String update(Model model, HttpSession session, @ModelAttribute(value = "uo1") UserDO userDO,@PathVariable(value = "id") int id){
        UserDO user=(UserDO)session.getAttribute("user");
        String workNumber=userDAO.getById(id).getWorkNumber();
        userDAO.updateUserbydepartment(userDO.getUsername(),userDO.getPassword(),userDO.getWorkerName(),workNumber,id);
        int pid =userPermissionDAO.findByWorkNumber(workNumber).getId();
        userPermissionDAO.updateUserbydepartment(userDO.getUsername(),workNumber,pid);
        UserDO userDO1=new UserDO();
        model.addAttribute("uo",userDO1);
        model.addAttribute("user_update_success",1);
        model.addAttribute("user",userDAO.findbycompany(user.getUserCompany()));
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        return "user_management";

    }
    @RequestMapping(value = "user_update")
    public String user_update(Model model, HttpSession session, @ModelAttribute(value = "uo") UserDO userDO){
        UserDO user=(UserDO)session.getAttribute("user");
        int id = user.getId();
        String workNumber=user.getWorkNumber();
        System.out.println(userDO.getId());
        userDAO.updateUser(userDO.getUsername(),userDO.getPassword(),userDO.getUserEmail(),userDO.getMobilePhone(),userDO.getUserAddress(),userDO.getUserMessage(),id);
        int pid =userPermissionDAO.findByWorkNumber(workNumber).getId();
        userPermissionDAO.updateUserbydepartment(userDO.getUsername(),workNumber,pid);
        UserDO userDO1=userDAO.getById(id);
        model.addAttribute("uo",userDO1);
        model.addAttribute("user",user);
        model.addAttribute("user_update_success",1);
        return "user_information";
}
    @RequestMapping(value = "/user_management")
    public String user(Model model,HttpSession session){
        model.addAttribute("company",companyDAO.findAll());
        CompanyDO companyDO=new CompanyDO();
        UserDO userDO=new UserDO();
        UserDO user=(UserDO)session.getAttribute("user");
        model.addAttribute("uo",userDO);
        model.addAttribute("user_permission",user.getPermission());
        model.addAttribute("user",userDAO.findbycompany(user.getUserCompany()));
        model.addAttribute("permission",userPermissionDAO.findbycompany(user.getUserCompany()));
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        model.addAttribute("worknum",user.getWorkNumber());
        return "user_management";
    }
    @RequestMapping(value = "/search")
    public String search(Model model,HttpSession session,@RequestParam(value = "condition") String condition,@RequestParam(value = "value") String value){
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
        if(condition.equals("用户名")){
            for(UserDO userDO:userDAO.findbynamelike(value,"岳阳林纸")) {
                userDOList.add(userDO);
            }
            for(UserDO userDO1:userDAO.findbynamelike(value,"凯胜园林")) {
                userDOList.add(userDO1);
            }
            for(UserDO userDO2:userDAO.findbynamelike(value,"冠豪高新")) {
                userDOList.add(userDO2);
            }
            for(UserDO userDO3:userDAO.findbynamelike(value,"红塔仁恒")) {
                userDOList.add(userDO3);
            }

        }else if(condition.equals("公司")){
            for(UserDO userDO:userDAO.findbycompanylike(value)) {
                userDOList.add(userDO);
            }
        }else if(condition.equals("部门")){
            for(UserDO userDO:userDAO.findbydepartmentlike(value,"岳阳林纸")) {
                userDOList.add(userDO);
            }
            for(UserDO userDO1:userDAO.findbydepartmentlike(value,"凯胜园林")) {
                userDOList.add(userDO1);
            }
            for(UserDO userDO2:userDAO.findbydepartmentlike(value,"冠豪高新")) {
                userDOList.add(userDO2);
            }
            for(UserDO userDO3:userDAO.findbydepartmentlike(value,"红塔仁恒")) {
                userDOList.add(userDO3);
            }
        }else if(condition.equals("手机号")){
            for(UserDO userDO:userDAO.findbymobilePhonelike(value,"岳阳林纸")) {
                userDOList.add(userDO);
            }
            for(UserDO userDO1:userDAO.findbymobilePhonelike(value,"凯胜园林")) {
                userDOList.add(userDO1);
            }
            for(UserDO userDO2:userDAO.findbymobilePhonelike(value,"冠豪高新")) {
                userDOList.add(userDO2);
            }
            for(UserDO userDO3:userDAO.findbymobilePhonelike(value,"红塔仁恒")) {
                userDOList.add(userDO3);
            }
        }
        FirstLevelRiskDO firstLevelRiskDO=new FirstLevelRiskDO();
        model.addAttribute("fo",firstLevelRiskDO);
        model.addAttribute("first_ready",firstLevelRiskDAO.findBycompany("未分配"));
        model.addAttribute("user",userDOList);
        model.addAttribute("search",1);
        model.addAttribute("first_finish",firstLevelRiskDOS);
        return "project_allocation";
    }
}