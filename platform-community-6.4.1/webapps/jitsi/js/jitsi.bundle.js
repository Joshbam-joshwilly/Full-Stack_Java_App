define((function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=12)}({1:function(e,t,n){"use strict";function o(e,t,n,o,r,i,u,s){var a=typeof(e=e||{}).default;"object"!==a&&"function"!==a||(e=e.default);var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),i&&(l._scopeId=i),u?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},l._ssrRegister=c):r&&(c=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(l.functional){l._injectStyles=c;var f=l.render;l.render=function(e,t){return c.call(t),f(e,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:l}}n.d(t,"a",(function(){return o}))},12:function(e,t,n){"use strict";n.r(t),n.d(t,"init",(function(){return l}));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{"content-class":"Jitsi"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[n("a",e._g({attrs:{"data-placement":"bottom",rel:"tooltip"}},o),[n("span",[e._v("Hello")])])]}}]),model:{value:e.showJitsi,callback:function(t){e.showJitsi=t},expression:"showJitsi"}})};o._withStripped=!0;var r=n(1),i=Object(r.a)({data:function(){return{showJitsi:!1}},methods:{}},o,[],!1,null,null,null);i.options.__file="src/main/webapp/vue-apps/Jitsi/components/Admin.vue";var u=i.exports;Vue.use(Vuetify),Vue.component("Jitsi",u);const s=new Vuetify({dark:!0,iconfont:""}),a=window.eXo&&window.eXo.env&&window.eXo.env.portal&&window.eXo.env.portal.language||"en",c=`${eXo.env.portal.context}/${eXo.env.portal.rest}/i18n/bundle/locale.webconferencing.Jitsi-${a}.json`;function l(e){exoi18n.loadLanguageAsync(a,c).then(t=>{const n=Object.assign({},e,{i18n:t,language:a,resourceBundleName:"Jitsi"});new Vue({render:e=>e(u,{props:n}),i18n:t,vuetify:s}).$mount("#Jitsi")})}}})}));