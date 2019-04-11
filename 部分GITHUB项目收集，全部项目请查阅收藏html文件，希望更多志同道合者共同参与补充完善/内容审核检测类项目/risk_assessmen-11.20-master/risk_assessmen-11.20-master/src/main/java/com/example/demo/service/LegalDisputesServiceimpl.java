package com.example.demo.service;

import com.example.demo.disputesDAO.LegalDisputesDAO;
import com.example.demo.disputespojo.LegalDisputesDO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LegalDisputesServiceimpl implements LegalDisputesService {
    @Autowired
    LegalDisputesDAO legalDisputesDAO;
    @Override
    public LegalDisputesDO saveLegalDisputes(LegalDisputesDO legalDisputesDO) {
        return legalDisputesDAO.save(legalDisputesDO);
    }

    @Override
    public void deleteLegalDisputes(int id) {
            legalDisputesDAO.deleteById(id);
    }

    @Override
    public LegalDisputesDO findLegalDisputes(int id) {
        return legalDisputesDAO.findById(id);
    }

    @Override
    public LegalDisputesDO findLegalDisputesbymonthnum(int id) {
        return legalDisputesDAO.findByMonthnum(id);
    }

    @Override
    public LegalDisputesDO updateLegalDisputes(LegalDisputesDO legalDisputesDO) {
        return legalDisputesDAO.save(legalDisputesDO);
    }

    @Override
    public List<LegalDisputesDO> findall() {
        return legalDisputesDAO.findAll();
    }
}
