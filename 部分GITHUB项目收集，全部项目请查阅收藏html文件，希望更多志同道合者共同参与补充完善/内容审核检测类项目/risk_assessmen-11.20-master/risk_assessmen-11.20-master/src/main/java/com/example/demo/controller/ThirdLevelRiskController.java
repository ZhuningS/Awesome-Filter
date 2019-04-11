package com.example.demo.controller;

import com.example.demo.dao.*;
import com.example.demo.pojo.*;
import com.example.demo.util.UploadUtil;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@Controller
@EnableAutoConfiguration
@RequestMapping(value = "/thirdlevel")

public class ThirdLevelRiskController {
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
    @RequestMapping(value = "/list_third/{id}/{risk_level}/{status}")
    public String list_Financial_thematic(@PageableDefault(size = 5,sort = {"thirdLevelRiskCode"},direction = Sort.Direction.ASC)Pageable pageable, Model model, HttpSession session, @PathVariable(value ="id") int id,@PathVariable(value = "risk_level") String risk_level,@PathVariable(value = "status") String status){
        UserDO user=(UserDO)session.getAttribute("user");
        String type="";
        ThirdLevelRiskDO thirdLevelRiskDO = new ThirdLevelRiskDO();
        model.addAttribute("to",thirdLevelRiskDO);
        model.addAttribute("id",id);
        model.addAttribute("risk_level",risk_level);

        if (risk_level.equals("1")){
            model.addAttribute("first_name",firstLevelRiskDAO.findById(id).getFirstLevelRiskName());
            model.addAttribute("second_name","");
            model.addAttribute("list_third",thirdLevelRiskDAO.findByPage_first(firstLevelRiskDAO.findById(id).getFirstLevelRiskCode(),pageable));
            model.addAttribute("Total_page",thirdLevelRiskDAO.findByPage_first(firstLevelRiskDAO.findById(id).getFirstLevelRiskCode(),pageable).getTotalPages());
            model.addAttribute("Total_elements",thirdLevelRiskDAO.findByPage_first(firstLevelRiskDAO.findById(id).getFirstLevelRiskCode(),pageable).getTotalElements());
            model.addAttribute("current_elements",pageable.getPageNumber());
             type=firstLevelRiskDAO.findById(id).getFirstLevelTopic();
        }else if(risk_level.equals("2")){
            model.addAttribute("first_name",firstLevelRiskDAO.findByriskcode(secondLevelRiskDAO.findById(id).getFirstLevelRiskCode()).getFirstLevelRiskName());
            model.addAttribute("second_name",secondLevelRiskDAO.findById(id).getSecondLevelRiskName());
            model.addAttribute("list_third",thirdLevelRiskDAO.findByPage(secondLevelRiskDAO.findById(id).getSecondLevelRiskCode(),pageable));
            model.addAttribute("Total_page",thirdLevelRiskDAO.findByPage(secondLevelRiskDAO.findById(id).getSecondLevelRiskCode(),pageable).getTotalPages());
            model.addAttribute("Total_elements",thirdLevelRiskDAO.findByPage(secondLevelRiskDAO.findById(id).getSecondLevelRiskCode(),pageable).getTotalElements());
            model.addAttribute("current_elements",pageable.getPageNumber());
            type=firstLevelRiskDAO.findByriskcode(secondLevelRiskDAO.findById(id).getFirstLevelRiskCode()).getFirstLevelTopic();
        }else if(risk_level.equals("3")){
            model.addAttribute("first_name",firstLevelRiskDAO.findByriskcode(thirdLevelRiskDAO.findById(id).getFirstLevelRiskCode()).getFirstLevelRiskName());
            model.addAttribute("second_name",secondLevelRiskDAO.findBySecondLevelRiskCode(thirdLevelRiskDAO.findById(id).getSecondLevelRiskCode()).getSecondLevelRiskName());
            model.addAttribute("list_third",thirdLevelRiskDAO.findByPage_thirdLevelRiskName(thirdLevelRiskDAO.findById(id).getThirdLevelRiskName(),pageable));
            model.addAttribute("Total_page",thirdLevelRiskDAO.findByPage_thirdLevelRiskName(thirdLevelRiskDAO.findById(id).getThirdLevelRiskName(),pageable).getTotalPages());
            model.addAttribute("Total_elements",thirdLevelRiskDAO.findByPage_thirdLevelRiskName(thirdLevelRiskDAO.findById(id).getThirdLevelRiskName(),pageable).getTotalElements());
            model.addAttribute("current_elements",pageable.getPageNumber());
            type=firstLevelRiskDAO.findByriskcode(thirdLevelRiskDAO.findById(id).getFirstLevelRiskCode()).getFirstLevelTopic();
        }
        if(status.equals("ready")){
            model.addAttribute("status","待审批");
        }else {
            model.addAttribute("status",status);
        }
        if(type.equals("金融市场")){
            return "list_Financial_thematic_third_level";
        }else if(type.equals("企业制度")){
            return "list_Enterprise_system_third_level";
        }else if(type.equals("企业战略")){
            return "list_Enterprise_strategy_third_level";
        }
            return null;
    }
    @RequestMapping(value = "/add/{id}")
    public String add(@PageableDefault(size = 5,sort = {"thirdLevelRiskCode"},direction = Sort.Direction.ASC)Pageable pageable,Model model, @ModelAttribute(value = "to")ThirdLevelRiskDO thirdLevelRiskDO, HttpSession session,@PathVariable(value = "id") int id){
        UserDO user=(UserDO)session.getAttribute("user");
        Date date = new Date();
        Timestamp nousedate = new Timestamp(date.getTime());
        thirdLevelRiskDO.setId(0);
        String thirdriskcode=thirdLevelRiskDO.getThirdLevelRiskCode();
        String thirdLevelRiskName=thirdLevelRiskDO.getThirdLevelRiskName();
        List<ThirdLevelRiskDO> thirdLevelRiskDOS = thirdLevelRiskDAO.findAll();
        String type = firstLevelRiskDAO.findByriskcode(secondLevelRiskDAO.findById(id).getFirstLevelRiskCode()).getFirstLevelTopic();
        for (ThirdLevelRiskDO thirdLevelRiskDO1:thirdLevelRiskDOS){
            String thirdLevelRiskCode_standard =thirdLevelRiskDO1.getThirdLevelRiskCode();
            String thirdLevelRiskName_standard = thirdLevelRiskDO1.getThirdLevelRiskName();
            if(thirdriskcode.equals(thirdLevelRiskCode_standard) || thirdLevelRiskName.equals(thirdLevelRiskName_standard)){

                ThirdLevelRiskDO thirdLevelRiskDO2 = new ThirdLevelRiskDO();
                model.addAttribute("to",thirdLevelRiskDO2);
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
                model.addAttribute("list_third",thirdLevelRiskDAO.findByPage(secondLevelRiskDAO.findById(id).getSecondLevelRiskCode(),pageable));
                model.addAttribute("Total_page",thirdLevelRiskDAO.findByPage(secondLevelRiskDAO.findById(id).getSecondLevelRiskCode(),pageable).getTotalPages());
                model.addAttribute("Total_elements",thirdLevelRiskDAO.findByPage(secondLevelRiskDAO.findById(id).getSecondLevelRiskCode(),pageable).getTotalElements());
                model.addAttribute("current_elements",pageable.getPageNumber());
                type=firstLevelRiskDAO.findByriskcode(secondLevelRiskDAO.findById(id).getFirstLevelRiskCode()).getFirstLevelTopic();
                if(type.equals("金融市场")){
                    return "list_Financial_thematic_third_level";
                }else if(type.equals("企业战略")){
                    return "list_Enterprise_strategy_third_level";
                }else if(type.equals("企业制度")){
                    return "list_Enterprise_system_third_level";
                }
            }
        }
        thirdLevelRiskDO.setThirdLevelRiskApplication(user.getWorkerName());
        thirdLevelRiskDO.setThirdLevelRiskCompany(user.getUserCompany());
        thirdLevelRiskDO.setThirdLevelRiskDate(nousedate);
        thirdLevelRiskDO.setThirdLevelRiskDepartment(user.getDepartment());
        thirdLevelRiskDO.setSecondLevelRiskCode(secondLevelRiskDAO.findById(id).getSecondLevelRiskCode());
        thirdLevelRiskDO.setFirstLevelRiskCode(firstLevelRiskDAO.findByriskcode(secondLevelRiskDAO.findById(id).getFirstLevelRiskCode()).getFirstLevelRiskCode());
        thirdLevelRiskDAO.save(thirdLevelRiskDO);
        ThirdLevelRiskDO thirdLevelRiskDO2 = new ThirdLevelRiskDO();
        model.addAttribute("to",thirdLevelRiskDO2);
        model.addAttribute("user",userDAO.findAll());

        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        model.addAttribute("ready_create_first_level",firstLevelRiskDAO.findBycompanyandstatus(user.getUserCompany(),"待创建"));
        model.addAttribute("list_third",thirdLevelRiskDAO.findByPage(secondLevelRiskDAO.findById(id).getSecondLevelRiskCode(),pageable));
        model.addAttribute("Total_page",thirdLevelRiskDAO.findByPage(secondLevelRiskDAO.findById(id).getSecondLevelRiskCode(),pageable).getTotalPages());
        model.addAttribute("Total_elements",thirdLevelRiskDAO.findByPage(secondLevelRiskDAO.findById(id).getSecondLevelRiskCode(),pageable).getTotalElements());
        model.addAttribute("current_elements",pageable.getPageNumber());
        type=firstLevelRiskDAO.findByriskcode(secondLevelRiskDAO.findById(id).getFirstLevelRiskCode()).getFirstLevelTopic();
        model.addAttribute("add_success",1);
        model.addAttribute("third_name",thirdLevelRiskDO.getThirdLevelRiskName());

        if(type.equals("金融市场")){
            return "list_Financial_thematic_third_level";
        }else if(type.equals("企业战略")){
            return "list_Enterprise_strategy_third_level";
        }else if(type.equals("企业制度")){
            return "list_Enterprise_system_third_level";
        }
        return null;
    }


