exports.ids = [15,12,16,17,18,19];
exports.modules = {

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/homepage/AdvancedSearch.vue?vue&type=template&id=37260699&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"container left-0 right-0 block mx-auto bg-white shadow-custom rounded-xl md:p-6 md:absolute md:-mt-20\">","</div>",[_vm._ssrNode("<div class=\"flex pt-4 font-semibold border-b border-gray-300 text-grayscale-400 md:pt-2\"><div"+(_vm._ssrClass("menu",_vm.activeTab == 1 ? 'border-secondary-900 border-b-6 pb-3 md:pb-6' : ''))+"><img"+(_vm._ssrAttr("src",__webpack_require__(62)))+" alt=\"Book\" class=\"inline-block\"> <span"+(_vm._ssrClass("pl-1",_vm.activeTab == 1 ? 'text-secondary-900' : ''))+">Book</span></div> <div"+(_vm._ssrClass("menu",_vm.activeTab == 2 ? 'border-secondary-900 border-b-6 pb-3 md:pb-6' : ''))+"><img"+(_vm._ssrAttr("src",__webpack_require__(64)))+" alt=\"My Trip\" class=\"inline-block\"> <span"+(_vm._ssrClass("pl-1",_vm.activeTab == 2 ? 'text-secondary-900' : ''))+">My Trip</span></div> <div"+(_vm._ssrClass("menu",_vm.activeTab == 3 ? 'border-secondary-900 border-b-6 pb-3 md:pb-6' : ''))+"><img"+(_vm._ssrAttr("src",__webpack_require__(63)))+" alt=\"Flight Info\" class=\"inline-block\"> <span"+(_vm._ssrClass("pl-1",_vm.activeTab == 3 ? 'text-secondary-900' : ''))+">Flight Info</span></div></div> "),(_vm.activeTab == 1)?_vm._ssrNode("<div class=\"p-6 md:p-0\">","</div>",[_c('HomepageTabBook')],1):(_vm.activeTab == 2)?_vm._ssrNode("<div>","</div>",[_c('HomepageTabMyTrip')],1):(_vm.activeTab == 3)?_vm._ssrNode("<div>","</div>",[_c('HomepageTabFlightInfo')],1):_vm._e()],2),_vm._ssrNode(" <div class=\"hidden md:block h-80\"></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/homepage/AdvancedSearch.vue?vue&type=template&id=37260699&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/homepage/AdvancedSearch.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AdvancedSearchvue_type_script_lang_js_ = ({
  name: "AdvancedSearch",

  data() {
    return {
      activeTab: 1
    };
  },

  methods: {
    changeTab(tab) {
      this.activeTab = tab;
    }

  }
});
// CONCATENATED MODULE: ./components/homepage/AdvancedSearch.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_AdvancedSearchvue_type_script_lang_js_ = (AdvancedSearchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/homepage/AdvancedSearch.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(87)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  homepage_AdvancedSearchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3d1721ce"
  
)

/* harmony default export */ var AdvancedSearch = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HomepageTabBook: __webpack_require__(70).default,HomepageTabMyTrip: __webpack_require__(71).default,HomepageTabFlightInfo: __webpack_require__(72).default})


/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Input.vue?vue&type=template&id=545f8668&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"px-3 py-2",class:[_vm.border, _vm.customClass]},[_vm._ssrNode("<div class=\"mb-1 text-xs text-grayscale-400\">"+_vm._ssrEscape(_vm._s(_vm.label))+"</div> <input type=\"text\""+(_vm._ssrAttr("placeholder",_vm.placeholder))+(_vm._ssrAttr("value",_vm.value))+" class=\"w-full border-none outline-none\">")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Input.vue?vue&type=template&id=545f8668&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Input.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Inputvue_type_script_lang_js_ = ({
  name: "Input",
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: false,
      default: ""
    },
    placeholder: {
      type: String,
      required: false,
      default: ""
    },
    border: {
      type: String,
      required: false,
      default: "rounded-lg border"
    },
    customClass: {
      type: String,
      required: false
    }
  }
});
// CONCATENATED MODULE: ./components/Input.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Inputvue_type_script_lang_js_ = (Inputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Input.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Inputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "21a78c26"
  
)

/* harmony default export */ var Input = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Input: __webpack_require__(28).default})


