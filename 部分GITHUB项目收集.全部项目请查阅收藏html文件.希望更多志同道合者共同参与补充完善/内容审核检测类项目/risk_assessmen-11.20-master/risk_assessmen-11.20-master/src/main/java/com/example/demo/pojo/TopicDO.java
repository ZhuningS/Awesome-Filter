package com.example.demo.pojo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.ArrayList;
import java.util.List;

@Entity
public class TopicDO {
    @Id
    @GeneratedValue
    private int id;
    private String name;

    @ManyToMany
    private List<ArticleDO> articleDOS= new ArrayList<>();

    public TopicDO() {
    }

    public TopicDO(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


}
