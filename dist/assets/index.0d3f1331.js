var Il=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);var fg=Il(Ct=>{const Ol=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}};Ol();var Di={Linear:{None:function(i){return i}},Quadratic:{In:function(i){return i*i},Out:function(i){return i*(2-i)},InOut:function(i){return(i*=2)<1?.5*i*i:-.5*(--i*(i-2)-1)}},Cubic:{In:function(i){return i*i*i},Out:function(i){return--i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i:.5*((i-=2)*i*i+2)}},Quartic:{In:function(i){return i*i*i*i},Out:function(i){return 1- --i*i*i*i},InOut:function(i){return(i*=2)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2)}},Quintic:{In:function(i){return i*i*i*i*i},Out:function(i){return--i*i*i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2)}},Sinusoidal:{In:function(i){return 1-Math.cos(i*Math.PI/2)},Out:function(i){return Math.sin(i*Math.PI/2)},InOut:function(i){return .5*(1-Math.cos(Math.PI*i))}},Exponential:{In:function(i){return i===0?0:Math.pow(1024,i-1)},Out:function(i){return i===1?1:1-Math.pow(2,-10*i)},InOut:function(i){return i===0?0:i===1?1:(i*=2)<1?.5*Math.pow(1024,i-1):.5*(-Math.pow(2,-10*(i-1))+2)}},Circular:{In:function(i){return 1-Math.sqrt(1-i*i)},Out:function(i){return Math.sqrt(1- --i*i)},InOut:function(i){return(i*=2)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1)}},Elastic:{In:function(i){return i===0?0:i===1?1:-Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI)},Out:function(i){return i===0?0:i===1?1:Math.pow(2,-10*i)*Math.sin((i-.1)*5*Math.PI)+1},InOut:function(i){return i===0?0:i===1?1:(i*=2,i<1?-.5*Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI):.5*Math.pow(2,-10*(i-1))*Math.sin((i-1.1)*5*Math.PI)+1)}},Back:{In:function(i){var e=1.70158;return i*i*((e+1)*i-e)},Out:function(i){var e=1.70158;return--i*i*((e+1)*i+e)+1},InOut:function(i){var e=2.5949095;return(i*=2)<1?.5*(i*i*((e+1)*i-e)):.5*((i-=2)*i*((e+1)*i+e)+2)}},Bounce:{In:function(i){return 1-Di.Bounce.Out(1-i)},Out:function(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},InOut:function(i){return i<.5?Di.Bounce.In(i*2)*.5:Di.Bounce.Out(i*2-1)*.5+.5}}},Ci;typeof self=="undefined"&&typeof process!="undefined"&&process.hrtime?Ci=function(){var i=process.hrtime();return i[0]*1e3+i[1]/1e6}:typeof self!="undefined"&&self.performance!==void 0&&self.performance.now!==void 0?Ci=self.performance.now.bind(self.performance):Date.now!==void 0?Ci=Date.now:Ci=function(){return new Date().getTime()};var Cn=Ci,Io=function(){function i(){this._tweens={},this._tweensAddedDuringUpdate={}}return i.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},i.prototype.removeAll=function(){this._tweens={}},i.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},i.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},i.prototype.update=function(e,t){e===void 0&&(e=Cn()),t===void 0&&(t=!1);var n=Object.keys(this._tweens);if(n.length===0)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var s=0;s<n.length;s++){var r=this._tweens[n[s]],a=!t;r&&r.update(e,a)===!1&&!t&&delete this._tweens[n[s]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},i}(),ui={Linear:function(i,e){var t=i.length-1,n=t*e,s=Math.floor(n),r=ui.Utils.Linear;return e<0?r(i[0],i[1],n):e>1?r(i[t],i[t-1],t-n):r(i[s],i[s+1>t?t:s+1],n-s)},Bezier:function(i,e){for(var t=0,n=i.length-1,s=Math.pow,r=ui.Utils.Bernstein,a=0;a<=n;a++)t+=s(1-e,n-a)*s(e,a)*i[a]*r(n,a);return t},CatmullRom:function(i,e){var t=i.length-1,n=t*e,s=Math.floor(n),r=ui.Utils.CatmullRom;return i[0]===i[t]?(e<0&&(s=Math.floor(n=t*(1+e))),r(i[(s-1+t)%t],i[s],i[(s+1)%t],i[(s+2)%t],n-s)):e<0?i[0]-(r(i[0],i[0],i[1],i[1],-n)-i[0]):e>1?i[t]-(r(i[t],i[t],i[t-1],i[t-1],n-t)-i[t]):r(i[s?s-1:0],i[s],i[t<s+1?t:s+1],i[t<s+2?t:s+2],n-s)},Utils:{Linear:function(i,e,t){return(e-i)*t+i},Bernstein:function(i,e){var t=ui.Utils.Factorial;return t(i)/t(e)/t(i-e)},Factorial:function(){var i=[1];return function(e){var t=1;if(i[e])return i[e];for(var n=e;n>1;n--)t*=n;return i[e]=t,t}}(),CatmullRom:function(i,e,t,n,s){var r=(t-i)*.5,a=(n-e)*.5,o=s*s,c=s*o;return(2*e-2*t+r+a)*c+(-3*e+3*t-2*r-a)*o+r*s+e}}},Ur=function(){function i(){}return i.nextId=function(){return i._nextId++},i._nextId=0,i}(),Oo=new Io,Fl=function(){function i(e,t){t===void 0&&(t=Oo),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Di.Linear.None,this._interpolationFunction=ui.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=Ur.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return i.prototype.getId=function(){return this._id},i.prototype.isPlaying=function(){return this._isPlaying},i.prototype.isPaused=function(){return this._isPaused},i.prototype.to=function(e,t){return this._valuesEnd=Object.create(e),t!==void 0&&(this._duration=t),this},i.prototype.duration=function(e){return this._duration=e,this},i.prototype.start=function(e){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var t in this._valuesStartRepeat)this._swapEndStartRepeatValues(t),this._valuesStart[t]=this._valuesStartRepeat[t]}return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e!==void 0?typeof e=="string"?Cn()+parseFloat(e):e:Cn(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},i.prototype._setupProperties=function(e,t,n,s){for(var r in n){var a=e[r],o=Array.isArray(a),c=o?"array":typeof a,l=!o&&Array.isArray(n[r]);if(!(c==="undefined"||c==="function")){if(l){var u=n[r];if(u.length===0)continue;u=u.map(this._handleRelativeValue.bind(this,a)),n[r]=[a].concat(u)}if((c==="object"||o)&&a&&!l){t[r]=o?[]:{};for(var h in a)t[r][h]=a[h];s[r]=o?[]:{},this._setupProperties(a,t[r],n[r],s[r])}else typeof t[r]=="undefined"&&(t[r]=a),o||(t[r]*=1),l?s[r]=n[r].slice().reverse():s[r]=t[r]||0}}},i.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},i.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},i.prototype.pause=function(e){return e===void 0&&(e=Cn()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},i.prototype.resume=function(e){return e===void 0&&(e=Cn()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},i.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},i.prototype.group=function(e){return this._group=e,this},i.prototype.delay=function(e){return this._delayTime=e,this},i.prototype.repeat=function(e){return this._initialRepeat=e,this._repeat=e,this},i.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},i.prototype.yoyo=function(e){return this._yoyo=e,this},i.prototype.easing=function(e){return this._easingFunction=e,this},i.prototype.interpolation=function(e){return this._interpolationFunction=e,this},i.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},i.prototype.onStart=function(e){return this._onStartCallback=e,this},i.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},i.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},i.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},i.prototype.onStop=function(e){return this._onStopCallback=e,this},i.prototype.update=function(e,t){if(e===void 0&&(e=Cn()),t===void 0&&(t=!0),this._isPaused)return!0;var n,s,r=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>r)return!1;t&&this.start(e)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),s=(e-this._startTime)/this._duration,s=this._duration===0||s>1?1:s;var a=this._easingFunction(s);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,a),this._onUpdateCallback&&this._onUpdateCallback(this._object,s),s===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(n in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[n]=="string"&&(this._valuesStartRepeat[n]=this._valuesStartRepeat[n]+parseFloat(this._valuesEnd[n])),this._yoyo&&this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var o=0,c=this._chainedTweens.length;o<c;o++)this._chainedTweens[o].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0},i.prototype._updateProperties=function(e,t,n,s){for(var r in n)if(t[r]!==void 0){var a=t[r]||0,o=n[r],c=Array.isArray(e[r]),l=Array.isArray(o),u=!c&&l;u?e[r]=this._interpolationFunction(o,s):typeof o=="object"&&o?this._updateProperties(e[r],a,o,s):(o=this._handleRelativeValue(a,o),typeof o=="number"&&(e[r]=a+(o-a)*s))}},i.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},i.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],n=this._valuesEnd[e];typeof n=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(n):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},i}(),Nl="18.6.4",zl=Ur.nextId,$t=Oo,kl=$t.getAll.bind($t),Ul=$t.removeAll.bind($t),Bl=$t.add.bind($t),Vl=$t.remove.bind($t),Gl=$t.update.bind($t),Ct={Easing:Di,Group:Io,Interpolation:ui,now:Cn,Sequence:Ur,nextId:zl,Tween:Fl,VERSION:Nl,getAll:kl,removeAll:Ul,add:Bl,remove:Vl,update:Gl};function Hl(i){if(!!i&&typeof window!="undefined"){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=i,document.head.appendChild(e),i}}function hi(i,e){var t=i.__state.conversionName.toString(),n=Math.round(i.r),s=Math.round(i.g),r=Math.round(i.b),a=i.a,o=Math.round(i.h),c=i.s.toFixed(1),l=i.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var u=i.hex.toString(16);u.length<6;)u="0"+u;return"#"+u}else{if(t==="CSS_RGB")return"rgb("+n+","+s+","+r+")";if(t==="CSS_RGBA")return"rgba("+n+","+s+","+r+","+a+")";if(t==="HEX")return"0x"+i.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+s+","+r+"]";if(t==="RGBA_ARRAY")return"["+n+","+s+","+r+","+a+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+s+",b:"+r+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+s+",b:"+r+",a:"+a+"}";if(t==="HSV_OBJ")return"{h:"+o+",s:"+c+",v:"+l+"}";if(t==="HSVA_OBJ")return"{h:"+o+",s:"+c+",v:"+l+",a:"+a+"}"}return"unknown format"}var Zr=Array.prototype.forEach,Si=Array.prototype.slice,H={BREAK:{},extend:function(e){return this.each(Si.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(s){this.isUndefined(t[s])||(e[s]=t[s])}.bind(this))},this),e},defaults:function(e){return this.each(Si.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(s){this.isUndefined(e[s])&&(e[s]=t[s])}.bind(this))},this),e},compose:function(){var e=Si.call(arguments);return function(){for(var t=Si.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,n){if(!!e){if(Zr&&e.forEach&&e.forEach===Zr)e.forEach(t,n);else if(e.length===e.length+0){var s=void 0,r=void 0;for(s=0,r=e.length;s<r;s++)if(s in e&&t.call(n,e[s],s)===this.BREAK)return}else for(var a in e)if(t.call(n,e[a],a)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var s=void 0;return function(){var r=this,a=arguments;function o(){s=null,n||e.apply(r,a)}var c=n||!s;clearTimeout(s),s=setTimeout(o,t),c&&e.apply(r,a)}},toArray:function(e){return e.toArray?e.toArray():Si.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(i){function e(t){return i.apply(this,arguments)}return e.toString=function(){return i.toString()},e}(function(i){return isNaN(i)}),isArray:Array.isArray||function(i){return i.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},Wl=[{litmus:H.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:hi},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:hi},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:hi},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:hi}}},{litmus:H.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:H.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:H.isObject,conversions:{RGBA_OBJ:{read:function(e){return H.isNumber(e.r)&&H.isNumber(e.g)&&H.isNumber(e.b)&&H.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return H.isNumber(e.r)&&H.isNumber(e.g)&&H.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return H.isNumber(e.h)&&H.isNumber(e.s)&&H.isNumber(e.v)&&H.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return H.isNumber(e.h)&&H.isNumber(e.s)&&H.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],wi=void 0,Xi=void 0,xr=function(){Xi=!1;var e=arguments.length>1?H.toArray(arguments):arguments[0];return H.each(Wl,function(t){if(t.litmus(e))return H.each(t.conversions,function(n,s){if(wi=n.read(e),Xi===!1&&wi!==!1)return Xi=wi,wi.conversionName=s,wi.conversion=n,H.BREAK}),H.BREAK}),Xi},Kr=void 0,bs={hsv_to_rgb:function(e,t,n){var s=Math.floor(e/60)%6,r=e/60-Math.floor(e/60),a=n*(1-t),o=n*(1-r*t),c=n*(1-(1-r)*t),l=[[n,c,a],[o,n,a],[a,n,c],[a,o,n],[c,a,n],[n,a,o]][s];return{r:l[0]*255,g:l[1]*255,b:l[2]*255}},rgb_to_hsv:function(e,t,n){var s=Math.min(e,t,n),r=Math.max(e,t,n),a=r-s,o=void 0,c=void 0;if(r!==0)c=a/r;else return{h:NaN,s:0,v:0};return e===r?o=(t-n)/a:t===r?o=2+(n-e)/a:o=4+(e-t)/a,o/=6,o<0&&(o+=1),{h:o*360,s:c,v:r/255}},rgb_to_hex:function(e,t,n){var s=this.hex_with_component(0,2,e);return s=this.hex_with_component(s,1,t),s=this.hex_with_component(s,0,n),s},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,n){return n<<(Kr=t*8)|e&~(255<<Kr)}},ql=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Ot=function(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")},Ft=function(){function i(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),gn=function i(e,t,n){e===null&&(e=Function.prototype);var s=Object.getOwnPropertyDescriptor(e,t);if(s===void 0){var r=Object.getPrototypeOf(e);return r===null?void 0:i(r,t,n)}else{if("value"in s)return s.value;var a=s.get;return a===void 0?void 0:a.call(n)}},_n=function(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(i,e):i.__proto__=e)},vn=function(i,e){if(!i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:i},Qe=function(){function i(){if(Ot(this,i),this.__state=xr.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Ft(i,[{key:"toString",value:function(){return hi(this)}},{key:"toHexString",value:function(){return hi(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),i}();function Br(i,e,t){Object.defineProperty(i,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(Qe.recalculateRGB(this,e,t),this.__state[e])},set:function(s){this.__state.space!=="RGB"&&(Qe.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=s}})}function Vr(i,e){Object.defineProperty(i,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(Qe.recalculateHSV(this),this.__state[e])},set:function(n){this.__state.space!=="HSV"&&(Qe.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n}})}Qe.recalculateRGB=function(i,e,t){if(i.__state.space==="HEX")i.__state[e]=bs.component_from_hex(i.__state.hex,t);else if(i.__state.space==="HSV")H.extend(i.__state,bs.hsv_to_rgb(i.__state.h,i.__state.s,i.__state.v));else throw new Error("Corrupted color state")};Qe.recalculateHSV=function(i){var e=bs.rgb_to_hsv(i.r,i.g,i.b);H.extend(i.__state,{s:e.s,v:e.v}),H.isNaN(e.h)?H.isUndefined(i.__state.h)&&(i.__state.h=0):i.__state.h=e.h};Qe.COMPONENTS=["r","g","b","h","s","v","hex","a"];Br(Qe.prototype,"r",2);Br(Qe.prototype,"g",1);Br(Qe.prototype,"b",0);Vr(Qe.prototype,"h");Vr(Qe.prototype,"s");Vr(Qe.prototype,"v");Object.defineProperty(Qe.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(Qe.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=bs.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var Un=function(){function i(e,t){Ot(this,i),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return Ft(i,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),i}(),Xl={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},Fo={};H.each(Xl,function(i,e){H.each(i,function(t){Fo[t]=e})});var jl=/(\d+(\.\d+)?)px/;function Bt(i){if(i==="0"||H.isUndefined(i))return 0;var e=i.match(jl);return H.isNull(e)?0:parseFloat(e[1])}var O={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var s=n,r=t;H.isUndefined(r)&&(r=!0),H.isUndefined(s)&&(s=!0),e.style.position="absolute",r&&(e.style.left=0,e.style.right=0),s&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,s){var r=n||{},a=Fo[t];if(!a)throw new Error("Event type "+t+" not supported.");var o=document.createEvent(a);switch(a){case"MouseEvents":{var c=r.x||r.clientX||0,l=r.y||r.clientY||0;o.initMouseEvent(t,r.bubbles||!1,r.cancelable||!0,window,r.clickCount||1,0,0,c,l,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var u=o.initKeyboardEvent||o.initKeyEvent;H.defaults(r,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),u(t,r.bubbles||!1,r.cancelable,window,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,r.keyCode,r.charCode);break}default:{o.initEvent(t,r.bubbles||!1,r.cancelable||!0);break}}H.defaults(o,s),e.dispatchEvent(o)},bind:function(e,t,n,s){var r=s||!1;return e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on"+t,n),O},unbind:function(e,t,n,s){var r=s||!1;return e.removeEventListener?e.removeEventListener(t,n,r):e.detachEvent&&e.detachEvent("on"+t,n),O},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return O},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),s=n.indexOf(t);s!==-1&&(n.splice(s,1),e.className=n.join(" "))}else e.className=void 0;return O},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return Bt(t["border-left-width"])+Bt(t["border-right-width"])+Bt(t["padding-left"])+Bt(t["padding-right"])+Bt(t.width)},getHeight:function(e){var t=getComputedStyle(e);return Bt(t["border-top-width"])+Bt(t["border-bottom-width"])+Bt(t["padding-top"])+Bt(t["padding-bottom"])+Bt(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},No=function(i){_n(e,i);function e(t,n){Ot(this,e);var s=vn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),r=s;s.__prev=s.getValue(),s.__checkbox=document.createElement("input"),s.__checkbox.setAttribute("type","checkbox");function a(){r.setValue(!r.__prev)}return O.bind(s.__checkbox,"change",a,!1),s.domElement.appendChild(s.__checkbox),s.updateDisplay(),s}return Ft(e,[{key:"setValue",value:function(n){var s=gn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),s}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),gn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Un),Yl=function(i){_n(e,i);function e(t,n,s){Ot(this,e);var r=vn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=s,o=r;if(r.__select=document.createElement("select"),H.isArray(a)){var c={};H.each(a,function(l){c[l]=l}),a=c}return H.each(a,function(l,u){var h=document.createElement("option");h.innerHTML=u,h.setAttribute("value",l),o.__select.appendChild(h)}),r.updateDisplay(),O.bind(r.__select,"change",function(){var l=this.options[this.selectedIndex].value;o.setValue(l)}),r.domElement.appendChild(r.__select),r}return Ft(e,[{key:"setValue",value:function(n){var s=gn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),s}},{key:"updateDisplay",value:function(){return O.isActive(this.__select)?this:(this.__select.value=this.getValue(),gn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(Un),$l=function(i){_n(e,i);function e(t,n){Ot(this,e);var s=vn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),r=s;function a(){r.setValue(r.__input.value)}function o(){r.__onFinishChange&&r.__onFinishChange.call(r,r.getValue())}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),O.bind(s.__input,"keyup",a),O.bind(s.__input,"change",a),O.bind(s.__input,"blur",o),O.bind(s.__input,"keydown",function(c){c.keyCode===13&&this.blur()}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return Ft(e,[{key:"updateDisplay",value:function(){return O.isActive(this.__input)||(this.__input.value=this.getValue()),gn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Un);function Jr(i){var e=i.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var zo=function(i){_n(e,i);function e(t,n,s){Ot(this,e);var r=vn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=s||{};return r.__min=a.min,r.__max=a.max,r.__step=a.step,H.isUndefined(r.__step)?r.initialValue===0?r.__impliedStep=1:r.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(r.initialValue))/Math.LN10))/10:r.__impliedStep=r.__step,r.__precision=Jr(r.__impliedStep),r}return Ft(e,[{key:"setValue",value:function(n){var s=n;return this.__min!==void 0&&s<this.__min?s=this.__min:this.__max!==void 0&&s>this.__max&&(s=this.__max),this.__step!==void 0&&s%this.__step!==0&&(s=Math.round(s/this.__step)*this.__step),gn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,s)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=Jr(n),this}}]),e}(Un);function Zl(i,e){var t=Math.pow(10,e);return Math.round(i*t)/t}var Ms=function(i){_n(e,i);function e(t,n,s){Ot(this,e);var r=vn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,s));r.__truncationSuspended=!1;var a=r,o=void 0;function c(){var g=parseFloat(a.__input.value);H.isNaN(g)||a.setValue(g)}function l(){a.__onFinishChange&&a.__onFinishChange.call(a,a.getValue())}function u(){l()}function h(g){var d=o-g.clientY;a.setValue(a.getValue()+d*a.__impliedStep),o=g.clientY}function f(){O.unbind(window,"mousemove",h),O.unbind(window,"mouseup",f),l()}function m(g){O.bind(window,"mousemove",h),O.bind(window,"mouseup",f),o=g.clientY}return r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),O.bind(r.__input,"change",c),O.bind(r.__input,"blur",u),O.bind(r.__input,"mousedown",m),O.bind(r.__input,"keydown",function(g){g.keyCode===13&&(a.__truncationSuspended=!0,this.blur(),a.__truncationSuspended=!1,l())}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return Ft(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():Zl(this.getValue(),this.__precision),gn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(zo);function Qr(i,e,t,n,s){return n+(s-n)*((i-e)/(t-e))}var yr=function(i){_n(e,i);function e(t,n,s,r,a){Ot(this,e);var o=vn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:s,max:r,step:a})),c=o;o.__background=document.createElement("div"),o.__foreground=document.createElement("div"),O.bind(o.__background,"mousedown",l),O.bind(o.__background,"touchstart",f),O.addClass(o.__background,"slider"),O.addClass(o.__foreground,"slider-fg");function l(d){document.activeElement.blur(),O.bind(window,"mousemove",u),O.bind(window,"mouseup",h),u(d)}function u(d){d.preventDefault();var p=c.__background.getBoundingClientRect();return c.setValue(Qr(d.clientX,p.left,p.right,c.__min,c.__max)),!1}function h(){O.unbind(window,"mousemove",u),O.unbind(window,"mouseup",h),c.__onFinishChange&&c.__onFinishChange.call(c,c.getValue())}function f(d){d.touches.length===1&&(O.bind(window,"touchmove",m),O.bind(window,"touchend",g),m(d))}function m(d){var p=d.touches[0].clientX,_=c.__background.getBoundingClientRect();c.setValue(Qr(p,_.left,_.right,c.__min,c.__max))}function g(){O.unbind(window,"touchmove",m),O.unbind(window,"touchend",g),c.__onFinishChange&&c.__onFinishChange.call(c,c.getValue())}return o.updateDisplay(),o.__background.appendChild(o.__foreground),o.domElement.appendChild(o.__background),o}return Ft(e,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",gn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(zo),ko=function(i){_n(e,i);function e(t,n,s){Ot(this,e);var r=vn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=r;return r.__button=document.createElement("div"),r.__button.innerHTML=s===void 0?"Fire":s,O.bind(r.__button,"click",function(o){return o.preventDefault(),a.fire(),!1}),O.addClass(r.__button,"button"),r.domElement.appendChild(r.__button),r}return Ft(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(Un),br=function(i){_n(e,i);function e(t,n){Ot(this,e);var s=vn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));s.__color=new Qe(s.getValue()),s.__temp=new Qe(0);var r=s;s.domElement=document.createElement("div"),O.makeSelectable(s.domElement,!1),s.__selector=document.createElement("div"),s.__selector.className="selector",s.__saturation_field=document.createElement("div"),s.__saturation_field.className="saturation-field",s.__field_knob=document.createElement("div"),s.__field_knob.className="field-knob",s.__field_knob_border="2px solid ",s.__hue_knob=document.createElement("div"),s.__hue_knob.className="hue-knob",s.__hue_field=document.createElement("div"),s.__hue_field.className="hue-field",s.__input=document.createElement("input"),s.__input.type="text",s.__input_textShadow="0 1px 1px ",O.bind(s.__input,"keydown",function(d){d.keyCode===13&&h.call(this)}),O.bind(s.__input,"blur",h),O.bind(s.__selector,"mousedown",function(){O.addClass(this,"drag").bind(window,"mouseup",function(){O.removeClass(r.__selector,"drag")})}),O.bind(s.__selector,"touchstart",function(){O.addClass(this,"drag").bind(window,"touchend",function(){O.removeClass(r.__selector,"drag")})});var a=document.createElement("div");H.extend(s.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),H.extend(s.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:s.__field_knob_border+(s.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),H.extend(s.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),H.extend(s.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),H.extend(a.style,{width:"100%",height:"100%",background:"none"}),ea(a,"top","rgba(0,0,0,0)","#000"),H.extend(s.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),Jl(s.__hue_field),H.extend(s.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:s.__input_textShadow+"rgba(0,0,0,0.7)"}),O.bind(s.__saturation_field,"mousedown",o),O.bind(s.__saturation_field,"touchstart",o),O.bind(s.__field_knob,"mousedown",o),O.bind(s.__field_knob,"touchstart",o),O.bind(s.__hue_field,"mousedown",c),O.bind(s.__hue_field,"touchstart",c);function o(d){m(d),O.bind(window,"mousemove",m),O.bind(window,"touchmove",m),O.bind(window,"mouseup",l),O.bind(window,"touchend",l)}function c(d){g(d),O.bind(window,"mousemove",g),O.bind(window,"touchmove",g),O.bind(window,"mouseup",u),O.bind(window,"touchend",u)}function l(){O.unbind(window,"mousemove",m),O.unbind(window,"touchmove",m),O.unbind(window,"mouseup",l),O.unbind(window,"touchend",l),f()}function u(){O.unbind(window,"mousemove",g),O.unbind(window,"touchmove",g),O.unbind(window,"mouseup",u),O.unbind(window,"touchend",u),f()}function h(){var d=xr(this.value);d!==!1?(r.__color.__state=d,r.setValue(r.__color.toOriginal())):this.value=r.__color.toString()}function f(){r.__onFinishChange&&r.__onFinishChange.call(r,r.__color.toOriginal())}s.__saturation_field.appendChild(a),s.__selector.appendChild(s.__field_knob),s.__selector.appendChild(s.__saturation_field),s.__selector.appendChild(s.__hue_field),s.__hue_field.appendChild(s.__hue_knob),s.domElement.appendChild(s.__input),s.domElement.appendChild(s.__selector),s.updateDisplay();function m(d){d.type.indexOf("touch")===-1&&d.preventDefault();var p=r.__saturation_field.getBoundingClientRect(),_=d.touches&&d.touches[0]||d,b=_.clientX,C=_.clientY,E=(b-p.left)/(p.right-p.left),S=1-(C-p.top)/(p.bottom-p.top);return S>1?S=1:S<0&&(S=0),E>1?E=1:E<0&&(E=0),r.__color.v=S,r.__color.s=E,r.setValue(r.__color.toOriginal()),!1}function g(d){d.type.indexOf("touch")===-1&&d.preventDefault();var p=r.__hue_field.getBoundingClientRect(),_=d.touches&&d.touches[0]||d,b=_.clientY,C=1-(b-p.top)/(p.bottom-p.top);return C>1?C=1:C<0&&(C=0),r.__color.h=C*360,r.setValue(r.__color.toOriginal()),!1}return s}return Ft(e,[{key:"updateDisplay",value:function(){var n=xr(this.getValue());if(n!==!1){var s=!1;H.each(Qe.COMPONENTS,function(o){if(!H.isUndefined(n[o])&&!H.isUndefined(this.__color.__state[o])&&n[o]!==this.__color.__state[o])return s=!0,{}},this),s&&H.extend(this.__color.__state,n)}H.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var r=this.__color.v<.5||this.__color.s>.5?255:0,a=255-r;H.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+r+","+r+","+r+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,ea(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),H.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+r+","+r+","+r+")",textShadow:this.__input_textShadow+"rgba("+a+","+a+","+a+",.7)"})}}]),e}(Un),Kl=["-moz-","-o-","-webkit-","-ms-",""];function ea(i,e,t,n){i.style.background="",H.each(Kl,function(s){i.style.cssText+="background: "+s+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}function Jl(i){i.style.background="",i.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",i.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var Ql={load:function(e,t){var n=t||document,s=n.createElement("link");s.type="text/css",s.rel="stylesheet",s.href=e,n.getElementsByTagName("head")[0].appendChild(s)},inject:function(e,t){var n=t||document,s=document.createElement("style");s.type="text/css",s.innerHTML=e;var r=n.getElementsByTagName("head")[0];try{r.appendChild(s)}catch{}}},ec=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,tc=function(e,t){var n=e[t];return H.isArray(arguments[2])||H.isObject(arguments[2])?new Yl(e,t,arguments[2]):H.isNumber(n)?H.isNumber(arguments[2])&&H.isNumber(arguments[3])?H.isNumber(arguments[4])?new yr(e,t,arguments[2],arguments[3],arguments[4]):new yr(e,t,arguments[2],arguments[3]):H.isNumber(arguments[4])?new Ms(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Ms(e,t,{min:arguments[2],max:arguments[3]}):H.isString(n)?new $l(e,t):H.isFunction(n)?new ko(e,t,""):H.isBoolean(n)?new No(e,t):null};function nc(i){setTimeout(i,1e3/60)}var ic=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||nc,sc=function(){function i(){Ot(this,i),this.backgroundElement=document.createElement("div"),H.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),O.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),H.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;O.bind(this.backgroundElement,"click",function(){e.hide()})}return Ft(i,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),H.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,n=function s(){t.domElement.style.display="none",t.backgroundElement.style.display="none",O.unbind(t.domElement,"webkitTransitionEnd",s),O.unbind(t.domElement,"transitionend",s),O.unbind(t.domElement,"oTransitionEnd",s)};O.bind(this.domElement,"webkitTransitionEnd",n),O.bind(this.domElement,"transitionend",n),O.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-O.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-O.getHeight(this.domElement)/2+"px"}}]),i}(),rc=Hl(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);Ql.inject(rc);var ta="dg",na=72,ia=20,Fi="Default",Li=function(){try{return!!window.localStorage}catch{return!1}}(),Ii=void 0,sa=!0,ai=void 0,Is=!1,Uo=[],Be=function i(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),O.addClass(this.domElement,ta),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=H.defaults(n,{closeOnTop:!1,autoPlace:!0,width:i.DEFAULT_WIDTH}),n=H.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),H.isUndefined(n.load)?n.load={preset:Fi}:n.preset&&(n.load.preset=n.preset),H.isUndefined(n.parent)&&n.hideable&&Uo.push(this),n.resizable=H.isUndefined(n.parent)&&n.resizable,n.autoPlace&&H.isUndefined(n.scrollable)&&(n.scrollable=!0);var s=Li&&localStorage.getItem(oi(this,"isLocal"))==="true",r=void 0,a=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:n.load.preset},set:function(f){t.parent?t.getRoot().preset=f:n.load.preset=f,cc(this),t.revert()}},width:{get:function(){return n.width},set:function(f){n.width=f,wr(t,f)}},name:{get:function(){return n.name},set:function(f){n.name=f,a&&(a.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(f){n.closed=f,n.closed?O.addClass(t.__ul,i.CLASS_CLOSED):O.removeClass(t.__ul,i.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=f?i.TEXT_OPEN:i.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return s},set:function(f){Li&&(s=f,f?O.bind(window,"unload",r):O.unbind(window,"unload",r),localStorage.setItem(oi(t,"isLocal"),f))}}}),H.isUndefined(n.parent)){if(this.closed=n.closed||!1,O.addClass(this.domElement,i.CLASS_MAIN),O.makeSelectable(this.domElement,!1),Li&&s){t.useLocalStorage=!0;var o=localStorage.getItem(oi(this,"gui"));o&&(n.load=JSON.parse(o))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=i.TEXT_CLOSED,O.addClass(this.__closeButton,i.CLASS_CLOSE_BUTTON),n.closeOnTop?(O.addClass(this.__closeButton,i.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(O.addClass(this.__closeButton,i.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),O.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var c=document.createTextNode(n.name);O.addClass(c,"controller-name"),a=Gr(t,c);var l=function(f){return f.preventDefault(),t.closed=!t.closed,!1};O.addClass(this.__ul,i.CLASS_CLOSED),O.addClass(a,"title"),O.bind(a,"click",l),n.closed||(this.closed=!1)}n.autoPlace&&(H.isUndefined(n.parent)&&(sa&&(ai=document.createElement("div"),O.addClass(ai,ta),O.addClass(ai,i.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(ai),sa=!1),ai.appendChild(this.domElement),O.addClass(this.domElement,i.CLASS_AUTO_PLACE)),this.parent||wr(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},O.bind(window,"resize",this.__resizeHandler),O.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),O.bind(this.__ul,"transitionend",this.__resizeHandler),O.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&lc(this),r=function(){Li&&localStorage.getItem(oi(t,"isLocal"))==="true"&&localStorage.setItem(oi(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=r;function u(){var h=t.getRoot();h.width+=1,H.defer(function(){h.width-=1})}n.parent||u()};Be.toggleHide=function(){Is=!Is,H.each(Uo,function(i){i.domElement.style.display=Is?"none":""})};Be.CLASS_AUTO_PLACE="a";Be.CLASS_AUTO_PLACE_CONTAINER="ac";Be.CLASS_MAIN="main";Be.CLASS_CONTROLLER_ROW="cr";Be.CLASS_TOO_TALL="taller-than-window";Be.CLASS_CLOSED="closed";Be.CLASS_CLOSE_BUTTON="close-button";Be.CLASS_CLOSE_TOP="close-top";Be.CLASS_CLOSE_BOTTOM="close-bottom";Be.CLASS_DRAG="drag";Be.DEFAULT_WIDTH=245;Be.TEXT_CLOSED="Close Controls";Be.TEXT_OPEN="Open Controls";Be._keydownHandler=function(i){document.activeElement.type!=="text"&&(i.which===na||i.keyCode===na)&&Be.toggleHide()};O.bind(window,"keydown",Be._keydownHandler,!1);H.extend(Be.prototype,{add:function(e,t){return Oi(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return Oi(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;H.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&ai.removeChild(this.domElement);var e=this;H.each(this.__folders,function(t){e.removeFolder(t)}),O.unbind(window,"keydown",Be._keydownHandler,!1),ra(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new Be(t);this.__folders[e]=n;var s=Gr(this,n.domElement);return O.addClass(s,"folder"),n},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],ra(e);var t=this;H.each(e.__folders,function(n){e.removeFolder(n)}),H.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=O.getOffset(e.__ul).top,n=0;H.each(e.__ul.childNodes,function(s){e.autoPlace&&s===e.__save_row||(n+=O.getHeight(s))}),window.innerHeight-t-ia<n?(O.addClass(e.domElement,Be.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-ia+"px"):(O.removeClass(e.domElement,Be.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&H.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:H.debounce(function(){this.onResize()},50),remember:function(){if(H.isUndefined(Ii)&&(Ii=new sc,Ii.domElement.innerHTML=ec),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;H.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&oc(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&wr(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=ji(this)),e.folders={},H.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=ji(this),Mr(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[Fi]=ji(this,!0)),this.load.remembered[e]=ji(this),this.preset=e,Sr(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){H.each(this.__controllers,function(t){this.getRoot().load.remembered?Bo(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),H.each(this.__folders,function(t){t.revert(t)}),e||Mr(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&Vo(this.__listening)},updateDisplay:function(){H.each(this.__controllers,function(e){e.updateDisplay()}),H.each(this.__folders,function(e){e.updateDisplay()})}});function Gr(i,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?i.__ul.insertBefore(n,t):i.__ul.appendChild(n),i.onResize(),n}function ra(i){O.unbind(window,"resize",i.__resizeHandler),i.saveToLocalStorageIfPossible&&O.unbind(window,"unload",i.saveToLocalStorageIfPossible)}function Mr(i,e){var t=i.__preset_select[i.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function ac(i,e,t){if(t.__li=e,t.__gui=i,H.extend(t,{options:function(a){if(arguments.length>1){var o=t.__li.nextElementSibling;return t.remove(),Oi(i,t.object,t.property,{before:o,factoryArgs:[H.toArray(arguments)]})}if(H.isArray(a)||H.isObject(a)){var c=t.__li.nextElementSibling;return t.remove(),Oi(i,t.object,t.property,{before:c,factoryArgs:[a]})}},name:function(a){return t.__li.firstElementChild.firstElementChild.innerHTML=a,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof yr){var n=new Ms(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});H.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(r){var a=t[r],o=n[r];t[r]=n[r]=function(){var c=Array.prototype.slice.call(arguments);return o.apply(n,c),a.apply(t,c)}}),O.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof Ms){var s=function(a){if(H.isNumber(t.__min)&&H.isNumber(t.__max)){var o=t.__li.firstElementChild.firstElementChild.innerHTML,c=t.__gui.__listening.indexOf(t)>-1;t.remove();var l=Oi(i,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return l.name(o),c&&l.listen(),l}return a};t.min=H.compose(s,t.min),t.max=H.compose(s,t.max)}else t instanceof No?(O.bind(e,"click",function(){O.fakeEvent(t.__checkbox,"click")}),O.bind(t.__checkbox,"click",function(r){r.stopPropagation()})):t instanceof ko?(O.bind(e,"click",function(){O.fakeEvent(t.__button,"click")}),O.bind(e,"mouseover",function(){O.addClass(t.__button,"hover")}),O.bind(e,"mouseout",function(){O.removeClass(t.__button,"hover")})):t instanceof br&&(O.addClass(e,"color"),t.updateDisplay=H.compose(function(r){return e.style.borderLeftColor=t.__color.toString(),r},t.updateDisplay),t.updateDisplay());t.setValue=H.compose(function(r){return i.getRoot().__preset_select&&t.isModified()&&Mr(i.getRoot(),!0),r},t.setValue)}function Bo(i,e){var t=i.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var s=t.__rememberedObjectIndecesToControllers[n];if(s===void 0&&(s={},t.__rememberedObjectIndecesToControllers[n]=s),s[e.property]=e,t.load&&t.load.remembered){var r=t.load.remembered,a=void 0;if(r[i.preset])a=r[i.preset];else if(r[Fi])a=r[Fi];else return;if(a[n]&&a[n][e.property]!==void 0){var o=a[n][e.property];e.initialValue=o,e.setValue(o)}}}}function Oi(i,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var s=void 0;if(n.color)s=new br(e,t);else{var r=[e,t].concat(n.factoryArgs);s=tc.apply(i,r)}n.before instanceof Un&&(n.before=n.before.__li),Bo(i,s),O.addClass(s.domElement,"c");var a=document.createElement("span");O.addClass(a,"property-name"),a.innerHTML=s.property;var o=document.createElement("div");o.appendChild(a),o.appendChild(s.domElement);var c=Gr(i,o,n.before);return O.addClass(c,Be.CLASS_CONTROLLER_ROW),s instanceof br?O.addClass(c,"color"):O.addClass(c,ql(s.getValue())),ac(i,c,s),i.__controllers.push(s),s}function oi(i,e){return document.location.href+"."+e}function Sr(i,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,i.__preset_select.appendChild(n),t&&(i.__preset_select.selectedIndex=i.__preset_select.length-1)}function aa(i,e){e.style.display=i.useLocalStorage?"block":"none"}function oc(i){var e=i.__save_row=document.createElement("li");O.addClass(i.domElement,"has-save"),i.__ul.insertBefore(e,i.__ul.firstChild),O.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",O.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",O.addClass(n,"button"),O.addClass(n,"save");var s=document.createElement("span");s.innerHTML="New",O.addClass(s,"button"),O.addClass(s,"save-as");var r=document.createElement("span");r.innerHTML="Revert",O.addClass(r,"button"),O.addClass(r,"revert");var a=i.__preset_select=document.createElement("select");if(i.load&&i.load.remembered?H.each(i.load.remembered,function(h,f){Sr(i,f,f===i.preset)}):Sr(i,Fi,!1),O.bind(a,"change",function(){for(var h=0;h<i.__preset_select.length;h++)i.__preset_select[h].innerHTML=i.__preset_select[h].value;i.preset=this.value}),e.appendChild(a),e.appendChild(t),e.appendChild(n),e.appendChild(s),e.appendChild(r),Li){var o=document.getElementById("dg-local-explain"),c=document.getElementById("dg-local-storage"),l=document.getElementById("dg-save-locally");l.style.display="block",localStorage.getItem(oi(i,"isLocal"))==="true"&&c.setAttribute("checked","checked"),aa(i,o),O.bind(c,"change",function(){i.useLocalStorage=!i.useLocalStorage,aa(i,o)})}var u=document.getElementById("dg-new-constructor");O.bind(u,"keydown",function(h){h.metaKey&&(h.which===67||h.keyCode===67)&&Ii.hide()}),O.bind(t,"click",function(){u.innerHTML=JSON.stringify(i.getSaveObject(),void 0,2),Ii.show(),u.focus(),u.select()}),O.bind(n,"click",function(){i.save()}),O.bind(s,"click",function(){var h=prompt("Enter a new preset name.");h&&i.saveAs(h)}),O.bind(r,"click",function(){i.revert()})}function lc(i){var e=void 0;i.__resize_handle=document.createElement("div"),H.extend(i.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(r){return r.preventDefault(),i.width+=e-r.clientX,i.onResize(),e=r.clientX,!1}function n(){O.removeClass(i.__closeButton,Be.CLASS_DRAG),O.unbind(window,"mousemove",t),O.unbind(window,"mouseup",n)}function s(r){return r.preventDefault(),e=r.clientX,O.addClass(i.__closeButton,Be.CLASS_DRAG),O.bind(window,"mousemove",t),O.bind(window,"mouseup",n),!1}O.bind(i.__resize_handle,"mousedown",s),O.bind(i.__closeButton,"mousedown",s),i.domElement.insertBefore(i.__resize_handle,i.domElement.firstElementChild)}function wr(i,e){i.domElement.style.width=e+"px",i.__save_row&&i.autoPlace&&(i.__save_row.style.width=e+"px"),i.__closeButton&&(i.__closeButton.style.width=e+"px")}function ji(i,e){var t={};return H.each(i.__rememberedObjects,function(n,s){var r={},a=i.__rememberedObjectIndecesToControllers[s];H.each(a,function(o,c){r[c]=e?o.initialValue:o.getValue()}),t[s]=r}),t}function cc(i){for(var e=0;e<i.__preset_select.length;e++)i.__preset_select[e].value===i.preset&&(i.__preset_select.selectedIndex=e)}function Vo(i){i.length!==0&&ic.call(window,function(){Vo(i)}),H.each(i,function(e){e.updateDisplay()})}var uc=Be;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hr="141",Wn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},qn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hc=0,oa=1,dc=2,Go=1,fc=2,Ri=3,Ni=0,Dt=1,Fn=2,pc=1,pn=0,fi=1,la=2,ca=3,ua=4,mc=5,li=100,gc=101,_c=102,ha=103,da=104,vc=200,xc=201,yc=202,bc=203,Ho=204,Wo=205,Mc=206,Sc=207,wc=208,Ec=209,Tc=210,Ac=0,Cc=1,Lc=2,Er=3,Rc=4,Pc=5,Dc=6,Ic=7,Ts=0,Oc=1,Fc=2,rn=0,Nc=1,zc=2,kc=3,Uc=4,Bc=5,qo=300,mi=301,gi=302,Tr=303,Ar=304,As=306,Cr=1e3,Rt=1001,Lr=1002,pt=1003,fa=1004,pa=1005,bt=1006,Vc=1007,Cs=1008,Nn=1009,Gc=1010,Hc=1011,Xo=1012,Wc=1013,Rn=1014,Pn=1015,zi=1016,qc=1017,Xc=1018,pi=1020,jc=1021,Yc=1022,Pt=1023,$c=1024,Zc=1025,In=1026,_i=1027,Kc=1028,Jc=1029,Qc=1030,eu=1031,tu=1033,Os=33776,Fs=33777,Ns=33778,zs=33779,ma=35840,ga=35841,_a=35842,va=35843,nu=36196,xa=37492,ya=37496,ba=37808,Ma=37809,Sa=37810,wa=37811,Ea=37812,Ta=37813,Aa=37814,Ca=37815,La=37816,Ra=37817,Pa=37818,Da=37819,Ia=37820,Oa=37821,Fa=36492,zn=3e3,Ge=3001,iu=3200,su=3201,xi=0,ru=1,sn="srgb",Dn="srgb-linear",ks=7680,au=519,Na=35044,za="300 es",Rr=1035;class Bn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const tt=[];for(let i=0;i<256;i++)tt[i]=(i<16?"0":"")+i.toString(16);const Us=Math.PI/180,ka=180/Math.PI;function Bi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tt[i&255]+tt[i>>8&255]+tt[i>>16&255]+tt[i>>24&255]+"-"+tt[e&255]+tt[e>>8&255]+"-"+tt[e>>16&15|64]+tt[e>>24&255]+"-"+tt[t&63|128]+tt[t>>8&255]+"-"+tt[t>>16&255]+tt[t>>24&255]+tt[n&255]+tt[n>>8&255]+tt[n>>16&255]+tt[n>>24&255]).toLowerCase()}function ut(i,e,t){return Math.max(e,Math.min(t,i))}function ou(i,e){return(i%e+e)%e}function Bs(i,e,t){return(1-t)*i+t*e}function Ua(i){return(i&i-1)===0&&i!==0}function Pr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}class we{constructor(e=0,t=0){this.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(){this.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,s,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],d=s[0],p=s[3],_=s[6],b=s[1],C=s[4],E=s[7],S=s[2],T=s[5],R=s[8];return r[0]=a*d+o*b+c*S,r[3]=a*p+o*C+c*T,r[6]=a*_+o*E+c*R,r[1]=l*d+u*b+h*S,r[4]=l*p+u*C+h*T,r[7]=l*_+u*E+h*R,r[2]=f*d+m*b+g*S,r[5]=f*p+m*C+g*T,r[8]=f*_+m*E+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*r,m=l*r-a*c,g=t*h+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=h*d,e[1]=(s*l-u*n)*d,e[2]=(o*n-s*a)*d,e[3]=f*d,e[4]=(u*t-s*c)*d,e[5]=(s*r-o*t)*d,e[6]=m*d,e[7]=(n*c-l*t)*d,e[8]=(a*t-n*r)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),s=this.elements,r=s[0],a=s[3],o=s[6],c=s[1],l=s[4],u=s[7];return s[0]=t*r+n*c,s[3]=t*a+n*l,s[6]=t*o+n*u,s[1]=-n*r+t*c,s[4]=-n*a+t*l,s[7]=-n*o+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function jo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>65535)return!0;return!1}function ki(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function On(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Vs={[sn]:{[Dn]:On},[Dn]:{[sn]:vs}},wt={legacyMode:!0,get workingColorSpace(){return Dn},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(Vs[e]&&Vs[e][t]!==void 0){const n=Vs[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},Yo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ze={r:0,g:0,b:0},Et={h:0,s:0,l:0},Yi={h:0,s:0,l:0};function Gs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function $i(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class Ee{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Dn){return this.r=e,this.g=t,this.b=n,wt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Dn){if(e=ou(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Gs(a,r,e+1/3),this.g=Gs(a,r,e),this.b=Gs(a,r,e-1/3)}return wt.toWorkingColorSpace(this,s),this}setStyle(e,t=sn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,wt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,wt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const c=parseFloat(r[1])/360,l=parseInt(r[2],10)/100,u=parseInt(r[3],10)/100;return n(r[4]),this.setHSL(c,l,u,t)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,wt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,wt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=sn){const n=Yo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=On(e.r),this.g=On(e.g),this.b=On(e.b),this}copyLinearToSRGB(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return wt.fromWorkingColorSpace($i(this,Ze),e),ut(Ze.r*255,0,255)<<16^ut(Ze.g*255,0,255)<<8^ut(Ze.b*255,0,255)<<0}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Dn){wt.fromWorkingColorSpace($i(this,Ze),t);const n=Ze.r,s=Ze.g,r=Ze.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Dn){return wt.fromWorkingColorSpace($i(this,Ze),t),e.r=Ze.r,e.g=Ze.g,e.b=Ze.b,e}getStyle(e=sn){return wt.fromWorkingColorSpace($i(this,Ze),e),e!==sn?`color(${e} ${Ze.r} ${Ze.g} ${Ze.b})`:`rgb(${Ze.r*255|0},${Ze.g*255|0},${Ze.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Et),Et.h+=e,Et.s+=t,Et.l+=n,this.setHSL(Et.h,Et.s,Et.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Et),e.getHSL(Yi);const n=Bs(Et.h,Yi.h,t),s=Bs(Et.s,Yi.s,t),r=Bs(Et.l,Yi.l,t);return this.setHSL(n,s,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ee.NAMES=Yo;let Xn;class $o{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xn===void 0&&(Xn=ki("canvas")),Xn.width=e.width,Xn.height=e.height;const n=Xn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Xn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=ki("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=On(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(On(t[n]/255)*255):t[n]=On(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Zo{constructor(e=null){this.isSource=!0,this.uuid=Bi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Hs(s[a].image)):r.push(Hs(s[a]))}else r=Hs(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Hs(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?$o.getDataURL(i):i.data?{data:Array.prototype.slice.call(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lu=0;class St extends Bn{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=Rt,s=Rt,r=bt,a=Cs,o=Pt,c=Nn,l=1,u=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=Bi(),this.name="",this.source=new Zo(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cr:e.x=e.x-Math.floor(e.x);break;case Rt:e.x=e.x<0?0:1;break;case Lr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cr:e.y=e.y-Math.floor(e.y);break;case Rt:e.y=e.y<0?0:1;break;case Lr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=qo;class it{constructor(e=0,t=0,n=0,s=1){this.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],m=c[5],g=c[9],d=c[2],p=c[6],_=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-d)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+d)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(l+1)/2,E=(m+1)/2,S=(_+1)/2,T=(u+f)/4,R=(h+d)/4,v=(g+p)/4;return C>E&&C>S?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=T/n,r=R/n):E>S?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=T/s,r=v/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=R/r,s=v/r),this.set(n,s,r,t),this}let b=Math.sqrt((p-g)*(p-g)+(h-d)*(h-d)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(h-d)/b,this.z=(f-u)/b,this.w=Math.acos((l+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mn extends Bn{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new St(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:bt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Zo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ko extends St{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=pt,this.minFilter=pt,this.wrapR=Rt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cu extends St{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=pt,this.minFilter=pt,this.wrapR=Rt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerp(e,t,n,s){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,s)}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const f=r[a+0],m=r[a+1],g=r[a+2],d=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=d;return}if(h!==d||c!==f||l!==m||u!==g){let p=1-o;const _=c*f+l*m+u*g+h*d,b=_>=0?1:-1,C=1-_*_;if(C>Number.EPSILON){const S=Math.sqrt(C),T=Math.atan2(S,_*b);p=Math.sin(p*T)/S,o=Math.sin(o*T)/S}const E=o*b;if(c=c*p+f*E,l=l*p+m*E,u=u*p+g*E,h=h*p+d*E,p===1-o){const S=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=S,l*=S,u*=S,h*=S}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+u*h+c*m-l*f,e[t+1]=c*g+u*f+l*h-o*m,e[t+2]=l*g+u*m+o*f-c*h,e[t+3]=u*g-o*h-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),f=c(n/2),m=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*u*h+l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h+f*m*g;break;case"YZX":this._x=f*u*h+l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h-f*m*g;break;case"XZY":this._x=f*u*h-l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){this.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Ba.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ba.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=c*t+a*s-o*n,u=c*n+o*t-r*s,h=c*s+r*n-a*t,f=-r*t-a*n-o*s;return this.x=l*c+f*-r+u*-o-h*-a,this.y=u*c+f*-a+h*-r-l*-o,this.z=h*c+f*-o+l*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ws.copy(this).projectOnVector(e),this.sub(Ws)}reflect(e){return this.sub(Ws.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ws=new P,Ba=new kn;class Vi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,s=1/0,r=-1/0,a=-1/0,o=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],h=e[c+1],f=e[c+2];u<t&&(t=u),h<n&&(n=h),f<s&&(s=f),u>r&&(r=u),h>a&&(a=h),f>o&&(o=f)}return this.min.set(t,n,s),this.max.set(r,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,s=1/0,r=-1/0,a=-1/0,o=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),h=e.getY(c),f=e.getZ(c);u<t&&(t=u),h<n&&(n=h),f<s&&(s=f),u>r&&(r=u),h>a&&(a=h),f>o&&(o=f)}return this.min.set(t,n,s),this.max.set(r,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,o=r.count;a<o;a++)bn.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(bn)}else n.boundingBox===null&&n.computeBoundingBox(),qs.copy(n.boundingBox),qs.applyMatrix4(e.matrixWorld),this.union(qs);const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ei),Zi.subVectors(this.max,Ei),jn.subVectors(e.a,Ei),Yn.subVectors(e.b,Ei),$n.subVectors(e.c,Ei),on.subVectors(Yn,jn),ln.subVectors($n,Yn),Mn.subVectors(jn,$n);let t=[0,-on.z,on.y,0,-ln.z,ln.y,0,-Mn.z,Mn.y,on.z,0,-on.x,ln.z,0,-ln.x,Mn.z,0,-Mn.x,-on.y,on.x,0,-ln.y,ln.x,0,-Mn.y,Mn.x,0];return!Xs(t,jn,Yn,$n,Zi)||(t=[1,0,0,0,1,0,0,0,1],!Xs(t,jn,Yn,$n,Zi))?!1:(Ki.crossVectors(on,ln),t=[Ki.x,Ki.y,Ki.z],Xs(t,jn,Yn,$n,Zi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return bn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kt=[new P,new P,new P,new P,new P,new P,new P,new P],bn=new P,qs=new Vi,jn=new P,Yn=new P,$n=new P,on=new P,ln=new P,Mn=new P,Ei=new P,Zi=new P,Ki=new P,Sn=new P;function Xs(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Sn.fromArray(i,r);const o=s.x*Math.abs(Sn.x)+s.y*Math.abs(Sn.y)+s.z*Math.abs(Sn.z),c=e.dot(Sn),l=t.dot(Sn),u=n.dot(Sn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const uu=new Vi,Va=new P,Ji=new P,js=new P;class Wr{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):uu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){js.subVectors(e,this.center);const t=js.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.add(js.multiplyScalar(s/n)),this.radius+=s}return this}union(e){return this.center.equals(e.center)===!0?Ji.set(0,0,1).multiplyScalar(e.radius):Ji.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Va.copy(e.center).add(Ji)),this.expandByPoint(Va.copy(e.center).sub(Ji)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jt=new P,Ys=new P,Qi=new P,cn=new P,$s=new P,es=new P,Zs=new P;class hu{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jt.copy(this.direction).multiplyScalar(t).add(this.origin),Jt.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ys.copy(e).add(t).multiplyScalar(.5),Qi.copy(t).sub(e).normalize(),cn.copy(this.origin).sub(Ys);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Qi),o=cn.dot(this.direction),c=-cn.dot(Qi),l=cn.lengthSq(),u=Math.abs(1-a*a);let h,f,m,g;if(u>0)if(h=a*c-o,f=a*o-c,g=r*u,h>=0)if(f>=-g)if(f<=g){const d=1/u;h*=d,f*=d,m=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-c),r),m=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-c),r),m=-h*h+f*(f+2*c)+l);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),s&&s.copy(Qi).multiplyScalar(f).add(Ys),m}intersectSphere(e,t){Jt.subVectors(e.center,this.origin);const n=Jt.dot(this.direction),s=Jt.dot(Jt)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return o<0&&c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||n!==n)&&(n=r),(a<s||s!==s)&&(s=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Jt)!==null}intersectTriangle(e,t,n,s,r){$s.subVectors(t,e),es.subVectors(n,e),Zs.crossVectors($s,es);let a=this.direction.dot(Zs),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;cn.subVectors(this.origin,e);const c=o*this.direction.dot(es.crossVectors(cn,es));if(c<0)return null;const l=o*this.direction.dot($s.cross(cn));if(l<0||c+l>a)return null;const u=-o*cn.dot(Zs);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(){this.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,s,r,a,o,c,l,u,h,f,m,g,d,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=s,_[1]=r,_[5]=a,_[9]=o,_[13]=c,_[2]=l,_[6]=u,_[10]=h,_[14]=f,_[3]=m,_[7]=g,_[11]=d,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Zn.setFromMatrixColumn(e,0).length(),r=1/Zn.setFromMatrixColumn(e,1).length(),a=1/Zn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,m=a*h,g=o*u,d=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+g*l,t[5]=f-d*l,t[9]=-o*c,t[2]=d-f*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,m=c*h,g=l*u,d=l*h;t[0]=f+d*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=d+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,m=c*h,g=l*u,d=l*h;t[0]=f-d*o,t[4]=-a*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=d-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,m=a*h,g=o*u,d=o*h;t[0]=c*u,t[4]=g*l-m,t[8]=f*l+d,t[1]=c*h,t[5]=d*l+f,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,m=a*l,g=o*c,d=o*l;t[0]=c*u,t[4]=d-f*h,t[8]=g*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*h+g,t[10]=f-d*h}else if(e.order==="XZY"){const f=a*c,m=a*l,g=o*c,d=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+d,t[5]=a*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*u,t[10]=d*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(du,e,fu)}lookAt(e,t,n){const s=this.elements;return gt.subVectors(e,t),gt.lengthSq()===0&&(gt.z=1),gt.normalize(),un.crossVectors(n,gt),un.lengthSq()===0&&(Math.abs(n.z)===1?gt.x+=1e-4:gt.z+=1e-4,gt.normalize(),un.crossVectors(n,gt)),un.normalize(),ts.crossVectors(gt,un),s[0]=un.x,s[4]=ts.x,s[8]=gt.x,s[1]=un.y,s[5]=ts.y,s[9]=gt.y,s[2]=un.z,s[6]=ts.z,s[10]=gt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],d=n[6],p=n[10],_=n[14],b=n[3],C=n[7],E=n[11],S=n[15],T=s[0],R=s[4],v=s[8],L=s[12],N=s[1],z=s[5],ce=s[9],Q=s[13],D=s[2],X=s[6],B=s[10],j=s[14],Y=s[3],U=s[7],q=s[11],re=s[15];return r[0]=a*T+o*N+c*D+l*Y,r[4]=a*R+o*z+c*X+l*U,r[8]=a*v+o*ce+c*B+l*q,r[12]=a*L+o*Q+c*j+l*re,r[1]=u*T+h*N+f*D+m*Y,r[5]=u*R+h*z+f*X+m*U,r[9]=u*v+h*ce+f*B+m*q,r[13]=u*L+h*Q+f*j+m*re,r[2]=g*T+d*N+p*D+_*Y,r[6]=g*R+d*z+p*X+_*U,r[10]=g*v+d*ce+p*B+_*q,r[14]=g*L+d*Q+p*j+_*re,r[3]=b*T+C*N+E*D+S*Y,r[7]=b*R+C*z+E*X+S*U,r[11]=b*v+C*ce+E*B+S*q,r[15]=b*L+C*Q+E*j+S*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],m=e[14],g=e[3],d=e[7],p=e[11],_=e[15];return g*(+r*c*h-s*l*h-r*o*f+n*l*f+s*o*m-n*c*m)+d*(+t*c*m-t*l*f+r*a*f-s*a*m+s*l*u-r*c*u)+p*(+t*l*h-t*o*m-r*a*h+n*a*m+r*o*u-n*l*u)+_*(-s*o*u-t*c*h+t*o*f+s*a*h-n*a*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],m=e[11],g=e[12],d=e[13],p=e[14],_=e[15],b=h*p*l-d*f*l+d*c*m-o*p*m-h*c*_+o*f*_,C=g*f*l-u*p*l-g*c*m+a*p*m+u*c*_-a*f*_,E=u*d*l-g*h*l+g*o*m-a*d*m-u*o*_+a*h*_,S=g*h*c-u*d*c-g*o*f+a*d*f+u*o*p-a*h*p,T=t*b+n*C+s*E+r*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=b*R,e[1]=(d*f*r-h*p*r-d*s*m+n*p*m+h*s*_-n*f*_)*R,e[2]=(o*p*r-d*c*r+d*s*l-n*p*l-o*s*_+n*c*_)*R,e[3]=(h*c*r-o*f*r-h*s*l+n*f*l+o*s*m-n*c*m)*R,e[4]=C*R,e[5]=(u*p*r-g*f*r+g*s*m-t*p*m-u*s*_+t*f*_)*R,e[6]=(g*c*r-a*p*r-g*s*l+t*p*l+a*s*_-t*c*_)*R,e[7]=(a*f*r-u*c*r+u*s*l-t*f*l-a*s*m+t*c*m)*R,e[8]=E*R,e[9]=(g*h*r-u*d*r-g*n*m+t*d*m+u*n*_-t*h*_)*R,e[10]=(a*d*r-g*o*r+g*n*l-t*d*l-a*n*_+t*o*_)*R,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*m-t*o*m)*R,e[12]=S*R,e[13]=(u*d*s-g*h*s+g*n*f-t*d*f-u*n*p+t*h*p)*R,e[14]=(g*o*s-a*d*s-g*n*c+t*d*c+a*n*p-t*o*p)*R,e[15]=(a*h*s-u*o*s+u*n*c-t*h*c-a*n*f+t*o*f)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,f=r*l,m=r*u,g=r*h,d=a*u,p=a*h,_=o*h,b=c*l,C=c*u,E=c*h,S=n.x,T=n.y,R=n.z;return s[0]=(1-(d+_))*S,s[1]=(m+E)*S,s[2]=(g-C)*S,s[3]=0,s[4]=(m-E)*T,s[5]=(1-(f+_))*T,s[6]=(p+b)*T,s[7]=0,s[8]=(g+C)*R,s[9]=(p-b)*R,s[10]=(1-(f+d))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Zn.set(s[0],s[1],s[2]).length();const a=Zn.set(s[4],s[5],s[6]).length(),o=Zn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Tt.copy(this);const l=1/r,u=1/a,h=1/o;return Tt.elements[0]*=l,Tt.elements[1]*=l,Tt.elements[2]*=l,Tt.elements[4]*=u,Tt.elements[5]*=u,Tt.elements[6]*=u,Tt.elements[8]*=h,Tt.elements[9]*=h,Tt.elements[10]*=h,t.setFromRotationMatrix(Tt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,c=2*r/(t-e),l=2*r/(n-s),u=(t+e)/(t-e),h=(n+s)/(n-s),f=-(a+r)/(a-r),m=-2*a*r/(a-r);return o[0]=c,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=l,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,s,r,a){const o=this.elements,c=1/(t-e),l=1/(n-s),u=1/(a-r),h=(t+e)*c,f=(n+s)*l,m=(a+r)*u;return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Zn=new P,Tt=new at,du=new P(0,0,0),fu=new P(1,1,1),un=new P,ts=new P,gt=new P,Ga=new at,Ha=new kn;class Gi{constructor(e=0,t=0,n=0,s=Gi.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ut(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ga.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ga,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ha.setFromEuler(this),this.setFromQuaternion(Ha,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Gi.DefaultOrder="XYZ";Gi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Jo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pu=0;const Wa=new P,Kn=new kn,Qt=new at,ns=new P,Ti=new P,mu=new P,gu=new kn,qa=new P(1,0,0),Xa=new P(0,1,0),ja=new P(0,0,1),_u={type:"added"},Ya={type:"removed"};class It extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=Bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DefaultUp.clone();const e=new P,t=new Gi,n=new kn,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new qt}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=It.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.premultiply(Kn),this}rotateX(e){return this.rotateOnAxis(qa,e)}rotateY(e){return this.rotateOnAxis(Xa,e)}rotateZ(e){return this.rotateOnAxis(ja,e)}translateOnAxis(e,t){return Wa.copy(e).applyQuaternion(this.quaternion),this.position.add(Wa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qa,e)}translateY(e){return this.translateOnAxis(Xa,e)}translateZ(e){return this.translateOnAxis(ja,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Qt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ns.copy(e):ns.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ti.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qt.lookAt(Ti,ns,this.up):Qt.lookAt(ns,Ti,this.up),this.quaternion.setFromRotationMatrix(Qt),s&&(Qt.extractRotation(s.matrixWorld),Kn.setFromRotationMatrix(Qt),this.quaternion.premultiply(Kn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(_u)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ya)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ya)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Qt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,e,mu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,gu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}It.DefaultUp=new P(0,1,0);It.DefaultMatrixAutoUpdate=!0;const At=new P,en=new P,Ks=new P,tn=new P,Jn=new P,Qn=new P,$a=new P,Js=new P,Qs=new P,er=new P;class Wt{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),At.subVectors(e,t),s.cross(At);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){At.subVectors(s,t),en.subVectors(n,t),Ks.subVectors(e,t);const a=At.dot(At),o=At.dot(en),c=At.dot(Ks),l=en.dot(en),u=en.dot(Ks),h=a*l-o*o;if(h===0)return r.set(-2,-1,-1);const f=1/h,m=(l*c-o*u)*f,g=(a*u-o*c)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,tn),tn.x>=0&&tn.y>=0&&tn.x+tn.y<=1}static getUV(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,tn),c.set(0,0),c.addScaledVector(r,tn.x),c.addScaledVector(a,tn.y),c.addScaledVector(o,tn.z),c}static isFrontFacing(e,t,n,s){return At.subVectors(n,t),en.subVectors(e,t),At.cross(en).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return At.subVectors(this.c,this.b),en.subVectors(this.a,this.b),At.cross(en).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Wt.getUV(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Wt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Jn.subVectors(s,n),Qn.subVectors(r,n),Js.subVectors(e,n);const c=Jn.dot(Js),l=Qn.dot(Js);if(c<=0&&l<=0)return t.copy(n);Qs.subVectors(e,s);const u=Jn.dot(Qs),h=Qn.dot(Qs);if(u>=0&&h<=u)return t.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Jn,a);er.subVectors(e,r);const m=Jn.dot(er),g=Qn.dot(er);if(g>=0&&m<=g)return t.copy(r);const d=m*l-c*g;if(d<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Qn,o);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return $a.subVectors(r,s),o=(h-u)/(h-u+(m-g)),t.copy(s).addScaledVector($a,o);const _=1/(p+d+f);return a=d*_,o=f*_,t.copy(n).addScaledVector(Jn,a).addScaledVector(Qn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let vu=0;class st extends Bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=Bi(),this.name="",this.type="Material",this.blending=fi,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ho,this.blendDst=Wo,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===pc;continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fi&&(n.blending=this.blending),this.side!==Ni&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}get vertexTangents(){return console.warn("THREE."+this.type+": .vertexTangents has been removed."),!1}set vertexTangents(e){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}st.fromType=function(){return null};class Ui extends st{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ts,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const je=new P,is=new we;class jt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Na,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let s=0,r=e.length;s<r;s++){let a=e[s];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",s),a=new Ee),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let s=0,r=e.length;s<r;s++){let a=e[s];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",s),a=new we),t[n++]=a.x,t[n++]=a.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let s=0,r=e.length;s<r;s++){let a=e[s];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",s),a=new P),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let s=0,r=e.length;s<r;s++){let a=e[s];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",s),a=new it),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)is.fromBufferAttribute(this,t),is.applyMatrix3(e),this.setXY(t,is.x,is.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)je.fromBufferAttribute(this,t),je.applyMatrix3(e),this.setXYZ(t,je.x,je.y,je.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)je.fromBufferAttribute(this,t),je.applyMatrix4(e),this.setXYZ(t,je.x,je.y,je.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)je.fromBufferAttribute(this,t),je.applyNormalMatrix(e),this.setXYZ(t,je.x,je.y,je.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)je.fromBufferAttribute(this,t),je.transformDirection(e),this.setXYZ(t,je.x,je.y,je.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Na&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Qo extends jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class el extends jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Yt extends jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let xu=0;const yt=new at,tr=new It,ei=new P,_t=new Vi,Ai=new Vi,Je=new P;class xn extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=Bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jo(e)?el:Qo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yt.makeRotationFromQuaternion(e),this.applyMatrix4(yt),this}rotateX(e){return yt.makeRotationX(e),this.applyMatrix4(yt),this}rotateY(e){return yt.makeRotationY(e),this.applyMatrix4(yt),this}rotateZ(e){return yt.makeRotationZ(e),this.applyMatrix4(yt),this}translate(e,t,n){return yt.makeTranslation(e,t,n),this.applyMatrix4(yt),this}scale(e,t,n){return yt.makeScale(e,t,n),this.applyMatrix4(yt),this}lookAt(e){return tr.lookAt(e),tr.updateMatrix(),this.applyMatrix4(tr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Yt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];_t.setFromBufferAttribute(r),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,_t.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,_t.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(_t.min),this.boundingBox.expandByPoint(_t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(_t.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ai.setFromBufferAttribute(o),this.morphTargetsRelative?(Je.addVectors(_t.min,Ai.min),_t.expandByPoint(Je),Je.addVectors(_t.max,Ai.max),_t.expandByPoint(Je)):(_t.expandByPoint(Ai.min),_t.expandByPoint(Ai.max))}_t.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Je.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Je));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Je.fromBufferAttribute(o,l),c&&(ei.fromBufferAttribute(e,l),Je.add(ei)),s=Math.max(s,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let N=0;N<o;N++)l[N]=new P,u[N]=new P;const h=new P,f=new P,m=new P,g=new we,d=new we,p=new we,_=new P,b=new P;function C(N,z,ce){h.fromArray(s,N*3),f.fromArray(s,z*3),m.fromArray(s,ce*3),g.fromArray(a,N*2),d.fromArray(a,z*2),p.fromArray(a,ce*2),f.sub(h),m.sub(h),d.sub(g),p.sub(g);const Q=1/(d.x*p.y-p.x*d.y);!isFinite(Q)||(_.copy(f).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(Q),b.copy(m).multiplyScalar(d.x).addScaledVector(f,-p.x).multiplyScalar(Q),l[N].add(_),l[z].add(_),l[ce].add(_),u[N].add(b),u[z].add(b),u[ce].add(b))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let N=0,z=E.length;N<z;++N){const ce=E[N],Q=ce.start,D=ce.count;for(let X=Q,B=Q+D;X<B;X+=3)C(n[X+0],n[X+1],n[X+2])}const S=new P,T=new P,R=new P,v=new P;function L(N){R.fromArray(r,N*3),v.copy(R);const z=l[N];S.copy(z),S.sub(R.multiplyScalar(R.dot(z))).normalize(),T.crossVectors(v,z);const Q=T.dot(u[N])<0?-1:1;c[N*4]=S.x,c[N*4+1]=S.y,c[N*4+2]=S.z,c[N*4+3]=Q}for(let N=0,z=E.length;N<z;++N){const ce=E[N],Q=ce.start,D=ce.count;for(let X=Q,B=Q+D;X<B;X+=3)L(n[X+0]),L(n[X+1]),L(n[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,u=new P,h=new P;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),d=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,d),a.fromBufferAttribute(t,p),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,d),l.fromBufferAttribute(n,p),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(d,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const s in n){if(e.attributes[s]===void 0)continue;const a=n[s].array,o=e.attributes[s],c=o.array,l=o.itemSize*t,u=Math.min(c.length,a.length-l);for(let h=0,f=l;h<u;h++,f++)a[f]=c[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Je.fromBufferAttribute(e,t),Je.normalize(),e.setXYZ(t,Je.x,Je.y,Je.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let m=0,g=0;for(let d=0,p=c.length;d<p;d++){o.isInterleavedBufferAttribute?m=c[d]*o.data.stride+o.offset:m=c[d]*u;for(let _=0;_<u;_++)f[g++]=l[m++]}return new jt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xn,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],m=e(f,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Za=new at,ti=new hu,nr=new Wr,hn=new P,dn=new P,fn=new P,ir=new P,sr=new P,rr=new P,ss=new P,rs=new P,as=new P,os=new we,ls=new we,cs=new we,ar=new P,us=new P;class Xt extends It{constructor(e=new xn,t=new Ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(r),e.ray.intersectsSphere(nr)===!1)||(Za.copy(r).invert(),ti.copy(e.ray).applyMatrix4(Za),n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,c=n.attributes.position,l=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,m=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(s))for(let d=0,p=m.length;d<p;d++){const _=m[d],b=s[_.materialIndex],C=Math.max(_.start,g.start),E=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let S=C,T=E;S<T;S+=3){const R=o.getX(S),v=o.getX(S+1),L=o.getX(S+2);a=hs(this,b,e,ti,c,l,u,h,f,R,v,L),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const d=Math.max(0,g.start),p=Math.min(o.count,g.start+g.count);for(let _=d,b=p;_<b;_+=3){const C=o.getX(_),E=o.getX(_+1),S=o.getX(_+2);a=hs(this,s,e,ti,c,l,u,h,f,C,E,S),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(s))for(let d=0,p=m.length;d<p;d++){const _=m[d],b=s[_.materialIndex],C=Math.max(_.start,g.start),E=Math.min(c.count,Math.min(_.start+_.count,g.start+g.count));for(let S=C,T=E;S<T;S+=3){const R=S,v=S+1,L=S+2;a=hs(this,b,e,ti,c,l,u,h,f,R,v,L),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const d=Math.max(0,g.start),p=Math.min(c.count,g.start+g.count);for(let _=d,b=p;_<b;_+=3){const C=_,E=_+1,S=_+2;a=hs(this,s,e,ti,c,l,u,h,f,C,E,S),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}}function yu(i,e,t,n,s,r,a,o){let c;if(e.side===Dt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side!==Fn,o),c===null)return null;us.copy(o),us.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(us);return l<t.near||l>t.far?null:{distance:l,point:us.clone(),object:i}}function hs(i,e,t,n,s,r,a,o,c,l,u,h){hn.fromBufferAttribute(s,l),dn.fromBufferAttribute(s,u),fn.fromBufferAttribute(s,h);const f=i.morphTargetInfluences;if(r&&f){ss.set(0,0,0),rs.set(0,0,0),as.set(0,0,0);for(let g=0,d=r.length;g<d;g++){const p=f[g],_=r[g];p!==0&&(ir.fromBufferAttribute(_,l),sr.fromBufferAttribute(_,u),rr.fromBufferAttribute(_,h),a?(ss.addScaledVector(ir,p),rs.addScaledVector(sr,p),as.addScaledVector(rr,p)):(ss.addScaledVector(ir.sub(hn),p),rs.addScaledVector(sr.sub(dn),p),as.addScaledVector(rr.sub(fn),p)))}hn.add(ss),dn.add(rs),fn.add(as)}i.isSkinnedMesh&&(i.boneTransform(l,hn),i.boneTransform(u,dn),i.boneTransform(h,fn));const m=yu(i,e,t,n,hn,dn,fn,ar);if(m){o&&(os.fromBufferAttribute(o,l),ls.fromBufferAttribute(o,u),cs.fromBufferAttribute(o,h),m.uv=Wt.getUV(ar,hn,dn,fn,os,ls,cs,new we)),c&&(os.fromBufferAttribute(c,l),ls.fromBufferAttribute(c,u),cs.fromBufferAttribute(c,h),m.uv2=Wt.getUV(ar,hn,dn,fn,os,ls,cs,new we));const g={a:l,b:u,c:h,normal:new P,materialIndex:0};Wt.getNormal(hn,dn,fn,g.normal),m.face=g}return m}class Hi extends xn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(h,2));function g(d,p,_,b,C,E,S,T,R,v,L){const N=E/R,z=S/v,ce=E/2,Q=S/2,D=T/2,X=R+1,B=v+1;let j=0,Y=0;const U=new P;for(let q=0;q<B;q++){const re=q*z-Q;for(let K=0;K<X;K++){const ee=K*N-ce;U[d]=ee*b,U[p]=re*C,U[_]=D,l.push(U.x,U.y,U.z),U[d]=0,U[p]=0,U[_]=T>0?1:-1,u.push(U.x,U.y,U.z),h.push(K/R),h.push(1-q/v),j+=1}}for(let q=0;q<v;q++)for(let re=0;re<R;re++){const K=f+re+X*q,ee=f+re+X*(q+1),fe=f+(re+1)+X*(q+1),me=f+(re+1)+X*q;c.push(K,ee,me),c.push(ee,fe,me),Y+=6}o.addGroup(m,Y,L),m+=Y,f+=j}}static fromJSON(e){return new Hi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function rt(i){const e={};for(let t=0;t<i.length;t++){const n=vi(i[t]);for(const s in n)e[s]=n[s]}return e}const bu={clone:vi,merge:rt};var Mu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Su=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zt extends st{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Mu,this.fragmentShader=Su,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vi(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class tl extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Mt extends tl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ka*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Us*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ka*2*Math.atan(Math.tan(Us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Us*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ni=90,ii=1;class wu extends It{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const s=new Mt(ni,ii,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new P(1,0,0)),this.add(s);const r=new Mt(ni,ii,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new P(-1,0,0)),this.add(r);const a=new Mt(ni,ii,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new P(0,1,0)),this.add(a);const o=new Mt(ni,ii,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new P(0,-1,0)),this.add(o);const c=new Mt(ni,ii,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new P(0,0,1)),this.add(c);const l=new Mt(ni,ii,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new P(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[s,r,a,o,c,l]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=rn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,s),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class nl extends St{constructor(e,t,n,s,r,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:mi,super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Eu extends mn{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new nl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Hi(5,5,5),r=new Zt({name:"CubemapFromEquirect",uniforms:vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:pn});r.uniforms.tEquirect.value=t;const a=new Xt(s,r),o=t.minFilter;return t.minFilter===Cs&&(t.minFilter=bt),new wu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const or=new P,Tu=new P,Au=new qt;class Tn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=or.subVectors(n,t).cross(Tu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(or),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Au.getNormalMatrix(e),s=this.coplanarPoint(or).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const si=new Wr,ds=new P;class il{constructor(e=new Tn,t=new Tn,n=new Tn,s=new Tn,r=new Tn,a=new Tn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,s=n[0],r=n[1],a=n[2],o=n[3],c=n[4],l=n[5],u=n[6],h=n[7],f=n[8],m=n[9],g=n[10],d=n[11],p=n[12],_=n[13],b=n[14],C=n[15];return t[0].setComponents(o-s,h-c,d-f,C-p).normalize(),t[1].setComponents(o+s,h+c,d+f,C+p).normalize(),t[2].setComponents(o+r,h+l,d+m,C+_).normalize(),t[3].setComponents(o-r,h-l,d-m,C-_).normalize(),t[4].setComponents(o-a,h-u,d-g,C-b).normalize(),t[5].setComponents(o+a,h+u,d+g,C+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(si)}intersectsSprite(e){return si.center.set(0,0,0),si.radius=.7071067811865476,si.applyMatrix4(e.matrixWorld),this.intersectsSphere(si)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ds.x=s.normal.x>0?e.max.x:e.min.x,ds.y=s.normal.y>0?e.max.y:e.min.y,ds.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ds)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sl(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Cu(i,e){const t=e.isWebGL2,n=new WeakMap;function s(l,u){const h=l.array,f=l.usage,m=i.createBuffer();i.bindBuffer(u,m),i.bufferData(u,h,f),l.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,h){const f=u.array,m=u.updateRange;i.bindBuffer(h,l),m.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,s(l,u)):h.version<l.version&&(r(h.buffer,l,u),h.version=l.version)}return{get:a,remove:o,update:c}}class qr extends xn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=e/o,f=t/c,m=[],g=[],d=[],p=[];for(let _=0;_<u;_++){const b=_*f-a;for(let C=0;C<l;C++){const E=C*h-r;g.push(E,-b,0),d.push(0,0,1),p.push(C/o),p.push(1-_/c)}}for(let _=0;_<c;_++)for(let b=0;b<o;b++){const C=b+l*_,E=b+l*(_+1),S=b+1+l*(_+1),T=b+1+l*_;m.push(C,E,T),m.push(E,S,T)}this.setIndex(m),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(d,3)),this.setAttribute("uv",new Yt(p,2))}static fromJSON(e){return new qr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Lu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Ru=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Du=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Iu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ou=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fu="vec3 transformed = vec3( position );",Nu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zu=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,ku=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,Uu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Yu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,$u=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ku=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ju=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Qu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,th="gl_FragColor = linearToOutputTexel( gl_FragColor );",nh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ih=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ah=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ch=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,fh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ph=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mh=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,gh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_h=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,vh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,yh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Mh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Sh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wh=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Eh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Th=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ah=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ch=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Rh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ph=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ih=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Oh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Uh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Bh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Vh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Gh=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,jh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Yh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,$h=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Zh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Qh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ed=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,td=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,id=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rd=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ad=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,od=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,ld=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ud=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,hd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,md=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_d=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,vd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,xd=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,yd=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,bd=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Md=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Sd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,wd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Ed=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Td=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ad=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ld=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Rd=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Pd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Dd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Id=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Nd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kd=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ud=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bd=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vd=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$d=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ef=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,nf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Le={alphamap_fragment:Lu,alphamap_pars_fragment:Ru,alphatest_fragment:Pu,alphatest_pars_fragment:Du,aomap_fragment:Iu,aomap_pars_fragment:Ou,begin_vertex:Fu,beginnormal_vertex:Nu,bsdfs:zu,iridescence_fragment:ku,bumpmap_pars_fragment:Uu,clipping_planes_fragment:Bu,clipping_planes_pars_fragment:Vu,clipping_planes_pars_vertex:Gu,clipping_planes_vertex:Hu,color_fragment:Wu,color_pars_fragment:qu,color_pars_vertex:Xu,color_vertex:ju,common:Yu,cube_uv_reflection_fragment:$u,defaultnormal_vertex:Zu,displacementmap_pars_vertex:Ku,displacementmap_vertex:Ju,emissivemap_fragment:Qu,emissivemap_pars_fragment:eh,encodings_fragment:th,encodings_pars_fragment:nh,envmap_fragment:ih,envmap_common_pars_fragment:sh,envmap_pars_fragment:rh,envmap_pars_vertex:ah,envmap_physical_pars_fragment:_h,envmap_vertex:oh,fog_vertex:lh,fog_pars_vertex:ch,fog_fragment:uh,fog_pars_fragment:hh,gradientmap_pars_fragment:dh,lightmap_fragment:fh,lightmap_pars_fragment:ph,lights_lambert_vertex:mh,lights_pars_begin:gh,lights_toon_fragment:vh,lights_toon_pars_fragment:xh,lights_phong_fragment:yh,lights_phong_pars_fragment:bh,lights_physical_fragment:Mh,lights_physical_pars_fragment:Sh,lights_fragment_begin:wh,lights_fragment_maps:Eh,lights_fragment_end:Th,logdepthbuf_fragment:Ah,logdepthbuf_pars_fragment:Ch,logdepthbuf_pars_vertex:Lh,logdepthbuf_vertex:Rh,map_fragment:Ph,map_pars_fragment:Dh,map_particle_fragment:Ih,map_particle_pars_fragment:Oh,metalnessmap_fragment:Fh,metalnessmap_pars_fragment:Nh,morphcolor_vertex:zh,morphnormal_vertex:kh,morphtarget_pars_vertex:Uh,morphtarget_vertex:Bh,normal_fragment_begin:Vh,normal_fragment_maps:Gh,normal_pars_fragment:Hh,normal_pars_vertex:Wh,normal_vertex:qh,normalmap_pars_fragment:Xh,clearcoat_normal_fragment_begin:jh,clearcoat_normal_fragment_maps:Yh,clearcoat_pars_fragment:$h,iridescence_pars_fragment:Zh,output_fragment:Kh,packing:Jh,premultiplied_alpha_fragment:Qh,project_vertex:ed,dithering_fragment:td,dithering_pars_fragment:nd,roughnessmap_fragment:id,roughnessmap_pars_fragment:sd,shadowmap_pars_fragment:rd,shadowmap_pars_vertex:ad,shadowmap_vertex:od,shadowmask_pars_fragment:ld,skinbase_vertex:cd,skinning_pars_vertex:ud,skinning_vertex:hd,skinnormal_vertex:dd,specularmap_fragment:fd,specularmap_pars_fragment:pd,tonemapping_fragment:md,tonemapping_pars_fragment:gd,transmission_fragment:_d,transmission_pars_fragment:vd,uv_pars_fragment:xd,uv_pars_vertex:yd,uv_vertex:bd,uv2_pars_fragment:Md,uv2_pars_vertex:Sd,uv2_vertex:wd,worldpos_vertex:Ed,background_vert:Td,background_frag:Ad,cube_vert:Cd,cube_frag:Ld,depth_vert:Rd,depth_frag:Pd,distanceRGBA_vert:Dd,distanceRGBA_frag:Id,equirect_vert:Od,equirect_frag:Fd,linedashed_vert:Nd,linedashed_frag:zd,meshbasic_vert:kd,meshbasic_frag:Ud,meshlambert_vert:Bd,meshlambert_frag:Vd,meshmatcap_vert:Gd,meshmatcap_frag:Hd,meshnormal_vert:Wd,meshnormal_frag:qd,meshphong_vert:Xd,meshphong_frag:jd,meshphysical_vert:Yd,meshphysical_frag:$d,meshtoon_vert:Zd,meshtoon_frag:Kd,points_vert:Jd,points_frag:Qd,shadow_vert:ef,shadow_frag:tf,sprite_vert:nf,sprite_frag:sf},le={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new qt},uv2Transform:{value:new qt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new qt}}},Ht={basic:{uniforms:rt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:rt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.fog,le.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:rt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:rt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:rt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:rt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:rt([le.points,le.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:rt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:rt([le.common,le.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:rt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:rt([le.sprite,le.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},cube:{uniforms:rt([le.envmap,{opacity:{value:1}}]),vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:rt([le.common,le.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:rt([le.lights,le.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};Ht.physical={uniforms:rt([Ht.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new we(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};function rf(i,e,t,n,s,r){const a=new Ee(0);let o=s===!0?0:1,c,l,u=null,h=0,f=null;function m(d,p){let _=!1,b=p.isScene===!0?p.background:null;b&&b.isTexture&&(b=e.get(b));const C=i.xr,E=C.getSession&&C.getSession();E&&E.environmentBlendMode==="additive"&&(b=null),b===null?g(a,o):b&&b.isColor&&(g(b,1),_=!0),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),b&&(b.isCubeTexture||b.mapping===As)?(l===void 0&&(l=new Xt(new Hi(1,1,1),new Zt({name:"BackgroundCubeMaterial",uniforms:vi(Ht.cube.uniforms),vertexShader:Ht.cube.vertexShader,fragmentShader:Ht.cube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,(u!==b||h!==b.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,h=b.version,f=i.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Xt(new qr(2,2),new Zt({name:"BackgroundMaterial",uniforms:vi(Ht.background.uniforms),vertexShader:Ht.background.vertexShader,fragmentShader:Ht.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||h!==b.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,h=b.version,f=i.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function g(d,p){t.buffers.color.setClear(d.r,d.g,d.b,p,r)}return{getClearColor:function(){return a},setClearColor:function(d,p=1){a.set(d),o=p,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(d){o=d,g(a,o)},render:m}}function af(i,e,t,n){const s=i.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=p(null);let l=c,u=!1;function h(D,X,B,j,Y){let U=!1;if(a){const q=d(j,B,X);l!==q&&(l=q,m(l.object)),U=_(D,j,B,Y),U&&b(D,j,B,Y)}else{const q=X.wireframe===!0;(l.geometry!==j.id||l.program!==B.id||l.wireframe!==q)&&(l.geometry=j.id,l.program=B.id,l.wireframe=q,U=!0)}Y!==null&&t.update(Y,34963),(U||u)&&(u=!1,v(D,X,B,j),Y!==null&&i.bindBuffer(34963,t.get(Y).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(D){return n.isWebGL2?i.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?i.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function d(D,X,B){const j=B.wireframe===!0;let Y=o[D.id];Y===void 0&&(Y={},o[D.id]=Y);let U=Y[X.id];U===void 0&&(U={},Y[X.id]=U);let q=U[j];return q===void 0&&(q=p(f()),U[j]=q),q}function p(D){const X=[],B=[],j=[];for(let Y=0;Y<s;Y++)X[Y]=0,B[Y]=0,j[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:B,attributeDivisors:j,object:D,attributes:{},index:null}}function _(D,X,B,j){const Y=l.attributes,U=X.attributes;let q=0;const re=B.getAttributes();for(const K in re)if(re[K].location>=0){const fe=Y[K];let me=U[K];if(me===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(me=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(me=D.instanceColor)),fe===void 0||fe.attribute!==me||me&&fe.data!==me.data)return!0;q++}return l.attributesNum!==q||l.index!==j}function b(D,X,B,j){const Y={},U=X.attributes;let q=0;const re=B.getAttributes();for(const K in re)if(re[K].location>=0){let fe=U[K];fe===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(fe=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(fe=D.instanceColor));const me={};me.attribute=fe,fe&&fe.data&&(me.data=fe.data),Y[K]=me,q++}l.attributes=Y,l.attributesNum=q,l.index=j}function C(){const D=l.newAttributes;for(let X=0,B=D.length;X<B;X++)D[X]=0}function E(D){S(D,0)}function S(D,X){const B=l.newAttributes,j=l.enabledAttributes,Y=l.attributeDivisors;B[D]=1,j[D]===0&&(i.enableVertexAttribArray(D),j[D]=1),Y[D]!==X&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,X),Y[D]=X)}function T(){const D=l.newAttributes,X=l.enabledAttributes;for(let B=0,j=X.length;B<j;B++)X[B]!==D[B]&&(i.disableVertexAttribArray(B),X[B]=0)}function R(D,X,B,j,Y,U){n.isWebGL2===!0&&(B===5124||B===5125)?i.vertexAttribIPointer(D,X,B,Y,U):i.vertexAttribPointer(D,X,B,j,Y,U)}function v(D,X,B,j){if(n.isWebGL2===!1&&(D.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;C();const Y=j.attributes,U=B.getAttributes(),q=X.defaultAttributeValues;for(const re in U){const K=U[re];if(K.location>=0){let ee=Y[re];if(ee===void 0&&(re==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),re==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor)),ee!==void 0){const fe=ee.normalized,me=ee.itemSize,G=t.get(ee);if(G===void 0)continue;const ke=G.buffer,Me=G.type,be=G.bytesPerElement;if(ee.isInterleavedBufferAttribute){const de=ee.data,De=de.stride,Ce=ee.offset;if(de.isInstancedInterleavedBuffer){for(let xe=0;xe<K.locationSize;xe++)S(K.location+xe,de.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let xe=0;xe<K.locationSize;xe++)E(K.location+xe);i.bindBuffer(34962,ke);for(let xe=0;xe<K.locationSize;xe++)R(K.location+xe,me/K.locationSize,Me,fe,De*be,(Ce+me/K.locationSize*xe)*be)}else{if(ee.isInstancedBufferAttribute){for(let de=0;de<K.locationSize;de++)S(K.location+de,ee.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let de=0;de<K.locationSize;de++)E(K.location+de);i.bindBuffer(34962,ke);for(let de=0;de<K.locationSize;de++)R(K.location+de,me/K.locationSize,Me,fe,me*be,me/K.locationSize*de*be)}}else if(q!==void 0){const fe=q[re];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(K.location,fe);break;case 3:i.vertexAttrib3fv(K.location,fe);break;case 4:i.vertexAttrib4fv(K.location,fe);break;default:i.vertexAttrib1fv(K.location,fe)}}}}T()}function L(){ce();for(const D in o){const X=o[D];for(const B in X){const j=X[B];for(const Y in j)g(j[Y].object),delete j[Y];delete X[B]}delete o[D]}}function N(D){if(o[D.id]===void 0)return;const X=o[D.id];for(const B in X){const j=X[B];for(const Y in j)g(j[Y].object),delete j[Y];delete X[B]}delete o[D.id]}function z(D){for(const X in o){const B=o[X];if(B[D.id]===void 0)continue;const j=B[D.id];for(const Y in j)g(j[Y].object),delete j[Y];delete B[D.id]}}function ce(){Q(),u=!0,l!==c&&(l=c,m(l.object))}function Q(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:ce,resetDefaultState:Q,dispose:L,releaseStatesOfGeometry:N,releaseStatesOfProgram:z,initAttributes:C,enableAttribute:E,disableUnusedAttributes:T}}function of(i,e,t,n){const s=n.isWebGL2;let r;function a(l){r=l}function o(l,u){i.drawArrays(r,l,u),t.update(u,r,1)}function c(l,u,h){if(h===0)return;let f,m;if(s)f=i,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,l,u,h),t.update(u,r,h)}this.setMode=a,this.render=o,this.renderInstances=c}function lf(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext!="undefined"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&i instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),f=i.getParameter(35660),m=i.getParameter(3379),g=i.getParameter(34076),d=i.getParameter(34921),p=i.getParameter(36347),_=i.getParameter(36348),b=i.getParameter(36349),C=f>0,E=a||e.has("OES_texture_float"),S=C&&E,T=a?i.getParameter(36183):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:C,floatFragmentTextures:E,floatVertexTextures:S,maxSamples:T}}function cf(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Tn,o=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,m){const g=h.length!==0||f||n!==0||s;return s=f,t=u(h,m,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,l()},this.setState=function(h,f,m){const g=h.clippingPlanes,d=h.clipIntersection,p=h.clipShadows,_=i.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):l();else{const b=r?0:n,C=b*4;let E=_.clippingState||null;c.value=E,E=u(g,f,C,m);for(let S=0;S!==C;++S)E[S]=t[S];_.clippingState=E,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,g){const d=h!==null?h.length:0;let p=null;if(d!==0){if(p=c.value,g!==!0||p===null){const _=m+d*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<_)&&(p=new Float32Array(_));for(let C=0,E=m;C!==d;++C,E+=4)a.copy(h[C]).applyMatrix4(b,o),a.normal.toArray(p,E),p[E+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,p}}function uf(i){let e=new WeakMap;function t(a,o){return o===Tr?a.mapping=mi:o===Ar&&(a.mapping=gi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Tr||o===Ar)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Eu(c.height/2);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class hf extends tl{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const di=4,Ka=[.125,.215,.35,.446,.526,.582],Ln=20,lr=new hf,Ja=new Ee;let cr=null;const An=(1+Math.sqrt(5))/2,ri=1/An,Qa=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,An,ri),new P(0,An,-ri),new P(ri,0,An),new P(-ri,0,An),new P(An,ri,0),new P(-An,ri,0)];class eo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){cr=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=io(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=no(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cr),e.scissorTest=!1,fs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mi||e.mapping===gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:bt,minFilter:bt,generateMipmaps:!1,type:zi,format:Pt,encoding:zn,depthBuffer:!1},s=to(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=to(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=df(r)),this._blurMaterial=ff(r,e,t)}return s}_compileMaterial(e){const t=new Xt(this._lodPlanes[0],e);this._renderer.compile(t,lr)}_sceneToCubeUV(e,t,n,s){const o=new Mt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Ja),u.toneMapping=rn,u.autoClear=!1;const m=new Ui({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),g=new Xt(new Hi,m);let d=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,d=!0):(m.color.copy(Ja),d=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(o.up.set(0,c[_],0),o.lookAt(l[_],0,0)):b===1?(o.up.set(0,0,c[_]),o.lookAt(0,l[_],0)):(o.up.set(0,c[_],0),o.lookAt(0,0,l[_]));const C=this._cubeSize;fs(s,b*C,_>2?C:0,C,C),u.setRenderTarget(s),d&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===mi||e.mapping===gi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=io()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=no());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Xt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;fs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,lr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Qa[(s-1)%Qa.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Xt(this._lodPlanes[s],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ln-1),d=r/g,p=isFinite(r)?1+Math.floor(u*d):Ln;p>Ln&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ln}`);const _=[];let b=0;for(let R=0;R<Ln;++R){const v=R/d,L=Math.exp(-v*v/2);_.push(L),R===0?b+=L:R<p&&(b+=2*L)}for(let R=0;R<_.length;R++)_[R]=_[R]/b;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=_,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:C}=this;f.dTheta.value=g,f.mipInt.value=C-n;const E=this._sizeLods[s],S=3*E*(s>C-di?s-C+di:0),T=4*(this._cubeSize-E);fs(t,S,T,3*E,2*E),c.setRenderTarget(t),c.render(h,lr)}}function df(i){const e=[],t=[],n=[];let s=i;const r=i-di+1+Ka.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-di?c=Ka[a-i+di-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,d=3,p=2,_=1,b=new Float32Array(d*g*m),C=new Float32Array(p*g*m),E=new Float32Array(_*g*m);for(let T=0;T<m;T++){const R=T%3*2/3-1,v=T>2?0:-1,L=[R,v,0,R+2/3,v,0,R+2/3,v+1,0,R,v,0,R+2/3,v+1,0,R,v+1,0];b.set(L,d*g*T),C.set(f,p*g*T);const N=[T,T,T,T,T,T];E.set(N,_*g*T)}const S=new xn;S.setAttribute("position",new jt(b,d)),S.setAttribute("uv",new jt(C,p)),S.setAttribute("faceIndex",new jt(E,_)),e.push(S),s>di&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function to(i,e,t){const n=new mn(i,e,t);return n.texture.mapping=As,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function ff(i,e,t){const n=new Float32Array(Ln),s=new P(0,1,0);return new Zt({name:"SphericalGaussianBlur",defines:{n:Ln,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function no(){return new Zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function io(){return new Zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Xr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pf(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Tr||c===Ar,u=c===mi||c===gi;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new eo(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(l&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new eo(i));const f=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function mf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function gf(i,e,t,n){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const m=h.morphAttributes;for(const g in m){const d=m[g];for(let p=0,_=d.length;p<_;p++)e.update(d[p],34962)}}function l(h){const f=[],m=h.index,g=h.attributes.position;let d=0;if(m!==null){const b=m.array;d=m.version;for(let C=0,E=b.length;C<E;C+=3){const S=b[C+0],T=b[C+1],R=b[C+2];f.push(S,T,T,R,R,S)}}else{const b=g.array;d=g.version;for(let C=0,E=b.length/3-1;C<E;C+=3){const S=C+0,T=C+1,R=C+2;f.push(S,T,T,R,R,S)}}const p=new(jo(f)?el:Qo)(f,1);p.version=d;const _=r.get(h);_&&e.remove(_),r.set(h,p)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function _f(i,e,t,n){const s=n.isWebGL2;let r;function a(f){r=f}let o,c;function l(f){o=f.type,c=f.bytesPerElement}function u(f,m){i.drawElements(r,m,o,f*c),t.update(m,r,1)}function h(f,m,g){if(g===0)return;let d,p;if(s)d=i,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,m,o,f*c,g),t.update(m,r,g)}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h}function vf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function xf(i,e){return i[0]-e[0]}function yf(i,e){return Math.abs(e[1])-Math.abs(i[1])}function ur(i,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),i.divideScalar(t)}function bf(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,a=new it,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,h,f){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=d!==void 0?d.length:0;let _=r.get(u);if(_===void 0||_.count!==p){let B=function(){D.dispose(),r.delete(u),u.removeEventListener("dispose",B)};var g=B;_!==void 0&&_.texture.dispose();const E=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let N=0;E===!0&&(N=1),S===!0&&(N=2),T===!0&&(N=3);let z=u.attributes.position.count*N,ce=1;z>e.maxTextureSize&&(ce=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const Q=new Float32Array(z*ce*4*p),D=new Ko(Q,z,ce,p);D.type=Pn,D.needsUpdate=!0;const X=N*4;for(let j=0;j<p;j++){const Y=R[j],U=v[j],q=L[j],re=z*ce*4*j;for(let K=0;K<Y.count;K++){const ee=K*X;E===!0&&(a.fromBufferAttribute(Y,K),Y.normalized===!0&&ur(a,Y),Q[re+ee+0]=a.x,Q[re+ee+1]=a.y,Q[re+ee+2]=a.z,Q[re+ee+3]=0),S===!0&&(a.fromBufferAttribute(U,K),U.normalized===!0&&ur(a,U),Q[re+ee+4]=a.x,Q[re+ee+5]=a.y,Q[re+ee+6]=a.z,Q[re+ee+7]=0),T===!0&&(a.fromBufferAttribute(q,K),q.normalized===!0&&ur(a,q),Q[re+ee+8]=a.x,Q[re+ee+9]=a.y,Q[re+ee+10]=a.z,Q[re+ee+11]=q.itemSize===4?a.w:1)}}_={count:p,texture:D,size:new we(z,ce)},r.set(u,_),u.addEventListener("dispose",B)}let b=0;for(let E=0;E<m.length;E++)b+=m[E];const C=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(i,"morphTargetBaseInfluence",C),f.getUniforms().setValue(i,"morphTargetInfluences",m),f.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const d=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==d){p=[];for(let S=0;S<d;S++)p[S]=[S,0];n[u.id]=p}for(let S=0;S<d;S++){const T=p[S];T[0]=S,T[1]=m[S]}p.sort(yf);for(let S=0;S<8;S++)S<d&&p[S][1]?(o[S][0]=p[S][0],o[S][1]=p[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(xf);const _=u.morphAttributes.position,b=u.morphAttributes.normal;let C=0;for(let S=0;S<8;S++){const T=o[S],R=T[0],v=T[1];R!==Number.MAX_SAFE_INTEGER&&v?(_&&u.getAttribute("morphTarget"+S)!==_[R]&&u.setAttribute("morphTarget"+S,_[R]),b&&u.getAttribute("morphNormal"+S)!==b[R]&&u.setAttribute("morphNormal"+S,b[R]),s[S]=v,C+=v):(_&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),b&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),s[S]=0)}const E=u.morphTargetsRelative?1:1-C;f.getUniforms().setValue(i,"morphTargetBaseInfluence",E),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function Mf(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);return s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const rl=new St,al=new Ko,ol=new cu,ll=new nl,so=[],ro=[],ao=new Float32Array(16),oo=new Float32Array(9),lo=new Float32Array(4);function yi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=so[s];if(r===void 0&&(r=new Float32Array(s),so[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ls(i,e){let t=ro[e];t===void 0&&(t=new Int32Array(e),ro[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Sf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function wf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2fv(this.addr,e),dt(t,e)}}function Ef(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;i.uniform3fv(this.addr,e),dt(t,e)}}function Tf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4fv(this.addr,e),dt(t,e)}}function Af(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;lo.set(n),i.uniformMatrix2fv(this.addr,!1,lo),dt(t,n)}}function Cf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;oo.set(n),i.uniformMatrix3fv(this.addr,!1,oo),dt(t,n)}}function Lf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;ao.set(n),i.uniformMatrix4fv(this.addr,!1,ao),dt(t,n)}}function Rf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Pf(i,e){const t=this.cache;ht(t,e)||(i.uniform2iv(this.addr,e),dt(t,e))}function Df(i,e){const t=this.cache;ht(t,e)||(i.uniform3iv(this.addr,e),dt(t,e))}function If(i,e){const t=this.cache;ht(t,e)||(i.uniform4iv(this.addr,e),dt(t,e))}function Of(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ff(i,e){const t=this.cache;ht(t,e)||(i.uniform2uiv(this.addr,e),dt(t,e))}function Nf(i,e){const t=this.cache;ht(t,e)||(i.uniform3uiv(this.addr,e),dt(t,e))}function zf(i,e){const t=this.cache;ht(t,e)||(i.uniform4uiv(this.addr,e),dt(t,e))}function kf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||rl,s)}function Uf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ol,s)}function Bf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ll,s)}function Vf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||al,s)}function Gf(i){switch(i){case 5126:return Sf;case 35664:return wf;case 35665:return Ef;case 35666:return Tf;case 35674:return Af;case 35675:return Cf;case 35676:return Lf;case 5124:case 35670:return Rf;case 35667:case 35671:return Pf;case 35668:case 35672:return Df;case 35669:case 35673:return If;case 5125:return Of;case 36294:return Ff;case 36295:return Nf;case 36296:return zf;case 35678:case 36198:case 36298:case 36306:case 35682:return kf;case 35679:case 36299:case 36307:return Uf;case 35680:case 36300:case 36308:case 36293:return Bf;case 36289:case 36303:case 36311:case 36292:return Vf}}function Hf(i,e){i.uniform1fv(this.addr,e)}function Wf(i,e){const t=yi(e,this.size,2);i.uniform2fv(this.addr,t)}function qf(i,e){const t=yi(e,this.size,3);i.uniform3fv(this.addr,t)}function Xf(i,e){const t=yi(e,this.size,4);i.uniform4fv(this.addr,t)}function jf(i,e){const t=yi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Yf(i,e){const t=yi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $f(i,e){const t=yi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Zf(i,e){i.uniform1iv(this.addr,e)}function Kf(i,e){i.uniform2iv(this.addr,e)}function Jf(i,e){i.uniform3iv(this.addr,e)}function Qf(i,e){i.uniform4iv(this.addr,e)}function ep(i,e){i.uniform1uiv(this.addr,e)}function tp(i,e){i.uniform2uiv(this.addr,e)}function np(i,e){i.uniform3uiv(this.addr,e)}function ip(i,e){i.uniform4uiv(this.addr,e)}function sp(i,e,t){const n=e.length,s=Ls(t,n);i.uniform1iv(this.addr,s);for(let r=0;r!==n;++r)t.setTexture2D(e[r]||rl,s[r])}function rp(i,e,t){const n=e.length,s=Ls(t,n);i.uniform1iv(this.addr,s);for(let r=0;r!==n;++r)t.setTexture3D(e[r]||ol,s[r])}function ap(i,e,t){const n=e.length,s=Ls(t,n);i.uniform1iv(this.addr,s);for(let r=0;r!==n;++r)t.setTextureCube(e[r]||ll,s[r])}function op(i,e,t){const n=e.length,s=Ls(t,n);i.uniform1iv(this.addr,s);for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||al,s[r])}function lp(i){switch(i){case 5126:return Hf;case 35664:return Wf;case 35665:return qf;case 35666:return Xf;case 35674:return jf;case 35675:return Yf;case 35676:return $f;case 5124:case 35670:return Zf;case 35667:case 35671:return Kf;case 35668:case 35672:return Jf;case 35669:case 35673:return Qf;case 5125:return ep;case 36294:return tp;case 36295:return np;case 36296:return ip;case 35678:case 36198:case 36298:case 36306:case 35682:return sp;case 35679:case 36299:case 36307:return rp;case 35680:case 36300:case 36308:case 36293:return ap;case 36289:case 36303:case 36311:case 36292:return op}}class cp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Gf(t.type)}}class up{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=lp(t.type)}}class hp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const hr=/(\w+)(\])?(\[|\.)?/g;function co(i,e){i.seq.push(e),i.map[e.id]=e}function dp(i,e,t){const n=i.name,s=n.length;for(hr.lastIndex=0;;){const r=hr.exec(n),a=hr.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){co(t,l===void 0?new cp(o,i,e):new up(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new hp(o),co(t,h)),t=h}}}class xs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);dp(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function uo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let fp=0;function pp(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function mp(i){switch(i){case zn:return["Linear","( value )"];case Ge:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function ho(i,e,t){const n=i.getShaderParameter(e,35713),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+pp(i.getShaderSource(e),a)}else return s}function gp(i,e){const t=mp(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function _p(i,e){let t;switch(e){case Nc:t="Linear";break;case zc:t="Reinhard";break;case kc:t="OptimizedCineon";break;case Uc:t="ACESFilmic";break;case Bc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function vp(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Pi).join(`
`)}function xp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yp(i,e){const t={},n=i.getProgramParameter(e,35721);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Pi(i){return i!==""}function fo(i,e){return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function po(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dr(i){return i.replace(bp,Mp)}function Mp(i,e){const t=Le[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Dr(t)}const Sp=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,wp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mo(i){return i.replace(wp,cl).replace(Sp,Ep)}function Ep(i,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),cl(i,e,t,n)}function cl(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function go(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Tp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Go?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===fc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function Ap(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case mi:case gi:e="ENVMAP_TYPE_CUBE";break;case As:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Cp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case gi:e="ENVMAP_MODE_REFRACTION";break}return e}function Lp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ts:e="ENVMAP_BLENDING_MULTIPLY";break;case Oc:e="ENVMAP_BLENDING_MIX";break;case Fc:e="ENVMAP_BLENDING_ADD";break}return e}function Rp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Pp(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Tp(t),l=Ap(t),u=Cp(t),h=Lp(t),f=Rp(t),m=t.isWebGL2?"":vp(t),g=xp(r),d=s.createProgram();let p,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(Pi).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(Pi).join(`
`),_.length>0&&(_+=`
`)):(p=[go(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pi).join(`
`),_=[m,go(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rn?"#define TONE_MAPPING":"",t.toneMapping!==rn?Le.tonemapping_pars_fragment:"",t.toneMapping!==rn?_p("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.encodings_pars_fragment,gp("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pi).join(`
`)),a=Dr(a),a=fo(a,t),a=po(a,t),o=Dr(o),o=fo(o,t),o=po(o,t),a=mo(a),o=mo(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===za?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===za?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const C=b+p+a,E=b+_+o,S=uo(s,35633,C),T=uo(s,35632,E);if(s.attachShader(d,S),s.attachShader(d,T),t.index0AttributeName!==void 0?s.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(d,0,"position"),s.linkProgram(d),i.debug.checkShaderErrors){const L=s.getProgramInfoLog(d).trim(),N=s.getShaderInfoLog(S).trim(),z=s.getShaderInfoLog(T).trim();let ce=!0,Q=!0;if(s.getProgramParameter(d,35714)===!1){ce=!1;const D=ho(s,S,"vertex"),X=ho(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(d,35715)+`

Program Info Log: `+L+`
`+D+`
`+X)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(N===""||z==="")&&(Q=!1);Q&&(this.diagnostics={runnable:ce,programLog:L,vertexShader:{log:N,prefix:p},fragmentShader:{log:z,prefix:_}})}s.deleteShader(S),s.deleteShader(T);let R;this.getUniforms=function(){return R===void 0&&(R=new xs(s,d)),R};let v;return this.getAttributes=function(){return v===void 0&&(v=yp(s,d)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=fp++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=S,this.fragmentShader=T,this}let Dp=0;class Ip{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new Op(e);t.set(e,n)}return t.get(e)}}class Op{constructor(e){this.id=Dp++,this.code=e,this.usedTimes=0}}function Fp(i,e,t,n,s,r,a){const o=new Jo,c=new Ip,l=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v,L,N,z,ce){const Q=z.fog,D=ce.geometry,X=v.isMeshStandardMaterial?z.environment:null,B=(v.isMeshStandardMaterial?t:e).get(v.envMap||X),j=!!B&&B.mapping===As?B.image.height:null,Y=g[v.type];v.precision!==null&&(m=s.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const U=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,q=U!==void 0?U.length:0;let re=0;D.morphAttributes.position!==void 0&&(re=1),D.morphAttributes.normal!==void 0&&(re=2),D.morphAttributes.color!==void 0&&(re=3);let K,ee,fe,me;if(Y){const De=Ht[Y];K=De.vertexShader,ee=De.fragmentShader}else K=v.vertexShader,ee=v.fragmentShader,c.update(v),fe=c.getVertexShaderID(v),me=c.getFragmentShaderID(v);const G=i.getRenderTarget(),ke=v.alphaTest>0,Me=v.clearcoat>0,be=v.iridescence>0;return{isWebGL2:u,shaderID:Y,shaderName:v.type,vertexShader:K,fragmentShader:ee,defines:v.defines,customVertexShaderID:fe,customFragmentShaderID:me,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:ce.isInstancedMesh===!0,instancingColor:ce.isInstancedMesh===!0&&ce.instanceColor!==null,supportsVertexTextures:f,outputEncoding:G===null?i.outputEncoding:G.isXRRenderTarget===!0?G.texture.encoding:zn,map:!!v.map,matcap:!!v.matcap,envMap:!!B,envMapMode:B&&B.mapping,envMapCubeUVHeight:j,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===ru,tangentSpaceNormalMap:v.normalMapType===xi,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Ge,clearcoat:Me,clearcoatMap:Me&&!!v.clearcoatMap,clearcoatRoughnessMap:Me&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:Me&&!!v.clearcoatNormalMap,iridescence:be,iridescenceMap:be&&!!v.iridescenceMap,iridescenceThicknessMap:be&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===fi,alphaMap:!!v.alphaMap,alphaTest:ke,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!D.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!Q,useFog:v.fog===!0,fogExp2:Q&&Q.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:ce.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:re,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:v.toneMapped?i.toneMapping:rn,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Fn,flipSided:v.side===Dt,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const L=[];if(v.shaderID?L.push(v.shaderID):(L.push(v.customVertexShaderID),L.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)L.push(N),L.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(_(L,v),b(L,v),L.push(i.outputEncoding)),L.push(v.customProgramCacheKey),L.join()}function _(v,L){v.push(L.precision),v.push(L.outputEncoding),v.push(L.envMapMode),v.push(L.envMapCubeUVHeight),v.push(L.combine),v.push(L.vertexUvs),v.push(L.fogExp2),v.push(L.sizeAttenuation),v.push(L.morphTargetsCount),v.push(L.morphAttributeCount),v.push(L.numDirLights),v.push(L.numPointLights),v.push(L.numSpotLights),v.push(L.numHemiLights),v.push(L.numRectAreaLights),v.push(L.numDirLightShadows),v.push(L.numPointLightShadows),v.push(L.numSpotLightShadows),v.push(L.shadowMapType),v.push(L.toneMapping),v.push(L.numClippingPlanes),v.push(L.numClipIntersection),v.push(L.depthPacking)}function b(v,L){o.disableAll(),L.isWebGL2&&o.enable(0),L.supportsVertexTextures&&o.enable(1),L.instancing&&o.enable(2),L.instancingColor&&o.enable(3),L.map&&o.enable(4),L.matcap&&o.enable(5),L.envMap&&o.enable(6),L.lightMap&&o.enable(7),L.aoMap&&o.enable(8),L.emissiveMap&&o.enable(9),L.bumpMap&&o.enable(10),L.normalMap&&o.enable(11),L.objectSpaceNormalMap&&o.enable(12),L.tangentSpaceNormalMap&&o.enable(13),L.clearcoat&&o.enable(14),L.clearcoatMap&&o.enable(15),L.clearcoatRoughnessMap&&o.enable(16),L.clearcoatNormalMap&&o.enable(17),L.iridescence&&o.enable(18),L.iridescenceMap&&o.enable(19),L.iridescenceThicknessMap&&o.enable(20),L.displacementMap&&o.enable(21),L.specularMap&&o.enable(22),L.roughnessMap&&o.enable(23),L.metalnessMap&&o.enable(24),L.gradientMap&&o.enable(25),L.alphaMap&&o.enable(26),L.alphaTest&&o.enable(27),L.vertexColors&&o.enable(28),L.vertexAlphas&&o.enable(29),L.vertexUvs&&o.enable(30),L.vertexTangents&&o.enable(31),L.uvsVertexOnly&&o.enable(32),L.fog&&o.enable(33),v.push(o.mask),o.disableAll(),L.useFog&&o.enable(0),L.flatShading&&o.enable(1),L.logarithmicDepthBuffer&&o.enable(2),L.skinning&&o.enable(3),L.morphTargets&&o.enable(4),L.morphNormals&&o.enable(5),L.morphColors&&o.enable(6),L.premultipliedAlpha&&o.enable(7),L.shadowMapEnabled&&o.enable(8),L.physicallyCorrectLights&&o.enable(9),L.doubleSided&&o.enable(10),L.flipSided&&o.enable(11),L.useDepthPacking&&o.enable(12),L.dithering&&o.enable(13),L.specularIntensityMap&&o.enable(14),L.specularColorMap&&o.enable(15),L.transmission&&o.enable(16),L.transmissionMap&&o.enable(17),L.thicknessMap&&o.enable(18),L.sheen&&o.enable(19),L.sheenColorMap&&o.enable(20),L.sheenRoughnessMap&&o.enable(21),L.decodeVideoTexture&&o.enable(22),L.opaque&&o.enable(23),v.push(o.mask)}function C(v){const L=g[v.type];let N;if(L){const z=Ht[L];N=bu.clone(z.uniforms)}else N=v.uniforms;return N}function E(v,L){let N;for(let z=0,ce=l.length;z<ce;z++){const Q=l[z];if(Q.cacheKey===L){N=Q,++N.usedTimes;break}}return N===void 0&&(N=new Pp(i,L,v,r),l.push(N)),N}function S(v){if(--v.usedTimes===0){const L=l.indexOf(v);l[L]=l[l.length-1],l.pop(),v.destroy()}}function T(v){c.remove(v)}function R(){c.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:C,acquireProgram:E,releaseProgram:S,releaseShaderCache:T,programs:l,dispose:R}}function Np(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function zp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function _o(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function vo(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,f,m,g,d,p){let _=i[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:d,group:p},i[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=m,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=d,_.group=p),e++,_}function o(h,f,m,g,d,p){const _=a(h,f,m,g,d,p);m.transmission>0?n.push(_):m.transparent===!0?s.push(_):t.push(_)}function c(h,f,m,g,d,p){const _=a(h,f,m,g,d,p);m.transmission>0?n.unshift(_):m.transparent===!0?s.unshift(_):t.unshift(_)}function l(h,f){t.length>1&&t.sort(h||zp),n.length>1&&n.sort(f||_o),s.length>1&&s.sort(f||_o)}function u(){for(let h=e,f=i.length;h<f;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function kp(){let i=new WeakMap;function e(n,s){let r;return i.has(n)===!1?(r=new vo,i.set(n,[r])):s>=i.get(n).length?(r=new vo,i.get(n).push(r)):r=i.get(n)[s],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function Up(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ee};break;case"SpotLight":t={position:new P,direction:new P,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function Bp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Vp=0;function Gp(i,e){return(e.castShadow?1:0)-(i.castShadow?1:0)}function Hp(i,e){const t=new Up,n=Bp(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)s.probe.push(new P);const r=new P,a=new at,o=new at;function c(u,h){let f=0,m=0,g=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let d=0,p=0,_=0,b=0,C=0,E=0,S=0,T=0;u.sort(Gp);const R=h!==!0?Math.PI:1;for(let L=0,N=u.length;L<N;L++){const z=u[L],ce=z.color,Q=z.intensity,D=z.distance,X=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)f+=ce.r*Q*R,m+=ce.g*Q*R,g+=ce.b*Q*R;else if(z.isLightProbe)for(let B=0;B<9;B++)s.probe[B].addScaledVector(z.sh.coefficients[B],Q);else if(z.isDirectionalLight){const B=t.get(z);if(B.color.copy(z.color).multiplyScalar(z.intensity*R),z.castShadow){const j=z.shadow,Y=n.get(z);Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,s.directionalShadow[d]=Y,s.directionalShadowMap[d]=X,s.directionalShadowMatrix[d]=z.shadow.matrix,E++}s.directional[d]=B,d++}else if(z.isSpotLight){const B=t.get(z);if(B.position.setFromMatrixPosition(z.matrixWorld),B.color.copy(ce).multiplyScalar(Q*R),B.distance=D,B.coneCos=Math.cos(z.angle),B.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),B.decay=z.decay,z.castShadow){const j=z.shadow,Y=n.get(z);Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,s.spotShadow[_]=Y,s.spotShadowMap[_]=X,s.spotShadowMatrix[_]=z.shadow.matrix,T++}s.spot[_]=B,_++}else if(z.isRectAreaLight){const B=t.get(z);B.color.copy(ce).multiplyScalar(Q),B.halfWidth.set(z.width*.5,0,0),B.halfHeight.set(0,z.height*.5,0),s.rectArea[b]=B,b++}else if(z.isPointLight){const B=t.get(z);if(B.color.copy(z.color).multiplyScalar(z.intensity*R),B.distance=z.distance,B.decay=z.decay,z.castShadow){const j=z.shadow,Y=n.get(z);Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,Y.shadowCameraNear=j.camera.near,Y.shadowCameraFar=j.camera.far,s.pointShadow[p]=Y,s.pointShadowMap[p]=X,s.pointShadowMatrix[p]=z.shadow.matrix,S++}s.point[p]=B,p++}else if(z.isHemisphereLight){const B=t.get(z);B.skyColor.copy(z.color).multiplyScalar(Q*R),B.groundColor.copy(z.groundColor).multiplyScalar(Q*R),s.hemi[C]=B,C++}}b>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=le.LTC_FLOAT_1,s.rectAreaLTC2=le.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=le.LTC_HALF_1,s.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=g;const v=s.hash;(v.directionalLength!==d||v.pointLength!==p||v.spotLength!==_||v.rectAreaLength!==b||v.hemiLength!==C||v.numDirectionalShadows!==E||v.numPointShadows!==S||v.numSpotShadows!==T)&&(s.directional.length=d,s.spot.length=_,s.rectArea.length=b,s.point.length=p,s.hemi.length=C,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=S,s.pointShadowMap.length=S,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=S,s.spotShadowMatrix.length=T,v.directionalLength=d,v.pointLength=p,v.spotLength=_,v.rectAreaLength=b,v.hemiLength=C,v.numDirectionalShadows=E,v.numPointShadows=S,v.numSpotShadows=T,s.version=Vp++)}function l(u,h){let f=0,m=0,g=0,d=0,p=0;const _=h.matrixWorldInverse;for(let b=0,C=u.length;b<C;b++){const E=u[b];if(E.isDirectionalLight){const S=s.directional[f];S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),f++}else if(E.isSpotLight){const S=s.spot[g];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),g++}else if(E.isRectAreaLight){const S=s.rectArea[d];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(_),o.identity(),a.copy(E.matrixWorld),a.premultiply(_),o.extractRotation(a),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),d++}else if(E.isPointLight){const S=s.point[m];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(_),m++}else if(E.isHemisphereLight){const S=s.hemi[p];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(_),p++}}}return{setup:c,setupView:l,state:s}}function xo(i,e){const t=new Hp(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(h){n.push(h)}function o(h){s.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Wp(i,e){let t=new WeakMap;function n(r,a=0){let o;return t.has(r)===!1?(o=new xo(i,e),t.set(r,[o])):a>=t.get(r).length?(o=new xo(i,e),t.get(r).push(o)):o=t.get(r)[a],o}function s(){t=new WeakMap}return{get:n,dispose:s}}class ul extends st{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hl extends st{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new P,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jp(i,e,t){let n=new il;const s=new we,r=new we,a=new it,o=new ul({depthPacking:su}),c=new hl,l={},u=t.maxTextureSize,h={0:Dt,1:Ni,2:Fn},f=new Zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:qp,fragmentShader:Xp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new xn;g.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new Xt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Go,this.render=function(E,S,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const R=i.getRenderTarget(),v=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),N=i.state;N.setBlending(pn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);for(let z=0,ce=E.length;z<ce;z++){const Q=E[z],D=Q.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);const X=D.getFrameExtents();if(s.multiply(X),r.copy(D.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/X.x),s.x=r.x*X.x,D.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/X.y),s.y=r.y*X.y,D.mapSize.y=r.y)),D.map===null&&!D.isPointLightShadow&&this.type===Ri&&(D.map=new mn(s.x,s.y),D.map.texture.name=Q.name+".shadowMap",D.mapPass=new mn(s.x,s.y),D.camera.updateProjectionMatrix()),D.map===null){const j={minFilter:pt,magFilter:pt,format:Pt};D.map=new mn(s.x,s.y,j),D.map.texture.name=Q.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();const B=D.getViewportCount();for(let j=0;j<B;j++){const Y=D.getViewport(j);a.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),N.viewport(a),D.updateMatrices(Q,j),n=D.getFrustum(),C(S,T,D.camera,Q,this.type)}!D.isPointLightShadow&&this.type===Ri&&_(D,T),D.needsUpdate=!1}p.needsUpdate=!1,i.setRenderTarget(R,v,L)};function _(E,S){const T=e.update(d);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(S,null,T,f,d,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(S,null,T,m,d,null)}function b(E,S,T,R,v,L){let N=null;const z=T.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(z!==void 0?N=z:N=T.isPointLight===!0?c:o,i.localClippingEnabled&&S.clipShadows===!0&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0){const ce=N.uuid,Q=S.uuid;let D=l[ce];D===void 0&&(D={},l[ce]=D);let X=D[Q];X===void 0&&(X=N.clone(),D[Q]=X),N=X}return N.visible=S.visible,N.wireframe=S.wireframe,L===Ri?N.side=S.shadowSide!==null?S.shadowSide:S.side:N.side=S.shadowSide!==null?S.shadowSide:h[S.side],N.alphaMap=S.alphaMap,N.alphaTest=S.alphaTest,N.clipShadows=S.clipShadows,N.clippingPlanes=S.clippingPlanes,N.clipIntersection=S.clipIntersection,N.displacementMap=S.displacementMap,N.displacementScale=S.displacementScale,N.displacementBias=S.displacementBias,N.wireframeLinewidth=S.wireframeLinewidth,N.linewidth=S.linewidth,T.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(N.referencePosition.setFromMatrixPosition(T.matrixWorld),N.nearDistance=R,N.farDistance=v),N}function C(E,S,T,R,v){if(E.visible===!1)return;if(E.layers.test(S.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===Ri)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,E.matrixWorld);const z=e.update(E),ce=E.material;if(Array.isArray(ce)){const Q=z.groups;for(let D=0,X=Q.length;D<X;D++){const B=Q[D],j=ce[B.materialIndex];if(j&&j.visible){const Y=b(E,j,R,T.near,T.far,v);i.renderBufferDirect(T,null,z,Y,E,B)}}}else if(ce.visible){const Q=b(E,ce,R,T.near,T.far,v);i.renderBufferDirect(T,null,z,Q,E,null)}}const N=E.children;for(let z=0,ce=N.length;z<ce;z++)C(N[z],S,T,R,v)}}function Yp(i,e,t){const n=t.isWebGL2;function s(){let A=!1;const ie=new it;let te=null;const ge=new it(0,0,0,0);return{setMask:function(ue){te!==ue&&!A&&(i.colorMask(ue,ue,ue,ue),te=ue)},setLocked:function(ue){A=ue},setClear:function(ue,pe,se,ye,Fe){Fe===!0&&(ue*=ye,pe*=ye,se*=ye),ie.set(ue,pe,se,ye),ge.equals(ie)===!1&&(i.clearColor(ue,pe,se,ye),ge.copy(ie))},reset:function(){A=!1,te=null,ge.set(-1,0,0,0)}}}function r(){let A=!1,ie=null,te=null,ge=null;return{setTest:function(ue){ue?me(2929):G(2929)},setMask:function(ue){ie!==ue&&!A&&(i.depthMask(ue),ie=ue)},setFunc:function(ue){if(te!==ue){if(ue)switch(ue){case Ac:i.depthFunc(512);break;case Cc:i.depthFunc(519);break;case Lc:i.depthFunc(513);break;case Er:i.depthFunc(515);break;case Rc:i.depthFunc(514);break;case Pc:i.depthFunc(518);break;case Dc:i.depthFunc(516);break;case Ic:i.depthFunc(517);break;default:i.depthFunc(515)}else i.depthFunc(515);te=ue}},setLocked:function(ue){A=ue},setClear:function(ue){ge!==ue&&(i.clearDepth(ue),ge=ue)},reset:function(){A=!1,ie=null,te=null,ge=null}}}function a(){let A=!1,ie=null,te=null,ge=null,ue=null,pe=null,se=null,ye=null,Fe=null;return{setTest:function(Ne){A||(Ne?me(2960):G(2960))},setMask:function(Ne){ie!==Ne&&!A&&(i.stencilMask(Ne),ie=Ne)},setFunc:function(Ne,ot,Nt){(te!==Ne||ge!==ot||ue!==Nt)&&(i.stencilFunc(Ne,ot,Nt),te=Ne,ge=ot,ue=Nt)},setOp:function(Ne,ot,Nt){(pe!==Ne||se!==ot||ye!==Nt)&&(i.stencilOp(Ne,ot,Nt),pe=Ne,se=ot,ye=Nt)},setLocked:function(Ne){A=Ne},setClear:function(Ne){Fe!==Ne&&(i.clearStencil(Ne),Fe=Ne)},reset:function(){A=!1,ie=null,te=null,ge=null,ue=null,pe=null,se=null,ye=null,Fe=null}}}const o=new s,c=new r,l=new a;let u={},h={},f=new WeakMap,m=[],g=null,d=!1,p=null,_=null,b=null,C=null,E=null,S=null,T=null,R=!1,v=null,L=null,N=null,z=null,ce=null;const Q=i.getParameter(35661);let D=!1,X=0;const B=i.getParameter(7938);B.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(B)[1]),D=X>=1):B.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),D=X>=2);let j=null,Y={};const U=i.getParameter(3088),q=i.getParameter(2978),re=new it().fromArray(U),K=new it().fromArray(q);function ee(A,ie,te){const ge=new Uint8Array(4),ue=i.createTexture();i.bindTexture(A,ue),i.texParameteri(A,10241,9728),i.texParameteri(A,10240,9728);for(let pe=0;pe<te;pe++)i.texImage2D(ie+pe,0,6408,1,1,0,6408,5121,ge);return ue}const fe={};fe[3553]=ee(3553,3553,1),fe[34067]=ee(34067,34069,6),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),me(2929),c.setFunc(Er),Ye(!1),Ke(oa),me(2884),Ce(pn);function me(A){u[A]!==!0&&(i.enable(A),u[A]=!0)}function G(A){u[A]!==!1&&(i.disable(A),u[A]=!1)}function ke(A,ie){return h[A]!==ie?(i.bindFramebuffer(A,ie),h[A]=ie,n&&(A===36009&&(h[36160]=ie),A===36160&&(h[36009]=ie)),!0):!1}function Me(A,ie){let te=m,ge=!1;if(A)if(te=f.get(ie),te===void 0&&(te=[],f.set(ie,te)),A.isWebGLMultipleRenderTargets){const ue=A.texture;if(te.length!==ue.length||te[0]!==36064){for(let pe=0,se=ue.length;pe<se;pe++)te[pe]=36064+pe;te.length=ue.length,ge=!0}}else te[0]!==36064&&(te[0]=36064,ge=!0);else te[0]!==1029&&(te[0]=1029,ge=!0);ge&&(t.isWebGL2?i.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function be(A){return g!==A?(i.useProgram(A),g=A,!0):!1}const de={[li]:32774,[gc]:32778,[_c]:32779};if(n)de[ha]=32775,de[da]=32776;else{const A=e.get("EXT_blend_minmax");A!==null&&(de[ha]=A.MIN_EXT,de[da]=A.MAX_EXT)}const De={[vc]:0,[xc]:1,[yc]:768,[Ho]:770,[Tc]:776,[wc]:774,[Mc]:772,[bc]:769,[Wo]:771,[Ec]:775,[Sc]:773};function Ce(A,ie,te,ge,ue,pe,se,ye){if(A===pn){d===!0&&(G(3042),d=!1);return}if(d===!1&&(me(3042),d=!0),A!==mc){if(A!==p||ye!==R){if((_!==li||E!==li)&&(i.blendEquation(32774),_=li,E=li),ye)switch(A){case fi:i.blendFuncSeparate(1,771,1,771);break;case la:i.blendFunc(1,1);break;case ca:i.blendFuncSeparate(0,769,0,1);break;case ua:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case fi:i.blendFuncSeparate(770,771,1,771);break;case la:i.blendFunc(770,1);break;case ca:i.blendFuncSeparate(0,769,0,1);break;case ua:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}b=null,C=null,S=null,T=null,p=A,R=ye}return}ue=ue||ie,pe=pe||te,se=se||ge,(ie!==_||ue!==E)&&(i.blendEquationSeparate(de[ie],de[ue]),_=ie,E=ue),(te!==b||ge!==C||pe!==S||se!==T)&&(i.blendFuncSeparate(De[te],De[ge],De[pe],De[se]),b=te,C=ge,S=pe,T=se),p=A,R=null}function xe(A,ie){A.side===Fn?G(2884):me(2884);let te=A.side===Dt;ie&&(te=!te),Ye(te),A.blending===fi&&A.transparent===!1?Ce(pn):Ce(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.premultipliedAlpha),c.setFunc(A.depthFunc),c.setTest(A.depthTest),c.setMask(A.depthWrite),o.setMask(A.colorWrite);const ge=A.stencilWrite;l.setTest(ge),ge&&(l.setMask(A.stencilWriteMask),l.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),l.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),mt(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?me(32926):G(32926)}function Ye(A){v!==A&&(A?i.frontFace(2304):i.frontFace(2305),v=A)}function Ke(A){A!==hc?(me(2884),A!==L&&(A===oa?i.cullFace(1029):A===dc?i.cullFace(1028):i.cullFace(1032))):G(2884),L=A}function et(A){A!==N&&(D&&i.lineWidth(A),N=A)}function mt(A,ie,te){A?(me(32823),(z!==ie||ce!==te)&&(i.polygonOffset(ie,te),z=ie,ce=te)):G(32823)}function $e(A){A?me(3089):G(3089)}function Oe(A){A===void 0&&(A=33984+Q-1),j!==A&&(i.activeTexture(A),j=A)}function vt(A,ie){j===null&&Oe();let te=Y[j];te===void 0&&(te={type:void 0,texture:void 0},Y[j]=te),(te.type!==A||te.texture!==ie)&&(i.bindTexture(A,ie||fe[A]),te.type=A,te.texture=ie)}function xt(){const A=Y[j];A!==void 0&&A.type!==void 0&&(i.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function w(){try{i.compressedTexImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function x(){try{i.texSubImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function V(){try{i.texSubImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function J(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ae(){try{i.texStorage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function he(){try{i.texStorage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function _e(){try{i.texImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function y(){try{i.texImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Z(A){re.equals(A)===!1&&(i.scissor(A.x,A.y,A.z,A.w),re.copy(A))}function oe(A){K.equals(A)===!1&&(i.viewport(A.x,A.y,A.z,A.w),K.copy(A))}function ne(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},j=null,Y={},h={},f=new WeakMap,m=[],g=null,d=!1,p=null,_=null,b=null,C=null,E=null,S=null,T=null,R=!1,v=null,L=null,N=null,z=null,ce=null,re.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:me,disable:G,bindFramebuffer:ke,drawBuffers:Me,useProgram:be,setBlending:Ce,setMaterial:xe,setFlipSided:Ye,setCullFace:Ke,setLineWidth:et,setPolygonOffset:mt,setScissorTest:$e,activeTexture:Oe,bindTexture:vt,unbindTexture:xt,compressedTexImage2D:w,texImage2D:_e,texImage3D:y,texStorage2D:ae,texStorage3D:he,texSubImage2D:x,texSubImage3D:V,compressedTexSubImage2D:J,scissor:Z,viewport:oe,reset:ne}}function $p(i,e,t,n,s,r,a){const o=s.isWebGL2,c=s.maxTextures,l=s.maxCubemapSize,u=s.maxTextureSize,h=s.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(w,x){return _?new OffscreenCanvas(w,x):ki("canvas")}function C(w,x,V,J){let ae=1;if((w.width>J||w.height>J)&&(ae=J/Math.max(w.width,w.height)),ae<1||x===!0)if(typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&w instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&w instanceof ImageBitmap){const he=x?Pr:Math.floor,_e=he(ae*w.width),y=he(ae*w.height);d===void 0&&(d=b(_e,y));const Z=V?b(_e,y):d;return Z.width=_e,Z.height=y,Z.getContext("2d").drawImage(w,0,0,_e,y),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+_e+"x"+y+")."),Z}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function E(w){return Ua(w.width)&&Ua(w.height)}function S(w){return o?!1:w.wrapS!==Rt||w.wrapT!==Rt||w.minFilter!==pt&&w.minFilter!==bt}function T(w,x){return w.generateMipmaps&&x&&w.minFilter!==pt&&w.minFilter!==bt}function R(w){i.generateMipmap(w)}function v(w,x,V,J,ae=!1){if(o===!1)return x;if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let he=x;return x===6403&&(V===5126&&(he=33326),V===5131&&(he=33325),V===5121&&(he=33321)),x===33319&&(V===5126&&(he=33328),V===5131&&(he=33327),V===5121&&(he=33323)),x===6408&&(V===5126&&(he=34836),V===5131&&(he=34842),V===5121&&(he=J===Ge&&ae===!1?35907:32856),V===32819&&(he=32854),V===32820&&(he=32855)),(he===33325||he===33326||he===33327||he===33328||he===34842||he===34836)&&e.get("EXT_color_buffer_float"),he}function L(w,x,V){return T(w,V)===!0||w.isFramebufferTexture&&w.minFilter!==pt&&w.minFilter!==bt?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function N(w){return w===pt||w===fa||w===pa?9728:9729}function z(w){const x=w.target;x.removeEventListener("dispose",z),Q(x),x.isVideoTexture&&g.delete(x)}function ce(w){const x=w.target;x.removeEventListener("dispose",ce),X(x)}function Q(w){const x=n.get(w);if(x.__webglInit===void 0)return;const V=w.source,J=p.get(V);if(J){const ae=J[x.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&D(w),Object.keys(J).length===0&&p.delete(V)}n.remove(w)}function D(w){const x=n.get(w);i.deleteTexture(x.__webglTexture);const V=w.source,J=p.get(V);delete J[x.__cacheKey],a.memory.textures--}function X(w){const x=w.texture,V=n.get(w),J=n.get(x);if(J.__webglTexture!==void 0&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++)i.deleteFramebuffer(V.__webglFramebuffer[ae]),V.__webglDepthbuffer&&i.deleteRenderbuffer(V.__webglDepthbuffer[ae]);else{if(i.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&i.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&i.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ae=0;ae<V.__webglColorRenderbuffer.length;ae++)V.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(V.__webglColorRenderbuffer[ae]);V.__webglDepthRenderbuffer&&i.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ae=0,he=x.length;ae<he;ae++){const _e=n.get(x[ae]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(x[ae])}n.remove(x),n.remove(w)}let B=0;function j(){B=0}function Y(){const w=B;return w>=c&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+c),B+=1,w}function U(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.encoding),x.join()}function q(w,x){const V=n.get(w);if(w.isVideoTexture&&vt(w),w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){const J=w.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(V,w,x);return}}t.activeTexture(33984+x),t.bindTexture(3553,V.__webglTexture)}function re(w,x){const V=n.get(w);if(w.version>0&&V.__version!==w.version){Me(V,w,x);return}t.activeTexture(33984+x),t.bindTexture(35866,V.__webglTexture)}function K(w,x){const V=n.get(w);if(w.version>0&&V.__version!==w.version){Me(V,w,x);return}t.activeTexture(33984+x),t.bindTexture(32879,V.__webglTexture)}function ee(w,x){const V=n.get(w);if(w.version>0&&V.__version!==w.version){be(V,w,x);return}t.activeTexture(33984+x),t.bindTexture(34067,V.__webglTexture)}const fe={[Cr]:10497,[Rt]:33071,[Lr]:33648},me={[pt]:9728,[fa]:9984,[pa]:9986,[bt]:9729,[Vc]:9985,[Cs]:9987};function G(w,x,V){if(V?(i.texParameteri(w,10242,fe[x.wrapS]),i.texParameteri(w,10243,fe[x.wrapT]),(w===32879||w===35866)&&i.texParameteri(w,32882,fe[x.wrapR]),i.texParameteri(w,10240,me[x.magFilter]),i.texParameteri(w,10241,me[x.minFilter])):(i.texParameteri(w,10242,33071),i.texParameteri(w,10243,33071),(w===32879||w===35866)&&i.texParameteri(w,32882,33071),(x.wrapS!==Rt||x.wrapT!==Rt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(w,10240,N(x.magFilter)),i.texParameteri(w,10241,N(x.minFilter)),x.minFilter!==pt&&x.minFilter!==bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(x.type===Pn&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===zi&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(w,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function ke(w,x){let V=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",z));const J=x.source;let ae=p.get(J);ae===void 0&&(ae={},p.set(J,ae));const he=U(x);if(he!==w.__cacheKey){ae[he]===void 0&&(ae[he]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ae[he].usedTimes++;const _e=ae[w.__cacheKey];_e!==void 0&&(ae[w.__cacheKey].usedTimes--,_e.usedTimes===0&&D(x)),w.__cacheKey=he,w.__webglTexture=ae[he].texture}return V}function Me(w,x,V){let J=3553;x.isDataArrayTexture&&(J=35866),x.isData3DTexture&&(J=32879);const ae=ke(w,x),he=x.source;if(t.activeTexture(33984+V),t.bindTexture(J,w.__webglTexture),he.version!==he.__currentVersion||ae===!0){i.pixelStorei(37440,x.flipY),i.pixelStorei(37441,x.premultiplyAlpha),i.pixelStorei(3317,x.unpackAlignment),i.pixelStorei(37443,0);const _e=S(x)&&E(x.image)===!1;let y=C(x.image,_e,!1,u);y=xt(x,y);const Z=E(y)||o,oe=r.convert(x.format,x.encoding);let ne=r.convert(x.type),A=v(x.internalFormat,oe,ne,x.encoding,x.isVideoTexture);G(J,x,Z);let ie;const te=x.mipmaps,ge=o&&x.isVideoTexture!==!0,ue=he.__currentVersion===void 0||ae===!0,pe=L(x,y,Z);if(x.isDepthTexture)A=6402,o?x.type===Pn?A=36012:x.type===Rn?A=33190:x.type===pi?A=35056:A=33189:x.type===Pn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===In&&A===6402&&x.type!==Xo&&x.type!==Rn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Rn,ne=r.convert(x.type)),x.format===_i&&A===6402&&(A=34041,x.type!==pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=pi,ne=r.convert(x.type))),ue&&(ge?t.texStorage2D(3553,1,A,y.width,y.height):t.texImage2D(3553,0,A,y.width,y.height,0,oe,ne,null));else if(x.isDataTexture)if(te.length>0&&Z){ge&&ue&&t.texStorage2D(3553,pe,A,te[0].width,te[0].height);for(let se=0,ye=te.length;se<ye;se++)ie=te[se],ge?t.texSubImage2D(3553,se,0,0,ie.width,ie.height,oe,ne,ie.data):t.texImage2D(3553,se,A,ie.width,ie.height,0,oe,ne,ie.data);x.generateMipmaps=!1}else ge?(ue&&t.texStorage2D(3553,pe,A,y.width,y.height),t.texSubImage2D(3553,0,0,0,y.width,y.height,oe,ne,y.data)):t.texImage2D(3553,0,A,y.width,y.height,0,oe,ne,y.data);else if(x.isCompressedTexture){ge&&ue&&t.texStorage2D(3553,pe,A,te[0].width,te[0].height);for(let se=0,ye=te.length;se<ye;se++)ie=te[se],x.format!==Pt?oe!==null?ge?t.compressedTexSubImage2D(3553,se,0,0,ie.width,ie.height,oe,ie.data):t.compressedTexImage2D(3553,se,A,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?t.texSubImage2D(3553,se,0,0,ie.width,ie.height,oe,ne,ie.data):t.texImage2D(3553,se,A,ie.width,ie.height,0,oe,ne,ie.data)}else if(x.isDataArrayTexture)ge?(ue&&t.texStorage3D(35866,pe,A,y.width,y.height,y.depth),t.texSubImage3D(35866,0,0,0,0,y.width,y.height,y.depth,oe,ne,y.data)):t.texImage3D(35866,0,A,y.width,y.height,y.depth,0,oe,ne,y.data);else if(x.isData3DTexture)ge?(ue&&t.texStorage3D(32879,pe,A,y.width,y.height,y.depth),t.texSubImage3D(32879,0,0,0,0,y.width,y.height,y.depth,oe,ne,y.data)):t.texImage3D(32879,0,A,y.width,y.height,y.depth,0,oe,ne,y.data);else if(x.isFramebufferTexture){if(ue)if(ge)t.texStorage2D(3553,pe,A,y.width,y.height);else{let se=y.width,ye=y.height;for(let Fe=0;Fe<pe;Fe++)t.texImage2D(3553,Fe,A,se,ye,0,oe,ne,null),se>>=1,ye>>=1}}else if(te.length>0&&Z){ge&&ue&&t.texStorage2D(3553,pe,A,te[0].width,te[0].height);for(let se=0,ye=te.length;se<ye;se++)ie=te[se],ge?t.texSubImage2D(3553,se,0,0,oe,ne,ie):t.texImage2D(3553,se,A,oe,ne,ie);x.generateMipmaps=!1}else ge?(ue&&t.texStorage2D(3553,pe,A,y.width,y.height),t.texSubImage2D(3553,0,0,0,oe,ne,y)):t.texImage2D(3553,0,A,oe,ne,y);T(x,Z)&&R(J),he.__currentVersion=he.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function be(w,x,V){if(x.image.length!==6)return;const J=ke(w,x),ae=x.source;if(t.activeTexture(33984+V),t.bindTexture(34067,w.__webglTexture),ae.version!==ae.__currentVersion||J===!0){i.pixelStorei(37440,x.flipY),i.pixelStorei(37441,x.premultiplyAlpha),i.pixelStorei(3317,x.unpackAlignment),i.pixelStorei(37443,0);const he=x.isCompressedTexture||x.image[0].isCompressedTexture,_e=x.image[0]&&x.image[0].isDataTexture,y=[];for(let se=0;se<6;se++)!he&&!_e?y[se]=C(x.image[se],!1,!0,l):y[se]=_e?x.image[se].image:x.image[se],y[se]=xt(x,y[se]);const Z=y[0],oe=E(Z)||o,ne=r.convert(x.format,x.encoding),A=r.convert(x.type),ie=v(x.internalFormat,ne,A,x.encoding),te=o&&x.isVideoTexture!==!0,ge=ae.__currentVersion===void 0||J===!0;let ue=L(x,Z,oe);G(34067,x,oe);let pe;if(he){te&&ge&&t.texStorage2D(34067,ue,ie,Z.width,Z.height);for(let se=0;se<6;se++){pe=y[se].mipmaps;for(let ye=0;ye<pe.length;ye++){const Fe=pe[ye];x.format!==Pt?ne!==null?te?t.compressedTexSubImage2D(34069+se,ye,0,0,Fe.width,Fe.height,ne,Fe.data):t.compressedTexImage2D(34069+se,ye,ie,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?t.texSubImage2D(34069+se,ye,0,0,Fe.width,Fe.height,ne,A,Fe.data):t.texImage2D(34069+se,ye,ie,Fe.width,Fe.height,0,ne,A,Fe.data)}}}else{pe=x.mipmaps,te&&ge&&(pe.length>0&&ue++,t.texStorage2D(34067,ue,ie,y[0].width,y[0].height));for(let se=0;se<6;se++)if(_e){te?t.texSubImage2D(34069+se,0,0,0,y[se].width,y[se].height,ne,A,y[se].data):t.texImage2D(34069+se,0,ie,y[se].width,y[se].height,0,ne,A,y[se].data);for(let ye=0;ye<pe.length;ye++){const Ne=pe[ye].image[se].image;te?t.texSubImage2D(34069+se,ye+1,0,0,Ne.width,Ne.height,ne,A,Ne.data):t.texImage2D(34069+se,ye+1,ie,Ne.width,Ne.height,0,ne,A,Ne.data)}}else{te?t.texSubImage2D(34069+se,0,0,0,ne,A,y[se]):t.texImage2D(34069+se,0,ie,ne,A,y[se]);for(let ye=0;ye<pe.length;ye++){const Fe=pe[ye];te?t.texSubImage2D(34069+se,ye+1,0,0,ne,A,Fe.image[se]):t.texImage2D(34069+se,ye+1,ie,ne,A,Fe.image[se])}}}T(x,oe)&&R(34067),ae.__currentVersion=ae.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function de(w,x,V,J,ae){const he=r.convert(V.format,V.encoding),_e=r.convert(V.type),y=v(V.internalFormat,he,_e,V.encoding);n.get(x).__hasExternalTextures||(ae===32879||ae===35866?t.texImage3D(ae,0,y,x.width,x.height,x.depth,0,he,_e,null):t.texImage2D(ae,0,y,x.width,x.height,0,he,_e,null)),t.bindFramebuffer(36160,w),Oe(x)?f.framebufferTexture2DMultisampleEXT(36160,J,ae,n.get(V).__webglTexture,0,$e(x)):i.framebufferTexture2D(36160,J,ae,n.get(V).__webglTexture,0),t.bindFramebuffer(36160,null)}function De(w,x,V){if(i.bindRenderbuffer(36161,w),x.depthBuffer&&!x.stencilBuffer){let J=33189;if(V||Oe(x)){const ae=x.depthTexture;ae&&ae.isDepthTexture&&(ae.type===Pn?J=36012:ae.type===Rn&&(J=33190));const he=$e(x);Oe(x)?f.renderbufferStorageMultisampleEXT(36161,he,J,x.width,x.height):i.renderbufferStorageMultisample(36161,he,J,x.width,x.height)}else i.renderbufferStorage(36161,J,x.width,x.height);i.framebufferRenderbuffer(36160,36096,36161,w)}else if(x.depthBuffer&&x.stencilBuffer){const J=$e(x);V&&Oe(x)===!1?i.renderbufferStorageMultisample(36161,J,35056,x.width,x.height):Oe(x)?f.renderbufferStorageMultisampleEXT(36161,J,35056,x.width,x.height):i.renderbufferStorage(36161,34041,x.width,x.height),i.framebufferRenderbuffer(36160,33306,36161,w)}else{const J=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let ae=0;ae<J.length;ae++){const he=J[ae],_e=r.convert(he.format,he.encoding),y=r.convert(he.type),Z=v(he.internalFormat,_e,y,he.encoding),oe=$e(x);V&&Oe(x)===!1?i.renderbufferStorageMultisample(36161,oe,Z,x.width,x.height):Oe(x)?f.renderbufferStorageMultisampleEXT(36161,oe,Z,x.width,x.height):i.renderbufferStorage(36161,Z,x.width,x.height)}}i.bindRenderbuffer(36161,null)}function Ce(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q(x.depthTexture,0);const J=n.get(x.depthTexture).__webglTexture,ae=$e(x);if(x.depthTexture.format===In)Oe(x)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,J,0,ae):i.framebufferTexture2D(36160,36096,3553,J,0);else if(x.depthTexture.format===_i)Oe(x)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,J,0,ae):i.framebufferTexture2D(36160,33306,3553,J,0);else throw new Error("Unknown depthTexture format")}function xe(w){const x=n.get(w),V=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Ce(x.__webglFramebuffer,w)}else if(V){x.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(36160,x.__webglFramebuffer[J]),x.__webglDepthbuffer[J]=i.createRenderbuffer(),De(x.__webglDepthbuffer[J],w,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),De(x.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function Ye(w,x,V){const J=n.get(w);x!==void 0&&de(J.__webglFramebuffer,w,w.texture,36064,3553),V!==void 0&&xe(w)}function Ke(w){const x=w.texture,V=n.get(w),J=n.get(x);w.addEventListener("dispose",ce),w.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=x.version,a.memory.textures++);const ae=w.isWebGLCubeRenderTarget===!0,he=w.isWebGLMultipleRenderTargets===!0,_e=E(w)||o;if(ae){V.__webglFramebuffer=[];for(let y=0;y<6;y++)V.__webglFramebuffer[y]=i.createFramebuffer()}else{if(V.__webglFramebuffer=i.createFramebuffer(),he)if(s.drawBuffers){const y=w.texture;for(let Z=0,oe=y.length;Z<oe;Z++){const ne=n.get(y[Z]);ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&Oe(w)===!1){const y=he?x:[x];V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let Z=0;Z<y.length;Z++){const oe=y[Z];V.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(36161,V.__webglColorRenderbuffer[Z]);const ne=r.convert(oe.format,oe.encoding),A=r.convert(oe.type),ie=v(oe.internalFormat,ne,A,oe.encoding),te=$e(w);i.renderbufferStorageMultisample(36161,te,ie,w.width,w.height),i.framebufferRenderbuffer(36160,36064+Z,36161,V.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(36161,null),w.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),De(V.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}}if(ae){t.bindTexture(34067,J.__webglTexture),G(34067,x,_e);for(let y=0;y<6;y++)de(V.__webglFramebuffer[y],w,x,36064,34069+y);T(x,_e)&&R(34067),t.unbindTexture()}else if(he){const y=w.texture;for(let Z=0,oe=y.length;Z<oe;Z++){const ne=y[Z],A=n.get(ne);t.bindTexture(3553,A.__webglTexture),G(3553,ne,_e),de(V.__webglFramebuffer,w,ne,36064+Z,3553),T(ne,_e)&&R(3553)}t.unbindTexture()}else{let y=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?y=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(y,J.__webglTexture),G(y,x,_e),de(V.__webglFramebuffer,w,x,36064,y),T(x,_e)&&R(y),t.unbindTexture()}w.depthBuffer&&xe(w)}function et(w){const x=E(w)||o,V=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let J=0,ae=V.length;J<ae;J++){const he=V[J];if(T(he,x)){const _e=w.isWebGLCubeRenderTarget?34067:3553,y=n.get(he).__webglTexture;t.bindTexture(_e,y),R(_e),t.unbindTexture()}}}function mt(w){if(o&&w.samples>0&&Oe(w)===!1){const x=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],V=w.width,J=w.height;let ae=16384;const he=[],_e=w.stencilBuffer?33306:36096,y=n.get(w),Z=w.isWebGLMultipleRenderTargets===!0;if(Z)for(let oe=0;oe<x.length;oe++)t.bindFramebuffer(36160,y.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+oe,36161,null),t.bindFramebuffer(36160,y.__webglFramebuffer),i.framebufferTexture2D(36009,36064+oe,3553,null,0);t.bindFramebuffer(36008,y.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,y.__webglFramebuffer);for(let oe=0;oe<x.length;oe++){he.push(36064+oe),w.depthBuffer&&he.push(_e);const ne=y.__ignoreDepthValues!==void 0?y.__ignoreDepthValues:!1;if(ne===!1&&(w.depthBuffer&&(ae|=256),w.stencilBuffer&&(ae|=1024)),Z&&i.framebufferRenderbuffer(36008,36064,36161,y.__webglColorRenderbuffer[oe]),ne===!0&&(i.invalidateFramebuffer(36008,[_e]),i.invalidateFramebuffer(36009,[_e])),Z){const A=n.get(x[oe]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,A,0)}i.blitFramebuffer(0,0,V,J,0,0,V,J,ae,9728),m&&i.invalidateFramebuffer(36008,he)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Z)for(let oe=0;oe<x.length;oe++){t.bindFramebuffer(36160,y.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+oe,36161,y.__webglColorRenderbuffer[oe]);const ne=n.get(x[oe]).__webglTexture;t.bindFramebuffer(36160,y.__webglFramebuffer),i.framebufferTexture2D(36009,36064+oe,3553,ne,0)}t.bindFramebuffer(36009,y.__webglMultisampledFramebuffer)}}function $e(w){return Math.min(h,w.samples)}function Oe(w){const x=n.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function vt(w){const x=a.render.frame;g.get(w)!==x&&(g.set(w,x),w.update())}function xt(w,x){const V=w.encoding,J=w.format,ae=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Rr||V!==zn&&(V===Ge?o===!1?e.has("EXT_sRGB")===!0&&J===Pt?(w.format=Rr,w.minFilter=bt,w.generateMipmaps=!1):x=$o.sRGBToLinear(x):(J!==Pt||ae!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),x}this.allocateTextureUnit=Y,this.resetTextureUnits=j,this.setTexture2D=q,this.setTexture2DArray=re,this.setTexture3D=K,this.setTextureCube=ee,this.rebindTextures=Ye,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Oe}function Zp(i,e,t){const n=t.isWebGL2;function s(r,a=null){let o;if(r===Nn)return 5121;if(r===qc)return 32819;if(r===Xc)return 32820;if(r===Gc)return 5120;if(r===Hc)return 5122;if(r===Xo)return 5123;if(r===Wc)return 5124;if(r===Rn)return 5125;if(r===Pn)return 5126;if(r===zi)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===jc)return 6406;if(r===Pt)return 6408;if(r===$c)return 6409;if(r===Zc)return 6410;if(r===In)return 6402;if(r===_i)return 34041;if(r===Kc)return 6403;if(r===Yc)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Rr)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Jc)return 36244;if(r===Qc)return 33319;if(r===eu)return 33320;if(r===tu)return 36249;if(r===Os||r===Fs||r===Ns||r===zs)if(a===Ge)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Os)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Fs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ns)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Os)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Fs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ns)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ma||r===ga||r===_a||r===va)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===ma)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ga)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===_a)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===va)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===nu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===xa||r===ya)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===xa)return a===Ge?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===ya)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ba||r===Ma||r===Sa||r===wa||r===Ea||r===Ta||r===Aa||r===Ca||r===La||r===Ra||r===Pa||r===Da||r===Ia||r===Oa)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===ba)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ma)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Sa)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===wa)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ea)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ta)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Aa)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ca)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===La)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ra)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Pa)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Da)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ia)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Oa)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Fa)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Fa)return a===Ge?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===pi?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class Kp extends Mt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ps extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jp={type:"move"};class dr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(o!==null&&(s=t.getPose(e.targetRaySpace,n),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jp))),l&&e.hand){a=!0;for(const d of e.hand.values()){const p=t.getJointPose(d,n);if(l.joints[d.jointName]===void 0){const b=new ps;b.matrixAutoUpdate=!1,b.visible=!1,l.joints[d.jointName]=b,l.add(b)}const _=l.joints[d.jointName];p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}}class Qp extends St{constructor(e,t,n,s,r,a,o,c,l,u){if(u=u!==void 0?u:In,u!==In&&u!==_i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===In&&(n=Rn),n===void 0&&u===_i&&(n=pi),super(null,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:pt,this.minFilter=c!==void 0?c:pt,this.flipY=!1,this.generateMipmaps=!1}}class em extends Bn{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=null,l=null,u=null,h=null,f=null,m=null;const g=t.getContextAttributes();let d=null,p=null;const _=[],b=new Map,C=new Mt;C.layers.enable(1),C.viewport=new it;const E=new Mt;E.layers.enable(2),E.viewport=new it;const S=[C,E],T=new Kp;T.layers.enable(1),T.layers.enable(2);let R=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let q=_[U];return q===void 0&&(q=new dr,_[U]=q),q.getTargetRaySpace()},this.getControllerGrip=function(U){let q=_[U];return q===void 0&&(q=new dr,_[U]=q),q.getGripSpace()},this.getHand=function(U){let q=_[U];return q===void 0&&(q=new dr,_[U]=q),q.getHandSpace()};function L(U){const q=b.get(U.inputSource);q!==void 0&&q.dispatchEvent({type:U.type,data:U.inputSource})}function N(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",z),b.forEach(function(U,q){U!==void 0&&U.disconnect(q)}),b.clear(),R=null,v=null,e.setRenderTarget(d),f=null,h=null,u=null,s=null,p=null,Y.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){o=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",N),s.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,q),s.updateRenderState({baseLayer:f}),p=new mn(f.framebufferWidth,f.framebufferHeight,{format:Pt,type:Nn,encoding:e.outputEncoding})}else{let q=null,re=null,K=null;g.depth&&(K=g.stencil?35056:33190,q=g.stencil?_i:In,re=g.stencil?pi:Rn);const ee={colorFormat:e.outputEncoding===Ge?35907:32856,depthFormat:K,scaleFactor:r};u=new XRWebGLBinding(s,t),h=u.createProjectionLayer(ee),s.updateRenderState({layers:[h]}),p=new mn(h.textureWidth,h.textureHeight,{format:Pt,type:Nn,depthTexture:new Qp(h.textureWidth,h.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const fe=e.properties.get(p);fe.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),c=null,a=await s.requestReferenceSpace(o),Y.setContext(s),Y.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function z(U){const q=s.inputSources;for(let re=0;re<q.length;re++){const K=q[re].handedness==="right"?1:0;b.set(q[re],_[K])}for(let re=0;re<U.removed.length;re++){const K=U.removed[re],ee=b.get(K);ee&&(ee.dispatchEvent({type:"disconnected",data:K}),b.delete(K))}for(let re=0;re<U.added.length;re++){const K=U.added[re],ee=b.get(K);ee&&ee.dispatchEvent({type:"connected",data:K})}}const ce=new P,Q=new P;function D(U,q,re){ce.setFromMatrixPosition(q.matrixWorld),Q.setFromMatrixPosition(re.matrixWorld);const K=ce.distanceTo(Q),ee=q.projectionMatrix.elements,fe=re.projectionMatrix.elements,me=ee[14]/(ee[10]-1),G=ee[14]/(ee[10]+1),ke=(ee[9]+1)/ee[5],Me=(ee[9]-1)/ee[5],be=(ee[8]-1)/ee[0],de=(fe[8]+1)/fe[0],De=me*be,Ce=me*de,xe=K/(-be+de),Ye=xe*-be;q.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(Ye),U.translateZ(xe),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const Ke=me+xe,et=G+xe,mt=De-Ye,$e=Ce+(K-Ye),Oe=ke*G/et*Ke,vt=Me*G/et*Ke;U.projectionMatrix.makePerspective(mt,$e,Oe,vt,Ke,et)}function X(U,q){q===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(q.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;T.near=E.near=C.near=U.near,T.far=E.far=C.far=U.far,(R!==T.near||v!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),R=T.near,v=T.far);const q=U.parent,re=T.cameras;X(T,q);for(let ee=0;ee<re.length;ee++)X(re[ee],q);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),U.position.copy(T.position),U.quaternion.copy(T.quaternion),U.scale.copy(T.scale),U.matrix.copy(T.matrix),U.matrixWorld.copy(T.matrixWorld);const K=U.children;for(let ee=0,fe=K.length;ee<fe;ee++)K[ee].updateMatrixWorld(!0);re.length===2?D(T,C,E):T.projectionMatrix.copy(C.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(U){h!==null&&(h.fixedFoveation=U),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=U)};let B=null;function j(U,q){if(l=q.getViewerPose(c||a),m=q,l!==null){const K=l.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ee=!1;K.length!==T.cameras.length&&(T.cameras.length=0,ee=!0);for(let fe=0;fe<K.length;fe++){const me=K[fe];let G=null;if(f!==null)G=f.getViewport(me);else{const Me=u.getViewSubImage(h,me);G=Me.viewport,fe===0&&(e.setRenderTargetTextures(p,Me.colorTexture,h.ignoreDepthValues?void 0:Me.depthStencilTexture),e.setRenderTarget(p))}let ke=S[fe];ke===void 0&&(ke=new Mt,ke.layers.enable(fe),ke.viewport=new it,S[fe]=ke),ke.matrix.fromArray(me.transform.matrix),ke.projectionMatrix.fromArray(me.projectionMatrix),ke.viewport.set(G.x,G.y,G.width,G.height),fe===0&&T.matrix.copy(ke.matrix),ee===!0&&T.cameras.push(ke)}}const re=s.inputSources;for(let K=0;K<_.length;K++){const ee=re[K],fe=b.get(ee);fe!==void 0&&fe.update(ee,q,c||a)}B&&B(U,q),m=null}const Y=new sl;Y.setAnimationLoop(j),this.setAnimationLoop=function(U){B=U},this.dispose=function(){}}}function tm(i,e){function t(d,p){d.fogColor.value.copy(p.color),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,_,b,C){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(d,p):p.isMeshToonMaterial?(s(d,p),u(d,p)):p.isMeshPhongMaterial?(s(d,p),l(d,p)):p.isMeshStandardMaterial?(s(d,p),h(d,p),p.isMeshPhysicalMaterial&&f(d,p,C)):p.isMeshMatcapMaterial?(s(d,p),m(d,p)):p.isMeshDepthMaterial?s(d,p):p.isMeshDistanceMaterial?(s(d,p),g(d,p)):p.isMeshNormalMaterial?s(d,p):p.isLineBasicMaterial?(r(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?o(d,p,_,b):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===Dt&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===Dt&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const E=i.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*E}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let b;p.map?b=p.map:p.specularMap?b=p.specularMap:p.displacementMap?b=p.displacementMap:p.normalMap?b=p.normalMap:p.bumpMap?b=p.bumpMap:p.roughnessMap?b=p.roughnessMap:p.metalnessMap?b=p.metalnessMap:p.alphaMap?b=p.alphaMap:p.emissiveMap?b=p.emissiveMap:p.clearcoatMap?b=p.clearcoatMap:p.clearcoatNormalMap?b=p.clearcoatNormalMap:p.clearcoatRoughnessMap?b=p.clearcoatRoughnessMap:p.iridescenceMap?b=p.iridescenceMap:p.iridescenceThicknessMap?b=p.iridescenceThicknessMap:p.specularIntensityMap?b=p.specularIntensityMap:p.specularColorMap?b=p.specularColorMap:p.transmissionMap?b=p.transmissionMap:p.thicknessMap?b=p.thicknessMap:p.sheenColorMap?b=p.sheenColorMap:p.sheenRoughnessMap&&(b=p.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),d.uvTransform.value.copy(b.matrix));let C;p.aoMap?C=p.aoMap:p.lightMap&&(C=p.lightMap),C!==void 0&&(C.isWebGLRenderTarget&&(C=C.texture),C.matrixAutoUpdate===!0&&C.updateMatrix(),d.uv2Transform.value.copy(C.matrix))}function r(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function o(d,p,_,b){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*_,d.scale.value=b*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let C;p.map?C=p.map:p.alphaMap&&(C=p.alphaMap),C!==void 0&&(C.matrixAutoUpdate===!0&&C.updateMatrix(),d.uvTransform.value.copy(C.matrix))}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function l(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function h(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function f(d,p,_){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Dt&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function g(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function nm(){const i=ki("canvas");return i.style.display="block",i}function dl(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:nm(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,s=i.stencil!==void 0?i.stencil:!0,r=i.antialias!==void 0?i.antialias:!1,a=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,o=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,c=i.powerPreference!==void 0?i.powerPreference:"default",l=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let h=null,f=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=zn,this.physicallyCorrectLights=!1,this.toneMapping=rn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const d=this;let p=!1,_=0,b=0,C=null,E=-1,S=null;const T=new it,R=new it;let v=null,L=e.width,N=e.height,z=1,ce=null,Q=null;const D=new it(0,0,L,N),X=new it(0,0,L,N);let B=!1;const j=new il;let Y=!1,U=!1,q=null;const re=new at,K=new we,ee=new P,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function me(){return C===null?z:1}let G=t;function ke(M,I){for(let k=0;k<M.length;k++){const F=M[k],W=e.getContext(F,I);if(W!==null)return W}return null}try{const M={alpha:!0,depth:n,stencil:s,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Hr}`),e.addEventListener("webglcontextlost",A,!1),e.addEventListener("webglcontextrestored",ie,!1),e.addEventListener("webglcontextcreationerror",te,!1),G===null){const I=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&I.shift(),G=ke(I,M),G===null)throw ke(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Me,be,de,De,Ce,xe,Ye,Ke,et,mt,$e,Oe,vt,xt,w,x,V,J,ae,he,_e,y,Z;function oe(){Me=new mf(G),be=new lf(G,Me,i),Me.init(be),y=new Zp(G,Me,be),de=new Yp(G,Me,be),De=new vf,Ce=new Np,xe=new $p(G,Me,de,Ce,be,y,De),Ye=new uf(d),Ke=new pf(d),et=new Cu(G,be),Z=new af(G,Me,et,be),mt=new gf(G,et,De,Z),$e=new Mf(G,mt,et,De),ae=new bf(G,be,xe),x=new cf(Ce),Oe=new Fp(d,Ye,Ke,Me,be,Z,x),vt=new tm(d,Ce),xt=new kp,w=new Wp(Me,be),J=new rf(d,Ye,de,$e,u,a),V=new jp(d,$e,be),he=new of(G,Me,De,be),_e=new _f(G,Me,De,be),De.programs=Oe.programs,d.capabilities=be,d.extensions=Me,d.properties=Ce,d.renderLists=xt,d.shadowMap=V,d.state=de,d.info=De}oe();const ne=new em(d,G);this.xr=ne,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const M=Me.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Me.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(M){M!==void 0&&(z=M,this.setSize(L,N,!1))},this.getSize=function(M){return M.set(L,N)},this.setSize=function(M,I,k){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=M,N=I,e.width=Math.floor(M*z),e.height=Math.floor(I*z),k!==!1&&(e.style.width=M+"px",e.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(L*z,N*z).floor()},this.setDrawingBufferSize=function(M,I,k){L=M,N=I,z=k,e.width=Math.floor(M*k),e.height=Math.floor(I*k),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(T)},this.getViewport=function(M){return M.copy(D)},this.setViewport=function(M,I,k,F){M.isVector4?D.set(M.x,M.y,M.z,M.w):D.set(M,I,k,F),de.viewport(T.copy(D).multiplyScalar(z).floor())},this.getScissor=function(M){return M.copy(X)},this.setScissor=function(M,I,k,F){M.isVector4?X.set(M.x,M.y,M.z,M.w):X.set(M,I,k,F),de.scissor(R.copy(X).multiplyScalar(z).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(M){de.setScissorTest(B=M)},this.setOpaqueSort=function(M){ce=M},this.setTransparentSort=function(M){Q=M},this.getClearColor=function(M){return M.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor.apply(J,arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha.apply(J,arguments)},this.clear=function(M=!0,I=!0,k=!0){let F=0;M&&(F|=16384),I&&(F|=256),k&&(F|=1024),G.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",A,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",te,!1),xt.dispose(),w.dispose(),Ce.dispose(),Ye.dispose(),Ke.dispose(),$e.dispose(),Z.dispose(),Oe.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Fe),ne.removeEventListener("sessionend",Ne),q&&(q.dispose(),q=null),ot.stop()};function A(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function ie(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const M=De.autoReset,I=V.enabled,k=V.autoUpdate,F=V.needsUpdate,W=V.type;oe(),De.autoReset=M,V.enabled=I,V.autoUpdate=k,V.needsUpdate=F,V.type=W}function te(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ge(M){const I=M.target;I.removeEventListener("dispose",ge),ue(I)}function ue(M){pe(M),Ce.remove(M)}function pe(M){const I=Ce.get(M).programs;I!==void 0&&(I.forEach(function(k){Oe.releaseProgram(k)}),M.isShaderMaterial&&Oe.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,k,F,W,ve){I===null&&(I=fe);const Se=W.isMesh&&W.matrixWorld.determinant()<0,Ae=Rl(M,I,k,F,W);de.setMaterial(F,Se);let Te=k.index;const ze=k.attributes.position;if(Te===null){if(ze===void 0||ze.count===0)return}else if(Te.count===0)return;let Re=1;F.wireframe===!0&&(Te=mt.getWireframeAttribute(k),Re=2),Z.setup(W,F,Ae,k,Te);let Pe,He=he;Te!==null&&(Pe=et.get(Te),He=_e,He.setIndex(Pe));const yn=Te!==null?Te.count:ze.count,Vn=k.drawRange.start*Re,Gn=k.drawRange.count*Re,zt=ve!==null?ve.start*Re:0,Ie=ve!==null?ve.count*Re:1/0,Hn=Math.max(Vn,zt),Xe=Math.min(yn,Vn+Gn,zt+Ie)-1,kt=Math.max(0,Xe-Hn+1);if(kt!==0){if(W.isMesh)F.wireframe===!0?(de.setLineWidth(F.wireframeLinewidth*me()),He.setMode(1)):He.setMode(4);else if(W.isLine){let an=F.linewidth;an===void 0&&(an=1),de.setLineWidth(an*me()),W.isLineSegments?He.setMode(1):W.isLineLoop?He.setMode(2):He.setMode(3)}else W.isPoints?He.setMode(0):W.isSprite&&He.setMode(4);if(W.isInstancedMesh)He.renderInstances(Hn,kt,W.count);else if(k.isInstancedBufferGeometry){const an=Math.min(k.instanceCount,k._maxInstanceCount);He.renderInstances(Hn,kt,an)}else He.render(Hn,kt)}},this.compile=function(M,I){f=w.get(M),f.init(),g.push(f),M.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights(d.physicallyCorrectLights),M.traverse(function(k){const F=k.material;if(F)if(Array.isArray(F))for(let W=0;W<F.length;W++){const ve=F[W];Rs(ve,M,k)}else Rs(F,M,k)}),g.pop(),f=null};let se=null;function ye(M){se&&se(M)}function Fe(){ot.stop()}function Ne(){ot.start()}const ot=new sl;ot.setAnimationLoop(ye),typeof self!="undefined"&&ot.setContext(self),this.setAnimationLoop=function(M){se=M,ne.setAnimationLoop(M),M===null?ot.stop():ot.start()},ne.addEventListener("sessionstart",Fe),ne.addEventListener("sessionend",Ne),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;M.autoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(I),I=ne.getCamera()),M.isScene===!0&&M.onBeforeRender(d,M,I,C),f=w.get(M,g.length),f.init(),g.push(f),re.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),j.setFromProjectionMatrix(re),U=this.localClippingEnabled,Y=x.init(this.clippingPlanes,U,I),h=xt.get(M,m.length),h.init(),m.push(h),Nt(M,I,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(ce,Q),Y===!0&&x.beginShadows();const k=f.state.shadowsArray;if(V.render(k,M,I),Y===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),J.render(h,M),f.setupLights(d.physicallyCorrectLights),I.isArrayCamera){const F=I.cameras;for(let W=0,ve=F.length;W<ve;W++){const Se=F[W];Yr(h,M,Se,Se.viewport)}}else Yr(h,M,I);C!==null&&(xe.updateMultisampleRenderTarget(C),xe.updateRenderTargetMipmap(C)),M.isScene===!0&&M.onAfterRender(d,M,I),Z.resetDefaultState(),E=-1,S=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function Nt(M,I,k,F){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||j.intersectsSprite(M)){F&&ee.setFromMatrixPosition(M.matrixWorld).applyMatrix4(re);const Se=$e.update(M),Ae=M.material;Ae.visible&&h.push(M,Se,Ae,k,ee.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(M.isSkinnedMesh&&M.skeleton.frame!==De.render.frame&&(M.skeleton.update(),M.skeleton.frame=De.render.frame),!M.frustumCulled||j.intersectsObject(M))){F&&ee.setFromMatrixPosition(M.matrixWorld).applyMatrix4(re);const Se=$e.update(M),Ae=M.material;if(Array.isArray(Ae)){const Te=Se.groups;for(let ze=0,Re=Te.length;ze<Re;ze++){const Pe=Te[ze],He=Ae[Pe.materialIndex];He&&He.visible&&h.push(M,Se,He,k,ee.z,Pe)}}else Ae.visible&&h.push(M,Se,Ae,k,ee.z,null)}}const ve=M.children;for(let Se=0,Ae=ve.length;Se<Ae;Se++)Nt(ve[Se],I,k,F)}function Yr(M,I,k,F){const W=M.opaque,ve=M.transmissive,Se=M.transparent;f.setupLightsView(k),ve.length>0&&Cl(W,I,k),F&&de.viewport(T.copy(F)),W.length>0&&qi(W,I,k),ve.length>0&&qi(ve,I,k),Se.length>0&&qi(Se,I,k),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Cl(M,I,k){const F=be.isWebGL2;q===null&&(q=new mn(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?zi:Nn,minFilter:Cs,samples:F&&r===!0?4:0})),d.getDrawingBufferSize(K),F?q.setSize(K.x,K.y):q.setSize(Pr(K.x),Pr(K.y));const W=d.getRenderTarget();d.setRenderTarget(q),d.clear();const ve=d.toneMapping;d.toneMapping=rn,qi(M,I,k),d.toneMapping=ve,xe.updateMultisampleRenderTarget(q),xe.updateRenderTargetMipmap(q),d.setRenderTarget(W)}function qi(M,I,k){const F=I.isScene===!0?I.overrideMaterial:null;for(let W=0,ve=M.length;W<ve;W++){const Se=M[W],Ae=Se.object,Te=Se.geometry,ze=F===null?Se.material:F,Re=Se.group;Ae.layers.test(k.layers)&&Ll(Ae,I,k,Te,ze,Re)}}function Ll(M,I,k,F,W,ve){M.onBeforeRender(d,I,k,F,W,ve),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),W.onBeforeRender(d,I,k,F,M,ve),W.transparent===!0&&W.side===Fn?(W.side=Dt,W.needsUpdate=!0,d.renderBufferDirect(k,I,F,W,M,ve),W.side=Ni,W.needsUpdate=!0,d.renderBufferDirect(k,I,F,W,M,ve),W.side=Fn):d.renderBufferDirect(k,I,F,W,M,ve),M.onAfterRender(d,I,k,F,W,ve)}function Rs(M,I,k){I.isScene!==!0&&(I=fe);const F=Ce.get(M),W=f.state.lights,ve=f.state.shadowsArray,Se=W.state.version,Ae=Oe.getParameters(M,W.state,ve,I,k),Te=Oe.getProgramCacheKey(Ae);let ze=F.programs;F.environment=M.isMeshStandardMaterial?I.environment:null,F.fog=I.fog,F.envMap=(M.isMeshStandardMaterial?Ke:Ye).get(M.envMap||F.environment),ze===void 0&&(M.addEventListener("dispose",ge),ze=new Map,F.programs=ze);let Re=ze.get(Te);if(Re!==void 0){if(F.currentProgram===Re&&F.lightsStateVersion===Se)return $r(M,Ae),Re}else Ae.uniforms=Oe.getUniforms(M),M.onBuild(k,Ae,d),M.onBeforeCompile(Ae,d),Re=Oe.acquireProgram(Ae,Te),ze.set(Te,Re),F.uniforms=Ae.uniforms;const Pe=F.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Pe.clippingPlanes=x.uniform),$r(M,Ae),F.needsLights=Dl(M),F.lightsStateVersion=Se,F.needsLights&&(Pe.ambientLightColor.value=W.state.ambient,Pe.lightProbe.value=W.state.probe,Pe.directionalLights.value=W.state.directional,Pe.directionalLightShadows.value=W.state.directionalShadow,Pe.spotLights.value=W.state.spot,Pe.spotLightShadows.value=W.state.spotShadow,Pe.rectAreaLights.value=W.state.rectArea,Pe.ltc_1.value=W.state.rectAreaLTC1,Pe.ltc_2.value=W.state.rectAreaLTC2,Pe.pointLights.value=W.state.point,Pe.pointLightShadows.value=W.state.pointShadow,Pe.hemisphereLights.value=W.state.hemi,Pe.directionalShadowMap.value=W.state.directionalShadowMap,Pe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Pe.spotShadowMap.value=W.state.spotShadowMap,Pe.spotShadowMatrix.value=W.state.spotShadowMatrix,Pe.pointShadowMap.value=W.state.pointShadowMap,Pe.pointShadowMatrix.value=W.state.pointShadowMatrix);const He=Re.getUniforms(),yn=xs.seqWithValue(He.seq,Pe);return F.currentProgram=Re,F.uniformsList=yn,Re}function $r(M,I){const k=Ce.get(M);k.outputEncoding=I.outputEncoding,k.instancing=I.instancing,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function Rl(M,I,k,F,W){I.isScene!==!0&&(I=fe),xe.resetTextureUnits();const ve=I.fog,Se=F.isMeshStandardMaterial?I.environment:null,Ae=C===null?d.outputEncoding:C.isXRRenderTarget===!0?C.texture.encoding:zn,Te=(F.isMeshStandardMaterial?Ke:Ye).get(F.envMap||Se),ze=F.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Re=!!F.normalMap&&!!k.attributes.tangent,Pe=!!k.morphAttributes.position,He=!!k.morphAttributes.normal,yn=!!k.morphAttributes.color,Vn=F.toneMapped?d.toneMapping:rn,Gn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,zt=Gn!==void 0?Gn.length:0,Ie=Ce.get(F),Hn=f.state.lights;if(Y===!0&&(U===!0||M!==S)){const Ut=M===S&&F.id===E;x.setState(F,M,Ut)}let Xe=!1;F.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Hn.state.version||Ie.outputEncoding!==Ae||W.isInstancedMesh&&Ie.instancing===!1||!W.isInstancedMesh&&Ie.instancing===!0||W.isSkinnedMesh&&Ie.skinning===!1||!W.isSkinnedMesh&&Ie.skinning===!0||Ie.envMap!==Te||F.fog===!0&&Ie.fog!==ve||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==x.numPlanes||Ie.numIntersection!==x.numIntersection)||Ie.vertexAlphas!==ze||Ie.vertexTangents!==Re||Ie.morphTargets!==Pe||Ie.morphNormals!==He||Ie.morphColors!==yn||Ie.toneMapping!==Vn||be.isWebGL2===!0&&Ie.morphTargetsCount!==zt)&&(Xe=!0):(Xe=!0,Ie.__version=F.version);let kt=Ie.currentProgram;Xe===!0&&(kt=Rs(F,I,W));let an=!1,bi=!1,Ps=!1;const lt=kt.getUniforms(),Mi=Ie.uniforms;if(de.useProgram(kt.program)&&(an=!0,bi=!0,Ps=!0),F.id!==E&&(E=F.id,bi=!0),an||S!==M){if(lt.setValue(G,"projectionMatrix",M.projectionMatrix),be.logarithmicDepthBuffer&&lt.setValue(G,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),S!==M&&(S=M,bi=!0,Ps=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const Ut=lt.map.cameraPosition;Ut!==void 0&&Ut.setValue(G,ee.setFromMatrixPosition(M.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&lt.setValue(G,"isOrthographic",M.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||W.isSkinnedMesh)&&lt.setValue(G,"viewMatrix",M.matrixWorldInverse)}if(W.isSkinnedMesh){lt.setOptional(G,W,"bindMatrix"),lt.setOptional(G,W,"bindMatrixInverse");const Ut=W.skeleton;Ut&&(be.floatVertexTextures?(Ut.boneTexture===null&&Ut.computeBoneTexture(),lt.setValue(G,"boneTexture",Ut.boneTexture,xe),lt.setValue(G,"boneTextureSize",Ut.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ds=k.morphAttributes;return(Ds.position!==void 0||Ds.normal!==void 0||Ds.color!==void 0&&be.isWebGL2===!0)&&ae.update(W,k,F,kt),(bi||Ie.receiveShadow!==W.receiveShadow)&&(Ie.receiveShadow=W.receiveShadow,lt.setValue(G,"receiveShadow",W.receiveShadow)),bi&&(lt.setValue(G,"toneMappingExposure",d.toneMappingExposure),Ie.needsLights&&Pl(Mi,Ps),ve&&F.fog===!0&&vt.refreshFogUniforms(Mi,ve),vt.refreshMaterialUniforms(Mi,F,z,N,q),xs.upload(G,Ie.uniformsList,Mi,xe)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(xs.upload(G,Ie.uniformsList,Mi,xe),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&lt.setValue(G,"center",W.center),lt.setValue(G,"modelViewMatrix",W.modelViewMatrix),lt.setValue(G,"normalMatrix",W.normalMatrix),lt.setValue(G,"modelMatrix",W.matrixWorld),kt}function Pl(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function Dl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(M,I,k){Ce.get(M.texture).__webglTexture=I,Ce.get(M.depthTexture).__webglTexture=k;const F=Ce.get(M);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=k===void 0,F.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,I){const k=Ce.get(M);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,k=0){C=M,_=I,b=k;let F=!0;if(M){const Te=Ce.get(M);Te.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(36160,null),F=!1):Te.__webglFramebuffer===void 0?xe.setupRenderTarget(M):Te.__hasExternalTextures&&xe.rebindTextures(M,Ce.get(M.texture).__webglTexture,Ce.get(M.depthTexture).__webglTexture)}let W=null,ve=!1,Se=!1;if(M){const Te=M.texture;(Te.isData3DTexture||Te.isDataArrayTexture)&&(Se=!0);const ze=Ce.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(W=ze[I],ve=!0):be.isWebGL2&&M.samples>0&&xe.useMultisampledRTT(M)===!1?W=Ce.get(M).__webglMultisampledFramebuffer:W=ze,T.copy(M.viewport),R.copy(M.scissor),v=M.scissorTest}else T.copy(D).multiplyScalar(z).floor(),R.copy(X).multiplyScalar(z).floor(),v=B;if(de.bindFramebuffer(36160,W)&&be.drawBuffers&&F&&de.drawBuffers(M,W),de.viewport(T),de.scissor(R),de.setScissorTest(v),ve){const Te=Ce.get(M.texture);G.framebufferTexture2D(36160,36064,34069+I,Te.__webglTexture,k)}else if(Se){const Te=Ce.get(M.texture),ze=I||0;G.framebufferTextureLayer(36160,36064,Te.__webglTexture,k||0,ze)}E=-1},this.readRenderTargetPixels=function(M,I,k,F,W,ve,Se){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Ce.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Se!==void 0&&(Ae=Ae[Se]),Ae){de.bindFramebuffer(36160,Ae);try{const Te=M.texture,ze=Te.format,Re=Te.type;if(ze!==Pt&&y.convert(ze)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=Re===zi&&(Me.has("EXT_color_buffer_half_float")||be.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Re!==Nn&&y.convert(Re)!==G.getParameter(35738)&&!(Re===Pn&&(be.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-F&&k>=0&&k<=M.height-W&&G.readPixels(I,k,F,W,y.convert(ze),y.convert(Re),ve)}finally{const Te=C!==null?Ce.get(C).__webglFramebuffer:null;de.bindFramebuffer(36160,Te)}}},this.copyFramebufferToTexture=function(M,I,k=0){const F=Math.pow(2,-k),W=Math.floor(I.image.width*F),ve=Math.floor(I.image.height*F);xe.setTexture2D(I,0),G.copyTexSubImage2D(3553,k,0,0,M.x,M.y,W,ve),de.unbindTexture()},this.copyTextureToTexture=function(M,I,k,F=0){const W=I.image.width,ve=I.image.height,Se=y.convert(k.format),Ae=y.convert(k.type);xe.setTexture2D(k,0),G.pixelStorei(37440,k.flipY),G.pixelStorei(37441,k.premultiplyAlpha),G.pixelStorei(3317,k.unpackAlignment),I.isDataTexture?G.texSubImage2D(3553,F,M.x,M.y,W,ve,Se,Ae,I.image.data):I.isCompressedTexture?G.compressedTexSubImage2D(3553,F,M.x,M.y,I.mipmaps[0].width,I.mipmaps[0].height,Se,I.mipmaps[0].data):G.texSubImage2D(3553,F,M.x,M.y,Se,Ae,I.image),F===0&&k.generateMipmaps&&G.generateMipmap(3553),de.unbindTexture()},this.copyTextureToTexture3D=function(M,I,k,F,W=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=M.max.x-M.min.x+1,Se=M.max.y-M.min.y+1,Ae=M.max.z-M.min.z+1,Te=y.convert(F.format),ze=y.convert(F.type);let Re;if(F.isData3DTexture)xe.setTexture3D(F,0),Re=32879;else if(F.isDataArrayTexture)xe.setTexture2DArray(F,0),Re=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,F.flipY),G.pixelStorei(37441,F.premultiplyAlpha),G.pixelStorei(3317,F.unpackAlignment);const Pe=G.getParameter(3314),He=G.getParameter(32878),yn=G.getParameter(3316),Vn=G.getParameter(3315),Gn=G.getParameter(32877),zt=k.isCompressedTexture?k.mipmaps[0]:k.image;G.pixelStorei(3314,zt.width),G.pixelStorei(32878,zt.height),G.pixelStorei(3316,M.min.x),G.pixelStorei(3315,M.min.y),G.pixelStorei(32877,M.min.z),k.isDataTexture||k.isData3DTexture?G.texSubImage3D(Re,W,I.x,I.y,I.z,ve,Se,Ae,Te,ze,zt.data):k.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Re,W,I.x,I.y,I.z,ve,Se,Ae,Te,zt.data)):G.texSubImage3D(Re,W,I.x,I.y,I.z,ve,Se,Ae,Te,ze,zt),G.pixelStorei(3314,Pe),G.pixelStorei(32878,He),G.pixelStorei(3316,yn),G.pixelStorei(3315,Vn),G.pixelStorei(32877,Gn),W===0&&F.generateMipmaps&&G.generateMipmap(Re),de.unbindTexture()},this.initTexture=function(M){xe.setTexture2D(M,0),de.unbindTexture()},this.resetState=function(){_=0,b=0,C=null,de.reset(),Z.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class im extends dl{}im.prototype.isWebGL1Renderer=!0;class sm extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class rm extends st{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class fl extends st{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}class am extends st{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}new P;new P;new P;new P;new Wt;class Ss extends xn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new P,f=new P,m=[],g=[],d=[],p=[];for(let _=0;_<=n;_++){const b=[],C=_/n;let E=0;_==0&&a==0?E=.5/t:_==n&&c==Math.PI&&(E=-.5/t);for(let S=0;S<=t;S++){const T=S/t;h.x=-e*Math.cos(s+T*r)*Math.sin(a+C*o),h.y=e*Math.cos(a+C*o),h.z=e*Math.sin(s+T*r)*Math.sin(a+C*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),d.push(f.x,f.y,f.z),p.push(T+E,1-C),b.push(l++)}u.push(b)}for(let _=0;_<n;_++)for(let b=0;b<t;b++){const C=u[_][b+1],E=u[_][b],S=u[_+1][b],T=u[_+1][b+1];(_!==0||a>0)&&m.push(C,E,T),(_!==n-1||c<Math.PI)&&m.push(E,S,T)}this.setIndex(m),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(d,3)),this.setAttribute("uv",new Yt(p,2))}static fromJSON(e){return new Ss(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class om extends st{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ee(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class lm extends Zt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class pl extends st{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xi,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cm extends pl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new we(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class um extends st{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ee(16777215),this.specular=new Ee(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xi,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ts,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hm extends st{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ee(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xi,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class dm extends st{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xi,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class fm extends st{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ts,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class pm extends st{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ee(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xi,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mm extends fl{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const gm={ShadowMaterial:om,SpriteMaterial:rm,RawShaderMaterial:lm,ShaderMaterial:Zt,PointsMaterial:am,MeshPhysicalMaterial:cm,MeshStandardMaterial:pl,MeshPhongMaterial:um,MeshToonMaterial:hm,MeshNormalMaterial:dm,MeshLambertMaterial:fm,MeshDepthMaterial:ul,MeshDistanceMaterial:hl,MeshBasicMaterial:Ui,MeshMatcapMaterial:pm,LineDashedMaterial:mm,LineBasicMaterial:fl,Material:st};st.fromType=function(i){return new gm[i]};const yo={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class _m{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const m=l[h],g=l[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const vm=new _m;class ml{constructor(e){this.manager=e!==void 0?e:vm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class xm extends ml{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=yo.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=ki("img");function c(){u(),yo.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class ym extends ml{constructor(e){super(e)}load(e,t,n,s){const r=new St,a=new xm(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}const gl="\\[\\]\\.:\\/",jr="[^"+gl+"]",bm="[^"+gl.replace("\\.","")+"]";/((?:WC+[\/:])*)/.source.replace("WC",jr);/(WCOD+)?/.source.replace("WCOD",bm);/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jr);/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jr);class bo{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ut(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Vt=new Uint32Array(512),Gt=new Uint32Array(512);for(let i=0;i<256;++i){const e=i-127;e<-27?(Vt[i]=0,Vt[i|256]=32768,Gt[i]=24,Gt[i|256]=24):e<-14?(Vt[i]=1024>>-e-14,Vt[i|256]=1024>>-e-14|32768,Gt[i]=-e-1,Gt[i|256]=-e-1):e<=15?(Vt[i]=e+15<<10,Vt[i|256]=e+15<<10|32768,Gt[i]=13,Gt[i|256]=13):e<128?(Vt[i]=31744,Vt[i|256]=64512,Gt[i]=24,Gt[i|256]=24):(Vt[i]=31744,Vt[i|256]=64512,Gt[i]=13,Gt[i|256]=13)}const _l=new Uint32Array(2048),Wi=new Uint32Array(64),Mm=new Uint32Array(64);for(let i=1;i<1024;++i){let e=i<<13,t=0;for(;(e&8388608)===0;)e<<=1,t-=8388608;e&=-8388609,t+=947912704,_l[i]=e|t}for(let i=1024;i<2048;++i)_l[i]=939524096+(i-1024<<13);for(let i=1;i<31;++i)Wi[i]=i<<23;Wi[31]=1199570944;Wi[32]=2147483648;for(let i=33;i<63;++i)Wi[i]=2147483648+(i-32<<23);Wi[63]=3347054592;for(let i=1;i<64;++i)i!==32&&(Mm[i]=1024);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hr}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hr);const Mo={type:"change"},fr={type:"start"},So={type:"end"};class Sm extends Bn{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wn.ROTATE,MIDDLE:Wn.DOLLY,RIGHT:Wn.PAN},this.touches={ONE:qn.ROTATE,TWO:qn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(y){y.addEventListener("keydown",xt),this._domElementKeyEvents=y},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Mo),n.update(),r=s.NONE},this.update=function(){const y=new P,Z=new kn().setFromUnitVectors(e.up,new P(0,1,0)),oe=Z.clone().invert(),ne=new P,A=new kn,ie=2*Math.PI;return function(){const ge=n.object.position;y.copy(ge).sub(n.target),y.applyQuaternion(Z),o.setFromVector3(y),n.autoRotate&&r===s.NONE&&L(R()),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let ue=n.minAzimuthAngle,pe=n.maxAzimuthAngle;return isFinite(ue)&&isFinite(pe)&&(ue<-Math.PI?ue+=ie:ue>Math.PI&&(ue-=ie),pe<-Math.PI?pe+=ie:pe>Math.PI&&(pe-=ie),ue<=pe?o.theta=Math.max(ue,Math.min(pe,o.theta)):o.theta=o.theta>(ue+pe)/2?Math.max(ue,o.theta):Math.min(pe,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=l,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),y.setFromSpherical(o),y.applyQuaternion(oe),ge.copy(n.target).add(y),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,h||ne.distanceToSquared(n.object.position)>a||8*(1-A.dot(n.object.quaternion))>a?(n.dispatchEvent(Mo),ne.copy(n.object.position),A.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",V),n.domElement.removeEventListener("pointerdown",Ye),n.domElement.removeEventListener("pointercancel",mt),n.domElement.removeEventListener("wheel",vt),n.domElement.removeEventListener("pointermove",Ke),n.domElement.removeEventListener("pointerup",et),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",xt)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const a=1e-6,o=new bo,c=new bo;let l=1;const u=new P;let h=!1;const f=new we,m=new we,g=new we,d=new we,p=new we,_=new we,b=new we,C=new we,E=new we,S=[],T={};function R(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function L(y){c.theta-=y}function N(y){c.phi-=y}const z=function(){const y=new P;return function(oe,ne){y.setFromMatrixColumn(ne,0),y.multiplyScalar(-oe),u.add(y)}}(),ce=function(){const y=new P;return function(oe,ne){n.screenSpacePanning===!0?y.setFromMatrixColumn(ne,1):(y.setFromMatrixColumn(ne,0),y.crossVectors(n.object.up,y)),y.multiplyScalar(oe),u.add(y)}}(),Q=function(){const y=new P;return function(oe,ne){const A=n.domElement;if(n.object.isPerspectiveCamera){const ie=n.object.position;y.copy(ie).sub(n.target);let te=y.length();te*=Math.tan(n.object.fov/2*Math.PI/180),z(2*oe*te/A.clientHeight,n.object.matrix),ce(2*ne*te/A.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(z(oe*(n.object.right-n.object.left)/n.object.zoom/A.clientWidth,n.object.matrix),ce(ne*(n.object.top-n.object.bottom)/n.object.zoom/A.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function D(y){n.object.isPerspectiveCamera?l/=y:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*y)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(y){n.object.isPerspectiveCamera?l*=y:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/y)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(y){f.set(y.clientX,y.clientY)}function j(y){b.set(y.clientX,y.clientY)}function Y(y){d.set(y.clientX,y.clientY)}function U(y){m.set(y.clientX,y.clientY),g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const Z=n.domElement;L(2*Math.PI*g.x/Z.clientHeight),N(2*Math.PI*g.y/Z.clientHeight),f.copy(m),n.update()}function q(y){C.set(y.clientX,y.clientY),E.subVectors(C,b),E.y>0?D(v()):E.y<0&&X(v()),b.copy(C),n.update()}function re(y){p.set(y.clientX,y.clientY),_.subVectors(p,d).multiplyScalar(n.panSpeed),Q(_.x,_.y),d.copy(p),n.update()}function K(y){y.deltaY<0?X(v()):y.deltaY>0&&D(v()),n.update()}function ee(y){let Z=!1;switch(y.code){case n.keys.UP:Q(0,n.keyPanSpeed),Z=!0;break;case n.keys.BOTTOM:Q(0,-n.keyPanSpeed),Z=!0;break;case n.keys.LEFT:Q(n.keyPanSpeed,0),Z=!0;break;case n.keys.RIGHT:Q(-n.keyPanSpeed,0),Z=!0;break}Z&&(y.preventDefault(),n.update())}function fe(){if(S.length===1)f.set(S[0].pageX,S[0].pageY);else{const y=.5*(S[0].pageX+S[1].pageX),Z=.5*(S[0].pageY+S[1].pageY);f.set(y,Z)}}function me(){if(S.length===1)d.set(S[0].pageX,S[0].pageY);else{const y=.5*(S[0].pageX+S[1].pageX),Z=.5*(S[0].pageY+S[1].pageY);d.set(y,Z)}}function G(){const y=S[0].pageX-S[1].pageX,Z=S[0].pageY-S[1].pageY,oe=Math.sqrt(y*y+Z*Z);b.set(0,oe)}function ke(){n.enableZoom&&G(),n.enablePan&&me()}function Me(){n.enableZoom&&G(),n.enableRotate&&fe()}function be(y){if(S.length==1)m.set(y.pageX,y.pageY);else{const oe=_e(y),ne=.5*(y.pageX+oe.x),A=.5*(y.pageY+oe.y);m.set(ne,A)}g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const Z=n.domElement;L(2*Math.PI*g.x/Z.clientHeight),N(2*Math.PI*g.y/Z.clientHeight),f.copy(m)}function de(y){if(S.length===1)p.set(y.pageX,y.pageY);else{const Z=_e(y),oe=.5*(y.pageX+Z.x),ne=.5*(y.pageY+Z.y);p.set(oe,ne)}_.subVectors(p,d).multiplyScalar(n.panSpeed),Q(_.x,_.y),d.copy(p)}function De(y){const Z=_e(y),oe=y.pageX-Z.x,ne=y.pageY-Z.y,A=Math.sqrt(oe*oe+ne*ne);C.set(0,A),E.set(0,Math.pow(C.y/b.y,n.zoomSpeed)),D(E.y),b.copy(C)}function Ce(y){n.enableZoom&&De(y),n.enablePan&&de(y)}function xe(y){n.enableZoom&&De(y),n.enableRotate&&be(y)}function Ye(y){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(y.pointerId),n.domElement.addEventListener("pointermove",Ke),n.domElement.addEventListener("pointerup",et)),J(y),y.pointerType==="touch"?w(y):$e(y))}function Ke(y){n.enabled!==!1&&(y.pointerType==="touch"?x(y):Oe(y))}function et(y){ae(y),S.length===0&&(n.domElement.releasePointerCapture(y.pointerId),n.domElement.removeEventListener("pointermove",Ke),n.domElement.removeEventListener("pointerup",et)),n.dispatchEvent(So),r=s.NONE}function mt(y){ae(y)}function $e(y){let Z;switch(y.button){case 0:Z=n.mouseButtons.LEFT;break;case 1:Z=n.mouseButtons.MIDDLE;break;case 2:Z=n.mouseButtons.RIGHT;break;default:Z=-1}switch(Z){case Wn.DOLLY:if(n.enableZoom===!1)return;j(y),r=s.DOLLY;break;case Wn.ROTATE:if(y.ctrlKey||y.metaKey||y.shiftKey){if(n.enablePan===!1)return;Y(y),r=s.PAN}else{if(n.enableRotate===!1)return;B(y),r=s.ROTATE}break;case Wn.PAN:if(y.ctrlKey||y.metaKey||y.shiftKey){if(n.enableRotate===!1)return;B(y),r=s.ROTATE}else{if(n.enablePan===!1)return;Y(y),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(fr)}function Oe(y){if(n.enabled!==!1)switch(r){case s.ROTATE:if(n.enableRotate===!1)return;U(y);break;case s.DOLLY:if(n.enableZoom===!1)return;q(y);break;case s.PAN:if(n.enablePan===!1)return;re(y);break}}function vt(y){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(y.preventDefault(),n.dispatchEvent(fr),K(y),n.dispatchEvent(So))}function xt(y){n.enabled===!1||n.enablePan===!1||ee(y)}function w(y){switch(he(y),S.length){case 1:switch(n.touches.ONE){case qn.ROTATE:if(n.enableRotate===!1)return;fe(),r=s.TOUCH_ROTATE;break;case qn.PAN:if(n.enablePan===!1)return;me(),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case qn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ke(),r=s.TOUCH_DOLLY_PAN;break;case qn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Me(),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(fr)}function x(y){switch(he(y),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;be(y),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;de(y),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ce(y),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xe(y),n.update();break;default:r=s.NONE}}function V(y){n.enabled!==!1&&y.preventDefault()}function J(y){S.push(y)}function ae(y){delete T[y.pointerId];for(let Z=0;Z<S.length;Z++)if(S[Z].pointerId==y.pointerId){S.splice(Z,1);return}}function he(y){let Z=T[y.pointerId];Z===void 0&&(Z=new we,T[y.pointerId]=Z),Z.set(y.pageX,y.pageY)}function _e(y){const Z=y.pointerId===S[0].pointerId?S[1]:S[0];return T[Z.pointerId]}n.domElement.addEventListener("contextmenu",V),n.domElement.addEventListener("pointerdown",Ye),n.domElement.addEventListener("pointercancel",mt),n.domElement.addEventListener("wheel",vt,{passive:!1}),this.update()}}function pr(i,e){i.split(/\s+/).forEach(t=>{e(t)})}class wm{constructor(){this._events=void 0,this._events={}}on(e,t){pr(e,n=>{this._events[n]=this._events[n]||[],this._events[n].push(t)})}off(e,t){var n=arguments.length;if(n===0){this._events={};return}pr(e,s=>{if(n===1)return delete this._events[s];s in this._events&&this._events[s].splice(this._events[s].indexOf(t),1)})}trigger(e,...t){var n=this;pr(e,s=>{if(s in n._events)for(let r of n._events[s])r.apply(n,t)})}}function Em(i){return i.plugins={},class extends i{constructor(...e){super(...e),this.plugins={names:[],settings:{},requested:{},loaded:{}}}static define(e,t){i.plugins[e]={name:e,fn:t}}initializePlugins(e){var t,n;const s=this,r=[];if(Array.isArray(e))e.forEach(a=>{typeof a=="string"?r.push(a):(s.plugins.settings[a.name]=a.options,r.push(a.name))});else if(e)for(t in e)e.hasOwnProperty(t)&&(s.plugins.settings[t]=e[t],r.push(t));for(;n=r.shift();)s.require(n)}loadPlugin(e){var t=this,n=t.plugins,s=i.plugins[e];if(!i.plugins.hasOwnProperty(e))throw new Error('Unable to find "'+e+'" plugin');n.requested[e]=!0,n.loaded[e]=s.fn.apply(t,[t.plugins.settings[e]||{}]),n.names.push(e)}require(e){var t=this,n=t.plugins;if(!t.plugins.loaded.hasOwnProperty(e)){if(n.requested[e])throw new Error('Plugin has circular dependency ("'+e+'")');t.loadPlugin(e)}return n.loaded[e]}}}var vl;const xl="[\u0300-\u036F\xB7\u02BE]",Tm=new RegExp(xl,"g");var ms;const yl={\u00E6:"ae","\u2C65":"a",\u00F8:"o"},Am=new RegExp(Object.keys(yl).join("|"),"g"),Cm=[[67,67],[160,160],[192,438],[452,652],[961,961],[1019,1019],[1083,1083],[1281,1289],[1984,1984],[5095,5095],[7429,7441],[7545,7549],[7680,7935],[8580,8580],[9398,9449],[11360,11391],[42792,42793],[42802,42851],[42873,42897],[42912,42922],[64256,64260],[65313,65338],[65345,65370]],ws=i=>i.normalize("NFKD").replace(Tm,"").toLowerCase().replace(Am,function(e){return yl[e]}),ci=(i,e="|")=>{if(i.length==1)return i[0];var t=1;return i.forEach(n=>{t=Math.max(t,n.length)}),t==1?"["+i.join("")+"]":"(?:"+i.join(e)+")"},bl=i=>{if(i.length===1)return[[i]];var e=[];return bl(i.substring(1)).forEach(function(t){var n=t.slice(0);n[0]=i.charAt(0)+n[0],e.push(n),n=t.slice(0),n.unshift(i.charAt(0)),e.push(n)}),e},Lm=()=>{var i={};Cm.forEach(n=>{for(let r=n[0];r<=n[1];r++){let a=String.fromCharCode(r),o=ws(a);if(o!=a.toLowerCase()){o in i||(i[o]=[o]);var s=new RegExp(ci(i[o]),"iu");a.match(s)||i[o].push(a)}}});var e=Object.keys(i);e=e.sort((n,s)=>s.length-n.length),vl=new RegExp("("+ci(e)+xl+"*)","g");var t={};return e.sort((n,s)=>n.length-s.length).forEach(n=>{var s=bl(n),r=s.map(a=>(a=a.map(o=>i.hasOwnProperty(o)?ci(i[o]):o),ci(a,"")));t[n]=ci(r)}),t},Rm=i=>(ms===void 0&&(ms=Lm()),i.normalize("NFKD").toLowerCase().split(vl).map(t=>{if(t=="")return"";const n=ws(t);if(ms.hasOwnProperty(n))return ms[n];const s=t.normalize("NFC");return s!=t?ci([t,s]):t}).join("")),Pm=(i,e)=>{if(!!i)return i[e]},Dm=(i,e)=>{if(!!i){for(var t,n=e.split(".");(t=n.shift())&&(i=i[t]););return i}},mr=(i,e,t)=>{var n,s;return!i||(i=i+"",s=i.search(e.regex),s===-1)?0:(n=e.string.length/i.length,s===0&&(n+=.5),n*t)},Ir=i=>(i+"").replace(/([\$\(-\+\.\?\[-\^\{-\}])/g,"\\$1"),gr=(i,e)=>{var t=i[e];if(typeof t=="function")return t;t&&!Array.isArray(t)&&(i[e]=[t])},qe=(i,e)=>{if(Array.isArray(i))i.forEach(e);else for(var t in i)i.hasOwnProperty(t)&&e(i[t],t)},wo=(i,e)=>typeof i=="number"&&typeof e=="number"?i>e?1:i<e?-1:0:(i=ws(i+"").toLowerCase(),e=ws(e+"").toLowerCase(),i>e?1:e>i?-1:0);class Im{constructor(e,t){this.items=void 0,this.settings=void 0,this.items=e,this.settings=t||{diacritics:!0}}tokenize(e,t,n){if(!e||!e.length)return[];const s=[],r=e.split(/\s+/);var a;return n&&(a=new RegExp("^("+Object.keys(n).map(Ir).join("|")+"):(.*)$")),r.forEach(o=>{let c,l=null,u=null;a&&(c=o.match(a))&&(l=c[1],o=c[2]),o.length>0&&(u=Ir(o),this.settings.diacritics&&(u=Rm(u)),t&&(u="\\b"+u)),s.push({string:o,regex:u?new RegExp(u,"iu"):null,field:l})}),s}getScoreFunction(e,t){var n=this.prepareSearch(e,t);return this._getScoreFunction(n)}_getScoreFunction(e){const t=e.tokens,n=t.length;if(!n)return function(){return 0};const s=e.options.fields,r=e.weights,a=s.length,o=e.getAttrFn;if(!a)return function(){return 1};const c=function(){return a===1?function(l,u){const h=s[0].field;return mr(o(u,h),l,r[h])}:function(l,u){var h=0;if(l.field){const f=o(u,l.field);!l.regex&&f?h+=1/a:h+=mr(f,l,1)}else qe(r,(f,m)=>{h+=mr(o(u,m),l,f)});return h/a}}();return n===1?function(l){return c(t[0],l)}:e.options.conjunction==="and"?function(l){for(var u=0,h,f=0;u<n;u++){if(h=c(t[u],l),h<=0)return 0;f+=h}return f/n}:function(l){var u=0;return qe(t,h=>{u+=c(h,l)}),u/n}}getSortFunction(e,t){var n=this.prepareSearch(e,t);return this._getSortFunction(n)}_getSortFunction(e){var t,n,s;const r=this,a=e.options,o=!e.query&&a.sort_empty?a.sort_empty:a.sort,c=[],l=[];if(typeof o=="function")return o.bind(this);const u=function(m,g){return m==="$score"?g.score:e.getAttrFn(r.items[g.id],m)};if(o)for(t=0,n=o.length;t<n;t++)(e.query||o[t].field!=="$score")&&c.push(o[t]);if(e.query){for(s=!0,t=0,n=c.length;t<n;t++)if(c[t].field==="$score"){s=!1;break}s&&c.unshift({field:"$score",direction:"desc"})}else for(t=0,n=c.length;t<n;t++)if(c[t].field==="$score"){c.splice(t,1);break}for(t=0,n=c.length;t<n;t++)l.push(c[t].direction==="desc"?-1:1);const h=c.length;if(h)if(h===1){const f=c[0].field,m=l[0];return function(g,d){return m*wo(u(f,g),u(f,d))}}else return function(f,m){var g,d,p;for(g=0;g<h;g++)if(p=c[g].field,d=l[g]*wo(u(p,f),u(p,m)),d)return d;return 0};else return null}prepareSearch(e,t){const n={};var s=Object.assign({},t);if(gr(s,"sort"),gr(s,"sort_empty"),s.fields){gr(s,"fields");const r=[];s.fields.forEach(a=>{typeof a=="string"&&(a={field:a,weight:1}),r.push(a),n[a.field]="weight"in a?a.weight:1}),s.fields=r}return{options:s,query:e.toLowerCase().trim(),tokens:this.tokenize(e,s.respect_word_boundaries,n),total:0,items:[],weights:n,getAttrFn:s.nesting?Dm:Pm}}search(e,t){var n=this,s,r;r=this.prepareSearch(e,t),t=r.options,e=r.query;const a=t.score||n._getScoreFunction(r);e.length?qe(n.items,(c,l)=>{s=a(c),(t.filter===!1||s>0)&&r.items.push({score:s,id:l})}):qe(n.items,(c,l)=>{r.items.push({score:1,id:l})});const o=n._getSortFunction(r);return o&&r.items.sort(o),r.total=r.items.length,typeof t.limit=="number"&&(r.items=r.items.slice(0,t.limit)),r}}const nt=i=>{if(i.jquery)return i[0];if(i instanceof HTMLElement)return i;if(Ml(i)){let e=document.createElement("div");return e.innerHTML=i.trim(),e.firstChild}return document.querySelector(i)},Ml=i=>typeof i=="string"&&i.indexOf("<")>-1,Om=i=>i.replace(/['"\\]/g,"\\$&"),_r=(i,e)=>{var t=document.createEvent("HTMLEvents");t.initEvent(e,!0,!1),i.dispatchEvent(t)},gs=(i,e)=>{Object.assign(i.style,e)},ct=(i,...e)=>{var t=Sl(e);i=wl(i),i.map(n=>{t.map(s=>{n.classList.add(s)})})},nn=(i,...e)=>{var t=Sl(e);i=wl(i),i.map(n=>{t.map(s=>{n.classList.remove(s)})})},Sl=i=>{var e=[];return qe(i,t=>{typeof t=="string"&&(t=t.trim().split(/[\11\12\14\15\40]/)),Array.isArray(t)&&(e=e.concat(t))}),e.filter(Boolean)},wl=i=>(Array.isArray(i)||(i=[i]),i),Or=(i,e,t)=>{if(!(t&&!t.contains(i)))for(;i&&i.matches;){if(i.matches(e))return i;i=i.parentNode}},Eo=(i,e=0)=>e>0?i[i.length-1]:i[0],Fm=i=>Object.keys(i).length===0,Es=(i,e)=>{if(!i)return-1;e=e||i.nodeName;for(var t=0;i=i.previousElementSibling;)i.matches(e)&&t++;return t},Ve=(i,e)=>{qe(e,(t,n)=>{t==null?i.removeAttribute(n):i.setAttribute(n,""+t)})},Fr=(i,e)=>{i.parentNode&&i.parentNode.replaceChild(e,i)},Nm=(i,e)=>{if(e===null)return;if(typeof e=="string"){if(!e.length)return;e=new RegExp(e,"i")}const t=r=>{var a=r.data.match(e);if(a&&r.data.length>0){var o=document.createElement("span");o.className="highlight";var c=r.splitText(a.index);c.splitText(a[0].length);var l=c.cloneNode(!0);return o.appendChild(l),Fr(c,o),1}return 0},n=r=>{if(r.nodeType===1&&r.childNodes&&!/(script|style)/i.test(r.tagName)&&(r.className!=="highlight"||r.tagName!=="SPAN"))for(var a=0;a<r.childNodes.length;++a)a+=s(r.childNodes[a])},s=r=>r.nodeType===3?t(r):(n(r),0);s(i)},zm=i=>{var e=i.querySelectorAll("span.highlight");Array.prototype.forEach.call(e,function(t){var n=t.parentNode;n.replaceChild(t.firstChild,t),n.normalize()})},km=65,Um=13,El=27,Nr=37,Bm=38,Tl=39,Vm=40,To=8,Gm=46,zr=9,Hm=typeof navigator=="undefined"?!1:/Mac/.test(navigator.userAgent),_s=Hm?"metaKey":"ctrlKey";var Ao={options:[],optgroups:[],plugins:[],delimiter:",",splitOn:null,persist:!0,diacritics:!0,create:null,createOnBlur:!1,createFilter:null,highlight:!0,openOnFocus:!0,shouldOpen:null,maxOptions:50,maxItems:null,hideSelected:null,duplicates:!1,addPrecedence:!1,selectOnTab:!1,preload:null,allowEmptyOption:!1,loadThrottle:300,loadingClass:"loading",dataAttr:null,optgroupField:"optgroup",valueField:"value",labelField:"text",disabledField:"disabled",optgroupLabelField:"label",optgroupValueField:"value",lockOptgroupOrder:!1,sortField:"$order",searchField:["text"],searchConjunction:"and",mode:null,wrapperClass:"ts-wrapper",controlClass:"ts-control",dropdownClass:"ts-dropdown",dropdownContentClass:"ts-dropdown-content",itemClass:"item",optionClass:"option",dropdownParent:null,controlInput:'<input type="text" autocomplete="off" size="1" />',copyClassesToDropdown:!1,placeholder:null,hidePlaceholder:null,shouldLoad:function(i){return i.length>0},render:{}};const Lt=i=>typeof i=="undefined"||i===null?null:kr(i),kr=i=>typeof i=="boolean"?i?"1":"0":i+"",ys=i=>(i+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),Wm=(i,e)=>{var t;return function(n,s){var r=this;t&&(r.loading=Math.max(r.loading-1,0),clearTimeout(t)),t=setTimeout(function(){t=null,r.loadedSearches[n]=!0,i.call(r,n,s)},e)}},Co=(i,e,t)=>{var n,s=i.trigger,r={};i.trigger=function(){var a=arguments[0];if(e.indexOf(a)!==-1)r[a]=arguments;else return s.apply(i,arguments)},t.apply(i,[]),i.trigger=s;for(n of e)n in r&&s.apply(i,r[n])},qm=i=>({start:i.selectionStart||0,length:(i.selectionEnd||0)-(i.selectionStart||0)}),Ue=(i,e=!1)=>{i&&(i.preventDefault(),e&&i.stopPropagation())},We=(i,e,t,n)=>{i.addEventListener(e,t,n)},wn=(i,e)=>{if(!e||!e[i])return!1;var t=(e.altKey?1:0)+(e.ctrlKey?1:0)+(e.shiftKey?1:0)+(e.metaKey?1:0);return t===1},vr=(i,e)=>{const t=i.getAttribute("id");return t||(i.setAttribute("id",e),e)},Lo=i=>i.replace(/[\\"']/g,"\\$&"),En=(i,e)=>{e&&i.append(e)};function Ro(i,e){var t=Object.assign({},Ao,e),n=t.dataAttr,s=t.labelField,r=t.valueField,a=t.disabledField,o=t.optgroupField,c=t.optgroupLabelField,l=t.optgroupValueField,u=i.tagName.toLowerCase(),h=i.getAttribute("placeholder")||i.getAttribute("data-placeholder");if(!h&&!t.allowEmptyOption){let d=i.querySelector('option[value=""]');d&&(h=d.textContent)}var f={placeholder:h,options:[],optgroups:[],items:[],maxItems:null},m=()=>{var d,p=f.options,_={},b=1,C=T=>{var R=Object.assign({},T.dataset),v=n&&R[n];return typeof v=="string"&&v.length&&(R=Object.assign(R,JSON.parse(v))),R},E=(T,R)=>{var v=Lt(T.value);if(v!=null&&!(!v&&!t.allowEmptyOption)){if(_.hasOwnProperty(v)){if(R){var L=_[v][o];L?Array.isArray(L)?L.push(R):_[v][o]=[L,R]:_[v][o]=R}}else{var N=C(T);N[s]=N[s]||T.textContent,N[r]=N[r]||v,N[a]=N[a]||T.disabled,N[o]=N[o]||R,N.$option=T,_[v]=N,p.push(N)}T.selected&&f.items.push(v)}},S=T=>{var R,v;v=C(T),v[c]=v[c]||T.getAttribute("label")||"",v[l]=v[l]||b++,v[a]=v[a]||T.disabled,f.optgroups.push(v),R=v[l],qe(T.children,L=>{E(L,R)})};f.maxItems=i.hasAttribute("multiple")?null:1,qe(i.children,T=>{d=T.tagName.toLowerCase(),d==="optgroup"?S(T):d==="option"&&E(T)})},g=()=>{const d=i.getAttribute(n);if(d)f.options=JSON.parse(d),qe(f.options,_=>{f.items.push(_[r])});else{var p=i.value.trim()||"";if(!t.allowEmptyOption&&!p.length)return;const _=p.split(t.delimiter);qe(_,b=>{const C={};C[s]=b,C[r]=b,f.options.push(C)}),f.items=_}};return u==="select"?m():g(),Object.assign({},Ao,f,e)}var Po=0;class ft extends Em(wm){constructor(e,t){super(),this.control_input=void 0,this.wrapper=void 0,this.dropdown=void 0,this.control=void 0,this.dropdown_content=void 0,this.focus_node=void 0,this.order=0,this.settings=void 0,this.input=void 0,this.tabIndex=void 0,this.is_select_tag=void 0,this.rtl=void 0,this.inputId=void 0,this._destroy=void 0,this.sifter=void 0,this.isOpen=!1,this.isDisabled=!1,this.isRequired=void 0,this.isInvalid=!1,this.isValid=!0,this.isLocked=!1,this.isFocused=!1,this.isInputHidden=!1,this.isSetup=!1,this.ignoreFocus=!1,this.hasOptions=!1,this.currentResults=void 0,this.lastValue="",this.caretPos=0,this.loading=0,this.loadedSearches={},this.activeOption=null,this.activeItems=[],this.optgroups={},this.options={},this.userOptions={},this.items=[],Po++;var n,s=nt(e);if(s.tomselect)throw new Error("Tom Select already initialized on this element");s.tomselect=this;var r=window.getComputedStyle&&window.getComputedStyle(s,null);n=r.getPropertyValue("direction");const a=Ro(s,t);this.settings=a,this.input=s,this.tabIndex=s.tabIndex||0,this.is_select_tag=s.tagName.toLowerCase()==="select",this.rtl=/rtl/i.test(n),this.inputId=vr(s,"tomselect-"+Po),this.isRequired=s.required,this.sifter=new Im(this.options,{diacritics:a.diacritics}),a.mode=a.mode||(a.maxItems===1?"single":"multi"),typeof a.hideSelected!="boolean"&&(a.hideSelected=a.mode==="multi"),typeof a.hidePlaceholder!="boolean"&&(a.hidePlaceholder=a.mode!=="multi");var o=a.createFilter;typeof o!="function"&&(typeof o=="string"&&(o=new RegExp(o)),o instanceof RegExp?a.createFilter=p=>o.test(p):a.createFilter=p=>this.settings.duplicates||!this.options[p]),this.initializePlugins(a.plugins),this.setupCallbacks(),this.setupTemplates();const c=nt("<div>"),l=nt("<div>"),u=this._render("dropdown"),h=nt('<div role="listbox" tabindex="-1">'),f=this.input.getAttribute("class")||"",m=a.mode;var g;if(ct(c,a.wrapperClass,f,m),ct(l,a.controlClass),En(c,l),ct(u,a.dropdownClass,m),a.copyClassesToDropdown&&ct(u,f),ct(h,a.dropdownContentClass),En(u,h),nt(a.dropdownParent||c).appendChild(u),Ml(a.controlInput)){g=nt(a.controlInput);var d=["autocorrect","autocapitalize","autocomplete"];qe(d,p=>{s.getAttribute(p)&&Ve(g,{[p]:s.getAttribute(p)})}),g.tabIndex=-1,l.appendChild(g),this.focus_node=g}else a.controlInput?(g=nt(a.controlInput),this.focus_node=g):(g=nt("<input/>"),this.focus_node=l);this.wrapper=c,this.dropdown=u,this.dropdown_content=h,this.control=l,this.control_input=g,this.setup()}setup(){const e=this,t=e.settings,n=e.control_input,s=e.dropdown,r=e.dropdown_content,a=e.wrapper,o=e.control,c=e.input,l=e.focus_node,u={passive:!0},h=e.inputId+"-ts-dropdown";Ve(r,{id:h}),Ve(l,{role:"combobox","aria-haspopup":"listbox","aria-expanded":"false","aria-controls":h});const f=vr(l,e.inputId+"-ts-control"),m="label[for='"+Om(e.inputId)+"']",g=document.querySelector(m),d=e.focus.bind(e);if(g){We(g,"click",d),Ve(g,{for:f});const b=vr(g,e.inputId+"-ts-label");Ve(l,{"aria-labelledby":b}),Ve(r,{"aria-labelledby":b})}if(a.style.width=c.style.width,e.plugins.names.length){const b="plugin-"+e.plugins.names.join(" plugin-");ct([a,s],b)}(t.maxItems===null||t.maxItems>1)&&e.is_select_tag&&Ve(c,{multiple:"multiple"}),t.placeholder&&Ve(n,{placeholder:t.placeholder}),!t.splitOn&&t.delimiter&&(t.splitOn=new RegExp("\\s*"+Ir(t.delimiter)+"+\\s*")),t.load&&t.loadThrottle&&(t.load=Wm(t.load,t.loadThrottle)),e.control_input.type=c.type,We(s,"click",b=>{const C=Or(b.target,"[data-selectable]");C&&(e.onOptionSelect(b,C),Ue(b,!0))}),We(o,"click",b=>{var C=Or(b.target,"[data-ts-item]",o);if(C&&e.onItemSelect(b,C)){Ue(b,!0);return}n.value==""&&(e.onClick(),Ue(b,!0))}),We(l,"keydown",b=>e.onKeyDown(b)),We(n,"keypress",b=>e.onKeyPress(b)),We(n,"input",b=>e.onInput(b)),We(l,"resize",()=>e.positionDropdown(),u),We(l,"blur",b=>e.onBlur(b)),We(l,"focus",b=>e.onFocus(b)),We(l,"paste",b=>e.onPaste(b));const p=b=>{const C=b.composedPath()[0];if(!a.contains(C)&&!s.contains(C)){e.isFocused&&e.blur(),e.inputState();return}C==n&&e.isOpen?b.stopPropagation():Ue(b,!0)};var _=()=>{e.isOpen&&e.positionDropdown()};We(document,"mousedown",p),We(window,"scroll",_,u),We(window,"resize",_,u),this._destroy=()=>{document.removeEventListener("mousedown",p),window.removeEventListener("scroll",_),window.removeEventListener("resize",_),g&&g.removeEventListener("click",d)},this.revertSettings={innerHTML:c.innerHTML,tabIndex:c.tabIndex},c.tabIndex=-1,c.insertAdjacentElement("afterend",e.wrapper),e.sync(!1),t.items=[],delete t.optgroups,delete t.options,We(c,"invalid",b=>{e.isValid&&(e.isValid=!1,e.isInvalid=!0,e.refreshState())}),e.updateOriginalInput(),e.refreshItems(),e.close(!1),e.inputState(),e.isSetup=!0,c.disabled?e.disable():e.enable(),e.on("change",this.onChange),ct(c,"tomselected","ts-hidden-accessible"),e.trigger("initialize"),t.preload===!0&&e.preload()}setupOptions(e=[],t=[]){this.addOptions(e),qe(t,n=>{this.registerOptionGroup(n)})}setupTemplates(){var e=this,t=e.settings.labelField,n=e.settings.optgroupLabelField,s={optgroup:r=>{let a=document.createElement("div");return a.className="optgroup",a.appendChild(r.options),a},optgroup_header:(r,a)=>'<div class="optgroup-header">'+a(r[n])+"</div>",option:(r,a)=>"<div>"+a(r[t])+"</div>",item:(r,a)=>"<div>"+a(r[t])+"</div>",option_create:(r,a)=>'<div class="create">Add <strong>'+a(r.input)+"</strong>&hellip;</div>",no_results:()=>'<div class="no-results">No results found</div>',loading:()=>'<div class="spinner"></div>',not_loading:()=>{},dropdown:()=>"<div></div>"};e.settings.render=Object.assign({},s,e.settings.render)}setupCallbacks(){var e,t,n={initialize:"onInitialize",change:"onChange",item_add:"onItemAdd",item_remove:"onItemRemove",item_select:"onItemSelect",clear:"onClear",option_add:"onOptionAdd",option_remove:"onOptionRemove",option_clear:"onOptionClear",optgroup_add:"onOptionGroupAdd",optgroup_remove:"onOptionGroupRemove",optgroup_clear:"onOptionGroupClear",dropdown_open:"onDropdownOpen",dropdown_close:"onDropdownClose",type:"onType",load:"onLoad",focus:"onFocus",blur:"onBlur"};for(e in n)t=this.settings[n[e]],t&&this.on(e,t)}sync(e=!0){const t=this,n=e?Ro(t.input,{delimiter:t.settings.delimiter}):t.settings;t.setupOptions(n.options,n.optgroups),t.setValue(n.items||[],!0),t.lastQuery=null}onClick(){var e=this;if(e.activeItems.length>0){e.clearActiveItems(),e.focus();return}e.isFocused&&e.isOpen?e.blur():e.focus()}onMouseDown(){}onChange(){_r(this.input,"input"),_r(this.input,"change")}onPaste(e){var t=this;if(t.isInputHidden||t.isLocked){Ue(e);return}t.settings.splitOn&&setTimeout(()=>{var n=t.inputValue();if(!!n.match(t.settings.splitOn)){var s=n.trim().split(t.settings.splitOn);qe(s,r=>{t.createItem(r)})}},0)}onKeyPress(e){var t=this;if(t.isLocked){Ue(e);return}var n=String.fromCharCode(e.keyCode||e.which);if(t.settings.create&&t.settings.mode==="multi"&&n===t.settings.delimiter){t.createItem(),Ue(e);return}}onKeyDown(e){var t=this;if(t.isLocked){e.keyCode!==zr&&Ue(e);return}switch(e.keyCode){case km:if(wn(_s,e)&&t.control_input.value==""){Ue(e),t.selectAll();return}break;case El:t.isOpen&&(Ue(e,!0),t.close()),t.clearActiveItems();return;case Vm:if(!t.isOpen&&t.hasOptions)t.open();else if(t.activeOption){let n=t.getAdjacent(t.activeOption,1);n&&t.setActiveOption(n)}Ue(e);return;case Bm:if(t.activeOption){let n=t.getAdjacent(t.activeOption,-1);n&&t.setActiveOption(n)}Ue(e);return;case Um:t.canSelect(t.activeOption)?(t.onOptionSelect(e,t.activeOption),Ue(e)):t.settings.create&&t.createItem()&&Ue(e);return;case Nr:t.advanceSelection(-1,e);return;case Tl:t.advanceSelection(1,e);return;case zr:t.settings.selectOnTab&&(t.canSelect(t.activeOption)&&(t.onOptionSelect(e,t.activeOption),Ue(e)),t.settings.create&&t.createItem()&&Ue(e));return;case To:case Gm:t.deleteSelection(e);return}t.isInputHidden&&!wn(_s,e)&&Ue(e)}onInput(e){var t=this;if(!t.isLocked){var n=t.inputValue();t.lastValue!==n&&(t.lastValue=n,t.settings.shouldLoad.call(t,n)&&t.load(n),t.refreshOptions(),t.trigger("type",n))}}onFocus(e){var t=this,n=t.isFocused;if(t.isDisabled){t.blur(),Ue(e);return}t.ignoreFocus||(t.isFocused=!0,t.settings.preload==="focus"&&t.preload(),n||t.trigger("focus"),t.activeItems.length||(t.showInput(),t.refreshOptions(!!t.settings.openOnFocus)),t.refreshState())}onBlur(e){if(document.hasFocus()!==!1){var t=this;if(!!t.isFocused){t.isFocused=!1,t.ignoreFocus=!1;var n=()=>{t.close(),t.setActiveItem(),t.setCaret(t.items.length),t.trigger("blur")};t.settings.create&&t.settings.createOnBlur?t.createItem(null,!1,n):n()}}}onOptionSelect(e,t){var n,s=this;t.parentElement&&t.parentElement.matches("[data-disabled]")||(t.classList.contains("create")?s.createItem(null,!0,()=>{s.settings.closeAfterSelect&&s.close()}):(n=t.dataset.value,typeof n!="undefined"&&(s.lastQuery=null,s.addItem(n),s.settings.closeAfterSelect&&s.close(),!s.settings.hideSelected&&e.type&&/click/.test(e.type)&&s.setActiveOption(t))))}canSelect(e){return!!(this.isOpen&&e&&this.dropdown_content.contains(e))}onItemSelect(e,t){var n=this;return!n.isLocked&&n.settings.mode==="multi"?(Ue(e),n.setActiveItem(t,e),!0):!1}canLoad(e){return!(!this.settings.load||this.loadedSearches.hasOwnProperty(e))}load(e){const t=this;if(!t.canLoad(e))return;ct(t.wrapper,t.settings.loadingClass),t.loading++;const n=t.loadCallback.bind(t);t.settings.load.call(t,e,n)}loadCallback(e,t){const n=this;n.loading=Math.max(n.loading-1,0),n.lastQuery=null,n.clearActiveOption(),n.setupOptions(e,t),n.refreshOptions(n.isFocused&&!n.isInputHidden),n.loading||nn(n.wrapper,n.settings.loadingClass),n.trigger("load",e,t)}preload(){var e=this.wrapper.classList;e.contains("preloaded")||(e.add("preloaded"),this.load(""))}setTextboxValue(e=""){var t=this.control_input,n=t.value!==e;n&&(t.value=e,_r(t,"update"),this.lastValue=e)}getValue(){return this.is_select_tag&&this.input.hasAttribute("multiple")?this.items:this.items.join(this.settings.delimiter)}setValue(e,t){var n=t?[]:["change"];Co(this,n,()=>{this.clear(t),this.addItems(e,t)})}setMaxItems(e){e===0&&(e=null),this.settings.maxItems=e,this.refreshState()}setActiveItem(e,t){var n=this,s,r,a,o,c,l;if(n.settings.mode!=="single"){if(!e){n.clearActiveItems(),n.isFocused&&n.showInput();return}if(s=t&&t.type.toLowerCase(),s==="click"&&wn("shiftKey",t)&&n.activeItems.length){for(l=n.getLastActive(),a=Array.prototype.indexOf.call(n.control.children,l),o=Array.prototype.indexOf.call(n.control.children,e),a>o&&(c=a,a=o,o=c),r=a;r<=o;r++)e=n.control.children[r],n.activeItems.indexOf(e)===-1&&n.setActiveItemClass(e);Ue(t)}else s==="click"&&wn(_s,t)||s==="keydown"&&wn("shiftKey",t)?e.classList.contains("active")?n.removeActiveItem(e):n.setActiveItemClass(e):(n.clearActiveItems(),n.setActiveItemClass(e));n.hideInput(),n.isFocused||n.focus()}}setActiveItemClass(e){const t=this,n=t.control.querySelector(".last-active");n&&nn(n,"last-active"),ct(e,"active last-active"),t.trigger("item_select",e),t.activeItems.indexOf(e)==-1&&t.activeItems.push(e)}removeActiveItem(e){var t=this.activeItems.indexOf(e);this.activeItems.splice(t,1),nn(e,"active")}clearActiveItems(){nn(this.activeItems,"active"),this.activeItems=[]}setActiveOption(e){e!==this.activeOption&&(this.clearActiveOption(),e&&(this.activeOption=e,Ve(this.focus_node,{"aria-activedescendant":e.getAttribute("id")}),Ve(e,{"aria-selected":"true"}),ct(e,"active"),this.scrollToOption(e)))}scrollToOption(e,t){if(!e)return;const n=this.dropdown_content,s=n.clientHeight,r=n.scrollTop||0,a=e.offsetHeight,o=e.getBoundingClientRect().top-n.getBoundingClientRect().top+r;o+a>s+r?this.scroll(o-s+a,t):o<r&&this.scroll(o,t)}scroll(e,t){const n=this.dropdown_content;t&&(n.style.scrollBehavior=t),n.scrollTop=e,n.style.scrollBehavior=""}clearActiveOption(){this.activeOption&&(nn(this.activeOption,"active"),Ve(this.activeOption,{"aria-selected":null})),this.activeOption=null,Ve(this.focus_node,{"aria-activedescendant":null})}selectAll(){const e=this;if(e.settings.mode==="single")return;const t=e.controlChildren();!t.length||(e.hideInput(),e.close(),e.activeItems=t,qe(t,n=>{e.setActiveItemClass(n)}))}inputState(){var e=this;!e.control.contains(e.control_input)||(Ve(e.control_input,{placeholder:e.settings.placeholder}),e.activeItems.length>0||!e.isFocused&&e.settings.hidePlaceholder&&e.items.length>0?(e.setTextboxValue(),e.isInputHidden=!0):(e.settings.hidePlaceholder&&e.items.length>0&&Ve(e.control_input,{placeholder:""}),e.isInputHidden=!1),e.wrapper.classList.toggle("input-hidden",e.isInputHidden))}hideInput(){this.inputState()}showInput(){this.inputState()}inputValue(){return this.control_input.value.trim()}focus(){var e=this;e.isDisabled||(e.ignoreFocus=!0,e.control_input.offsetWidth?e.control_input.focus():e.focus_node.focus(),setTimeout(()=>{e.ignoreFocus=!1,e.onFocus()},0))}blur(){this.focus_node.blur(),this.onBlur()}getScoreFunction(e){return this.sifter.getScoreFunction(e,this.getSearchOptions())}getSearchOptions(){var e=this.settings,t=e.sortField;return typeof e.sortField=="string"&&(t=[{field:e.sortField}]),{fields:e.searchField,conjunction:e.searchConjunction,sort:t,nesting:e.nesting}}search(e){var t,n,s,r=this,a=this.getSearchOptions();if(r.settings.score&&(s=r.settings.score.call(r,e),typeof s!="function"))throw new Error('Tom Select "score" setting must be a function that returns a function');if(e!==r.lastQuery?(r.lastQuery=e,n=r.sifter.search(e,Object.assign(a,{score:s})),r.currentResults=n):n=Object.assign({},r.currentResults),r.settings.hideSelected)for(t=n.items.length-1;t>=0;t--){let o=Lt(n.items[t].id);o&&r.items.indexOf(o)!==-1&&n.items.splice(t,1)}return n}refreshOptions(e=!0){var t,n,s,r,a,o,c,l,u,h,f;const m={},g=[];var d=this,p=d.inputValue(),_=d.search(p),b=null,C=d.settings.shouldOpen||!1,E=d.dropdown_content;for(d.activeOption&&(u=d.activeOption.dataset.value,h=d.activeOption.closest("[data-group]")),r=_.items.length,typeof d.settings.maxOptions=="number"&&(r=Math.min(r,d.settings.maxOptions)),r>0&&(C=!0),t=0;t<r;t++){let T=_.items[t].id,R=d.options[T],v=d.getOption(T,!0);for(d.settings.hideSelected||v.classList.toggle("selected",d.items.includes(T)),a=R[d.settings.optgroupField]||"",o=Array.isArray(a)?a:[a],n=0,s=o&&o.length;n<s;n++)a=o[n],d.optgroups.hasOwnProperty(a)||(a=""),m.hasOwnProperty(a)||(m[a]=document.createDocumentFragment(),g.push(a)),n>0&&(v=v.cloneNode(!0),Ve(v,{id:R.$id+"-clone-"+n,"aria-selected":null}),v.classList.add("ts-cloned"),nn(v,"active")),!b&&u==T&&(h?h.dataset.group===a&&(b=v):b=v),m[a].appendChild(v)}this.settings.lockOptgroupOrder&&g.sort((T,R)=>{var v=d.optgroups[T]&&d.optgroups[T].$order||0,L=d.optgroups[R]&&d.optgroups[R].$order||0;return v-L}),c=document.createDocumentFragment(),qe(g,T=>{if(d.optgroups.hasOwnProperty(T)&&m[T].children.length){let R=document.createDocumentFragment(),v=d.render("optgroup_header",d.optgroups[T]);En(R,v),En(R,m[T]);let L=d.render("optgroup",{group:d.optgroups[T],options:R});En(c,L)}else En(c,m[T])}),E.innerHTML="",En(E,c),d.settings.highlight&&(zm(E),_.query.length&&_.tokens.length&&qe(_.tokens,T=>{Nm(E,T.regex)}));var S=T=>{let R=d.render(T,{input:p});return R&&(C=!0,E.insertBefore(R,E.firstChild)),R};if(d.loading?S("loading"):d.settings.shouldLoad.call(d,p)?_.items.length===0&&S("no_results"):S("not_loading"),l=d.canCreate(p),l&&(f=S("option_create")),d.hasOptions=_.items.length>0||l,C){if(_.items.length>0){if(!b&&d.settings.mode==="single"&&d.items.length&&(b=d.getOption(d.items[0])),!E.contains(b)){let T=0;f&&!d.settings.addPrecedence&&(T=1),b=d.selectable()[T]}}else f&&(b=f);e&&!d.isOpen&&(d.open(),d.scrollToOption(b,"auto")),d.setActiveOption(b)}else d.clearActiveOption(),e&&d.isOpen&&d.close(!1)}selectable(){return this.dropdown_content.querySelectorAll("[data-selectable]")}addOption(e,t=!1){const n=this;if(Array.isArray(e))return n.addOptions(e,t),!1;const s=Lt(e[n.settings.valueField]);return s===null||n.options.hasOwnProperty(s)?!1:(e.$order=e.$order||++n.order,e.$id=n.inputId+"-opt-"+e.$order,n.options[s]=e,n.lastQuery=null,t&&(n.userOptions[s]=t,n.trigger("option_add",s,e)),s)}addOptions(e,t=!1){qe(e,n=>{this.addOption(n,t)})}registerOption(e){return this.addOption(e)}registerOptionGroup(e){var t=Lt(e[this.settings.optgroupValueField]);return t===null?!1:(e.$order=e.$order||++this.order,this.optgroups[t]=e,t)}addOptionGroup(e,t){var n;t[this.settings.optgroupValueField]=e,(n=this.registerOptionGroup(t))&&this.trigger("optgroup_add",n,t)}removeOptionGroup(e){this.optgroups.hasOwnProperty(e)&&(delete this.optgroups[e],this.clearCache(),this.trigger("optgroup_remove",e))}clearOptionGroups(){this.optgroups={},this.clearCache(),this.trigger("optgroup_clear")}updateOption(e,t){const n=this;var s,r;const a=Lt(e),o=Lt(t[n.settings.valueField]);if(a===null||!n.options.hasOwnProperty(a))return;if(typeof o!="string")throw new Error("Value must be set in option data");const c=n.getOption(a),l=n.getItem(a);if(t.$order=t.$order||n.options[a].$order,delete n.options[a],n.uncacheValue(o),n.options[o]=t,c){if(n.dropdown_content.contains(c)){const u=n._render("option",t);Fr(c,u),n.activeOption===c&&n.setActiveOption(u)}c.remove()}l&&(r=n.items.indexOf(a),r!==-1&&n.items.splice(r,1,o),s=n._render("item",t),l.classList.contains("active")&&ct(s,"active"),Fr(l,s)),n.lastQuery=null}removeOption(e,t){const n=this;e=kr(e),n.uncacheValue(e),delete n.userOptions[e],delete n.options[e],n.lastQuery=null,n.trigger("option_remove",e),n.removeItem(e,t)}clearOptions(){this.loadedSearches={},this.userOptions={},this.clearCache();var e={};qe(this.options,(t,n)=>{this.items.indexOf(n)>=0&&(e[n]=this.options[n])}),this.options=this.sifter.items=e,this.lastQuery=null,this.trigger("option_clear")}getOption(e,t=!1){const n=Lt(e);if(n!==null&&this.options.hasOwnProperty(n)){const s=this.options[n];if(s.$div)return s.$div;if(t)return this._render("option",s)}return null}getAdjacent(e,t,n="option"){var s=this,r;if(!e)return null;n=="item"?r=s.controlChildren():r=s.dropdown_content.querySelectorAll("[data-selectable]");for(let a=0;a<r.length;a++)if(r[a]==e)return t>0?r[a+1]:r[a-1];return null}getItem(e){if(typeof e=="object")return e;var t=Lt(e);return t!==null?this.control.querySelector(`[data-value="${Lo(t)}"]`):null}addItems(e,t){var n=this,s=Array.isArray(e)?e:[e];s=s.filter(r=>n.items.indexOf(r)===-1);for(let r=0,a=s.length;r<a;r++)n.isPending=r<a-1,n.addItem(s[r],t)}addItem(e,t){var n=t?[]:["change","dropdown_close"];Co(this,n,()=>{var s,r;const a=this,o=a.settings.mode,c=Lt(e);if(!(c&&a.items.indexOf(c)!==-1&&(o==="single"&&a.close(),o==="single"||!a.settings.duplicates))&&!(c===null||!a.options.hasOwnProperty(c))&&(o==="single"&&a.clear(t),!(o==="multi"&&a.isFull()))){if(s=a._render("item",a.options[c]),a.control.contains(s)&&(s=s.cloneNode(!0)),r=a.isFull(),a.items.splice(a.caretPos,0,c),a.insertAtCaret(s),a.isSetup){if(!a.isPending&&a.settings.hideSelected){let l=a.getOption(c),u=a.getAdjacent(l,1);u&&a.setActiveOption(u)}!a.isPending&&!a.settings.closeAfterSelect&&a.refreshOptions(a.isFocused&&o!=="single"),a.settings.closeAfterSelect!=!1&&a.isFull()?a.close():a.isPending||a.positionDropdown(),a.trigger("item_add",c,s),a.isPending||a.updateOriginalInput({silent:t})}(!a.isPending||!r&&a.isFull())&&(a.inputState(),a.refreshState())}})}removeItem(e=null,t){const n=this;if(e=n.getItem(e),!e)return;var s,r;const a=e.dataset.value;s=Es(e),e.remove(),e.classList.contains("active")&&(r=n.activeItems.indexOf(e),n.activeItems.splice(r,1),nn(e,"active")),n.items.splice(s,1),n.lastQuery=null,!n.settings.persist&&n.userOptions.hasOwnProperty(a)&&n.removeOption(a,t),s<n.caretPos&&n.setCaret(n.caretPos-1),n.updateOriginalInput({silent:t}),n.refreshState(),n.positionDropdown(),n.trigger("item_remove",a,e)}createItem(e=null,t=!0,n=()=>{}){var s=this,r=s.caretPos,a;if(e=e||s.inputValue(),!s.canCreate(e))return n(),!1;s.lock();var o=!1,c=l=>{if(s.unlock(),!l||typeof l!="object")return n();var u=Lt(l[s.settings.valueField]);if(typeof u!="string")return n();s.setTextboxValue(),s.addOption(l,!0),s.setCaret(r),s.addItem(u),n(l),o=!0};return typeof s.settings.create=="function"?a=s.settings.create.call(this,e,c):a={[s.settings.labelField]:e,[s.settings.valueField]:e},o||c(a),!0}refreshItems(){var e=this;e.lastQuery=null,e.isSetup&&e.addItems(e.items),e.updateOriginalInput(),e.refreshState()}refreshState(){const e=this;e.refreshValidityState();const t=e.isFull(),n=e.isLocked;e.wrapper.classList.toggle("rtl",e.rtl);const s=e.wrapper.classList;s.toggle("focus",e.isFocused),s.toggle("disabled",e.isDisabled),s.toggle("required",e.isRequired),s.toggle("invalid",!e.isValid),s.toggle("locked",n),s.toggle("full",t),s.toggle("input-active",e.isFocused&&!e.isInputHidden),s.toggle("dropdown-active",e.isOpen),s.toggle("has-options",Fm(e.options)),s.toggle("has-items",e.items.length>0)}refreshValidityState(){var e=this;!e.input.checkValidity||(e.isValid=e.input.checkValidity(),e.isInvalid=!e.isValid)}isFull(){return this.settings.maxItems!==null&&this.items.length>=this.settings.maxItems}updateOriginalInput(e={}){const t=this;var n,s;const r=t.input.querySelector('option[value=""]');if(t.is_select_tag){let l=function(u,h,f){return u||(u=nt('<option value="'+ys(h)+'">'+ys(f)+"</option>")),u!=r&&t.input.append(u),o.push(u),(u!=r||c>0)&&(u.selected=!0),u};var a=l;const o=[],c=t.input.querySelectorAll("option:checked").length;t.input.querySelectorAll("option:checked").forEach(u=>{u.selected=!1}),t.items.length==0&&t.settings.mode=="single"?l(r,"",""):t.items.forEach(u=>{if(n=t.options[u],s=n[t.settings.labelField]||"",o.includes(n.$option)){const h=t.input.querySelector(`option[value="${Lo(u)}"]:not(:checked)`);l(h,u,s)}else n.$option=l(n.$option,u,s)})}else t.input.value=t.getValue();t.isSetup&&(e.silent||t.trigger("change",t.getValue()))}open(){var e=this;e.isLocked||e.isOpen||e.settings.mode==="multi"&&e.isFull()||(e.isOpen=!0,Ve(e.focus_node,{"aria-expanded":"true"}),e.refreshState(),gs(e.dropdown,{visibility:"hidden",display:"block"}),e.positionDropdown(),gs(e.dropdown,{visibility:"visible",display:"block"}),e.focus(),e.trigger("dropdown_open",e.dropdown))}close(e=!0){var t=this,n=t.isOpen;e&&(t.setTextboxValue(),t.settings.mode==="single"&&t.items.length&&t.hideInput()),t.isOpen=!1,Ve(t.focus_node,{"aria-expanded":"false"}),gs(t.dropdown,{display:"none"}),t.settings.hideSelected&&t.clearActiveOption(),t.refreshState(),n&&t.trigger("dropdown_close",t.dropdown)}positionDropdown(){if(this.settings.dropdownParent==="body"){var e=this.control,t=e.getBoundingClientRect(),n=e.offsetHeight+t.top+window.scrollY,s=t.left+window.scrollX;gs(this.dropdown,{width:t.width+"px",top:n+"px",left:s+"px"})}}clear(e){var t=this;if(!!t.items.length){var n=t.controlChildren();qe(n,s=>{t.removeItem(s,!0)}),t.showInput(),e||t.updateOriginalInput(),t.trigger("clear")}}insertAtCaret(e){const t=this,n=t.caretPos,s=t.control;s.insertBefore(e,s.children[n]),t.setCaret(n+1)}deleteSelection(e){var t,n,s,r,a=this;t=e&&e.keyCode===To?-1:1,n=qm(a.control_input);const o=[];if(a.activeItems.length)r=Eo(a.activeItems,t),s=Es(r),t>0&&s++,qe(a.activeItems,l=>o.push(l));else if((a.isFocused||a.settings.mode==="single")&&a.items.length){const l=a.controlChildren();t<0&&n.start===0&&n.length===0?o.push(l[a.caretPos-1]):t>0&&n.start===a.inputValue().length&&o.push(l[a.caretPos])}const c=o.map(l=>l.dataset.value);if(!c.length||typeof a.settings.onDelete=="function"&&a.settings.onDelete.call(a,c,e)===!1)return!1;for(Ue(e,!0),typeof s!="undefined"&&a.setCaret(s);o.length;)a.removeItem(o.pop());return a.showInput(),a.positionDropdown(),a.refreshOptions(!1),!0}advanceSelection(e,t){var n,s,r=this;r.rtl&&(e*=-1),!r.inputValue().length&&(wn(_s,t)||wn("shiftKey",t)?(n=r.getLastActive(e),n?n.classList.contains("active")?s=r.getAdjacent(n,e,"item"):s=n:e>0?s=r.control_input.nextElementSibling:s=r.control_input.previousElementSibling,s&&(s.classList.contains("active")&&r.removeActiveItem(n),r.setActiveItemClass(s))):r.moveCaret(e))}moveCaret(e){}getLastActive(e){let t=this.control.querySelector(".last-active");if(t)return t;var n=this.control.querySelectorAll(".active");if(n)return Eo(n,e)}setCaret(e){this.caretPos=this.items.length}controlChildren(){return Array.from(this.control.querySelectorAll("[data-ts-item]"))}lock(){this.isLocked=!0,this.refreshState()}unlock(){this.isLocked=!1,this.refreshState()}disable(){var e=this;e.input.disabled=!0,e.control_input.disabled=!0,e.focus_node.tabIndex=-1,e.isDisabled=!0,this.close(),e.lock()}enable(){var e=this;e.input.disabled=!1,e.control_input.disabled=!1,e.focus_node.tabIndex=e.tabIndex,e.isDisabled=!1,e.unlock()}destroy(){var e=this,t=e.revertSettings;e.trigger("destroy"),e.off(),e.wrapper.remove(),e.dropdown.remove(),e.input.innerHTML=t.innerHTML,e.input.tabIndex=t.tabIndex,nn(e.input,"tomselected","ts-hidden-accessible"),e._destroy(),delete e.input.tomselect}render(e,t){return typeof this.settings.render[e]!="function"?null:this._render(e,t)}_render(e,t){var n="",s,r;const a=this;return(e==="option"||e=="item")&&(n=kr(t[a.settings.valueField])),r=a.settings.render[e].call(this,t,ys),r==null||(r=nt(r),e==="option"||e==="option_create"?t[a.settings.disabledField]?Ve(r,{"aria-disabled":"true"}):Ve(r,{"data-selectable":""}):e==="optgroup"&&(s=t.group[a.settings.optgroupValueField],Ve(r,{"data-group":s}),t.group[a.settings.disabledField]&&Ve(r,{"data-disabled":""})),(e==="option"||e==="item")&&(Ve(r,{"data-value":n}),e==="item"?(ct(r,a.settings.itemClass),Ve(r,{"data-ts-item":""})):(ct(r,a.settings.optionClass),Ve(r,{role:"option",id:t.$id}),a.options[n].$div=r))),r}clearCache(){qe(this.options,(e,t)=>{e.$div&&(e.$div.remove(),delete e.$div)})}uncacheValue(e){const t=this.getOption(e);t&&t.remove()}canCreate(e){return this.settings.create&&e.length>0&&this.settings.createFilter.call(this,e)}hook(e,t,n){var s=this,r=s[t];s[t]=function(){var a,o;return e==="after"&&(a=r.apply(s,arguments)),o=n.apply(s,arguments),e==="instead"?o:(e==="before"&&(a=r.apply(s,arguments)),a)}}}function Xm(){We(this.input,"change",()=>{this.sync()})}function jm(){var i=this,e=i.onOptionSelect;i.settings.hideSelected=!1;var t=function(s){setTimeout(()=>{var r=s.querySelector("input");s.classList.contains("selected")?r.checked=!0:r.checked=!1},1)};i.hook("after","setupTemplates",()=>{var n=i.settings.render.option;i.settings.render.option=(s,r)=>{var a=nt(n.call(i,s,r)),o=document.createElement("input");o.addEventListener("click",function(l){Ue(l)}),o.type="checkbox";const c=Lt(s[i.settings.valueField]);return c&&i.items.indexOf(c)>-1&&(o.checked=!0),a.prepend(o),a}}),i.on("item_remove",n=>{var s=i.getOption(n);s&&(s.classList.remove("selected"),t(s))}),i.on("item_add",n=>{var s=i.getOption(n);s&&t(s)}),i.hook("instead","onOptionSelect",(n,s)=>{if(s.classList.contains("selected")){s.classList.remove("selected"),i.removeItem(s.dataset.value),i.refreshOptions(),Ue(n,!0);return}e.call(i,n,s),t(s)})}function Ym(i){const e=this,t=Object.assign({className:"clear-button",title:"Clear All",html:n=>`<div class="${n.className}" title="${n.title}">&times;</div>`},i);e.on("initialize",()=>{var n=nt(t.html(t));n.addEventListener("click",s=>{e.isDisabled||(e.clear(),e.settings.mode==="single"&&e.settings.allowEmptyOption&&e.addItem(""),s.preventDefault(),s.stopPropagation())}),e.control.appendChild(n)})}function $m(){var i=this;if(!$.fn.sortable)throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');if(i.settings.mode==="multi"){var e=i.lock,t=i.unlock;i.hook("instead","lock",()=>{var n=$(i.control).data("sortable");return n&&n.disable(),e.call(i)}),i.hook("instead","unlock",()=>{var n=$(i.control).data("sortable");return n&&n.enable(),t.call(i)}),i.on("initialize",()=>{var n=$(i.control).sortable({items:"[data-value]",forcePlaceholderSize:!0,disabled:i.isLocked,start:(s,r)=>{r.placeholder.css("width",r.helper.css("width")),n.css({overflow:"visible"})},stop:()=>{n.css({overflow:"hidden"});var s=[];n.children("[data-value]").each(function(){this.dataset.value&&s.push(this.dataset.value)}),i.setValue(s)}})})}}function Zm(i){const e=this,t=Object.assign({title:"Untitled",headerClass:"dropdown-header",titleRowClass:"dropdown-header-title",labelClass:"dropdown-header-label",closeClass:"dropdown-header-close",html:n=>'<div class="'+n.headerClass+'"><div class="'+n.titleRowClass+'"><span class="'+n.labelClass+'">'+n.title+'</span><a class="'+n.closeClass+'">&times;</a></div></div>'},i);e.on("initialize",()=>{var n=nt(t.html(t)),s=n.querySelector("."+t.closeClass);s&&s.addEventListener("click",r=>{Ue(r,!0),e.close()}),e.dropdown.insertBefore(n,e.dropdown.firstChild)})}function Km(){var i=this;i.hook("instead","setCaret",e=>{i.settings.mode==="single"||!i.control.contains(i.control_input)?e=i.items.length:(e=Math.max(0,Math.min(i.items.length,e)),e!=i.caretPos&&!i.isPending&&i.controlChildren().forEach((t,n)=>{n<e?i.control_input.insertAdjacentElement("beforebegin",t):i.control.appendChild(t)})),i.caretPos=e}),i.hook("instead","moveCaret",e=>{if(!i.isFocused)return;const t=i.getLastActive(e);if(t){const n=Es(t);i.setCaret(e>0?n+1:n),i.setActiveItem(),nn(t,"last-active")}else i.setCaret(i.caretPos+e)})}function Jm(){const i=this;i.settings.shouldOpen=!0,i.hook("before","setup",()=>{i.focus_node=i.control,ct(i.control_input,"dropdown-input");const e=nt('<div class="dropdown-input-wrap">');e.append(i.control_input),i.dropdown.insertBefore(e,i.dropdown.firstChild);const t=nt('<input class="items-placeholder" tabindex="-1" />');t.placeholder=i.settings.placeholder||"",i.control.append(t)}),i.on("initialize",()=>{i.control_input.addEventListener("keydown",t=>{switch(t.keyCode){case El:i.isOpen&&(Ue(t,!0),i.close()),i.clearActiveItems();return;case zr:i.focus_node.tabIndex=-1;break}return i.onKeyDown.call(i,t)}),i.on("blur",()=>{i.focus_node.tabIndex=i.isDisabled?-1:i.tabIndex}),i.on("dropdown_open",()=>{i.control_input.focus()});const e=i.onBlur;i.hook("instead","onBlur",t=>{if(!(t&&t.relatedTarget==i.control_input))return e.call(i)}),We(i.control_input,"blur",()=>i.onBlur()),i.hook("before","close",()=>{!i.isOpen||i.focus_node.focus()})})}function Qm(){var i=this;i.on("initialize",()=>{var e=document.createElement("span"),t=i.control_input;e.style.cssText="position:absolute; top:-99999px; left:-99999px; width:auto; padding:0; white-space:pre; ",i.wrapper.appendChild(e);var n=["letterSpacing","fontSize","fontFamily","fontWeight","textTransform"];for(const r of n)e.style[r]=t.style[r];var s=()=>{i.items.length>0?(e.textContent=t.value,t.style.width=e.clientWidth+"px"):t.style.width=""};s(),i.on("update item_add item_remove",s),We(t,"input",s),We(t,"keyup",s),We(t,"blur",s),We(t,"update",s)})}function eg(){var i=this,e=i.deleteSelection;this.hook("instead","deleteSelection",t=>i.activeItems.length?e.call(i,t):!1)}function tg(){this.hook("instead","setActiveItem",()=>{}),this.hook("instead","selectAll",()=>{})}function ng(){var i=this,e=i.onKeyDown;i.hook("instead","onKeyDown",t=>{var n,s,r,a;if(!i.isOpen||!(t.keyCode===Nr||t.keyCode===Tl))return e.call(i,t);a=Or(i.activeOption,"[data-group]"),n=Es(i.activeOption,"[data-selectable]"),a&&(t.keyCode===Nr?a=a.previousSibling:a=a.nextSibling,a&&(r=a.querySelectorAll("[data-selectable]"),s=r[Math.min(r.length-1,n)],s&&i.setActiveOption(s)))})}function ig(i){const e=Object.assign({label:"&times;",title:"Remove",className:"remove",append:!0},i);var t=this;if(!!e.append){var n='<a href="javascript:void(0)" class="'+e.className+'" tabindex="-1" title="'+ys(e.title)+'">'+e.label+"</a>";t.hook("after","setupTemplates",()=>{var s=t.settings.render.item;t.settings.render.item=(r,a)=>{var o=nt(s.call(t,r,a)),c=nt(n);return o.appendChild(c),We(c,"mousedown",l=>{Ue(l,!0)}),We(c,"click",l=>{if(Ue(l,!0),!t.isLocked){var u=o.dataset.value;t.removeItem(u),t.refreshOptions(!1),t.inputState()}}),o}})}}function sg(i){const e=this,t=Object.assign({text:n=>n[e.settings.labelField]},i);e.on("item_remove",function(n){if(!!e.isFocused&&e.control_input.value.trim()===""){var s=e.options[n];s&&e.setTextboxValue(t.text.call(e,s))}})}function rg(){const i=this,e=i.canLoad,t=i.clearActiveOption,n=i.loadCallback;var s={},r,a=!1,o;if(i.settings.shouldLoadMore||(i.settings.shouldLoadMore=function(){if(r.clientHeight/(r.scrollHeight-r.scrollTop)>.9)return!0;if(i.activeOption){var u=i.selectable(),h=[...u].indexOf(i.activeOption);if(h>=u.length-2)return!0}return!1}),!i.settings.firstUrl)throw"virtual_scroll plugin requires a firstUrl() method";i.settings.sortField=[{field:"$order"},{field:"$score"}];function c(l){return typeof i.settings.maxOptions=="number"&&r.children.length>=i.settings.maxOptions?!1:!!(l in s&&s[l])}i.setNextUrl=function(l,u){s[l]=u},i.getUrl=function(l){if(l in s){const u=s[l];return s[l]=!1,u}return s={},i.settings.firstUrl.call(i,l)},i.hook("instead","clearActiveOption",()=>{if(!a)return t.call(i)}),i.hook("instead","canLoad",l=>l in s?c(l):e.call(i,l)),i.hook("instead","loadCallback",(l,u)=>{a?o&&l.length>0&&(o.dataset.value=l[0][i.settings.valueField]):i.clearOptions(),n.call(i,l,u),a=!1}),i.hook("after","refreshOptions",()=>{const l=i.lastValue;var u;c(l)?(u=i.render("loading_more",{query:l}),u&&(u.setAttribute("data-selectable",""),o=u)):l in s&&!r.querySelector(".no-results")&&(u=i.render("no_more_results",{query:l})),u&&(ct(u,i.settings.optionClass),r.append(u))}),i.on("initialize",()=>{r=i.dropdown_content,i.settings.render=Object.assign({},{loading_more:function(){return'<div class="loading-more-results">Loading more results ... </div>'},no_more_results:function(){return'<div class="no-more-results">No more results</div>'}},i.settings.render),r.addEventListener("scroll",function(){!i.settings.shouldLoadMore.call(i)||!c(i.lastValue)||a||(a=!0,i.load.call(i,i.lastValue))})})}ft.define("change_listener",Xm);ft.define("checkbox_options",jm);ft.define("clear_button",Ym);ft.define("drag_drop",$m);ft.define("dropdown_header",Zm);ft.define("caret_position",Km);ft.define("dropdown_input",Jm);ft.define("input_autogrow",Qm);ft.define("no_backspace_delete",eg);ft.define("no_active_items",tg);ft.define("optgroup_columns",ng);ft.define("remove_button",ig);ft.define("restore_on_backspace",sg);ft.define("virtual_scroll",rg);var ag="/assets/earth-texture.88ab060b.jpg",og=`uniform float time;
uniform float progress;
uniform sampler2D texture1;
uniform vec4 resolution;
varying vec2 vUv;
varying vec3 vPosition;
float PI = 3.141592653589793238;
void main()	{
	// vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
	gl_FragColor = vec4(vUv,0.0,1.);
}`,lg=`uniform float time;
varying vec2 vUv;
varying vec3 vPosition;
uniform vec2 pixels;
float PI = 3.141592653589793238;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`;const Al={};class cg{constructor(e){this.scene=new sm,this.container=e.dom,this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.renderer=new dl,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(this.width,this.height),this.renderer.setClearColor(15658734,1),this.container.appendChild(this.renderer.domElement),this.camera=new Mt(70,window.innerWidth/window.innerHeight,.001,1e3),this.camera.position.set(0,0,3),this.controls=new Sm(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.enablePan=!1,this.time=0,this.isPlaying=!0,this.country={targetAngle:{x:0,y:0,z:0},coords:[0,0]},this.addObjects(),this.resize(),this.render(),this.setupResize()}settings(){this.settings={progress:0},this.gui=new uc,this.gui.add(this.settings,"progress",0,1,.01)}setupResize(){window.addEventListener("resize",this.resize.bind(this))}resize(){this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.renderer.setSize(this.width,this.height),this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix()}focusCountry(e){const[t,n]=e;var s=-n*(Math.PI/180)%(2*Math.PI),r=Math.PI/2*-1;const a={value:3},o={value:2};new Ct.Tween(this.planet.rotation).to({x:t*(Math.PI/180)%Math.PI,y:s+r},1e3).easing(Ct.Easing.Cubic.InOut).onStart(()=>{a.value=this.camera.position.z,this.camera.position.z===o.value?new Ct.Tween(a).to({value:3},1e3).onUpdate(()=>{this.camera.position.z=a.value}).easing(Ct.Easing.Cubic.InOut).onComplete(()=>{a.value=this.camera.position.z,new Ct.Tween(a).to({value:2},1e3).onUpdate(()=>{this.camera.position.z=a.value}).easing(Ct.Easing.Cubic.InOut).start()}).start():new Ct.Tween(a).to(o,1e3).onUpdate(()=>{this.camera.position.z=a.value}).easing(Ct.Easing.Cubic.InOut).start()}).start();function c([f,m]){const g=f*(Math.PI/180),d=(m+180)*(Math.PI/180);let p=-(Math.cos(g)*Math.cos(d)),_=Math.sin(g),b=Math.cos(g)*Math.sin(d);return{x:p,y:_,z:b}}const{x:l,y:u,z:h}=c([t,n]);this.pin.position.set(l,u,h)}addObjects(){this.material=new Zt({extensions:{derivatives:"#extension GL_OES_standard_derivatives : enable"},side:Fn,uniforms:{time:{value:0},resolution:{value:new it}},vertexShader:lg,fragmentShader:og}),this.material=new Ui({map:new ym().load(ag)});const e=1,t=.01;this.geometry=new Ss(e,100,100),this.planet=new Xt(this.geometry,this.material),this.scene.add(this.planet),this.pin=new Xt(new Ss(t,20,20),new Ui({color:16711680})),this.planet.attach(this.pin)}stop(){this.isPlaying=!1}play(){this.isPlaying||(this.render(),this.isPlaying=!0)}render(){!this.isPlaying||(this.time+=.5,this.controls.update(),Ct.update(),requestAnimationFrame(this.render.bind(this)),this.renderer.render(this.scene,this.camera))}}const ug=new cg({dom:document.getElementById("app")}),hg=new ft(document.getElementById("countries")),dg=()=>{const i=[];fetch("https://restcountries.com/v3.1/all").then(e=>e.json()).then(e=>{e.forEach(t=>{i.push({text:t.name.common,value:t.cca3}),Al[t.cca3]=t.capitalInfo.latlng}),hg.addOptions(i)})};dg();const Do=document.getElementById("country-form");Do.addEventListener("submit",i=>{i.preventDefault();const e=new FormData(Do);for(const[t,n]of e)t==="country"&&ug.focusCountry(Al[n])})});export default fg();
