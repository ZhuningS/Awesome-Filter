package com.example.demo.pojo;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "risk_event_library", schema = "risk_assessment", catalog = "")
public class RiskEventLibraryDO {
    private int id;
    private String caseSource;
    private String riskEventsReportCompany;
    private String riskEventsName;
    private String riskEventsDescription;
    private String financialLossImpact;
    private String healthSafetyImpact;
    private String environmentImpact;
    private String complianceImpact;
    private String reputationImpact;
    private String causesMajorRisksAnalysis;
    private String firstLevelRisk;
    private String secondLevelRisk;
    private String thirdLevelRisk;
    private String fourthLevelRisk;
    private String relatedBusinessSector;
    private String riskRelatedDepartment;
    private String riskEventRating;
    private String riskEventCopingStrategies;
    private String riskEventMeasure;


    @Id
    @Column(name = "ID")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "case_source")
    public String getCaseSource() {
        return caseSource;
    }

    public void setCaseSource(String caseSource) {
        this.caseSource = caseSource;
    }

    @Basic
    @Column(name = "risk_events_report_company")
    public String getRiskEventsReportCompany() {
        return riskEventsReportCompany;
    }

    public void setRiskEventsReportCompany(String riskEventsReportCompany) {
        this.riskEventsReportCompany = riskEventsReportCompany;
    }

    @Basic
    @Column(name = "risk_events_name")
    public String getRiskEventsName() {
        return riskEventsName;
    }

    public void setRiskEventsName(String riskEventsName) {
        this.riskEventsName = riskEventsName;
    }

    @Basic
    @Column(name = "risk_events_description")
    public String getRiskEventsDescription() {
        return riskEventsDescription;
    }

    public void setRiskEventsDescription(String riskEventsDescription) {
        this.riskEventsDescription = riskEventsDescription;
    }

    @Basic
    @Column(name = "financial_loss_impact")
    public String getFinancialLossImpact() {
        return financialLossImpact;
    }

    public void setFinancialLossImpact(String financialLossImpact) {
        this.financialLossImpact = financialLossImpact;
    }

    @Basic
    @Column(name = "health_safety_impact")
    public String getHealthSafetyImpact() {
        return healthSafetyImpact;
    }

    public void setHealthSafetyImpact(String healthSafetyImpact) {
        this.healthSafetyImpact = healthSafetyImpact;
    }

    @Basic
    @Column(name = "environment_impact")
    public String getEnvironmentImpact() {
        return environmentImpact;
    }

    public void setEnvironmentImpact(String environmentImpact) {
        this.environmentImpact = environmentImpact;
    }

    @Basic
    @Column(name = "compliance_impact")
    public String getComplianceImpact() {
        return complianceImpact;
    }

    public void setComplianceImpact(String complianceImpact) {
        this.complianceImpact = complianceImpact;
    }

    @Basic
    @Column(name = "reputation_impact")
    public String getReputationImpact() {
        return reputationImpact;
    }

    public void setReputationImpact(String reputationImpact) {
        this.reputationImpact = reputationImpact;
    }

    @Basic
    @Column(name = "causes_major_risks_analysis")
    public String getCausesMajorRisksAnalysis() {
        return causesMajorRisksAnalysis;
    }

    public void setCausesMajorRisksAnalysis(String causesMajorRisksAnalysis) {
        this.causesMajorRisksAnalysis = causesMajorRisksAnalysis;
    }

    @Basic
    @Column(name = "first_level_risk")
    public String getFirstLevelRisk() {
        return firstLevelRisk;
    }

    public void setFirstLevelRisk(String firstLevelRisk) {
        this.firstLevelRisk = firstLevelRisk;
    }

    @Basic
    @Column(name = "second_level_risk")
    public String getSecondLevelRisk() {
        return secondLevelRisk;
    }

    public void setSecondLevelRisk(String secondLevelRisk) {
        this.secondLevelRisk = secondLevelRisk;
    }

    @Basic
    @Column(name = "third_level_risk")
    public String getThirdLevelRisk() {
        return thirdLevelRisk;
    }

    public void setThirdLevelRisk(String thirdLevelRisk) {
        this.thirdLevelRisk = thirdLevelRisk;
    }

    @Basic
    @Column(name = "fourth_level_risk")
    public String getFourthLevelRisk() {
        return fourthLevelRisk;
    }

    public void setFourthLevelRisk(String fourthLevelRisk) {
        this.fourthLevelRisk = fourthLevelRisk;
    }

    @Basic
    @Column(name = "related_business_sector")
    public String getRelatedBusinessSector() {
        return relatedBusinessSector;
    }

    public void setRelatedBusinessSector(String relatedBusinessSector) {
        this.relatedBusinessSector = relatedBusinessSector;
    }

    @Basic
    @Column(name = "risk_related_department")
    public String getRiskRelatedDepartment() {
        return riskRelatedDepartment;
    }

    public void setRiskRelatedDepartment(String riskRelatedDepartment) {
        this.riskRelatedDepartment = riskRelatedDepartment;
    }

    @Basic
    @Column(name = "risk_event_rating")
    public String getRiskEventRating() {
        return riskEventRating;
    }

    public void setRiskEventRating(String riskEventRating) {
        this.riskEventRating = riskEventRating;
    }

    @Basic
    @Column(name = "risk_event_coping_strategies")
    public String getRiskEventCopingStrategies() {
        return riskEventCopingStrategies;
    }

    public void setRiskEventCopingStrategies(String riskEventCopingStrategies) {
        this.riskEventCopingStrategies = riskEventCopingStrategies;
    }

    @Basic
    @Column(name = "risk_event_measure")
    public String getRiskEventMeasure() {
        return riskEventMeasure;
    }

    public void setRiskEventMeasure(String riskEventMeasure) {
        this.riskEventMeasure = riskEventMeasure;
    }



    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RiskEventLibraryDO that = (RiskEventLibraryDO) o;
        return id == that.id &&
                Objects.equals(caseSource, that.caseSource) &&
                Objects.equals(riskEventsReportCompany, that.riskEventsReportCompany) &&
                Objects.equals(riskEventsName, that.riskEventsName) &&
                Objects.equals(riskEventsDescription, that.riskEventsDescription) &&
                Objects.equals(financialLossImpact, that.financialLossImpact) &&
                Objects.equals(healthSafetyImpact, that.healthSafetyImpact) &&
                Objects.equals(environmentImpact, that.environmentImpact) &&
                Objects.equals(complianceImpact, that.complianceImpact) &&
                Objects.equals(reputationImpact, that.reputationImpact) &&
                Objects.equals(causesMajorRisksAnalysis, that.causesMajorRisksAnalysis) &&
                Objects.equals(firstLevelRisk, that.firstLevelRisk) &&
                Objects.equals(secondLevelRisk, that.secondLevelRisk) &&
                Objects.equals(thirdLevelRisk, that.thirdLevelRisk) &&
                Objects.equals(fourthLevelRisk, that.fourthLevelRisk) &&
                Objects.equals(relatedBusinessSector, that.relatedBusinessSector) &&
                Objects.equals(riskRelatedDepartment, that.riskRelatedDepartment) &&
                Objects.equals(riskEventRating, that.riskEventRating) &&
                Objects.equals(riskEventCopingStrategies, that.riskEventCopingStrategies) &&
                Objects.equals(riskEventMeasure, that.riskEventMeasure);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, caseSource, riskEventsReportCompany, riskEventsName, riskEventsDescription, financialLossImpact, healthSafetyImpact, environmentImpact, complianceImpact, reputationImpact, causesMajorRisksAnalysis, firstLevelRisk, secondLevelRisk, thirdLevelRisk, fourthLevelRisk, relatedBusinessSector, riskRelatedDepartment, riskEventRating, riskEventCopingStrategies, riskEventMeasure);
    }
}
