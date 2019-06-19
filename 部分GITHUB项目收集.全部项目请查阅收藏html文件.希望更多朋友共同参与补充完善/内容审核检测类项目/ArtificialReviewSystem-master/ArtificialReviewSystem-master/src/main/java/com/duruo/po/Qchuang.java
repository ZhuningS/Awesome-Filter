package com.duruo.po;

import java.util.Date;

public class Qchuang {

    /**
     * id
     */
    private String id;
    /**
     * 法人名
     */
    private String personName;
    /**
     * 身份证
     */
    private String idCard;
    /**
     * 户籍
     */
    private String householdReg;
    /**
     * 公司名称
     */
    private String companyName;
    /**
     * 机构代码
     */
    private String agencyCode;
    /**
     * 注册日期
     */
    private Date regDate;
    /**
     * 联系电话
     */
    private String contactNumber;
    /**
     * 法人开户行
     */
    private String personBank;
    /**
     * 法人开户行卡号
     */
    private String personBankid;
    /**
     * 申请日期
     */
    private Date createDate;
    /**
     * 经营地址
     */
    private String businessAddress;
    /**
     * 注册资金
     */
    private String regCapital;
    /**
     * 经营范围
     */
    private String regScope;
    /**
     * 审核意见
     */
    private String opinion;
    /**
     * 联系社保缴费单地址
     */
    private String ssbAddress;
    /**
     * 签名地址
     */
    private String signatureAddress;
    /**
     * 身份证地址
     */
    private String idcardAddress;
    /**
     * 银行卡地址
     */
    private String bankAddress;
    /**
     * 申请表地址  修改为暂存验证码信息
     */
    private String appleformAddress;
    /**
     * 状态
     */
    private Integer status;
    /**
     * 是否删除
     */
    private Integer isDelete;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPersonName() {
        return personName;
    }

    public void setPersonName(String personName) {
        this.personName = personName == null ? null : personName.trim();
    }

    public String getIdCard() {
        return idCard;
    }

    public void setIdCard(String idCard) {
        this.idCard = idCard == null ? null : idCard.trim();
    }

    public String getHouseholdReg() {
        return householdReg;
    }

    public void setHouseholdReg(String householdReg) {
        this.householdReg = householdReg == null ? null : householdReg.trim();
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName == null ? null : companyName.trim();
    }

    public String getAgencyCode() {
        return agencyCode;
    }

    public void setAgencyCode(String agencyCode) {
        this.agencyCode = agencyCode == null ? null : agencyCode.trim();
    }

    public Date getRegDate() {
        return regDate;
    }

    public void setRegDate(Date regDate) {
        this.regDate = regDate;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber == null ? null : contactNumber.trim();
    }

    public String getPersonBank() {
        return personBank;
    }

    public void setPersonBank(String personBank) {
        this.personBank = personBank == null ? null : personBank.trim();
    }

    public String getPersonBankid() {
        return personBankid;
    }

    public void setPersonBankid(String personBankid) {
        this.personBankid = personBankid == null ? null : personBankid.trim();
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public String getBusinessAddress() {
        return businessAddress;
    }

    public void setBusinessAddress(String businessAddress) {
        this.businessAddress = businessAddress == null ? null : businessAddress.trim();
    }

    public String getRegCapital() {
        return regCapital;
    }

    public void setRegCapital(String regCapital) {
        this.regCapital = regCapital == null ? null : regCapital.trim();
    }

    public String getRegScope() {
        return regScope;
    }

    public void setRegScope(String regScope) {
        this.regScope = regScope == null ? null : regScope.trim();
    }

    public String getOpinion() {
        return opinion;
    }

    public void setOpinion(String opinion) {
        this.opinion = opinion == null ? null : opinion.trim();
    }

    public String getSsbAddress() {
        return ssbAddress;
    }

    public void setSsbAddress(String ssbAddress) {
        this.ssbAddress = ssbAddress == null ? null : ssbAddress.trim();
    }

    public String getSignatureAddress() {
        return signatureAddress;
    }

    public void setSignatureAddress(String signatureAddress) {
        this.signatureAddress = signatureAddress == null ? null : signatureAddress.trim();
    }

    public String getIdcardAddress() {
        return idcardAddress;
    }

    public void setIdcardAddress(String idcardAddress) {
        this.idcardAddress = idcardAddress == null ? null : idcardAddress.trim();
    }

    public String getBankAddress() {
        return bankAddress;
    }

    public void setBankAddress(String bankAddress) {
        this.bankAddress = bankAddress == null ? null : bankAddress.trim();
    }

    public String getAppleformAddress() {
        return appleformAddress;
    }

    public void setAppleformAddress(String appleformAddress) {
        this.appleformAddress = appleformAddress == null ? null : appleformAddress.trim();
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Integer getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(Integer isDelete) {
        this.isDelete = isDelete;
    }
}