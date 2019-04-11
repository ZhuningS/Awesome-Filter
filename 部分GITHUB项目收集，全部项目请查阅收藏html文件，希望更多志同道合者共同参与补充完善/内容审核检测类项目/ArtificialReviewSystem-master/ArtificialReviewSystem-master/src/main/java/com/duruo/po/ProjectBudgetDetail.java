package com.duruo.po;

public class ProjectBudgetDetail {
    private Integer id;

    private String sn;

    private String enterpriseId;

    private String decomposeDetailed;

    private String specialFunds;

    private String selfFinancing;

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

    public String getDecomposeDetailed() {
        return decomposeDetailed;
    }

    public void setDecomposeDetailed(String decomposeDetailed) {
        this.decomposeDetailed = decomposeDetailed == null ? null : decomposeDetailed.trim();
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
}