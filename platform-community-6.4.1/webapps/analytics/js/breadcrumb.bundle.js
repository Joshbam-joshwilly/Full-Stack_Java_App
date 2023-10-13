define((()=>(()=>{"use strict";var e={d:(t,a)=>{for(var n in a)e.o(a,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:a[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{init:()=>u});var a=function(){var e=this,t=e._self._c;return t("v-app",[t("v-card",{staticClass:"border-radius",attrs:{flat:""}},[t("v-list",[t("v-list-item",[t("v-list-item-content",[t("v-list-item-title",{staticClass:"titlePage text-color"},[t("a",{staticClass:"text-color font-weight-bold",attrs:{href:e.parentAnalyticsPageUri}},[e._v("\n              "+e._s(e.$t("analytics.application"))+"\n            ")]),e._v(" "),e._l(e.breadCrumbItems,(function(a){return t("a",{key:a.uri,staticClass:"text-color",attrs:{href:a.link}},[t("v-icon",{staticClass:"text-sub-title iconSubPage",attrs:{size:"16"}},[e._v("\n                fa-caret-right\n              ")]),e._v("\n              "+e._s(a.label)+"\n            ")],1)}))],2)],1),e._v(" "),t("v-list-item-action",{staticClass:"my-auto"},[t("v-btn",{attrs:{title:e.$t("analytics.navigateToOtherPages"),icon:""},on:{click:e.openDrawer}},[t("i",{staticClass:"uiIconManageApplication iconAnalyticsPage text-color"})])],1)],1)],1)],1),e._v(" "),t("analytics-drawer-navigation",{ref:"analyticsPage",attrs:{pages:e.subPages}})],1)};function n(e,t,a,n,s,i,r,o){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=a,c._compiled=!0),n&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),r?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=l):s&&(l=o?function(){s.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:s),l)if(c.functional){c._injectStyles=l;var p=c.render;c.render=function(e,t){return l.call(t),p(e,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:c}}a._withStripped=!0;const s=n({data:()=>({baseUri:eXo.env.server.portalBaseURL.replace(new RegExp(`/${eXo.env.portal.selectedNodeUri}$`),""),parentAnalyticsPage:null}),computed:{siteType:()=>0===eXo.env.server.portalBaseURL.indexOf(`${eXo.env.portal.context}/g/`)?"group":"portal",groupSiteName(){if("group"===this.siteType)return eXo.env.server.portalBaseURL.replace(`${eXo.env.portal.context}/g/`,"").split("/")[0].replaceAll(":","/")},siteName(){return this.groupSiteName||eXo.env.portal.portalName},analyticsParentPageName:()=>eXo.env.portal.spaceUrl?eXo.env.portal.selectedNodeUri.split("/")[1]:eXo.env.portal.selectedNodeUri.split("/")[0],parentAnalyticsPageRelativeUri(){return eXo.env.portal.spaceUrl?`${eXo.env.portal.selectedNodeUri.split("/")[0]}/${this.analyticsParentPageName}`:this.analyticsParentPageName},parentAnalyticsPageUri(){return`${this.baseUri}/${this.parentAnalyticsPageRelativeUri}`},subPageParts(){let e=eXo.env.portal.selectedNodeUri.replace(this.parentAnalyticsPageRelativeUri,"");return e&&0===e.indexOf("/")&&(e=e.substring(1)),e&&e.split("/")||[]},subPages(){return this.parentAnalyticsPage&&this.parentAnalyticsPage.children||[]},breadCrumbItems(){const e=[];if(this.parentAnalyticsPage&&this.subPageParts.length){let t=this.parentAnalyticsPage;for(const a in this.subPageParts){const n=this.subPageParts[a];if(t&&t.children){const e=t.children;t=null;for(const a in e){const s=e[a];if(s.name&&s.name.toLowerCase()===n.toLowerCase()){t=s;break}}}t?e.push(t):console.error(`Can't find page with uri '${n}' in pages level ${a}`)}}return e}},mounted(){this.$analyticsUtils.getPage(this.siteType,this.siteName,this.analyticsParentPageName).then((e=>{this.$analyticsUtils.buildPageLinkRecursively(this.baseUri,e),this.parentAnalyticsPage=e,this.$nextTick().then((()=>this.$root.$emit("application-loaded")))}))},methods:{openDrawer(){this.$refs.analyticsPage.open()}}},a,[],!1,null,null,null).exports;var i=function(){var e=this,t=e._self._c;return t("exo-drawer",{ref:"analyticsPage",attrs:{id:"drawerPageAnalytics",right:""}},[t("template",{slot:"title"},[e._v("\n    "+e._s(e.$t("analytics.analyticsReports"))+"\n  ")]),e._v(" "),t("template",{slot:"content"},[t("v-treeview",{staticClass:"treeViewPage",attrs:{items:e.pages,"item-children":"children","item-key":"uri","item-text":"label","open-all":"",dense:""},scopedSlots:e._u([{key:"label",fn:function({item:a}){return[a.link?t("a",{staticClass:"text-color",attrs:{href:a.link}},[e._v("\n          "+e._s(a.label)+"\n        ")]):[e._v("\n          "+e._s(a.label)+"\n        ")]]}}])})],1)],2)};i._withStripped=!0;const r={"analytics-breadcrumb":s,"analytics-drawer-navigation":n({props:{pages:{type:Array,default:()=>[]}},methods:{open(){this.$refs.analyticsPage.open()},close(){this.$refs.analyticsPage.close()}}},i,[],!1,null,null,null).exports};for(const e in r)Vue.component(e,r[e]);Vue.use(Vuetify);const o=new Vuetify(eXo.env.portal.vuetifyPreset);document.dispatchEvent(new CustomEvent("displayTopBarLoading"));const l="analyticsDashboardBreadcrumb",c=eXo&&eXo.env&&eXo.env.portal&&eXo.env.portal.language||"en",p=`${eXo.env.portal.context}/${eXo.env.portal.rest}/i18n/bundle/locale.portlet.Analytics-${c}.json`;function u(e){exoi18n.loadLanguageAsync(c,p).then((t=>{Vue.createApp({mounted(){document.dispatchEvent(new CustomEvent("hideTopBarLoading"))},template:`<analytics-breadcrumb v-cacheable="{cacheId: '${e}'}" id="${l}" />`,vuetify:o,i18n:t},`#${l}`,"analytics")}))}return t})()));