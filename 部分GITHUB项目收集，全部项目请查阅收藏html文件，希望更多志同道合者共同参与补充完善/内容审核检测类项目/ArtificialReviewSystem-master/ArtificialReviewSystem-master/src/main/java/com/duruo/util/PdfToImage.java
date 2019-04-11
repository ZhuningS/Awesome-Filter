package com.duruo.util;

import lombok.extern.slf4j.Slf4j;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.rendering.PDFRenderer;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/**
 * Created by @Author tachai
 * date 2018/6/30 15:34
 *
 * @Email 1206966083@qq.com
 */
@Slf4j
public class PdfToImage {

    public static void main(String[] args) {
        //1000
        String filePath ="F:\\JAVA\\weixin\\kewei_file\\研发费用加计扣除优惠明细表.pdf";
        //2000
        String filePath2 ="F:\\JAVA\\weixin\\kewei_file\\维迈建筑物多维成象系统.pdf";

        String filePath3 ="F:\\JAVA\\weixin\\kewei_file\\2017年研究开发费用结构明细表.pdf";

        List<String> imageList = pdfToImagePath(filePath3);
        Iterator<String> iterator = imageList.iterator();
        while (iterator.hasNext()){
            System.out.println(iterator.next());
        }
    }

    public static List<String> pdfToImagePath(String pdfPath){
        List<String> list = new ArrayList<>();
        //有些文件名后面是是用空格结尾注意
        String fileDirectory = pdfPath.substring(0,pdfPath.lastIndexOf(".")).trim();

        String imagePath;
        File file = new File(pdfPath);
        try{
            File f = new File(fileDirectory);
            if(!f.exists()){
                f.mkdir();
            }
            PDDocument doc = PDDocument.load(file);
            PDFRenderer renderer = new PDFRenderer(doc);
            int pageCount = doc.getNumberOfPages();
            for(int i=0;i<pageCount;i++){
                //方式1，第二个参数是设置缩放比(即像素)
                //BufferedImage image = renderer.renderImageWithDPI(i,300);
                //方式2，第二个参数是设置缩放比(即像素)
                BufferedImage image = renderer.renderImage(i,2f);
                imagePath = fileDirectory + "/"+i+".png";
                ImageIO.write(image,"PNG",new File(imagePath));
                list.add(imagePath);
            }
        }catch (IOException e){
            log.error(e.getStackTrace().toString());
        }
        return list;
    }

}
