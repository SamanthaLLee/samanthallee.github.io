(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+vFG":function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.default=void 0;var l=n(a("pVnL")),r=n(a("8OQS")),s=n(a("q1tI")),i=a("Wbzz"),c=n(a("KHAo")),o=function(e){var t=e.to,a=e.asModal,n=e.state,o=(0,r.default)(e,["to","asModal","state"]);return s.default.createElement(c.default.Consumer,null,(function(e){e.modal;var r=e.closeTo;return s.default.createElement(i.Link,(0,l.default)({to:t,state:(0,l.default)({},n,{modal:a,noScroll:t===r})},o))}))};t.default=o},"2mvg":function(e,t,a){"use strict";var n=a("wx14"),l=a("zLVn"),r=a("eC2I"),s=a.n(r),i=a("q1tI"),c=a.n(i),o=a("17x9"),m=a.n(o),u=a("vUet"),d=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"],h=(m.a.string,m.a.bool,m.a.bool,m.a.bool,m.a.bool,c.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.fluid,o=e.rounded,m=e.roundedCircle,h=e.thumbnail,f=Object(l.a)(e,d);a=Object(u.a)(a,"img");var p=s()(i&&a+"-fluid",o&&"rounded",m&&"rounded-circle",h&&a+"-thumbnail");return c.a.createElement("img",Object(n.a)({ref:t},f,{className:s()(r,p)}))})));h.displayName="Image",h.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},t.a=h},"3XHS":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("v8IA"),s=a("7vrA"),i=a("2mvg"),c=a("Kvkj"),o=a("7Qib"),m=a("3Z9Z"),u=a("JI6e");t.default=function(e){var t=e.data,a=function(e){var t=e.title,a=e.author,n=e.link;return l.a.createElement("li",{key:t},">"," ",l.a.createElement("a",{rel:"noopener noreferrer",href:n},t)," -",l.a.createElement("i",null,a))},d=function(e){var t=e.title,a=e.link;return l.a.createElement("li",{key:t},">"," ",l.a.createElement("a",{rel:"noopener noreferrer",href:a},t))},h=t.site.siteMetadata,f=(h.author,h.occupation,h.readingList),p=h.showsList,E=h.animeList,g=h.hackathons,v=h.features,b=h.essayList,w=(h.designations,h.interests),y=h.passions,N=(h.dabblings,h.eager),S=h.learnings,x=h.conferences,k=(h.unemployed,h.hobbies),I=(h.advanced,h.intermediate,h.basic,Object(n.useContext)(o.b).toString,f.map((function(e){return a(e)}))),z=p.map((function(e){return a(e)})),L=b.map((function(e){return a(e)})),j=v.map((function(e){return d(e)})),C=(g.map((function(e){return d(e)})),E.map((function(e){return d(e)})));x.map((function(e){return d(e)}));return l.a.createElement(c.c,null,l.a.createElement(o.a,{title:"About"}),l.a.createElement(c.d,{title:"About"}),l.a.createElement(s.a,{className:"text-center"},l.a.createElement(r.Link,{className:"no-effect",to:"/easter-egg/",asModal:!0},l.a.createElement(i.a,{alt:"A headshot of Sam. She's wearing a blue, vertically striped button-up, and a black blazer. She has short hair, parted to the side. She smiles with her teeth.",style:{width:300,borderRadius:150,overflow:"hidden"},src:"../../images/headshot.jpg",overflow:"hidden",className:"resume"})),l.a.createElement("article",{className:"w-75 m-auto pt-3 pb-2 text-justify"},l.a.createElement("p",null,"Hi, there! I'm Sam Lee, a recent graduate of Rutgers University–New Brunswick with a B.S. in in Computer Science and Cognitive Science (with a concentration in decision-making) and a completed minor in Political Science. I'm based in Seattle, the traditional land of the ",l.a.createElement("a",{href:"https://native-land.ca/maps/territories/suquamish/"},"Suquamish"),",",l.a.createElement("a",{href:"https://native-land.ca/maps/territories/puget-sound-salish/"},"Coast Salish"),", and the ",l.a.createElement("a",{href:"https://native-land.ca/maps/territories/duwamish/"},"Duwamish People"),", as well as the greater NYC area, the traditional land of the",l.a.createElement("a",{href:"https://native-land.ca/maps/territories/munsee-lenape/"},"Munsee Lenape")," people."),l.a.createElement(m.a,{className:"py-4"},l.a.createElement(u.a,{md:3},l.a.createElement("h5",{className:"watch-list-title"},"Interested in..."),l.a.createElement("ul",{className:"text-left themed-text",style:{fontSize:"0.9rem",listStyle:"none"}},w.map((function(e,t){return l.a.createElement("span",{key:e},l.a.createElement("li",null,">"," ",e))})))),l.a.createElement(u.a,{md:3},l.a.createElement("h5",{className:"watch-list-title"},"Passionate about..."),l.a.createElement("ul",{className:"text-left themed-text",style:{fontSize:"0.9rem",listStyle:"none"}},y.map((function(e,t){return l.a.createElement("span",{key:e},l.a.createElement("li",null,">"," ",e))})))),l.a.createElement(u.a,{md:3},l.a.createElement("h5",{className:"watch-list-title"},"Learning about..."),l.a.createElement("ul",{className:"text-left themed-text",style:{fontSize:"0.9rem",listStyle:"none"}},S.map((function(e,t){return l.a.createElement("span",{key:e},l.a.createElement("li",null,">"," ",e))})))),l.a.createElement(u.a,{md:3},l.a.createElement("h5",{className:"watch-list-title"},"Eager to..."),l.a.createElement("ul",{className:"text-left themed-text",style:{fontSize:"0.9rem",listStyle:"none"}},N.map((function(e,t){return l.a.createElement("span",{key:e},l.a.createElement("li",null,">"," ",e))}))))),l.a.createElement("div",{id:"gr_updates_widget"},l.a.createElement("iframe",{sandbox:!0,id:"the_iframe",src:"https://goodreads.com/widgets/user_update_widget?height=250&num_updates=10&user=25279873&width=500",width:"498",height:"180",frameborder:"0"}),l.a.createElement("div",{id:"gr_footer"},l.a.createElement("a",{href:"https://www.goodreads.com/"},l.a.createElement("img",{alt:"Goodreads: Book reviews, recommendations, and discussion",src:"https://s.gr-assets.com/images/layout/goodreads_logo_140.png"})))),l.a.createElement("p",null,"I'd like to pursue a PhD in the future, but I'm taking things one step at a time."),l.a.createElement("p",null,"Check out my ",l.a.createElement(r.Link,{to:"/projects"},"projects")," or ",l.a.createElement(r.Link,{to:"/gallery"},"gallery")," to see what I've been up to!")),l.a.createElement("hr",{className:"separator"}),l.a.createElement("article",{className:"w-75 m-auto text-justify"},l.a.createElement(m.a,{className:"pt-4"},l.a.createElement(u.a,{md:6},l.a.createElement("h5",{className:"watch-list-title"},"Highlights:"),l.a.createElement("ul",{className:"text-left themed-text",style:{fontSize:"0.9rem",listStyle:"none"}},j)),l.a.createElement(u.a,{md:6},l.a.createElement("h5",{className:"watch-list-title"},"Hobbies:"),l.a.createElement("ul",{className:"text-left themed-text",style:{fontSize:"0.9rem",listStyle:"none"}},k.map((function(e,t){return l.a.createElement("span",{key:e},l.a.createElement("li",null,">"," ",e))}))))),l.a.createElement(m.a,null,l.a.createElement(u.a,{md:6},l.a.createElement("h5",{className:"watch-list-title"},"Book recs:"),l.a.createElement("ul",{className:"text-left themed-text",style:{fontSize:"0.9rem",listStyle:"none"}},I)),l.a.createElement(u.a,{md:6},l.a.createElement("h5",{className:"watch-list-title"},"Movie recs:"),l.a.createElement("ul",{className:"text-left themed-text",style:{fontSize:"0.9rem",listStyle:"none"}},z))),l.a.createElement(m.a,{className:"pb-4"},l.a.createElement(u.a,{md:6},l.a.createElement("h5",{className:"watch-list-title"},"Anime recs:"),l.a.createElement("ul",{className:"text-left themed-text",style:{fontSize:"0.9rem",listStyle:"none"}},C)),l.a.createElement(u.a,{md:6},l.a.createElement("h5",{className:"watch-list-title"},"Video essay recs:"),l.a.createElement("ul",{className:"text-left themed-text",style:{fontSize:"0.9rem",listStyle:"none"}},L))))))}},"3Z9Z":function(e,t,a){"use strict";var n=a("wx14"),l=a("zLVn"),r=a("eC2I"),s=a.n(r),i=a("q1tI"),c=a.n(i),o=a("vUet"),m=["bsPrefix","className","noGutters","as"],u=["xl","lg","md","sm","xs"],d=c.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.noGutters,d=e.as,h=void 0===d?"div":d,f=Object(l.a)(e,m),p=Object(o.a)(a,"row"),E=p+"-cols",g=[];return u.forEach((function(e){var t,a=f[e];delete f[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&g.push(""+E+n+"-"+t)})),c.a.createElement(h,Object(n.a)({ref:t},f,{className:s.a.apply(void 0,[r,p,i&&"no-gutters"].concat(g))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},t.a=d},"7Qib":function(e,t,a){"use strict";a.d(t,"a",(function(){return n.a})),a.d(t,"b",(function(){return l.b})),a.d(t,"c",(function(){return r}));var n=a("ElpU"),l=a("BYIe"),r=(a("E9XD"),{getImageMap:function(e,t,a,n){return void 0===a&&(a=!1),void 0===n&&(n=3),e.reduce((function(e,l){var r=l.node.relativePath.match(t)[0];if(a)if(e.hasOwnProperty(r))e[r].length<=n&&e[r].push(l.node.childImageSharp.fluid);else{var s=[];s.push(l.node.childImageSharp.fluid),e[r]=s}else e[r]=l.node.childImageSharp.fluid;return e}),{})},getCaptionMap:function(e,t,a,n){return void 0===a&&(a=!1),void 0===n&&(n=3),e.reduce((function(e,a){return e[a.node.fileAbsolutePath.match(t)[0]]=a.node.frontmatter.caption,e}),{})}})},v8IA:function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0;var l=n(a("KHAo"));t.ModalRoutingContext=l.default;var r=n(a("+vFG"));t.Link=r.default}}]);
//# sourceMappingURL=component---src-pages-about-js-de9b3394951ac4f89b82.js.map