exports.ids = [31,19];
exports.modules = {

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/forgot-password.vue?vue&type=template&id=021e966b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"w-full bg-primary-600 absolute top-0 hidden md:inline\"><div class=\"\n        container\n        mx-auto\n        h-10\n        text-grayscale-50 text-xs\n        flex\n        items-center\n      \"><div class=\"w-full hidden md:flex\"><div class=\"flex-1 flex items-center\"><span class=\"pr-3 font-medium\">News</span> <span><img"+(_vm._ssrAttr("src",__webpack_require__(34)))+" alt=\"arrow right\" class=\"inline-block\"></span> <span class=\"pl-3\">Information about travel policy due to the impact of COVID-19\n            outbreak</span></div> <div class=\"flex-1 text-right hidden md:inline\"><span class=\"pr-3\"><img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" alt=\"globe\" class=\"inline-block\"></span> <span>English</span> <span class=\"pl-3\"><img"+(_vm._ssrAttr("src",__webpack_require__(36)))+" alt=\"arrow bottom\" class=\"inline-block\"></span></div></div></div></div> <div class=\"w-full py-5 md:py-0 h-auto md:h-screen flex\"><div class=\"flex-1 bg-cover hidden md:inline bg-forgot-password\"></div> <div class=\"flex-1 bg-white flex flex-wrap content-center justify-center\"><div class=\"w-full md:w-1/2 mx-6 md:mx-auto\"><div class=\"absolute inline md:hidden top-0 right-0 mt-5 mr-5\"><img"+(_vm._ssrAttr("src",__webpack_require__(76)))+" alt=\"close\" class=\"inline-block cursor-pointer\"></div> <a href=\"/login\"><div class=\"text-grayscale-900 flex items-center cursor-pointer\"><img"+(_vm._ssrAttr("src",__webpack_require__(73)))+" alt=\"arrow left\" class=\"inline-block mr-2\">\n            Back to Login\n          </div></a> <div class=\"font-semibold text-3xl mt-16\">Forgot Your Password?</div> <div class=\"mt-2 text-lg text-grayscale-500 font-noto-sans\">\n          Don’t worry, enter your registered email address to reset your\n          password.\n        </div> <div class=\"mt-10 rounded-lg border p-3\"><div class=\"text-xs text-grayscale-400\">Email</div> <input type=\"text\" placeholder=\"Fill your email here\" class=\"outline-none border-none w-full\"></div> <div class=\"mt-1 relative text-grayscale-400 text-2xs\">\n          We will send an email containing a link to reset your password.\n        </div> <div class=\"\n            mt-10\n            bg-primary-600\n            text-white text-center\n            py-4\n            rounded-lg\n            font-medium\n            cursor-pointer\n          \">\n          Submit\n        </div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/forgot-password.vue?vue&type=template&id=021e966b&

// CONCATENATED MODULE: ./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/forgot-password.vue?vue&type=script&lang=ts&

/* harmony default export */ var forgot_passwordvue_type_script_lang_ts_ = ({
  name: "ForgotPassword",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
});

// CONCATENATED MODULE: ./pages/forgot-password.vue?vue&type=script&lang=ts&
 /* harmony default export */ var pages_forgot_passwordvue_type_script_lang_ts_ = (forgot_passwordvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/forgot-password.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_forgot_passwordvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0710cd24"
  
)

/* harmony default export */ var forgot_password = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Input: __webpack_require__(28).default})


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

