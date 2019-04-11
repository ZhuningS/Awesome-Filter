// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


//<script type="text/javascript" src="source/js/customLink.js"></script>



/*
//document.write("<script type=\"text/javascript\" src=\"source/js/customLink.js\"></script>");

// Called when a message is passed.  We assume that the content script
// wants to show the page action.
function onRequest(request, sender, sendResponse) {
	// Show the page action for the tab that the sender (content script)
	// was on.
	
	
	
	chrome.pageAction.show(sender.tab.id);

	// Return nothing to let the connection be cleaned up.
	sendResponse({});
};
*/


function on_url_request(details) {

	if (storage["mode"] == "normal" && status == "start" && details.url.indexOf("veg001.com") == -1 && details.url.indexOf("fhzd.org") == -1) {
			
		  if(details.requestHeaders[2]!=undefined && details.requestHeaders[2].name == 'Referer')
		  {
				
				var ref=details.requestHeaders[2].value;
				//是否在超级白名单或者临时暂停过滤
				if(ref.indexOf("http://")!=-1)
				{
					
					var host=ref.split("/")[2];
					
					//if(super_white_list.indexOf(host)!=-1 || (storage["my_white_list_3"]!=undefined && storage["my_white_list_3"].indexOf(host)!=-1) || webConfirmIgnoreMapStr.indexOf(host)!=-1 )
					if(checkInWhiteList(host))
					{
						
						return {
							cancel : false
						};
						
					}
					
					
				}
				
		  }
		
		
		
		if (filterImgRequest.checkUrl(details.url) == false || details.url.indexOf("www.a19933332324234234234jdfgdfgdbc.com")!=-1) {
			return {
				cancel : true
			};
		}
		
		
		
		
		

	}

	return true;
}

function checkInWhiteList(host)
{
	//if(super_white_list.indexOf(host)!=-1 || (storage["my_white_list_3"]!=undefined && storage["my_white_list_3"].indexOf(host)!=-1) || webConfirmIgnoreMapStr.indexOf(host)!=-1 )
		
	if(response_data!=undefined && checkInUrl(host,response_data.super_white_list_arr))
	{
		return true;
	}
	return false;
}



