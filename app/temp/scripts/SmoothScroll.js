!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([,,function(e,t,n){var o,r;!function(c,u){"use strict";void 0===(r="function"==typeof(o=function(){if("object"!=typeof window)return;if(void 0===document.querySelectorAll||void 0===window.pageYOffset||void 0===history.pushState)return;var e=function(e,t,n,o){return n>o?t:e+(t-e)*((r=n/o)<.5?4*r*r*r:(r-1)*(2*r-2)*(2*r-2)+1);var r},t=function(t,n,o,r){n=n||500;var c=(r=r||window).scrollTop||window.pageYOffset;if("number"==typeof t)var u=parseInt(t);else var u=function(e,t){return"HTML"===e.nodeName?-t:e.getBoundingClientRect().top+t}(t,c);var i=Date.now(),a=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(e){window.setTimeout(e,15)},l=function(){var d=Date.now()-i;r!==window?r.scrollTop=e(c,u,d,n):window.scroll(0,e(c,u,d,n)),d>n?"function"==typeof o&&o(t):a(l)};l()},n=function(e){if(!e.defaultPrevented){e.preventDefault(),location.hash!==this.hash&&window.history.pushState(null,null,this.hash);var n=document.getElementById(this.hash.substring(1));if(!n)return;t(n,500,function(e){location.replace("#"+e.id)})}};return document.addEventListener("DOMContentLoaded",function(){for(var e,t=document.querySelectorAll('a[href^="#"]:not([href="#"])'),o=t.length;e=t[--o];)e.addEventListener("click",n,!1)}),t})?o.call(t,n,t,e):o)||(e.exports=r)}()},function(e,t,n){"use strict";var o=n(2),r=document.querySelector("#home"),c=document.querySelector("#about"),u=document.querySelector("#projects"),i=document.querySelector("#contact"),a=document.querySelector("#section-container-home"),l=document.querySelector("#section-container-about"),d=document.querySelector("#section-container-projects"),f=document.querySelector("#section-container-contact"),s=document.querySelector("#home2"),v=document.querySelector("#about2"),p=document.querySelector("#projects2"),m=document.querySelector("#contact2");r.addEventListener("click",function(e){e.preventDefault(),o(a)});c.addEventListener("click",function(e){e.preventDefault(),o(l)});u.addEventListener("click",function(e){e.preventDefault(),o(d)});i.addEventListener("click",function(e){e.preventDefault(),o(f)});s.addEventListener("click",function(e){e.preventDefault(),o(a)});v.addEventListener("click",function(e){e.preventDefault(),o(l)});p.addEventListener("click",function(e){e.preventDefault(),o(d)});m.addEventListener("click",function(e){e.preventDefault(),o(f)})}]);