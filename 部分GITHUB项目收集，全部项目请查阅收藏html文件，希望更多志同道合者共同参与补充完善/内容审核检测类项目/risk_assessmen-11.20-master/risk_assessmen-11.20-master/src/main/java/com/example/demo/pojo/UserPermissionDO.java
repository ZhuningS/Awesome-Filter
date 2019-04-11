package com.example.demo.pojo;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "user_permission", schema = "risk_assessment", catalog = "")
public class UserPermissionDO {
    private int id;
    private String userName;
    private String userCompany;
    private String userDepartment;
    private String workNumber;
    private String ableManageUser;
    private String ableCreateNewProject;
    private String ableExaminationApprovalProject;
    private String ableModifyProject;
    private String ablePushProject;

    @Id
    @Column(name = "ID")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "user_name")
    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
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
    @Column(name = "user_department")
    public String getUserDepartment() {
        return userDepartment;
    }

    public void setUserDepartment(String userDepartment) {
        this.userDepartment = userDepartment;
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
    @Column(name = "able_manage_user")
    public String getAbleManageUser() {
        return ableManageUser;
    }

    public void setAbleManageUser(String ableManageUser) {
        this.ableManageUser = ableManageUser;
    }

    @Basic
    @Column(name = "able_create_new_project")
    public String getAbleCreateNewProject() {
        return ableCreateNewProject;
    }

    public void setAbleCreateNewProject(String ableCreateNewProject) {
        this.ableCreateNewProject = ableCreateNewProject;
    }

    @Basic
    @Column(name = "able_examination_approval_project")
    public String getAbleExaminationApprovalProject() {
        return ableExaminationApprovalProject;
    }

    public void setAbleExaminationApprovalProject(String ableExaminationApprovalProject) {
        this.ableExaminationApprovalProject = ableExaminationApprovalProject;
    }

    @Basic
    @Column(name = "able_modify_project")
    public String getAbleModifyProject() {
        return ableModifyProject;
    }

    public void setAbleModifyProject(String ableModifyProject) {
        this.ableModifyProject = ableModifyProject;
    }

    @Basic
    @Column(name = "able_push_project")
    public String getAblePushProject() {
        return ablePushProject;
    }

    public void setAblePushProject(String ablePushProject) {
        this.ablePushProject = ablePushProject;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserPermissionDO that = (UserPermissionDO) o;
        return id == that.id &&
                Objects.equals(userName, that.userName) &&
                Objects.equals(userCompany, that.userCompany) &&
                Objects.equals(userDepartment, that.userDepartment) &&
                Objects.equals(workNumber, that.workNumber) &&
                Objects.equals(ableManageUser, that.ableManageUser) &&
                Objects.equals(ableCreateNewProject, that.ableCreateNewProject) &&
                Objects.equals(ableExaminationApprovalProject, that.ableExaminationApprovalProject) &&
                Objects.equals(ableModifyProject, that.ableModifyProject) &&
                Objects.equals(ablePushProject, that.ablePushProject);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, userName, userCompany, userDepartment, workNumber, ableManageUser, ableCreateNewProject, ableExaminationApprovalProject, ableModifyProject, ablePushProject);
    }
}
