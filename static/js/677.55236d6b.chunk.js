"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[677],{2677:function(e,t,i){i.r(t),i.d(t,{default:function(){return v}});var n=i(9439),s=i(2791),a=i(1922),l=i(7689),o=i(1087),c={backButton:"MovieDetails_backButton__ilGfB",link:"MovieDetails_link__wf74g",movieDetails:"MovieDetails_movieDetails__EqwEX",links:"MovieDetails_links__WB7Lu"},r=i(3535),d=i(1243),u=function(e){return d.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat("77cc72e96f7fab7310e90a268c6bf448")).then((function(e){return e.data}))},h=i(184),v=function(){var e=(0,s.useState)(null),t=(0,n.Z)(e,2),i=t[0],d=t[1],v=(0,s.useState)(null),m=(0,n.Z)(v,2),f=m[0],p=m[1],j=(0,s.useState)(!1),x=(0,n.Z)(j,2),_=x[0],g=x[1],k=(0,l.UO)().movieId,w=(0,l.TH)(),b=(0,l.s0)();(0,s.useEffect)((function(){g(!0),u(k).then((function(e){d(e)})).catch((function(e){p("Ooops. Something went wrong..."),console.log(e)})).finally((function(){return g(!1)}))}),[k]);return(0,h.jsxs)("div",{className:c.movieDetails,children:[(0,h.jsx)(a.Z,{variant:"outlined",onClick:function(){var e,t;return b(null!==(e=null===w||void 0===w||null===(t=w.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/")},size:"large",sx:{marginTop:2.5,marginBottom:2.5},children:"Go back"}),_&&(0,h.jsx)("div",{children:"Loading ..."}),f?(0,h.jsx)("div",{children:f}):null,i&&(0,h.jsxs)("div",{children:[i.poster_path?(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(i.poster_path),alt:i.title}):(0,h.jsx)("img",{src:r,width:"200",alt:"File not found"}),(0,h.jsx)("h3",{children:i.title}),(0,h.jsxs)("p",{children:["(",i?new Date(i.release_date).getFullYear():null,")"]}),(0,h.jsxs)("p",{children:["User Score: ",Math.round(i.popularity),"%"]}),(0,h.jsxs)("div",{className:c.movieOverview,children:[(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsx)("p",{children:i.overview})]})]}),i&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("hr",{}),(0,h.jsxs)("div",{className:c.links,children:[(0,h.jsx)(o.OL,{className:c.link,to:"/movies/".concat(k,"/reviews"),style:function(e){return e?{color:"#0C2E56"}:void 0},state:w.state,children:(0,h.jsx)("p",{className:c.reviews,children:"Reviews"})}),(0,h.jsx)(o.OL,{className:c.link,to:"/movies/".concat(k,"/cast"),style:function(e){return e?{color:"#0C2E56"}:void 0},state:w.state,children:(0,h.jsx)("p",{className:c.cast,children:"Cast"})}),(0,h.jsx)("hr",{})]})]}),(0,h.jsx)(s.Suspense,{fallback:(0,h.jsx)("div",{children:"Loading..."}),children:(0,h.jsx)(l.j3,{})})]})}},3535:function(e,t,i){e.exports=i.p+"static/media/image-not-found.3717584c8c962ee91b9d.jpeg"}}]);
//# sourceMappingURL=677.55236d6b.chunk.js.map