(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+vFG":function(e,t,a){"use strict";var n=a("5NKs");t.__esModule=!0,t.default=void 0;var r=n(a("j8BX")),l=n(a("uDP2")),i=n(a("q1tI")),u=a("Wbzz"),o=n(a("KHAo")),c=function(e){var t=e.to,a=e.asModal,n=e.state,c=(0,l.default)(e,["to","asModal","state"]);return i.default.createElement(o.default.Consumer,null,(function(e){e.modal;var l=e.closeTo;return i.default.createElement(u.Link,(0,r.default)({to:t,state:(0,r.default)({},n,{modal:a,noScroll:t===l})},c))}))};t.default=c},"2mvg":function(e,t,a){"use strict";var n=a("k1TG"),r=a("8o2o"),l=a("TSYQ"),i=a.n(l),u=a("q1tI"),o=a.n(u),c=a("vUet"),d=o.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,u=e.fluid,d=e.rounded,s=e.roundedCircle,m=e.thumbnail,f=Object(r.a)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);a=Object(c.a)(a,"img");var h=i()(u&&a+"-fluid",d&&"rounded",s&&"rounded-circle",m&&a+"-thumbnail");return o.a.createElement("img",Object(n.a)({ref:t},f,{className:i()(l,h)}))}));d.displayName="Image",d.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},t.a=d},"7Qib":function(e,t,a){"use strict";a.d(t,"a",(function(){return n.a})),a.d(t,"b",(function(){return r.b})),a.d(t,"c",(function(){return l}));var n=a("ElpU"),r=a("BYIe"),l=(a("SRfc"),{getImageMap:function(e,t,a,n){return void 0===a&&(a=!1),void 0===n&&(n=3),e.reduce((function(e,r){var l=r.node.relativePath.match(t)[0];if(a)if(e.hasOwnProperty(l))e[l].length<=n&&e[l].push(r.node.childImageSharp.fluid);else{var i=[];i.push(r.node.childImageSharp.fluid),e[l]=i}else e[l]=r.node.childImageSharp.fluid;return e}),{})},getCaptionMap:function(e,t,a,n){return void 0===a&&(a=!1),void 0===n&&(n=3),e.reduce((function(e,a){return e[a.node.fileAbsolutePath.match(t)[0]]=a.node.frontmatter.caption,e}),{})}})},Bl7J:function(e,t,a){"use strict";var n=a("f98A"),r=a("q1tI"),l=a.n(r),i=a("7vrA"),u=(a("rY4l"),a("JwsL"));a("L5m6");t.a=function(e){var t=e.children;n.data;return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{fluid:!0,className:"px-0 theme-light app-container"},l.a.createElement(i.a,{fluid:!0,className:"pt-5 mt-5 min-vh-100 text-center"},t),l.a.createElement(u.a,null)),"    ")}},L5m6:function(e,t,a){},f98A:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Samantha L. Lee"}}}}')},h5Py:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return s}));a("a1Th"),a("Btvt"),a("tUrg");var n=a("q1tI"),r=a.n(n),l=a("v8IA"),i=a("7vrA"),u=a("2mvg"),o=a("Bl7J"),c=a("Kvkj"),d=a("7Qib");t.default=function(e){var t=e.data,a=function(e){var t=e.title,a=e.author,n=e.link;return r.a.createElement("li",{key:t,style:{color:"#495057"}},r.a.createElement("a",{rel:"noopener noreferrer",href:n},t)," -",r.a.createElement("i",null,a))},s=t.site.siteMetadata,m=(s.author,s.occupation,s.readingList),f=s.showsList,h=(s.designations,s.unemployed,Object(n.useContext)(d.b).toString,m.map((function(e){return a(e)}))),v=f.map((function(e){return a(e)}));return r.a.createElement(o.a,null,r.a.createElement(d.a,{title:"Home"}),r.a.createElement(c.d,{title:"About Me"}),r.a.createElement(i.a,{className:"text-center"},r.a.createElement(u.a,{style:{width:300,borderRadius:150,overflow:"hidden"},src:"../../images/headshot.jpg",overflow:"hidden",className:"resume"})),r.a.createElement("p",null),r.a.createElement(i.a,null,r.a.createElement("article",{className:"w-75 m-auto pt-2 pb-2 text-justify"},r.a.createElement("hr",null),r.a.createElement("h5",{className:"watch-list-title pt-4"},"Book Recs:"),r.a.createElement("ul",{style:{fontSize:"0.9rem",listStyle:"none"}},h),r.a.createElement("h5",{className:"watch-list-title pt-4"},"Movie Recs:"),r.a.createElement("ul",{style:{fontSize:"0.9rem",listStyle:"none"}},v)),r.a.createElement("article",{className:"w-75 m-auto text-left"}),r.a.createElement("p",null,r.a.createElement(l.Link,{to:"/page-2/",asModal:!0},"Page 2 in Modal")),r.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},r.a.createElement(u.a,null))))};var s="3563491510"},v8IA:function(e,t,a){"use strict";var n=a("5NKs");t.__esModule=!0;var r=n(a("KHAo"));t.ModalRoutingContext=r.default;var l=n(a("+vFG"));t.Link=l.default}}]);
//# sourceMappingURL=component---src-pages-test-js-13df0423ff5a35b020aa.js.map