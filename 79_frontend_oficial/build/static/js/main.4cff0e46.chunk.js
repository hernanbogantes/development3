(this.webpackJsonp79_frontend_reacthook=this.webpackJsonp79_frontend_reacthook||[]).push([[0],{45:function(e,t,a){},46:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(19),c=a.n(r),i=(a(45),a(9)),o=a(10),l=a(12),d=a(11),j=a(16),b=a(4),u=(a(25),a(46),a(1)),h=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={error:null,isLoaded:!1,items:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("atenas/getall?param1=Todo").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t.items})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.items;return t?Object(u.jsxs)("div",{children:["Error: ",t.message]}):a?Object(u.jsx)("ul",{children:n.map((function(e){return Object(u.jsxs)("li",{children:[e.todoid," ",e.titulo]},e.todoid)}))}):Object(u.jsx)("div",{children:"Loading..."})}}]),a}(s.a.Component),m=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={error:null,isLoaded:!1,items:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("atenas/getall?param1=Producto").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t.items})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.items;return t?Object(u.jsxs)("div",{children:["Error: ",t.message]}):a?Object(u.jsxs)("div",{children:[",",Object(u.jsx)("div",{children:"Products"}),Object(u.jsx)("ul",{children:n.map((function(e){return Object(u.jsx)("li",{style:{display:"block",float:"left",padding:"16px"},className:"border border-primary",children:Object(u.jsxs)("a",{href:"https://www.google.com",children:[Object(u.jsx)("img",{src:e.pict1,alt:"ss"}),Object(u.jsx)("br",{}),e.productname,Object(u.jsx)("br",{}),e.titulo," "]})},e.productoid)}))})]}):Object(u.jsx)("div",{children:"Loading..."})}}]),a}(s.a.Component),O=a(39),p=a(73),v=a(74),x=a(75),f=function(){var e=Object(n.useState)(0),t=Object(O.a)(e,2),a=t[0],s=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{children:["SHOPPING  You clicked ",a," times"]}),Object(u.jsx)("button",{onClick:function(){return s(a+1)},children:"Click me"}),Object(u.jsxs)(p.a,{defaultActiveKey:"0",children:[Object(u.jsxs)(v.a,{children:[Object(u.jsx)(v.a.Header,{children:Object(u.jsx)(p.a.Toggle,{as:x.a,variant:"link",eventKey:"0",children:"Click me!"})}),Object(u.jsx)(p.a.Collapse,{eventKey:"0",children:Object(u.jsx)(v.a.Body,{children:"Hello! I'm the body"})})]}),Object(u.jsxs)(v.a,{children:[Object(u.jsx)(v.a.Header,{children:Object(u.jsx)(p.a.Toggle,{as:x.a,variant:"link",eventKey:"1",children:"Click me!"})}),Object(u.jsx)(p.a.Collapse,{eventKey:"1",children:Object(u.jsx)(v.a.Body,{children:"Hello! I'm another body"})})]})]})]})},g=a(13),y=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).sayHello=n.sayHello.bind(Object(g.a)(n)),n}return Object(o.a)(a,[{key:"sayHello",value:function(){alert("Hello!")}},{key:"render",value:function(){return Object(u.jsx)("button",{onClick:this.sayHello,children:"Click me!"})}}]),a}(s.a.Component),N=a(37),C=a.n(N),k=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).baseUrl="atenas/login",n.handleSubmit=function(e){e.preventDefault();var t={name:n.state.name};C.a.post("atenas/login?param1=Login&param2="+n.state.UserName+"&param3="+n.state.Password,{user:t}).then((function(e){n.myFunction()}))},n.state={UserName:"",Password:""},n.handleUserNameChange=n.handleUserNameChange.bind(Object(g.a)(n)),n.handlePasswordChange=n.handlePasswordChange.bind(Object(g.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(g.a)(n)),n}return Object(o.a)(a,[{key:"handleUserNameChange",value:function(e){this.setState({UserName:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({Password:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),alert("A name was submitted: "+this.state.UserName+this.state.Password)}},{key:"myFunction",value:function(){this.props.history.push("/Products")}},{key:"render",value:function(){return Object(u.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(u.jsxs)("label",{children:["   Name:",Object(u.jsx)("input",{type:"text",value:this.state.UserName,onChange:this.handleUserNameChange})," "]}),Object(u.jsxs)("label",{children:[" Password: ",Object(u.jsx)("input",{type:"text",value:this.state.Password,onChange:this.handlePasswordChange})]}),Object(u.jsx)("input",{type:"submit",value:"Submit"})]})}}]),a}(s.a.Component),P=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={firstName:"",lastName:""},n.handleFirstNameChange=n.handleFirstNameChange.bind(Object(g.a)(n)),n.handleLastNameChange=n.handleLastNameChange.bind(Object(g.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(g.a)(n)),n}return Object(o.a)(a,[{key:"handleFirstNameChange",value:function(e){this.setState({firstName:e.target.value})}},{key:"handleLastNameChange",value:function(e){this.setState({lastName:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),alert("A name was submitted: "+this.state.firstName+this.state.lastName)}},{key:"render",value:function(){return Object(u.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(u.jsxs)("label",{children:["Name:",Object(u.jsx)("input",{type:"text",value:this.state.firstName,onChange:this.handleFirstNameChange})]}),Object(u.jsxs)("label",{children:["LastName:",Object(u.jsx)("input",{type:"text",value:this.state.lastName,onChange:this.handleLastNameChange})]}),Object(u.jsx)("input",{type:"submit",value:"Submit"})," ",Object(u.jsx)("br",{}),Object(u.jsxs)("label",{children:[" ",this.state.lastName]})]})}}]),a}(s.a.Component),S=function(){return Object(u.jsx)("button",{onClick:function(){alert("hello, ".concat("James"))},children:"Greet"})},L=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={value:""},n}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(j.a,{children:[Object(u.jsxs)("div",{className:"border border-primary",children:[Object(u.jsx)(j.b,{to:"/ShoppingList",className:"btn btn-primary",value:"Shopping List",children:"Shopping Car"}),Object(u.jsx)(j.b,{to:"/Products",className:"btn btn-primary",value:"Products",children:"Products"}),Object(u.jsx)(j.b,{to:"/Todos",className:"btn btn-primary",value:"Todos",children:"Products"}),Object(u.jsx)(j.b,{to:"/Post",className:"btn btn-primary",value:"Test",children:"Post"}),Object(u.jsx)(j.b,{to:"/Login",className:"btn btn-primary",value:"Test",children:"Login"}),Object(u.jsx)(j.b,{to:"/readTextArea",className:"btn btn-primary",value:"Test",children:"readTextArea"}),Object(u.jsx)(j.b,{to:"/PassParameter",className:"btn btn-primary",value:"Test",children:"PassParameter"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)(b.a,{path:"/",exact:!0,component:m}),Object(u.jsx)(b.a,{path:"/ShoppingList",component:f}),Object(u.jsx)(b.a,{path:"/Products",component:m}),Object(u.jsx)(b.a,{path:"/Todos",component:h}),Object(u.jsx)(b.a,{path:"/Post",component:y}),Object(u.jsx)(b.a,{path:"/Login",component:k}),Object(u.jsx)(b.a,{path:"/ReadTextArea",component:P}),Object(u.jsx)(b.a,{path:"/PassParameter",component:S})]})]})})}}]),a}(n.Component),w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,76)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))};c.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(L,{})})}),document.getElementById("root")),w()}},[[71,1,2]]]);
//# sourceMappingURL=main.4cff0e46.chunk.js.map