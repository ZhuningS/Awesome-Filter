package com.example.demo.dao;

import com.example.demo.pojo.FirstLevelRiskDO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface FirstLevelRiskDAO extends JpaRepository<FirstLevelRiskDO,Long> {
    void deleteById(int id);
    @Query("select f from FirstLevelRiskDO f where f.firstLevelRiskCompany=?1")
    List<FirstLevelRiskDO>  findBycompany(String status);
    @Query("select f from FirstLevelRiskDO f where f.firstLevelRiskName=?1")
    FirstLevelRiskDO findByname(String name);
    @Query("select f from FirstLevelRiskDO f where f.firstLevelRiskCode=?1")
    FirstLevelRiskDO findByriskcode(String name);

    FirstLevelRiskDO findById(int id);
    @Query("select f.firstLevelRiskName from FirstLevelRiskDO f where f.firstLevelRiskCode=?1")
    String findnamebycode(String s);
    @Modifying
    @Query("select f from FirstLevelRiskDO f where f.firstLevelRiskCode like %?1% or f.firstLevelRiskName like %?1% or f.firstLevelRiskApplication like %?1% or f.firstLevelRiskDepartment like %?1% or f.firstLevelRiskDepartment like %?1% or f.firstLevelRiskGroup like %?1% order by f.firstLevelRiskCode asc")
    List<FirstLevelRiskDO> findAllBykeyLike(String key);
    @Query("select f from FirstLevelRiskDO f where f.firstLevelRiskName=?1")
    FirstLevelRiskDO findByFirstLevelRiskName(String name);
    @Query("select f from FirstLevelRiskDO f where f.firstLevelRiskStatus=?1 order by f.firstLevelRiskCode asc")
    List<FirstLevelRiskDO> findBystatus(String status);
    @Query("select f from FirstLevelRiskDO f where f.firstLevelRiskCompany=?1 and f.firstLevelRiskStatus=?2 order by f.firstLevelRiskCode asc ")
    List<FirstLevelRiskDO> findBycompanyandstatus(String company,String status);
    @Modifying
    @Query("update FirstLevelRiskDO set "+
            "firstLevelRiskCode=?1," +
            "firstLevelRiskName=?2" +
            " where id=?3"
    )
    int update(
            String firstLevelRiskCode,
            String firstLevelRiskName,
            int id
    );
    @Modifying
    @Query("update FirstLevelRiskDO set "+
            "firstLevelRiskCode=?1," +
            "firstLevelRiskName=?2," +
            "firstLevelRiskDescription=?3"+
            " where id=?4"
    )
    int update_group(
            String firstLevelRiskCode,
            String firstLevelRiskName,
            String firstLevelRiskDescription,
            int id
    );
   @Query("select f from FirstLevelRiskDO f where f.firstLevelTopic=?1 order by f.firstLevelRiskCode asc")
    List<FirstLevelRiskDO> findByFirstLevelTopic(String f);
   @Query("select f from FirstLevelRiskDO f where f.firstLevelTopic=?1 and f.firstLevelRiskStatus=?2")
   Page<FirstLevelRiskDO> findByPage(String firstLevelTopic,String status,Pageable pageable);
    @Query("select f from FirstLevelRiskDO f where f.firstLevelRiskPerson=?1 and f.firstLevelRiskStatus=?2")
    Page<FirstLevelRiskDO> findByfirstLevelRiskPerson_setup(String name,String status,Pageable pageable);
    @Query("select f from FirstLevelRiskDO f where f.firstLevelRiskApplication=?1 and f.firstLevelRiskStatus=?2")
    Page<FirstLevelRiskDO> findByFirstLevelRiskApplication_setup(String name,String status,Pageable pageable);
    @Query("select f from FirstLevelRiskDO f where f.firstLevelRiskName=?1 and f.firstLevelRiskStatus=?2")
    Page<FirstLevelRiskDO> findByfirstLevelRiskPerson_firstLevelRiskName(String name,String status,Pageable pageable);
    @Query("select f from FirstLevelRiskDO f where f.firstLevelRiskStatus=:status")
    Page<FirstLevelRiskDO> findAllBypage(@Param("status") String status, Pageable pageable);


}
