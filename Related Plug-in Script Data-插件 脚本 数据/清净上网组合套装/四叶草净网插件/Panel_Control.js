  



function Panel_Control(_bgp,_host,_isInWhiteList,_isInSuperWhiteList)
{
	
	var bgp=_bgp;
	var host=_host;
	var isInWhiteList=_isInWhiteList;
	var isInSuperWhiteList=_isInSuperWhiteList;
	
	var user_panel;
	
	this.init=function()
	{
		
		
		
	};
	
	this.createPanel=function()
	{
		createUserPanel();
	};
	this.initPanel=function(_srcUrl)
	{
		
		
		initUserPanel(_srcUrl);
		
		
	};
	
	
	var createUserPanel=function()
	{
		
		if(!document.getElementById("user_panel_fhzd_plugin"))
		{
			var panel = document.createElement("div"); 
			panel.innerHTML = "<div id=\"user_panel_fhzd_plugin\"></div>"; 
			document.body.appendChild(panel,null);
			
			var html="<style>.mtable{color:#333333;border-collapse:collapse;background:#ffc;border:solid 0px #000000;height:22px;align:left;font-size:12 px;}.mtable a:link { color:#333333 }.mtable a:active { color:#333333 }.mtable a:visited { color:#333333 }.mtable a:hover { color:#333333 }.borderImg{border:0px solid #000; }/*A:link { color: #333333; TEXT-DECORATION: none}A:visited { COLOR: #333333; TEXT-DECORATION: none}A:hover { COLOR: #333333; text-decoration: underline;}A:active { COLOR: #333333;   text-decoration: underline;}*/</style><table width='310' id='config_panel_top_table_fhzd_plugin' ><tr><td align='center' valign='middle' bgcolor='#E4CC7A' ><table  width='300' height='163' border='0' align='center' cellpadding='0' cellspacing='0' class='mtable' id='guanliyuan_main_fhzd_plugin'>  <tr>    <td width='387' height='50' colspan='2' align='left' bgcolor='#FFF5D3'><div align='left'><strong>&nbsp;反黄之盾 控制面板</strong><br>	<br>	&nbsp;  <a href='javascript:' id='user_id_fhzd_plugin'></a>    </div></td>  </tr>  <tr>    <td height='30' colspan='2' align='left' bgcolor='#FCE38F'>        		<p align='left'>&nbsp;<a id='user_panel_status_fhzd' href='javascript:' title=''    ></a></td>  </tr>     <tr>    <td height='30' colspan='2' align='left' bgcolor='#FFF5D3'>	<p align='left'>            &nbsp;把此域名加入白名单,不再过滤          <input name='user_panel_check_mode_fhzd' type='checkbox' id='user_panel_white_fhzd' />	 <a href='javascript:' title='加入白名单后，插件将会忽略此域名，不再过滤，并且下面的选项修改后也无效了。另外请注意，对于域名的理解www.baidu.com 跟 tieba.baidu.com是不一样的，因此，你把某个网站的首页加入白名单了，但对网站的子频道不一定有效的。例如把网易的首页加入白名单：www.163.com,但它的其他频道，如女人频道 lady.163.com 并没加入白名单的。'>[解释]</a>	 <br>	 &nbsp;[<a href='javascript:' id='user_panel_white_domain_fhzd' ></a>]	 <br>	 <font color='#999999'>	 &nbsp;注：加入白名单后，下面的选项和操作将会失效。	 <br>	&nbsp;科普:www.baidu.com  和 tieba.baidu.com 是不一样的	 </font>     </p>     			</td>  </tr>    <tr>    <td height='30' colspan='2' align='left' bordercolor='#FCE38F' bgcolor='#FCE38F'>	<p align='left'>	&nbsp;正常模式      <input name='checkbox' type='checkbox' id='user_panel_normal_mode_fhzd'   checked > &nbsp;&nbsp;    观察模式    <input name='checkbox2' type='checkbox' id='user_panel_check_mode_fhzd' >	<a href='javascript:' title='正常模式 是默认的，观察模式 会显示出那些连接被过滤的，并且列举出涉黄的关键词'>[解释]</a></p>			</td>  </tr>       <tr>   <td height='30' colspan='2' align='left' valign='middle' bgcolor='#FFF5D3'>     <p align='left'>            &nbsp;模糊此域名下全部图片     [<a href='javascript:' id='user_panel_domain_fhzd' ></a>]     <input name='user_panel_check_mode_fhzd' type='checkbox' id='user_panel_blur_mode_fhzd' />	 </p>	 <p align='right'>     <a href='javascript:' title='有些本来就容易涉黄的网站，建议大家还是不要去了，例如很多电影网站，游戏，COSPLAY网站；但现实中我们还是要偶尔去某些网站找资料的，对于这类网站，建议模糊掉里面的所有图片，模糊掉的话，基本上看不到涉黄的图片，但又可以让你感觉到那些图片是正常的，从而点击进入，不影响浏览。'>[解释]</a></p>        	 	 	 </td>  </tr>    <tr>   <td height='30' colspan='2' align='left' valign='middle' bgcolor='#FCE38F'>           <p align='left'>             &nbsp;开启智能文章页模式            <input name='user_panel_ai_mode_fhzd' type='checkbox' id='user_panel_ai_mode_fhzd' checked='checked' />       <a href='javascript:' title='我们经常发现，好多大型门户，从首页点击一条新闻，进入文章页了，但通常这些文章页的右侧，以及底部都会放很多涉黄的广告或者内容，吸引用户点击。这个 文章页模式 就是专门为了解决这个问题的，会自动过滤掉文章页右侧，底部的所有广告图片和FLASH，而不影响正文的阅读，但因为各个网站的情况不一样，文章页模式也不是100%有效的，但对于各大门户是基本没问题的，只是偶尔会识别不了文章页，或者很偶尔会把某些正常页面误判为文章页，这些情况很少，建议大家开启使用。'>[解释]</a></p>     	 	     </td>  </tr>        <tr>    <td height='30' colspan='2' align='left' valign='middle' bgcolor='#FFF5D3'>		<p align='left'>      &nbsp; 显示一些戒淫提示语&nbsp;	  <input name='checkbox22' type='checkbox' id='user_panel_jieyin_mode_fhzd' >	  <br>     &nbsp; 显示一些佛学知识&nbsp;&nbsp;	       <input name='checkbox22' type='checkbox' id='user_panel_foxue_mode_fhzd' >      <br>            <!--      显示一些素食健康知识	  <input name='checkbox22' type='checkbox' id='user_panel_sushi_mode_fhzd' >      <br>      显示一些传统文化知识	  <input name='checkbox22' type='checkbox' id='user_panel_chuantong_mode_fhzd' >      <br>      -->            &nbsp; 显示一些人生道理&nbsp;&nbsp;	  <input name='checkbox22' type='checkbox' id='user_panel_rensheng_mode_fhzd' >	</p>	    <p align='right'>	<a href='javascript:' title='可能你是一个戒邪淫中的人，或者是一个学佛的人不希望被黄色内容污染，插件提供了一些你可能感兴趣的内容，帮助增加你戒邪淫的信心，以及让你获学习更多人生道理，佛学知识；并且这些内容可以单独显示，或者混合显示的。'>[解释]</a>		</p>        </td>  </tr>        <tr>    <td height='30' align='left'  valign='middle' bgcolor='#FCE38F'>      <table width='100%' border='0' cellspacing='0' cellpadding='0'>        <tr>          <td width='148' align='left'><div align='left'>&nbsp;<a href='javascript:' id='user_panel_manage_mode_fhzd' >手动禁止图片</a></div></td>          <td width='145' align='right'><a href='http://www.veg001.com/?post=188' target='_blank'>插件官网</a>&nbsp;<a href='javascript:' id='user_panel_intro_btn_fhzd'>功能介绍</a></td>        </tr>      </table>    </td>     </tr></table><div id='guanliyuan_mode_fhzd_plugin' ><table width='300' border='0' align='center' cellpadding='0' cellspacing='0' class='mtable'>  <tr>    <td width='342' align='left' bgcolor='#FFF5D3' id='submit_img_td'>	 &nbsp;      该图片禁止后，在你的机器上将不会再出现，除非手动再次恢复，并且只对你自己的机器有效。<br>      在涉黄图片上点击右键，启动操作面板，会自动获得图片的URL，当然也可以手动输入图片URL。<br />	          &nbsp; 图片url      <input name='textfield' type='text' size='15' id='user_panel_img_text'>       <a href='javascript:' id='user_panel_submit_img_fhzd' > 禁止       </a>         &nbsp;<a href='javascript:' id='user_panel_resume_img_fhzd' > 恢复       </a>               <br>	    &nbsp;       <img src=''  class='borderImg' width='50' height='50' id='user_panel_preview_img'  />                    请根据预览图，确定是否所选图片	   <p align='right'>	<a href='javascript:' title='手动模式,可以极大的弥补插件自动过滤的不足,除了服务器上被认定为涉黄的图片，其他的一些图片，可以根据个人情况自行禁止掉，例如你在某些常去的论坛，网站，有些图片插件过滤不了的，就可以使用手动模式。另外，你也可以申请成为管理员，申请成功后，在日常看网页的过程中，你手动禁止掉的图片将会自动提交到服务器，这样所有使用插件的用户也看不到该图片，帮助大家获得清静。当然前提是，这个功能只在各大门户的首页使用(如:网易、新浪、搜狐、QQ、凤凰网等等的首页)，毕竟网络图片浩如烟海，我们不可能完全过滤掉，但对于大众日常看的网站或频道首页，我们还是可以一起随缘参与反黄的。当然最最前提是，这些反黄的操作是随缘的不是让专门去找，并且确保你不会因为这些操作而影响了自己的清静。'>[解释]</a>		</p>	  	  	  </td>    </tr>  	 	<!--	<tr>    <td align='left' id='submit_flash_td'><strong><br />      FLASH</strong><br>说明：把涉黄FLASH提交到服务器，让所有用户都看不到该FLASH；请输入一个涉黄的FLASH地址，因为FLASH的特殊性，只能手动输入<br><input name='textfield22' type='text' size='20' id='user_panel_flash_text'> <a href='javascript:' id='user_panel_submit_flash_fhzd' > 提交	</a>  &nbsp; <a href='javascript:' id='user_panel_resume_flash_fhzd' > 恢复	</a>  <br /></td>   </tr>   -->   <tr>    <td height='30' bgcolor='#FCE38F'>	  <div align='left'><a href=\"http://www.dizang7.cn\" target=\"_blank\">“地藏七”官方网站</a>  </div></td>   </tr>   </table></div></td></tr></table>";
			
			
			
			if(isInSuperWhiteList==true)
			{
				html="<style type='text/css'>.mtable {color:#333333;border-collapse:collapse;background:#ffc;border:solid 0px #000000;height:22px;align:center;font-size:12 px;text-align:center;}</style><table  width='300' height='163' border='0' align='center' cellpadding='0' cellspacing='0' class='mtable' id='guanliyuan_main_fhzd_plugin'>  <tr>    <td width='387' height='100' colspan='2' align='center' bgcolor='#FFF5D3'><p align='center'>此网站已被系统列入超级白名单 <br/>插件将停止所有操作<br />      为的是保证数据完整性。</p></td>  </tr></table>";
			}
			
			
			
			document.getElementById("user_panel_fhzd_plugin").innerHTML=html;
			panel.className="user_panel_fhzd_plugin";
			
			user_panel=panel;
			
			document.getElementById("user_panel_fhzd_plugin").onmousedown=onUserPanelMouseDown;
			
		}
		else
		{
			//直接显示
			document.getElementById("user_panel_fhzd_plugin").style.display="block";
			
		}
		
	};

	var initUserPanel=function(_srcUrl)
	{
		document.onclick=handleDocumentClick;
		
		
		if(isInSuperWhiteList==true)
		{
			return;
		}
		
		
		document.getElementById("user_panel_status_fhzd").addEventListener("click", handle_user_panel_status);
		//document.getElementById("user_panel_start_fhzd").addEventListener("click", handle_user_panel_start);
		update_handle_user_panel_status();
		
		document.getElementById("user_panel_white_fhzd").addEventListener("click", handle_user_panel_white_mode);
		update_user_panel_white_mode();
		
		
		document.getElementById("user_panel_normal_mode_fhzd").addEventListener("click", handle_user_panel_normal_mode);
		document.getElementById("user_panel_check_mode_fhzd").addEventListener("click", handle_user_panel_check_mode);
		
		update_user_panel_mode();
		
		
		document.getElementById("user_panel_blur_mode_fhzd").addEventListener("click", handle_user_panel_blur);
		update_user_panel_blur_mode();
		
		
		document.getElementById("user_panel_jieyin_mode_fhzd").addEventListener("click", handle_user_panel_jieyin_mode);
		document.getElementById("user_panel_foxue_mode_fhzd").addEventListener("click", handle_user_panel_foxue_mode);
		//document.getElementById("user_panel_sushi_mode_fhzd").addEventListener("click", handle_user_panel_sushi_mode);
		//document.getElementById("user_panel_chuantong_mode_fhzd").addEventListener("click", handle_user_panel_chuantong_mode);
		document.getElementById("user_panel_rensheng_mode_fhzd").addEventListener("click", handle_user_panel_rensheng_mode);
		
		update_user_panel_tips_mode();
		
		
		
		document.getElementById("user_panel_submit_img_fhzd").addEventListener("click", handle_user_panel_submit_img);
		document.getElementById("user_panel_resume_img_fhzd").addEventListener("click", handle_user_panel_resume_img);
		
		
		
		//document.getElementById("user_panel_submit_flash_fhzd").addEventListener("click", handle_user_panel_submit_flash);
		//document.getElementById("user_panel_resume_flash_fhzd").addEventListener("click", handle_user_panel_resume_flash);
		
		document.getElementById("user_panel_manage_mode_fhzd").addEventListener("click", handle_user_panel_manage_mode);
		document.getElementById("guanliyuan_mode_fhzd_plugin").style.display="none";
		
		
		document.getElementById("user_panel_img_text").addEventListener("input", handle_user_panel_img_text_change);
		
		//auto_ai_mode
		document.getElementById("user_panel_ai_mode_fhzd").checked=bgp.storage["auto_ai_mode"]=="on"?true:false;
		document.getElementById("user_panel_ai_mode_fhzd").addEventListener("click", handle_user_panel_ai_mode);
		
		if(bgp!=null)
		{
			//显示用户ID
			document.getElementById("user_id_fhzd_plugin").innerHTML="<a href=\"http://www.dizang7.cn\" target=\"_blank\">“地藏七”官方网站</a>";//bgp.storage["user_id"];
		}
		
		//图片网址
		document.getElementById("user_panel_img_text").value="";
		//预览图片
		document.getElementById("user_panel_preview_img").src="";
		
		document.getElementById("user_panel_domain_fhzd").innerHTML=host;
		document.getElementById("user_panel_white_domain_fhzd").innerHTML=host;
		
		
		document.getElementById("user_panel_intro_btn_fhzd").addEventListener("click", function(){window.open(chrome.extension.getURL("/source/page/intro.html"),"_blank");});
		
		
		
		var top_table=document.getElementById("config_panel_top_table_fhzd_plugin");
		
		top_table.style.height="335px";
		
		
		
		top_table.style.width=(document.getElementById("guanliyuan_main_fhzd_plugin").getBoundingClientRect().width+10)+"px";
		
		//如果右键选中了图片
		if(String(_srcUrl).indexOf("http://")!=-1)
		{
			document.getElementById("user_panel_img_text").value=_srcUrl;
			document.getElementById("user_panel_preview_img").src=_srcUrl+"?sdf";
			//自动显示管理员模式
			handle_user_panel_manage_mode();
			
			
		}
		
		
		/*
		if(isInWhiteList)
		{
			//在白名单里的提示
			
			document.getElementById("guanliyuan_main_fhzd_plugin").style.display="none";
			document.getElementById("guanliyuan_mode_fhzd_plugin").style.display="none";
			
		}
		else{
			
			document.getElementById("guanliyuan_white_list_fhzd_plugin").style.display="none";
		}
		*/
		//document.getElementById("guanliyuan_white_list_fhzd_plugin").style.display="none";
		
	};

	var isHitTestUserPanel=false;
	var onUserPanelMouseDown=function()
	{
		isHitTestUserPanel=true;
	};

	var handleDocumentClick=function()
	{
		
		
		if(bgp==null)
		{
			return;
		}
		
		
		//判断取消控制面板的显示	330 x 300
		var div=document.getElementById("user_panel_fhzd_plugin");
		if(div!=null && div.style.display!="none")
		{
			if(isHitTestUserPanel==false)
			{
				div.style.display="none";
			}
			
		}
		isHitTestUserPanel=false;
		
		
	};

	
	var update_handle_user_panel_status=function()
	{
		var white_list_tips="";
		if(isInWhiteList)
		{
			white_list_tips="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"<font color='#ff0000'>[此域名正在白名单里,暂停过滤！]</font>"
		}
		
		
		document.getElementById("user_panel_status_fhzd").innerHTML=bgp.status=="start"?"停止插件"+white_list_tips:"启动插件"+white_list_tips;
		
	};

	var update_user_panel_white_mode=function()
	{
		if(isInWhiteList)
		{
			document.getElementById("user_panel_white_fhzd").checked=true;
		}
		else
		{
			document.getElementById("user_panel_white_fhzd").checked=false;
		}
	};
	
	var update_user_panel_mode=function()
	{
		if(bgp.storage["mode"]=="normal")
		{
			document.getElementById("user_panel_normal_mode_fhzd").checked=true;
			document.getElementById("user_panel_check_mode_fhzd").checked=false;
		}
		else
		{
			document.getElementById("user_panel_normal_mode_fhzd").checked=false;
			document.getElementById("user_panel_check_mode_fhzd").checked=true;
		}
	};

	
	
	var update_user_panel_tips_mode=function()
	{

		document.getElementById("user_panel_jieyin_mode_fhzd").checked=bgp.storage["jie_yin_tips_mode"]=="on"?true:false;
		document.getElementById("user_panel_foxue_mode_fhzd").checked=bgp.storage["fo_xue_tips_mode"]=="on"?true:false;
		//document.getElementById("user_panel_sushi_mode_fhzd").checked=bgp.storage["su_shi_tips_mode"]=="on"?true:false;
		//document.getElementById("user_panel_chuantong_mode_fhzd").checked=bgp.storage["chuan_tong_tips_mode"]=="on"?true:false;
		document.getElementById("user_panel_rensheng_mode_fhzd").checked=bgp.storage["ren_sheng_tips_mode"]=="on"?true:false;
		
		
		
		
	};
	
	var update_user_panel_blur_mode=function()
	{
		if(bgp.storage["blur_host"].indexOf(host)==-1)
		{
			document.getElementById("user_panel_blur_mode_fhzd").checked=false;
		}
		else
		{
			document.getElementById("user_panel_blur_mode_fhzd").checked=true;
		}
	};


	var updateUserPanelToSubmitTips=function()
	{
		

	document.getElementById("user_panel_fhzd_plugin").innerHTML="<table width='100%' align='center'  border='0' cellspacing='0' cellpadding='0'><tr><td width='350' bgcolor='#FFCC66' align='center' valign='middle'><br><b>正在提交请稍后，成功后会自动刷新页面...<b><br><br></td></tr></table>";
	
	//user_panel.style.width="80%";
	user_panel.style.top="50%";
	//user_panel.style.marginLeft="0px";
	//user_panel.style.left="auto";
	//user_panel.style.textAlign="center";
	

	};

	var handle_user_panel_img_text_change=function()
	{
		var value=document.getElementById("user_panel_img_text").value;
		if(value.indexOf("http://")!=-1)
		{
			document.getElementById("user_panel_preview_img").src=value;
		}
		
	};



	var handle_user_panel_status=function()
	{
		
		chrome.extension.sendRequest({evt: "request_user_panel_action",type:"status",param:bgp.status=="start"?"stop":"start"}, function(){});
		update_handle_user_panel_status();
		
	};

	var handle_user_panel_white_mode=function()
	{
		var action=document.getElementById("user_panel_white_fhzd").checked==true?"add":"del";
		chrome.extension.sendRequest({evt: "request_user_panel_action",type:"white",param:host,action:action}, function(){});
		update_user_panel_white_mode
		
	};
	
	var handle_user_panel_normal_mode=function()
	{
		chrome.extension.sendRequest({evt: "request_user_panel_action",type:"normal_mode"}, function(){});
		bgp.storage["mode"]="normal";
		update_user_panel_mode();
	};
	var handle_user_panel_check_mode=function()
	{
		chrome.extension.sendRequest({evt: "request_user_panel_action",type:"check_mode"}, function(){});
		bgp.storage["mode"]="check";
		update_user_panel_mode();
	};

	var handle_user_panel_ai_mode=function()
	{
		var ai=document.getElementById("user_panel_ai_mode_fhzd").checked==true?"on":"off";
		chrome.extension.sendRequest({evt: "request_user_panel_action",type:"ai_mode",param:ai}, function(){});
	};



	var handle_user_panel_blur=function()
	{
		
		var type=document.getElementById("user_panel_blur_mode_fhzd").checked?"blur":"un_blur";
		chrome.extension.sendRequest({evt: "request_user_panel_action",type:type,param:host}, function(){});
		
		
	};

	
	var handle_user_panel_jieyin_mode=function()
	{
		
		chrome.extension.sendRequest({evt: "request_user_panel_action",type:"jieyin_mode",param:bgp.storage["jie_yin_tips_mode"]=="on"?"off":"on"}, function(){});
		
	};
	var handle_user_panel_foxue_mode=function()
	{
		
		chrome.extension.sendRequest({evt: "request_user_panel_action",type:"foxue_mode",param:bgp.storage["fo_xue_tips_mode"]=="on"?"off":"on"}, function(){});
		
	};
	var handle_user_panel_sushi_mode=function()
	{
		
		chrome.extension.sendRequest({evt: "request_user_panel_action",type:"sushi_mode",param:bgp.storage["su_shi_tips_mode"]=="on"?"off":"on"}, function(){});
		
	};
	var handle_user_panel_chuantong_mode=function()
	{
		
		chrome.extension.sendRequest({evt: "request_user_panel_action",type:"chuantong_mode",param:bgp.storage["chuan_tong_tips_mode"]=="on"?"off":"on"}, function(){});
		
	};
	var handle_user_panel_rensheng_mode=function()
	{
		
		chrome.extension.sendRequest({evt: "request_user_panel_action",type:"rensheng_mode",param:bgp.storage["ren_sheng_tips_mode"]=="on"?"off":"on"}, function(){});
		
	};



	var handle_user_panel_submit_img=function()
	{
		
		
		var imgSrc=document.getElementById("user_panel_img_text").value;
		if(imgSrc.indexOf("http://")==-1 || imgSrc.length<2)
		{
			alert("请输入正确的图片地址");
			return;
		}
		
		var img_list=document.getElementsByTagName("img");
		if(img_list!=null && img_list.length>0)
		{
			for(var i=img_list.length-1;i>=0;i--)
			{
				var img=img_list[i];
				if(img.src==imgSrc)
				{
					//img.style.visibility="hidden";
					img.setAttribute("style", "-webkit-filter: contrast(0);");
					//break;
				}
			}
		}
		
		chrome.extension.sendRequest({evt: "request_user_panel_action",type:"submit_img",param:imgSrc}, function(){});
		//updateUserPanelToSubmitTips();
		
		handleDocumentClick();
		
	};
	var handle_user_panel_resume_img=function()
	{
	
	
	
		var imgSrc=document.getElementById("user_panel_img_text").value;
		if(imgSrc.indexOf("http://")==-1 || imgSrc.length<2)
		{
			alert("请输入正确的图片地址");
			return;
		}
		
		chrome.extension.sendRequest({evt: "request_user_panel_action",type:"resume_img",param:imgSrc}, function(){});
		
		var img_list=document.getElementsByTagName("img");
		if(img_list!=null && img_list.length>0)
		{
			for(var i=img_list.length-1;i>=0;i--)
			{
				var img=img_list[i];
				if(img.src==imgSrc)
				{
					//img.style.visibility="visible";
					img.setAttribute("style", "-webkit-filter: contrast(1);");
					img.src=imgSrc;
					
					//break;
				}
			}
		}
		
		handleDocumentClick();
		//updateUserPanelToSubmitTips();
	};

	/*
	handle_user_panel_submit_flash()
	{
		chrome.extension.sendRequest({evt: "request_user_panel_action",type:"submit_flash",param:""}, function(){});
	}
	handle_user_panel_resume_flash()
	{
		chrome.extension.sendRequest({evt: "request_user_panel_action",type:"resume_flash",param:""}, function(){});
	}
	*/
	var handle_user_panel_manage_mode=function()
	{
		var div=document.getElementById("guanliyuan_mode_fhzd_plugin");
		
		div.style.display=div.style.display=="none"?"block":"none";
		
		var top_table=document.getElementById("config_panel_top_table_fhzd_plugin");
		if(div.style.display=="block")
		{
			top_table.style.height="514px";
			
		}
		else{
			top_table.style.height="335px";
		}
	};





}

