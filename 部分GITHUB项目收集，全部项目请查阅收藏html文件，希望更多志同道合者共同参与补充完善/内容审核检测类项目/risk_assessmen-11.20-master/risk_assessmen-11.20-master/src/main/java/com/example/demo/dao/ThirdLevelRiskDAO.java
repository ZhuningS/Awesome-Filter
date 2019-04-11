package com.example.demo.dao;

import com.example.demo.pojo.FirstLevelRiskDO;
import com.example.demo.pojo.FourthLevelRiskDO;
import com.example.demo.pojo.SecondLevelRiskDO;
import com.example.demo.pojo.ThirdLevelRiskDO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface ThirdLevelRiskDAO extends JpaRepository<ThirdLevelRiskDO,Long> {
    @Query("select t.thirdLevelRiskName from ThirdLevelRiskDO t where t.thirdLevelRiskCode=?1")
    String findnamebycode(String s);
    @Query("select t from ThirdLevelRiskDO t where t.secondLevelRiskCode=?1 order by t.thirdLevelRiskCode asc ")
    List<ThirdLevelRiskDO> findBySecondLevelRiskCode(String s);
    @Modifying
    @Query("delete from ThirdLevelRiskDO t where t.secondLevelRiskCode=?1")
    void deleteBySecondLevelRiskCode(String a);
    @Modifying
    @Query("delete from ThirdLevelRiskDO t where t.firstLevelRiskCode=?1")
    void deleteByFirstLevelRiskCode(String a);
    void deleteById(int id);
    @Query("select t from ThirdLevelRiskDO t where t.thirdLevelRiskCompany=?1 order by t.thirdLevelRiskCode asc")
    List<ThirdLevelRiskDO> findBycompany(String company);
    ThirdLevelRiskDO findById(int id);
    @Query("SELECT t from ThirdLevelRiskDO t where t.firstLevelRiskCode=?1 order by t.thirdLevelRiskCode asc")
    List<ThirdLevelRiskDO> findByFirstLevelRiskCode(String fr);
    @Modifying
    @Query("update ThirdLevelRiskDO set "+
            "thirdLevelRiskCode=?1," +
            "thirdLevelRiskName=?2," +
            "thirdLevelRiskDescription=?3"+
            " where id=?4"
    )
    int update(
            String secondLevelRiskCode,
            String secondLevelRiskName,
            String thirdLevelRiskDescription,
            int id
    );
    @Query("select t from ThirdLevelRiskDO t where t.thirdLevelRiskCode like %?1% or t.thirdLevelRiskName like %?1% or t.thirdLevelRiskDescription like %?1% or t.secondLevelRiskCode like %?1% or t.thirdLevelRiskApplication like %?1% or t.firstLevelRiskCode like %?1% or t.thirdLevelRiskCompany like %?1% or t.thirdLevelRiskDepartment like %?1%")
    List<ThirdLevelRiskDO> findAllBykeyLike(String key);
    @Query("select max(id) from ThirdLevelRiskDO t  ")
    int findidmax();
    @Query("SELECT t from ThirdLevelRiskDO t where t.thirdLevelRiskCode=?1")
    ThirdLevelRiskDO findByThirdLevelRiskCode(String third);
    @Query("select t from ThirdLevelRiskDO t where t.thirdLevelRiskName=?1")
    ThirdLevelRiskDO findByname(String name);
    @Query("select t from ThirdLevelRiskDO t where t.secondLevelRiskCode=?1")
    Page<ThirdLevelRiskDO> findByPage(String secondLevelRiskCode, Pageable pageable);
    @Query("select t from ThirdLevelRiskDO t where t.firstLevelRiskCode=?1")
    Page<ThirdLevelRiskDO> findByPage_first(String firstLevelRiskCode, Pageable pageable);
    @Query("select t from ThirdLevelRiskDO t where t.thirdLevelRiskName=?1")
    Page<ThirdLevelRiskDO> findByPage_thirdLevelRiskName(String thirdLevelRiskName, Pageable pageable);
    Page<ThirdLevelRiskDO> findAll(Pageable pageable);
    @Query("select t from ThirdLevelRiskDO t where t.thirdLevelRiskCode=?1")
    ThirdLevelRiskDO findBycode(String name);


}
