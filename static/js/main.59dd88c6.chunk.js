(this["webpackJsonppickle-maker"]=this["webpackJsonppickle-maker"]||[]).push([[0],{15:function(e,n,t){},16:function(e,n,t){},17:function(e,n,t){},18:function(e,n,t){"use strict";t.r(n);var a=t(0),s=t(1),r=t.n(s),c=t(4),o=t.n(c),i=(t(15),t(3)),l=t(8),d=t(5),p=t(6),u=t(9),h=t(7),j=t.p+"static/media/logo.6ce24c58.svg",g=(t(16),t(17),function(e){return Object(a.jsxs)("div",{className:"person",children:[Object(a.jsxs)("p",{onClick:e.Click,children:["i'm ",e.name," and i am ",e.age," years old."]}),Object(a.jsx)("input",{onChange:e.Change,value:e.name})]})}),b=function(e){Object(u.a)(t,e);var n=Object(h.a)(t);function t(){var e;Object(d.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=n.call.apply(n,[this].concat(s))).state={persons:[{id:"fasde",name:"max",age:27},{id:"asde",name:"manu",age:17},{id:"cgfrfd",name:"alex",age:21}],showPersons:!1},e.togglePersonsHandler=function(){e.setState({showPersons:!e.state.showPersons})},e.nameChangeHandler=function(n,t){var a=e.state.persons.findIndex((function(e){return e.id===t})),s=Object(l.a)({},e.state.persons[a]);s.name=n.target.value;var r=Object(i.a)(e.state.persons);r[a]=s,e.setState({persons:r})},e.deletePersonHandler=function(n){var t=Object(i.a)(e.state.persons);t.splice(n,1),e.setState({persons:t})},e}return Object(p.a)(t,[{key:"render",value:function(){var e=this,n=null;return this.state.showPersons&&(n=Object(a.jsx)("div",{children:this.state.persons.map((function(n,t){return Object(a.jsx)(g,{name:n.name,age:n.age,Click:e.deletePersonHandler.bind(e,t),Change:function(t){return e.nameChangeHandler(t,n.id)}},n.id)}))})),Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("header",{className:"App-header",children:[Object(a.jsx)("img",{src:j,className:"App-logo",alt:"logo"}),Object(a.jsx)("p",{children:"create react App"}),Object(a.jsx)("button",{style:{backgroundColor:"white",font:"inherit",border:"1px solid blue",padding:"8px",cursor:"pointer"},onClick:this.togglePersonsHandler,children:"show persons"}),n,Object(a.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn react"})]})})}}]),t}(s.Component),m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(n){var t=n.getCLS,a=n.getFID,s=n.getFCP,r=n.getLCP,c=n.getTTFB;t(e),a(e),s(e),r(e),c(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root")),m()}},[[18,1,2]]]);
//# sourceMappingURL=main.59dd88c6.chunk.js.map