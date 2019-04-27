package com.example.demo.pojo;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "rules_regulations", schema = "risk_assessment", catalog = "")
public class RulesRegulationsDO {
    private int id;
    private String rulesAndRegulationsNotice;
    private String rulesAndRegulationsStandardMethod;
    private String rulesAndRegulationsStandardProduct;
    private String rulesAndRegulationsStandardArmy;
    private String pulpIndexChinaPaperAssociation;
    private String globalStatistics;
    private String nationalTatistics;
    private String provincialStatistics;
    private String enterpriseStatistics;

    @Id
    @Column(name = "ID")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "rules_and_regulations_notice")
    public String getRulesAndRegulationsNotice() {
        return rulesAndRegulationsNotice;
    }

    public void setRulesAndRegulationsNotice(String rulesAndRegulationsNotice) {
        this.rulesAndRegulationsNotice = rulesAndRegulationsNotice;
    }

    @Basic
    @Column(name = "rules_and_regulations_standard_method")
    public String getRulesAndRegulationsStandardMethod() {
        return rulesAndRegulationsStandardMethod;
    }

    public void setRulesAndRegulationsStandardMethod(String rulesAndRegulationsStandardMethod) {
        this.rulesAndRegulationsStandardMethod = rulesAndRegulationsStandardMethod;
    }

    @Basic
    @Column(name = "rules_and_regulations_standard_product")
    public String getRulesAndRegulationsStandardProduct() {
        return rulesAndRegulationsStandardProduct;
    }

    public void setRulesAndRegulationsStandardProduct(String rulesAndRegulationsStandardProduct) {
        this.rulesAndRegulationsStandardProduct = rulesAndRegulationsStandardProduct;
    }

    @Basic
    @Column(name = "rules_and_regulations_standard_army")
    public String getRulesAndRegulationsStandardArmy() {
        return rulesAndRegulationsStandardArmy;
    }

    public void setRulesAndRegulationsStandardArmy(String rulesAndRegulationsStandardArmy) {
        this.rulesAndRegulationsStandardArmy = rulesAndRegulationsStandardArmy;
    }

    @Basic
    @Column(name = "pulp_index_China_Paper_Association")
    public String getPulpIndexChinaPaperAssociation() {
        return pulpIndexChinaPaperAssociation;
    }

    public void setPulpIndexChinaPaperAssociation(String pulpIndexChinaPaperAssociation) {
        this.pulpIndexChinaPaperAssociation = pulpIndexChinaPaperAssociation;
    }

    @Basic
    @Column(name = "global_statistics")
    public String getGlobalStatistics() {
        return globalStatistics;
    }

    public void setGlobalStatistics(String globalStatistics) {
        this.globalStatistics = globalStatistics;
    }

    @Basic
    @Column(name = "national_tatistics")
    public String getNationalTatistics() {
        return nationalTatistics;
    }

    public void setNationalTatistics(String nationalTatistics) {
        this.nationalTatistics = nationalTatistics;
    }

    @Basic
    @Column(name = "provincial_statistics")
    public String getProvincialStatistics() {
        return provincialStatistics;
    }

    public void setProvincialStatistics(String provincialStatistics) {
        this.provincialStatistics = provincialStatistics;
    }

    @Basic
    @Column(name = "enterprise_statistics")
    public String getEnterpriseStatistics() {
        return enterpriseStatistics;
    }

    public void setEnterpriseStatistics(String enterpriseStatistics) {
        this.enterpriseStatistics = enterpriseStatistics;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RulesRegulationsDO that = (RulesRegulationsDO) o;
        return id == that.id &&
                Objects.equals(rulesAndRegulationsNotice, that.rulesAndRegulationsNotice) &&
                Objects.equals(rulesAndRegulationsStandardMethod, that.rulesAndRegulationsStandardMethod) &&
                Objects.equals(rulesAndRegulationsStandardProduct, that.rulesAndRegulationsStandardProduct) &&
                Objects.equals(rulesAndRegulationsStandardArmy, that.rulesAndRegulationsStandardArmy) &&
                Objects.equals(pulpIndexChinaPaperAssociation, that.pulpIndexChinaPaperAssociation) &&
                Objects.equals(globalStatistics, that.globalStatistics) &&
                Objects.equals(nationalTatistics, that.nationalTatistics) &&
                Objects.equals(provincialStatistics, that.provincialStatistics) &&
                Objects.equals(enterpriseStatistics, that.enterpriseStatistics);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, rulesAndRegulationsNotice, rulesAndRegulationsStandardMethod, rulesAndRegulationsStandardProduct, rulesAndRegulationsStandardArmy, pulpIndexChinaPaperAssociation, globalStatistics, nationalTatistics, provincialStatistics, enterpriseStatistics);
    }
}
