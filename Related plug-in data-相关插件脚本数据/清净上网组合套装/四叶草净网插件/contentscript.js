
var words = "";


var closeBtn;
var imgArray;



var customImg = "http://www.veg001.com/zimingPlugin/wang_ye_jing_hua_qi/source/images/1.jpg";
var bgp;
//var isInWhiteList = false;
var isInSuperWhiteList=false;

var isArticlePage = false;

var panel_control; //=new Panel_Control();
var interval;

var status_panel_interval;

var interval2;

var replaceImgSrc="http://www.a19933332324234234234jdfgdfgdbc.com/sdf.jpg";


$(document).ready(function () {
	
	
	
	init();
	
});

function init() {
	
	/*
	chrome.extension.sendRequest({
		evt : "request_data"
	}, onGetData);
	*/
	
	if(!is_iframe)
	{
		
		onGetData(fbgp);
		
		
	}
	
	
}

function onGetData(_bgp) {
	
	
	bgp = _bgp;
	
	//alert(bgp+"   "+bgp["words"]);
	//alert(11);
	
	words = bgp.words;
	//alert(22);
	//showUpdateDialog();
	/*
	if(!bgp.has_stat)
	{
		
			try
			{
				//统计代码
				chrome.extension.sendRequest({evt: "request_complete_stat"}, function(){});
				var script = document.createElement('script');
				script.type = 'text/javascript';
				script.src="http://js.users.51.la/17647748.js";
				document.getElementsByTagName('body').item(0).appendChild(script);
				
			}
			catch(e)
			{
				alert(e);
			}
			
			
			
	}
	*/
	try{
		
		isInSuperWhiteList=checkIsInSuperWhiteList(host);
		
		if ( !isInSuperWhiteList) {
			
			//showTipsFrame();
			//有些网站会延时加载某些内容，为了继续过滤，会定时更新这些判断
			interval = setInterval("doAction();", 2000);
			doAction();
			
		} else {
			clearInterval(interval);
			
		}
		
		
	}
	catch(eec)
	{
		
	}
	
	//alert(bgp.words);
	
}

var hasShowDilog=false;
function showUpdateDialog()
{
	/*
	if(!hasShowDilog && bgp.storage["version"]!=bgp.version && !is_iframe && !checkIsInSuperWhiteList(host))
	{	
	
		chrome.extension.sendRequest({evt: "request_has_show_update_dialog"}, function(){});
		
		hasShowDilog=true;
		var str='';
		str+='<div id="fhzd_dialog" title="净网-升级公告 V'+bgp.version+'">';
		str+='<p style="text-align:left;">';
		str+='新功能:<br> \"安全图片模式\"下，<br>任何鼠标双击事件，均可快速恢复图片，原ALT键恢复依然有效！';
		str+='</p>';
		str+='</div>';
		$("body").append(str);
		
		$(function() {
		   $( "#fhzd_dialog" ).dialog({
			 resizable: false,
			 open: function (event, ui) {
                 $(".ui-dialog-titlebar-close", $(this).parent()).hide();
             },
		modal:true,
		//按钮
			 buttons: {
			   
			   "确定": function() {
				 $( this ).dialog( "close" );
			   }
		  
			 }
		   });
		 });
		
		
		
	}
	*/
}





function showTipsFrame()
{
	//alert(bgp.msgData);
	
	
	
	if(is_iframe==false)
	{
		try
		{
			//alert(bgp.msgData);
			
			
			if(!dailog_body && String(bgp.msgData).length>5 && $("body").width()>=800 && window.location.href.indexOf("http://")!=-1)
			{
				
				dailog(bgp.msgData,"反黄之盾-快讯",350,200,0,0,"no");
				chrome.extension.sendRequest({evt: "request_has_show_msg_data"}, function(){});
			}
			
			
		}
		catch(e)
		{
			alert(e);
		}
	}
	

}


