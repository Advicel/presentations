(this.webpackJsonppresentations=this.webpackJsonppresentations||[]).push([[0],{77:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(10),o=n.n(c),i=n(37),s=n(25),l=n(112),j=n(118),u=n(4),h=Object(l.a)({wrapper:{display:"flex"},h2:{color:"red"},input:{margin:"0 auto",height:500,width:500,border:"1px solid black",textAlign:function(e){return e.textAlign},color:function(e){return e.color},fontSize:function(e){return e.size}},center:{textAlign:"center"}},{name:"presentation"});function p(e){var t=e.slide,n=e.onChange,r=t,a=h(r);return Object(u.jsx)("textarea",{className:a.input,onChange:function(e){n(e.target.value)},value:r.text})}var b=n(117),d=n(122),x=n(115),O=n(119),f=Object(l.a)((function(e){return{button:{display:"block",marginTop:e.spacing(2)},formControl:{margin:e.spacing(1),minWidth:120}}}));function g(e){for(var t=e.onChange,n=e.size,r=f(),c=[],o=5;o<100;o++)c.push(o);var i=a.a.useState(!1),l=Object(s.a)(i,2),j=l[0],h=l[1];return Object(u.jsx)("div",{children:Object(u.jsxs)(x.a,{className:r.formControl,children:[Object(u.jsx)(b.a,{id:"demo-controlled-open-select-label",children:"TextSize"}),Object(u.jsx)(O.a,{labelId:"demo-controlled-open-select-label",id:"demo-controlled-open-select",open:j,onClose:function(){h(!1)},onOpen:function(){h(!0)},value:n,onChange:function(e){t(e.target.value)},children:c.map((function(e,t){return Object(u.jsx)(d.a,{value:e,children:e},t)}))})]})})}var m=n(78),v=n(121),y=n(123),C=n(120);function w(e){var t=e.onChange,n=e.textAlign;return Object(u.jsxs)(x.a,{component:"fieldset",children:[Object(u.jsx)(m.a,{component:"legend",children:"textAlign"}),Object(u.jsxs)(v.a,{"aria-label":"textAlign",name:"textAlign",value:n,onChange:t,children:[Object(u.jsx)(y.a,{value:"left",control:Object(u.jsx)(C.a,{}),label:"Left"}),Object(u.jsx)(y.a,{value:"center",control:Object(u.jsx)(C.a,{}),label:"Center"}),Object(u.jsx)(y.a,{value:"right",control:Object(u.jsx)(C.a,{}),label:"Right"})]})]})}function k(e){var t=e.onChange,n=e.color;return Object(u.jsxs)(x.a,{component:"fieldset",children:[Object(u.jsx)(m.a,{component:"legend",children:"color"}),Object(u.jsxs)(v.a,{"aria-label":"color",name:"color",value:n,onChange:t,children:[Object(u.jsx)(y.a,{value:"black",control:Object(u.jsx)(C.a,{}),label:"Black"}),Object(u.jsx)(y.a,{value:"red",control:Object(u.jsx)(C.a,{}),label:"Red"}),Object(u.jsx)(y.a,{value:"blue",control:Object(u.jsx)(C.a,{}),label:"Blue"})]})]})}var A=Object(l.a)({wrapper:{margin:"0 auto",width:"60%"},settingsWrapper:{display:"flex"},presentationWrapper:{display:"flex",alignItems:"center"},pageNumber:{textAlign:"center"}},{name:"createPresentations"});function N(){var e=A(),t=Object(r.useState)(1),n=Object(s.a)(t,2),a=n[0],c=n[1],o={page:a,textAlign:"left",color:"black",size:10,text:""},l=Object(r.useState)([o]),h=Object(s.a)(l,2),b=h[0],d=h[1],x=b[a-1];console.log(b);return Object(u.jsxs)("div",{className:e.wrapper,children:[Object(u.jsxs)("div",{className:e.settingsWrapper,children:[Object(u.jsx)(w,{onChange:function(e){var t=Object(i.a)(b);t[a-1].textAlign=e.target.value,d(t)},textAlign:x.textAlign}),Object(u.jsx)(k,{onChange:function(e){var t=Object(i.a)(b);t[a-1].color=e.target.value,d(t)},color:x.color}),Object(u.jsx)(g,{size:x.size,onChange:function(e){var t=Object(i.a)(b);t[a-1].size=e,d(t)}})]}),Object(u.jsxs)("div",{className:e.presentationWrapper,children:[Object(u.jsx)(j.a,{variant:"contained",color:"primary",onClick:function(){a>1&&c(a-1)},children:"prev"}),Object(u.jsx)(p,{slide:x,onChange:function(e){var t=Object(i.a)(b);t[a-1].text=e,d(t)}}),Object(u.jsx)(j.a,{variant:"contained",color:"primary",onClick:function(){return a===b.length&&d([].concat(Object(i.a)(b),[o])),void c(a+1)},children:"next"})]}),Object(u.jsx)("h2",{className:e.pageNumber,children:"".concat(a,"/").concat(b.length)}),Object(u.jsx)(j.a,{onClick:function(){var e=JSON.stringify({name:"\u0422\u0435\u0441\u0442\u043e\u0432\u0430\u044f \u043f\u0435\u0440\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f1",slides:[{page:1}]});console.log(e),fetch("https://vladimir256.pythonanywhere.com/presentations/",{body:e,method:"post",headers:{"Content-Type":"application/json;charset=utf-8"}}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044e"}),Object(u.jsx)(j.a,{onClick:function(){var e=JSON.stringify({presentation_id:"4",order_number:1,text:"qwe",size:25});console.log(e),fetch("https://vladimir256.pythonanywhere.com/slides/",{body:e,method:"post",headers:{"Content-Type":"application/json;charset=utf-8"}}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0441\u043b\u0430\u0439\u0434"})]})}var z=n(60),S=n(11),W=n(42),J=n.n(W),T=n(51);function B(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),o=Object(s.a)(c,2),i=o[0],l=o[1];return Object(r.useEffect)((function(){(function(){return I.apply(this,arguments)})().then((function(e){return a(e)})),function(){return E.apply(this,arguments)}().then((function(e){return l(e)}))}),[]),console.log(n),Object(u.jsxs)("div",{children:[n.map((function(e,t){return Object(u.jsx)("h2",{children:t+" "+e.name+" "+e.slides.length},t)})),"\u0441\u043b\u0430\u0439\u0434\u044b",i.map((function(e,t){return Object(u.jsx)("h2",{children:t+" "+e.text},t)}))]})}function I(){return(I=Object(T.a)(J.a.mark((function e(){var t;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://vladimir256.pythonanywhere.com/presentations/",e.next=3,fetch("https://vladimir256.pythonanywhere.com/presentations/").then((function(e){return e.json()}));case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=Object(T.a)(J.a.mark((function e(){var t;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://vladimir256.pythonanywhere.com/slides/",e.next=3,fetch("https://vladimir256.pythonanywhere.com/slides/").then((function(e){return e.json()}));case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"presentation"}),Object(u.jsxs)(z.a,{children:[Object(u.jsx)(S.a,{path:"/presentations",children:Object(u.jsx)(N,{})}),Object(u.jsx)(S.a,{path:"/all",children:Object(u.jsx)(B,{})})]})]})}o.a.render(Object(u.jsx)(R,{}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.90bf6149.chunk.js.map