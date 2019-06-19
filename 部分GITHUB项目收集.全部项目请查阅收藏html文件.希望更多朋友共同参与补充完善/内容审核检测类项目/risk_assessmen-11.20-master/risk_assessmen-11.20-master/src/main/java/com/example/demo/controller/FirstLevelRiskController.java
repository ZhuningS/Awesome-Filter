package com.example.demo.controller;

import com.example.demo.dao.*;
import com.example.demo.pojo.*;
import net.sf.json.JSONObject;
import org.apache.poi.hssf.usermodel.*;
import org.apache.poi.ss.usermodel.Row;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.data.domain.*;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

@Controller
@EnableAutoConfiguration
@RequestMapping(value = "/firstlevel")
public class FirstLevelRiskController {
    @Autowired
    private FirstLevelRiskDAO firstLevelRiskDAO;
    @Autowired
    private CompanyDAO companyDAO;
    @Autowired
    private SecondLevelRiskDAO secondLevelRiskDAO;
    @Autowired
    private ThirdLevelRiskDAO thirdLevelRiskDAO;
    @Autowired
    private FourthLevelRiskDAO fourthLevelRiskDAO;
    @Autowired
    private RiskEventLibraryDAO riskEventLibraryDAO;
    @Autowired
    private UserDAO userDAO;
    @Autowired
    private UserPermissionDAO userPermissionDAO;
    @Autowired
    private RulesRegulationsDAO rulesRegulationsDAO;
    @Autowired
    private RiskDefinationDAO riskDefinationDAO;
    @RequestMapping(value = "/risk_type")
    public String risk_type(Model model,HttpSession session){
        UserDO user=(UserDO)session.getAttribute("user");
        return "risk_type";
    }
    @RequestMapping(value = "/list_Financial_thematic/{status}")
    public String list_Financial_thematic(Model model,HttpSession session,@RequestParam(defaultValue = "0")int page,@PathVariable(value = "status") String status){
        UserDO user=(UserDO)session.getAttribute("user");
        FirstLevelRiskDO firstLevelRiskDO = new FirstLevelRiskDO();
        Sort sort=new Sort(Sort.Direction.ASC,"id");
        Pageable pageable = new PageRequest(page,5,sort);
        model.addAttribute("fo",firstLevelRiskDO);
        model.addAttribute("list_Financial_thematic",firstLevelRiskDAO.findByPage("金融市场",status,pageable));
        model.addAttribute("Total_page",firstLevelRiskDAO.findByPage("金融市场",status,pageable).getTotalPages());
        model.addAttribute("Total_elements",firstLevelRiskDAO.findByPage("金融市场",status,pageable).getTotalPages());
        model.addAttribute("current_elements",page);
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        model.addAttribute("status",status);
        return "list_Financial_thematic";
    }

