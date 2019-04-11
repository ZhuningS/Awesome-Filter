g_typemap = {
    "content" : [{
        "id" : "1",
        "target" : "电影"
    }, {
        "id" : "2",
        "target" : "电视剧"
    }, {
        "id" : "3",
        "target" : "动漫"
    }, {
        "id" : "4",
        "target" : "体育"
    }, {
        "id" : "5",
        "target" : "娱乐"
    }, {
        "id" : "6",
        "target" : "游戏"
    }, {
        "id" : "7",
        "target" : "播客"
    }, {
        "id" : "8",
        "target" : "热点"
    }, {
        "id" : "9",
        "target" : "纪录片"
    }, {
        "id" : "10",
        "target" : "综艺"
    }, {
        "id" : "11",
        "target" : "春晚"
    }, {
        "id" : "12",
        "target" : "两会"
    }, {
        "id" : "13",
        "target" : "花儿朵朵"
    }, {
        "id" : "99",
        "target" : "快女"
    }, {
        "id" : "103",
        "target" : "原创"
    }, {
        "id" : "15",
        "target" : "英超"
    }, {
        "id" : "17",
        "target" : "意甲"
    }, {
        "id" : "97",
        "target" : "亚运会"
    }, {
        "id" : "0",
        "target" : "未知"
    }, {
        "id" : "18",
        "target" : "世博"
    }, {
        "id" : "19",
        "target" : "快男"
    }, {
        "id" : "98",
        "target" : "高清体验专区"
    }, {
        "id" : "21",
        "target" : "世界杯"
    }, {
        "id" : "22",
        "target" : "MV"
    }, {
        "id" : "23",
        "target" : "新闻"
    }, {
        "id" : "24",
        "target" : "财经"
    }, {
        "id" : "25",
        "target" : "时尚"
    }, {
        "id" : "26",
        "target" : "旅游"
    }, {
        "id" : "27",
        "target" : "教育"
    }, {
        "id" : "28",
        "target" : "科技"
    }, {
        "id" : "29",
        "target" : "汽车"
    }, {
        "id" : "30",
        "target" : "房产"
    }, {
        "id" : "31",
        "target" : "生活"
    }, {
        "id" : "32",
        "target" : "其他"
    }, {
        "id" : "33",
        "target" : "NBAVIP"
    }, {
        "id" : "100",
        "target" : "在线学习"
    }, {
        "id" : "34",
        "target" : "NBAliveu"
    }, {
        "id" : "35",
        "target" : "NBArealtime"
    }, {
        "id" : "102",
        "target" : "2012欧洲杯"
    }, {
        "id" : "101",
        "target" : "2012伦敦奥运会"
    }, {
        "id" : "60",
        "target" : "母婴"
    }, {
        "id" : "37",
        "target" : "微讲堂"
    }, {
        "id" : "38",
        "target" : "MV2"
    }, {
        "id" : "200",
        "target" : "mv1"
    }, {
        "id" : "104",
        "target" : "热享"
    }, {
        "id" : "105",
        "target" : "拍客"
    }, {
        "id" : "106",
        "target" : "腾讯大讲堂"
    }, {
        "id" : "39",
        "target" : "收费"
    }, {
        "id" : "40",
        "target" : "广告"
    }, {
        "id" : "41",
        "target" : "自拍"
    }, {
        "id" : "42",
        "target" : "猎奇"
    }, {
        "id" : "43",
        "target" : "搞笑"
    }, {
        "id" : "46",
        "target" : "微电影"
    }, {
        "id" : "44",
        "target" : "面包测试"
    }, {
        "id" : "45",
        "target" : "儒释道"
    }, {
        "id" : "47",
        "target" : "付费"
    }, {
        "id" : "48",
        "target" : "storm测试"
    }],
    "log" : "",
    "value" : 0
}; 

$(function(){
    var typecont = $('[data-form-item="type"]');
    var ulcont = typecont.find('ul.dropdown-menu');
    var content = [];
    content.push('<li data-form-val="0"><a href="javascript:;">按分类</a></li>');
    
    $.each(g_typemap.content, function(i, item){
        content.push('<li data-form-val="'+item.id+'"><a href="javascript:;">'+item.target+'</a></li>');
    });
    
    ulcont.html(content.join(''));
});
