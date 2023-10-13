define((()=>(()=>{"use strict";var e={d:(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{init:()=>x});var r=function(){var e=this,t=e._self._c;return t("v-app",{staticClass:"white",class:e.owner?"profileContactInformation":"profileContactInformationOther"},[t("v-toolbar",{staticClass:"border-box-sizing",attrs:{color:"white",flat:""}},[t("div",{staticClass:"text-header-title text-sub-title profileContactTitle"},[e._v("\n      "+e._s(e.title)+"\n    ")]),e._v(" "),t("v-spacer"),e._v(" "),e.owner?t("v-btn",{attrs:{id:"profileContactEditButton",icon:"",outlined:"",small:""},on:{click:e.editContactInformation}},[t("v-icon",{attrs:{size:"18"}},[e._v("fas fa-edit")])],1):e._e()],1),e._v(" "),t("div",{staticClass:"px-4 pb-6 white"},e._l(e.properties,(function(r){return t("div",{key:r.id},[r.children&&r.children.length?t("profile-multi-valued-property",{attrs:{property:r}}):r&&r.visible&&r.value?[t("v-flex",{staticClass:"d-flex"},[t("div",{staticClass:"align-start text-no-wrap font-weight-bold me-3"},[e._v("\n            "+e._s(e.getResolvedName(r))+"\n          ")]),e._v(" "),t("div",{directives:[{name:"autolinker",rawName:"v-autolinker",value:r.value,expression:"property.value"}],staticClass:"align-end flex-grow-1 text-truncate text-end"},[e._v("\n            "+e._s(r.value)+"\n          ")])]),e._v(" "),t("v-divider",{staticClass:"my-4"})]:e._e()],2)})),0),e._v(" "),e.owner?t("profile-contact-information-drawer",{ref:"contactInformationEdit",attrs:{"upload-limit":e.uploadLimit},on:{refresh:e.refresh}}):e._e()],1)};r._withStripped=!0;const o={props:{uploadLimit:{type:Number,default:()=>0}},data:()=>({owner:eXo.env.portal.profileOwner===eXo.env.portal.userName,properties:[],user:null}),computed:{title(){return this.owner&&this.$t("profileContactInformation.yourContactInformation")||this.$t("profileContactInformation.contactInformation")}},created(){this.refreshProperties()},mounted(){document.addEventListener("userPropertiesModified",(()=>{this.refreshProperties(!0)})),this.properties&&this.$nextTick().then((()=>this.$root.$emit("application-loaded")))},methods:{refreshProperties(e){return this.$userService.getUser(eXo.env.portal.profileOwner,"settings").then((t=>{this.user=t,this.properties=t?.properties.filter((e=>e.active)).sort(((e,t)=>e.order>t.order?1:e.order<t.order?-1:0)),this.$nextTick().then((()=>this.$root.$emit("application-loaded"))),e&&document.dispatchEvent(new CustomEvent("userModified",{detail:this.user}))})).finally((()=>this.$root.$applicationLoaded()))},editContactInformation(){this.$root.$emit("open-profile-contact-information-drawer",this.properties)},getResolvedName(e){const t=eXo&&eXo.env.portal.language||"en",r=e.labels?e.labels.find((e=>e.language===t)):null;return r?r.label:this.$t&&this.$t(`profileContactInformation.${e.propertyName}`)!==`profileContactInformation.${e.propertyName}`?this.$t(`profileContactInformation.${e.propertyName}`):e.propertyName}}};function i(e,t,r,o,i,a,n,s){var l,p="function"==typeof e?e.options:e;if(t&&(p.render=t,p.staticRenderFns=r,p._compiled=!0),o&&(p.functional=!0),a&&(p._scopeId="data-v-"+a),n?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(n)},p._ssrRegister=l):i&&(l=s?function(){i.call(this,(p.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(p.functional){p._injectStyles=l;var d=p.render;p.render=function(e,t){return l.call(t),d(e,t)}}else{var c=p.beforeCreate;p.beforeCreate=c?[].concat(c,l):[l]}return{exports:e,options:p}}const a=i(o,r,[],!1,null,null,null).exports;var n=function(){var e=this,t=e._self._c;return t("exo-drawer",{ref:"profileContactInformationDrawer",staticClass:"profileContactInformationDrawer",attrs:{"body-classes":"hide-scroll decrease-z-index-more",right:""}},[t("template",{slot:"title"},[e._v("\n    "+e._s(e.$t("profileContactInformation.contactInformation"))+"\n  ")]),e._v(" "),t("template",{slot:"content"},[t("v-form",{ref:"profileContactForm",staticClass:"form-horizontal",attrs:{flat:""}},[e.error?t("v-card-text",{staticClass:"errorMessage"},[t("v-alert",{attrs:{type:"error"}},[e._v("\n          "+e._s(e.error)+"\n        ")])],1):e._e(),e._v(" "),e._l(e.properties,(function(r){return t("div",{key:r.id},[r.editable&&(r.multiValued||r.children&&r.children.length)?t("profile-contact-edit-multi-field",{attrs:{property:r},on:{propertyUpdated:e.propertyUpdated}}):r.editable?t("div",[t("v-card-text",{staticClass:"d-flex flex-grow-1 text-no-wrap text-left font-weight-bold pb-2"},[e._v("\n            "+e._s(e.getResolvedName(r))),r.required?t("span",[e._v("*")]):e._e()]),e._v(" "),t("v-card-text",{staticClass:"d-flex py-0"},[t("v-card-text",{directives:[{name:"exo-tooltip",rawName:"v-exo-tooltip.bottom.body",value:e.disabledField(r)?e.$t("profileContactInformation.synchronizedUser.tooltip"):e.$t("profileContactInformation."+r.propertyName),expression:"disabledField(property) ? $t('profileContactInformation.synchronizedUser.tooltip') :$t('profileContactInformation.'+property.propertyName)",modifiers:{bottom:!0,body:!0}}],staticClass:"d-flex pa-0"},["checkbox"==("email"===r.propertyName?"email":"text")?t("input",{directives:[{name:"model",rawName:"v-model",value:r.value,expression:"property.value"}],ref:`${r.propertyName}Input`,refInFor:!0,staticClass:"ignore-vuetify-classes",attrs:{disabled:e.saving||e.disabledField(r),maxlength:"2000",required:r.required,type:"checkbox"},domProps:{checked:Array.isArray(r.value)?e._i(r.value,null)>-1:r.value},on:{change:[function(t){var o=r.value,i=t.target,a=!!i.checked;if(Array.isArray(o)){var n=e._i(o,null);i.checked?n<0&&e.$set(r,"value",o.concat([null])):n>-1&&e.$set(r,"value",o.slice(0,n).concat(o.slice(n+1)))}else e.$set(r,"value",a)},function(t){return e.propertyUpdated(r)}],input:function(t){return e.propertyUpdated(r)}}}):"radio"==("email"===r.propertyName?"email":"text")?t("input",{directives:[{name:"model",rawName:"v-model",value:r.value,expression:"property.value"}],ref:`${r.propertyName}Input`,refInFor:!0,staticClass:"ignore-vuetify-classes",attrs:{disabled:e.saving||e.disabledField(r),maxlength:"2000",required:r.required,type:"radio"},domProps:{checked:e._q(r.value,null)},on:{change:[function(t){return e.$set(r,"value",null)},function(t){return e.propertyUpdated(r)}],input:function(t){return e.propertyUpdated(r)}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:r.value,expression:"property.value"}],ref:`${r.propertyName}Input`,refInFor:!0,staticClass:"ignore-vuetify-classes",attrs:{disabled:e.saving||e.disabledField(r),maxlength:"2000",required:r.required,type:"email"===r.propertyName?"email":"text"},domProps:{value:r.value},on:{change:function(t){return e.propertyUpdated(r)},input:[function(t){t.target.composing||e.$set(r,"value",t.target.value)},function(t){return e.propertyUpdated(r)}]}})])],1)],1):e._e()],1)}))],2)],1),e._v(" "),t("template",{slot:"footer"},[t("div",{staticClass:"d-flex"},[t("v-spacer"),e._v(" "),t("v-btn",{staticClass:"btn me-2",attrs:{disabled:e.saving},on:{click:e.cancel}},[e._v("\n        "+e._s(e.$t("profileContactInformation.button.cancel"))+"\n      ")]),e._v(" "),t("v-btn",{staticClass:"btn btn-primary",attrs:{disabled:e.disabled,loading:e.saving},on:{click:e.save}},[e._v("\n        "+e._s(e.$t("profileContactInformation.button.save"))+"\n      ")])],1)])],2)};n._withStripped=!0;const s={data:()=>({propertiesToSave:[],properties:[],error:null,saving:null,fieldError:!1,avatarData:null,cropOptions:{aspectRatio:1,viewMode:1},disabled:!0}),created(){this.$root.$on("open-profile-contact-information-drawer",this.open)},methods:{resetCustomValidity(){this.$refs.emailInput&&this.$refs.emailInput[0].setCustomValidity(""),this.$refs.firstNameInput&&this.$refs.firstNameInput[0].setCustomValidity(""),this.$refs.lastNameInput&&this.$refs.lastNameInput[0].setCustomValidity(""),this.$root.$emit("reset-custom-validity")},disabledField:e=>!e.internal&&("firstName"===e.propertyName||"lastName"===e.propertyName||"email"===e.propertyName),save(){this.error=null,this.fieldError=!1,this.resetCustomValidity();let e=this.propertiesToSave.find((e=>"urls"===e.propertyName));if(e&&e.children.length>0){let t=!1;e.children.forEach((e=>{e.value&&0!==e.value.length&&String(e.value).match(/((http(s)?:\/\/.)|www.)[-a-zA-Z0-9@:%._\\+~#=]{2,256}/g)||(this.$root.$emit("non-valid-url-input",e.value),t=!0)})),t||this.$root.$emit("reset-custom-validity")}if(e=this.propertiesToSave.find((e=>"email"===e.propertyName)),e&&(e.value&&(e.value.length>100||e.value.length<10)||!e.value?this.$refs.emailInput[0].setCustomValidity(this.$t("profileWorkExperiences.invalidFieldLength",{0:this.$t("profileContactInformation.email"),1:10,2:100})):this.$refs.emailInput[0].setCustomValidity("")),this.$refs.profileContactForm.validate()&&this.$refs.profileContactForm.$el.reportValidity())return this.$refs.profileContactInformationDrawer.startLoading(),this.saving=!0,fetch(`${eXo.env.portal.context}/${eXo.env.portal.rest}/v1/social/users/${eXo.env.portal.userName}/profile/properties`,{method:"PATCH",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(this.propertiesToSave)}).then((e=>{if(!e||!e.ok){if(400===e.status)return e.text().then((e=>{throw this.fieldError=e,new Error(e)}));throw new Error(this.$t("IDMManagement.error.UnknownServerError"))}})).then(this.refresh).then((()=>this.$refs.profileContactInformationDrawer.close())).catch(this.handleError).finally((()=>{this.saving=!1,this.disabled=!0,this.$refs.profileContactInformationDrawer.endLoading()}))},handleError(e){if(this.resetCustomValidity(),e){if(String(e).indexOf(this.$uploadService.avatarExcceedsLimitError)>=0)this.error=this.$t("profileHeader.label.avatarExcceededAllowedSize",{0:this.uploadLimit});else if(this.fieldError&&0===this.fieldError.indexOf("FIRSTNAME:")){const e=this.fieldError.replace("FIRSTNAME:","");this.$refs.firstNameInput&&this.$refs.firstNameInput[0].setCustomValidity(e)}else if(this.fieldError&&0===this.fieldError.indexOf("LASTNAME:")){const e=this.fieldError.replace("LASTNAME:","");this.$refs.lastNameInput&&this.$refs.lastNameInput[0].setCustomValidity(e)}else if(this.fieldError&&0===this.fieldError.indexOf("EMAIL:"))if("EMAIL:ALREADY_EXISTS"===this.fieldError)this.$refs.emailInput&&this.$refs.emailInput[0].setCustomValidity(this.$t("UsersManagement.message.userWithSameEmailAlreadyExists"));else{const e=this.fieldError.replace("EMAIL:","");this.$refs.emailInput&&this.$refs.emailInput[0].setCustomValidity(e)}else{const t=`UsersManagement.error.${e=e.message||String(e)}`,r=this.$t(t,{0:this.userToSave.fullname});r!==t&&(e=r),this.error=e,window.setTimeout((()=>{this.error=null}),5e3)}window.setTimeout((()=>{this.$refs.profileContactForm.validate()&&this.$refs.profileContactForm.$el.reportValidity()}),200)}else this.error=null},refresh(){this.propertiesToSave=[],document.dispatchEvent(new CustomEvent("userPropertiesModified"))},cancel(){this.refresh(),this.$refs.profileContactInformationDrawer.close()},open(e){this.error=null,e&&(this.properties=JSON.parse(JSON.stringify(e))),this.$refs.profileContactInformationDrawer.open()},propertyUpdated(e){this.disabled=!1,this.propertiesToSave.some((t=>t.id===e.id))||this.propertiesToSave.push(e)},getResolvedName(e){const t=eXo&&eXo.env.portal.language||"en",r=e.labels?e.labels.find((e=>e.language===t)):null;return r?r.label:this.$t&&this.$t(`profileContactInformation.${e.propertyName}`)!==`profileContactInformation.${e.propertyName}`?this.$t(`profileContactInformation.${e.propertyName}`):e.propertyName}}},l=i(s,n,[],!1,null,null,null).exports;var p=function(){var e=this,t=e._self._c;return e.property&&e.property.visible&&e.hasValues?t("div",[t("v-flex",{staticClass:"d-flex"},[t("div",{staticClass:"align-start text-no-wrap font-weight-bold me-3"},[e._v("\n      "+e._s(e.getResolvedName(e.property))+"\n    ")]),e._v(" "),t("div",{staticClass:"align-end flex-grow-1 text-truncate text-end"},e._l(e.property.children,(function(r,o){return t("div",{key:o,staticClass:"text-no-wrap text-truncate",attrs:{title:r.value}},[r.value&&r.visible&&r.active||e.property.multiValued&&e.property.active&&e.property.visible&&r.value?[r.propertyName?t("span",{staticClass:"pe-1 text-capitalize"},[e._v("\n            "+e._s(e.getResolvedName(r))+":\n          ")]):e._e(),e._v(" "),t("span",{directives:[{name:"autolinker",rawName:"v-autolinker",value:r.value,expression:"childProperty.value"}]})]:e._e()],2)})),0)]),e._v(" "),t("v-divider",{staticClass:"my-4"})],1):e._e()};p._withStripped=!0;const d={props:{property:{type:Object,default:()=>null}},computed:{hasValues(){return!!(this.property&&this.property.children&&this.property.children.length&&this.property.children.some((e=>e.value)))}},methods:{getResolvedName(e){const t=eXo&&eXo.env.portal.language||"en",r=e.labels?e.labels.find((e=>e.language===t)):null;return r?r.label:this.$t&&this.$t(`profileContactInformation.${e.propertyName}`)!==`profileContactInformation.${e.propertyName}`?this.$t(`profileContactInformation.${e.propertyName}`):e.propertyName}}},c=i(d,p,[],!1,null,null,null).exports;var u=function(){var e=this,t=e._self._c;return t("v-card-text",{staticClass:"text-color pb-2"},[t("div",{staticClass:"d-flex"},[t("div",{staticClass:"align-start flex-grow-1 text-no-wrap text-left font-weight-bold d-flex align-center"},[t("span",[e._v("\n        "+e._s(e.getResolvedName(e.property))+"\n      ")])]),e._v(" "),t("div",{staticClass:"align-end flex-grow-1 text-no-wrap text-end"},[t("v-btn",{staticClass:"px-0",attrs:{color:"primary",outlined:"",link:"",text:""},on:{click:e.addNewItem}},[e._v("\n        + "+e._s(e.$t("profileContactInformation.addNew"))+"\n      ")])],1)]),e._v(" "),e._l(e.property.children,(function(r,o){return t("v-flex",{key:o},[r.isNew||r.visible&&r.active&&r.value||e.property.multiValued&&e.property.active&&e.property.visible&&r.value?t("profile-contact-edit-multi-field-select",{attrs:{property:r,properties:e.property.children,"multi-valued":e.property.multiValued},on:{propertyUpdated:e.propertyUpdated,remove:function(t){return e.remove(o)}}}):e._e()],1)}))],2)};u._withStripped=!0;const f={props:{property:{type:Object,default:()=>null}},methods:{remove(e){this.property.children[e].isNew?this.property.children.splice(e,1):this.property.children[e].value=null,this.$emit("propertyUpdated",this.property)},addNewItem(){this.property.children.push({isNew:!0}),this.$forceUpdate()},propertyUpdated(){this.$emit("propertyUpdated",this.property)},getResolvedName(e){const t=eXo&&eXo.env.portal.language||"en",r=e.labels?e.labels.find((e=>e.language===t)):null;return r?r.label:this.$t&&this.$t(`profileContactInformation.${e.propertyName}`)!==`profileContactInformation.${e.propertyName}`?this.$t(`profileContactInformation.${e.propertyName}`):e.propertyName}}},m=i(f,u,[],!1,null,null,null).exports;var v=function(){var e=this,t=e._self._c;return e.property.value||e.property.isNew?t("div",{staticClass:"d-flex flex-no-wrap pb-2 multiField"},[e.properties&&e.properties.length&&!e.multiValued?t("select",{directives:[{name:"model",rawName:"v-model",value:e.property.propertyName,expression:"property.propertyName"}],staticClass:"ignore-vuetify-classes align-start flex-grow-0 half-width text-capitalize",on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.property,"propertyName",t.target.multiple?r:r[0])},function(t){return e.$emit("propertyUpdated")}]}},e._l(e.filtredProperties,(function(r){return t("option",{key:r.propertyName,staticClass:"text-capitalize",domProps:{value:r.propertyName}},[e._v("\n      "+e._s(e.getResolvedName(r))+"\n    ")])})),0):e._e(),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.property.value,expression:"property.value"}],ref:"multiInput",staticClass:"ignore-vuetify-classes align-end flex-grow-1",attrs:{title:e.property.value,type:"text",maxlength:"2000"},domProps:{value:e.property.value},on:{change:function(t){return e.$emit("propertyUpdated")},input:[function(t){t.target.composing||e.$set(e.property,"value",t.target.value)},function(t){return e.$emit("propertyUpdated")}]}}),e._v(" "),t("v-icon",{staticClass:"removeMultiFieldValue error--text",attrs:{small:""},on:{click:function(t){return e.$emit("remove")}}},[e._v("\n    fa-minus\n  ")])],1):e._e()};v._withStripped=!0;const h={props:{property:{type:Object,default:()=>null},properties:{type:Array,default:()=>null},multiValued:{type:Boolean,default:()=>null}},created(){this.$root.$on("non-valid-url-input",this.showError),this.$root.$on("reset-custom-validity",this.resetCustomValidity)},computed:{filtredProperties(){return this.properties.filter(((e,t,r)=>e.isNew&&!e.value||t===r.findIndex((t=>t.propertyName===e.propertyName))&&e.visible&&e.active))}},methods:{getResolvedName(e){const t=eXo&&eXo.env.portal.language||"en",r=e.labels?e.labels.find((e=>e.language===t)):null;return r?r.label:this.$t&&this.$t(`profileContactInformation.${e.propertyName}`)!==`profileContactInformation.${e.propertyName}`?this.$t(`profileContactInformation.${e.propertyName}`):e.propertyName},showError(e){this.$refs.multiInput&&this.$refs.multiInput.value===e&&this.$refs.multiInput.setCustomValidity(this.$t("profileContactInformation.invalidUrlFormat"))},resetCustomValidity(){this.$refs.multiInput&&this.$refs.multiInput.setCustomValidity("")}}},y={"profile-contact-information":a,"profile-multi-valued-property":c,"profile-contact-information-drawer":l,"profile-contact-edit-multi-field":m,"profile-contact-edit-multi-field-select":i(h,v,[],!1,null,null,null).exports};for(const e in y)Vue.component(e,y[e]);if(extensionRegistry){const e=extensionRegistry.loadComponents("ProfileContactInformation");e&&e.length>0&&e.forEach((e=>{Vue.component(e.componentName,e.componentOptions)}))}document.dispatchEvent(new CustomEvent("displayTopBarLoading"));const $=eXo&&eXo.env.portal.language||"en",g="ProfileContactInformation",C=`${g}_${eXo.env.portal.profileOwnerIdentityId}`,_=[`${eXo.env.portal.context}/${eXo.env.portal.rest}/i18n/bundle/locale.portlet.social.ProfileContactInformation-${$}.json`,`${eXo.env.portal.context}/${eXo.env.portal.rest}/i18n/bundle/locale.portlet.Portlets-${$}.json`];function x(e,t){exoi18n.loadLanguageAsync($,_).then((r=>{const o=document.createElement("div");o.id=g,Vue.createApp({data:()=>({imTypes:t}),mounted(){document.dispatchEvent(new CustomEvent("hideTopBarLoading"))},template:`<profile-contact-information v-cacheable="{cacheId: '${C}'}" id="${g}" :upload-limit="${e}" />`,i18n:r,vuetify:Vue.prototype.vuetifyOptions},o,"Profile Contact Information")}))}return t})()));