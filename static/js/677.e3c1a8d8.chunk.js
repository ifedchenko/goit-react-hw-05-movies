"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[677],{677:function(e,t,i){i.r(t),i.d(t,{default:function(){return h}});var n=i(439),s=i(791),l=i(689),a=i(87),c={backButton:"MovieDetails_backButton__ilGfB",link:"MovieDetails_link__wf74g",movieDetails:"MovieDetails_movieDetails__EqwEX",links:"MovieDetails_links__WB7Lu"},o=i(535),r=i(243),u=function(e){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat("77cc72e96f7fab7310e90a268c6bf448")).then((function(e){return e.data}))},d=i(184),h=function(){var e=(0,s.useState)(null),t=(0,n.Z)(e,2),i=t[0],r=t[1],h=(0,s.useState)(null),v=(0,n.Z)(h,2),m=v[0],f=v[1],j=(0,s.useState)(!1),p=(0,n.Z)(j,2),x=p[0],k=p[1],_=(0,l.UO)().movieId,w=(0,l.TH)(),g=(0,l.s0)();(0,s.useEffect)((function(){k(!0),u(_).then((function(e){r(e)})).catch((function(e){f("Ooops. Something went wrong..."),console.log(e)})).finally((function(){return k(!1)}))}),[_]);return(0,d.jsxs)("div",{className:c.movieDetails,children:[(0,d.jsx)("button",{onClick:function(){var e,t;return g(null!==(e=null===w||void 0===w||null===(t=w.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/")},className:c.backButton,children:"Go back"}),x&&(0,d.jsx)("div",{children:"Loading ..."}),m?(0,d.jsx)("div",{children:m}):null,i&&(0,d.jsxs)("div",{children:[i.poster_path?(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(i.poster_path),alt:i.title}):(0,d.jsx)("img",{src:o,width:"200",alt:"File not found"}),(0,d.jsx)("h3",{children:i.title}),(0,d.jsxs)("p",{children:["(",i?new Date(i.release_date).getFullYear():null,")"]}),(0,d.jsxs)("p",{children:["User Score: ",Math.round(i.popularity),"%"]}),(0,d.jsxs)("div",{className:c.movieOverview,children:[(0,d.jsx)("h3",{children:"Overview"}),(0,d.jsx)("p",{children:i.overview})]})]}),i&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("hr",{}),(0,d.jsxs)("div",{className:c.links,children:[(0,d.jsx)(a.OL,{className:c.link,to:"/movies/".concat(_,"/reviews"),style:function(e){return e?{color:"#0C2E56"}:void 0},state:w.state,children:(0,d.jsx)("p",{className:c.reviews,children:"Reviews"})}),(0,d.jsx)(a.OL,{className:c.link,to:"/movies/".concat(_,"/cast"),style:function(e){return e?{color:"#0C2E56"}:void 0},state:w.state,children:(0,d.jsx)("p",{className:c.cast,children:"Cast"})}),(0,d.jsx)("hr",{})]})]}),(0,d.jsx)(s.Suspense,{fallback:(0,d.jsx)("div",{children:"Loading..."}),children:(0,d.jsx)(l.j3,{})})]})}},535:function(e,t,i){e.exports=i.p+"static/media/image-not-found.3717584c8c962ee91b9d.jpeg"}}]);
//# sourceMappingURL=677.e3c1a8d8.chunk.js.map