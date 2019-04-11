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
var isMove=false//窗体移动状态
function dailog(content,title,width,height,margin_top,margin_left,scrolling)
{
	
if(document.getElementById("dailog_body")!=null)
{
	//alert("只能打开一个窗口")
	return false;
}
//对话框体
var dailog_body=document.createElement("div");
dailog_body.id="dailog_body"
//dailog_body.style.top=margin_top;

dailog_body.style.cssText = "top:expression(this.parentNode.scrollTop +"+margin_top+"+ 'px');"
dailog_body.style.left=margin_left;
dailog_body.style.height=height;   
dailog_body.style.width=width;   
dailog_body.style.position="absolute"; 
dailog_body.style.border="1px solid #EFEFEF";



//标题
var dailog_title=document.createElement("div");
dailog_title.id="dailog_title"
dailog_title.style.top=0;   
dailog_title.style.left=0;
dailog_title.style.height=25;   
dailog_title.style.width=width;
dailog_title.style.color="#ffffff";
dailog_title.style.fontWeight="bold";
dailog_title.style.cursor="default"
dailog_title.style.background="#0099FF";
dailog_title.innerHTML="<div style='float:left;height:25px;width:50%;font-family:微软雅黑;font-size:14px;line-height:25px;text-indent:5px'>"+title+"</div><div id='os' style='float:right;height:20px;width:16px;font-family:微软雅黑;font-size:14px;line-height:20px;margin-right:1px'><a href='javascript:dailog_close()' title='关闭'>×</a></div>"
//内容
var dailog_content=document.createElement("div");
dailog_content.id="dailog_content"
dailog_content.style.top=0;   
dailog_content.style.left=0;   
dailog_content.style.height=height-20;   
dailog_content.style.width=width;  

dailog_content.innerHTML=content;
dailog_content.style.padding="5px 5px 5px 5px";


dailog_title.onmouseover=Function(dailog_move(dailog_title,dailog_body));

dailog_body.appendChild(dailog_title)
dailog_body.appendChild(dailog_content)
document.body.appendChild(dailog_body);

$(dailog_body).css({"left":margin_left+"px","top":margin_top+"px"});

alert(dailog_body);

}

/*function chageBorderColor(obj,arg)//关闭按钮外观改变函数
{
	obj.style.border=""+arg+"px solid #000"
}*/
function dailog_close()//窗体关闭函数
{
	document.body.removeChild(dailog_body)	
}

function dailog_move(eventObj,moveObj)//窗体移动函数
{
	 var x,y;	 
	 eventObj.onmousedown=function()//鼠标按下的时候
	 {
		  isMove=true;//移动状态为true
		  with(moveObj)
		  {
			   style.position="absolute";
			   var temp1=offsetLeft;
			   var temp2=offsetTop;
			   x=window.event.clientX;
			   y=window.event.clientY;
			   
			   document.onmousemove=function()
			   {
					if(!isMove)return false;
					with(this)
					{
					 style.left=temp1+window.event.clientX-x+"px";
					 style.top=temp2+window.event.clientY-y+"px";
					}
			   }
		  }
		  document.onmouseup=new Function("isMove=false");
	 }
}