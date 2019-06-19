package com.example.demo.service;

import com.example.demo.dao.CompanyDAO;
import com.example.demo.dao.UserDAO;
import com.example.demo.pojo.CompanyDO;
import com.example.demo.pojo.UserDO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class CompanyServiceimpl implements CompanyService {
@Autowired
private  CompanyDAO companyDAO;

    @Override
    public CompanyDO saveCompany(CompanyDO companyDO) {
        return companyDAO.save(companyDO);
    }

    @Override
    public CompanyDO updateCompany(CompanyDO companyDO) {
        return companyDAO.saveAndFlush(companyDO);
    }

    @Override
    public CompanyDO findCompany(int id) {
        return companyDAO.findById(id);
    }


    @Override
    public void deleteCompany(int id) {
      companyDAO.deleteById(id);
    }
}
