package com.duruo.controller;

import com.duruo.common.Const;
import com.duruo.common.ResponseCode;
import com.duruo.common.ServerResponse;
import com.duruo.dao.DeptMapper;
import com.duruo.po.Dept;
import com.duruo.po.User;
import com.duruo.vo.OpptionsVo;
import net.sf.jsqlparser.expression.operators.arithmetic.Concat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by @Author tachai
 * date 2018/6/14 19:06
 *
 * @Email 1206966083@qq.com
 */
@RestController
@RequestMapping("/dept/")
public class DeptController {
    @Autowired
    private DeptMapper deptMapper;

    @GetMapping("list.do")
    public ServerResponse<List<OpptionsVo>> list(HttpSession session){
        User user=(User) session.getAttribute(Const.CURRENT_USER);
        if(user!=null){
            List<Dept> list=deptMapper.list();
            List<OpptionsVo> opptionsVoList = new ArrayList<>();
            list.forEach(e->{
                OpptionsVo opptionsVo=new OpptionsVo();
                opptionsVo.setValue(e.getDeptId());
                opptionsVo.setText(e.getDeptName());
                opptionsVoList.add(opptionsVo);
            });

            return ServerResponse.createBySuccess(opptionsVoList,"查询成功");
        }else {
            return ServerResponse.createByErrorMessage(ResponseCode.NEED_LOGIN.getDesc());
        }
    }
}
