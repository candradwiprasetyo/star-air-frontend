exports.ids = [28,12,13,14,19,20,21];
exports.modules = {

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activation.vue?vue&type=template&id=142b05ad&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Header'),_vm._ssrNode(" "),_c('MainMenu'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container px-6 py-6 mx-auto md:py-14 md:px-0\">","</div>",[_vm._ssrNode("<div class=\"text-3xl font-semibold text-grayscale-900 font-noto-sans\">\n      Account Activation\n    </div> <div class=\"mt-3 text-grayscale-500\">\n      Thank your for confirming your account. I more step before you can use\n      your account, please enter password that you are going to use to login\n      next time to your account. Nam pretium venenatis bibendum. Nam eget ante\n      eu metus consequat semper non ac nunc. Duis semper massa nec tellus\n      lacinia, id semper neque lobortis. Donec sit amet eros leo. Sed lacinia\n      vestibulum lorem, vel imperdiet ipsum.\n    </div> <div class=\"block p-6 mt-10 md:hidden bg-light-blue rounded-xl\"><div class=\"text-lg font-semibold text-grayscale-900\">\n        Password Must\n      </div> <div class=\"mt-4 text-grayscale-500\"><ul class=\"pl-5 leading-loose list-disc\"><li>Minimum 8 characters</li> <li>Have at least one number</li> <li>Have at least one uppercase letter</li> <li>Have at least one symbol</li></ul></div></div> "),_vm._ssrNode("<div class=\"items-start mt-6 md:mt-16 md:flex gap-x-8\">","</div>",[_vm._ssrNode("<div class=\"md:w-2/3\">","</div>",[_c('InputPassword',{attrs:{"label":"Password"}}),_vm._ssrNode(" "),_c('InputPassword',{attrs:{"label":"Re-type Password","customClass":"mt-6"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mt-10 mb-6 md:w-64 md:mb-0\">","</div>",[_c('NuxtLink',{attrs:{"to":"/?logged=1"}},[_c('Button',{attrs:{"value":"Create Password"}})],1)],1)],2),_vm._ssrNode(" <div class=\"hidden w-1/3 p-6 md:block bg-light-blue rounded-xl\"><div class=\"text-lg font-semibold text-grayscale-900\">\n          Password Must\n        </div> <div class=\"mt-4 text-grayscale-500\"><ul class=\"pl-5 leading-loose list-disc\"><li>Minimum 8 characters</li> <li>Have at least one number</li> <li>Have at least one uppercase letter</li> <li>Have at least one symbol</li></ul></div></div>")],2)],2),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/activation.vue?vue&type=template&id=142b05ad&

// CONCATENATED MODULE: ./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activation.vue?vue&type=script&lang=ts&

/* harmony default export */ var activationvue_type_script_lang_ts_ = ({
  name: "Registration",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
});

// CONCATENATED MODULE: ./pages/activation.vue?vue&type=script&lang=ts&
 /* harmony default export */ var pages_activationvue_type_script_lang_ts_ = (activationvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/activation.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_activationvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6a632a86"
  
)

/* harmony default export */ var activation = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(46).default,MainMenu: __webpack_require__(47).default,InputPassword: __webpack_require__(56).default,Button: __webpack_require__(29).default,Footer: __webpack_require__(48).default})


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

