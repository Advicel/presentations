(this.webpackJsonppresentations=this.webpackJsonppresentations||[]).push([[0],{65:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),l=n.n(r),o=n(32),i=n(36),s=n(100),j=n(106),b=n(5),u=Object(s.a)({wrapper:{display:"flex"},h2:{color:"red"},input:{margin:"0 auto",height:500,width:500,border:"1px solid black",textAlign:function(e){return e.textAlign},color:function(e){return e.color},fontSize:function(e){return e.size}},center:{textAlign:"center"}},{name:"presentation"});function x(e){var t=e.slide,n=e.onChange,a=t,c=u(a);return Object(b.jsx)("textarea",{className:c.input,onChange:function(e){n(e.target.value)},value:a.text})}var d=n(105),p=n(110),O=n(103),g=n(107),h=Object(s.a)((function(e){return{button:{display:"block",marginTop:e.spacing(2)},formControl:{margin:e.spacing(1),minWidth:120}}}));function v(e){for(var t=e.onChange,n=e.size,a=h(),r=[],l=5;l<100;l++)r.push(l);var o=c.a.useState(!1),s=Object(i.a)(o,2),j=s[0],u=s[1];return Object(b.jsx)("div",{children:Object(b.jsxs)(O.a,{className:a.formControl,children:[Object(b.jsx)(d.a,{id:"demo-controlled-open-select-label",children:"TextSize"}),Object(b.jsx)(g.a,{labelId:"demo-controlled-open-select-label",id:"demo-controlled-open-select",open:j,onClose:function(){u(!1)},onOpen:function(){u(!0)},value:n,onChange:function(e){t(e.target.value)},children:r.map((function(e,t){return Object(b.jsx)(p.a,{value:e,children:e},t)}))})]})})}var f=n(66),m=n(109),C=n(111),A=n(108);function k(e){var t=e.onChange,n=e.textAlign;return Object(b.jsxs)(O.a,{component:"fieldset",children:[Object(b.jsx)(f.a,{component:"legend",children:"textAlign"}),Object(b.jsxs)(m.a,{"aria-label":"textAlign",name:"textAlign",value:n,onChange:t,children:[Object(b.jsx)(C.a,{value:"left",control:Object(b.jsx)(A.a,{}),label:"Left"}),Object(b.jsx)(C.a,{value:"center",control:Object(b.jsx)(A.a,{}),label:"Center"}),Object(b.jsx)(C.a,{value:"right",control:Object(b.jsx)(A.a,{}),label:"Right"})]})]})}function N(e){var t=e.onChange,n=e.color;return Object(b.jsxs)(O.a,{component:"fieldset",children:[Object(b.jsx)(f.a,{component:"legend",children:"color"}),Object(b.jsxs)(m.a,{"aria-label":"color",name:"color",value:n,onChange:t,children:[Object(b.jsx)(C.a,{value:"black",control:Object(b.jsx)(A.a,{}),label:"Black"}),Object(b.jsx)(C.a,{value:"red",control:Object(b.jsx)(A.a,{}),label:"Red"}),Object(b.jsx)(C.a,{value:"blue",control:Object(b.jsx)(A.a,{}),label:"Blue"})]})]})}var z=Object(s.a)({wrapper:{margin:"0 auto",width:"60%"},settingsWrapper:{display:"flex"},presentationWrapper:{display:"flex",alignItems:"center"},pageNumber:{textAlign:"center"}},{name:"createPresentations"});function w(){var e=z(),t=Object(a.useState)(1),n=Object(i.a)(t,2),c=n[0],r=n[1],l={page:c,textAlign:"left",color:"black",size:10,text:""},s=Object(a.useState)([l]),u=Object(i.a)(s,2),d=u[0],p=u[1],O=d[c-1];return console.log(d),Object(b.jsxs)("div",{className:e.wrapper,children:[Object(b.jsxs)("div",{className:e.settingsWrapper,children:[Object(b.jsx)(k,{onChange:function(e){var t=Object(o.a)(d);t[c-1].textAlign=e.target.value,p(t)},textAlign:O.textAlign}),Object(b.jsx)(N,{onChange:function(e){var t=Object(o.a)(d);t[c-1].color=e.target.value,p(t)},color:O.color}),Object(b.jsx)(v,{size:O.size,onChange:function(e){var t=Object(o.a)(d);t[c-1].size=e,p(t)}})]}),Object(b.jsxs)("div",{className:e.presentationWrapper,children:[Object(b.jsx)(j.a,{variant:"contained",color:"primary",onClick:function(){c>1&&r(c-1)},children:"prev"}),Object(b.jsx)(x,{slide:O,onChange:function(e){var t=Object(o.a)(d);t[c-1].text=e,p(t)}}),Object(b.jsx)(j.a,{variant:"contained",color:"primary",onClick:function(){return c===d.length&&p([].concat(Object(o.a)(d),[l])),void r(c+1)},children:"next"})]}),Object(b.jsx)("h2",{className:e.pageNumber,children:"".concat(c,"/").concat(d.length)})]})}function y(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"presentation"}),Object(b.jsx)(w,{})]})}l.a.render(Object(b.jsx)(y,{}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.b6c5ee22.chunk.js.map