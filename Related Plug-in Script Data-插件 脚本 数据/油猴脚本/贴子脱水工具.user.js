// --------------------------------------------------------------------
//
// ==UserScript==
// @name          贴子脱水工具
// @namespace     https://github.com/kingems/PaperGather
// @version       0.1.8
// @author        kingem(kingem@126.com)
// @description   百度贴吧,天涯论坛,豆瓣小组等的贴子脱水工具(浏览的文章版权归原作者所有)
// @grant         GM_addStyle
// @require       https://cdn.staticfile.org/jquery/2.1.1/jquery.min.js
// @include       *://tieba.baidu.com/p/*
// @include       *://*/thread-*-*-*.html
// @include       *://bbs.tianya.cn/post-*-*-*.shtml
// @include       *://www.douban.com/group/*
// @run-at        document-end
// @homepageURL    https://greasyfork.org/scripts/32466/
// ==/UserScript==
//
// --------------------------------------------------------------------
(function(){

var Rule = {

};

Rule.specialSite = [
    {siteName : 'tieba',
        url : '.*?://tieba\\.baidu\\.com/p/\\d+',
        //获取banner位置
        banner_path: 'div.p_thread',
        //获取楼层位置
        floor_path:'div.l_post',
        //获取页面编码格式
        page_charset:function(){
            var h = $('head').html();
            var h_m = h.match(/charset=\"(.*?)\">/);
            if(!h_m) return 'gb2312';
            return h_m[1];
        },
        //获取总页数
        get_page_num:function(data){
        	var pg = $('li.l_reply_num');
        	if (data) pg=$(data).find('li.l_reply_num');
            if(!pg) return;
            var num = pg.eq(0).html().replace(/<[^>]*>/g,'');
            var num_m = num.match(/共(\d+)页/);
            if(!num_m) return 1;
            return num_m[1];
        },
        //获取标题
        get_topic_name:function(){
            return $('title').text();
        },
        //获得第1页网址
        format_thread_url_1st:function(url,islz){
            url = url.replace(/[\?\#].*$/, '');
            if (islz) url += '?see_lz=1';
            return url;
        },
        // 格式化第i页网址
        format_thread_url_ith:function(url,i){
            var j = i.toString();
            if(url.match(/\?see_lz=1/)){
                n_url = url.concat('&pn='+j);
            }else {
                n_url = url.replace(/$/, '?pn='+j);
            }
            return n_url;
        },
        //提取楼层主要信息
        extract_floor_info:function(bot,index) {
            var info = bot;
            var re = new Object;
            var ptail = info.attr('data-field');            
            if (!ptail) {
                return null;
            };
            re["poster"] = info.find('li.d_name').text(); //作者
            re["id"] = ptail.match(/"post_no":(.*?),/)[1]; //楼层
            if (ptail.match(/"date":"(.*?)"/)){
                re["time"] = ptail.match(/"date":"(.*?)"/)[1];//时间                
            }else{
                re["time"] =info.find('span.tail-info').text().split('楼')[1];//时间
            }
            re["content"] = info.find('div.d_post_content').html().
                replace(/<\/?font[^>]*>/g, '');  //内容
            re["word_num"] = re["content"].replace('<[^>]+>','').length; // 字数
            return re;
        },
    },
    {siteName : 'tianya',
        url : '.*?://bbs\\.tianya\\.cn/post-.*?-.*?-\\d+\\.shtml',
        //获取banner位置
        banner_path: 'div.atl-menu',
        //获取楼层位置
        floor_path:'div.atl-content',
        //获取页面编码格式
        page_charset:function(){
            var h = $('head').html();
            var h_m = h.match(/charset=\"(.*?)\"/);
            if(!h_m) return 'utf-8';
            return h_m[1];
        },
        //获取总页数
        get_page_num:function(data){
            var pg = $('div.atl-pages');
            if (data) pg = $(data).find('div.atl-pages');
            if(!pg) return;
            var num = pg.eq(0).html().replace(/<[^>]*>/g,' ').replace(/\s+/g,' ');
            var num_m = num.match(/(\d+) 下页/);
            if(!num_m) return 1;
            return num_m[1];
        },
        //获取标题
        get_topic_name:function(){
            return $('h1').text();
        },
        //获得第1页网址
        format_thread_url_1st:function(url,islz){
            return url.replace(/\d+.shtml/, '1.shtml');
        },
        // 格式化第i页网址
        format_thread_url_ith:function(url,i){
            var j = i.toString();
            var n_url = url.replace(/\d+.shtml/, j+'.shtml');
            return n_url;
        },
        //提取楼层主要信息
        extract_floor_info:function(bot,index) {
            var info = bot.parent();
            var re = new Object;
            re["content"] = info.find('div.atl-content').html().
                replace(/<\/?font[^>]*>/g, '').replace(/<div class="host-data">(\s*.*)*<\/div>/,'').replace(/<div[^>]+class="atl-reply(\s*.*)*<\/div>/,'');
            re["word_num"] = re["content"].replace('<[^>]+>','').length;

            var atinfo = info.find('.atl-info').text();
            if (!atinfo) {
                atinfo = info.parent().prev().find('.atl-info').text();
                re["id"] = 1;
            }else{
                re["id"] = parseInt(info.attr('id'))+1;
            }
            re["poster"] = atinfo.match(/[楼主作者]{2}：(.*?)\s*时间/)[1];
            re["time"] = atinfo.match(/时间：([\d\s-:]+)/)[1];
            return re;
        },
    },
    {siteName : 'douban',
        url : '.*?://www\\.douban\\.com/group/.*?',
        //获取banner位置
        banner_path: 'div.article',
        //获取楼层位置
        floor_path:'div.user-face',
        //获取页面编码格式
        page_charset:function(){
            var h = $('head').html();
            var h_m = h.match(/charset=\"(.*?)\"/);
            if(!h_m) return 'utf-8';
            return h_m[1];
        },
        //获取总页数
        get_page_num:function(data){
            var pg = $('.thispage');
            if (data) pg=$(data).find('.thispage');
            if(!pg) return 1;
            return pg.eq(0).attr('data-total-page');
        },
        //获取标题
        get_topic_name:function(){
            return $('h1').text();
        },
        //获得第1页网址
        format_thread_url_1st:function(url,islz){
            url = url.replace(/\?start.*$/,'').replace(/[\#\&].*$/, '');
            if(islz) url += '?author=1';
            return url;
        },
        // 格式化第i页网址
        format_thread_url_ith:function(url,i){
            var j = (i-1).toString();
            var n_url = url;
            if(url.match(/\?author=1/)){
                n_url = url.concat('&start='+j+'00');
            }else {
                n_url = url.replace(/$/, '?start='+j+'00');
            }
            return n_url;
        },
        //提取楼层主要信息
        extract_floor_info:function(bot,index) {
            var info = bot;
            var re = new Object;
            re["id"] = index;
            re["poster"] = info.find('img.pil').attr('alt');
            re["time"] = info.next().text().match(/(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})/)[1];
            re["content"] = info.next().html().replace(/<h[34]>\s*.*\s*.*\s*<\/h[34]>/,'').replace(/<\/?font[^>]*>/g, '').replace(/<a[^>]+class=".*lnk.*<\/a>/g,'');
            re["word_num"] = re["content"].replace('<[^>]+>','').length;
            return re;
        },
    },
    {siteName : 'discuz',
        url : '.*?://.*?/thread-.*?-.*?-1\.html',
        //获取banner位置
        banner_path: 'div#pt',
        //获取楼层位置
        floor_path:'div#postlist table.plhin',
        //获取页面编码格式
        page_charset:function(){
            var h = $('head').html();
            var h_m = h.match(/charset=\"(.*?)\"/);
            if(!h_m) return 'gb2312';
            return h_m[1];
        },
        //获取总页数
        get_page_num:function(data){
            var pg = $('div#pgt');
            if (data) pg=$(data).find('div#pgt');
            if(!pg) return;
            var num = pg.eq(0).html().replace(/<[^>]*>/g,' ');
            var num_m = num.match(/[\D\s]*(\d+)\s*(页|下一页)/);
            if(!num_m) return;
            return num_m[1];
        },
        //获取标题
        get_topic_name:function(){
            return $('#thread_subject').text();
        },
        //获得第1页网址
        format_thread_url_1st:function(url,islz){
            url = url.replace(/\/thread-(\d+)-\d+-1.html$/, '/forum.php?mod=viewthread&tid=$1&page=1');
            url = url.replace(/#.*$/, '').replace(/&extra=[^&]*/,'').replace(/&page=\d+/, '&page=1');

            if(! url.match(/&page=\d+/)){
                url = url.concat('&page=1');
            }

            return url;
        },
        // 格式化第i页网址
        format_thread_url_ith:function(url,i){
            var j = i.toString();
            var n_url = url.replace(/&page=\d+/, '&page='+ j);
            return n_url;
        },
        //提取楼层主要信息
        extract_floor_info:function(bot,index) {
            var info = bot.parent();
            var re = new Object;
            re["poster"] = info.find('div.authi').eq(0).text();
            re["time"] = info.find('div.authi em').text().replace('发表于','');
            re["id"] = index;
            re["content"] = info.find('td.t_f').html().
                replace(/<[^>]+style="display:none"[^>]*>[^<]+<[^>]+>/g, '').
                replace(/<[^>]+class="jammer"[^>]*>[^<]+<[^>]+>/g, '').
                replace(/<\/?font[^>]*>/g, '');
            re["word_num"] = re["content"].replace('<[^>]+>','').length;
            return re;
        },
    },
];

// 通用函数
// 获取特殊规则
function getCurSiteInfo() {
    var rules = Rule.specialSite;
    var locationHref = location.href;
    var info = {};
    for (var i in rules) {
        var x = rules[i];
        var url = new RegExp(x.url, 'ig');
        if (url.test(locationHref)){
            info = x;
            break;
        }
    }
    return info;
};
//添加选项框
function add_dewater_banner(xp) {
    $dewater_div = $('\
                     <div id="dewater_div_form" style="align:center;background: #cad6e1;">\
                     <center>\
                     显示<input id="min_page_num" name="min_page_num" size="5" value=""/>页至\
                     <input id="max_page_num" name="max_page_num" size="5" value=""/>页的内容,\
                     且只显示<input id="set_min_floor" name="set_min_floor" size="5" value=""/>楼至\
                     <input id="set_max_floor" name="set_max_floor" size="5" value=""/>楼的内容,\
                     每楼最少<input id="min_word_num" name="min_word_num" size="5" value=""/>字,\
                     <input type="checkbox" id="only_poster" name="only_poster" checked />只看楼主,\
                     <input type="submit" id="dewater_btn" value="脱水"/>\
                     </center></div>');
    $(xp).eq(0).before($dewater_div);
    $('#dewater_btn').click(function(){
        var option = get_dewater_option();
        if (option.set_min_floor && option.set_max_floor && option.set_min_floor> option.set_max_floor) {
            alert("显示楼层数填写错误");
            return;
        }
        var main_floors = get_thread_floors(option);
        option.poster = get_topic_poster(main_floors);

        var topic=set_topic('#dewater_title');
        set_dewater_head(topic);

        $('#dewater_floors').html('');
        add_floor_onpage(main_floors,option);
        $('body').html($('#dewater_div').html());
        set_btn_click();
        set_top_btn();

    });

    $main_floors = $('\
                      <div id="dewater_div">\
                      <div id="dewater_title"></div>\
                      <div id="dewater_floors"></div></div>');
    $(xp).before($main_floors);

};
//设置标题
function set_topic(dst) {
    var tp = site.get_topic_name() ;
    var c = '<a href="' + get_topic_url() + '" id="backurl"><center><font color=red>' +tp+ '</font></center></a>'+
            '<div id="dewater_div_form1"><center>\
            前往<input id="go_floor_num" name="go_floor_num" size="5" />楼, \
            <input type="submit" id="go_floor_btn" value="go" /><br>\
            <input type="submit" id="goback_btn" value="返回原网页" />\
            <input type="submit" id="save_txt_btn" value="存为txt" />\
            <input type="submit" id="save_html_btn" value="存为html" />\
            </center></div>'+
            '<hr width=80% color=blue>';

    $(dst).html(c);
    return tp;
};
//添加按钮点击事件
function set_btn_click() {
    $('#go_floor_btn').click(function(){
        var gofloornum = $("#go_floor_num")[0].value;
        if (gofloornum) {
            var url=site.format_thread_url_1st(location.href,false);
            location.href = url+"#floor"+gofloornum;
        }
    });
    $('#goback_btn').click(function(){
        location.href = $('#backurl').attr('href');
    });
    $('#flip_btn').click(function(){
        $('.floorhide').each(function(index){
            if (index<30) {
                $(this).show();
                $(this).attr('class','floor');
            }
        });
        if ($('.floorhide').length < 1)  $('#flip_btn').remove();
    });
    $('#save_txt_btn').click(function(){
        var chapters = [];
        var fileobj = $('#backurl');
        var fileName = fileobj.text();
        var fileUrl = fileobj.attr('href');
        chapters.push(fileName);
        chapters.push(fileUrl);
        $('.floor').each(function(){
            var s=$(this).html();
            var values = s.replace(/&nbsp;/g,'').replace(/\s+/g,' ').replace(/<br>/g,'\r\n').replace(/<img.*?>/g,'[我是一张图片]<').replace(/<[^>]*>/g, '');
            chapters.push(values);
        });    
        $('.floorhide').each(function(){
            var s=$(this).html(); 
            var values = s.replace(/&nbsp;/g,'').replace(/\s+/g,' ').replace(/<br>/g,'\r\n').replace(/<img.*?>/g,'[我是一张图片]<').replace(/<[^>]*>/g, '');
            chapters.push(values);
        });    
        saveAs(chapters.join('\r\n-----------------\r\n'),fileName+'.txt');
    });
    $('#save_html_btn').click(function(){
        var fileName = $('#backurl').text();
        var chapters = ['<html>'];

        var htmltext = $('*').html().replace(/class="floorhide"/g,'class=\"floor\"').replace(/<div[^>]class="flip".*<\/div>/,'').replace(/<div[^>]class="topbtn".*<\/div>/,'').replace(/<div id="dewater_div_form1">.*<\/div>/,''); 
        chapters.push(htmltext);
        chapters.push('<\/html>');
        saveAs(chapters.join('\r\n'),fileName+'.html');

    });
}
//保存数据
function saveAs(data, filename) {
    if(!filename) filename = 'console.json';

    if (typeof data == 'object') {
        data = JSON.stringify(data, undefined, 4);
    }

    var blob = new Blob([data], { type: 'application/octet-stream' });
    var url = window.URL.createObjectURL(blob);
    var saveas = document.createElement('a');
    saveas.href = url;
    saveas.style.display = 'none';
    document.body.appendChild(saveas);
    saveas.download = filename;
    saveas.click();
    setTimeout(function() {
        saveas.parentNode.removeChild(saveas);
    }, 1000);
    document.addEventListener('unload', function() {
        window.URL.revokeObjectURL(url);
    });
};
//设置新网页头文件
function set_dewater_head(tp) {
    $('head').html(
        '<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />'
        +'<title>'+tp+'</title>'
        +'<style type=text/css> \n'
        +'body {\n text-align:left;\n background-color:e0e0f0;\n font-family: Arial,Verdana, Helvetica, sans-serif;\n line-height: 22px;\n margin:5; \n} \n'
        +'.floor{\n font-size:16px;\n text-align:left;\n width:95%;\n padding:10 20px 10 10px;\n background:#f0f0f0;\n line-height:24px;\n margin:10;\n }\n' 
        +'.floorhide{\n display:none;\n font-size:16px;\n text-align:left;\n width:95%;\n padding:10 20px 10 10px;\n background:#f0f0f0;\n line-height:24px;\n margin:10;\n }\n'       
        +'.zhuan{\n background:#d8e2c8;\n font-size:16px;\n color: black;\n line-height:24px;\n text-decoration:none; \n border:0 !important;\n text-align:left;\n width:100% !important;\n}\n '
        +'.pinglun{\n font-size:14px;\n text-align:left;\n width:100%;\n background:#f0fff0;\n line-height:24px;\n}\n '
        +'.flip{\n width:94%; \n margin:0px;\n padding:5px;\n text-align:center;\n background:#f0e5e5;\n border:solid 1px #c3c3c3;\n}\n '
        +'img{\n max-width:450px;\n width:expression(document.body.clientWidth > 450? \"450px\": \"auto\" );\n overflow:hidden;\n}\n'
        +'a:link{ color: #53A650; \n}\n'
        +'</style>\n'
        );    
};

// 获取自定义设置
function get_dewater_option() {
    var opt = {
        min_page_num: parseInt($("#min_page_num")[0].value),
        max_page_num: parseInt($("#max_page_num")[0].value),        
        set_min_floor: parseInt($("#set_min_floor")[0].value),
        set_max_floor: parseInt($("#set_max_floor")[0].value),
        min_word_num: parseInt($("#min_word_num")[0].value),
        only_poster: $("#only_poster")[0].checked,        
    };
    return opt;
};
//获取楼主信息
function get_topic_poster(main_floors){
    return main_floors[0].poster;
};

//获取当前网页网址
function get_topic_url() {
    return window.location.href;
};
//判断是否跳过此楼层
function is_skip_floor(f, opt) {
    if (opt.only_poster && (f.poster != opt.poster)) return 1;
    if (opt.min_word_num && (f.word_num < opt.min_word_num)) return 1;
    if (opt.set_min_floor && (f.id<opt.set_min_floor)) return 1;
    if (opt.set_max_floor && (f.id>opt.set_max_floor)) return 1;

    return;
};
//在页面中增加楼层
function add_floor_onpage(fs,opt){
    var hide = false;
    var j = 0;    
    for (var i = 0;i<fs.length;i++) {              
        var f = fs[i];     
        if (is_skip_floor(f, opt)) continue;
        if (opt.set_max_floor && (f.id>opt.set_max_floor))  break;      
        if (j>=29) hide = true; 
        add_floor_content('#dewater_floors', f, hide);
        ++j;
    }
    if (hide) {
        var $panels = $('<div class="flip" id="flip_btn" >点击加载更多楼层</div>');
        $('#dewater_floors').append($panels);         
    }
};
//增加楼层内容
function add_floor_content(dst, f, hide) {
    var html='<div class="floor" id="floor' + f.id + '"><font color=#e06080><b>【'+f.id+'】</font></b>作者：'+f.poster+'&emsp;&emsp;&emsp;时间：'+f.time +'<br><div class="zhuan">'+f.content+'</div></div>\n';
    if (hide)  html = '<div class="floorhide" id="floor' + f.id + '"><font color=#e06080><b>【'+f.id+'】</font></b>作者：'+f.poster+'&emsp;&emsp;&emsp;时间：'+f.time +'<br><div class="zhuan">'+f.content+'</div></div>\n';  
    $floor = $(html);
    $(dst).append($floor);
};

//获得要提取楼层的主要信息
function get_thread_floors(option) {
    var main_floors = new Array();
    var select_urls = select_page_urls(option);
    var now_id = 1;
    for (var i in select_urls) {
        var u = select_urls[i];
        var f = get_page_floors(u,i);
        var flen = f.length;
        for (var j = 0; j < flen; j++) {
            if(! f[j].id) f[j].id = now_id;
            var id = f[j].id;
            if (is_push_floor(main_floors, id)==false) continue;
            main_floors.push(f[j]);
            now_id++;
        }
    }
    return main_floors;
};
//获取页面楼层数
function get_page_floors(u,num) {
    var a = parseInt(num)+1;
    var pnum = a.toString();
    $('#dewater_title').html("正在取第" + pnum +"页：" + u);
    var floors_info = new Array();
    var fp = site.floor_path;
    var snum = pnum + ".";
    $.ajax({
        type: "get",
        url: u,
        cache: false,
        async: false,
        beforeSend: function(jqXHR) {
            jqXHR.overrideMimeType('text/html; charset='+ site.page_charset());
        },
        success: function(data) {
            var $resp = $(data);
            var s = $resp.find(fp);
            for (var i = 0; i<s.length;i++){
                var bot = $(s[i]);
                var f_i = site.extract_floor_info(bot,snum+(i+1).toString());
                if (!f_i) continue;
                floors_info.push(f_i);
            }

        }
    });
    return floors_info;
};
//判断是否已经加载此楼层，已经加载返回false
function is_push_floor(floors_info, id){
    var len = floors_info.length;
    if(len<=0) return true;
    var last_id = parseInt(floors_info[len-1].id);
    if(id > last_id) return true;
    return false;
};

//选择需要脱水的网页地址
function select_page_urls(option) {
    var page_urls = get_page_urls(option);

    if (!option.min_page_num && !option.max_page_num) return page_urls;
    var minnum = 1;
    var maxnum = page_urls.length;
    if (option.min_page_num)  minnum = option.min_page_num;
    if (option.max_page_num)  maxnum = option.max_page_num;
    var urls = new Array();
    for (var i= minnum; i<= maxnum; i++) {
        var u = page_urls[i-1];
        urls.push(u);        
    }
    return urls;
};
// 获取所有网页的url
function get_page_urls(option) {
	var num = site.get_page_num('');
    var url = get_topic_url();
    if (option.only_poster) {        
        urls = site.format_thread_url_1st(url,option.only_poster);
        if (urls!=url) {
        	$.ajax({
		        type: "get",
		        url: urls,
		        cache: false,
		        async: false,
		        beforeSend: function(jqXHR) {
		            jqXHR.overrideMimeType('text/html; charset='+ site.page_charset());
		        },
		        success: function(data) {
		            num = site.get_page_num(data);
        		}
    		});
    		url=urls;
        }
    }
    $('#dewater_title').html("共 " + num + " 页");
    if (!num) return [url];    

    var url_list = new Array();
    for (var i = 1; i <= num; i++) {
        var n_url = site.format_thread_url_ith(url, i);
        url_list.push(n_url);
    }
    return url_list;
};
//添加回到顶部按钮
function set_top_btn(){
    GM_addStyle('\
            .topbtn {\
                position: fixed;\
                right: 10px;\
                bottom: 10px;\
                z-index: 2247483648;\
                padding: 20px 5px;\
                width: 50px;\
                height: 20px;\
                line-height: 20px;\
                text-align: center;\
                border: 1px solid;\
                border-color: #888;\
                border-radius: 50%;\
                background: rgba(0,0,0,.5);\
                color: #FFF;\
                font: 12px/1.5 "微软雅黑","宋体",Arial;\
                cursor: pointer;\
            }\
        ');
    $("<div>")
            .addClass("topbtn")
            .html("回到顶部")
            .mousedown(function(){
                location.href += '#top';
            })
            .appendTo('body');
};

var site = getCurSiteInfo();
add_dewater_banner(site.banner_path);

})();