    @RequestMapping(value = "/list_Enterprise_strategy/{status}")
    public String list_Enterprise_strategy(Model model,HttpSession session,@RequestParam(defaultValue = "0")int page,@PathVariable(value = "status")String status){
        UserDO user=(UserDO)session.getAttribute("user");
        FirstLevelRiskDO firstLevelRiskDO = new FirstLevelRiskDO();
        Sort sort=new Sort(Sort.Direction.ASC,"id");
        Pageable pageable = new PageRequest(page,5,sort);
        model.addAttribute("fo",firstLevelRiskDO);
        model.addAttribute("list_Enterprise_strategy",firstLevelRiskDAO.findByPage("企业战略",status,pageable));
        model.addAttribute("Total_page",firstLevelRiskDAO.findByPage("企业战略",status,pageable).getTotalPages());
        model.addAttribute("Total_elements",firstLevelRiskDAO.findByPage("企业战略",status,pageable).getTotalPages());
        model.addAttribute("current_elements",page);
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        return "list_Enterprise_strategy";
    }
    @RequestMapping(value = "/list_Enterprise_system/{status}")
    public String list_Enterprise_system(Model model,HttpSession session,@RequestParam(defaultValue = "0")int page,@PathVariable(value = "status")String status){
        UserDO user=(UserDO)session.getAttribute("user");
        FirstLevelRiskDO firstLevelRiskDO = new FirstLevelRiskDO();
        Sort sort=new Sort(Sort.Direction.ASC,"id");
        Pageable pageable = new PageRequest(page,5,sort);
        model.addAttribute("fo",firstLevelRiskDO);
        model.addAttribute("list_Enterprise_system",firstLevelRiskDAO.findByPage("企业制度",status,pageable));
        model.addAttribute("Total_page",firstLevelRiskDAO.findByPage("企业制度",status,pageable).getTotalPages());
        model.addAttribute("Total_elements",firstLevelRiskDAO.findByPage("企业制度",status,pageable).getTotalPages());
        model.addAttribute("current_elements",page);
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        return "list_Enterprise_system";
    }
   @RequestMapping(value = "/list/{id}/{status}",produces="text/plain;charset=UTF-8")
   public String list_id_type(Model model,HttpSession session,@PathVariable(value = "id") int id,@RequestParam(defaultValue = "0")int page,@PathVariable(value = "status")String status){
       UserDO user=(UserDO)session.getAttribute("user");
        String type=firstLevelRiskDAO.findById(id).getFirstLevelTopic();
        String name=firstLevelRiskDAO.findById(id).getFirstLevelRiskName();
       FirstLevelRiskDO firstLevelRiskDO = new FirstLevelRiskDO();
       model.addAttribute("fo",firstLevelRiskDO);
       Sort sort=new Sort(Sort.Direction.ASC,"id");
       Pageable pageable = new PageRequest(page,5,sort);
       model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
       model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
       model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
       model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
       model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
       model.addAttribute("project_application",firstLevelRiskDAO.findById(id).getFirstLevelRiskApplication());
       if(status.equals("ing")){
           status="审批中";
       }else if (status.equals("review_pass")){
           status="审批通过";
       }else if (status.equals("review_failure")){
           status="审批失败";
       }else if (status.equals("published")){
           status="已发布";
       }
       model.addAttribute("status",status);
        if(type.equals("金融市场")){
            model.addAttribute("list_Financial_thematic",firstLevelRiskDAO.findByfirstLevelRiskPerson_firstLevelRiskName(name,status,pageable));
            model.addAttribute("Total_page",firstLevelRiskDAO.findByfirstLevelRiskPerson_firstLevelRiskName(name,status,pageable).getTotalPages());
            model.addAttribute("Total_elements",firstLevelRiskDAO.findByfirstLevelRiskPerson_firstLevelRiskName(name,status,pageable).getTotalPages());
            model.addAttribute("current_elements",page);
            return "list_Financial_thematic";
        }else if(type.equals("企业制度")){
            model.addAttribute("list_Enterprise_system",firstLevelRiskDAO.findByfirstLevelRiskPerson_firstLevelRiskName(name,status,pageable));
            model.addAttribute("Total_page",firstLevelRiskDAO.findByfirstLevelRiskPerson_firstLevelRiskName(name,status,pageable).getTotalPages());
            model.addAttribute("Total_elements",firstLevelRiskDAO.findByfirstLevelRiskPerson_firstLevelRiskName(name,status,pageable).getTotalPages());
            model.addAttribute("current_elements",page);
            return "list_Enterprise_system";
        }else if(type.equals("企业战略")){
            model.addAttribute("list_Enterprise_strategy",firstLevelRiskDAO.findByfirstLevelRiskPerson_firstLevelRiskName(name,status,pageable));
            model.addAttribute("Total_page",firstLevelRiskDAO.findByfirstLevelRiskPerson_firstLevelRiskName(name,status,pageable).getTotalPages());
            model.addAttribute("Total_elements",firstLevelRiskDAO.findByfirstLevelRiskPerson_firstLevelRiskName(name,status,pageable).getTotalPages());
            model.addAttribute("current_elements",page);
            return "list_Enterprise_strategy";
        }
        return null;
   }
    @RequestMapping(value = "/add/{type}")
    public String add(Model model, @ModelAttribute(value = "fo") FirstLevelRiskDO firstLevelRiskDO, HttpSession session,@PathVariable(value = "type") String type){
        UserDO user=(UserDO)session.getAttribute("user");
        Date date = new Date();
        Timestamp nousedate = new Timestamp(date.getTime());
        String firstLevelRiskCode=firstLevelRiskDO.getFirstLevelRiskCode();
        String firstLevelRiskName=firstLevelRiskDO.getFirstLevelRiskName();
        firstLevelRiskDO.setId(0);
        List<FirstLevelRiskDO> firstLevelRiskDOS=firstLevelRiskDAO.findAll();
        for (FirstLevelRiskDO firstLevelRiskDO1 :firstLevelRiskDOS){
            String first_name_standard = firstLevelRiskDO1.getFirstLevelRiskName();
            String first_riskcode_standard =firstLevelRiskDO1.getFirstLevelRiskCode();
            if(first_name_standard.equals(firstLevelRiskName) || first_riskcode_standard.equals(firstLevelRiskCode)){
                FirstLevelRiskDO firstLevelRiskDO2 = new FirstLevelRiskDO();
                model.addAttribute("fo",firstLevelRiskDO2);
                model.addAttribute("add_success",0);

                CompanyDO companyDO=new CompanyDO();
                model.addAttribute("co",companyDO);
                UserDO userDO=new UserDO();
                model.addAttribute("uo",userDO);
                model.addAttribute("user",userDAO.findAll());


                model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
                model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
                model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
                model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
                model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
                if(type.equals("金融市场")){
                    model.addAttribute("list_Financial_thematic",firstLevelRiskDAO.findByFirstLevelTopic("金融市场"));
                    return "list_Financial_thematic";
                }else if(type.equals("企业战略")){
                    model.addAttribute("list_Enterprise_strategy",firstLevelRiskDAO.findByFirstLevelTopic("企业战略"));
                    return "list_Enterprise_strategy";
                }else if(type.equals("企业制度")){
                    model.addAttribute("list_Enterprise_system",firstLevelRiskDAO.findByFirstLevelTopic("企业制度"));
                    return "list_Enterprise_system";
                }
            }
        }
        firstLevelRiskDO.setFirstLevelRiskCode(firstLevelRiskDO.getFirstLevelRiskCode());
        firstLevelRiskDO.setFirstLevelRiskName(firstLevelRiskDO.getFirstLevelRiskName());
        firstLevelRiskDO.setFirstLevelRiskApplication(user.getWorkerName());
        firstLevelRiskDO.setFirstLevelRiskDate(nousedate);
        firstLevelRiskDO.setFirstLevelRiskDepartment(user.getDepartment());
        firstLevelRiskDO.setFirstLevelRiskGroup(user.getUserGroup());
        firstLevelRiskDO.setFirstLevelRiskStatus("待审批");
        firstLevelRiskDO.setFirstLevelRiskCompany("未分配");
        if(type.equals("金融市场")){
            firstLevelRiskDO.setFirstLevelTopic("金融市场");
        }else if(type.equals("企业战略")){
            firstLevelRiskDO.setFirstLevelTopic("企业战略");
        }else if(type.equals("企业制度")){
            firstLevelRiskDO.setFirstLevelTopic("企业制度");
        }
        firstLevelRiskDAO.save(firstLevelRiskDO);
        model.addAttribute("company",companyDAO.findAll());
        FirstLevelRiskDO firstLevelRiskDO1 = new FirstLevelRiskDO();
        model.addAttribute("fo",firstLevelRiskDO1);
        model.addAttribute("add_success",1);
        model.addAttribute("first_name",firstLevelRiskName);
        CompanyDO companyDO=new CompanyDO();
        model.addAttribute("co",companyDO);
        UserDO userDO=new UserDO();
        model.addAttribute("uo",userDO);
        model.addAttribute("user",userDAO.findAll());


        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        if(type.equals("金融市场")){
            model.addAttribute("list_Financial_thematic",firstLevelRiskDAO.findByFirstLevelTopic("金融市场"));
            return "list_Financial_thematic";
        }else if(type.equals("企业战略")){
            model.addAttribute("list_Enterprise_strategy",firstLevelRiskDAO.findByFirstLevelTopic("企业战略"));
            return "list_Enterprise_strategy";
        }else if(type.equals("企业制度")){
            model.addAttribute("list_Enterprise_system",firstLevelRiskDAO.findByFirstLevelTopic("企业制度"));
            return "list_Enterprise_system";
        }
        return null;
    }
    @RequestMapping(value = "/add_group")
    public String add_group(Model model, @ModelAttribute(value = "fo") FirstLevelRiskDO firstLevelRiskDO, HttpSession session){
        UserDO user=(UserDO)session.getAttribute("user");
        Date date = new Date();
        Timestamp nousedate = new Timestamp(date.getTime());
        String firstLevelRiskCode=firstLevelRiskDO.getFirstLevelRiskCode();
        String firstLevelRiskName=firstLevelRiskDO.getFirstLevelRiskName();
        firstLevelRiskDO.setId(0);
        List<FirstLevelRiskDO> firstLevelRiskDOS=firstLevelRiskDAO.findAll();
        for (FirstLevelRiskDO firstLevelRiskDO1 :firstLevelRiskDOS){
            String first_name_standard = firstLevelRiskDO1.getFirstLevelRiskName();
            String first_riskcode_standard =firstLevelRiskDO1.getFirstLevelRiskCode();
            if(first_name_standard.equals(firstLevelRiskName) || first_riskcode_standard.equals(firstLevelRiskCode)){
                FirstLevelRiskDO firstLevelRiskDO2 = new FirstLevelRiskDO();
                model.addAttribute("fo",firstLevelRiskDO2);
                model.addAttribute("add_success",0);

                CompanyDO companyDO=new CompanyDO();
                model.addAttribute("co",companyDO);
                UserDO userDO=new UserDO();
                model.addAttribute("uo",userDO);
                model.addAttribute("user",userDAO.findAll());

                model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
                model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
                model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
                model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
                model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
               return "project_allocation";
            }
        }
        firstLevelRiskDO.setFirstLevelRiskCode(firstLevelRiskDO.getFirstLevelRiskCode());
        firstLevelRiskDO.setFirstLevelRiskName(firstLevelRiskDO.getFirstLevelRiskName());
        firstLevelRiskDO.setFirstLevelRiskApplication(user.getWorkerName());
        firstLevelRiskDO.setFirstLevelRiskDate(nousedate);
        firstLevelRiskDO.setFirstLevelRiskDepartment(user.getDepartment());
        firstLevelRiskDO.setFirstLevelRiskGroup(user.getUserGroup());
        firstLevelRiskDO.setFirstLevelRiskStatus("刚创建");
        firstLevelRiskDO.setFirstLevelRiskCompany("未分配");
        firstLevelRiskDO.setFirstLevelRiskPerson("未分配");
        firstLevelRiskDO.setFirstLevelTopic(firstLevelRiskDO.getFirstLevelTopic());
        firstLevelRiskDAO.save(firstLevelRiskDO);
        model.addAttribute("company",companyDAO.findAll());
        FirstLevelRiskDO firstLevelRiskDO1 = new FirstLevelRiskDO();
        model.addAttribute("fo",firstLevelRiskDO1);
        model.addAttribute("add_success",1);
        model.addAttribute("first_name",firstLevelRiskName);
        CompanyDO companyDO=new CompanyDO();
        model.addAttribute("co",companyDO);
        UserDO userDO=new UserDO();
        model.addAttribute("uo",userDO);
        model.addAttribute("user",userDAO.findByDepartment("风控部"));
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        model.addAttribute("first_ready",firstLevelRiskDAO.findBycompany("未分配"));
        return "project_allocation";


    }