/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Button.vue?vue&type=template&id=eaeccbfa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"px-6 py-4 font-medium text-center rounded-lg cursor-pointer",class:[_vm.color, _vm.background, _vm.border, _vm.customClass]},[_vm._ssrNode(_vm._ssrEscape("\n  "+_vm._s(_vm.value)+"\n"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Button.vue?vue&type=template&id=eaeccbfa&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Button.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Buttonvue_type_script_lang_js_ = ({
  name: "Button",
  props: {
    value: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: false,
      default: "text-white"
    },
    background: {
      type: String,
      required: false,
      default: "bg-primary-600"
    },
    border: {
      type: String,
      required: false,
      default: "border-2 border-primary-600"
    },
    customClass: {
      type: String,
      required: false,
      default: "w-full"
    }
  }
});
// CONCATENATED MODULE: ./components/Button.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Buttonvue_type_script_lang_js_ = (Buttonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Button.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Buttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "889944c2"
  
)

/* harmony default export */ var Button = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/flip-button-mobile.01b06a6.svg";

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/flip-button.42f5fc9.svg";

/***/ }),

/***/ 62:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuMzQzMjYgMTguMDA0NkM0LjM0MzI2IDE3LjQ1MjMgNC43OTA5OCAxNy4wMDQ2IDUuMzQzMjYgMTcuMDA0NkgxOS4zMTk1QzE5Ljg3MTcgMTcuMDA0NiAyMC4zMTk1IDE3LjQ1MjMgMjAuMzE5NSAxOC4wMDQ2QzIwLjMxOTUgMTguNTU2OSAxOS44NzE3IDE5LjAwNDYgMTkuMzE5NSAxOS4wMDQ2SDUuMzQzMjZDNC43OTA5OCAxOS4wMDQ2IDQuMzQzMjYgMTguNTU2OSA0LjM0MzI2IDE4LjAwNDZaIiBmaWxsPSIjMjI0Q0ExIi8+CjxwYXRoIGQ9Ik0xMS4zNjg0IDcuMDA0OTNMMTQuNTY4NyA5LjEyMjc3TDE2LjkyNDggNy42NzkxQzE3LjY5NTQgNy4yMDY5MSAxOC42OTggNy4zOTEyNSAxOS4yNTAyIDguMTA2NjdDMTkuNTgxNSA4LjUzNTgxIDE5LjQ1MjUgOS4xNTkyMyAxOC45NzgxIDkuNDIxNjNMOS4zNDA3OCAxNC43NTIyQzkuMTc5MTQgMTQuODQxNiA4Ljk5NTg5IDE0Ljg4NDUgOC44MTEzNiAxNC44NzYxTDcuMjM1MDIgMTQuODA0NUM3LjE0MTk4IDE0LjgwMDIgNy4wNTE5OCAxNC43NzAxIDYuOTc1MTUgMTQuNzE3NUw0Ljc4MjU5IDEzLjIxNTVMNS45MTcwMyAxMi41NjM1QzYuMTk4MSAxMi40MDIgNi41NDAwNCAxMi4zODY3IDYuODM0MzggMTIuNTIyNkw4LjAyMDM2IDEzLjA3TDExLjQ1ODIgMTAuOTk2M0w4LjYwMjQ0IDcuOTQwNDNMMTAuMzI1IDYuOTY4MDRDMTAuNjUyMSA2Ljc4MzM3IDExLjA1NTEgNi43OTc2MiAxMS4zNjg0IDcuMDA0OTNaIiBmaWxsPSIjMjI0Q0ExIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/flight-info.15b54ac.svg";

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/my-trip.4a965be.svg";

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(88);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7772a714", content, true, context)
};

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/homepage/TabBook.vue?vue&type=template&id=1e3bbb44&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"md:mt-8 text-2xl text-grayscale-900 font-semibold font-noto-sans\">\n    Where do you want to travel?\n  </div> <div class=\"mt-2 text-grayscale-500\">\n    Redeem your Star Points with a flight ticket to your desired destination\n  </div> <div class=\"mt-6 md:flex\"><div class=\"w-full md:w-3/6 md:flex\"><div class=\"flex-1\"><div class=\"rounded-t-lg md:rounded-l-lg md:rounded-tr-none border p-3\"><div class=\"text-grayscale-400 text-2xs\">From</div> <input type=\"text\" value=\"Mumbai International Airport (MBR)\" class=\"w-full border-none outline-none\"></div></div> <div class=\"flex-1 relative\"><div class=\"h-10 w-10 absolute cursor-pointer hidden md:inline\"><img"+(_vm._ssrAttr("src",__webpack_require__(50)))+" alt=\"Flip Button\" class=\"inline-block -ml-5 mt-4\"></div> <div class=\"\n            h-10\n            w-10\n            absolute\n            cursor-pointer\n            inline\n            md:hidden\n            right-4\n            -mt-5\n          \"><img"+(_vm._ssrAttr("src",__webpack_require__(49)))+" alt=\"Flip Button\" class=\"inline-block\"></div> <div class=\"border p-3 md:pl-8 rounded-b-xl md:rounded-none\"><div class=\"text-grayscale-400 text-2xs\">To</div> <input type=\"text\" value=\"Dubai International Airport (DOH)\" class=\"w-full border-none outline-none\"></div></div></div> <div class=\"w-full md:w-2/6 mt-6 md:mt-0 flex\"><div class=\"w-1/3 md:w-1/2\"><div class=\"border p-3 rounded-l-lg md:rounded-l-none\"><div class=\"text-grayscale-400 text-2xs\">Trip</div> <input type=\"text\" value=\"Return\" class=\"w-full border-none outline-none\"></div></div> <div class=\"w-2/3 md:w-1/2\"><div class=\"border p-3 rounded-r-lg md:rounded-r-none\"><div class=\"flex\"><div class=\"flex-1\"><div class=\"text-grayscale-400 text-2xs\">Depart</div> <input type=\"text\" value=\"20 Nov 21\" class=\"w-full border-none outline-none\"></div> <div class=\"flex-1\"><div class=\"text-grayscale-400 text-2xs\">Return</div> <input type=\"text\" value=\"27 Nov 21\" class=\"w-full border-none outline-none\"></div></div></div></div></div> <div class=\"w-full md:w-1/6 mt-6 md:mt-0 flex\"><div class=\"w-full\"><div class=\"border md:rounded-r-lg p-3 rounded-lg md:rounded-none\"><div class=\"text-grayscale-400 text-2xs\">Passanger/Class</div> <input type=\"text\" value=\"1 Passanger, Economy\" class=\"w-full border-none outline-none\"></div></div></div></div> "),_vm._ssrNode("<div class=\"mt-8 md:inline-block md:float-right\">","</div>",[_c('Button',{attrs:{"value":"Search Flights","customClass":"px-6"}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/homepage/TabBook.vue?vue&type=template&id=1e3bbb44&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/homepage/TabBook.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TabBookvue_type_script_lang_js_ = ({
  name: "HomepageTabMyTrip"
});
// CONCATENATED MODULE: ./components/homepage/TabBook.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_TabBookvue_type_script_lang_js_ = (TabBookvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/homepage/TabBook.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  homepage_TabBookvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "dcad3d2c"
  
)

/* harmony default export */ var TabBook = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Input: __webpack_require__(28).default,Button: __webpack_require__(29).default})


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/homepage/TabMyTrip.vue?vue&type=template&id=0ef4a466&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"px-6 pb-6 md:px-0 md:pb-0"},[_vm._ssrNode("<div class=\"mt-8 text-2xl font-semibold text-grayscale-900 font-noto-sans\">\n    Manage your upcoming trip\n  </div> <div class=\"mt-2 text-grayscale-500\">\n    Please review this terms &amp; conditions of My Trip sections\n  </div> "),_vm._ssrNode("<div class=\"mt-6 md:flex gap-x-4\">","</div>",[_vm._ssrNode("<div class=\"flex-1\">","</div>",[_c('Input',{attrs:{"label":"Book Reference","value":"1233444554"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex-1 mt-6 md:mt-0\">","</div>",[_c('Input',{attrs:{"label":"Last Name","value":"Gauri"}})],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mt-8 md:inline-block md:float-right md:mb-0\">","</div>",[_c('NuxtLink',{attrs:{"to":"/my-trip"}},[_c('Button',{attrs:{"value":"Search Flights","customClass":"px-6"}})],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/homepage/TabMyTrip.vue?vue&type=template&id=0ef4a466&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/homepage/TabMyTrip.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TabMyTripvue_type_script_lang_js_ = ({
  name: "HomepageTabMyTrip"
});
// CONCATENATED MODULE: ./components/homepage/TabMyTrip.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_TabMyTripvue_type_script_lang_js_ = (TabMyTripvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/homepage/TabMyTrip.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  homepage_TabMyTripvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0f1fa79c"
  
)

/* harmony default export */ var TabMyTrip = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Input: __webpack_require__(28).default,Button: __webpack_require__(29).default})


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/homepage/TabFlightInfo.vue?vue&type=template&id=5ba47bc2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"p-6 md:p-0"},[_vm._ssrNode("<div class=\"text-2xl font-semibold md:mt-8 text-grayscale-900 font-noto-sans\">\n    Check flight schedule\n  </div> <div class=\"mt-2 text-grayscale-500\">Search for Star Air flight status</div> <div class=\"mt-6 md:flex\"><div class=\"w-full md:w-3/6 md:flex\"><div class=\"flex-1\"><div class=\"p-3 border rounded-t-lg md:rounded-l-lg md:rounded-tr-none\"><div class=\"text-grayscale-400 text-2xs\">From</div> <input type=\"text\" value=\"Mumbai International Airport (MBR)\" class=\"w-full border-none outline-none\"></div></div> <div class=\"relative flex-1\"><div class=\"absolute hidden w-10 h-10 cursor-pointer md:inline\"><img"+(_vm._ssrAttr("src",__webpack_require__(50)))+" alt=\"Flip Button\" class=\"inline-block mt-4 -ml-5\"></div> <div class=\"absolute inline w-10 h-10 -mt-5 cursor-pointer  md:hidden right-4\"><img"+(_vm._ssrAttr("src",__webpack_require__(49)))+" alt=\"Flip Button\" class=\"inline-block\"></div> <div class=\"p-3 border md:pl-8 rounded-b-xl md:rounded-none\"><div class=\"text-grayscale-400 text-2xs\">To</div> <input type=\"text\" value=\"Dubai International Airport (DOH)\" class=\"w-full border-none outline-none\"></div></div></div> <div class=\"flex w-full mt-6 md:w-2/6 md:mt-0\"><div class=\"w-full md:w-full\"><div class=\"border rounded-lg md:rounded-none\"><div class=\"flex\"><div class=\"flex-1 p-3\"><div class=\"text-grayscale-400 text-2xs\">Depart</div> <input type=\"text\" value=\"20 Nov 21\" class=\"w-full border-none outline-none\"></div> <div class=\"flex-1 p-3 pl-2 border-l\"><div class=\"text-grayscale-400 text-2xs\">Return</div> <input type=\"text\" value=\"27 Nov 21\" class=\"w-full border-none outline-none\"></div></div></div></div></div> <div class=\"flex w-full mt-6 md:w-1/6 md:mt-0\"><div class=\"w-full\"><div class=\"p-3 border rounded-lg md:rounded-r-lg md:rounded-none\"><div class=\"text-grayscale-400 text-2xs\">Trip</div> <input type=\"text\" value=\"Return\" class=\"w-full border-none outline-none\"></div></div></div></div> "),_vm._ssrNode("<div class=\"mt-8 md:inline-block md:float-right\">","</div>",[_c('NuxtLink',{attrs:{"to":"/flight-info"}},[_c('Button',{attrs:{"value":"Check Schedule","customClass":"px-6"}})],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/homepage/TabFlightInfo.vue?vue&type=template&id=5ba47bc2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/homepage/TabFlightInfo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TabFlightInfovue_type_script_lang_js_ = ({
  name: "HomepageFlightInfo"
});
// CONCATENATED MODULE: ./components/homepage/TabFlightInfo.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_TabFlightInfovue_type_script_lang_js_ = (TabFlightInfovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/homepage/TabFlightInfo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  homepage_TabFlightInfovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "32a2e67f"
  
)

/* harmony default export */ var TabFlightInfo = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Input: __webpack_require__(28).default,Button: __webpack_require__(29).default})


/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdvancedSearch_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdvancedSearch_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdvancedSearch_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdvancedSearch_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdvancedSearch_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".menu{flex:1 1 0%;cursor:pointer;text-align:center}@media (min-width: 768px){.menu{flex:none}.menu{padding-left:1.5rem;padding-right:1.5rem}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=homepage-advanced-search.js.map