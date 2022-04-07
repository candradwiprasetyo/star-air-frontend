(window.webpackJsonp=window.webpackJsonp||[]).push([[5,13,20,27],{171:function(e,t,r){"use strict";r.r(t);var l={name:"Input",props:{label:{type:String,required:!0},value:{type:String,required:!1,default:""},placeholder:{type:String,required:!1,default:""},border:{type:String,required:!1,default:"rounded-lg border"},customClass:{type:String,required:!1}}},n=r(28),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"px-3 py-2",class:[e.border,e.customClass]},[r("div",{staticClass:"mb-1 text-xs text-grayscale-400"},[e._v(e._s(e.label))]),e._v(" "),r("input",{staticClass:"w-full border-none outline-none",attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.value}})])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Input:r(171).default})},172:function(e,t,r){"use strict";r.r(t);var l={name:"Button",props:{value:{type:String,required:!0},color:{type:String,required:!1,default:"text-white"},background:{type:String,required:!1,default:"bg-primary-600"},border:{type:String,required:!1,default:"border-2 border-primary-600"},customClass:{type:String,required:!1,default:"w-full"}}},n=r(28),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"px-6 py-4 font-medium text-center rounded-lg cursor-pointer",class:[e.color,e.background,e.border,e.customClass]},[e._v("\n  "+e._s(e.value)+"\n")])}),[],!1,null,null,null);t.default=component.exports},174:function(e,t,r){"use strict";r.r(t);var l={name:"Select",props:{label:{type:String,required:!0},placeholder:{type:String,required:!1,default:""},border:{type:String,required:!1,default:"rounded-lg border"},customClass:{type:String,required:!1}}},n=r(28),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"h-full px-3 py-2",class:[e.border,e.customClass]},[r("div",{staticClass:"mb-1 text-xs text-grayscale-400"},[e._v(e._s(e.label))]),e._v(" "),r("select",{staticClass:"w-full border-none outline-none"})])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Select:r(174).default})},241:function(e,t,r){"use strict";r.r(t);var l={name:"AccountEditEmail",methods:{}},n=r(28),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"w-full pb-0 mb-6 overflow-hidden border rounded-xl text-grayscale-500"},[e._m(0),e._v(" "),r("div",{staticClass:"p-6 overflow-hidden"},[r("Input",{attrs:{label:"Email Address"}}),e._v(" "),r("div",{staticClass:"flex mt-6"},[r("div",{staticClass:"flex-none w-16"},[r("Select",{attrs:{label:" ",border:"border rounded-l-lg"}})],1),e._v(" "),r("div",{staticClass:"flex-grow"},[r("Input",{attrs:{label:"Phone",border:"border rounded-r-lg"}})],1)]),e._v(" "),r("div",{staticClass:"mt-10 md:inline-block"},[r("Button",{attrs:{value:"Submit Change"}})],1)],1)])])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"p-6 border-b"},[r("div",{staticClass:"flex"},[r("div",{staticClass:"text-lg font-semibold font-noto-sans text-grayscale-900"},[r("span",{staticClass:"text-secondary-900"},[e._v("User Profile")]),e._v(" / Change Email & Phone Number")])])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{Input:r(171).default,Select:r(174).default,Button:r(172).default})}}]);