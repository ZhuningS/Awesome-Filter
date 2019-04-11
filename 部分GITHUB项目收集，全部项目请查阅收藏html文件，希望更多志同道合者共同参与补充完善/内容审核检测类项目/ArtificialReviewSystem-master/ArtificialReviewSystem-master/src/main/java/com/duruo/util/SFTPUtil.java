package com.duruo.util;

import com.jcraft.jsch.*;
import lombok.Data;
import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.*;
import java.util.Properties;
import java.util.Vector;

/**
 * Created by @Author tachai
 * date 2018/7/20 18:43
 *
 * @Email 1206966083@qq.com
 */
@Data
public class SFTPUtil {
    private static final Logger logger= LoggerFactory.getLogger(SFTPUtil.class);

    private ChannelSftp sftp;

    private Session session;
    /**SFTP 登录用户名*/
    private static String userName = PropertiesUtil.getProperty("sftp.user");
    //SFTP登录密码
    private static String password = PropertiesUtil.getProperty("sftp.pass");
    //SFTP ip
    private static String ip = PropertiesUtil.getProperty("sftp.server.ip");
    //SFTP port
    private int port;

    /**
     * 构造基于密码的ftp对象
     * @param userName
     * @param password
     * @param ip
     * @param port
     */
    public SFTPUtil(String userName,String password,String ip,int port){
        this.userName=userName;
        this.password=password;
        this.ip=ip;
        this.port=port;
    }

    /**
     * 上传文件到文件服务器
     * @param directory
     * @param fileName
     * @param in
     * @return
     * @throws SftpException
     */
    public static boolean uploadFile(String directory,String fileName,InputStream in) throws SftpException {
        SFTPUtil sftpUtil = new SFTPUtil(userName,password,ip,22);
        logger.info("开始连接sftp服务器");
        boolean result = sftpUtil.upload(directory,fileName,in);
        logger.info("开始连接sftp服务器，结束上传，上传结果"+result);
        return result;
    }

    public static byte[] downloadFile(String directory, String downloadFile) throws IOException, SftpException {
        SFTPUtil sftpUtil = new SFTPUtil(userName,password,ip,22);
        logger.info("开始连接sftp服务器");
        byte[] result = sftpUtil.download(directory,downloadFile);
        logger.info("开始连接sftp服务器，结束上传，上传结果");
        return result;
    }


    private boolean connectServer(String ip,int port,String userName,String password){
//        boolean isSuccess=false;
        try {
            JSch jsch = new JSch();
            session = jsch.getSession(userName,ip,port);
            if(password !=null){
                session.setPassword(password);
            }
            Properties config = new Properties();
            config.put("StrictHostKeyChecking","no");
            session.setConfig(config);
            session.connect();

            Channel channel = session.openChannel("sftp");
            channel.connect();

            sftp = (ChannelSftp) channel;
        } catch (JSchException e) {
            e.printStackTrace();
        }
        return sftp.isConnected();
    }

    /**
     * 关闭连接 server
     */
    public  void disConnect(){
        if(sftp != null){
            if(sftp.isConnected()){
                sftp.disconnect();
            }
        }
        if(session != null){
            if(session.isConnected()){
                session.disconnect();
            }
        }
    }

    /**
     * 将输入流的数据上传到sftp作为文件。文件完整路径=basePath+directory
//     * @param basePath  服务器的基础路径
     * @param directory 上传到该目录
     * @param sftpFileName sftp端文件名
     * @param inputStream  输入流
     */
    private boolean upload( String directory, String sftpFileName, InputStream inputStream) throws SftpException {
        boolean uploaded = true;
        if(connectServer(ip,22,userName,password)){
            try {
//                sftp.cd(basePath);
                sftp.cd(directory);
                //上传文件
                sftp.put(inputStream,sftpFileName);
            } catch (SftpException e) {
                logger.error("上传文件失败,可能目录不存在"+e.getStackTrace());
                uploaded = false;
                e.printStackTrace();

//                //目录不存在，则创建文件夹
//                String [] dirs=directory.split("/");
//                String tempPath=basePath;
//                for(String dir:dirs){
//                    if(null== dir || "".equals(dir)) continue;
//                    tempPath+="/"+dir;
//                    try{
//                        sftp.cd(tempPath);
//                    }catch(SftpException ex){
//                        sftp.mkdir(tempPath);
//                        sftp.cd(tempPath);
//                    }
//                }
            }finally {
                disConnect();
            }
        }
       return uploaded;
    }

    /**
     * 下载文件
     * @param directory     下载目录
     * @param downloadFile  下载的文件
     * @param saveFile      存在本地的路径
     * @throws SftpException
     * @throws FileNotFoundException
     */
    public void download(String directory,String downloadFile,String saveFile) throws SftpException, FileNotFoundException {
        if(directory != null && !"".equals(directory)){
            sftp.cd(directory);
        }
        File file = new File(saveFile);
        sftp.get(downloadFile,new FileOutputStream(file));
    }

    /**
     * 下载文件
     * @param directory 下载目录
     * @param downloadFile 下载的文件名
     * @return 字节数组
     */
    private   byte[] download(String directory, String downloadFile) throws SftpException, IOException {

        if(connectServer(ip,22,userName,password)){

            try {
                if (directory != null && !"".equals(directory)) {
                    sftp.cd(directory);
                }
                InputStream is = sftp.get(downloadFile);

                byte[] fileData = IOUtils.toByteArray(is);
                return fileData;
            }catch (Exception e ){
                logger.error("下载文件失败"+e.getStackTrace());
            }finally {
                disConnect();
            }

        }
        return null;
    }



    /**
     * 删除文件
     * @param directory 要删除文件所在目录
     * @param deleteFile 要删除的文件
     */
    public void delete(String directory, String deleteFile) throws SftpException{
        sftp.cd(directory);
        sftp.rm(deleteFile);
    }


    /**
     * 列出目录下的文件
     * @param directory 要列出的目录
     */
    public Vector<?> listFiles(String directory) throws SftpException {
        return sftp.ls(directory);
    }

}
