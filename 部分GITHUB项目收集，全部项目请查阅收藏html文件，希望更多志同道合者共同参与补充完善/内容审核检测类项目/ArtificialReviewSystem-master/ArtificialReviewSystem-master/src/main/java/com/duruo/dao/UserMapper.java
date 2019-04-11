package com.duruo.dao;

import com.duruo.po.User;
import com.duruo.po.UserPo;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface UserMapper {
    int deleteByPrimaryKey(Integer userId);

    int insert(UserPo record);

    int insertSelective(UserPo record);

    UserPo selectByPrimaryKey(Integer userId);

    int updateByPrimaryKeySelective(UserPo record);

    int updateByPrimaryKey(UserPo record);

    User selectLogin(@Param("userName") String userName, @Param("userPassword") String userPassWord);

    int checkUsername(String userName);

    List<UserPo> selectByCondition(UserPo user);

    int updatePassword(@Param("newPassword") String newPassword,@Param("userId") Integer userId);
}