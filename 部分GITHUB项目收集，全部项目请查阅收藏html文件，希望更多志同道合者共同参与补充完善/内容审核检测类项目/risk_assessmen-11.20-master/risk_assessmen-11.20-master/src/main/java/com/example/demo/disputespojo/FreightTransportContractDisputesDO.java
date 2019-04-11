package com.example.demo.disputespojo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class FreightTransportContractDisputesDO {
    @Id
    @GeneratedValue
    private int id;
    private int previousyearturnnumber;
    private int casetotal;
    private int majorcases;
    private int activerights;
    private int totalamount;
    private int railwaylawyers;
    private int legalAdviseAgents;
    private int externallawyers;
    private int casesclosed;
    private int arbitrationsfinished;
    private int mediationcase;
    private int firsttrialnumber;
    private int secondtrialnumber;
    private int successfulcases;
    private int recoverreducelosses;
    private int compensationamount;

    public FreightTransportContractDisputesDO() {
    }

    public FreightTransportContractDisputesDO(int previousyearturnnumber, int casetotal, int majorcases, int activerights, int totalamount, int railwaylawyers, int legalAdviseAgents, int externallawyers, int casesclosed, int arbitrationsfinished, int mediationcase, int firsttrialnumber, int secondtrialnumber, int successfulcases, int recoverreducelosses, int compensationamount) {
        this.previousyearturnnumber = previousyearturnnumber;
        this.casetotal = casetotal;
        this.majorcases = majorcases;
        this.activerights = activerights;
        this.totalamount = totalamount;
        this.railwaylawyers = railwaylawyers;
        this.legalAdviseAgents = legalAdviseAgents;
        this.externallawyers = externallawyers;
        this.casesclosed = casesclosed;
        this.arbitrationsfinished = arbitrationsfinished;
        this.mediationcase = mediationcase;
        this.firsttrialnumber = firsttrialnumber;
        this.secondtrialnumber = secondtrialnumber;
        this.successfulcases = successfulcases;
        this.recoverreducelosses = recoverreducelosses;
        this.compensationamount = compensationamount;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getPreviousyearturnnumber() {
        return previousyearturnnumber;
    }

    public void setPreviousyearturnnumber(int previousyearturnnumber) {
        this.previousyearturnnumber = previousyearturnnumber;
    }

    public int getCasetotal() {
        return casetotal;
    }

    public void setCasetotal(int casetotal) {
        this.casetotal = casetotal;
    }

    public int getMajorcases() {
        return majorcases;
    }

    public void setMajorcases(int majorcases) {
        this.majorcases = majorcases;
    }

    public int getActiverights() {
        return activerights;
    }

    public void setActiverights(int activerights) {
        this.activerights = activerights;
    }

    public int getTotalamount() {
        return totalamount;
    }

    public void setTotalamount(int totalamount) {
        this.totalamount = totalamount;
    }

    public int getRailwaylawyers() {
        return railwaylawyers;
    }

    public void setRailwaylawyers(int railwaylawyers) {
        this.railwaylawyers = railwaylawyers;
    }

    public int getLegalAdviseAgents() {
        return legalAdviseAgents;
    }

    public void setLegalAdviseAgents(int legalAdviseAgents) {
        this.legalAdviseAgents = legalAdviseAgents;
    }

    public int getExternallawyers() {
        return externallawyers;
    }

    public void setExternallawyers(int externallawyers) {
        this.externallawyers = externallawyers;
    }

    public int getCasesclosed() {
        return casesclosed;
    }

    public void setCasesclosed(int casesclosed) {
        this.casesclosed = casesclosed;
    }

    public int getArbitrationsfinished() {
        return arbitrationsfinished;
    }

    public void setArbitrationsfinished(int arbitrationsfinished) {
        this.arbitrationsfinished = arbitrationsfinished;
    }

    public int getMediationcase() {
        return mediationcase;
    }

    public void setMediationcase(int mediationcase) {
        this.mediationcase = mediationcase;
    }

    public int getFirsttrialnumber() {
        return firsttrialnumber;
    }

    public void setFirsttrialnumber(int firsttrialnumber) {
        this.firsttrialnumber = firsttrialnumber;
    }

    public int getSecondtrialnumber() {
        return secondtrialnumber;
    }

    public void setSecondtrialnumber(int secondtrialnumber) {
        this.secondtrialnumber = secondtrialnumber;
    }

    public int getSuccessfulcases() {
        return successfulcases;
    }

    public void setSuccessfulcases(int successfulcases) {
        this.successfulcases = successfulcases;
    }

    public int getRecoverreducelosses() {
        return recoverreducelosses;
    }

    public void setRecoverreducelosses(int recoverreducelosses) {
        this.recoverreducelosses = recoverreducelosses;
    }

    public int getCompensationamount() {
        return compensationamount;
    }

    public void setCompensationamount(int compensationamount) {
        this.compensationamount = compensationamount;
    }
}
