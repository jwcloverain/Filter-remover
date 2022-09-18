// ==UserScript==
// @name         Filter remover
// @version      1.6
// @namespace    filter.404
// @license      GNU General Public License v3.0
// @description  用于去除网页灰色滤镜
// @author       eduarte
// @include      http://*/*
// @include      https://*/*
// @run-at       document-end
// ==/UserScript==
 
//
// 
// 
//
//
 
(function() {
    'use strict';
    //普通网站
    document.documentElement.style.filter = "none";
    document.body.style.filter="none";
    //百度网盘之类后加载滤镜的网站
    setTimeout(function(){
        document.documentElement.style.filter = "none";
        document.body.style.filter="none";
    }, 300);
})();