package com.example.demo.controller;

import com.example.demo.dao.*;
import com.example.demo.pojo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpSession;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@Controller
@EnableAutoConfiguration
@RequestMapping(value = "/secondlevel")

public class SecondLevelRiskController {
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
    @RequestMapping(value = "/list_Financial_thematic/{id}/{status}",produces="text/plain;charset=UTF-8")
    public String list_Financial_thematic(@PageableDefault(size = 5,sort = {"secondLevelRiskCode"},direction = Sort.Direction.ASC)Pageable pageable, Model model, HttpSession session, @PathVariable(value ="id") int id,@PathVariable(value = "status") String status){
        UserDO user=(UserDO)session.getAttribute("user");
        SecondLevelRiskDO secondLevelRiskDO = new SecondLevelRiskDO();
        model.addAttribute("so",secondLevelRiskDO);
        model.addAttribute("id",id);
        model.addAttribute("list_second",secondLevelRiskDAO.findByPage(firstLevelRiskDAO.findById(id).getFirstLevelRiskCode(),pageable));
        model.addAttribute("Total_page",secondLevelRiskDAO.findByPage(firstLevelRiskDAO.findById(id).getFirstLevelRiskCode(),pageable).getTotalPages());
        model.addAttribute("Total_elements",secondLevelRiskDAO.findByPage(firstLevelRiskDAO.findById(id).getFirstLevelRiskCode(),pageable).getTotalElements());
        model.addAttribute("current_elements",pageable.getPageNumber());
        model.addAttribute("first_name",firstLevelRiskDAO.findById(id).getFirstLevelRiskName());
        if(status.equals("ready")){
            status="待审批";
            model.addAttribute("status",status);
        }else if(status.equals("failure")) {
            status="审批失败";
            model.addAttribute("status",status);
        }else {
            model.addAttribute("status",status);
        }
        String type=firstLevelRiskDAO.findById(id).getFirstLevelTopic();
        if(type.equals("金融市场")){
            return "list_Financial_thematic_second_level";
        }else if(type.equals("企业制度")){
            return "list_Enterprise_system_second_level";
        }else if(type.equals("企业战略")){
            return "list_Enterprise_strategy_second_level";
        }
        return null;
    }
    @RequestMapping(value = "/list/{id}")
    public String list(@PageableDefault(size = 5,sort = {"secondLevelRiskCode"},direction = Sort.Direction.ASC)Pageable pageable,Model model,HttpSession session,@PathVariable(value = "id") int id){
        UserDO user=(UserDO)session.getAttribute("user");
        SecondLevelRiskDO secondLevelRiskDO = new SecondLevelRiskDO();
        String type=firstLevelRiskDAO.findByriskcode(secondLevelRiskDAO.findById(id).getFirstLevelRiskCode()).getFirstLevelTopic();
        model.addAttribute("so",secondLevelRiskDO);
        model.addAttribute("id",id);
        model.addAttribute("list_second",secondLevelRiskDAO.findByPage_secondLevelRiskName(secondLevelRiskDAO.findById(id).getSecondLevelRiskName(),pageable));
        model.addAttribute("Total_page",secondLevelRiskDAO.findByPage_secondLevelRiskName(secondLevelRiskDAO.findById(id).getSecondLevelRiskName(),pageable).getTotalPages());
        model.addAttribute("Total_elements",secondLevelRiskDAO.findByPage_secondLevelRiskName(secondLevelRiskDAO.findById(id).getSecondLevelRiskName(),pageable).getTotalElements());
        model.addAttribute("current_elements",pageable.getPageNumber());
        model.addAttribute("first_name",firstLevelRiskDAO.findByriskcode(secondLevelRiskDAO.findById(id).getFirstLevelRiskCode()).getFirstLevelRiskName());
        model.addAttribute("status","已发布");
        if(type.equals("金融市场")){
            return "list_Financial_thematic_second_level";
        }else if(type.equals("企业制度")){
            return "list_Enterprise_system_second_level";
        }else if(type.equals("企业战略")){
            return "list_Enterprise_strategy_second_level";
        }
        return null;
    }
    @RequestMapping(value = "/add/{id}")
    public String add(@PageableDefault(size = 5,sort = {"secondLevelRiskCode"},direction = Sort.Direction.ASC)Pageable pageable,Model model, @ModelAttribute(value = "so")SecondLevelRiskDO secondLevelRiskDO, HttpSession session,@PathVariable(value = "id") int id){
        UserDO user=(UserDO)session.getAttribute("user");
        Date date = new Date();
        Timestamp nousedate = new Timestamp(date.getTime());
        secondLevelRiskDO.setId(0);
        String secondLevelRiskCode=secondLevelRiskDO.getSecondLevelRiskCode();
        String secondLevelRiskName=secondLevelRiskDO.getSecondLevelRiskName();
        List<SecondLevelRiskDO> secondLevelRiskDOS = secondLevelRiskDAO.findAll();
        String type = firstLevelRiskDAO.findById(id).getFirstLevelTopic();

        for (SecondLevelRiskDO secondLevelRiskDO1:secondLevelRiskDOS){
            String secondLevelRiskCode_standard =secondLevelRiskDO1.getSecondLevelRiskCode();
            String secondLevelRiskName_standard = secondLevelRiskDO1.getSecondLevelRiskName();
            if(secondLevelRiskCode.equals(secondLevelRiskCode_standard) || secondLevelRiskName.equals(secondLevelRiskName_standard)){

                SecondLevelRiskDO secondLevelRiskDO2 = new SecondLevelRiskDO();
                model.addAttribute("so",secondLevelRiskDO2);
                UserDO userDO=new UserDO();
                model.addAttribute("uo",userDO);
                model.addAttribute("user",userDAO.findAll());
                model.addAttribute("add_success",0);
                model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
                model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
                model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
                model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
                model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
                model.addAttribute("ready_create_first_level",firstLevelRiskDAO.findBycompanyandstatus(user.getUserCompany(),"待创建"));
                model.addAttribute("list_second",secondLevelRiskDAO.findByPage(firstLevelRiskDAO.findById(id).getFirstLevelRiskCode(),pageable));
                model.addAttribute("Total_page",secondLevelRiskDAO.findByPage(firstLevelRiskDAO.findById(id).getFirstLevelRiskCode(),pageable).getTotalPages());
                model.addAttribute("Total_elements",secondLevelRiskDAO.findByPage(firstLevelRiskDAO.findById(id).getFirstLevelRiskCode(),pageable).getTotalElements());
                model.addAttribute("current_elements",pageable.getPageNumber());
                model.addAttribute("status","待审批");
                if(type.equals("金融市场")){
                    return "list_Financial_thematic_second_level";
                }else if(type.equals("企业战略")){
                    return "list_Enterprise_strategy_second_level";
                }else if(type.equals("企业制度")){
                    return "list_Enterprise_system_second_level";
                }
            }
        }
        secondLevelRiskDO.setSecondLevelRiskApplication(user.getWorkerName());
        secondLevelRiskDO.setSecondLevelRiskCompany(user.getUserCompany());
        secondLevelRiskDO.setSecondLevelRiskDate(nousedate);
        secondLevelRiskDO.setSecondLevelRiskDepartment(user.getDepartment());
        secondLevelRiskDO.setFirstLevelRiskCode(firstLevelRiskDAO.findById(id).getFirstLevelRiskCode());
        secondLevelRiskDO.setSecondLevelRiskStatus("已创建");
        secondLevelRiskDAO.save(secondLevelRiskDO);

        SecondLevelRiskDO secondLevelRiskDO1 = new SecondLevelRiskDO();
        model.addAttribute("so",secondLevelRiskDO1);

        RiskDefinationDO riskDefinationDO=new RiskDefinationDO();
        model.addAttribute("rdo",riskDefinationDO);

        model.addAttribute("user",userDAO.findAll());

        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        model.addAttribute("ready_create_first_level",firstLevelRiskDAO.findBycompanyandstatus(user.getUserCompany(),"待创建"));
        model.addAttribute("list_Financial_thematic_second",secondLevelRiskDAO.findByFirstLevelRiskCode(firstLevelRiskDAO.findById(id).getFirstLevelRiskCode()));
        model.addAttribute("add_success",1);
        model.addAttribute("second_name",secondLevelRiskDO.getSecondLevelRiskName());
        model.addAttribute("list_second",secondLevelRiskDAO.findByPage(firstLevelRiskDAO.findById(id).getFirstLevelRiskCode(),pageable));
        model.addAttribute("Total_page",secondLevelRiskDAO.findByPage(firstLevelRiskDAO.findById(id).getFirstLevelRiskCode(),pageable).getTotalPages());
        model.addAttribute("Total_elements",secondLevelRiskDAO.findByPage(firstLevelRiskDAO.findById(id).getFirstLevelRiskCode(),pageable).getTotalElements());
        model.addAttribute("current_elements",pageable.getPageNumber());
        model.addAttribute("status","待审批");

        if(type.equals("金融市场")){
            return "list_Financial_thematic_second_level";
        }else if(type.equals("企业战略")){
            return "list_Enterprise_strategy_second_level";
        }else if(type.equals("企业制度")){
            return "list_Enterprise_system_second_level";
        }
        return null;
    }


