package com.example.demo.pojo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
@Entity
public class CommentDO {
    @Id
    @GeneratedValue
    private int id;
    private String content;
    @ManyToOne
    private ArticleDO articleDO;
    public CommentDO() {
    }
    public CommentDO(String content) {
        this.content = content;
    }

    public int getId() {
        return id;

    }

    public void setId(int id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }


    public ArticleDO getArticleDO() {
        return articleDO;
    }

    public void setArticleDO(ArticleDO articleDO) {
        this.articleDO = articleDO;
    }
}
