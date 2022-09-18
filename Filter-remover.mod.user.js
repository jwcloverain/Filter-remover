// ==UserScript==
// @name         Filter remover
// @version      1.0
// @namespace    filter.remover.mod
// @description  用于去除网页灰色滤镜
// @author       rainday
// @downloadURL	 https://github.com/jwcloverain/Filter-remover/raw/master/Filter-remover.mod.user.js
// @updateURL	 https://github.com/jwcloverain/Filter-remover/raw/master/Filter-remover.mod.user.js
// @match        http://*/*
// @match        https://*/*
// @run-at       document-end
// ==/UserScript==
 
//
// 
// 铭记英烈不等于无法正常使用互联网服务。
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
