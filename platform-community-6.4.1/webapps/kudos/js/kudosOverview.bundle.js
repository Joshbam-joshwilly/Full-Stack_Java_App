define((()=>(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{init:()=>c});var o=function(){var e=this,t=e._self._c;return t("v-app",{staticClass:"white",class:e.owner?"kudosOverviewApplication":"kudosOverviewApplicationOther"},[e.isOverviewDisplay?e._e():t("v-toolbar",{staticClass:"border-box-sizing",attrs:{id:"kudosOverviewHeader",color:"white",height:"64",flat:""}},[t("div",{staticClass:"d-flex flex py-3"},[t("div",{staticClass:"text-header-title text-sub-title text-no-wrap d-flex align-center"},[e._v("\n        "+e._s(e.$t("exoplatform.kudos.button.rewardedKudos"))+"\n      ")]),e._v(" "),t("v-spacer"),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.periodType,expression:"periodType"}],staticClass:"kudosOverviewPeriodSelect fill-height col-auto my-auto py-0 subtitle-1 ignore-vuetify-classes",on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.periodType=t.target.multiple?o:o[0]}}},e._l(e.periods,(function(o){return t("option",{key:o.value,domProps:{value:o.value}},[e._v("\n          "+e._s(o.text)+"\n        ")])})),0)],1)]),e._v(" "),t("v-row",{staticClass:"white border-box-sizing px-4 py-0 ma-0 align-center",attrs:{id:"kudosOverviewCardsParent"}},[t("v-col",{staticClass:"kudosOverviewCard"},[t("kudos-overview-card",{staticClass:"kudosReceivedOverviewPeriod mx-n4",attrs:{clickable:e.owner&&e.receivedKudosCount>0},on:{"open-drawer":function(t){return e.openDrawer("received")}}},[t("template",{slot:"count"},[e._v("\n          "+e._s(e.receivedKudosCount||"0")+"\n        ")]),e._v(" "),t("template",{slot:"label"},[e._v("\n          "+e._s(e.$t("exoplatform.kudos.label.received"))+"\n        ")])],2)],1),e._v(" "),t("v-divider",{staticClass:"my-9 mx-8 me-md-1 ms-md-5",attrs:{vertical:""}}),e._v(" "),t("v-col",{staticClass:"kudosOverviewCard"},[t("kudos-overview-card",{staticClass:"kudosSentOverviewPeriod mx-n4",attrs:{clickable:e.owner&&e.sentKudosCount>0},on:{"open-drawer":function(t){return e.openDrawer("sent")}}},[t("template",{slot:"count"},[e._v("\n          "+e._s(e.sentKudosCount||"0")+"\n        ")]),e._v(" "),t("template",{slot:"label"},[e._v("\n          "+e._s(e.$t("exoplatform.kudos.label.sent"))+"\n        ")])],2)],1)],1),e._v(" "),e.owner?t("kudos-overview-drawer",{ref:"kudosOverviewDrawer"}):e._e()],1)};function n(e,t,o,n,r,s,i,a){var d,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=o,l._compiled=!0),n&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),i?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=d):r&&(d=a?function(){r.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:r),d)if(l.functional){l._injectStyles=d;var u=l.render;l.render=function(e,t){return d.call(t),u(e,t)}}else{var c=l.beforeCreate;l.beforeCreate=c?[].concat(c,d):[d]}return{exports:e,options:l}}o._withStripped=!0;const r=n({props:{isOverviewDisplay:{type:Boolean,default:()=>!1}},data:()=>({owner:eXo.env.portal.profileOwner===eXo.env.portal.userName,identityId:eXo.env.portal.profileOwnerIdentityId,periodType:"WEEK",sentKudosCount:0,receivedKudosCount:0,sentKudos:[],receivedKudos:[]}),computed:{periods(){return[{text:this.$t("exoplatform.kudos.label.week"),value:"WEEK"},{text:this.$t("exoplatform.kudos.label.month"),value:"MONTH"},{text:this.$t("exoplatform.kudos.label.quarter"),value:"QUARTER"},{text:this.$t("exoplatform.kudos.label.semester"),value:"SEMESTER"},{text:this.$t("exoplatform.kudos.label.year"),value:"YEAR"}]}},watch:{periodType(){this.refresh()}},created(){this.refresh()},methods:{openDrawer(e){if(this.owner){const t="sent"===e?this.$t("exoplatform.kudos.button.sentKudos"):this.$t("exoplatform.kudos.button.receivedKudos");this.$refs.kudosOverviewDrawer.open(t,e,this.identityId,this.periodType)}},refresh(){const e=parseInt(Date.now()/1e3);document.dispatchEvent(new CustomEvent("displayTopBarLoading")),function(e,t,o,n,r){return fetch(`/portal/rest/kudos/api/kudos/${e}/sent?limit=0&returnSize=true&periodType=${n||""}&dateInSeconds=${r||"0"}`,{method:"GET",credentials:"include"}).then((e=>{if(e&&e.ok)return e.json();throw new Error("Response code indicates a server error",e)}))}(this.identityId,0,0,this.periodType,e).then((e=>{this.sentKudosCount=e&&e.size||0,this.sentKudos=e&&e.kudos||[]})).then((()=>function(e,t,o,n,r){return fetch(`/portal/rest/kudos/api/kudos/${e}/received?limit=0&returnSize=true&periodType=${n||""}&dateInSeconds=${r||"0"}`,{method:"GET",credentials:"include"}).then((e=>{if(e&&e.ok)return e.json();throw new Error("Response code indicates a server error",e)}))}(this.identityId,0,0,this.periodType,e))).then((e=>(this.receivedKudosCount=e&&e.size||0,this.receivedKudos=e&&e.kudos||[],this.$nextTick()))).finally((()=>{this.$root.$emit("application-loaded"),document.dispatchEvent(new CustomEvent("hideTopBarLoading")),document.dispatchEvent(new CustomEvent("kudosCount",{detail:this.sentKudosCount+this.receivedKudosCount}))}))}}},o,[],!1,null,null,null).exports;var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"border-box-sizing text-center justify-center align-center d-flex flex-wrap",class:e.clickable?"clickable":"",on:{click:function(t){e.clickable&&e.$emit("open-drawer")}}},[t("div",{staticClass:"px-0 kudosOverviewIcon pa-0"},[t("v-icon",{staticClass:"uiIconKudos tertiary-color",attrs:{size:"40"}},[e._v("fa fa-award")])],1),e._v(" "),t("div",{staticClass:"kudosOverviewCount text-color mx-2 display-1 font-weight-bold pa-0 d-flex align-center"},[e._t("count")],2),e._v(" "),t("div",{staticClass:"px-0 mx-0"},[t("v-card",{staticClass:"d-flex align-center flex-no-wrap",attrs:{"min-width":55,flat:""}},[e._t("label")],2)],1)])};s._withStripped=!0;const i={"kudos-overview":r,"kudos-overview-card":n({props:{clickable:{type:Boolean,default:null}}},s,[],!1,null,null,null).exports};for(const e in i)Vue.component(e,i[e]);if(extensionRegistry){const e=extensionRegistry.loadComponents("KudosAdmin");e&&e.length>0&&e.forEach((e=>{Vue.component(e.componentName,e.componentOptions)}))}const a="KudosOverview",d=`${a}_${eXo.env.portal.profileOwnerIdentityId}`,l=eXo&&eXo.env&&eXo.env.portal&&eXo.env.portal.language||"en",u=`${eXo.env.portal.context}/${eXo.env.portal.rest}/i18n/bundle/locale.addon.Kudos-${l}.json`;function c(){exoi18n.loadLanguageAsync(l,u).then((e=>{const t=document.createElement("div");t.id=a,new Vue({mounted(){document.dispatchEvent(new CustomEvent("hideTopBarLoading"))},template:`<kudos-overview id="${a}" v-cacheable="{cacheId: '${d}'}" />`,i18n:e,vuetify:Vue.prototype.vuetifyOptions}).$mount(t)}))}return t})()));