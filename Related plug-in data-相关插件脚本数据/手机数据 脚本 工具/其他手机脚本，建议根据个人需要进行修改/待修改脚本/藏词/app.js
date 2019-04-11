function textNodesUnder(el){
  var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
  while(n=walk.nextNode()) a.push(n);
  return a;
}

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

function parseURL(url) {
    var parser = document.createElement('a'),
        searchObject = {},
        queries, split, i;
    // Let the browser do the work
    parser.href = url;
    // Convert query string to object
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

function toQueryString(obj) {
  var parts = [];
  for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
          parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
      }
  }
  return parts.join("&");
}

// Turn raw keywords configuration to keywards array
function processRawKeywords (input) {
  var separators = ',，;； 　'.split('');
  var keywords = [];

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

男神，女神，女汉子，黑木耳，粉木耳，婊，长发及腰，颜值，颜扣
撕逼，傻逼，傻逼，装逼，基情，基友，屌丝，捡肥皂，直男癌，小鲜肉
呵呵哒，么么哒，萌萌哒，草泥马，卧槽，次奥，操你，尼玛，呵呵
真心，走心，讲真，走肾，有钱，任性，duang
粑粑，麻麻，乃们，伦家，母上大人，射射，肿么，醉了，这货，给跪了
碉堡，约炮，然并卵，正能量，高端大气，叶良辰，高端大气，霸气侧漏
神马，有木有，伤不起，你懂的，然后就没有然后，钱途，即视感
元芳，你怎么看，认真你就，不觉明厉，不动然拒，细思极恐，注孤生，的节奏

`.trim();

// var brandIcon = '✿';
var brandIcon = '.';


var strategies = {
  'hideMatchingWords': {label: '隐藏匹配词'},
  'hideMatchingBlock': {label: '隐藏整块文字'}
};
var defaultStrategy = 'hideMatchingBlock';
