(this.webpackJsonpnote_app=this.webpackJsonpnote_app||[]).push([[0],{61:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},66:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var c=n(8),a=n.n(c),i=n(46),s=n.n(i),r=(n(61),n(48)),o=n(47),j=n(10),l=function(){return Object(j.jsxs)("nav",{className:"navContainer",children:[Object(j.jsx)(o.a,{size:64}),Object(j.jsxs)("div",{children:[Object(j.jsx)(r.a,{size:32}),Object(j.jsx)("span",{children:"Settings"})]})]})},b=n(18),u=(n(63),n(64),n(41));u.a.initializeApp({apiKey:"AIzaSyDThu2Y2_HxTUgluw-GUuPvcAIXixfyQ_g",authDomain:"note-app-17b15.firebaseapp.com",databaseURL:"https://note-app-17b15-default-rtdb.europe-west1.firebasedatabase.app",projectId:"note-app-17b15",storageBucket:"note-app-17b15.appspot.com",messagingSenderId:"527687417991",appId:"1:527687417991:web:696d72d633b36e1ec47822",measurementId:"G-Z8XRBGHD53"});var d,h=u.a,O=n(49),p=n(30),x=n(51),v=n(50),f=(n(66),function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){h.database().ref("List-Of-Notes").on("value",(function(e){var t=e.val(),n=[];for(var c in t)n.unshift(t[c]);a(n)}))}),[]);return Object(j.jsx)("section",{className:"existing-Note-Container",children:n.map((function(e){var t=e.date,n=e.title,c=(e.id,e.value);return Object(j.jsxs)("div",{className:"slot",children:[Object(j.jsxs)("article",{children:[Object(j.jsx)("h4",{children:t}),Object(j.jsx)("h1",{children:n}),Object(j.jsx)("p",{children:c})]}),Object(j.jsx)("div",{className:"icons-container",children:Object(j.jsx)(v.a,{size:32})})]})}))})}),m=(Object(x.a)(p.b)(d||(d=Object(O.a)(["\n    text-decoration: none;\n    color:black;\n\n    &:focus, &:hover, &:visited, &:link, &:active {\n        text-decoration: none;\n    }\n"]))),function(){var e=Object(c.useState)("Lorem ipsum"),t=Object(b.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),s=Object(b.a)(i,2),r=s[0],o=s[1];function l(){var e=function(){return(16*(1+Math.random())|0).toString(16).substring(1)};return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}var u=function(){var e=new Date;return e.getFullYear()+"/"+(e.getMonth()+1)+"/"+e.getDate()};return Object(j.jsxs)("section",{className:"main-Container",children:[Object(j.jsx)("section",{className:"input-Section",children:Object(j.jsxs)("div",{className:"input-Container",children:[Object(j.jsx)("h1",{className:"title",children:"Create New Note"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{placeholder:"Title",type:"text",onChange:function(e){a(e.target.value)}}),Object(j.jsx)("textarea",{placeholder:"Your Text",type:"text",onChange:function(e){o(e.target.value)}}),Object(j.jsx)("button",{type:"submit",onClick:function(){var e=h.database().ref("List-Of-Notes"),t={id:l(),title:n,value:r,date:u()};e.push(t)},children:"Submit"})]})]})}),Object(j.jsx)(f,{})]})}),g=n(14),N=(n(75),function(){var e=Object(g.g)().pathname.split("/")[2],t=JSON.parse(localStorage.getItem(e)),n=Object(g.f)();return Object(j.jsx)("section",{className:"detal-view-section",children:Object(j.jsxs)("div",{className:"detal-view-container",children:[Object(j.jsxs)("div",{className:"edit-section",children:[Object(j.jsx)("input",{className:"title-textarea",placeholder:"Title"}),Object(j.jsx)("textarea",{className:"value-textarea",placeholder:"title",children:t.value})]}),Object(j.jsxs)("div",{className:"button-container",children:[Object(j.jsx)("button",{children:"Save"}),Object(j.jsx)("button",{children:"Copy Text"}),Object(j.jsx)("button",{children:"Delete"}),Object(j.jsx)("button",{onClick:function(){n.push("/")},children:"Back"})]})]})})});n(76);var S=function(){return Object(j.jsx)(p.a,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(l,{}),Object(j.jsxs)(g.c,{children:[Object(j.jsx)(g.a,{path:"/detal-view",children:Object(j.jsx)(N,{})}),Object(j.jsx)(g.a,{path:"/",children:Object(j.jsx)(m,{})})]})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,82)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};n(80),n(77),s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),C()}},[[79,1,2]]]);
//# sourceMappingURL=main.e24aacf6.chunk.js.map