package com.example.demo.dao;

import com.example.demo.pojo.ArticleDO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface ArticleDAO extends JpaRepository<ArticleDO,Long>{
    ArticleDO findById(int id);
    void deleteById(int id);
}
