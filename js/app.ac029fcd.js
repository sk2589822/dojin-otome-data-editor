(function(e){function t(t){for(var n,r,o=t[0],l=t[1],u=t[2],c=0,f=[];c<o.length;c++)r=o[c],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);m&&m(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,r=1;r<a.length;r++){var o=a[r];0!==i[o]&&(n=!1)}n&&(s.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},r={app:0},i={app:0},s=[];function o(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-7b8e9580":"2b1aa887"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={"chunk-7b8e9580":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-7b8e9580":"75de8c67"}[e]+".css",i=l.p+n,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var u=s[o],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===n||c===i))return t()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){u=f[o],c=u.getAttribute("data-href");if(c===n||c===i)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var n=t&&t.target&&t.target.src||i,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete r[e],m.parentNode.removeChild(m),a(s)},m.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){r[e]=0})));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,a){n=i[e]=[t,a]}));t.push(n[2]=s);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=o(e);var f=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(m);var a=i[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",f.name="ChunkLoadError",f.type=n,f.request=r,a[1](f)}i[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/dojin-otome-data-editor/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var m=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0972":function(e,t,a){},"144f":function(e){e.exports=JSON.parse('{"events":[{"pages":[{"list":[{"parameters":[0,"example_1"]},{"parameters":[0,"example_2"]},{"parameters":[0,"example_4"]},{"parameters":[0,"example_5"]},{"parameters":[0,"example_3"]}]}]}]}')},1737:function(e){e.exports=JSON.parse('{"events":[{"pages":[{"list":[{"parameters":[0,"example_1"]},{"parameters":[0,"example_2"]},{"parameters":[0,"example_3"]},{"parameters":[0,"example_4"]},{"parameters":[0,"example_5"]}]}]}]}')},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("TheHeader",{staticClass:"header"}),a("keep-alive",[a("transition",{attrs:{name:e.transitionName}},[a("router-view")],1)],1)],1)},i=[],s=(a("b0c0"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",[a("b-navbar",{attrs:{toggleable:"md",type:"dark"}},[a("b-navbar-brand",[e._v(" Dojin Otome Data Editor ")]),a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item",{attrs:{to:"/"}},[e._v(" 主頁 ")]),a("b-nav-item",{attrs:{to:"Instruction"}},[e._v(" 關於 & 教學 ")])],1),a("b-navbar-brand",{staticClass:"ml-4 mr-2 link-github",attrs:{href:"https://github.com/sk2589822/dojin-otome-data-editor",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","github"]}}),e._v(" Github ")],1)],1)],1)}),o=[],l=(a("656a"),a("2877")),u={},c=Object(l["a"])(u,s,o,!1,null,"d90819d2",null),f=c.exports,m={components:{TheHeader:f},data:function(){return{transitionName:""}},watch:{$route:function(e,t){this.transitionName="Main"===t.name?"slide-left":"slide-right"}}},p=m,d=(a("5c0b"),Object(l["a"])(p,r,i,!1,null,null,null)),g=d.exports,h=(a("d3b7"),a("8c4f")),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main w-100"},[a("h3",{staticClass:"text-center"},[e._v(" 麻煩請先看 "),a("router-link",{attrs:{to:"Instruction"}},[e._v(" 使用教學 ")])],1),a("div",{staticClass:"upload-container"},[a("DataUpload",{attrs:{files:e.baseFiles,name:"baseFiles",title:"日文版data"},on:{"update:files":function(t){e.baseFiles=t}}}),a("DataUpload",{attrs:{files:e.referenceFiles,name:"referenceFiles",title:"中文/英文版data"},on:{"update:files":function(t){e.referenceFiles=t}}})],1),a("div",{staticClass:"upload-container"},[a("ImageUpload",{attrs:{images:e.images,name:"images",title:"圖片檔"},on:{"update:images":function(t){e.images=t}}})],1),a("div",{staticClass:"mt-2"},[a("div",[a("label",{staticClass:"mt-4"},[e._v(" 選擇遊戲： ")]),a("b-form-select",{attrs:{options:e.games},on:{change:function(t){return e.setRegex(e.regexMap[t])}},model:{value:e.selectedGame,callback:function(t){e.selectedGame=t},expression:"selectedGame"}})],1),a("div",[a("label",{staticClass:"mt-4",attrs:{for:"regex-input"}},[e._v(" 正規表示式： ")]),a("b-form-input",{attrs:{id:"regex-input",disabled:!e.isManualInputRegex,placeholder:e.isManualInputRegex?"輸入正規表示式":"選擇遊戲以取得對應的正規表示式"},model:{value:e.regex,callback:function(t){e.regex=t},expression:"regex"}})],1),a("div",{staticClass:"mt-4"},[a("div",[a("label",{attrs:{for:"size-input"}},[e._v(" 圖片尺寸： ")]),a("b-form-input",{attrs:{id:"size-input",value:e.size,placeholder:"輸入圖片大小"},on:{blur:function(t){e.size=t.target.value}}})],1),a("p",{staticClass:"mt-4 w-100 text-left text-secondary"},[e._v(" ※改圖片尺寸後隨便點一下其他地方即會套用 ")])])]),a("div",{staticClass:"d-flex flex-wrap justify-content-center mt-4 mx-auto w-50"},[a("b-button",{staticClass:"w-75",attrs:{variant:"warning"},on:{click:e.loadExample}},[e._v(" 使用範例檔案解析 ")]),a("b-button",{class:["w-75 mt-4",{disabled:!e.isReadyToParse}],attrs:{variant:"primary"},on:{click:function(t){e.isReadyToParse&&e.parse()}}},[a("b-spinner",{directives:[{name:"show",rawName:"v-show",value:e.isParsing,expression:"isParsing"}],attrs:{variant:"light",label:"Spinning"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:!e.isParsing,expression:"!isParsing"}]},[e._v(" 解析 ")])],1),e.isParsed?a("b-button",{staticClass:"w-75 mt-4",attrs:{variant:"primary"},on:{click:e.download}},[a("b-spinner",{directives:[{name:"show",rawName:"v-show",value:e.isDownloading,expression:"isDownloading"}],attrs:{variant:"light",label:"Spinning"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:!e.isDownloading,expression:"!isDownloading"}]},[e._v(" 產生檔案 ")])],1):e._e()],1),e.isParsed?[a("div",{staticClass:"d-flex justify-content-end mt-5"},[a("div",{staticClass:"mr-2 text-right"},[a("label",{attrs:{for:"diffThreshold-input"}},[e._v(" 閾值： ")]),a("b-form-input",{staticClass:"d-inline-block w-20",attrs:{id:"diffThreshold-input",placeholder:"輸入閾值"},model:{value:e.diff.threshold.input,callback:function(t){e.$set(e.diff.threshold,"input",t)},expression:"diff.threshold.input"}})],1),a("b-button",{staticClass:"mr-4",attrs:{variant:"primary"},on:{click:function(t){e.diff.threshold.value=parseInt(e.diff.threshold.input)}}},[e._v(" 確定 ")]),e.diff.isShow&&e.isDiffComputed?a("b-button-group",[a("b-button",{attrs:{variant:"danger"},on:{click:e.filterRowsOverThreshold}},[e._v(" 只顯示差異度≧閾值的項目 ")]),a("b-button",{attrs:{variant:"success"},on:{click:function(t){e.diff.threshold.isFilterRows=!1}}},[e._v(" 顯示全部項目 ")])],1):a("b-button",{staticClass:"w-15",attrs:{variant:"danger"},on:{click:function(t){e.diff.isShow=!0}}},[e.diff.isShow?[a("b-spinner",{attrs:{label:"Spinning"}}),a("br"),e._v(" "+e._s(e.diff.computedCount)+" / "+e._s(Object.keys(e.eventsProcessor.eventsMap).length)+" ")]:a("span",[e._v(" 計算差異度 ")])],2)],1),a("p",{staticClass:"mt-4 w-100 text-right text-secondary"},[e._v(" ※點「確定」後會立即反應到背景顏色。若要過濾掉差異度≧閾值的項目需再點一次「只顯示差異度≧閾值的項目」 ")]),a("div",{staticClass:"info-list-container mt-4"},[a("table",{staticClass:"info-list"},[e._m(0),e._l(e.eventsProcessor.eventsMap,(function(t,n){return a("EditorRow",{key:n,ref:"rows",refInFor:!0,tag:"tr",attrs:{"original-image-name":n,"new-image-name":e.eventsProcessor.eventsMap[n].newEvent,diff:e.eventsProcessor.eventsMap[n].diff,"is-show-diff":e.diff.isShow,threshold:e.diff.threshold.value},on:{"update:newImageName":function(t){return e.$set(e.eventsProcessor.eventsMap[n],"newEvent",t)},"update:new-image-name":function(t){return e.$set(e.eventsProcessor.eventsMap[n],"newEvent",t)},"update:diff":function(t){return e.$set(e.eventsProcessor.eventsMap[n],"diff",t)},onDiffComputed:function(t){e.diff.computedCount++}}})}))],2)])]:e._e()],2)},b=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",[a("th",{staticClass:"w-15"},[e._v(" original image name ")]),a("th",{staticClass:"w-20"},[e._v(" filter / select ")]),a("th",{staticClass:"w-15"},[e._v(" new image name ")]),a("th",[e._v("original image")]),a("th",[e._v("new image")]),a("th",{staticClass:"w-10"},[e._v(" image diff (%) ")])])}],w=(a("4160"),a("a630"),a("a15b"),a("fb6a"),a("b64b"),a("ac1f"),a("25f0"),a("3ca3"),a("1276"),a("159b"),a("b85c")),x=(a("96cf"),a("1da1")),_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("BaseUpload",{attrs:{"upload-files":e.uploadFiles,name:e.name,title:e.title,extension:"json"},on:{"update:uploadFiles":function(t){e.uploadFiles=t},"update:upload-files":function(t){e.uploadFiles=t}}})},y=[],N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"w-50"},[a("h3",{staticClass:"text-center"},[e._v(" "+e._s(e.title)+" ")]),a("div",{class:["drop-zone",{dark:e.isDragover}],on:{dragenter:e.dragenter,dragleave:e.dragleave,drop:e.drop}},[a("FileUpload",{ref:"upload",attrs:{name:e.name,multiple:!0,directory:!0,drop:!0},on:{"input-file":e.inputFile,"input-filter":e.inputFilter},model:{value:e.baseUploadFiles,callback:function(t){e.baseUploadFiles=t},expression:"baseUploadFiles"}},[e._v(" 點擊或拖曳上傳資料夾 ")])],1),a("div",{staticClass:"p-2 text-center"},[e._v(" 已上傳 "+e._s(e.baseUploadFiles.length)+" 個檔案 ")]),e.isFileTypeError?a("p",{staticClass:"text-center text-danger"},[e._v(" 請上傳."+e._s(e.extension)+"檔 ")]):e._e(),a("p",{staticClass:"text-center"},[a("b-button",{attrs:{variant:"danger"},on:{click:e.clear}},[e._v(" 清除 ")])],1)])},I=[],k=(a("a434"),a("4d63"),a("ddb0"),a("2b3d"),a("8019")),E=a.n(k),F={components:{FileUpload:E.a},props:{extension:{type:String,default:""},name:{type:String,default:"upload"},title:{type:String,default:"data資料夾"}},data:function(){return{baseUploadFiles:[],isDragover:!1,dargCounter:0,isFileTypeError:!1}},methods:{inputFile:function(e){e.blob="";var t=window.URL||window.webkitURL;t&&t.createObjectURL&&(e.blob=t.createObjectURL(e.file)),this.$emit("update:uploadFiles",this.baseUploadFiles)},inputFilter:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var n=t[0],r=t[2],i=new RegExp("\\.".concat(this.extension,"$"),"i");if(!i.test(n.name))return this.isFileTypeError=!0,r();this.isFileTypeError=!1},dragenter:function(){this.dargCounter++,this.isDragover=!0},dragleave:function(){this.dargCounter--,0===this.dargCounter&&(this.isDragover=!1)},drop:function(){this.dargCounter=0,this.isDragover=!1},clear:function(){this.baseUploadFiles.splice(0),this.$emit("update:uploadFiles",this.baseUploadFiles)}}},S=F,C=(a("7302"),Object(l["a"])(S,N,I,!1,null,null,null)),O=C.exports,j={components:{BaseUpload:O},props:{name:{type:String,default:"upload"},title:{type:String,default:"data"}},data:function(){return{uploadFiles:[]}},watch:{uploadFiles:function(){this.$emit("update:files",this.uploadFiles)}}},P=j,D=Object(l["a"])(P,_,y,!1,null,null,null),M=D.exports,R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("BaseUpload",{attrs:{"upload-files":e.uploadFiles,name:e.name,title:e.title,extension:"png"},on:{"update:uploadFiles":function(t){e.uploadFiles=t},"update:upload-files":function(t){e.uploadFiles=t}}})},$=[],T={components:{BaseUpload:O},props:{name:{type:String,default:"upload"},title:{type:String,default:"圖片檔"}},data:function(){return{uploadFiles:[]}},watch:{uploadFiles:function(){this.$emit("update:images",this.uploadFiles)}}},U=T,B=Object(l["a"])(U,R,$,!1,null,null,null),A=B.exports,J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",{directives:[{name:"show",rawName:"v-show",value:!this.$parent.diff.threshold.isFilterRows||e.isShow,expression:"!this.$parent.diff.threshold.isFilterRows || isShow"}],class:["item",{"over-threshold":e.diff>=e.threshold}]},[a("td",[a("span",[e._v(e._s(e.originalImageName))])]),a("td",{staticClass:"text-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.filter,expression:"filter"}],attrs:{type:"text"},domProps:{value:e.filter},on:{input:[function(t){t.target.composing||(e.filter=t.target.value)},e.autoSelectImage]}}),e.filter?a("select",{staticClass:"d-block mx-auto mt-2 w-100",domProps:{value:e.selectedImageName},on:{change:function(t){return e.updateImage(t.target.value)}}},e._l(e.filteredImagesNames,(function(t){return a("option",{key:t,domProps:{value:t}},[e._v(" "+e._s(t)+" ")])})),0):e._e()]),a("td",{staticClass:"text-center"},[e._v(" "+e._s(e.selectedImageName)+" ")]),a("td",[a("img",{style:{width:e.$parent.size+"px",height:e.$parent.size+"px"},attrs:{src:e.getImageBlobByKey(e.originalImageName)},on:{load:e.getImageDiff,dragstart:function(t){return e.onDragStart(e.originalImageName)}}})]),a("td",{on:{drop:e.onDrop,dragover:function(e){e.preventDefault()}}},[a("img",{style:{width:e.$parent.size+"px",height:e.$parent.size+"px"},attrs:{src:e.getImageBlobByKey(e.selectedImageName)},on:{load:e.getImageDiff,dragstart:function(t){return e.onDragStart(e.selectedImageName)},dragend:e.onDragend}})]),a("td",[e._v(" "+e._s(e.diff)+" ")])])},z=[],L=(a("4de4"),a("d81d"),a("a9e3"),a("5530")),G=a("de79"),V=a.n(G),H=a("bbd6"),K=a.n(H),q=a("2f62"),Q={props:{originalImageName:{type:String,default:""},newImageName:{type:String,default:""},isShowDiff:{type:Boolean,default:!1},threshold:{type:Number,default:10}},data:function(){return{filter:"",selectedImageName:"",diff:"",isShow:!0,isFirstCompute:!0}},computed:Object(L["a"])(Object(L["a"])({},Object(q["b"])({sourceImageName:function(e){return e.drag.sourceImageName},targetImageName:function(e){return e.drag.targetImageName}})),{},{filteredImagesNames:function(){return this.filter.length>2?K.a.go(this.filter,this.$parent.imagesNames,{limit:30}).map((function(e){return e.target})):this.$parent.imagesNames}}),watch:{isShowDiff:function(e){e&&this.getImageDiff()}},created:function(){this.selectedImageName=this.newImageName},methods:{updateImage:function(e){this.selectedImageName=e,this.$emit("update:new-image-name",e),this.getImageDiff()},getImageDiff:function(){var e=this;if(this.isShowDiff){var t=this.$parent.imagesMap[this.originalImageName],a=this.$parent.imagesMap[this.selectedImageName];t&&a?V()(t.file).compareTo(a.file).onComplete((function(t){e.updateDiff(parseFloat(t.misMatchPercentage))})):setTimeout((function(){e.updateDiff("N/A")}),0)}},updateDiff:function(e){this.diff=e,this.$emit("update:diff",e),this.isFirstCompute&&(this.$emit("onDiffComputed"),this.isFirstCompute=!1)},setIsShow:function(){this.isShow="number"===typeof this.diff&&this.diff>=this.threshold||"N/A"===this.diff},getImageBlobByKey:function(e){var t;return null===(t=this.$parent.imagesMap[e])||void 0===t?void 0:t.blob},autoSelectImage:function(){1===this.filteredImagesNames.length&&(this.selectedImageName=this.filteredImagesNames[0])},onDragStart:function(e){this.$store.commit("setSourceImageName",e)},onDragend:function(){this.targetImageName&&(this.updateImage(this.targetImageName),this.$store.commit("clearTargetImageName"))},onDrop:function(){this.$store.commit("setTargetImageName",this.selectedImageName),this.sourceImageName&&(this.updateImage(this.sourceImageName),this.$store.commit("clearSourceImageName"))}}},W=Q,X=(a("a3f0"),Object(l["a"])(W,J,z,!1,null,null,null)),Y=X.exports,Z=(a("99af"),a("7db0"),a("13d5"),a("6062"),a("2909")),ee=a("d4ec"),te=a("bee2"),ae=a("c4e3"),ne=a.n(ae),re=a("21a6"),ie=a.n(re),se=function(){function e(t,a){Object(ee["a"])(this,e),this.original={files:t,filesData:{commonEvents:null,map:[]},events:[]},this.new={files:a,events:[]},this._eventsMap={},this._regex=null}return Object(te["a"])(e,[{key:"parse",value:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([Object(x["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getEventsSet(t.original.files,!0);case 2:t.original.eventsSet=e.sent;case 3:case"end":return e.stop()}}),e)})))(),Object(x["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getEventsSet(t.new.files);case 2:t.new.eventsSet=e.sent;case 3:case"end":return e.stop()}}),e)})))()]);case 2:this._eventsMap=this.getEventsMap();case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getEventsSet",value:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(t){var a,n,r,i,s,o,l,u=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=u.length>1&&void 0!==u[1]&&u[1],e.next=3,this.getCommonEventsSet(this.getCommonEventsFile(t),a);case 3:n=e.sent,r=n,i=Object(w["a"])(this.getMapEventsFile(t)),e.prev=6,i.s();case 8:if((s=i.n()).done){e.next=16;break}return o=s.value,e.next=12,this.getMapEvents(o,a);case 12:l=e.sent,r=new Set([].concat(Object(Z["a"])(r),Object(Z["a"])(l)));case 14:e.next=8;break;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e["catch"](6),i.e(e.t0);case 21:return e.prev=21,i.f(),e.finish(21);case 24:return e.abrupt("return",r);case 25:case"end":return e.stop()}}),e,this,[[6,18,21,24]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getCommonEventsFile",value:function(e){return e.find((function(e){return/CommonEvents/.test(e.name)}))}},{key:"getCommonEventsSet",value:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(t,a){var n,r,i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=new Set,!t){e.next=6;break}return r={},e.next=5,this.readFile(t).then((function(e){a&&(i.original.filesData.commonEvents={name:t.name,data:e}),r=JSON.parse(e)}));case 5:r.forEach((function(e){null!==e&&void 0!==e&&e.list&&e.list.forEach((function(e){e.parameters.length&&i.isImageName(e.parameters[1])&&n.add(e.parameters[1])}))}));case 6:return e.abrupt("return",n);case 7:case"end":return e.stop()}}),e,this)})));function t(t,a){return e.apply(this,arguments)}return t}()},{key:"getMapEventsFile",value:function(e){return e.filter((function(e){return/Map\d+/.test(e.name)}))}},{key:"getMapEvents",value:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(t,a){var n,r,i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=new Set,!t){e.next=6;break}return r={},e.next=5,this.readFile(t).then((function(e){a&&i.original.filesData.map.push({name:t.name,data:e}),r=JSON.parse(e)}));case 5:r.events.forEach((function(e){e&&e.pages.forEach((function(e){e.list.forEach((function(e){e.parameters.length&&i.isImageName(e.parameters[1])&&n.add(e.parameters[1])}))}))}));case 6:return e.abrupt("return",n);case 7:case"end":return e.stop()}}),e,this)})));function t(t,a){return e.apply(this,arguments)}return t}()},{key:"isImageName",value:function(e){return this._regex.test(e)}},{key:"getEventsMap",value:function(){for(var e={},t=Object(Z["a"])(this.original.eventsSet),a=Object(Z["a"])(this.new.eventsSet),n=0;n<t.length;n++)e[t[n]]={newEvent:a[n],diff:null};return e=this.sortObject(e),e}},{key:"sortObject",value:function(e){var t=Object.keys(e).sort().reduce((function(t,a){return t[a]=e[a],t}),{});return t}},{key:"downloadReplacedFiles",value:function(){var e=this;return new Promise((function(t){var a=new ne.a;e.original.filesData.commonEvents&&a.file(e.original.filesData.commonEvents.name,JSON.stringify(e.getReplacedCommonEvents())),e.original.filesData.map.forEach((function(t){a.file(t.name,JSON.stringify(e.getReplacedMap(t.data)))})),a.generateAsync({type:"blob"}).then((function(e){return ie.a.saveAs(e,"result.zip"),t()}))}))}},{key:"getReplacedCommonEvents",value:function(){var e=this,t=JSON.parse(this.original.filesData.commonEvents.data);return t.forEach((function(t){null!==t&&void 0!==t&&t.list&&t.list.forEach((function(t){t.parameters.length&&e.isImageName(t.parameters[1])&&(t.parameters[1]=e._eventsMap[t.parameters[1]].newEvent)}))})),t}},{key:"getReplacedMap",value:function(e){var t=this,a=JSON.parse(e);return a.events.forEach((function(e){e&&e.pages.forEach((function(e){e.list.forEach((function(e){e.parameters.length&&t.isImageName(e.parameters[1])&&(e.parameters[1]=t._eventsMap[e.parameters[1]].newEvent)}))}))})),a}},{key:"readFile",value:function(e){return new Promise((function(t){var a=new FileReader;a.onload=function(){t(a.result)},e.file?a.readAsText(e.file):a.readAsText(e)}))}},{key:"regex",set:function(e){this._regex=new RegExp(e,"i")}},{key:"eventsMap",get:function(){return this._eventsMap}}]),e}(),oe={components:{DataUpload:M,ImageUpload:A,EditorRow:Y},data:function(){return{baseFiles:[],referenceFiles:[],images:[],imagesMap:{},imagesNames:[],selectedGame:null,games:[{value:null,text:"選擇一款遊戲",disabled:!0},{value:"succumate",text:"サキュメイト / Succumate / 與魅魔莉莉姆的同居生活"},{value:"summerMemories",text:"あまえんぼ / Summer Memories / 夏日狂想曲：鄉間的難忘回憶"},{value:"manual",text:"我想自己寫正規表示式"}],regex:"",regexMap:{succumate:/_0\d+/,summerMemories:/(?<!E結衣2_表情H)_0\d+|フェラカットイン\(美雪\)_\d|Blow cut-in \(Miyuki\)_\d|^P_/,manual:null},eventsProcessor:null,isParsing:!1,isParsed:!1,diff:{isShow:!1,computedCount:0,threshold:{input:10,value:10,isFilterRows:!1}},size:175,isDownloading:!1,showExample:!1}},computed:{isReadyToParse:function(){return this.baseFiles.length&&this.images.length&&this.selectedGame},isManualInputRegex:function(){return"manual"===this.selectedGame},isDiffComputed:function(){return this.diff.computedCount===Object.keys(this.eventsProcessor.eventsMap).length}},methods:{setRegex:function(e){e&&(this.regex=e.toString().split("/").slice(1,-1).join(""))},parse:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.imagesMap=e.getImagesMap(),e.imagesNames=Object.keys(e.imagesMap),e.referenceFiles.length||(e.referenceFiles=e.baseFiles),e.eventsProcessor=new se(e.baseFiles,e.referenceFiles),e.eventsProcessor.regex=e.regex,e.initValueBeforeParse(),t.next=8,e.eventsProcessor.parse();case 8:e.setValueAfterParseed();case 9:case"end":return t.stop()}}),t)})))()},initValueBeforeParse:function(){this.isParsed=!1,this.isParsing=!0,this.diff.computedCount=0},setValueAfterParseed:function(){this.isParsing=!1,this.isParsed=!0,this.diff.isShow=!1},getImagesMap:function(){var e,t={},a=Object(w["a"])(this.images);try{for(a.s();!(e=a.n()).done;){var n=e.value,r=n.name.split("/").slice(-1)[0].split(".").slice(0,-1).join(".");t[r]={blob:n.blob,file:n.file}}}catch(i){a.e(i)}finally{a.f()}return t},filterRowsOverThreshold:function(){this.diff.threshold.isFilterRows=!0,this.$refs.rows.forEach((function(e){e.setIsShow()}))},download:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isDownloading=!0,t.next=3,e.eventsProcessor.downloadReplacedFiles();case 3:e.isDownloading=!1;case 4:case"end":return t.stop()}}),t)})))()},loadExample:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new File([new Blob([JSON.stringify(a("1737"),null,2)],{type:"application/json"})],"Map1.json"),r=new File([new Blob([JSON.stringify(a("144f"),null,2)],{type:"application/json"})],"Map2.json"),Array.from({length:5},(function(e,t){return t+1})).forEach((function(t){var n="example_".concat(t),r=a("e078")("./".concat(n,".png"));e.imagesNames.push(n),e.imagesMap[n]={file:r,blob:r}})),e.eventsProcessor=new se([n],[r]),e.eventsProcessor.regex="",e.initValueBeforeParse(),t.next=8,e.eventsProcessor.parse();case 8:e.setValueAfterParseed();case 9:case"end":return t.stop()}}),t)})))()}}},le=oe,ue=(a("a006"),Object(l["a"])(le,v,b,!1,null,null,null)),ce=ue.exports;n["default"].use(h["a"]);var fe=[{path:"/",name:"Main",component:ce,meta:{keepAlive:!0}},{path:"/instruction",name:"Instruction",component:function(){return a.e("chunk-7b8e9580").then(a.bind(null,"8827"))}}],me=new h["a"]({base:"/dojin-otome-data-editor/",routes:fe}),pe=me;n["default"].use(q["a"]);var de=new q["a"].Store({state:{drag:{sourceImageName:"",targetImageName:""}},mutations:{setSourceImageName:function(e,t){e.drag.sourceImageName=t},clearSourceImageName:function(e){e.drag.sourceImageName=""},setTargetImageName:function(e,t){e.drag.targetImageName=t},clearTargetImageName:function(e){e.drag.targetImageName=""}},actions:{}}),ge=a("5f5b"),he=a("b1e0"),ve=(a("f9e3"),a("2dd8"),a("ecee")),be=a("f2d1"),we=a("ad3d");n["default"].use(ge["a"]),n["default"].use(he["a"]),ve["c"].add(be["a"]),n["default"].component("font-awesome-icon",we["a"]),n["default"].config.productionTip=!1,new n["default"]({router:pe,store:de,render:function(e){return e(g)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";a("9c0c")},"656a":function(e,t,a){"use strict";a("a084")},"6add":function(e,t,a){e.exports=a.p+"img/example_3.ae84055e.png"},7302:function(e,t,a){"use strict";a("ce38")},8308:function(e,t,a){e.exports=a.p+"img/example_1.4acff7b4.png"},"95b3":function(e,t,a){e.exports=a.p+"img/example_4.38d8d7c4.png"},"9c0c":function(e,t,a){},a006:function(e,t,a){"use strict";a("0972")},a084:function(e,t,a){},a3f0:function(e,t,a){"use strict";a("f606")},afd0:function(e,t,a){e.exports=a.p+"img/example_5.dca4e218.png"},c177:function(e,t,a){e.exports=a.p+"img/example_2.45abe516.png"},ce38:function(e,t,a){},e078:function(e,t,a){var n={"./example_1.png":"8308","./example_2.png":"c177","./example_3.png":"6add","./example_4.png":"95b3","./example_5.png":"afd0"};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id="e078"},f606:function(e,t,a){}});
//# sourceMappingURL=app.ac029fcd.js.map