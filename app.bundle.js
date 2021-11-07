!function(t){function e(e){for(var n,r,i=e[0],o=e[1],a=0,d=[];a<i.length;a++)r=i[a],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);for(u&&u(e);d.length;)d.shift()()}var n={},s={0:0};function r(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.e=function(t){var e=[],n=s[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,r){n=s[t]=[e,r]}));e.push(n[2]=i);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.src=function(t){return r.p+""+({1:"categories-index-js",2:"dashboard-index-js",3:"error404-index-js",4:"products-edit-index-js",5:"products-list-index-js",6:"sales-index-js"}[t]||t)+"-"+t+".js"}(t);var u=new Error;o=function(e){a.onerror=a.onload=null,clearTimeout(d);var n=s[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",u.name="ChunkLoadError",u.type=r,u.request=i,n[1](u)}s[t]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:a})}),12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(e)},r.m=t,r.c=n,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/project-structure/",r.oe=function(t){throw console.error(t),t};var i=window.webpackJsonp=window.webpackJsonp||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var a=0;a<i.length;a++)e(i[a]);var u=o;r(r.s=2)}([function(t,e,n){var s={"./categories/index.js":[7,1],"./dashboard/index.js":[5,2],"./error404/index.js":[3,3],"./products/edit/index.js":[6,4],"./products/list/index.js":[4,5],"./sales/index.js":[8,6]};function r(t){if(!n.o(s,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=s[t],r=e[0];return n.e(e[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(s)},r.id=0,t.exports=r},,function(t,e,n){"use strict";n.r(e);class s{constructor(){this.routes=[],this.initEventListeners()}initEventListeners(){document.addEventListener("click",t=>{const e=t.target.closest("a");if(!e)return;const n=e.getAttribute("href");n&&n.startsWith("/")&&(t.preventDefault(),this.navigate(n))})}static instance(){return this._instance||(this._instance=new s),this._instance}async route(){let t,e=decodeURI(window.location.pathname).replace(/^\/|\/$/,"");for(let n of this.routes)if(t=e.match(n.pattern),t){this.page=await this.changePage(n.path,t);break}t||(this.page=await this.changePage(this.notFoundPagePath)),document.dispatchEvent(new CustomEvent("route",{detail:{page:this.page}}))}async changePage(t,e){return this.page&&this.page.destroy&&this.page.destroy(),await async function(t,e){const s=document.querySelector("main");s.classList.add("is-loading");const{default:r}=await n(0)(`./${t}/index.js`),i=new r(e),o=await i.render();s.classList.remove("is-loading");const a=document.querySelector("#content");return a.innerHTML="",a.append(o),i}(t,e)}navigate(t){history.pushState(null,null,t),this.route()}addRoute(t,e){return this.routes.push({pattern:t,path:e}),this}setNotFoundPagePath(t){return this.notFoundPagePath=t,this}listen(){window.addEventListener("popstate",()=>this.route()),this.route()}}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const i="project-structure/",o=new class{constructor(t="",e=[],n="Toggle sidebar"){r(this,"element",void 0),r(this,"subElements",void 0),r(this,"prevLink",void 0),r(this,"onToggle",t=>{t.target.closest(".sidebar__nav_bottom")&&document.body.classList.toggle("is-collapsed-sidebar")}),r(this,"onRoute",()=>{Object.values(this.subElements).some(t=>{if(location.pathname===t.getAttribute("href")||t.getAttribute("href").length>1&&location.pathname.includes(t.getAttribute("href"))){const e=t.closest("li");return this.prevLink&&this.prevLink.classList.remove("active"),e.classList.add("active"),this.prevLink=e,!0}})}),this.title=t,this.list=e,this.toggleBtnName=n,this.render()}get template(){return`\n\t\t\t<aside class="sidebar">\n\t\t\t\t<h2 class="sidebar__title">\n\t\t\t\t\t<a href="/">${this.title}</a>\n\t\t\t\t</h2>\n\t\t\t\t<ul class="sidebar__nav">\n\t\t\t\t\t${this.list.map(({path:t,id:e,text:n})=>`\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href="/${t}" data-page="${e}">\n\t\t\t\t\t\t\t\t\t\t<i class="icon-${e}"></i>\n\t\t\t\t\t\t\t\t\t\t<span>${n}</span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t`).join("")}\n\t\t\t\t</ul>\n\t\t\t\t<ul class="sidebar__nav sidebar__nav_bottom">\n        \t<li>\n        \t  <button type="button" class="sidebar__toggler">\n        \t    <i class="icon-toggle-sidebar"></i> \n\t\t\t\t\t\t\t<span>${this.toggleBtnName}</span>\n        \t  </button>\n        \t</li>\n      \t</ul>\n\t\t\t</aside>\n\t\t`}render(){const t=document.createElement("div");t.innerHTML=this.template,this.element=t.firstElementChild,this.subElements=this.getSubElements(this.element),this.events("add")}events(t){this.element[t+"EventListener"]("pointerup",this.onToggle),document[t+"EventListener"]("route",this.onRoute)}getSubElements(t){return[...t.querySelectorAll("[data-page]")].reduce((t,e)=>(t[e.dataset.page]=e,t),{})}remove(){this.element&&this.element.remove()}destroy(){this.remove(),this.events("remove"),this.element=null,this.subElements=null}}("shop admin",[{path:""+i,id:"dashboard",text:"Dashboard"},{path:i+"products",id:"products",text:"Products"},{path:"categories",id:"categories",text:"Categories"},{path:"sales",id:"sales",text:"Sales"}]);document.querySelector("#main").append(o.element);s.instance().addRoute(new RegExp(`^${i}$`),"dashboard").addRoute(/^products$/,"products/list").addRoute(new RegExp(i+"products/add$"),"products/edit").addRoute(/^products\/([\w()-]+)$/,"products/edit").addRoute(/^sales$/,"sales").addRoute(/^categories$/,"categories").addRoute(/^404\/?$/,"error404").setNotFoundPagePath("error404").listen()}]);
//# sourceMappingURL=app.bundle.js.map