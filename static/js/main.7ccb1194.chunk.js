(window["webpackJsonpcart-task"]=window["webpackJsonpcart-task"]||[]).push([[0],{22:function(e,t,r){"use strict";var n=r(6);t.a=Object(n.a)()},30:function(e,t,r){e.exports=r(44)},35:function(e,t,r){},42:function(e,t,r){},44:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),c=r(11),a=r.n(c),i=(r(35),r(19)),s=r(26),u=r(2),l=r(17),p=r(27),O=r.n(p),f=r(13),b=r(9);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(r,!0).forEach((function(t){Object(f.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v={shoppingList:void 0};var g=r(24);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(r,!0).forEach((function(t){Object(f.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h={cartItems:[]};var w=Object(u.c)({shoppingListReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.c:return y({},e,{shoppingList:t.payload});default:return y({},e)}},cartReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.b:case b.e:return m({},e,{cartItems:t.payload});case b.a:return m({},e,{cartItems:[].concat(Object(g.a)(e.cartItems),[t.payload.item])});default:return m({},e)}}}),E=r(28),P=r(29),R=[E.a],_=Object(u.d)(u.a.apply(void 0,R)),k={key:"root",storage:O.a,stateReconciler:P.a},D=Object(l.a)(k,w),I=Object(u.e)(D,_),T=Object(l.b)(I);r(42);var S=function(){var e=Object(n.lazy)((function(){return Promise.all([r.e(2),r.e(4)]).then(r.bind(null,221))}));return o.a.createElement(n.Suspense,{fallback:o.a.createElement("div",{className:"supsense-loading"},"Loading....")},o.a.createElement("div",null,o.a.createElement(i.a,{store:I},o.a.createElement(s.a,{loading:null,persistor:T},o.a.createElement(e,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=r(45),M=r(22);a.a.render(o.a.createElement(L.b,{history:M.a},o.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,r){"use strict";r.d(t,"d",(function(){return n})),r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return c})),r.d(t,"e",(function(){return a})),r.d(t,"c",(function(){return i}));var n="ON_ERROR",o="GET_CART_ITEMS",c="ADD_ITEM_TO_CART",a="REMOVE_ITEM_FROM_CART",i="GET_SHOPPING_LIST"}},[[30,1,3]]]);
//# sourceMappingURL=main.7ccb1194.chunk.js.map