package com.example.demo.controller;

import com.example.demo.dao.*;
import com.example.demo.pojo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpSession;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Controller
@EnableAutoConfiguration
@RequestMapping(value = "/riskeventlibrary")
public class RiskEventLibraryController {
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
    @RequestMapping(value = "index")
    public String index(Model model,HttpSession session){
        UserDO user=(UserDO)session.getAttribute("user");
        model.addAttribute("risk_library_group",riskEventLibraryDAO.findBycompany("集团"));
        model.addAttribute("risk_library_yueyang",riskEventLibraryDAO.findBycompany("岳阳林纸"));
        model.addAttribute("risk_library_hongta",riskEventLibraryDAO.findBycompany("红塔仁恒"));
        model.addAttribute("risk_library_chengtong",riskEventLibraryDAO.findBycompany("凯胜园林"));
        model.addAttribute("risk_library_guanhao",riskEventLibraryDAO.findBycompany("冠华高新"));
        return "risk_library";
    }
    @RequestMapping(value = "/main")
    public String main(Model model,HttpSession session){
        UserDO user=(UserDO)session.getAttribute("user");
        RiskEventLibraryDO riskEventLibraryDO =new RiskEventLibraryDO();
        model.addAttribute("rio",riskEventLibraryDO);
        model.addAttribute("first",firstLevelRiskDAO.findAll());
        model.addAttribute("second",secondLevelRiskDAO.findAll());
        model.addAttribute("third",thirdLevelRiskDAO.findAll());
        model.addAttribute("fourth",fourthLevelRiskDAO.findAll());
        model.addAttribute("risk_library_group",riskEventLibraryDAO.findBycompany("集团"));
        model.addAttribute("risk_library_yueyang",riskEventLibraryDAO.findBycompany("岳阳林纸"));
        model.addAttribute("risk_library_hongta",riskEventLibraryDAO.findBycompany("红塔仁恒"));
        model.addAttribute("risk_library_chengtong",riskEventLibraryDAO.findBycompany("凯胜园林"));
        model.addAttribute("risk_library_guanhao",riskEventLibraryDAO.findBycompany("冠华高新"));
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        return "risk_library_main";
    }

    @RequestMapping(value = "/list_all")
    public String list_all(Model model, HttpSession session){
        UserDO user=(UserDO)session.getAttribute("user");
        FirstLevelRiskDO firstLevelRiskDO = new FirstLevelRiskDO();
        model.addAttribute("fo",firstLevelRiskDO);
        SecondLevelRiskDO secondLevelRiskDO = new SecondLevelRiskDO();
        model.addAttribute("so",secondLevelRiskDO);
        ThirdLevelRiskDO thirdLevelRiskDO = new ThirdLevelRiskDO();
        model.addAttribute("to",thirdLevelRiskDO);
        FourthLevelRiskDO fourthLevelRiskDO=new FourthLevelRiskDO();
        model.addAttribute("fouo",fourthLevelRiskDO);
        model.addAttribute("riskeventlibrary_group",riskEventLibraryDAO.findBycompany("集团"));
        model.addAttribute("riskeventlibrary_company",riskEventLibraryDAO.findBycompany("集团"));
        model.addAttribute("riskeventlibrary_defination",riskDefinationDAO.findAll());
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());

        return "risk_library";
    }

