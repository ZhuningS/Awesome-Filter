// JavaScript Document




//alert(11);
var bgp=chrome.extension.getBackgroundPage();
var pageUrl="";
var host="usldfjlsdjfsd32.com";
var httpHost="usldfjlsdjfsd32.com";
var title="";

try
{
	
	$(document).ready(function () {
		
		chrome.tabs.getSelected(onCurrentGet);
		//alert(bgp.is_jian);
		
		if(!bgp.is_jian)
		{
			document.body.innerHTML=bgp.s2t(document.body.innerHTML);
		}
		
	});
	
	
	
	
}
catch(e)
{
	//alert(e+" menu.js");
	window.close();
}


function onCurrentGet(_tab)
{
	pageUrl=_tab.url;
	title=_tab.title;
	
	
	if(pageUrl.indexOf("http://")!=-1)
	{
		host=pageUrl.split("http://")[1];
	}
	else if(pageUrl.indexOf("https://")!=-1)
	{
		host=pageUrl.split("https://")[1];
	}
	if(host.indexOf("/")!=-1)
	{
		host=host.split("/")[0];
	}
	
	httpHost="http://"+host;
	try
	{
		
		init();
		
	}
	catch(e)
	{
		//alert(e);
	}
	
	
	
}



//������ʾ��
function initLine3()
{
	
	bgp=chrome.extension.getBackgroundPage();
	$("#_txt3").html("����������ʾ��<span class='STYLE1'>[ǿ������ʾ����]</span>");
	if(bgp.storage["jie_yin_tips_mode"]=="on")
	{
		$("#_gou3").text("��");
	}
	else
	{
		$("#_gou3").text("");
	}
	
	$("#_a3").click(function(){
		
		if($("#_gou3").text()=="")
		{
			chrome.extension.sendRequest({evt: "request_set_jie_yin_tips_mode",value:"on"}, function(){});
		}
		else
		{
			chrome.extension.sendRequest({evt: "request_set_jie_yin_tips_mode",value:"off"}, function(){});
		}
		
		reLoadCurPage();
	});
	
}


//��Ը����
function initLine4()
{
	
	bgp=chrome.extension.getBackgroundPage();
	$("#_txt4").html("������Ը����<span class='STYLE1'>[��ҳ���½����ť]</span>");
	if(bgp.storage["isUseNianFo"]=="on")
	{
		$("#_gou4").text("��");
	}
	else
	{
		$("#_gou4").text("");
	}
	
}

//ȫ�񷴻�
function initLine4_1()
{
	
	bgp=chrome.extension.getBackgroundPage();
	$("#_txt4_1").html("����ȫ�񷴻�<span class='STYLE1'>[�ٱ�ͼƬ]</span>");
	if(bgp.storage["isPeopleImgAdmin"]=="on")
	{
		$("#_gou4_1").text("��");
	}
	else
	{
		$("#_gou4_1").text("");
	}
	
	$("#_a4_1").click(function(){
		
		if($("#_gou4_1").text()=="")
		{
			chrome.extension.sendRequest({evt: "request_set_people_img_admin",value:"on"}, function(){});
		}
		else
		{
			chrome.extension.sendRequest({evt: "request_set_people_img_admin",value:"off"}, function(){});
		}
		
		reLoadCurPage();
	});
	
}


//ȫ�񷴻�
function initLine4_2()
{
	
	bgp=chrome.extension.getBackgroundPage();
	$("#_txt4_2").html("���չٷ���Ѷ");
	if(bgp.storage["isReceiveMsg"]=="on")
	{
		$("#_gou4_2").text("��");
	}
	else
	{
		$("#_gou4_2").text("");
	}
	
}


//�滻��������
function initLine4_3()
{
	
	bgp=chrome.extension.getBackgroundPage();
	$("#_txt4_3").html("ʹ�ý��������滻�����˵ĳ�����");
	if(bgp.storage["isUseLinkReplace2"]=="on")
	{
		$("#_gou4_3").text("��");
	}
	else
	{
		$("#_gou4_3").text("");
	}
	
	
}


