exports.ids=[4],exports.modules={24:function(e,s,t){"use strict";t.r(s);var r=t(3),n=t(15),c=t(2),u=t(0),j=function(e){var s=e.users;return s?Object(u.jsx)("div",{children:Object(u.jsx)("ul",{children:s.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)(c.Link,{to:"/users/".concat(e.id),children:e.username})},e.id)}))})}):null},i=t(10),l=t(16),o=Object(n.connect)((function(e){return{users:e.users.users}}),{getUsers:i.c})((function(e){var s=e.users,t=e.getUsers;return Object(r.useEffect)((function(){s||t()}),[s,t]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(j,{users:s}),Object(u.jsx)(l.a,{resolve:t})]})}));s.default=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(o,{}),Object(u.jsx)(c.Outlet,{})]})}}};