//    @RequestMapping(value = "/list_group")
//    public String list_group(Model model, HttpSession session){
//        UserDO user=(UserDO)session.getAttribute("user");
//        FirstLevelRiskDO firstLevelRiskDO = new FirstLevelRiskDO();
//        model.addAttribute("fo",firstLevelRiskDO);
//        SecondLevelRiskDO secondLevelRiskDO = new SecondLevelRiskDO();
//        model.addAttribute("so",secondLevelRiskDO);
//        ThirdLevelRiskDO thirdLevelRiskDO = new ThirdLevelRiskDO();
//        model.addAttribute("to",thirdLevelRiskDO);
//        FourthLevelRiskDO fourthLevelRiskDO=new FourthLevelRiskDO();
//        model.addAttribute("fouo",fourthLevelRiskDO);
//        model.addAttribute("riskeventlibrary_defination",riskDefinationDAO.findAll());
//        model.addAttribute("riskeventlibrary",riskEventLibraryDAO.findBycompany("集团"));
//        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
//        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
//        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
//        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
//        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
//        RiskEventLibraryDO riskEventLibraryDO =new RiskEventLibraryDO();
//        model.addAttribute("rio",riskEventLibraryDO);
//
//        return "risklibrary_list_group";
//    }
//    @RequestMapping(value = "/list_company")
//    public String list_company(Model model, HttpSession session){
//        UserDO user=(UserDO)session.getAttribute("user");
//        FirstLevelRiskDO firstLevelRiskDO = new FirstLevelRiskDO();
//        model.addAttribute("fo",firstLevelRiskDO);
//        SecondLevelRiskDO secondLevelRiskDO = new SecondLevelRiskDO();
//        model.addAttribute("so",secondLevelRiskDO);
//        ThirdLevelRiskDO thirdLevelRiskDO = new ThirdLevelRiskDO();
//        model.addAttribute("to",thirdLevelRiskDO);
//        FourthLevelRiskDO fourthLevelRiskDO=new FourthLevelRiskDO();
//        model.addAttribute("fouo",fourthLevelRiskDO);
//        model.addAttribute("riskeventlibrary_defination",riskDefinationDAO.findAll());
//        model.addAttribute("riskeventlibrary",riskEventLibraryDAO.findBycompany(user.getUserCompany()));
//        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
//        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
//        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
//        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
//        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
//        RiskEventLibraryDO riskEventLibraryDO =new RiskEventLibraryDO();
//        model.addAttribute("rio",riskEventLibraryDO);
//
//        return "risklibrary_list_company";
//    }
    @RequestMapping(value = "/list_defination/{parameter}")
    public String list_defination(Model model, HttpSession session,@PathVariable(value = "parameter") String parameter){
        UserDO user=(UserDO)session.getAttribute("user");
        model.addAttribute("parameter",parameter);
        model.addAttribute("riskeventlibrary_defination",riskDefinationDAO.findAll());
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        return "risk_library_risk_controller_defination";
    }

    @RequestMapping(value = "/add")
    public String add(Model model, HttpSession session, @ModelAttribute(value = "rio") RiskEventLibraryDO riskEventLibraryDO){
        UserDO user=(UserDO)session.getAttribute("user");
        riskEventLibraryDO.setId(0);
        riskEventLibraryDO.setFirstLevelRisk(riskEventLibraryDO.getFirstLevelRisk());
        riskEventLibraryDO.setSecondLevelRisk(riskEventLibraryDO.getSecondLevelRisk());
        riskEventLibraryDO.setThirdLevelRisk(riskEventLibraryDO.getThirdLevelRisk());
        riskEventLibraryDO.setFourthLevelRisk(riskEventLibraryDO.getFourthLevelRisk());
        riskEventLibraryDO.setRelatedBusinessSector(user.getUserCompany());
        riskEventLibraryDAO.save(riskEventLibraryDO);
        model.addAttribute("add_success",1);
        RiskEventLibraryDO riskEventLibraryDO1 =new RiskEventLibraryDO();
        model.addAttribute("rio",riskEventLibraryDO1);
        model.addAttribute("risk_library_group",riskEventLibraryDAO.findBycompany("集团"));
        model.addAttribute("risk_library_yueyang",riskEventLibraryDAO.findBycompany("岳阳林纸"));
        model.addAttribute("risk_library_hongta",riskEventLibraryDAO.findBycompany("红塔仁恒"));
        model.addAttribute("risk_library_chengtong",riskEventLibraryDAO.findBycompany("凯胜园林"));
        model.addAttribute("risk_library_guanhao",riskEventLibraryDAO.findBycompany("冠华高新"));
        model.addAttribute("first",firstLevelRiskDAO.findAll());
        model.addAttribute("second",secondLevelRiskDAO.findAll());
        model.addAttribute("third",thirdLevelRiskDAO.findAll());
        model.addAttribute("fourth",fourthLevelRiskDAO.findAll());
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        return "risk_library_main";

    }
    @RequestMapping(value = "del/{id}")
    public String del(Model model,HttpSession session,@PathVariable(value = "id") int id){
        riskEventLibraryDAO.deleteById(id);
        UserDO user=(UserDO)session.getAttribute("user");
        model.addAttribute("first",firstLevelRiskDAO.findAll());
        model.addAttribute("second",secondLevelRiskDAO.findAll());
        model.addAttribute("third",thirdLevelRiskDAO.findAll());
        model.addAttribute("fourth",fourthLevelRiskDAO.findAll());
        model.addAttribute("risk_library_group",riskEventLibraryDAO.findBycompany("集团"));
        model.addAttribute("risk_library_yueyang",riskEventLibraryDAO.findBycompany("岳阳林纸"));
        model.addAttribute("risk_library_hongta",riskEventLibraryDAO.findBycompany("红塔仁恒"));
        model.addAttribute("risk_library_chengtong",riskEventLibraryDAO.findBycompany("凯胜园林"));
        model.addAttribute("risk_library_guanhao",riskEventLibraryDAO.findBycompany("冠华高新"));
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        RiskEventLibraryDO riskEventLibraryDO =new RiskEventLibraryDO();
        model.addAttribute("rio",riskEventLibraryDO);
        model.addAttribute("del_success",1);
        return "risk_library_main";

    }

    @RequestMapping(value = "edit/{id}")
    public String edit(Model model,HttpSession session,@PathVariable(value = "id") int id){
        RiskEventLibraryDO riskEventLibraryDO = riskEventLibraryDAO.findById(id);
        model.addAttribute("rio",riskEventLibraryDO);
        UserDO user=(UserDO)session.getAttribute("user");

        model.addAttribute("risk_library_group",riskEventLibraryDAO.findBycompany("集团"));
        model.addAttribute("risk_library_yueyang",riskEventLibraryDAO.findBycompany("岳阳林纸"));
        model.addAttribute("risk_library_hongta",riskEventLibraryDAO.findBycompany("红塔仁恒"));
        model.addAttribute("risk_library_chengtong",riskEventLibraryDAO.findBycompany("凯胜园林"));
        model.addAttribute("risk_library_guanhao",riskEventLibraryDAO.findBycompany("冠华高新"));
        model.addAttribute("first",firstLevelRiskDAO.findAll());
        model.addAttribute("second",secondLevelRiskDAO.findAll());
        model.addAttribute("third",thirdLevelRiskDAO.findAll());
        model.addAttribute("fourth",fourthLevelRiskDAO.findAll());
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        model.addAttribute("risk_library_edit",1);
        model.addAttribute("id",id);
        return "risk_library_main";

    }
    @RequestMapping(value = "/update/{id}")
    public String update(Model model,HttpSession session,@PathVariable(value = "id") int id,@ModelAttribute(value = "rio")RiskEventLibraryDO riskEventLibraryDO){
       riskEventLibraryDAO.update(riskEventLibraryDO.getCaseSource(),riskEventLibraryDO.getRiskEventsReportCompany(),riskEventLibraryDO.getRiskEventsName(),riskEventLibraryDO.getRiskEventsDescription(),riskEventLibraryDO.getFinancialLossImpact(),riskEventLibraryDO.getHealthSafetyImpact(),riskEventLibraryDO.getEnvironmentImpact(),riskEventLibraryDO.getComplianceImpact(),riskEventLibraryDO.getReputationImpact(),riskEventLibraryDO.getCausesMajorRisksAnalysis(),riskEventLibraryDO.getFirstLevelRisk(),riskEventLibraryDO.getSecondLevelRisk(),riskEventLibraryDO.getThirdLevelRisk(),riskEventLibraryDO.getFourthLevelRisk(),riskEventLibraryDO.getRiskRelatedDepartment(),riskEventLibraryDO.getRiskEventRating(),riskEventLibraryDO.getRiskEventCopingStrategies(),riskEventLibraryDO.getRiskEventMeasure(),id);
        UserDO user=(UserDO)session.getAttribute("user");
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        RiskEventLibraryDO riskEventLibraryDO1 = new RiskEventLibraryDO();
        model.addAttribute("rio",riskEventLibraryDO1);
        model.addAttribute("risk_library_group",riskEventLibraryDAO.findBycompany("集团"));
        model.addAttribute("risk_library_yueyang",riskEventLibraryDAO.findBycompany("岳阳林纸"));
        model.addAttribute("risk_library_hongta",riskEventLibraryDAO.findBycompany("红塔仁恒"));
        model.addAttribute("risk_library_chengtong",riskEventLibraryDAO.findBycompany("凯胜园林"));
        model.addAttribute("risk_library_guanhao",riskEventLibraryDAO.findBycompany("冠华高新"));
        model.addAttribute("first",firstLevelRiskDAO.findAll());
        model.addAttribute("second",secondLevelRiskDAO.findAll());
        model.addAttribute("third",thirdLevelRiskDAO.findAll());
        model.addAttribute("fourth",fourthLevelRiskDAO.findAll());
        model.addAttribute("risk_library_update_success",1);
        return "risk_library_main";
    }
