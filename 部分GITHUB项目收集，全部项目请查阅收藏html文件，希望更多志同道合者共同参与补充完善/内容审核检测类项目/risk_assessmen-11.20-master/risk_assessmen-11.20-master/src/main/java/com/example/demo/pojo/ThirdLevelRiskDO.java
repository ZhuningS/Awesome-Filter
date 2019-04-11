package com.example.demo.pojo;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "third_level_risk", schema = "risk_assessment", catalog = "")
public class ThirdLevelRiskDO {
    private int id;
    private String thirdLevelRiskCode;
    private String thirdLevelRiskName;
    private String thirdLevelRiskDescription;
    private String secondLevelRiskCode;
    private Timestamp thirdLevelRiskDate;
    private String thirdLevelRiskApplication;
    private String firstLevelRiskCode;
    private String thirdLevelRiskCompany;
    private String thirdLevelRiskDepartment;

    @Id
    @Column(name = "ID")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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
    @Column(name = "third_level_risk_name")
    public String getThirdLevelRiskName() {
        return thirdLevelRiskName;
    }

    public void setThirdLevelRiskName(String thirdLevelRiskName) {
        this.thirdLevelRiskName = thirdLevelRiskName;
    }

    @Basic
    @Column(name = "third_level_risk_description")
    public String getThirdLevelRiskDescription() {
        return thirdLevelRiskDescription;
    }

    public void setThirdLevelRiskDescription(String thirdLevelRiskDescription) {
        this.thirdLevelRiskDescription = thirdLevelRiskDescription;
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
    @Column(name = "third_level_risk_date")
    public Timestamp getThirdLevelRiskDate() {
        return thirdLevelRiskDate;
    }

    public void setThirdLevelRiskDate(Timestamp thirdLevelRiskDate) {
        this.thirdLevelRiskDate = thirdLevelRiskDate;
    }

    @Basic
    @Column(name = "third_level_risk_application")
    public String getThirdLevelRiskApplication() {
        return thirdLevelRiskApplication;
    }

    public void setThirdLevelRiskApplication(String thirdLevelRiskApplication) {
        this.thirdLevelRiskApplication = thirdLevelRiskApplication;
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
    @Column(name = "third_level_risk_company")
    public String getThirdLevelRiskCompany() {
        return thirdLevelRiskCompany;
    }

    public void setThirdLevelRiskCompany(String thirdLevelRiskCompany) {
        this.thirdLevelRiskCompany = thirdLevelRiskCompany;
    }

    @Basic
    @Column(name = "third_level_risk_department")
    public String getThirdLevelRiskDepartment() {
        return thirdLevelRiskDepartment;
    }

    public void setThirdLevelRiskDepartment(String thirdLevelRiskDepartment) {
        this.thirdLevelRiskDepartment = thirdLevelRiskDepartment;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ThirdLevelRiskDO that = (ThirdLevelRiskDO) o;
        return id == that.id &&
                Objects.equals(thirdLevelRiskCode, that.thirdLevelRiskCode) &&
                Objects.equals(thirdLevelRiskName, that.thirdLevelRiskName) &&
                Objects.equals(thirdLevelRiskDescription, that.thirdLevelRiskDescription) &&
                Objects.equals(secondLevelRiskCode, that.secondLevelRiskCode) &&
                Objects.equals(thirdLevelRiskDate, that.thirdLevelRiskDate) &&
                Objects.equals(thirdLevelRiskApplication, that.thirdLevelRiskApplication) &&
                Objects.equals(firstLevelRiskCode, that.firstLevelRiskCode) &&
                Objects.equals(thirdLevelRiskCompany, that.thirdLevelRiskCompany) &&
                Objects.equals(thirdLevelRiskDepartment, that.thirdLevelRiskDepartment);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, thirdLevelRiskCode, thirdLevelRiskName, thirdLevelRiskDescription, secondLevelRiskCode, thirdLevelRiskDate, thirdLevelRiskApplication, firstLevelRiskCode, thirdLevelRiskCompany, thirdLevelRiskDepartment);
    }
}
