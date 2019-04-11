package com.duruo.po;

import lombok.Builder;
import lombok.Data;

@Data
public class Projectdetail {
    private String sn;

    private String enterpriseId;

    private String project;

    private String technical;

    private String rbeb;

    private String trts;

    private String cip;

    private String wbrdc;

    private String schedule;

    private String ai;

    @Builder.Default
    private String auditOpinion="";

    private String projectnum;

    private String shyj2;

    private String realSn;

    private String xmstatuscode;

    private String  id;

    private String status;

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

    public String getProject() {
        return project;
    }

    public void setProject(String project) {
        this.project = project == null ? null : project.trim();
    }

    public String getTechnical() {
        return technical;
    }

    public void setTechnical(String technical) {
        this.technical = technical == null ? null : technical.trim();
    }

    public String getRbeb() {
        return rbeb;
    }

    public void setRbeb(String rbeb) {
        this.rbeb = rbeb == null ? null : rbeb.trim();
    }

    public String getTrts() {
        return trts;
    }

    public void setTrts(String trts) {
        this.trts = trts == null ? null : trts.trim();
    }

    public String getCip() {
        return cip;
    }

    public void setCip(String cip) {
        this.cip = cip == null ? null : cip.trim();
    }

    public String getWbrdc() {
        return wbrdc;
    }

    public void setWbrdc(String wbrdc) {
        this.wbrdc = wbrdc == null ? null : wbrdc.trim();
    }

    public String getSchedule() {
        return schedule;
    }

    public void setSchedule(String schedule) {
        this.schedule = schedule == null ? null : schedule.trim();
    }

    public String getAi() {
        return ai;
    }

    public void setAi(String ai) {
        this.ai = ai == null ? null : ai.trim();
    }

    public String getProjectnum() {
        return projectnum;
    }

    public void setProjectnum(String projectnum) {
        this.projectnum = projectnum;
    }

    public String getAuditOpinion() {
        return auditOpinion;
    }

    public void setAuditOpinion(String auditOpinion) {
        this.auditOpinion = auditOpinion == null ? null : auditOpinion.trim();
    }

    public String getShyj2() {
        return shyj2;
    }

    public void setShyj2(String shyj2) {
        this.shyj2 = shyj2;
    }


    public String getXmstatuscode() {
        return xmstatuscode;
    }

    public void setXmstatuscode(String xmstatuscode) {
        this.xmstatuscode = xmstatuscode;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getRealSn() {
        return realSn;
    }

    public void setRealSn(String realSn) {
        this.realSn = realSn;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}