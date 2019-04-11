package com.duruo;

import static org.junit.Assert.assertTrue;

import com.duruo.dao.UserMapper;
import com.duruo.po.User;
import com.duruo.util.MD5Util;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Unit test for simple App.
 */

public class AppTest 
{
    /**
     * Rigorous Test :-)
     */
    @Test
    public void shouldAnswerWithTrue()
    {
        assertTrue( true );
    }

    @Test
    public void addSalt(){

        String password="123456";

        String passwordSalt = MD5Util.MD5EncodeUtf8(password);
        System.out.println(passwordSalt);

    }
}
