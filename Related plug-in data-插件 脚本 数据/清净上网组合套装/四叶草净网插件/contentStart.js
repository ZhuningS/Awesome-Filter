

var href = "";
var host = "";
var title="";
var is_iframe = false;


var titleInterval;
try {
	
	
	href=window.location.href;
	host = href.split("/")[2];
	
	
} catch (e) {
	//因为一些IFRAME权限读取TOP的属性，因此这里要TRY一下，并给一个默认值
	href = window.location.href+"";
	host = href.split("/")[2]+"";
	
	
}


//侦听alt键
/*
Mousetrap.bind('alt',function(){
	 doResumeSafe();
	
},'keyup');
*/

/*
$("html").dblclick(function(){
       doResumeSafe();
});
*/

function doResumeSafe()
{
	
if(!hasSetSafeMode)
{
	hasSetSafeMode=true;
}
else
{

	if($("#fhzd_head_css_safe_mode").length>0)
	{
		doFindDelSafeMode();
	}
	else
	{
		//恢复
		
		var head = document.getElementsByTagName('body').item(0);
					
					if(head!=undefined)
					{
						//document.title="3";
						if($("#fhzd_head_css_safe_mode").length==0)
						{
							
							var style = document.createElement('style');
							style.type = 'text/css';
							style.id='fhzd_head_css_safe_mode';
							style.innerText="img {-webkit-mask-image: url(http://fhzd.org/360/source/mask.png)}";
							head.appendChild(style);
							
						}
						
						
					}
		
	}

	
}

}






function findTitle()
{
	
	var title=(document.title + "");
	
	if(title.indexOf("_百度贴吧")!=-1)
	{
		var tieba_title=title.split("_百度贴吧")[0];
		if(fbgp.blackTiebaArr.indexOf(tieba_title)!=-1)
		{
			
			window.location.href="http://fhzd.org/zimingPlugin/wang_ye_jing_hua_qi/page/redirect.html";//chrome.extension.getURL('source/page/webConfirm.html');
			clearInterval(titleInterval);
			
		}
		
	}
	else{
		clearInterval(titleInterval);
	}
	
	
}






try{
	if (window.frames.length != parent.frames.length) {
			is_iframe=true;
	}
	
}
catch(e)
{
	//alert(e); 
}




var fbgp;



chrome.extension.sendRequest({evt : "request_data"}, onFirstGetData);



var hao123Arr=[];
function onFirstGetData(_bgp)
{
	
	fbgp=_bgp;
	//alert(fbgp);
	
	if( fbgp && fbgp.status == "start")
	{
		
		
		if(!is_iframe && fbgp.storage["limit_mode"]=="on" && String(location.href).indexOf("fhzd.org")==-1 && (String(location.href).indexOf("http://")!=-1 || String(location.href).indexOf("https://")!=-1))
		{
			if(!checkIsInLimitList(host))
			{
				var str="";
				
				var data=fbgp.storage["limit_data"];
	
				//data.replace(/http:\/\//, "");
				//data.replace(/www/, "");
				data.replace(/\*\./, "");
				
				var arr2= data.split("\n");
				
				for (var i = 0; i < arr2.length; i++) {
					
					str+=arr2[i]+"_|_";
					
				}
				
				str=encodeURIComponent(str);
				
				window.stop();
				window.location.href="http://www.fhzd.org/360/redirect/?data="+str;
				
			}
			
			return;
		}

		
		
		
		
		
		
		if(fbgp.css)
		{
			if(host.indexOf("tieba.baidu.com")!=-1)
			{
				titleInterval=setInterval("findTitle();",200);
			}
			
			var arr=fbgp.css;
			
			for(var i=arr.length-1;i>=0;i--)
			{
				
				if(arr[i].indexOf("##")!=-1)
				{
					var lineArr=arr[i].split("##");
					var cssHost=lineArr[0];
					if(host.indexOf(cssHost)!=-1)
					{
						
						var str=lineArr[1];
						cssStr+=str+'{display:none;visibility:hidden;}\n';
						
						//对hao123特别关照
						if(host.indexOf("www.hao123.com")!=-1)
						{
							hao123Arr.push(str);
						}
						
					}
				}
				
			}
			
			
			
		}
		
		setFindHead();
	}
	
	
}


var cssStr="";
var findHeadInterval;
function setFindHead()
{
	
	//if(cssStr.length>0)
	//{
		findHeadInterval=setInterval("doFindHead();",100);
	//}
	
}

