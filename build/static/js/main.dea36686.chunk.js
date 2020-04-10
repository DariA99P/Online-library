(this.webpackJsonplab4=this.webpackJsonplab4||[]).push([[0],{1937:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),i=n.n(c),u=(n(243),n(244),n(1938)),o=n(66),l=n(61),s=n(203),d=n.n(s)()("library"),f=d.async("GET_BOOK_lIST"),b=d("CHANGE_CURRENT_BOOK_ID"),m=d("CHANGE_IS_EDIT_MODE"),p=d("CANCEL_CHANGES"),E=d.async("SAVE_CHANGES"),O=d("USER_TAKE_BOOK"),v=d("DELETE_BOOK"),k=d.async("GET_BOOK_INFO_INITIALIZE"),j=n(17),g=n(1939),h=n(28),x=n(29),y=n(1943),I=n(18),C=n(1942);function S(){var e=Object(h.a)(["\n  display: flex;\n  align-items: center;\n"]);return S=function(){return e},e}function w(){var e=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  margin-top: 8px;\n"]);return w=function(){return e},e}function B(){var e=Object(h.a)(["\n  width: 150px;\n"]);return B=function(){return e},e}function D(){var e=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);return D=function(){return e},e}function T(){var e=Object(h.a)(["\n  width: 400px;\n"]);return T=function(){return e},e}function _(){var e=Object(h.a)(["\n  width: 100px;\n"]);return _=function(){return e},e}function M(){var e=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  margin-top: 8px;\n  padding: 16px;\n"]);return M=function(){return e},e}function A(){var e=Object(h.a)(["\n  tbody {\n    tr > td {\n      width: 1250px;\n    }\n  }\n"]);return A=function(){return e},e}function N(){var e=Object(h.a)(["\n  font-size: 36px;\n  margin-bottom: 24px;\n"]);return N=function(){return e},e}function L(){var e=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-right: 16px;\n  width: 200px;\n"]);return L=function(){return e},e}function R(){var e=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 800px;\n"]);return R=function(){return e},e}function z(){var e=Object(h.a)(["\n  padding: 24px;\n  display: flex;\n  justify-content: space-between;\n"]);return z=function(){return e},e}function G(){var e=Object(h.a)(["\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 930px;\n"]);return G=function(){return e},e}var H=x.a.div(G()),K=x.a.div(z()),P=x.a.div(R()),W=x.a.div(L()),U=x.a.div(N()),F=Object(x.a)(y.a)(A()),J=x.a.div(M()),V=Object(x.a)(I.a)(_()),Z=Object(x.a)(C.a)(T()),$=x.a.div(D()),q=Object(x.a)(I.a)(B()),Q=x.a.div(w()),X=x.a.div(S()),Y=n(118),ee=n(1944),te=n(211),ne=function(e){var t=e.item,n=Object(j.b)(),a=r.a.useCallback((function(){return n(v(t.id))}),[n,t.id]),c=r.a.useCallback((function(){localStorage.setItem("bookId",String(t.id)),n(b(t.id))}),[n,t.id]);return r.a.createElement(X,null,r.a.createElement(o.b,{to:{pathname:"/book/".concat(t.id)}},r.a.createElement(Y.a,{title:"Detailed information"},r.a.createElement(ee.a,{onClick:c}))),r.a.createElement(o.b,{to:{pathname:"/"}},r.a.createElement(Y.a,{title:"Delete book"},r.a.createElement(te.MinusCircleFilled,{style:{marginLeft:"16px"},onClick:a}))))},ae=[{title:"Title of the book",dataIndex:"item",key:"name",render:function(e,t){return r.a.createElement("div",{key:t.id},t.name)}},{title:"Author",dataIndex:"item",key:"author",render:function(e,t){return r.a.createElement("div",{key:t.id},t.author)}},{title:"The year of publishing",dataIndex:"item",key:"yearPub",render:function(e,t){return r.a.createElement("div",{key:t.id},t.yearOfPublishing)}},{title:"Language",dataIndex:"item",key:"language",render:function(e,t){return r.a.createElement("div",{key:t.id},t.language)}},{title:"Action",dataIndex:"item",key:"action",render:function(e,t){return r.a.createElement(ne,{item:t})}}],re={width:"100%"},ce=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.library.list}));return r.a.useEffect((function(){e(f.started())}),[e]),r.a.createElement(H,null,r.a.createElement(U,null,"Welcome to the online library"),r.a.createElement(g.a,{style:re,dataSource:t,columns:ae}))},ie=n(22),ue=n(48),oe=function(e){var t=e.item,n=e.onChange;return Object(j.c)((function(e){return e.library.isEditMode}))?r.a.createElement(Z,{value:t,onChange:n}):r.a.createElement("div",null,t)},le=n(1945),se=n(1941),de=n(1940),fe={marginLeft:"8px"},be=function(e){var t=e.inStock,n=e.reader,a=e.returnDate,c=Object(j.b)(),i=Object(j.c)((function(e){return e.library.isEditMode})),u=r.a.useState(!1),o=Object(ue.a)(u,2),l=o[0],s=o[1],d=r.a.useState(""),f=Object(ue.a)(d,2),b=f[0],m=f[1],p=r.a.useState(""),E=Object(ue.a)(p,2),v=E[0],k=E[1],g=r.a.useState(null),h=Object(ue.a)(g,2),x=h[0],y=h[1],I=r.a.useCallback((function(){s(!1),k(""),m(""),y(null),c(O({reader:b,returnDate:v}))}),[c,b,v]),S=r.a.useCallback((function(){c(O({reader:null,returnDate:null}))}),[c]),w=r.a.useCallback((function(){s(!1),k(""),m(""),y(null)}),[]),B=r.a.useCallback((function(){return s(!0)}),[]),D=r.a.useCallback((function(e){m(e.target.value)}),[]),T=r.a.useCallback((function(e,t){k(t),y(e)}),[]),_=i?t?r.a.createElement(q,{type:"primary",onClick:B},"Take a book"):r.a.createElement(q,{type:"primary",onClick:S},"Return to the library"):null;return r.a.createElement($,null,t?r.a.createElement("div",null,"\u0412 \u043d\u0430\u043b\u0438\u0447\u0438\u0438"):r.a.createElement("div",null,"\u041a\u043d\u0438\u0433\u0438 \u043d\u0435\u0442 \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438.",r.a.createElement("div",null,"\u0427\u0438\u0442\u0430\u0442\u0435\u043b\u044c: ".concat(n)),r.a.createElement("div",null,"\u0414\u0430\u0442\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430: ".concat(a))),_,r.a.createElement(se.a,{title:"Take a book",visible:l,onOk:I,onCancel:w},r.a.createElement(Q,null,r.a.createElement("div",null,"Reader:"),r.a.createElement(C.a,{style:fe,value:b,onChange:D})),r.a.createElement(Q,null,r.a.createElement("div",null,"Return date:"),r.a.createElement(de.a,{value:x,style:fe,onChange:T}))))},me={marginLeft:"16px"},pe={fontSize:"24px",marginTop:"16px"},Ee=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.library.initialize}));r.a.useEffect((function(){t&&e(k.started(Number(localStorage.getItem("bookId"))))}),[e,t]);var n=Object(j.c)((function(e){return e.library.currentBookInfo||{}})),a=Object(j.c)((function(e){return e.library.isEditMode})),c=Object(j.c)((function(e){return e.library.isSaving})),i=n.yearOfPublishing,u=n.author,l=n.name,s=r.a.useState(l),d=Object(ue.a)(s,2),f=d[0],b=d[1],O=r.a.useState(u),v=Object(ue.a)(O,2),g=v[0],h=v[1],x=r.a.useState(i),I=Object(ue.a)(x,2),C=I[0],S=I[1],w=r.a.useCallback((function(){if(a){var t=Object(ie.a)({},n,{name:f,author:g,yearOfPublishing:C});e(E.started(t))}else e(m(!0))}),[n,e,g,f,C,a]),B=r.a.useCallback((function(){return e(m(!1))}),[e]);r.a.useEffect((function(){b(l)}),[l]),r.a.useEffect((function(){h(u)}),[u]),r.a.useEffect((function(){S(i)}),[i]);var D=r.a.useCallback((function(e){b(e.target.value)}),[]),T=r.a.useCallback((function(e){h(e.target.value)}),[]),_=r.a.useCallback((function(e){S(e.target.value)}),[]),M=r.a.useCallback((function(){b(l),h(u),S(i),e(p())}),[u,e,l,i]);return r.a.createElement(K,null,r.a.createElement(P,null,r.a.createElement(U,null,"Book Info"),r.a.createElement(F,{title:"",bordered:!0,column:1},r.a.createElement(y.a.Item,{label:"Title of the book\t"},r.a.createElement(oe,{item:f,onChange:D})),r.a.createElement(y.a.Item,{label:"Author"},r.a.createElement(oe,{item:g,onChange:T})),r.a.createElement(y.a.Item,{label:"The year of publishing"},r.a.createElement(oe,{item:C,onChange:_})),r.a.createElement(y.a.Item,{label:"Language"},n.language),r.a.createElement(y.a.Item,{label:"Number of pages"},n.numberOfPages),r.a.createElement(y.a.Item,{label:"Status"},r.a.createElement(be,{inStock:n.inStock,reader:n.reader,returnDate:n.returnDate})),r.a.createElement(y.a.Item,{label:"Description"},n.description||"No description")),r.a.createElement(J,null,r.a.createElement(V,{onClick:M},"Cancel"),r.a.createElement(V,{type:"primary",style:me,onClick:w,loading:c},a?"Save":"Edit"))),r.a.createElement(W,null,r.a.createElement(Y.a,{title:"Homepage"},r.a.createElement(o.b,{to:{pathname:"/"}},r.a.createElement(le.a,{style:pe,onClick:B})))))},Oe=u.a.Content,ve=function(){return a.createElement(o.a,null,a.createElement(u.a,{style:{minHeight:"100vh"}},a.createElement(u.a,{style:{background:"white"}},a.createElement(Oe,null,a.createElement(l.c,null,a.createElement(l.a,{exact:!0,path:"/book/:id",component:Ee}),a.createElement(l.a,{exact:!0,path:"/",component:ce}))))))},ke=n(41),je=n(235),ge=n(229),he=n(27),xe=n.n(he),ye=n(14),Ie=n(82),Ce=n.n(Ie);Ce.a.defaults.baseURL="http://localhost:8080";var Se=function(){return Ce.a.get("/list")},we=function(e){return Ce.a.get("/book/".concat(e))},Be=function(e,t){return Ce.a.put("/book/".concat(e),t)},De=function(e){return Ce.a.delete("/book/delete/".concat(e))},Te=function(e){return e.library.currentBookInfo},_e=function(e){return e.library.currentBookId},Me=xe.a.mark(ze),Ae=xe.a.mark(Ge),Ne=xe.a.mark(He),Le=xe.a.mark(Ke),Re=xe.a.mark(Pe);function ze(){var e,t;return xe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(ye.b)(Se);case 3:return e=n.sent,t=e.data,n.next=7,Object(ye.c)(f.done({params:void 0,result:t}));case 7:n.next=14;break;case 9:return n.prev=9,n.t0=n.catch(0),console.error(n.t0),n.next=14,Object(ye.c)(f.failed({params:void 0,error:n.t0}));case 14:case"end":return n.stop()}}),Me,null,[[0,9]])}function Ge(){var e,t;return xe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(ye.d)(Te);case 3:return e=n.sent,n.next=6,Object(ye.d)(_e);case 6:return t=n.sent,n.next=9,Object(ye.b)(Be,t,e);case 9:return n.next=11,Object(ye.c)(E.done({params:null,result:!0}));case 11:n.next=18;break;case 13:return n.prev=13,n.t0=n.catch(0),console.error(n.t0),n.next=18,Object(ye.c)(E.failed({error:n.t0,params:null}));case 18:case"end":return n.stop()}}),Ae,null,[[0,13]])}function He(){var e;return xe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(ye.d)(_e);case 3:return e=t.sent,t.next=6,Object(ye.b)(De,e);case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),Ne,null,[[0,8]])}function Ke(){var e,t,n;return xe.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(ye.d)(_e);case 3:return e=a.sent,a.next=6,Object(ye.b)(we,e);case 6:return t=a.sent,n=t.data,a.next=10,Object(ye.c)(k.done({params:e,result:n}));case 10:a.next=17;break;case 12:return a.prev=12,a.t0=a.catch(0),console.error(a.t0),a.next=17,Object(ye.c)(k.failed({params:0,error:a.t0}));case 17:case"end":return a.stop()}}),Le,null,[[0,12]])}function Pe(){return xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.a)([Object(ye.e)(f.started,ze),Object(ye.e)(E.started,Ge),Object(ye.e)(v,He),Object(ye.e)(k.started,Ke)]);case 2:case"end":return e.stop()}}),Re)}var We=n(233),Ue=n(230),Fe={list:[],currentBookId:null,isEditMode:!1,isSaving:!1,currentBookInfo:null,initialize:!0},Je=Object(Ue.reducerWithInitialState)(Fe).case(f.done,(function(e,t){return Object(ie.a)({},e,{list:t.result})})).case(b,(function(e,t){return Object(ie.a)({},e,{currentBookId:t,currentBookInfo:e.list.find((function(e){return e.id===t}))||null,isEditMode:Fe.isEditMode})})).case(m,(function(e,t){return Object(ie.a)({},e,{isEditMode:t})})).case(E.started,(function(e,t){return Object(ie.a)({},e,{isSaving:!0,currentBookInfo:t})})).cases([E.done,E.failed],(function(e){return Object(ie.a)({},e,{isSaving:Fe.isSaving,isEditMode:!e.isEditMode})})).case(O,(function(e,t){return Object(ie.a)({},e,{currentBookInfo:e.currentBookInfo?Object(ie.a)({},e.currentBookInfo,{inStock:!(t.reader&&t.returnDate),reader:t.reader,returnDate:t.returnDate}):null})})).case(p,(function(e){return Object(ie.a)({},e,{currentBookInfo:e.list.find((function(t){return t.id===e.currentBookId}))||null,isEditMode:!1})})).case(v,(function(e,t){return Object(ie.a)({},e,{currentBookId:t,list:e.list.reduce((function(e,n){return n.id!==t?[].concat(Object(We.a)(e),[n]):e}),[])})})).case(k.started,(function(e,t){return Object(ie.a)({},e,{currentBookId:t})})).case(k.done,(function(e,t){return Object(ie.a)({},e,{currentBookInfo:t.result||null,initialize:!1})})).case(k.failed,(function(e){return Object(ie.a)({},e,{initialize:!1})})),Ve=xe.a.mark($e),Ze=Object(ke.combineReducers)({library:Je});function $e(){return xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.a)([Pe()]);case 2:case"end":return e.stop()}}),Ve)}var qe=function(){var e=Object(je.a)(),t=Object(ke.createStore)(Ze,Object(ge.composeWithDevTools)(Object(ke.applyMiddleware)(e)));return e.run($e),t}();var Qe=function(){return r.a.createElement(j.a,{store:qe},r.a.createElement(ve,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Qe),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},238:function(e,t,n){e.exports=n(1937)},243:function(e,t,n){},244:function(e,t,n){}},[[238,1,2]]]);
//# sourceMappingURL=main.dea36686.chunk.js.map