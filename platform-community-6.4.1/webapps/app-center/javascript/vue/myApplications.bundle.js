define((()=>(()=>{"use strict";var e={d:(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{init:()=>p});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"myTools"},[t("div",{staticClass:"myToolsHeader"},[t("span",[e._v(e._s(e.$t("appCenter.userSetup.shortcuts")))]),e._v(" "),t("a",{staticClass:"seeAll",attrs:{href:"/portal/intranet/appCenterUserSetup"}},[e._v(e._s(e.$t("appCenter.userSetup.seeAll")))])]),e._v(" "),t("ul",{staticClass:"myToolsList"},e._l(e.favoriteApplicationsList,(function(r){return t("li",{key:r.id},[t("a",{attrs:{href:r.computedUrl,target:r.target},on:{click:function(t){return e.logOpenApplication(r.id)}}},[t("img",{staticClass:"myToolImage",attrs:{referrerpolicy:"no-referrer",src:`/portal/rest/app-center/applications/illustration/${r.id}?v=${r.imageLastModified}`}}),e._v(" "),t("span",{staticClass:"myToolTitle tooltipContent"},[t("div",[e._v(e._s(r.title))]),e._v(" "),t("span",{staticClass:"tooltiptext"},[e._v(e._s(r.description))])])])])})),0),e._v(" "),!e.maxFavoriteApps||e.favoriteApplicationsList.length<e.maxFavoriteApps?t("div",{staticClass:"addTool"},[t("a",{attrs:{href:e.appCenterUserSetupLink}},[t("i",{staticClass:"uiIconPlus uiIconLightGray"})])]):e._e()])};r._withStripped=!0;var o=function(e,t,r,o,a,i,n,p){var s,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=[],l._compiled=!0),s)if(l.functional){l._injectStyles=s;var c=l.render;l.render=function(e,t){return s.call(t),c(e,t)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,s):[s]}return{exports:e,options:l}}({name:"MyTools",data:()=>({favoriteApplicationsList:[],maxFavoriteApps:"",appCenterUserSetupLink:""}),created(){Promise.all([this.getFavoriteApplicationsList(),this.getMaxFavoriteApps()]).finally((()=>this.$root.$applicationLoaded())),this.appCenterUserSetupLink=`${eXo.env.portal.context}/${eXo.env.portal.portalName}/appCenterUserSetup`},methods:{getFavoriteApplicationsList(){return fetch("/portal/rest/app-center/applications/favorites",{credentials:"include",method:"GET"}).then((e=>{if(e&&e.ok)return e.json();throw new Error("Error when getting the favorite applications list")})).then((e=>(this.favoriteApplicationsList=e&&e.applications||[],this.favoriteApplicationsList.forEach((e=>{e.computedUrl=e.url.replace(/^\.\//,`${eXo.env.portal.context}/${eXo.env.portal.portalName}/`),e.computedUrl=e.computedUrl.replace("@user@",eXo.env.portal.userName),e.target=0===e.computedUrl.indexOf("/")?"_self":"_blank"})),this.favoriteApplicationsList)))},logOpenApplication(e){fetch(`/portal/rest/app-center/applications/logClickApplication/${e}`,{method:"GET",credentials:"include"})},getMaxFavoriteApps(){return fetch("/portal/rest/app-center/settings",{method:"GET",credentials:"include"}).then((e=>{if(e&&e.ok)return e.json();throw new Error("Error when getting the general applications list")})).then((e=>{this.maxFavoriteApps=e.maxFavoriteApps}))}}},r);const a=o.exports,i=eXo&&eXo.env&&eXo.env.portal&&eXo.env.portal.language||"en",n=`${eXo.env.portal.context}/${eXo.env.portal.rest}/i18n/bundle/locale.addon.appcenter-${i}.json`;function p(){exoi18n.loadLanguageAsync(i,n).then((e=>{Vue.createApp({render:e=>e(a),i18n:e,vuetify:Vue.prototype.vuetifyOptions},"#myApplications","My Application Center")}))}return t})()));