(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"105":function(t,i,n){"use strict";n.r(i),n.d(i,"taro_slider_core",(function(){return a}));var o=n(32),a=function(){function e(t){var i=this;Object(o.g)(this,t),this.onChange=Object(o.c)(this,"change",7),this.onChanging=Object(o.c)(this,"changing",7),this.min=0,this.max=100,this.step=1,this.disabled=!1,this.value=0,this.activeColor="#1aad19",this.backgroundColor="#e9e9e9",this.blockSize=28,this.blockColor="#ffffff",this.showValue=!1,this.name="",this.totalWidth=0,this.touching=!1,this.ogX=0,this.touchId=null,this.percent=0,this.isWillLoadCalled=!1,this.handleTouchStart=function(t){i.touching||i.disabled||(i.touching=!0,i.touchId=t.targetTouches[0].identifier,i.totalWidth=i.sliderInsRef.clientWidth,i.ogX=t.targetTouches[0].pageX,i.ogPercent=i.percent)},this.handleTouchMove=function(t){var n=i,o=n.disabled,a=n.touching,r=n.touchId,h=n.totalWidth,l=n.max,s=n.min,c=n.ogX,u=n.ogPercent;if(a&&!o&&t.targetTouches[0].identifier===r){t.preventDefault();var d=(t.targetTouches[0].pageX-c)/h*100+u,f=s+.01*(d=Math.max(0,Math.min(d,100)))*(l-s);i.updateByStep(f),i.onChanging.emit({"detail":t.detail,"value":i.val})}},this.handleTouchEnd=function(t){var n=i,o=n.disabled;n.touching&&!o&&(i.percent!==i.ogPercent&&i.onChange.emit({"detail":t.detail,"value":i.val}),i.touching=!1,i.touchId=null,i.ogX=0,i.ogPercent=0)}}return e.prototype.function=function(t){if(this.isWillLoadCalled){var i=this.max,n=this.min;if(null!==t&&t!==this.val){var o=Math.max(n,Math.min(t,i));this.updateByStep(o)}}},e.prototype.componentDidLoad=function(){var t=this;Object.defineProperty(this.el,"value",{"get":function(){return t.val},"set":function(i){return t.value=i},"configurable":!0}),this.handler.addEventListener("touchstart",this.handleTouchStart),this.handler.addEventListener("touchmove",this.handleTouchMove),this.handler.addEventListener("touchend",this.handleTouchEnd)},e.prototype.componentDidUpdate=function(){this.value=null},e.prototype.componentWillLoad=function(){this.isWillLoadCalled=!0;var t=this,i=t.value,n=t.max,o=t.min;if(null!==i){var a=Math.max(o,Math.min(i,n));this.updateByStep(a)}},e.prototype.updateByStep=function(t){for(var i=this,n=i.max,o=i.min,a=i.step,r=Math.floor((n-o)/a),h=0;h<=r;h++){var l=o+a*h,s=h===r?null:o+a*(h+1);if(t===l)break;if(!s&&t>l&&(t=l),s&&t>l&&t<s){t=t-l<a/2?l:s;break}}var c=(t-o)/(n-o)*100;this.val=t,this.percent=c},e.prototype.render=function(){var t=this,i=this,n=i.showValue,a=i.backgroundColor,r=i.activeColor,h=i.blockColor,l=i.name,s=i.percent,c=i.val,u=this.blockSize,d={"backgroundColor":a},f=s>100?100:s,p={"width":f+"%","backgroundColor":r};u<12&&(u=12),u>28&&(u=28);var v={"left":f+"%","width":u+"px","height":u+"px","backgroundColor":h,"marginTop":"-"+Math.floor(u/2)+"px","marginLeft":"-"+Math.floor(u/2)+"px"};return Object(o.e)(o.a,{"class":"weui-slider-box"},Object(o.e)("div",{"class":"weui-slider"},Object(o.e)("div",{"class":"weui-slider__inner","style":d,"ref":function(i){return t.sliderInsRef=i}},Object(o.e)("div",{"style":p,"class":"weui-slider__track"}),Object(o.e)("div",{"class":"weui-slider__handler","ref":function(i){i&&(t.handler=i)},"style":v}),Object(o.e)("input",{"type":"hidden","name":l,"value":c}))),n&&Object(o.e)("div",{"class":"weui-slider-box__value"},c))},Object.defineProperty(e.prototype,"el",{"get":function(){return Object(o.d)(this)},"enumerable":!1,"configurable":!0}),Object.defineProperty(e,"watchers",{"get":function(){return{"value":["function"]}},"enumerable":!1,"configurable":!0}),e}()}}]);