(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{225:function(t,e,n){t.exports=function(){"use strict";function t(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)t[e]=source[e]}return t}function e(n,r){function o(e,o,c){if("undefined"!=typeof document){"number"==typeof(c=t({},r,c)).expires&&(c.expires=new Date(Date.now()+864e5*c.expires)),c.expires&&(c.expires=c.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var l="";for(var v in c)c[v]&&(l+="; "+v,!0!==c[v]&&(l+="="+c[v].split(";")[0]));return document.cookie=e+"="+n.write(o,e)+l}}function c(t){if("undefined"!=typeof document&&(!arguments.length||t)){for(var e=document.cookie?document.cookie.split("; "):[],r={},i=0;i<e.length;i++){var o=e[i].split("="),c=o.slice(1).join("=");try{var l=decodeURIComponent(o[0]);if(r[l]=n.read(c,l),t===l)break}catch(t){}}return t?r[t]:r}}return Object.create({set:o,get:c,remove:function(e,n){o(e,"",t({},n,{expires:-1}))},withAttributes:function(n){return e(this.converter,t({},this.attributes,n))},withConverter:function(n){return e(t({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(n)}})}return e({read:function(t){return'"'===t[0]&&(t=t.slice(1,-1)),t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(t){return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}()},286:function(t,e,n){"use strict";n.r(e);var r=n(225),o=n.n(r),c={name:"AccountOverview",data:function(){return{userData:[],overviewData:[]}},methods:{loadUser:function(){var t=o.a.get("star_air_login")?JSON.parse(o.a.get("star_air_login")):"";this.userData=t,this.loadData()},loadData:function(){var t=this,e=new FormData;e.append("member_email",this.userData.email),e.append("token",this.$config.myToken),this.$axios.$post("/member/get-member-points",e).then((function(e){t.overviewData=e.result})).catch((function(t){console.log(t)}))}},mounted:function(){this.loadUser()}},l=n(34),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"w-full pb-0 mb-6 border rounded-xl text-grayscale-500"},[t._m(0),t._v(" "),n("div",{staticClass:"p-6 overflow-hidden"},[n("div",{staticClass:"flex mb-4"},[n("div",{staticClass:"flex-1 text-lg font-semibold font-noto-sans text-grayscale-900"},[t._v("Points Latest Activities")]),t._v(" "),t._e()]),t._v(" "),n("div",{staticClass:"\n          mt-6\n          md:px-0 md:-mx-0\n          px-6\n          -mx-6\n          md:w-full\n          w-[100vw]\n          overflow-auto\n        "},[n("table",{staticClass:"table-auto md:w-full custom-table w-[1200px]"},[t._m(1),t._v(" "),n("tbody",t._l(t.overviewData,(function(data,e){return n("tr",{key:e},[n("td",[t._v(t._s(data.entry_date))]),t._v(" "),n("td",[t._v(t._s(data.action))]),t._v(" "),n("td",[t._v(t._s(data.points))])])})),0),t._v(" "),t._m(2)])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-6 border-b"},[n("div",{staticClass:"flex"},[n("div",{staticClass:"text-lg font-semibold font-noto-sans text-grayscale-900"},[t._v("Overview")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Date")]),t._v(" "),n("th",[t._v("Type")]),t._v(" "),n("th",[t._v("Star Points")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tfoot",[n("tr",[n("th",{attrs:{colspan:"3"}},[t._v(" ")])])])}],!1,null,null,null);e.default=component.exports}}]);