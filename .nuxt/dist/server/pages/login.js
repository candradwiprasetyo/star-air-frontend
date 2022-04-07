exports.ids = [33,14,19];
exports.modules = {

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=template&id=65e19db4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Header'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex w-full h-auto py-20 md:py-0 md:h-screen\">","</div>",[_vm._ssrNode("<div class=\"flex-1 hidden bg-cover md:inline bg-login\"></div> "),_vm._ssrNode("<div class=\"flex flex-wrap content-center justify-center flex-1 bg-white\">","</div>",[_vm._ssrNode("<div class=\"w-full mx-6 md:w-1/2 md:mx-auto\">","</div>",[_vm._ssrNode("<div class=\"text-3xl font-semibold\">Login to Your Account</div> <div class=\"mt-2 text-lg text-grayscale-500 font-noto-sans\">\n          Your amazing trips start here\n        </div> <div class=\"p-3 mt-10 border rounded-lg\"><div class=\"text-xs text-grayscale-400\">Email</div> <input type=\"text\" placeholder=\"Fill your email here\" class=\"w-full border-none outline-none\"></div> <div class=\"relative p-3 mt-6 border rounded-lg\"><div class=\"text-xs text-grayscale-400\">Password</div> <input type=\"password\" placeholder=\"*****\" class=\"w-full border-none outline-none\"> <div class=\"absolute top-0 right-0 w-6 h-6 mt-5 mr-2 cursor-pointer\"><img"+(_vm._ssrAttr("src",__webpack_require__(51)))+" alt=\"eye\" class=\"inline-block\"></div></div> <a href=\"/forgot-password\"><div class=\"relative mt-6 font-medium text-right cursor-pointer text-secondary-900\">\n            Forgot Password?\n          </div></a> "),_c('NuxtLink',{attrs:{"to":"/?logged=1"}},[_c('div',{staticClass:"py-4 mt-10 font-medium text-center text-white rounded-lg cursor-pointer bg-primary-600"},[_vm._v("\n            Login\n          ")])]),_vm._ssrNode(" <div class=\"mt-10 text-center text-grayscale-500\"><div>Or sign in with:</div> <div class=\"flex justify-center mt-3 gap-x-3\"><div class=\"flex-none\"><div class=\"w-12 h-12\"><img"+(_vm._ssrAttr("src",__webpack_require__(78)))+" alt=\"facebook\" class=\"inline-block cursor-pointer\"></div></div> <div class=\"flex-none\"><div class=\"w-12 h-12\"><img"+(_vm._ssrAttr("src",__webpack_require__(86)))+" alt=\"facebook\" class=\"inline-block cursor-pointer\"></div></div> <div class=\"flex-none\"><div class=\"w-12 h-12\"><img"+(_vm._ssrAttr("src",__webpack_require__(79)))+" alt=\"facebook\" class=\"inline-block cursor-pointer\"></div></div></div></div> "),_vm._ssrNode("<div class=\"mt-10 text-center text-grayscale-500\">","</div>",[_vm._ssrNode("\n          Don’t have an account yet?\n          "),_c('NuxtLink',{attrs:{"to":"/registration"}},[_c('span',{staticClass:"font-medium cursor-pointer"},[_vm._v("Create New Account")])])],2)],2)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login.vue?vue&type=template&id=65e19db4&

// CONCATENATED MODULE: ./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=script&lang=ts&

/* harmony default export */ var loginvue_type_script_lang_ts_ = ({
  name: "Login",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
});

// CONCATENATED MODULE: ./pages/login.vue?vue&type=script&lang=ts&
 /* harmony default export */ var pages_loginvue_type_script_lang_ts_ = (loginvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "817873dc"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(46).default,Input: __webpack_require__(28).default})


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

