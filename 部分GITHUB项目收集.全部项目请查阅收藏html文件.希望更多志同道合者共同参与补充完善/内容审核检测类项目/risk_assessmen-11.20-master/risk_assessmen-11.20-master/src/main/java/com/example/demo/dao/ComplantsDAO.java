package com.example.demo.dao;

import com.example.demo.pojo.ComplantsDO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface ComplantsDAO extends JpaRepository<ComplantsDO,Long> {
    ComplantsDO findById(int id);
    void deleteById(int id);

}
