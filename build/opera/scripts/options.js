!function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _ext=require("./utils/ext"),_storage=(_interopRequireDefault(_ext),require("./utils/storage")),_storage2=_interopRequireDefault(_storage),colorSelectors=document.querySelectorAll(".js-radio"),setColor=function(color){document.body.style.backgroundColor=color};_storage2["default"].get("color",function(resp){var option,color=resp.color;color?(option=document.querySelector(".js-radio."+color),setColor(color)):option=colorSelectors[0],option.setAttribute("checked","checked")}),colorSelectors.forEach(function(el){el.addEventListener("click",function(e){var value=this.value;_storage2["default"].set({color:value},function(){setColor(value)})})})},{"./utils/ext":2,"./utils/storage":3}],2:[function(require,module,exports){"use strict";function Extension(){var _this=this;apis.forEach(function(api){_this[api]=null;try{chrome[api]&&(_this[api]=chrome[api])}catch(e){}try{window[api]&&(_this[api]=window[api])}catch(e){}try{browser[api]&&(_this[api]=browser[api])}catch(e){}try{_this.api=browser.extension[api]}catch(e){}});try{browser&&browser.runtime&&(this.runtime=browser.runtime)}catch(e){}try{browser&&browser.browserAction&&(this.browserAction=browser.browserAction)}catch(e){}}var apis=["alarms","bookmarks","browserAction","commands","contextMenus","cookies","downloads","events","extension","extensionTypes","history","i18n","idle","notifications","pageAction","runtime","storage","tabs","webNavigation","webRequest","windows"];module.exports=new Extension},{}],3:[function(require,module,exports){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _ext=require("./ext"),_ext2=_interopRequireDefault(_ext);module.exports=_ext2["default"].storage.sync?_ext2["default"].storage.sync:_ext2["default"].storage.local},{"./ext":2}]},{},[1]);