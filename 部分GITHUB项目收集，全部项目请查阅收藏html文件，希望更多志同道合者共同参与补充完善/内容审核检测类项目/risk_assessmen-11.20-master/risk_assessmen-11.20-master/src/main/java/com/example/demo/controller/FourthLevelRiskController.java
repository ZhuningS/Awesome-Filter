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
@RequestMapping(value = "/fourthlevel")
public class FourthLevelRiskController {
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
    @RequestMapping(value = "/list_fourth/{id}/{risk_level}/{status}")
    public String list_Financial_thematic(@PageableDefault(size = 5,sort = {"thirdLevelRiskCode"},direction = Sort.Direction.ASC)Pageable pageable, Model model, HttpSession session,
                                          @PathVariable(value ="id") int id,@PathVariable(value = "risk_level")String risk_level,@PathVariable(value = "status") String status){
        UserDO user=(UserDO)session.getAttribute("user");
        String type="";
        FourthLevelRiskDO fourthLevelRiskDO = new FourthLevelRiskDO();
        model.addAttribute("fro",fourthLevelRiskDO);
        model.addAttribute("id",id);
        model.addAttribute("risk_level",risk_level);

        if(risk_level.equals("1")){
            model.addAttribute("first_name",firstLevelRiskDAO.findById(id).getFirstLevelRiskName());
            model.addAttribute("second_name","");
            model.addAttribute("third_name","");
            model.addAttribute("list_fourth",fourthLevelRiskDAO.findByPage_first(firstLevelRiskDAO.findById(id).getFirstLevelRiskCode(),pageable));
            model.addAttribute("Total_page",fourthLevelRiskDAO.findByPage_first(firstLevelRiskDAO.findById(id).getFirstLevelRiskCode(),pageable).getTotalPages());
            model.addAttribute("Total_elements",fourthLevelRiskDAO.findByPage_first(firstLevelRiskDAO.findById(id).getFirstLevelRiskCode(),pageable).getTotalElements());
            model.addAttribute("current_elements",pageable.getPageNumber());
            type=firstLevelRiskDAO.findById(id).getFirstLevelTopic();
        }else if(risk_level.equals("2")){
            model.addAttribute("first_name",firstLevelRiskDAO.findByriskcode(secondLevelRiskDAO.findById(id).getFirstLevelRiskCode()).getFirstLevelRiskName());
            model.addAttribute("second_name",secondLevelRiskDAO.findById(id).getSecondLevelRiskName());
            model.addAttribute("third_name","");
            model.addAttribute("list_fourth",fourthLevelRiskDAO.findByPage_second(secondLevelRiskDAO.findById(id).getSecondLevelRiskCode(),pageable));
            model.addAttribute("Total_page",fourthLevelRiskDAO.findByPage_second(secondLevelRiskDAO.findById(id).getSecondLevelRiskCode(),pageable).getTotalPages());
            model.addAttribute("Total_elements",fourthLevelRiskDAO.findByPage_second(secondLevelRiskDAO.findById(id).getSecondLevelRiskCode(),pageable).getTotalElements());
            model.addAttribute("current_elements",pageable.getPageNumber());
             type=firstLevelRiskDAO.findByriskcode(secondLevelRiskDAO.findById(id).getFirstLevelRiskCode()).getFirstLevelTopic();
        }else if(risk_level.equals("3")){
            model.addAttribute("first_name",firstLevelRiskDAO.findByriskcode(thirdLevelRiskDAO.findById(id).getFirstLevelRiskCode()).getFirstLevelRiskName());
            model.addAttribute("second_name",secondLevelRiskDAO.findBySecondLevelRiskCode(thirdLevelRiskDAO.findById(id).getSecondLevelRiskCode()).getSecondLevelRiskName());
            model.addAttribute("third_name",thirdLevelRiskDAO.findById(id).getThirdLevelRiskName());
            model.addAttribute("list_fourth",fourthLevelRiskDAO.findByPage(thirdLevelRiskDAO.findById(id).getThirdLevelRiskCode(),pageable));
            model.addAttribute("Total_page",fourthLevelRiskDAO.findByPage(thirdLevelRiskDAO.findById(id).getThirdLevelRiskCode(),pageable).getTotalPages());
            model.addAttribute("Total_elements",fourthLevelRiskDAO.findByPage(thirdLevelRiskDAO.findById(id).getThirdLevelRiskCode(),pageable).getTotalElements());
            model.addAttribute("current_elements",pageable.getPageNumber());
            type=firstLevelRiskDAO.findByriskcode(thirdLevelRiskDAO.findById(id).getFirstLevelRiskCode()).getFirstLevelTopic();
        }else if (risk_level.equals("4")){
            model.addAttribute("first_name",firstLevelRiskDAO.findByriskcode(fourthLevelRiskDAO.findById(id).getFirstLevelRiskCode()).getFirstLevelRiskName());
            model.addAttribute("second_name",secondLevelRiskDAO.findBySecondLevelRiskCode(fourthLevelRiskDAO.findById(id).getSecondLevelRiskCode()).getSecondLevelRiskName());
            model.addAttribute("third_name",thirdLevelRiskDAO.findBycode(fourthLevelRiskDAO.findById(id).getThirdLevelRiskCode()).getThirdLevelRiskName());
            model.addAttribute("list_fourth",fourthLevelRiskDAO.findByPage_fourthLevelRiskName(fourthLevelRiskDAO.findById(id).getFourthLevelRiskName(),pageable));
            model.addAttribute("Total_page",fourthLevelRiskDAO.findByPage_fourthLevelRiskName(fourthLevelRiskDAO.findById(id).getFourthLevelRiskName(),pageable).getTotalPages());
            model.addAttribute("Total_elements",fourthLevelRiskDAO.findByPage_fourthLevelRiskName(fourthLevelRiskDAO.findById(id).getFourthLevelRiskName(),pageable).getTotalElements());
            model.addAttribute("current_elements",pageable.getPageNumber());
            type=firstLevelRiskDAO.findByriskcode(fourthLevelRiskDAO.findById(id).getFirstLevelRiskCode()).getFirstLevelTopic();
        }
        if(status.equals("ready")){
            model.addAttribute("status","待审批");
        }else {
            model.addAttribute("status",status);
        }
        if(type.equals("金融市场")){
            return "list_Financial_thematic_fourth_level";
        }else if(type.equals("企业制度")){
            return "list_Enterprise_system_fourth_level";
        }else if(type.equals("企业战略")){
            return "list_Enterprise_strategy_fourth_level";
        }
        return null;
    }

