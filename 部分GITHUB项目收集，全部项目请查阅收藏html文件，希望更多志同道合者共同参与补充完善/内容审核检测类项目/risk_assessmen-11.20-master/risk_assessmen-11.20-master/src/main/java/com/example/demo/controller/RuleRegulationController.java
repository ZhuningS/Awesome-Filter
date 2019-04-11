package com.example.demo.controller;

import com.example.demo.dao.RulesRegulationsDAO;
import com.example.demo.pojo.RulesRegulationsDO;
import com.example.demo.util.UploadUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.*;
import java.net.URLEncoder;


@Controller
@EnableAutoConfiguration
@RequestMapping(value = "/rule")
public class RuleRegulationController {
    @Autowired
    private RulesRegulationsDAO rulesRegulationsDAO;
    @RequestMapping(value = "/list")
    public String list(Model model, HttpSession session){
        model.addAttribute("rule_regulation",rulesRegulationsDAO.findAll());
        return "rule_regulation_management";
    }
    @RequestMapping(value = "/notice")
    public String notice(Model model, HttpSession session){
        model.addAttribute("rule_regulation",rulesRegulationsDAO.findAll());
        RulesRegulationsDO rulesRegulationsDO=new RulesRegulationsDO();
        model.addAttribute("ro",rulesRegulationsDO);
        return "rule_regulation_management_notice";
    }
    @RequestMapping(value = "/standard")
    public String standard(Model model, HttpSession session){
        model.addAttribute("rule_regulation",rulesRegulationsDAO.findAll());
        RulesRegulationsDO rulesRegulationsDO=new RulesRegulationsDO();
        model.addAttribute("ro",rulesRegulationsDO);
        return "rule_regulation_management_standard";
    }
    @RequestMapping(value = "/statistic")
    public String statistic(Model model, HttpSession session){
        model.addAttribute("rule_regulation",rulesRegulationsDAO.findAll());
        RulesRegulationsDO rulesRegulationsDO=new RulesRegulationsDO();
        model.addAttribute("ro",rulesRegulationsDO);
        return "rule_regulation_management_statistic";
    }
    @RequestMapping(value="/uploading_document_notice",produces="text/plain;charset=UTF-8")
    public String uploading_document_notice(@RequestParam("file") MultipartFile file,
                             HttpServletRequest request,Model model) {

        System.out.println("+++++++++++++++++++++++++++++++++++" + file);
        String contentType = file.getContentType();
        String fileName =file.getOriginalFilename();
        System.out.println("fileName-->" + fileName);
        System.out.println("getContentType-->" + contentType);
        String filePath = "C:\\Users\\songyu\\downloaddocument\\";
        System.out.println("filepath--->"+filePath);
        RulesRegulationsDO rulesRegulationsDO =new RulesRegulationsDO();

        File file1 = new File(filePath , fileName);
        String filename1 = fileName;
        System.out.println(filename1);
        if(file1.exists()){

            model.addAttribute("rule_regulation",rulesRegulationsDAO.findAll());
            model.addAttribute("uploading_success",0);
            return "rule_regulation_management_notice";
        }else {
            try {
                UploadUtil.uploadFile(file.getBytes(), filePath, fileName);
                model.addAttribute("uploading_success",1);
                model.addAttribute("rule_regulation",rulesRegulationsDAO.findAll());
                rulesRegulationsDO.setId(0);
                rulesRegulationsDO.setRulesAndRegulationsNotice(fileName);
                rulesRegulationsDAO.save(rulesRegulationsDO);
                return "rule_regulation_management_notice";
            } catch (Exception e) {
                // TODO: handle exception
            }
        }

        //返回json
        return null;
    }
    @RequestMapping(value="/uploading_document_statistic",produces="text/plain;charset=UTF-8")
    public String uploading_document_statistic(@RequestParam("file") MultipartFile file, @RequestParam(value = "key") String key,
                                              HttpServletRequest request,Model model) {

        System.out.println("+++++++++++++++++++++++++++++++++++" + file);
        String contentType = file.getContentType();
        String fileName =file.getOriginalFilename();
        System.out.println("fileName-->" + fileName);
        System.out.println("getContentType-->" + contentType);
        String filePath = "C:\\Users\\songyu\\downloaddocument\\";
        System.out.println("filepath--->"+filePath);
        RulesRegulationsDO rulesRegulationsDO =new RulesRegulationsDO();
        File file1 = new File(filePath , fileName);
        String filename1 = fileName;
        System.out.println(filename1);
        if(file1.exists()){

            model.addAttribute("rule_regulation",rulesRegulationsDAO.findAll());
            model.addAttribute("uploading_success",0);
            return "rule_regulation_management_statistic";
        }else {
            try {
                UploadUtil.uploadFile(file.getBytes(), filePath, fileName);
                model.addAttribute("uploading_success",1);
                model.addAttribute("rule_regulation",rulesRegulationsDAO.findAll());
                rulesRegulationsDO.setId(0);
                if (key.equals("全球统计")){
                    rulesRegulationsDO.setGlobalStatistics(fileName);
                }else if(key.equals("全国统计")){
                    rulesRegulationsDO.setNationalTatistics(fileName);

                }else if(key.equals("省市统计")){
                    rulesRegulationsDO.setProvincialStatistics(fileName);
                }
                rulesRegulationsDAO.save(rulesRegulationsDO);
                model.addAttribute("uploading_success",1);
                return "rule_regulation_management_statistic";
            } catch (Exception e) {
                // TODO: handle exception
            }
        }
        return "null";
    }
    @RequestMapping(value="/uploading_document_standard",produces="text/plain;charset=UTF-8")
    public String uploading_document_standard(@RequestParam("file") MultipartFile file, @RequestParam(value = "key") String key,
                             HttpServletRequest request,Model model) {

        System.out.println("+++++++++++++++++++++++++++++++++++" + file);
        String contentType = file.getContentType();
        String fileName =file.getOriginalFilename();
        System.out.println("fileName-->" + fileName);
        System.out.println("getContentType-->" + contentType);
        String filePath = "C:\\Users\\songyu\\downloaddocument\\";
        System.out.println("filepath--->"+filePath);
        RulesRegulationsDO rulesRegulationsDO =new RulesRegulationsDO();
        File file1 = new File(filePath , fileName);
        String filename1 = fileName;
        System.out.println(filename1);
        if(file1.exists()){

            model.addAttribute("rule_regulation",rulesRegulationsDAO.findAll());
            model.addAttribute("uploading_success",0);
            return "rule_regulation_management_standard";
        }else {
            try {
                UploadUtil.uploadFile(file.getBytes(), filePath, fileName);
                model.addAttribute("uploading_success",1);
                rulesRegulationsDO.setId(0);
                if (key.equals("基础标准")){
                    rulesRegulationsDO.setRulesAndRegulationsStandardArmy(fileName);
                }else if(key.equals("方法标准")){
                    rulesRegulationsDO.setRulesAndRegulationsStandardMethod(fileName);

                }else if(key.equals("产品标准")){
                    rulesRegulationsDO.setRulesAndRegulationsStandardProduct(fileName);
                }
                rulesRegulationsDAO.save(rulesRegulationsDO);
                model.addAttribute("uploading_success",1);
                model.addAttribute("rule_regulation",rulesRegulationsDAO.findAll());
                return "rule_regulation_management_standard";
            } catch (Exception e) {
                // TODO: handle exception
            }
        }
        return "null";
    }
    @RequestMapping("/downloading_document/{fileName}")
    public String downloadFile10(HttpServletRequest request, HttpServletResponse response, @PathVariable(value = "fileName") String fileName) {
        if (fileName != null) {
            //设置文件路径
            String filePath = "C:\\Users\\songyu\\downloaddocument\\";
            String fileName1 = fileName+".doc";
            File file = new File(filePath , fileName1);
            System.out.println("+++++++++++++++++++++"+file);
            if (file.exists()) {
                System.out.println("+++++++++++++++++++++"+file);
                response.setContentType("application/force-download");// 设置强制下载不打开
                try {
                    response.setHeader("Content-Disposition", "attachment; fileName="+  fileName1 +";filename*=utf-8''"+ URLEncoder.encode(fileName1,"UTF-8"));
                } catch (UnsupportedEncodingException e) {
                    e.printStackTrace();
                }

                byte[] buffer = new byte[1024];
                FileInputStream fis = null;
                BufferedInputStream bis = null;
                try {
                    fis = new FileInputStream(file);
                    bis = new BufferedInputStream(fis);
                    OutputStream os = response.getOutputStream();
                    int i = bis.read(buffer);
                    while (i != -1) {
                        os.write(buffer, 0, i);
                        i = bis.read(buffer);
                    }
                    System.out.println("success");
                } catch (Exception e) {
                    e.printStackTrace();
                } finally {
                    if (bis != null) {
                        try {
                            bis.close();
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                    }
                    if (fis != null) {
                        try {
                            fis.close();
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                    }
                }
            }
        }
        return null;
    }
    @RequestMapping("/download_standard")
    public String download_standard(HttpServletRequest request, HttpServletResponse response) {
        String fileName = "标准文件样本";
        if (fileName != null) {
            //设置文件路径
            String filePath = "C:\\Users\\songyu\\downloaddocument\\";
            String fileName1 = fileName+".doc";
            File file = new File(filePath , fileName1);
            System.out.println("+++++++++++++++++++++"+file);
            if (file.exists()) {
                System.out.println("+++++++++++++++++++++"+file);
                response.setContentType("application/force-download");// 设置强制下载不打开
                try {
                    response.setHeader("Content-Disposition", "attachment; fileName="+  fileName1 +";filename*=utf-8''"+ URLEncoder.encode(fileName1,"UTF-8"));
                } catch (UnsupportedEncodingException e) {
                    e.printStackTrace();
                }

                byte[] buffer = new byte[1024];
                FileInputStream fis = null;
                BufferedInputStream bis = null;
                try {
                    fis = new FileInputStream(file);
                    bis = new BufferedInputStream(fis);
                    OutputStream os = response.getOutputStream();
                    int i = bis.read(buffer);
                    while (i != -1) {
                        os.write(buffer, 0, i);
                        i = bis.read(buffer);
                    }
                    System.out.println("success");
                } catch (Exception e) {
                    e.printStackTrace();
                } finally {
                    if (bis != null) {
                        try {
                            bis.close();
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                    }
                    if (fis != null) {
                        try {
                            fis.close();
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                    }
                }
            }
        }
        return null;
    }
    @RequestMapping("/download_statistic")
    public String download_statistic(HttpServletRequest request, HttpServletResponse response) {
        String fileName = "标准统计样本";
        if (fileName != null) {
            //设置文件路径
            String filePath = "C:\\Users\\songyu\\downloaddocument\\";
            String fileName1 = fileName+".doc";
            File file = new File(filePath , fileName1);
            System.out.println("+++++++++++++++++++++"+file);
            if (file.exists()) {
                System.out.println("+++++++++++++++++++++"+file);
                response.setContentType("application/force-download");// 设置强制下载不打开
                try {
                    response.setHeader("Content-Disposition", "attachment; fileName="+  fileName1 +";filename*=utf-8''"+ URLEncoder.encode(fileName1,"UTF-8"));
                } catch (UnsupportedEncodingException e) {
                    e.printStackTrace();
                }

                byte[] buffer = new byte[1024];
                FileInputStream fis = null;
                BufferedInputStream bis = null;
                try {
                    fis = new FileInputStream(file);
                    bis = new BufferedInputStream(fis);
                    OutputStream os = response.getOutputStream();
                    int i = bis.read(buffer);
                    while (i != -1) {
                        os.write(buffer, 0, i);
                        i = bis.read(buffer);
                    }
                    System.out.println("success");
                } catch (Exception e) {
                    e.printStackTrace();
                } finally {
                    if (bis != null) {
                        try {
                            bis.close();
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                    }
                    if (fis != null) {
                        try {
                            fis.close();
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                    }
                }
            }
        }
        return null;
    }
}
