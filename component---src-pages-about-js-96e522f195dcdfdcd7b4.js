(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+vFG":function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.default=void 0;var r=n(a("pVnL")),l=n(a("8OQS")),s=n(a("q1tI")),i=a("Wbzz"),c=n(a("KHAo")),o=function(e){var t=e.to,a=e.asModal,n=e.state,o=(0,l.default)(e,["to","asModal","state"]);return s.default.createElement(c.default.Consumer,null,(function(e){e.modal;var l=e.closeTo;return s.default.createElement(i.Link,(0,r.default)({to:t,state:(0,r.default)({},n,{modal:a,noScroll:t===l})},o))}))};t.default=o},"3XHS":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("v8IA"),s=a("7vrA"),i=a("wx14"),c=a("zLVn"),o=a("eC2I"),m=a.n(o),u=a("17x9"),d=a.n(u),h=a("vUet"),f=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"],p=(d.a.string,d.a.bool,d.a.bool,d.a.bool,d.a.bool,r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,l=e.fluid,s=e.rounded,o=e.roundedCircle,u=e.thumbnail,d=Object(c.a)(e,f);a=Object(h.a)(a,"img");var p=m()(l&&a+"-fluid",s&&"rounded",o&&"rounded-circle",u&&a+"-thumbnail");return r.a.createElement("img",Object(i.a)({ref:t},d,{className:m()(n,p)}))})));p.displayName="Image",p.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1};var E=p,g=a("Kvkj"),v=a("7Qib"),b=a("3Z9Z"),w=a("JI6e");t.default=function(e){var t=e.data,a=function(e){var t=e.title,a=(e.author,e.link),n=e.year;return r.a.createElement("li",{key:t},">"," ",r.a.createElement("a",{rel:"noopener noreferrer",href:a},t),"  (",n,")")},i=function(e){var t=e.title,a=e.link,n=e.year;return r.a.createElement("li",{key:t},">"," ",r.a.createElement("a",{rel:"noopener noreferrer",href:a},t),"  (",n,")")},c=t.site.siteMetadata,o=(c.author,c.occupation,c.readingList),m=c.showsList,u=c.animeList,d=c.hackathons,h=c.features,f=c.essayList,p=(c.designations,c.interests),y=c.passions,N=(c.dabblings,c.eager),x=c.learnings,k=c.conferences,S=(c.unemployed,c.hobbies,c.advanced,c.intermediate,c.basic,Object(n.useContext)(v.b).toString,o.map((function(e){return a(e)})),m.map((function(e){return a(e)}))),I=(f.map((function(e){return a(e)})),h.map((function(e){return i(e)}))),j=(d.map((function(e){return i(e)})),u.map((function(e){return i(e)})));k.map((function(e){return i(e)}));return r.a.createElement(g.c,null,r.a.createElement(v.a,{title:"About"}),r.a.createElement(g.d,{title:"About"}),r.a.createElement(s.a,{className:"text-center"},r.a.createElement(l.Link,{className:"no-effect",to:"/easter-egg/",asModal:!0},r.a.createElement(E,{alt:"A casual photo of Sam from the waist up. She has short, reddish hair and a big smile. She's blocking the sun from her eyes and wearing a black dress with yellow and white flowers. She's in Discovery Park, right by the sound, and in the distance, there is lush greenery.",style:{width:300,borderRadius:150,overflow:"hidden"},src:"../../images/casual.jpg",overflow:"hidden",className:"img-hover pb-3"})),r.a.createElement("article",{className:"w-75 m-auto pt-3 pb-2 text-justify"},r.a.createElement("p",null,"Hi, there! I'm Sam Lee, a recent graduate of Rutgers University–New Brunswick with a B.S. in Computer Science and Cognitive Science (with a concentration in decision-making) and a completed minor in Political Science. I'm based in Seattle and the greater NYC area, which are the traditional lands of the"," ",r.a.createElement("a",{href:"https://native-land.ca/maps/territories/puget-sound-salish/"},"Coast Salish")," ","and"," ",r.a.createElement("a",{href:"https://native-land.ca/maps/territories/munsee-lenape/"},"Munsee Lenape")," ","people, respectively."),r.a.createElement("p",null,"I'm proud to be a member of various"," ",r.a.createElement("a",{href:"/activities"},"communities")," that have a range of causes and interests. Special shout-out to Rutgers Ethitech and Rutgers Women in Computer Science!"," ",r.a.createElement("img",{src:"https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Revolving%20Hearts.png",alt:"Revolving Hearts",width:"25",height:"25"})),r.a.createElement(b.a,{className:"py-2"},r.a.createElement(w.a,{md:3},r.a.createElement("h5",{className:"watch-list-title"},"Interested in..."),r.a.createElement("ul",{className:"text-left themed-text",style:{listStyle:"none"}},p.map((function(e,t){return r.a.createElement("span",{key:e},r.a.createElement("li",null,">"," ",e))})))),r.a.createElement(w.a,{md:3},r.a.createElement("h5",{className:"watch-list-title"},"Passionate about..."),r.a.createElement("ul",{className:"text-left themed-text",style:{listStyle:"none"}},y.map((function(e,t){return r.a.createElement("span",{key:e},r.a.createElement("li",null,">"," ",e))})))),r.a.createElement(w.a,{md:3},r.a.createElement("h5",{className:"watch-list-title"},"Learning about..."),r.a.createElement("ul",{className:"text-left themed-text",style:{listStyle:"none"}},x.map((function(e,t){return r.a.createElement("span",{key:e},r.a.createElement("li",null,">"," ",e))})))),r.a.createElement(w.a,{md:3},r.a.createElement("h5",{className:"watch-list-title"},"Eager to..."),r.a.createElement("ul",{className:"text-left themed-text",style:{listStyle:"none"}},N.map((function(e,t){return r.a.createElement("span",{key:e},r.a.createElement("li",null,">"," ",e))}))))),r.a.createElement("p",null,"I'd like to pursue a PhD in the future, but I'm taking things one step at a time."),r.a.createElement("p",null,"Check out my ",r.a.createElement(l.Link,{to:"/projects"},"projects")," or"," ",r.a.createElement(l.Link,{to:"/gallery"},"gallery")," to see what I've been up to!")),r.a.createElement("hr",{className:"separator"}),r.a.createElement("article",{className:"w-75 m-auto text-justify"},r.a.createElement(b.a,{className:"pt-4"},r.a.createElement(w.a,{md:12},r.a.createElement("h5",{className:"watch-list-title"},"Highlights, Features, & Talks:"),r.a.createElement("ul",{className:"text-left themed-text",style:{listStyle:"none"}},I))),r.a.createElement(b.a,null,r.a.createElement(w.a,{md:6},r.a.createElement("h5",{className:"watch-list-title"},"Film Recs:"),r.a.createElement("ul",{className:"text-left themed-text",style:{listStyle:"none"}},S)),r.a.createElement(w.a,{md:6},r.a.createElement("h5",{className:"watch-list-title"},"Anime Recs:"),r.a.createElement("ul",{className:"text-left themed-text",style:{listStyle:"none"}},j))),r.a.createElement("p",null,"I also recommend"," ",r.a.createElement("a",{href:"https://www.imdb.com/title/tt8036272/  "},"Tuca and Bertie")," ","(2019) and"," ",r.a.createElement("a",{href:"https://www.imdb.com/title/tt4955642/"},"The Good Place")," ","(2016).")),r.a.createElement("br",null),r.a.createElement("div",{class:"gr m-auto text-justify"},r.a.createElement("div",{id:"gr_updates_widget"},r.a.createElement("iframe",{sandbox:!0,id:"the_iframe",src:"https://goodreads.com/widgets/user_update_widget?height=250&num_updates=10&user=25279873&width=500",width:"98%",height:"95%",frameborder:"0"}),r.a.createElement("div",{id:"gr_footer"},r.a.createElement("a",{href:"https://www.goodreads.com/"},r.a.createElement("img",{alt:"Goodreads: Book reviews, recommendations, and discussion",src:"https://s.gr-assets.com/images/layout/goodreads_logo_140.png"}))))),r.a.createElement("br",null),r.a.createElement("br",null)))}},"3Z9Z":function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),l=a("eC2I"),s=a.n(l),i=a("q1tI"),c=a.n(i),o=a("vUet"),m=["bsPrefix","className","noGutters","as"],u=["xl","lg","md","sm","xs"],d=c.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,i=e.noGutters,d=e.as,h=void 0===d?"div":d,f=Object(r.a)(e,m),p=Object(o.a)(a,"row"),E=p+"-cols",g=[];return u.forEach((function(e){var t,a=f[e];delete f[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&g.push(""+E+n+"-"+t)})),c.a.createElement(h,Object(n.a)({ref:t},f,{className:s.a.apply(void 0,[l,p,i&&"no-gutters"].concat(g))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},t.a=d},"7Qib":function(e,t,a){"use strict";a.d(t,"a",(function(){return n.a})),a.d(t,"b",(function(){return r.b})),a.d(t,"c",(function(){return l}));var n=a("ElpU"),r=a("BYIe"),l=(a("E9XD"),{getImageMap:function(e,t,a,n){return void 0===a&&(a=!1),void 0===n&&(n=3),e.reduce((function(e,r){var l=r.node.relativePath.match(t)[0];if(a)if(e.hasOwnProperty(l))e[l].length<=n&&e[l].push(r.node.childImageSharp.fluid);else{var s=[];s.push(r.node.childImageSharp.fluid),e[l]=s}else e[l]=r.node.childImageSharp.fluid;return e}),{})},getCaptionMap:function(e,t,a,n){return void 0===a&&(a=!1),void 0===n&&(n=3),e.reduce((function(e,a){return e[a.node.fileAbsolutePath.match(t)[0]]=a.node.frontmatter.caption,e}),{})}})},v8IA:function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0;var r=n(a("KHAo"));t.ModalRoutingContext=r.default;var l=n(a("+vFG"));t.Link=l.default}}]);
//# sourceMappingURL=component---src-pages-about-js-96e522f195dcdfdcd7b4.js.map