function onImageOver(img)
{

	if(img.src.indexOf("http://")==-1 || img.src.indexOf("veg001.com")!=-1 || img.src.indexOf(".gif")!=-1 || img.src.indexOf("http://www.a19933332324234234234jdfgdfgdbc.com/sdf.jpg")!=-1)
	{
		return;
	}

	if(closeBtn)
	{
		$(closeBtn).remove();
		
	}
	
	closeBtn=document.createElement("a");
	
	closeBtn.href="javascript:";
	closeBtn.title="反黄之盾:举报为风险涉黄图片";
	$(closeBtn).text("举报图片");
	$(closeBtn).attr("imgUrl",img.src);
	var im=$(img);
	//往上找3层
	var tagA;
	var pa=im.parent();
	for(var i=0;i<3;i++)
	{
		if(pa)
		{
			if(String(pa.get(0).tagName).toLowerCase()=="a")
			{
				tagA=pa;
				break;
			}
			else{
				pa=pa.parent();
			}
		}
		else{
			break;
		}	
	}
	
	if(tagA)
	{
		tagA.before(closeBtn);
	}
	else{
		$(img).parent().prepend(closeBtn);
	}
	
	$(closeBtn).css({"display":"block","font-family":"'Segoe light',Segoe,'Segoe UI', 'Microsoft yahei','微软雅黑',Arial,sans-serif","backgroundColor":"#0066FF","text-align":"center","z-index":"999999999","position":"relative","width":"56px","height":"15px","font-size":"12px","color":"#ffffff","left":"0px","top":"0px"});
	
	
	$(closeBtn).mouseover(function(){
		
		$(this).fadeIn();
		$(this).stop();
		//$(this).show();
		
		
		
	})
	$(closeBtn).mouseout(function(){
		
		$(closeBtn).fadeOut(500);
		
	})
	$(closeBtn).click(function(){
		
		//alert($(this).attr("imgUrl"));
		submitImage($(this).attr("imgUrl"));
		
	})
	
	
}

function onImageOut(img)
{
	if(closeBtn)
	{
		$(closeBtn).fadeOut(3000);
		
	}
}

function submitImage(src)
{
	
	$("body").find("img[src='"+src+"']").attr("src","http://www.a19933332324234234234jdfgdfgdbc.com/sdf.jpg");
	chrome.extension.sendRequest({evt: "request_user_panel_action",type:"submit_img",param:src}, function(){});
	
	var b=document.createElement("div");
	$(b).text("数千用户因您的善举而受益了，感恩!\n请随缘参与,保持清静，莫刻意找图！");
	$("body").append(b);
	$(b).css({"position":"absolute","z-index":"99999999","padding":"5px 5px 5px 5px","background":"#0099FF","color":"#ffffff","font-size":"14px","border":"1px solid","border-color":"##E1E1E1","width":"350px","height":"37px","left":($(closeBtn).offset().left+$(closeBtn).width()+5)+"px","top":($(closeBtn).offset().top+$(closeBtn).height())+"px"});
	
	$(b).animate({top:($(b).offset().top)+'px'},3*1000).fadeOut(500);
	$(b).click(function(){
		$(b).remove();
	})
	
	
	$(closeBtn).hide();
	
	
}



function doAction() {
	
	
	
	var d=new Date();
	var st=d.getTime();
	//alert(11);
	//autoAiMode();
	filterImage();
	filterKeyWordsByTag("a");
	
	//safe_mode();
	
	
}


function hideElementByTag(_element, _tag, _handle) {
	var itemList = _element.getElementsByTagName(_tag);
	for (var k = 0; k < itemList.length; k++) {
		var item = itemList[k];
		
		if (item.getAttribute("has_display_none") != null) {
			continue;
		} else {
			
			item.setAttribute("has_display_none", "true");
			
			if (_handle == "hide") {
				item.style.display = "none";
			} else if (_handle == "mask") {
				setImgStyleNone(item);
			}
			else if (_handle == "del") {
				setImgStyleNone(item);
				_element.parentNode.removeChild(_element);
			}
			else if (_handle == "blur") {
				setImgStyleBlur(_element);
			}
		}
		
	}
}



var imgTag_num=0;
function filterImage() {
	
	if (bgp.storage["mode"] != "normal" || bgp.status != "start") {
		
		return;
	}
	var array = getTagByName("img");
	
	if(array.length==imgTag_num)
	{
		return;
	}
	imgTag_num=array.length;
	
	
	imgArray=array;
	for (var i = array.length - 1; i >= 0; i--) {
		
		var img = array[i];
		var im=$(img);
		
		
		
		if (img.getAttribute("has_check_key_word") =="true") {
			continue;
		} else {
			
			if(bgp.storage["isPeopleImgAdmin"]=="on")
			{
				im.mouseover(function(){
					onImageOver(this);
				})
				
				$(img).mouseout(function(){
					onImageOut(this);
				})
			}
			
			img.setAttribute("has_check_key_word", "true");
			
			
			
			
			
			if (checkInKeyWord(img.alt) || (img.title!=undefined && checkInKeyWord(String(img.title))) || bgp.filter_img_data.indexOf(img.src)>0 ) {	
				setImgStyleNone(img);
			} 
				
				
			
		}
		
	}
	
	
	
	
}


