package com.example.demo.dao;

import com.example.demo.pojo.FirstLevelRiskDO;
import com.example.demo.pojo.FourthLevelRiskDO;
import com.example.demo.pojo.SecondLevelRiskDO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface SecondLevelRiskDAO extends JpaRepository<SecondLevelRiskDO,Long> {
    @Query("select s.secondLevelRiskName from SecondLevelRiskDO s where s.secondLevelRiskCode=?1")
    String findnamebycode(String s);

    @Modifying
    @Query("delete from SecondLevelRiskDO s where s.firstLevelRiskCode=?1")
    void deleteByFirstLevelRiskCode(String a);
    void deleteById(int id);
    @Query("select s from SecondLevelRiskDO s where s.secondLevelRiskCompany=?1")
    List<SecondLevelRiskDO> findBycompany(String company);
    SecondLevelRiskDO findById(int id);
    @Query("SELECT s from SecondLevelRiskDO s where s.firstLevelRiskCode=?1 order by s.secondLevelRiskCode asc ")
    List<SecondLevelRiskDO> findByFirstLevelRiskCode(String fr);
    @Modifying
    @Query("update SecondLevelRiskDO set "+
            "secondLevelRiskCode=?1," +
            "secondLevelRiskName=?2," +
            "secondLevelRiskDescription=?3"+
            " where id=?4"
    )
    int update(
            String secondLevelRiskCode,
            String secondLevelRiskName,
            String secondLevelRiskDescription,
            int id
    );
    @Query("select s from SecondLevelRiskDO s where s.secondLevelRiskCode like %?1% or s.secondLevelRiskName like %?1% or s.firstLevelRiskCode like %?1% or s.secondLevelRiskCompany like %?1% or s.secondLevelRiskStatus like %?1% or s.secondLevelRiskApplication like %?1% or s.secondLevelRiskDepartment like %?1%")
    List<SecondLevelRiskDO> findAllBykeyLike(String key);

    @Query("SELECT s from SecondLevelRiskDO s where s.secondLevelRiskCode=?1 order by s.secondLevelRiskCode asc ")
    SecondLevelRiskDO findBySecondLevelRiskCode(String second);
    @Query("select s from SecondLevelRiskDO s where s.secondLevelRiskName=?1 order by s.secondLevelRiskCode asc")
    SecondLevelRiskDO findByname(String name);
    @Query("select s from SecondLevelRiskDO s where s.firstLevelRiskCode=?1")
    Page<SecondLevelRiskDO> findByPage(String firstLevelRiskCode, Pageable pageable);
    @Query("select s from SecondLevelRiskDO s where s.secondLevelRiskName=?1")
    Page<SecondLevelRiskDO> findByPage_secondLevelRiskName(String secondLevelRiskName, Pageable pageable);
    Page<SecondLevelRiskDO> findAll(Pageable pageable);

}
