(function() {
  'use strict';

  // Your code here...
  function textNodesUnder(el){
    var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
    while(n=walk.nextNode()) a.push(n);
    return a;
  }
  
  //防反跳
  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  
  function nodesToArray(nodeList) {
    if (!(nodeList) instanceof NodeList) return [];
    return Array.prototype.slice.call(nodeList, 0);
  }
  
  function selectAll(selector) {
    return document.querySelectorAll(selector);
  }
  
  function select(selector) {
    return document.querySelector(selector);
  }
  
  //语法分析器
  function parseURL(url) {
      var parser = document.createElement('a'),
          searchObject = {},
          queries, split, i;
      //让浏览器执行完成工作 
      parser.href = url;
      //将查询字符串转换为对象
      queries = parser.search.replace(/^\?/, '').split('&');
      for( i = 0; i < queries.length; i++ ) {
          if (!queries[i]) continue;
          split = queries[i].split('=');
          searchObject[split[0]] = split[1];
      }
      return {
          protocol: parser.protocol,
          host: parser.host,
          hostname: parser.hostname,
          port: parser.port,
          pathname: parser.pathname,
          search: parser.search,
          searchObject: searchObject,
          hash: parser.hash
      };
  }
  
  //
  function toQueryString(obj) {
    var parts = [];
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
        }
    }
    return parts.join("&");
  }
  
  var input = `
  
  王心凌,黄子韬,丽颖,杨幂,嘉欣,李敏镐,朴树,大保健,强东,泽天,奶茶妹妹,大S,小S,希拉里,川普,蔡英文,政治宣传,共产主义,政体,社会主义,马克思主义,民进党,周迅,李敖,周立波,咪蒙,叶良辰,鹿晗,思聪,方舟子,習包子,司马南,赵薇,马蓉,馨予,冰冰,子怡,亦凡,郑爽,陈伟霆,柳岩,张翰,关晓彤,李晨,白百何,谢霆锋,江疏影,贾斯汀,韩雨芹,冯提莫,陶辰宇,菜花甜妈,张国荣,乔任梁,王力宏,林正英,吴奇隆,景甜,张柏芝,朱茵,姚贝娜,薛之谦,甘婷婷,张靓颖,林青霞,金泫雅,窦唯,宋小宝,房祖名,李天佑,汪苏泷,关之琳,井柏然,王祖贤,王祖蓝,菲儿,娄艺潇,钟汉良,李易峰,邓紫棋,孙艺珍,黄晓明,张颂文,张嘉译,赵立新,刘昊然,干露露,宋承宪,车晓,姜文,河智苑,李双江,孙艺洲,萧敬腾,郭美美,兽兽,芙蓉姐姐,龄童,刘晓庆,爱新觉罗,毕福剑,迷妹,H漫,易峰,颜扣,撕逼,草泥马,次奥,操你,尼玛,女郎,双修,注孤生,尤物,人人贷,澳门赌场,大乐透,娱乐城,七星彩,葡京,威尼斯人,幸运28,鬼畜,韩流,王者荣耀,绝地求生,英雄联盟,乱斗,报应惨重,下地狱,果报,惨烈,畜生道,伊斯兰
  墙外新闻,三胖,金正恩,川普,安倍,泽民,北京方面,北京政府,中共,習總,当局,小粉红,禁闻,法轮,李洪志,摘器官,新唐人,民主党,共和党,方舟子,支那,大纪元,墙外楼,达赖,天皇,藏独,港独,易战,台独,迫害,中日,敵人,李克强,明镜周刊,穆斯林,自干五,回民
  丰满,色魔,香艳,美艳,艳星,美眉,不可描述,大尺度,胴体,内涵图,酥胸,丁字裤,清纯,撩人,性感,美乳,火辣,大胸,女神,白皙,妖娆,菊花,爆菊,豪乳,热裤,湿身,模特,妩媚,靓丽,羞羞,风骚,AV在,线AV,AV天堂,老虎机,桃色,番号,月天,情色,奶子,大奶,露点,素人,粉木耳,基情,捡肥皂,约炮,你懂的,潘金莲,节操,XXOO,18禁,女星,巨乳,成人版,成人用,成人影,成人视,色欲,情欲,伦理片,黄片,簧片,A片,极度,轮奸,比基尼,口交,性交,草比,操逼,咪咪,床戏,鸡巴,几把,基霸,三级片,走光,脱衣,性奴,女仆,做爱,性爱,看片,爽片,人妻,打飞机,乱伦,女优,苍老师,性生活,福利视频,福利电影,无毛,女厕,小电影,岛国,彼女,性骚扰,性行为,少妇,裸女,色狼,同居,霸道总裁,低胸,御姐,上床,打炮,丝袜,开房,草榴,猥亵,强奸,偷拍,裸体,性侵,绯闻,嫩模,车模,腿模,名模,啪啪啪,会所,自慰,尻,无码,爱爱,纹身,射精,鸡鸡,成人电,金瓶梅,同城交友,p2psearch,成人网,交友聊天室,六合彩,在线聊天室,人体艺,快播,qvod,种子搜索,不雅,波多,苍井,加藤,尼大木,松岛,麻生,明步,小泽,玛利亚,冲田,莉亚,泽尻,天海,饭岛,橘梨,滨崎,堀北,理惠,西野,麻衣,雨宫,杉原,琴音,福原,梨香,希崎,里香,板野,早乙,藤井,佑希,由奈,逢泽,莉娜,樱井,佐佐木,桃谷,杏梨,爱野,美惠,坛蜜,茅野,黑木,水菜,田中,早川,泽城,美雪,杰西卡,百惠,安室奈,由衣,菜菜子,中森,明菜,明纱,千绘,大岛,坂本,藤原,纪香,香椎,由宇,川岛,由纪,月枫,山田,樱木,井上,真央,加利,顺子,上野,树里,麻里,美穗,朝美,武井,若菜,红音,坂惠,篠田,桐谷,露依,美玲,星野,亚希,穗香,伊藤,宫泽,松井玲,奈,观月,石川,由依,佐藤,利奈,吉泽,雏乃,麻仓,吉高,奈奈,友美,中谷,美纪,大谷,武藤,荣仓,吉濑,智子,相崎,村上,丽奈,斋藤,千和,岛崎,遥香,本田,松井,裕香,松田,美菜,野泽,雅子,佐江,大冢,小百合,春奈,植田,佳奈,纱季,远藤绫,小松,松峰,莉璃,久纱,秋山,莉奈,彩芽,穗花,藤泽,美羽,伊濑,长谷川,黑柳,里奈,沙苗,成海,美空,神奈川,京都,川滨,萝拉,奈美,梨乃,饭田,饭冢,泷泽,宫本,宫岛,黑崎,奈央,吉川,久保,美希,未希,臼井,铃川,麻川,美绪,美月,石曈,酒井,凉子,美结,丽子,奈子,真希,小仓,罗拉,神谷,玛莉亚,露衣,濑户,美里,真里,北原,花泽,原纱,央莉,濑亚,美莉,按摩院,发廊,美腿,美胸,美乳,美脚,早泄,早泻,阴道,阴茎,秀下限,成人网站,女兵,女上司,超模,女装,婚外情,一夜情,长腿,玉腿,破处,奸杀,轮奸,妓,私房,里番,痴女,痴汉,女優,愛愛,調教,有碼,奉仕,娘を,销魂,援交,内射,潮喷,肛交,炮友,口暴,口爆,颜射,绝色,乳头,乳沟,奶头,全裸,鲍鱼,白虎女,潮吹,淫水,狂插,抽插,毛片,东京热,1pond,Kristin,麻美,由真,钉宫,波多野,西野翔,渡边,结衣,麻友,绮罗,恭子,敦子,沙织,中岛,菊地,坛蜜,工藤,悠木,里菜,宫崎,阳子,宮本,雪野,有村,铃木,桥本,音实,藤浦,谷原,木南,日菜,希美,安土,咲,拉姆,夏芽,石优,杞菜,北野,爱里,彩美,森川,宫地,上原,深川,茉莉,波多,铃村,莉久,风间,椎名,宇都,本田,池田,沢,原干惠,今野杏,小嶋陽菜
  
  `.trim();


 //将原始关键字配置转为keywards数组
 var keywords = [];
  function processRawKeywords (input) {
    var separators = ',，;； 　'.split('');
    
  
    if (!input || !input.trim()) return keywords;
  
    var lines = input.replace("\r", "").split("\n").filter(function (line) {
      return !line.startsWith('-') && !!line.trim();
    });
  
    lines.forEach(function (line) {
      var words = line.split(new RegExp(separators.join('|')))
                    .map(function (item) { return item.trim(); })
                    .filter(function (item) { return !!item; });
      keywords = keywords.concat(words);
    });
    return keywords;
  }
  
  function toAmazon(node) {
    var parts = parseURL(node.href);
    if (parts.pathname.indexOf('ref=') === -1) {
      parts.pathname += '/ref=as_li_ss_tl'
    } else {
      parts.pathname = parts.pathname.replace(/ref=.+$/, "ref=as_li_ss_tl");
    }
    parts.searchObject.tag = 'zhihu02-23';
    parts.searchObject.linkCode = 'as2';
    parts.searchObject.camp = '536';
    parts.searchObject.creative = '3132';
    node.href = ''.concat(
      parts.protocol,
      '//',
      parts.hostname,
      parts.pathname,
      '?',
      toQueryString(parts.searchObject),
      parts.hash
    );
  }
  
  function toITunes(node) {
    var parts = parseURL(node.href);
    parts.searchObject.at = '1010l9jL';
    node.href = ''.concat(
      parts.protocol,
      '//',
      parts.hostname,
      parts.pathname,
      '?',
      toQueryString(parts.searchObject),
      parts.hash
    );
  }
  
  
  var defaultRawKeywords = `
  
  王心凌,黄子韬,丽颖,杨幂,嘉欣,李敏镐,朴树,大保健,强东,泽天,奶茶妹妹,大S,小S,希拉里,川普,蔡英文,政治宣传,共产主义,政体,社会主义,马克思主义,民进党,周迅,李敖,周立波,咪蒙,叶良辰,鹿晗,思聪,方舟子,習包子,司马南,赵薇,马蓉,馨予,冰冰,子怡,亦凡,郑爽,陈伟霆,柳岩,张翰,关晓彤,李晨,白百何,谢霆锋,江疏影,贾斯汀,韩雨芹,冯提莫,陶辰宇,菜花甜妈,张国荣,乔任梁,王力宏,林正英,吴奇隆,景甜,张柏芝,朱茵,姚贝娜,薛之谦,甘婷婷,张靓颖,林青霞,金泫雅,窦唯,宋小宝,房祖名,李天佑,汪苏泷,关之琳,井柏然,王祖贤,王祖蓝,菲儿,娄艺潇,钟汉良,李易峰,邓紫棋,孙艺珍,黄晓明,张颂文,张嘉译,赵立新,刘昊然,干露露,宋承宪,车晓,姜文,河智苑,李双江,孙艺洲,萧敬腾,郭美美,兽兽,芙蓉姐姐,龄童,刘晓庆,爱新觉罗,毕福剑,迷妹,H漫,易峰,颜扣,撕逼,草泥马,次奥,操你,尼玛,女郎,双修,注孤生,尤物,人人贷,澳门赌场,大乐透,娱乐城,七星彩,葡京,威尼斯人,幸运28,鬼畜,韩流,王者荣耀,绝地求生,英雄联盟,乱斗,报应惨重,下地狱,果报,惨烈,畜生道,伊斯兰
  墙外新闻,三胖,金正恩,川普,安倍,泽民,北京方面,北京政府,中共,習總,当局,小粉红,禁闻,法轮,李洪志,摘器官,新唐人,民主党,共和党,方舟子,支那,大纪元,墙外楼,达赖,天皇,藏独,港独,易战,台独,迫害,中日,敵人,李克强,明镜周刊,穆斯林,自干五,回民
  丰满,色魔,香艳,美艳,艳星,美眉,不可描述,大尺度,胴体,内涵图,酥胸,丁字裤,清纯,撩人,性感,美乳,火辣,大胸,女神,白皙,妖娆,菊花,爆菊,豪乳,热裤,湿身,模特,妩媚,靓丽,羞羞,风骚,AV在,线AV,AV天堂,老虎机,桃色,番号,月天,情色,奶子,大奶,露点,素人,粉木耳,基情,捡肥皂,约炮,你懂的,潘金莲,节操,XXOO,18禁,女星,巨乳,成人版,成人用,成人影,成人视,色欲,情欲,伦理片,黄片,簧片,A片,极度,轮奸,比基尼,口交,性交,草比,操逼,咪咪,床戏,鸡巴,几把,基霸,三级片,走光,脱衣,性奴,女仆,做爱,性爱,看片,爽片,人妻,打飞机,乱伦,女优,苍老师,性生活,福利视频,福利电影,无毛,女厕,小电影,岛国,彼女,性骚扰,性行为,少妇,裸女,色狼,同居,霸道总裁,低胸,御姐,上床,打炮,丝袜,开房,草榴,猥亵,强奸,偷拍,裸体,性侵,绯闻,嫩模,车模,腿模,名模,啪啪啪,会所,自慰,尻,无码,爱爱,纹身,射精,鸡鸡,成人电,金瓶梅,同城交友,p2psearch,成人网,交友聊天室,六合彩,在线聊天室,人体艺,快播,qvod,种子搜索,不雅,波多,苍井,加藤,尼大木,松岛,麻生,明步,小泽,玛利亚,冲田,莉亚,泽尻,天海,饭岛,橘梨,滨崎,堀北,理惠,西野,麻衣,雨宫,杉原,琴音,福原,梨香,希崎,里香,板野,早乙,藤井,佑希,由奈,逢泽,莉娜,樱井,佐佐木,桃谷,杏梨,爱野,美惠,坛蜜,茅野,黑木,水菜,田中,早川,泽城,美雪,杰西卡,百惠,安室奈,由衣,菜菜子,中森,明菜,明纱,千绘,大岛,坂本,藤原,纪香,香椎,由宇,川岛,由纪,月枫,山田,樱木,井上,真央,加利,顺子,上野,树里,麻里,美穗,朝美,武井,若菜,红音,坂惠,篠田,桐谷,露依,美玲,星野,亚希,穗香,伊藤,宫泽,松井玲,奈,观月,石川,由依,佐藤,利奈,吉泽,雏乃,麻仓,吉高,奈奈,友美,中谷,美纪,大谷,武藤,荣仓,吉濑,智子,相崎,村上,丽奈,斋藤,千和,岛崎,遥香,本田,松井,裕香,松田,美菜,野泽,雅子,佐江,大冢,小百合,春奈,植田,佳奈,纱季,远藤绫,小松,松峰,莉璃,久纱,秋山,莉奈,彩芽,穗花,藤泽,美羽,伊濑,长谷川,黑柳,里奈,沙苗,成海,美空,神奈川,京都,川滨,萝拉,奈美,梨乃,饭田,饭冢,泷泽,宫本,宫岛,黑崎,奈央,吉川,久保,美希,未希,臼井,铃川,麻川,美绪,美月,石曈,酒井,凉子,美结,丽子,奈子,真希,小仓,罗拉,神谷,玛莉亚,露衣,濑户,美里,真里,北原,花泽,原纱,央莉,濑亚,美莉,按摩院,发廊,美腿,美胸,美乳,美脚,早泄,早泻,阴道,阴茎,秀下限,成人网站,女兵,女上司,超模,女装,婚外情,一夜情,长腿,玉腿,破处,奸杀,轮奸,妓,私房,里番,痴女,痴汉,女優,愛愛,調教,有碼,奉仕,娘を,销魂,援交,内射,潮喷,肛交,炮友,口暴,口爆,颜射,绝色,乳头,乳沟,奶头,全裸,鲍鱼,白虎女,潮吹,淫水,狂插,抽插,毛片,东京热,1pond,Kristin,麻美,由真,钉宫,波多野,西野翔,渡边,结衣,麻友,绮罗,恭子,敦子,沙织,中岛,菊地,坛蜜,工藤,悠木,里菜,宫崎,阳子,宮本,雪野,有村,铃木,桥本,音实,藤浦,谷原,木南,日菜,希美,安土,咲,拉姆,夏芽,石优,杞菜,北野,爱里,彩美,森川,宫地,上原,深川,茉莉,波多,铃村,莉久,风间,椎名,宇都,本田,池田,沢,原干惠,今野杏,小嶋陽菜
  
  `.trim();
  
  // var brandIcon = '✿';
  var brandIcon = '.';
  
  
  var strategies = {
    'hideMatchingWords': {label: '隐藏匹配词'},
    'hideMatchingBlock': {label: '隐藏整块文字'}
  };
  var defaultStrategy = 'hideMatchingBlock';
  
  

 // (function () {

    var total = 0;
    var run = debounce(function () {
  
      chrome.storage.sync.get({
  
        on: false,
        keywords: ['a^'],
        strategy: 'remove',
  
      }, function (options) {
  
        if (options.on !== true || !options.keywords.length) {
          return;
        }
   
        var anchor = ':::';
        var nodeID = 1;
        var nodes = {};
        var text = '';
        textNodesUnder(document.body).forEach(function (node) {
          var data = node.data.replace(/\\r\\n/, "").trim();
          if (data.length < 3) return;
          text += 'n' + nodeID + anchor + data + "\n";
          nodes['n' + (nodeID++)] = node;
        });
  
        var re = new RegExp("n\\d+" + anchor + ".*(" + keywords.join('|') + ').*$', 'igm');
        var matches = text.match(re);
  
        // console.log(text);
        console.log('options', options);
        console.log('matches', matches);
  /* 
        if (!matches || !matches.length) {
          chrome.runtime.sendMessage(null, {
            name: 'keywordsWillBeProcessed',
            totalCount: total
          });
          return;
        }
   */
        total += matches.length;
  /* 
        chrome.runtime.sendMessage(null, {
          name: 'keywordsWillBeProcessed',
          totalCount: total
        });
   */
        matches.forEach(function (match) {
          var id = match.split(anchor)[0];
          var node = nodes[id];
          console.log(node.data, strategy);
       /*    if (strategy === 'hideMatchingWords') {
            node.data = node.data.replace(new RegExp(keywords.join('|'), 'ig'), '*~%');
          } else { */
            node.data = '.'.repeat(node.data.length);
         /*  } */
        });
  
      });
    }, 2000);
  
    run();
  
    window.addEventListener('focus', run);
    document.addEventListener('DOMNodeInserted', run);
    //  chrome.storage.onChanged.addListener(run);
  
  //}());
  


})();