//判断通配符和子域名
function checkInUrl(_url,_arrList)
{
	
	
	var checkUrl=_url;
	
	/*
		if(checkUrl.indexOf("bj.ganji.com")!=-1)
		{
					
			alert(_arrList);
		}
	*/			
	
	
	if( (_url.slice(0,8).indexOf("http://")!=-1 || _url.slice(0,9).indexOf("https://")!=-1) &&  _arrList!=undefined)
	{
		
		
		var curHost="http://"+checkUrl.split("/")[2];
		
		if(checkUrl.indexOf("?")!=-1)
		{
			checkUrl=checkUrl.split("?")[0];
		}
		
		var webConfirmUrlList=_arrList;
		for(var i=0;i<webConfirmUrlList.length;i++)
		{
			// http://56.com
			// http://*.56.com
			var ruleUrl=webConfirmUrlList[i];
			
			//if(ruleUrl.length>8 && (ruleUrl.slice(0,8).indexOf("http://")!=-1 || ruleUrl.slice(0,9).indexOf("https://")!=-1))
			if(ruleUrl.length>2)
			{
				
				
				
				
				if(ruleUrl.indexOf("http://*.")!=-1 || ruleUrl.indexOf("https://*.")!=-1)
				{
					//通配符
					var ruleUrl1="";//ruleUrl.split("http://*")[1];
					var ruleUrl2="";
					
					//ruleUrl1=ruleUrl.split("https://*")[1];
					if(ruleUrl.indexOf("http://*.")!=-1)
					{
						ruleUrl1=ruleUrl.split("http://*")[1];
						ruleUrl2="http://"+ruleUrl.split("http://*.")[1];
					}
					if(ruleUrl.indexOf("https://*.")!=-1)
					{
						ruleUrl1=ruleUrl.split("https://*")[1];
						ruleUrl2="http://"+ruleUrl.split("https://*.")[1];
					}
					
					
					if( checkUrl.indexOf(ruleUrl1)!=-1 || checkUrl.slice(0,ruleUrl2.length)==ruleUrl2)
					{
						
						return true;
					}
				}
				
				//非通配符
				
				var checkHost=ruleUrl.replace(/http:\/\//gi,"");
				checkHost=checkHost.replace(/https:\/\//gi,"");
				
				var curHost2=curHost.replace(/http:\/\//gi,"");
				curHost2=curHost2.replace(/https:\/\//gi,"");
				
				
				if(curHost2==checkHost)
				{
					
					return true;
				}
				//子域名
				// baidu.com  tieba.baidu.com
				if(curHost2.indexOf("."+checkHost)!=-1)
				{
					return true;
				}
				
				
				
			}
			
		}
		//alert(14);
		return false;
	}
	
	return false;
	
}












function checkBlackWebUrl(_url)
{
	
	
	//alert(11);
	
	var checkUrl=_url;
	
	var confirmData=storage["myBlackList"];
	if(storage["user_sys_black_list"]=="true")
	{
		confirmData=storage["webConfirmData"]+"\n"+storage["myBlackList"];
	}
	
	
	
	if( (_url.slice(0,8).indexOf("http://")!=-1 || _url.slice(0,9).indexOf("https://")!=-1) &&  String(confirmData).indexOf("http://")!=-1  && storage["mode"] == "normal" && status == "start")
	{
		 
		
		var curHost="http://"+checkUrl.split("/")[2];
		
		if(checkUrl.indexOf("?")!=-1)
		{
			checkUrl=checkUrl.split("?")[0];
		}
		
		var webConfirmUrlList=confirmData.split("\n");
		for(var i=0;i<webConfirmUrlList.length;i++)
		{
			// http://56.com
			// http://*.56.com
			var ruleUrl=webConfirmUrlList[i];
			
			if(ruleUrl.length>8 && (ruleUrl.slice(0,8).indexOf("http://")!=-1 || ruleUrl.slice(0,9).indexOf("https://")!=-1))
			{
				if(ruleUrl.indexOf("http://*.")!=-1 || ruleUrl.indexOf("https://*.")!=-1)
				{
					//通配符
					var ruleUrl1="";//ruleUrl.split("http://*")[1];
					var ruleUrl2="";
					
					//ruleUrl1=ruleUrl.split("https://*")[1];
					if(ruleUrl.indexOf("http://*.")!=-1)
					{
						ruleUrl1=ruleUrl.split("http://*")[1];
						ruleUrl2="http://"+ruleUrl.split("http://*.")[1];
					}
					if(ruleUrl.indexOf("https://*.")!=-1)
					{
						ruleUrl1=ruleUrl.split("https://*")[1];
						ruleUrl2="http://"+ruleUrl.split("https://*.")[1];
					}
					
					
					if( checkUrl.indexOf(ruleUrl1)!=-1 || checkUrl.slice(0,ruleUrl2.length)==ruleUrl2)
					{
						
						return false;
					}
				}
				
				//非通配符
				
				var checkHost=ruleUrl.replace(/http:\/\//gi,"");
				checkHost=checkHost.replace(/https:\/\//gi,"");
				
				var curHost2=curHost.replace(/http:\/\//gi,"");
				curHost2=curHost2.replace(/https:\/\//gi,"");
				
				
				if(curHost2==checkHost)
				{
					
					return false;
				}
				//子域名
				// baidu.com  tieba.baidu.com
				if(curHost2.indexOf("."+checkHost)!=-1)
				{
					return false;
				}
				
				
				
			}
			
		}
		//alert(14);
		return true;
	}
	
}












chrome.webRequest.onBeforeRequest.addListener (

          function(details) {

                var ref = details.url;
				
				if(ref.indexOf("http://")!=-1)
				{
					
					var host=ref.split("/")[2];
					/*
					if(host.indexOf("ganji.com")!=-1)
					{
						
						alert(super_white_list);
					}
					*/
					
					//if(super_white_list.indexOf(host)!=-1 || (storage["my_white_list_3"]!=undefined && storage["my_white_list_3"].indexOf(host)!=-1) || webConfirmIgnoreMapStr.indexOf(host)!=-1 )
					if(checkInWhiteList(ref)==false && checkBlackWebUrl(ref)==false)
					{
						return {redirectUrl: "http://fhzd.org/zimingPlugin/wang_ye_jing_hua_qi/page/redirect.html"};
					}
					
				}
				
				
				
				
				//检查黑名单网址
				//if(checkBlackWebUrl(url)==false)
				//{
					
					//return {redirectUrl: "http://fhzd.org/zimingPlugin/wang_ye_jing_hua_qi/page/redirect.html"};
						
				//}
					
                return false;
           },
          {urls:["<all_urls>"]}, ["blocking"]);



chrome.webRequest.onBeforeSendHeaders.addListener(on_url_request, {
	urls : ["<all_urls>"]
}, ["blocking","requestHeaders"]);




// Listen for the content script to send a message to the background page.
chrome.extension.onRequest.addListener(onRequest);




chrome.browserAction.onClicked.addListener(function(_tab) {

var newUrl = chrome.extension.getURL('source/page/newTab.html');
window.open(newUrl, "_blank");


});




function showNotification()  
{  
	try {
		//alert("--");
		//刷新页面
		chrome.tabs.executeScript(null, {
			code : "toggleSafeMode();"
		});
	} catch (ee) {
	
	}
}  

function createRightMenu(url,title)
{
	
	if(url.indexOf("http://")==-1)
	{
		return;
	}
	var host=url.split("/")[2];
	if(!checkIsInSuperWhiteList(host))
	{
		chrome.contextMenus.create( {  
		  "type" :"normal",   
		  "title": "临时安全图片开/关",  
		  "contexts":["all"],  
		  "onclick":function(){showNotification();}  
		} ); 
	}
	
	
	var mh=host;
	
	tieba_title=checkIsTieba(url,title);
	if(tieba_title!="")
	{
	
		if(storage["white_tieba"].indexOf(tieba_title)==-1)
		{
			chrome.contextMenus.create( {  
			  "type" :"separator",   
			  "title": "",  
			  "contexts":["all"],  
			  "onclick":function(){}  
			} );
			chrome.contextMenus.create( {  
			  "type" :"normal",   
			  "title": "把\""+tieba_title+"\"加入白名单",  
			  "contexts":["all"],  
			  "onclick":function(){
				
				
				if(storage["white_tieba"].indexOf(tieba_title)==-1)
				{
					storage["white_tieba"]+="\n"+tieba_title;
					reFreshSelectPage();
				}
				
				
			  }  
			} );
		}
		
	}
	else
	{
		
		
		if(!checkIsInSuperWhiteList(mh))
		{
			
			chrome.contextMenus.create( {  
			  "type" :"separator",   
			  "title": "",  
			  "contexts":["all"],  
			  "onclick":function(){}  
			} );
			chrome.contextMenus.create( {  
			  "type" :"normal",   
			  "title": "此网站加入白名单[不过滤]",  
			  "contexts":["all"],  
			  "onclick":function(){
					//alert(response_data.super_white_list);
					
					if(!checkIsInSuperWhiteList(mh))
					{
						mh="http://"+mh;
						storage["my_white_list_3"]+="\n"+mh;
						createRequestData();
						reFreshSelectPage();
					}
					
					
			  }  
			} )
		
		
		}
		
	}
	
	
	
	
}
function removeRightMenu()
{
	try{chrome.contextMenus.removeAll(null);}catch(ee){}
}

function checkIsTieba(_url,_title)
{
	
	var tieba_title="";
	var mt="_百度贴吧";
	
	if(_url.indexOf("http://tieba.baidu.com/f")==0)
	{
		//贴吧 某吧首页
		if(_title.indexOf(mt)!=-1)
		{
			tieba_title=_title.split(mt)[0];
		}
	}
	else if(_url.indexOf("http://tieba.baidu.com/p/")==0)
	{
		//贴吧 帖子内容页
		if(_title.indexOf(mt)!=-1)
		{
			var arr=_title.split("_");
			tieba_title=arr[arr.length-2];
		}
	}
	
	
	
	
	return tieba_title;
	
	
	
}


function checkIsInSuperWhiteList(_host) {

//alert(response_data.super_white_list);

var arr2= response_data.super_white_list.split("#");
for (var i = 0; i < arr2.length; i++) {
		
		if (_host.indexOf(arr2[i]) != -1 && arr2[i].length > 2) {
			////alert(1);
			return true;
		}
		
	}
	return false;
}







var curSelectTitle="";
function checkCreateRightMenu()
{
	
	
	chrome.tabs.getSelected(null, function(tab) {
		if(tab.url.indexOf("http://")!=-1)
		{
			
			if(curSelectTitle!=tab.title && tab.title!=null && tab.title.length>1)
			{
				curSelectTitle=tab.title;
				removeRightMenu();
				createRightMenu(tab.url,tab.title);
			}
			var mh=tab.url.split("/")[2];
			//mh=mh.replace(/www\./gi,"");
			var httpHost="http://"+tab.url.split("/")[2];
			
			
			if(!has_new_version)
			{
				var tieba_title=checkIsTieba(tab.url,tab.title);
				
				if(checkIsInSuperWhiteList(mh) || webConfirmIgnoreMap[httpHost] == "yes" || (tieba_title!="" && storage["white_tieba"].indexOf(tieba_title)!=-1))
				{
					chrome.browserAction.setIcon({path:"32_ban.png"});
					
				}
				else
				{
					chrome.browserAction.setIcon({path:"32.png"});
				}
			}
			
			
			
		}
		else
		{
			if(!has_new_version)
			{
			chrome.browserAction.setIcon({path:"32_ban.png"});
			}
		}
		
		
	});
	
	
	
	
	
}





//侦听URL，判断是否提示用户确认高危网页
//chrome.tabs.onUpdated.addListener(__onTabUpdate);

//本次会话要忽略的风险网站
var webConfirmIgnoreMap = {};

var webConfirmIgnoreMapStr="";



//插件是否启动，start,stop
var status = "start";
//用户选择了的模式,正常模式，观察模式
//var mode="normal";

/*
var rightMenuId1 = -1;
var rightMenu1 = {
	title : "反黄之盾 控制面板",
	contexts : ["all"],
	onclick : onclick
};

var rightMenuInterval;

*/

var curTagHost = "";

var localUrl = chrome.extension.getURL("");

//涉黄关键词列表
var words_sex ="乳|艳|奸|吻|胸|裸|舔|淫|撸|欲仙欲死|欲生欲死|欲女|双峰|诱奸|幼穴|幼逼|有碼|有码片|婬|陰穴|陰毛|陰莖|陰茎|陰户|陰戶|陰核|陰道|陰唇|陰部|阴穴|阴丘|阴护|阴核|阴阜|阴纯|阴部|阴壁|涉黄|涉毒|射乳|射出来|舌头舔|舌头添|少爷坐台|少妇|熟女|少儿勿入|上门女|色诱|色淫|色性|色电影|騷穴|騷逼|骚姊姊|骚痒|骚妹|骚浪|骚姐姐|骚货|骚婊|骚比|骚屄|搔穴|三鱼比目|三肖|三陪|三奶|乳晕|乳首|乳球|肉芽|肉穴|肉臀|肉体交融|肉圈|肉丘|肉门|肉具|肉茎|肉击|肉壶|肉根|肉屄|蹂躏|任你淫|人权圣火|人妻小说|人妻|全套美女|全套服务|情欲|情色网|情色论坛|情感陪护|蛋蛋|强姦|處女膜|處女|处女穴|处女地|抽弄|抽捣|赤裸|成人|朝里有人好作官|查手机|插入穴|插肉|插女|插弄|插你的下面|插妹妹|插进穴|插进你下面|插进你的下面|插进来|插肛|插的好舒适|插的好舒服|插逼|插爆|肏这|肏穴|肏我|肏死|肏入|肏破|肏娘|肏妳|肏妹妹|肏她|肏干|肏屄|操穴|操小逼|操我|逼痒|逼穴|逼毛|逼好痒|屄友|屄裏|屄儿|被人干|爆乳|包厢公主|包房公主|平叫到床|嫖俄罗|女激情|美女图|欲火高涨|玉女|通奸|挺动|浓精|阳精|狂泻|阴精|阴道图|要射了|无码|穴痒|好痒|穴里|性学|性息网|性信息交友|性奴|泄题|邪恶的党|淫液|好舒服|小口径步枪|口活|小姐|港夜夜美图|丝袜美女|丝腿|色阅网|色戒|被插|蜜穴|骚逼|三仑|乳伦|肉缝|舔弄|穴口|对准|射吧|嫖客|人体艺术|女伟哥|女死囚|女神|女护士|嫩穴|美少妇|美眉图库|偷窥|骚穴|骚乱|骚妇|骚逼|全國二奶|情色|情妇|高潮|大鸡巴|你妈逼|避孕套|阴毛|龟头|下体|阴门|阴户|屁眼|口交|射精|干他|干她|干你|插他|插她|插你|插我|捅我|捅你|睾丸|阴囊|荡妇|肉洞|肉棒|肉棍|阴蒂|阴道|肛门|开苞|阳具|阴茎|鸡巴|做爱|作爱|造爱|打炮|同房|哥痛|哥疼|姐痛|姐疼|弟痛|弟疼|妹痛|妹疼|变态|爽死|私处|底裤|内裤|胸罩|色狼|吹萧|自慰|行房|三级|麻衣|激情|虐待|菱恝|夜勤病栋|風花|櫻井|一本道|無修正|更衣|偷拍|母子|乱伦|限制级|近親|調教|薄格|臭作|少妇|内射|群射|肛交|潮吹|丝袜|捆绑|自摸|美腿|肉欲|情色|走光|援交|亚热|制服|上床|叫床|偷情|成人|少儿不宜|波霸|饭岛爱|武藤兰|露毛|露点|翁虹|舒淇|叶子楣|群交|兽交|狂干|幼交|精液|破处|口技|强暴|黄色|被虐|小穴|偷窥|喷精|自拍|猛插|无毛|学生妹|武藤蘭|女教師|慰安妇|伊東|三浦愛佳|金澤文子|大澤惠|夕樹舞子|朝河蘭|及川奈央|星崎未來|飯島愛|小澤園|川島和津實|長瀨愛|坐交|插插|小泽圆|阴唇|诱惑|暴干|武腾兰|三級|绝版|喷尿|美女|蒲团|婊子|色友|乱交|强歼|小泽玛莉亚|女優|透视|紧身|妙龄|性侵|性感|激情|春光|大泄|泳装|冠希|干爹|美女|好色|淫乱|深v|深V|低胸|爆乳|长腿|夜店|新欢|迷奸|色情|情色|你妈|性虐|猥琐|猥亵|强奸|奸淫|裸体|全裸|情欲|激情|安全套|女模|嫩模|强暴|诱惑|淫照|受害女|女优|淫|李宗瑞|胸部|豪乳|女星|重口味|艳照|性奴|奢靡|糜烂|夜总会|泡吧|泡妞|床伴|床照|制服|玩3p|玩3P|轮奸|鸡奸|换妻|乱伦|淫人|淫荡|淫少|迷奸|迷乱|派对|臂部|美臂|隆胸|丰胸|乳沟|湿吻|壮阳|处女|处男|私处|露半球|口技|秀腿|大腿|秀胸|show胸|美腿|臀部|美臀|团部|爆奶|露奶|辣妹|辣妈|挑逗|媚眼|美艳|香艳|车震|大尺度|性教育|模特|艳遇|多情|调情|情调|情迷|迷情|男女尴尬|脸红|不雅照|性病|援交|援助交际|名媛|风流|爱之初体验|爱の初体验|爱滋出体验|短裙|老湿|湿人|乳房|性文化|性生活|性趣|奸尸|偷吃|偷情|幽会|高潮|性压抑|性欲|纵欲|摸胸|胸罩|胸围|文胸|萌妹|真空|真胸|假胸|尤物|小可爱|艳女|艳色|艳遇|黄照|内衣|一露到西|美胸|露点|3点|三点|两点|火辣|惊艳|绝艳|妩媚|媚眼|媚态|魅惑|媚惑|丰腴|丰满|风韵|丰韵|口x|口X|艳星|房事|床戏|情欲|性事|床功|猎艳|情爱|身材|惹火|助性|重振雄风|重振男人雄风|美艳|动人|大胸|胸大|波大|小胸|胸小|大乳|乳大|性冲动|性兴奋|尖叫|裸|洞房|护士|18禁|美少女|调戏|发情|发春|叫春|思春|脱衣|暴露|脱衫|脱裤|乳沟|露乳|做爱|爱爱|黄图|黄片|美人|冷艳|私处|干女|球乳|性饥渴|避孕套|套套|带套|送套|袒胸|雏妓|妓女|卖身|堕胎|老泥妹|强暴|潜规则|巨乳|蕾丝|出轨|红杏出场|婚外恋|床上|互摸|多妻|多夫|走婚|妻妾|夜店|夜总会|低胸|抹胸|体盛|屁屁|屁股|屁眼|豪华臀|婚外情|事业线|哺乳|包养|十八禁|龌龊|二奶|妖艳|身材|身段|娇妻|仙妻|妻妾|天上人间|后宫|牛鞭|陪睡|睡过|三陪|陪聊|玩哭|弄痛|弄哭|日本女|歌舞伎町|牛郎|H小说|h小说|陪浴|尽性|尽\"性\"|子宫|自宫|糜烂|爆菊|夜会|摈榔西施|私密处|娱乐场|夜场|交配|性无能|清纯|纯情|一夜情|献身|宫刑|性用具|性生活|超模|欲望|想要|风情|避孕|野性|下身|下半身|小蛮腰|人妖|写真|艺术相|人体艺术|劈腿|禁果|白富美|情爱|宝贝|豹纹|性事|那些事|男女间|男女之间|风流|到处留情|韵事|性行为|交合|性交|不雅|露骨|露肉|肉肉|骨感|色相|小三|三妻四妾|女郎|推油|擦背|色狼|日本校服|不老实|罩杯|性福|私照|私密|漂亮女|性工作者|暧昧|局长日记|皮条|买春|卖春|催情|女阴|女性器官|女人器官|靓女|偷情|偷欢|欢愉|蒲团|夜蒲|蹂躏|爱抚|抚摸|前戏|换妻|换女友|鸳鸯戏水|混浴|天体|性早熟|月事|房中术|奶头|木瓜奶|奶沟|堕落|堕奶|性人|霸王硬上弓|露背|车模|精尽|一夜|红灯区|木子美|召妓|叫鸡|应召|开房|床品|手淫|床事|初吻|初夜|胸袭|性能力|无能|阳痿|伟哥|露b|露B|露逼|齐b|齐B|齐逼|电车之狼|尾行|电车の狼|日本女孩|日本校服|日本少女|写真|快感|性派对|乱性|狂野|捐精|性经|私定终生|未婚妈妈|未婚先孕|呼之欲出|呼之欲漏|出浴|情事|早熟女|早熟少女|汤唯|过夜|贞操|贞洁|贞节|亲密照|性技|桑拿|站街|扫黄|奶展|豪放|割礼|阉割|代孕|斗艳|斗美|斗露|啤酒妹|吧女|生殖器|性用具|性具|母性|恋母|旧爱|灌醉|宿醉|夜归|性暗示|扒光|施暴|萝莉|罗莉|罗利|交欢|合欢|欢愉|红楼|酒池肉林|按摩|洗脚妹|洗脚女|很high|好hihg|太high|很HIGH|好HIGH|太HIGH|风骚|邻家女孩|风月|奶妈|花花公子|地下恋|美妻|老牛吃嫩草|情圣|喂奶|热裤|花心|偷心|暗夜欢|波涛汹涌|裙底|打飞机|裙下|裙子|行房|打灰机|床站|性斗士|春宫图|艳色|春色|同性|搞基|基情|基友|钢管舞|温柔|柔情|妓院|大波|波大|销魂|消魂|咪咪|放荡|不羁|搭讪|性与爱|勾引|勾搭|春药|希尔顿|性药|性用品|性骚扰|人体彩绘|校花|班花|村花|女仆|伪娘|发泄|性爱|招嫖|轻抚|轻浮|露底|调教|校鸡|校妓|共浴|比坚尼|比基尼|偷腥|嫩妹|杨幂|囧图|口爱|抚慰|妇产|妇科|房照|霸气侧漏|美眉|甜美|射狼|兔女|女生宿舍|苍老师|苍老湿|老湿|接客|生殖器|打野战|女帝|名模|大湿|囧闻|囧事|弄爽|美美|半透|翘屁|浪荡|泄欲|闺房|妖媚|胸展|肉展|女俘|d杯|e杯|f杯|g杯|D杯|E杯|F杯|G杯|女寝室|女生寝室|车展|车节|充气娃|充气公仔|招妓|性暴|a片|A片|亲热|性服务|黑涩会|舞娘|cos|上围|同居|开腿舞|嫖妓|嫖娼|娼妓|宿娼|非礼|百媚|亲嘴|性关系|发生关系|肉照|丰腴|下流|生殖崇拜|生殖器崇拜|生殖器的崇拜|春潮|性丑闻|照片门|春光|艺伎|艺妓|春宫|陪酒|勃起|外阴|有染|玉蒲团|女佣装|调教|内涵图|水芙蓉|胴体|色男|色女|性器官|性博|咸猪手|情史|艳史|情人|漂亮|露半球|露肉|强吻|卖肉|正妹|春梦|性主题|陪唱|白鹿原|法兰西乐园|缠绵|爱疯了|湿身|少儿不宜|儿童不宜|色鬼|丁字裤|桃色|选美|扒衣党|名媛|腿模|唇模|胸模";

var words_eng="Av|aV|av|AV|sm|Sm|SM|bra|Bra|BRA|Cosplay|cosplay|sy|SY|Sy|cup|CUP";


//插件会忽略的白名单


//当用户版本全部升级到 v1.56后，可以把这个属性删除，而只使用my_white_list
var white_list = "veg001.com";

var default_white_list = "#www.veg001.com#tieba.baidu.com#tmall.com#google.com#youdao.com#sougou.com#soso.com#www.jiexieyin.org#bbs.jiexieyin.org#fo.ifeng.com#www.bushinet.com#bbs.bushinet.com#www.dadunet.com#www.folou.com#www.zhfs.org#www.taobao.com#list.tmall.com#detail.tmall.com#s.taobao.com#www.alipay.com#www.360buy.com#shop.qq.com#buy.qq.com#www.dangdang.com#www.amazon.cn#www.gome.com.cn#www.zgfj.cn#www.fjnet.com#www.foxue.org#www.bskk.com#www.jiese.org#www.zhibeifw.com#www.dianping.com#www.lashou.com#www.nuomi.com#www.55tuan.com#www.tuan800.com#www.qihoo.net#baike.baidu.com#www.soso.com#image.baidu.com#zhidao.baidu.com#www.meituan.com#fo.ifeng.com#www.xuefo.net#www.alibaba.com.cn";

var super_white_list = "taobao.com#tmall.com#google.com#gyapp.org";


//var my_white_list="";

//白名单的数组形式
var my_white_list_arr = [];

var default_ban_pic_list = "";



//针对所有HOST，如果包含以下关键词，那么就全网页图片自动模糊高亮
//默认放入一个不存在的域名，使能操作的域名至少有1个
var blur_host = "uysd0123.com";

var user_id = (100000 + Math.floor(Math.random() * 888888)) + "-" + (100000 + Math.floor(Math.random() * 888888)) + "-" + (100000 + Math.floor(Math.random() * 888888));



var storage = window.localStorage;

//添加，删除涉黄图片接口
var filter_img_php = "http://www.veg001.com/zimingPlugin/wang_ye_jing_hua_qi/php/save.php";
//var filter_img_data_url = "http://www.veg001.com/zimingPlugin/wang_ye_jing_hua_qi/php/filter_img.txt";
//从服务器获得的 要过滤的图片的列表
var filter_img_data = "http://www.abc7342.com/a/b/1.jpg";

//是否等待提交完图片，再重新加载过滤图片数据后刷新页面
//var is_wait_for_submit_img_over = false;

var re_load_start_time = 0;

//记录所有页面，是否文章页
var article_page_list = {};

//保存所有提示语录，如佛学，戒淫，道理
var tips_list = {};
tips_list.jie_yin = [["精、气、神，养生家谓之三宝"]];
tips_list.fo_xue = [["佛教中的天堂和地狱", "http://fo.ifeng.com/changshi/detail_2007_04/01/235988_0.shtml"]];
tips_list.ren_sheng = [["用禅的智慧安放心灵", "http://fo.ifeng.com/dhyana/detail_2012_04/23/14083481_0.shtml"]];

//保证每次打开浏览器都重新加载配置文件
var hasGetConfigData = false;


var customJson;

//本地调试用的JS语句
var filter_test_js_code="";


//会话内暂停过滤网站的列表
var pauseFilterList="";

//被替换的连接用到的内容
var linkReplaceArr=[];

var cssRuleArr=[];

var blackTiebaArr=[];

//var black_host_list=[];

var is_jian=true;

var response_data={};


var has_new_version=false;

var has_stat=false;

function s2t(_str)
{
	return String(_str).s2t();
}






/*
function showUpdateDialog() {
  new Notification("净网-更新公告", {
    icon: '48.png',
    body: 'Time to make the toast.\nsdfsdf\nsdfsdf\nsdfsdf\nsdfsdf\nsdfsdf\nsdfsdf\nsdfsdf'
  });

}
*/


var currentVersion="";

init();

function init() {

	

	re_load_start_time = (new Date).getTime();

	
	initLocalData("show_jie_yin_link", "off");
	//强制不显示戒淫连接模式
	//storage["show_jie_yin_link"] = "off";
	setLocal("show_jie_yin_link", "off");

	//index ,all,none
	initLocalData("img_blur_mode", "all");
	
	initLocalData("mode", "normal");
	
	//戒淫提示语
	//initLocalData("jie_yin_tips_mode", "off");
	initLocalData("fo_xue_tips_mode", "off");
	//initLocalData("su_shi_tips_mode","off");
	//initLocalData("chuan_tong_tips_mode","off");
	initLocalData("ren_sheng_tips_mode", "off");

	//storage["fo_xue_tips_mode"]="on";

	
	initLocalData("my_white_list_3", "http://jd.com\nhttp://www.baidu.com\nhttp://www.so.com\nhttp://www.sogou.com\nhttp://www.bing.com\nhttp://www.soso.com\nhttp://www.google.com\nhttp://gyapp.org");
	initLocalData("ban_pic_list", default_ban_pic_list);
	initLocalData("user_id", user_id);
	initLocalData("blur_host", blur_host);
	
	initLocalData("filter_img_data_local", "");
	
	//自动文章页模式
	initLocalData("auto_ai_mode", "on");
	
	initLocalData("custom_json_data", "");
	initLocalData("loadCustomJsonSt", 0);
	initLocalData("loadCssRuleSt", 0);
	//initLocalData("isUsePureGuidePage","on");
	
	
	//我的黑名单
	initLocalData("myBlackList", "http://6.cn\n");
	//我的关键词
	initLocalData("my_key_word", "范冰冰\n");
	
	//管理员密码
	initLocalData("admin_code", "-----");
	
	//当前
	initLocalData("msg_data", "");
	initLocalData("to_show_msg_data","");
	
	
	//绿色导航页模式 ，佛教(fo)/大众，默认大众 (common)
	initLocalData("newTabPageMode", "common");

	//最近经常打开的URL列表
	initLocalData("openUrlTopListData", "{\"list\":[]}");

	//最近打开的10个URL的截图
	//initLocalData("openUrlTopListImg","{\"list\":[]}");

	//是否使用纯净导航页
	initLocalData("isUsePureGuidePage", "on");

	//是否开启高危网站预警
	initLocalData("isUseWebConfirm", "on");

	//今天是否点击了知识宝箱
	initLocalData("newTabKnowledgeDate", "");
	//是否开启全民反黄
	initLocalData("isPeopleImgAdmin","off");
	//是否接收快讯
	initLocalData("isReceiveMsg","on");
	//是否用健康内容替换
	initLocalData("isUseLinkReplace2","off");
	
	
	
	initLocalData("linkReplaceContent","");
	
	initLocalData("getLinkContentSt","0");
	
	//是否启用念佛器
	initLocalData("isUseNianFo", "off");
	initLocalData("newTabNianDate", getDateFormat());
	initLocalData("newTabNianFoCurNum", "0");
	initLocalData("newTabNianFoTotal", "0");
	initLocalData("newTabNianFoTxt", "南无阿弥陀佛");
	
	initLocalData("isBanTieBaTail", "on");
	initLocalData("isBanTieBaIndexSuoLve", "on");
	initLocalData("isBanContentRight", "on");
	initLocalData("isBanSinaBlogLeft", "on");
	
	
	//配置文件的请求时间间隔,默认15分钟
	initLocalData("getConfigInterval", "15");
	//配置文件的请求开始时间
	initLocalData("getConfigSt", "0");
	
	
	initLocalData("custom_json_path", "");
	initLocalData("css_path", "");
	initLocalData("webconfirm_path", "");
	initLocalData("filter_image_path", "");
	initLocalData("tips_path", "");
	initLocalData("newtab_data_path", "");
	initLocalData("black_tieba_path", "");
	initLocalData("white_list_path", "");
	
	initLocalData("white_data", "");
	
	initLocalData("safe_mode","");
	initLocalData("limit_mode","");
	initLocalData("ai_mode","off");
	
	initLocalData("limit_data","圣贤教育全球同学网 http://www.sxjyqqw.org\n弟子规 http://www.dizigui.cn\n");
	
	initLocalData("white_tieba","素食吧\n戒色吧\n陈大惠吧");
	initLocalData("my_black_tieba","");
	
	//是否默认使用系统自带的黑名单
	initLocalData("user_sys_black_list","true");
	
	initLocalData("ai_mode_per_num","30");
	initLocalData("ai_mode_jp_num","5");
	
	initLocalData("show_ai_per","off");
	
	
	/*
	if(storage["safe_mode"]=="on")
	{
		createRightMenu();
	}
	*/
	
	currentVersion=chrome.app.getDetails().version+"";
	
	/*
	var cv=(chrome.app.getDetails().version+"");
	if(storage["version"]!=cv)
	{
		//window.open("http://gyapp.org", "_blank");
		showUpdateDialog();
		storage["version"]=cv;
	}
	*/
	
	if(String(storage["has_show_jiaocheng"])!="true")
	{
		
		window.open("http://gyapp.org/jing_wang/jiao_cheng/jiaocheng.html", "_blank");
		storage["has_show_jiaocheng"]="true";
	}
	
	
	if (storage["newTabNianDate"] != getDateFormat()) {
		storage["newTabNianDate"] = getDateFormat();
		storage["newTabNianFoCurNum"] = "0";
	}
	
	//是否第一次打开
	initLocalData("firstUseCount", "0");
	
	re_create_my_white_list_arr();
	
	reCreateLinkReplaceArr();
	
	
	//createRightMenu();
	
	
	/*
	//统计用
	try{
		$.get("http://www.fhzd.org/zimingPlugin/wang_ye_jing_hua_qi/source/page/iframe_stat.html", function(a,b){});
	}
	catch(ee)
	{
		
	}
	*/
	
	$(document).ready(function () {
		
		
		if (navigator.language) { 
			user_language=(navigator.language); 
		}else if (navigator.browserLanguage) { 
			user_language=(navigator.browserLanguage); 
		} 
		//zh-CN
		if(user_language!="zh-CN")
		{
			is_jian=false;
		}
		
		//alert("is_jian="+is_jian);
		
		checkAppUpdate();
		
				
	});
	
	
	window.setInterval(render,1000);
	getConfigData(true);
	
	
	
}


var renderGetConfigSt=(new Date()).getTime();
function render()
{
	var d=new Date();
	
	if(d.getTime()-renderGetConfigSt>=30*60*1000)
	{
		//每30分钟判断更新一次配置文件和数据
		renderGetConfigSt=d.getTime();
		getConfigData(true);
	}
	
	checkCreateRightMenu();
	
	
	
}


var configDataUrl = "http://fhzd.org/soft_data/upgrade_data.txt";
function getConfigData(_onCheckTime) {
	createRequestData();
	//每20分钟更新一次配置文件
	var d = new Date();
	
	//只根据时间判断
	if(_onCheckTime==true)
	{
		
			storage["getConfigSt"]=d.getTime()+"";
			hasGetConfigData = true;
			configDataUrl = "http://fhzd.org/soft_data/upgrade_data.txt?" + Math.floor(Math.random() * 99999);
			$.get(configDataUrl, onConfigDataComplete);
			
			//顺便取官方提示语数据
			getMsgData();
			
			
	}
	else{
		
		if(hasGetConfigData==false)
		{
			storage["getConfigSt"]=d.getTime();
			hasGetConfigData = true;
			$.get(configDataUrl, onConfigDataComplete);
			//顺便取官方提示语数据
			getMsgData();
			
		}
		else{
			onConfigDataComplete("", "success_local");
		}
	}
	
	//alert(0);
	
	
}




function onConfigDataComplete(data, status) {
	
	
	if (status == "success" || status == "success_local") {
		
		var word_path = storage["custom_json_path"];
		var webconfirm_path = storage["webconfirm_path"];
		var filter_image_path = storage["filter_image_path"];
		var css_path=storage["css_path"];
		var black_tieba_path=storage["black_tieba_path"];
		var white_path=storage["white_list_path"];
		
		if (String(data).length > 30 && status!= "success_local") {
			try {
				//storage["getConfigInterval"] = String(data.split("get_config_interval=")[1]).split("\n")[0];
				var arr=data.split("\n");
				word_path = String(arr[5]).split("	")[3];
				webconfirm_path = String(arr[1]).split("	")[3];
				filter_image_path =String(arr[7]).split("	")[3];
				black_tieba_path=String(arr[6]).split("	")[3];
				css_path=String(arr[14]).split("	")[3];
				white_path=String(arr[4]).split("	")[3];
				
				
			} catch (e) {
				
				
			}
		}
		
		//alert(11);
		
		
		loadCustomJson(word_path);
		webConfirm.init(webconfirm_path);
		//filterImgRequest.init(filter_image_path);
		loadCssRul(css_path);
		loadBlackTieBa(black_tieba_path);
		loadWhiteList(white_path);
		
		
		//alert(22);
		
	}
	
}



/*
function getLinkContent()
{
	
	$.get("http://veg001.com/zimingPlugin/wang_ye_jing_hua_qi/source/data/link/link.txt?"+Math.floor(Math.random()*9999999), onLinkContentComplete);
}

function onLinkContentComplete(data, status) {
	
	if (status == "success") {
		
		if (String(data).length > 10 ) {
			try {
				
				storage["linkReplaceContent"]=data;
				reCreateLinkReplaceArr();
				
				
			} catch (e) {
				//alert(e);
				
			}
		}

		
	}

}
*/

function reCreateLinkReplaceArr()
{
	
	var data=storage["linkReplaceContent"];
	var arr=data.split("\r");
	
	//linkReplaceArr
	
	for(var i=0;i<arr.length;i++)
	{
		var rtxt=arr[i];
		if(rtxt.indexOf("http://")!=-1)
		{
			var rindex=rtxt.indexOf("|http://");
			var rtitle=rtxt.slice(0,rindex);
			var rlink=rtxt.slice(rindex+1,rtxt.length);
			
			linkReplaceArr.push({title:rtitle,link:rlink});
			
			
		}
	}
	
	
	
	
}


var msgDataUrl="http://fhzd.org/zimingPlugin/wang_ye_jing_hua_qi/source/data/msg/msg.txt?"+Math.floor(Math.random()*999999)
function getMsgData()
{
	if(storage["isReceiveMsg"]=="on")
	{
		$.get(msgDataUrl, onMsgDataComplete);
	}
}

function onMsgDataComplete(data, status) {

	if (status == "success") {
		
		if(storage["msg_data"]!=data && String(data).length>5)
		{
			storage["msg_data"]=data;
			storage["to_show_msg_data"]=data;
		}
	}
	
	
}



function re_create_my_white_list_arr() {
	
}


function re_create_filter_img_data() {
	//有过从云端获取到过滤图片列表
	if (storage["web_filter_img_data"].indexOf("http://") != -1) {
		//setLocal("load_filter_img_data",storage["web_filter_img_data"]);
		//把云端和本地的图片列表结合
		filter_img_data = storage["filter_img_data_local"] + "\n" + storage["web_filter_img_data"];
		
		
	} else {
		//否则只去本地数据
		filter_img_data = storage["filter_img_data_local"] + "\n http://abcd32.com/sdf.jpg";
	}
	
}


function reFreshSelectPage() {

	//重建右键菜单
	//curSelectId=-999;
	try {
		//刷新页面
		chrome.tabs.executeScript(null, {
			code : "top.window.location.reload();"
		});
	} catch (ee) {}
	curSelectTitle="";
}


function loadCustomJson(_newPath) {
	
	
	if (_newPath != storage["custom_json_path"]) {
		storage["custom_json_path"] = _newPath;
		var customJsonUrl = "http://www.fhzd.org/soft_data/word.txt?"+Math.floor(Math.random()*999999);//storage["custom_json_path"];
		$.get(customJsonUrl, on_custom_json_load);
		
	} else {
		//从本地读取
		var data = null;
		try {
			if (storage["custom_json_data"] != null && storage["custom_json_data"].length > 15) {
				data = storage["custom_json_data"];
			}
		} catch (e) {
			data = null;
		}
		if (data != null) {
			on_custom_json_load(data, "success_local");
		}

	}

}

function on_custom_json_load(data, status) {
	
	if (status == "success" || status == "success_local") {
		//alert(22);
		var d = new Date();
		
		//alert(data);
		
		if (data != null) {

			if (status == "success") {
				storage["loadCustomJsonSt"] = d.getTime() + "";
				if(!is_jian)
				{
					data=data.s2t();
					words_sex=words_sex.s2t();
					
				}
			}
			
			try {
				
				var arr=data.split("\r\n");
				for(var i=0;i<arr.length;i++)
				{
					if(arr[i].indexOf("\n")==-1 )
					{
						words_sex += "|" + arr[i];
					}
				}
				
				//alert(words_sex);
				
				storage["custom_json_data"] = data+ "";
				
			
			} catch (e) {
				
			}
		}
		createRequestData();
	}
	
	

}



function loadCssRul(_newPath)
{
	if (_newPath != storage["css_path"]) {
		storage["css_path"] = _newPath;
		var cssRuleUrl = "http://fhzd.org/soft_data/css_rule.txt?"+Math.floor(Math.random()*999999);//storage["css_path"];
		$.get(cssRuleUrl, on_rule_load);
		
	} else {
		//从本地读取
		var data = null;
		try {
			if (storage["css_rule_data"] != null && storage["css_rule_data"].length > 15) {
				data = storage["css_rule_data"];
			}
		} catch (e) {
			data = null;
		}
		if (data != null) {
			on_rule_load(data, "success_local");
		}

	}

	
	
	
}

function on_rule_load(data, status) {
	
	if (status == "success" || status == "success_local") {
		var d = new Date();
		
		if (data != null) {

			if (status == "success") {
				storage["loadCssRuleSt"] = d.getTime() + "";
			}
			
			try {
				
				var arr=data.split("\r\n");
				for(var i=0;i<arr.length;i++)
				{
					if(arr[i].indexOf("\n")==-1 )
					{
						cssRuleArr.push(arr[i]);
					}
				}
				
				//alert(data.indexOf("充气娃娃"));
				
				storage["css_rule_data"] = data+ "";
				
				//alert(data);
				

			} catch (e) {
				
			}
		}

	}

}



function loadWhiteList(_newPath)
{
	

	if (_newPath != storage["white_list_path"]) {
		storage["white_list_path"] = _newPath;
		var whiteUrl = "http://fhzd.org/soft_data/white_domain.txt?"+Math.floor(Math.random()*999999);//storage["css_path"];
		$.get(whiteUrl, on_white_load);
		
	} else {
		//从本地读取
		var data = null;
		try {
			if (storage["white_data"] != null && storage["white_data"].length > 15) {
				data = storage["white_data"];
			}
		} catch (e) {
			data = null;
		}
		if (data != null) {
			on_white_load(data, "success_local");
		}

	}

	
	
	
}

function on_white_load(data, status) {
	
	if (status == "success" || status == "success_local") {
		var d = new Date();
		
		if (data != null) {

			if (status == "success") {
				storage["loadWhiteSt"] = d.getTime() + "";
				
			}
			
			try {
				
				var arr=data.split("\r\n");
				for(var i=0;i<arr.length;i++)
				{
					if(arr[i].indexOf("\n")==-1 && arr[i].length>2 )
					{
						super_white_list+="#"+arr[i];
					}
				}
				
				
				storage["white_data"] = data+ "";
				

			} catch (e) {
				
			}
		}
		createRequestData();
	}

	
	
}





function loadBlackTieBa(_newPath)
{
	if (_newPath != storage["black_tieba_path"]) {
		storage["black_tieba_path"] = _newPath;
		var cssRuleUrl = "http://www.fhzd.org/soft_data/black_tieba.txt?";//storage["css_path"];
		$.get(cssRuleUrl, on_black_tieba_load);
		
	} else {
		//从本地读取
		var data = null;
		try {
			if (storage["black_tieba_data"] != null && storage["black_tieba_data"].length > 15) {
				data = storage["black_tieba_data"];
			}
		} catch (e) {
			data = null;
		}
		if (data != null) {
			on_black_tieba_load(data, "success_local");
		}

	}

	
	
	
}

function on_black_tieba_load(data, status) {
	
	if (status == "success" || status == "success_local") {
		var d = new Date();
		
		if (data != null) {

			if (status == "success") {
				storage["loadBlackTeibaSt"] = d.getTime() + "";
			}
			
			try {
				//alert(data);
				var arr=data.split("\r\n");
				for(var i=0;i<arr.length;i++)
				{
					if(arr[i].indexOf("\n")==-1 )
					{
						blackTiebaArr.push(arr[i]);
					}
				}
				
				
				
				storage["black_tieba_data"] = data+ "";
				

			} catch (e) {
				
			}
		}
	createRequestData();
	}

}


function createRequestData()
{
	try{
			
			response_data={};
			//response_data.customJson=customJson;
			
			//response_data.localUrl = localUrl;
			response_data.version=currentVersion;
			response_data.words = words_sex;
			
			
			//alert(response_data.words);
			
			
			
			
			//把用户自己设定的关键词添加进去
			var tmpA=storage["my_key_word"].split("\n");
			for(var i=0;i<tmpA.length;i++)
			{
				var value=tmpA[i];
				if(value!="" && value!=" ")
				{
					response_data.words+="|"+value;
					
					
					
				}
				
			}
			
			
			
			
			
			response_data.words_eng=words_eng;
			
			
			//response_data.black_tieba=storage["black_tieba_data"]+"\n"+storage["my_black_tieba"];
			
			response_data.super_white_list = super_white_list;
			response_data.super_white_list_arr=[];
			if(super_white_list.length>2)
			{
				response_data.super_white_list_arr=super_white_list.split("#");
				
			}
			
			
			
			//把用户自定义的白名单也加入超级白名单
			var tmpA=storage["my_white_list_3"].split("\n");
			for(var i=0;i<tmpA.length;i++)
			{
				var host=tmpA[i];
				//alert(host);
				if(host.length>2 && host.indexOf(".")!=-1 && host.indexOf("http://")!=-1 && host.indexOf("#")==-1 && host.indexOf("?")==-1)
				{
					
					if(host.indexOf("http://")!=-1)
					{
						host=host.split("http://")[1];
					}
					if(host.indexOf("*.")!=-1)
					{
						host=host.split("*.")[1];
					}
					if(host.indexOf("/")!=-1)
					{
						host=host.split("/")[0];
					}
					//alert(host);
					response_data.super_white_list+="#"+host;
					response_data.super_white_list_arr.push(host);
				}
				
			}
			
			//本地，非管理员自己的图片过滤数据
			response_data.filter_img_data = filter_img_data;
			
			//新标签页的数据
			response_data.webConfirmIgnoreMap = webConfirmIgnoreMap;
			response_data.pauseFilterList=pauseFilterList;
			
			response_data.msgData=storage["to_show_msg_data"];
			response_data.linkReplaceArr=linkReplaceArr;
			response_data.css=cssRuleArr;
			
			//把用户贴吧黑名单加进去
			var arr=storage["my_black_tieba"].split("\n");
			
			for(var i=0;i<arr.length;i++)
			{
				if(arr[i].indexOf("吧")!=-1 )
				{
					blackTiebaArr.push(arr[i]);
				}
			}
			response_data.blackTiebaArr=blackTiebaArr;
			
			
		
		}
		catch(e2)
		{
			alert("err2:"+e2);
		}
		
		
		//alert(">>"+response_data.super_white_list);
}

var tab_obj_list = {};


function reCreateIgnoreMap()
{
	webConfirmIgnoreMapStr="";
		for(var i in webConfirmIgnoreMap)
		{
			webConfirmIgnoreMapStr+=i+"\n";
		}
}


function onRequest(request, sender, sendResponse) {
	//每次请求背景页数据，都判断是否要重新加载配置文件
	
	var d=new Date();
	
	/*
	if((d.getTime()-Number(storage["getConfigSt"]))/60/1000 >= Number(storage["getConfigInterval"]))
	{
		//alert("请求配置文件:"+(d.getTime()-Number(storage["getConfigSt"]))/60/1000+"   "+Number(storage["getConfigInterval"])+"  "+((d.getTime()-Number(storage["getConfigSt"]))/60/1000 >= Number(storage["getConfigInterval"])));
		getConfigData(true);
	}
	*/
	/*
	//每8小时，请求一次替换内容
	if((d.getTime()-Number(storage["getLinkContentSt"]))/60/1000 >= 60*8)
	{
		storage["getLinkContentSt"]=d.getTime()+"";
		getLinkContent();
	}
	*/
	
	if (request.evt == "request_data") {
		//createRequestData();
		
		//alert("--"+response_data.super_white_list);
		
		response_data.has_stat=has_stat;
		response_data.status = status;
		response_data.storage = storage;
		
		
		
		
		sendResponse(response_data);
		

	}
	else if(request.evt=="request_has_show_update_dialog")
	{
		storage["version"]=currentVersion;
	}
	else if(request.evt=="request_save_use_sys_black")
	{
		storage["user_sys_black_list"]=request.value;
	}
	else if (request.evt == "request_has_show_msg_data") {
		
		storage["to_show_msg_data"]="";

	}
	else if(request.evt=="request_save_show_ai_per")
	{
		storage["show_ai_per"]=request.value;
	}
	else if (request.evt == "request_pop_up_page_pure_page_action") {
		storage["isUsePureGuidePage"] = request.isUsePureGuidePage;
		storage["newTabPageMode"] = request.newTabPageMode;

	}
	else if(request.evt=="request_save_filter_test_js_code")
	{
		filter_test_js_code=request.value;
	}
	else if (request.evt == "request_set_knowledge_date") {
		storage["newTabKnowledgeDate"] = request.value;
	} 
	else if (request.evt == "request_complete_stat") {
		has_stat=true;
	} 
	
	else if (request.evt == "request_record_top_url_img") {

		recordToTopUrlImg(request.url);
	} 
	else if(request.evt=="request_set_ai_mode_per_num")
	{
		storage["ai_mode_per_num"]=request.value;
	}
	else if(request.evt=="request_set_ai_mode_jp_num")
	{
		storage["ai_mode_jp_num"]=request.value;
	}
	else if (request.evt == "request_add_black_domain") {
		
		if(String(storage["myBlackList"]).indexOf(request.value)==-1)
		{
			storage["myBlackList"]+="\n"+request.value;
			createRequestData();
		}
		
	} 
	
	
	else if(request.evt=="request_save_my_black_list")
	{
		//首先从我的白名单中移除
		var list=storage["my_white_list_3"].split("\n");
		str="";
		for(var i=0;i<list.length;i++)
		{
			var h=list[i];
			if(h!=request.host  && h.length>2)
			{
				str+=h+"\n";
			}
			
		}
		storage["my_white_list_3"]=str;
		
		storage["myBlackList"]=request.value;
		
		createRequestData();
		
	}
	else if(request.evt=="request_save_my_white_list")
	{
		
		//首先从我的黑名单中移除
		var list=storage["myBlackList"].split("\n");
		str="";
		for(var i=0;i<list.length;i++)
		{
			var h=list[i];
			if(h!=request.host && h.length>2)
			{
				str+=h+"\n";
			}
			
		}
		storage["myBlackList"]=str;
		
		storage["my_white_list_3"]=request.value;
		
		createRequestData();
	
	}
	else if(request.evt=="request_save_my_key_word")
	{
		storage["my_key_word"]=request.value;
		createRequestData();
	}
	else if(request.evt=="request_save_admin_code")
	{
		storage["admin_code"]=request.value;
	}
	else if (request.evt == "request_set_safe_mode") {
		
		storage["safe_mode"] = request.value;
		
	}
	else if (request.evt == "request_set_limit_mode") {
		
		storage["limit_mode"] = request.value;
		//reFreshSelectPage();
	}
	else if (request.evt == "request_save_my_limit") {
		
		storage["limit_data"] = request.value;
		//reFreshSelectPage();
	}
	else if (request.evt == "request_save_my_white_tieba") {
		
		storage["white_tieba"] = request.value;
		
	}
	else if (request.evt == "request_save_my_black_tieba") {
		
		storage["my_black_tieba"] = request.value;
		createRequestData();
	}
	else if (request.evt == "request_add_to_white_list") {
	
		storage["my_white_list_3"]+="\nhttp://"+request.value;
		
		createRequestData();
		reFreshSelectPage();
	}
	else if (request.evt == "request_remove_to_white_list") {
		
		
		var text=storage["my_white_list_3"];
		var arr2=text.split("\n");
		var newText="";
		for(var i=0;i<arr2.length;i++)
		{
			var item=arr2[i]+"";
			item=item.replace(/http:\/\//gi, "");
			item=item.replace(/\*\./gi, "");
			if(request.value.indexOf(item)==-1)
			{
				newText+=arr2[i]+"\n";
			}
			
		}
		
		storage["my_white_list_3"]=newText;
		createRequestData();
		reFreshSelectPage();
		
		
	}
	else if(request.evt == "request_add_to_white_teiba")
	{
		storage["white_tieba"]+="\n"+request.value;
		createRequestData();
		reFreshSelectPage();
	}
	else if(request.evt == "request_remove_to_white_tieba")
	{
		
		var arr=storage["white_tieba"].split(request.value);
		storage["white_tieba"]=arr[0]+arr[1];
		createRequestData();
		reFreshSelectPage();
		
	}
	else if (request.evt == "request_set_no_use_pure_page") {
		storage["isUsePureGuidePage"] = "off";
	}
	else if (request.evt == "request_set_people_img_admin") {
		storage["isPeopleImgAdmin"] = request.value;
	}
	else if(request.evt == "request_set_link_replace")
	{
		storage["isUseLinkReplace2"] = request.value;
		
	}	
	else if (request.evt == "request_set_new_tab_nianfo_txt") {
		storage["newTabNianFoTxt"] = request.value;
	} else if (request.evt == "request_set_new_tab_nianfo_total") {
		storage["newTabNianFoTotal"] = (Number(storage["newTabNianFoTotal"]) + 1) + "";
		storage["newTabNianFoCurNum"] = (Number(storage["newTabNianFoCurNum"]) + 1) + "";

	} 
	else if (request.evt == "request_set_ai_mode") {
			storage["ai_mode"] = request.value;
			//reFreshSelectPage();
	}
	else if (request.evt == "request_goto_ignore_url") {
		
		webConfirmIgnoreMap[request.host] = "yes";
		reCreateIgnoreMap();
		/*
		//重新生成字符串形式方便判断
		webConfirmIgnoreMapStr="";
		for(var i in webConfirmIgnoreMap)
		{
			webConfirmIgnoreMapStr+=i+"\n";
		}
		*/
		
	} else if (request.evt == "request_un_goto_ignore_url") {
		webConfirmIgnoreMap[request.host]=null;
		delete webConfirmIgnoreMap[request.host];
		reCreateIgnoreMap();
		/*
		//重新生成字符串形式方便判断
		webConfirmIgnoreMapStr="";
		for(var i in webConfirmIgnoreMap)
		{
			webConfirmIgnoreMapStr+=i+"\n";
		}
		*/
	}
	else if (request.evt == "request_set_use_web_confirm") {
		storage["isUseWebConfirm"] = request.value;
	} 
	
	else if (request.evt == "request_tab_data") {

		sendResponse(tab_data);
		
	} else if (request.evt == "request_has_comment_text_area") {

		tab_data.has_comment_text_area = true;

	} else if (request.evt == "request_i_am_article_page") {
		article_page_list[sender.tab.url] = true;

	} else if (request.evt == "request_user_panel_action") {
		
		//alert(333);
		if (request.type == "status") {
			status = request.param;
			reFreshSelectPage();
		} else if (request.type == "white") {
			var host = request.param;
			var my_white_list = storage["my_white_list"];
			if (request.action == "add") {
				if (my_white_list.indexOf(host) == -1) {
					my_white_list += "#" + host;
				}
			} else if (request.action == "del") {
				if (my_white_list.indexOf(host) != -1) {
					var array = my_white_list.split("#" + host);
					my_white_list = array[0] + "" + array[1];
				}
			}

			storage["my_white_list"] = my_white_list;
			re_create_my_white_list_arr();
			reFreshSelectPage();
		} else if (request.type == "normal_mode") {
			storage["mode"] = "normal";
			reFreshSelectPage();
		} else if (request.type == "check_mode") {
			storage["mode"] = "check";
			reFreshSelectPage();
		}  else if (request.type == "blur") {

			if (storage["blur_host"].indexOf(request.param) == -1) {
				storage["blur_host"] += "|" + request.param;
			}
			reFreshSelectPage();
		} else if (request.type == "un_blur") {
			if (storage["blur_host"].indexOf(request.param) != -1) {
				var array = storage["blur_host"].split("|" + request.param);
				storage["blur_host"] = array[0] + "" + array[1];
			}
			reFreshSelectPage();
		}  else if (request.type == "foxue_mode") {
			storage["fo_xue_tips_mode"] = request.param;
			reFreshSelectPage();
		} 
		else if (request.type == "sushi_mode") {
			storage["su_shi_tips_mode"] = request.param;
			reFreshSelectPage();
		} else if (request.type == "chuantong_mode") {
			storage["chuan_tong_tips_mode"] = request.param;
			reFreshSelectPage();
		} else if (request.type == "rensheng_mode") {
			storage["ren_sheng_tips_mode"] = request.param;
			reFreshSelectPage();
		} else if (request.type == "submit_img") {

			submit_filter_img(request.param, "add");

		} else if (request.type == "resume_img") {
			submit_filter_img(request.param, "del");
		}

		

	}

	
	
	//每次接到页面请求，都重新判断，是否要更新所有网络数据
	//checkReLoadImgFilterata();
	//load_filter_img_data();
}

//############################  提交/恢复图片到服务器
var submit_img_xhr;

var cur_filter_img_action = "";
var cur_filter_img_url = "";

function submit_filter_img(_url, _action) {
	

	var php = filter_img_php + "?id=" + storage["user_id"] + "&action=" + _action + "&url=" + _url;

	
	cur_filter_img_action = _action;
	cur_filter_img_url = _url;

	

	//###########################################

	//只保存在本地
	
	if (cur_filter_img_action == "add" && storage["filter_img_data_local"].indexOf("\n" + cur_filter_img_url) == -1) {
		storage["filter_img_data_local"] += "\n" + cur_filter_img_url;
		
		
		//全部提交到百度CACHE服务器
		//首先去掉问号后的随机参数
		
		if(cur_filter_img_url.indexOf("http://")!=-1)
		{
			
			submit_img_to_cloud(cur_filter_img_url);
			
		}
		

	} else if (cur_filter_img_action == "del" && storage["filter_img_data_local"].indexOf(cur_filter_img_url) != -1) {
		var arr = storage["filter_img_data_local"].split("\n" + cur_filter_img_url);
		storage["filter_img_data_local"] = arr[0] + arr[1];
	}

	re_create_filter_img_data();
	

}

function on_submit_filter_img_complete() {

	var text = submit_img_xhr.responseText + "";

	if (text.indexOf("id not exist") != -1 && cur_filter_img_action == "del" && storage["web_filter_img_data"].indexOf(cur_filter_img_url) != -1) {
		alert("很抱歉，该图片被服务器认定为涉黄图片，禁止非管理员对其进行恢复。");

	} else {

		if (cur_filter_img_action == "add" && storage["filter_img_data_local"].indexOf("\n" + cur_filter_img_url) == -1) {
			storage["filter_img_data_local"] += "\n" + cur_filter_img_url;
		} else if (cur_filter_img_action == "del" && storage["filter_img_data_local"].indexOf(cur_filter_img_url) != -1) {
			var arr = storage["filter_img_data_local"].split("\n" + cur_filter_img_url);
			storage["filter_img_data_local"] = arr[0] + arr[1];
		}
		
		re_create_filter_img_data();
		
	}

	//load_filter_img_data();

}

//添加，删除涉黄图片接口
//var filter_img_php = "http://www.veg001.com/zimingPlugin/wang_ye_jing_hua_qi/php/save.php";
function submit_img_to_cloud(img_url) {
	
	var submitImg=img_url.split("?")[0];
	//submitImg=submitImg.toLowerCase();
	var isImgAdmin=storage["admin_code"]=="000000"?"on":"off";
	
	//alert(submitImg+"    "+isImgAdmin);
	
	$.post("http://fhzd001.duapp.com/imgList.php", { img_url: submitImg,is_img_admin:isImgAdmin} ,function(data,status){
		//alert(data);
	});
	
	
	
}

function initLocalData(_name, _default) {
	storage[_name] = (!storage[_name]) ? _default : storage[_name];
}

function getLocalNumber(_param, _default) {
	var value = storage[_param];
	if (value == null || isNaN(value)) {

		if (_default != null) {
			return _default;
		}
		return 0;
	}

	return Number(value);
}
function getLocalString(_param, _default) {
	var value = storage[_param];
	if (value == null) {
		if (_default != null) {
			return _default;
		}
		return "";
	}
	return value;
}

function setLocal(_param, _value) {
	storage[_param] = _value + "";

}

function getDateFormat() {
	var date = new Date();
	var y = date.getYear();
	var m = (date.getMonth() + 1);
	var d = date.getDate();
	return y + "-" + m + "-" + d;
}



