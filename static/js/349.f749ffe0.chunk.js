"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[349],{854:function(e,n,r){var t=r(243),a=r(184);n.Z=function(){return(0,a.jsx)(t.BR,{height:"80",width:"80",radius:1,color:"#4fa94d",ariaLabel:"puff-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}},820:function(e,n,r){var t,a,o=r(168),c=r(444),i=r(87),u=r(689),s=r(184),l=(0,c.ZP)("ul")(t||(t=(0,o.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n"]))),f=(0,c.ZP)(i.rU)(a||(a=(0,o.Z)(["\n  display: flex;\n  gap: 5px;\n  flex-wrap: nowrap;\n  flex-basis: 49%;\n  min-width: 250px;\n  border: 2px solid #8c46a3;\n  border-radius: 4px;\n  text-decoration: none;\n  font-size: 20px;\n  color: #75367d;\n\n  &.active {\n    background-color: blue;\n    color: #ffffff;\n  }\n\n  :hover:not(.active),\n  :focus-visible:not(.active) {\n    color: #ca3fdd;\n    background-color: #ffd0f448;\n    border-color: #8c46a37e;\n    transform: scale(1.02);\n  }\n"])));n.Z=function(e){var n=e.trendingMovies,r=(0,u.TH)();return(0,s.jsx)(l,{children:n.map((function(e){var n=e.id,t=e.title,a=e.poster_path;return(0,s.jsxs)(f,{to:"/movies/".concat(n),state:{from:r},children:[(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+a,width:"70px",alt:t}),(0,s.jsx)("p",{children:t})]},n)}))})}},349:function(e,n,r){r.r(n),r.d(n,{default:function(){return y}});var t=r(439),a=r(686),o=r.n(a),c=r(791),i=r(87),u=r(861),s=r(757),l=r.n(s),f=r(263),p=function(){var e=(0,u.Z)(l().mark((function e(n){var r,t,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URLSearchParams({api_key:"87582cb7f63615fc9dcd406a264f6674",include_adult:!1,query:n}),e.next=3,f.Z.get("".concat("https://api.themoviedb.org/3/search/movie","?").concat(r));case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=p,d=r(820),m=r(854),v="SearchBar_Searchbar__qe5Sc",x="SearchBar_SearchForm__J+i1a",b="SearchBar_SearchFormButton__J-w2N",S="SearchBar_SearchFormButtonLabel__iHW4N",_="SearchBar_SearchFormInput__4T9IM",w=r(184);function g(e){var n=e.onSubmit,r=(0,c.useState)(""),a=(0,t.Z)(r,2),i=a[0],u=a[1],s=function(){u("")};return(0,w.jsx)("div",{className:v,children:(0,w.jsxs)("form",{className:x,onSubmit:function(e){e.preventDefault(),""!==i.trim()?(n(i),s()):o().Notify.failure("Enter search query")},children:[(0,w.jsx)("button",{type:"submit",className:b,children:(0,w.jsx)("span",{className:S,children:"Search"})}),(0,w.jsx)("input",{onChange:function(e){u(e.currentTarget.value.toLowerCase())},value:i,className:_,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"})]})})}var y=function(){var e=(0,c.useState)([]),n=(0,t.Z)(e,2),r=n[0],a=n[1],u=(0,c.useState)(!1),s=(0,t.Z)(u,2),l=s[0],f=s[1],p=(0,i.lr)(),v=(0,t.Z)(p,2),x=v[0],b=v[1];(0,c.useEffect)((function(){var e,n=null!==(e=x.get("query"))&&void 0!==e?e:"";n&&(f(!0),h(n).then((function(e){var n=e.results;n.length?a(n):o().Notify.failure("There is no results")})).catch((function(){o().Notify.failure("Something went wrong...")})).finally((function(){return f(!1)})))}),[x]);return(0,w.jsxs)("main",{children:[(0,w.jsx)(g,{onSubmit:function(e){b({query:e}),a([])}}),l?(0,w.jsx)(m.Z,{}):(0,w.jsx)(d.Z,{trendingMovies:r})]})}}}]);
//# sourceMappingURL=349.f749ffe0.chunk.js.map