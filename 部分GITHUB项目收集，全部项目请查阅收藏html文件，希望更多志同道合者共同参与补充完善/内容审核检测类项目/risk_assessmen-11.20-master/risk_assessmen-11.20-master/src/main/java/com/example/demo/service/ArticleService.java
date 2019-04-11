package com.example.demo.service;

import com.example.demo.pojo.ArticleDO;
import com.example.demo.pojo.CompanyDO;

public interface ArticleService {
    ArticleDO saveArticle(ArticleDO articleDO);
    ArticleDO updateArticle(ArticleDO articleDO);
    ArticleDO findArticle(int id);
    void deleteArticle(int id);
}
