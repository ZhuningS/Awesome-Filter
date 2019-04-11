/**
 * 
 * 
 */
window.ZLSH = window.ZLSH || {};

ZLSH.shenhe = (function($){
    
    var url1 = 'http://shenhe.video.qq.com/fcgi-bin/audit_locked_video'; //审核
    var url2 = 'http://shenhe.video.qq.com/fcgi-bin/reset_audited_video'; //重置
    
    /**
     * param = {type:0, videoArr:[], callback: fn}
     * 
     */
    function shenhe(param){
        if(!param || !$.isArray(param.videoArr) || param.videoArr.length==0) return;
        
        param.type = param.type || 0;
        if(0 == param.type){
            audit(param);
        }else{
            reset(param);
        }
    }
    
    /**
     * 审核视频
     */
    function audit(param){
        
        action(url1, param);
    }
    
    /**
     * 修改已审核过的视频
     * 
     */
    function reset(param){
        
        action(url2, param);
    }
    
    function action(url, param){
        var varr = param.videoArr;
        
        $.ajax({
            url : url+'?g_tk='+$.getToken(), //需要检验csrf
            data : {
                value : JSON.stringify(varr),
                otype : 'json'
            },
            type : 'post',
            dataType : 'jsonp',
            error : function(e){
                if($.isFunction(param.error)){
                    param.error(e);
                }
            },
            success : function(json){
                if(!json || json.returncode != 0){
                    if($.isFunction(param.error)){
                        param.error(json);
                    }
                }else{
                    if($.isFunction(param.success)){
                        param.success(json);
                    }
                }
            }
        });
    }
    
    return {
        shenhe : shenhe
    };
})(jQuery);