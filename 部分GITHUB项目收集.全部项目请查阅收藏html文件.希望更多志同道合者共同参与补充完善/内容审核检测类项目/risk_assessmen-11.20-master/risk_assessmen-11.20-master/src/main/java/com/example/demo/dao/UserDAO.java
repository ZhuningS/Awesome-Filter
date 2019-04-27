package com.example.demo.dao;

import com.example.demo.pojo.UserDO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface UserDAO extends JpaRepository<UserDO,Long> {
    void deleteById(int id);
    List<UserDO> findByDepartment(String d);
    UserDO getById(int id);

    List<UserDO> findById(int id);

    Page<UserDO> findByPermission(int permission, Pageable pageable);

    @Query("select  u from  UserDO u  where u.menuRole = ?1 and u.department = ?2")
    List<UserDO> findreviewerById(String position,String department);

    @Modifying
    @Query("update UserDO set " +

            "username=?1," +
            "password=?2," +
            "userEmail=?3," +
            "mobilePhone=?4,"+
            "userAddress=?5,"+
            "userMessage=?6"+
            " where id=?7"
    )
    int updateUser(
            String username,
            String password,
            String userEmail,
            String mobilePhone,
            String userAddress,
            String userMessage,
            int id
    );
    @Modifying
    @Query("update UserDO set " +

            "username=?1," +
            "password=?2," +
            "workerName=?3," +
            "workNumber=?4"+
            " where id=?5"
    )
    int updateUserbydepartment(
            String username,
            String password,
            String workerName,
            String workNumber,
            int id
    );
    List<UserDO> findAll(Specification specification);

    @Query("select ul from UserDO ul where ul.username=:username and ul.password=:password")
    UserDO findOne(@Param("username") String username, @Param("password") String password);
    @Query("select u from UserDO u where u.userCompany=?1 order by u.workNumber desc ")
    List<UserDO> findbycompany(String d);
    @Query("select u from UserDO u where u.userCompany like %?1%  order by u.workNumber desc ")
    List<UserDO> findbycompanylike(String d);
    @Query("select u from UserDO u where u.workerName like %?1% and u.userCompany=?2 order by u.workNumber desc ")
    List<UserDO> findbynamelike(String d,String c);
    @Query("select u from UserDO u where u.department like %?1% and u.userCompany=?2 order by u.workNumber desc ")
    List<UserDO> findbydepartmentlike(String d,String c);
    @Query("select u from UserDO u where u.mobilePhone like %?1% and u.userCompany=?2 order by u.workNumber desc ")
    List<UserDO> findbymobilePhonelike(String d,String c);


}