    @RequestMapping(value = "/add/{id}")
    public String add(final RedirectAttributes redirectAttributes,Model model, @ModelAttribute(value = "fro")FourthLevelRiskDO fourthLevelRiskDO, HttpSession session, @PathVariable(value = "id") int id){
        UserDO user=(UserDO)session.getAttribute("user");
        Date date = new Date();
        Timestamp nousedate = new Timestamp(date.getTime());
        fourthLevelRiskDO.setId(0);
        String fourthLevelRiskCode=fourthLevelRiskDO.getFourthLevelRiskCode();
        String  fourthLevelRiskName=fourthLevelRiskDO.getFourthLevelRiskName();
        List<FourthLevelRiskDO> fourthLevelRiskDOS = fourthLevelRiskDAO.findAll();
        String type = firstLevelRiskDAO.findByriskcode(thirdLevelRiskDAO.findById(id).getFirstLevelRiskCode()).getFirstLevelTopic();

        for (FourthLevelRiskDO fourthLevelRiskDO1:fourthLevelRiskDOS){
            String fourthLevelRiskCode_standard =fourthLevelRiskDO1.getFourthLevelRiskCode();
            String fourthLevelRiskName_standard = fourthLevelRiskDO1.getFourthLevelRiskName();
            if(fourthLevelRiskCode.equals(fourthLevelRiskCode_standard) || fourthLevelRiskName.equals(fourthLevelRiskName_standard)){

                redirectAttributes.addAttribute("add_success",0);
                return "redirect:/fourthlevel/list_fourth/"+id+"/"+"3"+"/"+"ready";
            }
        }
        fourthLevelRiskDO.setFourthLevelRiskApplication(user.getWorkerName());
        fourthLevelRiskDO.setFourthLevelRiskCompany(user.getUserCompany());
        fourthLevelRiskDO.setFourthLevelRiskDate(nousedate);
        fourthLevelRiskDO.setFourthLevelRiskDepartment(user.getDepartment());
        fourthLevelRiskDO.setFirstLevelRiskCode(thirdLevelRiskDAO.findById(id).getFirstLevelRiskCode());
        fourthLevelRiskDO.setSecondLevelRiskCode(thirdLevelRiskDAO.findById(id).getSecondLevelRiskCode());
        fourthLevelRiskDO.setThirdLevelRiskCode(thirdLevelRiskDAO.findById(id).getThirdLevelRiskCode());
        fourthLevelRiskDAO.save(fourthLevelRiskDO);
        redirectAttributes.addAttribute("add_success",1);
       return "redirect:/fourthlevel/list_fourth/"+id+"/"+"2"+"/"+"ready";
    }


