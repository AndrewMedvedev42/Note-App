(this.webpackJsonpnote_app=this.webpackJsonpnote_app||[]).push([[0],{36:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c,i=n(1),s=n.n(i),a=n(21),j=n.n(a),r=(n(36),n(23)),o=n(22),l=n(2),b=function(){return Object(l.jsxs)("nav",{class:"navContainer",children:[Object(l.jsx)(o.a,{size:64}),Object(l.jsxs)("div",{children:[Object(l.jsx)(r.a,{size:32}),Object(l.jsx)("span",{children:"Settings"})]})]})},u=n(31),d=n(12),O=(n(38),n(24)),h=n(14),x=n(26),f=n(25),p=n(17),g=(n(39),function(e){var t=e.data,n=t.id,c=t.title,i=t.value,s=t.date;return Object(l.jsx)(v,{to:"/".concat(n),onClick:function(){console.log(c)},children:Object(l.jsxs)("section",{className:"slot",children:[Object(l.jsxs)("article",{children:[Object(l.jsx)("h6",{children:s}),Object(l.jsx)("h3",{children:c}),Object(l.jsx)("p",{children:i})]}),Object(l.jsxs)("div",{className:"icons-container",children:[Object(l.jsx)(p.b,{size:32}),Object(l.jsx)(p.a,{size:32}),Object(l.jsx)(f.a,{size:32})]})]})})}),v=Object(x.a)(h.b)(c||(c=Object(O.a)(["\n    text-decoration: none;\n    color:black;\n\n    &:focus, &:hover, &:visited, &:link, &:active {\n        text-decoration: none;\n    }\n"]))),m=function(){var e=Object(i.useState)("Lorem ipsum"),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(i.useState)(""),a=Object(d.a)(s,2),j=a[0],r=a[1],o=Object(i.useState)(null),b=Object(d.a)(o,2),O=b[0],h=b[1],x=Object(i.useState)([]),f=Object(d.a)(x,2),p=f[0],v=f[1];return Object(i.useEffect)((function(){O?(v((function(e){return[O].concat(Object(u.a)(e))})),localStorage.setItem(O.id,JSON.stringify(O))):console.log("did nothing")}),[O]),Object(l.jsxs)("section",{className:"main-Container",children:[Object(l.jsx)("section",{className:"input-Section",children:Object(l.jsxs)("div",{className:"input-Container",children:[Object(l.jsx)("h1",{className:"title",children:"Create New Note"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{placeholder:"Title",type:"text",onChange:function(e){""===e.target.value||null===e.target.value?c("Lorem ipsum"):c(e.target.value)}}),Object(l.jsx)("textarea",{placeholder:"Your Text",type:"text",onChange:function(e){r(e.target.value)}}),Object(l.jsx)("button",{type:"submit",onClick:function(){var e=new Date,t=function(){var e=function(){return(16*(1+Math.random())|0).toString(16).substring(1)};return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}();h({id:t,title:n,value:j,date:e.getFullYear()+"/"+(e.getMonth()+1)+"/"+e.getDate()})},children:"Submit"})]})]})}),Object(l.jsx)("section",{className:"existing-Note-Container",children:p.length?p.map((function(e){return Object(l.jsx)(g,{data:e})})):Object(l.jsx)("h1",{children:"Sorry, no notes"})})]})},S=function(){return Object(l.jsx)("section",{children:Object(l.jsx)("h1",{children:"pop"})})},C=n(3);n(50);var N=function(){return Object(l.jsx)(h.a,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)(b,{}),Object(l.jsxs)(C.c,{children:[Object(l.jsx)(C.a,{path:"/detal-view",children:Object(l.jsx)(S,{})}),Object(l.jsx)(C.a,{path:"/",children:Object(l.jsx)(m,{})})]})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};j.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root")),k()}},[[51,1,2]]]);
//# sourceMappingURL=main.136520f4.chunk.js.map