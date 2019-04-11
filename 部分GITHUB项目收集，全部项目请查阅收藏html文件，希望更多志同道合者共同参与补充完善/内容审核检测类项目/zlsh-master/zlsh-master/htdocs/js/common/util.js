/**
 * 
 */

window.ZLSH = window.ZLSH || {};

ZLSH.util = (function($){
    
    var msgCont = null;
    
    function message(content){
        if(!msgCont){
            msgCont = $('.message-alert-dlg');
        }
        var contentCont = msgCont.find('#modMessageAlert');
        contentCont.html(content);
        msgCont.modal();
    }
    
    return {
        message : message
    };    
})(jQuery);
