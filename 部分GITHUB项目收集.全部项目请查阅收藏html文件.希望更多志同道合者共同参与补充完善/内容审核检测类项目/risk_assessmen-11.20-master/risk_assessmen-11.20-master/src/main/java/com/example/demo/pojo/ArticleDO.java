package com.example.demo.pojo;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class ArticleDO {
    @Id
    @GeneratedValue
    private int id;

    public ArticleDO() {
    }

    private String title;
    private String content;
    @OneToMany(mappedBy = "articleDO",cascade = {CascadeType.PERSIST,CascadeType.REMOVE,CascadeType.MERGE},fetch = FetchType.EAGER)
    private List<CommentDO> commentDOS=new ArrayList<>();

    @ManyToMany
    private List<TopicDO> topicDOS= new ArrayList<>();
    public void addcomment(CommentDO commentDO){
        commentDO.setArticleDO(this);
        commentDOS.add(commentDO);
    }


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public List<CommentDO> getCommentDOS() {
        return commentDOS;
    }

    public void setCommentDOS(List<CommentDO> commentDOS) {
        this.commentDOS = commentDOS;
    }
}
