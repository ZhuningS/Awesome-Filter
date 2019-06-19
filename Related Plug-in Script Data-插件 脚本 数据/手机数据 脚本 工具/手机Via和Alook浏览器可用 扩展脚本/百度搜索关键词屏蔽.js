(function() {
    'use strict';

    // 要屏蔽的关键词
    var sbList = new Array("蔡英文","亦凡","郑爽","方舟子","小学生作文","百度软件","百度卫士","婚恋交友","賭場","赌场","百家乐","百家樂","金沙娱乐","澳门金沙","橡果国际","人娱乐场","本地宝","李洪志","新唐人","阿波罗综合","阿波罗新闻","退党","三退九评","追查国际 ","真善忍","活摘器官","中国之春","雪山狮子","讲真相","时时彩","五分彩","流亡藏人","人人贷","澳门赌场","大乐透","娱乐城","七星彩","威尼斯人娱","威尼斯人官","幸运28","三胖","金正恩","特朗普","川普","安倍","江泽民","中国政府","北京政府","中共","基督","鬼畜","韩流","女装","化妆","明星","时尚","糗","迷妹","作秀","做秀","凯子","美女","少女","性感","写真","马蓉","尤物","吓尿","王者荣耀","吃鸡","绝地求生","英雄联盟","丽颖","馨予","子怡","周立波","金星","李嘉欣","杨幂","娜扎","热巴","丰满","邓超","孙俪","选美","羞羞","萝莉","骚","妓","婊","淫","色色","AV在","线AV","AV天堂","avav","sex","上海快三","老虎机","影院","月天撸","情色","尤物","清纯","奶子","露点","自拍","黑木耳","粉木耳","傻逼","装逼","基情","捡肥皂","约炮","你懂的","潘金莲","节操","XXOO","18禁","porn","女星","巨乳","breast","boob","penis","dick","vagina","fuck","damn","masturbate","masturbation","handjob","blowjob","fellatio","naked","nude","成人用","成人影","成人视","色欲","情欲","伦理片","黄片","簧片","A片","极度","轮奸","比基尼","口交","性交","草比","操逼","咪咪","床戏","鸡巴","几把","基霸","三级片","走光","脱衣","性奴","女仆","做爱","性爱","看片","爽片","人妻","打飞机","乱伦","云点播","torrent","女优","苍老师","性生活","福利视频","福利电影","小电影","岛国","彼女","性骚扰","性行为","少妇","裸女","色狼","同居","少爷","霸道总裁","低胸","御姐","床上","上床","打炮","番号","丝袜","开房","草榴","猥亵","强奸","偷拍","裸体","性侵","绯闻","嫩模","车模","腿模","名模","震惊","啪啪啪","宅男","会所","自慰","尻","无码","爱爱","纹身","上门","射精","鸡鸡","成人电","金瓶梅","同城交友","p2psearch","成人网","交友聊天室","加QQ","六合彩","在线聊天室","115os","人体艺术","快播","qvod","种子搜","磁力搜","不雅","波多","苍井","加藤","尼大木","松岛","麻生","明步","小泽","玛利亚","冲田","莉亚","泽尻","天海","饭岛","橘梨","滨崎","堀北","理惠","西野","麻衣","雨宫","杉原","琴音","福原","梨香","希崎","里香","板野","早乙","藤井","佑希","由奈","逢泽","莉娜","樱井","佐佐木","桃谷","杏梨","爱野","美惠","坛蜜","茅野","黑木","水菜","田中");


    // 执行过滤
    function doFilter(){

        // 相关人物
        var xgrw = document.querySelectorAll(".c-row.c-gap-top");
        for(var e = 0; e < xgrw.length; e++){
            var xgItems = xgrw[e].querySelectorAll(".opr-recommends-merge-item");
            for(var f = 0;f < xgItems.length; f++){
                var xgItem = xgItems[f];
                sbFilter(xgItem.querySelector(".c-gap-top-small").innerHTML)?killMySelf(xgItem):"";
            }
        }

        // 相关搜索
        var xg = document.getElementById("rs").querySelector("table").querySelector("tbody").querySelectorAll("tr");
        for(var b=0;b<xg.length;b++){
            var xgth = xg[b].querySelectorAll("th");
            for(var c=0;c<xgth.length;c++){
                sbFilter(xgth[c].querySelector("a").innerHTML)?killMySelf(xgth[c]):"";
            }
        }

        // 百科
        var opResult = document.querySelectorAll(".result-op.c-container");
        for( var a = 0;a<opResult.length;a++){
            var op = opResult[a];
            if(op.querySelector("h3")){
                var opContent = op.querySelector("h3").querySelector("a").innerHTML;
                sbFilter(opContent)?killMySelf(op):"";
            }
        }

        // 搜索结果
        var searchResult = document.querySelectorAll(".result.c-container");
        for( var i = 0 ; i < searchResult.length ; i++ ){
            var result = searchResult[i];
            sbFilter(result.querySelector("h3").querySelector("a").innerHTML)?killMySelf(result):"";
        }

        // 搜索热点
        var hotResult = document.querySelectorAll(".c-table.opr-toplist-table");
        for(var l = 0;l < hotResult.length;l++){
            var hotEmele = hotResult[l].querySelector("tbody").querySelectorAll("tr");
            for( var j = 0;j < hotEmele.length ; j++ ){
                var hot = hotEmele[j];
                sbFilter(hot.querySelector("td").querySelector("a").innerHTML)?killMySelf(hot):"";
            }
        }
    }

    // kill myself
    function killMySelf(obj){
        obj.parentNode.removeChild(obj);
    }

    // SB filter
    function sbFilter(content){
        content = content.replace(/<[^>]+>/g,"").toLowerCase();
        for (var i in sbList){
            if(content.indexOf(sbList[i].toLowerCase())>=0){
                return true;
}
        }
        return false;
    }
// 检测内容区域是否变化
    var len = document.getElementById("container").innerHTML.length;
    setInterval(function(){
        var newLen = document.getElementById("container").innerHTML.length;
        if(len!=newLen){
            len = newLen;
            doFilter();
        }
    },300);

    // Your code here...
})();