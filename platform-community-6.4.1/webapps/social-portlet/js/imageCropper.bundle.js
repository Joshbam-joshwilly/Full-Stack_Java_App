define((()=>(()=>{"use strict";var e={};(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);var t=function(){var e=this,t=e._self._c;return t("exo-drawer",{ref:"drawer",attrs:{id:"translationDrawer","allow-expand":"",right:"","disable-pull-to-refresh":""},on:{closed:e.resetCropper},scopedSlots:e._u([{key:"title",fn:function(){return[t("span",{staticClass:"text-capitalize-first-letter"},[e._v("\n      "+e._s(e.$t(e.title))+"\n    ")])]},proxy:!0},{key:"content",fn:function(){return[t("v-card",{directives:[{name:"resize",rawName:"v-resize",value:e.onCanvasResize,expression:"onCanvasResize"}],ref:"imageCropperCanvasParent",staticClass:"pa-4 content-box-sizing overflow-hidden",attrs:{"max-width":"100%",flat:""}},[t("v-card",{staticClass:"border-color mx-auto primary position-relative",class:e.circle?"cropper-circle":e.rounded&&"cropper-rounded",attrs:{height:e.height,width:e.width,"max-height":e.height,"max-width":e.maxWidth,flat:""}},[e.imageData?t("img",{ref:"imageCrop",attrs:{src:e.imageData,width:`${e.width}px`,height:`${e.height}px`,alt:"Picture to crop"}}):e._e()]),e._v(" "),t("div",{staticClass:"d-flex mt-4"},[t("div",{staticClass:"flex-grow-0",attrs:{title:e.$t("imageCropDrawer.uploadImage")}},[e.resetInput?e._e():t("v-file-input",{ref:"imageFileInput",staticClass:"file-selector pa-0 ma-0",attrs:{title:e.$t("imageCropDrawer.uploadImage"),id:"imageFileInput",accept:"image/*","prepend-icon":"fas fa-camera z-index-two rounded-circle primary-border-color white py-1 ms-3",rounded:"",clearable:"",dense:""},on:{change:e.uploadFile}})],1),e._v(" "),t("div",{staticClass:"d-flex flex-grow-1 d-flex align-center justify-end"},[t("v-btn",{attrs:{title:e.$t("imageCropDrawer.moveRight"),id:"moveImageToRight",icon:"",outlined:""},on:{click:function(t){return e.move(-10,0)}}},[t("v-icon",{staticClass:"fa-flip-horizontal",attrs:{size:"18"}},[e._v("fas fa-arrow-right")])],1),e._v(" "),t("v-btn",{attrs:{title:e.$t("imageCropDrawer.moveLeft"),id:"moveImageToLeft",icon:"",outlined:""},on:{click:function(t){return e.move(10,0)}}},[t("v-icon",{staticClass:"fa-flip-horizontal",attrs:{size:"18"}},[e._v("fas fa-arrow-left")])],1),e._v(" "),t("v-btn",{attrs:{title:e.$t("imageCropDrawer.moveUp"),id:"moveImageToUp",icon:"",outlined:""},on:{click:function(t){return e.move(0,-10)}}},[t("v-icon",{staticClass:"fa-flip-horizontal",attrs:{size:"18"}},[e._v("fas fa-arrow-up")])],1),e._v(" "),t("v-btn",{attrs:{title:e.$t("imageCropDrawer.moveDown"),id:"moveImageToBottom",icon:"",outlined:""},on:{click:function(t){return e.move(0,10)}}},[t("v-icon",{staticClass:"fa-flip-horizontal",attrs:{size:"18"}},[e._v("fas fa-arrow-down")])],1),e._v(" "),t("v-btn",{attrs:{title:e.$t("imageCropDrawer.rotateRight"),id:"rotateImageToRight",icon:"",outlined:""},on:{click:e.rotateRight}},[t("v-icon",{staticClass:"fa-flip-horizontal",attrs:{size:"18"}},[e._v("fas fa-undo")])],1),e._v(" "),t("v-btn",{attrs:{title:e.$t("imageCropDrawer.rotateLeft"),id:"rotateImageToLeft",icon:"",outlined:""},on:{click:e.rotateLeft}},[t("v-icon",{attrs:{size:"18"}},[e._v("fas fa-undo")])],1)],1)]),e._v(" "),t("div",{staticClass:"d-flex mt-4"},[t("div",{staticClass:"flex-grow-0 pt-1 pe-2"},[e._v("\n          "+e._s(e.$t("imageCropDrawer.zoom"))+"\n        ")]),e._v(" "),t("div",{staticClass:"flex-grow-1 d-flex"},[t("v-btn",{attrs:{title:e.$t("imageCropDrawer.zoomOut"),id:"zoomImageOut",icon:"",outlined:""},on:{click:function(t){e.zoom-=e.stepZoom}}},[t("v-icon",{attrs:{size:"18"}},[e._v("fas fa-search-minus")])],1),e._v(" "),t("v-slider",{staticClass:"mx-n1",attrs:{step:e.stepZoom,min:e.minZoom,max:e.maxZoom},model:{value:e.zoom,callback:function(t){e.zoom=t},expression:"zoom"}}),e._v(" "),t("v-btn",{attrs:{title:e.$t("imageCropDrawer.zoomIn"),id:"zoomImageIn",icon:"",outlined:""},on:{click:function(t){e.zoom+=e.stepZoom}}},[t("v-icon",{attrs:{size:"18"}},[e._v("fas fa-search-plus")])],1)],1)])],1)]},proxy:!0},{key:"footer",fn:function(){return[t("div",{staticClass:"d-flex"},[t("v-spacer"),e._v(" "),t("v-btn",{staticClass:"btn me-2",attrs:{id:"imageCropDrawerCancel"},on:{click:e.close}},[e._v("\n        "+e._s(e.$t("imageCropDrawer.cancel"))+"\n      ")]),e._v(" "),t("v-btn",{staticClass:"btn btn-primary",attrs:{loading:e.sendingImage,id:"imageCropDrawerApply"},on:{click:e.apply}},[e._v("\n        "+e._s(e.$t("imageCropDrawer.apply"))+"\n      ")])],1)]},proxy:!0}]),model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}})};t._withStripped=!0;var i=function(e,t,i,a,r,o,s,n){var l,p="function"==typeof e?e.options:e;if(t&&(p.render=t,p.staticRenderFns=[],p._compiled=!0),l)if(p.functional){p._injectStyles=l;var m=p.render;p.render=function(e,t){return l.call(t),m(e,t)}}else{var h=p.beforeCreate;p.beforeCreate=h?[].concat(h,l):[l]}return{exports:e,options:p}}({props:{value:{type:Object,default:null},src:{type:Object,default:null},maxImageWidth:{type:Number,default:()=>1280},drawerTitle:{type:String,default:null},maxFileSize:{type:Number,default:()=>102400},circle:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},cropOptions:{type:Object,default:()=>({aspectRatio:16/9})}},data:()=>({drawer:!1,title:null,zoom:1,stepZoom:.1,minZoom:1,maxZoom:2,maxWidth:850,width:388,cropper:null,cropperReady:!1,imageData:null,resetInput:!1,sendingImage:!1}),computed:{aspectRatio(){return this.cropOptions?.aspectRatio||1},maxImageHeight(){return this.maxImageWidth&&this.aspectRatio*this.maxImageWidth},height(){return parseInt(9*(this.width+32)/16)-32}},watch:{imageData(){this.drawer&&(this.resetCropper(),this.init())},sendingImage(){this.sendingImage?this.$refs?.drawer?.startLoading():this.$refs?.drawer?.endLoading()},zoom(e,t){e!==t&&this.zoomOut(e-t)},width(e,t){e!==t&&this.$nextTick().then((()=>this.init(!0)))}},methods:{open(){this.title=this.drawerTitle||"imageCropDrawer.defaultTitle",this.imageData=this.src||null,this.$nextTick().then((()=>{this.$refs.drawer.open(),window.setTimeout((()=>{this.init()}),50)}))},close(){this.$refs.drawer.close()},onCanvasResize(){window.setTimeout((()=>{this.computeWidthSize()}),200)},init(e){this.imageData&&this.drawer?(e||this.computeWidthSize(),this.cropperReady=!1,this.$nextTick().then((()=>{this.cropper?(this.cropper.minCropBoxWidth=this.width,this.cropper.minCropBoxHeight=this.height,this.cropper.onResize&&this.cropper.onResize(),this.cropperReady=!0):(this.zoom=1,this.cropper=new Cropper(this.$refs.imageCrop,Object.assign({minCropBoxWidth:this.width,minCropBoxHeight:this.height,autoCropArea:1,ready:()=>{this.cropperReady=!0}},this.cropOptions)))}))):this.resetCropper()},resetCropper(){this.cropperReady=!1,this.cropper&&(this.cropper.destroy(),this.cropper=null),this.zoom=1,this.resetInput=!0,this.$nextTick().then((()=>this.resetInput=!1))},computeWidthSize(){this.$refs.imageCropperCanvasParent&&(this.width=Math.min(this.$refs.imageCropperCanvasParent.$el.clientWidth,this.maxWidth)-32)},rotateRight(){this.cropperReady&&this.cropper.rotate(45)},rotateLeft(){this.cropperReady&&this.cropper.rotate(-45)},move(e,t){this.cropperReady&&this.cropper.move(e,t)},zoomOut(e){this.cropperReady&&this.cropper.zoom(e)},apply(){this.uploadCroppedImage().then((()=>this.close()))},uploadCroppedImage(){this.$root.$emit("close-alert-message"),this.sendingImage=!0;const e=this;return new Promise(((t,i)=>{this.getCroppedCanvas().toBlob((a=>{if(a.size>this.maxFileSize)return this.maxFileSize<1024?this.$root.$emit("alert-message",this.$t("imageCropDrawer.tooBigFile.bytes.label",{0:a.size,1:this.maxFileSize}),"error"):this.maxFileSize<1048576?this.$root.$emit("alert-message",this.$t("imageCropDrawer.tooBigFile.kilobytes.label",{0:Number.parseFloat(a.size/1024).toFixed(2).replace(".00",""),1:parseInt(this.maxFileSize/1024)}),"error"):this.$root.$emit("alert-message",this.$t("imageCropDrawer.tooBigFile.megabytes.label",{0:Number.parseFloat(a.size/1024/1024).toFixed(2).replace(".00",""),1:parseInt(this.maxFileSize/1024/1024)}),"error"),void(this.sendingImage=!1);this.$uploadService.upload(a).then((r=>{if(r){const i=new FileReader;i.onload=t=>{e.$emit("data",t.target.result),e.$forceUpdate()},i.readAsDataURL(a),this.$emit("input",r),t(r)}else this.$root.$emit("alert-message",this.$t("imageCropDrawer.uploadingError"),"error"),i(this.$t("imageCropDrawer.uploadingError"))})).catch((e=>{this.$root.$emit("alert-message",this.$t(String(e)),"error"),i(e)})).finally((()=>this.sendingImage=!1))}))}))},getCroppedCanvas(){if(this.circle){const e=this.cropper.getCroppedCanvas(this.maxImageWidth&&{maxWidth:2*this.maxImageWidth,maxHeight:2*this.maxImageHeight}),t=e.width,i=e.height,a=document.createElement("canvas");a.width=t,a.height=i;const r=a.getContext("2d");return r.imageSmoothingEnabled=!0,r.drawImage(e,0,0,t,i),r.globalCompositeOperation="destination-in",r.beginPath(),r.arc(t/2,i/2,Math.min(t,i)/2,0,2*Math.PI,!0),r.fill(),a}return this.cropper.getCroppedCanvas(this.maxImageWidth&&{maxWidth:this.maxImageWidth,maxHeight:this.maxImageHeight})},uploadFile(e){if(this.$root.$emit("close-alert-message"),e&&e.size){if(e.type&&0!==e.type.indexOf("image/"))return void this.$root.$emit("alert-message",this.$t("imageCropDrawer.mustImage.label"),"error");const t=this,i=new FileReader;this.sendingImage=!0,i.onload=e=>{t.imageData=e.target.result,this.sendingImage=!1,t.$forceUpdate()},i.readAsDataURL(e)}}}},t);const a={"image-crop-drawer":i.exports};for(const e in a)Vue.component(e,a[e]);return e})()));