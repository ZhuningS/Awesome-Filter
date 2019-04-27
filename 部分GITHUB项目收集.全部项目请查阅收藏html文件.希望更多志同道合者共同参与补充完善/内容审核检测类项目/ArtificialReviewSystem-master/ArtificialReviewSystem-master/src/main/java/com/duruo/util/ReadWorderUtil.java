package com.duruo.util;

import com.duruo.dao.QchuangMapper;
import com.duruo.dto.BusinessLicence;
import com.duruo.po.Qchuang;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.*;
import org.apache.commons.lang3.StringUtils;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.hwpf.HWPFDocument;
import org.apache.poi.hwpf.usermodel.*;
import org.apache.poi.hwpf.usermodel.Range;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.apache.poi.xwpf.extractor.XWPFWordExtractor;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.poi.xwpf.usermodel.XWPFTable;
import org.apache.poi.xwpf.usermodel.XWPFTableCell;
import org.apache.poi.xwpf.usermodel.XWPFTableRow;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.io.*;
import java.util.*;

import static org.apache.poi.ss.usermodel.Cell.*;

/**
 * Created by @Author tachai
 * date 2018/8/13 10:13
 * GitHub https://github.com/TACHAI
 * Email 1206966083@qq.com
 */
@Slf4j
public class ReadWorderUtil {

    private static final String EXCEL_XLS = "xls";
    private static final String EXCEL_XLSX = "xlsx";


    public static String docCheck(InputStream inputStream, BusinessLicence businessLicence) {
        StringBuilder str = new StringBuilder();
        try {
            HWPFDocument doc = new HWPFDocument(inputStream);
            Range range = doc.getRange();
            TableIterator it = new TableIterator(range);
            //迭代文档中的表格
            while (it.hasNext()) {
                Table tb = (Table) it.next();
                //迭代行，默认中0开始
                for (int i = 0; i < tb.numRows(); i++) {
                    TableRow tr = tb.getRow(i);
                    for (int j = 0; j < tr.numCells(); j++) {
                        TableCell td = tr.getCell(j);
                        //得到单元格的内容
                        String s = "";
                        for (int k = 0; k < td.numParagraphs(); k++) {
                            Paragraph paragraph = td.getParagraph(k);
                            s = paragraph.text();
                            if (!org.apache.commons.lang3.StringUtils.isBlank(businessLicence.getSocialCreditCode()) && s.indexOf("社会信用代码") != -1) {
                                if (!td.getParagraph(j + 1).text().equals(businessLicence.getSocialCreditCode())) {
                                    str.append("填写社会信用代码与营业执照上不一致；");
                                }
                                j++;
                            } else if (s.indexOf("社会信用代码") != -1) {
                                if (CheckProject.checkCreditCode(td.getParagraph(j + 1).text())) {
                                    str.append("社会信用代码填写不正确");
                                }
                            } else if (!StringUtils.isBlank(businessLicence.getLegalPerson()) && s.equals("法人")) {
                                if (!td.getParagraph(j + 1).text().equals(businessLicence.getLegalPerson())) {
                                    str.append("填写的法人与营业执照不一致；");
                                }
                                j++;
                            } else if (!StringUtils.isBlank(businessLicence.getUnitName()) && s.indexOf("单位名称") != -1) {
                                if (!td.getParagraph(j + 1).text().equals(businessLicence.getUnitName())) {
                                    str.append("填写的单位名称与营业执照上不一致；");
                                }
                                j++;
                            } else if (s.indexOf("电话") != -1) {
                                if (!CheckProject.checkTel(td.getParagraph(j + 1).text())) {
                                    str.append("电话号码格式错误");
                                }
                                j++;
                            } else if (s.indexOf("手机号码") != -1) {
                                if (!CheckProject.checkPhone(td.getParagraph(j + 1).text())) {
                                    str.append("手机号码格式不对；");
                                }
                            } else if (s.indexOf("邮政编码") != -1) {
                                if (!CheckProject.checkPost(td.getParagraph(j + 1).text())) {
                                    str.append("邮政编码格式不对；");
                                }
                            }
                        }
                    }
                }
                System.out.println(str);
            }
            inputStream.close();
        } catch (Exception e) {
            log.error("word文件读取异常:{}", e.getMessage());
        }
        return str.toString();
    }