//    @RequestMapping(value = "/defination_add")
//    public String defination_add(Model model,@ModelAttribute(value = "rdo") RiskDefinationDO riskDefinationDO,HttpSession session){
//        riskDefinationDO.setId(0);
//        riskDefinationDAO.save(riskDefinationDO);
//        UserDO user=(UserDO)session.getAttribute("user");
//        FirstLevelRiskDO firstLevelRiskDO = new FirstLevelRiskDO();
//        model.addAttribute("fo",firstLevelRiskDO);
//        SecondLevelRiskDO secondLevelRiskDO = new SecondLevelRiskDO();
//        model.addAttribute("so",secondLevelRiskDO);
//        ThirdLevelRiskDO thirdLevelRiskDO = new ThirdLevelRiskDO();
//        model.addAttribute("to",thirdLevelRiskDO);
//        FourthLevelRiskDO fourthLevelRiskDO=new FourthLevelRiskDO();
//        model.addAttribute("fouo",fourthLevelRiskDO);
//        model.addAttribute("riskeventlibrary",riskEventLibraryDAO.findAll());
//        model.addAttribute("add_success_defination",1);
//        model.addAttribute("riskeventlibrary_defination",riskDefinationDAO.findAll());
//        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
//        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
//        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
//        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
//        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
//        return "risklibrary_defination";
//
//    }
//    @RequestMapping(value = "/defination_del/{id}")
//    public String defination_del(Model model,@PathVariable(value = "id") int id,HttpSession session){
//        riskDefinationDAO.deleteById(id);
//        UserDO user=(UserDO)session.getAttribute("user");
//        FirstLevelRiskDO firstLevelRiskDO = new FirstLevelRiskDO();
//        model.addAttribute("fo",firstLevelRiskDO);
//        SecondLevelRiskDO secondLevelRiskDO = new SecondLevelRiskDO();
//        model.addAttribute("so",secondLevelRiskDO);
//        ThirdLevelRiskDO thirdLevelRiskDO = new ThirdLevelRiskDO();
//        model.addAttribute("to",thirdLevelRiskDO);
//        FourthLevelRiskDO fourthLevelRiskDO=new FourthLevelRiskDO();
//        model.addAttribute("fouo",fourthLevelRiskDO);
//        model.addAttribute("riskeventlibrary",riskEventLibraryDAO.findAll());
//        model.addAttribute("riskeventlibrary_defination",riskDefinationDAO.findAll());
//        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
//        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
//        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
//        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
//        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
//        model.addAttribute("del_success",1);
//        return "risklibrary_defination";
//
//    }
//    @RequestMapping(value = "/defination_edit/{id}")
//    public String defination_edit(Model model,HttpSession session,@PathVariable(value = "id") int id){
//        UserDO user=(UserDO)session.getAttribute("user");
//        FirstLevelRiskDO firstLevelRiskDO = new FirstLevelRiskDO();
//        model.addAttribute("fo",firstLevelRiskDO);
//        SecondLevelRiskDO secondLevelRiskDO = new SecondLevelRiskDO();
//        model.addAttribute("so",secondLevelRiskDO);
//        ThirdLevelRiskDO thirdLevelRiskDO = new ThirdLevelRiskDO();
//        model.addAttribute("to",thirdLevelRiskDO);
//        FourthLevelRiskDO fourthLevelRiskDO=new FourthLevelRiskDO();
//        model.addAttribute("fouo",fourthLevelRiskDO);
//        model.addAttribute("riskeventlibrary",riskEventLibraryDAO.findAll());
//        model.addAttribute("edit_defination",1);
//        model.addAttribute("riskeventlibrary_defination",riskDefinationDAO.findAll());
//        model.addAttribute("rdo",riskDefinationDAO.findById(id));
//        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
//        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
//        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
//        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
//        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
//        return "risklibrary_defination";
//
//    }
//    @RequestMapping(value = "/defination_update/{id}")
//    public String defination_update(Model model,@ModelAttribute(value = "rdo") RiskDefinationDO riskDefinationDO,HttpSession session,@PathVariable(value = "id") int id){
//       riskDefinationDAO.update(riskDefinationDO.getRiskStrategy(),riskDefinationDO.getRiskStrategyDescription(),id);
//        UserDO user=(UserDO)session.getAttribute("user");
//        FirstLevelRiskDO firstLevelRiskDO = new FirstLevelRiskDO();
//        model.addAttribute("fo",firstLevelRiskDO);
//        SecondLevelRiskDO secondLevelRiskDO = new SecondLevelRiskDO();
//        model.addAttribute("so",secondLevelRiskDO);
//        ThirdLevelRiskDO thirdLevelRiskDO = new ThirdLevelRiskDO();
//        model.addAttribute("to",thirdLevelRiskDO);
//        FourthLevelRiskDO fourthLevelRiskDO=new FourthLevelRiskDO();
//        model.addAttribute("fouo",fourthLevelRiskDO);
//        model.addAttribute("riskeventlibrary",riskEventLibraryDAO.findAll());
//        model.addAttribute("update_success_defination",1);
//        model.addAttribute("riskeventlibrary_defination",riskDefinationDAO.findAll());
//        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
//        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
//        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
//        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
//        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
//        return "risklibrary_defination";
//
//    }
//    @RequestMapping(value = "/defination/{stragety}",produces="text/plain;charset=UTF-8")
//    public String defination(Model model,HttpSession session,@PathVariable(value = "stragety") String stragety){
//
//        UserDO user=(UserDO)session.getAttribute("user");
//        FirstLevelRiskDO firstLevelRiskDO = new FirstLevelRiskDO();
//        model.addAttribute("fo",firstLevelRiskDO);
//        SecondLevelRiskDO secondLevelRiskDO = new SecondLevelRiskDO();
//        model.addAttribute("so",secondLevelRiskDO);
//        ThirdLevelRiskDO thirdLevelRiskDO = new ThirdLevelRiskDO();
//        model.addAttribute("to",thirdLevelRiskDO);
//        FourthLevelRiskDO fourthLevelRiskDO=new FourthLevelRiskDO();
//        model.addAttribute("fouo",fourthLevelRiskDO);
//        model.addAttribute("riskeventlibrary",riskEventLibraryDAO.findAll());
//        model.addAttribute("riskeventlibrary_defination",riskDefinationDAO.findAll());
//        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
//        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
//        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
//        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
//        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
//        model.addAttribute("stragety",stragety);
//        return "risklibrary_defination";
//
//    }
    @RequestMapping(value = "/list_risk1/{risklevel}",produces="text/plain;charset=UTF-8")
    public String list_risk1(Model model,HttpSession session,@PathVariable(value = "risklevel") String risklevel,@RequestParam(defaultValue = "0")int page){
            System.out.println(risklevel);
            UserDO user=(UserDO)session.getAttribute("user");
            FirstLevelRiskDO firstLevelRiskDO = new FirstLevelRiskDO();
            model.addAttribute("fo",firstLevelRiskDO);
            Sort sort=new Sort(Sort.Direction.ASC,"id");
            Pageable pageable = new PageRequest(page,5,sort);
            String type =firstLevelRiskDAO.findByname(risklevel).getFirstLevelTopic();
            model.addAttribute("status","已发布");

            if(type.equals("金融市场")){
                model.addAttribute("list_Financial_thematic",firstLevelRiskDAO.findByfirstLevelRiskPerson_firstLevelRiskName(risklevel,"已发布",pageable));
                model.addAttribute("Total_page",firstLevelRiskDAO.findByfirstLevelRiskPerson_firstLevelRiskName(risklevel,"已发布",pageable).getTotalPages());
                model.addAttribute("Total_elements",firstLevelRiskDAO.findByfirstLevelRiskPerson_firstLevelRiskName(risklevel,"已发布",pageable).getTotalPages());
                model.addAttribute("current_elements",page);
                return "list_Financial_thematic";
            }else if(type.equals("企业战略")){
                model.addAttribute("list_Enterprise_strategy",firstLevelRiskDAO.findByfirstLevelRiskPerson_firstLevelRiskName(risklevel,"已发布",pageable));
                model.addAttribute("Total_page",firstLevelRiskDAO.findByfirstLevelRiskPerson_firstLevelRiskName(risklevel,"已发布",pageable).getTotalPages());
                model.addAttribute("Total_elements",firstLevelRiskDAO.findByfirstLevelRiskPerson_firstLevelRiskName(risklevel,"已发布",pageable).getTotalPages());
                model.addAttribute("current_elements",page);
                return "list_Enterprise_strategy";
            }else if(type.equals("企业制度")){
                model.addAttribute("list_Enterprise_system",firstLevelRiskDAO.findByfirstLevelRiskPerson_firstLevelRiskName(risklevel,"已发布",pageable));
                model.addAttribute("Total_page",firstLevelRiskDAO.findByfirstLevelRiskPerson_firstLevelRiskName(risklevel,"已发布",pageable).getTotalPages());
                model.addAttribute("Total_elements",firstLevelRiskDAO.findByfirstLevelRiskPerson_firstLevelRiskName(risklevel,"已发布",pageable).getTotalPages());
                model.addAttribute("current_elements",page);
                return "list_Enterprise_system";
            }
                return null;
            }

    @RequestMapping(value = "/list_risk2/{risklevel}",produces="text/plain;charset=UTF-8")
    public String list_risk2(Model model,HttpSession session,@PathVariable(value = "risklevel") String risklevel,@PageableDefault(size = 5,sort = {"secondLevelRiskCode"},direction = Sort.Direction.ASC)Pageable pageable){
        System.out.println(risklevel);
        UserDO user=(UserDO)session.getAttribute("user");
        SecondLevelRiskDO secondLevelRiskDO = new SecondLevelRiskDO();
        model.addAttribute("so",secondLevelRiskDO);
        String type =firstLevelRiskDAO.findByriskcode(secondLevelRiskDAO.findByname(risklevel).getFirstLevelRiskCode()).getFirstLevelTopic();
        model.addAttribute("list_second",secondLevelRiskDAO.findByPage_secondLevelRiskName(risklevel,pageable));
        model.addAttribute("Total_page",secondLevelRiskDAO.findByPage_secondLevelRiskName(risklevel,pageable).getTotalPages());
        model.addAttribute("Total_elements",secondLevelRiskDAO.findByPage_secondLevelRiskName(risklevel,pageable).getTotalElements());
        model.addAttribute("current_elements",pageable.getPageNumber());
        model.addAttribute("status","已发布");
        if(type.equals("金融市场")){
            return "list_Financial_thematic_second_level";
        }else if(type.equals("企业战略")){
            return "list_Enterprise_strategy_second_level";
        }else if(type.equals("企业制度")){
            return "list_Enterprise_system_second_level";
        }
        return null;
    }
    @RequestMapping(value = "/list_risk3/{risklevel}",produces="text/plain;charset=UTF-8")
    public String list_risk3(Model model,HttpSession session,@PathVariable(value = "risklevel") String risklevel,@PageableDefault(size = 5,sort = {"thirdLevelRiskCode"},direction = Sort.Direction.ASC)Pageable pageable){
        System.out.println(risklevel);
        UserDO user=(UserDO)session.getAttribute("user");
        ThirdLevelRiskDO thirdLevelRiskDO = new ThirdLevelRiskDO();
        model.addAttribute("to",thirdLevelRiskDO);
        String type =firstLevelRiskDAO.findByriskcode(thirdLevelRiskDAO.findByname(risklevel).getFirstLevelRiskCode()).getFirstLevelTopic();
        model.addAttribute("list_third",thirdLevelRiskDAO.findByPage_thirdLevelRiskName(risklevel,pageable));
        model.addAttribute("Total_page",thirdLevelRiskDAO.findByPage_thirdLevelRiskName(risklevel,pageable).getTotalPages());
        model.addAttribute("Total_elements",thirdLevelRiskDAO.findByPage_thirdLevelRiskName(risklevel,pageable).getTotalElements());
        model.addAttribute("current_elements",pageable.getPageNumber());
        model.addAttribute("status","已发布");
        if(type.equals("金融市场")){
            return "list_Financial_thematic_third_level";
        }else if(type.equals("企业战略")){
            return "list_Enterprise_strategy_third_level";
        }else if(type.equals("企业制度")){
            return "list_Enterprise_system_third_level";
        }
        return null;
    }
    @RequestMapping(value = "/list_risk4/{risklevel}",produces="text/plain;charset=UTF-8")
    public String list_risk4(Model model,HttpSession session,@PathVariable(value = "risklevel") String risklevel,@PageableDefault(size = 5,sort = {"thirdLevelRiskCode"},direction = Sort.Direction.ASC)Pageable pageable){
        System.out.println(risklevel);
        UserDO user=(UserDO)session.getAttribute("user");
        FourthLevelRiskDO fourthLevelRiskDO = new FourthLevelRiskDO();
        model.addAttribute("fro",fourthLevelRiskDO);
        String type =firstLevelRiskDAO.findByriskcode(fourthLevelRiskDAO.findByname(risklevel).getFirstLevelRiskCode()).getFirstLevelTopic();
        model.addAttribute("list_fourth",fourthLevelRiskDAO.findByPage_fourthLevelRiskName(risklevel,pageable));
        model.addAttribute("Total_page",fourthLevelRiskDAO.findByPage_fourthLevelRiskName(risklevel,pageable).getTotalPages());
        model.addAttribute("Total_elements",fourthLevelRiskDAO.findByPage_fourthLevelRiskName(risklevel,pageable).getTotalElements());
        model.addAttribute("current_elements",pageable.getPageNumber());
        model.addAttribute("status","已发布");
        if(type.equals("金融市场")){
            return "list_Financial_thematic_fourth_level";
        }else if(type.equals("企业战略")){
            return "list_Enterprise_strategy_fourth_level";
        }else if(type.equals("企业制度")){
            return "list_Enterprise_system_fourth_level";
        }
        return null;
    }
    @RequestMapping(value = "/risk_analysis/{id}/{status}")
    public String risk_analysis(Model model, HttpSession session,@PathVariable(value = "id") int id,@PathVariable(value = "status") String status){
        UserDO user=(UserDO)session.getAttribute("user");
        RiskEventLibraryDO riskEventLibraryDO =new RiskEventLibraryDO();
        String type=riskEventLibraryDAO.findById(id).getRelatedBusinessSector();
        System.out.println(type);
        if(type.equals("集团")){
            model.addAttribute("click",0);
        }else if(type.equals("岳阳林纸")){
            model.addAttribute("click",1);
        }else if(type.equals("红塔仁恒")){
            model.addAttribute("click",2);
        }else if(type.equals("凯胜园林")){
            model.addAttribute("click",3);
        }else if(type.equals("冠华高新")){
            model.addAttribute("click",4);
        }
        model.addAttribute("rio",riskEventLibraryDO);
        model.addAttribute("risk_library_group",riskEventLibraryDAO.findBycompany("集团"));
        model.addAttribute("risk_library_yueyang",riskEventLibraryDAO.findBycompany("岳阳林纸"));
        model.addAttribute("risk_library_hongta",riskEventLibraryDAO.findBycompany("红塔仁恒"));
        model.addAttribute("risk_library_chengtong",riskEventLibraryDAO.findBycompany("凯胜园林"));
        model.addAttribute("risk_library_guanhao",riskEventLibraryDAO.findBycompany("冠华高新"));
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        model.addAttribute("status",status);
        model.addAttribute("id",id);

        return "risk_library_risk_analysis";
    }
    @RequestMapping(value = "/risk_recognize/{id}/{status}")
    public String list(Model model, HttpSession session,@PathVariable(value = "id") int id,@PathVariable(value = "status") String status){
        UserDO user=(UserDO)session.getAttribute("user");
        RiskEventLibraryDO riskEventLibraryDO =new RiskEventLibraryDO();
        String type=riskEventLibraryDAO.findById(id).getRelatedBusinessSector();
        System.out.println(type);
        if(type.equals("集团")){
            model.addAttribute("click",0);
        }else if(type.equals("岳阳林纸")){
            model.addAttribute("click",1);
        }else if(type.equals("红塔仁恒")){
            model.addAttribute("click",2);
        }else if(type.equals("凯胜园林")){
            model.addAttribute("click",3);
        }else if(type.equals("冠华高新")){
            model.addAttribute("click",4);
        }
        model.addAttribute("rio",riskEventLibraryDO);
        model.addAttribute("risk_library_group",riskEventLibraryDAO.findBycompany("集团"));
        model.addAttribute("risk_library_yueyang",riskEventLibraryDAO.findBycompany("岳阳林纸"));
        model.addAttribute("risk_library_hongta",riskEventLibraryDAO.findBycompany("红塔仁恒"));
        model.addAttribute("risk_library_chengtong",riskEventLibraryDAO.findBycompany("凯胜园林"));
        model.addAttribute("risk_library_guanhao",riskEventLibraryDAO.findBycompany("冠华高新"));
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        model.addAttribute("status",status);
        model.addAttribute("id",id);

        return "risk_library_risk_recognize";
    }
    @RequestMapping(value = "/risk_controller/{id}/{status}")
    public String risk_controller(Model model, HttpSession session,@PathVariable(value = "id") int id,@PathVariable(value = "status") String status){
        UserDO user=(UserDO)session.getAttribute("user");
        RiskEventLibraryDO riskEventLibraryDO =new RiskEventLibraryDO();
        String type=riskEventLibraryDAO.findById(id).getRelatedBusinessSector();
        System.out.println(type);
        if(type.equals("集团")){
            model.addAttribute("click",0);
        }else if(type.equals("岳阳林纸")){
            model.addAttribute("click",1);
        }else if(type.equals("红塔仁恒")){
            model.addAttribute("click",2);
        }else if(type.equals("凯胜园林")){
            model.addAttribute("click",3);
        }else if(type.equals("冠华高新")){
            model.addAttribute("click",4);
        }
        model.addAttribute("rio",riskEventLibraryDO);
        model.addAttribute("risk_library_group",riskEventLibraryDAO.findBycompany("集团"));
        model.addAttribute("risk_library_yueyang",riskEventLibraryDAO.findBycompany("岳阳林纸"));
        model.addAttribute("risk_library_hongta",riskEventLibraryDAO.findBycompany("红塔仁恒"));
        model.addAttribute("risk_library_chengtong",riskEventLibraryDAO.findBycompany("凯胜园林"));
        model.addAttribute("risk_library_guanhao",riskEventLibraryDAO.findBycompany("冠华高新"));
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        model.addAttribute("status",status);
        model.addAttribute("id",id);

        return "risk_library_risk_controller";
    }
    @RequestMapping(value = "/risk_topic/{parameter}")
    public String risk_analysis(Model model, HttpSession session,@PathVariable(value = "parameter") String parameter){
        UserDO user=(UserDO)session.getAttribute("user");
        RiskEventLibraryDO riskEventLibraryDO =new RiskEventLibraryDO();
        model.addAttribute("rio",riskEventLibraryDO);
        model.addAttribute("risk_library_group",riskEventLibraryDAO.findBycompany("集团"));
        model.addAttribute("risk_library_yueyang",riskEventLibraryDAO.findBycompany("岳阳林纸"));
        model.addAttribute("risk_library_hongta",riskEventLibraryDAO.findBycompany("红塔仁恒"));
        model.addAttribute("risk_library_chengtong",riskEventLibraryDAO.findBycompany("凯胜园林啊"));
        model.addAttribute("risk_library_guanhao",riskEventLibraryDAO.findBycompany("冠华高新"));
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
       if(parameter.equals("风险识别")) {
            return "risk_library_risk_recognize";
       }else if ((parameter.equals("风险分析"))){
           return "risk_library_risk_analysis";
       }else if(parameter.equals("风险控制")){
           return "risk_library_risk_controller";
       }
        return "null";

    }

