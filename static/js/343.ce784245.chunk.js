"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[343],{877:function(e,n,t){t.d(n,{C:function(){return l}});var r=t(861),i=t(757),c=t.n(i),a=t(243),s="56dd70469223270b37ebfbc5f203adb4",o="https://api.themoviedb.org/3/",l=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,i=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>1&&void 0!==i[1]?i[1]:{},e.next=3,a.Z.get("".concat(o).concat(n,"?api_key=").concat(s),{params:t});case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},343:function(e,n,t){t.r(n),t.d(n,{default:function(){return M}});var r,i,c,a,s,o,l,d,u=t(861),h=t(439),p=t(757),f=t.n(p),x=t(877),v=t(791),b=t(689),g=t(168),m=t(444),j=t(87),Z=(0,m.ZP)(j.rU)(r||(r=(0,g.Z)(["\n  display: inline-block;\n  margin: 10px 0;\n  padding: 8px 16px;\n  text-decoration: none;\n  font-weight: 500;\n  color: #144470;\n  background-color: #c4c4c4;\n"]))),w=t(184),k=function(){var e=(0,b.TH)(),n=(0,v.useState)(""),t=(0,h.Z)(n,2),r=t[0],i=t[1];return(0,v.useEffect)((function(){var n,t;i(null!==(n=null===(t=e.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/")}),[]),(0,w.jsx)("div",{children:(0,w.jsx)(Z,{to:r,children:" Go Back "})})},y=t(83),_=m.ZP.div(i||(i=(0,g.Z)(["\n  display: flex;\n  border-bottom: 1px solid #b3b3b3;\n"]))),P=m.ZP.h1(c||(c=(0,g.Z)(["\n  margin-left: 20px;\n  font-weight: 500;\n"]))),S=m.ZP.div(a||(a=(0,g.Z)(["\n  margin-right: 20px;\n"]))),C=m.ZP.div(s||(s=(0,g.Z)(["\n  //margin-left: 20px;\n  //font-weight: 500;\n"]))),I=m.ZP.div(o||(o=(0,g.Z)(["\n  border-bottom: 1px solid #b3b3b3;\n"]))),O=m.ZP.ul(l||(l=(0,g.Z)(["\n  display: flex;\n"]))),E=m.ZP.li(d||(d=(0,g.Z)(["\n  list-style-type: none;\n  &:not(:last-child) {\n    margin-right: 10px;\n  }\n"]))),F=function(e){var n=e.detailsMovie,t=(0,v.useState)(""),r=(0,h.Z)(t,2),i=r[0],c=r[1],a=(0,v.useState)(""),s=(0,h.Z)(a,2),o=s[0],l=s[1];return(0,v.useEffect)((function(){c(y.b.tmdbImageSrv),l(y.b.noImage)}),[]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(_,{children:[(0,w.jsx)(S,{children:(0,w.jsx)("img",{src:n.poster_path?"".concat(i,"w300").concat(n.poster_path):o,alt:n.original_title,width:"300px"})}),(0,w.jsxs)(C,{children:[(0,w.jsx)(P,{children:" ".concat(n.original_title," (").concat(new Date(n.release_date).getFullYear(),")")}),(0,w.jsxs)("p",{children:["User score: ",Math.trunc(10*n.vote_average),"%"]}),(0,w.jsx)("h2",{children:"Overview"}),(0,w.jsx)("p",{children:n.overview}),(0,w.jsxs)("div",{children:[(0,w.jsx)("h2",{children:"Genres"}),(0,w.jsx)(O,{children:n.genres.map((function(e){return(0,w.jsx)(E,{children:e.name},e.id)}))})]})]})]}),(0,w.jsxs)(I,{children:[(0,w.jsx)("h2",{children:"Additional information"}),(0,w.jsxs)("ul",{children:[(0,w.jsx)("li",{children:(0,w.jsx)(j.OL,{to:"cast",replace:!0,children:"Cast"})}),(0,w.jsx)("li",{children:(0,w.jsx)(j.OL,{to:"reviews",replace:!0,children:"Reviews"})})]})]}),(0,w.jsx)(b.j3,{})]})},M=function(){var e=(0,b.UO)().movieId,n=(0,v.useState)(""),t=(0,h.Z)(n,2),r=t[0],i=t[1],c=(0,v.useState)(!1),a=(0,h.Z)(c,2),s=a[0],o=a[1],l=function(){var n=(0,u.Z)(f().mark((function n(){var t,r,c;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="movie/".concat(e),n.next=3,(0,x.C)(t);case 3:r=n.sent,c=r.data,i(c),o(!0);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,v.useEffect)((function(){l()}),[]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(k,{}),s&&(0,w.jsx)(F,{detailsMovie:r,isReplied:s})]})}},83:function(e,n,t){t.d(n,{b:function(){return r}});var r={tmdbImageSrv:"https://image.tmdb.org/t/p/",noImage:"https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"}}}]);
//# sourceMappingURL=343.ce784245.chunk.js.map