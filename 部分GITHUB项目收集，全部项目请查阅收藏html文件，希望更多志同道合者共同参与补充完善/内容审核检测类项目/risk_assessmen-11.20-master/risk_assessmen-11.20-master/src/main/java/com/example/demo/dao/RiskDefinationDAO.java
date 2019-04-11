package com.example.demo.dao;

import com.example.demo.pojo.CompanyDO;
import com.example.demo.pojo.RiskDefinationDO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface RiskDefinationDAO extends JpaRepository<RiskDefinationDO,Long> {
    RiskDefinationDO findById(int id);
    void deleteById(int id);
    @Modifying
    @Query("update RiskDefinationDO set "+
            "riskStrategy=?1," +
            "riskStrategyDescription=?2"+
            " where id=?3"
    )
    int update(
            String riskStrategy,
            String riskStrategyDescription,
            int id
    );
}