    @RequestMapping(value = "/distribute", method = RequestMethod.POST,produces="text/plain;charset=UTF-8")
    @ResponseBody
    public  void distribute(Model model, @RequestBody JSONObject jsonObject, HttpSession session){
        String[] a =new String[10];
        String[] b =new String[10];
        int i=0;
        int n=0;
        Iterator iterator = jsonObject.keys();
        while (iterator.hasNext()) {
            String key = (String) iterator.next();
            Object value = jsonObject.getString(key);
            String value_final = value.toString();
            if(key.substring(0,1).equals("a")){
                b[i]=value_final;
                System.out.println("++++++++++++++++++++++++++++"+i);
                System.out.println(b[i]);
                i=i+1;
            }else {
                a[n]=value_final;
//                System.out.println(a[n]);
                n=n+1;
            }
        }
        String person="";
        int company_id=0;
      for(int c=0;c<n;c++){
            for(int d=0;d<i;d++)
            {
                System.out.println(b.length);
                System.out.println("-------------"+d);
                String e=b[d];
                System.out.println(e);
                company_id=Integer.parseInt(e);
                person=person+userDAO.getById(company_id).getWorkerName();
            }
            int id=Integer.parseInt(a[c]);
            FirstLevelRiskDO firstLevelRiskDO=firstLevelRiskDAO.findById(id);
            firstLevelRiskDO.setFirstLevelRiskCompany(userDAO.getById(company_id).getUserCompany());
            firstLevelRiskDO.setFirstLevelRiskPerson(person);
            firstLevelRiskDAO.save(firstLevelRiskDO);
            UserDO userDO=userDAO.getById(company_id);
            userDO.setUserNewProjectCount(n);
            userDAO.save(userDO);
      }
    }
    @RequestMapping(value = "/accept/{id}")
    public String accept( @PathVariable(value = "id") int id, final RedirectAttributes redirectAttributes){
        String type="new_project";
        FirstLevelRiskDO firstLevelRiskDO =firstLevelRiskDAO.findById(id);
        firstLevelRiskDO.setFirstLevelRiskStatus("待审批");
        firstLevelRiskDAO.save(firstLevelRiskDO);
        redirectAttributes.addFlashAttribute("accept",1);
        redirectAttributes.addFlashAttribute("first_level_name",firstLevelRiskDO.getFirstLevelRiskName());
        return "redirect:/main/notification_project/"+type;
    }
    @RequestMapping(value = "/refuse/{id}")
    public String refuse( @PathVariable(value = "id") int id, final RedirectAttributes redirectAttributes){
        String type="new_project";
        FirstLevelRiskDO firstLevelRiskDO =firstLevelRiskDAO.findById(id);
        firstLevelRiskDO.setFirstLevelRiskStatus("未分配");
        firstLevelRiskDAO.save(firstLevelRiskDO);
        redirectAttributes.addFlashAttribute("refuse",1);
        redirectAttributes.addFlashAttribute("first_level_name",firstLevelRiskDO.getFirstLevelRiskName());
        return "redirect:/main/notification_project/"+type;
    }
   @RequestMapping(value = "/review_ing/{id}")
    public String review_ing( final RedirectAttributes redirectAttributes ,Model model, HttpSession session, @PathVariable(value = "id") int id){
      FirstLevelRiskDO firstLevelRiskDO =  firstLevelRiskDAO.findById(id);
      firstLevelRiskDO.setFirstLevelRiskStatus("审批中");
      firstLevelRiskDAO.save(firstLevelRiskDO);
      redirectAttributes.addFlashAttribute("review_ing",1);
      String status="ing";
      return "redirect:/firstlevel/list/"+id+"/"+status;

   }
    @RequestMapping(value = "/review_pass")
    public String review_pass(final RedirectAttributes redirectAttributes,Model model, HttpSession session,@RequestParam(value = "comment_id") int id,@RequestParam(value = "comment") String comment){
     FirstLevelRiskDO firstLevelRiskDO =  firstLevelRiskDAO.findById(id);
     firstLevelRiskDO.setFirstLevelRiskStatus("审批通过");
     firstLevelRiskDAO.save(firstLevelRiskDO);
     redirectAttributes.addFlashAttribute("review_pass",1);
        String status="review_pass";
     return "redirect:/firstlevel/list/"+id+"/"+status;
    }
    @RequestMapping(value = "/review_failure")
    public String review_failure(final RedirectAttributes redirectAttributes,Model model, HttpSession session,@RequestParam(value = "comment_id") int id,@RequestParam(value = "comment") String comment){
        FirstLevelRiskDO firstLevelRiskDO =  firstLevelRiskDAO.findById(id);
        firstLevelRiskDO.setFirstLevelRiskStatus("审批失败");
        firstLevelRiskDAO.save(firstLevelRiskDO);
        redirectAttributes.addFlashAttribute("review_pass",0);
        String status="review_failure";
        return "redirect:/firstlevel/list/"+id+"/"+status;
    }
    @RequestMapping(value = "/review_publish/{id}")
    public String review_publish(Model model, HttpSession session, @PathVariable(value = "id") int id){
        FirstLevelRiskDO firstLevelRiskDO= firstLevelRiskDAO.findById(id);
        firstLevelRiskDO.setFirstLevelRiskStatus("已发布");
        firstLevelRiskDAO.save(firstLevelRiskDO);
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
        for(FirstLevelRiskDO firstLevelRiskDO1:firstLevelRiskDAO.findBycompany("岳阳林纸")) {
            firstLevelRiskDOS.add(firstLevelRiskDO1);
        }
        for(FirstLevelRiskDO firstLevelRiskDO1:firstLevelRiskDAO.findBycompany("红塔仁恒")) {
            firstLevelRiskDOS.add(firstLevelRiskDO1);
        }
        for(FirstLevelRiskDO firstLevelRiskDO1:firstLevelRiskDAO.findBycompany("凯胜园林")) {
            firstLevelRiskDOS.add(firstLevelRiskDO1);
        }
        for(FirstLevelRiskDO firstLevelRiskDO1:firstLevelRiskDAO.findBycompany("冠豪高新")) {
            firstLevelRiskDOS.add(firstLevelRiskDO1);
        }
        FirstLevelRiskDO firstLevelRiskDO1=new FirstLevelRiskDO();
        model.addAttribute("fo",firstLevelRiskDO1);
        model.addAttribute("first_ready",firstLevelRiskDAO.findBycompany("未分配"));
        model.addAttribute("first_finish",firstLevelRiskDOS);
        model.addAttribute("user",userDOList);
        model.addAttribute("publish_success",1);
        return "project_allocation";
    }
    @RequestMapping(value = "/publish_ing/{id}")
    public String publish_ing(final RedirectAttributes redirectAttributes,HttpSession session,@PathVariable(value = "id") int id){
        FirstLevelRiskDO firstLevelRiskDO=firstLevelRiskDAO.findById(id);

        firstLevelRiskDO.setFirstLevelRiskStatus("已发布");
        firstLevelRiskDAO.save(firstLevelRiskDO);
        redirectAttributes.addFlashAttribute("publish_success",1);
        String status="published";
        return "redirect:/firstlevel/list/"+id+"/"+status;
    }
    @RequestMapping(value = "/review_cancle/{id}")
    public String review_cancle(Model model, HttpSession session, @PathVariable(value = "id") int id){
        FirstLevelRiskDO firstLevelRiskDO= firstLevelRiskDAO.findById(id);
        firstLevelRiskDO.setFirstLevelRiskStatus("审批通过");
        firstLevelRiskDAO.save(firstLevelRiskDO);
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
        for(FirstLevelRiskDO firstLevelRiskDO1:firstLevelRiskDAO.findBycompany("岳阳林纸")) {
            firstLevelRiskDOS.add(firstLevelRiskDO1);
        }
        for(FirstLevelRiskDO firstLevelRiskDO1:firstLevelRiskDAO.findBycompany("红塔仁恒")) {
            firstLevelRiskDOS.add(firstLevelRiskDO1);
        }
        for(FirstLevelRiskDO firstLevelRiskDO1:firstLevelRiskDAO.findBycompany("凯胜园林")) {
            firstLevelRiskDOS.add(firstLevelRiskDO1);
        }
        for(FirstLevelRiskDO firstLevelRiskDO1:firstLevelRiskDAO.findBycompany("冠豪高新")) {
            firstLevelRiskDOS.add(firstLevelRiskDO1);
        }
        FirstLevelRiskDO firstLevelRiskDO1=new FirstLevelRiskDO();
        model.addAttribute("fo",firstLevelRiskDO1);
        model.addAttribute("first_ready",firstLevelRiskDAO.findBycompany("未分配"));
        model.addAttribute("first_finish",firstLevelRiskDOS);
        model.addAttribute("user",userDOList);
        model.addAttribute("cancle_success",1);
        return "project_allocation";
    }
    @RequestMapping(value = "/download/{id}",produces="text/plain;charset=UTF-8")
    public  String download(HttpServletResponse response, @PathVariable(value = "id") int id) throws IOException {
        String firstmenuname =  firstLevelRiskDAO.findById(id).getFirstLevelRiskName();
        FirstLevelRiskDO firstLevelRiskDO = firstLevelRiskDAO.findById(id);
        List<SecondLevelRiskDO> secondLevelRiskDO = secondLevelRiskDAO.findByFirstLevelRiskCode(firstLevelRiskDO.getFirstLevelRiskCode());
        List<ThirdLevelRiskDO> thirdLevelRiskDO = thirdLevelRiskDAO.findByFirstLevelRiskCode(firstLevelRiskDO.getFirstLevelRiskCode());
        List<FourthLevelRiskDO> fourthLevelRiskDO=fourthLevelRiskDAO.findByFirstLevelRiskCode(firstLevelRiskDO.getFirstLevelRiskCode());
        System.out.println(firstmenuname);
        String fileName=firstmenuname+".xls";
        HSSFWorkbook workbook = new HSSFWorkbook();
        HSSFSheet sheet = workbook.createSheet("信息表");
        String[] headers = { "一级风险", "一级风险名称", "二级风险编号", "二级风险名称","二级风险描述","三级风险编号","三级风险名称","三级风险描述","四风险编号","四级风险名称","四级风险描述"};
        Row row0=sheet.createRow(0);
        for(int i=0;i<headers.length;i++){
            HSSFCell cell = (HSSFCell) row0.createCell(i);
            HSSFRichTextString text = new HSSFRichTextString(headers[i]);
            cell.setCellValue(text);
        }
        int rowNum = 1;
        for (SecondLevelRiskDO secondLevelRiskDO1 :secondLevelRiskDO) {
            for (ThirdLevelRiskDO thirdLevelRiskDO1 :thirdLevelRiskDO){
                if(thirdLevelRiskDO1.getSecondLevelRiskCode().equals(secondLevelRiskDO1.getSecondLevelRiskCode())){
                    HSSFRow row1 = sheet.createRow(rowNum);
                    row1.createCell(0).setCellValue(firstmenuname);
                    row1.createCell(1).setCellValue(firstLevelRiskDO.getFirstLevelRiskCode());
                    row1.createCell(2).setCellValue(secondLevelRiskDO1.getSecondLevelRiskCode());
                    row1.createCell(3).setCellValue(secondLevelRiskDO1.getSecondLevelRiskName());
                    row1.createCell(4).setCellValue(secondLevelRiskDO1.getSecondLevelRiskDescription());
                    row1.createCell(5).setCellValue(thirdLevelRiskDO1.getThirdLevelRiskCode());
                    row1.createCell(6).setCellValue(thirdLevelRiskDO1.getThirdLevelRiskName());
                    row1.createCell(7).setCellValue(thirdLevelRiskDO1.getThirdLevelRiskDescription());
                    for (FourthLevelRiskDO fourthLevelRiskDO1 :fourthLevelRiskDO){
                        if (fourthLevelRiskDO1.getThirdLevelRiskCode().equals(thirdLevelRiskDO1.getThirdLevelRiskCode())){

                            row1.createCell(8).setCellValue(fourthLevelRiskDO1.getFourthLevelRiskCode());
                            row1.createCell(9).setCellValue(fourthLevelRiskDO1.getFourthLevelRiskName());
                            row1.createCell(10).setCellValue(fourthLevelRiskDO1.getFourthLevelRiskDescription());

                        }
                }
                    rowNum++;
                }
            }


        }
        response.setContentType("application/octet-stream;charset=utf-8");
        response.addHeader("Content-Disposition", "attachment;fileName=" + new String( fileName.getBytes( "gb2312" ), "ISO8859-1" ));
        response.setCharacterEncoding("utf-8");
        response.flushBuffer();
        workbook.write(response.getOutputStream());
        return  null;
    }
    @RequestMapping(value = "del/{id}")
    public String del(Model model,HttpSession session,@PathVariable(value = "id") int id){
        UserDO user=(UserDO)session.getAttribute("user");
        String type=firstLevelRiskDAO.findById(id).getFirstLevelTopic();
        String firstriskcode=firstLevelRiskDAO.findById(id).getFirstLevelRiskCode();
        fourthLevelRiskDAO.deleteBySecondLevelRiskCode(firstriskcode);
        thirdLevelRiskDAO.deleteBySecondLevelRiskCode(firstriskcode);
        secondLevelRiskDAO.deleteById(id);
        firstLevelRiskDAO.deleteById(id);
        FirstLevelRiskDO firstLevelRiskDO2 = new FirstLevelRiskDO();
        model.addAttribute("fo",firstLevelRiskDO2);
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        if(type.equals("金融市场")){
            model.addAttribute("list_Financial_thematic",firstLevelRiskDAO.findByFirstLevelTopic("金融市场"));
            return "list_Financial_thematic";
        }else if(type.equals("企业战略")){
            model.addAttribute("list_Enterprise_strategy",firstLevelRiskDAO.findByFirstLevelTopic("企业战略"));
            return "list_Enterprise_strategy";
        }else if(type.equals("企业制度")){
            model.addAttribute("list_Enterprise_system",firstLevelRiskDAO.findByFirstLevelTopic("企业制度"));
            return "list_Enterprise_system";
        }
        return "null";
    }
    @RequestMapping(value = "del_group/{id}")
    public String del_group(Model model,HttpSession session,@PathVariable(value = "id") int id){
        UserDO user=(UserDO)session.getAttribute("user");
        String type=firstLevelRiskDAO.findById(id).getFirstLevelTopic();
        String firstriskcode=firstLevelRiskDAO.findById(id).getFirstLevelRiskCode();
        fourthLevelRiskDAO.deleteBySecondLevelRiskCode(firstriskcode);
        thirdLevelRiskDAO.deleteBySecondLevelRiskCode(firstriskcode);
        secondLevelRiskDAO.deleteById(id);
        firstLevelRiskDAO.deleteById(id);
        FirstLevelRiskDO firstLevelRiskDO2 = new FirstLevelRiskDO();
        model.addAttribute("fo",firstLevelRiskDO2);
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        model.addAttribute("first_ready",firstLevelRiskDAO.findBycompany("未分配"));
        model.addAttribute("del_success",1);
        return "project_allocation";
    }
    @RequestMapping(value = "/edit/{id}")
    public String edit(Model model, HttpSession session, @PathVariable int id){
        UserDO user=(UserDO)session.getAttribute("user");
        FirstLevelRiskDO firstLevelRiskDO=firstLevelRiskDAO.findById(id);
        String firstriskcode=firstLevelRiskDO.getFirstLevelRiskCode();
        SecondLevelRiskDO secondLevelRiskDO =new SecondLevelRiskDO();
        model.addAttribute("so",secondLevelRiskDO);
        model.addAttribute("first_level",firstLevelRiskDAO.findByriskcode(firstriskcode));
        model.addAttribute("third_level",thirdLevelRiskDAO.findByFirstLevelRiskCode(firstriskcode));
        model.addAttribute("second_level",secondLevelRiskDAO.findByFirstLevelRiskCode(firstriskcode));
        model.addAttribute("ready_first_level",firstLevelRiskDAO.findBycompany("未分配"));
        model.addAttribute("fourth_level",fourthLevelRiskDAO.findByFirstLevelRiskCode(firstriskcode));
        model.addAttribute("company",companyDAO.findAll());
        model.addAttribute("fo",firstLevelRiskDO);
        ThirdLevelRiskDO thirdLevelRiskDO = new ThirdLevelRiskDO();
        model.addAttribute("to",thirdLevelRiskDO);
        FourthLevelRiskDO fourthLevelRiskDO=new FourthLevelRiskDO();
        model.addAttribute("fouo",fourthLevelRiskDO);
        model.addAttribute("first_edit_ing",1);
        model.addAttribute("sid",id);
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        return "list_all";

    }
    @RequestMapping(value = "/edit_group/{id}")
    public String edit_group(Model model, HttpSession session, @PathVariable int id){
        UserDO user=(UserDO)session.getAttribute("user");
        FirstLevelRiskDO firstLevelRiskDO=firstLevelRiskDAO.findById(id);
        model.addAttribute("first_edit_ing",1);
        model.addAttribute("id",id);
        model.addAttribute("fo",firstLevelRiskDO);
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        model.addAttribute("first_ready",firstLevelRiskDAO.findBycompany("未分配"));
        return "project_allocation";

    }
    @RequestMapping(value = "/update/{id}")
    public String second_level_update(Model model,HttpSession session,@ModelAttribute(value = "fo")FirstLevelRiskDO firstLevelRiskDO,@PathVariable(value = "id") int id){
        firstLevelRiskDAO.update(
                firstLevelRiskDO.getFirstLevelRiskCode(),
                firstLevelRiskDO.getFirstLevelRiskName(),
                id
        );
        UserDO user=(UserDO)session.getAttribute("user");
        Date date = new Date();
        Timestamp nousedate = new Timestamp(date.getTime());
        model.addAttribute("company",companyDAO.findAll());
        FirstLevelRiskDO firstLevelRiskDO1 = new FirstLevelRiskDO();
        model.addAttribute("fo",firstLevelRiskDO1);
        SecondLevelRiskDO secondLevelRiskDO1 = new SecondLevelRiskDO();
        model.addAttribute("so",secondLevelRiskDO1);
        ThirdLevelRiskDO thirdLevelRiskDO = new ThirdLevelRiskDO();
        model.addAttribute("to",thirdLevelRiskDO);
        model.addAttribute("first_level",firstLevelRiskDAO.findById(id));
        model.addAttribute("third_level",thirdLevelRiskDAO.findByFirstLevelRiskCode(firstLevelRiskDAO.findById(id).getFirstLevelRiskCode()));
        model.addAttribute("second_level",secondLevelRiskDAO.findByFirstLevelRiskCode(firstLevelRiskDAO.findById(id).getFirstLevelRiskCode()));
        model.addAttribute("ready_first_level",firstLevelRiskDAO.findBycompany("未分配"));
        model.addAttribute("fourth_level",fourthLevelRiskDAO.findByFirstLevelRiskCode(firstLevelRiskDAO.findById(id).getFirstLevelRiskCode()));
        FourthLevelRiskDO fourthLevelRiskDO=new FourthLevelRiskDO();
        model.addAttribute("fouo",fourthLevelRiskDO);
        model.addAttribute("first_edit_success",1);
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        return "list_all";
    }
    @RequestMapping(value = "/update_group/{id}")
    public String update_group(Model model,HttpSession session,@ModelAttribute(value = "fo")FirstLevelRiskDO firstLevelRiskDO,@PathVariable(value = "id") int id){
        firstLevelRiskDAO.update_group(
                firstLevelRiskDO.getFirstLevelRiskCode(),
                firstLevelRiskDO.getFirstLevelRiskName(),
                firstLevelRiskDO.getFirstLevelRiskDescription(),
                id
        );
        UserDO user=(UserDO)session.getAttribute("user");
        model.addAttribute("id",id);
        model.addAttribute("fo",firstLevelRiskDO);
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        model.addAttribute("first_ready",firstLevelRiskDAO.findBycompany("未分配"));
        model.addAttribute("first_update",1);
        return "project_allocation";
    }
    @RequestMapping(value = "/risk_list_all")
    public String risk_list_all(@PageableDefault(size = 6,sort = {"firstLevelRiskCode"},direction = Sort.Direction.ASC)Pageable pageable,Model model,HttpSession session,
                                @RequestParam(defaultValue = "0",value = "page2")int page2,@RequestParam(defaultValue = "1",value = "level")String level,
                                @RequestParam(defaultValue = "0",value = "page3")int page3,
                                @RequestParam(defaultValue = "0",value = "page4")int page4){
        UserDO userDO=(UserDO)session.getAttribute("user");
        FirstLevelRiskDO firstLevelRiskDO=new FirstLevelRiskDO();
        Page<FirstLevelRiskDO> firstLevelRiskDOS=firstLevelRiskDAO.findAllBypage("已发布",pageable);
        model.addAttribute("risk_list",firstLevelRiskDOS);
        model.addAttribute("Total_page",firstLevelRiskDOS.getTotalPages());
        model.addAttribute("Total_elements",firstLevelRiskDOS.getTotalElements());
        model.addAttribute("current_elements",pageable.getPageNumber());
        model.addAttribute("status","已发布");
        model.addAttribute("fo",firstLevelRiskDO);
        Sort sort=new Sort(Sort.Direction.ASC,"id");
        Pageable pageable2 = new PageRequest(page2,20,sort);
        Pageable pageable3 = new PageRequest(page3,20,sort);
        Pageable pageable4 = new PageRequest(page4,20,sort);
        SecondLevelRiskDO secondLevelRiskDO=new SecondLevelRiskDO();
        Page<SecondLevelRiskDO> secondLevelRiskDOS=secondLevelRiskDAO.findAll(pageable2);
        Page<ThirdLevelRiskDO> thirdLevelRiskDOS=thirdLevelRiskDAO.findAll(pageable3);
        Page<FourthLevelRiskDO> fourthLevelRiskDOS=fourthLevelRiskDAO.findAll(pageable4);
        model.addAttribute("list_second",secondLevelRiskDOS);
        model.addAttribute("Total_page2",secondLevelRiskDOS.getTotalPages());
        model.addAttribute("Total_elements2",secondLevelRiskDOS.getTotalElements());
        model.addAttribute("current_elements2",pageable2.getPageNumber());
        model.addAttribute("so",secondLevelRiskDO);
        ThirdLevelRiskDO thirdLevelRiskDO=new ThirdLevelRiskDO();
        model.addAttribute("list_third",thirdLevelRiskDOS);
        model.addAttribute("Total_page3",thirdLevelRiskDOS.getTotalPages());
        model.addAttribute("Total_elements3",thirdLevelRiskDOS.getTotalElements());
        model.addAttribute("current_elements3",pageable3.getPageNumber());
        model.addAttribute("to",thirdLevelRiskDO);
        FourthLevelRiskDO fourthLevelRiskDO=new FourthLevelRiskDO();
        model.addAttribute("list_fourth",fourthLevelRiskDOS);
        model.addAttribute("Total_page4",fourthLevelRiskDOS.getTotalPages());
        model.addAttribute("Total_elements4",fourthLevelRiskDOS.getTotalElements());
        model.addAttribute("current_elements4",pageable4.getPageNumber());
        model.addAttribute("fouo",fourthLevelRiskDO);
        model.addAttribute("level",level);
        if (page2>0){
            model.addAttribute("page2_plus",page2*20);
        }else {
            model.addAttribute("page2_plus",0);
        }
        if (page3>0){
            model.addAttribute("page3_plus",page3*20);
        }else {
            model.addAttribute("page3_plus",0);
        }
        if (page4>0){
            model.addAttribute("page4_plus",page4*20);
        }else {
            model.addAttribute("page4_plus",0);
        }
        return "risk_list";

    }
}
