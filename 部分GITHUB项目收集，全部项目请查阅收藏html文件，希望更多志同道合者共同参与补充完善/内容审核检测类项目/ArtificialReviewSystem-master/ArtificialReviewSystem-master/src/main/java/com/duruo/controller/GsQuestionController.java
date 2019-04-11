package com.duruo.controller;


import com.duruo.dao.GsquestionMapper;
import com.duruo.po.Gsquestion;
import com.duruo.vo.PageHelp;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.List;

/**
 * Created by @Author tachai
 * date 2018/7/15 13:10
 *
 * @Email 1206966083@qq.com
 */
@RequestMapping("/gsquestion/")
@Controller
public class GsQuestionController {
    @Autowired
    private GsquestionMapper gsquestionMapper;


    @GetMapping("list.do")
    @ResponseBody
    public PageHelp list(String title, String askContent, String replyContent, @RequestParam(value = "pageSize",defaultValue = "25")int pageSize , @RequestParam(value="pageNumber",defaultValue = "1")int pageNumber ){
        Page page =PageHelper.startPage(pageNumber,pageSize);
        try {
            if(replyContent!=null){
                replyContent = URLDecoder.decode(replyContent,"utf-8");
            }
            if(title !=null){
                title = URLDecoder.decode(title,"utf-8");
            }
            if(askContent!=null){
                askContent = URLDecoder.decode(askContent,"utf-8");
            }
            List<Gsquestion> list = gsquestionMapper.list(title,askContent,replyContent);
            if(list!=null){
//                PageInfo pageResult=new PageInfo(list);

                Long total = page.getTotal();
                PageHelp pageHelp = new PageHelp();
                pageHelp.setTotal(total);
                pageHelp.setRows(list);
                return pageHelp;
            }
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        return null;
    }

}
