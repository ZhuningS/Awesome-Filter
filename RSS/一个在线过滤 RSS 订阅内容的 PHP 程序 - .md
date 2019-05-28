# [一个在线过滤 RSS 订阅内容的 PHP 程序](https://blog.sandtears.com/2019/04/29/self-hosted-php-rss-filter.html)

- 作者: [sandtears](https://blog.sandtears.com/author/1/)
-  

- 时间: 2019-04-29
-  

- 分类: [折腾](https://blog.sandtears.com/category/toy/)

一般而言过滤 RSS 订阅内容都是 RSS 客户端阅读器的工作，但是有些比较特殊的客户端并不支持过滤 —— 比如 PT 站常用的下载工具 [uTorrent](https://www.utorrent.com/) 等，而网站提供的 RSS 过滤参数可能无法满足我们的个性化需求，所以有时我们需要一些在线工具对 RSS 订阅源进行一次过滤，然后使用客户端订阅过滤后的结果。

事实上对于这种需求已经有很多现成的在线工具，比如 [siftrss](https://siftrss.com/)，但是公开的服务又存在隐私问题，所以自建 RSS 过滤服务成了最好的选择。

本文介绍了一款在线过滤 RSS 订阅内容的 PHP 程序 [rss-filter-php](https://github.com/spenibus/rss-filter-php)，可以方便地部署在 VPS 或者虚拟主机上。

- [部署程序](https://blog.sandtears.com/2019/04/29/self-hosted-php-rss-filter.html#%E9%83%A8%E7%BD%B2%E7%A8%8B%E5%BA%8F)
- [配置文件详解](https://blog.sandtears.com/2019/04/29/self-hosted-php-rss-filter.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E8%AF%A6%E8%A7%A3)
- [防止被人社工或穷举入口目录](https://blog.sandtears.com/2019/04/29/self-hosted-php-rss-filter.html#%E9%98%B2%E6%AD%A2%E8%A2%AB%E4%BA%BA%E7%A4%BE%E5%B7%A5%E6%88%96%E7%A9%B7%E4%B8%BE%E5%85%A5%E5%8F%A3%E7%9B%AE%E5%BD%95)

## 部署程序

毕竟是 PHP，程序的部署相对简单，只需要下载[程序对应的 zip 文件](https://github.com/spenibus/rss-filter-php/archive/master.zip)并上传到配置好的站点目录下即可，站点需启用 PHP 支持，并安装 php_curl 扩展。

为了提高安全性，所以一个必要的操作就是禁止访问配置文件所在的目录。对于 Apache，Cpanel 虚拟主机等等其他兼容多级`.htaccess` 文件的站点程序，不需要进行任何配置，上传的文件中已经包含了所需的配置。

对于 Nginx 用户，则需要在站点对应的配置文件中添加如下内容：

```nginx
location ^~ /config {
    deny all;
}

location ^~ /class {
    deny all;
}
```

配置完成之后访问指定 url 即可获取过滤后的订阅源，url 格式为：

```
http://example.com/index.php?config=<配置文件名>
```

## 配置文件详解

配置文件需要放在 `config/` 目录下，以`.xml` 为结尾。

**配置文件中出现的匹配式是符合 PCRE 标准的正则表达式，利用 PHP 中的 preg_match 函数匹配。**

配置文件的基本格式如下：

```xml
<config>
    <title>CnBeta过滤源</title>
    <ruleSet>
        <source>https://www.cnbeta.com/backend.php</source>
        <timeout>10</timeout>
        <userAgent>Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36</userAgent>
        <titleDuplicateRemove>false</titleDuplicateRemove>
        <linkDuplicateRemove>false</linkDuplicateRemove>
        <rules>
            <titleMatch>/Apple/si</titleMatch>
            <titleMatchNot>/iPad/si</titleMatchNot>
            <before>2018-12-31 23:59:59 +1200</before>
            <after>2020-12-31 23:59:59 +1200</after>
            <olderThan>30m</olderThan>
            <newerThan>1d</newerThan>
        </rules>
    </ruleSet>
</config>
```

虽然从各个配置名应该能看出一二，不过还是简单的介绍一下。

- title
  - 最终输出的订阅源标题名
  - 仅能出现一次
- ruleSet
  - 可以出现多次，匹配不同 ruleSet 的条目将会混合输出
- source
  - 包含一个指向原始源的 URL 地址
  - 在一个 ruleSet 中可以出现多次
- timeout
  - 读取原始源的超时时间
- titleDuplicateRemove
  - 是否合并相同标题的条目
  - 默认设置为 false
- linkDuplicateRemove
  - 是否合并指向相同链接的条目
  - 默认设置为 false
- titleMatch
  - 匹配标题中出现指定内容的条目
  - 多个匹配之间是 `OR` 的关系，出现任何一个都会被匹配
- titleMatchMust
  - 与 titleMatch 类似，但是与其他匹配之间是 `AND` 的关系，必须全都符合才能匹配
- titleMatchNot
  - 丢弃标题中出现指定内容的条目
  - 只要符合任何一条 titleMatchNot，就会立即丢弃条目
- before
  - 匹配指定时间之前的内容
  - 指定时间需要能够被 `strtotime()` 函数解析
- after
  - 匹配指定时间之后的内容
  - 指定时间需要能够被 `strtotime()` 函数解析
- olderThan
  - 类似 before，但是格式改为相对时间，如 7d 代表 7 天
    - s 代表秒
    - m 代表分
    - h 代表小时
    - d 代表天
- newerThan
  - 类似 after，其余同上。

## 防止被人社工或穷举入口目录

配置文件中本身没有对客户端进行鉴权的配置项，而且客户端功能上很可能也不支持验证。

一个可行的替代方案是重命名配置文件，添加一段随机生成的字符串来防止社工或穷举。

比如对于上文的配置文件 `cnbeta.xml` 可以改名为 `H2dKFVUciwJz8sm4IPYMl9R-cnbeta.xml`，这样对应的 url 就变成了：

```
http://example.com/index.php?config=H2dKFVUciwJz8sm4IPYMl9R-cnbeta
```

标签: [PT](https://blog.sandtears.com/tag/PT/), [rss](https://blog.sandtears.com/tag/rss/), [过滤](https://blog.sandtears.com/tag/%E8%BF%87%E6%BB%A4/) , [php](https://blog.sandtears.com/tag/php/), [自建](https://blog.sandtears.com/tag/%E8%87%AA%E5%BB%BA/) , [self-hosted](https://blog.sandtears.com/tag/self-hosted/)