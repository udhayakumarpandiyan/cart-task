(window["webpackJsonpcart-task"]=window["webpackJsonpcart-task"]||[]).push([[0],{20:function(e,t,r){"use strict";var n=r(6);t.a=Object(n.a)()},32:function(e,t,r){e.exports=r(48)},37:function(e,t,r){},46:function(e,t,r){},48:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(10),o=r.n(c),i=(r(37),r(18)),s=r(27),u=r(2),l=r(16),p=r(28),O=r.n(p),b=r(12),f=r(8);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(r,!0).forEach((function(t){Object(b.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v={shoppingList:void 0};var g=r(31);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(r,!0).forEach((function(t){Object(b.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h={cartItems:[]};var w=Object(u.c)({shoppingListReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.c:return y({},e,{shoppingList:t.payload});default:return y({},e)}},cartReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.b:case f.e:return m({},e,{cartItems:t.payload});case f.a:return m({},e,{cartItems:[].concat(Object(g.a)(e.cartItems),[t.payload])});default:return m({},e)}}}),E=r(29),P=r(30),k=r(22),R=[E.a],_=Object(u.d)(u.a.apply(void 0,R)),D={key:"root",storage:O.a,stateReconciler:P.a},I=Object(l.a)(D,w),T=Object(k.createHistory)({basename:"/cart-task"}),S=Object(u.e)(I,_,T),L=Object(l.b)(S);r(46);var M=function(){var e=Object(n.lazy)((function(){return Promise.all([r.e(2),r.e(4)]).then(r.bind(null,227))}));return a.a.createElement(n.Suspense,{fallback:a.a.createElement("div",{className:"supsense-loading"},"Loading....")},a.a.createElement("div",null,a.a.createElement(i.a,{store:S},a.a.createElement(s.a,{loading:null,persistor:L},a.a.createElement(e,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=r(49),C=r(20);o.a.render(a.a.createElement(A.c,{history:C.a},a.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,r){"use strict";r.d(t,"d",(function(){return n})),r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return c})),r.d(t,"e",(function(){return o})),r.d(t,"c",(function(){return i}));var n="ON_ERROR",a="GET_CART_ITEMS",c="ADD_ITEM_TO_CART",o="REMOVE_ITEM_FROM_CART",i="GET_SHOPPING_LIST"}},[[32,1,3]]]);
//# sourceMappingURL=main.0000b87b.chunk.js.map