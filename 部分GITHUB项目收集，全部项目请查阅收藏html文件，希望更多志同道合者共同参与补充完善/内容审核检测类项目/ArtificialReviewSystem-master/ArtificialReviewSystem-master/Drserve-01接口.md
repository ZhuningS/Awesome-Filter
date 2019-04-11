# DrServer-01 服务器
## 基本信息
* ip 40.74.100.177
* 端口号22 80 3306
* [域名](http://webbot.xzfwzx.xuhui.gov.cn):http://webbot.xzfwzx.xuhui.gov.cn
* 所有项目的根路径:/usr/local/tomcat/apache-tomcat-9.0.11/webapps/
### 青创项目及聊天接口(根路径/admin)
1. [青创项目后台](http://webbot.xzfwzx.xuhui.gov.cn/wechatroutine/admin):http://webbot.xzfwzx.xuhui.gov.cn/wechatroutine/admin
1. [自助机接口](http://webbot.xzfwzx.xuhui.gov.cn/wechatroutine/zzj.do):http://webbot.xzfwzx.xuhui.gov.cn/wechatroutine/zzj.do
1. [微信接口](http://webbot.xzfwzx.xuhui.gov.cn/wechatroutine/webWord.do):http://webbot.xzfwzx.xuhui.gov.cn/wechatroutine/webWord.do
1. [一网通接口](http://webbot.xzfwzx.xuhui.gov.cn/wechatroutine/zwdt.do):http://webbot.xzfwzx.xuhui.gov.cn/wechatroutine/zwdt.do
1. [模型接口](http://webbot.xzfwzx.xuhui.gov.cn/wechatroutine/moxing.do):http://webbot.xzfwzx.xuhui.gov.cn/wechatroutine/moxing.do
1. [测试接口](http://webbot.xzfwzx.xuhui.gov.cn/wechatroutine/test.do):http://webbot.xzfwzx.xuhui.gov.cn/wechatroutine/test.do
1. [用户满意度接口](http://webbot.xzfwzx.xuhui.gov.cn/wechatroutine/csr.do):http://webbot.xzfwzx.xuhui.gov.cn/wechatroutine/csr.do
### 知识库后台的报表页面 
1. [页面地址](http://webbot.xzfwzx.xuhui.gov.cn/bigScreen/index.html):http://webbot.xzfwzx.xuhui.gov.cn/bigScreen/index.html

       项目地址是：根路径/bigScreen/ 这里是单独的页面，页面的数据展示接口及其处理是在
       /js/bigScreen.js
       
### 青创人脸识别(根路径/face)
1. [页面地址](http://webbot.xzfwzx.xuhui.gov.cn/face/huoti.html):http://webbot.xzfwzx.xuhui.gov.cn/face/huoti.html
### 青创签名(根路径/qiangming)
1. [页面地址](http://webbot.xzfwzx.xuhui.gov.cn/qiangming/index.html):http://webbot.xzfwzx.xuhui.gov.cn/qiangming/index.html
### 模型聊天页面(根路径/moxing)
1. [页面地址](http://webbot.xzfwzx.xuhui.gov.cn/moxing/index.html):http://webbot.xzfwzx.xuhui.gov.cn/moxing/index.html
        
        注意这个项目是vue项目，如果改动需要修改源代码后打包，同时依赖青创项目的模型接口
       
### 测试聊天页面（根路径/test）
1. [页面地址]（http://webbot.xzfwzx.xuhui.gov.cn/test/index.html）:http://webbot.xzfwzx.xuhui.gov.cn/test/index.html

        注意这个项目是vue项目，如果改动需要修改源代码后打包，同时依赖青创项目的测试接口

### 一网通（根路径/zwdt）
1. [页面地址](http://webbot.xzfwzx.xuhui.gov.cn/zwdt/index.html):http://webbot.xzfwzx.xuhui.gov.cn/zwdt/index.html

        同上
        
### 自助机（根路径/xhzzj）
1. [页面地址](http://webbot.xzfwzx.xuhui.gov.cn/xhzzj/index.html):http://webbot.xzfwzx.xuhui.gov.cn/xhzzj/index.html

        同上
        
#
以上出现问题都可以重启tomcat ：tomcat路径是/usr/local/tomcat/apache-tomcat-9.0.11/bin

 
 