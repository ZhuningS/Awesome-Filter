const __version = "1.4v";

getNewVersion()

var __width = $device.info["screen"]["width"] - 5,
    __height = $device.info['screen']["height"] - 78,
    _page = 0;

var popDelegate = null
var search_key = null

$ui.render({
    props: {
        id: "list",
        title: "少数派",
        navBarHidden: true,
        statusBarStyle: 0,
    },
    views: [{
        type: "view",
        props: {
            id: "mainView",
        },
        layout: $layout.fill,
        views: [{
            type: "image",
            props: {
                id: "logo",
                radius: 10,
                src: "https://cdn.sspai.com/sspai/assets/img/favicon/icon_152.png"
            },
            layout: function (make, view) {
                make.top.equalTo(30)
                make.left.equalTo(15)
                make.size.equalTo($size(50, 50))
            }
        },
        {
            type: "label",
            props: {
                id: "title",
                text: "少数派",
                font: $font("bold", 30),
                align: $align.center
            },
            layout: function (make, view) {
                make.left.equalTo($("logo").right).offset(5)
                make.top.equalTo($("logo")).offset(7)
            }
        },
        {
            type: "button",
            props: {
                id: "searchIcon",
                icon: $icon("023", $color("#e1e8f0"), $size(30, 30)),
                bgcolor: $color("clear")
            },
            layout: function (make, view) {
                make.top.equalTo($("logo")).offset(10)
                make.right.inset(15)
            },
            events: {
                tapped: function (sender) {
                    $input.text({
                        type: $kbType.default,
                        placeholder: "搜索",
                        handler: function (text) {
                            search_key = text
                            $http.get({
                                url: "https://sspai.com/api/v1/search?limit=25&type=article&offset=0&keyword=" + $text.URLEncode(text),
                                handler: function (resp) {
                                    let allData = resp.data
                                    let cdnUrl = "https://cdn.sspai.com/"
                                    for (var data in allData["list"]) {
                                        let infors = allData["list"][data]
                                        if (infors["id"] != undefined) {
                                            $("postList").insert({
                                                indexPath: $indexPath(0, 0),
                                                value: {
                                                    url: {
                                                        text: "https://sspai.com/" + infors["id"]
                                                    },
                                                    postTitle: {
                                                        text: infors["title"]
                                                    },
                                                    postImage: {
                                                        src: cdnUrl + infors["banner"]
                                                    }
                                                }
                                            })
                                            $("backIcon").hidden = false
                                        }
                                    }
                                }
                            })
                        }
                    })
                }
            }
        },
        {
            type: "button",
            props: {
                id: "backIcon",
                hidden: true,
                icon: $icon("162", $color("#e1e8f0"), $size(30, 30)),
                bgcolor: $color("clear")
            },
            layout: function (make, view) {
                make.top.equalTo($("logo")).offset(10)
                make.right.inset(70)
            },
            events: {
                tapped: function (sender) {
                    $("postList").data = []
                    loadSspaiArticle(_page)
                    $("backIcon").hidden = true
                }
            }
        },
        {
            type: "matrix",
            props: {
                id: "postList",
                columns: 1,
                itemHeight: 150,
                spacing: 10,
                showsVerticalIndicator: false,
                template: {
                    views: [{
                        type: "view",
                        props: {
                            id: "postView",
                            radius: 15,
                            bgcolor: $color("#F4F4F4"),
                            textColor: $color("#abb2bf"),
                            align: $align.center,
                            font: $font(32)
                        },
                        views: [{
                            type: "image",
                            props: {
                                id: "postImage",
                                radius: 15,
                            },
                            layout: function (make, view) {
                                make.centerX.equalTo()
                                make.size.equalTo($size($("postList").frame.width, 105))
                            }
                        },
                        {
                            type: "label",
                            props: {
                                id: "postTitle",
                                lines: 2,
                                font: $font(16),
                            },
                            layout: function (make, view) {
                                make.top.equalTo($("postImage").bottom).offset(5)
                                make.left.right.inset(10)
                            },
                        },
                        ],
                        layout: $layout.fill
                    }]
                }
            },
            layout: function (make) {
                make.top.equalTo($("logo").bottom).offset(5)
                make.centerX.equalTo()
                make.size.equalTo($size(__width, __height))
            },
            events: {
                didSelect: function (sender, indexPath, data) {
                    getNews(data["url"]["text"])
                },
                didLongPress: function (sender, indexPath, data) {
                    $share.sheet([data.url.text, data.postTitle.text])
                },
                didReachBottom: function (sender) {
                    sender.endFetchingMore()
                    _page += 10
                    loadSspaiArticle(_page)
                    $device.taptic(0)
                },
                pulled: function(sender) {
                    if (search_key == null){
                        $("postList").beginRefreshing()
                        $("postList").data = []
                        loadSspaiArticle(_page)
                        $("postList").endRefreshing()
                    } else {
                        $("postList").endRefreshing()
                    }
                }
            }
        }
        ]
    }],
    events: {
        didAppear: function () {
            if (popDelegate != null) {
                $("list").runtimeValue().$viewController().$navigationController().$interactivePopGestureRecognizer().$setDelegate(popDelegate)
            }
        }
    }
})

loadSspaiArticle(_page)

function loadSspaiArticle(_page) {
    $http.get({
        url: "https://sspai.com/api/v1/articles?offset=" + _page + "&limit=10&type=recommend_to_home&sort=recommend_to_home_at&include_total=true",
        header: {
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36"
        },
        handler: function (resp) {
            let allData = resp.data
            let cdnUrl = "https://cdn.sspai.com/"
            for (var data in allData["list"]) {
                let infors = allData["list"][data]
                $("postList").insert({
                    index: $("postList").data.length,
                    value: {
                        url: {
                            text: "https://sspai.com/" + infors["id"]
                        },
                        postTitle: {
                            text: infors["title"]
                        },
                        postImage: {
                            src: cdnUrl + infors["banner"]
                        }
                    }
                })
            }
        }
    })
}

function getNews(_url) {
    $ui.push({
        props: {
            title: "少数派",
            id: "web",
            navBarHidden: true,
            statusBarStyle: 0
        },
        views: [
            {
                type: "web",
                props: {
                    url: _url
                },
                layout: $layout.fill,
            }],
        events: {
            didAppear: function (sender) {
                popDelegate = $("web").runtimeValue().$viewController().$navigationController().$interactivePopGestureRecognizer().$delegate()
                $("web").runtimeValue().$viewController().$navigationController().$interactivePopGestureRecognizer().$setDelegate(null)
            }
        }
    })
}

function getNewVersion() {
    $http.get({
        url: "https://raw.githubusercontent.com/alpha87/JsBoxScript/master/sspai.js",
        handler: function (resp) {
            var data = resp.data
            var versionItem = new RegExp('const __version = "(.*?)v";', "g")
            var version = versionItem.exec(data)[1]
            if (version > __version) {
                $ui.alert({
                    title: "检测到新版本",
                    message: "是否现在更新到最新版本",
                    actions: [
                        {
                            title: "更新",
                            handler: function () {
                                $app.openURL(encodeURI("jsbox://install?name=少数派阅读&icon=045&url=https://raw.githubusercontent.com/alpha87/JsBoxScript/master/sspai.js"))
                                $app.close()
                            }
                        },
                        {
                            title: "取消",
                        }
                    ]
                })
            }
        }
    })
}
