(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[7],{34:function(c,e,s){},38:function(c,e,s){"use strict";s.r(e);var i=s(4),n=(s(34),s(2)),a=s(5),t=s(1),l=s(20),r=s(9),j=s(19),o=s(25),m=s(0),b=function(c){var e=c.comic,s=e.title,i=e.description,n=e.pageCount,t=e.thumbnail,l=e.language,r=e.price;return Object(m.jsxs)("div",{className:"single-comic",children:[Object(m.jsx)("img",{src:t,alt:s,className:"single-comic__img"}),Object(m.jsxs)("div",{className:"single-comic__info",children:[Object(m.jsx)("h2",{className:"single-comic__name",children:s}),Object(m.jsx)("p",{className:"single-comic__descr",children:i}),Object(m.jsx)("p",{className:"single-comic__descr",children:n}),Object(m.jsxs)("p",{className:"single-comic__descr",children:["Language: ",l]}),Object(m.jsx)("div",{className:"single-comic__price",children:r})]}),Object(m.jsx)(a.b,{to:"/comics",className:"single-comic__back",children:"Back to all"})]})};e.default=function(){var c=Object(n.g)().comicId,e=Object(t.useState)(null),s=Object(i.a)(e,2),a=s[0],u=s[1],g=Object(l.a)(),d=g.loading,O=g.error,_=g.getComic,h=g.clearError;Object(t.useEffect)((function(){x()}),[c]);var x=function(){h(),_(c).then(p)},p=function(c){u(c)},f=O?Object(m.jsx)(j.a,{}):null,v=d?Object(m.jsx)(r.a,{}):null,N=d||O||!a?null:Object(m.jsx)(b,{comic:a});return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(o.a,{}),f,v,N]})}}}]);
//# sourceMappingURL=7.920e9a27.chunk.js.map