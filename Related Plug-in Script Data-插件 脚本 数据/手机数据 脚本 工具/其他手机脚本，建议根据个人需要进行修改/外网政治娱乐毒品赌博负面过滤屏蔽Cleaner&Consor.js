// ==UserScript==
// @name         外网政治娱乐毒品赌博负面过滤屏蔽Cleaner&Consor
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       skycloud
// @include      *://*.*.com*.tw
// @include      *://*.com*.tw
// @include      *://*.*.com*.hk
// @include      *://*.com*.hk
// @include      *news.*
// @include      *://*news*.*
// @include      *://*.*news*.*
// @include      *://*tw
// @include      *://*hk
// @include      *://*us
// @include      *://*cc
// @include      *://*.jp*
// @include      *://*kr*
// @include      *://t.me*
// @include      *://*teleg*
// @include      *://*beauty*
// @include      *://*religion*
// @include      *://*drug*
// @include      *://*gamble*
// @grant        none
// ==/UserScript==

/*普适性常用扭曲偏歪极端词汇提示，针对媒体，高频网址等*/

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

    var words = ["政治","娱乐","毒品","赌博","宗教","明星","色情"];

    // var fs = require("fs");
    // var text = fs.readFileSync("./badwords.txt");
    // var textByLine = text.split("\n");
    // chrome.extension.getBackgroundPage().console.log(textByLine);

    var v = textNode.nodeValue;
    console.log(v);


}


    //参考藏词隐藏方法代码：
     function() {



      var anchor = ':::';
      var nodeID = 1;
      var nodes = {};
      var text = '';
      textNodesUnder(document.body).forEach(function (node) {
        var data = node.data.replace(/\\r\\n/, "").trim();
        if (data.length < 3) return;
        text += 'n' + nodeID + anchor + data + "\n";
        nodes['n' + (nodeID++)] = node;
      });

      var re = new RegExp("n\\d+" + anchor + ".*(" + keywords.join('|') + ').*$', 'igm');
      var matches = text.match(re);

      // console.log(text);
      console.log('options', options);
      console.log('matches', matches);

      if (!matches || !matches.length) {
        chrome.runtime.sendMessage(null, {
          name: 'keywordsWillBeProcessed',
          totalCount: total
        });
        return;
      }

      total += matches.length;

      chrome.runtime.sendMessage(null, {
        name: 'keywordsWillBeProcessed',
        totalCount: total
      });

      matches.forEach(function (match) {
        var id = match.split(anchor)[0];
        var node = nodes[id];
        console.log(node.data, options.strategy);
        node.data = '.'.repeat(node.data.length);
        }
      });

      words.options;
      v.options;



})();