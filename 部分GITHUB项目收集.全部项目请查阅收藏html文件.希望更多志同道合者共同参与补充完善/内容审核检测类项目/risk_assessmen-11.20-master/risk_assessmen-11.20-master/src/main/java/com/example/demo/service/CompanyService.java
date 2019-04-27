package com.example.demo.service;

import com.example.demo.pojo.CompanyDO;
import com.example.demo.pojo.UserDO;

public interface CompanyService {
    CompanyDO saveCompany(CompanyDO companyDO);
    CompanyDO updateCompany(CompanyDO companyDO);
    CompanyDO findCompany(int id);
    void deleteCompany(int id);
}
