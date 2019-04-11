var si = 0;
$ui.render({
    views: [{
        type: "list",
        props: {
            template: {
                props: {
                    bgcolor: $color("clear")
                },
                views: [{
                    type: "image",
                    layout: $layout.fill
                }],
            },
            rowHeight: 1080 / 1920 * $device.info.screen.width,
        },
        events: {
            didSelect: (sender, indexPath, data) => {
                shower(data);
                animation("blur", 0.8, 1);
                console.log(sender)
            },
            didReachBottom: async (sender) => {
                let data = await jsonData(si);
                sender.data = sender.data.concat(data);
                sender.endFetchingMore();
            }
        },
        layout: $layout.fill,
    }, {
        type: "blur",
        props: {
            style: 2,
            alpha: 0,
        },
        views: [{
            type: "image",
            props: {
                id: "shower",
                bgcolor: $color("clear"),
                contentMode: 1
            },
            layout: (make) => {
                make.top.inset(50);
                make.left.right.inset(0);
                make.height.equalTo($device.info.screen.width * 0.6);
            }
        }, {
            type: "button",
            props: {
                title: "下载",
                circular: true,
                bgcolor: $color("black"),
                titleColor: $color("white")
            },
            layout: (make, view) => {
                make.left.inset(50);
                make.size.equalTo($size(80, 80));
                make.top.equalTo(view.prev.bottom).offset(50)
            },
            events: {
                tapped: async () => {
                    $('label').text = "0 %";
                    animation('label', 0.4, 1);
                    let resp = await $http.download({
                        url: $("shower").info, showsProgress: 1, progress: (bytesWritten, totalBytes) => {
                            $('label').text = `${parseInt(bytesWritten * 100.0 / totalBytes)} %`
                        }
                    });
                    animation('label', 0.4, 0);
                    $share.sheet([resp.data]);
                }
            }
        }, {
            type: "button",
            props: {
                title: "返回",
                circular: true,
                bgcolor: $color("black"),
                titleColor: $color("white")
            },
            layout: (make, view) => {
                make.right.inset(50);
                make.top.equalTo(view.prev.top);
                make.size.equalTo($size(80, 80));
            },
            events: {
                tapped: () => {
                    animation("blur", 0.8, 0);
                }
            }
        }, {
            type: "label",
            props: {
                text: "0 %",
                alpha: 0,
                textColor: $color("white")
            },
            layout: (make, view) => {
                make.top.equalTo(view.prev.top);
                make.centerY.equalTo(view.prev);
                make.centerX.equalTo(view.super);
            }
        }],
        layout: $layout.fill
    }],
    events: {
        appeared: async () => {
            $("list").data = await jsonData(si);
        }
    }
})

function imgUrl(n) {
    return `http://joyoncloud.com/wallpaper/img_detail/jtix/big/${n}.jpg`;
}
function shower(data) {
    $("shower").src = $("shower").info = data.image.src;
}
function animation(id, time, alpha, hander) {
    $ui.animate({
        duration: time,
        animation: () => {
            $(id).alpha = alpha
        },
        completion: hander ? hander : () => { }
    })
}

async function jsonData(i) {
    let list = [];
    let data = await $http.get(`http://joyoncloud.com/wallpaper/img_detail/jtix/connect_new/db_sync_ratings_remote.php?startIndex=${i}&category=vip_4k`);
    data.data.wps.map(x => { list.push({ image: { src: imgUrl(x.filename) } }); si += 1; })
    return list;
}
