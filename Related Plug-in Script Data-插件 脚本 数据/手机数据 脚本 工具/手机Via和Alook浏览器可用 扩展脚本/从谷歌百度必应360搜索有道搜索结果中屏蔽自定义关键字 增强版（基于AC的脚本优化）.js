匹配值：https://www.google.com/*@@/%5Ehttps?%5C:%5C/%5C/encrypted.google.%5B%5E%5C/%5D+/@@/%5Ehttps?%5C:%5C/%5C/www.google.%5B%5E%5C/%5D+/@@/%5Ehttps?%5C:%5C/%5C/www.so.com/@@/%5Ehttps?%5C:%5C/%5C/www.youdao.com/


代码：



/*
变量x用于                                           百度=谷歌=必应=360搜索=有道
就是黑名单,自己加入自己想要屏蔽的关键字
*/
var blankList = "小学生作文||fuck||蔡英文||BBC News||民进党||中共||中美||中日||希拉里||特朗普||习近平||政府||川普||妓||重口味||快播||百度软件||百度浏览||百度卫士||百家号||网赚||婚恋交友||賭場||赌场||百家乐||百家樂||金沙娱乐||澳门金沙||橡果国际||人娱乐场||大纪元||电子商务平台||爱词霸句库||本地宝||性感||少女||成人电影||新金瓶梅游||同城交友||qvod||成人网||交友聊天室||加QQ||六合彩||在线聊天室||115os||人体艺术||性交||做爱||不雅||网站流量||2345||hao123|| 法輪||法轮||李洪志||新唐人||阿波罗综合||阿波罗新闻||退党||三退九评||追查国际||真善忍||活摘器官||中国之春||雪山狮子||讲真相||时时彩||五分彩||流亡藏人||人人贷||澳门赌场||大乐透||娱乐城||七星彩||威尼斯人娱||威尼斯人官||新加坡双赢||幸运28||上海快三||老虎机"; //自己看着格式差不多加入就好
var x = blankList.split("||");
//===================================================主入口=======================================================
mo = new MutationObserver(function(allmutations) {
    var href = window.location.href;
    if(href.indexOf("www.baidu") > -1){
        $(".c-container").each(deal); // 百度

    } else if(href.indexOf("www.google") > -1){
        $(".g").each(deal);     // 谷歌
        
    } else if(href.indexOf("so.com") > -1){
        $(".res-list").each(deal); // 360搜索
        $(".spread ").each(deal); // 360搜索
        $(".brand").each(deal); // 360搜索
        
    } else if(href.indexOf("bing.com") > -1){
        $(".b_algo").each(deal);    // 必应1
        $(".b_ans").each(deal);    // 必应2
        
    } else if(href.indexOf("youdao.com") > -1){
        $(".res-list").each(deal);        // 有道
        
    }
});
var targets = document.body;
mo.observe(targets, {'childList': true,'characterData':true,'subtree': true});

// ================================================通用处理函数==========================================================
function deal(){
    var curText = $(this).attr
    var curText = $(this).text();
    if(checkIndexof(curText) == true){
        $(this).remove();
        //console.log("dealing with");
    }
}
/*遍历查表，如果在表中则返回true*/
function checkIndexof(element){
  var result = (element.indexOf(x[0]) > -1);
  for(var i = 1; i <= x.length; i++){
    //alert("check");
    result = result || (element.indexOf(x[i]) > - 1);
  }
  return result;
}