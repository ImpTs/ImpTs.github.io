(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{191:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(194),c=a(197),l=a(200);e.default=function(){return r.a.createElement(c.a,null,r.a.createElement(l.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},193:function(t,e,a){var n;t.exports=(n=a(196))&&n.default||n},194:function(t,e,a){"use strict";a.d(e,"b",function(){return s});var n=a(0),r=a.n(n),i=a(66),c=a.n(i);a.d(e,"a",function(){return c.a});a(193),a(9).default.enqueue;var l=r.a.createContext({});function o(t){var e=t.staticQueryData,a=t.data,n=t.query,i=t.render,c=a?a.data:e[n]&&e[n].data;return r.a.createElement(r.a.Fragment,null,c&&i(c),!c&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(t){var e=t.data,a=t.query,n=t.render,i=t.children;return r.a.createElement(l.Consumer,null,function(t){return r.a.createElement(o,{data:e,query:a,render:n||i,staticQueryData:t})})}},195:function(t){t.exports={data:{site:{siteMetadata:{title:"Seth Flagg's Website"}}}}},196:function(t,e,a){"use strict";a.r(e);a(23);var n=a(0),r=a.n(n),i=a(92);e.default=function(t){var e=t.location,a=t.pageResources;return a?r.a.createElement(i.a,Object.assign({location:e,pageResources:a},a.json)):null}},197:function(t,e,a){"use strict";var n=a(195),r=a(0),i=a.n(r),c=(a(194),function(){return i.a.createElement("div",null)});c.defaultProps={siteTitle:""};var l=c;a(199),e.a=function(t){var e=t.children,a=n.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l,{siteTitle:a.site.siteMetadata.title}),i.a.createElement("main",null,e),i.a.createElement("footer",{class:"footer"},"© ",(new Date).getFullYear(),i.a.createElement("p",{className:"is-pulled-right"},"Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"),", ",i.a.createElement("a",{href:"https://reactjs.org/"},"React"),", ",i.a.createElement("a",{href:"https://bulma.io/"},"Bulma")," and Coffee ☕")))}},200:function(t,e,a){"use strict";var n=a(201),r=a(0),i=a.n(r),c=a(202),l=a.n(c);function o(t){var e=t.description,a=t.lang,r=t.meta,c=t.title,o=n.data.site,s=e||o.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(r)})}o.defaultProps={lang:"en",meta:[],description:""},e.a=o},201:function(t){t.exports={data:{site:{siteMetadata:{title:"Seth Flagg's Website",description:"Hire me!!!!!!!!!!!!!!",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-page-2-js-800c3077dda0fdffbd0b.js.map