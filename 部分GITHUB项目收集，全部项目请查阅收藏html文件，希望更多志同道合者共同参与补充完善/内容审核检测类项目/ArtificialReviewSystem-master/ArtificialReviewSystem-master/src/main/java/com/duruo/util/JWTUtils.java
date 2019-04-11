package com.duruo.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import javax.persistence.GeneratedValue;
import java.util.Base64;
import java.util.Date;
import java.util.Map;

/**
 * Created by @Author tachai
 * date 2018/12/4 9:42
 * GitHub https://github.com/TACHAI
 * Email 1206966083@qq.com
 */
public class JWTUtils {

    public String createJWT(String id,String subject,long ttlMillis,Map<String,Object> claims)throws Exception{
        // 指定签名的时候使用的签名算法，也就是header那部分，jjwt已经将这部分内容封装好了
        SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;
        long nowMills = System.currentTimeMillis();// 生成JWT的时间
        Date now = new Date(nowMills);
        SecretKey key = generalKey();
        // 下面就是在尾payLoad添加各种标准声明和私有声明
        JwtBuilder builder = Jwts.builder()// 这里其实就是new一个JwtBuilder,设置jwt的body
                                 .setClaims(claims)// 如果有私有声明，一定要先设置这个自己创建的私有声明
                                 .setId(id) // 设置jtid 是JWT的唯一标识，根据业务需要，这个可以个可以设置为一个不重复的值，主要用来作为一次性token,从而回避重放攻击。

                .setIssuedAt(now)// iat:jwt的签发时间
                .setSubject(subject)//sub（subject）：代表这个JWT的主体，即它的所有人，这个是一个json格式的字符串，可以存放userid,roldid之类，作为用户的唯一标识
                .signWith(signatureAlgorithm,key);

        if(ttlMillis>=0){
            long expMillis = nowMills+ttlMillis;
            Date exp = new Date(expMillis);
            builder.setExpiration(exp);//设置过期时间
        }
        return builder.compact();//就开始压缩
    }

    /**
     * 解密jwt
     * @param jwt
     * @return
     * @throws Exception
     */
    public Claims parseJWT(String jwt)throws Exception{
        // 签名秘钥，和生成的签名的秘钥一摸一样
        SecretKey key = generalKey();
        //得到DetaultJwtParser
        Claims claims = Jwts.parser()
                        .setSigningKey(key)//设置签名的秘钥
                        .parseClaimsJws(jwt).getBody();// 设置需要解析的jwt
        return claims;
    }

    /**
     * 由字符串生成加密key
     * @return
     */
    public SecretKey generalKey(){
        // 本地的密码解码
        byte[] encodeKey = Base64.getDecoder().decode(PropertiesUtil.getProperty("secret"));
        // 根据给定的字节数组使用AES加密算法构造一个密钥，使用
        SecretKey key = new SecretKeySpec(encodeKey,0,encodeKey.length,"AES");
        return  key;
    }
}
