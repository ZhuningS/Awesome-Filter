package com.example.demo.pojo;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "fourth_level_risk", schema = "risk_assessment", catalog = "")
public class FourthLevelRiskDO {
    private int id;
    private String fourthLevelRiskCode;
    private String fourthLevelRiskName;
    private String fourthLevelRiskDescription;
    private String firstLevelRiskCode;
    private String secondLevelRiskCode;
    private String thirdLevelRiskCode;
    private Timestamp fourthLevelRiskDate;
    private String fourthLevelRiskCompany;
    private String fourthLevelRiskDepartment;
    private String fourthLevelRiskApplication;

    @Id
    @Column(name = "ID")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "fourth_level_risk_code")
    public String getFourthLevelRiskCode() {
        return fourthLevelRiskCode;
    }

    public void setFourthLevelRiskCode(String fourthLevelRiskCode) {
        this.fourthLevelRiskCode = fourthLevelRiskCode;
    }

    @Basic
    @Column(name = "fourth_level_risk_name")
    public String getFourthLevelRiskName() {
        return fourthLevelRiskName;
    }

    public void setFourthLevelRiskName(String fourthLevelRiskName) {
        this.fourthLevelRiskName = fourthLevelRiskName;
    }

    @Basic
    @Column(name = "fourth_level_risk_description")
    public String getFourthLevelRiskDescription() {
        return fourthLevelRiskDescription;
    }

    public void setFourthLevelRiskDescription(String fourthLevelRiskDescription) {
        this.fourthLevelRiskDescription = fourthLevelRiskDescription;
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
    @Column(name = "second_level_risk_code")
    public String getSecondLevelRiskCode() {
        return secondLevelRiskCode;
    }

    public void setSecondLevelRiskCode(String secondLevelRiskCode) {
        this.secondLevelRiskCode = secondLevelRiskCode;
    }

    @Basic
    @Column(name = "third_level_risk_code")
    public String getThirdLevelRiskCode() {
        return thirdLevelRiskCode;
    }

    public void setThirdLevelRiskCode(String thirdLevelRiskCode) {
        this.thirdLevelRiskCode = thirdLevelRiskCode;
    }

    @Basic
    @Column(name = "fourth_level_risk_date")
    public Timestamp getFourthLevelRiskDate() {
        return fourthLevelRiskDate;
    }

    public void setFourthLevelRiskDate(Timestamp fourthLevelRiskDate) {
        this.fourthLevelRiskDate = fourthLevelRiskDate;
    }

    @Basic
    @Column(name = "fourth_level_risk_company")
    public String getFourthLevelRiskCompany() {
        return fourthLevelRiskCompany;
    }

    public void setFourthLevelRiskCompany(String fourthLevelRiskCompany) {
        this.fourthLevelRiskCompany = fourthLevelRiskCompany;
    }

    @Basic
    @Column(name = "fourth_level_risk_department")
    public String getFourthLevelRiskDepartment() {
        return fourthLevelRiskDepartment;
    }

    public void setFourthLevelRiskDepartment(String fourthLevelRiskDepartment) {
        this.fourthLevelRiskDepartment = fourthLevelRiskDepartment;
    }

    @Basic
    @Column(name = "fourth_level_risk_application")
    public String getFourthLevelRiskApplication() {
        return fourthLevelRiskApplication;
    }

    public void setFourthLevelRiskApplication(String fourthLevelRiskApplication) {
        this.fourthLevelRiskApplication = fourthLevelRiskApplication;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        FourthLevelRiskDO that = (FourthLevelRiskDO) o;
        return id == that.id &&
                Objects.equals(fourthLevelRiskCode, that.fourthLevelRiskCode) &&
                Objects.equals(fourthLevelRiskName, that.fourthLevelRiskName) &&
                Objects.equals(fourthLevelRiskDescription, that.fourthLevelRiskDescription) &&
                Objects.equals(firstLevelRiskCode, that.firstLevelRiskCode) &&
                Objects.equals(secondLevelRiskCode, that.secondLevelRiskCode) &&
                Objects.equals(thirdLevelRiskCode, that.thirdLevelRiskCode) &&
                Objects.equals(fourthLevelRiskDate, that.fourthLevelRiskDate) &&
                Objects.equals(fourthLevelRiskCompany, that.fourthLevelRiskCompany) &&
                Objects.equals(fourthLevelRiskDepartment, that.fourthLevelRiskDepartment) &&
                Objects.equals(fourthLevelRiskApplication, that.fourthLevelRiskApplication);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, fourthLevelRiskCode, fourthLevelRiskName, fourthLevelRiskDescription, firstLevelRiskCode, secondLevelRiskCode, thirdLevelRiskCode, fourthLevelRiskDate, fourthLevelRiskCompany, fourthLevelRiskDepartment, fourthLevelRiskApplication);
    }
}
