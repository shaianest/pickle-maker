(this["webpackJsonppickle-maker"]=this["webpackJsonppickle-maker"]||[]).push([[0],[,,,,,,function(e,n,t){e.exports={red:"headsection_red__2w7i0",bold:"headsection_bold__27AU6",HeadSection:"headsection_HeadSection__1ZTLO"}},,,,function(e,n,t){},function(e,n,t){e.exports={person:"person_person__2KXzG"}},,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var s=t(0),r=t(1),o=t.n(r),a=t(9),c=t.n(a),i=(t(18),t(7)),l=t(12),p=t(2),d=t(3),u=t(5),h=t(4),j=(t(19),t(10)),g=t.n(j),b=t(11),O=t.n(b),f=function(e){Object(u.a)(t,e);var n=Object(h.a)(t);function t(){return Object(p.a)(this,t),n.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return console.log("[person.js] rendering"),Object(s.jsxs)("div",{className:O.a.person,children:[Object(s.jsxs)("p",{onClick:this.props.Click,children:["i'm ",this.props.name," and i am ",this.props.age," years old."]}),Object(s.jsx)("input",{onChange:this.props.Change,value:this.props.name})]})}}]),t}(r.Component),m=function(e){Object(u.a)(t,e);var n=Object(h.a)(t);function t(){return Object(p.a)(this,t),n.apply(this,arguments)}return Object(d.a)(t,[{key:"shouldComponentUpdate",value:function(e,n){return console.log("[persons.js] shouldComponentUpdate"),!0}},{key:"getSnapshotBeforUpdate",value:function(e,n){return console.log("[persons.js] get snapshot before update"),null}},{key:"componentDidUpdate",value:function(){console.log("[persons.js] component did update")}},{key:"render",value:function(){var e=this;return console.log("[persons.js] rendering..."),this.props.persons.map((function(n,t){return Object(s.jsx)(f,{name:n.name,age:n.age,Click:e.props.clicked.bind(e,t),Change:e.props.changed.bind(e,n.id)},n.id)}))}}],[{key:"getDrivedStateFromeProps",value:function(e,n){return console.log("[persons.js] getDrivedStateFromeProps"),n}}]),t}(r.Component),v=function(e){var n="text long enough";return e.inputLength<=5&&(n="text too short!"),Object(s.jsx)("div",{children:Object(s.jsx)("p",{children:n})})},x=function(e){return Object(s.jsx)("div",{style:{display:"inline-block",padding:"16px",margin:"16px",border:"1px solid black",textAlign:"center",color:"white",cursor:"pointer"},onClick:e.CharHandler,children:e.character})},k=t.p+"static/media/logo.6ce24c58.svg",C=t(6),P=t.n(C),y=function(e){var n=[],t=[e.persons.length,"s"];switch(e.persons.length){case 0:t[0]="no";case 1:t[1]="",n.push(P.a.bold);case 2:n.push(P.a.red);break;default:t=[e.persons.length,"s"]}return Object(s.jsxs)("div",{className:P.a.HeadSection,children:[Object(s.jsx)("img",{src:k,className:"App-logo",alt:"logo"}),Object(s.jsxs)("p",{className:n.join(" "),children:["create react App with ",t[0]," person",t[1]]}),Object(s.jsx)("button",{className:e.showPerson?P.a.red:null,onClick:e.clicked,children:"show persons"})]})},S=function(e){Object(u.a)(t,e);var n=Object(h.a)(t);function t(e){var s;return Object(p.a)(this,t),(s=n.call(this,e)).togglePersonsHandler=function(){0!==s.state.persons.length&&s.setState({showPersons:!s.state.showPersons})},s.nameChangeHandler=function(e,n){var t=s.state.persons.findIndex((function(n){return n.id===e})),r=Object(l.a)({},s.state.persons[t]);r.name=n.target.value;var o=Object(i.a)(s.state.persons);o[t]=r,s.setState({persons:o})},s.deletePersonHandler=function(e){var n=Object(i.a)(s.state.persons);n.splice(e,1),s.setState({persons:n})},s.inpChangeHandler=function(e){s.setState({userInput:e.target.value})},s.deleteCharHandler=function(e){var n=Object(i.a)(s.state.userInput);n.splice(e,1),s.setState({userInput:n.join("")})},console.log("constructer"),s.state={persons:[{id:"fasde",name:"max",age:27},{id:"asde",name:"manu",age:17},{id:"cgfrfd",name:"alex",age:21}],showPersons:!1,userInput:""},s}return Object(d.a)(t,[{key:"componentDidMount",value:function(){console.log("componentDidMount")}},{key:"render",value:function(){var e=this;console.log("render");var n=null;this.state.showPersons&&(n=Object(s.jsx)(m,{persons:this.state.persons,clicked:this.deletePersonHandler,changed:this.nameChangeHandler}));var t=this.state.userInput.split("").map((function(n,t){return Object(s.jsx)(x,{character:n,CharHandler:e.deleteCharHandler.bind(e,t)})}));return Object(s.jsx)("div",{className:g.a.App,children:Object(s.jsxs)("header",{className:"App-header",children:[Object(s.jsx)(y,{persons:this.state.persons,clicked:this.togglePersonsHandler,showPerson:this.state.showPersons}),n,Object(s.jsx)("hr",{style:{width:"99%"}}),Object(s.jsx)("input",{type:"text",onChange:this.inpChangeHandler,value:this.state.userInput}),Object(s.jsx)("p",{children:this.state.userInput}),Object(s.jsx)(v,{inputLength:this.state.userInput.length}),Object(s.jsx)("div",{children:t}),Object(s.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn react"})]})})}}],[{key:"getDrivedStateFromProps",value:function(e,n){return console.log("getDrivedStateFromProps "+e),n}}]),t}(r.Component),w=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,21)).then((function(n){var t=n.getCLS,s=n.getFID,r=n.getFCP,o=n.getLCP,a=n.getTTFB;t(e),s(e),r(e),o(e),a(e)}))};console.error("MY CONSOLE IS NOT YOUR PLAY GROUND"),c.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(S,{})}),document.getElementById("root")),w()}],[[20,1,2]]]);
//# sourceMappingURL=main.e2ae982a.chunk.js.map