var atag_num=0;

var sex_per=0;

function filterKeyWordsByTag(_tag) {
	
	//alert(11);
	var resultArray = [];
	var array = getTagByName(_tag);
	if(array.length==atag_num)
	{
		return;
	}
	atag_num=array.length;
	
	var blurHostReg = new RegExp(bgp.storage["blur_host"], "g");
	
	//\uff70-\uff9d\uff9e\uff9f\uff67-\uff6f
	//var j_reg=new RegExp("[\u0800-\u4e00]", "gi");
	var j_reg=new RegExp("[\u3040-\u309F\u30A0-\u30FF]", "gi");
	
	
	//alert(22);
	//是否智能判断黄网
	var black_link_count=-1;
	var jp_link=-1;
	if(bgp.storage["ai_mode"]=="on")
	{
		black_link_count=0;
		jp_link=0;
	}
	
	for (var i = array.length - 1; i >= 0; i--) {
		
		var a = array[i];
		
		if (a.getAttribute("has_check_key_word") =="true") {
			continue;
		} else {
			
			a.setAttribute("has_check_key_word", "true");
			
			
			
			if (bgp.status == "stop") {
				continue;
			}
			
			//var linkStr=a.innerText;
			var m3 = checkInKeyWord(a.innerText); 
			
			
			
			var m2 = null;
			
			try {
				m2 = checkInKeyWord(a.getAttribut("title"));
			} catch (e) {
				m2 = null;
			}
			
			//判断是否有日文连接
			if(a.innerText.match(j_reg)!=null)
			{
				if(jp_link!=-1)
				{
					//alert(a.innerText.match(j_reg));
					jp_link++;
				}
			}
			
			
			if (m2 || m3) {
				
				//找到有同样超连接的连接，并判断这些连接下是否有图片，如果有则取消显示，并取消显示
				resultArray.push(a.href);
				if (bgp.storage["mode"] == "normal") {
					
					
					
					//alert("22");
					
					
					//如果父节点里面只有1个连接，并且带有图片的，那么整个父标签都隐藏
					var parentNode = a.parentNode;
					
					if (parentNode.getElementsByTagName("img").length == 1 && parentNode.getElementsByTagName(_tag).length == 1) {
						//a.style.display = "none";
						setImgStyleNone(parentNode.getElementsByTagName("img")[0]);
						
					}
					else{
						//纯文字的连接,是否使用健康内容替换
						if(bgp.storage["isUseLinkReplace2"]=="on" && bgp.linkReplaceArr.length>0)
						{
							
							var titleLength=a.innerText.length;
							var robj=bgp.linkReplaceArr[Math.floor(Math.random()*bgp.linkReplaceArr.length)];
							
							a.innerText=robj.title.slice(0,titleLength);
							a.setAttribute("href",robj.link);
							$(a).css({"color":"#999999"});
							
						}
						
					}
					
					
						/*
						try
						{
							//把所有相同网址的超链接都隐藏掉
							var hr=$(a).attr("href");
							
							if(hr=="http://games.ifeng.com/webgame/zcy/zcy922.shtml?af=1943503149")
							{
								document.title="555";
								$("[href="+hr+"]").attr("href","http://www.baidu.com");
							}
							
							//alert(hr);
							
							//$("[href="+hr+"]").attr("href","http://www.baidu.com");
						}
						catch(gg)
						{
							alert(gg);
						}
					*/
					
						
					
					
					
					a.style.display = "none";
					
					
					if(black_link_count!=-1)
					{
						black_link_count++;
					}
					
				} 
				
			}
			
			
			
			
			
		}
		
	}
	
	
	
	
	
	
	
	
	
	
	//智能判断黄网，超过3成的涉黄超链接，或者超过5条含日文连接，被判断为黄网
	var perNum=Number(bgp.storage["ai_mode_per_num"])/100;
	var jpNum=Number(bgp.storage["ai_mode_jp_num"]);
	//alert(jp_link);
	if(!is_iframe && (black_link_count>0 || jp_link>=jpNum))
	{
		sex_per=black_link_count/array.length;
		
		if(bgp.storage["show_ai_per"]=="on")
		{
			document.title=document.title.slice(0,8)+"___关键词链接 "+Math.floor(sex_per*100)+"%";
		}
		if(sex_per>=perNum || jp_link>=jpNum)
		{
			
			
			
			if(window.confirm("【"+document.title+"】\""+host+"\"极有可能为黄网!\n\n为免误判，请核实后点击确认加入\"净网\"黑名单!\n\n之后可在净网\"选项页\"删除\n\n点击\"取消\"继续访问！\n\n避免误判为黄网，关键词百分比不宜设得太低！"))
			{
				var mhost=host;
				mhost="http://"+mhost.replace(/www\./gi,"");
				try{chrome.extension.sendRequest({evt: "request_add_black_domain",value:mhost}, function(){});}catch(ee){};
				
				var body = document.getElementsByTagName('body').item(0);
				var style = document.createElement('style');
				style.type = 'text/css';
				style.innerText="body {display:none}";
				body.appendChild(style);
				
				
				window.stop();
				window.location.href="http://fhzd.org/zimingPlugin/wang_ye_jing_hua_qi/page/redirect.html";
				clearInterval(interval);
				
			}
			
			
			
			
			
			
		}
	}
	
	
	
	
	
	
	
	
	
}


