(this.webpackJsonpreactsp=this.webpackJsonpreactsp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/header1.70e6670e.jpg"},,,,,,,function(e,t,a){e.exports=a.p+"static/media/header2.33eca35f.jpg"},function(e,t,a){e.exports=a.p+"static/media/header3.d9d36b65.jpg"},,,,,,function(e,t,a){e.exports=a(40)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),i=a.n(l),c=(a(28),a(3)),m=(a(29),a(1)),u=a(9),o=a.n(u),s=a(16),p=a.n(s),d=a(17),E=a.n(d),h=(a(30),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.e,null,r.a.createElement(m.c,{path:"/",exact:!0,render:function(){return r.a.createElement("img",{src:o.a,alt:"miasto"})}}),r.a.createElement(m.c,{path:"/admin",render:function(){return r.a.createElement("img",{src:o.a,alt:"miasto"})}}),r.a.createElement(m.c,{path:"/products",render:function(){return r.a.createElement("img",{src:p.a,alt:"miasto"})}}),r.a.createElement(m.c,{path:"/contact",render:function(){return r.a.createElement("img",{src:E.a,alt:"miasto"})}}),r.a.createElement(m.c,{render:function(){return r.a.createElement("img",{src:o.a,alt:"miasto"})}})))}),f=function(e){var t=e.title,a=e.author,n=e.text;return r.a.createElement("article",{style:{marginTop:40}},r.a.createElement("h3",{style:{marginBottom:3,textTransform:"uppercase"}},t),r.a.createElement("span",{style:{display:"block",marginBottom:10,fontSize:12}},a),r.a.createElement("p",{style:{fontSize:15}},n))},g=[{id:1,author:"Jan Nowak",title:"Czym jest teoria strun",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, hic ipsam molestiae natus iure numquam praesentium illo enim repellat esse tempore nostrum pariatur quisquam, officia ratione, aliquid mollitia! Sit, quos!"},{id:2,author:"Jan Nowak",title:"Czym jest teoria strun",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, hic ipsam molestiae natus iure numquam praesentium illo enim repellat esse tempore nostrum pariatur quisquam, officia ratione, aliquid mollitia! Sit, quos!"},{id:3,author:"Jan Nowak",title:"Czym jest teoria strun",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, hic ipsam molestiae natus iure numquam praesentium illo enim repellat esse tempore nostrum pariatur quisquam, officia ratione, aliquid mollitia! Sit, quos!"},{id:4,author:"Jan Nowak",title:"Czym jest teoria strun",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, hic ipsam molestiae natus iure numquam praesentium illo enim repellat esse tempore nostrum pariatur quisquam, officia ratione, aliquid mollitia! Sit, quos!"},{id:5,author:"Jan Nowak",title:"Czym jest teoria strun",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, hic ipsam molestiae natus iure numquam praesentium illo enim repellat esse tempore nostrum pariatur quisquam, officia ratione, aliquid mollitia! Sit, quos!"}],v=function(){var e=g.map((function(e){return r.a.createElement(f,Object.assign({key:e.id},e))}));return r.a.createElement("div",{className:"home"},e)},q=function(){return r.a.createElement("div",null,"Strona startowa")},y=function(){return r.a.createElement(m.c,{render:function(){return r.a.createElement(m.b,{to:"/login"})}})},b=a(19),x=a(20),k=a(22),j=a(21),w=(a(36),function(e){Object(k.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleChange=function(t){e.setState({value:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.setState({value:""})},e}return Object(x.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("form",{action:""},r.a.createElement("h3",null,"Napisz do nas"),r.a.createElement("textarea",{placeholder:"Wpisz wiadomo\u015b\u0107...",name:"",id:"",onSubmit:this.handleSubmit,onChange:this.handleChange,value:this.state.value}),r.a.createElement("button",null,"Wy\u015blij")),r.a.createElement(m.a,{when:this.state.value,message:"Masz niewype\u0142niony formularz"}))}}]),a}(n.Component)),S=function(e){return r.a.createElement("article",{class:"product"},r.a.createElement("h1",null,e.id))},N=function(e){var t=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Strona produktu"),r.a.createElement(S,{id:t.params.id}),r.a.createElement(c.b,{to:"/products"}," Powr\xf3t do listy produktu"))},z=(a(37),["car","bike","motorcycle"]),J=function(){var e=z.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(c.b,{to:"/product/".concat(e)},e))}));return r.a.createElement("div",{className:"products"},r.a.createElement("h2",null,"Lista produkt\xf3w"),r.a.createElement("ul",null,e))},C=function(){return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:""},"Podaj Login: ",r.a.createElement("input",{type:"text"}))," ",r.a.createElement("br",null),r.a.createElement("label",{htmlFor:""},"Podaj Has\u0142o: ",r.a.createElement("input",{type:"password"}))," ",r.a.createElement("br",null),r.a.createElement("button",null,"Zaloguj"))},L=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.e,null,r.a.createElement(m.c,{path:"/",exact:!0,component:v}),r.a.createElement(m.c,{path:"/products",component:J}),r.a.createElement(m.c,{path:"/product/:id",component:N}),r.a.createElement(m.c,{path:"/contact",component:w}),r.a.createElement(m.c,{path:"/admin",component:y}),r.a.createElement(m.c,{path:"/login",component:C}),r.a.createElement(m.c,{component:q})))},A=(a(38),[{name:"start",path:"/",exact:!0},{name:"produkty",path:"products"},{name:"kontakt",path:"/contact"},{name:"panel admina",path:"/admin"}]),F=function(){var e=A.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(c.c,{to:e.path,exact:!!e.exact&&e.exact},e.name))}));return r.a.createElement("nav",{className:"main"},r.a.createElement("ul",null,e))},O=(a(39),function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Stopka"),r.a.createElement(m.c,{path:"/",exact:!0,render:function(e){return r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,"stronie g\u0142\xf3wnej"))}}),r.a.createElement(m.c,{path:"/:page",exact:!0,render:function(e){return r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.params.page))}}),r.a.createElement(m.c,{path:"/:page/:item",exact:!0,render:function(e){return r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.params.page," - ",e.match.params.item))}}))});var B=function(){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement(h,null)),r.a.createElement("main",null,r.a.createElement("aside",null,r.a.createElement(F,null)),r.a.createElement("section",{className:"page"},r.a.createElement(L,null))),r.a.createElement("footer",null,r.a.createElement(O,null))))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.73b8e88e.chunk.js.map