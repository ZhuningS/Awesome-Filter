// ==UserScript==
// @name         通用Cleaner&Consor页面内容防火墙
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  通用Cleaner&Consor页面内容防火墙。已完善名单，对网页内容进行过滤，普适性常用标题党、缺德媒体，过滤替换，误导，极端，情绪化等单词提示。而对技术类、工具类、高质量平台白名单。
// @author       skycloud
// @include      http://*
// @include      https://*
// @exclude      http://localhost*
// @exclude      https://note.youdao.com/*
// @exclude      http*://*google*
// @exclude      http*://pan.baidu*
// @exclude      http*://*search*
// @exclude      *youdao*
// @exclude      *note.*
// @exclude      *yinxiang*.*
// @exclude      *develop*
// @exclude      *://*.duokan.*
// @exclude      *://*.boots*.*
// @exclude      *://*.*learn*.*
// @exclude      *://*.*wiz.*
// @exclude      *://*.*yinxiang*.*
// @exclude      *://*.*evernote*.*
// @exclude      *://*.*ximalaya*.*
// @exclude      *://*.lrts.com*
// @exclude      *://*.*mooc*.*
// @exclude      *://*.*school*.*
// @exclude      *://*.*book*.*
// @exclude      *://*juejin*
// @exclude      *://*segmentfault*
// @exclude      *://*csdn*
// @exclude      *://*frontend*
// @exclude      *://*rss*
// @exclude      *://*java*
// @exclude      *://*script*
// @exclude      *://*python*
// @exclude      *://*tech*
// @exclude      *://*css*
// @exclude      *://*icon*
// @exclude      *://*logo*
// @exclude      *://*module*
// @exclude      *://*web*
// @exclude      *://*library*
// @exclude      *://*scholar*
// @exclude      *://*markdown*
// @exclude      *://*webpack*
// @exclude      *://*node*
// @exclude      *://*jquery*
// @exclude      *://*.*git*.*
// @exclude      *://*git*.*
// @exclude      *://*.*vue.*
// @exclude      *://doc.*.*
// @exclude      *://help.*.*
// @exclude      *://*.*cloud*.*
// @exclude      *://*.*code*.*
// @exclude      *://*code*.*
// @exclude      *://*.net*
// @exclude      *://*.org*
// @exclude      *://*.edu*
// @exclude      *://*.*.net
// @exclude      *://*.*.org
// @exclude      *://*.*.edu*
// @exclude      *://tech.*
// @exclude      *://*.tech*
// @exclude      *://*.*tech*.*
// @exclude      *://*.laravel*.*
// @exclude      *://*.yinxiang*.*
// @exclude      *://*.douban.*
// @exclude      *://*.*tool*.*
// @exclude      *://*.*doc*.*
// @exclude      *://*.work*
// @exclude      *://*.segmentfault.com*
// @exclude      *://*stackoverflow*.*
// @exclude      *://open.163.com*
// @exclude      *://study.163.com*
// @exclude      *://*.v2ex.*
// @exclude      https://www.jianshu.com/p/*
// @grant        none
// ==/UserScript==

/*轻度过滤，普适性常用标题党、缺德媒体，过滤替换，误导，极端，情绪化等单词提示*/

(function() {
    'use strict';

    // Your code here...
   

    walk(document.body);

    function walk(node)
{
    // I stole this function from here:
    // http://is.gd/mwZp7E

    var child, next;

    switch ( node.nodeType )
    {
        case 1:
        case 9:
        case 11:
            child = node.firstChild;
            while ( child )
            {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;

        case 3:
            handleText(node);
            break;
    }
}
    function handleText(textNode)
{

//定义过滤替换词库
    var words = ["！","！！","？！","！？","啦！","震惊！","封建迷信","猪叫声","可怕","恐怖","狗带","惊险","吓尿","还能怎么","驰名","独家","吓人","瞧不起","鄙视","美女","化妆","时尚","今天你","推广","刘慈欣","三体","流浪地球","轰动","事关","重大","阴谋","翻天","性感","女人","老公","老婆","黑幕","天啊","死人","男女","惊天","男票","女票","女神","来得及","现在才","偶像","喜讯","谁都","注意了","居然","最怕","抖音","杀死","主播","炸天","废了","陈安之","于丹","刘一秒","千万别","千万要","最美","宫斗","热播","热搜","炒股","股票","币圈","比特币","营销","佛系","道系","谋杀","离婚","粉丝","脑残","傻逼","性侵","选股","网贷","刷爆","狼性","狼道","走红","火爆","阿里巴巴","能行吗","天挣","灵粮","国际导师","灵修","奥修","上帝","骚操作","追星","什么样的体验","屌","惊艳","种怎样的体验？","种什么体验","如何评价","如何看待","大半夜的看哭了","大半夜的笑出声","蛤蛤蛤","一夜之间","我有一个朋友","一觉醒来破千赞","虐狗","爆照","你以为","路飞","该怎么办","妹纸","性欲","火山视频","西瓜视频","我有个","啊！","卧槽","我操","新鲜事","帝吧","李刚","偷看","表情包","求保佑","拜佛","婆婆","婆媳","逆袭","草根","受不了","素颜","情趣","了！","赠送","中奖","求你","不得了","值得拥有","沸腾","亿万","富翁","自杀","危机感","面膜","越早越好","老司机","凉凉","争端","引发的","天下第一","双修","小龙虾","火辣","赶紧","猝死","跳楼","什么都","杀人","扛把子","强奸","把话撂这了","奸尸","尸体","僵尸","邪术","吸血鬼","霸道总裁","少爷","公主","虐狗","单身狗","都市","重生","穿越","烂人","苦逼","狗逼","豪门","贱人","暖男","擦肩而过","斗气","异界","霸王","诱惑","无赖","痞子","盗墓","鬼吹灯","欧巴","恶搞","吸毒","致癌","身亡","不为人知","好结果","炒鸡","神操作","骚操作","自抱自泣","太tm","他妈","少在我面前","少跟我","骨灰","十八代","祖宗","畜生","崽子","丑闻","揭丑","熊孩子","女郎","脑浆","撩人","风骚","性感","火辣","大胸","女神","白皙","妖娆","热裤","挑逗","喷血","湿身","丰满","模特","妩媚"];

    // var fs = require("fs");
    // var text = fs.readFileSync("./badwords.txt");
    // var textByLine = text.split("\n");
    // chrome.extension.getBackgroundPage().console.log(textByLine);

    var v = textNode.nodeValue;
    console.log(v);

    words.forEach(function(e) {
        v = v.replace(e, " ");
});

    textNode.nodeValue = v;
}


})();