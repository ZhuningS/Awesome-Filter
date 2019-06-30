// ==UserScript==
// @icon            https://static.zhihu.com/static/favicon.ico
// @name            屏蔽知乎热门内容
// @author          眼已望穿
// @description     屏蔽网页上知乎并不好看的热门内容
// @match           *://*.zhihu.com/*
// @version         1.0.0
// @namespace https://greasyfork.org/users/180436
// ==/UserScript==
(function () {
    var hideHotContent = function (nodes, flag) {
        for (var node of nodes) {
            if (node.textContent.indexOf('热门内容') === 0) {
                if (flag) {
                    node.children[0].click()
                } else {
                    node.children[0].click()
                    node.style.display = 'none';
                }
            }
        }
    };

    // 观察者模式
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    // 创建观察者对象
    var observer = new MutationObserver(function (mutations) {
        for (var mutation of mutations) {
            if (mutation.type === 'childList') {
                hideHotContent(mutation.addedNodes);
            }
        }
    });
    // 配置观察选项:
    var config = {
        childList: true
    }
    // 传入目标节点和观察选项
    var observedEle = document.getElementsByClassName('TopstoryMain')[0].children[0];
    observer.observe(observedEle, config);

    // 初次调用    
    var items = document.getElementsByClassName('TopstoryItem');
    hideHotContent(items, true);
})();