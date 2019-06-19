







function checkAppUpdate()
{
	
	
	chrome.browserAction.setIcon({path:"32.png"});
	
	$.get("http://gyapp.org/jing_wang/update.xml?"+Math.floor(Math.random()*999999), on_update_loaded);
	
	
	
	
}


var renderInconCount=0;

function renderIcon()
{
	
	if(renderInconCount==0)
	{
		renderInconCount=1;
		chrome.browserAction.setIcon({path:"32_u.png"});
	}
	else if(renderInconCount==1){
		renderInconCount=0;
		chrome.browserAction.setIcon({path:"32.png"});
	}
	
	
}


function on_update_loaded(data, status) {
	
	if (status == "success") {
		try{
			
			var cv=(chrome.app.getDetails().version+"");
			var tv=$(data).find("updatecheck").attr("version")+"";
			
			if(cv!=tv && Number(tv)>Number(cv))
			{	
				
				window.setInterval(renderIcon,500);
				has_new_version=true;
			}
			
			
		}
		catch(ee)
		{
			alert(ee);
		}
		
	}

}











