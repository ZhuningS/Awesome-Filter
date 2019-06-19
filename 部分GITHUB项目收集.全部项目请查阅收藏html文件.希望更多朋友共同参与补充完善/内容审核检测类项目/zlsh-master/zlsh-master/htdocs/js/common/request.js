/**
 * 通用ajax请求数据组件
 * 
 */

window.ZLSH = window.ZLSH || {};

ZLSH.request = (function($){
    
    var cgiMap = {
        '0' : 'http://shenhe.video.qq.com/fcgi-bin/lock_video_list?',
        '1' : 'http://shenhe.video.qq.com/fcgi-bin/audit_video_list?',
        '2' : 'http://shenhe.video.qq.com/fcgi-bin/audit_video_list?'
    };
    
    function request(cgi, param){
        cgi = cgi || cgiMap['0'];
        param = param || {};
        
        this.cgi = cgi;
        this.param = {
            otype : 'json',
            offset : 0,
            limit : 10,
            audit_result : 1
        };
        this.timeout = 8000;
        
        this.check = null;
        this.error = null;
        this.success = null;
        
        $.extend(this.param, param);
    }
    
    $.extend(request.prototype, {
        setParam : function(param){
            $.extend(this.param, param);
        },
        getParam : function(key){
            return this.param[key];
        },
        setFn : function(key, fn){
            var me = this;
            if($.isFunction(fn) && typeof(key)=='string'){
                me[key] = fn;
            }
        },
        buildUrl : function(){
            var sb = [];
            sb.push(this.cgi);
            var paramStr = $.param(this.param);
            sb.push(paramStr);
            return sb.join('');
        },
        
        query : function(callback){
            var me = this;
            var url = me.buildUrl();
           
            $.ajax({   
                url : url,
                dataType : "jsonp",
                timeout : me.timeout,
                cache : false,
                complete : function(){
                    
                },
                error : function(msg) { 
                    me.error && me.error(msg);
                },
                success : function(json) {
                    var flag = true;
                    if($.isFunction(me.check)){
                        flag = me.check(json);
                    }
                    if(!flag){
                        me.error && me.error(json);
                    }else{
                        me.success && me.success(json);
                        if($.isFunction(callback)) callback.call(me, json);
                    }
                }
            });
        }
    });
    
    request.defaultInit = function(type, param){
        type = '' + type;
        type = type || '0';
        var cgi = cgiMap[type];
        var req = new request(cgi, param);
        return req;
    };
    
    return request;
})(jQuery);
