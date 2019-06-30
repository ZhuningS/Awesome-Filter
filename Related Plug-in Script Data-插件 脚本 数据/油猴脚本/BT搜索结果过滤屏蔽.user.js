// ==UserScript==
// @name         BT搜索结果过滤屏蔽
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://kikibt.cc/*
// @match        *://kikibt.org/*
// @match        *://kikibt.com/*
// @match        *://kikibt.co/*
// @match        *://rarbg.to/*
// @match        *://rarbgmirror.org/*
// @match        *://rarbgmirror.com/*
// @match        *://rarbgunblock.com/*
// @match        *://www.rarbg.is/*
// @match        *://rarbgmirror.xyz/*
// @match        *://rarbg.unblocked.lol/*
// @match        *://rarbg.unblockall.org/*
// @match        *://rarbgaccess.org/*
// @match        *://rarbg2018.org/*
// @match        *://rarbgtorrents.org/*
// @require http://code.jquery.com/jquery-1.8.0.min.js
// @grant        none

// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    /[ぁ-ん]+|[ァ-ヴ]+/u


})();



var blankList = "小学生作文||快播||百度软件||百度浏览||百度卫士||百家号||网赚||婚恋交友||賭場||赌场||百家乐||百家樂||金沙娱乐||澳门金沙||橡果国际||人娱乐场||返利||算命||解梦||电子商务平台||爱词霸句库||本地宝||成人电影||新金瓶梅游||同城交友||qvod||成人网||交友聊天室||加QQ||六合彩||在线聊天室||115os||人体艺术||不雅照片||网站流量||2345||hao123|| 法輪||法轮||李洪志||新唐人||阿波罗综合||阿波罗新闻||退党||三退九评||追查国际||真善忍||活摘器官||中国之春||雪山狮子||讲真相||时时彩||五分彩||流亡藏人||人人贷||澳门赌场||大乐透||娱乐城||七星彩||威尼斯人娱||威尼斯人官||新加坡双赢||幸运28||上海快三||老虎机||.jp||苍井||torrent||种子搜索||影院||magnet||三胖||金正恩||特朗普||法轮||安倍||江泽民||平假名||あ||い||う||え||お||か||き||く||け||こ||さ||し||す||せ||そ||た||ち||つ||て||と||な||に||ぬ||ね||の||は||ひ||ふ||へ||ほ||ま||み||む||め||も||や||い||ゆ||え||よ||ら||り||る||れ||ろ||わ||い||う||え||を||ん||||片假名||ア||イ||ウ||エ||オ||カ||キ||ク||ケ||コ||サ||シ||ス||セ||ソ||タ||チ||ツ||テ||ト||ナ||ニ||ヌ||ネ||ノ||ハ||ヒ||フ||ヘ||ホ||マ||ミ||ム||メ||モ||ヤ||イ||ユ||エ||ヨ||ラ||リ||ル||レ||ロ||ワ||イ||ウ||エ||ヲ||ン"; //自己看着格式差不多加入就好
var x = blankList.split("||");
//===================================================主入口=======================================================
mo = new MutationObserver(function(allmutations) {
    var href = window.location.href;
    if(href.indexOf("www.baidu") > -1){
        $(".c-container").each(deal); // 百度

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