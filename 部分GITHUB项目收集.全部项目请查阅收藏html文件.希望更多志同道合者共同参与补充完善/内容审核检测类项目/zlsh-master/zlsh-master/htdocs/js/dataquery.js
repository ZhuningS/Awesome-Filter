/**
 * 筛选，分页等请求数据
 * 
 * txv.template.fillHtml(json, 'covervideo_tpl', $j(el).find('ul'), true, null, undefined, function(){
 *                               vchannelCommon.initLayout();
 *                           });
 */
window.ZLSH = window.ZLSH || {};

ZLSH.dataquery = (function(){
    
    function s(req, conf){
        conf = conf || {};
        this.req = req;
        
        this.config = {
            pager : {
                pagerContId : '',
                pageSize : 10
            },
            flag : {
                needPager : false
            },
            template : {
                modId : '',
                tplId : ''
            }
        };
        
        $.extend(this.config, conf);
    }
    
    
    
    $.extend(s.prototype, {
        init : function(conf){
            conf = conf || {};
            
            $.extend(this.config, conf);
            
            this.initEvent();
            
            
            
            this.queryPage(1);  //进入页面，查询第一页的数据
        },
        
        initEvent : function(){
            var me = this;
            
            $('[data-form-item]').on('click', '[data-form-val]', function(){
                var me = $(this);
                var val = me.attr('data-form-val');
                var text = me.find('a').text();
                var condEle = me.parent().parent().find('[data-form-cond]');
                condEle.attr('data-form-cond', val);
                condEle.text(text);
            });
            
            $('[data-form-button="submit"]').click(function(e){
                e.preventDefault();
                //{type:1, source:2}
                var param = {
                    
                };
                $('[data-form-item]').each(function(i, item){
                    var fi = $(item);
                    var key = fi.attr('data-form-item');
                    var val = fi.find('[data-form-cond]').attr('data-form-cond');
                    if(typeof(key) != "undefined" && typeof(val) != "undefined"){
                        param[key] = val;
                    }
                });
                
                param.keyword = $('input[name="keyword"]').val(); //搜索的关键词
                param.offset = 0; //从第一页开始
                
                me.queryData(param);
            });
        },
        
        initPager : function(json){
            var me = this;
            var total = json.total;
            var offset = me.req.getParam('offset');
            var pageSize = me.config.pager.pageSize;
            var curPage = Math.ceil(parseInt(offset, 10)/pageSize)+1;
            $('#'+me.config.pager.pagerContId).pagination({
                items: total,
                itemsOnPage: me.config.pager.pageSize,
                currentPage: curPage, //从1开始计数
                cssStyle: 'pagination',
                prevText: '«',
                nextText: '»',
                onPageClick : function(pageNumber, event){
                    event.preventDefault();
                //  alert('您点击了第'+pageNumber+'页');
                    me.queryPage(pageNumber);
                }
            });
        },
        
        queryPage : function(page){
            var me = this;
            page = page || 1;
            var offset = (page - 1)*me.config.pager.pageSize;
            me.queryData({
                offset : offset
            });
        },
        
        queryData : function(param){
            var me = this;
            window.scrollTo(0,0);
            var req = this.req;
            req.setParam(param);
            req.query(function(json){
                me.doData(json);
            });
        },
        
        doData : function(json){
            var me = this;
            
            me.renderData(json);
            if(me.config.flag.needPager){
                me.initPager(json);
            }
        },
        
        renderData : function(json){
            var me = this;
            $('#video_total').text(json.total);
            txv.template.fillHtml(json, me.config.template.tplId, me.config.template.modId, true, null, undefined, function(){
                
            });
        }
    });
    
    return s;
})();
