(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"2mvg":function(e,a,t){"use strict";var n=t("wx14"),o=t("zLVn"),i=t("eC2I"),r=t.n(i),l=t("q1tI"),s=t.n(l),c=t("17x9"),m=t.n(c),d=t("vUet"),p=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"],u=(m.a.string,m.a.bool,m.a.bool,m.a.bool,m.a.bool,s.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,l=e.fluid,c=e.rounded,m=e.roundedCircle,u=e.thumbnail,h=Object(o.a)(e,p);t=Object(d.a)(t,"img");var f=r()(l&&t+"-fluid",c&&"rounded",m&&"rounded-circle",u&&t+"-thumbnail");return s.a.createElement("img",Object(n.a)({ref:a},h,{className:r()(i,f)}))})));u.displayName="Image",u.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},a.a=u},"7Qib":function(e,a,t){"use strict";t.d(a,"a",(function(){return n.a})),t.d(a,"b",(function(){return o.b})),t.d(a,"c",(function(){return i}));var n=t("ElpU"),o=t("BYIe"),i=(t("E9XD"),{getImageMap:function(e,a,t,n){return void 0===t&&(t=!1),void 0===n&&(n=3),e.reduce((function(e,o){var i=o.node.relativePath.match(a)[0];if(t)if(e.hasOwnProperty(i))e[i].length<=n&&e[i].push(o.node.childImageSharp.fluid);else{var r=[];r.push(o.node.childImageSharp.fluid),e[i]=r}else e[i]=o.node.childImageSharp.fluid;return e}),{})},getCaptionMap:function(e,a,t,n){return void 0===t&&(t=!1),void 0===n&&(n=3),e.reduce((function(e,t){return e[t.node.fileAbsolutePath.match(a)[0]]=t.node.frontmatter.caption,e}),{})}})},RXBc:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),o=t.n(n),i=t("BYIe"),r=t("Kvkj"),l=t("7Qib"),s=t("7vrA"),c=t("2mvg"),m=t("cpGi");a.default=function(e){var a=e.data.site.siteMetadata,t=(a.unemployed,a.firstName,a.lastName,a.occupation,Object(n.useContext)(i.b).dark);return o.a.createElement(r.c,null,o.a.createElement(l.a,{title:"Home"}),o.a.createElement(s.a,{className:"pt-5 mt-5 text-left",fluid:!0},o.a.createElement(s.a,{style:{position:"absolute",left:"7vw",top:"10vh"},className:"py-5 my-5 indexTitles"},o.a.createElement("h1",{style:{fontSize:"40px",color:"black"}},o.a.createElement("span",{className:"first-name"},"Samantha L. Lee")),o.a.createElement("h3",{className:"positions"},"Senior & TA @ ",o.a.createElement("a",{href:"https://rutgers.edu"},"Rutgers")),o.a.createElement("h3",{className:"positions"},"Incoming SWE @ ",o.a.createElement("a",{href:"https://www.microsoft.com/"},"Microsoft")),o.a.createElement("h3",{className:"positions"},"RA @ ",o.a.createElement("a",{href:"https://www.nicolaslab.org/"},"The Nicolas Lab")),o.a.createElement("a",{className:"no-effect","data-tip":!0,"data-for":"resume",href:"docs/Samantha-Lee-Resume.pdf"},o.a.createElement("img",{alt:"Resume icon",className:"icons",src:t?"../../icons/resume-light.png":"../../icons/resume-dark.png"})),o.a.createElement(m.a,{arrowColor:"transparent",offset:"{'bottom': 10}",place:"bottom","data-place":"bottom",className:"tooltip",id:"resume","aria-haspopup":"true"},o.a.createElement("p",{className:"tooltip-text"},"resume")),o.a.createElement("a",{className:"no-effect","data-tip":!0,"data-for":"email",href:"mailto:samantha.lin.lee@gmail.com?subject=Hello!"},o.a.createElement("img",{alt:"Email icon",className:"icons",src:t?"../../icons/mail-light.png":"../../icons/mail-dark.png"})),o.a.createElement(m.a,{arrowColor:"transparent",offset:"{'bottom': 10}",place:"bottom",className:"tooltip",id:"email","aria-haspopup":"true"},o.a.createElement("p",{className:"tooltip-text"},"samantha.lin.lee@gmail.com")),o.a.createElement("a",{className:"no-effect","data-tip":!0,"data-for":"linkedin",href:"https://www.linkedin.com/in/samanthallee/"},o.a.createElement("img",{alt:"LinkedIn logo",className:"icons",src:t?"../../icons/linkedin-light.png":"../../icons/linkedin-dark.png"})),o.a.createElement(m.a,{arrowColor:"transparent",offset:"{'bottom': 10}",place:"bottom",className:"tooltip",id:"linkedin","aria-haspopup":"true"},o.a.createElement("p",{className:"tooltip-text"},"in/SamanthaLLee")),o.a.createElement("a",{className:"no-effect","data-tip":!0,"data-for":"github",href:"https://github.com/SamanthaLLee"},o.a.createElement("img",{alt:"Github logo",className:"icons",src:t?"../../icons/github-light.png":"../../icons/github-dark.png"})),o.a.createElement(m.a,{arrowColor:"transparent",offset:"{'bottom': 10}",place:"bottom",className:"tooltip",id:"github","aria-haspopup":"true"},o.a.createElement("p",{className:"tooltip-text"},"@SamanthaLLee"))),o.a.createElement(c.a,{alt:"A digital, cartoonish drawing of Sam. At the right side of the page, she is facing to the left and has her back turned toward you but is looking over her shoulder and smiling. She's kicking her left leg up behind her. She's wearing a yellow t-shirt, jeans, and brown ankle boots. You can also see two tattoos, one on each tricep (left: 爱, right: 健權. Her ear has three gold piercings: two lobe, one helix. She's holding a turquoise laptop that flashes different code snippets. A speech bubble says 'hello!'",src:"../../images/me2022.png",className:"index-img"})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-6b676c3b4672cd4736c3.js.map