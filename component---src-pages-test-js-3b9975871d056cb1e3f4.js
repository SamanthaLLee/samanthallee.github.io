(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+vFG":function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.default=void 0;var l=n(a("pVnL")),r=n(a("8OQS")),o=n(a("q1tI")),i=a("Wbzz"),u=n(a("KHAo")),c=function(e){var t=e.to,a=e.asModal,n=e.state,c=(0,r.default)(e,["to","asModal","state"]);return o.default.createElement(u.default.Consumer,null,(function(e){e.modal;var r=e.closeTo;return o.default.createElement(i.Link,(0,l.default)({to:t,state:(0,l.default)({},n,{modal:a,noScroll:t===r})},c))}))};t.default=c},"2mvg":function(e,t,a){"use strict";var n=a("wx14"),l=a("zLVn"),r=a("TSYQ"),o=a.n(r),i=a("q1tI"),u=a.n(i),c=a("17x9"),d=a.n(c),s=a("vUet"),m=(d.a.string,d.a.bool,d.a.bool,d.a.bool,d.a.bool,u.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.fluid,c=e.rounded,d=e.roundedCircle,m=e.thumbnail,f=Object(l.a)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);a=Object(s.a)(a,"img");var h=o()(i&&a+"-fluid",c&&"rounded",d&&"rounded-circle",m&&a+"-thumbnail");return u.a.createElement("img",Object(n.a)({ref:t},f,{className:o()(r,h)}))})));m.displayName="Image",m.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},t.a=m},"7Qib":function(e,t,a){"use strict";a.d(t,"a",(function(){return n.a})),a.d(t,"b",(function(){return l.b})),a.d(t,"c",(function(){return r}));var n=a("ElpU"),l=a("BYIe"),r=(a("E9XD"),{getImageMap:function(e,t,a,n){return void 0===a&&(a=!1),void 0===n&&(n=3),e.reduce((function(e,l){var r=l.node.relativePath.match(t)[0];if(a)if(e.hasOwnProperty(r))e[r].length<=n&&e[r].push(l.node.childImageSharp.fluid);else{var o=[];o.push(l.node.childImageSharp.fluid),e[r]=o}else e[r]=l.node.childImageSharp.fluid;return e}),{})},getCaptionMap:function(e,t,a,n){return void 0===a&&(a=!1),void 0===n&&(n=3),e.reduce((function(e,a){return e[a.node.fileAbsolutePath.match(t)[0]]=a.node.frontmatter.caption,e}),{})}})},Bl7J:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),o=a("7vrA"),i=(a("rY4l"),a("JwsL"));a("L5m6");t.a=function(e){var t=e.children;Object(r.useStaticQuery)("3649515864");return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{fluid:!0,className:"px-0 theme-light app-container"},l.a.createElement(o.a,{fluid:!0,className:"pt-5 mt-5 min-vh-100 text-center"},t),l.a.createElement(i.a,null)),"    ")}},L5m6:function(e,t,a){},h5Py:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("v8IA"),o=a("7vrA"),i=a("2mvg"),u=a("Bl7J"),c=a("Kvkj"),d=a("7Qib");t.default=function(e){var t=e.data,a=function(e){var t=e.title,a=e.author,n=e.link;return l.a.createElement("li",{key:t,style:{color:"#495057"}},l.a.createElement("a",{rel:"noopener noreferrer",href:n},t)," -",l.a.createElement("i",null,a))},s=t.site.siteMetadata,m=(s.author,s.occupation,s.readingList),f=s.showsList,h=(s.designations,s.unemployed,Object(n.useContext)(d.b).toString,m.map((function(e){return a(e)}))),v=f.map((function(e){return a(e)}));return l.a.createElement(u.a,null,l.a.createElement(d.a,{title:"Home"}),l.a.createElement(c.d,{title:"About Me"}),l.a.createElement(o.a,{className:"text-center"},l.a.createElement(i.a,{style:{width:300,borderRadius:150,overflow:"hidden"},src:"../../images/headshot.jpg",overflow:"hidden",className:"resume"})),l.a.createElement("p",null),l.a.createElement(o.a,null,l.a.createElement("article",{className:"w-75 m-auto pt-2 pb-2 text-justify"},l.a.createElement("hr",null),l.a.createElement("h5",{className:"watch-list-title pt-4"},"Book Recs:"),l.a.createElement("ul",{style:{fontSize:"0.9rem",listStyle:"none"}},h),l.a.createElement("h5",{className:"watch-list-title pt-4"},"Movie Recs:"),l.a.createElement("ul",{style:{fontSize:"0.9rem",listStyle:"none"}},v)),l.a.createElement("article",{className:"w-75 m-auto text-left"}),l.a.createElement("p",null,l.a.createElement(r.Link,{to:"/page-2/",asModal:!0},"Page 2 in Modal")),l.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},l.a.createElement(i.a,null))))}},v8IA:function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0;var l=n(a("KHAo"));t.ModalRoutingContext=l.default;var r=n(a("+vFG"));t.Link=r.default}}]);
//# sourceMappingURL=component---src-pages-test-js-3b9975871d056cb1e3f4.js.map