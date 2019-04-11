<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus®">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <title>Document</title>
  <style type="text/css">
    *{
		margin:0;
		padding:0;
	}
	/*
	body{
		overflow:hidden;
	}*/
	.head{
		width:100%;
		height:60px;
		background:#333;
		color:#fff;
		font-size:24px;
		text-align:center;
		line-height:60px;
	}
	.content{
		width:100%;
		height:484px;
		background:url(img/bg.jpg) no-repeat center;
		background-size:100% 100%;
		
	}
	.img{
		margin:0 auto;
		height:484px;
		overflow:hidden;
		display:table;
		position:relative;
	}
	/*给上传的图片一个限制（最小高度、最小宽度...）*/
	#c_img{
		min-width:300px;
		max-width:1200px;
		min-height:300px;
		max-height:484px;
		
	}
	/*display:block;*/
	#upload{
		width:120px;
		height:40px;
		background:rgba(0,0,0,0.5);
		display:block;
		position:absolute;
		bottom:10px;
		right:10px;
		text-align:center;
		line-height:40px;
		color:#fff;
		text-decoration:none;
		font-size:24px;
		border-radius:25px;
	}
	.footer{
		width:100%;
		height:233px;
		background:url(img/timg.jpg)no-repeat center;
		background-size:100% 100%;
	}
  </style>
 </head>
 <body>
  <div id="" class="head">
	Java开发黄反智能识别系统
  </div>
  <div class="content">
	<div class="img">
		<!-- 这里有一个问题，中文文件名的图片不能显示 -->
		<img src="${empty fileName?'img/1.jpg':fileName }" id="c_img" width="" height="" border="0" alt=""/>
		<a href="javascript:;" id="upload">上传图片</a>
	</div>
	<form enctype="multipart/form-data" method="post" action="fileUpload" id="form">
		<input type="file" name="uploadfile" id="uploadfile" onchange="upload();"/>
		<input type="submit" id="submit"/>
	</form>
  </div>
  <div class="footer">
	
  </div>
  <script type="text/javascript" src="js/jquery-3.1.1.min.js"></script>
  <script type="text/javascript">
	$(function(){
		query();
	});
	$("#upload").click(function(){
		$("#uploadfile").click();
	});
	function upload(){
		$("#submit").click();
		query();
	}
	//请求数据
	function query(){
		var path = $("#c_img").attr("src");
		$.ajax({
			type:'post',
			url:'query',
			data:{"path":path},
			success:function(data){
				var result = $.parseJSON(data);
				console.log(data);
				var num = [];
				var name = [];
				var array = result.result;
				array.forEach(function(value,index,array){
					name.push(value.class_name);
					num.push(value.probability);
				},array);
				var index = num.indexOf(Math.max.apply(null,num));
				var obj = $("<div class='text' style='color:#fff'>"+name[index]+"</div>");
				$(".img").append(obj);
			}
		});
	}
  </script>
 </body>
</html>

