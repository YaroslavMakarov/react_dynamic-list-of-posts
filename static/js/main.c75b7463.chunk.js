(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(4),r=n.n(s),o=n(1),m=(n(10),n(2));function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"This value was promised to be there.";if(void 0===e||null===e)throw new TypeError(t);return e}var i=fetch("https://mate-academy.github.io/react_dynamic-list-of-posts/api/posts.json").then((function(e){return e.json().then((function(e){return e}))})),u=fetch("https://mate-academy.github.io/react_dynamic-list-of-posts/api/users.json").then((function(e){return e.json().then((function(e){return e}))})),p=fetch("https://mate-academy.github.io/react_dynamic-list-of-posts/api/comments.json").then((function(e){return e.json().then((function(e){return e}))})),f=Promise.all([i,u,p]).then((function(e){return console.log(e),e[0].map((function(t){return Object(m.a)(Object(m.a)({},t),{},{user:l(e[1].find((function(e){return e.id===t.userId}))),comments:e[2].filter((function(e){return e.postId===t.id}))})}))})),_=(n(11),function(e){var t=e.name,n=e.username,a=e.email,s=e.address;return c.a.createElement("div",{className:"user"},c.a.createElement("h2",{className:"user__nick"},"Post by: ".concat(n)),c.a.createElement("p",{className:"user__contacts"},c.a.createElement("span",{className:"user__contacts-item"},t),c.a.createElement("br",null),c.a.createElement("span",{className:"user__contacts-item"},"".concat(s.street," ").concat(s.suite)),c.a.createElement("br",null),c.a.createElement("span",{className:"user__contacts-item"},"".concat(s.city," ").concat(s.zipcode)),c.a.createElement("br",null),c.a.createElement("span",{className:"user__contacts-item"},c.a.createElement("a",{href:"mailto:".concat(a)},a))))}),d=(n(12),function(e){var t=e.title,n=e.body;return c.a.createElement("article",{className:"post"},c.a.createElement("h2",{className:"post__header"},t),c.a.createElement("p",{className:"post__text"},n))}),E=(n(13),function(e){var t=e.name,n=e.email,a=e.body;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"comment"},c.a.createElement("div",{className:"comment__name comment__indentation"},c.a.createElement("strong",null,"Comment by:")," ",t,c.a.createElement("br",null)),c.a.createElement("div",{className:"comment__email comment__indentation"},c.a.createElement("strong",null,"Email:"),c.a.createElement("a",{href:"mailto:".concat(n),className:"comment__email-link comment__indentation"},n))),c.a.createElement("div",{className:"comment__text comment__indentation"},a))}),h=(n(14),function(e){var t=e.comments;return c.a.createElement("section",null,c.a.createElement("ul",{className:"commentList"},t.map((function(e){return c.a.createElement("li",{key:e.id,className:"commentList__item"},c.a.createElement(E,{name:e.name,email:e.email,body:e.body}))}))))}),b=(n(15),function(e){var t=e.posts;return console.log(t.length),c.a.createElement("ul",{className:"postList"},t.map((function(e){return c.a.createElement("div",{key:e.id,className:"postList__wrapper"},c.a.createElement("li",{className:"postList__item"},c.a.createElement(_,e.user),c.a.createElement(d,e)),c.a.createElement(h,{comments:e.comments}))})))}),y=function(){var e,t=Object(a.useState)([]),n=Object(o.a)(t,2),s=n[0],r=n[1],m=Object(a.useState)(!1),l=Object(o.a)(m,2),i=l[0],u=l[1],p=Object(a.useState)(""),_=Object(o.a)(p,2),d=_[0],E=_[1];return c.a.createElement("div",{className:"app"},c.a.createElement("h1",null,"Dynamic list of posts"),s.length>1&&c.a.createElement("input",{type:"text",className:"app_input",value:d,onChange:function(e){return E(e.target.value.toLowerCase())}}),c.a.createElement(b,{posts:(e=d,e?s.filter((function(t){return(t.title+t.body).toLowerCase().includes(e)})):s)}),0===s.length&&c.a.createElement("button",{type:"button",className:"app__button",onClick:function(){return u(!0),void f.then((function(e){return u(!1),r(e.slice(0,3))}))}},i?"Loading...":"Get Posts"))};r.a.render(c.a.createElement(y,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.c75b7463.chunk.js.map