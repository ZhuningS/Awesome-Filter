package com.example.demo.pojo;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "risk_defination", schema = "risk_assessment", catalog = "")
public class RiskDefinationDO {
    private int id;
    private String riskStrategy;
    private String riskStrategyDescription;

    @Id
    @Column(name = "ID")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "risk_strategy")
    public String getRiskStrategy() {
        return riskStrategy;
    }

    public void setRiskStrategy(String riskStrategy) {
        this.riskStrategy = riskStrategy;
    }

    @Basic
    @Column(name = "risk_strategy_description")
    public String getRiskStrategyDescription() {
        return riskStrategyDescription;
    }

    public void setRiskStrategyDescription(String riskStrategyDescription) {
        this.riskStrategyDescription = riskStrategyDescription;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RiskDefinationDO that = (RiskDefinationDO) o;
        return id == that.id &&
                Objects.equals(riskStrategy, that.riskStrategy) &&
                Objects.equals(riskStrategyDescription, that.riskStrategyDescription);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, riskStrategy, riskStrategyDescription);
    }
}
