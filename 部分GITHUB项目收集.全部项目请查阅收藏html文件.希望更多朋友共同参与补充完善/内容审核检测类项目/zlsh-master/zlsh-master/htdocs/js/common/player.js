/**
 * 弹出浮层播放视频模块
 * 
 */

window.ZLSH = window.ZLSH || {};

ZLSH.player = (function($){
    
    var url = 'http://imgcache.gtimg.cn/tencentvideo_v1/tvp/js/tvp.player_v2_jq.js';
    
    var param = {
        width : 560,
        height : 450,
        modId : 'modPopPlayer',
        vtitleContId : 'myLargeModalLabel'
    };
    
    function init(p){
        
        $.extend(param, p);
        
        initEvent();
    }
    
    var player = null;
    var video = null;
        
    var getPlayer = function(vid){
        
        if(player){
            video.clear();
            video.setVid(vid);
        //    player.play(video);
            player = new tvp.Player();
            player.create({
                width : param.width,
                height : param.height,
                video : video,
                vodFlashType : "TencentPlayer",
                vodFlashExtVars : {
                    share : 0,
                    popup : 0,
                    light : 0,
                    searchbar : 0
                },
                modId : param.modId, //mod_player是刚刚在页面添加的div容器
                autoplay : true
            });
        }else{
            $.getScript(url, function(){
                player = new tvp.Player();
                video = new tvp.VideoInfo();
                video.setVid(vid);
                
                player.create({
                    width : param.width,
                    height : param.height,
                    video : video,
                    vodFlashType : "TencentPlayer",
                    vodFlashExtVars : {
                        share : 0,
                        popup : 0,
                        light : 0,
                        searchbar : 0
                    },
                    modId : param.modId, //mod_player是刚刚在页面添加的div容器
                    autoplay : true
                });                    
            });
        }
    };
    
    function play(vid, title){
        $('#'+param.vtitleContId).text(title+'('+vid+')');
        getPlayer(vid);
    }
    
    //给所有带有 data-play 的属性绑定事件，拉起浮层播放
    function initEvent(){
        
        $(document).on('click', '[data-play]', function(e){
            var me = $(this);
            var vid = me.attr('data-play');
            var title = me.attr('title');
            if(vid){
                play(vid, title);
            }
        });
        
        window.__flashplayer_islastvideo = function () {
            return true;
        };
        //会员登陆跳广告修改
        window.__tenplay_getuinfo = function() {
            if (!txv.login.isLogin())
                return 0;
            return 2;
        };
        window.__flashplayer_openLogin = function (type) {
            type = type || "";
            txv.login.openLogin({"success": function () {
                
            }});
        };
    }
    
    return {
        init : init,
        play : play
    };
})(jQuery);