/***/ 30:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2LjY5NDkgOC43NDQ0NkMxNy4xMTg3IDguMzkwMzYgMTcuMTc1MiA3Ljc1OTcyIDE2LjgyMTEgNy4zMzU4OUMxNi40NjcgNi45MTIwNiAxNS44MzY0IDYuODU1NTQgMTUuNDEyNiA3LjIwOTY0TDE2LjY5NDkgOC43NDQ0NlpNMTAuMjcyOSAxMi44MDY5TDkuNjI4MjkgMTMuNTcxNEM5Ljk5OTM4IDEzLjg4NDMgMTAuNTQxNSAxMy44ODU1IDEwLjkxNCAxMy41NzQzTDEwLjI3MjkgMTIuODA2OVpNNS4xODg2MSA3LjIxMjVDNC43NjYzNiA2Ljg1NjUyIDQuMTM1NDggNi45MTAyMyAzLjc3OTQ5IDcuMzMyNDhDMy40MjM1MSA3Ljc1NDczIDMuNDc3MjIgOC4zODU2MSAzLjg5OTQ3IDguNzQxNkw1LjE4ODYxIDcuMjEyNVpNMTUuNDEyNiA3LjIwOTY0TDkuNjMxNyAxMi4wMzk1TDEwLjkxNCAxMy41NzQzTDE2LjY5NDkgOC43NDQ0NkwxNS40MTI2IDcuMjA5NjRaTTEwLjkxNzQgMTIuMDQyM0w1LjE4ODYxIDcuMjEyNUwzLjg5OTQ3IDguNzQxNkw5LjYyODI5IDEzLjU3MTRMMTAuOTE3NCAxMi4wNDIzWiIgZmlsbD0iIzY0NzQ4QiIvPgo8L3N2Zz4K"

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.e641656.png";

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMi4zMTE2IDQuOTc0MzdDMTAuNjU2NCA0Ljk3NDM3IDkuMzE0NiA2LjMxNjE3IDkuMzE0NiA3Ljk3MTM3VjkuMDA5N0g5LjIzNjc5QzguMjAzMzMgOS4wMDk3IDcuMzQwMDYgOS43OTcwOCA3LjI0NTIzIDEwLjgyNjJMNi42MTM4MyAxNy42NzgxQzYuNTA1ODIgMTguODUwMSA3LjQyODM1IDE5Ljg2MTYgOC42MDUzOSAxOS44NjE2SDE2LjE0MDRDMTcuMzE3NCAxOS44NjE2IDE4LjIzOTkgMTguODUwMSAxOC4xMzE5IDE3LjY3ODFMMTcuNTAwNSAxMC44MjYyQzE3LjQwNTcgOS43OTcwOCAxNi41NDI0IDkuMDA5NyAxNS41MDkgOS4wMDk3SDE1LjMwODZWNy45NzEzN0MxNS4zMDg2IDYuMzE2MTcgMTMuOTY2OCA0Ljk3NDM3IDEyLjMxMTYgNC45NzQzN1pNMTAuODY2MiA4LjAwMTg4VjkuMDA5N0gxMy43NTY5VjguMDAxODhDMTMuNzU2OSA3LjIwMzY1IDEzLjEwOTggNi41NTY1NSAxMi4zMTE2IDYuNTU2NTVDMTEuNTEzMyA2LjU1NjU1IDEwLjg2NjIgNy4yMDM2NSAxMC44NjYyIDguMDAxODhaTTkuNDAzIDEwLjUyMUM5LjA0MTQ5IDEwLjUyMSA4LjczOTQ1IDEwLjc5NjMgOC43MDYgMTEuMTU2Mkw4LjEzOTE1IDE3LjI1NzhDOC4wODQ2OCAxNy44NDQxIDguNTQ2MDUgMTguMzUwNCA5LjEzNDg2IDE4LjM1MDRIMTUuNjExQzE2LjE5OTggMTguMzUwNCAxNi42NjEyIDE3Ljg0NDEgMTYuNjA2NyAxNy4yNTc4TDE2LjAzOTkgMTEuMTU2MkMxNi4wMDY0IDEwLjc5NjMgMTUuNzA0NCAxMC41MjEgMTUuMzQyOSAxMC41MjFIOS40MDNaIiBmaWxsPSIjNjQ3NDhCIi8+Cjwvc3ZnPgo="

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

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/user.cbac4ab.png";

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/info.27d68d4.svg";

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/english.830247c.svg";

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNCAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuMDExOTYgNy40MTc5N0M0LjAxMTk2IDYuODY1NjggNC40NTk2OCA2LjQxNzk3IDUuMDExOTYgNi40MTc5N0gxOS4wMDAxQzE5LjU1MjMgNi40MTc5NyAyMC4wMDAxIDYuODY1NjggMjAuMDAwMSA3LjQxNzk3QzIwLjAwMDEgNy45NzAyNSAxOS41NTIzIDguNDE3OTcgMTkuMDAwMSA4LjQxNzk3SDUuMDExOTZDNC40NTk2OCA4LjQxNzk3IDQuMDExOTYgNy45NzAyNSA0LjAxMTk2IDcuNDE3OTdaIiBmaWxsPSIjNjQ3NDhCIi8+CjxwYXRoIGQ9Ik00LjAxMTk2IDEyLjQxOEM0LjAxMTk2IDExLjg2NTcgNC40NTk2OCAxMS40MTggNS4wMTE5NiAxMS40MThIMTkuMDAwMUMxOS41NTIzIDExLjQxOCAyMC4wMDAxIDExLjg2NTcgMjAuMDAwMSAxMi40MThDMjAuMDAwMSAxMi45NzAzIDE5LjU1MjMgMTMuNDE4IDE5LjAwMDEgMTMuNDE4SDUuMDExOTZDNC40NTk2OCAxMy40MTggNC4wMTE5NiAxMi45NzAzIDQuMDExOTYgMTIuNDE4WiIgZmlsbD0iIzY0NzQ4QiIvPgo8cGF0aCBkPSJNNS4wMTE5NiAxNi40MThDNC40NTk2OCAxNi40MTggNC4wMTE5NiAxNi44NjU3IDQuMDExOTYgMTcuNDE4QzQuMDExOTYgMTcuOTcwMyA0LjQ1OTY4IDE4LjQxOCA1LjAxMTk2IDE4LjQxOEgxOS4wMDAxQzE5LjU1MjMgMTguNDE4IDIwLjAwMDEgMTcuOTcwMyAyMC4wMDAxIDE3LjQxOEMyMC4wMDAxIDE2Ljg2NTcgMTkuNTUyMyAxNi40MTggMTkuMDAwMSAxNi40MThINS4wMTE5NloiIGZpbGw9IiM2NDc0OEIiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ 41:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDEiIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCA0MSA0MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMi42Nzc3IDMzLjIzOTlDMjIuMDQ4MyAzMy4zMzEgMjEuNDA0NyAzMy4zNzgyIDIwLjc1MDEgMzMuMzc4MkMyMC41MDg4IDMzLjM3ODIgMjAuMjY5IDMzLjM3MTggMjAuMDMwOCAzMy4zNTkxQzIwLjI2OSAzMy4zNzE3IDIwLjUwODggMzMuMzc4IDIwLjc1MDEgMzMuMzc4QzIxLjQwNDggMzMuMzc4IDIyLjA0ODQgMzMuMzMgMjIuNjc3NyAzMy4yMzk5Wk0yMi44MzMzIDMzLjIxNjRWMjMuODk5N0gyNS45NDAyTDI2LjUzMDggMjAuMDQ0NkgyMi44MzMzVjE3LjU0MzNDMjIuODMzMyAxNi40ODk2IDIzLjM0ODkgMTUuNDYwMiAyNS4wMDY0IDE1LjQ2MDJIMjYuNjg4M1YxMi4xNzg5QzI2LjY4ODMgMTIuMTc4OSAyNS4xNjIgMTEuOTE4MyAyMy43MDMzIDExLjkxODNDMjAuNjU4MiAxMS45MTgzIDE4LjY2NjkgMTMuNzYzMyAxOC42NjY5IDE3LjEwNjVWMjAuMDQ0NkgxNS4yODA2VjIzLjg5OTdIMTguNjY2OVYzMy4yMTY0QzEyLjI5MjYgMzIuMjE2MyA3LjQxNjc1IDI2LjcgNy40MTY3NSAyMC4wNDQ5QzcuNDE2NzUgMTIuNjgxMSAxMy4zODYzIDYuNzExNTUgMjAuNzUwMSA2LjcxMTU1QzI4LjExMzkgNi43MTE1NSAzNC4wODM0IDEyLjY4MTEgMzQuMDgzNCAyMC4wNDQ5QzM0LjA4MzQgMjYuNyAyOS4yMDc2IDMyLjIxNjMgMjIuODMzMyAzMy4yMTY0WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/footer-instagram.1a44648.svg";

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/footer-twitter.7344acd.svg";

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDEiIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCA0MSA0MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMwLjEzODggMjkuNDMzNEgyNi4xODc1VjIzLjI0NTVDMjYuMTg3NSAyMS43Njk5IDI2LjE2MTEgMTkuODcwNCAyNC4xMzI0IDE5Ljg3MDRDMjIuMDc0NCAxOS44NzA0IDIxLjc1OTUgMjEuNDc4IDIxLjc1OTUgMjMuMTM4VjI5LjQzMjlIMTcuODA4M1YxNi43MDgxSDIxLjYwMTRWMTguNDQ3SDIxLjY1NDZDMjIuNDI3IDE3LjEyNjUgMjMuODY4MyAxNi4zMzQ5IDI1LjM5NzIgMTYuMzkxNkMyOS40MDIgMTYuMzkxNiAzMC4xNDA1IDE5LjAyNTggMzAuMTQwNSAyMi40NTI4TDMwLjEzODggMjkuNDMzNFpNMTMuMzQ5OSAxNC45Njg2QzEyLjA5MiAxNC45Njg2IDExLjA1NjQgMTMuOTMzNyAxMS4wNTY0IDEyLjY3NThDMTEuMDU2NCAxMS40MTc4IDEyLjA5MTUgMTAuMzgyNyAxMy4zNDk0IDEwLjM4MjdDMTQuNjA3MiAxMC4zODI3IDE1LjY0MjIgMTEuNDE3NiAxNS42NDI0IDEyLjY3NTNDMTUuNjQyNCAxMy45MzI5IDE0LjYwNzYgMTQuOTY4NSAxMy4zNDk5IDE0Ljk2ODZaTTE1LjMyNTUgMjkuNDMzNEgxMS4zNzAxVjE2LjcwODFIMTUuMzI1NVYyOS40MzM0Wk0zMi4xMDg2IDYuNzEzMzlIOS4zODQ0OEM4LjMxNzc4IDYuNzAxMzQgNy40Mjk3NSA3LjU2ODczIDcuNDE2NzUgOC42MzU0NFYzMS40NTM5QzcuNDI5MjcgMzIuNTIxMiA4LjMxNzE4IDMzLjM4OTUgOS4zODQ0OCAzMy4zNzgxSDMyLjEwODZDMzMuMTc4NSAzMy4zOTE1IDM0LjA2OTUgMzIuNTIzMyAzNC4wODM4IDMxLjQ1MzlWOC42MzM4OUMzNC4wNjk1IDcuNTY0OTEgMzMuMTc3MyA2LjY5NzY0IDMyLjEwODYgNi43MTE3MlY2LjcxMzM5WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/footer-whatsapp.42f1d55.svg";

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

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MainMenu.vue?vue&type=template&id=60b09784&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"fixed z-10 w-full bg-white border-b top-10\">","</div>",[_vm._ssrNode("<div class=\"container items-center hidden mx-auto min-h-20 text-grayscale-500 md:flex\">","</div>",[_vm._ssrNode("<div class=\"flex-none\"><img"+(_vm._ssrAttr("src",__webpack_require__(32)))+" alt=\"Logo\" width=\"130\" class=\"inline-block cursor-pointer\"></div> "),_vm._ssrNode("<div class=\"flex-grow\">","</div>",[_vm._ssrNode("<div class=\"flex items-center justify-end gap-x-12\">","</div>",[_vm._ssrNode("<div class=\"flex-none cursor-pointer\">Home</div> <div class=\"flex-none\">\n            Earn\n            <img"+(_vm._ssrAttr("src",__webpack_require__(30)))+" alt=\"arrow bottom\" class=\"inline-block\"></div> <div class=\"flex-none\">\n            Redeem\n            <img"+(_vm._ssrAttr("src",__webpack_require__(30)))+" alt=\"arrow bottom\" class=\"inline-block\"></div> <div class=\"flex-none\">Shop</div> <div class=\"flex-none\">\n            Help\n            <img"+(_vm._ssrAttr("src",__webpack_require__(30)))+" alt=\"arrow bottom\" class=\"inline-block\"></div> <div class=\"flex-none\"><img"+(_vm._ssrAttr("src",__webpack_require__(33)))+" alt=\"shopping bag\" class=\"inline-block align-middle\"> <span class=\"align-middle\">0 item (s)</span></div> "),_vm._ssrNode("<div>","</div>",[(!_vm.dataLogged)?_vm._ssrNode("<div class=\"flex items-center py-3 gap-x-5\">","</div>",[_vm._ssrNode("<div class=\"w-32 mr-4\">","</div>",[_c('NuxtLink',{attrs:{"to":"/login"}},[_c('Button',{attrs:{"value":"Login","border":"border-2 border-secondary-900","color":"text-secondary-900","background":"bg-white"}})],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-32\">","</div>",[_c('NuxtLink',{attrs:{"to":"/registration"}},[_c('Button',{attrs:{"value":"Sign Up"}})],1)],1)],2):_vm._ssrNode("<div class=\"flex items-center py-6 gap-x-5\">","</div>",[_vm._ssrNode("<div class=\"flex-none\">","</div>",[_c('NuxtLink',{attrs:{"to":"/account?logged=1"}},[_c('img',{staticClass:"w-6 h-6",attrs:{"src":__webpack_require__(37),"alt":"User"}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex-grow\">","</div>",[_c('NuxtLink',{attrs:{"to":"/account?logged=1"}},[_c('div',{staticClass:"font-medium text-grayscale-900"},[_vm._v("Chanda Gauri")]),_vm._v(" "),_c('div',{staticClass:"text-xs text-primary-600"},[_vm._v("5000 Star Points")])])],1),_vm._ssrNode(" <div class=\"flex-none\"><img"+(_vm._ssrAttr("src",__webpack_require__(30)))+" alt=\"arrow bottom\" class=\"inline-block\"></div>")],2)])],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex items-center px-6 py-4 text-grayscale-500 md:hidden\">","</div>",[_c('NuxtLink',{attrs:{"to":"/"}},[_c('div',{staticClass:"flex-1"},[_c('img',{staticClass:"inline-block",attrs:{"src":__webpack_require__(32),"alt":"Logo","width":"130"}})])]),_vm._ssrNode(" <div class=\"flex items-center justify-end flex-1\"><div class=\"flex justify-end flex-1\"><img"+(_vm._ssrAttr("src",__webpack_require__(39)))+" alt=\"English\" class=\"inline-block\"> <span class=\"text-xs\">EN</span></div> <div class=\"flex justify-end flex-1\"><img"+(_vm._ssrAttr("src",__webpack_require__(33)))+" alt=\"Shopping bag\" class=\"inline-block\"></div> <div class=\"flex justify-end flex-1\"><img"+(_vm._ssrAttr("src",__webpack_require__(40)))+" alt=\"English\" class=\"inline-block\"></div></div>")],2)],2),_vm._ssrNode(" <div class=\"h-16 mb-1 md:h-20\"></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MainMenu.vue?vue&type=template&id=60b09784&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MainMenu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var MainMenuvue_type_script_lang_js_ = ({
  name: "Header",

  data() {
    return {
      dataLogged: null
    };
  },

  mounted() {
    console.log(this.$route.query.logged);
    this.dataLogged = this.$route.query.logged ? this.$route.query.logged : null;
  },

  methods: {
    goToHome() {
      window.location.href = '/';
    }

  }
});
// CONCATENATED MODULE: ./components/MainMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MainMenuvue_type_script_lang_js_ = (MainMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/MainMenu.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MainMenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1b5c2ce5"
  
)

/* harmony default export */ var MainMenu = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Button: __webpack_require__(29).default})


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=5a7dffe1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"w-full bg-secondary-900 py-8\"><div class=\"container mx-auto text-white px-6 md:px-0\"><div class=\"md:flex border-b pb-8 border-secondary-700 gap-x-8\"><div class=\"flex-1\"><div class=\"text-lg font-semibold pb-4 border-b border-secondary-700\">\n            About Us\n          </div> <div class=\"pt-4\">Company Overview</div> <div class=\"pt-4\">Our Fleet</div> <div class=\"pt-4\">Media Center</div> <div class=\"pt-4\">Careers</div></div> <div class=\"flex-1\"><div class=\"\n              text-lg\n              font-semibold\n              pb-4\n              border-b border-secondary-700\n              mt-4\n              md:mt-0\n            \">\n            Support\n          </div> <div class=\"pt-4\">Airport</div> <div class=\"pt-4\">Appellate</div> <div class=\"pt-4\">Help</div> <div class=\"pt-4\">Contact Us</div></div> <div class=\"flex-1\"><div class=\"\n              text-lg\n              font-semibold\n              pb-4\n              border-b border-secondary-700\n              mt-4\n              md:mt-0\n            \">\n            Others\n          </div> <div class=\"pt-4\">Agent Login</div> <div class=\"pt-4\">Coorporate Login</div> <div class=\"pt-4\">Carriage Terms</div> <div class=\"pt-4\">Fare Sheet</div></div> <div class=\"flex-1\"><div class=\"\n              text-lg\n              font-semibold\n              pb-4\n              border-b border-secondary-700\n              mt-4\n              md:mt-0\n            \">\n            Social Media\n          </div> <div class=\"pt-4 text-sm md:text-base\">\n            Follow us on all secial media to get latest news and promo\n          </div> <div class=\"flex mt-4 gap-x-2\"><div class=\"flex-none\"><a href=\"#\"><img"+(_vm._ssrAttr("src",__webpack_require__(41)))+" alt=\"facebook\"></a></div> <div class=\"flex-none\"><a href=\"#\"><img"+(_vm._ssrAttr("src",__webpack_require__(42)))+" alt=\"instagram\"></a></div> <div class=\"flex-none\"><a href=\"#\"><img"+(_vm._ssrAttr("src",__webpack_require__(43)))+" alt=\"twitter\"></a></div> <div class=\"flex-none\"><a href=\"#\"><img"+(_vm._ssrAttr("src",__webpack_require__(44)))+" alt=\"linkedin\"></a></div> <div class=\"flex-none\"><a href=\"#\"><img"+(_vm._ssrAttr("src",__webpack_require__(45)))+" alt=\"whatsapp\"></a></div></div></div></div> <div class=\"md:flex pt-8 text-sm\"><div class=\"flex-grow md:flex\"><div class=\"flex-none inline-block pr-6\">Privacy Policy</div> <div class=\"flex-none inline-block pr-6\">Terms &amp; Conditions</div> <div class=\"flex-none inline-block pr-6\">Disclamer</div> <div class=\"flex-none inline-block\">Site Map</div></div> <div class=\"flex-none mt-6 md:0\">\n          © Star Air 2021. All Rights Reserved.\n        </div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=5a7dffe1&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Footervue_type_script_lang_js_ = ({
  name: "Header"
});
// CONCATENATED MODULE: ./components/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Footer.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "09fee0f0"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjE4NTUgMTQuNTUwM0MxMy41MTEgMTQuNTUwMyAxNC41ODU1IDEzLjU0MjkgMTQuNTg1NSAxMi4zMDAzQzE0LjU4NTUgMTEuMDU3NiAxMy41MTEgMTAuMDUwMyAxMi4xODU1IDEwLjA1MDNDMTAuODYwMSAxMC4wNTAzIDkuNzg1NTUgMTEuMDU3NiA5Ljc4NTU1IDEyLjMwMDNDOS43ODU1NSAxMy41NDI5IDEwLjg2MDEgMTQuNTUwMyAxMi4xODU1IDE0LjU1MDNaIiBmaWxsPSIjNjQ3NDhCIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAuMTg1NSAxMi4zMDAzQzIwLjE4NTUgMTUuNjE0IDE2LjYwMzggMTguMzAwMyAxMi4xODU1IDE4LjMwMDNDNy43NjcyNyAxOC4zMDAzIDQuMTg1NTUgMTUuNjE0IDQuMTg1NTUgMTIuMzAwM0M0LjE4NTU1IDguOTg2NTUgNy43NjcyNyA2LjMwMDI2IDEyLjE4NTUgNi4zMDAyNkMxNi42MDM4IDYuMzAwMjYgMjAuMTg1NSA4Ljk4NjU1IDIwLjE4NTUgMTIuMzAwM1pNMTYuOTg1NSAxMi4zMDAzQzE2Ljk4NTUgMTQuNzg1NSAxNC44MzY1IDE2LjgwMDMgMTIuMTg1NSAxNi44MDAzQzkuNTM0NTggMTYuODAwMyA3LjM4NTU1IDE0Ljc4NTUgNy4zODU1NSAxMi4zMDAzQzcuMzg1NTUgOS44MTQ5OCA5LjUzNDU4IDcuODAwMjYgMTIuMTg1NSA3LjgwMDI2QzE0LjgzNjUgNy44MDAyNiAxNi45ODU1IDkuODE0OTggMTYuOTg1NSAxMi4zMDAzWiIgZmlsbD0iIzY0NzQ4QiIvPgo8L3N2Zz4K"

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/InputPassword.vue?vue&type=template&id=c7d5ef1c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"p-3 relative",class:[_vm.border, _vm.customClass]},[_vm._ssrNode("<div class=\"text-xs text-grayscale-400 mb-1\">"+_vm._ssrEscape(_vm._s(_vm.label))+"</div> <input type=\"password\""+(_vm._ssrAttr("placeholder",_vm.placeholder))+" class=\"outline-none border-none w-full\"> <div class=\"h-6 w-6 absolute right-0 mt-5 mr-2 top-0 cursor-pointer\"><img"+(_vm._ssrAttr("src",__webpack_require__(51)))+" alt=\"eye\" class=\"inline-block\"></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/InputPassword.vue?vue&type=template&id=c7d5ef1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/InputPassword.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var InputPasswordvue_type_script_lang_js_ = ({
  name: "Input",
  props: {
    label: {
      type: String,
      required: true
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
// CONCATENATED MODULE: ./components/InputPassword.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_InputPasswordvue_type_script_lang_js_ = (InputPasswordvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/InputPassword.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_InputPasswordvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f24343b0"
  
)

/* harmony default export */ var InputPassword = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Input: __webpack_require__(28).default})


/***/ })

};;
//# sourceMappingURL=activation.js.map