    /**
     * 预审docx中的内容
     *
     * @param inputStream
     * @param businessLicence
     * @return
     */
    public static String docxCheck(InputStream inputStream, BusinessLicence businessLicence) {

        Map<String, String> map = new HashMap<>();
        map.put("社会信用代码", businessLicence.getSocialCreditCode());
        map.put("法人", businessLicence.getLegalPerson());
        map.put("地址", businessLicence.getAddress());
        map.put("单位名称", businessLicence.getUnitName());

        StringBuilder str = new StringBuilder();
        try {
            XWPFDocument docx = new XWPFDocument(inputStream);
            Iterator<XWPFTable> it = docx.getTablesIterator();
            //迭代文档中的表格
            while (it.hasNext()) {
                XWPFTable tb = it.next();
                //迭代行，默认中0开始
                for (int i = 0; i < tb.getNumberOfRows(); i++) {
                    XWPFTableRow tr = tb.getRow(i);
                    //读取每一列数据
                    List<XWPFTableCell> cellList = tr.getTableCells();
                    for (int j = 0; j < cellList.size(); j++) {
                        String s = "";
                        s = cellList.get(j).getText();

//                        for(String key:map.keySet()){
//                            if(s.indexOf(key)!=-1){
//
//                            }
//                        }

                        if (!org.apache.commons.lang3.StringUtils.isBlank(businessLicence.getSocialCreditCode()) && s.indexOf("社会信用代码") != -1) {
                            if (!cellList.get(j + 1).getText().equals(businessLicence.getSocialCreditCode())) {
                                str.append("填写社会信用代码与营业执照上不一致；");
                            }
                            j++;
                        } else if (s.indexOf("社会信用代码") != -1) {
                            if (CheckProject.checkCreditCode(cellList.get(j + 1).getText())) {
                                str.append("社会信用代码填写不正确");
                            }
                        } else if (!StringUtils.isBlank(businessLicence.getLegalPerson()) && s.equals("法人")) {
                            if (!cellList.get(j + 1).getText().equals(businessLicence.getLegalPerson())) {
                                str.append("填写的法人与营业执照不一致；");
                            }
                            j++;
                        } else if (!StringUtils.isBlank(businessLicence.getUnitName()) && s.indexOf("单位名称") != -1) {
                            if (!cellList.get(j + 1).getText().equals(businessLicence.getUnitName())) {
                                str.append("填写的单位名称与营业执照上不一致；");
                            }
                            j++;
                        } else if (s.indexOf("电话") != -1) {
                            if (!CheckProject.checkTel(cellList.get(j + 1).getText())) {
                                str.append("电话号码格式错误");
                            }
                            j++;
                        } else if (s.indexOf("手机号码") != -1) {
                            if (!CheckProject.checkPhone(cellList.get(j + 1).getText())) {
                                str.append("手机号码格式不对；");
                            }
                        } else if (s.indexOf("邮政编码") != -1) {
                            if (!CheckProject.checkPost(cellList.get(j + 1).getText())) {
                                str.append("邮政编码格式不对；");
                            }
                        } else if (s.indexOf("电子信箱") != -1 || s.indexOf("邮箱") != -1) {
                            if (!CheckProject.checkEmail(cellList.get(j + 1).getText())) {
                                str.append("邮箱格式不对");
                            }
                        }
                    }
                }
                System.out.println(str);
            }
            inputStream.close();
        } catch (Exception e) {
            log.error("word文件读取异常:{}", e.getMessage());
        }
        return str.toString();
    }


