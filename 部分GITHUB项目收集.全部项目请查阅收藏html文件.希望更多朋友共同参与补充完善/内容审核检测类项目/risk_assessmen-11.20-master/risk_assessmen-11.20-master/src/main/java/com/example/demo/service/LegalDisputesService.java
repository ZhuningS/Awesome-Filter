package com.example.demo.service;

import com.example.demo.disputespojo.LegalDisputesDO;

import java.util.List;

public interface LegalDisputesService {
    LegalDisputesDO saveLegalDisputes(LegalDisputesDO legalDisputesDO);
    void deleteLegalDisputes(int id);
    LegalDisputesDO findLegalDisputes( int id);
    LegalDisputesDO findLegalDisputesbymonthnum( int id);
    LegalDisputesDO updateLegalDisputes(LegalDisputesDO legalDisputesDO);
    List<LegalDisputesDO> findall();
}
