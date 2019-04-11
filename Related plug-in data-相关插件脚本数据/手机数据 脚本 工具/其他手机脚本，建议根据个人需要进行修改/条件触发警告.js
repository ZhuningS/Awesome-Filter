// == UserScript ==
// @name触发警告
// @description Warns you about triggers.一个greasemonkey脚本，用于在您的某个触发词被击中时隐藏页面中的所有图像。Update Trigger_Warning.user.js2014年9月16日
// @icon https://raw.github.com/sepehr/userscript-SCRIPT/master/SCRIPT.png
// @author Charles Nelson <cnelsonsic@gmail.com>
// @namespace http://github.com/cnelsonsic
// @downloadURL https://github.com/cnelsonsic/triggerwarning/raw/master/
// @license GPLv3 - http://www.gnu.org/licenses/gpl-3.0.txt
// @copyright Copyright (C) 2014, by Charles Nelson <cnelsonsic@gmail.com>
//
// @include http*://*qq.com*
//
// @require http://code.jquery.com/jquery-1.8.0.min.js
// @version 1.1
// @updateURL https://github.com/cnelsonsic/triggerwarning/raw/master/Trigger_Warning.user.js
//
// @run-at document-start|document-end
// @unwrap
 // ==/UserScript==
 /**
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
 /**
 * SCRIPT DESCRIPTION.
 *
 * @see http://wiki.greasespot.net/API_reference
 * @see http://wiki.greasespot.net/Metadata_Block
 */

 // Add any personal trigger words here.
 var triggers = [
     'spider',
     'tarantula',
     'arachnid',
 ];

 function regexForWordList(words) {
   return new RegExp('(' + words.join('|') + ')', 'gi');
 }

 function unique(list) {
   var result = [];
   $.each(list, function(i, e) {
     if ($.inArray(e, result) == -1) result.push(e);
   });
   return result;
 }

 (function () {
     // If we find a trigger word anywhere on the page, don't load images.
     var content = $('body') .text();
     var matches = content.match(regexForWordList(triggers));
     console.log(matches);
     if (matches.length > 0) {
 	// Found a trigger. Hide all images.
 	$('img').hide();
 	alert('I found one of your trigger words: ' + unique(matches) + '\nso I hid all images on the page. \nDisable this userscript if you\'re feeling lucky.\nDon\'t forget to re-enable it!');
         }
 }) ();