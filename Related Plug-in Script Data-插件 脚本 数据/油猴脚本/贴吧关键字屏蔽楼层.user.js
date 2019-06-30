// ==UserScript==
// @name        贴吧关键字屏蔽楼层
// @namespace   http://jixun.org/
// @description 通过指定的关键字屏蔽一些楼层, 自带一个「超级简陋」的配置面板
// @include     http://tieba.baidu.com/*
// @version     1.0.0.7


// floor Loader; MIT license
// @require     https://greasyfork.org/scripts/216/code.user.js?06

// @grant       GM_registerMenuCommand
// ==/UserScript==

document.addEventListener ('DOMContentLoaded', function () {
	var _ = USO._;
	function _I (cb, timeout) {
		var iv = setInterval (function () {
			if (cb (iv) === true) {
				clearInterval (iv);
				console.log ('_I Destory.');
			}
		}, timeout || 700);
	}

	console.log ('贴吧关键字屏蔽::启动');
	var myDialog = null,
		dialogContent = _.C ('div'),
		dialogOverlay = _.C ('div'),
		confListDiv   = _.C ('div');
	_.append (dialogContent, '贴吧关键字屏蔽 (v1.0.0.7) by Jixun (* 贴吧会自动转换简体)', _.C('br'), '匹配到时: ');
	var selProc = _.C ('select'),
		optVal  = _.C ('input');
	var btnSave = _.C ('button'),
		btnAdd  = _.C ('button'),
		btnReset= _.C ('button'),
		btnClose= _.C ('button');
	optVal.setAttribute ('placeholder', '透明度, 介于 0~1 的小数');

	var confList = [];

	var __TYPE__TEXT  = 0,
		__TYPE__REGEX = 1;

	var __ACT__HIDE  = 0, // 隐藏
		__ACT__TRANS = 1; // 透明

	var customHider = _.C('style');
	document.body.appendChild (customHider);

	function loadConfig () {
		return _.json(localStorage.jx_tiebaPostBlocker, {
			keywords: [{
				type: __TYPE__TEXT,
				word: '泽火革'
			}],
			blockUser: '炮弹56,炮弹52',
			action: {
				type: __ACT__TRANS,
				opacity: 0.2
			}
		});
	}

	var conf = loadConfig ();
	function reloadStyle () {
		var newStyle  = '.red-stripe{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);background-color:#d9534f;background-size:40px 40px;text-align:center;border:1px solid #ccc;margin:-1px;color:#fff;text-shadow:#000 0 0 .5em;padding:.5em 0}.red-stripe::before{content:"共隐藏 " attr(hide-count) " 条帖子"}.jx_justHideThis{';
		if (conf.action.type == __ACT__TRANS) {
			newStyle += 'opacity:' + conf.action.opacity + ';'
				+ _.buildCSS ('transition', 'opacity .5s') + '}.jx_justHideThis:hover{opacity:1}';
		} else if (conf.action.type == __ACT__HIDE) {
			newStyle += 'display: none';
		}
		console.log ('生成样式表: ', customHider.innerHTML = newStyle + '}');
	}
	reloadStyle ();
	function compileRegex () {
		if (!conf.blockUser) conf.blockUser = '';
		conf.blackListUsers = conf.blockUser.replace(/\s*/g, '').split(',');
		_.each (conf.keywords, function (kw) {
			if (kw.type == __TYPE__REGEX) {
				try {
					kw.regex = new RegExp(kw.word, kw.mod || '');
				} catch (e) {
					kw.regex = {test: function () {return false}};
					alert ('正则 [' + kw.word + '] 编译失败: ' + e);
				}
			}
		});
	}
	compileRegex ();

	function refreshConfig () {
		conf = loadConfig ();
		reloadStyle ();
		compileRegex ();
	}

	function findRedStripe (that) {
		var prev = that.previousElementSibling;
		return prev ? prev.className == 'red-stripe'
						? prev
						: findRedStripe (prev)
					: null;
	}

	function markAsHide (post, keywd) {
		// 标记为隐藏 :3
		post.className += ' jx_justHideThis';
		post.setAttribute ('reason', keywd.word || keywd);

		if (conf.action.type == __ACT__HIDE) {
			var prev = post.previousElementSibling;
			if (prev && prev.hasAttribute ('reason')) {
				var stripe = findRedStripe (prev);
				if (stripe)
					stripe.setAttribute ('hide-count', parseInt(stripe.getAttribute ('hide-count')) + 1);
			} else {
				var hideNotice = _.C('div');
				hideNotice.className = 'red-stripe';
				hideNotice.setAttribute ('hide-count', 1);
				post.parentNode.insertBefore(hideNotice, post);
				// insertBefore (hideNotice, post);
			}
		}
	}

	function jx_do_filterPosts (post) {
		// console.log (post);
		if (post.className == 'red-stripe')
			return;
		var sUser = post.querySelector('.p_author_name').textContent;
		if (conf.blackListUsers.indexOf(sUser) != -1)
			return markAsHide(post, sUser);
		
		var postContent = post.querySelector('.p_content').textContent;
		for (var i=0, keywd; i<conf.keywords.length; i++) {
			keywd = conf.keywords[i];
			// console.log (keywd);
			if (keywd.type == __TYPE__TEXT) {
				if (postContent.indexOf (keywd.word) != -1) {
					// 中枪了w
					markAsHide(post, keywd);
					// 既然已经中枪了, 那就不用检查这里了.
					break;
				}
			} else if (keywd.type == __TYPE__REGEX) {
				if (keywd.regex.test (postContent)) {
					// 中枪 ~~
					markAsHide(post, keywd);
					break;
				}
			}
		}
	}
	function insertAfter (what, toWhere) {
		toWhere.parentNode.insertBefore (what, toWhere.nextSibling)
	}
	function insertBefore (what, toWhere) {
		toWhere.parentNode.insertBefore (what, toWhere)
	}
	// document.body.querySelector('.pb_footer').children[0].appendChild (dialogContent);
	// insertAfter (dialogContent, document.body.querySelector('.pb_footer').children[0]);

	function toggleDialog () {
		dialogContent.style.display = 
			dialogOverlay.style.display = 
				dialogContent.style.display == 'none' ? 'block' : 'none';
	}

	_.css (dialogOverlay, {
		position: 'fixed',
		left: 0,
		top:  0,
		width: '100%',
		height:'100%',
		background: 'black',
		opacity: .3,
		display: 'none',
		zIndex: 999
	});
	_.css (dialogContent, {
		border: '1px solid #aaa',
		width: '40em',
		height: '20em',
		overflowY: 'auto',
		padding: '2em',
		display: 'none',
		position: 'fixed',
		margin: '7em 10%',
		background: '#eee',
		boxShadow: '0 0 8px #BBBBBB',
		top: 0,
		left: 0,
		zIndex: 999
	});
	_.append (document.body, dialogOverlay, dialogContent);
	var blockUser = _.C('textarea');
	_.css (blockUser, {
		width: '100%'
	});
	blockUser.value = conf.blockUser;
	_.append (dialogContent, selProc, optVal, confListDiv, '封锁用户发言 (半角逗号分割; 可随意添加空格/换行排版)', blockUser);
	function addKeys (e) {
		var confName = ['文本匹配', '正则匹配'];
		var input = _.C  ('input'),
			mod   = _.C  ('input'),
			sel   = _.C  ('select'),
			rm    = _.C  ('a');
		var p = _.C ('p');
		var that = [true, sel, input, mod, rm];

		input.value = e.word || '';
		mod.value   = e.mod  || '';
		input.setAttribute('placeholder', '关键词/正则');
		mod.setAttribute  ('placeholder', '[正则专用] 调节符 gim');

		if (!e.type) e.type = 0;

		for (var i=0; i<2; i++)
			sel.appendChild (new Option (confName[i], i, i == e.type));
		rm.addEventListener ('click', function (e) {
			this.parentNode.style.display = 'none';
			that[0] = false;
			e.preventDefault ();
		}, false);
		rm.href = '//jixun.org';
		rm.textContent = '移除';
		_.append (p, sel, input, mod, rm);
		confListDiv.appendChild (p);
		confList.push (that);
	}

	_.each (conf.keywords, addKeys);
	selProc.appendChild (new Option('隐藏', __ACT__HIDE,  __ACT__HIDE  == conf.action.type));
	selProc.appendChild (new Option('透明', __ACT__TRANS, __ACT__TRANS == conf.action.type));
	optVal.value = conf.action.opacity;


	btnAdd.textContent = '添加';
	btnSave.textContent = '储存';
	btnReset.textContent = '重置';
	btnClose.textContent = '关闭';
	_.click(btnAdd, function () {
		addKeys ({});
	});
	_.click(btnSave, function () {
		var finalConf = {keywords: [], action: {
			type: selProc.selectedIndex,
			opacity: parseFloat (optVal.value)
		}};
		_.each(confList, function (args) {
			if (!args[0])
				return; // 删除了的配置
			// [true, sel, input, mod, rm]
			finalConf.keywords.push ({
				type: args [1].selectedIndex,
				word: args [2].value || '',
				mod : args [3].value || ''
			});
		});
		finalConf.blockUser = blockUser.value;
		localStorage.jx_tiebaPostBlocker = JSON.stringify(finalConf);
	});
	_.click(btnReset, function () {
		if (confirm('真的要重置设定么? 该选项不可逆 :<'))
			localStorage.jx_tiebaPostBlocker = '';
	});
	_.click(btnClose, toggleDialog);
	_.append (dialogContent, btnAdd, btnSave, btnReset, btnClose, _.L(' 设定将在刷新页面后生效'));

	GM_registerMenuCommand ('配置过滤器', toggleDialog);
	
	USO.fl._init ();
	_.each (document.querySelectorAll('.l_post'), jx_do_filterPosts);
	USO.fl.reg (jx_do_filterPosts);

	_I (function () {
		var panelBtnParent = document.querySelector ('ul.tbui_aside_float_bar');
		if (!panelBtnParent) return;
		var btnTogglePanel = _.C('li'),
			btnToggleLink  = _.C('a');
		panelBtnParent.insertBefore (btnTogglePanel, _.last(panelBtnParent.children));
		btnTogglePanel.className = 'tbui_aside_fbar_button';
		btnTogglePanel.style.cursor = 'pointer';

		_.append (btnToggleLink, _.L('配置'), _.C('br'), _.L('過濾器'));

		btnToggleLink.href = ';';
		_.css (btnToggleLink, {
			width: '48px',
			marginTop: '-1px',
			border: '1px #ddd solid',
			textAlign: 'center',
			background: 'white',
			display: 'table-cell',
			verticalAlign: 'middle',
			borderTop: 0,
			color: '#555',
			fontWeight: 'bold'
		});
		_.click(btnToggleLink, function (e) {
			e.preventDefault ();
			toggleDialog ();
		});
		btnTogglePanel.appendChild (btnToggleLink);
		return true;
	});

	console.log ('贴吧关键字屏蔽::结束');
}, false);