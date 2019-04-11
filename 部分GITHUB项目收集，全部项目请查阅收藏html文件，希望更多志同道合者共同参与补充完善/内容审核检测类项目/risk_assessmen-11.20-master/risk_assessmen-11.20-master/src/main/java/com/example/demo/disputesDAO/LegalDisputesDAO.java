package com.example.demo.disputesDAO;

import com.example.demo.disputespojo.LegalDisputesDO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface LegalDisputesDAO extends JpaRepository<LegalDisputesDO,Long> {
    LegalDisputesDO findById(int id);
    void deleteById(int id);

    @Query("select l from LegalDisputesDO l where l.monthnum=:monthnum")
    LegalDisputesDO findByMonthnum(@Param("monthnum") int monthnum);


}
