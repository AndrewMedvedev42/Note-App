(this.webpackJsonpnote_app=this.webpackJsonpnote_app||[]).push([[0],{43:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},59:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var c,i=n(1),a=n.n(i),s=n(16),r=n.n(s),o=(n(43),n(25)),j=n(24),l=n(2),b=function(){return Object(l.jsxs)("nav",{class:"navContainer",children:[Object(l.jsx)(j.a,{size:64}),Object(l.jsxs)("div",{children:[Object(l.jsx)(o.a,{size:32}),Object(l.jsx)("span",{children:"Settings"})]})]})},d=n(22),u=n(11),O=(n(45),n(46),n(26)),h=n(14),x=n(29),f=n(27),g=n(28),v=(n(47),function(e){var t=e.data,n=t.id,c=t.title,i=t.value,a=t.date;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("section",{className:"slot",children:[Object(l.jsxs)("article",{children:[Object(l.jsx)("h4",{children:a}),Object(l.jsx)("h1",{children:c}),Object(l.jsx)("p",{children:i})]}),Object(l.jsxs)("div",{className:"icons-container",children:[Object(l.jsx)(f.a,{size:32}),Object(l.jsx)(p,{to:"/detal-view/".concat(n),onClick:function(){console.log(c)},children:Object(l.jsx)(g.a,{size:32})})]})]})})}),p=Object(x.a)(h.b)(c||(c=Object(O.a)(["\n    text-decoration: none;\n    color:black;\n\n    &:focus, &:hover, &:visited, &:link, &:active {\n        text-decoration: none;\n    }\n"]))),m=n(34),S=n.n(m),N=n(35),C=function(){var e=Object(i.useState)("Lorem ipsum"),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(""),s=Object(u.a)(a,2),r=s[0],o=s[1],j=Object(i.useState)(null),b=Object(u.a)(j,2),O=b[0],h=b[1],x=Object(i.useState)([]),f=Object(u.a)(x,2),g=f[0],p=f[1],m=Object(i.useState)(!1),C=Object(u.a)(m,2),y=C[0],_=C[1],D=Object(i.useState)(""),E=Object(u.a)(D,2),T=E[0],k=E[1];Object(i.useEffect)((function(){O?(p((function(e){return[O].concat(Object(d.a)(e))})),localStorage.setItem(O.id,JSON.stringify(O))):console.log("did nothing")}),[O]),Object(i.useEffect)((function(){for(var e=function(e){var t=localStorage.key(e);g.some((function(e){return e===t}))?console.log("".concat(t," already deployed!")):(n=JSON.parse(localStorage.getItem(t)),p((function(e){return[n].concat(Object(d.a)(e))})))},t=0;t<localStorage.length;t++){var n;e(t)}}),[]);return Object(l.jsxs)("section",{className:"main-Container",children:[Object(l.jsx)("section",{className:"input-Section",children:Object(l.jsxs)("div",{className:"input-Container",children:[Object(l.jsx)("h1",{className:"title",children:"Create New Note"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{placeholder:"Title",type:"text",onChange:function(e){""===e.target.value||null===e.target.value?c("Lorem ipsum"):c(e.target.value)}}),Object(l.jsx)("textarea",{placeholder:"Your Text",type:"text",onChange:function(e){o(e.target.value)}}),Object(l.jsx)("button",{type:"submit",onClick:function(){var e=new Date,t=function(){var e=function(){return(16*(1+Math.random())|0).toString(16).substring(1)};return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}();h({id:t,title:n,value:r,date:e.getFullYear()+"/"+(e.getMonth()+1)+"/"+e.getDate()})},children:"Submit"})]})]})}),y&&Object(l.jsx)("section",{className:"deleteMessage",children:Object(l.jsx)(S.a,{children:Object(l.jsxs)("div",{className:"messageContainer",children:[Object(l.jsx)("h1",{children:"Warning"}),Object(l.jsx)("p",{children:"Are you sure you want to delete this note?"}),Object(l.jsx)("p",{children:T}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{className:"delete-button",onClick:function(){!function(e){var t=g.filter((function(t){return t.id!==e}));localStorage.removeItem(e),p(t),_(!y)}(T)},type:"submit",children:"Delete"}),Object(l.jsx)("button",{type:"submit",onClick:function(){_(!y)},children:"Back"})]})]})})}),Object(l.jsx)("section",{className:"existing-Note-Container",children:g.length?g.map((function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(N.a,{onClick:function(){_(!y),k(e.id)},size:37}),Object(l.jsx)(v,{data:e})]})})):Object(l.jsx)("h1",{children:"Sorry, no notes"})})]})},y=n(4),_=function(){var e=Object(y.g)().pathname.split("/")[2],t=JSON.parse(localStorage.getItem(e));Object(y.f)();return Object(l.jsx)("section",{children:Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("textarea",{placeholder:"title",children:t.title}),Object(l.jsx)("textarea",{placeholder:"title",children:t.value})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{children:"Save"}),Object(l.jsx)("button",{children:"Copy Text"}),Object(l.jsx)("button",{children:"Delete"})]})]})})};n(59);var D=function(){return Object(l.jsx)(h.a,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)(b,{}),Object(l.jsxs)(y.c,{children:[Object(l.jsx)(y.a,{path:"/detal-view",children:Object(l.jsx)(_,{})}),Object(l.jsx)(y.a,{path:"/",children:Object(l.jsx)(C,{})})]})]})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))},T=n(13),k=n(10),w={name:[]},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PUSH_UPDATED_NOTES":default:return Object(k.a)({},e)}},F={noteId:null},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_ID_TO_STORE":return Object(k.a)(Object(k.a)({},e),{},{noteId:t.payload.id});default:return Object(k.a)({},e)}},J=Object(T.b)({notes:I,NoteToDelete:z}),L=n(38),M=n(37),P=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||T.c,B=Object(T.d)(J,P(Object(T.a)(M.a)));r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(L.a,{store:B,children:Object(l.jsx)(D,{})})}),document.getElementById("root")),E()}},[[61,1,2]]]);
//# sourceMappingURL=main.d9051ddf.chunk.js.map