/***/ 73:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNCAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjEzMDUgMjAuNDMzN0MxNC40ODQ2IDIwLjg1NzUgMTUuMTE1MiAyMC45MTQxIDE1LjUzOSAyMC41NkMxNS45NjI5IDIwLjIwNTkgMTYuMDE5NCAxOS41NzUyIDE1LjY2NTMgMTkuMTUxNEwxNC4xMzA1IDIwLjQzMzdaTTkuMTAyMDkgMTIuODU1NUw4LjMzNzU1IDEyLjIxMUM4LjAyNDY5IDEyLjU4MjEgOC4wMjM0OSAxMy4xMjQyIDguMzM0NjkgMTMuNDk2N0w5LjEwMjA5IDEyLjg1NTVaTTE1LjY2MjQgNi42MjU1MkMxNi4wMTg0IDYuMjAzMjcgMTUuOTY0NyA1LjU3MjM5IDE1LjU0MjQgNS4yMTY0QzE1LjEyMDIgNC44NjA0MiAxNC40ODkzIDQuOTE0MTMgMTQuMTMzMyA1LjMzNjM4TDE1LjY2MjQgNi42MjU1MlpNMTUuNjY1MyAxOS4xNTE0TDkuODY5NSAxMi4yMTQ0TDguMzM0NjkgMTMuNDk2N0wxNC4xMzA1IDIwLjQzMzdMMTUuNjY1MyAxOS4xNTE0Wk05Ljg2NjY0IDEzLjUwMDFMMTUuNjYyNCA2LjYyNTUyTDE0LjEzMzMgNS4zMzYzOEw4LjMzNzU1IDEyLjIxMUw5Ljg2NjY0IDEzLjUwMDFaIiBmaWxsPSIjNjQ3NDhCIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ 76:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNCAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuMDg2NSA1LjQ4NzQ4QzUuNjk1OTggNS4wOTY5NiA1LjA2MjgxIDUuMDk2OTYgNC42NzIyOSA1LjQ4NzQ4QzQuMjgxNzcgNS44NzggNC4yODE3NyA2LjUxMTE3IDQuNjcyMjkgNi45MDE2OUw2LjA4NjUgNS40ODc0OFpNMTcuOTYxMiAyMC4xOTA2QzE4LjM1MTcgMjAuNTgxMSAxOC45ODQ5IDIwLjU4MTEgMTkuMzc1NCAyMC4xOTA2QzE5Ljc2NTkgMTkuODAwMSAxOS43NjU5IDE5LjE2NjkgMTkuMzc1NCAxOC43NzY0TDE3Ljk2MTIgMjAuMTkwNlpNMTkuMzc1NCA2LjkwMTY5QzE5Ljc2NTkgNi41MTExNiAxOS43NjU5IDUuODc4IDE5LjM3NTQgNS40ODc0N0MxOC45ODQ5IDUuMDk2OTUgMTguMzUxNyA1LjA5Njk1IDE3Ljk2MTIgNS40ODc0N0wxOS4zNzU0IDYuOTAxNjlaTTQuNjcyMjkgMTguNzc2NEM0LjI4MTc2IDE5LjE2NjkgNC4yODE3NiAxOS44MDAxIDQuNjcyMjkgMjAuMTkwNkM1LjA2MjgxIDIwLjU4MTEgNS42OTU5OCAyMC41ODExIDYuMDg2NSAyMC4xOTA2TDQuNjcyMjkgMTguNzc2NFpNNC42NzIyOSA2LjkwMTY5TDExLjMxNjcgMTMuNTQ2MUwxMi43MzA5IDEyLjEzMTlMNi4wODY1IDUuNDg3NDhMNC42NzIyOSA2LjkwMTY5Wk0xMS4zMTY3IDEzLjU0NjFMMTcuOTYxMiAyMC4xOTA2TDE5LjM3NTQgMTguNzc2NEwxMi43MzA5IDEyLjEzMTlMMTEuMzE2NyAxMy41NDYxWk0xNy45NjEyIDUuNDg3NDdMMTEuMzE2NyAxMi4xMzE5TDEyLjczMDkgMTMuNTQ2MUwxOS4zNzU0IDYuOTAxNjlMMTcuOTYxMiA1LjQ4NzQ3Wk0xMS4zMTY3IDEyLjEzMTlMNC42NzIyOSAxOC43NzY0TDYuMDg2NSAyMC4xOTA2TDEyLjczMDkgMTMuNTQ2MUwxMS4zMTY3IDEyLjEzMTlaIiBmaWxsPSIjNjQ3NDhCIi8+Cjwvc3ZnPgo="

/***/ })

};;
//# sourceMappingURL=forgot-password.js.map