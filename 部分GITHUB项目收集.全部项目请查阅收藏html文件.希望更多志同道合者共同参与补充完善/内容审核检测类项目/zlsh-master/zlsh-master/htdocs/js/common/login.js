/**
 * 登录验证模块
 * 
 */
txv.login.init({
	useStrictLogin: true
	}, true);
	
txv.login.addLoginCallback(function(){
	islogin_layout(txv.login.getNick());
	window.location.reload();
});
txv.login.addLogoutCallback(function(){
	nologin_layout();
});

$(function(){
    if(!txv.login.isLogin()){
        txv.login.openLogin();
    }else{
        islogin_layout(txv.login.getNick());
    }
});

$('.user-login').click(function(){
	if(!txv.login.isLogin()){
		txv.login.openLogin();
	}else{
		islogin_layout(txv.login.getNick());
	}
});
$('.user-logout').click(function(){
	txv.login.logout();
});

function islogin_layout(nickname){
	$('#islogin_cont').show();
	$('#nologin_cont').hide();
	$('#login_nickname').text(nickname);
}
function nologin_layout(){
	$('#islogin_cont').hide();
	$('#nologin_cont').show();
}