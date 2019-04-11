/*知乎免app看贴*/navigator.__defineGetter__('userAgent', function(){return 'Dalvik/2.1.0 (Linux; U; Android 6.0; NEM-AL10 Build/HONORNEM-AL10) iPhone/8.0'?; }); 
window.onload = function () { 
 var zhihuDownload = document.getElementsByClassName('MobileAppHeader-downloadLink'); 
 for(var i = 0; i < zhihuDownload.length; i ++) { 
  zhihuDownload[i].style.display = "none"; 
 } 
 var ad = document.getElementsByTagName('img'); 
 for(var i = 0; i < ad.length; i ++) { 
  if(ad[i].alt == "广告") { 
   ad[i].style.display = "none"; 
  } 
 } 
}