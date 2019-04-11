/**
 * Created by asus30 on 2018/3/5.
 */
var flag=true;
var temp=true;
var cusName;
// var baseUrl='http://localhost:4000';
var baseUrl='https://can.xmduruo.com:4000';
//beta测试环境
// var baseUrl='http://can.xmduruo.com:3000';
//  var baseUrl='http://139.219.141.192:3000';
//  var baseUrl='http://webbot.xzfwzx.xuhui.gov.cn/admin';
function TimestampToDate(Timestamp) {
    var date = new Date(Timestamp);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hours = date.getHours();
    var moment = date.getMinutes();
    var scents = date.getSeconds();
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    hours = hours < 10 ? '0' + hours : hours;
    moment = moment < 10 ? '0' + moment : moment;
    scents = scents < 10 ? '0' + scents : scents;
    return year + '-' + month + '-' + day + ' ' + hours + ':' + moment + ':' + scents;
}
function TimestampToDate1(Timestamp) {
    var date = new Date(Timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    Y = date.getFullYear() + '-';
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    D = date.getDate()<10 ? '0'+date.getDate():date.getDate();
    return Y+M+D;

}
//从当前url中获得参数
function getParam() {
    var url=window.location.search;//获取当前url ?后面的值
    var theRequest = new Object();
    if(url.indexOf("?")!=-1){
        var str=url.substr(1);
        if(str.indexOf("&"!=-1)){
            var strs=str.split("&");
            for(var i=0;i<str.length;i++){
                str=strs[i].split("=");
                theRequest[str[0]]=decodeURI(str[1]);
            }
        }else {
            var strs=str.split("=");
            theRequest[strs[0]]=decodeURI(strs[1])
        }

    }
    sessionStorage.setItem("theRequest", theRequest);
    return theRequest;
}
//从后台获得option的list并渲染到当前的select
function getBackOptions(url,obj) {
    $.ajax({
        type:'get',
        url:url,
        dataType:'json',
        success:function (data) {
            console.info("成功从后台获得opption:"+data.data)
            // obj.innerHTML = "";  清空 opption
            if(data.status==0){
                //通过flag来控制该方法只执行一次
                if(flag==true){
                $.each(data.data, function (i, item) {
                    if (item == null) {
                        return;
                    }
                    $("<option></option>")
                        .val(item["value"])
                        .text(item["text"])
                        .appendTo(obj);
                });
                    flag=false;
                }
            }
        },
        error:function (data) {
            console.info("发生了错误",data);
        }
    })
}
function getBackOptions1(url,obj) {
    $.ajax({
        type:'get',
        url:url,
        dataType:'json',
        success:function (data) {
            console.info("成功从后台获得opption:"+data.data)
            // obj.innerHTML = "";  清空 opption
            if(data.status==0){
                //通过flag来控制该方法只执行一次
                if(temp==true){
                    $.each(data.data, function (i, item) {
                        if (item == null) {
                            return;
                        }
                        $("<option></option>")
                            .val(item["value"])
                            .text(item["text"])
                            .appendTo(obj);
                    });
                    temp=false;
                }
            }
        },
        error:function (data) {
            console.info("发生了错误",data);
        }
    })
}
//渲染表格时将日期类型转好格式
function dateformatter(value,row,index) {
    var date=TimestampToDate(row.serCreaterDate);
    return date
}
//渲染表格时将日期类型转好格式
function getCusName(value,row,index) {
   $.ajax({
       type:'post',
       url:'http://localhost:8080/cmp/getCusName.do',
       data:{'cusId':row.serCusId},
       dataType:'json',
       async:false,
       success:function (data) {
           if(data.status==0){
               // console.info("返回的客户名字"+data.data.cusName)
               //ajax赋值必须赋值给全局变量同时应该调成同步 同时关闭异步加载
               cusName=data.data.cusName;
           }
       },
       error:function (data) {
           console.info("发生了错误"+data)
       }
   })
    return cusName;
}


//页面日期
$("#enterpriseDetail").click(function () {
    var url=window.location.search;
    var str=url.substr(1);
    var cusId=str.split("=");
    window.location.href=baseUrl+"/page/stAudit/enterpriseDetail.html?"+cusId[0]+"="+cusId[1];
})
$("#projectdetail").click(function () {
    var url=window.location.search;
    var str=url.substr(1);
    var cusId=str.split("=");
    window.location.href=baseUrl+"/page/stAudit/projectdetail.html?"+cusId[0]+"="+cusId[1];
})
$("#persions").click(function () {
    var url=window.location.search;
    var str=url.substr(1);
    var cusId=str.split("=");
    window.location.href=baseUrl+"/page/stAudit/persions.html?"+cusId[0]+"="+cusId[1];
})
$("#projectbudget").click(function () {
    var url=window.location.search;
    var str=url.substr(1);
    var cusId=str.split("=");
    window.location.href=baseUrl+"/page/stAudit/projectbudget.html?"+cusId[0]+"="+cusId[1];
})
$("#contact").click(function () {
    var url=window.location.search;
    var str=url.substr(1);
    var cusId=str.split("=");
    window.location.href=baseUrl+"/page/stAudit/contact.html?"+cusId[0]+"="+cusId[1];
})
$("#file").click(function () {
    var url=window.location.search;
    var str=url.substr(1);
    var cusId=str.split("=");
    window.location.href=baseUrl+"/page/stAudit/filedown.html?"+cusId[0]+"="+cusId[1];
})