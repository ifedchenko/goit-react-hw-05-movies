"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[792],{1812:function(e,t,n){n.d(t,{Z:function(){return m}});n(2791);var r=n(7689),a=n(1087),s=n(7621),c=n(9504),o=n(2169),i=n(1123),u="MoviesList_trendingMovieItem__utfjt",h="MoviesList_trendingMovieList__gJX6Y",l=n(184),m=function(e){var t=e.movies,n=(0,r.TH)();return(0,l.jsx)("ul",{className:h,children:null===t||void 0===t?void 0:t.map((function(e){return(0,l.jsx)("li",{className:u,children:(0,l.jsx)(a.rU,{to:"/movies/".concat(e.id),state:{from:n},children:(0,l.jsxs)(s.Z,{sx:{width:200},children:[(0,l.jsx)(o.Z,{sx:{height:300},image:"https://image.tmdb.org/t/p/w200/".concat(e.poster_path),title:e.title}),(0,l.jsx)(c.Z,{sx:{height:30},children:(0,l.jsx)(i.Z,{sx:{fontSize:14},component:"div",children:e.title})})]})})},e.id)}))})}},792:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(5861),a=n(9439),s=n(4687),c=n.n(s),o=n(2791),i=n(1087),u=n(7689),h=n(1243),l=function(e){return h.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=").concat("77cc72e96f7fab7310e90a268c6bf448")).then((function(e){return e.data}))},m=n(1812),f={searchForm:"SearchBar_searchForm__V6XO6",searchInput:"SearchBar_searchInput__S8ff+",searchButton:"SearchBar_searchButton__hgPYE"},p=n(184),v=function(e){var t=e.onSubmit,n=(0,u.TH)(),r=(0,o.useState)(""),s=(0,a.Z)(r,2),c=s[0],i=s[1];(0,o.useEffect)((function(){var e=new URLSearchParams(n.search).get("query");e&&i(e)}),[n]);return(0,p.jsx)("div",{className:f.searchBar,children:(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==c.trim()?t(c):alert("Enter movie name")},className:f.searchForm,children:[(0,p.jsx)("input",{type:"text",name:"searchQuery",value:c,autoComplete:"off",autoFocus:!0,placeholder:"Enter movie name",onChange:function(e){i(e.target.value.toLowerCase())},className:f.searchInput}),(0,p.jsx)("button",{type:"submit",className:f.searchButton,children:"Search"})]})})},d=function(){var e=(0,i.lr)(),t=(0,a.Z)(e,2),n=t[0],s=t[1],h=(0,o.useState)(null),f=(0,a.Z)(h,2),d=f[0],x=f[1],g=(0,o.useState)(""),_=(0,a.Z)(g,2),j=_[0],S=_[1],Z=(0,o.useState)(!1),b=(0,a.Z)(Z,2),w=b[0],y=b[1],k=(0,u.TH)(),N=n.get("query");return(0,o.useEffect)((function(){function e(){return(e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y(!0),e.next=4,l(N);case 4:(t=e.sent).results.length||j("No movies found!"),x(t.results),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),S("Ooops. Something went wrong..."),console.log(e.t0);case 13:return e.prev=13,y(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})))).apply(this,arguments)}N&&null!==n&&function(){e.apply(this,arguments)}()}),[j,n,N]),(0,p.jsxs)("div",{className:"moviesPage",children:[(0,p.jsx)("h1",{children:"Movies search"}),w&&!j&&"Loading ...",j&&(0,p.jsx)("div",{children:j}),(0,p.jsx)(v,{onSubmit:function(e){s({query:"".concat(e)})}}),d&&(0,p.jsx)(m.Z,{movies:d,prevLocation:k})]})}}}]);
//# sourceMappingURL=792.9814138c.chunk.js.map