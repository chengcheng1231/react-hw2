(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(6),c=a.n(n),s=(a(11),a(2)),i=(a(5),a(4)),l=a(0);function u(e){var t,a=e.squareData,r=e.squarePosition,n=e.handleChessData;if("black"===a)var c="square-black-circle";else if("white"===a)c="square-white-circle";return Object(l.jsxs)("div",(t={className:"square",onClick:function(){return console.log(a,r)}},Object(i.a)(t,"onClick",(function(){n(r)})),Object(i.a)(t,"children",[Object(l.jsx)("div",{className:c}),Object(l.jsx)("div",{className:"square-column"})]),t))}function o(){var e=Object(r.useState)(Array(19).fill(Array(19).fill(null))),t=Object(s.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(!0),i=Object(s.a)(c,2),o=i[0],f=i[1],b=Object(r.useState)("Next player is: black"),j=Object(s.a)(b,2),h=j[0],O=j[1];var d=function(e){if("W"!==h[0]&&!a[e[0]][e[1]]){var t=JSON.parse(JSON.stringify(a)),r=o?"black":"white";t[e[0]][e[1]]=r,n(t),f(!o);var c=o?"white":"black";v(t,e)?O("Winner is: ".concat(v(t,e))):O("Next player is: ".concat(c))}};function v(e,t){for(var a=Object(s.a)(t,2),r=a[0],n=a[1],c=r-4;c<=r;c++)if(!(c<0||c>14)&&e[c][n]===e[c+1][n]&&e[c+1][n]===e[c+2][n]&&e[c+2][n]===e[c+3][n]&&e[c+3][n]===e[c+4][n]&&e[c+4][n]===e[c][n])return e[c][n];for(c=n-4;c<=n;c++)if(!(c<0||c>14)&&e[r][c]===e[r][c+1]&&e[r][c+1]===e[r][c+2]&&e[r][c+2]===e[r][c+3]&&e[r][c+3]===e[r][c+4]&&e[r][c+4]===e[r][c])return e[r][c];var i=0;for(c=r+4;c>=r;c--)if(c>18||c-4<0||n-4+i<0||n-4+i+4>18)i+=1;else{if(e[c][n-4+i]===e[c-1][n-4+i+1]&&e[c-1][n-4+i+1]===e[c-2][n-4+i+2]&&e[c-2][n-4+i+2]===e[c-3][n-4+i+3]&&e[c-3][n-4+i+3]===e[c-4][n-4+i+4]&&e[c-4][n-4+i+4]===e[c][n-4+i])return e[c][n-4+i];i+=1}var l=0;for(c=r-4;c<=r;c++)if(c+4>18||c<0||n-4+l<0||n-4+l+4>18)l+=1;else{if(e[c][n-4+l]===e[c+1][n-4+l+1]&&e[c+1][n-4+l+1]===e[c+2][n-4+l+2]&&e[c+2][n-4+l+2]===e[c+3][n-4+l+3]&&e[c+3][n-4+l+3]===e[c+4][n-4+l+4]&&e[c+4][n-4+l+4]===e[c][n-4+l])return e[c][n-4+l];l+=1}return null}return Object(l.jsxs)("div",{className:"board-section",children:[Object(l.jsxs)("div",{className:"status",children:["Welcome! ",h]}),Object(l.jsx)("button",{className:"reset-btn",onClick:function(){n(Array(19).fill(Array(19).fill(null))),f(!0),O("Next player is: black")},children:"Reset the game"}),function(){for(var e=[],t=0;t<=18;t++){for(var r=[],n=0;n<=18;n++)r.push(Object(l.jsx)(u,{squarePosition:[t,n],squareData:a[t][n],handleChessData:d},[t,n]));e.push(Object(l.jsx)("div",{className:"board-row",children:r}))}return e}()]})}var f=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(o,{})})},b=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))};c.a.render(Object(l.jsx)(f,{}),document.getElementById("root")),b()},5:function(e,t,a){}},[[13,1,2]]]);
//# sourceMappingURL=main.4a46dbbb.chunk.js.map