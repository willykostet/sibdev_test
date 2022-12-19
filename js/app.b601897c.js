(function(){"use strict";var t={2235:function(t,e,a){var s=a(6369),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},i=[],o=a(1001),n={},l=(0,o.Z)(n,r,i,!1,null,null,null),u=l.exports,c=a(3822);s.ZP.use(c.ZP);var d=new c.ZP.Store({state:{logined:!1},getters:{getLogined(t){return t.logined}},mutations:{},actions:{},modules:{}}),v=a(2631),p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-page-wrapper"},[t.alert?e("div",{staticClass:"alert"},[e("div",{staticClass:"alert-wrap"},[e("form",{staticClass:"request-form"},[e("h2",{staticClass:"alert-title"},[t._v("Сохранить запрос")]),e("label",[t._v("Запрос")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.alertData.request,expression:"alertData.request"}],attrs:{type:"text",placeholder:"чем кормить кота"},domProps:{value:t.alertData.request},on:{input:function(e){e.target.composing||t.$set(t.alertData,"request",e.target.value)}}}),e("label",[t._v("* Название")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.alertData.title,expression:"alertData.title"}],attrs:{type:"text",placeholder:"Укажите название"},domProps:{value:t.alertData.title},on:{input:function(e){e.target.composing||t.$set(t.alertData,"title",e.target.value)}}}),e("label",[t._v("Сортировать по")]),t._m(0),e("label",[t._v("Максимальное количество")]),e("div",{staticClass:"range-input-wrapper"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.alertData.maxValue,expression:"alertData.maxValue"}],staticClass:"range",attrs:{type:"range",id:"volume",name:"volume",min:"0",max:"50"},domProps:{value:t.alertData.maxValue},on:{__r:function(e){return t.$set(t.alertData,"maxValue",e.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.alertData.maxValue,expression:"alertData.maxValue"}],staticClass:"range-input",attrs:{type:"text"},domProps:{value:t.alertData.maxValue},on:{input:function(e){e.target.composing||t.$set(t.alertData,"maxValue",e.target.value)}}})]),t.errored?e("p",{staticClass:"error"},[t._v(t._s(t.errored))]):t._e(),e("div",{staticClass:"alert-buttons"},[e("button",{attrs:{type:"button"},on:{click:function(e){t.alert=!1,t.errored=null}}},[t._v("Не сохранять")]),e("button",{staticClass:"save",attrs:{type:"button"},on:{click:function(e){return t.save()}}},[t._v("Сохранить")])])])])]):e("div",{staticClass:"search-page"},[e("header",{staticClass:"nav-bar"},[e("div",{staticClass:"container"},[e("nav",[e("img",{attrs:{src:a(9574),alt:""}}),e("ul",{staticClass:"nav"},[e("li",{class:["search"==t.active?"active":""],on:{click:function(e){t.active="search"}}},[t._v("Поиск")]),e("li",{class:["fav"==t.active?"active":""],on:{click:function(e){t.active="fav"}}},[t._v("Избранное")])]),e("button",{staticClass:"logout",on:{click:function(e){return t.logOut()}}},[t._v("Выйти")])])])]),e("div",{staticClass:"container"},["search"==t.active?e("div",[e("h1",{staticClass:"header-search"},[t._v("Поиск видео")]),e("div",{staticClass:"searchbar"},[e("form",{staticClass:"search-form",attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.searchVideos(t.inputed,12)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputed,expression:"inputed"}],staticClass:"searchbar-input",attrs:{type:"text",placeholder:"Что хотите посмотреть?"},domProps:{value:t.inputed},on:{input:function(e){e.target.composing||(t.inputed=e.target.value)}}}),e("img",{staticClass:"like-basic",attrs:{src:a(458),alt:""},on:{click:function(e){t.alert=!0}}}),e("button",{staticClass:"search-btn",attrs:{type:"submit"}},[t._v("Найти")])]),t.favAlert?e("div",{staticClass:"fav-alert"},[e("p",[t._v("Поиск сохранён в разделе «Избранное»")]),e("p",{on:{click:function(e){t.active="fav",t.favAlert=!1}}},[t._v("Перейти в избранное")])]):t._e()]),t.videos?e("div",{staticClass:"result"},[e("div",{staticClass:"result-header"},[e("p",[t._v(" Видео "+t._s(t.found)+" по запросу «"+t._s(t.inputed)+"»")]),e("div",{staticClass:"view-list"},[e("div",{staticClass:"view-item",on:{click:function(e){t.setView=0}}},[e("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M8 6H21",stroke:"#272727","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),e("path",{attrs:{d:"M8 12H21",stroke:"#272727","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),e("path",{attrs:{d:"M8 18H21",stroke:"#272727","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),e("path",{attrs:{d:"M3 6H3.01",stroke:"#272727","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),e("path",{attrs:{d:"M3 12H3.01",stroke:"#272727","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),e("path",{attrs:{d:"M3 18H3.01",stroke:"#272727","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])]),e("div",{staticClass:"view-item",on:{click:function(e){t.setView=1}}},[e("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M10 5H5V10H10V5Z",stroke:"#272727","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),e("path",{attrs:{d:"M19 5H14V10H19V5Z",stroke:"#272727","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),e("path",{attrs:{d:"M19 14H14V19H19V14Z",stroke:"#272727","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),e("path",{attrs:{d:"M10 14H5V19H10V14Z",stroke:"#272727","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])])]),0==t.setView?e("div",{staticClass:"video-list"},t._l(t.videos,(function(a){return e("div",{key:a.id.videoId,staticClass:"video-item"},[e("iframe",{attrs:{src:t.getVideoUrl(a.id.videoId),frameborder:"0"}}),e("h2",{staticClass:"video-item-title"},[t._v(t._s(t.shortTitle(a.snippet.title,45)))]),e("h3",{staticClass:"video-item-subtitle"},[t._v(t._s(t.shortTitle(a.snippet.channelTitle,30)))]),e("p",[t._v(t._s(t.getVideoDuration(a.id.videoId)))])])})),0):e("div",{staticClass:"video-list list-wide"},t._l(t.videos,(function(a){return e("div",{key:a.id.videoId,staticClass:"video-item item-wide"},[e("iframe",{attrs:{src:t.getVideoUrl(a.id.videoId),frameborder:"0"}}),e("div",{staticClass:"item-descriptions"},[e("h2",{staticClass:"video-item-title"},[t._v(t._s(a.snippet.title))]),e("h3",{staticClass:"video-item-subtitle"},[t._v(t._s(a.snippet.channelTitle))]),e("p",[t._v(t._s(t.getVideoDuration(a.id.videoId)))])])])})),0)]):t._e()]):t._e(),"fav"==t.active?e("div",[e("h1",{staticClass:"header-search"},[t._v("Избранное")]),e("div",{staticClass:"favlist"},t._l(t.fav,(function(a){return e("p",{key:a.title,staticClass:"favlist-item",on:{click:function(e){t.searchVideos(a.request,a.maxValue),t.active="search",t.inputed=a.request}}},[t._v(" "+t._s(a.title))])})),0)]):t._e()])])])},m=[function(){var t=this,e=t._self._c;return e("select",{attrs:{name:"select"}},[e("option",{attrs:{value:"value1"}},[t._v("Значение 1")]),e("option",{attrs:{value:"value2",selected:""}},[t._v("Значение 2")]),e("option",{attrs:{value:"value3"}},[t._v("Значение 3")])])}],h=(a(7658),a(4311));const g="AIzaSyB35wx3eP2JQqWHVQq4wR1kDms0airauXs";var f={name:"MainPage",data(){return{favAlert:!1,errored:!1,fav:[],found:null,active:"search",alert:!1,inputed:null,videos:null,alertData:{request:null,title:null,maxValue:12},setView:1}},watch:{inputed(){this.alertData.request=this.inputed}},created(){this.updateFav()},methods:{updateFav(){let t=localStorage.getItem("currentUser");this.fav=JSON.parse(localStorage.getItem(t))},searchVideos(t,e){h.Z.get("https://www.googleapis.com/youtube/v3/search",{params:{key:g,type:"video",part:"snippet",maxResults:e,q:t}}).then((t=>{console.log(t),this.videos=t.data.items,this.found=e}))},getVideoUrl(t){return`https://www.youtube.com/embed/${t}`},getVideoDuration(t){h.Z.get("https://www.googleapis.com/youtube/v3/videos",{params:{key:g,id:t,part:"snippet,contentDetails"}}).then((t=>{let e=this.convertISO8601ToSeconds(t.data.items[0].contentDetails.duration);return console.log(e),e}))},convertISO8601ToSeconds(t){var e,a=/^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/,s=0,r=0,i=0;if(a.test(t)){var o=a.exec(t);o[1]&&(s=Number(o[1])),o[2]&&(r=Number(o[2])),o[3]&&(i=Number(o[3])),e=3600*s+60*r+i}return e},save(){if(!this.alertData.title&&!this.alertData.request)return console.log(this.errored="Заполните поля"),!1;if(!this.alertData.title)return console.log(this.errored="Введите название"),!1;if(!this.alertData.request)return console.log(this.errored="Введите запрос"),!1;let t={request:this.alertData.request,title:this.alertData.title,maxValue:this.alertData.maxValue},e=localStorage.getItem("currentUser"),a=JSON.parse(localStorage.getItem(e));a.push(t),localStorage.setItem(e,JSON.stringify(a)),this.updateFav(),this.alert=!1,this.errored=!1,this.favAlert=!0},logOut(){localStorage.removeItem("sibdevAccess"),this.$router.push("/auth")},shortTitle(t,e){const a=t.slice(0,e);return a+"..."}}},w=f,k=(0,o.Z)(w,p,m,!1,null,"113b15d5",null),_=k.exports,b=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"auth"},[e("img",{attrs:{src:a(9574),alt:""}}),e("h1",[t._v("Вход")]),e("label",[t._v("Логин")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.login,expression:"login"}],attrs:{type:"text"},domProps:{value:t.login},on:{input:function(e){e.target.composing||(t.login=e.target.value)}}}),e("label",[t._v("Пароль")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),e("button",{on:{click:function(e){return t.loginUser()}}},[t._v("Войти")])])])},C=[];const x=[{id:1,name:"Nikitos",password:"2022",token:"abv"},{id:2,name:"Vitalik",password:"2022"}];var V={name:"AuthPage",data(){return{login:null,password:null}},methods:{loginUser(){if(x.find((t=>t.name===this.login&&t.password===this.password))){localStorage.setItem("sibdevAccess",Math.random().toString(36).substr(2)),localStorage.setItem("currentUser",this.login.toString());let t=[];localStorage.getItem(this.login.toString())||localStorage.setItem(this.login.toString(),JSON.stringify(t)),this.$router.push("/")}}}},D=V,y=(0,o.Z)(D,b,C,!1,null,"264445d1",null),S=y.exports;s.ZP.use(v.ZP);const P=[{path:"/",name:"main",component:_,beforeEnter:(t,e,a)=>{localStorage.getItem("sibdevAccess")||d.getters.getLogined?a():a("/auth")}},{path:"/auth",name:"auth",component:S}],I=new v.ZP({mode:"history",base:"/sibdev_test/",routes:P});var O=I;s.ZP.config.productionTip=!1,new s.ZP({store:d,router:O,render:t=>t(u)}).$mount("#app")},458:function(t,e,a){t.exports=a.p+"img/like.cb53b1b9.svg"},9574:function(t,e,a){t.exports=a.p+"img/logo.ca486306.svg"}},e={};function a(s){var r=e[s];if(void 0!==r)return r.exports;var i=e[s]={exports:{}};return t[s](i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(e,s,r,i){if(!s){var o=1/0;for(c=0;c<t.length;c++){s=t[c][0],r=t[c][1],i=t[c][2];for(var n=!0,l=0;l<s.length;l++)(!1&i||o>=i)&&Object.keys(a.O).every((function(t){return a.O[t](s[l])}))?s.splice(l--,1):(n=!1,i<o&&(o=i));if(n){t.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[s,r,i]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.p="/sibdev_test/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var r,i,o=s[0],n=s[1],l=s[2],u=0;if(o.some((function(e){return 0!==t[e]}))){for(r in n)a.o(n,r)&&(a.m[r]=n[r]);if(l)var c=l(a)}for(e&&e(s);u<o.length;u++)i=o[u],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(c)},s=self["webpackChunksibdev_task"]=self["webpackChunksibdev_task"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(2235)}));s=a.O(s)})();
//# sourceMappingURL=app.b601897c.js.map