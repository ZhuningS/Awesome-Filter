// ==UserScript==
// @name 新浪微博净化
// @namespace WeiBoCleaner
// @include http://weibo.com/*
// @author  http://weibo.com/chainjoy
// @version 1.5
// @description 屏蔽含指定关键字的微博/用户/评论, 屏蔽广告/右侧主播推荐/左下播放器/右下网聊/巨幅广告
// @require  https://code.jquery.com/jquery-2.2.4.min.js
// @grant  GM_addStyle
// @grant  GM_getValue
// @grant  GM_setValue
// ==/UserScript==
GM_addStyle('.WB_main_c .send_weibo .input {border: 1px solid #ddd; } .WB_miniblog{ padding-top:40px;background:#BFE4EB;background-image: none;} .block_setting{float:left;position:relative;width:2px;border:5px solid rgba(255,0,0,0.3);height:10px;margin:14px 0 0 20px}.block_setting:before{content:"";position:absolute;top:-5px;left:-5px;width:2px;height:10px;border:5px solid rgba(0,255,0,0.3);-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.block_setting:after{content:"";position:absolute;width:2px;height:10px;top:-5px;right:-5px;border:5px solid rgba(0,0,255,0.3);-webkit-transform:rotate(-60deg);-ms-transform:rotate(-60deg);transform:rotate(-60deg)} #block_pop{z-index:99999;width:40%;font-size:1em;border: 1px solid #ddd;padding: 30px;background: #fff;border-radius: 7px;box-shadow: 3px 3px 6px #333;} #block_pop h2{ font-size: 1.4em;} #block_pop p{ margin:15px 0} .input_blacklist{border: 1px solid #ccc;  line-height: 18px; margin: 10px 0; padding: 0 5px;  width: 30%; min-width: 100px;} #block_pop .add_blacklist{float: none;font-size: 90%;line-height: 18px; height: 18px; cursor: pointer;margin: 10px 5px; padding: 0 10px; background: #eb7350;  color: #fff; display: inline-block;} .blacklist{margin:0 0 30px 0;} #block_pop a{ float:right} .donate_me{margin: 0 0 0 20px;position:relative} .donate_me img{ display:none;width:120px;position:absolute;right: 0;bottom: 20px;border: 1px solid #ccc; padding: 4px;background: #fff; border-radius: 3px;} .blacklist b{font-weight: normal;cursor: pointer;border: 1px solid #666;color: #333;border-radius: 3px;font-size: 10px;padding: 1px 5px;display: inline-block; margin: 10px 10px 0 0; } #block_pop input[type="radio"]{display: none; } #block_pop label{ margin:10px 0;display: block; font-size:90%; cursor:pointer;} #block_pop input[type="radio"] + label span:before {content:"";border: 1px solid #555;border-radius: 50%;display: inline-block;width: 10px; height: 10px;vertical-align: middle;margin: -2px 5px 0 0;background: #fff; } #block_pop input[type="radio"]:checked + label span:before { content:"";background: #eb7350; border:1px solid #eb7350;} .block_overlay {position: absolute;z-index:99998; opacity:0.8;top: 0px;left: 0px;height: 100%;width: 100%;background: #000; display: none;}');

