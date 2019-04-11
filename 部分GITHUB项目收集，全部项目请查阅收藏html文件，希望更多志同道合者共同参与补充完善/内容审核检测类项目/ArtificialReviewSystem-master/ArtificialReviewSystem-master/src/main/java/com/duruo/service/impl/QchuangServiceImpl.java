package com.duruo.service.impl;

import com.duruo.common.ServerResponse;
import com.duruo.dao.QchuangMapper;
import com.duruo.po.Qchuang;
import com.duruo.service.IQchuangService;
import com.duruo.util.DateTimeUtil;
import com.duruo.vo.QchaungVO;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by @Author tachai
 * date 2018/9/14 19:03
 * GitHub https://github.com/TACHAI
 * Email 1206966083@qq.com
 */
@Service("iQchuangService")
public class QchuangServiceImpl implements IQchuangService {
    @Autowired
    private QchuangMapper qchuangMapper;

    /**
     * @param qchuang
     * @return
     */
    @Override
    public ServerResponse<String> add(Qchuang qchuang) {
        if(qchuang!=null){
            //判断该用户是否注册过
            Qchuang qchuang1 = qchuangMapper.selectByIdcard(qchuang.getIdCard());
            if(qchuang1!=null)
                return ServerResponse.createByErrorMessage("该用户已经注册过");
            //判断是否插入成功
            qchuang.setIsDelete(1);
            qchuang.setStatus(1);
           int result = qchuangMapper.insert(qchuang);
            if(result>0){
                return ServerResponse.createBySuccessMessage("新增成功");
            }
            return ServerResponse.createByErrorMessage("新增失败");
        }
        return ServerResponse.createByErrorMessage("传入的值为空");
    }

    @Override
    public ServerResponse<String> update(Qchuang qchuang) {
        if(qchuang!=null){
            Qchuang qchuang1 = qchuangMapper.selectByIdcard(qchuang.getIdCard());
            if(qchuang1!=null){
                int result = qchuangMapper.updateByPrimaryKeySelective(qchuang);
                return result>0?ServerResponse.createBySuccessMessage("更新成功"):ServerResponse.createByErrorMessage("更新失败");
            }
            return ServerResponse.createByErrorMessage("该用户不存在");
        }
        return ServerResponse.createByErrorMessage("传入的参数为空");
    }

    @Override
    public ServerResponse<String> del(String id) {
        if(id!=null){
            Qchuang qchuang = qchuangMapper.selectByPrimaryKey(id);
            if(qchuang!=null){
                qchuang.setIsDelete(0);
                int result = qchuangMapper.updateByPrimaryKeySelective(qchuang);
                return result>0?ServerResponse.createBySuccessMessage("删除成功"):ServerResponse.createByErrorMessage("删除失败");
            }
            return ServerResponse.createByErrorMessage("该法人不存在");
        }
        return ServerResponse.createByErrorMessage("传入的值为空");
    }

    @Override
    public ServerResponse<List<QchaungVO>> list(String companyName, String startTime, String endTime) {
        List<Qchuang> list = qchuangMapper.list(companyName, startTime, endTime);
        List<QchaungVO> listvo = new ArrayList<>();
        list.forEach(e->{
            QchaungVO vo = new QchaungVO();
            BeanUtils.copyProperties(e,vo);
            //注册时间
            vo.setApplyDate1(DateTimeUtil.dateToStr(e.getRegDate()));
            //申请时间
            vo.setApplyDate(DateTimeUtil.dateToStr(e.getCreateDate()));
            listvo.add(vo);
        });
        return ServerResponse.createBySuccess(listvo);
    }

    @Override
    public ServerResponse<List<QchaungVO>> donelist(String companyName, String startTime, String endTime){
        List<Qchuang> list = qchuangMapper.donelist(companyName,startTime,endTime);
        List<QchaungVO> listvo = new ArrayList<>();
        list.forEach(e->{
            QchaungVO vo = new QchaungVO();
            BeanUtils.copyProperties(e,vo);
            //注册时间
            vo.setApplyDate1(DateTimeUtil.dateToStr(e.getRegDate()));
            //申请时间
            vo.setApplyDate(DateTimeUtil.dateToStr(e.getCreateDate()));
            listvo.add(vo);
        });
        return ServerResponse.createBySuccess(listvo);    }
}
