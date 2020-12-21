(this.webpackJsonphw2=this.webpackJsonphw2||[]).push([[0],{39:function(n,e,t){},40:function(n,e,t){"use strict";t.r(e);var r=t(1),i=t(23),a=t.n(i),c=t(10),o=t(2),u=t(17),s=t(9),l=t(0),d=t(24),f=t.n(d);function b(){f()(document.getElementById("canva")).then((function(n){document.body.appendChild(n)})).then((function(){var n=document.querySelector("canvas");n.style.display="none";var e=n.toDataURL("image/png").replace("image/png","image/octet-stream"),t=document.createElement("a");t.setAttribute("download","GobangRecord.png"),t.setAttribute("href",e),t.click()}))}var h=t(4),p=t(5);function j(){var n=Object(h.a)(["\n  display: flex;\n  align-items: center;\n"]);return j=function(){return n},n}function x(){var n=Object(h.a)(["\n  margin: 0 30px;\n\n  h4 {\n    font-size: 24px;\n    margin-bottom: 10px;\n  }\n"]);return x=function(){return n},n}function g(){var n=Object(h.a)(["\n  margin-bottom: 3px;\n  border: none;\n  border-radius: 4px;\n  padding: 5px 8px;\n  background: ",";\n\n  &:focus {\n    outline: none;\n    background: gold;\n  }\n"]);return g=function(){return n},n}function v(){var n=Object(h.a)(["\n  background: #fff;\n  border: 1px solid #999;\n  float: left;\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 50px;\n  margin-right: -1px;\n  margin-top: -1px;\n  padding: 0;\n  text-align: center;\n  color: ",";\n  width: ",";\n  height: ",";\n  &:focus {\n    outline: none;\n    background: #fafafa;\n  }\n"]);return v=function(){return n},n}var O=p.a.button(v(),(function(n){return"O"===n.children?"red":"#1A1AF7"}),(function(n){return n.size}),(function(n){return n.size})),m=p.a.button(g(),(function(n){return n.isCurrent?"gold":"#e5d8b1"})),w=function(n){var e=n.size,t=n.index,i=n.value,a=n.handleClick;return Object(r.jsx)(O,{size:e,current:!1,onClick:function(){a(t)},children:i})},y=p.a.div(x()),k=p.a.div(j()),z=function(n){var e=n.isCurrent,t=n.index,i=n.handleStepNum,a=n.record,c=t?"Go to move ".concat(t," (").concat(a.row,", ").concat(a.col,")"):"Start game";return Object(r.jsx)("li",{children:Object(r.jsx)(m,{isCurrent:e,onClick:function(){i(t)},children:c})})};function C(n){for(var e=n.size,t=n.num,i=n.squares,a=n.handleSquare,c=[],o=0;o<t;o+=1){for(var u=[],s=0;s<t;s+=1){var l=s+t*o;u.push(Object(r.jsx)(w,{size:e,handleClick:a,index:l,value:i[l]},l))}c.push(Object(r.jsx)("div",{children:u}))}return c}var S="@media (max-width: 1050px)",q="56px",A="24px";var E=function(){var n=Object(l.useState)([{squares:Array(9).fill(null),row:null,col:null}]),e=Object(s.a)(n,2),t=e[0],i=e[1],a=Object(l.useState)(0),c=Object(s.a)(a,2),o=c[0],d=c[1],f=Object(l.useState)(!0),b=Object(s.a)(f,2),h=b[0],p=b[1],j=t[o].squares,x=function(n){for(var e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<e.length;t++){var r=Object(s.a)(e[t],3),i=r[0],a=r[1],c=r[2];if(n[i]&&n[i]===n[a]&&n[i]===n[c])return n[i]}return null}(j),g="";g=x?"Winnder: "+x:x||9!==o?"Next player: "+(h?"O":"X"):"Equal!";var v=function(n){d(n),p(!(n%2))};return Object(r.jsxs)(k,{children:[Object(r.jsx)("div",{children:Object(r.jsx)(C,{size:q,num:3,squares:j,handleSquare:function(n){if(!x&&!j[n]){var e=t.slice(0,o+1),r=e[e.length-1].squares.slice();r[n]=h?"O":"X",i([].concat(Object(u.a)(e),[{squares:r,row:parseInt(n/3),col:n%3}])),p(!h),d(e.length)}}})}),Object(r.jsxs)(y,{children:[Object(r.jsx)("h4",{children:g}),Object(r.jsx)("ol",{children:t.map((function(n,e){return Object(r.jsx)(z,{index:e,isCurrent:e===o,record:n,handleStepNum:v},e)}))})]})]})};function N(){var n=Object(h.a)(["\n  margin: 10px;\n  border: 1.5px solid #d2bb78;\n  border-radius: 2px;\n  padding: 4px 8px;\n  color: #444;\n  cursor: pointer;\n  transition: 0.2s all ease-in;\n\n  &:hover {\n    background: #e5d8b1;\n  }\n  &:focus {\n    outline: none;\n  }\n"]);return N=function(){return n},n}function I(){var n=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5px;\n"]);return I=function(){return n},n}function T(){var n=Object(h.a)(["\n  padding: 10px;\n  h4 {\n    font-size: 24px;\n  }\n"]);return T=function(){return n},n}function G(){var n=Object(h.a)(["\n  position: relative;\n\n  h4 {\n    font-size: 16px;\n    margin: 10px 0;\n  }\n\n  ol {\n    position: absolute;\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n\n    ul {\n      margin: 5px;\n    }\n  }\n"]);return G=function(){return n},n}function R(){var n=Object(h.a)(["\n  margin-bottom: 3px;\n  border: none;\n  border-radius: 4px;\n  padding: 5px 8px;\n  background: ",";\n\n  &:focus {\n    outline: none;\n    background: gold;\n  }\n"]);return R=function(){return n},n}function B(){var n=Object(h.a)(["\n  position: relative;\n  z-index: 2;\n  border: 1px solid\n    ",";\n  ","\n  ","\n  ","\n  float: left;\n  line-height: 50px;\n  text-align: center;\n  width: ",";\n  height: ",';\n  &:focus {\n    outline: none;\n  }\n\n  &::before {\n    content: "";\n    width: ',";\n    height: ",";\n    background: #cd9b5b80;\n    position: absolute;\n    top: 0;\n    left: 0;\n    transform: translate(-50%, -50%);\n    z-index: -1;\n  }\n\n  ","\n"]);return B=function(){return n},n}var W=p.a.button(B(),(function(n){return n.row===n.num||n.col===n.num?"transparent":"#764A07"}),(function(n){return n.row===n.num&&"border-left: 1px solid #764A07;"}),(function(n){return n.col===n.num&&"border-top: 1px solid #764A07;"}),(function(n){return n.col===n.num&&n.row===n.num?"border: 1px solid transparent;":""}),(function(n){return n.size}),(function(n){return n.size}),(function(n){return n.size}),(function(n){return n.size}),(function(n){return n.value&&"&::after {\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      content: '';\n      width: 12px;\n      height: 12px;\n      border-radius: 50%;\n      transform: translate(-50%, -50%);\n      background: black;\n      ".concat("WHITE"===n.value&&"\n        border: 1px solid black;\n        background: white;\n      ","\n    }")})),H=p.a.button(R(),(function(n){return n.isCurrent?"gold":"#e5d8b1"})),D=function(n){var e=n.size,t=n.row,i=n.col,a=n.num,c=n.value,o=n.handleClick;return Object(r.jsx)(W,{size:e,value:c,row:t,col:i,num:a,current:!1,onClick:function(){o(t,i)}})},J=p.a.div(G()),F=p.a.div(T()),K=function(n){var e=n.isCurrent,t=n.index,i=n.handleStepNum,a=t?"".concat(t):"Start game";return Object(r.jsx)("ul",{children:Object(r.jsx)(H,{isCurrent:e,onClick:function(){i(t)},children:a})})};function L(n){for(var e=n.size,t=n.num,i=n.squares,a=n.handleSquare,c=[],o=0;o<t;o+=1){for(var u=[],s=0;s<t;s+=1){var l=s+t*o;u.push(Object(r.jsx)(D,{size:e,handleClick:a,row:s,col:o,num:t-1,value:i[o][s]},l))}c.push(Object(r.jsx)("div",{children:u}))}return c}var M=p.a.div(I()),X=p.a.button(N());var U=function(){var n=Object(l.useState)([{squares:Array(19).fill(Array(19).fill("")),row:null,col:null}]),e=Object(s.a)(n,2),t=e[0],i=e[1],a=Object(l.useState)(0),c=Object(s.a)(a,2),o=c[0],d=c[1],f=Object(l.useState)(!0),h=Object(s.a)(f,2),p=h[0],j=h[1],x=t[o],g=function(n){var e=n.squares,t=n.row,r=n.col;if(null!==t)for(var i=e[r][t],a=[[1,0],[0,1],[1,1],[-1,1]],c=0;c<a.length;c+=1){for(var o=0,u=Object(s.a)(a[c],2),l=u[0],d=u[1],f=0;f<2;f+=1){for(var b=l,h=d;t+l>=0&&r+d>=0&&t+l<=18&&r+d<=18&&i===e[r+d][t+l];)o+=1,l=b*(Math.abs(l)+1),d=h*(Math.abs(d)+1);l=-b,d=-h}if(o>=4)return i}return null}(t[o]),v="";v=g?"Winnder: "+g+"!":g||361!==o?"Next player: "+(p?"BLACK":"WHITE"):"Equal!";var O=function(n){d(n),j(!(n%2))};return Object(r.jsxs)(F,{id:"canva",children:[Object(r.jsx)("h4",{children:v}),Object(r.jsxs)(M,{children:[Object(r.jsx)(X,{onClick:function(){o>=1&&d(o-1)},children:"BACK"}),Object(r.jsx)(X,{onClick:function(){o<=t.length-2&&d(o+1)},children:"FORWARD"}),Object(r.jsx)(X,{onClick:b,children:"SHARE"}),Object(r.jsx)(X,{onClick:function(){d(0),i([{squares:Array(19).fill(Array(19).fill("")),row:null,col:null}])},children:"RESTART"})]}),Object(r.jsx)(L,{size:A,num:19,squares:x.squares,handleSquare:function(n,e){var r=t.slice(0,o+1),a=JSON.parse(JSON.stringify(r[r.length-1]));g||a.squares[e][n]||(a.squares[e][n]=p?"BLACK":"WHITE",a.row=n,a.col=e,i([].concat(Object(u.a)(r),[a])),j(!p),d(r.length))}}),Object(r.jsxs)(J,{children:[Object(r.jsx)("h4",{children:"Steps:"}),Object(r.jsx)("ol",{children:t.map((function(n,e){return Object(r.jsx)(K,{index:e,isCurrent:e===o,handleStepNum:O},e)}))})]})]})},P=[{name:"Tic-Tac-Toe",num:1,desc:"It's a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3\xd73 grid. The player who succeeds in placing three of their marks in a diagonal, horizontal, or vertical row is the winner. It is a solved game with a forced draw assuming best play from both players."},{name:"Gobang",num:2,desc:"Gomoku, also called Five in a Row, is an abstract strategy board game. It is traditionally played with Go pieces (black and white stones) on a Go board. Players alternate turns placing a stone of their color on an empty intersection. The winner is the first player to form an unbroken chain of five stones horizontally, vertically, or diagonally.\n  "}],Y=t.p+"static/media/left-arrow.148cb663.svg",Q=t.p+"static/media/right-arrow.f9dfb6ea.svg";function V(){var n=Object(h.a)(['\n  margin: 30px;\n  width: 50px;\n  height: 50px;\n  transition: 0.2s all ease-in;\n  cursor: pointer;\n  background-image: url("','");\n  background-size: cover;\n  &:hover {\n    transform: scale(1.2);\n  }\n']);return V=function(){return n},n}function Z(){var n=Object(h.a)(["\n  padding: 10px;\n  width: 50%;\n  color: #2e2e2e;\n\n  "," {\n    width: 90%;\n  }\n\n  h1 {\n    margin: 10px 0;\n    font-size: 56px;\n    font-weight: bold;\n  }\n\n  h2 {\n    font-size: 35px;\n    font-weight: bold;\n  }\n\n  p {\n    padding: 10px 0;\n    font-size: 18px;\n    letter-spacing: 0.1em;\n  }\n"]);return Z=function(){return n},n}function $(){var n=Object(h.a)(["\n  padding: 10px;\n  width: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  "," {\n    width: 100%;\n    justify-content: flex-start;\n  }\n"]);return $=function(){return n},n}function _(){var n=Object(h.a)(["\n  display: flex;\n  justify-content: space-between;\n  aligh-items: center;\n  position: relative;\n  margin: 10vh auto;\n  border-top: 0.5rem solid #2e2e2e;\n  padding: 10px;\n  width: 85vw;\n\n  ",' {\n    flex-direction: column-reverse;\n    align-items: flex-start;\n  }\n\n  &:before {\n    content: "DESIGNED BY MENG-HUA";\n    font-weight: bold;\n    color: #2e2e2e;\n    font-size: 16px;\n    position: absolute;\n    top: -30px;\n  }\n']);return _=function(){return n},n}function nn(){var n=Object(h.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return nn=function(){return n},n}var en=p.a.div(nn()),tn=p.a.div(_(),S),rn=p.a.div($(),S),an=p.a.div(Z(),S),cn=Object(p.a)(c.b)(V(),(function(n){return"right"===n.direction?Q:Y}));function on(n){var e=n.num,t=n.name,i=n.desc;return Object(r.jsxs)(an,{children:[Object(r.jsx)("h1",{children:"NO. "+e}),Object(r.jsx)("h2",{children:t}),Object(r.jsx)("p",{children:i})]})}var un=function(){var n,e=Object(o.f)();switch(e.pathname){case"/2":n=P[1];break;default:n=P[0]}return Object(r.jsx)(c.a,{children:Object(r.jsxs)(en,{children:[Object(r.jsx)(cn,{direction:"left",to:"/2"===e.pathname&&"/"}),Object(r.jsxs)(tn,{children:[Object(r.jsx)(rn,{children:Object(r.jsxs)(o.c,{children:[Object(r.jsx)(o.a,{exact:!0,path:"/",children:Object(r.jsx)(E,{})}),Object(r.jsx)(o.a,{exact:!0,path:"/1",children:Object(r.jsx)(E,{})}),Object(r.jsx)(o.a,{path:"/2",children:Object(r.jsx)(U,{})})]})}),Object(r.jsx)(on,{num:n.num,name:n.name,desc:n.desc})]}),Object(r.jsx)(cn,{direction:"right",to:"/2"!==e.pathname&&"/2"})]})})};t(39);a.a.render(Object(r.jsx)(c.a,{children:Object(r.jsx)(un,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.9b61a0ce.chunk.js.map