@RequestMapping(value = "/related_first/{id}")
    public String related_first(Model model, HttpSession session, @PathVariable(value = "id") int id, final RedirectAttributes redirectAttributes,@RequestParam(defaultValue = "0")int page){
        UserDO user=(UserDO)session.getAttribute("user");
        String first_name = firstLevelRiskDAO.findById(id).getFirstLevelRiskName();
        System.out.println(first_name);
        Sort sort=new Sort(Sort.Direction.ASC,"id");
        Pageable pageable = new PageRequest(page,5,sort);
        model.addAttribute("risk_library_related",riskEventLibraryDAO.findByFirstLevelRiskrelated(first_name,user.getUserCompany(),pageable));
        model.addAttribute("Total_page",firstLevelRiskDAO.findByPage("金融市场","已发布",pageable).getTotalPages());
        model.addAttribute("Total_elements",firstLevelRiskDAO.findByPage("金融市场","已发布",pageable).getTotalPages());
        model.addAttribute("current_elements",page);
        model.addAttribute("first_name",first_name);
        return "risk_library_risk_related";


}
    @RequestMapping(value = "/related_second/{id}")
    public String related_second(Model model, HttpSession session, @PathVariable(value = "id") int id, final RedirectAttributes redirectAttributes,@RequestParam(defaultValue = "0")int page){
        UserDO user=(UserDO)session.getAttribute("user");
        String second_name = secondLevelRiskDAO.findById(id).getSecondLevelRiskName();
        System.out.println(second_name);
        Sort sort=new Sort(Sort.Direction.ASC,"id");
        Pageable pageable = new PageRequest(page,5,sort);
        model.addAttribute("risk_library_related",riskEventLibraryDAO.findByFirstLevelRiskrelated(second_name,user.getUserCompany(),pageable));
        model.addAttribute("Total_page",riskEventLibraryDAO.findByFirstLevelRiskrelated(second_name,user.getUserCompany(),pageable).getTotalPages());
        model.addAttribute("Total_elements",riskEventLibraryDAO.findByFirstLevelRiskrelated(second_name,user.getUserCompany(),pageable).getTotalPages());
        model.addAttribute("current_elements",page);
        model.addAttribute("first_name",second_name);
        return "risk_library_risk_related";


    }
    @RequestMapping(value = "/related_third/{id}")
    public String related_third(Model model, HttpSession session, @PathVariable(value = "id") int id, final RedirectAttributes redirectAttributes,@RequestParam(defaultValue = "0")int page){
        UserDO user=(UserDO)session.getAttribute("user");
        String third_name = thirdLevelRiskDAO.findById(id).getThirdLevelRiskName();
        System.out.println(third_name);
        Sort sort=new Sort(Sort.Direction.ASC,"id");
        Pageable pageable = new PageRequest(page,5,sort);
        model.addAttribute("risk_library_related",riskEventLibraryDAO.findByThirdLevelRiskrelated(third_name,user.getUserCompany(),pageable));
        model.addAttribute("Total_page",riskEventLibraryDAO.findByThirdLevelRiskrelated(third_name,user.getUserCompany(),pageable).getTotalPages());
        model.addAttribute("Total_elements",riskEventLibraryDAO.findByThirdLevelRiskrelated(third_name,user.getUserCompany(),pageable).getTotalPages());
        model.addAttribute("current_elements",page);
        model.addAttribute("first_name",third_name);
        return "risk_library_risk_related";


    }
    @RequestMapping(value = "/related_fourth/{id}")
    public String related_fourth(Model model, HttpSession session, @PathVariable(value = "id") int id, final RedirectAttributes redirectAttributes,@RequestParam(defaultValue = "0")int page){
        UserDO user=(UserDO)session.getAttribute("user");
        String fourth_name = fourthLevelRiskDAO.findById(id).getFourthLevelRiskName();
        System.out.println(fourth_name);
        Sort sort=new Sort(Sort.Direction.ASC,"id");
        Pageable pageable = new PageRequest(page,5,sort);
        model.addAttribute("risk_library_related",riskEventLibraryDAO.findByFourthLevelRiskrelated(fourth_name,user.getUserCompany(),pageable));
        model.addAttribute("Total_page",riskEventLibraryDAO.findByFourthLevelRiskrelated(fourth_name,user.getUserCompany(),pageable).getTotalPages());
        model.addAttribute("Total_elements",riskEventLibraryDAO.findByFourthLevelRiskrelated(fourth_name,user.getUserCompany(),pageable).getTotalPages());
        model.addAttribute("current_elements",page);
        model.addAttribute("first_name",fourth_name);
        return "risk_library_risk_related";


    }

}
