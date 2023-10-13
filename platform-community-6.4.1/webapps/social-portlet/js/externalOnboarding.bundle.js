define((()=>(()=>{"use strict";var t={d:(a,e)=>{for(var r in e)t.o(e,r)&&!t.o(a,r)&&Object.defineProperty(a,r,{enumerable:!0,get:e[r]})},o:(t,a)=>Object.prototype.hasOwnProperty.call(t,a),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},a={};t.r(a),t.d(a,{init:()=>v});var e=function(){var t=this,a=t._self._c;return a("portal-login-template",{attrs:{params:t.params,"branding-image":"",center:""}},[a("portal-external-onboarding-main",{attrs:{params:t.params}})],1)};function r(t,a,e,r,s,o,n,i){var l,d="function"==typeof t?t.options:t;if(a&&(d.render=a,d.staticRenderFns=e,d._compiled=!0),r&&(d.functional=!0),o&&(d._scopeId="data-v-"+o),n?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},d._ssrRegister=l):s&&(l=i?function(){s.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:s),l)if(d.functional){d._injectStyles=l;var p=d.render;d.render=function(t,a){return l.call(a),p(t,a)}}else{var c=d.beforeCreate;d.beforeCreate=c?[].concat(c,l):[l]}return{exports:t,options:d}}e._withStripped=!0;const s=r({props:{params:{type:Object,default:null}},created(){document.title=this.$t("externalOnboarding.pagetitle")},mounted(){this.$root.$applicationLoaded()}},e,[],!1,null,null,null).exports;var o=function(){var t=this,a=t._self._c;return a("v-card",{staticClass:"mx-auto px-4",attrs:{width:"600px","max-width":"100%",flat:""}},[t.authenticated?a("portal-external-onboarding-already-authenticated",{attrs:{params:t.params}}):"expired"===t.action?a("portal-external-onboarding-expired",{attrs:{params:t.params}}):a("portal-external-onboarding-create-user-form",{attrs:{params:t.params}})],1)};o._withStripped=!0;const n=r({props:{params:{type:Object,default:null}},computed:{action(){return this.params?.action},authenticated(){return this.params?.authenticated}}},o,[],!1,null,null,null).exports;var i=function(){var t=this,a=t._self._c;return a("v-card",{attrs:{flat:""}},[a("v-card-title",{staticClass:"primary--text subtitle-1 px-0"},[a("span",{staticClass:"mx-auto text-center"},[t._v(t._s(t.$t("onboarding.linkExpired")))])]),t._v(" "),a("div",{staticClass:"d-flex ma-0 flex-column"},[a("div",{staticClass:"pa-0"},[a("v-row",{staticClass:"mx-0 mt-8 pa-0"},[a("v-btn",{staticClass:"mx-auto login-button text-none",attrs:{"aria-label":t.$t("forgotpassword.backToLogin"),href:"/portal/login",color:"primary",width:"222","max-width":"100%",tabindex:"0",elevation:"0"}},[t._v("\n          "+t._s(t.$t("forgotpassword.backToLogin"))+"\n        ")])],1)],1)])],1)};i._withStripped=!0;const l=r({props:{params:{type:Object,default:null}},computed:{formUrl:()=>window.location.pathname}},i,[],!1,null,null,null).exports;var d=function(){var t=this,a=t._self._c;return a("v-card",{attrs:{flat:""}},[a("v-card-title",{staticClass:"primary--text subtitle-1 px-0"},[a("span",{staticClass:"mx-auto text-center"},[t._v(t._s(t.$t("onboarding.alreadyLoggedInPart1")))]),t._v(" "),a("span",{staticClass:"mx-auto text-center mt-4"},[t._v(t._s(t.$t("onboarding.alreadyLoggedInPart2")))])]),t._v(" "),a("div",{staticClass:"d-flex ma-0 flex-column"},[a("div",{staticClass:"pa-0"},[a("v-row",{staticClass:"mx-0 mt-8 pa-0"},[a("v-btn",{staticClass:"mx-auto login-button text-none",attrs:{"aria-label":t.$t("forgotpassword.backToLogin"),href:"/portal/login",color:"primary",width:"222","max-width":"100%",tabindex:"0",elevation:"0"}},[t._v("\n          "+t._s(t.$t("forgotpassword.go"))+"\n        ")])],1)],1)])],1)};d._withStripped=!0;const p=r({props:{params:{type:Object,default:null}},computed:{formUrl:()=>window.location.pathname}},d,[],!1,null,null,null).exports;var c=function(){var t=this,a=t._self._c;return a("v-card",{attrs:{flat:""}},[a("v-card-title",{staticClass:"primary--text text-break title px-0"},[t._v("\n    "+t._s(t.$t("onboarding.summary1"))+"\n  ")]),t._v(" "),a("v-card-title",{staticClass:"primary--text text-break title pa-0"},[t._v("\n    "+t._s(t.$t("onboarding.summary2"))+"\n  ")]),t._v(" "),a("form",{ref:"form",staticClass:"d-flex ma-0 flex-column",attrs:{name:"form",method:"post",autocomplete:"off"},on:{submit:function(a){return t.validateForm()}}},[a("input",{attrs:{type:"hidden",name:"action",value:"saveExternal"}}),t._v(" "),a("input",{attrs:{type:"hidden",name:"username"},domProps:{value:t.username}}),t._v(" "),a("input",{attrs:{type:"hidden",name:"initialURI"},domProps:{value:t.initialURI}}),t._v(" "),a("div",[a("v-card-title",{staticClass:"px-0 mt-4 text-break title font-weight-bold"},[t._v("\n        "+t._s(t.$t("onboarding.yourProfileTitle"))+"\n      ")]),t._v(" "),a("v-row",{staticClass:"ma-0 pa-0"},[a("v-card",{attrs:{width:"350",flat:""}},[a("v-text-field",{staticClass:"login-username border-box-sizing pt-0",attrs:{id:"email",title:t.$t("onboarding.emailPlaceholder"),readonly:t.isEmailReadOnly,tabindex:!t.isEmailReadOnly&&"0",autofocus:!t.isEmailReadOnly&&"autofocus",placeholder:t.$t("onboarding.emailPlaceholder"),name:"email","prepend-inner-icon":"fas fa-user ms-n2 grey--text text--lighten-1","aria-required":"true",type:"email",required:"required",outlined:"",dense:""},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}}),t._v(" "),a("v-text-field",{staticClass:"login-username border-box-sizing",attrs:{id:"firstName",title:t.$t("onboarding.firstName"),placeholder:t.$t("onboarding.firstName"),tabindex:t.isEmailReadOnly&&"0",autofocus:t.isEmailReadOnly&&"autofocus",name:"firstName","aria-required":"true",type:"text",required:"required",minlength:"1",maxlength:"255",outlined:"",dense:""},model:{value:t.firstName,callback:function(a){t.firstName=a},expression:"firstName"}}),t._v(" "),a("v-text-field",{staticClass:"login-username border-box-sizing",attrs:{id:"lastName",title:t.$t("onboarding.lastName"),placeholder:t.$t("onboarding.lastName"),name:"lastName","aria-required":"true",type:"text",required:"required",minlength:"1",maxlength:"255",outlined:"",dense:""},model:{value:t.lastName,callback:function(a){t.lastName=a},expression:"lastName"}})],1)],1),t._v(" "),a("v-card-title",{staticClass:"px-0 text-break title font-weight-bold"},[t._v("\n        "+t._s(t.$t("onboarding.yourPasswordTitle"))+"\n      ")]),t._v(" "),a("v-row",{staticClass:"ma-0 pa-0"},[a("v-card",{attrs:{width:"350",flat:""}},[a("v-text-field",{staticClass:"login-password border-box-sizing pt-0",attrs:{id:"password",title:t.$t("onboarding.NewPassword"),placeholder:t.$t("onboarding.NewPassword"),type:t.passwordType,"append-icon":t.showPassword?"fas fa-eye-slash subtitle-1 mt-0":"fas fa-eye subtitle-1 mt-0","prepend-inner-icon":"fas fa-lock ms-n2 grey--text text--lighten-1",name:"password",autocomplete:"new-password",required:"required",outlined:"",dense:""},on:{"click:append":t.toggleShow},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}})],1),t._v(" "),a("span",{staticClass:"caption"},[t._v(t._s(t.$t("onboarding.passwordCondition")))]),t._v(" "),a("v-card",{attrs:{width:"350",flat:""}},[a("v-text-field",{staticClass:"login-password border-box-sizing pt-2",attrs:{id:"password2",title:t.$t("onboarding.ConfirmNewPassword"),placeholder:t.$t("onboarding.ConfirmNewPassword"),type:t.passwordConfirmType,"append-icon":t.showConfirmPassword?"fas fa-eye-slash subtitle-1 mt-0":"fas fa-eye subtitle-1 mt-0","prepend-inner-icon":"fas fa-lock ms-n2 grey--text text--lighten-1",name:"password2",autocomplete:"new-password",required:"required",outlined:"",dense:""},on:{"click:append":t.toggleConfirmShow},model:{value:t.confirmPassword,callback:function(a){t.confirmPassword=a},expression:"confirmPassword"}})],1),t._v(" "),a("span",{staticClass:"mt-4"},[t._v(t._s(t.$t("onboarding.captchaCondition")))]),t._v(" "),a("v-card",{staticClass:"d-flex mt-4",attrs:{width:"350",flat:""}},[a("v-img",{staticClass:"primary me-2 rounded-lg",attrs:{src:"/portal/external-registration?serveCaptcha=true",width:"150",heigh:"40",eager:"",contain:""}}),t._v(" "),a("v-text-field",{staticClass:"login-username border-box-sizing pa-0 mt-1",attrs:{id:"captcha",title:t.$t("onboarding.captchaPlaceholder"),placeholder:t.$t("onboarding.captchaPlaceholder"),name:"captcha","aria-required":"true",type:"text",required:"required",outlined:"",dense:""},model:{value:t.captcha,callback:function(a){t.captcha=a},expression:"captcha"}})],1)],1),t._v(" "),a("v-row",{staticClass:"mx-0 my-8 pa-0"},[a("v-btn",{staticClass:"login-button btn-primary text-none mx-auto",attrs:{"aria-label":t.$t("onboarding.save"),disabled:t.disabled,loading:t.loading,type:"submit",width:"222","max-width":"100%",color:"primary",elevation:"0"}},[t._v("\n          "+t._s(t.$t("onboarding.save"))+"\n        ")])],1)],1)])],1)};c._withStripped=!0;const m={"portal-external-onboarding":s,"portal-external-onboarding-main":n,"portal-external-onboarding-expired":l,"portal-external-onboarding-already-authenticated":p,"portal-external-onboarding-create-user-form":r({props:{params:{type:Object,default:null}},data:()=>({username:null,email:null,firstName:null,lastName:null,password:null,confirmPassword:null,captcha:null,initialURI:null,showPassword:!1,showConfirmPassword:!1,loading:!1}),computed:{passwordType(){return this.showPassword?"text":"password"},passwordConfirmType(){return this.showConfirmPassword?"text":"password"},isEmailReadOnly(){return!this.username},disabled(){return!(this.email?.length&&this.firstName?.length&&this.lastName?.length&&this.password?.length&&this.confirmPassword?.length&&this.captcha?.length)}},mounted(){this.username=this.params?.username,this.email=this.params?.email,this.firstName=this.params?.firstName,this.lastName=this.params?.lastName,this.password=this.params?.password,this.confirmPassword=this.params?.password2,this.initialURI=this.params?.initialURI},methods:{toggleShow(){this.showPassword=!this.showPassword},toggleConfirmShow(){this.showConfirmPassword=!this.showConfirmPassword},validateForm(){return this.loading=this.$refs.form.reportValidity(),window.setTimeout((()=>this.loading=!1),1e4),!this.disabled}}},c,[],!1,null,null,null).exports};for(const t in m)Vue.component(t,m[t]);const u=extensionRegistry.loadComponents("ForgotPassword");u&&u.length>0&&u.forEach((t=>{Vue.component(t.componentName,t.componentOptions)}));const h="externalRegisterApplication",f="undefined"!=typeof eXo?eXo.env.portal.language:"en",g=[`${eXo.env.portal.context}/${eXo.env.portal.rest}/i18n/bundle/locale.portlet.Login-${f}.json`,`${eXo.env.portal.context}/${eXo.env.portal.rest}/i18n/bundle/locale.portal.login-${f}.json`];function v(t){exoi18n.loadLanguageAsync(f,g).then((a=>{Vue.createApp({data:{params:t},template:`<portal-external-onboarding id="${h}" :params="params" />`,vuetify:Vue.prototype.vuetifyOptions,i18n:a},`#${h}`,"External Onboarding")}))}return a})()));