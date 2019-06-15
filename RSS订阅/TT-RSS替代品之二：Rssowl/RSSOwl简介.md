Rssowl是一个阅读RSSAtomRDF很好的工具。用JAVA SWT库写的界面。而且是开放源码的。支持N多种语言，而且还包含Blog工具，代理配置功能。对中文支持很好。点击tool-language-download，就可以下载其他语言了。

下面评测来自网络。原文地址：http://www.howsci.com/3288.html

# RSSOwl：免费 RSS 订阅软件评测

 2016/03/13

网友 @manu 曾经问现在有没有用着好点的RSS阅读器呢？其实自从 Google Reader 歇菜了以后，RSS 订阅器也出现了不少新的，[科研动力](http://https//www.howsci.com)曾经推荐过几款，有兴趣的同学可以参阅[后 Google Reader 时代，该选择哪种 RSS 阅读器](https://www.howsci.com/rss-reader.html)，现在感觉 Inoreader 和 NewsZiet 两个不错，基本上 Google Reader 有的功能都没，Google Reader 没有的功能也有。

现在国内还出现一个[一览](http://www.yilan.io/?utm_source=www.howsci.com)，界面漂亮，支持全文输出。但是不能自己添加 RSS 订阅源，需要管理员审核以后才可以添加。另外土番夕卜的 RSS 订阅不了，这两点是最大的瓶颈。曾经和其管理员讨论过这个事情，但是没有办法，服务器在国内。

@manu 顺便问了一款免费 RSS 订阅[软件](https://www.howsci.com/tag/apps)：RSSOwl，效果怎么样。其实这个[软件](https://www.howsci.com/tag/apps)我也没有用过，但是本着折腾的精神，下载下来使用了一些，以下是使用感受，希望能对大家有所帮助。

[![RSSOwl：免费 RSS 订阅软件评测](https://dn-howsci.qbox.me/20160312_RSSOwl.png)](https://www.howsci.com/3288.html)

## RSSOwl 简介

RSSOwl 是基于 Java 开发，支持 RSS、RDF、Atom，并能按类别读取新闻，分类存储收藏信息，能够将资料导出为PDF、RTF、HTML 等格式的文件。另外，它可以从 OPML 格式导入，支持全文本搜索。

**RSSOwl 有以下特点**

- 免费，可以自由下载使用
- 多平台支持，现在支持 Windows，Linux 和 Mac OS X，但是没有手机客户端
- **支持滤件筛选**，根据设定的条件筛选订阅源的内容，这个用处非常大。有的订阅源的所有东西可能并不是全想看的，我们只想看某一个话题的内容，就可以使用滤件筛选了。这个 Newszeit 和 Inoreader 也支持，不过是专业版。
- 即时搜索
- 通知感兴趣的订阅源
- 归档保存感兴趣的内容
- 可以为某个内容打标签
- **全文输出**

## 下载安装

因为 RSSOwl 是基于 Java 开发，因此 RSSOwl 的运行需要安装 Java Runtime Environment (JRE)。这个可以在此下载：<http://www.java.com/zh_CN/download/manual.jsp>。根据自己的操作系统下载即可。

然后就是下载 RSSOwl 进行安装了，不过也可以直接下载绿色版解压直接运行。有趣的是第一次是下载的，我的操作系统是 64 位，但是没有安装 JRE，打开 RSSOwl 提示在 c:\Program Files (x86)\Java\… 找不到需要的文件。当时就下载了一个 64 位的 JRE，居然还是不行。后来想到了 RSSOwl 打开时的提示，说是需要的辅助文件在 c:\Program Files (x86)…难道这货不认识 64 位的 JRE？！然后卸载了 64 位的 JRE，重新下载了一个 32 位的 JRE 安装，再次打开 RSSOwl 才成功。

现在 RSSOwl 最新版是 2.2.1，安装的时候提示有中文，但是安装之后发现根本没有中文，还是英文。

老版本的 2.1.2 版本还是有中文版的。如果对于中文版有强迫症，可以下载老版本的 2.1.2。安装过程很简单，一路往下点即是。

不过我更建议使用绿色版的 RSSOwl，不要使用安装版的。

**相关资源和下载**

JRE Windows 在线安装程序：<http://javadl.oracle.com/webapps/download/AutoDL?BundleId=116039>

JRE Windows 离线安装程序：<http://javadl.oracle.com/webapps/download/AutoDL?BundleId=116028>

JRE Windows 64 位离线安装程序（不建议安装这个哦，原因见上）：<http://javadl.oracle.com/webapps/download/AutoDL?BundleId=116030>

RSSOwl 2.2.1 Windows 安装程序：<https://github.com/rssowl/RSSOwl/releases/download/2.2.1/RSSOwl.2.2.1.Setup.exe>

RSSOwl 2.2.1 Windows 绿色版：<https://sourceforge.net/projects/rssowl/files/rssowl%202/2.2.1/rssowl-2.2.1.windows.zip/download>

RSSOwl 2.1.2 Windows 中文版安装程序：<https://sourceforge.net/projects/rssowl/files/rssowl%202/2.1.2/RSSOwl%20%28Chinese%20Simplified%29/RSSOwl%20Setup%202.1.2.exe/download>

RSSOwl 2.1.2 Windows 中文版绿色版：<https://sourceforge.net/projects/rssowl/files/rssowl%202/2.1.2/RSSOwl%20%28Chinese%20Simplified%29/rssowl-2.1.2-chinese-simplified.windows.zip/download>

更多下载：<https://sourceforge.net/projects/rssowl/files/rssowl%202/>

RSSOwl 官网：<http://www.rssowl.org/>

## 使用方法

安装完毕打开程序，在菜单 Tools >> Language 中可以设置语言。

**一般设置**

Tools >> Preferences 可以设置一些常有的选项，大部分选项默认即可，如果有特殊要求看看也明白如何设置。但是其中有一项的设置很重要，就是 Network Connections 这一项。如果有亻弋王里，最好在这些填写上，因为  RSSOwl 查看全文功能在国内需要用到这一项，不然对于某些不输出全文的订阅还是查看不了全文。另外对于土番夕卜的 RSS 也订阅不了。

[![RSSOwl：免费 RSS 订阅软件评测](https://dn-howsci.qbox.me/2016031201.png)](https://www.howsci.com/3288.html)

如果没有亻弋王里，我推荐一个：[锐壳](http://www.rkidc.net/?refcode=RLGTNHMPZ6A72QFDX)，注册后在个人中心中购买安全上网即可，现在一年 200，永久性九折优惠码: RKIDC_9。一般设置方法可以参阅：[使用谷歌浏览器+Shadowsocks安全上网](https://www.howsci.com/shadowsocks.html)

菜单 View >> Layout 是更改布局的，这个有时也可能用到。

如果想关闭或者最小化 RSSOwl 时到系统托盘图标，要在 Tools >> Preferences >> View 中选中「when closing RRSOwl」

**导入订阅**

依次打开菜单 File >> Import 可以导入一些订阅源

[![RSSOwl：免费 RSS 订阅软件评测](https://dn-howsci.qbox.me/2016031202.png)](https://www.howsci.com/3288.html)

**有三种导入方法**

- Import Feeds from a File or Website：导入其他订阅源导出的 OPML 文件
- Import Feeds mathing the following Topics：根据关键词导入一些订阅源
- Import Recommended  Feeds：导入[软件](https://www.howsci.com/tag/apps)推荐的一些订阅源

**内容筛选**

RSSOwl 最大的特色是可以通过滤件 Filter 筛选订阅源的内容。依次打开菜单 Tools >> News Filters >> New；或者在订阅内容上右击，在扩展菜单中打开 Create Filter…都可以打开创建滤件对话框。

[![RSSOwl：免费 RSS 订阅软件评测](https://dn-howsci.qbox.me/2016031203.png)](https://www.howsci.com/3288.html)

- Match all conditions：相当于逻辑运算符「和」，即要满足以下所有条件
- Match any conditions：相当于逻辑运算符「或」，即要满足以下所有条件中之一即可
- Match all：把当前所有订阅源都包括
- For news matching above conditions perform the following actions：此处是设置如果满足上面的条件时，采取何种操作。比如我设置的这个滤件，如果标题中含有「论文」的文章，都标记为重要。当然在下拉列表中还有很多其他的操作，甚至对于某些不想看的内容可以选择「Delete News」直接删除

滤件建立后，只是对建立时间后的内容起作用。如果对以往的订阅内容，如果想用滤件筛选，要打开菜单 Tools >> News Filters 中选中滤件，然后「Run Selected Filter…」运行一次滤件才可。注意想要滤件生效，还要在菜单 Tools >> News Filters 选中滤件，不选中滤件则当前滤件为禁止状态。

**另外在工具栏和阅读栏还有一些有用的功能**

[![RSSOwl：免费 RSS 订阅软件评测](https://dn-howsci.qbox.me/2016031204.png)](https://www.howsci.com/3288.html)

- Mark Read：标记为已读
- Mark All Read：全部标已读
- Archive：文章存档
- Label：打标签
- Sticky：置顶文章
- All News：显示所有文章；点示一下就是显示未读文章了
- Ungrouped：显示未分组的文章
- Full Content：全文输出，需要[挂亻弋王里](http://www.rkidc.net/?refcode=RLGTNHMPZ6A72QFDX)，否则不显示

其他的用法都很简单，一看就明白。

## 使用感受

经过短暂的使用，的确感受到了 RSSOwl 的强大。

首先这个[软件](https://www.howsci.com/tag/apps)免费是不用说的，在导入 OPML 文件时还能保持 OPML 文件的目录结构是很不错的。

其次，这个[软件](https://www.howsci.com/tag/apps)什么 RSS 都可以订阅，至于是什么，你懂的。但是对于某些 RSS，前提是你要有一个[亻弋王里](http://www.rkidc.net/?refcode=RLGTNHMPZ6A72QFDX)。

第三，RSSOwl 支持全文输出。我们订阅 RSS 的目的就是为了不用打开网站，但是某些网站不支持全文输出就比较蛋疼了，当然也包括[科研动力](http://https//www.howsci.com)，这个是以前某个段时间被人伤了搞上的，在此我承认错误，呵呵。今后科研动力的 RSS 全部是全文输出。但是全文输出的前提也是你要有一个[亻弋王里](http://www.rkidc.net/?refcode=RLGTNHMPZ6A72QFDX)~~~~

其实上面这些都不是最主要的，最主要的是 RSSOwl 强大的滤件功能。通过创建不同的滤件，对订阅源的内容进行初步的筛选。我没有具体数过我订阅了多少网站，但是肯定很多，多到看不过来。每天的未读就上万。如果这么多未读的我一个个的去看，能累死宝宝了。因此滤件此时就非常重要了。根据不同的条件创建不同的滤件，对订阅内容自动筛选，留下自己想看的，这会更有效率。

另外，RSSOwl 还可以归档和置顶某些文章，这对将来温习一下会有许多帮助。

总之，RSSOwl 是一个不错的软件，值得一试。