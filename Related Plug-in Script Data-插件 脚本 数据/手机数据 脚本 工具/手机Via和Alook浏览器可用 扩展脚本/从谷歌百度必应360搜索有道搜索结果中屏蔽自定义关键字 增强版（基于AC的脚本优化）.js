ƥ��ֵ��https://www.google.com/*@@/%5Ehttps?%5C:%5C/%5C/encrypted.google.%5B%5E%5C/%5D+/@@/%5Ehttps?%5C:%5C/%5C/www.google.%5B%5E%5C/%5D+/@@/%5Ehttps?%5C:%5C/%5C/www.so.com/@@/%5Ehttps?%5C:%5C/%5C/www.youdao.com/


���룺



/*
����x����                                           �ٶ�=�ȸ�=��Ӧ=360����=�е�
���Ǻ�����,�Լ������Լ���Ҫ���εĹؼ���
*/
var blankList = "Сѧ������||fuck||��Ӣ��||BBC News||�����||�й�||����||����||ϣ����||������||ϰ��ƽ||����||����||��||�ؿ�ζ||�첥||�ٶ����||�ٶ����||�ٶ���ʿ||�ټҺ�||��׬||��������||ـ��||�ĳ�||�ټ���||�ټҘ�||��ɳ����||���Ž�ɳ||�������||�����ֳ�||���Ԫ||��������ƽ̨||���ʰԾ��||���ر�||�Ը�||��Ů||���˵�Ӱ||�½�ƿ÷��||ͬ�ǽ���||qvod||������||����������||��QQ||���ϲ�||����������||115os||��������||�Խ�||����||����||��վ����||2345||hao123|| ��݆||����||���־||������||�������ۺ�||����������||�˵�||���˾���||׷�����||������||��ժ����||�й�֮��||ѩɽʨ��||������||ʱʱ��||��ֲ�||��������||���˴�||���Ŷĳ�||����͸||���ֳ�||���ǲ�||����˹����||����˹�˹�||�¼���˫Ӯ||����28||�Ϻ�����||�ϻ���"; //�Լ����Ÿ�ʽ������ͺ�
var x = blankList.split("||");
//===================================================�����=======================================================
mo = new MutationObserver(function(allmutations) {
    var href = window.location.href;
    if(href.indexOf("www.baidu") > -1){
        $(".c-container").each(deal); // �ٶ�

    } else if(href.indexOf("www.google") > -1){
        $(".g").each(deal);     // �ȸ�
        
    } else if(href.indexOf("so.com") > -1){
        $(".res-list").each(deal); // 360����
        $(".spread ").each(deal); // 360����
        $(".brand").each(deal); // 360����
        
    } else if(href.indexOf("bing.com") > -1){
        $(".b_algo").each(deal);    // ��Ӧ1
        $(".b_ans").each(deal);    // ��Ӧ2
        
    } else if(href.indexOf("youdao.com") > -1){
        $(".res-list").each(deal);        // �е�
        
    }
});
var targets = document.body;
mo.observe(targets, {'childList': true,'characterData':true,'subtree': true});

// ================================================ͨ�ô�����==========================================================
function deal(){
    var curText = $(this).attr
    var curText = $(this).text();
    if(checkIndexof(curText) == true){
        $(this).remove();
        //console.log("dealing with");
    }
}
/*�����������ڱ����򷵻�true*/
function checkIndexof(element){
  var result = (element.indexOf(x[0]) > -1);
  for(var i = 1; i <= x.length; i++){
    //alert("check");
    result = result || (element.indexOf(x[i]) > - 1);
  }
  return result;
}