!function(t){var e={};function n(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){var a=n(1);"string"==typeof a&&(a=[[t.i,a,""]]);var r={insert:"head",singleton:!1};n(3)(a,r);a.locals&&(t.exports=a.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"*{box-sizing:border-box}body{background:white}.full-width{width:100%;max-width:1100px}html,body{margin:0;height:0}#layer-3{position:relative}.content{height:200vh;width:100%}#skyline{overflow:hidden;background:#7ec2ff}[id*=\"layer-\"]{fill:white}#layer-1{fill:#fff}#layer-2{fill:#ecf6ff}#layer-3{fill:#d8edff}#layer-4{fill:#c5e4ff}#layer-5{fill:#b2daff}.marquee .outer{display:flex;height:100px;align-items:center;position:relative}.marquee *{font-family:\"Open Sans\", sans-serif}.marquee .container{height:100%;perspective:700px;position:relative;perspective-origin:50% 50%;display:inline-flex;align-items:center;justify-content:center;width:250px;margin-left:40px}.marquee .item{position:absolute;animation-duration:2.5s;animation-fill-mode:backwards;animation-timing-function:ease;z-index:100;backface-visibility:hidden;font-size:50px;white-space:nowrap;visibility:hidden;border-bottom:2px solid #fff;border-top:2px solid #fff;transform-style:preserve-3d;text-transform:uppercase;font-weight:900}.marquee .animate{visibility:visible;animation-name:animate}.marquee .inner{transform:translateZ(-50px);transform-style:preserve-3d;height:100%;width:100%;display:flex;align-items:center;justify-content:center}@keyframes animate{0%{transform:rotateX(-90deg) translateZ(50px)}6%{transform:rotateX(10deg) translateZ(50px)}12%{transform:rotateX(-5deg) translateZ(50px)}18%{transform:rotateX(1.5deg) translateZ(50px)}24%{transform:rotateX(0deg) translateZ(50px)}82%{transform:rotateX(0deg) translateZ(50px)}88%{transform:rotateX(5deg) translateZ(50px)}94%{transform:rotateX(-10deg) translateZ(50px)}100%{transform:rotateX(90deg) translateZ(50px)}}.marquee .static{font-size:24px}.marquee *{color:#fff;text-shadow:0 10px 15px rgba(0,0,0,0.1)}nav{width:100%;position:fixed;z-index:1000;transition:.3s;display:flex;align-items:center;padding:20px 20px;color:white;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;border-bottom:1px solid transparent}nav.detached{background:white;box-shadow:0 5px 20px rgba(0,0,0,0.05);visibility:visible;opacity:1}nav.detached svg{fill:#7ec2ff}nav.detached svg:hover{fill:#1d234d}nav.detached .divider{border-color:rgba(15,15,111,0.3)}nav.retracted{transform:translateY(-100%);box-shadow:none}nav svg{cursor:pointer;transition:.2s;height:30px;width:auto;margin-right:20px;fill:#5da7e4;animation-name:bounce-in;animation-duration:.8s;animation-fill-mode:both}nav svg:hover{fill:white}nav svg:nth-child(1){animation-delay:0s}nav svg:nth-child(2){animation-delay:.08s}nav svg:nth-child(3){animation-delay:.16s}nav svg:nth-child(4){animation-delay:.24s}nav svg:nth-child(5){animation-delay:.32s}nav svg:nth-child(6){animation-delay:.4s}nav .divider{height:32px;width:1px;margin-right:20px;border-left:1px solid #5da7e4}@keyframes bounce-in{0%{transform:scale(0)}20%{transform:scale(1.4)}40%{transform:scale(0.8)}60%{transform:scale(1.1)}80%{transform:scale(0.95)}}.card{height:400px;width:100%;margin:auto;position:relative;padding:20px}.card .text{width:400px;font-family:\"Open Sans\";color:#535877;line-height:1.5em;font-weight:300}.card .img-container{max-width:500px;width:100%;display:flex;align-items:center;justify-content:center;position:relative;margin:0 auto}.card .img-container::after{content:'';display:block;height:20%;width:80%;border-radius:50%;background:radial-gradient(closest-side, rgba(0,0,0,0.1), rgba(0,0,0,0));position:absolute;bottom:0px;z-index:0}.card img,.card video{width:400px;max-width:100%;height:auto;display:block;transition:.2s;margin-bottom:50px}.card h1{display:inline;font-size:48px;margin:0;padding:0;color:#1d234d;transition:.2s;font-family:\"Open Sans\", sans-serif;text-transform:uppercase}\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",a=t[3];if(!a)return n;if(e&&"function"==typeof btoa){var r=(o=a,s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),i=a.sources.map(function(t){return"/*# sourceURL=".concat(a.sourceRoot).concat(t," */")});return[n].concat(i).concat([r]).join("\n")}var o,s,l;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var a={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(a[i]=!0)}for(var o=0;o<t.length;o++){var s=t[o];null!=s[0]&&a[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),e.push(s))}},e}},function(t,e,n){"use strict";var a,r={},i=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}();function s(t,e){for(var n=[],a={},r=0;r<t.length;r++){var i=t[r],o=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};a[o]?a[o].parts.push(s):n.push(a[o]={id:o,parts:[s]})}return n}function l(t,e){for(var n=0;n<t.length;n++){var a=t[n],i=r[a.id],o=0;if(i){for(i.refs++;o<i.parts.length;o++)i.parts[o](a.parts[o]);for(;o<a.parts.length;o++)i.parts.push(v(a.parts[o],e))}else{for(var s=[];o<a.parts.length;o++)s.push(v(a.parts[o],e));r[a.id]={id:a.id,refs:1,parts:s}}}}function d(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var a=n.nc;a&&(t.attributes.nonce=a)}if(Object.keys(t.attributes).forEach(function(n){e.setAttribute(n,t.attributes[n])}),"function"==typeof t.insert)t.insert(e);else{var r=o(t.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var c,f=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function u(t,e,n,a){var r=n?"":a.css;if(t.styleSheet)t.styleSheet.cssText=f(e,r);else{var i=document.createTextNode(r),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(i,o[e]):t.appendChild(i)}}function p(t,e,n){var a=n.css,r=n.media,i=n.sourceMap;if(r&&t.setAttribute("media",r),i&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}var h=null,m=0;function v(t,e){var n,a,r;if(e.singleton){var i=m++;n=h||(h=d(e)),a=u.bind(null,n,i,!1),r=u.bind(null,n,i,!0)}else n=d(e),a=p.bind(null,n,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return a(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;a(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i());var n=s(t,e);return l(n,e),function(t){for(var a=[],i=0;i<n.length;i++){var o=n[i],d=r[o.id];d&&(d.refs--,a.push(d))}t&&l(s(t,e),e);for(var c=0;c<a.length;c++){var f=a[c];if(0===f.refs){for(var u=0;u<f.parts.length;u++)f.parts[u]();delete r[f.id]}}}}}]);