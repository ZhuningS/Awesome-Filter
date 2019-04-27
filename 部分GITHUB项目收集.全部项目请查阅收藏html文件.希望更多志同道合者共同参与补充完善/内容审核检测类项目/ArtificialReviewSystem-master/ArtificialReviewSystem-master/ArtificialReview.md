# ArtificialReview
## 说明

> 基于Spring+SpringMVC+MyBatis的人工审核系统后台

> 联系人邮箱：tc1206966083@gmail.com

> gitHub[地址](https://github.com/TACHAI/ArtificialReviewSystem)

## 项目介绍

该项目包括事项材料接收审核，青创事项的网上办理，科委的研发加计扣除的无障碍数据采集和数据回填
微信、一网通、自助机的聊天接口

### 项目地址

[地址](https://can.xmduruo.com:4000/login.html) https://can.xmduruo.com:4000/login.html


### 组织结构

```lua
Articial
|--lib
|--src
    |--main
        |--java
            |--com.baidu.ai.api--百度通用图像（包括人脸，身份证，银行卡，文档图片等）api的封装
                |--auth
                |--ocr
                |--utils
            |--com.duruo
                |--commmon--通用接口过滤器等
                |--controller--前台数据接口
                |--dao--数据访问层
                |--dto--内部数据转换层
                |--po--表实体对象
                |--service--业务逻辑层
                |--util--工具类
                |--vo--视图视图层
                |--webserviceClient--webservice访问层
        |--resources
        |--webapp
|--pom.xml
```

## 环境搭建

### 开发工具

工具|说明|官网
----|----|----
IDEA|开发IDE|https://www.jetbrains.com/idea/download
X-shell|Linux远程连接工具| http://www.netsarang.com/download/software.html
Navicat|数据库连接工具|http://www.formysql.com/xiazai.html


### 开发环境

工具|版本号|下载
----|----|----
JDK|1.8| https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
Mysql|5.7|https://www.mysql.com/
Tomcat|8.5|
nginx|1.10|http://nginx.org/en/download.html



