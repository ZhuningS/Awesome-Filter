package com.duruo.po;

import java.util.Date;

public class AuditTempData {
    private String id;

    private String sn;

    private String enterpriseid;

    private String enterprisename;

    private String projectname;

    private String projectid;

    private String technicalfield;

    private String zjpdjg;

    private Date createTime;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    public String getSn() {
        return sn;
    }

    public void setSn(String sn) {
        this.sn = sn == null ? null : sn.trim();
    }

    public String getEnterpriseid() {
        return enterpriseid;
    }

    public void setEnterpriseid(String enterpriseid) {
        this.enterpriseid = enterpriseid == null ? null : enterpriseid.trim();
    }

    public String getEnterprisename() {
        return enterprisename;
    }

    public void setEnterprisename(String enterprisename) {
        this.enterprisename = enterprisename == null ? null : enterprisename.trim();
    }

    public String getProjectname() {
        return projectname;
    }

    public void setProjectname(String projectname) {
        this.projectname = projectname == null ? null : projectname.trim();
    }

    public String getProjectid() {
        return projectid;
    }

    public void setProjectid(String projectid) {
        this.projectid = projectid == null ? null : projectid.trim();
    }

    public String getTechnicalfield() {
        return technicalfield;
    }

    public void setTechnicalfield(String technicalfield) {
        this.technicalfield = technicalfield == null ? null : technicalfield.trim();
    }

    public String getZjpdjg() {
        return zjpdjg;
    }

    public void setZjpdjg(String zjpdjg) {
        this.zjpdjg = zjpdjg == null ? null : zjpdjg.trim();
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }
}