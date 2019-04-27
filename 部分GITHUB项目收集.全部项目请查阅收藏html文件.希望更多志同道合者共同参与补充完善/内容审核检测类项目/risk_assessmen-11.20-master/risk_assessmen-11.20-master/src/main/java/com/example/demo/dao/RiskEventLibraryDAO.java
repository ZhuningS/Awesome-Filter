package com.example.demo.dao;

import com.example.demo.pojo.RiskEventLibraryDO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface RiskEventLibraryDAO extends JpaRepository<RiskEventLibraryDO,Long> {
    RiskEventLibraryDO findById(int id);

    @Query("select r from RiskEventLibraryDO r where r.relatedBusinessSector =?1")
    List<RiskEventLibraryDO> findBycompany(String s);
    void deleteById(int id);
    @Modifying
    @Query("update RiskEventLibraryDO set "+
            "caseSource=?1," +
            "riskEventsReportCompany=?2," +
            "riskEventsName=?3,"+
            "riskEventsDescription=?4,"+
            "financialLossImpact=?5,"+
            "healthSafetyImpact=?6,"+
            "environmentImpact=?7,"+
            "complianceImpact=?8,"+
            "reputationImpact=?9,"+
            "causesMajorRisksAnalysis=?10,"+
            "firstLevelRisk=?11,"+
            "secondLevelRisk=?12,"+
            "thirdLevelRisk=?13,"+
            "fourthLevelRisk=?14,"+
            "riskRelatedDepartment=?15,"+
            "riskEventRating=?16,"+
            "riskEventCopingStrategies=?17,"+
            "riskEventMeasure=?18"+
            " where id=?19"
    )
    int update(
            String caseSource,
            String riskEventsReportCompany,
            String riskEventsName,
            String riskEventsDescription,
            String financialLossImpact,
            String healthSafetyImpact,
            String environmentImpact,
            String complianceImpact,
            String reputationImpact,
            String causesMajorRisksAnalysis,
            String firstLevelRisk,
            String secondLevelRisk,
            String thirdLevelRisk,
            String fourthLevelRisk,
            String riskRelatedDepartment,
            String riskEventRating,
            String riskEventCopingStrategies,
            String riskEventMeasure,
            int id
    );
    @Query("select r from RiskEventLibraryDO r where r.riskEventsName like %?1% and r.relatedBusinessSector=?2 order by r.id desc ")
    List<RiskEventLibraryDO> findBykey(String a,String b);
    @Query("select r from RiskEventLibraryDO r where r.firstLevelRisk like %?1% and r.relatedBusinessSector=?2  order by r.id desc ")
    Page<RiskEventLibraryDO> findByFirstLevelRiskrelated(String a, String b, Pageable pageable);
    @Query("select r from RiskEventLibraryDO r where r.secondLevelRisk like %?1% and r.relatedBusinessSector=?2  order by r.id desc ")
    Page<RiskEventLibraryDO> findBySecondLevelRisklrelated(String a, String b, Pageable pageable);
    @Query("select r from RiskEventLibraryDO r where r.thirdLevelRisk like %?1% and r.relatedBusinessSector=?2  order by r.id desc ")
    Page<RiskEventLibraryDO> findByThirdLevelRiskrelated(String a, String b, Pageable pageable);
    @Query("select r from RiskEventLibraryDO r where r.fourthLevelRisk like %?1% and r.relatedBusinessSector=?2  order by r.id desc ")
    Page<RiskEventLibraryDO> findByFourthLevelRiskrelated(String a, String b, Pageable pageable);

}
