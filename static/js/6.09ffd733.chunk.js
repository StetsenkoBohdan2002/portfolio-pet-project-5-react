(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[6],{24:function(t,e,c){"use strict";c.d(e,"a",(function(){return r}));var n=c(8);var i=c(6);function r(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(i.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},32:function(t,e,c){},40:function(t,e,c){"use strict";c.r(e),c.d(e,"default",(function(){return m}));var n=c(24),i=c(4),r=c(1),a=c(20),s=c(19),o=c(9),l=c(5),b=(c(32),c(0)),u=function(){var t=Object(r.useState)([]),e=Object(i.a)(t,2),c=e[0],u=e[1],j=Object(r.useState)(!1),m=Object(i.a)(j,2),d=m[0],O=m[1],f=Object(r.useState)(0),h=Object(i.a)(f,2),v=h[0],_=h[1],x=Object(r.useState)(!1),p=Object(i.a)(x,2),y=p[0],g=p[1],N=Object(a.a)(),S=N.loading,k=N.error,w=N.getAllComics;Object(r.useEffect)((function(){A(v,!0)}),[]);var A=function(t,e){O(!e),w(t).then(C)},C=function(t){var e=!1;t.length<8&&(e=!0),u([].concat(Object(n.a)(c),Object(n.a)(t))),O(!1),_(v+8),g(e)};var E=function(t){var e=t.map((function(t,e){return Object(b.jsx)("li",{className:"comics__item",children:Object(b.jsxs)(l.b,{to:"/comics/".concat(t.id),children:[Object(b.jsx)("img",{src:t.thumbnail,alt:t.title,className:"comics__item-img"}),Object(b.jsx)("div",{className:"comics__item-name",children:t.title}),Object(b.jsx)("div",{className:"comics__item-price",children:t.price})]})},e)}));return Object(b.jsx)("ul",{className:"comics__grid",children:e})}(c),I=k?Object(b.jsx)(s.a,{}):null,J=S&&!d?Object(b.jsx)(o.a,{}):null;return Object(b.jsxs)("div",{className:"comics__list",children:[I,J,E,Object(b.jsx)("button",{disabled:d,style:{display:y?"none":"block"},className:"button button__main button__long",onClick:function(){return A(v)},children:Object(b.jsx)("div",{className:"inner",children:"load more"})})]})},j=c(25);function m(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j.a,{}),Object(b.jsx)(u,{})]})}}}]);
//# sourceMappingURL=6.09ffd733.chunk.js.map