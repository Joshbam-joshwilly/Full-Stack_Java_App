define((()=>(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{init:()=>i}),document.dispatchEvent(new CustomEvent("displayTopBarLoading"));const o=eXo&&eXo.env.portal.language||"en",n=`${Vue.prototype.$spacesConstants.PORTAL}/${Vue.prototype.$spacesConstants.PORTAL_REST}/i18n/bundle/locale.portlet.social.SpacesListApplication-${o}.json`,a="spacesListApplication";function i(e,t){exoi18n.loadLanguageAsync(o,n).then((o=>{Vue.createApp({mounted(){document.dispatchEvent(new CustomEvent("hideTopBarLoading"))},template:`<exo-spaces-list id="${a}" filter="${e||"all"}" :can-create-space="${t}"></exo-spaces-list>`,i18n:o,vuetify:Vue.prototype.vuetifyOptions},`#${a}`,"Spaces List")}))}return t})()));