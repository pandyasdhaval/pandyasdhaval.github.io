(function(e){function t(t){for(var a,i,s=t[0],c=t[1],l=t[2],u=0,p=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"8944c7bc","chunk-2d0d621d":"ff92531a","chunk-2d0df0b3":"b452182d","chunk-2d0e95df":"9da25b3f","chunk-46b3bcb8":"22d7ae4f","chunk-79d10f9e":"9ca5c1c0"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e);var l=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,n[1](l)}r[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"08aa":function(e,t,n){e.exports=n.p+"img/Dhaval_Term2.36e07e3c.jpg"},"2e2b":function(e,t,n){e.exports=n.p+"img/profile_pic.90ea7ea4.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:"",dense:""}},[a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{lg:"4",md:"4",sm:"6",cols:"9"}},[a("div",{staticClass:"d-flex align-center",on:{click:function(t){return e.$router.push({path:"/"})}}},[a("v-img",{staticStyle:{"border-radius":"50%"},attrs:{src:n("2e2b"),"max-width":"42px"}}),a("h1",{staticClass:"ml-2 text-lg-h4 text-xl-h4 text-md-h4 text-sm-h4 text-h6"},[e._v("Dhaval Pandya")])],1)]),a("v-spacer"),a("v-col",{staticClass:"d-flex justify-end align-center",attrs:{lg:"4",md:"4",sm:"6",cols:"3"}},[this.$vuetify.theme.dark?a("v-icon",{on:{click:e.changeTheme}},[e._v("mdi-lightbulb-on-outline")]):a("v-icon",{on:{click:e.changeTheme}},[e._v("mdi-lightbulb-off-outline")]),a("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[a("v-app-bar-nav-icon",e._g(e._b({},"v-app-bar-nav-icon",r,!1),n))]}}])},[a("v-card",[a("v-list",["Home"!==this.$route.name?a("v-list-item",{on:{click:function(t){return e.$router.push({path:"/"})}}},[a("v-icon",{staticClass:"mr-2"},[e._v("mdi-home")]),a("v-list-item-title",[e._v("Home")])],1):e._e(),"Co-op Experience"!==this.$route.name?a("v-list-item",{on:{click:function(t){return e.$router.push({path:"/co-op_experience"})}}},[a("v-icon",{staticClass:"mr-2"},[e._v("mdi-office-building")]),a("v-list-item-title",[e._v("Co-op Experience")])],1):e._e(),"Projects"!==this.$route.name?a("v-list-item",{on:{click:function(t){return e.$router.push({path:"/projects"})}}},[a("v-icon",{staticClass:"mr-2"},[e._v("mdi-pencil")]),a("v-list-item-title",[e._v("Projects")])],1):e._e()],1)],1)],1)],1)],1)],1)],1),a("v-main",{staticClass:"mb-6"},[a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",[a("router-view")],1)],1)],1)],1),a("v-footer",{staticClass:"d-flex align-center justify-center",attrs:{fixed:"",color:"primary","max-height":"24px"}},[a("a",{staticClass:"d-flex",attrs:{href:"https://www.linkedin.com/in/pandyad/",rel:"noopener noreferrer",target:"_blank"}},[a("v-icon",{staticClass:"mr-5",attrs:{small:""}},[e._v("mdi-linkedin")])],1),a("a",{staticClass:"d-flex",attrs:{href:"https://github.com/pandyasdhaval",rel:"noopener noreferrer",target:"_blank"}},[a("v-icon",{staticClass:"mr-4",attrs:{small:""}},[e._v("mdi-github")])],1),a("a",{staticClass:"d-flex",attrs:{href:"mailto:pandyasdhaval@gmail.com",rel:"noopener noreferrer",target:"_blank"}},[a("v-icon",{staticClass:"ml-1",attrs:{small:""}},[e._v("mdi-email-outline")])],1)])],1)},o=[],i={name:"App",methods:{changeTheme:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark}}},s=i,c=n("2877"),l=n("6544"),u=n.n(l),d=n("7496"),p=n("40dc"),m=n("5bc1"),f=n("b0af"),h=n("62ad"),v=n("a523"),b=n("553a"),g=n("132d"),x=n("adda"),y=n("8860"),_=n("da13"),w=n("5d23"),k=n("f6c4"),C=n("e449"),j=n("0fd9"),V=n("2fa4"),I=Object(c["a"])(s,r,o,!1,null,null,null),P=I.exports;u()(I,{VApp:d["a"],VAppBar:p["a"],VAppBarNavIcon:m["a"],VCard:f["a"],VCol:h["a"],VContainer:v["a"],VFooter:b["a"],VIcon:g["a"],VImg:x["a"],VList:y["a"],VListItem:_["a"],VListItemTitle:w["a"],VMain:k["a"],VMenu:C["a"],VRow:j["a"],VSpacer:V["a"]});n("d3b7");var S=n("8c4f"),O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("LandingPage")],1)},$=[],E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{staticClass:"pa-6"},[a("v-col",{staticClass:"d-none d-lg-flex d-xl-flex",attrs:{cols:"0",sm:"0",md:"0",lg:"2",xl:"2"}}),a("v-col",{attrs:{lg:"8",xl:"8",md:"12"}},[a("v-img",{attrs:{src:n("08aa"),contain:""}})],1),a("v-col",{staticClass:"d-none d-lg-flex d-xl-flex",attrs:{cols:"0",sm:"0",md:"0",lg:"2",xl:"2"}}),a("v-col",{staticClass:"d-none d-lg-flex d-xl-flex",attrs:{cols:"0",sm:"0",md:"0",lg:"1",xl:"1"}}),a("v-col",{staticClass:"text-justify d-flex flex-column text-lg-h5 text-xl-h4",attrs:{lg:"10",xl:"10",md:"12"}},[a("v-spacer"),a("body-1",{staticClass:"mt-4"},[e._v(" Hi! I'm Dhaval. The picture is from my visit to the Elora Dairy Research Station. I worked there on an 8-month "),a("router-link",{attrs:{to:"/co-op_experience"}},[e._v("co-op term")]),e._v(" from May 2020 to Dec 2020 as a Software Engineer on the Elora Dairy Portal project towards the goal of keeping data secure and accessible to researchers, farm managers, and stake holders."),a("br")],1),a("v-divider",{staticClass:"mt-3 mb-3"}),a("body-1",[e._v(" I'm a 3"),a("sup",[e._v("rd")]),e._v(" year student majoring in computer science at the University of Guelph with a minor in mathematics."),a("br")]),a("v-divider",{staticClass:"mt-2 mb-2"}),a("body-1",[e._v(" I build "),a("router-link",{attrs:{to:"/projects"}},[e._v("personal projects")]),e._v(" between semesters (and sometimes during semesters when I want to take a break from structured learning and decide to work on a weekend project instead :))."),a("br")],1),a("v-divider",{staticClass:"mt-2 mb-2"}),a("body-1",[e._v(" I love to volunteer. I have been a "),a("a",{attrs:{href:"https://www.uoguelph.ca/studentexperience/intlstudent/LINK"}},[e._v("link partner")]),e._v(", helping new international students ease their transition into Canadian culture and life at the University. Through the "),a("a",{attrs:{href:"https://www.uoguelph.ca/studentexperience/project-serve-day"}},[e._v("project serve day")]),e._v(" event, in Sep 2019 I lead a team of 76 volunteers to a successful completion of the mud run event organized by the Canadian Cancer Society, and in Sep 2018 I helped 10C Shared Space to organize their office space. ")]),a("v-divider",{staticClass:"mt-2 mb-2"}),a("body-1",[e._v(" In Fall 2019 I recieved Braithwaite Business Scholarship (offered to non-B.Comm. majors). I'm on Dean's Honours List for excellent academic achievement in Fall 2018, and Winter 2019 academic semesters. ")]),a("v-spacer")],1),a("v-col",{staticClass:"d-none d-lg-flex d-xl-flex",attrs:{cols:"0",sm:"0",md:"0",lg:"1",xl:"1"}})],1)},T=[],L={name:"LandingPage"},D=L,M=n("ce7e"),A=Object(c["a"])(D,E,T,!1,null,null,null),B=A.exports;u()(A,{VCol:h["a"],VDivider:M["a"],VImg:x["a"],VRow:j["a"],VSpacer:V["a"]});var H={name:"Home",components:{LandingPage:B}},F=H,R=Object(c["a"])(F,O,$,!1,null,null,null),z=R.exports;a["a"].use(S["a"]);var J=[{path:"/",name:"Home",component:z},{path:"/co-op_experience",name:"Co-op Experience",component:function(){return n.e("about").then(n.bind(null,"7ac5"))}},{path:"/projects",name:"Projects",component:function(){return n.e("chunk-46b3bcb8").then(n.bind(null,"acca"))}},{path:"/co-op_experience/wt1",name:"wt1",component:function(){return n.e("chunk-79d10f9e").then(n.bind(null,"c91a"))}},{path:"/co-op_experience/wt2",name:"wt2",component:function(){return n.e("chunk-2d0d621d").then(n.bind(null,"70f4"))}},{path:"/co-op_experience/wt3",name:"wt3",component:function(){return n.e("chunk-2d0df0b3").then(n.bind(null,"87db"))}},{path:"*",name:"404",component:function(){return n.e("chunk-2d0e95df").then(n.bind(null,"8cdb"))}}],N=new S["a"]({routes:J}),U=N,q=n("f309"),G=n("fcf4");a["a"].use(q["a"]);var K=new q["a"]({theme:{themes:{light:{primary:"#FFAB40",secondary:G["a"].black,accent:G["a"].blue}}}});a["a"].config.productionTip=!1,new a["a"]({router:U,vuetify:K,render:function(e){return e(P)}}).$mount("#app")}});
//# sourceMappingURL=app.88cee214.js.map