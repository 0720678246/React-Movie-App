(this["webpackJsonpreact-movie-app"]=this["webpackJsonpreact-movie-app"]||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c.n(i),s=c(19),r=c.n(s),a=(c(39),c(40),c(10)),o=c(0),l=function(){return Object(o.jsx)("div",{className:"header",children:Object(o.jsxs)("div",{className:"main-nav",children:[Object(o.jsx)("div",{className:"logo",children:Object(o.jsx)(a.b,{to:"/",children:"Movie APP"})}),Object(o.jsx)("div",{className:"menu-right",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#",children:"New Movies"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#",children:"Login"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#",children:"Register"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#",children:"About"})})]})})]})})},j=function(){return Object(o.jsx)("div",{className:"footer",children:Object(o.jsxs)("div",{className:"main-footer",children:[Object(o.jsxs)("div",{className:"about",children:[Object(o.jsx)("h3",{children:"About Us"}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci autem deleniti dolorum exercitationem fugiat illum magni provident veritatis voluptates."})]}),Object(o.jsx)("div",{children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("h3",{children:"Quick Links"}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"",children:"About"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"",children:"Contact"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"",children:"Login"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"",children:"Register"})})]})}),Object(o.jsx)("div",{children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("h3",{children:"Company"}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"",children:"Developer API"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"",children:"Terms and conditions"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"",children:"How it Works"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"",children:"Blog"})})]})})]})})},d=c(12),b=c(13),h=c(15),O=c(14),u="SEARCH_MOVIE",m="FETCH_MOVIES",x="FETCH_MOVIE",p="LOADNING",v=c(25),g=c.n(v),f="c9f2374e",N=function(){return{type:p}},y=c(9),w=function(e){Object(h.a)(c,e);var t=Object(O.a)(c);function c(){var e;Object(d.a)(this,c);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).onChange=function(t){e.props.searchMovie(t.target.value)},e.getMovies=function(t){t.preventDefault(),e.props.fetchMovies(e.props.text),e.props.setLoading()},e}return Object(b.a)(c,[{key:"render",value:function(){return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{className:"search-movie",onSubmit:this.getMovies,children:[Object(o.jsx)("input",{type:"text",className:"search-bar",autoFocus:"true",autoComplete:"true",onChange:this.onChange,placeholder:"search movie....."}),Object(o.jsx)("button",{type:"submit",className:"search-button",children:"Search"})]})})}}]),c}(i.Component),M=Object(y.b)((function(e){return{text:e.movies.text}}),{searchMovie:function(e){return function(t){t({type:u,payload:e})}},fetchMovies:function(e){return function(t){g.a.get("https://www.omdbapi.com/?apikey=".concat(f,"&s=").concat(e)).then((function(e){return t({type:m,payload:e.data})})).catch((function(e){console.log(e)}))}},setLoading:N})(w),C=function(){return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("h2",{children:"Loading....."})})},k=function(e){var t=e.movie;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"col-md-3 mb-5",children:Object(o.jsxs)("div",{className:"card card-body bg-dark text-center h-100",children:[Object(o.jsx)("img",{className:"w-100 mb-2",src:t.Poster,alt:"Movie Cover"}),Object(o.jsxs)("h5",{className:"text-light card-title",children:[t.Title,"- ",t.Year]}),Object(o.jsxs)(a.b,{className:"btn btn-primary",to:"/movie/"+t.imdbID,children:["Movie Details",Object(o.jsx)("i",{className:"fas fa-chevron-right"})]})]})})})},A=function(e){Object(h.a)(c,e);var t=Object(O.a)(c);function c(){return Object(d.a)(this,c),t.apply(this,arguments)}return Object(b.a)(c,[{key:"render",value:function(){var e,t=this.props.movies;return e="True"===t.Response?t.Search.map((function(e,t){return Object(o.jsx)(k,{movie:e},t)})):null,Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:e})})}}]),c}(i.Component),D=Object(y.b)((function(e){return{movies:e.movies.movies}}))(A),L=function(e){Object(h.a)(c,e);var t=Object(O.a)(c);function c(){return Object(d.a)(this,c),t.apply(this,arguments)}return Object(b.a)(c,[{key:"render",value:function(){var e=this.props.loading;return Object(o.jsxs)("div",{className:"home ",children:[Object(o.jsx)(M,{}),e?Object(o.jsx)(C,{}):Object(o.jsx)(D,{})]})}}]),c}(i.Component),I=Object(y.b)((function(e){return{loading:e.movies.loading}}))(L),R=c(18),F=c(34),P=c(11),S={text:"",movies:[],loading:!1,movie:[]},T=Object(R.b)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(P.a)(Object(P.a)({},e),{},{text:t.payload,loading:!1});case m:return Object(P.a)(Object(P.a)({},e),{},{movies:t.payload,loading:!1});case x:return Object(P.a)(Object(P.a)({},e),{},{movie:t.payload,loading:!1});case p:return Object(P.a)(Object(P.a)({},e),{},{loading:!0});default:return e}}}),E=[F.a],B=Object(R.c)(T,{},R.a.apply(void 0,E)),G=c(3),H=function(e){Object(h.a)(c,e);var t=Object(O.a)(c);function c(){return Object(d.a)(this,c),t.apply(this,arguments)}return Object(b.a)(c,[{key:"componentDidMount",value:function(){this.props.fetchMovie(this.props.match.params.id),this.props.setLoading()}},{key:"render",value:function(){var e=this.props,t=e.loading,c=e.movie,i=Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-md-4 card card-body",children:Object(o.jsx)("img",{src:c.Poster,className:"thumbnail",alt:"Poster"})}),Object(o.jsxs)("div",{className:"col-md-8",children:[Object(o.jsx)("h2",{className:"mb-4",children:c.Title}),Object(o.jsxs)("ul",{className:"list-group",children:[Object(o.jsxs)("li",{className:"list-group-item",children:[Object(o.jsx)("strong",{children:"Genre:"}),c.Genre]}),Object(o.jsxs)("li",{className:"list-group-item",children:[Object(o.jsx)("strong",{children:"Released:"}),c.Released]}),Object(o.jsxs)("li",{className:"list-group-item",children:[Object(o.jsx)("strong",{children:"Rated:"}),c.Rated]}),Object(o.jsxs)("li",{className:"list-group-item",children:[Object(o.jsx)("strong",{children:"IMDB Rating:"}),c.imdbRating]}),Object(o.jsxs)("li",{className:"list-group-item",children:[Object(o.jsx)("strong",{children:"Director:"}),c.Director]}),Object(o.jsxs)("li",{className:"list-group-item",children:[Object(o.jsx)("strong",{children:"Writer:"}),c.Writer]}),Object(o.jsxs)("li",{className:"list-group-item",children:[Object(o.jsx)("strong",{children:"Actors:"}),c.Actors]})]})]})]}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"card card-body bg-dark my-5 text-light",children:Object(o.jsxs)("div",{className:"col-md-12",children:[Object(o.jsx)("h3",{children:"About"}),c.Plot,Object(o.jsx)("hr",{}),Object(o.jsx)(a.b,{to:"https://www.imdb.com/title/' +movie.imdbID",target:"_blank",className:"btn btn-primary",rel:"noopener noreferrer",children:"View on IMDB"}),Object(o.jsx)(a.b,{to:"/",className:"btn btn-default text-light",children:"Go Back to Search"})]})})})]}),n=t?Object(o.jsx)(C,{}):i;return Object(o.jsx)("div",{className:"container",children:n})}}]),c}(i.Component),V=Object(y.b)((function(e){return{loading:e.movies.loading,movie:e.movies.movie}}),{fetchMovie:function(e){return function(t){g.a.get("https://www.omdbapi.com/?apikey=".concat(f,"&i=").concat(e)).then((function(e){return t({type:x,payload:e.data})})).catch((function(e){console.log(e)}))}},setLoading:N})(H);var _=function(){return Object(o.jsx)(y.a,{store:B,children:Object(o.jsx)(a.a,{children:Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)(l,{}),Object(o.jsxs)(G.c,{children:[Object(o.jsx)(G.a,{exact:!0,path:"/",component:I}),Object(o.jsx)(G.a,{exact:!0,path:"/movie/:id",component:V})]}),Object(o.jsx)(j,{})]})})})},W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,66)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),i(e),n(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(_,{})}),document.getElementById("root")),W()}},[[65,1,2]]]);
//# sourceMappingURL=main.0da54368.chunk.js.map