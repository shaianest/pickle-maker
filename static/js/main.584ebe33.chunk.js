(this["webpackJsonppickle-maker"]=this["webpackJsonppickle-maker"]||[]).push([[0],[,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__3RP4P",BreadTop:"BurgerIngredient_BreadTop__n4rQv",Seeds1:"BurgerIngredient_Seeds1__1MrbD",Seeds2:"BurgerIngredient_Seeds2__2HGMb",Meat:"BurgerIngredient_Meat__1iu62",Cheese:"BurgerIngredient_Cheese__1dgva",Salad:"BurgerIngredient_Salad__3mSDH",Bacon:"BurgerIngredient_Bacon__eXybB"}},,,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__2F4qB",Open:"SideDrawer_Open__2NdIB",Close:"SideDrawer_Close__1lF3j",Logo:"SideDrawer_Logo__2Whp-"}},function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__PYXIj",Label:"BuildControl_Label__33eCA",Less:"BuildControl_Less__1hkVh",More:"BuildControl_More__JhbJG"}},function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__1JKQw",active:"NavigationItem_active__2boAP"}},function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__20h8I",Logo:"Toolbar_Logo__2tT_7",DesktopOnly:"Toolbar_DesktopOnly__3Q3Ml"}},,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__38Jwr",OrderButton:"BuildControls_OrderButton__3R4KI",enable:"BuildControls_enable__32sLj"}},function(e,t,n){e.exports={Button:"Button_Button__3i6w7",Success:"Button_Success__39Bcb",Danger:"Button_Danger__VoJEE"}},,function(e,t,n){e.exports={Content:"Layout_Content__2GBGN"}},function(e,t,n){e.exports={Logo:"Logo_Logo__3Lc1t"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__2NWa1"}},function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__2HW_0"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3dUbM"}},function(e,t,n){e.exports={Pickle:"Pickle_Pickle__2sA8o"}},function(e,t,n){e.exports={Modal:"Modal_Modal__3ATwj"}},,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),c=n.n(a),s=n(15),i=n.n(s),o=(n(29),n(3)),l=n(4),d=n(6),u=n(5),j=function(e){return e.children},b=n(16),h=n.n(b),O=n(10),g=n.n(O),p=n.p+"static/media/burger-logo.ec69c7f6.png",_=n(17),x=n.n(_),m=function(e){return Object(r.jsx)("div",{className:x.a.Logo,children:Object(r.jsx)("img",{src:p,alt:"burger logo"})})},v=n(18),f=n.n(v),C=n(9),B=n.n(C),k=function(e){return Object(r.jsx)("li",{className:B.a.NavigationItem,children:Object(r.jsx)("a",{className:e.active?B.a.active:null,href:e.link,children:e.children})})},w=function(e){return Object(r.jsxs)("ul",{className:f.a.NavigationItems,children:[Object(r.jsx)(k,{link:"/",active:!0,children:"Burger Builder"}),Object(r.jsx)(k,{link:"/",children:"Checkout"})]})},N=n(19),S=n.n(N),y=function(e){return Object(r.jsxs)("div",{className:S.a.DrawerToggle,onClick:e.clicked,children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})},D=function(e){return Object(r.jsxs)("header",{className:g.a.Toolbar,children:[Object(r.jsx)(y,{clicked:e.drawerToggleClicked}),Object(r.jsx)("div",{className:g.a.Logo,children:Object(r.jsx)(m,{})}),Object(r.jsx)("nav",{className:g.a.DesktopOnly,children:Object(r.jsx)(w,{})})]})},I=n(7),T=n.n(I),L=n(20),P=n.n(L),H=function(e){return e.show?Object(r.jsx)("div",{className:P.a.Backdrop,onClick:e.clicked}):null},M=function(e){var t=[T.a.SideDrawer,T.a.Close];return e.show&&(t=[T.a.SideDrawer,T.a.Open]),Object(r.jsxs)(j,{children:[Object(r.jsx)(H,{show:e.show,clicked:e.closed}),Object(r.jsxs)("div",{className:t.join(" "),children:[Object(r.jsx)("div",{className:T.a.Logo,children:Object(r.jsx)(m,{})}),Object(r.jsx)("nav",{children:Object(r.jsx)(w,{})})]})]})},A=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={showSideDrawer:!1},e.SideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.SideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(j,{children:[Object(r.jsx)(D,{drawerToggleClicked:this.SideDrawerToggleHandler}),Object(r.jsx)(M,{show:this.state.showSideDrawer,closed:this.SideDrawerClosedHandler}),Object(r.jsx)("main",{className:h.a.Content,children:this.props.children})]})}}]),n}(a.Component),F=n(11),J=n(23),E=n(21),R=n.n(E),Y=n(2),G=n.n(Y),W=function(e){var t=null;switch(e.type){case"bread-bottom":t=Object(r.jsx)("div",{className:G.a.BreadBottom});break;case"bread-top":t=Object(r.jsxs)("div",{className:G.a.BreadTop,children:[Object(r.jsx)("div",{className:G.a.Seeds1}),Object(r.jsx)("div",{className:G.a.Seeds2})]});break;case"meat":t=Object(r.jsx)("div",{className:G.a.Meat});break;case"cheese":t=Object(r.jsx)("div",{className:G.a.Cheese});break;case"bacon":t=Object(r.jsx)("div",{className:G.a.Bacon});break;case"salad":t=Object(r.jsx)("div",{className:G.a.Salad});break;default:t=null}return t},Q=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(J.a)(Array(e.ingredients[t])).map((function(e,n){return Object(r.jsx)(W,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(r.jsx)("p",{children:"Please start adding ingredients!"})),Object(r.jsxs)("div",{className:R.a.Pickle,children:[Object(r.jsx)(W,{type:"bread-top"}),t,Object(r.jsx)(W,{type:"bread-bottom"})]})},K=n(8),U=n.n(K),V=function(e){return Object(r.jsxs)("div",{className:U.a.BuildControl,children:[Object(r.jsx)("div",{className:U.a.Label,children:e.label}),Object(r.jsx)("button",{onClick:e.removed,className:U.a.Less,disabled:e.disabled,children:"Less"}),Object(r.jsx)("button",{onClick:e.added,className:U.a.More,children:"More"})]})},X=n(13),q=n.n(X),z=void 0,Z=[{lable:"Salad",type:"salad"},{lable:"Bacon",type:"bacon"},{lable:"Cheese",type:"cheese"},{lable:"Meat",type:"meat"}],$=function(e){return Object(r.jsxs)("div",{className:q.a.BuildControls,children:[Object(r.jsxs)("p",{children:["Current Price: ",Object(r.jsx)("strong",{children:e.price.toFixed(2)})]}),Z.map((function(t){return Object(r.jsx)(V,{label:t.lable,added:e.ingredientAdded.bind(z,t.type),removed:e.ingredientRemoved.bind(z,t.type),disabled:e.disabled[t.type]},t.lable)})),Object(r.jsx)("button",{className:q.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered,children:"ORDER NOW"})]})},ee=n(22),te=n.n(ee),ne=function(e){return Object(r.jsxs)(j,{children:[Object(r.jsx)(H,{show:e.show,clicked:e.modalClosed}),Object(r.jsx)("div",{className:te.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"},children:e.children})]})},re=n(14),ae=n.n(re),ce=function(e){return Object(r.jsx)("button",{className:[ae.a.Button,ae.a[e.btnType]].join(" "),onClick:e.clicked,children:e.children})},se=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{style:{textTransform:"capitalize"},children:t}),": ",e.ingredients[t]]},t)}));return Object(r.jsxs)(j,{children:[Object(r.jsx)("h3",{children:"Your Order"}),Object(r.jsx)("p",{children:"A delicious pickle with the following ingredients:"}),Object(r.jsx)("ul",{children:t}),Object(r.jsx)("p",{children:"Continue to Checkout?"}),Object(r.jsx)("p",{children:Object(r.jsxs)("strong",{children:["Total Price: ",e.price.toFixed(2)]})}),Object(r.jsx)(ce,{btnType:"Danger",clicked:e.purchaseCancelled,children:"CANCEL"}),Object(r.jsx)(ce,{btnType:"Success",clicked:e.purchaseContinued,children:"CONTINUE"})]})},ie={salad:.5,cheese:.4,meat:1.3,bacon:.7},oe=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4,purchasable:!1,purchasing:!1},e.addIngredientHandler=function(t){var n=e.state.ingredients[t]+1,r=Object(F.a)({},e.state.ingredients);r[t]=n;var a=ie[t],c=e.state.totalPrice+a;e.setState({totalPrice:c,ingredients:r}),e.updatePurchaseState(r)},e.removeIngredientHandler=function(t){var n=e.state.ingredients[t];if(!(n<=0)){var r=n-1,a=Object(F.a)({},e.state.ingredients);a[t]=r;var c=ie[t],s=e.state.totalPrice-c;e.setState({totalPrice:s,ingredients:a}),e.updatePurchaseState(a)}},e.purchaseHandler=function(){e.setState({purchasing:!0})},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){e.setState({purchasing:!1}),alert("You continue!")},e}return Object(l.a)(n,[{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);this.setState({purchasable:t>0})}},{key:"render",value:function(){var e=Object(F.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return Object(r.jsxs)(j,{children:[Object(r.jsx)(ne,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler,children:Object(r.jsx)(se,{price:this.state.totalPrice,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler,ingredients:this.state.ingredients})}),Object(r.jsx)(Q,{ingredients:this.state.ingredients}),Object(r.jsx)($,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,price:this.state.totalPrice,purchasable:this.state.purchasable,ordered:this.purchaseHandler})]})}}]),n}(a.Component),le=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsx)(A,{children:Object(r.jsx)(oe,{})})})}}]),n}(a.Component),de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};console.error("max a million alert"),i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(le,{})}),document.getElementById("root")),de()}],[[30,1,2]]]);
//# sourceMappingURL=main.584ebe33.chunk.js.map