(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0146":function(t,e,c){"use strict";c("9c67")},"07bd":function(t,e,c){"use strict";c.r(e);var n=c("7a23"),o={id:"page-project"};function a(t,e,c,a,r,i){var d=Object(n["A"])("my-web-navigation"),l=Object(n["A"])("my-web-sidebar"),b=Object(n["A"])("my-web-full-page"),s=Object(n["A"])("router-view");return Object(n["u"])(),Object(n["g"])("div",o,[Object(n["h"])("header",null,[Object(n["k"])(d),Object(n["k"])(l),Object(n["k"])(b)]),Object(n["k"])(s)])}var r=c("cd75"),i=c("83db"),d=c("29ec"),l={name:"Project",components:{MyWebNavigation:r["a"],MyWebSidebar:i["a"],MyWebFullPage:d["a"]}};l.render=a;e["default"]=l},"11c2":function(t,e,c){"use strict";c("67c5")},"11db":function(t,e,c){},"1b0a":function(t,e,c){},"1d46":function(t,e,c){"use strict";c("1b0a")},"22e4":function(t,e,c){"use strict";c.r(e);var n=c("7a23"),o={id:"page-project-body"};function a(t,e,c,a,r,i){var d=Object(n["A"])("my-web-portfolio-inner"),l=Object(n["A"])("my-web-footer");return Object(n["u"])(),Object(n["g"])("div",o,[Object(n["h"])("main",null,[Object(n["k"])(d)]),Object(n["h"])("footer",null,[Object(n["k"])(l)])])}var r={class:"portfolio"},i={class:"container"},d={class:"portfolio-wrap"},l=["innerHTML"],b={class:"portfolio__nav"},s=["id","data-menu"],u={key:0,class:"portfolio__dropdown-list"},j=["data-menu"],O={class:"portfolio__card-inner"},p=Object(n["h"])("div",{class:"portfolio__background"},null,-1);function f(t,e,c,o,a,f){var m=Object(n["A"])("my-web-card");return Object(n["u"])(),Object(n["g"])("section",r,[Object(n["h"])("div",i,[Object(n["h"])("div",d,[Object(n["k"])(n["b"],{name:"fade",mode:"out-in",appear:""},{default:Object(n["G"])((function(){return[Object(n["h"])("h3",{class:"portfolio__title neon",innerHTML:t.neonPortfolioTitle},null,8,l)]})),_:1}),Object(n["k"])(n["b"],{name:"fade",mode:"out-in",appear:""},{default:Object(n["G"])((function(){return[Object(n["h"])("nav",b,[t.portfolioNavHidden?(Object(n["u"])(!0),Object(n["g"])(n["a"],{key:0},Object(n["y"])(t.portfolioInnerMenu,(function(t){return Object(n["u"])(),Object(n["g"])("label",{key:t.id,class:Object(n["q"])(t.labelClass),onClick:e[0]||(e[0]=function(t){return f.getCheck(t)})},[Object(n["h"])("input",{type:"radio",name:"checkbox",id:t.id,class:Object(n["q"])(t.class),checked:"","data-menu":t.dataMenu},null,10,s),Object(n["h"])("span",null,Object(n["C"])(t.text),1)],2)})),128)):Object(n["f"])("",!0),t.portfolioNavHidden?Object(n["f"])("",!0):(Object(n["u"])(),Object(n["g"])("div",{key:1,class:Object(n["q"])(["portfolio__dropdown checked",t.dropdownPortfolio.labelClass])},[Object(n["h"])("div",{class:"portfolio__dropdown-active",onClick:e[1]||(e[1]=function(t){return f.dropdown(t)})},Object(n["C"])(t.dropdownPortfolio.text),1),t.dropHidden?Object(n["f"])("",!0):(Object(n["u"])(),Object(n["g"])("div",u,[(Object(n["u"])(!0),Object(n["g"])(n["a"],null,Object(n["y"])(t.portfolioInnerMenu,(function(t){return Object(n["u"])(),Object(n["g"])("div",{class:Object(n["q"])(["portfolio__dropdown-item",t.labelClass]),onClick:e[2]||(e[2]=function(t){return f.dropdownOption(t)}),key:t.id,"data-menu":t.dataMenu},Object(n["C"])(t.text),11,j)})),128))]))],2)),Object(n["h"])("div",O,[(Object(n["u"])(!0),Object(n["g"])(n["a"],null,Object(n["y"])(t.portfolioAll,(function(t){return Object(n["u"])(),Object(n["g"])("div",{class:Object(n["q"])(["project",t.allMenuClass]),key:t},[Object(n["k"])(m,{link:"#",src:t.cardSrc,alt:t.cardAlt,title:t.cardTitle,text:t.cardText,"card-id":t.cardId},null,8,["src","alt","title","text","card-id"])],2)})),128))])])]})),_:1})])]),p])}var m=c("5530"),v=c("cf44"),h=c("5502"),k={components:{MyWebCard:v["a"]},data:function(){return{}},computed:Object(m["a"])({},Object(h["b"])(["portfolioAll","neonPortfolioTitle","portfolioInnerMenu","dropdownPortfolio","dropHidden","portfolioNavHidden"])),methods:{loadCards:function(){this.$store.commit("loadCards")},getCheck:function(t){this.$store.commit("getCheck",t)},dropdown:function(t){this.$store.commit("dropdown",t)},dropdownOption:function(t){this.$store.commit("dropdownOption",t)}},mounted:function(){this.loadCards()}};c("42c2");k.render=f;var g=k,y=c("7537"),C={name:"ProjectBody",components:{MyWebPortfolioInner:g,MyWebFooter:y["a"]}};C.render=a;e["default"]=C},2781:function(t,e,c){"use strict";c("68b9")},"42c2":function(t,e,c){"use strict";c("ecd4")},"67c5":function(t,e,c){},"68b9":function(t,e,c){},"7cd5":function(t,e,c){"use strict";c.r(e);var n=c("7a23"),o={id:"page-card"};function a(t,e,c,a,r,i){var d=Object(n["A"])("my-web-card-body"),l=Object(n["A"])("my-web-footer-inner");return Object(n["u"])(),Object(n["g"])("div",o,[Object(n["h"])("main",null,[Object(n["k"])(d)]),Object(n["h"])("footer",null,[Object(n["k"])(l)])])}var r={class:"card-post"},i={class:"container card-post-wrap"},d={class:"card-post__nav"},l={class:"card-post__nav-desc"},b={class:"card-post__nav-title"},s={class:"card-post__nav-meta"},u={class:"card-post__content"},j={class:"card-post__content-desc"},O={class:"card-post__content-carousel"},p=["src","alt"],f={class:"card-post__pagination"};function m(t,e,o,a,m,v){var h=Object(n["A"])("my-web-card-link"),k=Object(n["A"])("my-web-card-about"),g=Object(n["A"])("my-web-card-detals"),y=Object(n["A"])("splide-slide"),C=Object(n["A"])("splide"),A=Object(n["A"])("my-web-pagination");return Object(n["u"])(),Object(n["g"])("section",r,[Object(n["h"])("div",i,[Object(n["k"])(n["b"],{name:"fade",mode:"out-in",appear:""},{default:Object(n["G"])((function(){return[Object(n["h"])("div",d,[Object(n["h"])("h2",l,Object(n["C"])(t.activeCard.card.cardPostTitle),1),Object(n["h"])("h3",b,Object(n["C"])(t.activeCard.card.cardPostName),1),Object(n["h"])("div",s,[(Object(n["u"])(!0),Object(n["g"])(n["a"],null,Object(n["y"])(t.activeCard.card.cardPostMeta,(function(t){return Object(n["u"])(),Object(n["g"])("span",{key:t,class:Object(n["q"])(t.class)},Object(n["C"])(t.text),3)})),128))])])]})),_:1}),Object(n["h"])("div",u,[Object(n["k"])(n["b"],{name:"fade",mode:"out-in",appear:""},{default:Object(n["G"])((function(){return[Object(n["h"])("div",j,[Object(n["k"])(h,{linkProjectTitle:t.activeCard.card.linkProjectTitle,linkProjectItem:t.activeCard.card.linkProjectItem},null,8,["linkProjectTitle","linkProjectItem"]),Object(n["k"])(k,{cardAboutTitle:t.activeCard.card.cardAboutTitle,cardAboutText:t.activeCard.card.cardAboutText},null,8,["cardAboutTitle","cardAboutText"]),Object(n["k"])(g,{detalsTitle:t.activeCard.card.detalsTitle,detalsDescItems:t.activeCard.card.detalsDescItems},null,8,["detalsTitle","detalsDescItems"])])]})),_:1}),Object(n["k"])(n["b"],{name:"fade",mode:"out-in",appear:""},{default:Object(n["G"])((function(){return[Object(n["h"])("div",O,[Object(n["k"])(C,{class:"carousel-project",options:t.projectSlide,key:"slideCardKey"+t.slideCardKey},{default:Object(n["G"])((function(){return[(Object(n["u"])(!0),Object(n["g"])(n["a"],null,Object(n["y"])(t.activeCard.card.projectSlides,(function(t){return Object(n["u"])(),Object(n["e"])(y,{key:t,onClick:e[0]||(e[0]=function(t){return v.fullPageAdd(t)}),onMousedown:v.mousedownSlide,onMouseup:v.mouseupSlide},{default:Object(n["G"])((function(){return[Object(n["h"])("img",{src:c("bb6e")("./"+t.src),alt:t.alt},null,8,p)]})),_:2},1032,["onMousedown","onMouseup"])})),128))]})),_:1},8,["options"])])]})),_:1})]),Object(n["k"])(n["b"],{name:"fade",mode:"out-in",appear:""},{default:Object(n["G"])((function(){return[Object(n["h"])("div",f,[Object(n["k"])(A,{paginationPrev:t.paginationPrev,paginationNext:t.paginationNext,onClickAction:e[1]||(e[1]=function(t){return v.scrollToTop(),v.pushInServeActiveCard(),v.slideUpdate()})},null,8,["paginationPrev","paginationNext"])])]})),_:1})])])}var v=c("5530");function h(t,e,c,o,a,r){return Object(n["u"])(),Object(n["g"])(n["a"],null,[Object(n["h"])("button",{class:"pagination",onClick:e[0]||(e[0]=function(e){return r.prevProject(),t.$emit("clickAction")})},[Object(n["h"])("span",null,Object(n["C"])(c.paginationPrev),1)]),Object(n["h"])("button",{class:"pagination",onClick:e[1]||(e[1]=function(e){return r.nextProject(),t.$emit("clickAction")})},[Object(n["h"])("span",null,Object(n["C"])(c.paginationNext),1)])],64)}var k={props:{paginationPrev:String,paginationNext:String},emits:["clickAction"],methods:{prevProject:function(){this.$store.commit("prevProject")},nextProject:function(){this.$store.commit("nextProject")}},mounted:function(){}};c("0146");k.render=h;var g=k,y={class:"detals"},C={class:"detals-title"},A={class:"detals-description"};function _(t,e,c,o,a,r){return Object(n["u"])(),Object(n["g"])("div",y,[Object(n["h"])("h4",C,Object(n["C"])(c.detalsTitle),1),Object(n["h"])("ol",A,[(Object(n["u"])(!0),Object(n["g"])(n["a"],null,Object(n["y"])(c.detalsDescItems,(function(t){return Object(n["u"])(),Object(n["g"])("li",{class:"detals-description-item",key:t},[(Object(n["u"])(!0),Object(n["g"])(n["a"],null,Object(n["y"])(t.text,(function(t){return Object(n["u"])(),Object(n["g"])("p",{key:t},Object(n["C"])(t),1)})),128))])})),128))])])}var w={name:"",props:{detalsTitle:String,detalsDescItems:Array}};c("2781");w.render=_;var P=w,T={class:"about-project"},M={class:"about-project__title"};function I(t,e,c,o,a,r){return Object(n["u"])(),Object(n["g"])("div",T,[Object(n["h"])("h4",M,Object(n["C"])(c.cardAboutTitle),1),Object(n["h"])("p",null,Object(n["C"])(c.cardAboutText),1)])}var S={name:"",props:{cardAboutTitle:String,cardAboutText:String}};c("b8a8");S.render=I;var x=S,W=(c("9911"),{class:"link-project"}),$={class:"link-project-title"},N=["href"];function G(t,e,c,o,a,r){return Object(n["u"])(),Object(n["g"])("div",W,[Object(n["h"])("h4",$,Object(n["C"])(c.linkProjectTitle),1),(Object(n["u"])(!0),Object(n["g"])(n["a"],null,Object(n["y"])(c.linkProjectItem,(function(t){return Object(n["u"])(),Object(n["g"])("div",{class:"link-project-item",key:t},[Object(n["h"])("i",{class:Object(n["q"])(["fa fa-2x",t.class]),"aria-hidden":"true"},null,2),Object(n["h"])("a",{href:t.link,target:"_blank"},Object(n["C"])(t.text),9,N)])})),128))])}var H={name:"",props:{linkProjectTitle:String,linkProjectItem:Array}};c("11c2");H.render=G;var q=H,D=c("5e2b"),K=c("5502"),L={components:{MyWebPagination:g,MyWebCardDetals:P,MyWebCardAbout:x,MyWebCardLink:q,Splide:D["a"],SplideSlide:D["b"]},computed:Object(v["a"])({},Object(K["b"])(["activeCard","projectSlide","localActive","paginationPrev","paginationNext","slideCardKey"])),methods:{loadActiveCard:function(){this.$store.commit("loadActiveCard")},loadCards:function(){this.$store.commit("loadCards")},mousedownSlide:function(t){this.$store.commit("mousedownSlide",t)},mouseupSlide:function(t){this.$store.commit("mouseupSlide",t)},scrollToTop:function(){this.$store.commit("scrollToTop")},pushInServeActiveCard:function(){this.$store.commit("pushInServeActiveCard")},slideUpdate:function(){this.$store.commit("slideUpdate")},fullPageAdd:function(t){this.$store.commit("fullPageAdd",t)}},beforeMount:function(){this.localActive&&this.loadActiveCard()},mounted:function(){this.loadCards()},watch:{slideCardKey:function(){console.log("slideCardKey",this.slideCardKey)}}};c("1d46");L.render=m;var F=L,U={class:"footer-inner"},B={class:"container"},J={class:"footer-inner-column"},z={class:"footer-inner__title"},E={class:"footer-inner__subtitle"},Q=["href"],R={class:"footer-inner__social header__bg-social"};function V(t,e,c,o,a,r){var i=Object(n["A"])("my-web-social-icon");return Object(n["u"])(),Object(n["g"])("div",U,[Object(n["h"])("div",B,[Object(n["h"])("div",J,[Object(n["h"])("h3",z,Object(n["C"])(t.footerInnerTitle),1),Object(n["h"])("p",E,[Object(n["j"])(Object(n["C"])(t.footerInnerSubTitle),1),Object(n["h"])("a",{href:"mailto:"+t.footerInnerLink},Object(n["C"])(t.footerInnerLink),9,Q)]),Object(n["h"])("div",R,[Object(n["k"])(i)])])])])}var X=c("8a7e"),Y={components:{MyWebSocialIcon:X["a"]},computed:Object(v["a"])({},Object(K["b"])(["footerInnerTitle","footerInnerSubTitle","footerInnerLink"]))};c("a88e");Y.render=V;var Z=Y,tt={name:"Card",components:{MyWebCardBody:F,MyWebFooterInner:Z}};tt.render=a;e["default"]=tt},"9c67":function(t,e,c){},a88e:function(t,e,c){"use strict";c("11db")},b8a8:function(t,e,c){"use strict";c("d81b")},b8fa:function(t,e,c){"use strict";c.r(e);var n=c("7a23"),o={id:"page-contact"};function a(t,e,c,a,r,i){var d=Object(n["A"])("my-web-navigation"),l=Object(n["A"])("my-web-sidebar"),b=Object(n["A"])("my-web-contact"),s=Object(n["A"])("my-web-footer");return Object(n["u"])(),Object(n["g"])("div",o,[Object(n["h"])("header",null,[Object(n["k"])(d),Object(n["k"])(l)]),Object(n["h"])("main",null,[Object(n["k"])(b)]),Object(n["h"])("footer",null,[Object(n["k"])(s)])])}var r=c("cd75"),i=c("83db"),d=c("d4f8"),l=c("7537"),b={name:"Home",components:{MyWebNavigation:r["a"],MyWebSidebar:i["a"],MyWebContact:d["a"],MyWebFooter:l["a"]}};b.render=a;e["default"]=b},d81b:function(t,e,c){},ecd4:function(t,e,c){}}]);
//# sourceMappingURL=about.3088f30f.js.map