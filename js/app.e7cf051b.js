(function(e){function t(t){for(var r,u,c=t[0],i=t[1],s=t[2],l=0,d=[];l<c.length;l++)u=c[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-59165ae7":"9e266139","chunk-2d0a4b25":"e2f1cdd9","chunk-2d0e2324":"036bab03","chunk-2d2259e5":"3b45f978","chunk-4fbef488":"adaaf9f7"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=u(e);var s=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-post/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0613":function(e,t,n){"use strict";var r=n("2b0e"),o=n("2f62");r["default"].use(o["a"]),t["a"]=new o["a"].Store({modules:{}})},"59a5":function(e,t,n){},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("b-button-group",{staticClass:"my-4 flex-wrap"},[n("router-link",{staticClass:"btn btn-secondary",attrs:{to:"/"}},[e._v("Главная")]),n("router-link",{staticClass:"btn btn-secondary ",attrs:{to:"history"}},[e._v("История")]),n("router-link",{staticClass:"btn btn-secondary",attrs:{to:"history-add"}},[e._v("История добавлений")]),n("router-link",{staticClass:"btn btn-secondary",attrs:{to:"history-delete"}},[e._v("История удаления")])],1),n("router-view")],1)},a=[],u=(n("5c0b"),n("2877")),c={},i=Object(u["a"])(c,o,a,!1,null,null,null),s=i.exports,l=(n("d3b7"),n("8c4f"));r["default"].use(l["a"]);var f=[{path:"/",name:"Home",component:function(){return Promise.all([n.e("chunk-59165ae7"),n.e("chunk-4fbef488")]).then(n.bind(null,"bb51"))}},{path:"/history",name:"History",component:function(){return Promise.all([n.e("chunk-59165ae7"),n.e("chunk-2d2259e5")]).then(n.bind(null,"e4bb"))}},{path:"/history-delete",name:"Delete",component:function(){return Promise.all([n.e("chunk-59165ae7"),n.e("chunk-2d0a4b25")]).then(n.bind(null,"0818"))}},{path:"/history-add",name:"Add",component:function(){return Promise.all([n.e("chunk-59165ae7"),n.e("chunk-2d0e2324")]).then(n.bind(null,"7e55"))}}],d=new l["a"]({mode:"history",base:"/vue-post/",routes:f}),p=d,b=n("0613"),h=n("bc3a"),m=n.n(h),v=n("2106"),y=n.n(v),k=n("5f5b"),g=n("b1e0");n("f9e3"),n("2dd8"),n("59a5");r["default"].config.productionTip=!1,r["default"].use(y.a,m.a),r["default"].use(k["a"]),r["default"].use(g["a"]),new r["default"]({router:p,store:b["a"],render:function(e){return e(s)}}).$mount("#app")}});
//# sourceMappingURL=app.e7cf051b.js.map