    //读取青创台账 Excel
    public static String xlsRead(InputStream inputStream,File file,QchuangMapper qchuangMapper) {
        try {
            Workbook workbook = getWorkbok(inputStream,file);

            int sheetCount = workbook.getNumberOfSheets();
            for(int i=0;i<sheetCount;i++){
                Sheet sheet = workbook.getSheetAt(i);
                int count = 0;
                //设置一个阀值，当连续5行没有值则换一个sheet
                int temp=0;
                for(Row row:sheet){

                    try {
                        //跳过第一行
                        if(count<1){
                            count++;
                            continue;
                        }
                        // 如果当前行没有数据，
                        if(StringUtils.isBlank(row.getCell(0).toString())){
                            temp++;
                            if(temp>5){
                                //跳出当前sheet循环row
                                break;
                            }
                        }else{
                            temp=0;
                        }
                        // 获取总列数（空格的不计算）
                        int columnTotalNum = row.getPhysicalNumberOfCells();
                        System.out.println("总列数："+columnTotalNum);
                        int end = row.getLastCellNum();

                        //todo 要把数据插入到数据库

                        /**
                         * 2 法人名  personName
                         * 5 公司名称  companyName
                         * 3 身份证 idCard
                         * 1 申请日期 createDate
                         */

                        Qchuang qchuang=new Qchuang();
                        qchuang.setId(System.currentTimeMillis()+"");
                        qchuang.setCreateDate(DateTimeUtil.strToDate(getValue(row.getCell(1)).toString(),"yyyy.MM.dd"));
                        qchuang.setCompanyName(getValue(row.getCell(5)).toString());
                        qchuang.setIdCard(getValue(row.getCell(3)).toString());
                        qchuang.setPersonName(getValue(row.getCell(2)).toString());
                        qchuang.setStatus(0);
                        qchuangMapper.insert(qchuang);

                        //todo

//                        for(int j = 0;j<end;j++){
//                            //第一列跳过
//                            if(j<1){
//                                continue;
//                            }
//                            Cell cell = row.getCell(j);
//                            if(cell == null){
//                                System.out.println("null"+"\t");
//                                continue;
//                            }
//                            if(getValue(cell)!=null)
//                                System.out.println(getValue(cell).toString());
//                        }
                    }catch (Exception e){
                        log.error("读取excle保错:{} {}",e.getMessage(),e.getStackTrace());
                    }
                }
            }
            return "读取excle成功";

        } catch (IOException e) {
            log.error("读取excle保错:{} {}",e.getMessage(),e.getStackTrace());
        }

        return null;
    }


    public static Workbook getWorkbok(InputStream in, File file) throws IOException {
        Workbook wb = null;
        if (file.getName().endsWith(EXCEL_XLS)) {  //Excel 2003
            wb = new HSSFWorkbook(in);
        } else if (file.getName().endsWith(EXCEL_XLSX)) {  // Excel 2007/2010
            wb = new XSSFWorkbook(in);
        }
        return wb;
    }

    private static Object getValue(Cell cell){
        Object obj=null;

        /**
         * @see #CELL_TYPE_NUMERIC
         * @see #CELL_TYPE_STRING
         * @see #CELL_TYPE_FORMULA
         * @see #CELL_TYPE_BLANK
         * @see #CELL_TYPE_BOOLEAN
         * @see #CELL_TYPE_ERROR
         */

        switch (cell.getCellType()){
            case CELL_TYPE_BOOLEAN:
                obj = cell.getBooleanCellValue();
                break;
            case  CELL_TYPE_ERROR:
                obj = cell.getErrorCellValue();
                break;
            case  CELL_TYPE_NUMERIC:
                obj = cell.getNumericCellValue();
                break;
            case  CELL_TYPE_STRING:
                obj = cell.getStringCellValue();
                break;
            default:
                break;
//            case  CELL_TYPE_FORMULA:
//                obj = cell.getCellFormula();
        }
        return obj;
    }


//    public static



    //    private String checkBussiness(String str,)
    public static void main(String[] args) throws FileNotFoundException {
//        File file = new File("C:\\Users\\asus30\\Downloads\\酒类商品零售许申请表 (14).docx");
//        File file1 = new File("C:\\Users\\asus30\\Downloads\\酒类商品零售许申请表 (14).docx");
//        File file2 = new File("C:\\Users\\asus30\\Downloads\\andanwei.docx");
////        docCheck(new FileInputStream(file1),new BusinessLicence());
//        docxCheck(new FileInputStream(file1), new BusinessLicence());

        File excle = new File("C:\\Users\\asus30\\Desktop\\人社\\青年创业\\青创台账\\青创台帐.xls");
       //  xlsRead(new FileInputStream(excle),excle);
        //

        ApplicationContext ac = new ClassPathXmlApplicationContext("classpath*:applicationContext.xml");
        QchuangMapper qchuangMapper = (QchuangMapper) ac.getBean("qchuangMapper");

        xlsRead(new FileInputStream(excle),excle,qchuangMapper);
    }
}
