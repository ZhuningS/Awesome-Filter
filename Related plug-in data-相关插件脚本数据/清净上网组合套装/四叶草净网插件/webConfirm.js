




var isWebConfirmInitOver=false;
var webConfirmDataUrl="http://www.fhzd.org/soft_data/black_domain.txt";
var webConfirm={};

webConfirm.init=function(_newPath)
{
	
	if(_newPath!=storage["webconfirm_path"])
	{
		storage["webconfirm_path"]=_newPath;
		webConfirm.getData();
		
	}
	else{
		
		webConfirm.onGetData(storage["webConfirmData"],"success_local");
		
	}
	
}


webConfirm.getData=function()
{
 //alert("load black domain");
 $.get(webConfirmDataUrl,webConfirm.onGetData);

}

webConfirm.onGetData=function(data,status)
{
	if(status=="success" || status=="success_local")
	{
		if(status=="success")
		{
			storage["webConfirmDataSt"]=new Date().getTime()+"";
		}
		
		
		var arr=data.split("\r\n");
		var str="";
		
		for(var i=0;i<arr.length;i++)
		{
			var line=String(arr[i]);
			if(line.indexOf("http://*.")==-1 && line.length>2)
			{
				
				line="http://*."+line+"\n";
				
			}
			str+=line;
		}
		storage["webConfirmData"]=str;
		
		//alert(str);
		
		isWebConfirmInitOver=true;
		
		
		
		//storage["webConfirmData"]="";
		
		
		createRequestData();
	}
	
	//loadNextData();
	
}




















