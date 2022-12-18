(function(){"use strict";var t={3670:function(t,e,a){var r=a(6369),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},s=[],i=a(1001),o={},l=(0,i.Z)(o,n,s,!1,null,null,null),u=l.exports,c=a(3822);r.ZP.use(c.ZP);var v=new c.ZP.Store({state:{logined:!1},getters:{getLogined(t){return t.logined}},mutations:{},actions:{},modules:{}}),d=a(2631),p=function(){var t=this,e=t._self._c;return t.alert?e("div",{staticClass:"alert"},[e("div",{staticClass:"alert-wrap"},[e("form",[e("label",[t._v("Запрос")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.alertData.request,expression:"alertData.request"}],attrs:{type:"text",placeholder:"чем кормить кота"},domProps:{value:t.alertData.request},on:{input:function(e){e.target.composing||t.$set(t.alertData,"request",e.target.value)}}}),e("label",[t._v("* Название")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.alertData.title,expression:"alertData.title"}],attrs:{type:"text",placeholder:"Укажите название"},domProps:{value:t.alertData.title},on:{input:function(e){e.target.composing||t.$set(t.alertData,"title",e.target.value)}}}),e("label",[t._v("Сортировать по")]),e("label",[t._v("Максимальное количество")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.alertData.maxValue,expression:"alertData.maxValue"}],attrs:{type:"number"},domProps:{value:t.alertData.maxValue},on:{input:function(e){e.target.composing||t.$set(t.alertData,"maxValue",e.target.value)}}}),e("div",{staticClass:"alert-buttons"},[e("button",{attrs:{type:"button"},on:{click:function(e){t.alert=!1}}},[t._v("Не сохранять")]),e("button",{attrs:{type:"button"},on:{click:function(e){return t.save()}}},[t._v("Сохранить")])])])])]):e("div",{staticClass:"search-page"},[e("header",[e("img",{attrs:{src:a(9574),alt:""}}),e("ul",{staticClass:"nav"},[e("li",{class:["search"==t.active?"active":""],on:{click:function(e){t.active="search"}}},[t._v("Поиск")]),e("li",{class:["fav"==t.active?"active":""],on:{click:function(e){t.active="fav"}}},[t._v("Избранное")])]),e("button",{staticClass:"logout",on:{click:function(e){return t.logOut()}}},[t._v("Выйти")])]),"search"==t.active?e("div",[e("h1",[t._v("Поиск видео")]),e("div",{staticClass:"searchbar"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputed,expression:"inputed"}],staticClass:"searchbar-input",attrs:{type:"text",placeholder:"Что хотите посмотреть?"},domProps:{value:t.inputed},on:{input:function(e){e.target.composing||(t.inputed=e.target.value)}}}),e("img",{staticClass:"like-basic",attrs:{src:a(458),alt:""},on:{click:function(e){t.alert=!0}}}),e("button",{staticClass:"search-btn",on:{click:function(e){return t.searchVideos(t.inputed,12)}}},[t._v("Найти")])]),t.videos?e("div",{staticClass:"result"},[e("div",{staticClass:"result-header"},[e("p",[t._v("Видео по запросу «"+t._s(t.inputed)+"»")]),e("img",{staticClass:"list-icon",attrs:{src:"",alt:""}}),e("img",{staticClass:"cards-icon",attrs:{src:"",alt:""}})]),t._l(t.videos,(function(a){return e("div",{key:a.id.videoId,staticClass:"video"},[e("iframe",{attrs:{src:t.getVideoUrl(a.id.videoId),frameborder:"0"}}),e("h2",[t._v(t._s(a.snippet.title))]),e("h3",[t._v(t._s(a.snippet.channelTitle))]),e("p",[t._v(t._s(t.getVideoDuration(a.id.videoId)))])])}))],2):t._e()]):t._e(),"fav"==t.active?e("div",t._l(t.fav,(function(a){return e("p",{key:a.title,on:{click:function(e){t.searchVideos(a.request,a.maxValue),t.active="search",t.inputed=a.request}}},[t._v(t._s(a.title))])})),0):t._e()])},m=[],g=(a(7658),a(4311));const f="AIzaSyB35wx3eP2JQqWHVQq4wR1kDms0airauXs";var h={name:"MainPage",data(){return{fav:[],active:"search",alert:!1,inputed:null,videos:null,alertData:{request:null,title:null,maxValue:null}}},created(){this.updateFav()},methods:{updateFav(){let t=localStorage.getItem("currentUser");this.fav=JSON.parse(localStorage.getItem(t))},searchVideos(t,e){g.Z.get("https://www.googleapis.com/youtube/v3/search",{params:{key:f,type:"video",part:"snippet",maxResults:e,q:t}}).then((t=>{console.log(t),this.videos=t.data.items}))},getVideoUrl(t){return`https://www.youtube.com/embed/${t}`},getVideoDuration(t){g.Z.get("https://www.googleapis.com/youtube/v3/videos",{params:{key:f,id:t,part:"snippet,contentDetails"}}).then((t=>{let e=this.convertISO8601ToSeconds(t.data.items[0].contentDetails.duration);return console.log(e),e}))},convertISO8601ToSeconds(t){var e,a=/^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/,r=0,n=0,s=0;if(a.test(t)){var i=a.exec(t);i[1]&&(r=Number(i[1])),i[2]&&(n=Number(i[2])),i[3]&&(s=Number(i[3])),e=3600*r+60*n+s}return e},save(){console.log(1);let t={request:this.alertData.request,title:this.alertData.title,maxValue:this.alertData.maxValue},e=localStorage.getItem("currentUser"),a=JSON.parse(localStorage.getItem(e));a.push(t),console.log(a),localStorage.setItem(e,JSON.stringify(a)),this.updateFav(),this.alert=!1},logOut(){localStorage.removeItem("sibdevAccess"),this.$router.push("/auth")}}},b=h,_=(0,i.Z)(b,p,m,!1,null,"4eefc9d4",null),w=_.exports,x=function(){var t=this,e=t._self._c;return e("div",{staticClass:"auth"},[e("img",{attrs:{src:a(9574),alt:""}}),e("h1",[t._v("Вход")]),e("label",[t._v("Логин")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.login,expression:"login"}],attrs:{type:"text"},domProps:{value:t.login},on:{input:function(e){e.target.composing||(t.login=e.target.value)}}}),e("label",[t._v("Пароль")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),e("button",{on:{click:function(e){return t.loginUser()}}},[t._v("Войти")])])},y=[];const k=[{id:1,name:"Nikitos",password:"2022",token:"abv"},{id:2,name:"Vitalik",password:"2022"}];var S={name:"AuthPage",data(){return{login:null,password:null}},methods:{loginUser(){if(k.find((t=>t.name===this.login&&t.password===this.password))){localStorage.setItem("sibdevAccess",Math.random().toString(36).substr(2)),localStorage.setItem("currentUser",this.login.toString());let t=[];localStorage.getItem(this.login.toString())||localStorage.setItem(this.login.toString(),JSON.stringify(t)),this.$router.push("/")}}}},D=S,P=(0,i.Z)(D,x,y,!1,null,"0244fa36",null),O=P.exports;r.ZP.use(d.ZP);const C=[{path:"/",name:"main",component:w,beforeEnter:(t,e,a)=>{localStorage.getItem("sibdevAccess")||v.getters.getLogined?a():a("/auth")}},{path:"/auth",name:"auth",component:O}],I=new d.ZP({mode:"history",base:"/sibdev_test/",routes:C});var V=I;r.ZP.config.productionTip=!1,new r.ZP({store:v,router:V,render:t=>t(u)}).$mount("#app")},458:function(t,e,a){t.exports=a.p+"img/like.cb53b1b9.svg"},9574:function(t,e,a){t.exports=a.p+"img/logo.ca486306.svg"}},e={};function a(r){var n=e[r];if(void 0!==n)return n.exports;var s=e[r]={exports:{}};return t[r](s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,r,n,s){if(!r){var i=1/0;for(c=0;c<t.length;c++){r=t[c][0],n=t[c][1],s=t[c][2];for(var o=!0,l=0;l<r.length;l++)(!1&s||i>=s)&&Object.keys(a.O).every((function(t){return a.O[t](r[l])}))?r.splice(l--,1):(o=!1,s<i&&(i=s));if(o){t.splice(c--,1);var u=n();void 0!==u&&(e=u)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[r,n,s]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.p="/sibdev_test/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,r){var n,s,i=r[0],o=r[1],l=r[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(n in o)a.o(o,n)&&(a.m[n]=o[n]);if(l)var c=l(a)}for(e&&e(r);u<i.length;u++)s=i[u],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(c)},r=self["webpackChunksibdev_task"]=self["webpackChunksibdev_task"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(3670)}));r=a.O(r)})();
//# sourceMappingURL=app.73aee20f.js.map