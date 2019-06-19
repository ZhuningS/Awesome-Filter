package com.example.demo.pojo;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
public class CompanyDO {
    @Id
    @GeneratedValue
    private int id;
    private String companyName;
    private String companyPemission;
    private String companyRepresentative;
    private Timestamp companyDate;
    @OneToOne(cascade = {CascadeType.PERSIST,CascadeType.MERGE,CascadeType.REMOVE},fetch = FetchType.EAGER)
    @JoinColumn(name = "company_complaints_id")
    private ComplantsDO complantsDO;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }


    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }


    public String getCompanyPemission() {
        return companyPemission;
    }

    public void setCompanyPemission(String companyPemission) {
        this.companyPemission = companyPemission;
    }


    public String getCompanyRepresentative() {
        return companyRepresentative;
    }

    public void setCompanyRepresentative(String companyRepresentative) {
        this.companyRepresentative = companyRepresentative;
    }

    public Timestamp getCompanyDate() {
        return companyDate;
    }

    public void setCompanyDate(Timestamp companyDate) {
        this.companyDate = companyDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CompanyDO that = (CompanyDO) o;
        return id == that.id &&
                Objects.equals(companyName, that.companyName) &&
                Objects.equals(companyPemission, that.companyPemission) &&
                Objects.equals(companyRepresentative, that.companyRepresentative) &&
                Objects.equals(companyDate, that.companyDate);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, companyName, companyPemission, companyRepresentative, companyDate);
    }

    public ComplantsDO getComplantsDO() {
        return complantsDO;
    }

    public void setComplantsDO(ComplantsDO complantsDO) {
        this.complantsDO = complantsDO;
    }
}
