define((()=>(()=>{"use strict";var t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{init:()=>l});var n=function(){var t=this,e=t._self._c;return e("v-app",{attrs:{role:"main",id:"automaticTranslationAdministration"}},[e("v-alert",{attrs:{type:t.type,dismissible:""},model:{value:t.alert,callback:function(e){t.alert=e},expression:"alert"}},[t._v("\n    "+t._s(t.message)+"\n  ")]),t._v(" "),e("v-main",{staticClass:"white rounded-lg pa-5"},[e("v-container",{attrs:{fluid:""}},[e("v-row",[e("h4",{staticClass:"font-weight-bold"},[t._v("\n          "+t._s(t.$t("automatic.translation.administration.title"))+"\n        ")])]),t._v(" "),e("v-row",{staticClass:"pt-5"},[t._v("\n        "+t._s(t.$t("automatic.translation.administration.header"))+"\n      ")]),t._v(" "),e("v-row",[e("v-col",{staticClass:"ps-0",attrs:{cols:"4"}},[e("v-select",{ref:"connectorSelector",staticClass:"pt-1",attrs:{id:"connectorSelector",items:t.connectors,"item-text":"description","item-value":"name",outlined:"",height:"40",dense:""},on:{change:function(e){return t.changeConnector()},blur:function(e){return t.closeSelect()}},model:{value:t.selectedConnector,callback:function(e){t.selectedConnector=e},expression:"selectedConnector"}})],1)],1),t._v(" "),""!=this.selectedConnector&&"none"!=this.selectedConnector?e("v-row",{staticClass:"pt-5"},[t._v("\n        "+t._s(t.$t("automatic.translation.administration.enterYourKey"))+"\n      ")]):t._e(),t._v(" "),""!=this.selectedConnector&&"none"!=this.selectedConnector?e("v-row",[e("v-col",{staticClass:"ps-0",attrs:{cols:"4"}},[e("div",{staticClass:"d-flex"},[e("v-text-field",{ref:t.apiKey,staticClass:"pa-0",attrs:{placeholder:t.$t("automatic.translation.administration.apiKeyPlaceHolder"),outlined:"",dense:""},model:{value:t.apiKey,callback:function(e){t.apiKey=e},expression:"apiKey"}}),t._v(" "),e("v-btn",{staticClass:"btn btn-primary ms-8",attrs:{height:"42"},on:{click:t.editApiKey}},[t._v("\n              "+t._s(t.$t("automatic.translation.apikey.button.save"))+"\n            ")])],1)])],1):t._e()],1)],1)],1)};n._withStripped=!0;var o=function(t,e,n,o,a,i,s,r){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=[],l._compiled=!0),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(t,e){return c.call(e),d(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:l}}({data:()=>({connectors:[],selectedConnector:"",alert:!1,type:"",message:"",apiKey:""}),mounted(){this.$nextTick().then((()=>this.$root.$emit("application-loaded")))},created(){this.$root.$on("show-alert",(t=>{this.displayMessage(t)})),this.getConfiguration()},methods:{getConfiguration(){fetch(`${eXo.env.portal.context}/${eXo.env.portal.rest}/automatic-translation/configuration`,{headers:{"Content-Type":"application/json"},method:"GET"}).then((t=>{if(t&&t.ok)return t.json();throw new Error("Unable to get automatic translation configuration")})).then((t=>{this.connectors=t&&t.connectors||[],this.connectors.unshift({name:"none",description:this.$t("automatic.translation.administration.noconnectorselected")}),this.selectedConnector=t&&t.activeConnector||"none",this.apiKey=t&&t.activeApiKey||""}))},closeSelect(){this.$refs.connectorSelector&&this.$refs.connectorSelector.isMenuActive&&window.setTimeout((()=>{this.$refs.connectorSelector.isMenuActive=!1}),100)},changeConnector(){let t=null;"none"!==this.selectedConnector&&(t=this.selectedConnector),function(t){return fetch(`${eXo.env.portal.context}/${eXo.env.portal.rest}/automatic-translation/setActiveConnector?connector=${t}`,{headers:{"Content-Type":"application/json"},method:"PUT"})}(t).then((e=>{let n="",o="";e&&e.ok?(n=null===t?this.$t("automatic.translation.administration.changeConnector.noconnector.confirm"):this.$t("automatic.translation.administration.changeConnector.confirm"),o="success"):(o="error",n=this.$t("automatic.translation.administration.changeConnector.error")),this.$root.$emit("show-alert",{type:o,message:n}),this.getConfiguration()}))},editApiKey(){var t,e;(t=this.selectedConnector,e=this.apiKey,fetch(`${eXo.env.portal.context}/${eXo.env.portal.rest}/automatic-translation/setApiKey?connector=${t}&apikey=${e}`,{headers:{"Content-Type":"application/json"},method:"PUT"})).then((t=>{let e="",n="";t&&t.ok?(e=""===this.apiKey?this.$t("automatic.translation.administration.changeApiKey.emptykey.confirm"):this.$t("automatic.translation.administration.changeApiKey.confirm"),n="success"):(n="error",e=this.$t("automatic.translation.administration.changeApiKey.error")),this.$root.$emit("show-alert",{type:n,message:e}),this.getConfiguration()}))},displayMessage(t){this.message=t.message,this.type=t.type,this.alert=!0,window.setTimeout((()=>this.alert=!1),5e3)}}},n);const a={"automatic-translation-administration-app":o.exports};for(const t in a)Vue.component(t,a[t]);Vue.use(Vuetify);const i=new Vuetify(eXo.env.portal.vuetifyPreset);document.dispatchEvent(new CustomEvent("displayTopBarLoading"));const s="automaticTranslationAdministration",r="undefined"!=typeof eXo?eXo.env.portal.language:"en",c=`${eXo.env.portal.context}/${eXo.env.portal.rest}/i18n/bundle/locale.portlet.automaticTranslation.automaticTranslationAdministration-${r}.json`;function l(){exoi18n.loadLanguageAsync(r,c).then((t=>{const e=document.createElement("div");e.id=s,new Vue({mounted(){document.dispatchEvent(new CustomEvent("hideTopBarLoading"))},template:`<automatic-translation-administration-app v-cacheable id="${s}" />`,vuetify:i,i18n:t}).$mount(e)}))}return e})()));