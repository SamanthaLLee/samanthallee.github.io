(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"3Z9Z":function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),o=a("eC2I"),l=a.n(o),i=a("q1tI"),c=a.n(i),s=a("vUet"),f=["bsPrefix","className","noGutters","as"],u=["xl","lg","md","sm","xs"],p=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,i=e.noGutters,p=e.as,m=void 0===p?"div":p,d=Object(n.a)(e,f),b=Object(s.a)(a,"row"),y=b+"-cols",h=[];return u.forEach((function(e){var t,a=d[e];delete d[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&h.push(""+y+r+"-"+t)})),c.a.createElement(m,Object(r.a)({ref:t},d,{className:l.a.apply(void 0,[o,b,i&&"no-gutters"].concat(h))}))}));p.displayName="Row",p.defaultProps={noGutters:!1},t.a=p},"7Qib":function(e,t,a){"use strict";a.d(t,"a",(function(){return r.a})),a.d(t,"b",(function(){return n.b})),a.d(t,"c",(function(){return o}));var r=a("ElpU"),n=a("BYIe"),o=(a("E9XD"),{getImageMap:function(e,t,a,r){return void 0===a&&(a=!1),void 0===r&&(r=3),e.reduce((function(e,n){var o=n.node.relativePath.match(t)[0];if(a)if(e.hasOwnProperty(o))e[o].length<=r&&e[o].push(n.node.childImageSharp.fluid);else{var l=[];l.push(n.node.childImageSharp.fluid),e[o]=l}else e[o]=n.node.childImageSharp.fluid;return e}),{})},getCaptionMap:function(e,t,a,r){return void 0===a&&(a=!1),void 0===r&&(r=3),e.reduce((function(e,a){return e[a.node.fileAbsolutePath.match(t)[0]]=a.node.frontmatter.caption,e}),{})}})},htCO:function(e,t,a){e.exports=a.p+"static/Samantha-Lee-Resume-9d0dcd6291132066596d64f0d9cfa907.pdf"},tAQE:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),o=a("Kvkj"),l=a("7Qib"),i=(a("E9XD"),a("7O5W")),c=a("17x9"),s=a.n(c);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){u(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function b(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function h(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var a,r=t.indexOf(":"),n=y(t.slice(0,r)),o=t.slice(r+1).trim();return n.startsWith("webkit")?e[(a=n,a.charAt(0).toUpperCase()+a.slice(1))]=o:e[n]=o,e}),{})}var g=!1;try{g=!0}catch(P){}function O(e){return i.c.icon?i.c.icon(e):null===e?null:"object"===f(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function v(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?u({},e,t):{}}function w(e){var t=e.forwardedRef,a=d(e,["forwardedRef"]),r=a.icon,n=a.mask,o=a.symbol,l=a.className,c=a.title,s=a.titleId,f=O(r),p=v("classes",[].concat(b(function(e){var t,a=e.spin,r=e.pulse,n=e.fixedWidth,o=e.inverse,l=e.border,i=e.listItem,c=e.flip,s=e.size,f=e.rotation,p=e.pull,m=(u(t={"fa-spin":a,"fa-pulse":r,"fa-fw":n,"fa-inverse":o,"fa-border":l,"fa-li":i,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(s),null!=s),u(t,"fa-rotate-".concat(f),null!=f&&0!==f),u(t,"fa-pull-".concat(p),null!=p),u(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(m).map((function(e){return m[e]?e:null})).filter((function(e){return e}))}(a)),b(l.split(" ")))),y=v("transform","string"==typeof a.transform?i.c.transform(a.transform):a.transform),h=v("mask",O(n)),j=Object(i.a)(f,m({},p,{},y,{},h,{symbol:o,title:c,titleId:s}));if(!j)return function(){var e;!g&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",f),null;var x=j.abstract,S={ref:t};return Object.keys(a).forEach((function(e){w.defaultProps.hasOwnProperty(e)||(S[e]=a[e])})),E(x[0],S)}w.displayName="FontAwesomeIcon",w.propTypes={border:s.a.bool,className:s.a.string,mask:s.a.oneOfType([s.a.object,s.a.array,s.a.string]),fixedWidth:s.a.bool,inverse:s.a.bool,flip:s.a.oneOf(["horizontal","vertical","both"]),icon:s.a.oneOfType([s.a.object,s.a.array,s.a.string]),listItem:s.a.bool,pull:s.a.oneOf(["right","left"]),pulse:s.a.bool,rotation:s.a.oneOf([0,90,180,270]),size:s.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:s.a.bool,symbol:s.a.oneOfType([s.a.bool,s.a.string]),title:s.a.string,transform:s.a.oneOfType([s.a.string,s.a.object]),swapOpacity:s.a.bool},w.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var E=function e(t,a){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof a)return a;var n=(a.children||[]).map((function(a){return e(t,a)})),o=Object.keys(a.attributes||{}).reduce((function(e,t){var r=a.attributes[t];switch(t){case"class":e.attrs.className=r,delete a.attributes.class;break;case"style":e.attrs.style=h(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[y(t)]=r}return e}),{attrs:{}}),l=r.style,i=void 0===l?{}:l,c=d(r,["style"]);return o.attrs.style=m({},o.attrs.style,{},i),t.apply(void 0,[a.tag,m({},o.attrs,{},c)].concat(b(n)))}.bind(null,n.a.createElement),j=a("7vrA"),x=a("htCO"),S=a.n(x),N=a("3Z9Z"),k=a("JI6e");t.default=function(){return n.a.createElement(o.c,null,n.a.createElement(l.a,{title:"Resume/CV"}),n.a.createElement(o.d,{title:"Resume/CV"}),n.a.createElement(j.a,{style:{paddingRight:100,paddingLeft:100,paddingBottom:70},fluid:!0},n.a.createElement(N.a,null,n.a.createElement(k.a,{lg:6,style:{paddingBottom:30}},n.a.createElement("a",{className:"no-effect",href:"docs/Samantha-Lee-Resume.pdf",target:"_blank",download:!0},n.a.createElement(w,{style:{fontSize:"2rem",color:"#666"},icon:["fas","file-download"],className:"icons file"})),n.a.createElement("a",{className:"no-effect",href:"docs/Samantha-Lee-Resume.pdf",target:"_blank"},n.a.createElement(w,{style:{fontSize:"2rem",color:"#666"},icon:["fa","link"],className:"icons file"})),n.a.createElement("p",null),n.a.createElement("a",{className:"no-effect",href:"docs/Samantha-Lee-Resume.pdf",target:"_blank"},n.a.createElement("img",{src:S.a,className:"m-auto resume"}))),n.a.createElement(k.a,{lg:6,style:{paddingBottom:30}},n.a.createElement("a",{className:"no-effect",href:"docs/Samantha-Lee-Resume.pdf",target:"_blank",download:!0},n.a.createElement(w,{style:{fontSize:"2rem",color:"#666"},icon:["fas","file-download"],className:"icons file"})),n.a.createElement("a",{className:"no-effect",href:"docs/Samantha-Lee-Resume.pdf",target:"_blank"},n.a.createElement(w,{style:{fontSize:"2rem",color:"#666"},icon:["fa","link"],className:"icons file"})),n.a.createElement("p",null),n.a.createElement("a",{className:"no-effect",href:"docs/Samantha-Lee-Resume.pdf",target:"_blank"},n.a.createElement("img",{src:S.a,className:"m-auto resume"}))))))}}}]);
//# sourceMappingURL=component---src-pages-resume-0-js-a40a6e1374408cae018e.js.map