(function($, undefined){
    $(function(){
        $('.gn_position').append('<a class="block_setting" href="#block_pop" title="设置黑名单"></a>');

        var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

        DO = new MutationObserver(function() {
            blockWeibo();
            removeAd();
        });

        DO.observe(document.body, {
            childList:true,
            characterData:true,
            subtree:true
        });

        var block_counts = 0;
        block_method = GM_getValue('block_method');

        function blockWeibo() {
            $('.WB_text, .WB_info').each(function() {
                var txt = $(this).text();
                if (true === wordfFind(txt)) {
                    if(block_method == 'remove'){
                        if($(this).parent('.list_con').length > 0){
                            $(this).parentsUntil('.list_li').parent().remove();
                        }else{
                            $(this).parents(".WB_cardwrap").remove();
                        }
                    }else{
                        $(this).text("... ... ... ... ...");
                        $(this).parent().find('.WB_media_wrap, .WB_tag_rec').remove();
                        if ($(this).hasClass('WB_info')) $(this).parent().text('... ... ... ... ...');
                    }
                    block_counts++;
                }
            });
        }

        function getKeywords(){
            var keyword = GM_getValue('keyword');
            if(keyword)
                return keyword.split('||');
            return [];
        }

        keywords = getKeywords();

        function wordfFind(ele) {
            for (var i = 0; i <= keywords.length; i++) {
                if (ele.indexOf(keywords[i]) != -1)
                    return true;
            }
        }

        function removeAd() {
            $('[feedtype="ad"],#Pl_Core_ThirdHtmlData__6，div[feedtype=ad], #Pl_Core_ThirdHtmlData__77, #Pl_Core_ThirdHtmlData__76,#v6_pl_ad_bottomtip,.PCD_mplayer,#WB_webim,#v6_pl_content_biztips,#v6_pl_rightmod_rank,#v6_pl_rightmod_ads35,#v6_pl_rightmod_ads36,#v6_trustPagelet_recom_member,#v6_pl_rightmod_noticeboard').remove();
        }

        $.fn.blockPop = function(opt) {
            return this.each(function() {
                $(this).click(function(e) {
                    var keyword = keywords.length === 0  ? '' : '<b>' + keywords.join('</b><b>') + '</b>';
                    var pop = $('<div id="block_pop"><h2>设置黑名单</h2><p>输入关键词, 点击添加或按回车添加到黑名单; 点击关键词移出黑名单</p><input class="input_blacklist"/><a class="add_blacklist">添加</a><div class="blacklist">' + keyword + '</div><h2>处理方式</h2><input type="radio" class="block_method" name="block_method" id="replace" value="replace"><label for="replace"><span>替换成省略号</span></label><input type="radio"  name="block_method" class="block_method" id="remove" value="remove"><label for="remove"><span>直接移除</span></label> <a class="donate_me" href="#">捐助作者 <img src="http://wx1.sinaimg.cn/large/005FXA2Dgy1fd3h1mq412j305k05k753.jpg"></a><a target="_blank" href="http://weibo.com/chainjoy">反馈/建议</a></div>');
                    if ($('#block_pop').length < 1) $('body').append(pop);
                    var overlay = $('<div class="block_overlay"></div>');
                    if ($('.block_overlay').length < 1) $('body').append(overlay);
                    var pop_id = $(this).attr('href');
                    var pop_height = $(pop_id).outerHeight();
                    var pop_width = $(pop_id).outerWidth();
                    $('.block_overlay').css({
                        display:'block',
                        height:$('body').height()
                    });
                    $('.block_overlay').fadeTo(300, 0.8);
                    $(pop_id).css({
                        position:'fixed',
                        left:($(window).width() - pop_width) / 2,
                        top:($(window).height() - pop_height) / 3
                    });
                    $(pop_id).fadeTo(300, 1);
                    $(overlay).click(function() {
                        closePop(pop_id);
                    });
                    $('.add_blacklist').click(function() {
                        var word = $('.input_blacklist').val().replace(/(<([^>]+)>)/gi, '');
                        if (word) {
                            $('.blacklist').append('<b>' + word + '</b>');
                            $('.input_blacklist').val('');
                            updateBlacklist();
                        }
                    });
                    $('.input_blacklist').keypress(function(e) {
                        if (e.which == 13)
                            $('.add_blacklist').click();
                    });
                    $('.blacklist').on('click', 'b', function() {
                        $(this).remove();
                        updateBlacklist();
                    });
                    $('.block_method').on('change', function() {
                        GM_setValue('block_method', $(this).val());
                    });
                    $('#'+block_method).prop("checked",true);

                    $('.donate_me').hover(function() {
                        $(this).children('img').stop(true, true).delay(200).show(200);
                    }, function() {
                        $(this).children('img').stop(true, true).hide(100);
                    });
                    e.preventDefault();
                });
            });

            function updateBlacklist() {
                var words_htm = $('.blacklist').html();
                var blacklist = words_htm.replace(/<b>/g, '').replace(/<\/b>/g, '||').replace(/\|\|\s*$/, '');
                //console.log(blacklist);
                GM_setValue('keyword', blacklist);
                keywords = getKeywords();
            }

            function closePop(pop_id) {
                $('.block_overlay').fadeOut(300);
                $(pop_id).css('display', 'none');
            }
        };
        // end fn blockPop
        $('.block_setting').blockPop();
    });
})(window.jQuery.noConflict(true));