define((function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=14)}([function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&i[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},function(e,n,t){"use strict";function r(e,n,t,r,i,o,a,s){var c=typeof(e=e||{}).default;"object"!==c&&"function"!==c||(e=e.default);var d,l="function"==typeof e?e.options:e;if(n&&(l.render=n,l.staticRenderFns=t,l._compiled=!0),r&&(l.functional=!0),o&&(l._scopeId=o),a?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=d):i&&(d=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),d)if(l.functional){l._injectStyles=d;var u=l.render;l.render=function(e,n){return d.call(n),u(e,n)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,d):[d]}return{exports:e,options:l}}t.d(n,"a",(function(){return r}))},function(e,n,t){"use strict";function r(e,n){for(var t=[],r={},i=0;i<n.length;i++){var o=n[i],a=o[0],s={id:e+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):t.push(r[a]={id:a,parts:[s]})}return t}t.r(n),t.d(n,"default",(function(){return p}));var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},a=i&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,d=!1,l=function(){},u=null,f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e,n,t,i){d=t,u=i||{};var a=r(e,n);return v(a),function(n){for(var t=[],i=0;i<a.length;i++){var s=a[i];(c=o[s.id]).refs--,t.push(c)}n?v(a=r(e,n)):a=[];for(i=0;i<t.length;i++){var c;if(0===(c=t[i]).refs){for(var d=0;d<c.parts.length;d++)c.parts[d]();delete o[c.id]}}}}function v(e){for(var n=0;n<e.length;n++){var t=e[n],r=o[t.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](t.parts[i]);for(;i<t.parts.length;i++)r.parts.push(h(t.parts[i]));r.parts.length>t.parts.length&&(r.parts.length=t.parts.length)}else{var a=[];for(i=0;i<t.parts.length;i++)a.push(h(t.parts[i]));o[t.id]={id:t.id,refs:1,parts:a}}}}function g(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function h(e){var n,t,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(d)return l;r.parentNode.removeChild(r)}if(f){var i=c++;r=s||(s=g()),n=w.bind(null,r,i,!1),t=w.bind(null,r,i,!0)}else r=g(),n=_.bind(null,r),t=function(){r.parentNode.removeChild(r)};return n(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;n(e=r)}else t()}}var b,m=(b=[],function(e,n){return b[e]=n,b.filter(Boolean).join("\n")});function w(e,n,t,r){var i=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(n,i);else{var o=document.createTextNode(i),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(o,a[n]):e.appendChild(o)}}function _(e,n){var t=n.css,r=n.media,i=n.sourceMap;if(r&&e.setAttribute("media",r),u.ssrId&&e.setAttribute("data-vue-ssr-id",n.id),i&&(t+="\n/*# sourceURL="+i.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},function(e,n,t){var r=t(4);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,t(2).default)("56e5d444",r,!1,{})},function(e,n,t){"use strict";t.r(n);var r=t(0),i=t.n(r)()((function(e){return e[1]}));i.push([e.i,'\n#web-conferencing-admin .webconferencingTitle[data-v-cbf7fc0c] {\n  color: #4d5466;\n  font-size: 24px;\n  position: relative;\n  overflow: hidden;\n  line-height: 27px;\n}\n#web-conferencing-admin .webconferencingTitle[data-v-cbf7fc0c]:after {\n  border-bottom: 1px solid #dadada;\n  height: 14px;\n  content: "";\n  position: absolute;\n  width: 100%;\n}\n#web-conferencing-admin .providersTable[data-v-cbf7fc0c] {\n  border-left: 0;\n}\n#web-conferencing-admin .providersTable .providersTableRow th[data-v-cbf7fc0c],\n#web-conferencing-admin .providersTable .providersTableRow td[data-v-cbf7fc0c] {\n  height: 20px;\n  padding: 5px 15px;\n}\n#web-conferencing-admin .providersSwitcher[data-v-cbf7fc0c] {\n  padding: 0;\n  margin: 0;\n  height: 25px;\n}\n#web-conferencing-admin .uiIconSetting[data-v-cbf7fc0c]::before {\n  content: "\\f13e";\n  font-size: 21px;\n}\n',""]),n.default=i},,,,,,,,,,function(e,n,t){"use strict";t.r(n),t.d(n,"init",(function(){return f}));var r={props:{i18n:{type:Object,required:!0},language:{type:String,required:!0},resourceBundleName:{type:String,required:!0}},data:()=>({providersConfig:[],switcher:!1,error:null,log:null}),created(){this.log=webConferencing.getLog().prefix("webconferencing.admin"),this.getProviders()},methods:{getProviders(){try{const e=this;webConferencing.getProvidersConfig().then(n=>{for(const t of n)webConferencing.getProvider(t.type).then(n=>{t.provider=n,t.hasSettings=n.showSettings&&n.hasOwnProperty("showSettings"),e.providersConfig.push(t)}).fail((function(n){e.log.warn(`Provider ${t.type} is not available`,n)}))}),this.error=null}catch(e){this.error=e.message}},getProviderResources(e){const n=`${eXo.env.portal.context}/${eXo.env.portal.rest}/i18n/bundle/locale.${e}.${this.resourceBundleName}-${this.language}.json`;return exoi18n.loadLanguageAsync(this.language,n)},async changeActive(e){try{await webConferencing.postProviderConfig(e.type,e.active),this.error=null}catch(e){this.error=e.message}}}},i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",{attrs:{id:"web-conferencing-admin"}},[t("v-container",{staticStyle:{width:"95%"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}],staticClass:"alert alert-error"},[e._v("\n      "+e._s(e.i18n.te(e.errorResourceBase+"."+e.error)?e.$t(e.errorResourceBase+"."+e.error):e.error)+"\n    ")]),e._v(" "),t("v-row",[t("v-col",{attrs:{xs12:"","px-3":""}},[t("h4",{staticClass:"webconferencingTitle"},[t("span",{staticClass:"me-3"},[e._v(e._s(e.$t("webconferencing.admin.title")))])])])],1),e._v(" "),t("v-row",[t("v-col",{attrs:{xs12:""}},[t("v-simple-table",{staticClass:"uiGrid table table-hover providersTable",attrs:{dense:!0},scopedSlots:e._u([{key:"default",fn:function(){return[t("thead",[t("tr",{staticClass:"providersTableRow"},[t("th",{staticClass:"text-start"},[e._v(e._s(e.$t("webconferencing.admin.table.Provider")))]),e._v(" "),t("th",{staticClass:"text-start"},[e._v(e._s(e.$t("webconferencing.admin.table.Description")))]),e._v(" "),t("th",{staticClass:"text-start",staticStyle:{width:"5%"}},[e._v("\n                  "+e._s(e.$t("webconferencing.admin.table.Active"))+"\n                ")]),e._v(" "),t("th",{staticClass:"text-start",staticStyle:{width:"5%"}},[e._v("\n                  "+e._s(e.$t("webconferencing.admin.table.Permissions"))+"\n                ")])])]),e._v(" "),e.providersConfig.length>0?t("tbody",e._l(e.providersConfig,(function(n){return t("tr",{key:n.title,staticClass:"providersTableRow"},[t("td",[t("div",[e._v("\n                    "+e._s(e.i18n.te("webconferencing.admin."+n.title+".name")?e.$t("webconferencing.admin."+n.title+".name"):n.title)+"\n                  ")])]),e._v(" "),t("td",[t("div",{domProps:{innerHTML:e._s(e.i18n.te("webconferencing.admin."+n.title+".description")?e.$t("webconferencing.admin."+n.title+".description"):"")}})]),e._v(" "),t("td",{staticClass:"center actionContainer"},[t("div",[t("v-switch",{staticClass:"providersSwitcher",attrs:{dense:!0,"input-value":n.active,ripple:!1,"hide-details":"",color:"#568dc9"},on:{change:function(t){return e.changeActive(n)}},model:{value:n.active,callback:function(t){e.$set(n,"active",t)},expression:"providerConfig.active"}})],1)]),e._v(" "),t("td",{staticClass:"center actionContainer"},[n.hasSettings?t("i",{staticClass:"uiIconSetting uiIconLightGray",on:{click:function(e){return n.provider.showSettings()}}}):e._e()])])})),0):e._e()]},proxy:!0}])})],1)],1)],1)],1)};i._withStripped=!0;var o=t(1);var a=function(e){t(3)},s=Object(o.a)(r,i,[],!1,a,"data-v-cbf7fc0c",null);s.options.__file="src/main/webapp/vue-apps/Admin/components/AdminApp.vue";var c=s.exports;Vue.use(Vuetify);const d=new Vuetify(eXo.env.portal.vuetifyPreset),l=eXo&&eXo.env&&eXo.env.portal&&eXo.env.portal.language||"en",u=`${eXo.env.portal.context}/${eXo.env.portal.rest}/i18n/bundle/locale.webconferencing.WebConferencingAdmin-${l}.json`;function f(){exoi18n.loadLanguageAsync(l,u).then(e=>{new Vue({render:n=>n(c,{props:{i18n:e,language:l,resourceBundleName:"WebConferencingAdmin"}}),i18n:e,vuetify:d}).$mount("#webconferencingAdmin")})}}])}));