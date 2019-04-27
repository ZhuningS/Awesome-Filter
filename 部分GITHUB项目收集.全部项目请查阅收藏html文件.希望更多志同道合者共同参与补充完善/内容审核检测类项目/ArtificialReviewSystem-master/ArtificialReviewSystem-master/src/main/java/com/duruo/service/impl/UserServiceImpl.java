package com.duruo.service.impl;

import com.duruo.common.ServerResponse;
import com.duruo.dao.DeptMapper;
import com.duruo.dao.UserMapper;
import com.duruo.po.Dept;
import com.duruo.po.User;
import com.duruo.po.UserPo;
import com.duruo.service.IUseService;
import com.duruo.util.MD5Util;
import com.duruo.vo.UserVo;
import com.fasterxml.jackson.databind.util.BeanUtil;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by @Author tachai
 * date 2018/6/10 17:21
 *
 * @Email 1206966083@qq.com
 */
@Service("iUseService")
public class UserServiceImpl implements IUseService{
    @Autowired
    private UserMapper userMapper;
    @Autowired
    private DeptMapper deptMapper;

    @Override
    public ServerResponse<User> login(String username, String password) {
        int resultCount= userMapper.checkUsername(username);
        if(resultCount==0){
            return ServerResponse.createByErrorMessage("用户名不存在");
        }

        String md5Passswrd= MD5Util.MD5EncodeUtf8(password);
        User user = userMapper.selectLogin(username,md5Passswrd);
//        User user = userMapper.selectLogin(username,password);
        if(user==null){
            return ServerResponse.createByErrorMessage("密码错误");
        }
        user.setPassword(StringUtils.EMPTY);
        return ServerResponse.createBySuccess(user,"登录成功");
    }

    //将数据库里面的对象copy视图层对象增加一个deptName字段
    @Override
    public ServerResponse<UserVo> selectById(Integer id) {
        UserPo userPo = userMapper.selectByPrimaryKey(id);
        UserVo userVo= new UserVo();
        BeanUtils.copyProperties(userPo,userVo);
        Dept dept = deptMapper.selectByPrimaryKey(userPo.getDeptId());
        userVo.setDeptName(dept.getDeptName());
        return ServerResponse.createBySuccess(userVo,"查询成功");
    }

    @Override
    public ServerResponse<List<UserVo>> list(UserPo user) {
        List<UserPo> list = userMapper.selectByCondition(user);
        List<UserVo> userVoList=new ArrayList<UserVo>();
        for(UserPo userPo : list){
            UserVo userVo= new UserVo();
            BeanUtils.copyProperties(userPo,userVo);
            Dept dept = deptMapper.selectByPrimaryKey(userPo.getDeptId());
            //如果这里为空的话会报错，因为插数据的时候有可能没有插deptId;
            if(dept != null){
                userVo.setDeptName(dept.getDeptName());
            }
            userVoList.add(userVo);
        }
        return ServerResponse.createBySuccess(userVoList,"查询用户数据成功");
    }

    @Override
    public ServerResponse<String> insertUser(UserPo user) {
        user.setPassword(MD5Util.MD5EncodeUtf8(user.getPhone()));
        int temp = userMapper.checkUsername(user.getUserName());
        if(temp>0){
            return ServerResponse.createByErrorMessage("该用户已存在");
        }else {
            int result= userMapper.insert(user);
            if(result>0){
                return ServerResponse.createBySuccessMessage("新增用户成功");
            }else {
                return ServerResponse.createByErrorMessage("新增用户失败");
            }
        }
    }

    @Override
    public ServerResponse<String> deleteUser(Integer userId) {
        int reulst = userMapper.deleteByPrimaryKey(userId);
        if(reulst>0){
            return ServerResponse.createBySuccessMessage("删除用户成功");
        }else {
            return ServerResponse.createByErrorMessage("删除用户失败");
        }
    }

    @Override
    public ServerResponse<String> updateUser(UserPo user) {
       int  result=userMapper.updateByPrimaryKeySelective(user);
       System.out.println(result+"更新用户成功");
        if(result>0){
           return ServerResponse.createBySuccessMessage("修改用户成功");
        }else {
            return ServerResponse.createByErrorMessage("修改用户失败");
        }
    }

    @Override
    public ServerResponse<String> resetPassword(Integer userId) {

        UserPo user = userMapper.selectByPrimaryKey(userId);
        user.setPassword(MD5Util.MD5EncodeUtf8(user.getPhone()));;
        int result = userMapper.updateByPrimaryKeySelective(user);
        if(result>0){
            return ServerResponse.createBySuccessMessage("重置密码为该用户的手机号");
        }else {
            return ServerResponse.createByErrorMessage("重置密码失败");
        }
    }
}