var cssFindStep=0;
var hasSetSafeMode=false;
//var a=0;
function doFindHead()
{
	//a++;
	//document.title=a+"";
	
	try{
		
		var head = document.getElementsByTagName('body').item(0);
		var cssTag=$("#fhzd_head_css");
		
		if(head!=undefined )
		{
			//alert(1);
			var isSE=(host.indexOf("www.soso.com")!=-1 || host.indexOf("www.sogou.com")!=-1 || host.indexOf("www.baidu.com")!=-1 || host.indexOf("www.haosou.com")!=-1 || host.indexOf("cn.bing.com")!=-1 || host.indexOf("www.youdao.com")!=-1);
			
			if(cssStr.length>0)
			{
				//对百度搜索结果要特殊处理
				if(host.indexOf("www.baidu.com")==-1)
				{
					//非百度的，把定时器设长点
					clearInterval(findHeadInterval);
					
					if(cssFindStep==0 && host.indexOf("www.hao123.com")!=-1)
					{
						clearInterval(findHeadInterval);
						cssFindStep=1;
						findHeadInterval=setInterval("doFindHead();",1000);
					}
				}
				
				//alert(checkIsInSuperWhiteList(host)+"   "+isSE)
				if(cssTag.length==0 && (!checkIsInSuperWhiteList(host) || isSE))
				{
					
					var style = document.createElement('style');
					style.type = 'text/css';
					style.id='fhzd_head_css';
					style.innerText=cssStr;
					head.appendChild(style);
				}
				
				if(host.indexOf("www.hao123.com")!=-1)
				{
					for(var i=0;i<hao123Arr.length;i++)
					{
						$(hao123Arr[i]).css({"display":"none"});
					}
				}
			}
			if(fbgp.storage["safe_mode"]+""=="on" && !hasSetSafeMode && !checkIsInSuperWhiteList(host) && fbgp.status == "start")
			{
				
				hasSetSafeMode=true;
				var style = document.createElement('style');
				style.type = 'text/css';
				style.id='fhzd_head_css_safe_mode';
				style.innerText="img {-webkit-mask-image: url(http://fhzd.org/360/source/mask.png)}";
				head.appendChild(style);
				
			}
			
			
			
		}
	}
	catch(e)
	{
		//alert(e);
	}
	
	
}




function toggleSafeMode()
{	
	//document.title="1";
			try
			{
				
				if(fbgp && fbgp.status == "start")
				{
					//document.title="2";
					
					var head = document.getElementsByTagName('body').item(0);
					
					if(head!=undefined)
					{
						//document.title="3";
						if($("#fhzd_head_css_safe_mode").length>0)
						{
							//document.title="4";
							 doFindDelSafeMode();
							
							//$("#fhzd_head_css_safe_mode").remove();
						}
						else
						{
							//document.title="5";
							//alert(3);
							//safe_mode_key=0;
							var style = document.createElement('style');
							style.type = 'text/css';
							style.id='fhzd_head_css_safe_mode';
							style.innerText="img {-webkit-mask-image: url(http://fhzd.org/360/source/mask.png)}";
							head.appendChild(style);
							
						}
						
						
					}
					
					
				}
			}
			catch(ee)
			{
				//alert(ee);
			}
}

function doFindDelSafeMode()
{
	$("#fhzd_head_css_safe_mode").each(function(){
			$(this).remove();
	});
}



function checkIsInSuperWhiteList(_host) {

	
	var arr2= fbgp.super_white_list.split("#");
	
	try
	{
		//判断是否在白名单贴吧
		var mt="_百度贴吧";
		var tieba_title="";
		var url=location.href+"";
		var title=document.title+"";
		if(url.indexOf("http://tieba.baidu.com/f")==0)
		{
			//贴吧 某贴首页
			if(title.indexOf(mt)!=-1)
			{
				tieba_title=title.split(mt)[0];
			}
		}
		else if(url.indexOf("http://tieba.baidu.com/p/")==0)
		{
			//贴吧 帖子内容页
			if(title.indexOf(mt)!=-1)
			{
				var arr=title.split("_");
				tieba_title=arr[arr.length-2];
			}
		}	
		if(tieba_title!="" && fbgp.storage["white_tieba"].indexOf(tieba_title)!=-1)
		{
			return true;
		}
	}
	catch(ee)
	{
		
	}
	
	for (var i = 0; i < arr2.length; i++) {
		
		if (_host.indexOf(arr2[i]) != -1 && arr2[i].length > 2) {
			
			return true;
		}
		
	}
	return false;
}
function checkIsInLimitList(_host) {


	if(fbgp.webConfirmIgnoreMap["http://"+host]=="yes" || fbgp.webConfirmIgnoreMap["https://"+host]=="yes")
	{
		return true;
	}

	var data=fbgp.storage["limit_data"];
	
	data=data.replace(/http:\/\//gi, "");
	data=data.replace(/https:\/\//gi, "");
	data=data.replace(/www\./gi, "");
	data=data.replace(/\*\./gi, "");
	
	//alert(_host+"\n\n"+data);
	
	var arr2= data.split("\n");
	
	for (var i = 0; i < arr2.length; i++) {
		
		var item=arr2[i].split(" ")[1];
		
		if (_host.indexOf(item) != -1 && item.length > 2) {
			////alert(1);
			return true;
		}
		
	}
	return false;
}