/***/ 34:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNyAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjEzNjcgOC4wNDQ5MkwzLjg1NzI3IDEzLjM3ODNMMy44NTcyNyAyLjcxMTU5TDEzLjEzNjcgOC4wNDQ5MloiIGZpbGw9IiNGOEZBRkMiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjYyMTkgMTguODIzNUMxNi4zMzg5IDE4LjgyMzUgMTkuMzUyMiAxNS44MTAyIDE5LjM1MjIgMTIuMDkzMkMxOS4zNTIyIDguMzc2MTcgMTYuMzM4OSA1LjM2MjkyIDEyLjYyMTkgNS4zNjI5Mk0xMi42MjE5IDE4LjgyMzVDOC45MDQ4NSAxOC44MjM1IDUuODkxNiAxNS44MTAyIDUuODkxNiAxMi4wOTMyQzUuODkxNiA4LjM3NjE3IDguOTA0ODUgNS4zNjI5MiAxMi42MjE5IDUuMzYyOTJNMTIuNjIxOSAxOC44MjM1QzE0LjI3MjggMTguODIzNSAxNS42MTEyIDE1LjgxMDIgMTUuNjExMiAxMi4wOTMyQzE1LjYxMTIgOC4zNzYxNiAxNC4yNzI4IDUuMzYyOTIgMTIuNjIxOSA1LjM2MjkyTTEyLjYyMTkgMTguODIzNUMxMC45NzA5IDE4LjgyMzUgOS42MzI1NSAxNS44MTAyIDkuNjMyNTUgMTIuMDkzMkM5LjYzMjU1IDguMzc2MTYgMTAuOTcwOSA1LjM2MjkyIDEyLjYyMTkgNS4zNjI5Mk02LjMxOTggOS43MjU3MkgxOC45MjRNNi4yNTU0NyAxNC4yODE4SDE4Ljk4ODMiIHN0cm9rZT0iI0Y4RkFGQyIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwLjA0NjkgOS44ODMyM0MyMC40NzA3IDkuNTI5MTMgMjAuNTI3MyA4Ljg5ODQ5IDIwLjE3MzIgOC40NzQ2NkMxOS44MTkxIDguMDUwODQgMTkuMTg4NCA3Ljk5NDMxIDE4Ljc2NDYgOC4zNDg0MUwyMC4wNDY5IDkuODgzMjNaTTEyLjQ2ODcgMTQuOTExNkwxMS44MjQyIDE1LjY3NjFDMTIuMTk1MyAxNS45ODkgMTIuNzM3NCAxNS45OTAyIDEzLjEwOTkgMTUuNjc5TDEyLjQ2ODcgMTQuOTExNlpNNi4yMzg3MiA4LjM1MTI3QzUuODE2NDggNy45OTUyOSA1LjE4NTYgOC4wNDkwMSA0LjgyOTYxIDguNDcxMjVDNC40NzM2MiA4Ljg5MzUgNC41MjczNCA5LjUyNDM4IDQuOTQ5NTkgOS44ODAzN0w2LjIzODcyIDguMzUxMjdaTTE4Ljc2NDYgOC4zNDg0MUwxMS44Mjc2IDE0LjE0NDJMMTMuMTA5OSAxNS42NzlMMjAuMDQ2OSA5Ljg4MzIzTDE4Ljc2NDYgOC4zNDg0MVpNMTMuMTEzMyAxNC4xNDcxTDYuMjM4NzIgOC4zNTEyN0w0Ljk0OTU5IDkuODgwMzdMMTEuODI0MiAxNS42NzYxTDEzLjExMzMgMTQuMTQ3MVoiIGZpbGw9IiNGOEZBRkMiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/info.27d68d4.svg";

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=14032d60&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"w-full bg-primary-600 fixed top-0 z-10\"><div class=\"\n        container\n        mx-auto\n        h-10\n        text-grayscale-50 text-xs\n        flex\n        items-center\n      \"><div class=\"w-full hidden md:flex\"><div class=\"flex-1 flex items-center\"><span class=\"pr-3 font-medium\">News</span> <span><img"+(_vm._ssrAttr("src",__webpack_require__(34)))+" alt=\"arrow right\" class=\"inline-block\"></span> <span class=\"pl-3\">Information about travel policy due to the impact of COVID-19\n            outbreak</span></div> <div class=\"flex-1 text-right hidden md:inline\"><span class=\"pr-3\"><img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" alt=\"globe\" class=\"inline-block\"></span> <span>English</span> <span class=\"pl-3\"><img"+(_vm._ssrAttr("src",__webpack_require__(36)))+" alt=\"arrow bottom\" class=\"inline-block\"></span></div></div> <div class=\"flex w-full md:hidden px-5 items-center\"><span><img"+(_vm._ssrAttr("src",__webpack_require__(38)))+" alt=\"arrow right\" class=\"inline-block\"></span> <span class=\"pl-2\">Policy due to the impact of COVID-19</span></div></div></div> <div class=\"h-10\"></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=14032d60&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  name: "Header"
});
// CONCATENATED MODULE: ./components/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Header.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1c32f37a"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjE4NTUgMTQuNTUwM0MxMy41MTEgMTQuNTUwMyAxNC41ODU1IDEzLjU0MjkgMTQuNTg1NSAxMi4zMDAzQzE0LjU4NTUgMTEuMDU3NiAxMy41MTEgMTAuMDUwMyAxMi4xODU1IDEwLjA1MDNDMTAuODYwMSAxMC4wNTAzIDkuNzg1NTUgMTEuMDU3NiA5Ljc4NTU1IDEyLjMwMDNDOS43ODU1NSAxMy41NDI5IDEwLjg2MDEgMTQuNTUwMyAxMi4xODU1IDE0LjU1MDNaIiBmaWxsPSIjNjQ3NDhCIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAuMTg1NSAxMi4zMDAzQzIwLjE4NTUgMTUuNjE0IDE2LjYwMzggMTguMzAwMyAxMi4xODU1IDE4LjMwMDNDNy43NjcyNyAxOC4zMDAzIDQuMTg1NTUgMTUuNjE0IDQuMTg1NTUgMTIuMzAwM0M0LjE4NTU1IDguOTg2NTUgNy43NjcyNyA2LjMwMDI2IDEyLjE4NTUgNi4zMDAyNkMxNi42MDM4IDYuMzAwMjYgMjAuMTg1NSA4Ljk4NjU1IDIwLjE4NTUgMTIuMzAwM1pNMTYuOTg1NSAxMi4zMDAzQzE2Ljk4NTUgMTQuNzg1NSAxNC44MzY1IDE2LjgwMDMgMTIuMTg1NSAxNi44MDAzQzkuNTM0NTggMTYuODAwMyA3LjM4NTU1IDE0Ljc4NTUgNy4zODU1NSAxMi4zMDAzQzcuMzg1NTUgOS44MTQ5OCA5LjUzNDU4IDcuODAwMjYgMTIuMTg1NSA3LjgwMDI2QzE0LjgzNjUgNy44MDAyNiAxNi45ODU1IDkuODE0OTggMTYuOTg1NSAxMi4zMDAzWiIgZmlsbD0iIzY0NzQ4QiIvPgo8L3N2Zz4K"

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDkiIGhlaWdodD0iNDkiIHZpZXdCb3g9IjAgMCA0OSA0OSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQuMTg1NSIgY3k9IjI0LjQxOCIgcj0iMjQiIGZpbGw9IiM0MjY3QjIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNi4xMTQyIDM3LjYxMjhDMjUuNDg0NSAzNy43MDQxIDI0Ljg0MDQgMzcuNzUxMyAyNC4xODU0IDM3Ljc1MTNDMjMuOTQzNyAzNy43NTEzIDIzLjcwMzYgMzcuNzQ0OSAyMy40NjUxIDM3LjczMjJDMjMuNzAzNiAzNy43NDQ4IDIzLjk0MzcgMzcuNzUxMSAyNC4xODU0IDM3Ljc1MTFDMjQuODQwNSAzNy43NTExIDI1LjQ4NDUgMzcuNzAzIDI2LjExNDIgMzcuNjEyOFpNMjYuMjY4NiAzNy41ODk1VjI4LjI3MjhIMjkuMzc1NUwyOS45NjYxIDI0LjQxNzdIMjYuMjY4NlYyMS45MTY0QzI2LjI2ODYgMjAuODYyNyAyNi43ODQyIDE5LjgzMzMgMjguNDQxNyAxOS44MzMzSDMwLjEyMzZWMTYuNTUyQzMwLjEyMzYgMTYuNTUyIDI4LjU5NzQgMTYuMjkxNCAyNy4xMzg2IDE2LjI5MTRDMjQuMDkzNSAxNi4yOTE0IDIyLjEwMjMgMTguMTM2NCAyMi4xMDIzIDIxLjQ3OTZWMjQuNDE3N0gxOC43MTU5VjI4LjI3MjhIMjIuMTAyM1YzNy41ODk1QzE1LjcyNzkgMzYuNTg5NCAxMC44NTIxIDMxLjA3MzEgMTAuODUyMSAyNC40MThDMTAuODUyMSAxNy4wNTQyIDE2LjgyMTYgMTEuMDg0NyAyNC4xODU0IDExLjA4NDdDMzEuNTQ5MiAxMS4wODQ3IDM3LjUxODcgMTcuMDU0MiAzNy41MTg3IDI0LjQxOEMzNy41MTg3IDMxLjA3MzEgMzIuNjQyOSAzNi41ODk0IDI2LjI2ODYgMzcuNTg5NVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/google.27f3ea6.svg";

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/twitter.cca7832.svg";

/***/ })

};;
//# sourceMappingURL=login.js.map