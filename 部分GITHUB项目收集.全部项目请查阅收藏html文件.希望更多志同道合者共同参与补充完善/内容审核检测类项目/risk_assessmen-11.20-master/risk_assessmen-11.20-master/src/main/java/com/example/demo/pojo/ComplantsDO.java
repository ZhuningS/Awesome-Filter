package com.example.demo.pojo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class ComplantsDO {
    @Id
    @GeneratedValue
    private int id;

    private String complantsName;

    @OneToOne(mappedBy = "complantsDO")
    private CompanyDO companyDO;

    public ComplantsDO(){

    }
    public ComplantsDO(String complantsName) {
        this.complantsName = complantsName;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getComplantsName() {
        return complantsName;
    }

    public void setComplantsName(String complantsName) {
        this.complantsName = complantsName;
    }


    public CompanyDO getCompanyDO() {
        return companyDO;
    }

    public void setCompanyDO(CompanyDO companyDO) {
        this.companyDO = companyDO;
    }
}
