
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete' && tab.url.indexOf('chrome://') === -1 && tab.url.indexOf('chrome-devtools://') === -1) {
    chrome.tabs.executeScript(null, {file: "app.js"});
    chrome.tabs.executeScript(null, {file: "contentscript.js"});
  }
});

// Two-state browser action icon
chrome.storage.onChanged.addListener(function (changes, namespace) {
  for (key in changes) {
    var storageChange = changes[key];
    if (key === 'on') {
      if (storageChange.newValue === true) {
        chrome.browserAction.setIcon({path: 'images/ba_icon_on.png'}, dummy);
      } else {
        chrome.browserAction.setIcon({path: 'images/ba_icon_off.png'}, dummy);
        setBadgeTextForCurrentTab('');
      }
    }
  }
});

// Init default options
chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.get({
    rawKeywords: defaultRawKeywords,
    keywords: processRawKeywords(defaultRawKeywords),
    strategy: defaultStrategy,
    on: true
  }, function (options) {
    chrome.storage.sync.set(options, function () {
      if (options.on === true) {
        chrome.browserAction.setIcon({path: 'images/ba_icon_on.png'}, dummy);
      } else {
        chrome.browserAction.setIcon({path: 'images/ba_icon_off.png'}, dummy);
        setBadgeTextForCurrentTab('');
      }
    });
  })
});

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.storage.sync.get('on', function (items) {
    chrome.storage.sync.set({
      on: !items.on
    });
  });
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.name === 'keywordsWillBeProcessed') {
    var text = (message.totalCount === 0) ? '' : message.totalCount.toString();
    setBadgeTextForCurrentTab(text);
  }
});

chrome.runtime.onUpdateAvailable.addListener(function(details) {
  chrome.runtime.reload();
});

////////////////////////////////////////////////

function dummy() {}

function setBadgeTextForCurrentTab(text) {
  chrome.tabs.query({active: true}, function (tabs) {
    chrome.browserAction.setBadgeText({
      text: text,
      tabId: tabs[0].id
    });
  });
}
