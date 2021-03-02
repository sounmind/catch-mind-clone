(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";var _sockets=require("./sockets"),$body=document.querySelector("body"),nickname=localStorage.getItem("nickname"),LOGGED_OUT="loggedOut",LOGGED_IN="loggedIn",NICKNAME="nickname",$loginForm=document.querySelector("#jsLogin"),logIn=function(e){var o=io("/");o.emit(window.events.setNickname,{nickname:e}),(0,_sockets.initSockets)(o)};nickname?($body.className=LOGGED_IN,logIn(nickname)):$body.className=LOGGED_OUT;var handleFormSubmit=function(e){e.preventDefault();var o=$loginForm.querySelector("input"),n=o.value;o.value="",localStorage.setItem(NICKNAME,n),$body.className=LOGGED_IN,logIn(n)};$loginForm&&$loginForm.addEventListener("submit",handleFormSubmit);

},{"./sockets":4}],2:[function(require,module,exports){
"use strict";require("./sockets"),require("./login"),require("./notifications");

},{"./login":1,"./notifications":3,"./sockets":4}],3:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.handleNewUser=void 0;var $notification=document.querySelector("#jsNotification"),handleNewUser=function(e){var o=e.nickname;console.log(o,"just joined!")};exports.handleNewUser=handleNewUser;

},{}],4:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.initSockets=exports.updateSocket=exports.getSocket=void 0;var _notifications=require("./notifications"),getSocket=function(){return socket};exports.getSocket=getSocket;var socket=null,updateSocket=function(t){socket=t};exports.updateSocket=updateSocket;var initSockets=function(t){var e=window.events;updateSocket(t),socket.on(e.notifyNewUser,_notifications.handleNewUser)};exports.initSockets=initSockets;

},{"./notifications":3}]},{},[2]);
