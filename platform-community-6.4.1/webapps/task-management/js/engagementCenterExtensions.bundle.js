define((()=>(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{init:()=>n});const o=["commentTask","completeTaskAssigned","completeTaskCoworker","createNewTask","updateTask"];function n(){extensionRegistry.registerExtension("engagementCenterActions","user-actions",{type:"task",options:{rank:50,icon:"fas fa-tasks",match:e=>o.includes(e),getLabel:()=>""}})}return t})()));