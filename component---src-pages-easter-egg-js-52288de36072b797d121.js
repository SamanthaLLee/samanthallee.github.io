(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+vFG":function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.default=void 0;var l=n(a("pVnL")),r=n(a("8OQS")),o=n(a("q1tI")),i=a("Wbzz"),u=n(a("KHAo")),c=function(e){var t=e.to,a=e.asModal,n=e.state,c=(0,r.default)(e,["to","asModal","state"]);return o.default.createElement(u.default.Consumer,null,(function(e){e.modal;var r=e.closeTo;return o.default.createElement(i.Link,(0,l.default)({to:t,state:(0,l.default)({},n,{modal:a,noScroll:t===r})},c))}))};t.default=c},"2mvg":function(e,t,a){"use strict";var n=a("wx14"),l=a("zLVn"),r=a("eC2I"),o=a.n(r),i=a("q1tI"),u=a.n(i),c=a("17x9"),s=a.n(c),m=a("vUet"),d=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"],f=(s.a.string,s.a.bool,s.a.bool,s.a.bool,s.a.bool,u.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.fluid,c=e.rounded,s=e.roundedCircle,f=e.thumbnail,h=Object(l.a)(e,d);a=Object(m.a)(a,"img");var p=o()(i&&a+"-fluid",c&&"rounded",s&&"rounded-circle",f&&a+"-thumbnail");return u.a.createElement("img",Object(n.a)({ref:t},h,{className:o()(r,p)}))})));f.displayName="Image",f.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},t.a=f},"3Z9Z":function(e,t,a){"use strict";var n=a("wx14"),l=a("zLVn"),r=a("eC2I"),o=a.n(r),i=a("q1tI"),u=a.n(i),c=a("vUet"),s=["bsPrefix","className","noGutters","as"],m=["xl","lg","md","sm","xs"],d=u.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.noGutters,d=e.as,f=void 0===d?"div":d,h=Object(l.a)(e,s),p=Object(c.a)(a,"row"),v=p+"-cols",E=[];return m.forEach((function(e){var t,a=h[e];delete h[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&E.push(""+v+n+"-"+t)})),u.a.createElement(f,Object(n.a)({ref:t},h,{className:o.a.apply(void 0,[r,p,i&&"no-gutters"].concat(E))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},t.a=d},"7Qib":function(e,t,a){"use strict";a.d(t,"a",(function(){return n.a})),a.d(t,"b",(function(){return l.b})),a.d(t,"c",(function(){return r}));var n=a("ElpU"),l=a("BYIe"),r=(a("E9XD"),{getImageMap:function(e,t,a,n){return void 0===a&&(a=!1),void 0===n&&(n=3),e.reduce((function(e,l){var r=l.node.relativePath.match(t)[0];if(a)if(e.hasOwnProperty(r))e[r].length<=n&&e[r].push(l.node.childImageSharp.fluid);else{var o=[];o.push(l.node.childImageSharp.fluid),e[r]=o}else e[r]=l.node.childImageSharp.fluid;return e}),{})},getCaptionMap:function(e,t,a,n){return void 0===a&&(a=!1),void 0===n&&(n=3),e.reduce((function(e,a){return e[a.node.fileAbsolutePath.match(t)[0]]=a.node.frontmatter.caption,e}),{})}})},"9tAz":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("3Z9Z"),o=a("JI6e"),i=a("2mvg"),u=a("zLVn"),c=a("v8IA"),s=a("7vrA"),m=a("Kvkj"),d=["children"],f=function(e){var t=e.children;Object(u.a)(e,d);return l.a.createElement(c.ModalRoutingContext.Consumer,null,(function(e){var a=e.modal,n=e.closeTo;return a?l.a.createElement(l.a.Fragment,null,t,l.a.createElement(c.Link,{className:"close-button-text",to:n},"Get me out of here!")):l.a.createElement(m.c,null,l.a.createElement(s.a,{fluid:!0,className:"text-left"},t))}))},h=a("7Qib");t.default=function(){return l.a.createElement(f,null,l.a.createElement(h.a,{title:"Hi! 👋"}),l.a.createElement("h1",{className:"pt-3"},"Hi! ",l.a.createElement("span",{role:"img","aria-label":"The wave emoji in yellow"},"👋")),l.a.createElement("h5",null,"You just found my Easter Egg :)"),l.a.createElement("p",null),l.a.createElement("p",null,"Here's some more about me, in no particular order:"),l.a.createElement(r.a,null,l.a.createElement(o.a,{sm:1},l.a.createElement(i.a,{style:{width:"10vw"},src:"../../images/me.png",overflow:"hidden",className:"resume pb-2 pr-3","z-index":"100"})),l.a.createElement(o.a,{sm:11},l.a.createElement("ul",null,l.a.createElement("li",null,"I'm an ",l.a.createElement("a",{href:"https://www.16personalities.com/infp-personality"},"INFP")," and a ",l.a.createElement("a",{href:"https://www.enneagraminstitute.com/type-3"},"3w2")),l.a.createElement("li",null,"♌︎☉ ♎︎☽ ♒︎↑ (I invite you to explain astrology to me)"),l.a.createElement("li",null,"I know the alphabet backwards"),l.a.createElement("li",null,"According to Spotify, I'm in the top 1% of Hozier fans"),l.a.createElement("li",null,"I was introduced to coding through Tumblr – thanks, Tumblr!"),l.a.createElement("li",null,"I played the flute for ~10 years and now play it recreationally"),l.a.createElement("li",null,"I also played the trumpet in a marching band for ~4 years"),l.a.createElement("li",null,"Je parle un peu le français"),l.a.createElement("li",null,"I love to analyze fiction"),l.a.createElement("li",null,"I'm fairly active on ",l.a.createElement("a",{href:"https://instagram.com/sam.lin.lee/"},"Instagram")),l.a.createElement("li",null,"I (will) have symmetric tattoos (very soon)"),l.a.createElement("li",null,l.a.createElement("a",{href:"https://matthew-notaro.github.io/"},"Here")," ",l.a.createElement("a",{href:"https://www.stephaniephotos.com/"},"are")," ",l.a.createElement("a",{href:"https://sruthisoorian.github.io/"},"some")," ",l.a.createElement("a",{href:"http://isabella-pham.github.io/"},"of")," ",l.a.createElement("a",{href:"https://kuhuhalder.com/"},"my")," ",l.a.createElement("a",{href:"https://manasvimedam.github.io/#/"},"favorite")," ",l.a.createElement("a",{href:"https://www.jessleecreations.com/"},"people"))))))}},v8IA:function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0;var l=n(a("KHAo"));t.ModalRoutingContext=l.default;var r=n(a("+vFG"));t.Link=r.default}}]);
//# sourceMappingURL=component---src-pages-easter-egg-js-52288de36072b797d121.js.map