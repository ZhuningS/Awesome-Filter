package com.example.demo.dao;

import com.example.demo.pojo.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface FourthLevelRiskDAO extends JpaRepository<FourthLevelRiskDO,Long> {
    @Query("select f.fourthLevelRiskName from FourthLevelRiskDO f where f.fourthLevelRiskCode=?1")
    String findnamebycode(String s);
    void deleteById(int id);
    @Modifying
    @Query("delete from FourthLevelRiskDO f where f.secondLevelRiskCode=?1")
    void deleteBySecondLevelRiskCode(String a);
    @Modifying
    @Query("delete from FourthLevelRiskDO f where f.thirdLevelRiskCode=?1")
    void deleteByThirdLevelRiskCode(String a);
    @Modifying
    @Query("delete from FourthLevelRiskDO f where f.firstLevelRiskCode=?1")
    void deleteByFirstLevelRiskCode(String a);
    @Query("select f from FourthLevelRiskDO f where f.fourthLevelRiskCompany=?1 order by f.fourthLevelRiskCode asc")
    List<FourthLevelRiskDO> findBycompany(String company);
    FourthLevelRiskDO findById(int id);
    @Query("SELECT f from FourthLevelRiskDO f where f.firstLevelRiskCode=?1 order by f.fourthLevelRiskCode asc")
    List<FourthLevelRiskDO> findByFirstLevelRiskCode(String fr);
    @Query("SELECT f from FourthLevelRiskDO f where f.thirdLevelRiskCode=?1 order by f.fourthLevelRiskCode asc")
    List<FourthLevelRiskDO> findByThirdLevelRiskCode(String fr);
    @Query("SELECT f from FourthLevelRiskDO f where f.secondLevelRiskCode=?1 order by f.fourthLevelRiskCode asc")
    List<FourthLevelRiskDO> findBySecondLevelRiskCode(String fr);
    @Modifying
    @Query("update FourthLevelRiskDO set "+
            "fourthLevelRiskCode=?1," +
            "fourthLevelRiskName=?2," +
            "fourthLevelRiskDescription=?3"+
            " where id=?4"
    )
    int update(
            String fourthLevelRiskCode,
            String fourthLevelRiskName,
            String fourthLevelRiskDescription,
            int id
    );
    @Query("select f from FourthLevelRiskDO f where f.fourthLevelRiskCode like %?1% or f.fourthLevelRiskName like %?1% or f.fourthLevelRiskDescription like %?1% or f.firstLevelRiskCode like %?1% or f.secondLevelRiskCode like %?1% or f.thirdLevelRiskCode like %?1% or f.fourthLevelRiskCompany like %?1% or f.fourthLevelRiskDepartment like %?1% or f.fourthLevelRiskApplication like %?1% order by f.fourthLevelRiskCode asc")
    List<FourthLevelRiskDO> findAllBykeyLike(String key);
    @Query("select max(id) from FourthLevelRiskDO f  ")
    int findidmax();
    @Query("select f from FourthLevelRiskDO f where f.fourthLevelRiskName=?1")
    FourthLevelRiskDO findByname(String name);
    @Query("select f from FourthLevelRiskDO f where f.firstLevelRiskCode=?1")
    Page<FourthLevelRiskDO> findByPage_first(String firstLevelRiskCode, Pageable pageable);
    @Query("select f from FourthLevelRiskDO f where f.secondLevelRiskCode=?1")
    Page<FourthLevelRiskDO> findByPage_second(String secondLevelRiskCode, Pageable pageable);
    @Query("select f from FourthLevelRiskDO f where f.thirdLevelRiskCode=?1")
    Page<FourthLevelRiskDO> findByPage(String thirdLevelRiskCode, Pageable pageable);
    @Query("select f from FourthLevelRiskDO f where f.fourthLevelRiskName=?1")
    Page<FourthLevelRiskDO> findByPage_fourthLevelRiskName(String fourthLevelRiskName, Pageable pageable);

    Page<FourthLevelRiskDO> findAll( Pageable pageable);

}
