(this.webpackJsonptest_project_newtone=this.webpackJsonptest_project_newtone||[]).push([[0],{58:function(t,e,c){},65:function(t,e,c){},67:function(t,e,c){"use strict";c.r(e);var a=c(2),r=c(0),i=c.n(r),n=c(19),s=c.n(n),d=(c(58),c(30)),o=c(26),j=c(49),l=c(8),u=c(82),b=c(83),m=c(84),h=c(5),p=c(92),O=c(47),x=c.n(O),g=c(18),v=Object(h.a)((function(t){return Object(p.a)({badge:{right:-3,top:13,border:"2px solid ".concat(t.palette.background.paper),padding:"0 4px"}})}))(u.a),f=function(t){var e=t.totalCount,c=t.totalPrice;return Object(a.jsx)("div",{className:"header",children:Object(a.jsx)(b.a,{maxWidth:"md",children:Object(a.jsxs)("div",{className:"header__inner",children:[Object(a.jsx)(g.b,{to:"/",children:Object(a.jsx)("div",{className:"logo",children:"FruitShop"})}),Object(a.jsx)(g.b,{to:"/cart",children:Object(a.jsxs)("div",{className:"cart",children:[Object(a.jsx)(m.a,{"aria-label":"cart",children:Object(a.jsx)(v,{badgeContent:e,color:"secondary",children:Object(a.jsx)(x.a,{})})}),Object(a.jsxs)("div",{className:"cart__price",children:[" ",c," $"]})]})})]})})})},P=c(93),_=c(86),C=c(87),N=c(88),L=c(89),w=c(90),y=c(91),S=c(85),k=c(48),A=c.n(k),W=Object(S.a)({root:{width:345,margin:"15px"},media:{height:200},btn:{width:"100%"},btnLabel:{marginRight:"3px"}}),T=function(t){var e=t.productItem,c=t.onAddProductToCart,r=t.addedProducts,i=W(),n=r[e.id]?r[e.id].count:0;return Object(a.jsxs)(P.a,{className:i.root,children:[Object(a.jsxs)(_.a,{children:[Object(a.jsx)(C.a,{className:i.media,image:e.img,title:e.name}),Object(a.jsxs)(N.a,{children:[Object(a.jsx)(L.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.name}),Object(a.jsxs)(L.a,{variant:"body2",color:"textSecondary",component:"p",children:[e.price," $ (per kg)"]})]})]}),Object(a.jsx)(w.a,{children:Object(a.jsxs)(y.a,{variant:"contained",color:"primary",className:i.btn,onClick:function(){return c(e)},children:[Object(a.jsx)("span",{className:i.btnLabel,children:"Add to cart"}),Object(a.jsx)(u.a,{color:"secondary",badgeContent:n,children:Object(a.jsx)(A.a,{})})]})})]})},F=function(t){var e=t.productsList,c=t.onAddProductToCart,r=t.addedProducts;return Object(a.jsx)("div",{className:"home",children:Object(a.jsx)(b.a,{maxWidth:"md",children:Object(a.jsx)("div",{className:"home__inner",children:e.map((function(t){return Object(a.jsx)(T,{productItem:t,onAddProductToCart:c,addedProducts:r},t.id)}))})})})},z=c(94),B=function(t){var e=t.addedProducts,c=t.onCartClear,r=Object.keys(e.productsList).map((function(t){return e.productsList[t].item}));return Object(a.jsx)("div",{className:"cart",children:Object(a.jsxs)(b.a,{maxWidth:"md",children:[0===e.totalPrice&&Object(a.jsx)("div",{className:"cart-empty",children:Object(a.jsx)("h1",{children:"Cart is empty.."})}),Object(a.jsx)("div",{className:"cart__list",children:r.map((function(t){return Object(a.jsxs)("div",{className:"cart__list-item cart-item",children:[Object(a.jsx)(z.a,{src:t.img,alt:t.name}),Object(a.jsx)("div",{className:"cart-item__label",children:t.name}),Object(a.jsxs)("div",{className:"cart-item__label",children:[e.productsList[t.id].count,"kg"]}),Object(a.jsxs)("div",{className:"cart-item__label",children:[e.productsList[t.id].price,"$"]})]},t.id)}))}),Object(a.jsxs)("div",{className:"cart__actions",children:[Object(a.jsx)(g.b,{to:"/",children:Object(a.jsx)(y.a,{variant:"contained",color:"primary",children:"Return to products list"})}),0!==e.totalPrice&&Object(a.jsx)(y.a,{color:"primary",onClick:c,children:"Clear cart"})]})]})})},I=[{id:1,name:"Banana",price:10,img:"https://www.gastronom.ru/binfiles/images/20151029/bddcbbce.jpg",discountSize:0,discountPerWeight:0},{id:2,name:"Apple",price:8,img:"https://m.dom-eda.com/uploads/images/catalog/item/86df51de21/c25c94fe96_1000.jpg",discountSize:0,discountPerWeight:0},{id:3,name:"Papaya",price:10,img:"https://www.fructo.com.ua/image/cache/catalog/fruct/papaya-1400x1400.png",discountSize:5,discountPerWeight:3}];c(65);var $=function(){var t={productsList:{},totalPrice:0,totalCount:0},e=Object(r.useState)(t),c=Object(j.a)(e,2),i=c[0],n=c[1];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(f,{totalCount:i.totalCount,totalPrice:i.totalPrice}),Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{path:"/",exact:!0,children:Object(a.jsx)(F,{productsList:I,onAddProductToCart:function(t){n((function(e){var c,a=e.productsList[t.id]?e.productsList[t.id].count+1:1,r=e.productsList[t.id]?e.productsList[t.id].price+t.price:t.price,i=Object(o.a)(Object(o.a)({},e.productsList),{},Object(d.a)({},t.id,{item:t,count:a,price:function(e){var c=e;return t.discountPerWeight&&a%t.discountPerWeight===0&&(c=e-t.discountSize),c}(r)}));return Object(o.a)(Object(o.a)({},e),{},{productsList:i,totalPrice:(c=i,Object.values(c).reduce((function(t,e){return t+e.price}),0)),totalCount:Object.values(i).length})}))},addedProducts:i.productsList})}),Object(a.jsx)(l.a,{path:"/cart",children:Object(a.jsx)(B,{addedProducts:i,onCartClear:function(){window.confirm("Are you sure?")&&n(t)}})})]})]})},J=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,96)).then((function(e){var c=e.getCLS,a=e.getFID,r=e.getFCP,i=e.getLCP,n=e.getTTFB;c(t),a(t),r(t),i(t),n(t)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(g.a,{basename:"/",children:Object(a.jsx)($,{})})}),document.getElementById("root")),J()}},[[67,1,2]]]);
//# sourceMappingURL=main.eaadb8e9.chunk.js.map