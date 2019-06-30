// ==UserScript==
// @name         知乎-我不感兴趣
// @namespace
// @version      4.2.0
// @description  隐藏掉知乎恼人的“你可能感兴趣”和“热门话题”推送
// @author       MQ
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_notification
// @grant        GM_xmlhttpRequest
// @grant        window
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.18.2/babel.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.16.0/polyfill.js
// @connect      zhuanlan.zhihu.com
// @match        *://www.zhihu.com*
// @namespace https://greasyfork.org/users/159603
// ==/UserScript==

/* jshint ignore:start */
var MultiString = function(f) {
    return f.toString().split('\n').slice(1, -1).join('\n');
}
/* jshint ignore:end */
var inline_src = MultiString(function() {/**
    (async() => {
        'use strict';
        const MAX_FILTER_COUNT = 100; //最多主动刷新的条目数
        const USER_ID_KEY = "user-id";
        const USER_TOPICS_KEY = "user-topics";

        window.GM_xmlhttpRequest = GM_xmlhttpRequest

        let GET = (url, headers) => {
            return new Promise((resolve, reject) => {
                let req = GM_xmlhttpRequest({
                    method:"GET",
                    url: url,
                    headers: headers,
                    fetch: true,
                    onerror: ()=>reject(`fetch ${url} failed`),
                    onload: (e)=>resolve(e.responseText)
                });
            });
        };

        let getUserId = async () => {
            let raw = await GET("/api/v4/me");
            let data = JSON.parse(raw);
            return data.url_token;
        };

        let userId = GM_getValue(USER_ID_KEY, null);
        if (!userId) {
            userId = await getUserId();
            GM_setValue(USER_ID_KEY, userId);
        } else {
            setTimeout(async () => {
                let newValue = await getUserId();
                if (newValue != userId) {
                    userId = newValue;
                    GM_setValue(USER_ID_KEY, userId);
                }
            }, 1000);
        }

        let getUserTopics = async (uid) => {
            //以下部分获取用户关注话题
            let isEnd = true;
            let offset = 0;
            let topics = [];
            do {
                let raw = await GET(`/api/v4/members/${uid}/following-topic-contributions?offset=${offset}&limit=20`);
                let batch = JSON.parse(raw);
                isEnd = batch.paging.is_end;
                topics = topics.concat(batch.data.map(e => e.topic.name));
                offset += batch.data.length;
            } while(!isEnd);
            console.log("your followed topics", topics);
            return topics;
        };

        let followedTopics = GM_getValue(USER_TOPICS_KEY, null);
        if (!followedTopics) {
            followedTopics = await getUserTopics(userId);
            GM_setValue(USER_TOPICS_KEY, followedTopics);
        } else {
            setTimeout(async ()=> {
                let newValue = await getUserTopics(userId);
                if (newValue != followedTopics) {
                    followedTopics = newValue;
                    GM_setValue(USER_TOPICS_KEY, followedTopics);
                }
            }, 1000);
        }

        const mainFrame = document.querySelector("#TopstoryContent > div > div");
        //全局中没被隐藏的卡片数
        let nonHiddenCards = 0;
        let allCards = 0;
        let fillNewCards = () => setTimeout(() => window.dispatchEvent(new Event("resize"))); //发送resize事件来补充新的内容
        //检查函数
        let checkCards = async (cards) => {
            if (cards.length == 0) return;
            await Promise.all(cards.map(async(e) => {
                try{
                    if (e.hidden) return;
                    allCards++;
                    let answerUrl = e.querySelector("h2.ContentItem-title a");
                    if (!answerUrl) {
                        console.log(e, 'is not checked');
                        return;
                    }
                    e.hidden = true;
                    let realUrl = answerUrl.getAttribute('href');
                    if (realUrl.startsWith('//')) { //知乎专栏链接特殊处理
                        realUrl = "https:"+realUrl //GM_xmlhttpRequest不能识别//开头的链接，需要手动加https
                    }
                    let questionPage = await GET(realUrl);
                    let parser = new DOMParser();
                    let page = parser.parseFromString(questionPage, "text/html");
                    let topics = page.querySelector("meta[itemProp=keywords]");
                    if (topics) { //知乎回答通过这里筛选话题
                        topics = topics.content.split(',');
                    } else { //专栏文章通过这里筛选话题
                        topics = [...page.querySelectorAll("#root > div > main > div > article > div.Post-topicsAndReviewer > div > div > span > a > div")].map(e=>e.textContent);
                    }
                    if (topics.length == 0) {
                        console.warn(answerUrl, "got empty topics");
                        e.hidden = false;
                        return;
                    }
                    if (topics.filter(v=>followedTopics.indexOf(v) != -1).length == 0) { //如果里面没有一个话题是用户关注的
                        console.log(topics, "hide");
                    } else {
                        console.log(topics, "not hide");
                        nonHiddenCards++;
                        e.hidden = false;
                    }
                } catch(x) {
                    console.log(x, e);
                    e.hidden = false;
                } finally {
                    if (e.hidden) {
                        setTimeout(()=>e.remove());
                    }
                }
            }));
            if (nonHiddenCards < 8 && allCards < MAX_FILTER_COUNT) {
                console.log(`too few cards (${nonHiddenCards}/${allCards}) requesting for more...`);
                fillNewCards();
            } else if (nonHiddenCards < 8 && allCards >= MAX_FILTER_COUNT) {
                let option = {
                    text: `知乎-我不感兴趣 已为您过滤了 ${allCards-nonHiddenCards} 条推送，仍然没有足够的条目填满您的主页，您可以去喝杯茶，看看别的东西。`,
                    title: "主动刷新已停止",
                    onclick: console.log,
                    ondone: console.log
                };
                GM_notification(option, null);
                nonHiddenCards = 8;
            }
        };

        //注册钩子
        var ob = new MutationObserver((records) => {
            //console.log("mutation records: ", records);
            let addedCards = records.reduce((r, e) => r.concat([...e.addedNodes]), []);
            checkCards(addedCards);
        });
        var config = { childList: true };
        ob.observe(mainFrame, config);
        console.log("hooked");

        //进行首次检查，这里不DRY
        checkCards([...mainFrame.children]);
    })();
**/});
/* jshint ignore:start */
var c = Babel.transform(inline_src, { presets: [ "es2015", "es2016", "es2017" ] });
console.log(c.code);
eval(c.code);
/* jshint ignore:end */