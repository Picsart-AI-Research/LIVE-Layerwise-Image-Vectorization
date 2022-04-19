(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function r(a,b){if(b)a:{for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
r("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.f=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.f};
var d=0;return b});
r("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function t(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ha="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ia=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ha(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ja;
if("function"==typeof Object.setPrototypeOf)ja=Object.setPrototypeOf;else{var ka;a:{var la={a:!0},ma={};try{ma.__proto__=la;ka=ma.a;break a}catch(a){}ka=!1}ja=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var na=ja;
function v(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.N=b.prototype}
function pa(){this.m=!1;this.i=null;this.g=void 0;this.f=1;this.j=this.l=0;this.u=this.h=null}
function qa(a){if(a.m)throw new TypeError("Generator is already running");a.m=!0}
pa.prototype.B=function(a){this.g=a};
function ra(a,b){a.h={Ga:b,ra:!0};a.f=a.l||a.j}
pa.prototype["return"]=function(a){this.h={"return":a};this.f=this.j};
function w(a,b,c){a.f=c;return{value:b}}
pa.prototype.F=function(a){this.f=a};
function sa(a){a.l=2;a.j=3}
function ta(a){a.l=0;a.h=null}
function ua(a){a.u=[a.h];a.l=0;a.j=0}
function va(a){var b=a.u.splice(0)[0];(b=a.h=a.h||b)?b.ra?a.f=a.l||a.j:void 0!=b.F&&a.j<b.F?(a.f=b.F,a.h=null):a.f=a.j:a.f=0}
function wa(a){this.f=new pa;this.g=a}
function xa(a,b){qa(a.f);var c=a.f.i;if(c)return ya(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.f["return"]);
a.f["return"](b);return za(a)}
function ya(a,b,c,d){try{var e=b.call(a.f.i,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.f.m=!1,e;var f=e.value}catch(g){return a.f.i=null,ra(a.f,g),za(a)}a.f.i=null;d.call(a.f,f);return za(a)}
function za(a){for(;a.f.f;)try{var b=a.g(a.f);if(b)return a.f.m=!1,{value:b.value,done:!1}}catch(c){a.f.g=void 0,ra(a.f,c)}a.f.m=!1;if(a.f.h){b=a.f.h;a.f.h=null;if(b.ra)throw b.Ga;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function Aa(a){this.next=function(b){qa(a.f);a.f.i?b=ya(a,a.f.i.next,b,a.f.B):(a.f.B(b),b=za(a));return b};
this["throw"]=function(b){qa(a.f);a.f.i?b=ya(a,a.f.i["throw"],b,a.f.B):(ra(a.f,b),b=za(a));return b};
this["return"]=function(b){return xa(a,b)};
this[Symbol.iterator]=function(){return this}}
function x(a,b){var c=new Aa(new wa(b));na&&a.prototype&&na(c,a.prototype);return c}
r("Reflect",function(a){return a?a:{}});
r("Reflect.construct",function(){return ia});
r("Reflect.setPrototypeOf",function(a){return a?a:na?function(b,c){try{return na(b,c),!0}catch(d){return!1}}:null});
function Ba(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
r("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
r("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),k=0;k<f&&g<e;)if(d[g++]!=b[k++])return!1;return k>=f}});
function Ca(a,b){a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};
return d.next()}};
d[Symbol.iterator]=function(){return d};
return d}
r("Array.prototype.keys",function(a){return a?a:function(){return Ca(this,function(b){return b})}});
r("Array.prototype.values",function(a){return a?a:function(){return Ca(this,function(b,c){return c})}});
function Da(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Ea="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Da(d,e)&&(a[e]=d[e])}return a};
r("Object.assign",function(a){return a||Ea});
r("Promise",function(a){function b(g){this.g=0;this.h=void 0;this.f=[];var k=this.i();try{g(k.resolve,k.reject)}catch(h){k.reject(h)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(k){k(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var k=this;this.h(function(){k.j()})}this.f.push(g)};
var e=da.setTimeout;c.prototype.h=function(g){e(g,0)};
c.prototype.j=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var k=0;k<g.length;++k){var h=g[k];g[k]=null;try{h()}catch(l){this.i(l)}}}this.f=null};
c.prototype.i=function(g){this.h(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){h||(h=!0,l.call(k,m))}}
var k=this,h=!1;return{resolve:g(this.C),reject:g(this.j)}};
b.prototype.C=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.G(g);else{a:switch(typeof g){case "object":var k=null!=g;break a;case "function":k=!0;break a;default:k=!1}k?this.u(g):this.l(g)}};
b.prototype.u=function(g){var k=void 0;try{k=g.then}catch(h){this.j(h);return}"function"==typeof k?this.H(k,g):this.l(g)};
b.prototype.j=function(g){this.m(2,g)};
b.prototype.l=function(g){this.m(1,g)};
b.prototype.m=function(g,k){if(0!=this.g)throw Error("Cannot settle("+g+", "+k+"): Promise already settled in state"+this.g);this.g=g;this.h=k;this.B()};
b.prototype.B=function(){if(null!=this.f){for(var g=0;g<this.f.length;++g)f.g(this.f[g]);this.f=null}};
var f=new c;b.prototype.G=function(g){var k=this.i();g.ca(k.resolve,k.reject)};
b.prototype.H=function(g,k){var h=this.i();try{g.call(k,h.resolve,h.reject)}catch(l){h.reject(l)}};
b.prototype.then=function(g,k){function h(u,p){return"function"==typeof u?function(z){try{l(u(z))}catch(N){m(N)}}:p}
var l,m,q=new b(function(u,p){l=u;m=p});
this.ca(h(g,l),h(k,m));return q};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.ca=function(g,k){function h(){switch(l.g){case 1:g(l.h);break;case 2:k(l.h);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.f?f.g(h):this.f.push(h)};
b.resolve=d;b.reject=function(g){return new b(function(k,h){h(g)})};
b.race=function(g){return new b(function(k,h){for(var l=t(g),m=l.next();!m.done;m=l.next())d(m.value).ca(k,h)})};
b.all=function(g){var k=t(g),h=k.next();return h.done?d([]):new b(function(l,m){function q(z){return function(N){u[z]=N;p--;0==p&&l(u)}}
var u=[],p=0;do u.push(void 0),p++,d(h.value).ca(q(u.length-1),m),h=k.next();while(!h.done)})};
return b});
r("Object.setPrototypeOf",function(a){return a||na});
r("Array.prototype.entries",function(a){return a?a:function(){return Ca(this,function(b,c){return[b,c]})}});
r("WeakMap",function(a){function b(h){this.f=(k+=Math.random()+1).toString();if(h){h=t(h);for(var l;!(l=h.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(h){var l=typeof h;return"object"===l&&null!==h||"function"===l}
function e(h){if(!Da(h,g)){var l=new c;ba(h,g,{value:l})}}
function f(h){var l=Object[h];l&&(Object[h]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var h=Object.seal({}),l=Object.seal({}),m=new a([[h,2],[l,3]]);if(2!=m.get(h)||3!=m.get(l))return!1;m["delete"](h);m.set(l,4);return!m.has(h)&&4==m.get(l)}catch(q){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var k=0;b.prototype.set=function(h,l){if(!d(h))throw Error("Invalid WeakMap key");e(h);if(!Da(h,g))throw Error("WeakMap key fail: "+h);h[g][this.f]=l;return this};
b.prototype.get=function(h){return d(h)&&Da(h,g)?h[g][this.f]:void 0};
b.prototype.has=function(h){return d(h)&&Da(h,g)&&Da(h[g],this.f)};
b.prototype["delete"]=function(h){return d(h)&&Da(h,g)&&Da(h[g],this.f)?delete h[g][this.f]:!1};
return b});
r("Map",function(a){function b(){var k={};return k.previous=k.next=k.head=k}
function c(k,h){var l=k.f;return ea(function(){if(l){for(;l.head!=k.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:h(l)};l=null}return{done:!0,value:void 0}})}
function d(k,h){var l=h&&typeof h;"object"==l||"function"==l?f.has(h)?l=f.get(h):(l=""+ ++g,f.set(h,l)):l="p_"+h;var m=k.g[l];if(m&&Da(k.g,l))for(var q=0;q<m.length;q++){var u=m[q];if(h!==h&&u.key!==u.key||h===u.key)return{id:l,list:m,index:q,A:u}}return{id:l,list:m,index:-1,A:void 0}}
function e(k){this.g={};this.f=b();this.size=0;if(k){k=t(k);for(var h;!(h=k.next()).done;)h=h.value,this.set(h[0],h[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var k=Object.seal({x:4}),h=new a(t([[k,"s"]]));if("s"!=h.get(k)||1!=h.size||h.get({x:4})||h.set({x:4},"t")!=h||2!=h.size)return!1;var l=h.entries(),m=l.next();if(m.done||m.value[0]!=k||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(q){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(k,h){k=0===k?0:k;var l=d(this,k);l.list||(l.list=this.g[l.id]=[]);l.A?l.A.value=h:(l.A={next:this.f,previous:this.f.previous,head:this.f,key:k,value:h},l.list.push(l.A),this.f.previous.next=l.A,this.f.previous=l.A,this.size++);return this};
e.prototype["delete"]=function(k){k=d(this,k);return k.A&&k.list?(k.list.splice(k.index,1),k.list.length||delete this.g[k.id],k.A.previous.next=k.A.next,k.A.next.previous=k.A.previous,k.A.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(k){return!!d(this,k).A};
e.prototype.get=function(k){return(k=d(this,k).A)&&k.value};
e.prototype.entries=function(){return c(this,function(k){return[k.key,k.value]})};
e.prototype.keys=function(){return c(this,function(k){return k.key})};
e.prototype.values=function(){return c(this,function(k){return k.value})};
e.prototype.forEach=function(k,h){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,k.call(h,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
r("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Da(b,d)&&c.push([d,b[d]]);return c}});
r("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
r("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
r("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ba(this,b,"includes").indexOf(b,c||0)}});
r("Set",function(a){function b(c){this.f=new Map;if(c){c=t(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(t([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var y=this||self;function A(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
var Fa=/^[\w+/_-]+[=]{0,2}$/,Ga=null;function Ha(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Fa.test(a)?a:""}
function B(a,b){for(var c=a.split("."),d=b||y,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Ia(){}
function Ja(a){a.la=void 0;a.getInstance=function(){return a.la?a.la:a.la=new a}}
function Ka(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function La(a){var b=Ka(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ma(a){return"function"==Ka(a)}
function Na(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Oa(a){return Object.prototype.hasOwnProperty.call(a,Qa)&&a[Qa]||(a[Qa]=++Ra)}
var Qa="closure_uid_"+(1E9*Math.random()>>>0),Ra=0;function Sa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ta(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function C(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?C=Sa:C=Ta;return C.apply(null,arguments)}
function Ua(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var D=Date.now;function Va(a,b){A(a,b,void 0)}
function E(a,b){function c(){}
c.prototype=b.prototype;a.N=b.prototype;a.prototype=new c;a.prototype.constructor=a}
function Wa(a){return a}
;function F(a){if(Error.captureStackTrace)Error.captureStackTrace(this,F);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
E(F,Error);F.prototype.name="CustomError";function Xa(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.h=!b&&/[?&]ae=1(&|$)/.test(a);this.i=!b&&/[?&]ae=2(&|$)/.test(a);if((this.f=/[?&]adurl=([^&]*)/.exec(a))&&this.f[1]){try{var c=decodeURIComponent(this.f[1])}catch(d){c=null}this.g=c}}
;function Ya(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Za=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},G=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},$a=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var k=f[g];
b.call(void 0,k,g,a)&&(d[e++]=k)}return d},ab=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},bb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
G(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function cb(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function db(a,b){var c=Za(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function eb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function fb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(La(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function gb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function hb(a,b){var c=La(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function ib(a){var b=jb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function kb(a){for(var b in a)return!1;return!0}
function lb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function mb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function nb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function ob(a){var b=Ka(a);if("object"==b||"array"==b){if(Ma(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=ob(a[c]);return b}return a}
var pb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<pb.length;f++)c=pb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var rb;function sb(){if(void 0===rb){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Wa,createScript:Wa,createScriptURL:Wa})}catch(c){y.console&&y.console.error(c.message)}rb=a}else rb=a}return rb}
;function tb(a,b){this.f=a===ub&&b||"";this.g=vb}
tb.prototype.M=!0;tb.prototype.L=function(){return this.f.toString()};
tb.prototype.ka=!0;tb.prototype.ha=function(){return 1};
function wb(a){if(a instanceof tb&&a.constructor===tb&&a.g===vb)return a.f;Ka(a);return"type_error:TrustedResourceUrl"}
var vb={},ub={};var xb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function yb(a,b){if(b)a=a.replace(zb,"&amp;").replace(Ab,"&lt;").replace(Bb,"&gt;").replace(Cb,"&quot;").replace(Db,"&#39;").replace(Eb,"&#0;");else{if(!Fb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(zb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Ab,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Bb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Cb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Db,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Eb,"&#0;"))}return a}
var zb=/&/g,Ab=/</g,Bb=/>/g,Cb=/"/g,Db=/'/g,Eb=/\x00/g,Fb=/[\x00&<>"']/;function H(a,b){this.f=a===Gb&&b||"";this.g=Hb}
H.prototype.M=!0;H.prototype.L=function(){return this.f.toString()};
H.prototype.ka=!0;H.prototype.ha=function(){return 1};
function Ib(a){if(a instanceof H&&a.constructor===H&&a.g===Hb)return a.f;Ka(a);return"type_error:SafeUrl"}
var Jb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Kb(a){if(a instanceof H)return a;a="object"==typeof a&&a.M?a.L():String(a);Jb.test(a)||(a="about:invalid#zClosurez");return new H(Gb,a)}
var Hb={},Lb=new H(Gb,"about:invalid#zClosurez"),Gb={};var Mb;a:{var Nb=y.navigator;if(Nb){var Ob=Nb.userAgent;if(Ob){Mb=Ob;break a}}Mb=""}function I(a){return-1!=Mb.indexOf(a)}
;function Pb(){this.f="";this.h=Qb;this.g=null}
Pb.prototype.ka=!0;Pb.prototype.ha=function(){return this.g};
Pb.prototype.M=!0;Pb.prototype.L=function(){return this.f.toString()};
var Qb={};function Rb(a,b){var c=new Pb,d=sb();c.f=d?d.createHTML(a):a;c.g=b;return c}
;function Sb(a,b){var c=b instanceof H?b:Kb(b);a.href=Ib(c)}
function Ub(a,b){a.src=wb(b);var c;(c=a.ownerDocument&&a.ownerDocument.defaultView)&&c!=y?c=Ha(c.document):(null===Ga&&(Ga=Ha(y.document)),c=Ga);c&&a.setAttribute("nonce",c)}
;function Vb(a){return a=yb(a,void 0)}
function Wb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Xb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Yb(a){return a?decodeURI(a):a}
function J(a){return Yb(a.match(Xb)[3]||null)}
function Zb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Zb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function $b(a){var b=[],c;for(c in a)Zb(c,a[c],b);return b.join("&")}
function ac(a,b){var c=$b(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
var bc=/#|$/;function cc(a,b){var c=a.search(bc);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}
;var dc=I("Opera"),ec=I("Trident")||I("MSIE"),fc=I("Edge"),gc=I("Gecko")&&!(-1!=Mb.toLowerCase().indexOf("webkit")&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge"),hc=-1!=Mb.toLowerCase().indexOf("webkit")&&!I("Edge");function ic(){var a=y.document;return a?a.documentMode:void 0}
var jc;a:{var kc="",lc=function(){var a=Mb;if(gc)return/rv:([^\);]+)(\)|;)/.exec(a);if(fc)return/Edge\/([\d\.]+)/.exec(a);if(ec)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(hc)return/WebKit\/(\S+)/.exec(a);if(dc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
lc&&(kc=lc?lc[1]:"");if(ec){var mc=ic();if(null!=mc&&mc>parseFloat(kc)){jc=String(mc);break a}}jc=kc}var nc=jc,oc;if(y.document&&ec){var pc=ic();oc=pc?pc:parseInt(nc,10)||void 0}else oc=void 0;var qc=oc;var rc={},sc=null;var K=window;function tc(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==b&&(a.constructor&&
a.constructor instanceof Function?(a.constructor.name?b=a.constructor.name:(b=a.constructor,uc[b]?b=uc[b]:(b=String(b),uc[b]||(c=/function\s+([^\(]+)/m.exec(b),uc[b]=c?c[1]:"[Anonymous]"),b=uc[b])),b='Unknown Error of type "'+b+'"'):b="Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})}
var uc={};function vc(a){this.f=a||{cookie:""}}
n=vc.prototype;n.isEnabled=function(){return navigator.cookieEnabled};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Db;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var k=c.sa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===k&&(k=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";k=0>k?"":0==k?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(D()+1E3*k)).toUTCString();this.f.cookie=a+"="+b+c+g+k+d+(null!=e?";samesite="+e:
"")};
n.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=xb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{sa:0,path:b,domain:c});return d};
n.isEmpty=function(){return!this.f.cookie};
n.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=xb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var wc=new vc("undefined"==typeof document?null:document);var xc=!ec||9<=Number(qc);function yc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
n=yc.prototype;n.clone=function(){return new yc(this.x,this.y)};
n.equals=function(a){return a instanceof yc&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
n.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
n.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
n.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function zc(a,b){this.width=a;this.height=b}
n=zc.prototype;n.clone=function(){return new zc(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.isEmpty=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ac(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Bc(a,b){gb(b,function(c,d){c&&"object"==typeof c&&c.M&&(c=c.L());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Cc.hasOwnProperty(d)?a.setAttribute(Cc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Cc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Dc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!xc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Vb(g.name),'"');if(g.type){f.push(' type="',Vb(g.type),'"');var k={};qb(k,g);delete k.type;g=k}f.push(">");f=f.join("")}f=Ec(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):Bc(f,g));2<d.length&&Fc(e,f,d);return f}
function Fc(a,b,c){function d(g){g&&b.appendChild("string"===typeof g?a.createTextNode(g):g)}
for(var e=2;e<c.length;e++){var f=c[e];!La(f)||Na(f)&&0<f.nodeType?d(f):G(Gc(f)?eb(f):f,d)}}
function Ec(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Gc(a){if(a&&"number"==typeof a.length){if(Na(a))return"function"==typeof a.item||"string"==typeof a.item;if(Ma(a))return"function"==typeof a.item}return!1}
function Hc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Ic(a){Jc();var b=sb();a=b?b.createScriptURL(a):a;return new tb(ub,a)}
var Jc=Ia;function Kc(a){var b=Lc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Mc(){var a=[];Kc(function(b){a.push(b)});
return a}
var Lc={kb:"allow-forms",lb:"allow-modals",mb:"allow-orientation-lock",nb:"allow-pointer-lock",ob:"allow-popups",pb:"allow-popups-to-escape-sandbox",qb:"allow-presentation",rb:"allow-same-origin",sb:"allow-scripts",tb:"allow-top-navigation",ub:"allow-top-navigation-by-user-activation"},Nc=Ya(function(){return Mc()});
function Oc(){var a=Ec(document,"IFRAME"),b={};G(Nc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function L(){this.g=this.g;this.B=this.B}
L.prototype.g=!1;L.prototype.dispose=function(){this.g||(this.g=!0,this.o())};
function Pc(a,b){a.g?b():(a.B||(a.B=[]),a.B.push(b))}
L.prototype.o=function(){if(this.B)for(;this.B.length;)this.B.shift()()};
function Qc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Rc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];La(d)?Rc.apply(null,d):Qc(d)}}
;function M(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(h){try{k(b.next(h))}catch(l){e(l)}}
function g(h){try{k(b["throw"](h))}catch(l){e(l)}}
function k(h){h.done?d(h.value):(new c(function(l){l(h.value)})).then(f,g)}
k((b=b.apply(a,void 0)).next())})}
;function Sc(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Tc=(new Date).getTime();function Uc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";
var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Vc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(q){for(var u=g,p=0;64>p;p+=4)u[p/4]=q[p]<<24|q[p+1]<<16|q[p+2]<<8|q[p+3];for(p=16;80>p;p++)q=u[p-3]^u[p-8]^u[p-14]^u[p-16],u[p]=(q<<1|q>>>31)&4294967295;q=e[0];var z=e[1],N=e[2],oa=e[3],ed=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var Pa=oa^z&(N^oa);var Tb=1518500249}else Pa=z^N^oa,Tb=1859775393;else 60>p?(Pa=z&N|oa&(z|N),Tb=2400959708):(Pa=z^N^oa,Tb=3395469782);Pa=((q<<5|q>>>27)&4294967295)+Pa+ed+Tb+u[p]&4294967295;ed=oa;oa=N;N=(z<<30|z>>>2)&4294967295;z=q;q=Pa}e[0]=e[0]+q&4294967295;e[1]=
e[1]+z&4294967295;e[2]=e[2]+N&4294967295;e[3]=e[3]+oa&4294967295;e[4]=e[4]+ed&4294967295}
function c(q,u){if("string"===typeof q){q=unescape(encodeURIComponent(q));for(var p=[],z=0,N=q.length;z<N;++z)p.push(q.charCodeAt(z));q=p}u||(u=q.length);p=0;if(0==l)for(;p+64<u;)b(q.slice(p,p+64)),p+=64,m+=64;for(;p<u;)if(f[l++]=q[p++],m++,64==l)for(l=0,b(f);p+64<u;)b(q.slice(p,p+64)),p+=64,m+=64}
function d(){var q=[],u=8*m;56>l?c(k,56-l):c(k,64-(l-56));for(var p=63;56<=p;p--)f[p]=u&255,u>>>=8;b(f);for(p=u=0;5>p;p++)for(var z=24;0<=z;z-=8)q[u++]=e[p]>>z&255;return q}
for(var e=[],f=[],g=[],k=[128],h=1;64>h;++h)k[h]=0;var l,m;a();return{reset:a,update:c,digest:d,Fa:function(){for(var q=d(),u="",p=0;p<q.length;p++)u+="0123456789ABCDEF".charAt(Math.floor(q[p]/16))+"0123456789ABCDEF".charAt(q[p]%16);return u}}}
;function Wc(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],G(d,function(k){e.push(k)}),Xc(e.join(" "));
var f=[],g=[];G(c,function(k){g.push(k.key);f.push(k.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];G(d,function(k){e.push(k)});
a=Xc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Xc(a){var b=Vc();b.update(a);return b.Fa().toLowerCase()}
;function Yc(a){var b=Uc(String(y.location.href)),c;(c=y.__SAPISID||y.__APISID||y.__OVERRIDE_SID)?c=!0:(c=new vc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?y.__SAPISID:y.__APISID,c||(c=new vc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(y.location.href);return d&&c&&b?[b,Wc(Uc(d),c,a||null)].join(" "):null}return null}
;function Zc(){this.g=[];this.f=-1}
Zc.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
Zc.prototype.get=function(a){return!!this.g[a]};
function $c(a){-1==a.f&&(a.f=bb(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function ad(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
ad.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};
function bd(a,b){a.i(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function cd(a){y.setTimeout(function(){throw a;},0)}
var dd;
function fd(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!I("Presto")&&(a=function(){var e=Ec(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),k="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=C(function(h){if(("*"==k||h.origin==k)&&h.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,k)}}});
if("undefined"!==typeof a&&!I("Trident")&&!I("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.qa;c.qa=null;e()}};
return function(e){d.next={qa:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function gd(){this.g=this.f=null}
var id=new ad(function(){return new hd},function(a){a.reset()});
gd.prototype.add=function(a,b){var c=id.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
gd.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function hd(){this.next=this.scope=this.f=null}
hd.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
hd.prototype.reset=function(){this.next=this.scope=this.f=null};function jd(a,b){kd||ld();md||(kd(),md=!0);nd.add(a,b)}
var kd;function ld(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);kd=function(){a.then(od)}}else kd=function(){var b=od;
!Ma(y.setImmediate)||y.Window&&y.Window.prototype&&!I("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(dd||(dd=fd()),dd(b)):y.setImmediate(b)}}
var md=!1,nd=new gd;function od(){for(var a;a=nd.remove();){try{a.f.call(a.scope)}catch(b){cd(b)}bd(id,a)}md=!1}
;function pd(){this.g=-1}
;function qd(){this.g=64;this.f=[];this.l=[];this.m=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
E(qd,pd);qd.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.j=this.h=0};
function rd(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],k=a.f[3],h=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=k^c&(g^k);var l=1518500249}else f=c^g^k,l=1859775393;else 60>e?(f=c&g|k&(c|g),l=2400959708):
(f=c^g^k,l=3395469782);f=(b<<5|b>>>27)+f+h+l+d[e]&4294967295;h=k;k=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+k&4294967295;a.f[4]=a.f[4]+h&4294967295}
qd.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.l,f=this.h;d<b;){if(0==f)for(;d<=c;)rd(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){rd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){rd(this,e);f=0;break}}this.h=f;this.j+=b}};
qd.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.l[c]=b&255,b/=256;rd(this,this.l);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};var sd="StopIteration"in y?y.StopIteration:{message:"StopIteration",stack:""};function td(){}
td.prototype.next=function(){throw sd;};
td.prototype.I=function(){return this};
function ud(a){if(a instanceof td)return a;if("function"==typeof a.I)return a.I(!1);if(La(a)){var b=0,c=new td;c.next=function(){for(;;){if(b>=a.length)throw sd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function vd(a,b){if(La(a))try{G(a,b,void 0)}catch(c){if(c!==sd)throw c;}else{a=ud(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==sd)throw c;}}}
function wd(a){if(La(a))return eb(a);a=ud(a);var b=[];vd(a,function(c){b.push(c)});
return b}
;function xd(a,b){this.h={};this.f=[];this.J=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof xd)for(c=yd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function yd(a){zd(a);return a.f.concat()}
n=xd.prototype;n.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||Ad;zd(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Ad(a,b){return a===b}
n.isEmpty=function(){return 0==this.g};
n.clear=function(){this.h={};this.J=this.g=this.f.length=0};
n.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.g--,this.J++,this.f.length>2*this.g&&zd(this),!0):!1};
function zd(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
n.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
n.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.g++,this.f.push(a),this.J++);this.h[a]=b};
n.forEach=function(a,b){for(var c=yd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
n.clone=function(){return new xd(this)};
n.I=function(a){zd(this);var b=0,c=this.J,d=this,e=new td;e.next=function(){if(c!=d.J)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw sd;var f=d.f[b++];return a?f:d.h[f]};
return e};function Bd(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Cd(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Dd(a,b){if(a.classList)var c=a.classList.contains(b);else c=a.classList?a.classList:Bd(a).match(/\S+/g)||[],c=0<=Za(c,b);return c}
function Ed(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Dd(a,"inverted-hdpi")&&Cd(a,$a(a.classList?a.classList:Bd(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function Fd(a){var b=[];Gd(new Hd,a,b);return b.join("")}
function Hd(){}
function Gd(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Gd(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Id(d,c),c.push(":"),Gd(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Id(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Jd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Kd=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Id(a,b){b.push('"',a.replace(Kd,function(c){var d=Jd[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Jd[c]=d);return d}),'"')}
;function Ld(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function O(a){this.f=0;this.m=void 0;this.i=this.g=this.h=null;this.j=this.l=!1;if(a!=Ia)try{var b=this;a.call(void 0,function(c){Md(b,2,c)},function(c){Md(b,3,c)})}catch(c){Md(this,3,c)}}
function Nd(){this.next=this.context=this.onRejected=this.g=this.f=null;this.h=!1}
Nd.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.h=!1};
var Od=new ad(function(){return new Nd},function(a){a.reset()});
function Pd(a,b,c){var d=Od.get();d.g=a;d.onRejected=b;d.context=c;return d}
function Qd(a){if(a instanceof O)return a;var b=new O(Ia);Md(b,2,a);return b}
function Rd(a){return new O(function(b,c){c(a)})}
O.prototype.then=function(a,b,c){return Sd(this,Ma(a)?a:null,Ma(b)?b:null,c)};
O.prototype.$goog_Thenable=!0;function Td(a,b){return Sd(a,null,b,void 0)}
O.prototype.cancel=function(a){if(0==this.f){var b=new Ud(a);jd(function(){Vd(this,b)},this)}};
function Vd(a,b){if(0==a.f)if(a.h){var c=a.h;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.h||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?Vd(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Wd(c),Xd(c,e,3,b)))}a.h=null}else Md(a,3,b)}
function Yd(a,b){a.g||2!=a.f&&3!=a.f||Zd(a);a.i?a.i.next=b:a.g=b;a.i=b}
function Sd(a,b,c,d){var e=Pd(null,null,null);e.f=new O(function(f,g){e.g=b?function(k){try{var h=b.call(d,k);f(h)}catch(l){g(l)}}:f;
e.onRejected=c?function(k){try{var h=c.call(d,k);void 0===h&&k instanceof Ud?g(k):f(h)}catch(l){g(l)}}:g});
e.f.h=a;Yd(a,e);return e.f}
O.prototype.u=function(a){this.f=0;Md(this,2,a)};
O.prototype.C=function(a){this.f=0;Md(this,3,a)};
function Md(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.u,f=a.C;if(d instanceof O){Yd(d,Pd(e||Ia,f||null,a));var g=!0}else if(Ld(d))d.then(e,f,a),g=!0;else{if(Na(d))try{var k=d.then;if(Ma(k)){$d(d,k,e,f,a);g=!0;break a}}catch(h){f.call(a,h);g=!0;break a}g=!1}}g||(a.m=c,a.f=b,a.h=null,Zd(a),3!=b||c instanceof Ud||ae(a,c))}}
function $d(a,b,c,d,e){function f(h){k||(k=!0,d.call(e,h))}
function g(h){k||(k=!0,c.call(e,h))}
var k=!1;try{b.call(a,g,f)}catch(h){f(h)}}
function Zd(a){a.l||(a.l=!0,jd(a.B,a))}
function Wd(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.i=null);return b}
O.prototype.B=function(){for(var a;a=Wd(this);)Xd(this,a,this.f,this.m);this.l=!1};
function Xd(a,b,c,d){if(3==c&&b.onRejected&&!b.h)for(;a&&a.j;a=a.h)a.j=!1;if(b.f)b.f.h=null,be(b,c,d);else try{b.h?b.g.call(b.context):be(b,c,d)}catch(e){ce.call(null,e)}bd(Od,b)}
function be(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function ae(a,b){a.j=!0;jd(function(){a.j&&ce.call(null,b)})}
var ce=cd;function Ud(a){F.call(this,a)}
E(Ud,F);Ud.prototype.name="cancel";function P(a){L.call(this);this.l=1;this.i=[];this.j=0;this.f=[];this.h={};this.m=!!a}
E(P,L);n=P.prototype;n.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.l;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.l=e+3;d.push(e);return e};
function de(a,b,c,d){if(b=a.h[b]){var e=a.f;(b=cb(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.P(b)}}
n.P=function(a){var b=this.f[a];if(b){var c=this.h[b];0!=this.j?(this.i.push(a),this.f[a+1]=Ia):(c&&db(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
n.O=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.m)for(e=0;e<c.length;e++){var g=c[e];ee(this.f[g+1],this.f[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.P(c)}}return 0!=e}return!1};
function ee(a,b,c){jd(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.h[a];b&&(G(b,this.P,this),delete this.h[a])}else this.f.length=0,this.h={}};
n.o=function(){P.N.o.call(this);this.clear();this.i.length=0};function fe(a){this.f=a}
fe.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,Fd(b))};
fe.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
fe.prototype.remove=function(a){this.f.remove(a)};function ge(a){this.f=a}
E(ge,fe);function he(a){this.data=a}
function ie(a){return void 0===a||a instanceof he?a:new he(a)}
ge.prototype.set=function(a,b){ge.N.set.call(this,a,ie(b))};
ge.prototype.g=function(a){a=ge.N.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
ge.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function je(a){this.f=a}
E(je,ge);je.prototype.set=function(a,b,c){if(b=ie(b)){if(c){if(c<D()){je.prototype.remove.call(this,a);return}b.expiration=c}b.creation=D()}je.N.set.call(this,a,b)};
je.prototype.g=function(a){var b=je.N.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<D()||c&&c>D())je.prototype.remove.call(this,a);else return b}};function ke(){}
;function le(){}
E(le,ke);le.prototype.clear=function(){var a=wd(this.I(!0)),b=this;G(a,function(c){b.remove(c)})};function me(a){this.f=a}
E(me,le);n=me.prototype;n.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
n.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.f.removeItem(a)};
n.I=function(a){var b=0,c=this.f,d=new td;d.next=function(){if(b>=c.length)throw sd;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){this.f.clear()};
n.key=function(a){return this.f.key(a)};function ne(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
E(ne,me);function oe(a,b){this.g=a;this.f=null;if(ec&&!(9<=Number(qc))){pe||(pe=new xd);this.f=pe.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),pe.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
E(oe,le);var qe={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},pe=null;function re(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return qe[b]})}
n=oe.prototype;n.isAvailable=function(){return!!this.f};
n.set=function(a,b){this.f.setAttribute(re(a),b);se(this)};
n.get=function(a){a=this.f.getAttribute(re(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.f.removeAttribute(re(a));se(this)};
n.I=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new td;d.next=function(){if(b>=c.length)throw sd;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);se(this)};
function se(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function te(a,b){this.g=a;this.f=b+"::"}
E(te,le);te.prototype.set=function(a,b){this.g.set(this.f+a,b)};
te.prototype.get=function(a){return this.g.get(this.f+a)};
te.prototype.remove=function(a){this.g.remove(this.f+a)};
te.prototype.I=function(a){var b=this.g.I(!0),c=this,d=new td;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};function ue(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var ve=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};A("yt.config_",ve,void 0);function Q(a){ue(ve,arguments)}
function R(a,b){return a in ve?ve[a]:b}
function we(){return R("PLAYER_CONFIG",{})}
function xe(a){var b=ve.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;function ye(){var a=ze;B("yt.ads.biscotti.getId_")||A("yt.ads.biscotti.getId_",a,void 0)}
function Ae(a){A("yt.ads.biscotti.lastId_",a,void 0)}
;var Be=[];function Ce(a){Be.forEach(function(b){return b(a)})}
function De(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){S(b),Ce(b)}}:a}
function S(a){var b=B("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),Q("ERRORS",b))}
function Ee(a){var b=B("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),Q("ERRORS",b))}
;function Fe(a){a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),g=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Array.isArray(b[f])?fb(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(h){if("q"!=e[0]){var k=Error("Error decoding URL component");k.params={key:e[0],value:e[1]};S(k)}}}return b}
function Ge(a){var b=[];gb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];G(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function He(a){"?"==a.charAt(0)&&(a=a.substr(1));return Fe(a)}
function Ie(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=He(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return ac(a,e)+d}
;function Je(a){var b=Ke;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(Le(b),Me(b));b.ca_type="image";a&&(b.bid=a);return b}
function Le(a){var b={};b.dt=Tc;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?K:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!K.navigator&&"unknown"!==typeof K.navigator.javaEnabled&&!!K.navigator.javaEnabled&&K.navigator.javaEnabled();K.screen&&(b.u_h=K.screen.height,b.u_w=K.screen.width,b.u_ah=K.screen.availHeight,b.u_aw=K.screen.availWidth,b.u_cd=K.screen.colorDepth);
K.navigator&&K.navigator.plugins&&(b.u_nplug=K.navigator.plugins.length);K.navigator&&K.navigator.mimeTypes&&(b.u_nmime=K.navigator.mimeTypes.length);return b}
function Me(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(q){}try{var e=b.outerWidth;var f=b.outerHeight}catch(q){}try{var g=b.innerWidth;var k=b.innerHeight}catch(q){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,k];c=a.f.top;try{var h=(c||window).document,l="CSS1Compat"==h.compatMode?h.documentElement:h.body;var m=(new zc(l.clientWidth,l.clientHeight)).round()}catch(q){m=new zc(-12245933,-12245933)}h=m;m={};l=new Zc;y.SVGElement&&
y.document.createElementNS&&l.set(0);c=Oc();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);y.crypto&&y.crypto.subtle&&l.set(3);y.TextDecoder&&y.TextEncoder&&l.set(4);l=$c(l);m.bc=l;m.bih=h.height;m.biw=h.width;m.brdim=b.join();a=a.g;return m.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,m.wgl=!!K.WebGLRenderingContext,m}
var Ke=new function(){var a=window.document;this.f=window;this.g=a};
A("yt.ads_.signals_.getAdSignalsString",function(a){return Ge(Je(a))},void 0);D();function T(a){a=Ne(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Oe(a,b){var c=Ne(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Ne(a){var b=R("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:R("EXPERIMENT_FLAGS",{})[a]}
;var Pe="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function Qe(){if(!Pe)return null;var a=Pe();return"open"in a?a:null}
function Re(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function U(a,b){"function"===typeof a&&(a=De(a));return window.setTimeout(a,b)}
function V(a){window.clearTimeout(a)}
;var Se={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Te="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
Ue=!1;
function Ve(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(Xb)[1]||null,e=J(a);d&&e?(d=c,c=a.match(Xb),d=d.match(Xb),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?J(c)==e&&(Number(c.match(Xb)[4]||null)||null)==(Number(a.match(Xb)[4]||null)||null):!0;d=T("web_ajax_ignore_global_headers_if_set");for(var f in Se)e=R(Se[f]),!e||!c&&J(a)||d&&void 0!==b[f]||(b[f]=e);if(c||!J(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!J(a))&&(f="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:
null)&&(b["X-YouTube-Time-Zone"]=f);if(c||!J(a))b["X-YouTube-Ad-Signals"]=Ge(Je(void 0));return b}
function We(a){var b=window.location.search,c=J(a),d=Yb(a.match(Xb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=He(b),f={};G(Te,function(g){e[g]&&(f[g]=e[g])});
return Ie(a,f||{},!1)}
function Xe(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Ye(a,b);var d=Ze(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&V(f);var k=g.ok,h=function(l){l=l||{};var m=b.context||y;k?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.ma&&b.ma.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(k||400<=g.status&&500>g.status)?g.json().then(h,function(){h(null)}):h(null)}});
b.wa&&0<b.timeout&&(f=U(function(){e||(e=!0,V(f),b.wa.call(b.context||y))},b.timeout))}else $e(a,b)}
function $e(a,b){var c=b.format||"JSON";a=Ye(a,b);var d=Ze(a,b),e=!1,f=af(a,function(h){if(!e){e=!0;k&&V(k);var l=Re(h),m=null,q=400<=h.status&&500>h.status,u=500<=h.status&&600>h.status;if(l||q||u)m=bf(a,c,h,b.yb);if(l)a:if(h&&204==h.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=!!m}m=m||{};q=b.context||y;l?b.onSuccess&&b.onSuccess.call(q,h,m):b.onError&&b.onError.call(q,h,m);b.ma&&b.ma.call(q,h,m)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
if(b.R&&0<b.timeout){var g=b.R;var k=U(function(){e||(e=!0,f.abort(),V(k),g.call(b.context||y,f))},b.timeout)}return f}
function Ye(a,b){b.Bb&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME",void 0),d=b.jb;d&&(d[c]&&delete d[c],a=Ie(a,d||{},!0));return a}
function Ze(a,b){var c=R("XSRF_FIELD_NAME",void 0),d=R("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.D,g=R("XSRF_FIELD_NAME",void 0),k;b.headers&&(k=b.headers["Content-Type"]);b.Ab||J(a)&&!b.withCredentials&&J(a)!=document.location.hostname||"POST"!=b.method||k&&"application/x-www-form-urlencoded"!=k||b.D&&b.D[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=He(e),qb(e,f),e=b.xa&&"JSON"==b.xa?JSON.stringify(e):$b(e));f=e||f&&!kb(f);!Ue&&f&&"POST"!=b.method&&(Ue=!0,S(Error("AJAX request with postData should use POST")));
return e}
function bf(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Ee(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?cf(a):null)e={},G(a.getElementsByTagName("*"),function(g){e[g.tagName]=df(g)})}d&&ef(e);
return e}
function ef(a){if(Na(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Rb(a[b],null);a[c]=d}else ef(a[b])}}
function cf(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function df(a){var b="";G(a.childNodes,function(c){b+=c.nodeValue});
return b}
function af(a,b,c,d,e,f,g){function k(){4==(h&&"readyState"in h?h.readyState:0)&&b&&De(b)(h)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var h=Qe();if(!h)return null;"onloadend"in h?h.addEventListener("loadend",k,!1):h.onreadystatechange=k;T("debug_forward_web_query_parameters")&&(a=We(a));h.open(c,a,!0);f&&(h.responseType=f);g&&(h.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Ve(a,e))for(var l in e)h.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&h.setRequestHeader("Content-Type","application/x-www-form-urlencoded");h.send(d);
return h}
;var ff={},gf=0;
function hf(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=Mb,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a instanceof H||(a="object"==typeof a&&a.M?a.L():String(a),a=Jb.test(a)?new H(Gb,a):null),b=Ib(a||Lb),"about:invalid#zClosurez"===b?a="":(b instanceof Pb?a=b:(d="object"==typeof b,a=null,d&&b.ka&&(a=b.ha()),b=yb(d&&b.M?b.L():String(b)),a=Rb(b,a)),a instanceof Pb&&a.constructor===Pb&&a.h===Qb?a=a.f:(Ka(a),a="type_error:SafeHtml"),a=encodeURIComponent(String(Fd(a.toString())))),/^[\s\xa0]*$/.test(a)||(a=
Dc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))):e?af(a,b,"POST",e,d):R("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?af(a,b,"GET","",d):jf(a,b)||kf(a,b))}
function jf(a,b){if(!xe("web_use_beacon_api_for_ad_click_server_pings"))return!1;if(xe("use_sonic_js_library_for_v4_support")){a:{try{var c=new Xa({url:a});if(c.h&&c.g||c.i){var d=Yb(a.match(Xb)[5]||null);var e=!(!d||!d.endsWith("/aclk")||"1"!==cc(a,"ri"));break a}}catch(f){}e=!1}if(!e)return!1}else if(e=Yb(a.match(Xb)[5]||null),!e||-1==e.indexOf("/aclk")||"1"!==cc(a,"ae")||"1"!==cc(a,"act"))return!1;return lf(a)?(b&&b(),!0):!1}
function lf(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function kf(a,b){var c=new Image,d=""+gf++;ff[d]=c;c.onload=c.onerror=function(){b&&ff[d]&&b();delete ff[d]};
c.src=a}
;var mf=0;A("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++mf},void 0);var nf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function of(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in nf||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.f=a.pageX;this.g=a.pageY}}catch(e){}}
function pf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.f=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.g=a.clientY+b}}
of.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
of.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
of.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var jb=y.ytEventsEventsListeners||{};A("ytEventsEventsListeners",jb,void 0);var qf=y.ytEventsEventsCounter||{count:0};A("ytEventsEventsCounter",qf,void 0);
function rf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return ib(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Na(e[4])&&Na(d)&&mb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var sf=Ya(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function tf(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=rf(a,b,c,d);if(e)return e;e=++qf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(k){k=new of(k);if(!Hc(k.relatedTarget,function(h){return h==a}))return k.currentTarget=a,k.type=b,c.call(a,k)}:function(k){k=new of(k);
k.currentTarget=a;return c.call(a,k)};
g=De(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),sf()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);jb[e]=[a,b,c,g,d];return e}
function uf(a){a&&("string"==typeof a&&(a=[a]),G(a,function(b){if(b in jb){var c=jb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?sf()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete jb[b]}}))}
;var vf=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function wf(a){this.u=a;this.f=null;this.j=0;this.m=null;this.l=0;this.h=[];for(a=0;4>a;a++)this.h.push(0);this.i=0;this.G=tf(window,"mousemove",C(this.H,this));a=C(this.C,this);"function"===typeof a&&(a=De(a));this.K=window.setInterval(a,25)}
E(wf,L);wf.prototype.H=function(a){void 0===a.f&&pf(a);var b=a.f;void 0===a.g&&pf(a);this.f=new yc(b,a.g)};
wf.prototype.C=function(){if(this.f){var a=vf();if(0!=this.j){var b=this.m,c=this.f,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.j);this.h[this.i]=.5<Math.abs((d-this.l)/this.l)?1:0;for(c=b=0;4>c;c++)b+=this.h[c]||0;3<=b&&this.u();this.l=d}this.j=a;this.m=this.f;this.i=(this.i+1)%4}};
wf.prototype.o=function(){window.clearInterval(this.K);uf(this.G)};function xf(){}
function yf(a,b){return zf(a,0,b)}
function Af(a,b){return zf(a,1,b)}
;function Bf(){}
v(Bf,xf);function zf(a,b,c){isNaN(c)&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):U(a,c||0)}
function Cf(a){if(!isNaN(a)){var b=B("yt.scheduler.instance.cancelJob");b?b(a):V(a)}}
Bf.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
Bf.prototype.pause=function(){var a=B("yt.scheduler.instance.pause");a&&a()};
Ja(Bf);Bf.getInstance();var Df={};
function Ef(a){var b=void 0===a?{}:a;a=void 0===b.La?!0:b.La;b=void 0===b.Xa?!1:b.Xa;if(null==B("_lact",window)){var c=parseInt(R("LACT"),10);c=isFinite(c)?D()-Math.max(c,0):-1;A("_lact",c,window);A("_fact",c,window);-1==c&&Ff();tf(document,"keydown",Ff);tf(document,"keyup",Ff);tf(document,"mousedown",Ff);tf(document,"mouseup",Ff);a&&(b?tf(window,"touchmove",function(){Gf("touchmove",200)},{passive:!0}):(tf(window,"resize",function(){Gf("resize",200)}),tf(window,"scroll",function(){Gf("scroll",200)})));
new wf(function(){Gf("mouse",100)});
tf(document,"touchstart",Ff,{passive:!0});tf(document,"touchend",Ff,{passive:!0})}}
function Gf(a,b){Df[a]||(Df[a]=!0,Af(function(){Ff();Df[a]=!1},b))}
function Ff(){null==B("_lact",window)&&Ef();var a=D();A("_lact",a,window);-1==B("_fact",window)&&A("_fact",a,window);(a=B("ytglobal.ytUtilActivityCallback_"))&&a()}
function Hf(){var a=B("_lact",window),b;null==a?b=-1:b=Math.max(D()-a,0);return b}
;var If=y.ytPubsubPubsubInstance||new P,Jf=y.ytPubsubPubsubSubscribedKeys||{},Kf=y.ytPubsubPubsubTopicToKeys||{},Lf=y.ytPubsubPubsubIsSynchronous||{};function Mf(a,b){var c=Nf();if(c){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Jf[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Lf[a]?f():U(f,0)}catch(g){S(g)}},void 0);
Jf[d]=!0;Kf[a]||(Kf[a]=[]);Kf[a].push(d);return d}return 0}
function Of(a){var b=Nf();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),G(a,function(c){b.unsubscribeByKey(c);delete Jf[c]}))}
function Pf(a,b){var c=Nf();c&&c.publish.apply(c,arguments)}
function Qf(a){var b=Nf();if(b)if(b.clear(a),a)Rf(a);else for(var c in Kf)Rf(c)}
function Nf(){return y.ytPubsubPubsubInstance}
function Rf(a){Kf[a]&&(a=Kf[a],G(a,function(b){Jf[b]&&delete Jf[b]}),a.length=0)}
P.prototype.subscribe=P.prototype.subscribe;P.prototype.unsubscribeByKey=P.prototype.P;P.prototype.publish=P.prototype.O;P.prototype.clear=P.prototype.clear;A("ytPubsubPubsubInstance",If,void 0);A("ytPubsubPubsubTopicToKeys",Kf,void 0);A("ytPubsubPubsubIsSynchronous",Lf,void 0);A("ytPubsubPubsubSubscribedKeys",Jf,void 0);var Sf=window,W=Sf.ytcsi&&Sf.ytcsi.now?Sf.ytcsi.now:Sf.performance&&Sf.performance.timing&&Sf.performance.now&&Sf.performance.timing.navigationStart?function(){return Sf.performance.timing.navigationStart+Sf.performance.now()}:function(){return(new Date).getTime()};var Tf=Oe("initial_gel_batch_timeout",1E3),Uf=Math.pow(2,16)-1,Vf=null,Wf=0,Xf=void 0,Yf=0,Zf=0,$f=0,ag=!0,bg=y.ytLoggingTransportLogPayloadsQueue_||{};A("ytLoggingTransportLogPayloadsQueue_",bg,void 0);var cg=y.ytLoggingTransportGELQueue_||new Map;A("ytLoggingTransportGELQueue_",cg,void 0);var dg=y.ytLoggingTransportTokensToCttTargetIds_||{};A("ytLoggingTransportTokensToCttTargetIds_",dg,void 0);
function eg(){V(Yf);V(Zf);Zf=0;Xf&&Xf.isReady()?(fg(cg),"log_event"in bg&&fg(Object.entries(bg.log_event)),cg.clear(),delete bg.log_event):gg()}
function gg(){T("web_gel_timeout_cap")&&!Zf&&(Zf=U(eg,6E4));V(Yf);var a=R("LOGGING_BATCH_TIMEOUT",Oe("web_gel_debounce_ms",1E4));T("shorten_initial_gel_batch_timeout")&&ag&&(a=Tf);Yf=U(eg,a)}
function fg(a){var b=Xf,c=Math.round(W());a=t(a);for(var d=a.next();!d.done;d=a.next()){var e=t(d.value);d=e.next().value;var f=e.next().value;e=ob({context:hg(b.f||ig())});e.events=f;(f=dg[d])&&jg(e,d,f);delete dg[d];kg(e,c);lg(b,"log_event",e,{retry:!0,onSuccess:function(){Wf=Math.round(W()-c)}});
ag=!1}}
function kg(a,b){a.requestTimeMs=String(b);T("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=R("EVENT_ID",void 0);if(c){var d=R("BATCH_CLIENT_COUNTER",void 0)||0;!d&&T("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*Uf/2));d++;d>Uf&&(d=1);Q("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;Vf&&Wf&&T("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:Vf,roundtripMs:String(Wf)});Vf=c;Wf=0}}
function jg(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var mg=y.ytLoggingGelSequenceIdObj_||{};A("ytLoggingGelSequenceIdObj_",mg,void 0);
function ng(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||W());e[a]=b;e.context={lastActivityMs:String(d.timestamp?-1:Hf())};T("log_sequence_info_on_gel_web")&&d.S&&(a=e.context,b=d.S,mg[b]=b in mg?mg[b]+1:0,a.sequence={index:mg[b],groupKey:b},d.zb&&delete mg[d.S]);d=d.ga;a="";d&&(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),dg[d.token]=a,a=d.token);d=cg.get(a)||[];cg.set(a,d);d.push(e);c&&(Xf=new c);c=Oe("web_logging_max_batch")||100;e=
W();d.length>=c?eg():10<=e-$f&&(gg(),$f=e)}
;function og(){for(var a={},b=t(Object.entries(He(R("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=t(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function pg(){return"INNERTUBE_API_KEY"in ve&&"INNERTUBE_API_VERSION"in ve}
function ig(){return{innertubeApiKey:R("INNERTUBE_API_KEY",void 0),innertubeApiVersion:R("INNERTUBE_API_VERSION",void 0),Ma:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Na:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Pa:R("INNERTUBE_CONTEXT_HL",void 0),Oa:R("INNERTUBE_CONTEXT_GL",void 0),Qa:R("INNERTUBE_HOST_OVERRIDE",void 0)||"",Sa:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Ra:!!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1)}}
function hg(a){a={client:{hl:a.Pa,gl:a.Oa,clientName:a.Na,clientVersion:a.innertubeContextClientVersion,configInfo:a.Ma}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));b=R("EXPERIMENTS_TOKEN","");""!==b&&(a.client.experimentsToken=b);b=[];var c=R("EXPERIMENTS_FORCED_FLAGS",{});for(d in c)b.push({key:d,value:String(c[d])});var d=R("EXPERIMENT_FLAGS",{});for(var e in d)e.startsWith("force_")&&void 0===c[e]&&b.push({key:e,value:String(d[e])});0<b.length&&(a.request={internalExperimentFlags:b});
R("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&(a.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});a.client=Object.assign(a.client,og());return a}
function qg(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.wb||R("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().vb:b=Yc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=R("SESSION_INDEX",0),T("pageid_as_header_web")&&(d["X-Goog-PageId"]=R("DELEGATED_SESSION_ID")));return d}
;function rg(a){a=Object.assign({},a);delete a.Authorization;var b=Yc();if(b){var c=new qd;c.update(R("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;La(b);void 0===c&&(c=0);if(!sc){sc={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));rc[f]=g;for(var k=0;k<g.length;k++){var h=g[k];void 0===sc[h]&&(sc[h]=k)}}}c=rc[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],m=(f=e+1<b.length)?
b[e+1]:0;h=(g=e+2<b.length)?b[e+2]:0;k=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|h>>6;h&=63;g||(h=64,f||(m=64));d.push(c[k],c[l],c[m]||"",c[h]||"")}a.hash=d.join("")}return a}
function sg(a){a=rg(a);var b=new qd;b.update(JSON.stringify(a,Object.keys(a).sort()));a=b.digest();b="";for(var c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}
;function tg(a,b,c,d){wc.set(""+a,b,{sa:c,path:"/",domain:void 0===d?"youtube.com":d,secure:!1})}
;function ug(){var a=new ne;(a=a.isAvailable()?new te(a,"yt.innertube"):null)||(a=new oe("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new je(a):null;this.g=document.domain||window.location.hostname}
ug.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,D()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Fd(b))}catch(f){return}else e=escape(b);tg(a,e,c,this.g)};
ug.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=wc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
ug.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;wc.remove(""+a,"/",void 0===b?"youtube.com":b)};var vg;function wg(){vg||(vg=new ug);return vg}
function xg(a,b,c,d){if(d)return null;d=wg().get("nextId",!0)||1;var e=wg().get("requests",!0)||{};e[d]={method:a,request:b,authState:rg(c),requestTime:Math.round(W())};wg().set("nextId",d+1,86400,!0);wg().set("requests",e,86400,!0);return d}
function yg(a){var b=wg().get("requests",!0)||{};delete b[a];wg().set("requests",b,86400,!0)}
function zg(a){var b=wg().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(W())-d.requestTime)){var e=d.authState,f=rg(qg(!1));mb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(W())),lg(a,d.method,e,{}));delete b[c]}}wg().set("requests",b,86400,!0)}}
;function Ag(){}
;function Bg(){var a=Error.call(this,"Transaction was aborted");this.message=a.message;"stack"in a&&(this.stack=a.stack);Object.setPrototypeOf(this,Bg.prototype)}
v(Bg,Error);function Cg(a){return(a instanceof DOMException||a instanceof DOMError)&&"VersionError"===a.name}
;function X(a){return new O(function(b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){a.removeEventListener("success",e);a.removeEventListener("error",d)}
a.addEventListener("success",e);a.addEventListener("error",d)})}
;function Dg(a){this.f=a}
n=Dg.prototype;n.add=function(a,b,c){return Eg(Fg(this,[a],"readwrite"),a).add(b,c)};
n.clear=function(a){return Eg(Fg(this,[a],"readwrite"),a).clear()};
n.close=function(){this.f.close()};
n.count=function(a,b){return Eg(Fg(this,[a]),a).count(b)};
function Gg(a,b,c){a=a.f.createObjectStore(b,c);return new Hg(a)}
n["delete"]=function(a,b){return Eg(Fg(this,[a],"readwrite"),a)["delete"](b)};
n.get=function(a,b){return Eg(Fg(this,[a]),a).get(b)};
function Fg(a,b,c){a=a.f.transaction(b,c);return new Ig(a)}
function Hg(a){this.f=a}
n=Hg.prototype;n.add=function(a,b){return X(this.f.add(a,b))};
n.clear=function(){return X(this.f.clear()).then(function(){})};
n.count=function(a){return X(this.f.count(a))};
n["delete"]=function(a){return X(this.f["delete"](a))};
n.get=function(a){return X(this.f.get(a))};
n.index=function(a){return new Jg(this.f.index(a))};
n.getName=function(){return this.f.name};
function Ig(a){var b=this;this.f=a;this.g=new Map;this.done=new O(function(c,d){b.f.addEventListener("complete",function(){c()});
b.f.addEventListener("error",function(){d(b.f.error)});
b.f.addEventListener("abort",function(){d(new Bg)})})}
Ig.prototype.abort=function(){this.f.abort();return this.done};
function Eg(a,b){var c=a.f.objectStore(b),d=a.g.get(c);d||(d=new Hg(c),a.g.set(c,d));return d}
function Jg(a){this.f=a}
Jg.prototype.count=function(a){return X(this.f.count(a))};
Jg.prototype.get=function(a){return X(this.f.get(a))};
function Kg(a,b){this.request=a;this.f=b}
function Lg(a){return X(a).then(function(b){return null===b?null:new Kg(a,b)})}
Kg.prototype["delete"]=function(){return X(this.f["delete"]()).then(function(){})};
Kg.prototype.getValue=function(){return this.f.value};
Kg.prototype.update=function(a){return X(this.f.update(a))};function Mg(a,b,c){function d(){m||(m=new Dg(f.result));return m}
var e=Ig;var f=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var g=c.f,k=c.blocking,h=c.g,l=c.upgrade,m;l&&f.addEventListener("upgradeneeded",function(q){if(null===q.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");var u=d(),p=new e(f.transaction);l(u,q.oldVersion,q.newVersion,p)});
g&&f.addEventListener("blocked",function(){g()});
return X(f).then(function(q){k&&q.addEventListener("versionchange",function(){k(d())});
h&&q.addEventListener("close",function(){h()});
return d()})}
function Ng(a,b,c){c=void 0===c?{}:c;return Mg(a,b,c)}
;var Og;function Pg(){return M(this,function b(){var c,d,e;return x(b,function(f){switch(f.f){case 1:if(!self.indexedDB)return f["return"](!1);sa(f);e=!1;return w(f,Ng("yt-idb-test-do-not-use",void 0,{blocking:function(){e=!0;c&&(c.close(),c=void 0)}}),5);
case 5:return c=f.g,w(f,Ng("yt-idb-test-do-not-use",c.f.version+1),6);case 6:return d=f.g,d.close(),d=void 0,f["return"](e);case 3:ua(f);if(c)try{c.close()}catch(g){}if(d)try{d.close()}catch(g){}va(f);break;case 2:return ta(f),f["return"](!1)}})})}
function Qg(){return void 0!==Og?Qd(Og):new O(function(a){Pg().then(function(b){Og=b;a(b)})})}
;var Rg;function Sg(){function a(b){b.close();Rg=void 0}
Rg||(Rg=Td(Ng("YtIdbMeta",1,{blocking:a,upgrade:function(b,c){1>c&&Gg(b,"databases",{keyPath:"actualName"})}}),function(b){return Cg(b)?Ng("YtIdbMeta",void 0,{blocking:a}):Rd(b)}));
return Rg}
function Tg(){var a={fa:"LogsDataBase",publicName:"LogsDataBase",Ba:void 0,Aa:!1};return Sg().then(function(b){return b.get("databases",a.fa).then(function(c){if(c?a.fa!==c.fa||a.publicName!==c.publicName||a.Ba!==c.Ba||a.Aa!==c.Aa:1)return c=Eg(Fg(b,["databases"],"readwrite"),"databases"),X(c.f.put(a,void 0))})})}
function Ug(){return Sg().then(function(a){return a["delete"]("databases","LogsDataBase")})}
;function Vg(a,b){b=void 0===b?{}:b;return Td(Tg().then(function(){return Ng("LogsDataBase",a,b)}),function(c){return Td(Ug(),function(){}).then(function(){return Rd(c)})})}
;var Wg;function Xg(){return M(this,function b(){return x(b,function(c){if(!Wg)try{Wg=Vg(1,{upgrade:function(d,e){1>e&&(Gg(d,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0}).f.createIndex("newRequest",["status","authHash","timestamp"],{unique:!1}),Gg(d,"sapisid"))}})}catch(d){if(!Cg(d))return S(d),c["return"](Promise.reject(d));
Wg=Vg()}return c["return"](Wg)})})}
function Yg(a){return M(this,function c(){var d,e,f,g,k;return x(c,function(h){switch(h.f){case 1:return w(h,Xg(),2);case 2:return d=h.g,e=Eg(Fg(d,["LogsRequestsStore"],"readwrite"),"LogsRequestsStore"),w(h,Zg(),3);case 3:return f=h.g,g=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),authHash:f}),w(h,e.add(g),4);case 4:return k=h.g,h["return"](k)}})})}
function $g(){return M(this,function b(){var c,d,e,f,g,k,h,l;return x(b,function(m){switch(m.f){case 1:return w(m,Zg(),2);case 2:return c=m.g,d=["NEW",c,0],e=["NEW",c,W()],f=IDBKeyRange.bound(d,e),w(m,Xg(),3);case 3:g=m.g;k=Fg(g,["LogsRequestsStore"],"readwrite");var q=Eg(k,"LogsRequestsStore").index("newRequest").f.openCursor(f,"prev");q=Lg(q);return w(m,q,4);case 4:h=m.g;l=void 0;if(null===h||void 0===h||!h.getValue()){m.F(5);break}l=h.getValue();l.status="QUEUED";return w(m,h.update(l),5);case 5:return m["return"](l)}})})}
function ah(a){return M(this,function c(){var d,e,f;return x(c,function(g){switch(g.f){case 1:return w(g,Xg(),2);case 2:return d=g.g,e=Eg(Fg(d,["LogsRequestsStore"],"readwrite"),"LogsRequestsStore"),w(g,e.get(a),3);case 3:return f=g.g,f.status="QUEUED",w(g,X(e.f.put(f,void 0)),4);case 4:return g["return"](f)}})})}
function bh(a){return M(this,function c(){var d,e,f;return x(c,function(g){switch(g.f){case 1:return w(g,Xg(),2);case 2:return d=g.g,e=Eg(Fg(d,["LogsRequestsStore"],"readwrite"),"LogsRequestsStore"),w(g,e.get(a),3);case 3:return f=g.g,f.status="NEW",f.sendCount+=1,w(g,X(e.f.put(f,void 0)),4);case 4:return g["return"](f)}})})}
function ch(){return M(this,function b(){var c,d;return x(b,function(e){if(1==e.f)return w(e,Xg(),2);if(3!=e.f)return c=e.g,w(e,c.count("LogsRequestsStore"),3);d=e.g;return e["return"](!d)})})}
function dh(a){return M(this,function c(){var d;return x(c,function(e){if(1==e.f)return w(e,Xg(),2);d=e.g;return e["return"](d["delete"]("LogsRequestsStore",a))})})}
function Zg(){return M(this,function b(){var c;return x(b,function(d){if(1==d.f){Ag.f||(Ag.f=new Ag);var e={};var f=Yc([]);f&&(e.Authorization=f,e["X-Goog-AuthUser"]=R("SESSION_INDEX",0),"INNERTUBE_HOST_OVERRIDE"in ve||(e["X-Origin"]=window.location.origin),T("pageid_as_header_web")&&"DELEGATED_SESSION_ID"in ve&&(e["X-Goog-PageId"]=R("DELEGATED_SESSION_ID")));e=Qd(e);return w(d,e,2)}c=d.g;return d["return"](sg(c))})})}
;var eh=Oe("network_polling_interval",3E4);function fh(){this.i=0;this.f=window.navigator.onLine;gh(this);hh(this)}
function ih(){fh.f||(fh.f=new fh);return fh.f}
function jh(a){var b=kh,c=lh;mh(a);(new O(function(d){a.g=d})).then(function(){b();
c&&(a.h=c)})}
function hh(a){window.addEventListener("online",function(){a.f=!0;a.g&&a.g()})}
function gh(a){window.addEventListener("offline",function(){a.f=!1;a.h&&a.h()})}
function mh(a){a.i||(nh(a),window.navigator.onLine&&a.g&&a.g())}
function nh(a){a.i=yf(function(){window.navigator.onLine?(!1===a.f&&S(Error("NetworkStatusManager missed online event.")),a.f=!0,a.g&&a.g()):(!0===a.f&&S(Error("NetworkStatusManager missed offline event.")),a.f=!1,a.h&&a.h());nh(a)},eh)}
;var oh=Oe("networkless_throttle_timeout")||100,ph=Oe("networkless_retry_attempts")||1,qh=0;function rh(a,b){Qg().then(function(c){if(c&&!T("networkless_bypass_write")){var d={url:a,options:b,timestamp:W(),status:"NEW",sendCount:0};Yg(d).then(function(e){d.id=e;e=ih();e.f?sh(d):jh(e)})["catch"](function(){sh(d);
S(Error("Networkless Logging: Log request setting to indexedDB failed."))})}else $e(a,b)})}
function kh(){qh||(qh=Af(function(){sh();qh=0;kh()},oh))}
function lh(){Cf(qh);qh=0}
function sh(a){M(this,function c(){var d=this,e,f,g,k;return x(c,function(h){switch(h.f){case 1:e=d;if(!a)return w(h,$g(),6);if(!a.id){h.F(3);break}return w(h,ah(a.id),5);case 5:a=h.g;h.F(3);break;case 6:if(a=h.g){h.F(3);break}return w(h,ch(),8);case 8:return(f=h.g)&&lh(),h["return"]();case 3:if(th(a))g=a.options.onError?a.options.onError:function(){},k=a.options.onSuccess?a.options.onSuccess:function(){},a.options.onError=function(l,m){return M(e,function u(){return x(u,function(p){if(1==p.f)return a&&
a.id?a.sendCount<ph?w(p,bh(a.id),6):w(p,dh(a.id),2):p.F(2);
2!=p.f&&(qh||jh(ih()),g(l,m));g(l,m);p.f=0})})},a.options.onSuccess=function(l,m){return M(e,function u(){return x(u,function(p){if(1==p.f)return a&&a.id?w(p,dh(a.id),2):p.F(2);
k(l,m);p.f=0})})},$e(a.url,a.options);
else if(Ee(Error("Networkless Logging: Stored logs request expired age limit")),a.id)return w(h,dh(a.id),0);h.F(0)}})})}
function th(a){a=a.timestamp;return 2592E6<=W()-a?!1:!0}
;function uh(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:fa(t(c)))}
v(uh,Error);function vh(a){var b=this;this.f=null;a?this.f=a:pg()&&(this.f=ig());yf(function(){zg(b)},5E3)}
vh.prototype.isReady=function(){!this.f&&pg()&&(this.f=ig());return!!this.f};
function lg(a,b,c,d){!R("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Ee(new uh("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady())throw b=new uh("innertube xhrclient not ready",b,c,d),S(b),b.f=0,b;var e={headers:{"Content-Type":"application/json"},method:"POST",D:c,xa:"JSON",R:function(){d.R()},
wa:d.R,onSuccess:function(p,z){if(d.onSuccess)d.onSuccess(z)},
va:function(p){if(d.onSuccess)d.onSuccess(p)},
onError:function(p,z){if(d.onError)d.onError(z)},
Cb:function(p){if(d.onError)d.onError(p)},
timeout:d.timeout,withCredentials:!0},f="",g=a.f.Qa;g&&(f=g);g=a.f.Sa||!1;var k=qg(g,f,d);Object.assign(e.headers,k);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var h="/youtubei/"+a.f.innertubeApiVersion+"/"+b,l={alt:"json"};a.f.Ra&&e.headers.Authorization||(l.key=a.f.innertubeApiKey);h=Ie(""+f+h,l||{},!0);var m;if(d.retry&&T("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(m=xg(b,c,k,g))){var q=e.onSuccess,u=e.va;e.onSuccess=function(p,z){yg(m);q(p,z)};
c.va=function(p,z){yg(m);u(p,z)}}try{T("use_fetch_for_op_xhr")?Xe(h,e):T("networkless_logging")&&d.retry?(e.method="POST",rh(h,e)):(e.method="POST",e.D||(e.D={}),$e(h,e))}catch(p){if("InvalidAccessError"==p.name)m&&(yg(m),m=0),Ee(Error("An extension is blocking network request."));
else throw p;}m&&yf(function(){zg(a)},5E3)}
;function wh(a,b,c){c=void 0===c?{}:c;var d=vh;R("ytLoggingEventsDefaultDisabled",!1)&&vh==vh&&(d=null);ng(a,b,d,c)}
;var xh=[{ta:function(a){return"Cannot read property '"+a.key+"'"},
na:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{ta:function(a){return"Cannot call '"+a.key+"'"},
na:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
groups:["key"]}]}}];var yh=new Set,zh=0;function Ah(a){Bh(a,"WARNING")}
function Bh(a,b,c,d,e){e=void 0===e?{}:e;e.name=c||R("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=d||R("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=e||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;var f=void 0===f?!1:f;if(a&&(T("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),(window&&
window.yterr||f)&&!(5<=zh)&&0!==a.f)){var g=tc(a);f=g.message||"Unknown Error";d=g.name||"UnknownError";e=g.lineNumber||"Not available";var k=g.fileName||"Not available";g=g.stack||a.g||"Not available";if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var h=0,l=0;l<a.args.length;l++){var m=a.args[l],q="params."+l;h+=q.length;if(m)if(Array.isArray(m))for(var u=c,p=0;p<m.length&&!(m[p]&&(h+=Ch(p,m[p],q,u),500<h));p++);else if("object"===typeof m)for(u in u=void 0,p=c,m){if(m[u]&&(h+=Ch(u,m[u],
q,p),500<h))break}else c[q]=String(JSON.stringify(m)).substring(0,500),h+=c[q].length;else c[q]=String(JSON.stringify(m)).substring(0,500),h+=c[q].length;if(500<=h)break}else if(a.hasOwnProperty("params")&&a.params)if(m=a.params,"object"===typeof a.params)for(l in q=0,m){if(m[l]&&(h="params."+l,u=String(JSON.stringify(m[l])).substr(0,500),c[h]=u,q+=h.length+u.length,500<q))break}else c.params=String(JSON.stringify(m)).substr(0,500);c={message:f,name:d,lineNumber:e,fileName:k,stack:g,params:c};a=Number(a.columnNumber);
isNaN(a)||(c.lineNumber=c.lineNumber+":"+a);a=t(xh);for(f=a.next();!f.done;f=a.next())if(f=f.value,f.na[c.name])for(e=t(f.na[c.name]),d=e.next();!d.done;d=e.next())if(k=d.value,d=c.message.match(k.regexp)){c.params["error.original"]=d[0];e=k.groups;k={};for(g=0;g<e.length;g++)k[e[g]]=d[g+1],c.params["error."+e[g]]=d[g+1];c.message=f.ta(k);break}window.yterr&&"function"===typeof window.yterr&&window.yterr(c);if(!(yh.has(c.message)||0<=c.stack.indexOf("/YouTubeCenter.js")||0<=c.stack.indexOf("/mytube.js"))){if(T("kevlar_gel_error_routing")){f=
b;d={stackTrace:c.stack};c.fileName&&(d.filename=c.fileName);a=c.lineNumber&&c.lineNumber.split?c.lineNumber.split(":"):[];0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(d.lineNumber=Number(a[0]),d.columnNumber=Number(a[1])):d.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:c.message};"ERROR"===f?a.level="ERROR_LEVEL_ERROR":"WARNING"===f&&(a.level="ERROR_LEVEL_WARNNING");f={isObfuscated:!0,browserStackInfo:d};d={pageUrl:window.location.href,
kvPairs:[]};if(e=c.params)for(k=t(Object.keys(e)),g=k.next();!g.done;g=k.next())g=g.value,d.kvPairs.push({key:"client."+g,value:String(e[g])});wh("clientError",{errorMetadata:d,stackTrace:f,logMessage:a});eg()}a=c.params||{};b={jb:{a:"logerror",t:"jserror",type:c.name,msg:c.message.substr(0,250),line:c.lineNumber,level:b,"client.name":a.name},D:{url:R("PAGE_NAME",window.location.href),file:c.fileName},method:"POST"};a.version&&(b["client.version"]=a.version);if(b.D){c.stack&&(b.D.stack=c.stack);f=
t(Object.keys(a));for(d=f.next();!d.done;d=f.next())d=d.value,b.D["client."+d]=a[d];if(a=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(f=t(Object.keys(a)),d=f.next();!d.done;d=f.next())d=d.value,b.D[d]=a[d];a=R("SERVER_NAME",void 0);f=R("SERVER_VERSION",void 0);a&&f&&(b.D["server.name"]=a,b.D["server.version"]=f)}$e(R("ECATCHER_REPORT_HOST","")+"/error_204",b);yh.add(c.message);zh++}}}
function Ch(a,b,c,d){c+="."+a;a=String(JSON.stringify(b)).substr(0,500);d[c]=a;return c.length+a.length}
;function Dh(a,b,c,d,e,f){Bh(a,void 0===b?"ERROR":b,c,d,f)}
;var Eh=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};A("yt.msgs_",Eh,void 0);function Fh(a){ue(Eh,arguments)}
;function Gh(a){a&&(a.dataset?a.dataset[Hh("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Ih(a,b){return a?a.dataset?a.dataset[Hh(b)]:a.getAttribute("data-"+b):null}
var Jh={};function Hh(a){return Jh[a]||(Jh[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Kh=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Lh=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Mh(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Kh,""),c=c.replace(Lh,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Nh(a,b,c)}
function Nh(a,b,c){c=void 0===c?null:c;var d=Oh(a),e=document.getElementById(d),f=e&&Ih(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Mf(d,b),b=""+Oa(b),Ph[b]=f),g||(e=Qh(a,d,function(){Ih(e,"loaded")||(Gh(e),Pf(d),U(Ua(Qf,d),0))},c)))}
function Qh(a,b,c,d){d=void 0===d?null:d;var e=Ec(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Ub(e,Ic(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Rh(a){a=Oh(a);var b=document.getElementById(a);b&&(Qf(a),b.parentNode.removeChild(b))}
function Sh(a,b){if(a&&b){var c=""+Oa(b);(c=Ph[c])&&Of(c)}}
function Oh(a){var b=document.createElement("a");Sb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Wb(a)}
var Ph={};var Th=[],Uh=!1;function Vh(){if("1"!=hb(we(),"args","privembed")){var a=function(){Uh=!0;"google_ad_status"in window?Q("DCLKSTAT",1):Q("DCLKSTAT",2)};
Mh("//static.doubleclick.net/instream/ad_status.js",a);Th.push(Af(function(){Uh||"google_ad_status"in window||(Sh("//static.doubleclick.net/instream/ad_status.js",a),Uh=!0,Q("DCLKSTAT",3))},5E3))}}
function Wh(){return parseInt(R("DCLKSTAT",0),10)}
;function Xh(){this.g=!1;this.f=null}
Xh.prototype.initialize=function(a,b,c,d,e,f){var g=this;f=void 0===f?!1:f;b?(this.g=!0,Mh(b,function(){g.g=!1;window.botguard?Yh(g,c,d,f):(Rh(b),Ah(new uh("Unable to load Botguard","from "+b)))},e)):a&&(eval(a),window.botguard?Yh(this,c,d,f):Ah(Error("Unable to load Botguard from JS")))};
function Yh(a,b,c,d){if(d)try{a.f=new window.botguard.bg(b,c?function(){return c(b)}:Ia)}catch(e){Ah(e)}else{try{a.f=new window.botguard.bg(b)}catch(e){Ah(e)}c&&c(b)}}
Xh.prototype.dispose=function(){this.f=null};var Zh=new Xh;function $h(){return!!Zh.f}
function ai(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return Zh.f?Zh.f.invoke(void 0,void 0,a):null}
;var bi=D().toString();
function ci(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=D();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(bi)for(a=1,b=0;b<bi.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^bi.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var di=y.ytLoggingDocDocumentNonce_||ci();A("ytLoggingDocDocumentNonce_",di,void 0);var ei=1;function fi(a){this.f=a}
fi.prototype.getAsJson=function(){var a={};void 0!==this.f.trackingParams?a.trackingParams=this.f.trackingParams:(a.veType=this.f.veType,void 0!==this.f.veCounter&&(a.veCounter=this.f.veCounter),void 0!==this.f.elementIndex&&(a.elementIndex=this.f.elementIndex));void 0!==this.f.dataElement&&(a.dataElement=this.f.dataElement.getAsJson());void 0!==this.f.youtubeData&&(a.youtubeData=this.f.youtubeData);return a};
fi.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
fi.prototype.isClientVe=function(){return!this.f.trackingParams&&!!this.f.veType};function gi(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function hi(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function ii(a){return R(hi(void 0===a?0:a),void 0)}
A("yt_logging_screen.getRootVeType",ii,void 0);function ji(){var a=ii(0),b;a?b=new fi({veType:a,youtubeData:void 0}):b=null;return b}
function ki(){var a=R("csn-to-ctt-auth-info");a||(a={},Q("csn-to-ctt-auth-info",a));return a}
function li(a){a=void 0===a?0:a;var b=R(gi(a));if(!b&&!R("USE_CSN_FALLBACK",!0))return null;b||0!=a||(T("kevlar_client_side_screens")||T("c3_client_side_screens")?b="UNDEFINED_CSN":b=R("EVENT_ID"));return b?b:null}
A("yt_logging_screen.getCurrentCsn",li,void 0);function mi(a,b,c){var d=ki();(c=li(c))&&delete d[c];b&&(d[a]=b)}
function ni(a){return ki()[a]}
A("yt_logging_screen.getCttAuthInfo",ni,void 0);function oi(a,b,c,d){c=void 0===c?0:c;if(a!==R(gi(c))||b!==R(hi(c)))if(mi(a,d,c),Q(gi(c),a),Q(hi(c),b),0==c||T("web_screen_associated_all_layers"))b=function(){setTimeout(function(){a&&ng("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:di,clientScreenNonce:a},vh)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
A("yt_logging_screen.setCurrentScreen",oi,void 0);function pi(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=R("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=R("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=J(window.location.href);g&&f.push(g);g=J(d);if(0<=Za(f,g)||!g&&0==d.lastIndexOf("/",0))if(T("autoescape_tempdata_url")&&(f=document.createElement("a"),Sb(f,d),d=f.href),d){g=d.match(Xb);d=g[5];f=g[6];g=g[7];var k="";d&&(k+=d);f&&(k+="?"+f);g&&(k+="#"+g);d=k;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||b.ved)&&
(b=Object.assign({csn:li()},b)),h){var h=parseInt(h,10);isFinite(h)&&0<h&&(e=b,b="ST-"+Wb(d).toString(36),e=e?$b(e):"",tg(b,e,h||5))}else h=b,e="ST-"+Wb(d).toString(36),h=h?$b(h):"",tg(e,h,5)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var q=void 0===q?window:q;c=q.location;a=ac(a,l)+m;a=a instanceof H?a:Kb(a);c.href=Ib(a)}return!0}
;function qi(a,b){this.version=a;this.args=b}
;function ri(a,b){this.topic=a;this.f=b}
ri.prototype.toString=function(){return this.topic};var si=B("ytPubsub2Pubsub2Instance")||new P;P.prototype.subscribe=P.prototype.subscribe;P.prototype.unsubscribeByKey=P.prototype.P;P.prototype.publish=P.prototype.O;P.prototype.clear=P.prototype.clear;A("ytPubsub2Pubsub2Instance",si,void 0);var ti=B("ytPubsub2Pubsub2SubscribedKeys")||{};A("ytPubsub2Pubsub2SubscribedKeys",ti,void 0);var ui=B("ytPubsub2Pubsub2TopicToKeys")||{};A("ytPubsub2Pubsub2TopicToKeys",ui,void 0);var vi=B("ytPubsub2Pubsub2IsAsync")||{};A("ytPubsub2Pubsub2IsAsync",vi,void 0);
A("ytPubsub2Pubsub2SkipSubKey",null,void 0);function wi(a,b){var c=xi();c&&c.publish.call(c,a.toString(),a,b)}
function yi(a){var b=zi,c=xi();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=B("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(ti[d])try{if(f&&b instanceof ri&&b!=e)try{var k=b.f,h=f;if(!h.args||!h.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!k.J){var l=new k;k.J=l.version}var m=k.J}catch(q){}if(!m||h.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(k,
eb(h.args))}catch(q){throw q.message="yt.pubsub2.Data.deserialize(): "+q.message,q;}}catch(q){throw q.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+q.message,q;}a.call(window,f)}catch(q){S(q)}},vi[b.toString()]?B("yt.scheduler.instance")?Af(g):U(g,0):g())});
ti[d]=!0;ui[b.toString()]||(ui[b.toString()]=[]);ui[b.toString()].push(d);return d}
function Ai(){var a=Bi,b=yi(function(c){a.apply(void 0,arguments);Ci(b)});
return b}
function Ci(a){var b=xi();b&&("number"===typeof a&&(a=[a]),G(a,function(c){b.unsubscribeByKey(c);delete ti[c]}))}
function xi(){return B("ytPubsub2Pubsub2Instance")}
;function Di(a){qi.call(this,1,arguments);this.csn=a}
v(Di,qi);var zi=new ri("screen-created",Di),Ei=[],Fi=0;function Gi(a,b,c){var d=T("use_default_events_client")?void 0:vh;b={csn:a,parentVe:b.getAsJson(),childVes:ab(c,function(f){return f.getAsJson()})};
c=t(c);for(var e=c.next();!e.done;e=c.next())e=e.value.getAsJson(),(kb(e)||!e.trackingParams&&!e.veType)&&Dh(Error("Child VE logged with no data"),"WARNING");c={ga:ni(a),S:a};"UNDEFINED_CSN"==a?Hi("visualElementAttached",b,c):d?ng("visualElementAttached",b,d,c):wh("visualElementAttached",b,c)}
function Hi(a,b,c){Ei.push({payloadName:a,payload:b,options:c});Fi||(Fi=Ai())}
function Bi(a){if(Ei){for(var b=t(Ei),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,ng(c.payloadName,c.payload,null,c.options));Ei.length=0}Fi=0}
;function Ii(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||nb(b);this.assets=a.assets||{};this.attrs=a.attrs||nb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Ii.prototype.clone=function(){var a=new Ii,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ka(c)?a[b]=nb(c):a[b]=c}return a};function Ji(){L.call(this);this.f=[]}
v(Ji,L);Ji.prototype.o=function(){for(;this.f.length;){var a=this.f.pop();a.target.removeEventListener(a.name,a.xb)}L.prototype.o.call(this)};var Ki=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Li(a){a=a||"";if(window.spf){var b=a.match(Ki);spf.style.load(a,b?b[1]:"",void 0)}else Mi(a)}
function Mi(a){var b=Ni(a),c=document.getElementById(b),d=c&&Ih(c,"loaded");d||c&&!d||(c=Oi(a,b,function(){Ih(c,"loaded")||(Gh(c),Pf(b),U(Ua(Qf,b),0))}))}
function Oi(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Ic(a);d.rel="stylesheet";d.href=wb(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Ni(a){var b=Ec(document,"A");Sb(b,new H(Gb,a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Wb(a)}
;function Pi(a,b,c,d){L.call(this);var e=this;this.m=this.Z=a;this.W=b;this.u=!1;this.api={};this.X=this.G=null;this.H=new P;Pc(this,Ua(Qc,this.H));this.j={};this.T=this.Y=this.h=this.ea=this.f=null;this.K=!1;this.l=this.C=null;this.aa={};this.Ca=["onReady"];this.da=null;this.oa=NaN;this.U={};this.i=d;Qi(this);this.ba("WATCH_LATER_VIDEO_ADDED",this.Ua.bind(this));this.ba("WATCH_LATER_VIDEO_REMOVED",this.Va.bind(this));this.ba("onAdAnnounce",this.Ea.bind(this));this.Da=new Ji(this);Pc(this,Ua(Qc,this.Da));
this.V=0;c?this.V=U(function(){e.loadNewVideoConfig(c)},0):d&&(Ri(this),Si(this))}
v(Pi,L);n=Pi.prototype;n.getId=function(){return this.W};
n.loadNewVideoConfig=function(a){if(!this.g){this.V&&(V(this.V),this.V=0);a instanceof Ii||(a=new Ii(a));this.ea=a;this.f=a.clone();Ri(this);this.Y||(this.Y=Ti(this,this.f.args.jsapicallback||"onYouTubePlayerReady"));this.f.args.jsapicallback=null;if(a=this.f.attrs.width)this.m.style.width=Sc(Number(a)||a);if(a=this.f.attrs.height)this.m.style.height=Sc(Number(a)||a);Si(this);this.u&&Ui(this)}};
function Ri(a){var b;a.i?b=a.i.rootElementId:b=a.f.attrs.id;a.h=b||a.h;"video-player"==a.h&&(a.h=a.W,a.f.attrs.id=a.W);a.m.id==a.h&&(a.h+="-player",a.f.attrs.id=a.h)}
n.Ia=function(){return this.ea};
function Ui(a){a.f&&!a.f.loaded&&(a.f.loaded=!0,"0"!=a.f.args.autoplay?a.api.loadVideoByPlayerVars(a.f.args):a.api.cueVideoByPlayerVars(a.f.args))}
function Vi(a){var b=!0,c=Wi(a);c&&a.f&&(a=Xi(a),b=Ih(c,"version")===a);return b&&!!B("yt.player.Application.create")}
function Si(a){if(!a.g&&!a.K){var b=Vi(a);if(b&&"html5"==(Wi(a)?"html5":null))a.T="html5",a.u||Yi(a);else if(Zi(a),a.T="html5",b&&a.l)a.Z.appendChild(a.l),Yi(a);else{a.f&&(a.f.loaded=!0);var c=!1;a.C=function(){c=!0;if(a.i)var d=a.i.serializedExperimentFlags;else a.f&&a.f.args&&(d=a.f.args.fflags);d="true"==Fe(d||"").player_bootstrap_method?B("yt.player.Application.createAlternate")||B("yt.player.Application.create"):B("yt.player.Application.create");var e=a.f?a.f.clone():void 0;d(a.Z,e,a.i);Yi(a)};
a.K=!0;b?a.C():(Mh(Xi(a),a.C),(b=a.i?a.i.cssUrl:a.f.assets.css)&&Li(b),$i(a)&&!c&&A("yt.player.Application.create",null,void 0))}}}
function Wi(a){var b=Ac(a.h);!b&&a.m&&a.m.querySelector&&(b=a.m.querySelector("#"+a.h));return b}
function Yi(a){if(!a.g){var b=Wi(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.K=!1,b.isNotServable&&a.f&&b.isNotServable(a.f.args.video_id)||aj(a)):a.oa=U(function(){Yi(a)},50)}}
function aj(a){Qi(a);a.u=!0;var b=Wi(a);b.addEventListener&&(a.G=bj(a,b,"addEventListener"));b.removeEventListener&&(a.X=bj(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=bj(a,b,e))}for(var f in a.j)a.G(f,a.j[f]);Ui(a);a.Y&&a.Y(a.api);a.H.O("onReady",a.api)}
function bj(a,b,c){var d=b[c];return function(){try{return a.da=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.da=e,Ee(e))}}}
function Qi(a){a.u=!1;if(a.X)for(var b in a.j)a.X(b,a.j[b]);for(var c in a.U)V(parseInt(c,10));a.U={};a.G=null;a.X=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.ba.bind(a);a.api.removeEventListener=a.Za.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Ja.bind(a);a.api.getPlayerType=a.Ka.bind(a);a.api.getCurrentVideoConfig=a.Ia.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.Ta.bind(a)}
n.Ta=function(){return this.u};
n.ba=function(a,b){var c=this,d=Ti(this,b);if(d){if(!(0<=Za(this.Ca,a)||this.j[a])){var e=cj(this,a);this.G&&this.G(a,e)}this.H.subscribe(a,d);"onReady"==a&&this.u&&U(function(){d(c.api)},0)}};
n.Za=function(a,b){if(!this.g){var c=Ti(this,b);c&&de(this.H,a,c)}};
function Ti(a,b){var c=b;if("string"==typeof b){if(a.aa[b])return a.aa[b];c=function(){var d=B(b);d&&d.apply(y,arguments)};
a.aa[b]=c}return c?c:null}
function cj(a,b){var c="ytPlayer"+b+a.W;a.j[b]=c;y[c]=function(d){var e=U(function(){if(!a.g){a.H.O(b,d);var f=a.U,g=String(e);g in f&&delete f[g]}},0);
lb(a.U,String(e))};
return c}
n.Ea=function(a){Pf("a11y-announce",a)};
n.Ua=function(a){Pf("WATCH_LATER_VIDEO_ADDED",a)};
n.Va=function(a){Pf("WATCH_LATER_VIDEO_REMOVED",a)};
n.Ka=function(){return this.T||(Wi(this)?"html5":null)};
n.Ja=function(){return this.da};
function Zi(a){a.cancel();Qi(a);a.T=null;a.f&&(a.f.loaded=!1);var b=Wi(a);b&&(Vi(a)||!$i(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));for(a=a.Z;b=a.firstChild;)a.removeChild(b)}
n.cancel=function(){if(this.C){var a=Xi(this);Sh(a,this.C)}V(this.oa);this.K=!1};
n.o=function(){Zi(this);if(this.l&&this.f&&this.l.destroy)try{this.l.destroy()}catch(b){S(b)}this.aa=null;for(var a in this.j)y[this.j[a]]=null;this.ea=this.f=this.api=null;delete this.Z;delete this.m;L.prototype.o.call(this)};
function $i(a){return a.f&&a.f.args&&a.f.args.fflags?-1!=a.f.args.fflags.indexOf("player_destroy_old_version=true"):!1}
function Xi(a){return a.i?a.i.jsUrl:a.f.assets.js}
;var dj={},ej="player_uid_"+(1E9*Math.random()>>>0);function fj(a){delete dj[a.getId()]}
;function gj(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function hj(a,b,c){"string"===typeof a&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});a:{if((b=a.mediaContentUrl)&&(b=/\/([ve]|embed)\/([^#?]+)/.exec(b))&&b[2]){b=b[2];break a}b=null}a.videoId=b;return ij(a)}
function ij(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function jj(a,b,c,d){if(Na(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function kj(a){a=void 0===a?!1:a;L.call(this);this.f=new P(a);Pc(this,Ua(Qc,this.f))}
E(kj,L);kj.prototype.subscribe=function(a,b,c){return this.g?0:this.f.subscribe(a,b,c)};
kj.prototype.j=function(a,b){this.g||this.f.O.apply(this.f,arguments)};function lj(a,b,c){kj.call(this);this.h=a;this.i=b;this.l=c}
v(lj,kj);function mj(a,b,c){if(!a.g){var d=a.h;d.g||a.i!=d.f||(a={id:a.l,command:b},c&&(a.data=c),d.f.postMessage(Fd(a),d.i))}}
lj.prototype.o=function(){this.i=this.h=null;kj.prototype.o.call(this)};function nj(a){L.call(this);this.f=a;this.f.subscribe("command",this.ya,this);this.h={};this.j=!1}
v(nj,L);n=nj.prototype;n.start=function(){this.j||this.g||(this.j=!0,mj(this.f,"RECEIVING"))};
n.ya=function(a,b,c){if(this.j&&!this.g){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&(a=d.event,a in this.h||(c=C(this.bb,this,a),this.h[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":"string"===typeof d.event&&oj(this,d.event);break;default:this.i.isReady()&&this.i.isExternalMethodAvailable(a,c||null)&&(b=pj(a,b||{}),c=this.i.handleExternalCall(a,b,c||null),(c=qj(a,c))&&this.j&&!this.g&&mj(this.f,a,c))}}};
n.bb=function(a,b){this.j&&!this.g&&mj(this.f,a,this.ia(a,b))};
n.ia=function(a,b){if(null!=b)return{value:b}};
function oj(a,b){b in a.h&&(a.removeEventListener(b,a.h[b]),delete a.h[b])}
n.o=function(){var a=this.f;a.g||de(a.f,"command",this.ya,this);this.f=null;for(var b in this.h)oj(this,b);L.prototype.o.call(this)};function rj(a,b){nj.call(this,b);this.i=a;this.start()}
v(rj,nj);rj.prototype.addEventListener=function(a,b){this.i.addEventListener(a,b)};
rj.prototype.removeEventListener=function(a,b){this.i.removeEventListener(a,b)};
function pj(a,b){switch(a){case "loadVideoById":return b=ij(b),[b];case "cueVideoById":return b=ij(b),[b];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return b=jj(b),[b];case "cuePlaylist":return b=jj(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function qj(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
rj.prototype.ia=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return nj.prototype.ia.call(this,a,b)};
rj.prototype.o=function(){nj.prototype.o.call(this);delete this.i};function sj(a,b,c){L.call(this);var d=this;c=c||R("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.h=b||null;this.u="*";this.i=c;this.sessionId=null;this.channel="widget";this.C=!!a;this.m=function(e){a:if(!("*"!=d.i&&e.origin!=d.i||d.h&&e.source!=d.h||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.C&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.i=d.u=e.origin);d.h=e.source;d.sessionId=f.id;d.f&&(d.f(),d.f=null);break;case "command":d.j&&(!d.l||0<=Za(d.l,f.func))&&d.j(f.func,f.args,e.origin)}}};
this.l=this.f=this.j=null;window.addEventListener("message",this.m)}
v(sj,L);sj.prototype.sendMessage=function(a,b){var c=b||this.h;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=JSON.stringify(a);c.postMessage(d,this.u)}catch(e){Ee(e)}}};
sj.prototype.o=function(){window.removeEventListener("message",this.m);L.prototype.o.call(this)};function tj(){var a=this.g=new sj(!!R("WIDGET_ID_ENFORCE")),b=C(this.Ya,this);a.j=b;a.l=null;this.g.channel="widget";if(a=R("WIDGET_ID"))this.g.sessionId=a;this.i=[];this.l=!1;this.j={}}
n=tj.prototype;n.Ya=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.j[a]||"onReady"==a||(this.addEventListener(a,uj(this,a)),this.j[a]=!0)):this.ua(a,b,c)};
n.ua=function(){};
function uj(a,b){return C(function(c){this.sendMessage(b,c)},a)}
n.addEventListener=function(){};
n.Ha=function(){this.l=!0;this.sendMessage("initialDelivery",this.ja());this.sendMessage("onReady");G(this.i,this.za,this);this.i=[]};
n.ja=function(){return null};
function vj(a,b){a.sendMessage("infoDelivery",b)}
n.za=function(a){this.l?this.g.sendMessage(a):this.i.push(a)};
n.sendMessage=function(a,b){this.za({event:a,info:void 0==b?null:b})};
n.dispose=function(){this.g=null};function wj(a){tj.call(this);this.f=a;this.h=[];this.addEventListener("onReady",C(this.Wa,this));this.addEventListener("onVideoProgress",C(this.gb,this));this.addEventListener("onVolumeChange",C(this.hb,this));this.addEventListener("onApiChange",C(this.ab,this));this.addEventListener("onPlaybackQualityChange",C(this.cb,this));this.addEventListener("onPlaybackRateChange",C(this.eb,this));this.addEventListener("onStateChange",C(this.fb,this));this.addEventListener("onWebglSettingsChanged",C(this.ib,
this))}
v(wj,tj);n=wj.prototype;n.ua=function(a,b,c){if(this.f.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&gj(a)){var d=b;if(Na(d[0])&&!Array.isArray(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=ij.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=hj.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=jj.apply(window,d)}d=e}b.length=1;b[0]=d}this.f.handleExternalCall(a,b,c);gj(a)&&vj(this,this.ja())}};
n.Wa=function(){var a=C(this.Ha,this);this.g.f=a};
n.addEventListener=function(a,b){this.h.push({eventType:a,listener:b});this.f.addEventListener(a,b)};
n.ja=function(){if(!this.f)return null;var a=this.f.getApiInterface();db(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.f[e]();b[f]=g}catch(k){}}}b.videoData=this.f.getVideoData();b.currentTimeLastUpdated_=D()/1E3;return b};
n.fb=function(a){a={playerState:a,currentTime:this.f.getCurrentTime(),duration:this.f.getDuration(),videoData:this.f.getVideoData(),videoStartBytes:0,videoBytesTotal:this.f.getVideoBytesTotal(),videoLoadedFraction:this.f.getVideoLoadedFraction(),playbackQuality:this.f.getPlaybackQuality(),availableQualityLevels:this.f.getAvailableQualityLevels(),currentTimeLastUpdated_:D()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getVideoUrl&&(a.videoUrl=
this.f.getVideoUrl());this.f.getVideoContentRect&&(a.videoContentRect=this.f.getVideoContentRect());this.f.getProgressState&&(a.progressState=this.f.getProgressState());this.f.getPlaylist&&(a.playlist=this.f.getPlaylist());this.f.getPlaylistIndex&&(a.playlistIndex=this.f.getPlaylistIndex());this.f.getStoryboardFormat&&(a.storyboardFormat=this.f.getStoryboardFormat());vj(this,a)};
n.cb=function(a){vj(this,{playbackQuality:a})};
n.eb=function(a){vj(this,{playbackRate:a})};
n.ab=function(){for(var a=this.f.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.f.getOptions(e);b[e]={options:f};for(var g=0,k=f.length;g<k;g++){var h=f[g],l=this.f.getOption(e,h);b[e][h]=l}}this.sendMessage("apiInfoDelivery",b)};
n.hb=function(){vj(this,{muted:this.f.isMuted(),volume:this.f.getVolume()})};
n.gb=function(a){a={currentTime:a,videoBytesLoaded:this.f.getVideoBytesLoaded(),videoLoadedFraction:this.f.getVideoLoadedFraction(),currentTimeLastUpdated_:D()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getProgressState&&(a.progressState=this.f.getProgressState());vj(this,a)};
n.ib=function(){var a={sphericalProperties:this.f.getSphericalProperties()};vj(this,a)};
n.dispose=function(){tj.prototype.dispose.call(this);for(var a=0;a<this.h.length;a++){var b=this.h[a];this.f.removeEventListener(b.eventType,b.listener)}this.h=[]};function xj(a,b,c){L.call(this);this.f=a;this.i=c;this.j=tf(window,"message",C(this.l,this));this.h=new lj(this,a,b);Pc(this,Ua(Qc,this.h))}
v(xj,L);xj.prototype.l=function(a){var b;if(b=!this.g)if(b=a.origin==this.i)a:{b=this.f;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.h,c.g||c.j("command",b.command,b.data,a.origin))}};
xj.prototype.o=function(){uf(this.j);this.f=null;L.prototype.o.call(this)};function yj(){var a=nb(zj),b;return Td(new O(function(c,d){a.onSuccess=function(e){Re(e)?c(e):d(new Aj("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Aj("Unknown request error","net.unknown",e))};
a.R=function(e){d(new Aj("Request timed out","net.timeout",e))};
b=$e("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof Ud&&b.abort();
return Rd(c)})}
function Aj(a,b){F.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
v(Aj,F);function Bj(){this.g=0;this.f=null}
Bj.prototype.then=function(a,b,c){return 1===this.g&&a?(a=a.call(c,this.f),Ld(a)?a:Cj(a)):2===this.g&&b?(a=b.call(c,this.f),Ld(a)?a:Dj(a)):this};
Bj.prototype.getValue=function(){return this.f};
Bj.prototype.$goog_Thenable=!0;function Dj(a){var b=new Bj;a=void 0===a?null:a;b.g=2;b.f=void 0===a?null:a;return b}
function Cj(a){var b=new Bj;a=void 0===a?null:a;b.g=1;b.f=void 0===a?null:a;return b}
;function Ej(a){F.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Fj;this.isTimeout=a instanceof Aj&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Ud}
v(Ej,F);Ej.prototype.name="BiscottiError";function Fj(){F.call(this,"Biscotti ID is missing from server")}
v(Fj,F);Fj.prototype.name="BiscottiMissingError";var zj={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Gj=null;
function ze(){if(T("disable_biscotti_fetch_on_html5_clients"))return Rd(Error("Fetching biscotti ID is disabled."));if(T("condition_biscotti_fetch_on_consent_cookie_html5_clients")&&!wc.get("CONSENT","").startsWith("YES+"))return Rd(Error("User has not consented - not fetching biscotti id."));if("1"===hb(we(),"args","privembed"))return Rd(Error("Biscotti ID is not available in private embed mode"));Gj||(Gj=Td(yj().then(Hj),function(a){return Ij(2,a)}));
return Gj}
function Hj(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Fj;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Fj;a=a.id;Ae(a);Gj=Cj(a);Jj(18E5,2);return a}
function Ij(a,b){var c=new Ej(b);Ae("");Gj=Dj(c);0<a&&Jj(12E4,a-1);throw c;}
function Jj(a,b){U(function(){Td(yj().then(Hj,function(c){return Ij(b,c)}),Ia)},a)}
function Kj(){try{var a=B("yt.ads.biscotti.getId_");return a?a():ze()}catch(b){return Rd(b)}}
;function Lj(a){if("1"!==hb(we(),"args","privembed")){a&&ye();try{Kj().then(function(){},function(){}),U(Lj,18E5)}catch(b){S(b)}}}
;var Y=B("ytglobal.prefsUserPrefsPrefs_")||{};A("ytglobal.prefsUserPrefsPrefs_",Y,void 0);function Mj(){this.f=R("ALT_PREF_COOKIE_NAME","PREF");var a=wc.get(""+this.f,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Y[d]=c.toString())}}}
n=Mj.prototype;n.get=function(a,b){Nj(a);Oj(a);var c=void 0!==Y[a]?Y[a].toString():null;return null!=c?c:b?b:""};
n.set=function(a,b){Nj(a);Oj(a);if(null==b)throw Error("ExpectedNotNull");Y[a]=b.toString()};
n.remove=function(a){Nj(a);Oj(a);delete Y[a]};
n.save=function(){tg(this.f,this.dump(),63072E3)};
n.clear=function(){for(var a in Y)delete Y[a]};
n.dump=function(){var a=[],b;for(b in Y)a.push(b+"="+encodeURIComponent(String(Y[b])));return a.join("&")};
function Oj(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Nj(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Pj(a){a=void 0!==Y[a]?Y[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ja(Mj);function Qj(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!Rj(a)||c.some(function(e){return!Rj(e)}))throw Error("Only objects may be merged.");
c=t(c);for(d=c.next();!d.done;d=c.next())Sj(a,d.value);return a}
function Sj(a,b){for(var c in b)if(Rj(b[c])){if(c in a&&!Rj(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Sj(a[c],b[c])}else if(Tj(b[c])){if(c in a&&!Tj(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Uj(a[c],b[c])}else a[c]=b[c];return a}
function Uj(a,b){for(var c=t(b),d=c.next();!d.done;d=c.next())d=d.value,Rj(d)?a.push(Sj({},d)):Tj(d)?a.push(Uj([],d)):a.push(d);return a}
function Rj(a){return"object"===typeof a&&!Array.isArray(a)}
function Tj(a){return"object"===typeof a&&Array.isArray(a)}
;function Vj(a,b){qi.call(this,1,arguments)}
v(Vj,qi);function Wj(a,b){qi.call(this,1,arguments)}
v(Wj,qi);var Xj=new ri("aft-recorded",Vj),Yj=new ri("timing-sent",Wj);var Zj=window;function ak(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var bk=Zj.performance||Zj.mozPerformance||Zj.msPerformance||Zj.webkitPerformance||new ak;var ck=!1;C(bk.clearResourceTimings||bk.webkitClearResourceTimings||bk.mozClearResourceTimings||bk.msClearResourceTimings||bk.oClearResourceTimings||Ia,bk);function dk(a){var b=ek(a);if(b.aft)return b.aft;a=R((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function fk(a){var b;(b=B("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Va("ytcsi."+(a||"")+"data_",b));return b}
function gk(a){a=fk(a);a.info||(a.info={});return a.info}
function ek(a){a=fk(a);a.tick||(a.tick={});return a.tick}
function hk(a){var b=fk(a).nonce;b||(b=ci(),fk(a).nonce=b);return b}
function ik(a){var b=ek(a||""),c=dk(a);c&&!ck&&(wi(Xj,new Vj(Math.round(c-b._start),a)),ck=!0)}
;function jk(){var a=B("ytcsi.debug");a||(a=[],A("ytcsi.debug",a,void 0),A("ytcsi.reference",{},void 0));return a}
function kk(a){a=a||"";var b=B("ytcsi.reference");b||(jk(),b=B("ytcsi.reference"));if(b[a])return b[a];var c=jk(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var lk=y.ytLoggingLatencyUsageStats_||{};A("ytLoggingLatencyUsageStats_",lk,void 0);function mk(){this.f=0}
function nk(){mk.f||(mk.f=new mk);return mk.f}
mk.prototype.tick=function(a,b,c){ok(this,"tick_"+a+"_"+b)||wh("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
mk.prototype.info=function(a,b){var c=Object.keys(a).join("");ok(this,"info_"+c+"_"+b)||(c=Object.assign({},a),c.clientActionNonce=b,wh("latencyActionInfo",c))};
mk.prototype.span=function(a,b){var c=Object.keys(a).join("");ok(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,wh("latencyActionSpan",a))};
function ok(a,b){lk[b]=lk[b]||{count:0};var c=lk[b];c.count++;c.time=W();a.f||(a.f=yf(function(){var d=W(),e;for(e in lk)lk[e]&&6E4<d-lk[e].time&&delete lk[e];a&&(a.f=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new uh("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Ah(c)),!0):!1}
;var Z={},pk=(Z.ad_allowed="adTypesAllowed",Z.yt_abt="adBreakType",Z.ad_cpn="adClientPlaybackNonce",Z.ad_docid="adVideoId",Z.yt_ad_an="adNetworks",Z.ad_at="adType",Z.browse_id="browseId",Z.p="httpProtocol",Z.t="transportProtocol",Z.cpn="clientPlaybackNonce",Z.ccs="creatorInfo.creatorCanaryState",Z.cseg="creatorInfo.creatorSegment",Z.csn="clientScreenNonce",Z.docid="videoId",Z.GetHome_rid="requestIds",Z.GetSearch_rid="requestIds",Z.GetPlayer_rid="requestIds",Z.GetWatchNext_rid="requestIds",Z.GetBrowse_rid=
"requestIds",Z.GetLibrary_rid="requestIds",Z.is_continuation="isContinuation",Z.is_nav="isNavigation",Z.b_p="kabukiInfo.browseParams",Z.is_prefetch="kabukiInfo.isPrefetch",Z.is_secondary_nav="kabukiInfo.isSecondaryNav",Z.prev_browse_id="kabukiInfo.prevBrowseId",Z.query_source="kabukiInfo.querySource",Z.voz_type="kabukiInfo.vozType",Z.yt_lt="loadType",Z.mver="creatorInfo.measurementVersion",Z.yt_ad="isMonetized",Z.nr="webInfo.navigationReason",Z.nrsu="navigationRequestedSameUrl",Z.ncnp="webInfo.nonPreloadedNodeCount",
Z.pnt="performanceNavigationTiming",Z.prt="playbackRequiresTap",Z.plt="playerInfo.playbackType",Z.pis="playerInfo.playerInitializedState",Z.paused="playerInfo.isPausedOnLoad",Z.yt_pt="playerType",Z.fmt="playerInfo.itag",Z.yt_pl="watchInfo.isPlaylist",Z.yt_pre="playerInfo.preloadType",Z.yt_ad_pr="prerollAllowed",Z.pa="previousAction",Z.yt_red="isRedSubscriber",Z.rce="mwebInfo.responseContentEncoding",Z.scrh="screenHeight",Z.scrw="screenWidth",Z.st="serverTimeMs",Z.ssdm="shellStartupDurationMs",Z.aq=
"tvInfo.appQuality",Z.br_trs="tvInfo.bedrockTriggerState",Z.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Z.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Z.label="tvInfo.label",Z.is_mdx="tvInfo.isMdx",Z.preloaded="tvInfo.isPreloaded",Z.upg_player_vis="playerInfo.visibilityState",Z.query="unpluggedInfo.query",Z.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Z.yt_vst="videoStreamType",Z.vph="viewportHeight",Z.vpw="viewportWidth",Z.yt_vis="isVisible",Z.rcl="mwebInfo.responseContentLength",
Z.GetSettings_rid="requestIds",Z.GetTrending_rid="requestIds",Z.GetMusicSearchSuggestions_rid="requestIds",Z.REQUEST_ID="requestIds",Z),qk="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),rk={},sk=(rk.ccs="CANARY_STATE_",
rk.mver="MEASUREMENT_VERSION_",rk.pis="PLAYER_INITIALIZED_STATE_",rk.yt_pt="LATENCY_PLAYER_",rk.pa="LATENCY_ACTION_",rk.yt_vst="VIDEO_STREAM_TYPE_",rk),tk="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function uk(a){return!!R("FORCE_CSI_ON_GEL",!1)||T("csi_on_gel")||!!fk(a).useGel}
function vk(a){a=fk(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel}
;function wk(a,b,c){if(null!==b)if(gk(c)[a]=b,uk(c)){var d=b;b=vk(c);if(b.gelInfos)b.gelInfos["info_"+a]=!0;else{var e={};b.gelInfos=(e["info_"+a]=!0,e)}if(a.match("_rid")){var f=a.split("_rid")[0];a="REQUEST_ID"}if(a in pk){b=pk[a];0<=Za(qk,b)&&(d=!!d);a in sk&&"string"===typeof d&&(d=sk[a]+d.toUpperCase());a=d;d=b.split(".");for(var g=e={},k=0;k<d.length-1;k++){var h=d[k];g[h]={};g=g[h]}g[d[d.length-1]]="requestIds"===b?[{id:a,endpoint:f}]:a;f=Qj({},e)}else 0<=Za(tk,a)||Ah(new uh("Unknown label logged with GEL CSI",
a)),f=void 0;f&&uk(c)&&(b=kk(c||""),Qj(b.info,f),b=vk(c),"gelInfos"in b||(b.gelInfos={}),Qj(b.gelInfos,f),c=hk(c),nk().info(f,c))}else kk(c||"").info[a]=b}
function xk(a,b,c){var d=ek(c);if(T("use_first_tick")&&yk(a,c))return d[a];if(!b&&"_"!==a[0]){var e=a;bk.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),bk.mark(e))}e=b||W();d[a]=e;e=vk(c);e.gelTicks&&(e.gelTicks["tick_"+a]=!0);c||b||W();if(uk(c)){kk(c||"").tick[a]=b||W();e=hk(c);if("_start"===a){var f=nk();ok(f,"baseline_"+e)||wh("latencyActionBaselined",{clientActionNonce:e},{timestamp:b})}else nk().tick(a,e,b);ik(c);e=!0}else e=!1;if(!e){if(!B("yt.timing."+(c||"")+"pingSent_")&&
(f=R((c||"")+"TIMING_ACTION",void 0),e=ek(c),B("ytglobal.timing"+(c||"")+"ready_")&&f&&yk("_start")&&dk(c)))if(ik(c),c)zk(c);else{f=!0;var g=R("TIMING_WAIT",[]);if(g.length)for(var k=0,h=g.length;k<h;++k)if(!(g[k]in e)){f=!1;break}f&&zk(c)}kk(c||"").tick[a]=b||W()}return d[a]}
function yk(a,b){var c=ek(b);return a in c}
function zk(a){if(!uk(a)){var b=ek(a),c=gk(a),d=b._start,e=R("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:R((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=dk(a);var k=ek(a),h=k.pbr,l=k.vc;k=k.pbs;h&&l&&k&&h<l&&l<k&&gk(a).yt_pvis&&"youtube"===e&&(wk("yt_lt","hot_bg",a),e=b.vc,h=b.pbs,delete b.aft,c.aft=Math.round(h-e));for(var m in c)"_"!==m.charAt(0)&&(f[m]=c[m]);b.ps=W();m={};e=[];for(var q in b)"_"!==q.charAt(0)&&(h=Math.round(b[q]-d),m[q]=h,e.push(q+"."+h));f.rt=
e.join(",");b=!!c.ap;T("debug_csi_data")&&(c=B("yt.timing.csiData"),c||(c=[],Va("yt.timing.csiData",c)),c.push({page:location.href,time:new Date,args:f}));c="";for(var u in f)f.hasOwnProperty(u)&&(c+="&"+u+"="+f[u]);f="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var p=void 0===p?"":p;lf(f,p)||hf(f,void 0,void 0,void 0,p)}else hf(f);A("yt.timing."+(a||"")+"pingSent_",!0,void 0);wi(Yj,new Wj(m.aft+(Number(g)||0),a))}}
if(T("overwrite_polyfill_on_logging_lib_loaded")){var Ak=window;Ak.ytcsi&&(Ak.ytcsi.info=wk,Ak.ytcsi.tick=xk)};var Bk=null,Ck=null,Dk=null,Ek={};function Fk(a){var b=a.id;a=a.ve_type;var c=ei++;a=new fi({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});Ek[b]=a;b=li();c=ji();b&&c&&Gi(b,c,[a])}
function Gk(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(oi(b,a),a=ji()))for(var c in Ek){var d=Ek[c];d&&Gi(b,a,[d])}}
function Hk(a){Ek[a.id]=new fi({trackingParams:a.tracking_params})}
function Ik(a){var b=li(),c=Ek[a.id];if(b&&c){a=T("use_default_events_client")?void 0:vh;var d="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";c={csn:b,ve:c.getAsJson(),gestureType:d};d={ga:ni(b),S:b};"UNDEFINED_CSN"==b?Hi("visualElementGestured",c,d):a?ng("visualElementGestured",c,a,d):wh("visualElementGestured",c,d)}}
function Jk(a){a=a.ids;var b=li();if(b)for(var c=0;c<a.length;c++){var d=Ek[a[c]];if(d){var e=b,f=T("use_default_events_client")?void 0:vh;d={csn:e,ve:d.getAsJson(),eventType:1};var g={ga:ni(e),S:e};"UNDEFINED_CSN"==e?Hi("visualElementShown",d,g):f?ng("visualElementShown",d,f,g):wh("visualElementShown",d,g)}}}
;A("yt.setConfig",Q,void 0);A("yt.config.set",Q,void 0);A("yt.setMsg",Fh,void 0);A("yt.msgs.set",Fh,void 0);A("yt.logging.errors.log",Dh,void 0);
A("writeEmbed",function(){var a=R("PLAYER_CONFIG",void 0);Lj(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=R("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);R("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");b="player";var d=void 0===d?!0:d;b="string"===typeof b?Ac(b):b;var e=ej+"_"+Oa(b),f=dj[e];f&&d?a&&a.args&&a.args.fflags&&a.args.fflags.includes("web_player_remove_playerproxy=true")?f.api.loadVideoByPlayerVars(a.args||
null):f.loadNewVideoConfig(a):(f=new Pi(b,e,a,void 0),dj[e]=f,Pf("player-added",f.api),Pc(f,Ua(fj,f)));a=f.api;Bk=a;a.addEventListener("onScreenChanged",Gk);a.addEventListener("onLogClientVeCreated",Fk);a.addEventListener("onLogServerVeCreated",Hk);a.addEventListener("onLogVeClicked",Ik);a.addEventListener("onLogVesShown",Jk);d=R("POST_MESSAGE_ID","player");R("ENABLE_JS_API")?Dk=new wj(a):R("ENABLE_POST_API")&&"string"===typeof d&&"string"===typeof c&&(Ck=new xj(window.parent,d,c),Dk=new rj(a,Ck.h));
Vh()},void 0);
A("yt.www.watch.ads.restrictioncookie.spr",function(a){hf(a+"mac_204?action_fcts=1");return!0},void 0);
var Kk=De(function(){xk("ol");var a=Mj.getInstance(),b=!!((Pj("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&Dd(document.body,"exp-invert-logo"))if(c&&!Dd(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Dd(d,"inverted-hdpi")){var e=Bd(d);Cd(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Dd(document.body,"inverted-hdpi")&&Ed();b!=c&&(b="f"+(Math.floor(119/31)+1),d=Pj(b)||0,d=c?d|67108864:
d&-67108865,0==d?delete Y[b]:(c=d.toString(16),Y[b]=c.toString()),a.save())}),Lk=De(function(){var a=Bk;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();R("PL_ATT")&&Zh.dispose();a=0;for(var b=Th.length;a<b;a++)Cf(Th[a]);Th.length=0;Rh("//static.doubleclick.net/instream/ad_status.js");Uh=!1;Q("DCLKSTAT",0);Rc(Dk,Ck);if(a=Bk)a.removeEventListener("onScreenChanged",Gk),a.removeEventListener("onLogClientVeCreated",Fk),a.removeEventListener("onLogServerVeCreated",Hk),a.removeEventListener("onLogVeClicked",Ik),a.removeEventListener("onLogVesShown",Jk),a.destroy();Ek={}});
window.addEventListener?(window.addEventListener("load",Kk),window.addEventListener("unload",Lk)):window.attachEvent&&(window.attachEvent("onload",Kk),window.attachEvent("onunload",Lk));Va("yt.abuse.player.botguardInitialized",B("yt.abuse.player.botguardInitialized")||$h);Va("yt.abuse.player.invokeBotguard",B("yt.abuse.player.invokeBotguard")||ai);Va("yt.abuse.dclkstatus.checkDclkStatus",B("yt.abuse.dclkstatus.checkDclkStatus")||Wh);
Va("yt.player.exports.navigate",B("yt.player.exports.navigate")||pi);Va("yt.util.activity.init",B("yt.util.activity.init")||Ef);Va("yt.util.activity.getTimeSinceActive",B("yt.util.activity.getTimeSinceActive")||Hf);Va("yt.util.activity.setTimestamp",B("yt.util.activity.setTimestamp")||Ff);}).call(this);
