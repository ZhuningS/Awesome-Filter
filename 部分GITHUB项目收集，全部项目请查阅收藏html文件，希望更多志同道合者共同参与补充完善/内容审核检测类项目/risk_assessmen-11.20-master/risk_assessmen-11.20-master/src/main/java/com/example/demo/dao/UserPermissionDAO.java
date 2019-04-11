package com.example.demo.dao;

import com.example.demo.pojo.UserPermissionDO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Transactional
public interface UserPermissionDAO extends JpaRepository<UserPermissionDO,Long> {
    void deleteById(int id);
    @Modifying
    @Query("update UserPermissionDO set "+
            "ableManageUser=?1," +
            "ableCreateNewProject=?2," +
            "ableExaminationApprovalProject=?3," +
            "ableModifyProject=?4," +
            "ablePushProject=?5" +
            " where id=?6"
    )
    int update(
            String ableManageUser,
            String ableCreateNewProject,
            String ableExaminationApprovalProject,
            String ableModifyProject,
            String ablePushProject,
            int id
    );
    @Modifying
    @Query("update UserPermissionDO set "+
            "userName=?1," +
            "workNumber=?2" +
            " where id=?3"
    )
    int updateUserbydepartment(
            String userName,
            String workNumber,
            int id
    );
    @Query("select u from UserPermissionDO u order by u.workNumber desc ")
    List<UserPermissionDO> findByorder();
    @Query("select u from UserPermissionDO u where u.userCompany=?1 order by u.workNumber desc ")
    List<UserPermissionDO> findbycompany(String d);

    @Query("select u from UserPermissionDO u where u.id=?1")
    UserPermissionDO findById( int id);

    UserPermissionDO findByWorkNumber(String w);
    @Query("select u from UserPermissionDO u where u.workNumber=:worknumber and u.ableCreateNewProject=:ableCreateNewProject")
    List<UserPermissionDO> findByWorkNumberAndAbleCreateNewProject(@Param("worknumber") String a, @Param("ableCreateNewProject") String b);
    List<UserPermissionDO> findDistinctByAbleCreateNewProjectAndAbleManageUser(String a,String b);
    List<UserPermissionDO> findByWorkNumberNotLike(String a);
    List<UserPermissionDO> findByAbleCreateNewProjectNot(String a);
}
