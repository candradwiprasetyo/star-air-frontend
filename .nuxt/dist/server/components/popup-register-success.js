exports.ids = [25,14];
exports.modules = {

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PopupRegisterSuccess.vue?vue&type=template&id=1680cdf8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"fixed inset-0 z-30 bg-black opacity-75\"></div> "),_vm._ssrNode("<div class=\"fixed inset-0 z-30 flex items-center\">","</div>",[_vm._ssrNode("<div class=\"mx-auto bg-white w-[600px] rounded-lg\">","</div>",[_vm._ssrNode("<div class=\"p-6 mx-auto text-center md:w-600\">","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(58)))+" alt=\"Email sent success\" class=\"inline-block\"> <div class=\"mt-8 text-lg font-semibold font-noto-sans\">\n          Verify Your Email Address\n        </div> <div class=\"mt-2 text-grayscale-500\">"+_vm._ssrEscape("\n          In order to complete your registration, please verifiy your email\n          address. We have sent an email with a link to "+_vm._s(_vm.email)+".\n        ")+"</div> "),_vm._ssrNode("<div class=\"inline-block mt-6 w-[200px]\">","</div>",[_c('Button',{attrs:{"value":"Close","background":"bg-white","border":"border-2 border-secondary-900","color":"text-secondary-900"},on:{"action":function($event){return _vm.closePopup()}}})],1)],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PopupRegisterSuccess.vue?vue&type=template&id=1680cdf8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PopupRegisterSuccess.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var PopupRegisterSuccessvue_type_script_lang_js_ = ({
  name: "PopupRegisterSuccess",
  props: {
    email: {
      type: String,
      required: false
    }
  },
  methods: {
    closePopup() {
      this.$emit('close-popup');
    }

  }
});
// CONCATENATED MODULE: ./components/PopupRegisterSuccess.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PopupRegisterSuccessvue_type_script_lang_js_ = (PopupRegisterSuccessvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PopupRegisterSuccess.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PopupRegisterSuccessvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "fd4b1b7e"
  
)

/* harmony default export */ var PopupRegisterSuccess = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Button: __webpack_require__(36).default})


/***/ }),

/***/ 36:
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

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/email-sent-success.d4c26fd.svg";

/***/ })

};;
//# sourceMappingURL=popup-register-success.js.map