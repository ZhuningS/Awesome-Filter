// ==UserScript==
// @name         补充，针对媒体，贴吧社区论坛加强过滤替换Cleaner&Consor
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       skycloud
// @include      *news.*
// @include      *://*news*
// @include      *://*.*news*.*
// @include      *://*media*
// @include      *://*cc
// @include      *://*.gov*
// @include      *://*.net*
// @include      *://*.org*
// @include      *://*.*.net*
// @include      *://*.*.org*
// @include      *://tieba*
// @include      *://*weibo*
// @include      *://www.baidu.com*
// @include      *://*sohu*
// @include      *://*sina*
// @include      *://*bt*
// @include      *://tv*
// @include      *://*p2p*
// @include      *://*torrent*
// @include      *://www.163.com*
// @include      *://*toutiao*
// @include      *://*ifeng.com*
// @include      *://*qq.com*
// @include      *://*yahoo*
// @include      *://*qihoo*
// @include      *://*yule*
// @include      *://*mop*
// @include      *://game*
// @include      *://photo*
// @include      *://auto*
// @include      *://*meitu*
// @include      *://auto*
// @grant        none
// ==/UserScript==

/*普适性常用脏话恶俗滤除，针对媒体，高频网址，百度贴吧等low网站以及子版块栏目频道，媒体，生活类，小说，游戏，娱乐，明星，化妆，美容，汽车，时尚，两性，写真，美图，图库，贴图，视频，相册，美女*/

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

    var words = ["卧槽","我操","傻逼","装逼","上门","分分钟","分钟读懂","分钟看完","天精通","开车","发车","发福利","磁力","磁链","BT下载","P2P下载","种子搜","torrent","福利","男人","男女"];

    // var fs = require("fs");
    // var text = fs.readFileSync("./badwords.txt");
    // var textByLine = text.split("\n");
    // chrome.extension.getBackgroundPage().console.log(textByLine);

    var v = textNode.nodeValue;
    console.log(v);

    words.forEach(function(e) {
        v = v.replace(e, "%*");
});

    textNode.nodeValue = v;
}

    /*
    参考藏词隐藏方法代码：
    matches.forEach(function (match) {
        var id = match.split(anchor)[0];
        var node = nodes[id];
        console.log(node.data, options.strategy);
        if (options.strategy === 'hideMatchingWords') {
          node.data = node.data.replace(new RegExp(options.keywords.join('|'), 'ig'), '*~%');
        } else {
          node.data = '.'.repeat(node.data.length);
        }
      });

    */


})();