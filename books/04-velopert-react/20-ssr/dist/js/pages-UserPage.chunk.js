"use strict";exports.id=333,exports.ids=[333],exports.modules={685:(e,r,s)=>{s.r(r),s.d(r,{default:()=>l});var n=s(689),u=s(308),t=s(22),i=s(997);const c=function(e){var r=e.user,s=r.email,n=r.name,u=r.username;return(0,i.jsxs)("div",{children:[(0,i.jsxs)("h1",{children:[u," (",n,")"]}),(0,i.jsxs)("p",{children:[(0,i.jsx)("b",{children:"e-mail:"})," ",s]})]})};var a=s(701),d=s(312);const o=function(e){var r=e.id,s=(0,t.useSelector)((function(e){return e.users.user})),u=(0,t.useDispatch)();return(0,a.lm)((function(){return u((0,d.PR)(r))})),(0,n.useEffect)((function(){s&&s.id===parseInt(r,10)||u((0,d.PR)(r))})),s?(0,i.jsx)(c,{user:s}):null},l=function(){var e=(0,u.useParams)().id;return(0,i.jsx)(o,{id:e})}}};