(function() {
    'use strict';

    // Ҫ���εĹؼ���
    var sbList = new Array("��Ӣ��","�ෲ","֣ˬ","������","Сѧ������","�ٶ����","�ٶ���ʿ","��������","ـ��","�ĳ�","�ټ���","�ټҘ�","��ɳ����","���Ž�ɳ","�������","�����ֳ�","���ر�","���־","������","�������ۺ�","����������","�˵�","���˾���","׷����� ","������","��ժ����","�й�֮��","ѩɽʨ��","������","ʱʱ��","��ֲ�","��������","���˴�","���Ŷĳ�","����͸","���ֳ�","���ǲ�","����˹����","����˹�˹�","����28","����","������","������","����","����","������","�й�����","��������","�й�","����","����","����","Ůװ","��ױ","����","ʱ��","��","����","����","����","����","��Ů","��Ů","�Ը�","д��","����","����","����","������ҫ","�Լ�","��������","Ӣ������","��ӱ","ܰ��","����","������","����","�����","����","����","�Ȱ�","����","�˳�","��ٳ","ѡ��","����","����","ɧ","��","�","��","ɫɫ","AV��","��AV","AV����","avav","sex","�Ϻ�����","�ϻ���","ӰԺ","����ߣ","��ɫ","����","�崿","����","¶��","����","��ľ��","��ľ��","ɵ��","װ��","����","�����","Լ��","�㶮��","�˽���","�ڲ�","XXOO","18��","porn","Ů��","����","breast","boob","penis","dick","vagina","fuck","damn","masturbate","masturbation","handjob","blowjob","fellatio","naked","nude","������","����Ӱ","������","ɫ��","����","����Ƭ","��Ƭ","��Ƭ","AƬ","����","�ּ�","�Ȼ���","�ڽ�","�Խ�","�ݱ�","�ٱ�","����","��Ϸ","����","����","����","����Ƭ","�߹�","����","��ū","Ů��","����","�԰�","��Ƭ","ˬƬ","����","��ɻ�","����","�Ƶ㲥","torrent","Ů��","����ʦ","������","������Ƶ","������Ӱ","С��Ӱ","����","��Ů","��ɧ��","����Ϊ","�ٸ�","��Ů","ɫ��","ͬ��","��ү","�Ե��ܲ�","����","����","����","�ϴ�","����","����","˿��","����","����","���","ǿ��","͵��","����","����","���","��ģ","��ģ","��ģ","��ģ","��","žžž","լ��","����","��ο","��","����","����","����","����","�侫","����","���˵�","��ƿ÷","ͬ�ǽ���","p2psearch","������","����������","��QQ","���ϲ�","����������","115os","��������","�첥","qvod","������","������","����","����","�Ծ�","����","���ľ","�ɵ�","����","����","С��","������","����","����","����","�캣","����","����","����","ܥ��","���","��Ұ","����","�깬","ɼԭ","����","��ԭ","����","ϣ��","����","��Ұ","����","�پ�","��ϣ","����","����","����","ӣ��","����ľ","�ҹ�","����","��Ұ","����","̳��","éҰ","��ľ","ˮ��","����");


    // ִ�й���
    function doFilter(){

        // �������
        var xgrw = document.querySelectorAll(".c-row.c-gap-top");
        for(var e = 0; e < xgrw.length; e++){
            var xgItems = xgrw[e].querySelectorAll(".opr-recommends-merge-item");
            for(var f = 0;f < xgItems.length; f++){
                var xgItem = xgItems[f];
                sbFilter(xgItem.querySelector(".c-gap-top-small").innerHTML)?killMySelf(xgItem):"";
            }
        }

        // �������
        var xg = document.getElementById("rs").querySelector("table").querySelector("tbody").querySelectorAll("tr");
        for(var b=0;b<xg.length;b++){
            var xgth = xg[b].querySelectorAll("th");
            for(var c=0;c<xgth.length;c++){
                sbFilter(xgth[c].querySelector("a").innerHTML)?killMySelf(xgth[c]):"";
            }
        }

        // �ٿ�
        var opResult = document.querySelectorAll(".result-op.c-container");
        for( var a = 0;a<opResult.length;a++){
            var op = opResult[a];
            if(op.querySelector("h3")){
                var opContent = op.querySelector("h3").querySelector("a").innerHTML;
                sbFilter(opContent)?killMySelf(op):"";
            }
        }

        // �������
        var searchResult = document.querySelectorAll(".result.c-container");
        for( var i = 0 ; i < searchResult.length ; i++ ){
            var result = searchResult[i];
            sbFilter(result.querySelector("h3").querySelector("a").innerHTML)?killMySelf(result):"";
        }

        // �����ȵ�
        var hotResult = document.querySelectorAll(".c-table.opr-toplist-table");
        for(var l = 0;l < hotResult.length;l++){
            var hotEmele = hotResult[l].querySelector("tbody").querySelectorAll("tr");
            for( var j = 0;j < hotEmele.length ; j++ ){
                var hot = hotEmele[j];
                sbFilter(hot.querySelector("td").querySelector("a").innerHTML)?killMySelf(hot):"";
            }
        }
    }

    // kill myself
    function killMySelf(obj){
        obj.parentNode.removeChild(obj);
    }

    // SB filter
    function sbFilter(content){
        content = content.replace(/<[^>]+>/g,"").toLowerCase();
        for (var i in sbList){
            if(content.indexOf(sbList[i].toLowerCase())>=0){
                return true;
}
        }
        return false;
    }
// ������������Ƿ�仯
    var len = document.getElementById("container").innerHTML.length;
    setInterval(function(){
        var newLen = document.getElementById("container").innerHTML.length;
        if(len!=newLen){
            len = newLen;
            doFilter();
        }
    },300);

    // Your code here...
})();