    @RequestMapping(value = "/edit/{id}")
    public String edit(@PageableDefault(size = 5,sort = {"secondLevelRiskCode"},direction = Sort.Direction.ASC)Pageable pageable,Model model, HttpSession session, @PathVariable int id){
        UserDO user=(UserDO)session.getAttribute("user");
        SecondLevelRiskDO secondLevelRiskDO=secondLevelRiskDAO.findById(id);
        String firstriskcode=secondLevelRiskDO.getFirstLevelRiskCode();

        model.addAttribute("so",secondLevelRiskDO);
        model.addAttribute("edit_ing",1);
        model.addAttribute("sid",id);
        String type =firstLevelRiskDAO.findByriskcode(secondLevelRiskDAO.findById(id).getFirstLevelRiskCode()).getFirstLevelTopic();
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        model.addAttribute("list_second",secondLevelRiskDAO.findByPage(firstriskcode,pageable));
        model.addAttribute("Total_page",secondLevelRiskDAO.findByPage(firstriskcode,pageable).getTotalPages());
        model.addAttribute("Total_elements",secondLevelRiskDAO.findByPage(firstriskcode,pageable).getTotalElements());
        model.addAttribute("current_elements",pageable.getPageNumber());
        model.addAttribute("status","待审批");
        if(type.equals("金融市场")){
            return "list_Financial_thematic_second_level";
        }else if(type.equals("企业战略")){
            return "list_Enterprise_strategy_second_level";
        }else if(type.equals("企业制度")){
            return "list_Enterprise_system_second_level";
        }
        return null;
    }
    @RequestMapping(value = "/update/{id}")
    public String second_level_update(final RedirectAttributes redirectAttributes,@PageableDefault(size = 5,sort = {"secondLevelRiskCode"},direction = Sort.Direction.ASC)Pageable pageable, Model model, HttpSession session, @ModelAttribute(value = "so")SecondLevelRiskDO secondLevelRiskDO, @PathVariable(value = "id") int id){
        String firstriskcode=secondLevelRiskDAO.findById(id).getFirstLevelRiskCode();
        int fid=firstLevelRiskDAO.findByriskcode(firstriskcode).getId();
        secondLevelRiskDAO.update(
             secondLevelRiskDO.getSecondLevelRiskCode(),
             secondLevelRiskDO.getSecondLevelRiskName(),
             secondLevelRiskDO.getSecondLevelRiskDescription(),
             id
     );
       redirectAttributes.addFlashAttribute("edit_success",1);
       return "redirect:/secondlevel//list_Financial_thematic/"+fid+"/"+"ready";
}
@RequestMapping(value = "del/{id}")
    public String del(@PageableDefault(size = 5,sort = {"secondLevelRiskCode"},direction = Sort.Direction.ASC)Pageable pageable,Model model,HttpSession session,@PathVariable(value = "id") int id){
    UserDO user=(UserDO)session.getAttribute("user");
    Date date = new Date();
    Timestamp nousedate = new Timestamp(date.getTime());

    String first_riskcode=secondLevelRiskDAO.findById(id).getFirstLevelRiskCode();
    model.addAttribute("id",firstLevelRiskDAO.findByriskcode(first_riskcode).getId());
    String type =firstLevelRiskDAO.findByriskcode(secondLevelRiskDAO.findById(id).getFirstLevelRiskCode()).getFirstLevelTopic();
    String Second_Risk_code=secondLevelRiskDAO.findById(id).getSecondLevelRiskCode();
    fourthLevelRiskDAO.deleteBySecondLevelRiskCode(Second_Risk_code);
    thirdLevelRiskDAO.deleteBySecondLevelRiskCode(Second_Risk_code);
    SecondLevelRiskDO secondLevelRiskDO = new SecondLevelRiskDO();
    secondLevelRiskDAO.deleteById(id);
    model.addAttribute("so",secondLevelRiskDO);
    model.addAttribute("delet_second_success",1);
    model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
    model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
    model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
    model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
    model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
    model.addAttribute("list_second",secondLevelRiskDAO.findByPage(first_riskcode,pageable));
    model.addAttribute("Total_page",secondLevelRiskDAO.findByPage(first_riskcode,pageable).getTotalPages());
    model.addAttribute("Total_elements",secondLevelRiskDAO.findByPage(first_riskcode,pageable).getTotalElements());
    model.addAttribute("current_elements",pageable.getPageNumber());
    model.addAttribute("status","待审批");
    if(type.equals("金融市场")){
        return "list_Financial_thematic_second_level";
    }else if(type.equals("企业战略")){
        return "list_Enterprise_strategy_second_level";
    }else if(type.equals("企业制度")){
        return "list_Enterprise_system_second_level";
    }
        return null;
}
}

