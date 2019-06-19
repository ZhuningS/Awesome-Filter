package com.duruo.po;

public class ProjectBudget {
    private Integer id;

    private String sn;

    private String enterpriseId;

    //项目总预算
    private String generalBudget;

    //其中专项资金
    private String specialFunds;

    //自筹资金
    private String selfFinancing;

    //项目当年开发费用
    private String developmentCost;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSn() {
        return sn;
    }

    public void setSn(String sn) {
        this.sn = sn == null ? null : sn.trim();
    }

    public String getEnterpriseId() {
        return enterpriseId;
    }

    public void setEnterpriseId(String enterpriseId) {
        this.enterpriseId = enterpriseId == null ? null : enterpriseId.trim();
    }

    public String getGeneralBudget() {
        return generalBudget;
    }

    public void setGeneralBudget(String generalBudget) {
        this.generalBudget = generalBudget == null ? null : generalBudget.trim();
    }

    public String getSpecialFunds() {
        return specialFunds;
    }

    public void setSpecialFunds(String specialFunds) {
        this.specialFunds = specialFunds == null ? null : specialFunds.trim();
    }

    public String getSelfFinancing() {
        return selfFinancing;
    }

    public void setSelfFinancing(String selfFinancing) {
        this.selfFinancing = selfFinancing == null ? null : selfFinancing.trim();
    }

    public String getDevelopmentCost() {
        return developmentCost;
    }

    public void setDevelopmentCost(String developmentCost) {
        this.developmentCost = developmentCost == null ? null : developmentCost.trim();
    }
}