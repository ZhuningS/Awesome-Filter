(function () {

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

      var re = new RegExp("n\\d+" + anchor + ".*(" + options.keywords.join('|') + ').*$', 'igm');
      var matches = text.match(re);

      // console.log(text);
      console.log('options', options);
      console.log('matches', matches);

      if (!matches || !matches.length) {
        chrome.runtime.sendMessage(null, {
          name: 'keywordsWillBeProcessed',
          totalCount: total
        });
        return;
      }

      total += matches.length;

      chrome.runtime.sendMessage(null, {
        name: 'keywordsWillBeProcessed',
        totalCount: total
      });

      matches.forEach(function (match) {
        var id = match.split(anchor)[0];
        var node = nodes[id];
        console.log(node.data, options.strategy);
        if (options.strategy === 'hideMatchingWords') {
          node.data = node.data.replace(new RegExp(options.keywords.join('|'), 'ig'), '*~%');
        } else {
          node.data = '.'.repeat(node.data.length);
        }
      });

    });
  }, 2000);

  run();

  window.addEventListener('focus', run);
  document.addEventListener('DOMNodeInserted', run);
  chrome.storage.onChanged.addListener(run);

}());
