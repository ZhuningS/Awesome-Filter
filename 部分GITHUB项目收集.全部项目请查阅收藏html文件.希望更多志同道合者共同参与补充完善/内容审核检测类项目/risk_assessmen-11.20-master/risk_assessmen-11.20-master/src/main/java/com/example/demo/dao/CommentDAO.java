package com.example.demo.dao;

import com.example.demo.pojo.CommentDO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface CommentDAO extends JpaRepository<CommentDO,Long> {
    CommentDO findById(int id);
    @Transactional
    @Modifying
    @Query("delete from CommentDO c where c.id = ?1")
    void deleteById(int id);
}
