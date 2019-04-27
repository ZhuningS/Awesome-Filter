package com.example.demo.pojo;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "user", schema = "risk_assessment", catalog = "")
public class UserDO {
    private int id;
    private Integer permission;
    private String password;
    private String username;
    private String department;
    private String sex;
    private String status;
    private String position;
    private String menuRole;
    private String mobilePhone;
    private String workNumber;
    private String workerName;
    private String userCompany;
    private String userGroup;
    private String userEmail;
    private String userAddress;
    private String userMessage;
    private Integer userNewProjectCount;

    @Id
    @Column(name = "ID")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "permission")
    public Integer getPermission() {
        return permission;
    }

    public void setPermission(Integer permission) {
        this.permission = permission;
    }

    @Basic
    @Column(name = "password")
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Basic
    @Column(name = "username")
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Basic
    @Column(name = "department")
    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    @Basic
    @Column(name = "sex")
    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    @Basic
    @Column(name = "status")
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Basic
    @Column(name = "position")
    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    @Basic
    @Column(name = "menu_role")
    public String getMenuRole() {
        return menuRole;
    }

    public void setMenuRole(String menuRole) {
        this.menuRole = menuRole;
    }

    @Basic
    @Column(name = "mobile_phone")
    public String getMobilePhone() {
        return mobilePhone;
    }

    public void setMobilePhone(String mobilePhone) {
        this.mobilePhone = mobilePhone;
    }

    @Basic
    @Column(name = "work_number")
    public String getWorkNumber() {
        return workNumber;
    }

    public void setWorkNumber(String workNumber) {
        this.workNumber = workNumber;
    }

    @Basic
    @Column(name = "worker_name")
    public String getWorkerName() {
        return workerName;
    }

    public void setWorkerName(String workerName) {
        this.workerName = workerName;
    }

    @Basic
    @Column(name = "user_company")
    public String getUserCompany() {
        return userCompany;
    }

    public void setUserCompany(String userCompany) {
        this.userCompany = userCompany;
    }

    @Basic
    @Column(name = "user_group")
    public String getUserGroup() {
        return userGroup;
    }

    public void setUserGroup(String userGroup) {
        this.userGroup = userGroup;
    }

    @Basic
    @Column(name = "user_email")
    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    @Basic
    @Column(name = "user_address")
    public String getUserAddress() {
        return userAddress;
    }

    public void setUserAddress(String userAddress) {
        this.userAddress = userAddress;
    }

    @Basic
    @Column(name = "user_message")
    public String getUserMessage() {
        return userMessage;
    }

    public void setUserMessage(String userMessage) {
        this.userMessage = userMessage;
    }

    @Basic
    @Column(name = "user_new_project_count")
    public Integer getUserNewProjectCount() {
        return userNewProjectCount;
    }

    public void setUserNewProjectCount(Integer userNewProjectCount) {
        this.userNewProjectCount = userNewProjectCount;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserDO that = (UserDO) o;
        return id == that.id &&
                Objects.equals(permission, that.permission) &&
                Objects.equals(password, that.password) &&
                Objects.equals(username, that.username) &&
                Objects.equals(department, that.department) &&
                Objects.equals(sex, that.sex) &&
                Objects.equals(status, that.status) &&
                Objects.equals(position, that.position) &&
                Objects.equals(menuRole, that.menuRole) &&
                Objects.equals(mobilePhone, that.mobilePhone) &&
                Objects.equals(workNumber, that.workNumber) &&
                Objects.equals(workerName, that.workerName) &&
                Objects.equals(userCompany, that.userCompany) &&
                Objects.equals(userGroup, that.userGroup) &&
                Objects.equals(userEmail, that.userEmail) &&
                Objects.equals(userAddress, that.userAddress) &&
                Objects.equals(userMessage, that.userMessage) &&
                Objects.equals(userNewProjectCount, that.userNewProjectCount);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, permission, password, username, department, sex, status, position, menuRole, mobilePhone, workNumber, workerName, userCompany, userGroup, userEmail, userAddress, userMessage, userNewProjectCount);
    }




}