//判断内容是否存在涉黄关键词
var enWords = "abcdefghijklmnopqrstuvwxyz";



function checkInKeyWord(_str) {
	var regex = new RegExp(bgp.words, "g");
	var regexEng = new RegExp(bgp.words_eng, "g");
	
	var str=_str.toLowerCase();
	
	
	var m = str.match(regex);
	
	

	
	
	
	/*
	if(_str.indexOf("柳岩")!=-1)
	{
		alert(bgp.words);
	}
	*/
	
	//对于全英文的关键词，如av，必须要要含有其他中文字符才通过，否则很容易误判，如avtar..
	//并且如果av 前或者 后 都有英文字母的，要忽略,因为这很可能是一个单词
	var en = str.match(regexEng);
	
	
	if (en && hasChinese(str)) {
		
		
		
		
		var index = str.indexOf(en);
		var tmpStr =str;
		var inBefore = false;
		var inAfter = false;
		//判断前后是否有英文字符
		if (index - 1 >= 0) {
			var preTxt = tmpStr.charAt(index - 1);
			//preTxt.length>0 避免出现空字符 例如 preTxt="";
			if (preTxt.length > 0 && enWords.indexOf(preTxt) != -1) {
				inBefore = true;
			}
		}
		if (index + en.length + 1 <= str.length) {
			var afterTxt = tmpStr.charAt(index + en.length + 1);
			if (afterTxt.length > 0 && enWords.indexOf(afterTxt) != -1) {
				inAfter = true;
			}
		}
		//任何前 或 后，有英文字符 ，要忽略
		if (inBefore || inAfter) {
			en = null;
		} else {
			en = en;
		}
		
	} else {
		en = null;
	}
	
	if (m != null) {
		//alert(str+"||"+m);
		return m;
	}
	if (en != null) {
		//alert(str+"||"+en);
		return en;
	}
	
	return false;
	
}

//获得所有TAG以及所有IFRAME里面的TAG
function getTagByName(_tag) {
	
	var array = [];
	var tagArray = document.getElementsByTagName(_tag);
	if (tagArray != null && tagArray.length > 0) {
		for (var i = tagArray.length - 1; i >= 0; i--) {
			array.push(tagArray[i]);
		}
	}
	
	return array;
}




/*
function checkIsInSuperWhiteList(_host) {


	if(bgp.webConfirmIgnoreMap["http://"+host]=="yes")
	{
		return true;
	}

	var arr2= bgp.super_white_list.split("#");
	
	
	//alert(arr2);
	
	for (var i = 0; i < arr2.length; i++) {
		
		if (_host.indexOf(arr2[i]) != -1 && arr2[i].length > 2) {
			////alert(1);
			return true;
		}
		
	}
	return false;
}
*/



function hasChinese(_str) {
	var reg = /[\\S\\s]*[\u4E00-\u9FFF]+[\\S\\s]*/;
	if (_str.match(reg))
		return true;
	return false;
}

/*
function getLinkByText(_txt) {
	
	return bgp.customLink[Math.floor(Math.random() * bgp.customLink.length)];
	
}
*/
function setImgStyleVisibleFalse(img)
{
	if (img.src.indexOf("veg001.com") == -1) {
		
		$(img).attr("src",replaceImgSrc);
		
	}
}

