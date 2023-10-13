define((()=>(()=>{var e={6877:()=>{extensionRegistry.registerComponent("ActivityContent","activity-content-extensions",{id:"announcement",isEnabled:e=>"challenges-announcement"===(e&&e.activity).type,vueComponent:Vue.options.components["activity-announcement"],rank:5}),extensionRegistry.registerExtension("ActivityFavoriteIcon","activity-favorite-icon-extensions",{id:"favorite-challenge",type:"challenges-announcement",img:"/gamification-portlets/skin/images/challengesAppIcon.png"})}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,n),o.exports}n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";n.r(i),n.d(i,{init:()=>s});var e=function(){var e=this,t=e.$createElement;return(e._self._c||t)("activity-link",{attrs:{activity:e.activity,"activity-type-extension":e.announcementActivityTypeExtensionOptions,"is-activity-detail":e.isActivityDetail}})};e._withStripped=!0;var t=function(e,t,n,i,a,o,r,s){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=[],l._compiled=!0),c)if(l.functional){l._injectStyles=c;var p=l.render;l.render=function(e,t){return c.call(t),p(e,t)}}else{var m=l.beforeCreate;l.beforeCreate=m?[].concat(m,c):[c]}return{exports:e,options:l}}({props:{activity:{type:Object,default:null},activityTypeExtension:{type:String,default:null},isActivityDetail:{type:Boolean,default:!1}},data:()=>({announcementActivityTypeExtensionOptions:{supportsThumbnail:!0,useSameViewForMobile:!0,thumbnailProperties:{height:"90px",width:"90px",noBorder:!0},getSourceLink:()=>"#",getTitle:e=>{const t=e&&e.templateParams&&e.templateParams.announcementAssigneeUsername||"",n=e&&e.templateParams&&e.templateParams.announcementAssigneeFullName||"";return{key:"challenges.succeededChallenge",params:{0:`<a class="primary--text" href="${eXo.env.portal.context}/${eXo.env.portal.portalName}/profile/${t}">${n}</a>`}}},getThumbnail:()=>"/gamification-portlets/skin/images/challengesAppIcon.png",getSummary:e=>e&&e.templateParams&&e.templateParams.announcementChallenge||e&&e.templateParams&&e.templateParams.announcementDescription||""}})},e);t.options.__file="src/main/webapp/vue-app/challenges-extensions/components/ActivityAnnouncement.vue";const a={"activity-announcement":t.exports};for(const e in a)Vue.component(e,a[e]);n(6877);const o=window.eXo?.env?.portal?.language||"en",r=`${eXo.env.portal.context}/${eXo.env.portal.rest}/i18n/bundle/locale.portlet.Challenges-${o}.json`;function s(){exoi18n.loadLanguageAsync(o,r)}})(),i})()));