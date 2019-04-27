package com.example.demo.dao;

import com.example.demo.pojo.CompanyDO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface CompanyDAO extends JpaRepository<CompanyDO,Long> {
    CompanyDO findById(int id);
    void deleteById(int id);
    @Modifying
    @Query("update CompanyDO set "+
            "companyName=?1," +
            "companyRepresentative=?2" +
            " where id=?3"
    )
    int update(
            String companyName,
            String companyRepresentative,
            int id
    );

}
