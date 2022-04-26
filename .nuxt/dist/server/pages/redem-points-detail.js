exports.ids = [41,14,15,16,21,23,27,28,29,30];
exports.modules = Array(35).concat([
/* 35 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyMSAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2LjY5NDkgOC43NDQ0NkMxNy4xMTg3IDguMzkwMzYgMTcuMTc1MiA3Ljc1OTcyIDE2LjgyMTEgNy4zMzU4OUMxNi40NjcgNi45MTIwNiAxNS44MzY0IDYuODU1NTQgMTUuNDEyNiA3LjIwOTY0TDE2LjY5NDkgOC43NDQ0NlpNMTAuMjcyOSAxMi44MDY5TDkuNjI4MjkgMTMuNTcxNEM5Ljk5OTM4IDEzLjg4NDMgMTAuNTQxNSAxMy44ODU1IDEwLjkxNCAxMy41NzQzTDEwLjI3MjkgMTIuODA2OVpNNS4xODg2MSA3LjIxMjVDNC43NjYzNiA2Ljg1NjUyIDQuMTM1NDggNi45MTAyMyAzLjc3OTQ5IDcuMzMyNDhDMy40MjM1MSA3Ljc1NDczIDMuNDc3MjIgOC4zODU2MSAzLjg5OTQ3IDguNzQxNkw1LjE4ODYxIDcuMjEyNVpNMTUuNDEyNiA3LjIwOTY0TDkuNjMxNyAxMi4wMzk1TDEwLjkxNCAxMy41NzQzTDE2LjY5NDkgOC43NDQ0NkwxNS40MTI2IDcuMjA5NjRaTTEwLjkxNzQgMTIuMDQyM0w1LjE4ODYxIDcuMjEyNUwzLjg5OTQ3IDguNzQxNkw5LjYyODI5IDEzLjU3MTRMMTAuOTE3NCAxMi4wNDIzWiIgZmlsbD0iIzY0NzQ4QiIvPgo8L3N2Zz4K"

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Button.vue?vue&type=template&id=45e28faa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"font-medium text-center rounded-lg ",class:[
    _vm.color, 
    _vm.enabled ? _vm.border : 'border-2 border-transparent', 
    _vm.padding, 
    _vm.customClass, 
    _vm.enabled ? _vm.background : 'bg-gray-300',
    _vm.enabled ? 'cursor-pointer' : 'cursor-not-allowed'
  ],on:{"click":function($event){return _vm.$emit('action')}}},[_vm._ssrNode(_vm._ssrEscape("\n  "+_vm._s(_vm.value)+"\n"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Button.vue?vue&type=template&id=45e28faa&

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
    },
    padding: {
      type: String,
      required: false,
      default: "px-6 py-4"
    },
    enabled: {
      type: Boolean,
      required: false,
      default: true
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
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Input.vue?vue&type=template&id=d110d27a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"relative px-3 py-2",class:[_vm.border, _vm.customClass]},[_vm._ssrNode("<div class=\"mb-1 text-xs text-grayscale-400\">"+_vm._ssrEscape(_vm._s(_vm.label))+"</div> <input type=\"text\""+(_vm._ssrAttr("placeholder",_vm.placeholder))+(_vm._ssrAttr("readonly",_vm.readonly))+(_vm._ssrAttr("value",_vm.value))+" class=\"w-full border-none outline-none\"> "+((_vm.icon)?("<div class=\"absolute w-6 h-6 right-3 top-4\"><img"+(_vm._ssrAttr("src",__webpack_require__(88)("./" + _vm.icon)))+" alt=\"Search\"></div>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Input.vue?vue&type=template&id=d110d27a&

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
    },
    icon: {
      type: String,
      required: false
    },
    readonly: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    updateValue: function (value) {
      this.$emit('input', value);
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
installComponents(component, {Input: __webpack_require__(37).default})


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.e641656.png";

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMi4zMTE2IDQuOTc0MzdDMTAuNjU2NCA0Ljk3NDM3IDkuMzE0NiA2LjMxNjE3IDkuMzE0NiA3Ljk3MTM3VjkuMDA5N0g5LjIzNjc5QzguMjAzMzMgOS4wMDk3IDcuMzQwMDYgOS43OTcwOCA3LjI0NTIzIDEwLjgyNjJMNi42MTM4MyAxNy42NzgxQzYuNTA1ODIgMTguODUwMSA3LjQyODM1IDE5Ljg2MTYgOC42MDUzOSAxOS44NjE2SDE2LjE0MDRDMTcuMzE3NCAxOS44NjE2IDE4LjIzOTkgMTguODUwMSAxOC4xMzE5IDE3LjY3ODFMMTcuNTAwNSAxMC44MjYyQzE3LjQwNTcgOS43OTcwOCAxNi41NDI0IDkuMDA5NyAxNS41MDkgOS4wMDk3SDE1LjMwODZWNy45NzEzN0MxNS4zMDg2IDYuMzE2MTcgMTMuOTY2OCA0Ljk3NDM3IDEyLjMxMTYgNC45NzQzN1pNMTAuODY2MiA4LjAwMTg4VjkuMDA5N0gxMy43NTY5VjguMDAxODhDMTMuNzU2OSA3LjIwMzY1IDEzLjEwOTggNi41NTY1NSAxMi4zMTE2IDYuNTU2NTVDMTEuNTEzMyA2LjU1NjU1IDEwLjg2NjIgNy4yMDM2NSAxMC44NjYyIDguMDAxODhaTTkuNDAzIDEwLjUyMUM5LjA0MTQ5IDEwLjUyMSA4LjczOTQ1IDEwLjc5NjMgOC43MDYgMTEuMTU2Mkw4LjEzOTE1IDE3LjI1NzhDOC4wODQ2OCAxNy44NDQxIDguNTQ2MDUgMTguMzUwNCA5LjEzNDg2IDE4LjM1MDRIMTUuNjExQzE2LjE5OTggMTguMzUwNCAxNi42NjEyIDE3Ljg0NDEgMTYuNjA2NyAxNy4yNTc4TDE2LjAzOTkgMTEuMTU2MkMxNi4wMDY0IDEwLjc5NjMgMTUuNzA0NCAxMC41MjEgMTUuMzQyOSAxMC41MjFIOS40MDNaIiBmaWxsPSIjNjQ3NDhCIi8+Cjwvc3ZnPgo="

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/profile-white.2278f5b.svg";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/user.cbac4ab.png";

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNCAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuNDUzMDggMTQuODE4NUM0LjAyOTI1IDE1LjE3MjYgMy45NzI3MyAxNS44MDMzIDQuMzI2ODMgMTYuMjI3MUM0LjY4MDkzIDE2LjY1MDkgNS4zMTE1NyAxNi43MDc0IDUuNzM1NCAxNi4zNTMzTDQuNDUzMDggMTQuODE4NVpNMTIuMDMxMyA5Ljc5MDE2TDEyLjY3NTggOS4wMjU2MUMxMi4zMDQ3IDguNzEyNzYgMTEuNzYyNiA4LjcxMTU1IDExLjM5MDEgOS4wMjI3NUwxMi4wMzEzIDkuNzkwMTZaTTE4LjI2MTMgMTYuMzUwNUMxOC42ODM1IDE2LjcwNjUgMTkuMzE0NCAxNi42NTI4IDE5LjY3MDQgMTYuMjMwNUMyMC4wMjY0IDE1LjgwODMgMTkuOTcyNyAxNS4xNzc0IDE5LjU1MDQgMTQuODIxNEwxOC4yNjEzIDE2LjM1MDVaTTUuNzM1NCAxNi4zNTMzTDEyLjY3MjQgMTAuNTU3NkwxMS4zOTAxIDkuMDIyNzVMNC40NTMwOCAxNC44MTg1TDUuNzM1NCAxNi4zNTMzWk0xMS4zODY3IDEwLjU1NDdMMTguMjYxMyAxNi4zNTA1TDE5LjU1MDQgMTQuODIxNEwxMi42NzU4IDkuMDI1NjFMMTEuMzg2NyAxMC41NTQ3WiIgZmlsbD0iIzY0NzQ4QiIvPgo8L3N2Zz4K"

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNyAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjEzNjcgOC4wNDQ5MkwzLjg1NzI3IDEzLjM3ODNMMy44NTcyNyAyLjcxMTU5TDEzLjEzNjcgOC4wNDQ5MloiIGZpbGw9IiNGOEZBRkMiLz4KPC9zdmc+Cg=="

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjYyMTkgMTguODIzNUMxNi4zMzg5IDE4LjgyMzUgMTkuMzUyMiAxNS44MTAyIDE5LjM1MjIgMTIuMDkzMkMxOS4zNTIyIDguMzc2MTcgMTYuMzM4OSA1LjM2MjkyIDEyLjYyMTkgNS4zNjI5Mk0xMi42MjE5IDE4LjgyMzVDOC45MDQ4NSAxOC44MjM1IDUuODkxNiAxNS44MTAyIDUuODkxNiAxMi4wOTMyQzUuODkxNiA4LjM3NjE3IDguOTA0ODUgNS4zNjI5MiAxMi42MjE5IDUuMzYyOTJNMTIuNjIxOSAxOC44MjM1QzE0LjI3MjggMTguODIzNSAxNS42MTEyIDE1LjgxMDIgMTUuNjExMiAxMi4wOTMyQzE1LjYxMTIgOC4zNzYxNiAxNC4yNzI4IDUuMzYyOTIgMTIuNjIxOSA1LjM2MjkyTTEyLjYyMTkgMTguODIzNUMxMC45NzA5IDE4LjgyMzUgOS42MzI1NSAxNS44MTAyIDkuNjMyNTUgMTIuMDkzMkM5LjYzMjU1IDguMzc2MTYgMTAuOTcwOSA1LjM2MjkyIDEyLjYyMTkgNS4zNjI5Mk02LjMxOTggOS43MjU3MkgxOC45MjRNNi4yNTU0NyAxNC4yODE4SDE4Ljk4ODMiIHN0cm9rZT0iI0Y4RkFGQyIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPC9zdmc+Cg=="

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwLjA0NjkgOS44ODMyM0MyMC40NzA3IDkuNTI5MTMgMjAuNTI3MyA4Ljg5ODQ5IDIwLjE3MzIgOC40NzQ2NkMxOS44MTkxIDguMDUwODQgMTkuMTg4NCA3Ljk5NDMxIDE4Ljc2NDYgOC4zNDg0MUwyMC4wNDY5IDkuODgzMjNaTTEyLjQ2ODcgMTQuOTExNkwxMS44MjQyIDE1LjY3NjFDMTIuMTk1MyAxNS45ODkgMTIuNzM3NCAxNS45OTAyIDEzLjEwOTkgMTUuNjc5TDEyLjQ2ODcgMTQuOTExNlpNNi4yMzg3MiA4LjM1MTI3QzUuODE2NDggNy45OTUyOSA1LjE4NTYgOC4wNDkwMSA0LjgyOTYxIDguNDcxMjVDNC40NzM2MiA4Ljg5MzUgNC41MjczNCA5LjUyNDM4IDQuOTQ5NTkgOS44ODAzN0w2LjIzODcyIDguMzUxMjdaTTE4Ljc2NDYgOC4zNDg0MUwxMS44Mjc2IDE0LjE0NDJMMTMuMTA5OSAxNS42NzlMMjAuMDQ2OSA5Ljg4MzIzTDE4Ljc2NDYgOC4zNDg0MVpNMTMuMTEzMyAxNC4xNDcxTDYuMjM4NzIgOC4zNTEyN0w0Ljk0OTU5IDkuODgwMzdMMTEuODI0MiAxNS42NzYxTDEzLjExMzMgMTQuMTQ3MVoiIGZpbGw9IiNGOEZBRkMiLz4KPC9zdmc+Cg=="

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/info.8befc3f.svg";

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNCAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuMDg2NSA1LjQ4NzQ4QzUuNjk1OTggNS4wOTY5NiA1LjA2MjgxIDUuMDk2OTYgNC42NzIyOSA1LjQ4NzQ4QzQuMjgxNzcgNS44NzggNC4yODE3NyA2LjUxMTE3IDQuNjcyMjkgNi45MDE2OUw2LjA4NjUgNS40ODc0OFpNMTcuOTYxMiAyMC4xOTA2QzE4LjM1MTcgMjAuNTgxMSAxOC45ODQ5IDIwLjU4MTEgMTkuMzc1NCAyMC4xOTA2QzE5Ljc2NTkgMTkuODAwMSAxOS43NjU5IDE5LjE2NjkgMTkuMzc1NCAxOC43NzY0TDE3Ljk2MTIgMjAuMTkwNlpNMTkuMzc1NCA2LjkwMTY5QzE5Ljc2NTkgNi41MTExNiAxOS43NjU5IDUuODc4IDE5LjM3NTQgNS40ODc0N0MxOC45ODQ5IDUuMDk2OTUgMTguMzUxNyA1LjA5Njk1IDE3Ljk2MTIgNS40ODc0N0wxOS4zNzU0IDYuOTAxNjlaTTQuNjcyMjkgMTguNzc2NEM0LjI4MTc2IDE5LjE2NjkgNC4yODE3NiAxOS44MDAxIDQuNjcyMjkgMjAuMTkwNkM1LjA2MjgxIDIwLjU4MTEgNS42OTU5OCAyMC41ODExIDYuMDg2NSAyMC4xOTA2TDQuNjcyMjkgMTguNzc2NFpNNC42NzIyOSA2LjkwMTY5TDExLjMxNjcgMTMuNTQ2MUwxMi43MzA5IDEyLjEzMTlMNi4wODY1IDUuNDg3NDhMNC42NzIyOSA2LjkwMTY5Wk0xMS4zMTY3IDEzLjU0NjFMMTcuOTYxMiAyMC4xOTA2TDE5LjM3NTQgMTguNzc2NEwxMi43MzA5IDEyLjEzMTlMMTEuMzE2NyAxMy41NDYxWk0xNy45NjEyIDUuNDg3NDdMMTEuMzE2NyAxMi4xMzE5TDEyLjczMDkgMTMuNTQ2MUwxOS4zNzU0IDYuOTAxNjlMMTcuOTYxMiA1LjQ4NzQ3Wk0xMS4zMTY3IDEyLjEzMTlMNC42NzIyOSAxOC43NzY0TDYuMDg2NSAyMC4xOTA2TDEyLjczMDkgMTMuNTQ2MUwxMS4zMTY3IDEyLjEzMTlaIiBmaWxsPSIjNjQ3NDhCIi8+Cjwvc3ZnPgo="

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/english.830247c.svg";

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNCAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuMDExOTYgNy40MTc5N0M0LjAxMTk2IDYuODY1NjggNC40NTk2OCA2LjQxNzk3IDUuMDExOTYgNi40MTc5N0gxOS4wMDAxQzE5LjU1MjMgNi40MTc5NyAyMC4wMDAxIDYuODY1NjggMjAuMDAwMSA3LjQxNzk3QzIwLjAwMDEgNy45NzAyNSAxOS41NTIzIDguNDE3OTcgMTkuMDAwMSA4LjQxNzk3SDUuMDExOTZDNC40NTk2OCA4LjQxNzk3IDQuMDExOTYgNy45NzAyNSA0LjAxMTk2IDcuNDE3OTdaIiBmaWxsPSIjNjQ3NDhCIi8+CjxwYXRoIGQ9Ik00LjAxMTk2IDEyLjQxOEM0LjAxMTk2IDExLjg2NTcgNC40NTk2OCAxMS40MTggNS4wMTE5NiAxMS40MThIMTkuMDAwMUMxOS41NTIzIDExLjQxOCAyMC4wMDAxIDExLjg2NTcgMjAuMDAwMSAxMi40MThDMjAuMDAwMSAxMi45NzAzIDE5LjU1MjMgMTMuNDE4IDE5LjAwMDEgMTMuNDE4SDUuMDExOTZDNC40NTk2OCAxMy40MTggNC4wMTE5NiAxMi45NzAzIDQuMDExOTYgMTIuNDE4WiIgZmlsbD0iIzY0NzQ4QiIvPgo8cGF0aCBkPSJNNS4wMTE5NiAxNi40MThDNC40NTk2OCAxNi40MTggNC4wMTE5NiAxNi44NjU3IDQuMDExOTYgMTcuNDE4QzQuMDExOTYgMTcuOTcwMyA0LjQ1OTY4IDE4LjQxOCA1LjAxMTk2IDE4LjQxOEgxOS4wMDAxQzE5LjU1MjMgMTguNDE4IDIwLjAwMDEgMTcuOTcwMyAyMC4wMDAxIDE3LjQxOEMyMC4wMDAxIDE2Ljg2NTcgMTkuNTUyMyAxNi40MTggMTkuMDAwMSAxNi40MThINS4wMTE5NloiIGZpbGw9IiM2NDc0OEIiLz4KPC9zdmc+Cg=="

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDEiIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCA0MSA0MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMi42Nzc3IDMzLjIzOTlDMjIuMDQ4MyAzMy4zMzEgMjEuNDA0NyAzMy4zNzgyIDIwLjc1MDEgMzMuMzc4MkMyMC41MDg4IDMzLjM3ODIgMjAuMjY5IDMzLjM3MTggMjAuMDMwOCAzMy4zNTkxQzIwLjI2OSAzMy4zNzE3IDIwLjUwODggMzMuMzc4IDIwLjc1MDEgMzMuMzc4QzIxLjQwNDggMzMuMzc4IDIyLjA0ODQgMzMuMzMgMjIuNjc3NyAzMy4yMzk5Wk0yMi44MzMzIDMzLjIxNjRWMjMuODk5N0gyNS45NDAyTDI2LjUzMDggMjAuMDQ0NkgyMi44MzMzVjE3LjU0MzNDMjIuODMzMyAxNi40ODk2IDIzLjM0ODkgMTUuNDYwMiAyNS4wMDY0IDE1LjQ2MDJIMjYuNjg4M1YxMi4xNzg5QzI2LjY4ODMgMTIuMTc4OSAyNS4xNjIgMTEuOTE4MyAyMy43MDMzIDExLjkxODNDMjAuNjU4MiAxMS45MTgzIDE4LjY2NjkgMTMuNzYzMyAxOC42NjY5IDE3LjEwNjVWMjAuMDQ0NkgxNS4yODA2VjIzLjg5OTdIMTguNjY2OVYzMy4yMTY0QzEyLjI5MjYgMzIuMjE2MyA3LjQxNjc1IDI2LjcgNy40MTY3NSAyMC4wNDQ5QzcuNDE2NzUgMTIuNjgxMSAxMy4zODYzIDYuNzExNTUgMjAuNzUwMSA2LjcxMTU1QzI4LjExMzkgNi43MTE1NSAzNC4wODM0IDEyLjY4MTEgMzQuMDgzNCAyMC4wNDQ5QzM0LjA4MzQgMjYuNyAyOS4yMDc2IDMyLjIxNjMgMjIuODMzMyAzMy4yMTY0WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/footer-instagram.1a44648.svg";

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDEiIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCA0MSA0MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMwLjEzODggMjkuNDMzNEgyNi4xODc1VjIzLjI0NTVDMjYuMTg3NSAyMS43Njk5IDI2LjE2MTEgMTkuODcwNCAyNC4xMzI0IDE5Ljg3MDRDMjIuMDc0NCAxOS44NzA0IDIxLjc1OTUgMjEuNDc4IDIxLjc1OTUgMjMuMTM4VjI5LjQzMjlIMTcuODA4M1YxNi43MDgxSDIxLjYwMTRWMTguNDQ3SDIxLjY1NDZDMjIuNDI3IDE3LjEyNjUgMjMuODY4MyAxNi4zMzQ5IDI1LjM5NzIgMTYuMzkxNkMyOS40MDIgMTYuMzkxNiAzMC4xNDA1IDE5LjAyNTggMzAuMTQwNSAyMi40NTI4TDMwLjEzODggMjkuNDMzNFpNMTMuMzQ5OSAxNC45Njg2QzEyLjA5MiAxNC45Njg2IDExLjA1NjQgMTMuOTMzNyAxMS4wNTY0IDEyLjY3NThDMTEuMDU2NCAxMS40MTc4IDEyLjA5MTUgMTAuMzgyNyAxMy4zNDk0IDEwLjM4MjdDMTQuNjA3MiAxMC4zODI3IDE1LjY0MjIgMTEuNDE3NiAxNS42NDI0IDEyLjY3NTNDMTUuNjQyNCAxMy45MzI5IDE0LjYwNzYgMTQuOTY4NSAxMy4zNDk5IDE0Ljk2ODZaTTE1LjMyNTUgMjkuNDMzNEgxMS4zNzAxVjE2LjcwODFIMTUuMzI1NVYyOS40MzM0Wk0zMi4xMDg2IDYuNzEzMzlIOS4zODQ0OEM4LjMxNzc4IDYuNzAxMzQgNy40Mjk3NSA3LjU2ODczIDcuNDE2NzUgOC42MzU0NFYzMS40NTM5QzcuNDI5MjcgMzIuNTIxMiA4LjMxNzE4IDMzLjM4OTUgOS4zODQ0OCAzMy4zNzgxSDMyLjEwODZDMzMuMTc4NSAzMy4zOTE1IDM0LjA2OTUgMzIuNTIzMyAzNC4wODM4IDMxLjQ1MzlWOC42MzM4OUMzNC4wNjk1IDcuNTY0OTEgMzMuMTc3MyA2LjY5NzY0IDMyLjEwODYgNi43MTE3MlY2LjcxMzM5WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/footer-twitter.7344acd.svg";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/footer-whatsapp.42f1d55.svg";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/flip-button-mobile.01b06a6.svg";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/flip-button.42f5fc9.svg";

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMi4xNTE2IDIwLjgyNDJDMTYuNTg4NiAyMC44MjQyIDIwLjE4NTUgMTcuMjI3MyAyMC4xODU1IDEyLjc5MDNDMjAuMTg1NSA4LjM1MzMxIDE2LjU4ODYgNC43NTY0MSAxMi4xNTE2IDQuNzU2NDFDNy43MTQ1OCA0Ljc1NjQxIDQuMTE3NjggOC4zNTMzMSA0LjExNzY4IDEyLjc5MDNDNC4xMTc2OCAxNy4yMjczIDcuNzE0NTggMjAuODI0MiAxMi4xNTE2IDIwLjgyNDJaTTEyLjE1MTYgNy40NjA4MkMxMS4xNzQ0IDcuNDYwODIgMTAuNDE1OCA4LjMxMzAxIDEwLjUyOSA5LjI4MzYyTDExLjExOTcgMTQuMzQ4MkMxMS4xODA4IDE0Ljg3MTkgMTEuNjI0NCAxNS4yNjY3IDEyLjE1MTYgMTUuMjY2N0MxMi42Nzg4IDE1LjI2NjcgMTMuMTIyNCAxNC44NzE5IDEzLjE4MzUgMTQuMzQ4MkwxMy43NzQyIDkuMjgzNjJDMTMuODg3NCA4LjMxMzAxIDEzLjEyODggNy40NjA4MiAxMi4xNTE2IDcuNDYwODJaTTEyLjE1MTYgMTguMTE5OEMxMi43MTA4IDE4LjExOTggMTMuMTY0MSAxNy42NjY1IDEzLjE2NDEgMTcuMTA3M0MxMy4xNjQxIDE2LjU0OCAxMi43MTA4IDE2LjA5NDcgMTIuMTUxNiAxNi4wOTQ3QzExLjU5MjQgMTYuMDk0NyAxMS4xMzkgMTYuNTQ4IDExLjEzOSAxNy4xMDczQzExLjEzOSAxNy42NjY1IDExLjU5MjQgMTguMTE5OCAxMi4xNTE2IDE4LjExOThaIiBmaWxsPSIjQjkyNjIyIi8+Cjwvc3ZnPgo="

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/email-sent-success.d4c26fd.svg";

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjE4NTUgMTQuNTUwM0MxMy41MTEgMTQuNTUwMyAxNC41ODU1IDEzLjU0MjkgMTQuNTg1NSAxMi4zMDAzQzE0LjU4NTUgMTEuMDU3NiAxMy41MTEgMTAuMDUwMyAxMi4xODU1IDEwLjA1MDNDMTAuODYwMSAxMC4wNTAzIDkuNzg1NTUgMTEuMDU3NiA5Ljc4NTU1IDEyLjMwMDNDOS43ODU1NSAxMy41NDI5IDEwLjg2MDEgMTQuNTUwMyAxMi4xODU1IDE0LjU1MDNaIiBmaWxsPSIjNjQ3NDhCIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAuMTg1NSAxMi4zMDAzQzIwLjE4NTUgMTUuNjE0IDE2LjYwMzggMTguMzAwMyAxMi4xODU1IDE4LjMwMDNDNy43NjcyNyAxOC4zMDAzIDQuMTg1NTUgMTUuNjE0IDQuMTg1NTUgMTIuMzAwM0M0LjE4NTU1IDguOTg2NTUgNy43NjcyNyA2LjMwMDI2IDEyLjE4NTUgNi4zMDAyNkMxNi42MDM4IDYuMzAwMjYgMjAuMTg1NSA4Ljk4NjU1IDIwLjE4NTUgMTIuMzAwM1pNMTYuOTg1NSAxMi4zMDAzQzE2Ljk4NTUgMTQuNzg1NSAxNC44MzY1IDE2LjgwMDMgMTIuMTg1NSAxNi44MDAzQzkuNTM0NTggMTYuODAwMyA3LjM4NTU1IDE0Ljc4NTUgNy4zODU1NSAxMi4zMDAzQzcuMzg1NTUgOS44MTQ5OCA5LjUzNDU4IDcuODAwMjYgMTIuMTg1NSA3LjgwMDI2QzE0LjgzNjUgNy44MDAyNiAxNi45ODU1IDkuODE0OTggMTYuOTg1NSAxMi4zMDAzWiIgZmlsbD0iIzY0NzQ4QiIvPgo8L3N2Zz4K"

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-star-air.0033deb.png";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/membership-card-gold.c1f433d.png";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/membership-card-silver.0204b0c.png";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/check.788163c.png";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/membership-card.5b2410e.png";

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNCAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSI2LjcxODc1IiByPSIyIiBmaWxsPSIjNjQ3NDhCIi8+CjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIuNzE4OCIgcj0iMiIgZmlsbD0iIzY0NzQ4QiIvPgo8Y2lyY2xlIGN4PSIxMiIgY3k9IjE4LjcxODgiIHI9IjIiIGZpbGw9IiM2NDc0OEIiLz4KPC9zdmc+Cg=="

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/current-tier.8ed4ecc.png";

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjUiIGhlaWdodD0iNjUiIHZpZXdCb3g9IjAgMCA2NSA2NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQyLjQxOTkgMTguMTcxOEM0MS40NzU3IDE3LjA0MTYgMzkuNzk0IDE2Ljg5MDkgMzguNjYzNyAxNy44MzUyQzM3LjUzMzUgMTguNzc5NCAzNy4zODI4IDIwLjQ2MTEgMzguMzI3MSAyMS41OTEzTDQ1LjI1OTIgMjkuODg4NUwxNS4zNzU3IDI5Ljg4ODVDMTMuOTAyOSAyOS44ODg1IDEyLjcwOSAzMS4wODI0IDEyLjcwOSAzMi41NTUxQzEyLjcwOSAzNC4wMjc5IDEzLjkwMjkgMzUuMjIxOCAxNS4zNzU3IDM1LjIyMThMNDQuOTkxOCAzNS4yMjE4TDM4LjMzNDcgNDMuMTE4QzM3LjM4NTQgNDQuMjQ0IDM3LjUyODcgNDUuOTI2MyAzOC42NTQ3IDQ2Ljg3NTZDMzkuNzgwNiA0Ny44MjQ5IDQxLjQ2MyA0Ny42ODE3IDQyLjQxMjMgNDYuNTU1N0w1Mi44ODQzIDM0LjEzNDRDNTMuNzE4NiAzMy4xNDQ5IDUzLjcyMTggMzEuNjk5MSA1Mi44OTE5IDMwLjcwNThMNDIuNDE5OSAxOC4xNzE4WiIgZmlsbD0iIzMwN0JEMyIvPgo8L3N2Zz4K"

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjUiIGhlaWdodD0iNjUiIHZpZXdCb3g9IjAgMCA2NSA2NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ2Ljc5ODkgMjMuMDU2NkM0Ny45MjkxIDI0LjAwMDkgNDguMDc5OCAyNS42ODI2IDQ3LjEzNTUgMjYuODEyOEM0Ni4xOTEzIDI3Ljk0MyA0NC41MDk2IDI4LjA5MzggNDMuMzc5NCAyNy4xNDk1TDM1LjA4MjMgMjAuMjE3NEwzNS4wODIyIDUwLjEwMDlDMzUuMDgyMiA1MS41NzM3IDMzLjg4ODMgNTIuNzY3NiAzMi40MTU2IDUyLjc2NzZDMzAuOTQyOCA1Mi43Njc2IDI5Ljc0ODkgNTEuNTczNyAyOS43NDg5IDUwLjEwMDlMMjkuNzQ4OSAyMC40ODQ4TDIxLjg1MjcgMjcuMTQxOUMyMC43MjY3IDI4LjA5MTEgMTkuMDQ0NCAyNy45NDc5IDE4LjA5NTEgMjYuODIxOUMxNy4xNDU4IDI1LjY5NTkgMTcuMjg5IDI0LjAxMzYgMTguNDE1IDIzLjA2NDNMMzAuODM2MyAxMi41OTIzQzMxLjgyNTggMTEuNzU4IDMzLjI3MTYgMTEuNzU0OCAzNC4yNjQ5IDEyLjU4NDZMNDYuNzk4OSAyMy4wNTY2WiIgZmlsbD0iIzMwN0JEMyIvPgo8L3N2Zz4K"

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNCAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjEzMDUgMjAuNDMzN0MxNC40ODQ2IDIwLjg1NzUgMTUuMTE1MiAyMC45MTQxIDE1LjUzOSAyMC41NkMxNS45NjI5IDIwLjIwNTkgMTYuMDE5NCAxOS41NzUyIDE1LjY2NTMgMTkuMTUxNEwxNC4xMzA1IDIwLjQzMzdaTTkuMTAyMDkgMTIuODU1NUw4LjMzNzU1IDEyLjIxMUM4LjAyNDY5IDEyLjU4MjEgOC4wMjM0OSAxMy4xMjQyIDguMzM0NjkgMTMuNDk2N0w5LjEwMjA5IDEyLjg1NTVaTTE1LjY2MjQgNi42MjU1MkMxNi4wMTg0IDYuMjAzMjcgMTUuOTY0NyA1LjU3MjM5IDE1LjU0MjQgNS4yMTY0QzE1LjEyMDIgNC44NjA0MiAxNC40ODkzIDQuOTE0MTMgMTQuMTMzMyA1LjMzNjM4TDE1LjY2MjQgNi42MjU1MlpNMTUuNjY1MyAxOS4xNTE0TDkuODY5NSAxMi4yMTQ0TDguMzM0NjkgMTMuNDk2N0wxNC4xMzA1IDIwLjQzMzdMMTUuNjY1MyAxOS4xNTE0Wk05Ljg2NjY0IDEzLjUwMDFMMTUuNjYyNCA2LjYyNTUyTDE0LjEzMzMgNS4zMzYzOEw4LjMzNzU1IDEyLjIxMUw5Ljg2NjY0IDEzLjUwMDFaIiBmaWxsPSIjNjQ3NDhCIi8+Cjwvc3ZnPgo="

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/book-a-flight.531d0b4.png";

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuMzQzMjYgMTguMDA0NkM0LjM0MzI2IDE3LjQ1MjMgNC43OTA5OCAxNy4wMDQ2IDUuMzQzMjYgMTcuMDA0NkgxOS4zMTk1QzE5Ljg3MTcgMTcuMDA0NiAyMC4zMTk1IDE3LjQ1MjMgMjAuMzE5NSAxOC4wMDQ2QzIwLjMxOTUgMTguNTU2OSAxOS44NzE3IDE5LjAwNDYgMTkuMzE5NSAxOS4wMDQ2SDUuMzQzMjZDNC43OTA5OCAxOS4wMDQ2IDQuMzQzMjYgMTguNTU2OSA0LjM0MzI2IDE4LjAwNDZaIiBmaWxsPSIjMjI0Q0ExIi8+CjxwYXRoIGQ9Ik0xMS4zNjg0IDcuMDA0OTNMMTQuNTY4NyA5LjEyMjc3TDE2LjkyNDggNy42NzkxQzE3LjY5NTQgNy4yMDY5MSAxOC42OTggNy4zOTEyNSAxOS4yNTAyIDguMTA2NjdDMTkuNTgxNSA4LjUzNTgxIDE5LjQ1MjUgOS4xNTkyMyAxOC45NzgxIDkuNDIxNjNMOS4zNDA3OCAxNC43NTIyQzkuMTc5MTQgMTQuODQxNiA4Ljk5NTg5IDE0Ljg4NDUgOC44MTEzNiAxNC44NzYxTDcuMjM1MDIgMTQuODA0NUM3LjE0MTk4IDE0LjgwMDIgNy4wNTE5OCAxNC43NzAxIDYuOTc1MTUgMTQuNzE3NUw0Ljc4MjU5IDEzLjIxNTVMNS45MTcwMyAxMi41NjM1QzYuMTk4MSAxMi40MDIgNi41NDAwNCAxMi4zODY3IDYuODM0MzggMTIuNTIyNkw4LjAyMDM2IDEzLjA3TDExLjQ1ODIgMTAuOTk2M0w4LjYwMjQ0IDcuOTQwNDNMMTAuMzI1IDYuOTY4MDRDMTAuNjUyMSA2Ljc4MzM3IDExLjA1NTEgNi43OTc2MiAxMS4zNjg0IDcuMDA0OTNaIiBmaWxsPSIjMjI0Q0ExIi8+Cjwvc3ZnPgo="

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/earn-point.dd9fafd.png";

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/flight-info.15b54ac.svg";

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/my-trip.4a965be.svg";

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pay-with-star-points.81b6c5e.png";

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/redeem-2.30a008f.png";

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/redeem-3.ca40aed.png";

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/redeem-4.121d7b9.png";

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/redem-1.eb94999.png";

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/stay-at-hotel.588dd9d.png";

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner-mobile.c1b20c7.jpg";

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner.8ec9fec.jpg";

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDkiIGhlaWdodD0iNDkiIHZpZXdCb3g9IjAgMCA0OSA0OSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQuMTg1NSIgY3k9IjI0LjQxOCIgcj0iMjQiIGZpbGw9IiM0MjY3QjIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNi4xMTQyIDM3LjYxMjhDMjUuNDg0NSAzNy43MDQxIDI0Ljg0MDQgMzcuNzUxMyAyNC4xODU0IDM3Ljc1MTNDMjMuOTQzNyAzNy43NTEzIDIzLjcwMzYgMzcuNzQ0OSAyMy40NjUxIDM3LjczMjJDMjMuNzAzNiAzNy43NDQ4IDIzLjk0MzcgMzcuNzUxMSAyNC4xODU0IDM3Ljc1MTFDMjQuODQwNSAzNy43NTExIDI1LjQ4NDUgMzcuNzAzIDI2LjExNDIgMzcuNjEyOFpNMjYuMjY4NiAzNy41ODk1VjI4LjI3MjhIMjkuMzc1NUwyOS45NjYxIDI0LjQxNzdIMjYuMjY4NlYyMS45MTY0QzI2LjI2ODYgMjAuODYyNyAyNi43ODQyIDE5LjgzMzMgMjguNDQxNyAxOS44MzMzSDMwLjEyMzZWMTYuNTUyQzMwLjEyMzYgMTYuNTUyIDI4LjU5NzQgMTYuMjkxNCAyNy4xMzg2IDE2LjI5MTRDMjQuMDkzNSAxNi4yOTE0IDIyLjEwMjMgMTguMTM2NCAyMi4xMDIzIDIxLjQ3OTZWMjQuNDE3N0gxOC43MTU5VjI4LjI3MjhIMjIuMTAyM1YzNy41ODk1QzE1LjcyNzkgMzYuNTg5NCAxMC44NTIxIDMxLjA3MzEgMTAuODUyMSAyNC40MThDMTAuODUyMSAxNy4wNTQyIDE2LjgyMTYgMTEuMDg0NyAyNC4xODU0IDExLjA4NDdDMzEuNTQ5MiAxMS4wODQ3IDM3LjUxODcgMTcuMDU0MiAzNy41MTg3IDI0LjQxOEMzNy41MTg3IDMxLjA3MzEgMzIuNjQyOSAzNi41ODk0IDI2LjI2ODYgMzcuNTg5NVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/google.27f3ea6.svg";

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/newsletter-mobile.3eb81db.png";

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/newsletter.eb73f33.png";

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/twitter.cca7832.svg";

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./alert-info.svg": 57,
	"./arrow-bottom-gray.svg": 35,
	"./arrow-bottom.svg": 45,
	"./arrow-left.svg": 69,
	"./arrow-right.svg": 43,
	"./arrow-up-gray.svg": 42,
	"./banner-mobile.jpg": 81,
	"./banner-mobile.png": 89,
	"./banner.jpg": 82,
	"./banner.png": 90,
	"./bg-forgot-password.png": 17,
	"./bg-login.png": 16,
	"./book-a-flight.png": 70,
	"./book.svg": 71,
	"./check.png": 63,
	"./close.svg": 47,
	"./current-tier.png": 66,
	"./earn-point-1.jpg": 91,
	"./earn-point-2.jpg": 92,
	"./earn-point-3.jpg": 93,
	"./earn-point-4.jpg": 94,
	"./earn-point-5.jpg": 95,
	"./earn-point-6.jpg": 96,
	"./earn-point-7.jpg": 97,
	"./earn-point-8.jpg": 98,
	"./earn-point-9.jpg": 99,
	"./earn-point.png": 72,
	"./email-sent-success.svg": 58,
	"./english.svg": 48,
	"./eye.svg": 59,
	"./facebook.svg": 83,
	"./flight-info.svg": 73,
	"./flip-button-mobile.svg": 55,
	"./flip-button.svg": 56,
	"./footer-facebook.svg": 50,
	"./footer-instagram.svg": 51,
	"./footer-linkedin.svg": 52,
	"./footer-twitter.svg": 53,
	"./footer-whatsapp.svg": 54,
	"./globe.svg": 44,
	"./google.svg": 84,
	"./info.svg": 46,
	"./logo-star-air.png": 60,
	"./logo.png": 38,
	"./logo.svg": 100,
	"./membership-card-gold.png": 61,
	"./membership-card-silver.png": 62,
	"./membership-card.png": 64,
	"./mobile-menu.svg": 49,
	"./my-trip.svg": 74,
	"./newsletter-mobile.png": 85,
	"./newsletter.png": 86,
	"./pay-with-star-points.png": 75,
	"./profile-white.svg": 40,
	"./redeem-2.png": 76,
	"./redeem-3.png": 77,
	"./redeem-4.png": 78,
	"./redem-1.png": 79,
	"./search.svg": 101,
	"./shopping-bag.svg": 39,
	"./stay-at-hotel.png": 80,
	"./three-dots.svg": 65,
	"./twitter.svg": 87,
	"./upgrade-right.svg": 67,
	"./upgrade-up.svg": 68,
	"./user.png": 41
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 88;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner-mobile.6c0987f.png";

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner.7f09f8c.png";

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/earn-point-1.f8daffa.jpg";

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/earn-point-2.b16c478.jpg";

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/earn-point-3.35285cb.jpg";

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/earn-point-4.d15ffc0.jpg";

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/earn-point-5.38270c5.jpg";

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/earn-point-6.2c669bf.jpg";

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/earn-point-7.66b5a16.jpg";

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/earn-point-8.69c3ff7.jpg";

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/earn-point-9.6fd8643.jpg";

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.f96665f.svg";

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS4wODA2IDE2LjIyOTdDMTQuMTAxNSAxNi44MzU5IDEyLjk0NyAxNy4xODU3IDExLjcxMDggMTcuMTg1N0M4LjE2OTk3IDE3LjE4NTcgNS4yOTk1NiAxNC4zMTUzIDUuMjk5NTYgMTAuNzc0NUM1LjI5OTU2IDcuMjMzNjkgOC4xNjk5NyA0LjM2MzI4IDExLjcxMDggNC4zNjMyOEMxNS4yNTE2IDQuMzYzMjggMTguMTIyIDcuMjMzNjkgMTguMTIyIDEwLjc3NDVDMTguMTIyIDEyLjM3MzQgMTcuNTM2OCAxMy44MzU1IDE2LjU2ODggMTQuOTU4NEwxOS4yMjY0IDE4LjAxNzhDMTkuNTgwOCAxOC40MjU5IDE5LjUzNzMgMTkuMDQ0IDE5LjEyOTMgMTkuMzk4NEMxOC43MjEzIDE5Ljc1MjggMTguMTAzMiAxOS43MDk0IDE3Ljc0ODcgMTkuMzAxM0wxNS4wODA2IDE2LjIyOTdaTTE2LjIzMzIgMTAuNzc0NUMxNi4yMzMyIDEzLjI3MjIgMTQuMjA4NSAxNS4yOTcgMTEuNzEwOCAxNS4yOTdDOS4yMTMxMSAxNS4yOTcgNy4xODgzNCAxMy4yNzIyIDcuMTg4MzQgMTAuNzc0NUM3LjE4ODM0IDguMjc2ODMgOS4yMTMxMSA2LjI1MjA2IDExLjcxMDggNi4yNTIwNkMxNC4yMDg1IDYuMjUyMDYgMTYuMjMzMiA4LjI3NjgzIDE2LjIzMzIgMTAuNzc0NVoiIGZpbGw9IiM2NDc0OEIiLz4KPC9zdmc+Cg=="

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Select.vue?vue&type=template&id=09995e40&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"h-full px-3 py-2",class:[_vm.border, _vm.customClass]},[_vm._ssrNode("<div class=\"mb-1 text-xs text-grayscale-400\">"+_vm._ssrEscape(_vm._s(_vm.label))+"</div> <select class=\"w-full border-none outline-none\">"+(_vm._ssrList((_vm.data),function(option,index){return ("<option"+(_vm._ssrAttr("value",option))+">"+_vm._ssrEscape("\n      "+_vm._s(option)+"\n    ")+"</option>")}))+"</select>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Select.vue?vue&type=template&id=09995e40&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Select.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Selectvue_type_script_lang_js_ = ({
  name: "Select",
  props: {
    data: {
      type: Array,
      required: false,
      default: []
    },
    selectedData: {
      type: String,
      required: false
    },
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
// CONCATENATED MODULE: ./components/Select.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Selectvue_type_script_lang_js_ = (Selectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Select.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Selectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "43a07669"
  
)

/* harmony default export */ var Select = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Select: __webpack_require__(102).default})


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=14032d60&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"w-full bg-primary-600 fixed top-0 z-10\"><div class=\"\n        container\n        mx-auto\n        h-10\n        text-grayscale-50 text-xs\n        flex\n        items-center\n      \"><div class=\"w-full hidden md:flex\"><div class=\"flex-1 flex items-center\"><span class=\"pr-3 font-medium\">News</span> <span><img"+(_vm._ssrAttr("src",__webpack_require__(43)))+" alt=\"arrow right\" class=\"inline-block\"></span> <span class=\"pl-3\">Information about travel policy due to the impact of COVID-19\n            outbreak</span></div> <div class=\"flex-1 text-right hidden md:inline\"><span class=\"pr-3\"><img"+(_vm._ssrAttr("src",__webpack_require__(44)))+" alt=\"globe\" class=\"inline-block\"></span> <span>English</span> <span class=\"pl-3\"><img"+(_vm._ssrAttr("src",__webpack_require__(45)))+" alt=\"arrow bottom\" class=\"inline-block\"></span></div></div> <div class=\"flex w-full md:hidden px-5 items-center\"><span><img"+(_vm._ssrAttr("src",__webpack_require__(46)))+" alt=\"arrow right\" class=\"inline-block\"></span> <span class=\"pl-2\">Policy due to the impact of COVID-19</span></div></div></div> <div class=\"h-10\"></div>")])}
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
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MainMenu.vue?vue&type=template&id=34c60a39&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"fixed z-10 w-full bg-white border-b top-10\">","</div>",[_vm._ssrNode("<div class=\"container items-center hidden mx-auto min-h-[90px] text-grayscale-500 md:flex\">","</div>",[_vm._ssrNode("<div class=\"flex-none\"><img"+(_vm._ssrAttr("src",__webpack_require__(38)))+" alt=\"Logo\" width=\"130\" class=\"inline-block cursor-pointer\"></div> "),_vm._ssrNode("<div class=\"flex-grow\">","</div>",[_vm._ssrNode("<div class=\"flex items-center justify-end gap-x-12\">","</div>",[_vm._ssrNode("<div class=\"flex-none cursor-pointer\">Home</div> <div class=\"flex-none\">\n            Earn\n            <img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" alt=\"arrow bottom\" class=\"inline-block\"></div> <div class=\"flex-none\">\n            Redeem\n            <img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" alt=\"arrow bottom\" class=\"inline-block\"></div> <div class=\"flex-none\">Shop</div> <div class=\"flex-none\">\n            Help\n            <img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" alt=\"arrow bottom\" class=\"inline-block\"></div> <div class=\"flex-none\"><img"+(_vm._ssrAttr("src",__webpack_require__(39)))+" alt=\"shopping bag\" class=\"inline-block align-middle\"> <span class=\"align-middle\">0 item (s)</span></div> "),(!_vm.isLoading)?_vm._ssrNode("<div>","</div>",[(_vm.userData.length == 0)?_vm._ssrNode("<div class=\"flex items-center py-3 gap-x-2\">","</div>",[_vm._ssrNode("<div class=\"w-32\">","</div>",[_c('NuxtLink',{attrs:{"to":"/login"}},[_c('Button',{attrs:{"value":"Login","border":"border-2 border-secondary-900","color":"text-secondary-900","background":"bg-white"}})],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-32\">","</div>",[_c('NuxtLink',{attrs:{"to":"/registration"}},[_c('Button',{attrs:{"value":"Sign Up"}})],1)],1)],2):_vm._ssrNode(("<div class=\"relative\"><div class=\"flex items-center py-6 cursor-pointer gap-x-5\"><div class=\"flex-none\"><img"+(_vm._ssrAttr("src",__webpack_require__(41)))+" alt=\"User\" class=\"w-6 h-6\"></div> <div class=\"flex-grow\"><div class=\"font-medium text-grayscale-900\">"+_vm._ssrEscape(_vm._s(_vm.userData.name))+"</div> <div class=\"text-xs text-primary-600\">"+_vm._ssrEscape(_vm._s(_vm.userData.avb_point)+" Star Points")+"</div></div> <div class=\"flex-none\"><img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" alt=\"arrow bottom\" class=\"inline-block\"></div></div> "+((_vm.isMenuOpen)?("<div class=\"absolute w-48 text-sm font-medium bg-white rounded-lg shadow-xl top-20\"><div class=\"px-5 py-3 cursor-pointer\">Overview</div> <div class=\"px-5 py-3 cursor-pointer\">User Profile</div> <div class=\"px-5 py-3 cursor-pointer\">Booking History</div> <div class=\"px-5 py-3 cursor-pointer\">Star Points</div> <div class=\"px-5 py-3 cursor-pointer\">Extend Membership</div> <div class=\"px-5 pt-3 pb-5 cursor-pointer\">Logout</div></div>"):"<!---->")+"</div>"))]):_vm._e()],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex items-center px-6 py-4 text-grayscale-500 md:hidden\">","</div>",[_c('NuxtLink',{attrs:{"to":"/"}},[_c('div',{staticClass:"flex-1"},[_c('img',{staticClass:"inline-block",attrs:{"src":__webpack_require__(38),"alt":"Logo","width":"130"}})])]),_vm._ssrNode(" <div class=\"flex items-center justify-end flex-1\"><div class=\"flex justify-end flex-1\"><img"+(_vm._ssrAttr("src",__webpack_require__(48)))+" alt=\"English\" class=\"inline-block\"> <span class=\"pl-2 text-xs\">EN</span></div> <div class=\"flex justify-end flex-1\"><img"+(_vm._ssrAttr("src",__webpack_require__(39)))+" alt=\"Shopping bag\" class=\"inline-block\"></div> <div class=\"flex justify-end flex-1\"><img"+(_vm._ssrAttr("src",__webpack_require__(49)))+" alt=\"English\" class=\"inline-block\"></div></div>")],2)],2),_vm._ssrNode(" <div class=\"h-16 mb-1 md:h-20\"></div> "),(_vm.isMenuMobileOpen)?_vm._ssrNode("<div class=\"fixed inset-0 z-20 bg-white\">","</div>",[_vm._ssrNode("<div class=\"flex p-6 text-grayscale-900\"><div class=\"flex-1\">Menu</div> <div class=\"flex-1\"><img"+(_vm._ssrAttr("src",__webpack_require__(47)))+" alt=\"Close\" class=\"float-right\"></div></div> "),_vm._ssrNode("<div class=\"px-6 py-4 text-white bg-secondary-900\">","</div>",[(_vm.userData.length == 0)?_vm._ssrNode("<div class=\"flex\">","</div>",[_c('NuxtLink',{attrs:{"to":"/account"}},[_c('div',{staticClass:"flex items-center flex-1 pt-2"},[_c('div',{staticClass:"flex-none"},[_c('img',{staticClass:"pr-4",attrs:{"src":__webpack_require__(40),"alt":"Profile"}})]),_vm._v(" "),_c('div',{staticClass:"flex-grow"},[_c('div',{staticClass:"font-semibold font-noto-sans"},[_vm._v("Account")]),_vm._v(" "),_c('div',{staticClass:"text-xs text-grayscale-200"},[_vm._v("0 Star Points")])])])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex justify-end flex-1 gap-x-4\">","</div>",[_vm._ssrNode("<div class=\"inline-block\">","</div>",[_c('NuxtLink',{attrs:{"to":"/login"}},[_c('Button',{attrs:{"value":"Login","border":"border-2 border-white","color":"text-white","background":"bg-secondary-900","padding":"py-4 px-3"}})],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"inline-block\">","</div>",[_c('NuxtLink',{attrs:{"to":"/registration"}},[_c('Button',{attrs:{"value":"Sign Up","padding":"py-4 px-3"}})],1)],1)],2)],2):_vm._ssrNode("<div class=\"flex\">","</div>",[_vm._ssrNode("<div class=\"flex items-center flex-1 pt-2\"><div class=\"flex-none\"><img"+(_vm._ssrAttr("src",__webpack_require__(40)))+" alt=\"Profile\" class=\"pr-4\"></div> <div class=\"flex-grow\"><div class=\"font-semibold font-noto-sans\">"+_vm._ssrEscape(_vm._s(_vm.userData.name))+"</div> <div class=\"text-xs text-grayscale-200\">"+_vm._ssrEscape(_vm._s(_vm.userData.avb_point)+" Star Points")+"</div></div></div> "),_vm._ssrNode("<div class=\"flex justify-end flex-1 gap-x-4\">","</div>",[_vm._ssrNode("<div>","</div>",[_c('Button',{attrs:{"value":"Logout","border":"border-2 border-white","color":"text-white","background":"bg-secondary-900","padding":"py-4 px-6"},on:{"action":_vm.goLogout}})],1)])],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"p-6 text-grayscale-500\">","</div>",[_vm._ssrNode("<div class=\"pb-4 font-medium border-b text-secondary-900\">","</div>",[_c('NuxtLink',{attrs:{"to":"/"}},[_vm._v("Home")])],1),_vm._ssrNode(" <div class=\"py-4 font-medium border-b\"><div class=\"flex\"><div class=\"flex-1\">Earn</div> <div class=\"flex-1\"><img"+(_vm._ssrAttr("src",__webpack_require__(42)))+" alt=\"Arrow up\" class=\"float-right\"></div></div></div> "),_vm._ssrNode("<div class=\"py-4 text-sm\">","</div>",[_c('NuxtLink',{attrs:{"to":"/earn-points"}},[_vm._v("How to Earn Points")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"py-4 text-sm\">","</div>",[_c('NuxtLink',{attrs:{"to":"/claim-missing-points"}},[_vm._v("Claim Missing Points")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"py-4 text-sm\">","</div>",[_c('NuxtLink',{attrs:{"to":"/buy-points"}},[_vm._v("Buy Points")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"py-4 text-sm\">","</div>",[_c('NuxtLink',{attrs:{"to":"/transfer-points-for-plus"}},[_vm._v("Transfer Points for Plus")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"py-4 font-medium border-b\">","</div>",[_c('NuxtLink',{attrs:{"to":"/redem-points"}},[_vm._v("Redeem")])],1),_vm._ssrNode(" <div class=\"py-4 font-medium border-b\">Shop</div> <div class=\"py-4 font-medium border-b\"><div class=\"flex\"><div class=\"flex-1\">Help</div> <div class=\"flex-1\"><img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" alt=\"Arrow up\" class=\"float-right\"></div></div></div>")],2)],2):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MainMenu.vue?vue&type=template&id=34c60a39&

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(34);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "MainMenu",

  data() {
    return {
      dataLogged: null,
      isMenuMobileOpen: false,
      isMenuOpen: false,
      userData: [],
      isLoading: true
    };
  },

  mounted() {
    this.loadUser();
  },

  methods: {
    goToHome() {
      window.location.href = '/';
    },

    openMenu() {
      this.isMenuMobileOpen = true;
    },

    closeMenu() {
      this.isMenuMobileOpen = false;
    },

    loadUser() {
      let userData = external_js_cookie_default.a.get('star_air_login') ? JSON.parse(external_js_cookie_default.a.get('star_air_login')) : '';
      this.userData = userData;
      this.isLoading = false;
    },

    goLogout() {
      external_js_cookie_default.a.remove('star_air_login');
      this.$store.commit('SET_LOGIN', false);
      window.location.href = '/';
    },

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },

    goToUrl(url) {
      window.location.href = '/account?page=' + url;
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
installComponents(component, {Button: __webpack_require__(36).default})


/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=5a7dffe1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"w-full bg-secondary-900 py-8\"><div class=\"container mx-auto text-white px-6 md:px-0\"><div class=\"md:flex border-b pb-8 border-secondary-700 gap-x-8\"><div class=\"flex-1\"><div class=\"text-lg font-semibold pb-4 border-b border-secondary-700\">\n            About Us\n          </div> <div class=\"pt-4\">Company Overview</div> <div class=\"pt-4\">Our Fleet</div> <div class=\"pt-4\">Media Center</div> <div class=\"pt-4\">Careers</div></div> <div class=\"flex-1\"><div class=\"\n              text-lg\n              font-semibold\n              pb-4\n              border-b border-secondary-700\n              mt-4\n              md:mt-0\n            \">\n            Support\n          </div> <div class=\"pt-4\">Airport</div> <div class=\"pt-4\">Appellate</div> <div class=\"pt-4\">Help</div> <div class=\"pt-4\">Contact Us</div></div> <div class=\"flex-1\"><div class=\"\n              text-lg\n              font-semibold\n              pb-4\n              border-b border-secondary-700\n              mt-4\n              md:mt-0\n            \">\n            Others\n          </div> <div class=\"pt-4\">Agent Login</div> <div class=\"pt-4\">Coorporate Login</div> <div class=\"pt-4\">Carriage Terms</div> <div class=\"pt-4\">Fare Sheet</div></div> <div class=\"flex-1\"><div class=\"\n              text-lg\n              font-semibold\n              pb-4\n              border-b border-secondary-700\n              mt-4\n              md:mt-0\n            \">\n            Social Media\n          </div> <div class=\"pt-4 text-sm md:text-base\">\n            Follow us on all secial media to get latest news and promo\n          </div> <div class=\"flex mt-4 gap-x-2\"><div class=\"flex-none\"><a href=\"#\"><img"+(_vm._ssrAttr("src",__webpack_require__(50)))+" alt=\"facebook\"></a></div> <div class=\"flex-none\"><a href=\"#\"><img"+(_vm._ssrAttr("src",__webpack_require__(51)))+" alt=\"instagram\"></a></div> <div class=\"flex-none\"><a href=\"#\"><img"+(_vm._ssrAttr("src",__webpack_require__(53)))+" alt=\"twitter\"></a></div> <div class=\"flex-none\"><a href=\"#\"><img"+(_vm._ssrAttr("src",__webpack_require__(52)))+" alt=\"linkedin\"></a></div> <div class=\"flex-none\"><a href=\"#\"><img"+(_vm._ssrAttr("src",__webpack_require__(54)))+" alt=\"whatsapp\"></a></div></div></div></div> <div class=\"md:flex pt-8 text-sm\"><div class=\"flex-grow md:flex\"><div class=\"flex-none inline-block pr-6\">Privacy Policy</div> <div class=\"flex-none inline-block pr-6\">Terms &amp; Conditions</div> <div class=\"flex-none inline-block pr-6\">Disclamer</div> <div class=\"flex-none inline-block\">Site Map</div></div> <div class=\"flex-none mt-6 md:0\">\n          © Star Air 2021. All Rights Reserved.\n        </div></div></div></div>")])}
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
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/redemPoints/BookFlight.vue?vue&type=template&id=4f8fad26&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"pb-6 text-2xl font-semibold border-b font-noto-sans text-grayscale-900\">Book a Flight</div> <div class=\"w-full mt-6 md:flex\"><div class=\"flex-1\"><div class=\"p-3 border rounded-t-lg md:rounded-l-lg md:rounded-tr-none\"><div class=\"text-grayscale-400 text-2xs\">From</div> <input type=\"text\" value=\"Mumbai International Airport (MBR)\" class=\"w-full border-none outline-none\"></div></div> <div class=\"relative flex-1\"><div class=\"absolute hidden w-10 h-10 cursor-pointer md:inline\"><img"+(_vm._ssrAttr("src",__webpack_require__(56)))+" alt=\"Flip Button\" class=\"inline-block mt-4 -ml-5\"></div> <div class=\"absolute inline w-10 h-10 -mt-5 cursor-pointer md:hidden right-4\"><img"+(_vm._ssrAttr("src",__webpack_require__(55)))+" alt=\"Flip Button\" class=\"inline-block\"></div> <div class=\"p-3 border md:pl-8 rounded-b-xl md:rounded-none md:rounded-r-xl\"><div class=\"text-grayscale-400 text-2xs\">To</div> <input type=\"text\" value=\"Dubai International Airport (DOH)\" class=\"w-full border-none outline-none\"></div></div></div> "),_vm._ssrNode("<div class=\"mt-6\">","</div>",[_c('Select',{attrs:{"label":"Trip","border":"border rounded-lg md:rounded-l-lg"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mt-6 md:flex\">","</div>",[_vm._ssrNode("<div class=\"flex-1\">","</div>",[_c('Select',{attrs:{"label":"Depart","border":"border rounded-lg md:rounded-none md:rounded-l-lg"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex-1 mt-6 md:mt-0\">","</div>",[_c('Select',{attrs:{"label":"Return","border":"border rounded-lg md:rounded-none md:rounded-r-lg"}})],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mt-6\">","</div>",[_c('Select',{attrs:{"label":"Passanger/Class","border":"border rounded-lg md:rounded-l-lg"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mt-10 md:inline-block\">","</div>",[_c('Button',{attrs:{"value":"Show Flights"}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/redemPoints/BookFlight.vue?vue&type=template&id=4f8fad26&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/redemPoints/BookFlight.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BookFlightvue_type_script_lang_js_ = ({
  name: "RedemPointBookFlight"
});
// CONCATENATED MODULE: ./components/redemPoints/BookFlight.vue?vue&type=script&lang=js&
 /* harmony default export */ var redemPoints_BookFlightvue_type_script_lang_js_ = (BookFlightvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/redemPoints/BookFlight.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  redemPoints_BookFlightvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1960264e"
  
)

/* harmony default export */ var BookFlight = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Input: __webpack_require__(37).default,Select: __webpack_require__(102).default,Button: __webpack_require__(36).default})


/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/redemPoints/ExtraBaggage.vue?vue&type=template&id=53177086&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"pb-6 text-2xl font-semibold border-b font-noto-sans text-grayscale-900\">Extra Baggage</div> "),_vm._ssrNode("<div class=\"mt-6\">","</div>",[_c('Input',{attrs:{"label":"Booking reference (PNR) / E-ticket number","border":"border rounded-lg md:rounded-l-lg"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mt-6\">","</div>",[_c('Input',{attrs:{"label":"Last Name","border":"border rounded-lg md:rounded-l-lg"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mt-10 md:inline-block\">","</div>",[_c('Button',{attrs:{"value":"Find Booking"}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/redemPoints/ExtraBaggage.vue?vue&type=template&id=53177086&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/redemPoints/ExtraBaggage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ExtraBaggagevue_type_script_lang_js_ = ({
  name: "RedemPointExtraBaggage"
});
// CONCATENATED MODULE: ./components/redemPoints/ExtraBaggage.vue?vue&type=script&lang=js&
 /* harmony default export */ var redemPoints_ExtraBaggagevue_type_script_lang_js_ = (ExtraBaggagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/redemPoints/ExtraBaggage.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  redemPoints_ExtraBaggagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "32f178a0"
  
)

/* harmony default export */ var ExtraBaggage = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Input: __webpack_require__(37).default,Button: __webpack_require__(36).default})


/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/redemPoints/PartnerPoints.vue?vue&type=template&id=448b64e1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"pb-6 text-2xl font-semibold border-b font-noto-sans text-grayscale-900\">Partner Points</div> "),_vm._ssrNode("<div class=\"mt-6\">","</div>",[_c('Select',{attrs:{"label":"Select Partner","border":"border rounded-lg md:rounded-l-lg"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mt-6\">","</div>",[_c('Input',{attrs:{"label":"Partner Membership Number","border":"border rounded-lg md:rounded-l-lg"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mt-6\">","</div>",[_vm._ssrNode("<div class=\"flex\">","</div>",[_vm._ssrNode("<div class=\"flex-grow\">","</div>",[_c('Input',{attrs:{"label":"How many points you want to convert?","border":"border rounded-l-lg"}})],1),_vm._ssrNode(" <div class=\"flex-none p-3 rounded-r-lg w-28 bg-light-blue\"><div class=\"text-xs text-grayscale-400\">Points Balance</div> <div class=\"text-sm text-grayscale-900\">10500</div></div>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mt-6\">","</div>",[_c('Input',{attrs:{"label":"Total Partner Point Received","border":"border rounded-lg md:rounded-l-lg"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mt-10 md:inline-block\">","</div>",[_c('Button',{attrs:{"value":"Continue"}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/redemPoints/PartnerPoints.vue?vue&type=template&id=448b64e1&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/redemPoints/PartnerPoints.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var PartnerPointsvue_type_script_lang_js_ = ({
  name: "RedemPointPartnerPoints"
});
// CONCATENATED MODULE: ./components/redemPoints/PartnerPoints.vue?vue&type=script&lang=js&
 /* harmony default export */ var redemPoints_PartnerPointsvue_type_script_lang_js_ = (PartnerPointsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/redemPoints/PartnerPoints.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  redemPoints_PartnerPointsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8e47fc4a"
  
)

/* harmony default export */ var PartnerPoints = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Select: __webpack_require__(102).default,Input: __webpack_require__(37).default,Button: __webpack_require__(36).default})


/***/ }),
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/redem-points-detail.vue?vue&type=template&id=634db36c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Header'),_vm._ssrNode(" "),_c('MainMenu'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container px-6 py-6 mx-auto md:py-14 md:px-0\">","</div>",[_vm._ssrNode("<div class=\"text-3xl font-semibold text-grayscale-900 font-noto-sans\">\n      Redeem Points\n    </div> <div class=\"mt-3 text-sm text-grayscale-500 md:text-base\">\n      You can redeem your Star Points for a wide range of rewards, such as\n      complimentary flights, cabin upgrades and excess baggage allowances with\n      Star Air. In addition, you can use Star Points to redeem hotel stays,\n      award flights with our partner airlines, or make purchases at Star Air\n      Free. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac\n      mauris vitae sem posuere blandit. Nam pretium venenatis bibendum. Nam\n      eget ante eu metus consequat semper non ac nunc. Duis semper massa nec\n      tellus lacinia, id semper neque lobortis. Donec sit amet eros leo. Sed\n      lacinia vestibulum lorem, vel imperdiet ipsum.\n    </div> "),_vm._ssrNode("<div class=\"mt-16 md:flex gap-x-8\">","</div>",[_vm._ssrNode("<div class=\"p-6 pb-0 mb-6 border md:w-1/3 rounded-xl text-grayscale-500\">"+(_vm._ssrList((_vm.dataMenu),function(menu){return ("<div"+(_vm._ssrClass("p-3 mb-6 rounded-lg cursor-pointer",menu.id == _vm.activeMenu ? 'bg-secondary-900 text-white' : ''))+">"+_vm._ssrEscape("\n          "+_vm._s(menu.name)+"\n        ")+"</div>")}))+"</div> "),_vm._ssrNode("<div class=\"md:w-2/3\">","</div>",[(_vm.activeMenu==1)?_vm._ssrNode("<div>","</div>",[_c('RedemPointsBookFlight')],1):_vm._e(),_vm._ssrNode(" "),(_vm.activeMenu==2)?_vm._ssrNode("<div>","</div>",[_c('RedemPointsExtraBaggage')],1):_vm._e(),_vm._ssrNode(" "),(_vm.activeMenu==3)?_vm._ssrNode("<div>","</div>",[_c('RedemPointsPartnerPoints')],1):_vm._e()],2)],2)],2),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/redem-points-detail.vue?vue&type=template&id=634db36c&

// CONCATENATED MODULE: ./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/redem-points-detail.vue?vue&type=script&lang=ts&

/* harmony default export */ var redem_points_detailvue_type_script_lang_ts_ = ({
  name: "RedemPointsDetail",
  data() {
    return {
      activeMenu: 1,
      dataMenu: [
        { id: 1, name: 'Book a flight' },
        { id: 2, name: 'Extra Baggage' },
        { id: 3, name: 'Convert Points to Partner Points' },
        { id: 4, name: 'Shop & Pay' },
      ],
    };
  },
  methods: {
    changeMenu(id) {
      this.activeMenu = id;
    }
  },
  mounted() {
    this.activeMenu = (this.$route.query.data) ? this.$route.query.data : this.activeMenu;
  },
});

// CONCATENATED MODULE: ./pages/redem-points-detail.vue?vue&type=script&lang=ts&
 /* harmony default export */ var pages_redem_points_detailvue_type_script_lang_ts_ = (redem_points_detailvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/redem-points-detail.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_redem_points_detailvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "36de5490"
  
)

/* harmony default export */ var redem_points_detail = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(103).default,MainMenu: __webpack_require__(104).default,RedemPointsBookFlight: __webpack_require__(130).default,RedemPointsExtraBaggage: __webpack_require__(131).default,RedemPointsPartnerPoints: __webpack_require__(132).default,Footer: __webpack_require__(105).default})


/***/ })
]);;
//# sourceMappingURL=redem-points-detail.js.map