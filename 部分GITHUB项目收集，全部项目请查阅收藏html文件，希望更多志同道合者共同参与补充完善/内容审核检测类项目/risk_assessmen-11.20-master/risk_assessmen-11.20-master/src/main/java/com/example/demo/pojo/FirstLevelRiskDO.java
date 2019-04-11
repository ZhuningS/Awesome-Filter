package com.example.demo.pojo;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "first_level_risk", schema = "risk_assessment", catalog = "")
public class FirstLevelRiskDO {
    private int id;
    private String firstLevelRiskCode;
    private String firstLevelRiskName;
    private String firstLevelRiskDescription;
    private String firstLevelRiskApplication;
    private String firstLevelRiskDepartment;
    private Timestamp firstLevelRiskDate;
    private String firstLevelRiskGroup;
    private String firstLevelRiskCompany;
    private String firstLevelRiskPerson;
    private String firstLevelRiskStatus;
    private String firstLevelComment;
    private String firstLevelTopic;

    @Id
    @Column(name = "ID")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "first_level_risk_code")
    public String getFirstLevelRiskCode() {
        return firstLevelRiskCode;
    }

    public void setFirstLevelRiskCode(String firstLevelRiskCode) {
        this.firstLevelRiskCode = firstLevelRiskCode;
    }

    @Basic
    @Column(name = "first_level_risk_name")
    public String getFirstLevelRiskName() {
        return firstLevelRiskName;
    }

    public void setFirstLevelRiskName(String firstLevelRiskName) {
        this.firstLevelRiskName = firstLevelRiskName;
    }

    @Basic
    @Column(name = "first_level_risk_description")
    public String getFirstLevelRiskDescription() {
        return firstLevelRiskDescription;
    }

    public void setFirstLevelRiskDescription(String firstLevelRiskDescription) {
        this.firstLevelRiskDescription = firstLevelRiskDescription;
    }

    @Basic
    @Column(name = "first_level_risk_application")
    public String getFirstLevelRiskApplication() {
        return firstLevelRiskApplication;
    }

    public void setFirstLevelRiskApplication(String firstLevelRiskApplication) {
        this.firstLevelRiskApplication = firstLevelRiskApplication;
    }

    @Basic
    @Column(name = "first_level_risk_department")
    public String getFirstLevelRiskDepartment() {
        return firstLevelRiskDepartment;
    }

    public void setFirstLevelRiskDepartment(String firstLevelRiskDepartment) {
        this.firstLevelRiskDepartment = firstLevelRiskDepartment;
    }

    @Basic
    @Column(name = "first_level_risk_date")
    public Timestamp getFirstLevelRiskDate() {
        return firstLevelRiskDate;
    }

    public void setFirstLevelRiskDate(Timestamp firstLevelRiskDate) {
        this.firstLevelRiskDate = firstLevelRiskDate;
    }

    @Basic
    @Column(name = "first_level_risk_group")
    public String getFirstLevelRiskGroup() {
        return firstLevelRiskGroup;
    }

    public void setFirstLevelRiskGroup(String firstLevelRiskGroup) {
        this.firstLevelRiskGroup = firstLevelRiskGroup;
    }

    @Basic
    @Column(name = "first_level_risk_company")
    public String getFirstLevelRiskCompany() {
        return firstLevelRiskCompany;
    }

    public void setFirstLevelRiskCompany(String firstLevelRiskCompany) {
        this.firstLevelRiskCompany = firstLevelRiskCompany;
    }

    @Basic
    @Column(name = "first_level_risk_person")
    public String getFirstLevelRiskPerson() {
        return firstLevelRiskPerson;
    }

    public void setFirstLevelRiskPerson(String firstLevelRiskPerson) {
        this.firstLevelRiskPerson = firstLevelRiskPerson;
    }

    @Basic
    @Column(name = "first_level_risk_status")
    public String getFirstLevelRiskStatus() {
        return firstLevelRiskStatus;
    }

    public void setFirstLevelRiskStatus(String firstLevelRiskStatus) {
        this.firstLevelRiskStatus = firstLevelRiskStatus;
    }

    @Basic
    @Column(name = "first_level_comment")
    public String getFirstLevelComment() {
        return firstLevelComment;
    }

    public void setFirstLevelComment(String firstLevelComment) {
        this.firstLevelComment = firstLevelComment;
    }

    @Basic
    @Column(name = "first_level_topic")
    public String getFirstLevelTopic() {
        return firstLevelTopic;
    }

    public void setFirstLevelTopic(String firstLevelTopic) {
        this.firstLevelTopic = firstLevelTopic;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        FirstLevelRiskDO that = (FirstLevelRiskDO) o;
        return id == that.id &&
                Objects.equals(firstLevelRiskCode, that.firstLevelRiskCode) &&
                Objects.equals(firstLevelRiskName, that.firstLevelRiskName) &&
                Objects.equals(firstLevelRiskDescription, that.firstLevelRiskDescription) &&
                Objects.equals(firstLevelRiskApplication, that.firstLevelRiskApplication) &&
                Objects.equals(firstLevelRiskDepartment, that.firstLevelRiskDepartment) &&
                Objects.equals(firstLevelRiskDate, that.firstLevelRiskDate) &&
                Objects.equals(firstLevelRiskGroup, that.firstLevelRiskGroup) &&
                Objects.equals(firstLevelRiskCompany, that.firstLevelRiskCompany) &&
                Objects.equals(firstLevelRiskPerson, that.firstLevelRiskPerson) &&
                Objects.equals(firstLevelRiskStatus, that.firstLevelRiskStatus) &&
                Objects.equals(firstLevelComment, that.firstLevelComment) &&
                Objects.equals(firstLevelTopic, that.firstLevelTopic);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, firstLevelRiskCode, firstLevelRiskName, firstLevelRiskDescription, firstLevelRiskApplication, firstLevelRiskDepartment, firstLevelRiskDate, firstLevelRiskGroup, firstLevelRiskCompany, firstLevelRiskPerson, firstLevelRiskStatus, firstLevelComment, firstLevelTopic);
    }
}