function checkIsInTieba()
{
	var mt="_�ٶ�����";
	var tieba_title="";
	var url=pageUrl;
	if(url.indexOf("http://tieba.baidu.com/f")==0)
	{
		//���� ĳ����ҳ
		if(title.indexOf(mt)!=-1)
		{
			tieba_title=title.split(mt)[0];
		}
	}
	else if(url.indexOf("http://tieba.baidu.com/p/")==0)
	{
		//���� ��������ҳ
		if(title.indexOf(mt)!=-1)
		{
			var arr=title.split("_");
			tieba_title=arr[arr.length-2];
		}
	}
	return tieba_title
}

function checkIsInSuperWhiteList(_host) {
	
	//ϵͳ������
	var arr=bgp.super_white_list.split("#");
	for(var i=0;i<arr.length;i++)
	{
		var item=arr[i];
		if(_host.indexOf(item)!=-1)
		{
			return "sys";
		}
		
	}
	
	//�û�������
	arr2=bgp.storage["my_white_list_3"].split("\n");
	for (var i = 0; i < arr2.length; i++) {
		
		var item=arr2[i];
		item=item.replace(/http:\/\//gi, "");
		item=item.replace(/https:\/\//gi, "");
		item=item.replace(/\*\./gi, "");
		if(_host.indexOf(item)!=-1 && item.length>2)
		{
			
			return "user";
		}
		
			
	}
	
	
	var tieba_title=checkIsInTieba();
	if(tieba_title!="" && bgp.storage["white_tieba"].indexOf(tieba_title)!=-1)
	{
		return "tieba";
	}
	
	
	return "";
	
}



function initLine0()
{
	//��ͣ����
	bgp=chrome.extension.getBackgroundPage();
	
	
	
	//document.write(bgp.super_white_list);
	//alert(checkIsInSuperWhiteList(host));
	
	
	
	if(checkIsInSuperWhiteList(host)=="user" || checkIsInSuperWhiteList(host)=="tieba")
	{
		//alert(1);
		$("#_gou0").attr("src","menu/pause2.png");
	}
	else if(checkIsInSuperWhiteList(host)=="sys")
	{
		//alert(2);
		$("#_gou0").attr("src","menu/sys_white.png");
		return;
		
	}
	else
	{
		//alert(3);
		$("#_gou0").attr("src","menu/pause1.png");
		
	}
	
	$("#_a0").click(function(){
			
			var tieba_title=checkIsInTieba();
			
			if(tieba_title!="")
			{
				//������
				if($("#_gou0").attr("src")=="menu/pause1.png")
				{
					chrome.extension.sendRequest({evt: "request_add_to_white_teiba",value:tieba_title}, function(){});
				}
				else
				{
					chrome.extension.sendRequest({evt: "request_remove_to_white_tieba",value:tieba_title}, function(){});
				}
			}
			else
			{
				//��ͨ��ҳ
				if($("#_gou0").attr("src")=="menu/pause1.png")
				{
					
					chrome.extension.sendRequest({evt: "request_add_to_white_list",value:host}, function(){});
				}
				else
				{
					
					chrome.extension.sendRequest({evt: "request_remove_to_white_list",value:host}, function(){});
				}
			}
		
		
		initLine0();
		window.close();
		
		
	});
	$("#_a0").mouseover(function(){
	//alert(33);
	  $("#_tips0").css("display","block");
	
	  $("#_a0").css("opacity","0.8");
	 
	});
	$("#_a0").mouseout(function(){
	  $("#_tips0").css("display","none");
	  $("#_a0").css("opacity","1");
	
	});
	
	
	
}


//ֹͣ�������
function initLine5()
{
	
	bgp=chrome.extension.getBackgroundPage();
	
	//$("#_gou5").text("");
	if(bgp.status=="start")
	{
		//$("#_txt5").html("ֹͣ���<span class='STYLE1'> [�������ȫֹͣ����]</span>");
		$("#_gou5").attr("src","menu/close1.png");
	}
	else
	{
		$("#_gou5").attr("src","menu/close2.png");
		//$("#_txt5").text("���������������");
		
	}
	
	$("#_a5").click(function(){
		
		if(bgp.status=="start")
		{
			chrome.extension.sendRequest({evt: "request_user_panel_action",type:"status",param:"stop"}, function(){});
		}
		else
		{
			chrome.extension.sendRequest({evt: "request_user_panel_action",type:"status",param:"start"}, function(){});
		}
		
		reLoadCurPage();
	});
	
	$("#_a5").mouseover(function(){
	  $("#_tips5").css("display","block");
	  //$("#other").css("visibility","hidden");
		$("#_a5").css("opacity","0.8");
	  
	});
	$("#_a5").mouseout(function(){
	  $("#_tips5").css("display","none");
			$("#_a5").css("opacity","1");
	});
	
}


//��ȫģʽ
function initLine6()
{
	
	bgp=chrome.extension.getBackgroundPage();
	
	if(bgp.storage["safe_mode"]=="on")
	{
		$("#_gou6").attr("src","menu/safe2.png");
		
	}
	else
	{
		$("#_gou6").attr("src","menu/safe1.png");
		
	}
	
	/*
	if(checkIsInSuperWhiteList(host)=="sys")
	{
		return;
	}
	*/
	if(checkIsInSuperWhiteList(host)!="")
	{
		$("#_gou6").attr("src","menu/dis_safe.png");
		return;
	}
	
	
	$("#_a6").click(function(){
		
		if(bgp.storage["safe_mode"]=="on")
		{
			chrome.extension.sendRequest({evt: "request_set_safe_mode",value:"off"}, function(){});
		}
		else
		{
			chrome.extension.sendRequest({evt: "request_set_safe_mode",value:"on"}, function(){});
		}
		
		reLoadCurPage();
	});
	$("#_a6").mouseover(function(){
	  $("#_tips6").css("display","block");
	  		$("#_a6").css("opacity","0.8");
	  
	});
	$("#_a6").mouseout(function(){
	  $("#_tips6").css("display","none");
	 		$("#_a6").css("opacity","1");
	});
}

//����ģʽ
function initLine7()
{
	
	bgp=chrome.extension.getBackgroundPage();
	
	if(bgp.storage["limit_mode"]=="on")
	{
		$("#_gou7").attr("src","menu/limit2.png");
		//$("#_gou6").text("��");
	}
	else
	{
		$("#_gou7").attr("src","menu/limit1.png");
		//$("#_gou6").text("");
	}
	
	
	
	
	
	$("#_a7").click(function(){
		
		if(bgp.storage["limit_mode"]=="on")
		{
			chrome.extension.sendRequest({evt: "request_set_limit_mode",value:"off"}, function(){});
		}
		else
		{
			chrome.extension.sendRequest({evt: "request_set_limit_mode",value:"on"}, function(){});
		}
		
		reLoadCurPage();
	});
	
	
	$("#_a7").mouseover(function(){
	  $("#_tips7").css("display","block");
			$("#_a7").css("opacity","0.8");
	   
	});
	$("#_a7").mouseout(function(){
	  $("#_tips7").css("display","none");
	 		$("#_a7").css("opacity","1");
	});
	
	
}

var oldPer=0;
var oldJp=0;
function checkValue()
{

	var arr=["0","1","2","3","4","5","6","7","8","9"];
	
	if(oldPer!=$("#per_num").attr("value"))
	{
		var newValue=$("#per_num").attr("value");
		for(var i=0;i<newValue.length;i++)
		{
			if(arr.indexOf(newValue.charAt(i))==-1)
			{
				return;
			}
		}
		
		
		oldPer=$("#per_num").attr("value");
		chrome.extension.sendRequest({evt: "request_set_ai_mode_per_num",value:oldPer}, function(){});
		
	}
	if(oldJp!=$("#jp_num").attr("value"))
	{
		var newValue=$("#jp_num").attr("value");
		for(var i=0;i<newValue.length;i++)
		{
			if(arr.indexOf(newValue.charAt(i))==-1)
			{
				return;
			}
		}
	
	
		oldJp=$("#jp_num").attr("value");
		chrome.extension.sendRequest({evt: "request_set_ai_mode_jp_num",value:oldJp}, function(){});
	}
}

//aiģʽ
function initLine8()
{
	
	bgp=chrome.extension.getBackgroundPage();
	
	if(bgp.storage["ai_mode"]=="on")
	{
		$("#_gou8").attr("src","menu/ai2.png");
		//$("#_gou6").text("��");
	}
	else
	{
		$("#_gou8").attr("src","menu/ai1.png");
		//$("#_gou6").text("");
	}
	
	$("#per_num").attr("value",bgp.storage["ai_mode_per_num"]);
	$("#jp_num").attr("value",bgp.storage["ai_mode_jp_num"]);
	
	oldPer=$("#per_num").attr("value");
	oldJp=$("#jp_num").attr("value");
	
	setInterval(checkValue,100)
	
	
	
	$("#_a8").click(function(){
		
		if(bgp.storage["ai_mode"]=="on")
		{
			chrome.extension.sendRequest({evt: "request_set_ai_mode",value:"off"}, function(){});
		}
		else
		{
			chrome.extension.sendRequest({evt: "request_set_ai_mode",value:"on"}, function(){});
		}
		
		reLoadCurPage();
	});
	
	
	$("#_a8").mouseover(function(){
	  $("#_tips8").css("display","block");
			$("#_a8").css("opacity","0.8");
	   
	});
	$("#_a8").mouseout(function(){
	  $("#_tips8").css("display","none");
	 		$("#_a8").css("opacity","1");
	});
	
	
}




function init()
{
	
	
	
	//��ͣ���˴���վ
	initLine0();
	//initLine1();
	//initLine2();
	initLine3();
	initLine4();
	initLine4_1();
	initLine4_2();
	initLine4_3();
	initLine5();
	
	initLine6();
	initLine7();
	initLine8();
	
	var cv=(chrome.app.getDetails().version+"");
	$("#title").text("���� V"+cv);
	
	/*
	$("#_abp").mouseover(function(){
	  
			$("#_abp").css("opacity","0.5");
	   
	});
	$("#_abp").mouseout(function(){
	 
	 		$("#_abp").css("opacity","1");
	});
	*/
	
	
	if(bgp.is_jian)
	{
		$("#btn_op").attr("src","btn_option.jpg");
		
	}
	else
	{
		$("#btn_op").attr("src","btn_option_t.jpg");
		$("#btn_update").attr("src","btn_update_t.png");
	}
	
	$("#btn_op").mouseover(function(){
		if(bgp.is_jian)
		{
			$(this).attr("src","btn_option2.jpg");
		}
		else
		{
			$(this).attr("src","btn_option2_t.jpg");
		}
	})
	$("#btn_op").mouseout(function(){
		
		if(bgp.is_jian)
		{
			$(this).attr("src","btn_option.jpg");
		}
		else
		{
			$(this).attr("src","btn_option_t.jpg");
		}
	})
	
	
	
	
	
	if(bgp.has_new_version==true)
	{
		
		$("#btn_update").css("visibility","visible");
		
	}
	
	
	
	var blackList=bgp.storage["myBlackList"];
	
	if(blackList.indexOf(httpHost)!=-1)
	{
		$("#_txt1").text("�Ѵ������Ƴ�������");
	}
	
	var whiteList=bgp.storage["my_white_list_3"];
	if(whiteList.indexOf(httpHost)!=-1)
	{
		$("#_txt2").text("�Ѵ������Ƴ�������");
	}
	
	
	//����Ƿ���ϵͳ��������������
	//�ǵĻ������ض����ѡ��
	//ϵͳ��ǩҳ��
	if((pageUrl.indexOf("http://")==-1 && pageUrl.indexOf("https://")==-1) || pageUrl.indexOf("source/page/webConfirm.html")!=-1)
	{
		
		$("#_txt0").text("��������ҳ��ͣ����!");
		$("#_a0").unbind("click");
		
		for(var i=1;i<6;i++)
		{
			$("#_tr"+i).hide();
		}
		
		$("#_tr4_1").hide();
		return;
	}
	
	
	
	
	
	//�ڰ�������
	var arr = bgp.super_white_list.split("#");
	for (var i = 0; i < arr.length; i++) {
		
		if (host.indexOf(arr[i]) != -1 && arr[i].length > 2) {
			//alert(11);
			//alert(2);
			$("#_txt0").text("����վ����ϵͳ��������������ͣ����!");
			$("#_a0").unbind("click");
			//alert(host+"   "+arr[i]);
			for(var i=1;i<5;i++)
			{
				$("#_tr"+i).hide();
			}
			$("#_tr4_1").hide();
			return;
		}
		
	}
	
	
	
	
	
}














function reLoadCurPage()
{
	// init();
	chrome.tabs.executeScript(null, {code:"window.location.href=window.location.href;"}, null);
	window.close();
}





