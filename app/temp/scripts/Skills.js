!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([,function(t,e,n){"use strict";!function(){var t=function(t){this.context=t.getContext("2d"),this.refElement=t.parentNode,this.loaded=0,this.start=4.72,this.width=this.context.canvas.width,this.height=this.context.canvas.height,this.total=parseInt(this.refElement.dataset.percent,10),this.timer=null,this.diff=0,this.init()};t.prototype={init:function(){var t=this;t.timer=setInterval(function(){t.run()},30)},run:function(){this.diff=(this.loaded/100*Math.PI*2*10).toFixed(2),this.context.clearRect(0,0,this.width,this.height),this.context.lineCap="round",this.context.lineWidth=15,this.context.fillStyle="#FFF",this.context.strokeStyle="#00d8ff",this.context.textAlign="center",this.context.fillText(this.loaded+"%",.5*this.width,.5*this.height+2,this.width),this.context.beginPath(),this.context.arc(89,89,75,this.start,this.diff/10+this.start,!1),this.context.stroke(),this.loaded>=this.total&&clearInterval(this.timer),this.loaded++}};var e=function(t){this.bars=document.querySelectorAll(t),this.bars.length>0&&this.init()};e.prototype={init:function(){this.tick=2,this.progress()},progress:function(){var e=this,n=0,i=e.bars[0].querySelector("canvas"),r=(new t(i),setInterval(function(){n++;var i=e.bars[n].querySelector("canvas");new t(i);n==e.bars.length&&clearInterval(r)},100*e.tick))}},document.querySelector("#about").addEventListener("click",function(){new e("#bars .bar")}),document.querySelector("#about2").addEventListener("click",function(){new e("#bars .bar")})}()}]);