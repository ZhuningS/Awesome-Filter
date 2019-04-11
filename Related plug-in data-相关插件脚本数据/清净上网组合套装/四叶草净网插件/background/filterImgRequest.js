// JavaScript Document


var filterImgRequest={};


var webFilterImgDataUrl="http://fhzd.org/zimingPlugin/wang_ye_jing_hua_qi/php/filter_img.txt";
var isFilterImgInitOver=false;



filterImgRequest.init=function(_newPath)
{
	
	
	if(_newPath!=storage["filter_image_path"])
	{
		storage["filter_image_path"]=_newPath;
		
		filterImgRequest.getData();
	
	}
	else{
		
		filterImgRequest.onGetData(storage["web_filter_img_data"],"success_local");
		
	}
	
	

}


filterImgRequest.getData=function()
{

 $.get(webFilterImgDataUrl,filterImgRequest.onGetData);

}

filterImgRequest.onGetData=function(data,status)
{
	
	if(status=="success" || status=="success_local")
	{
		
		if(status=="success")
		{
			storage["web_filter_img_data_st"]=new Date().getTime()+"";
		}
		//alert(data);
		storage["web_filter_img_data"]=data;
		isFilterImgInitOver=true;
		re_create_filter_img_data();
		
	}
	//loadNextData();
}

/*
filterImgRequest.getDateFormat=function()
{
	var date=new Date();
	var y=date.getYear();
	var m=(date.getMonth()+1);
	var d=date.getDate();
	return y+"-"+m+"-"+d;
}
*/


filterImgRequest.checkUrl=function(_url)
{
	var low_case_url = _url;
	low_case_url = low_case_url.toLowerCase();
	
	//不过滤
	if(low_case_url.indexOf("http://")==-1 || isFilterImgInitOver==false)
	{	
		return true;
	}
	
	/*
	var host=low_case_url.split("/")[2];
	//超级白名单也不过滤
	if(totalSuperWhiteList.indexOf(host)!=-1)
	{
		//在系统白名单里，不过滤
		return true;
	
	}
	*/
	
	
	
	//不过滤
	if((low_case_url.indexOf(".swf") == -1 && low_case_url.indexOf(".jpg") == -1 && low_case_url.indexOf(".jpeg") == -1 && low_case_url.indexOf(".gif") == -1 && low_case_url.indexOf(".png") == -1 && low_case_url.indexOf(".bmp") == -1))
	{
		return true;
	}
	
	
	
	
	//去掉问号后的随机数
	low_case_url=low_case_url.split("?")[0];
	
	if(storage["mode"] == "normal" && status == "start" && low_case_url.indexOf("veg001.com") == -1)
	{
		//alert(filter_img_data.slice(filter_img_data.length-50,filter_img_data.length));
		if(filter_img_data.indexOf(_url)!=-1)
		{
			
			return false;
		}
		
	}

	return true;
}







