//打开app
$app.open()
//显示加载状态
$ui.loading(true)

var dayData = [] //日榜数据
var weekData = [] //周榜数据
var hotData = [] //热评数据
var monData = [] //月榜数据

//--时间处理--//
function dateConvert(date){
    //基础时间数据
    var minute = 1000 * 60
    var hour = minute * 60
    var day = hour * 24
    var halfaMonth = day * 15
    var month = day * 30

    //当前时间
    var now = new Date().getTime()
    function getDateTimeStamp(dateStr){
        return Date.parse(dateStr.replace(/-/gi,"/"));
    }

    //时间差计算
    var diffValue = now - getDateTimeStamp(date)

    //时间计算
    var monthC = diffValue / month
    var weekC = diffValue / (7*day)
    var dayC = diffValue / day
    var hourC = diffValue / hour
    var minC = diffValue / minute

    if(monthC > 1){
        return "发表于" + parseInt(monthC) + "月前"
    }else if(weekC > 1){
        return "发表于" + parseInt(weekC) + "周前"
    }else if(dayC > 1){
        return "发表于" + parseInt(dayC) + "天前"
    }else if(hourC > 1){
        return "发表于" + parseInt(hourC) + "小时前"
    }else if(minC > 1){
        return "发表于" + parseInt(minC) + "分钟前"
    }else{
        return "刚刚发表"
    }
}

//--通用数据清洗方法--//
function dataPush(data, images, titles, times, commentes, urls, i) {
    data.push({
        image: {
            src: images[i].replace("<image>", "").replace("</image>", "")
        },
        label: {
            text: titles[i].replace("<title><![CDATA[", "").replace("]]>", "")
        },
        time: {
            text: dateConvert(times[i].replace("<postdate>", "").replace("</postdate>", ""))
        },
        comment: {
            text: commentes[i].replace("<commentcount>", "").replace("</commentcount>", "") + "评"
        },
        url: "https://www.ithome.com" + urls[i].replace("<url>", "").replace("</url>", "")
    })
}

//--查看详情--//
function openURL(url, title) {
    $ui.push({
        props: {
            title: title
        },
        views: [{
            type: "web",
            props: {
                url: url
            },
            layout: $layout.fill,
        }]
    })
}

//--获取数据--//
$http.get({
    url: "http://api.ithome.com/xml/newslist/rank.xml",
    handler: function(resp) {
        //关闭加载状态
        $ui.loading(false)
        var xml = resp.data
        //匹配数据源
        var titles = xml.match(/<title><!\[CDATA\[.*?\]\]>/g)
        var images = xml.match(/<image>.*?<\/image>/g)
        var urls = xml.match(/<url>.*?<\/url>/g)
        var commentes = xml.match(/<commentcount>.*?<\/commentcount>/g)
        var times = xml.match(/<postdate>.*?<\/postdate>/g)
        //赋值
        for(var i = 0; i < titles.length; i++){
            if(i < 12){
                dataPush(dayData, images, titles, times, commentes, urls, i)
            }else if(i >= 12 && i <24){
                dataPush(weekData, images, titles, times, commentes, urls, i)
            }else if(i >=24 && i<36){
                dataPush(hotData, images, titles, times, commentes, urls, i)
            }else{
                dataPush(monData, images, titles, times, commentes, urls, i)
            }
        }
        //调用UI展示
        itList(dayData, weekData, hotData, monData)
    }
})

//--UI展示--//
function itList(dayData, weekData, hotData, monData) {
    $ui.render({
        props: {
            title: "IT之家排行榜"
        },
        views: [{
            type: "menu",
            props: {
                items: ["日榜", "周榜", "热评", "周榜"]
            },
            layout: function(make, view) {
                make.left.top.right.equalTo(0)
                make.height.equalTo(44)
            },
            events: {
                changed: function(sender){
                    var index = sender.index
                    var listData = $("list").data
                    if(index == 0){
                        $("list").data = dayData
                    }else if(index == 1){
                        $("list").data = weekData
                    }else if(index == 2){
                        $("list").data = hotData
                    }else{
                        $("list").data = monData
                    }
                }
            }
        },
        {
            type: "list",
            props: {
                rowHeight: 85,
                separatorInset: $insets(0, 5, 0, 0),
                template: [{
                    type: "image",
                    props: {
                        id: "image",
                        radius: 5
                    },
                    layout: function(make, view){
                        make.left.top.bottom.inset(4)
                        make.width.equalTo(100)
                    }
                },
                {
                    type: "label",
                    props: {
                        id: "label",
                        font: $font("bold", 17),
                        lines: 0
                    },
                    layout: function(make, view) {
                        make.left.equalTo($("image").right).offset(15)
                        make.top.equalTo(5)
                        make.right.inset(10)
                    }
                },{
                    type: "label",
                    props: {
                        id: "time",
                        font: $font(10)
                    },
                    layout: function(make, view){
                        make.left.equalTo($("image").right).offset(15)
                        make.bottom.equalTo(-10)
                    }
                },{
                    type: "label",
                    props: {
                        id: "comment",
                        font: $font(10)
                    },
                    layout: function(make, view){
                        make.right.equalTo(-15)
                        make.bottom.equalTo(-10)
                    }
                }],
                data: dayData
            },
            layout: function(make, view){
                make.left.bottom.right.equalTo(0)
                make.top.equalTo($("menu").bottom)
            },
            events: {
                didSelect: function(tableView, indexPath){
                    //打开文章链接
                    openURL(tableView.object(indexPath).url,tableView.object(indexPath).title)
                }
            }
        }]
    })
}
