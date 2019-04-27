package com.example.demo.dao;

import com.example.demo.pojo.RulesRegulationsDO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RulesRegulationsDAO extends JpaRepository<RulesRegulationsDO,Long> {
    RulesRegulationsDO findById(int id);
    @Query("select r from RulesRegulationsDO r where r.rulesAndRegulationsNotice <> ?1")
    List<RulesRegulationsDO> findByRulesAndRegulationsNotice(String n);

}
