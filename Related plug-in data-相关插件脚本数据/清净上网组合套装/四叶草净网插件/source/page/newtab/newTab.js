// JavaScript Document


var MAX_CASE_TXT_LENGTH=500;

var bgp=chrome.extension.getBackgroundPage();


var pageMode=bgp.storage["newTabPageMode"];

var imageTabList=new Array();
var curLoadIndex=0;



try
{
	
	$(document).ready(function () {
		
		if(!bgp.is_jian)
		{
			document.body.innerHTML=bgp.s2t(document.body.innerHTML);
		}
		init();
		
		
	});
	
	
	
	
}
catch(e)
{
	alert(e+" from newTab.js");	
}


function init()
{

var cv=(chrome.app.getDetails().version+"");
$("#title").text("净网 V"+cv);
	


$("#_save_black_list_btn").click(function(){
	
	saveBlackList();
});
createBlackList();

$("#_save_white_list_btn").click(function(){
	saveWhiteList();
});
createWhiteList();


$("#_save_my_key_word_btn").click(function(){
	saveMyKeyWord();
});
createKeyWordList();

$("#_save_my_limit_btn").click(function(){
	saveMyLimit();
});
$("#_save_my_wtb_btn").click(function(){
	saveMyWhiteTieba();
});
$("#_save_my_btb_btn").click(function(){
	saveMyBlackTieba();
});


createCheckSysBlack();

createCheckPer();

createLimitList();

createWhiteTieba();

createBlackTieba();

createAdminCode();







}


function createCheckSysBlack()
{
	if(bgp.storage["user_sys_black_list"]=="true")
	{
		$("#_check0").attr("checked","checked");
	}
	$("#_check0").click(function(){
			if($("#_check0").attr("checked")=="checked")
			{
				chrome.extension.sendRequest({evt: "request_save_use_sys_black",value:"true"}, function(){});
			}
			else
			{
				chrome.extension.sendRequest({evt: "request_save_use_sys_black",value:"false"}, function(){});
			}

	});

}

function createCheckPer()
{
	if(bgp.storage["show_ai_per"]=="on")
	{
		$("#_check1").attr("checked","checked");
	}
	$("#_check1").click(function(){
			if($("#_check1").attr("checked")=="checked")
			{
				chrome.extension.sendRequest({evt: "request_save_show_ai_per",value:"on"}, function(){});
			}
			else
			{
				chrome.extension.sendRequest({evt: "request_save_show_ai_per",value:"off"}, function(){});
			}

	});

}




function saveBlackList()
{
	var text=$("#_black_list_text").attr("value");
	chrome.extension.sendRequest({evt: "request_save_my_black_list",value:text}, function(){});
	alert("保存成功!");
	
}
function createBlackList()
{
	var list=bgp.storage["myBlackList"];
	$("#_black_list_text").attr("value",list);
}



function saveWhiteList()
{
	var text=$("#_white_list_text").attr("value");
	chrome.extension.sendRequest({evt: "request_save_my_white_list",value:text}, function(){});
	alert("保存成功!");
}
function createWhiteList()
{
	var list=bgp.storage["my_white_list_3"];
	$("#_white_list_text").attr("value",list);
}



function saveMyKeyWord()
{
	var text=$("#_my_key_word").attr("value");
	chrome.extension.sendRequest({evt: "request_save_my_key_word",value:text}, function(){});
	alert("保存成功!");
}


function createKeyWordList()
{
	var list=bgp.storage["my_key_word"];
	$("#_my_key_word").attr("value",list);
}



function saveMyLimit()
{
	var text=$("#_my_limit").attr("value");
	chrome.extension.sendRequest({evt: "request_save_my_limit",value:text}, function(){});
	alert("保存成功!");
}
function createLimitList()
{
	var list=bgp.storage["limit_data"];
	$("#_my_limit").attr("value",list);
}


function createWhiteTieba()
{
	var list=bgp.storage["white_tieba"];
	$("#_my_wtb").attr("value",list);
}

function createBlackTieba()
{
	var list=bgp.storage["my_black_tieba"];
	$("#_my_btb").attr("value",list);
}


function createAdminCode()
{
	var list=bgp.storage["admin_code"];
	$("#_admin_code").attr("value",list);
	
	if(bgp.storage["admin_code"]=="000000")
	{
		$("#_admin_code_tips").html("[已成为管理员]");
	}
}

function saveMyWhiteTieba()
{
	var text=$("#_my_wtb").attr("value");
	chrome.extension.sendRequest({evt: "request_save_my_white_tieba",value:text}, function(){});
	alert("保存成功!");
}

function saveMyBlackTieba()
{
	var text=$("#_my_btb").attr("value");
	chrome.extension.sendRequest({evt: "request_save_my_black_tieba",value:text}, function(){});
	alert("保存成功!");
}



var frameWidth=192;
var frameHeight=120;











function getDateFormat()
{
	var date=new Date();
	var y=date.getYear();
	var m=(date.getMonth()+1);
	var d=date.getDate();
	return y+"-"+m+"-"+d;
}

function showTipsFrame(_title,_content)
{
	bgp=chrome.extension.getBackgroundPage();
	var closeBtn=document.getElementById("div_knowledge_frame_close_btn");
	var div=document.getElementById("div_knowledge_frame");
	var divContent=document.getElementById("div_knowledge_frame_content");
	var title=document.getElementById("div_knowledge_title");
	
	
	if(div.style.display=="none")
	{
		div.style.display="block";
	}
	else
	{
		div.style.display="none";
		return;
	}
	
	title.innerHTML=_title
	closeBtn.addEventListener("click",function(e){
		div=document.getElementById("div_knowledge_frame");
		div.style.display="none";
	});
	
	divContent.innerHTML=_content;
	
	
}


function setFlashSize(_w,_h)
{
	//alert(_w+"   "+_h);
	try
	{
		var zujian=thisMovie("zujian");
		zujian.style.width=_w+"px";
		zujian.style.height=_h+"px";
	}
	catch(e)
	{
		alert(e+"");	
	}
	
}

function thisMovie(movieName) {
	if (navigator.appName.indexOf("Microsoft") != -1) {
		return window[movieName]
	}else{
		return document[movieName]
	}
}





