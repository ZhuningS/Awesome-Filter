package com.duruo.dao;

import com.duruo.po.RetailLicense;
import org.apache.ibatis.annotations.Param;

import java.util.Date;
import java.util.List;

public interface RetailLicenseMapper {
    int deleteByPrimaryKey(int id);

    int insert(RetailLicense record);

    int insertSelective(RetailLicense record);

    RetailLicense selectByPrimaryKey(int id);

    int updateByPrimaryKeySelective(RetailLicense record);

    int updateByPrimaryKey(RetailLicense record);

    List<RetailLicense> list(Integer deptId);

    List<RetailLicense> listDone(Integer deptId);

    RetailLicense selectByTimeAndMsgId(@Param("msgId") String msgId, @Param("createTime") Date createTime);

    RetailLicense lockByPrimaryKey(Integer licenseId);

    RetailLicense getRetailLicense(Integer licenseId);

    int selectUnDo(Integer bmId);

}