    @RequestMapping(value = "/edit/{id}")
    public String edit(Model model, HttpSession session, @PathVariable int id, final RedirectAttributes redirectAttributes,@PageableDefault(size = 5,sort = {"thirdLevelRiskCode"},direction = Sort.Direction.ASC)Pageable pageable){
        ThirdLevelRiskDO thirdLevelRiskDO=thirdLevelRiskDAO.findById(id);
        int sid=secondLevelRiskDAO.findBySecondLevelRiskCode(thirdLevelRiskDO.getSecondLevelRiskCode()).getId();
        String type=firstLevelRiskDAO.findByriskcode(thirdLevelRiskDAO.findById(id).getFirstLevelRiskCode()).getFirstLevelTopic();

        model.addAttribute("to",thirdLevelRiskDO);
        model.addAttribute("edit_ing",1);
        model.addAttribute("list_third",thirdLevelRiskDAO.findByPage(thirdLevelRiskDAO.findById(id).getSecondLevelRiskCode(),pageable));
        model.addAttribute("Total_page",thirdLevelRiskDAO.findByPage(thirdLevelRiskDAO.findById(id).getSecondLevelRiskCode(),pageable).getTotalPages());
        model.addAttribute("Total_elements",thirdLevelRiskDAO.findByPage(thirdLevelRiskDAO.findById(id).getSecondLevelRiskCode(),pageable).getTotalElements());
        model.addAttribute("current_elements",pageable.getPageNumber());
        model.addAttribute("id",id);
        model.addAttribute("status","待审批");
        if(type.equals("金融市场")){
            return "list_Financial_thematic_third_level";
        }else if(type.equals("企业制度")){
            return "list_Enterprise_system_third_level";
        }else if(type.equals("企业战略")){
            return "list_Enterprise_strategy_third_level";
        }
        return null;

    }
    @RequestMapping(value = "/update/{id}")
    public String second_level_update(final RedirectAttributes redirectAttributes,@PageableDefault(size = 5,sort = {"thirdLevelRiskCode"},direction = Sort.Direction.ASC)Pageable pageable,Model model,HttpSession session,@ModelAttribute(value = "to")ThirdLevelRiskDO thirdLevelRiskDO,@PathVariable(value = "id") int id){
        int sid=secondLevelRiskDAO.findBySecondLevelRiskCode(thirdLevelRiskDAO.findById(id).getSecondLevelRiskCode()).getId();
        thirdLevelRiskDAO.update(
                thirdLevelRiskDO.getThirdLevelRiskCode(),
                thirdLevelRiskDO.getThirdLevelRiskName(),
                thirdLevelRiskDO.getThirdLevelRiskDescription(),
                id
        );
     redirectAttributes.addFlashAttribute("edit_success",1);
        return "redirect:/thirdlevel/list_third/"+sid+"/"+"2"+"/"+"ready";
    }
    @RequestMapping(value = "del/{id}")
    public String del(Model model,HttpSession session,@PathVariable(value = "id") int id,@PageableDefault(size = 5,sort = {"thirdLevelRiskCode"},direction = Sort.Direction.ASC)Pageable pageable){
        UserDO user=(UserDO)session.getAttribute("user");
        Date date = new Date();
        Timestamp nousedate = new Timestamp(date.getTime());
        String second_riskcode=thirdLevelRiskDAO.findById(id).getSecondLevelRiskCode();
        model.addAttribute("id",secondLevelRiskDAO.findBySecondLevelRiskCode(second_riskcode).getId());
        String type =firstLevelRiskDAO.findByriskcode(thirdLevelRiskDAO.findById(id).getFirstLevelRiskCode()).getFirstLevelTopic();
        String third_riskcode=thirdLevelRiskDAO.findById(id).getThirdLevelRiskCode();
        type=firstLevelRiskDAO.findByriskcode(thirdLevelRiskDAO.findById(id).getFirstLevelRiskCode()).getFirstLevelTopic();
        fourthLevelRiskDAO.deleteByThirdLevelRiskCode(third_riskcode);
        thirdLevelRiskDAO.deleteById(id);
        ThirdLevelRiskDO thirdLevelRiskDO = new ThirdLevelRiskDO();
        model.addAttribute("to",thirdLevelRiskDO);
        model.addAttribute("delet_third_success",1);
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        model.addAttribute("list_third",thirdLevelRiskDAO.findByPage(second_riskcode,pageable));
        model.addAttribute("Total_page",thirdLevelRiskDAO.findByPage(second_riskcode,pageable).getTotalPages());
        model.addAttribute("Total_elements",thirdLevelRiskDAO.findByPage(second_riskcode,pageable).getTotalElements());
        model.addAttribute("current_elements",pageable.getPageNumber());
        if(type.equals("金融市场")){
            return "list_Financial_thematic_third_level";
        }else if(type.equals("企业战略")){
            return "list_Enterprise_strategy_third_level";
        }else if(type.equals("企业制度")){
            return "list_Enterprise_system_third_level";
        }
        return null;
    }
    @RequestMapping(value="/uploading/{id}", method = RequestMethod.POST)
    public String uploadImg(@RequestParam("file") MultipartFile file,@PathVariable(value = "id") int id,
                            HttpServletRequest request) {
        System.out.println("+++++++++++++++++++++++++++++++++++" + file);

        String contentType = file.getContentType();
        String fileName ="third_risk_"+id+".xls";
        System.out.println("fileName-->" + fileName);
        System.out.println("getContentType-->" + contentType);
        String filePath = "C:\\Users\\songyu\\downloaddocument\\";
        System.out.println("filepath--->"+filePath);
        try {
            UploadUtil.uploadFile(file.getBytes(), filePath, fileName);
        } catch (Exception e) {
            // TODO: handle exception
        }
        return "redirect:/thirdlevel/save_xls/"+id;
    }
    @RequestMapping(value = "/save_xls/{id}")
    public String save(@PageableDefault(size = 5,sort = {"thirdLevelRiskCode"},direction = Sort.Direction.ASC)Pageable pageable,HttpServletRequest request, @PathVariable(value = "id") int id,HttpSession session,Model model)
    {
        UserDO user=(UserDO)session.getAttribute("user");
        String fileName = "third_risk_"+id+".xls";
        String filePath = "C:\\Users\\songyu\\downloaddocument\\";
        File file = new File(filePath , fileName);
        FileInputStream fis = null;
        String firstriskcode=secondLevelRiskDAO.findById(id).getFirstLevelRiskCode();
        String secondriskcode=secondLevelRiskDAO.findById(id).getSecondLevelRiskCode();
        int idmax = thirdLevelRiskDAO.findidmax()+1;

        try {
            fis = new FileInputStream(file);
            Workbook wb = null;
            Cell cell =null;
            wb = new HSSFWorkbook(fis);
            Sheet sheet = wb.getSheetAt(0);
            ThirdLevelRiskDO thirdLevelRiskDO = new ThirdLevelRiskDO();
            Date date = new Date();
            Timestamp nousedate = new Timestamp(date.getTime());
            for (int r = 1; r <= sheet.getLastRowNum(); r++) {
                Row row = sheet.getRow(r);
                System.out.println(sheet.getLastRowNum());
                System.out.println(row.getLastCellNum());
                String thirdLevelRiskCode=row.getCell(0).getStringCellValue();
                String thirdLevelRiskName=row.getCell(1).getStringCellValue();
                String thirdLevelRiskDescription=row.getCell(2).getStringCellValue();

                System.out.println(thirdLevelRiskCode);
                System.out.println(thirdLevelRiskName);
                System.out.println(thirdLevelRiskDescription);

                thirdLevelRiskDO.setId(idmax);
                thirdLevelRiskDO.setThirdLevelRiskApplication(user.getWorkerName());
                thirdLevelRiskDO.setThirdLevelRiskDepartment(user.getDepartment());
                thirdLevelRiskDO.setThirdLevelRiskCompany(user.getUserCompany());
                thirdLevelRiskDO.setThirdLevelRiskDate(nousedate);
                thirdLevelRiskDO.setThirdLevelRiskCode(thirdLevelRiskCode);
                thirdLevelRiskDO.setFirstLevelRiskCode(firstriskcode);
                thirdLevelRiskDO.setSecondLevelRiskCode(secondriskcode);
                thirdLevelRiskDO.setThirdLevelRiskDescription(thirdLevelRiskDescription);
                thirdLevelRiskDO.setThirdLevelRiskName(thirdLevelRiskName);
                thirdLevelRiskDAO.save(thirdLevelRiskDO);
                idmax =idmax+1;
                System.out.println(idmax);

            }

        }
        catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        String type = firstLevelRiskDAO.findByriskcode(secondLevelRiskDAO.findById(id).getFirstLevelRiskCode()).getFirstLevelTopic();
        ThirdLevelRiskDO thirdLevelRiskDO = new ThirdLevelRiskDO();
        model.addAttribute("to",thirdLevelRiskDO);
        model.addAttribute("id",id);
        model.addAttribute("list_third",thirdLevelRiskDAO.findByPage(secondLevelRiskDAO.findById(id).getSecondLevelRiskCode(),pageable));
        model.addAttribute("Total_page",thirdLevelRiskDAO.findByPage(secondLevelRiskDAO.findById(id).getSecondLevelRiskCode(),pageable).getTotalPages());
        model.addAttribute("Total_elements",thirdLevelRiskDAO.findByPage(secondLevelRiskDAO.findById(id).getSecondLevelRiskCode(),pageable).getTotalElements());
        model.addAttribute("current_elements",pageable.getPageNumber());
        if(type.equals("金融市场")){
            return "list_Financial_thematic_third_level";
        }else if(type.equals("企业战略")){
            return "list_Enterprise_strategy_third_level";
        }else if(type.equals("企业制度")){
            return "list_Enterprise_system_third_level";
        }
        return null;    }
}
