// Generated by CoffeeScript 1.7.1

/*
@type {Document}
 */
var ACTIVE, CLICK, DOC, IsAndroid, IsBlackBerry, IsIE, IsIEMobile, IsIOS, IsIPad, IsIPhone, IsTouch, IsWeixin, IsWindowsPhone, NA, UA, WIN;

DOC = document;


/*
@type {Window}
 */

WIN = window;


/*
设备是否支持触摸事件
这里使用WIN.hasOwnProperty('ontouchend')在Android上会得到错误的结果
@type {boolean}
 */

IsTouch = "ontouchend" in WIN;


/*
@type {string}
 */

NA = WIN.navigator;


/*
@type {string}
 */

UA = NA.userAgent;


/*
@type {boolean}
 */

IsAndroid = /Android|HTC/i.test(UA) || /Linux/i.test(NA.platform + "");


/*
@type {boolean}
 */

IsIPad = !IsAndroid && /iPad/i.test(UA);


/*
@type {boolean}
 */

IsIPhone = !IsAndroid && /iPod|iPhone/i.test(UA);


/*
@type {boolean}
 */

IsIOS = IsIPad || IsIPhone;


/*
@type {boolean}
 */

IsWindowsPhone = /Windows Phone/i.test(UA);


/*
@type {boolean}
 */

IsBlackBerry = /BB10|BlackBerry/i.test(UA);


/*
@type {boolean}
 */

IsIEMobile = /IEMobile/i.test(UA);


/*
@type {boolean}
 */

IsIE = !!DOC.all;


/*
@type {boolean}
 */

IsWeixin = /MicroMessenger/i.test(UA);

CLICK = "click";

ACTIVE = "active";
