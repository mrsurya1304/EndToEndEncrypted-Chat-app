(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{167:function(e,t,c){},169:function(e,t,c){},175:function(e,t,c){},176:function(e,t,c){},178:function(e,t){},203:function(e,t,c){},204:function(e,t,c){},209:function(e,t){},211:function(e,t){},221:function(e,t){},223:function(e,t){},250:function(e,t){},252:function(e,t){},253:function(e,t){},258:function(e,t){},260:function(e,t){},266:function(e,t){},268:function(e,t){},287:function(e,t){},299:function(e,t){},302:function(e,t){},305:function(e,t,c){"use strict";c.r(t);var n=c(10),r=c.n(n),s=c(159),a=c.n(s),i=(c(167),c(0)),u=c.n(i),j=c(7),b=c(1),o=c(13),l=c(60),O=c(18),d=c(160),f=c(72),h=c(17),x=(Object(d.a)({apiKey:"AIzaSyDFsbNI7hBo3oZHR2oZpsrB_2Gh0BFvZ10",authDomain:"chat-app-46f76.firebaseapp.com",projectId:"chat-app-46f76",storageBucket:"chat-app-46f76.appspot.com",messagingSenderId:"393297397408",appId:"1:393297397408:web:3b02e01c9e425aadf46bc5"}),Object(h.e)()),p=Object(f.a)(),v=(c(169),c(6));function m(e){var t=e.user,c=e.setUser,n=Object(O.f)();return Object(v.jsxs)("div",{className:"navbar-container",children:[t?Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{children:t.email}),Object(v.jsx)("button",{className:"logout",onClick:function(){localStorage.setItem("user",null),c(null),n.push("/")},children:"Log out"})]}):Object(v.jsx)("div",{children:Object(v.jsx)("p",{children:"Login to use chat"})}),Object(v.jsx)("div",{className:"appname",children:"SecureChat"})]})}c(175);function g(e){var t=e.items,c=e.setreceiver;return Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{children:"Users"}),t.map((function(e,t){return Object(v.jsxs)("div",{className:"chat-head-item",onClick:function(){return c(e)},children:[Object(v.jsx)("div",{className:"user-profile-pic",children:Object(v.jsx)("p",{className:"user-profile-pic-text",children:e.email[0]})}),Object(v.jsx)("p",{children:e.email})]},t)}))]})}var y=c(27);c(176);function S(e){var t=e.receiver,s=e.user,a=Object(n.useState)(null),i=Object(o.a)(a,2),j=i[0],l=i[1],O=Object(n.useState)([]),d=Object(o.a)(O,2),f=d[0],p=d[1],m=Object(n.useState)(""),g=Object(o.a)(m,2),S=g[0],k=g[1],w=Object(n.useState)(""),C=Object(o.a)(w,2),E=C[0],I=C[1],M=Object(n.useState)(""),U=Object(o.a)(M,2),P=U[0],B=U[1],D=Object(n.useState)(""),H=Object(o.a)(D,2),F=H[0],J=H[1],L=Object(n.useState)(""),R=Object(o.a)(L,2),A=R[0],K=R[1],T=Object(n.useState)(""),Z=Object(o.a)(T,2),G=Z[0],q=Z[1],z=Object(n.useState)(""),_=Object(o.a)(z,2),Q=_[0],V=_[1],W=Object(n.useState)(""),X=Object(o.a)(W,2),Y=X[0],$=X[1],ee=Object(n.useState)(""),te=Object(o.a)(ee,2),ce=te[0],ne=te[1],re=Object(n.useRef)(null),se=Object(n.useRef)(null),ae=c(177),ie=function(){var e=Object(b.a)(u.a.mark((function e(){var t,c,n,r,a,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(re.current.value){e.next=2;break}return e.abrupt("return");case 2:return P=re.current.value,B(P),t=F.toString(),c=ae.AES.encrypt(re.current.value,t).toString(),K(A=c),n={message:c,uid:s.uid},r=Object(h.b)(x,"conversations",j),e.next=12,Object(h.c)(r);case 12:if(!(a=e.sent).exists()){e.next=19;break}return i=a.data(),e.next=17,Object(h.h)(r,{messages:[].concat(Object(y.a)(i.messages),[n])});case 17:e.next=21;break;case 19:return e.next=21,Object(h.g)(Object(h.b)(x,"conversations",j),{messages:[n]});case 21:c="";case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=Object(b.a)(u.a.mark((function e(){var c,n,r,a,i,j,b,o,l,O,d,f,p,v,m;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j=Object(h.b)(x,"dhparameters","dh"),e.next=3,Object(h.c)(j);case 3:return(b=e.sent).exists()&&(o=b.data(),c=o.prime,q(c),n=o.generator,V(n)),l=Object(h.b)(x,"users",s.uid),e.next=8,Object(h.c)(l);case 8:return(O=e.sent).exists()&&(d=O.data(),a=d.privkey,$(a),i=d.pubkey,ne(i)),f=Object(h.b)(x,"users",t.uid),e.next=13,Object(h.c)(f);case 13:(p=e.sent).exists()&&(v=p.data(),r=v.pubkey),m=N(r,a,c),J(m);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();r.a.useEffect((function(){var e;t&&s&&(B(""),K(""),k(""),I(""),e=t.uid>s.uid?t.uid+s.uid:s.uid+t.uid,ue(),l(e))}),[t,s]),r.a.useEffect((function(){if(j&&F){var e=F.toString();return Object(h.f)(Object(h.b)(x,"conversations",j),(function(t){var c=t.data();(null===c||void 0===c?void 0:c.messages.length)>0?(c.messages.forEach((function(t){S=t.message;var c=ae.AES.decrypt(t.message,e);t.message=c.toString(ae.enc.Utf8),E=c.toString(ae.enc.Utf8)})),k(S),I(E),p(c.messages)):p([])}))}}),[F]);return r.a.useEffect((function(){se.current&&(se.current.style.scrollBehaviour="smooth",se.current.scrollTop=se.current.scrollHeight)}),[f,se]),Object(v.jsxs)("div",{className:"chatscreen",children:[t?Object(v.jsxs)("div",{className:"chat",children:[Object(v.jsxs)("p",{children:["Conversation with ",t.email]}),Object(v.jsx)("div",{className:"conversation-messages",ref:se,children:f.map((function(e,t){return Object(v.jsx)("div",{className:"message-container",style:{justifyContent:e.uid===s.uid&&"flex-end"},children:Object(v.jsx)("div",{className:"message-content",children:e.message})},t)}))}),Object(v.jsxs)("div",{className:"input-container",children:[Object(v.jsxs)("div",{className:"input-message",children:[Object(v.jsx)("br",{}),Object(v.jsx)("input",{placeholder:"Enter message",ref:re,onKeyPress:function(e){"Enter"!==e.code&&"Enter"!==e.key||e.shiftKey||(ie(),re.current.value="")}})]}),Object(v.jsx)("button",{onClick:ie,currentMessage:"Hello",children:"Send"})]})]}):Object(v.jsx)("div",{className:"nochat",children:Object(v.jsx)("p",{children:"Pick someone to talk to."})}),t?Object(v.jsx)("div",{className:"encryption-details",children:Object(v.jsx)("div",{className:"encryption-elements",children:Object(v.jsxs)("form",{children:[Object(v.jsx)("br",{}),"\u2003Diffie Hellman Prime:",Object(v.jsx)("br",{})," \u2003",Object(v.jsx)("input",{value:G,readonly:"readonly"}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),"\u2003Diffie Hellman Generator:",Object(v.jsx)("br",{})," \u2003",Object(v.jsx)("input",{value:Q,readonly:!0}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),"\u2003Chosen private key:",Object(v.jsx)("br",{})," \u2003",Object(v.jsx)("input",{value:Y,readonly:!0}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),"\u2003Public key:",Object(v.jsx)("br",{})," \u2003",Object(v.jsx)("input",{value:ce,readonly:!0}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),"\u2003Secret key from DH for AES:",Object(v.jsx)("br",{})," \u2003",Object(v.jsx)("input",{value:F,readonly:!0}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),"\u2003Sent message is:",Object(v.jsx)("br",{})," \u2003",Object(v.jsx)("input",{value:P,readonly:"readonly",onChange:function(e){return B(e.target.value)}}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),"\u2003Message encrypted as:",Object(v.jsx)("br",{})," \u2003",Object(v.jsx)("input",{value:A,readonly:"readonly",onChange:function(e){return K(e.target.value)}}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),"\u2003Incoming message is :",Object(v.jsx)("br",{})," \u2003",Object(v.jsx)("input",{value:S,readonly:"readonly",onChange:function(e){return S(e.target.value)}}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),"\u2003Message decrypted as:",Object(v.jsx)("br",{})," \u2003",Object(v.jsx)("input",{value:E,readonly:"readonly",onChange:function(e){return E(e.target.value)}}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{})]})})}):Object(v.jsx)("div",{})]})}function N(e,t,c){var n=0;for(e%=c;t>0;)t%2==1&&(n=(n+e)%c),e=2*e%c,t/=2;return n%c}c(203);function k(e){var t=e.setUser,c=e.user,s=Object(O.f)(),a=Object(n.useState)([]),i=Object(o.a)(a,2),j=i[0],l=i[1],d=Object(n.useState)(null),f=Object(o.a)(d,2),p=f[0],m=f[1];return r.a.useEffect((function(){var e=JSON.parse(localStorage.getItem("user"));e?t(e):s.push("/")}),[s,t]),r.a.useEffect((function(){c&&Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.d)(Object(h.a)(x,"users"));case 2:t=e.sent,l(t.docs.map((function(e){return e.data()})).filter((function(e){return e.uid!==c.uid})));case 4:case"end":return e.stop()}}),e)})))()}),[c]),Object(v.jsxs)("div",{className:"chat-screen",children:[Object(v.jsx)("div",{className:"half-screen chat-heads",children:Object(v.jsx)(g,{items:j,setreceiver:m})}),Object(v.jsx)("div",{className:"half-screen",children:Object(v.jsx)(S,{receiver:p,user:c})})]})}var w=c(69),C=c(43);c(204);function E(e){var t=e.setUser,s=Object(O.f)(),a=(c(105),0),i=0,j=Object(n.useRef)(null),o=Object(n.useRef)(null),l=function(){var e=Object(b.a)(u.a.mark((function e(){var c,n,r,b,l,O,d,f,h;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=j.current.value,n=o.current.value,e.prev=2,e.next=5,Object(w.a)(p,c,n);case 5:return r=e.sent,b=r.user.uid,l=Object(C.b)(x,"dhparameters","dh"),e.next=10,Object(C.c)(l);case 10:return(O=e.sent).exists()&&(d=O.data(),a=d.generator,i=d.prime),u=5,v=a-1,f=Math.floor(Math.random()*(v-u+1)+u),h=I(a,f,i),e.next=16,Object(C.g)(Object(C.b)(x,"users",b),{email:c,uid:b,privkey:f,pubkey:h});case 16:localStorage.setItem("user",JSON.stringify({email:c,uid:b})),t({email:c,uid:b}),s.push("/chat"),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(2),alert(e.t0);case 24:case"end":return e.stop()}var u,v}),e,null,[[2,21]])})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(b.a)(u.a.mark((function e(){var c,n,r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=j.current.value,n=o.current.value,e.prev=2,e.next=5,Object(f.b)(p,c,n);case 5:r=e.sent,a=r.user.uid,localStorage.setItem("user",JSON.stringify({email:c,uid:a})),t({email:c,uid:a}),s.push("/chat"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),alert(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}();return r.a.useEffect((function(){var e=JSON.parse(localStorage.getItem("user"));e&&(t(e),s.push("/chat"))}),[s,t]),Object(v.jsxs)("div",{className:"login-screen",children:[Object(v.jsxs)("div",{className:"title",children:[Object(v.jsx)("p",{className:"title",children:"Login Screen"}),Object(v.jsx)("br",{})]}),Object(v.jsx)("div",{className:"mail",children:Object(v.jsxs)("h3",{className:"input",children:["\u2003\u2002Email: ",Object(v.jsx)("input",{ref:j})]})}),Object(v.jsx)("div",{className:"password",children:Object(v.jsxs)("h3",{className:"input",children:["Password:  ",Object(v.jsx)("input",{type:"password",ref:o})]})}),Object(v.jsxs)("div",{className:"buttongrp",children:[Object(v.jsx)("button",{className:"button",onClick:l,children:"Register"}),"\u2002",Object(v.jsx)("button",{className:"button",onClick:d,children:"Log in"})]})]})}function I(e,t,c){var n=0;for(e%=c;t>0;)t%2==1&&(n=(n+e)%c),e=2*e%c,t/=2;return n%c}function M(){return(M=Object(b.a)(u.a.mark((function e(t,c){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(h.b)(x,"dhparameters","dh"),e.next=3,Object(h.c)(n);case 3:if(e.sent.exists()){e.next=7;break}return e.next=7,Object(h.g)(Object(h.b)(x,"dhparameters","dh"),{prime:t,generator:c});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e,t,c){var n=0;for(e%=c;t>0;)t%2==1&&(n=(n+e)%c),e=2*e%c,t/=2;return n%c}var P=function(){var e,t=Object(n.useState)(null),s=Object(o.a)(t,2),a=s[0],i=s[1],u=c(105).createDiffieHellman(20).getPrime().toString("hex"),b=parseInt(u,16),d=(e=function(e){var t=new Set,c=[],n=e-1;!function(e,t){for(;t%2==0;)e.add(2),t/=2;for(var c=3;c<=Math.sqrt(t);c+=2)for(;t%c==0;)e.add(c),t/=c;t>2&&e.add(t)}(t,n);for(var r=20;r<=200;r++){var s,a=!1,i=Object(j.a)(t);try{for(i.s();!(s=i.n()).done;){1==U(r,n/s.value,e)&&(a=!0)}}catch(u){i.e(u)}finally{i.f()}0==a&&c.push(r)}return c}(b))[Math.floor(Math.random()*e.length)];return r.a.useEffect((function(){setInterval((function(){return function(e,t){return M.apply(this,arguments)}(b,d)}),1e3)}),[]),Object(v.jsx)("div",{children:Object(v.jsxs)(l.a,{children:[Object(v.jsx)(m,{user:a,setUser:i}),Object(v.jsxs)(O.c,{children:[Object(v.jsx)(O.a,{path:"/chat",children:Object(v.jsx)(k,{user:a,setUser:i})}),Object(v.jsx)(O.a,{path:"/",children:Object(v.jsx)(E,{user:a,setUser:i})})]})]})})},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,306)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};a.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(P,{})}),document.getElementById("root")),B()}},[[305,1,2]]]);
//# sourceMappingURL=main.305fe250.chunk.js.map