    @RequestMapping(value = "/edit/{id}")
    public String edit(@PageableDefault(size = 5,sort = {"thirdLevelRiskCode"},direction = Sort.Direction.ASC)Pageable pageable,Model model, HttpSession session, @PathVariable int id){
        UserDO user=(UserDO)session.getAttribute("user");
        FourthLevelRiskDO fourthLevelRiskDO=fourthLevelRiskDAO.findById(id);
        String firstriskcode=fourthLevelRiskDO.getFirstLevelRiskCode();
        model.addAttribute("fro",fourthLevelRiskDO);
        model.addAttribute("edit_ing",1);
        model.addAttribute("sid",id);
        String third_risk_code=fourthLevelRiskDAO.findById(id).getThirdLevelRiskCode();
        model.addAttribute("id",id);
        model.addAttribute("list_fourth",fourthLevelRiskDAO.findByPage(fourthLevelRiskDAO.findById(id).getThirdLevelRiskCode(),pageable));
        model.addAttribute("Total_page",fourthLevelRiskDAO.findByPage(fourthLevelRiskDAO.findById(id).getThirdLevelRiskCode(),pageable).getTotalPages());
        model.addAttribute("Total_elements",fourthLevelRiskDAO.findByPage(fourthLevelRiskDAO.findById(id).getThirdLevelRiskCode(),pageable).getTotalElements());
        model.addAttribute("current_elements",pageable.getPageNumber());
        String type =firstLevelRiskDAO.findByriskcode(firstriskcode).getFirstLevelTopic();
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        if(type.equals("金融市场")){
            return "list_Financial_thematic_fourth_level";
        }else if(type.equals("企业战略")){
            return "list_Enterprise_strategy_fourth_level";
        }else if(type.equals("企业制度")){
            return "list_Enterprise_system_fourth_level";
        }
        return null;
    }
    @RequestMapping(value = "/update/{id}")
    public String second_level_update(@PageableDefault(size = 5,sort = {"thirdLevelRiskCode"},direction = Sort.Direction.ASC)Pageable pageable,Model model,HttpSession session,@ModelAttribute(value = "fo")FourthLevelRiskDO fourthLevelRiskDO,@PathVariable(value = "id") int id){
        fourthLevelRiskDAO.update(
                fourthLevelRiskDO.getFourthLevelRiskCode(),
                fourthLevelRiskDO.getFourthLevelRiskName(),
                fourthLevelRiskDO.getFourthLevelRiskDescription(),
                id
        );
        String type =firstLevelRiskDAO.findByriskcode(fourthLevelRiskDAO.findById(id).getFirstLevelRiskCode()).getFirstLevelTopic();
        UserDO user=(UserDO)session.getAttribute("user");
        Date date = new Date();
        Timestamp nousedate = new Timestamp(date.getTime());
        FourthLevelRiskDO fourthLevelRiskDO1 = new FourthLevelRiskDO();
        model.addAttribute("fro",fourthLevelRiskDO1);
        model.addAttribute("edit_success",1);
        String third_risk_code=fourthLevelRiskDAO.findById(id).getThirdLevelRiskCode();
        model.addAttribute("list_fourth",fourthLevelRiskDAO.findByPage(fourthLevelRiskDAO.findById(id).getThirdLevelRiskCode(),pageable));
        model.addAttribute("Total_page",fourthLevelRiskDAO.findByPage(fourthLevelRiskDAO.findById(id).getThirdLevelRiskCode(),pageable).getTotalPages());
        model.addAttribute("Total_elements",fourthLevelRiskDAO.findByPage(fourthLevelRiskDAO.findById(id).getThirdLevelRiskCode(),pageable).getTotalElements());
        model.addAttribute("current_elements",pageable.getPageNumber());
        model.addAttribute("id",thirdLevelRiskDAO.findByThirdLevelRiskCode(third_risk_code).getId());
        model.addAttribute("ableManageUser",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleManageUser());
        model.addAttribute("ableCreateNewProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleCreateNewProject());
        model.addAttribute("ableExaminationApprovalProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleExaminationApprovalProject());
        model.addAttribute("ableModifyProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAbleModifyProject());
        model.addAttribute("ablePushProject",userPermissionDAO.findByWorkNumber(user.getWorkNumber()).getAblePushProject());
        if(type.equals("金融市场")){
            return "list_Financial_thematic_fourth_level";
        }else if(type.equals("企业战略")){
            return "list_Enterprise_strategy_fourth_level";
        }else if(type.equals("企业制度")){
            return "list_Enterprise_system_fourth_level";
        }
        return null;
    }
    @RequestMapping(value = "del/{id}")
    public String del(final RedirectAttributes redirectAttributes,Model model,HttpSession session,@PathVariable(value = "id") int id){
        UserDO user=(UserDO)session.getAttribute("user");
        Date date = new Date();
        Timestamp nousedate = new Timestamp(date.getTime());
        String third_risk_code=fourthLevelRiskDAO.findById(id).getThirdLevelRiskCode();
        int tid=thirdLevelRiskDAO.findByThirdLevelRiskCode(third_risk_code).getId();
        model.addAttribute("id",thirdLevelRiskDAO.findByThirdLevelRiskCode(third_risk_code).getId());
        String type =firstLevelRiskDAO.findByriskcode(fourthLevelRiskDAO.findById(id).getFirstLevelRiskCode()).getFirstLevelTopic();
        fourthLevelRiskDAO.deleteById(id);
        redirectAttributes.addAttribute("delet_second_success",1);
        return "redirect:/fourthlevel/list_fourth/"+tid+"/"+"3"+"/"+"ready";

    }
    @RequestMapping(value="/uploading/{id}", method = RequestMethod.POST)
    public String uploadImg(@RequestParam("file") MultipartFile file, @PathVariable(value = "id") int id,
                            HttpServletRequest request) {
        System.out.println("+++++++++++++++++++++++++++++++++++" + file);
        String contentType = file.getContentType();
        String fileName ="fourth_risk_"+id+".xls";
        System.out.println("fileName-->" + fileName);
        System.out.println("getContentType-->" + contentType);
        String filePath = "C:\\Users\\songyu\\downloaddocument\\";
        System.out.println("filepath--->"+filePath);
        try {
            UploadUtil.uploadFile(file.getBytes(), filePath, fileName);
        } catch (Exception e) {
            // TODO: handle exception
        }
        System.out.println(fileName);
        return "redirect:/fourthlevel/save_xls/"+id;
    }
    @RequestMapping(value = "/save_xls/{id}")
    public String save(@PageableDefault(size = 5,sort = {"thirdLevelRiskCode"},direction = Sort.Direction.ASC)Pageable pageable,HttpServletRequest request, @PathVariable(value = "id") int id,HttpSession session,Model model)
    {
        UserDO user=(UserDO)session.getAttribute("user");
        String fileName = "fourth_risk_"+id+".xls";
        String filePath = "C:\\Users\\songyu\\downloaddocument\\";
        File file = new File(filePath , fileName);
        FileInputStream fis = null;
        String firstriskcode=thirdLevelRiskDAO.findById(id).getFirstLevelRiskCode();
        String secondriskcode=thirdLevelRiskDAO.findById(id).getSecondLevelRiskCode();
        String thirdriskcode=thirdLevelRiskDAO.findById(id).getThirdLevelRiskCode();
        int idmax = fourthLevelRiskDAO.findidmax()+1;

        try {
            fis = new FileInputStream(file);
            Workbook wb = null;
            Cell cell =null;
            wb = new HSSFWorkbook(fis);
            Sheet sheet = wb.getSheetAt(0);
            FourthLevelRiskDO fourthLevelRiskDO = new FourthLevelRiskDO();
            Date date = new Date();
            Timestamp nousedate = new Timestamp(date.getTime());
            for (int r = 1; r <= sheet.getLastRowNum(); r++) {
                Row row = sheet.getRow(r);
                System.out.println(sheet.getLastRowNum());
                System.out.println(row.getLastCellNum());
                String fourthLevelRiskCode=row.getCell(0).getStringCellValue();
                String fourthLevelRiskName=row.getCell(1).getStringCellValue();
                String fourthLevelRiskDescription=row.getCell(2).getStringCellValue();

                System.out.println(fourthLevelRiskCode);
                System.out.println(fourthLevelRiskName);
                System.out.println(fourthLevelRiskDescription);

                fourthLevelRiskDO.setId(idmax);
                fourthLevelRiskDO.setFourthLevelRiskApplication(user.getWorkerName());
                fourthLevelRiskDO.setFourthLevelRiskDepartment(user.getDepartment());
                fourthLevelRiskDO.setFourthLevelRiskCompany(user.getUserCompany());
                fourthLevelRiskDO.setFourthLevelRiskDate(nousedate);
                fourthLevelRiskDO.setThirdLevelRiskCode(thirdriskcode);
                fourthLevelRiskDO.setFirstLevelRiskCode(firstriskcode);
                fourthLevelRiskDO.setSecondLevelRiskCode(secondriskcode);
                fourthLevelRiskDO.setFourthLevelRiskCode(fourthLevelRiskCode);
                fourthLevelRiskDO.setFourthLevelRiskDescription(fourthLevelRiskDescription);
                fourthLevelRiskDO.setFourthLevelRiskName(fourthLevelRiskName);
                fourthLevelRiskDAO.save(fourthLevelRiskDO);
                idmax =idmax+1;
                System.out.println(idmax);

            }


        }
        catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        String type = firstLevelRiskDAO.findByriskcode(thirdLevelRiskDAO.findById(id).getFirstLevelRiskCode()).getFirstLevelTopic();
        FourthLevelRiskDO fourthLevelRiskDO = new FourthLevelRiskDO();
        model.addAttribute("fro",fourthLevelRiskDO);
        model.addAttribute("id",id);
        model.addAttribute("list_fourth",fourthLevelRiskDAO.findByPage(fourthLevelRiskDAO.findById(id).getThirdLevelRiskCode(),pageable));
        model.addAttribute("Total_page",fourthLevelRiskDAO.findByPage(fourthLevelRiskDAO.findById(id).getThirdLevelRiskCode(),pageable).getTotalPages());
        model.addAttribute("Total_elements",fourthLevelRiskDAO.findByPage(fourthLevelRiskDAO.findById(id).getThirdLevelRiskCode(),pageable).getTotalElements());
        model.addAttribute("current_elements",pageable.getPageNumber());        if(type.equals("金融市场")){
            return "list_Financial_thematic_fourth_level";
        }else if(type.equals("企业战略")){
            return "list_Enterprise_strategy_fourth_level";
        }else if(type.equals("企业制度")){
            return "list_Enterprise_system_fourth_level";
        }
        return null;    }

}
