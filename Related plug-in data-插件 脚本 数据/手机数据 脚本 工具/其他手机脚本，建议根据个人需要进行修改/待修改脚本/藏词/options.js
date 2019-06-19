
var elements = {
  keywords: document.querySelector('[name=keywords]'),
  saveButton: document.querySelector('button.save'),
  strategy: document.querySelector('[name=strategy]')
};

// init
document.addEventListener('DOMContentLoaded', function () {
  // render available strategies
  Object.keys(strategies).forEach(function (k) {
    elements.strategy.innerHTML += `<option value="${k}">${strategies[k]['label']}</option>`;
  });
  // restore options
  chrome.storage.sync.get({
    rawKeywords: defaultRawKeywords,
    keywords: processRawKeywords(defaultRawKeywords),
    strategy: defaultStrategy
  }, function (options) {
    elements.keywords.value = options.rawKeywords;
    elements.strategy.querySelector('[value="' + options.strategy + '"]').setAttribute('selected', 'selected');
  });
  // save options
  elements.saveButton.addEventListener('click', function (evt) {
    chrome.storage.sync.set({
      rawKeywords: elements.keywords.value,
      keywords: processRawKeywords(elements.keywords.value),
      strategy: elements.strategy.value
    }, function (options) {
      window.close();
    });
  });
});