function setImgStyleNone(img) {
	
	if (img.src.indexOf("veg001.com") == -1 && img.src.indexOf("fhzd.org")==-1) {
		img.src=replaceImgSrc;
		$(img).attr("src",replaceImgSrc);
		
	}
	
}

function setImgStyleBlur(img) {

	if (img.src.indexOf("veg001.com") == -1 && img.src.indexOf("fhzd.org") == -1) {
		
		img.setAttribute("style", "-webkit-filter: contrast(0.8) brightness(0.8);border:2px solid #ff0000;");
		
	}
	
	
	
}




// JavaScript Document
/*
本人写的一个可以用鼠标拖拽的窗体<br />
功能类似JS里边的window.open()<br />
然而有时候我们想要改变open出来页面的外观却难以办到<br />
所以就小小的写了这个东西，希望大家喜欢和加以完善<br />

	主要函数说明
	dailog 主要用于构建对话框体
		   参数 url,title,width,height,margin_top,margin_left,scrolling
		   参数说明 要在窗体显示的文档URL，窗体的标题,窗体宽，窗体高，距离浏览器顶部的距离，距离浏览器左边的距离
		   
	dailog_move 控制窗体的移动
			参数 eventObj,moveObj
			参数说明 eventObj鼠标拖拽的对象，moveObj拖拽鼠标移动的对象
			
	1--原创,欢迎修改完善 欢迎加我QQ279074838交流学习-
	
	修改：
	1、这次修改了窗体在超长页面不能正确定位的BUG
	2、窗体是否可滑动
	2009-5-6
*/

var dailog_body;
var isMove=false//窗体移动状态
function dailog(_contentText,title,width,height,margin_top,margin_left,scrolling)
{
		
	if(document.getElementById("fhzd_dailog_body")!=null)
	{
		//alert("只能打开一个窗口")
		return false;
	}
	//对话框体
	dailog_body=document.createElement("div");
	dailog_body.id="fhzd_dailog_body";
	
	dailog_body.style.cssText = "top:expression(this.parentNode.scrollTop +"+margin_top+"+ 'px');"
	dailog_body.style.left=margin_left+"px";
	//dailog_body.style.height=height+"px";   
	dailog_body.style.width=width+"px";   
	dailog_body.style.position="fixed"; 
	dailog_body.style.border="1px solid #EFEFEF";



	//标题
	var dailog_title=document.createElement("div");
	dailog_title.id="dailog_title"
	dailog_title.style.top=0;   
	dailog_title.style.left=0;
	dailog_title.style.height=25+"px";   
	dailog_title.style.width=width+"px";
	dailog_title.style.color="#ffffff";
	dailog_title.style.fontWeight="bold";
	dailog_title.style.cursor="default"
	dailog_title.style.background="#0099FF";
	dailog_title.innerHTML="<div style='float:left;height:25px;width:50%;font-family:微软雅黑;font-size:14px;line-height:25px;text-indent:5px'>"+title+"</div><div id='os' style='float:right;height:20px;width:16px;font-family:微软雅黑;font-size:14px;line-height:20px;margin-right:1px'><a href='javascript:' id='fhzd_dailog_close_btn' title='关闭'>×</a></div>"
	//内容
	var dailog_content=document.createElement("div");
	dailog_content.id="dailog_content";
	dailog_content.style.top=0;   
	dailog_content.style.left=0;   
	
	dailog_content.style.width=width+"px";  
	dailog_content.style.color="#333333";
	
	
	
	dailog_content.innerHTML=_contentText;
	
	//dailog_content.style.height=(height-20)+"px";   
	
	
	dailog_content.style.padding="5px 5px 5px 5px";
	
	
	//dailog_title.onmouseover=Function(dailog_move(dailog_title,dailog_body));

	$(dailog_body).append(dailog_title);
	$(dailog_body).append(dailog_content);
	
	$("body").append(dailog_body);

	$(dailog_body).css({"box-shadow":"2px 2px 2px 0px lightgray","z-index":"99999999999","font-size":"14px","background-color":"#ffffff","left":($("body").width()-width-20)+"px","top":($(window).height()-$(dailog_body).height()-20)+"px"});
	
	$(dailog_title).css({"text-align":"left"});
	$(dailog_content).css({"text-align":"left"});
	
	//$(dailog_body).draggable();
	
	$("#fhzd_dailog_close_btn").click(function(){
		$(dailog_body).remove();	
	});
	
	
	
	
}



















