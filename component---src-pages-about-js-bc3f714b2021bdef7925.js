(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+vFG":function(e,t,a){"use strict";var l=a("TqRt");t.__esModule=!0,t.default=void 0;var n=l(a("pVnL")),r=l(a("8OQS")),s=l(a("q1tI")),c=a("Wbzz"),i=l(a("KHAo")),m=function(e){var t=e.to,a=e.asModal,l=e.state,m=(0,r.default)(e,["to","asModal","state"]);return s.default.createElement(i.default.Consumer,null,(function(e){e.modal;var r=e.closeTo;return s.default.createElement(c.Link,(0,n.default)({to:t,state:(0,n.default)({},l,{modal:a,noScroll:t===r})},m))}))};t.default=m},"2mvg":function(e,t,a){"use strict";var l=a("wx14"),n=a("zLVn"),r=a("eC2I"),s=a.n(r),c=a("q1tI"),i=a.n(c),m=a("17x9"),o=a.n(m),u=a("vUet"),d=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"],h=(o.a.string,o.a.bool,o.a.bool,o.a.bool,o.a.bool,i.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,c=e.fluid,m=e.rounded,o=e.roundedCircle,h=e.thumbnail,f=Object(n.a)(e,d);a=Object(u.a)(a,"img");var p=s()(c&&a+"-fluid",m&&"rounded",o&&"rounded-circle",h&&a+"-thumbnail");return i.a.createElement("img",Object(l.a)({ref:t},f,{className:s()(r,p)}))})));h.displayName="Image",h.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},t.a=h},"3XHS":function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),r=a("v8IA"),s=a("7vrA"),c=a("2mvg"),i=a("Kvkj"),m=a("7Qib"),o=a("3Z9Z"),u=a("JI6e"),d=a("65eO");t.default=function(e){var t=e.data,a=function(e){var t=e.title,a=e.author,l=e.link;return n.a.createElement("li",{key:t},">"," ",n.a.createElement("a",{rel:"noopener noreferrer",href:l},t)," -",n.a.createElement("i",null,a))},h=function(e){var t=e.title,a=e.link;return n.a.createElement("li",{key:t},">"," ",n.a.createElement("a",{rel:"noopener noreferrer",href:a},t))},f=t.site.siteMetadata,p=(f.author,f.occupation,f.readingList),E=f.showsList,y=f.animeList,b=f.hackathons,g=f.features,v=f.essayList,N=(f.designations,f.interests),w=f.passions,x=(f.dabblings,f.eager),S=f.learnings,k=f.conferences,I=(f.unemployed,f.hobbies),C=f.advanced,L=f.intermediate,j=f.basic,z=(Object(l.useContext)(m.b).toString,p.map((function(e){return a(e)}))),P=E.map((function(e){return a(e)})),M=v.map((function(e){return a(e)})),R=g.map((function(e){return h(e)})),A=b.map((function(e){return h(e)})),O=y.map((function(e){return h(e)})),q=k.map((function(e){return h(e)}));return n.a.createElement(i.c,null,n.a.createElement(m.a,{title:"About"}),n.a.createElement(i.d,{title:"About"}),n.a.createElement(s.a,{className:"text-center"},n.a.createElement(r.Link,{className:"no-effect",to:"/easter-egg/",asModal:!0},n.a.createElement(c.a,{alt:"A headshot of Sam. She's wearing a blue, vertically striped button-up, and a black blazer. She has short hair, parted to the side. She smiles with her teeth.",style:{width:300,borderRadius:150,overflow:"hidden"},src:"../../images/headshot.jpg",overflow:"hidden",className:"resume"})),n.a.createElement("article",{className:"w-75 m-auto pt-3 pb-2 text-justify"},n.a.createElement("p",null,"Hi, there! I'm Sam Lee (she/her/hers), a senior honors student at Rutgers University–New Brunswick pursuing a double major in Computer Science and Cognitive Science (with a concentration in decision-making) and a minor in Political Science. I'm located in the greater NYC area originally inhabited by the ",n.a.createElement("a",{href:"https://native-land.ca/maps/territories/munsee-lenape/"},"Munsee Lenape")," people."),n.a.createElement("p",null,"I like to stay busy! I'm currently the co-president of Rutgers Women in Computer Science and the president and founder of the Rutgers Ethical Technology Club (Ethitech). I also volunteer as a data analyst for ",n.a.createElement("a",{href:"https://leadlocally.org/"},"Lead Locally"),", a non-profit dedicated to electing community leaders who pledge to fight against fossil fuel projects. I am additionally a part of the ",n.a.createElement("a",{href:"https://rewritingthecode.org/"},"Rewriting the Code"),", ",n.a.createElement("a",{href:"https://girlswhocode.com/"},"Girls Who Code"),", ",n.a.createElement("a",{href:"https://www.impactlabs.io/"},"Impact Labs"),", and ",n.a.createElement("a",{href:"https://outintech.com/"},"Out in Tech")," communities."),n.a.createElement("p",null,"Come August 2022, I will be joining Microsoft's Redmond team as a software engineer."),n.a.createElement(o.a,{className:"py-4"},n.a.createElement(u.a,{md:3},n.a.createElement("h5",{className:"watch-list-title"},"Interested in..."),n.a.createElement("ul",{className:"text-left themed-text",style:{fontSize:"0.9rem",listStyle:"none"}},N.map((function(e,t){return n.a.createElement("span",{key:e},n.a.createElement("li",null,">"," ",e))})))),n.a.createElement(u.a,{md:3},n.a.createElement("h5",{className:"watch-list-title"},"Passionate about..."),n.a.createElement("ul",{className:"text-left themed-text",style:{fontSize:"0.9rem",listStyle:"none"}},w.map((function(e,t){return n.a.createElement("span",{key:e},n.a.createElement("li",null,">"," ",e))})))),n.a.createElement(u.a,{md:3},n.a.createElement("h5",{className:"watch-list-title"},"Learning about..."),n.a.createElement("ul",{className:"text-left themed-text",style:{fontSize:"0.9rem",listStyle:"none"}},S.map((function(e,t){return n.a.createElement("span",{key:e},n.a.createElement("li",null,">"," ",e))})))),n.a.createElement(u.a,{md:3},n.a.createElement("h5",{className:"watch-list-title"},"Eager to..."),n.a.createElement("ul",{className:"text-left themed-text",style:{fontSize:"0.9rem",listStyle:"none"}},x.map((function(e,t){return n.a.createElement("span",{key:e},n.a.createElement("li",null,">"," ",e))}))))),n.a.createElement("div",{className:"text-center mb-5"},n.a.createElement("p",null),n.a.createElement("h5",{className:"watch-list-title"},"Notable Skills"),n.a.createElement("p",null),n.a.createElement(d.a,{pill:!0,variant:"success",className:"img-hover px-3 mb-1 mr-1"}," ",n.a.createElement("h6",{className:"text-white my-0"},"[ Preferred ]")),n.a.createElement(d.a,{pill:!0,style:{backgroundColor:"#ff9100"},className:"img-hover px-3 mb-1 mr-1"}," ",n.a.createElement("h6",{className:"text-white my-0"},"[ Comfortable ]")," "),n.a.createElement(d.a,{pill:!0,variant:"danger",className:"img-hover px-3 mb-1 mr-1"}," ",n.a.createElement("h6",{className:"text-white my-0"},"[ Still Learning ]")," "),n.a.createElement("p",null),C.map((function(e){return n.a.createElement(d.a,{key:e,pill:!0,variant:"success",className:"img-hover px-3 mb-1 mr-1"},n.a.createElement("h6",{className:"text-white my-0"},e))})),L.map((function(e){return n.a.createElement(d.a,{key:e,pill:!0,style:{backgroundColor:"#ff9100"},className:"img-hover px-3 mb-1 mr-1"},n.a.createElement("h6",{className:"text-white my-0"},e))})),j.map((function(e){return n.a.createElement(d.a,{key:e,pill:!0,variant:"danger",className:"img-hover px-3 mb-1 mr-1"},n.a.createElement("h6",{className:"text-white my-0"},e))}))),n.a.createElement("p",null,"I'd like to go to grad school in the future, but I'm taking things one step at a time."),n.a.createElement("p",null,"Check out my ",n.a.createElement(r.Link,{to:"/projects"},"projects")," or ",n.a.createElement(r.Link,{to:"/gallery"},"gallery")," to see what I've been up to!")),n.a.createElement("hr",{className:"separator"}),n.a.createElement("article",{className:"w-75 m-auto text-justify"},n.a.createElement(o.a,{className:"pt-4"},n.a.createElement(u.a,{md:6},n.a.createElement("h5",{className:"watch-list-title"},"Hobbies:"),n.a.createElement("ul",{className:"text-left themed-text",style:{fontSize:"0.9rem",listStyle:"none"}},I.map((function(e,t){return n.a.createElement("span",{key:e},n.a.createElement("li",null,">"," ",e))})))),n.a.createElement(u.a,{md:6},n.a.createElement("h5",{className:"watch-list-title"},"Places I'm featured:"),n.a.createElement("ul",{className:"text-left themed-text",style:{fontSize:"0.9rem",listStyle:"none"}},R))),n.a.createElement(o.a,null,n.a.createElement(u.a,{md:6},n.a.createElement("h5",{className:"watch-list-title"},"Conferences attended:"),n.a.createElement("ul",{className:"text-left themed-text",style:{fontSize:"0.9rem",listStyle:"none"}},q)),n.a.createElement(u.a,{md:6},n.a.createElement("h5",{className:"watch-list-title"},"Hackathon acknowledgements:"),n.a.createElement("ul",{className:"text-left themed-text",style:{fontSize:"0.9rem",listStyle:"none"}},A))),n.a.createElement(o.a,null,n.a.createElement(u.a,{md:6},n.a.createElement("h5",{className:"watch-list-title"},"Book recs:"),n.a.createElement("ul",{className:"text-left themed-text",style:{fontSize:"0.9rem",listStyle:"none"}},z)),n.a.createElement(u.a,{md:6},n.a.createElement("h5",{className:"watch-list-title"},"Movie recs:"),n.a.createElement("ul",{className:"text-left themed-text",style:{fontSize:"0.9rem",listStyle:"none"}},P))),n.a.createElement(o.a,{className:"pb-4"},n.a.createElement(u.a,{md:6},n.a.createElement("h5",{className:"watch-list-title"},"Anime recs:"),n.a.createElement("ul",{className:"text-left themed-text",style:{fontSize:"0.9rem",listStyle:"none"}},O)),n.a.createElement(u.a,{md:6},n.a.createElement("h5",{className:"watch-list-title"},"Video essay recs:"),n.a.createElement("ul",{className:"text-left themed-text",style:{fontSize:"0.9rem",listStyle:"none"}},M))))))}},"3Z9Z":function(e,t,a){"use strict";var l=a("wx14"),n=a("zLVn"),r=a("eC2I"),s=a.n(r),c=a("q1tI"),i=a.n(c),m=a("vUet"),o=["bsPrefix","className","noGutters","as"],u=["xl","lg","md","sm","xs"],d=i.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,c=e.noGutters,d=e.as,h=void 0===d?"div":d,f=Object(n.a)(e,o),p=Object(m.a)(a,"row"),E=p+"-cols",y=[];return u.forEach((function(e){var t,a=f[e];delete f[e];var l="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&y.push(""+E+l+"-"+t)})),i.a.createElement(h,Object(l.a)({ref:t},f,{className:s.a.apply(void 0,[r,p,c&&"no-gutters"].concat(y))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},t.a=d},"7Qib":function(e,t,a){"use strict";a.d(t,"a",(function(){return l.a})),a.d(t,"b",(function(){return n.b})),a.d(t,"c",(function(){return r}));var l=a("ElpU"),n=a("BYIe"),r=(a("E9XD"),{getImageMap:function(e,t,a,l){return void 0===a&&(a=!1),void 0===l&&(l=3),e.reduce((function(e,n){var r=n.node.relativePath.match(t)[0];if(a)if(e.hasOwnProperty(r))e[r].length<=l&&e[r].push(n.node.childImageSharp.fluid);else{var s=[];s.push(n.node.childImageSharp.fluid),e[r]=s}else e[r]=n.node.childImageSharp.fluid;return e}),{})},getCaptionMap:function(e,t,a,l){return void 0===a&&(a=!1),void 0===l&&(l=3),e.reduce((function(e,a){return e[a.node.fileAbsolutePath.match(t)[0]]=a.node.frontmatter.caption,e}),{})}})},v8IA:function(e,t,a){"use strict";var l=a("TqRt");t.__esModule=!0;var n=l(a("KHAo"));t.ModalRoutingContext=n.default;var r=l(a("+vFG"));t.Link=r.default}}]);
//# sourceMappingURL=component---src-pages-about-js-bc3f714b2021bdef7925.js.map