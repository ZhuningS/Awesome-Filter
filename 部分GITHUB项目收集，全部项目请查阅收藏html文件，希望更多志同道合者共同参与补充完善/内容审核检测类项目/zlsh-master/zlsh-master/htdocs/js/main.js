/**
 * 入口主模块
 * 
 */

window.ZLSH = window.ZLSH || {};

ZLSH.main = (function($){
    
    var reasonMap = {
        '0' : '0',
        '1' : '色情或反动',
        '2' : '境外网站',
        '3' : '低俗',
        '4' : '资料填写违规'
    };
    
    var req = null;  //请求数据的对象
    var dataquery = null;
    
    var config = {
        pageType : 0,  //0-待审核  1-已审核 2-已拒绝
        
        pageConfig : {
            pager : {
                pagerContId : 'pager_cont',
                pageSize : 10
            }
        },
        dataQueryParam : {
            otype : 'json',
            offset : 0,
            limit : 10,
            audit_result : 1 //0-待审核  1-已审核 2-已拒绝
        },
        flag : {
            needPager : false
        },
        template : {
            modId : 'list_cont',
            tplId : 'list_tpl'
        }
    };
    
    function init(conf){
        conf = conf || {};
        
        $.extend(config, conf);
        
        if(!txv.login.isLogin()){
            return;
        }
        
        $.extend(Live.template.MODIFIERS, {
            /**
             * 根据分类id，得到分类名称
             */
            getTypeName : function(tid){
                tid = tid || "";
                tid = '' + tid;
                if(!tid || !window.g_typemap) return tid;
                for(var i=0,len=g_typemap.content.length; i<len; i++){
                    var item = g_typemap.content[i];
                    if(tid == item.id) return item.target;
                } 
                return tid;
            },
            formatDateStr : function(t){
                var d = new Date(t);
                return d.toLocaleString();
            },
            getReason : function(reasonid){
                reasonid = reasonid || 0;
                reasonid = '' + reasonid;
                return reasonMap[reasonid];
            }
        });
        
        req = getRequestByType(config.pageType, config.dataQueryParam);
        
        req.error = function(json){
            if(json){
                if(json.returncode == 100010){  //未登录或登录已失效
                    txv.login.openLogin();
                }else if(json.returncode == 200030){  //不合法
                    ZLSH.util.message('当前登录用户不合法');
                }
            }
        };
        
        req.check = function(json){
            if(!json || json.returncode != 0){
                return false;
            }
            return true;
        };
        
        dataquery = new ZLSH.dataquery(req);
        
        dataquery.init({
            pager : $.extend({}, config.pageConfig.pager),
            flag : $.extend({}, config.flag),
            template : $.extend({}, config.template)
        });
        
        ZLSH.player.init(); //初始化浮层播放视频相关
        
        initEvent();
    }
    
    function initEvent(){
        $(document).on('click', '[data-audit-submit]', function(e){
            e.preventDefault();
            var me = $(this);
            var type = me.attr('data-audit-submit');
            if('all' == type){  //提交全部
                auditAll();
            }else{
                resetAudit(type);  //单个提交的话，这里的type是vid
            }
        });
        
    }
    
    /**
     * 提交全部
     */
    function auditAll(){
        var result = getAuditVideoArr();
        if(result.msg){
            ZLSH.util.message(result.msg);
        }else{
            ZLSH.shenhe.shenhe({
                type : config.pageType,
                videoArr : result.videoArr,
                success : function(json){
                    var msg = [];
                    if(json && $.isArray(json.data)){
                        $.each(json.data, function(i, item){
                            if(item.ret != 0){
                                msg.push('('+item.vid+')提交失败');
                            }
                        });
                    }
                    if(msg.length > 0){
                        ZLSH.util.message(msg.join('<hr>'));
                    }else{
                        ZLSH.util.message('提交成功');
                        dataquery.queryPage(1);  //重新拉取
                    }
                },
                error : function(e){
                    ZLSH.util.message('提交失败:'+e);
                }
            });
        }
    }
    
    /**
     * 重审
     */
    function resetAudit(vid){
        var result = getAuditVideoArr(vid);
        if(result.msg){
            ZLSH.util.message(result.msg);
        }else{
            ZLSH.shenhe.shenhe({
                type : config.pageType,
                videoArr : result.videoArr,
                success : function(json){
                    var msg = [];
                    var vidArr = [];
                    if(json && $.isArray(json.data)){
                        $.each(json.data, function(i, item){
                            if(item.ret != 0){
                                msg.push('('+item.vid+')提交失败');
                            }else{
                                vidArr.push(item.vid);
                            }
                        });
                    }
                    if(msg.length > 0){
                        ZLSH.util.message(msg.join('<hr>'));
                    }else{
                        ZLSH.util.message('重新提交成功');
                        resetStatus(vidArr);
                    }
                },
                error : function(e){
                    ZLSH.util.message('提交失败:'+e);
                }
            });
        }
    }
    
    function resetStatus(vidArr){
        for(var i=0,len=vidArr.length; i<len; i++){
            var vid = vidArr[i];
            var Cont = $('[data-audit-item='+vid+']');
            var ele = Cont.find('input[name="'+vid+'_result"]:checked');
            var result = ele.val();
            if(typeof(result) == 'undefined'){  //没有勾选
                
            }else{
                var reason = 0;
                var reasonText = '通过';
                if(result == '2'){  //没有通过
                    reason = ele.attr('data-audit-reason');
                    reasonText = reasonMap[reason];
                }                
                var statusEle = Cont.find('[data-status-result]');
                statusEle.attr('data-status-result', result);
                statusEle.attr('data-status-reason', reason);
                statusEle.text(reasonText);
            }
        }
    }
    
    function getAuditVideoArr(vid){
        var videoArr = [];
        var msg = [];
        var selectorStr = '[data-audit-item]';
        if(vid){
            selectorStr = '[data-audit-item="'+vid+'"]';
        }
        
        $(selectorStr).each(function(i, item){
            var me = $(this);
            var vid = me.attr('data-audit-item');
            var ele = me.find('input[name="'+vid+'_result"]:checked');
            var result = ele.val();
            if(typeof(result) == 'undefined'){  //没有勾选
                msg.push('('+vid+')没有勾选通过状态');
            }else{
                var reason = 0;
                var remark = me.find('input[name="'+vid+'_remark"]').val();
                if(result == '2'){  //没有通过
                    reason = ele.attr('data-audit-reason');
                }
                videoArr.push({
                    vid : vid,
                    result : parseInt(result, 10),
                    reason : parseInt(reason, 10),
                    remark : remark
                });
            }
        });
        return {
            videoArr : videoArr,
            msg : msg.join('<hr>')
        };
    }
    
    function getRequestByType(type, param){
        return ZLSH.request.defaultInit(type, param);
    }
    
    return {
        init : init
    };
})(jQuery);
