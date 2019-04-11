package com.example.demo.service;

import com.example.demo.dao.ArticleDAO;
import com.example.demo.dao.CompanyDAO;
import com.example.demo.pojo.ArticleDO;
import com.example.demo.pojo.CompanyDO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class ArticleServiceimpl implements ArticleService {
@Autowired
private ArticleDAO articleDAO;


    @Override
    public ArticleDO saveArticle(ArticleDO articleDO) {
        return articleDAO.save(articleDO);
    }

    @Override
    public ArticleDO updateArticle(ArticleDO articleDO) {
        return articleDAO.saveAndFlush(articleDO);
    }

    @Override
    public ArticleDO findArticle(int id) {
        return articleDAO.findById(id);
    }

    @Override
    public void deleteArticle(int id) {
     articleDAO.deleteById(id);
    }
}
