(function(t){function e(e){for(var s,i,c=e[0],o=e[1],l=e[2],d=0,m=[];d<c.length;d++)i=c[d],n[i]&&m.push(n[i][0]),n[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,c=1;c<a.length;c++){var o=a[c];0!==n[o]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={0:0},r=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;r.push([0,1]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0ba5":function(t,e,a){"use strict";var s=a("7b85"),n=a.n(s);n.a},"130e":function(t,e,a){},"16a3":function(t,e,a){"use strict";var s=a("130e"),n=a.n(s);n.a},1759:function(t,e,a){"use strict";var s=a("83f6"),n=a.n(s);n.a},"19c9":function(t,e,a){t.exports=a.p+"img/start-to-print.9d5d2352.jpg"},"1a3e":function(t,e,a){t.exports=a.p+"img/masterclass.d146829d.jpg"},"297a":function(t,e,a){},"302d":function(t,e,a){t.exports=a.p+"img/masterclass2.765805db.jpg"},3613:function(t,e,a){},"3a26":function(t,e,a){},"3d16":function(t,e,a){"use strict";var s=a("dfdd"),n=a.n(s);n.a},"53d7":function(t,e,a){"use strict";var s=a("730d"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d"),a("b7e3");var s=a("a026"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("vue-navbar"),a("router-view"),a("vue-footer")],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar__sticky",attrs:{id:"nav"}},[a("div",{staticClass:"container--wide"},[a("nav",{staticClass:"navbar"},[a("span",{staticClass:"navbar-toggle",attrs:{id:"navbar-toggle"},on:{click:t.onHamburgerClick}},[a("i",{staticClass:"fas fa-bars"})]),a("router-link",{attrs:{to:"home"}},[a("h3",{staticClass:"navbar__brand"},[t._v("\n                    3D GDM\n                ")])]),a("ul",{staticClass:"nav"},[a("navbar-link",{staticClass:"nav__item",attrs:{slug:"home"}},[t._v("Home")]),a("navbar-link",{staticClass:"nav__item",attrs:{slug:"classes"}},[t._v("Masterclasses")]),a("navbar-link",{staticClass:"nav__item",attrs:{slug:"showcase"}},[t._v("Showcase")]),a("navbar-link",{staticClass:"nav__item",attrs:{slug:"contact"}},[t._v("Contact")])],1)],1)])])},c=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("router-link",{staticClass:"nav__link",attrs:{to:t.slug}},[t._t("default")],2)],1)},l=[],u={name:"NavbarLink",props:{slug:{type:String,required:!0}}},d=u,m=a("2877"),v=Object(m["a"])(d,o,l,!1,null,null,null),p=v.exports,_={name:"Navbar",components:{NavbarLink:p},mounted:function(){var t=this;this.$nextTick(function(){window.addEventListener("scroll",t.onScrollNavbar)})},methods:{onScrollNavbar:function(){var t=document.getElementById("nav"),e=t.classList;document.documentElement.scrollTop>=75?!1===e.contains("shrink")&&e.toggle("shrink"):!0===e.contains("shrink")&&e.toggle("shrink")},onHamburgerClick:function(){document.getElementById("navbar-toggle");var t=document.querySelector(".nav");t.classList.toggle("is-open")}}},f=_,g=(a("16a3"),Object(m["a"])(f,i,c,!1,null,null,null)),b=g.exports,h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"footer"},[s("div",{staticClass:"container flex"},[s("div",{staticClass:"col-4"},[s("img",{staticStyle:{width:"150px"},attrs:{src:a("cda9")}})]),s("div",{staticClass:"col-4"},[s("h4",{staticClass:"footer__title"},[t._v("Contact")]),s("p",[t._v("\n                Campus Kantienberg "),s("br"),t._v("\n                Voetweg 66 "),s("br"),t._v("\n                9000 Gent\n            ")])]),s("div",{staticClass:"col-4"},[s("h4",{staticClass:"footer__title"},[t._v("Volg ons")]),s("p",{staticClass:"footer__social"},[t._v("\n                We posten leuke projecten, evenementen en opportuniteiten..."),s("br"),s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fab fa-instagram"})])])])])])}],y={name:"Footer"},x=y,w=(a("53d7"),Object(m["a"])(x,h,C,!1,null,null,null)),k=w.exports,j={components:{"vue-navbar":b,"vue-footer":k},methods:{goTo:function(t){window.location=t}}},O=j,E=Object(m["a"])(O,n,r,!1,null,null,null),S=E.exports,M=a("8c4f"),N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("vue-hero"),a("section",{staticClass:"section intro"},[a("div",{staticClass:"container flex flex--reverse"},[a("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticClass:"intro--left"},[a("div",{staticClass:"intro__content"},[a("h3",{staticClass:"intro__title"},[t._v("EEN WERELD VAN 3D")]),a("p",{staticClass:"intro__body"},[t._v("Een eenjarige opleiding, gespreid over 2 masterclasses waarin je ondergedompeld wordt in de kunst van het 3D-printen en het modelleren van objecten. Wie met een 3D-printer aan de slag wil en niet enkel bestaande digitale objecten uit online databases wil printen, moet zich trainen in het designen en modelleren van 3D-objecten. Aan de hand van talrijke workshops neemt deze cursus je stap voor stap mee in dit boeiende proces.")]),a("router-link",{staticClass:"btn btn--secondary",attrs:{to:"classes"}},[t._v("Onze Classes")])],1)]),a("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticClass:"intro--right"},[a("vue-carousel")],1)])]),a("section",{staticClass:"section masonry"},[a("div",{staticClass:"container"},[a("h2",{staticClass:"text--center"},[t._v("Showcase")]),a("vue-gallery",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{duration:1e3},expression:"{ duration: 1000 }"}]}),a("div",{staticClass:"masonry__button"},[a("router-link",{staticClass:"btn btn--primary",attrs:{to:"showcase"}},[t._v("Onze projecten")])],1)],1)]),a("section",{staticClass:"section feed"},[t._m(0),a("div",{staticClass:"feed--right"},[a("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{distance:"40px",origin:"right"},expression:"{ distance: '40px', origin: 'right' }"}],staticClass:"feed__wrapper"},[t._l(t.posts,function(e,s){return[s<=7?a("div",{key:e.id,staticClass:"feed__image",style:{"background-image":"url("+e.images.thumbnail.url+")"}}):t._e()]})],2)])])],1)},$=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"feed--left"},[s("div",{staticClass:"feed__icon"},[s("img",{staticStyle:{width:"75px"},attrs:{src:a("d91d")}}),s("span",{staticClass:"feed__social-name"},[t._v("@PrintArtevelde")])])])}],T=(a("96cf"),a("3b8d")),D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero"},[s("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{distance:"40px",origin:"left",mobile:!1},expression:"{ distance: '40px', origin: 'left', mobile: false }",modifiers:{reset:!0}}],staticClass:"hero__block--left"},[s("div",{staticClass:"hero__content"},[t._m(0),s("p",{staticClass:"hero__intro text--bold"},[t._v("\n                In de masterclasses 3D modeling & printing van de Arteveldehogeschool leer je stap voor stap 3D objecten creëren en printen. \n            ")]),s("router-link",{staticClass:"btn btn--primary",attrs:{to:"classes"}},[t._v("Ontdek de opleiding")])],1)]),s("div",{staticClass:"hero__block--right"}),s("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{origin:"bottom"},expression:"{ origin: 'bottom' }",modifiers:{reset:!0}}],staticClass:"hero__image"},[s("img",{attrs:{src:a("f686"),alt:"3D Model"}})])])},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"hero__title"},[t._v("3D Modeling "),a("br"),t._v("& Printing")])}],P={},A=P,I=(a("f808"),Object(m["a"])(A,D,L,!1,null,"03fa113e",null)),R=I.exports,z=a("bc3a"),F=a.n(z),V=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"carousel"},[s("div",{staticClass:"carousel__items-holder"},[s("div",{staticClass:"carousel__items"},[s("div",{staticClass:"carousel__slide is-selected"},[s("picture",{staticClass:"carousel__picture"},[s("img",{staticClass:"carousel__media",attrs:{src:a("302d")}})])]),s("div",{staticClass:"carousel__slide"},[s("picture",{staticClass:"carousel__picture"},[s("img",{staticClass:"carousel__media",attrs:{src:a("302d")}})])]),s("div",{staticClass:"carousel__slide"},[s("picture",{staticClass:"carousel__picture"},[s("img",{staticClass:"carousel__media",attrs:{src:a("302d")}})])])])]),s("div",{staticClass:"carousel__controls"},[s("button",{staticClass:"carousel-controls__button"},[t._v("Prev")]),s("button",{staticClass:"carousel-controls__button"},[t._v("Next")])])])}],G={name:"Slideshow"},K=G,q=(a("3d16"),Object(m["a"])(K,V,B,!1,null,"5d3209f4",null)),W=q.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"gallery"},t._l(t.images,function(t){return a("div",{key:t.id,staticClass:"gallery__item"},[a("img",{staticClass:"gallery__image",attrs:{src:t.acf.upload_image.sizes.large,"data-category":t.categories[0]}})])}),0)])},U=[],H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"banner"},[a("div",{staticClass:"video-wrapper"},[a("div",{staticClass:"overlay"}),a("vue-video")],1),a("div",{staticClass:"banner__bg-image"})])},Y=[],Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("video",{attrs:{id:"bannerVideo",autoplay:"",loop:"",muted:""},domProps:{muted:!0}},[s("source",{attrs:{src:a("ef5e"),type:"video/mp4"}})])},Q=[],X={name:"Video"},tt=X,et=(a("b835"),Object(m["a"])(tt,Z,Q,!1,null,null,null)),at=et.exports,st={name:"VideoBanner",components:{"vue-video":at}},nt=st,rt=(a("d441"),Object(m["a"])(nt,H,Y,!1,null,null,null)),it=rt.exports,ct=a("d225"),ot=a("b0b4"),lt={BASE_URL:"https://ahs-prod-web-3dgdm.azurewebsites.net/wordpress/wp-json/wp/v2",MAP_ACCESS_TOKEN:"pk.eyJ1IjoiY2VkcnZhbmgiLCJhIjoiY2p0ZDJhdWs3MTA4aDQzcDh4Y3YxMW5jMCJ9.Tl2PgWAaWhFTO-Ng2ZUsGw",INSTAGRAM_TOKEN:"11172890258.bb87f28.120f385cf7d241598ddda7fc4770bef3"},ut=lt.BASE_URL,dt=F.a.create({baseURL:ut}),mt=function(){function t(){Object(ct["a"])(this,t)}return Object(ot["a"])(t,null,[{key:"get",value:function(t){return dt.get(t)}}]),t}(),vt={name:"Gallery",components:{"vue-banner":it},data:function(){return{isLoading:!1,images:[]}},created:function(){this.fetchImages()},methods:{fetchImages:function(){var t=Object(T["a"])(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,mt.get("/gallery_images?_embed");case 2:e=t.sent,a=e.data,this.images=a;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},pt=vt,_t=(a("a978"),Object(m["a"])(pt,J,U,!1,null,"1233ef56",null)),ft=_t.exports,gt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("carousel",{staticClass:"carousel",attrs:{perPage:1,navigationEnabled:!1,paginationEnabled:!0,paginationSize:8,paginationPadding:5,autoplay:!0,autoplayTimeout:3e3,easing:"ease-in-out",paginationActiveColor:"#F99D27"}},[s("slide",{staticClass:"carousel__slide"},[s("img",{attrs:{src:a("302d")}})]),s("slide",{staticClass:"carousel__slide"},[s("img",{attrs:{src:a("1a3e")}})]),s("slide",{staticClass:"carousel__slide"},[s("img",{attrs:{src:a("19c9")}})]),s("slide",{staticClass:"carousel__slide"},[s("img",{attrs:{src:a("89bb")}})])],1)},bt=[],ht={name:"VueCarousel"},Ct=ht,yt=(a("d951"),Object(m["a"])(Ct,gt,bt,!1,null,"c53321dc",null)),xt=yt.exports,wt={name:"HomePage",components:{"vue-hero":R,"vue-slideshow":W,"vue-carousel":xt,"vue-gallery":ft,"vue-footer":k},data:function(){return{posts:[],token:lt.INSTAGRAM_TOKEN}},created:function(){this.fetchInstagram()},methods:{fetchInstagram:function(){var t=Object(T["a"])(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.instagram.com/v1/users/self/media/recent/?access_token=".concat(this.token));case 2:return e=t.sent,t.next=5,e.json();case 5:a=t.sent,this.posts=a.data,console.log(this.posts);case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},kt=wt,jt=(a("e146"),Object(m["a"])(kt,N,$,!1,null,null,null)),Ot=jt.exports,Et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("section",{staticClass:"classes"},[a("vue-banner"),a("div",{staticClass:"container"},[a("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{duration:800},expression:"{ duration: 800 }"}],staticClass:"class__wrapper"},[a("h3",[t._v("Beschikbare classes")]),a("class-card-list")],1)])],1)])},St=[],Mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"class-list flex"},t._l(t.classes,function(t){return a("class-card",{key:t.id,attrs:{item:t}})}),1)},Nt=[],$t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"class"},[a("picture",{staticClass:"class__thumbnail"},[a("div",{staticClass:"class__overlay"}),a("img",{attrs:{src:t.item._embedded["wp:featuredmedia"][0].media_details.sizes.medium_large.source_url}})]),a("section",{staticClass:"class__content"},[a("h4",{staticClass:"class__title"},[t._v("\n            "+t._s(t.item.title.rendered)+"\n        ")]),a("p",{domProps:{innerHTML:t._s(t.item.content.rendered)}})]),t._m(0)])},Tt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"class__footer"},[a("a",{staticClass:"btn btn--link",attrs:{href:"https://www.arteveldehogeschool.be/opleidingen/bijscholingen-en-studiedagen/masterclasses-3d-modeling-printing"}},[t._v("Bekijk deze class")])])}],Dt={name:"ClassCard",props:{item:Object}},Lt=Dt,Pt=(a("a97b"),Object(m["a"])(Lt,$t,Tt,!1,null,"f18746d4",null)),At=Pt.exports,It={name:"ClassCardList",components:{ClassCard:At},data:function(){return{classes:[]}},created:function(){this.fetchClasses()},methods:{fetchClasses:function(){var t=Object(T["a"])(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,mt.get("/classes?_embed");case 2:e=t.sent,a=e.data,this.classes=a;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},Rt=It,zt=(a("7671"),Object(m["a"])(Rt,Mt,Nt,!1,null,"a54538ac",null)),Ft=zt.exports,Vt={name:"ClassesPage",components:{"vue-banner":it,ClassCardList:Ft}},Bt=Vt,Gt=(a("72da"),Object(m["a"])(Bt,Et,St,!1,null,null,null)),Kt=Gt.exports,qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("section",{staticClass:"showcase m-top"},[t._m(0),a("div",{staticClass:"container m-top"},[a("vue-gallery",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{duration:800},expression:"{ duration: 800 }"}]})],1)])])},Wt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"container"},[a("h2",{staticClass:"header__title"},[t._v("Showcase")])])])}],Jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{class:[t.active?"is-active tag":"tag"],on:{click:function(e){return t.setFilter(t.category)}}},[t._v(t._s(t.name))])},Ut=[],Ht=(a("c5f6"),{name:"Tag",props:{name:{type:String,required:!0},active:{type:Boolean},category:{type:Number}},data:function(){return{currentFilter:0}},methods:{setFilter:function(t){this.currentFilter=t,console.log(this.currentFilter)}}}),Yt=Ht,Zt=(a("c0bd"),Object(m["a"])(Yt,Jt,Ut,!1,null,"fe7c2254",null)),Qt=Zt.exports,Xt={name:"ShowcasePage",components:{"vue-gallery":ft,"vue-tag":Qt},data:function(){return{isActive:!0,categories:[]}},created:function(){this.fetchCategories()},methods:{fetchCategories:function(){var t=Object(T["a"])(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,mt.get("/categories");case 2:e=t.sent,a=e.data,this.categories=a;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},te=Xt,ee=(a("0ba5"),Object(m["a"])(te,qt,Wt,!1,null,"9d32ad62",null)),ae=ee.exports,se=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[t._m(0),a("section",{staticClass:"section map"},[a("vue-map",{attrs:{accessToken:t.token,mapOptions:t.mapOptions}})],1),t._m(1)])},ne=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section contact m-top",staticStyle:{"margin-top":"8rem"}},[a("div",{staticClass:"container"},[a("h2",{staticClass:"lowercase"},[t._v("Nog een vraag? Laat het ons weten!")])]),a("div",{staticClass:"container flex"},[a("div",{staticClass:"contact__column col-4"},[a("div",{staticClass:"contact__block"},[a("h4",[t._v("Tom Neuttiens")]),a("p",[a("span",[t._v("Docent 3D Modeling")]),a("br"),a("a",{staticClass:"orange"},[t._v("tom.neuttiens@arteveldehs.be")])])]),a("div",{staticClass:"contact__block"},[a("h4",[t._v("Inge Sintobin")]),a("p",[a("span",[t._v("Docent 3D Modeling")]),a("br"),a("a",{staticClass:"orange"},[t._v("inge.sintobin@arteveldehs.be")])])])]),a("div",{staticClass:"contact__column col-4"},[a("div",{staticClass:"contact__block"},[a("h4",[t._v("Contact")]),a("p",[t._v("\n                        Campus Kantienberg\n                        "),a("br"),t._v("\n                        Voetweg 66\n                        "),a("br"),t._v("\n                        9000 Gent\n                    ")]),a("p",{staticClass:"orange"},[t._v("\n                        +32 45 41 25 21\n                        "),a("br")])])]),a("div",{staticClass:"contact__column col-4"},[a("div",{staticClass:"contact__block"},[a("h4",[t._v("Sociale Media")]),a("p",{staticClass:"contact__social"},[t._v("\n                        Volg ons en kom meer te weten"),a("br"),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-instagram"})])])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section contact-form"},[a("h3",[t._v("Contactformulier")]),a("form",{staticClass:"form"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[t._v("Naam")]),a("input",{staticClass:"form-control",attrs:{type:"text",name:"name"}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"subject"}},[t._v("Onderwerp")]),a("input",{staticClass:"form-control",attrs:{type:"text",name:"subject"}})]),a("div",{staticClass:"form-group"},[a("link",{attrs:{href:"https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.1/mapbox-gl.css",rel:"stylesheet"}}),a("label",{attrs:{for:"message"}},[t._v("Bericht")]),a("textarea",{staticClass:"form-control",attrs:{name:"message",rows:"10"}})]),a("button",{staticClass:"btn btn--primary"},[t._v("Schrijf je in")])])])}],re=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.isLoaded?t._e():s("img",{staticClass:"map",attrs:{src:a("7fcf")}}),s("div",{staticClass:"map",attrs:{id:t.mapOptions.hasOwnProperty("container")?t.mapOptions.container:"map"}})])},ie=[],ce=(a("ac6a"),a("e192")),oe=a.n(ce),le={name:"AppMap",props:{accessToken:{type:String,required:!0},mapOptions:{type:Object}},data:function(){return{_map:null,isLoaded:!1,markerData:null}},mounted:function(){var t=this.initMap();this._map=t},methods:{initMap:function(){var t=this;oe.a.accessToken=this.accessToken,this.mapOptions.hasOwnProperty("container")||(this.mapOptions.container="map");var e=new oe.a.Map(this.mapOptions);e.on("style.load",function(){t.addMarkers(e),t.isLoaded=!t.isLoaded})},addMarkers:function(t){this.markerData={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:this.mapOptions.center},properties:{title:"Arteveldehogeschool",description:"Campus Kantienberg"}}]},this.markerData.features.forEach(function(e){var a=document.createElement("div");a.className="marker",new oe.a.Marker(a).setLngLat(e.geometry.coordinates).addTo(t)})}}},ue=le,de=(a("8750"),Object(m["a"])(ue,re,ie,!1,null,"21bd7256",null)),me=de.exports,ve={name:"ContactPage",components:{"vue-map":me},data:function(){return{token:lt.MAP_ACCESS_TOKEN,mapOptions:{container:"red",style:"mapbox://styles/mapbox/light-v9",center:[3.72671,51.041052],zoom:15}}}},pe=ve,_e=(a("1759"),Object(m["a"])(pe,se,ne,!1,null,"44655b73",null)),fe=_e.exports;s["a"].use(M["a"]);var ge=new M["a"]({mode:"history",linkExactActiveClass:"is-selected",routes:[{path:"/home",name:"home",component:Ot},{path:"/classes",name:"classes",component:Kt},{path:"/showcase",name:"showcase",component:ae},{path:"/contact",name:"contact",component:fe},{path:"*",redirect:{name:"home"}}]}),be=a("0a63"),he=a.n(be),Ce=a("4c95"),ye=a.n(Ce);s["a"].use(ye.a,{duration:2e3,distance:"40px"}),s["a"].config.productionTip=!1,s["a"].config.ignoredElements=["a-scene","a-marker","a-entity","a-camera"],s["a"].component("vue-dino",{template:'\n  <a-marker id="dinoM" preset="hiro">\n    <a-entity id="dinoEntity"></a-entity>\n  </a-marker>'}),s["a"].use(he.a),new s["a"]({el:"#app",router:ge,render:function(t){return t(S)}}).$mount("#app")},"72da":function(t,e,a){"use strict";var s=a("a999"),n=a.n(s);n.a},"730d":function(t,e,a){},7671:function(t,e,a){"use strict";var s=a("3613"),n=a.n(s);n.a},"7b85":function(t,e,a){},"7fcf":function(t,e,a){t.exports=a.p+"img/map--gray.3d2bdb18.png"},"83f6":function(t,e,a){},8750:function(t,e,a){"use strict";var s=a("9614"),n=a.n(s);n.a},"89bb":function(t,e,a){t.exports=a.p+"img/3dmodelingprinting.0007d249.jpg"},"92b2":function(t,e,a){},9614:function(t,e,a){},"9fe0":function(t,e,a){},a0d3:function(t,e,a){},a978:function(t,e,a){"use strict";var s=a("9fe0"),n=a.n(s);n.a},a97b:function(t,e,a){"use strict";var s=a("297a"),n=a.n(s);n.a},a999:function(t,e,a){},b7e3:function(t,e,a){t.exports={container:"global_container_2Rxee","container--wide":"global_container--wide_3Bn0C",flex:"global_flex__KkmM","flex--reverse":"global_flex--reverse_15OLI","col-3":"global_col-3_1be_7","col-4":"global_col-4_wgqhm","col-6":"global_col-6_1UsCi","col-9":"global_col-9_1dtkz","col-12":"global_col-12_VZmFw",section:"global_section_2DN3X","background-nav":"global_background-nav_1U2I7","m-top":"global_m-top_2M252","text--center":"global_text--center_3ERYh","text--bold":"global_text--bold_2tqzI",btn:"global_btn_2ac5x","btn--primary":"global_btn--primary_3Ly3k","btn--secondary":"global_btn--secondary_316q_","btn--nav":"global_btn--nav_24OtG","btn--link":"global_btn--link_1bGIr"}},b835:function(t,e,a){"use strict";var s=a("a0d3"),n=a.n(s);n.a},c0bd:function(t,e,a){"use strict";var s=a("d7eb"),n=a.n(s);n.a},c7db:function(t,e,a){},cda9:function(t,e,a){t.exports=a.p+"img/artevelde.20476ef1.png"},d441:function(t,e,a){"use strict";var s=a("d598"),n=a.n(s);n.a},d598:function(t,e,a){},d7eb:function(t,e,a){},d91d:function(t,e,a){t.exports=a.p+"img/instagram.175b8765.svg"},d951:function(t,e,a){"use strict";var s=a("c7db"),n=a.n(s);n.a},dfdd:function(t,e,a){},e146:function(t,e,a){"use strict";var s=a("92b2"),n=a.n(s);n.a},ef5e:function(t,e,a){t.exports=a.p+"media/banner-mood.cb034648.mp4"},f686:function(t,e,a){t.exports=a.p+"img/dino.68567f74.png"},f808:function(t,e,a){"use strict";var s=a("3a26"),n=a.n(s);n.a}});
//# sourceMappingURL=app.93e49bed.js.map