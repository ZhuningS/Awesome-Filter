package com.example.demo.pojo;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "second_level_risk", schema = "risk_assessment", catalog = "")
public class SecondLevelRiskDO {
    private int id;
    private String secondLevelRiskCode;
    private String secondLevelRiskName;
    private String secondLevelRiskDescription;
    private String firstLevelRiskCode;
    private Timestamp secondLevelRiskDate;
    private String secondLevelRiskCompany;
    private String secondLevelRiskStatus;
    private String secondLevelRiskApplication;
    private String secondLevelRiskDepartment;

    @Id
    @Column(name = "ID")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "second_level_risk_code")
    public String getSecondLevelRiskCode() {
        return secondLevelRiskCode;
    }

    public void setSecondLevelRiskCode(String secondLevelRiskCode) {
        this.secondLevelRiskCode = secondLevelRiskCode;
    }

    @Basic
    @Column(name = "second_level_risk_name")
    public String getSecondLevelRiskName() {
        return secondLevelRiskName;
    }

    public void setSecondLevelRiskName(String secondLevelRiskName) {
        this.secondLevelRiskName = secondLevelRiskName;
    }

    @Basic
    @Column(name = "second_level_risk_description")
    public String getSecondLevelRiskDescription() {
        return secondLevelRiskDescription;
    }

    public void setSecondLevelRiskDescription(String secondLevelRiskDescription) {
        this.secondLevelRiskDescription = secondLevelRiskDescription;
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
    @Column(name = "second_level_risk_date")
    public Timestamp getSecondLevelRiskDate() {
        return secondLevelRiskDate;
    }

    public void setSecondLevelRiskDate(Timestamp secondLevelRiskDate) {
        this.secondLevelRiskDate = secondLevelRiskDate;
    }

    @Basic
    @Column(name = "second_level_risk_company")
    public String getSecondLevelRiskCompany() {
        return secondLevelRiskCompany;
    }

    public void setSecondLevelRiskCompany(String secondLevelRiskCompany) {
        this.secondLevelRiskCompany = secondLevelRiskCompany;
    }

    @Basic
    @Column(name = "second_level_risk_status")
    public String getSecondLevelRiskStatus() {
        return secondLevelRiskStatus;
    }

    public void setSecondLevelRiskStatus(String secondLevelRiskStatus) {
        this.secondLevelRiskStatus = secondLevelRiskStatus;
    }

    @Basic
    @Column(name = "second_level_risk_application")
    public String getSecondLevelRiskApplication() {
        return secondLevelRiskApplication;
    }

    public void setSecondLevelRiskApplication(String secondLevelRiskApplication) {
        this.secondLevelRiskApplication = secondLevelRiskApplication;
    }

    @Basic
    @Column(name = "second_level_risk_department")
    public String getSecondLevelRiskDepartment() {
        return secondLevelRiskDepartment;
    }

    public void setSecondLevelRiskDepartment(String secondLevelRiskDepartment) {
        this.secondLevelRiskDepartment = secondLevelRiskDepartment;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SecondLevelRiskDO that = (SecondLevelRiskDO) o;
        return id == that.id &&
                Objects.equals(secondLevelRiskCode, that.secondLevelRiskCode) &&
                Objects.equals(secondLevelRiskName, that.secondLevelRiskName) &&
                Objects.equals(secondLevelRiskDescription, that.secondLevelRiskDescription) &&
                Objects.equals(firstLevelRiskCode, that.firstLevelRiskCode) &&
                Objects.equals(secondLevelRiskDate, that.secondLevelRiskDate) &&
                Objects.equals(secondLevelRiskCompany, that.secondLevelRiskCompany) &&
                Objects.equals(secondLevelRiskStatus, that.secondLevelRiskStatus) &&
                Objects.equals(secondLevelRiskApplication, that.secondLevelRiskApplication) &&
                Objects.equals(secondLevelRiskDepartment, that.secondLevelRiskDepartment);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, secondLevelRiskCode, secondLevelRiskName, secondLevelRiskDescription, firstLevelRiskCode, secondLevelRiskDate, secondLevelRiskCompany, secondLevelRiskStatus, secondLevelRiskApplication, secondLevelRiskDepartment);
    }
}
