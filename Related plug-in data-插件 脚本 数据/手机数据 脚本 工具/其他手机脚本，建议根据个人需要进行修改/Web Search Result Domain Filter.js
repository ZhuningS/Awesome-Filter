// ==UserScript==
// @name        Web Search Result Domain Filter
// @namespace   WebSearchResultDomainFilter
// @description Filter search result based on domain names on web search of Bing, DuckDuckGo, Google, Yahoo. Some include search for news, books, etc. All exclude search for images and videos.
// @author      jcunews
// @homepageURL https://greasyfork.org/en/users/85671-jcunews
// @version     1.0.1
// @license     GNU AGPLv3
// @include     *://www.bing.com/search*
// @include     *://www.bing.com/news/search*
// @include     *://duckduckgo.com/*
// @include     *://www.google.*/search*
// @include     *://www.google.*.*/search*
// @include     *://search.yahoo.com/yhs/search*
// @include     *://*.search.yahoo.com/search*
// @grant       none
// ==/UserScript==

(function(filter, rx, getItems, getHostName, itemSelector, itemLinkSelector, setupEditFilterLink, cssPatch, items, ele, i, j, excLink, link, createFilterLink, filterEditor, gg) {
  filter = JSON.parse(localStorage.WebSearchResultDomainFilter || "[]");
  rx = filter.join("|").replace(/\./g, "\\.") ? (new RegExp(filter.join("|").replace(/\./g, "\\."))) : null;
  cssPatch = "";
  excLink = document.createElement("DIV");
  filterEditor = document.createElement("DIV");
  gg = location.hostname.indexOf(".google.") > 0;

  function trim(s) {
    return s.replace(/^(\s+|\r+|\n+)|(\s+|\r+|\n+)$/g, "");
  }
  function updateFilter() {
    localStorage.WebSearchResultDomainFilter = JSON.stringify(filter);
    rx = filter.join("|").replace(/\./g, "\\.");
    rx = rx ? (new RegExp(filter.join("|").replace(/\./g, "\\."))) : null;
  }
  function abortEvent(ev) {
    ev.preventDefault();
    if (ev.stopPropagation) ev.stopPropagation();
    if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();
  }
  function processItems(items, i, link, lnk, hn) {
    if (getItems) {
      items = getItems();
    } else items = document.querySelectorAll(itemSelector);
    for (i = items.length-1; i >= 0; i--) {
      link = items[i].querySelector(itemLinkSelector);
      if (!link) continue;
      if (!link.parentNode.querySelector(".domainFilterLink")) {
        lnk = excLink.cloneNode(true);
        lnk.addEventListener("click", function(ev) {
          hn = getHostName(this.parentNode.querySelector("A"));
          if (!confirm('Do you want to hide all search result from below domain name?\n\n' + hn + '\n\nNote:\nSubdomain is not included.\ni.e. hiding "abc.com" will not hide "sub.abc.com" or vice versa.')) return;
          filter.push(hn);
          updateFilter();
          processItems();
          abortEvent(ev);
        }, true);
        link.parentNode.appendChild(lnk);
        if (gg && ((lnk.offsetLeft + lnk.offsetWidth) >= link.parentNode.offsetWidth)) {
          lnk.style.cssText = "position:absolute;top:" + (((link.parentNode.offsetHeight - lnk.offsetHeight) / 2) >> 0) + "px;right:-" + lnk.offsetWidth + "px;margin-left:0";
          link.parentNode.parentNode.insertBefore(lnk, link.parentNode);
        }
      }
      if (rx) {
        items[i].style.display = rx.test(getHostName(link)) ? "none" : "";
      } else items[i].style.display = "";
    }
  }

  if ((/www\.bing\.com\/search/).test(location.href)) {
    itemSelector = "#b_results .b_algo";
    itemLinkSelector = "h2 > a";
    createFilterLink = function() {
      editFilterLink = document.createElement("A");
      editFilterLink.style.marginLeft = "3ex";
      return b_tween.appendChild(editFilterLink);
    };
    cssPatch = '#b_results{width:580px}';
  } else
  if ((/www\.bing\.com\/news\/search/).test(location.href)) {
    itemSelector = "#algocore .newsitem";
    itemLinkSelector = ".title";
    createFilterLink = function(ele) {
      editFilterLink = document.createElement("A");
      editFilterLink.style.cssText = 'float:left;margin:.85em 0 0 3ex';
      ele = document.querySelector(".nf .menu > ul");
      return ele.appendChild(editFilterLink);
    };
    cssPatch = '.search .newsitem .caption a.title{display:inline!important}';
  } else
  if ((/duckduckgo\.com/).test(location.hostname)) {
    itemSelector = "#links .result";
    itemLinkSelector = ".result__title > a";
    createFilterLink = function(ele) {
      ele = document.querySelector(".organic-filters");
      if (!ele || !ele.childElementCount) return;
      editFilterLink = document.createElement("A");
      return ele.appendChild(editFilterLink);
    };
    cssPatch = '#b_results{width:580px}';
    if (window.nrn) {
      window._nrn = window.nrn;
      window.nrn = function(res) {
        res = window._nrn.apply(this, arguments);
        processItems();
        return res;
      };
    }
  } else
  if ((/www\.google\./).test(location.hostname)) {
    itemSelector = "#rso .g";
    itemLinkSelector = ".r a";
    createFilterLink = function() {
      editFilterLink = document.createElement("A");
      editFilterLink.style.marginLeft = "10ex";
      return resultStats.appendChild(editFilterLink);
    };
  } else
  if ((/search\.yahoo\.com/).test(location.hostname)) {
    itemLinkSelector = ".title > a, h4 > a";
    getItems = function() {
      return Array.prototype.slice.call(document.querySelectorAll(".searchCenterMiddle > li, .compArticleList > li")).filter(
        function(v) {
          return !(/\bsys_/).test(v.firstElementChild.className);
        }
      );
    };
    createFilterLink = function(ele) {
      editFilterLink = document.createElement("A");
      if (window["refiner-time"]) {
        editFilterLink.style.cssText = 'margin-left:6ex';
        return window["refiner-time"].appendChild(editFilterLink);
      } else {
        ele = document.querySelector("#sidebar .bd");
        return ele.appendChild(editFilterLink);
      }
    };
    cssPatch = '.search .newsitem .caption a.title{display:inline!important}';
    getHostName = function(link, a) {
      a = unescape(link.href).match(/\/RU=(http.*?)\/R[A-Z]=/);
      if (a) {
        a = a[1].match(/\/\/(.*?)\//)[1];
      } else a = link.hostname;
      return a;
    };
  }
  if (!(getItems || itemSelector)) return;
  if (!getHostName) {
    getHostName = function(link) {
      return link.hostname;
    };
  }

  filterEditor.id = "filterEditor";
  filterEditor.innerHTML = `
<style>${cssPatch}
.domainFilterLink{display:inline-block;margin-left:1ex;border-radius:4px;padding:0 .5ex;background-color:#d00;color:#fff;font-size:10pt;font-weight:bold;cursor:pointer}
#domainFilterEditLink{cursor:pointer}
#domainFilterEditor{display:none;position:fixed;z-index:999;left:33%;top:20%;right:33%;border-radius:5px;padding:15px;background-color:#ccc}
#domainFilterEditor textarea{margin-bottom:15px;width:100%;min-width:100%;max-width:100%;height:20em;min-height:5em;max-height:30em;box-sizing:border-box}
#domainFilterEditor div{padding:.3em 1ex;background-color:#000;color:#fff;font-weight:bold}
#domainFilterEditor table{width:100%;text-align:center}
#domainFilterEditor button{width:10ex}
</style>
<div id="domainFilterEditor">
  <style></style>
  <div>Edit Domain Filter</div>
  <textarea id="domainFilterEditorEdit"></textarea>
  <table><tr>
    <td><button id="domainFilterEditorOk">OK</button></td>
    <td><button id="domainFilterEditorCancel">Cancel</button></td>
  </tr></table>
</div>`;
  document.body.appendChild(filterEditor);
  domainFilterEditorOk.addEventListener("click", function(ev, txt) {
    txt = trim(domainFilterEditorEdit.value);
    filter = txt.split("\n").reduce(function(prev, cur) {
      cur = trim(cur);
      if (cur) prev.push(cur);
      return prev;
    }, []);
    updateFilter();
    processItems();
    domainFilterEditor.firstElementChild.innerHTML = "";
    abortEvent(ev);
  }, true);
  domainFilterEditorCancel.addEventListener("click", function(ev) {
    domainFilterEditor.firstElementChild.innerHTML = "";
    abortEvent(ev);
  }, true);

  excLink.textContent = "X";
  excLink.title = "Exclude this domain name from search result";
  excLink.className = "domainFilterLink";

  (function addEditFilterLink() {
    if (editFilterLink = createFilterLink()) {
      editFilterLink.textContent = "Edit Domain Filter";
      editFilterLink.title = "Edit search result domain filter";
      editFilterLink.id = "domainFilterEditLink";
      editFilterLink.addEventListener("click", function(ev, txt) {
        txt = filter.join("\n");
        domainFilterEditorEdit.value = txt + (txt ? "\n" : "");
        domainFilterEditor.firstElementChild.innerHTML = `
body>*{display:none!important}
#filterEditor{display:block!important}
#domainFilterEditor{display:block}`;
        abortEvent(ev);
      }, true);
      processItems();
    } else setTimeout(addEditFilterLink, 1000);
  })();

})();
