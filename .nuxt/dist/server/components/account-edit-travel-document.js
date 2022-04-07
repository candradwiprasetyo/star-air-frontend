exports.ids = [6,12,19,26];
exports.modules = {

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

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Select.vue?vue&type=template&id=bc660fb6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"h-full px-3 py-2",class:[_vm.border, _vm.customClass]},[_vm._ssrNode("<div class=\"mb-1 text-xs text-grayscale-400\">"+_vm._ssrEscape(_vm._s(_vm.label))+"</div> <select class=\"w-full border-none outline-none\"></select>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Select.vue?vue&type=template&id=bc660fb6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Select.vue?vue&type=script&lang=js&
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
installComponents(component, {Select: __webpack_require__(31).default})


/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/account/EditTravelDocument.vue?vue&type=template&id=409c9038&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"w-full pb-0 mb-6 overflow-hidden border rounded-xl text-grayscale-500\">","</div>",[_vm._ssrNode("<div class=\"p-6 border-b\"><div class=\"flex\"><div class=\"text-lg font-semibold font-noto-sans text-grayscale-900\"><span class=\"text-secondary-900\">User Profile</span> / Edit Travel Document</div></div></div> "),_vm._ssrNode("<div class=\"p-6 overflow-hidden\">","</div>",[_c('Input',{attrs:{"label":"National ID Number"}}),_vm._ssrNode(" "),_c('Input',{attrs:{"label":"Address","custom-class":"mt-6"}}),_vm._ssrNode(" "),_c('Select',{attrs:{"label":"Country/Region of Residence","custom-class":"mt-6"}}),_vm._ssrNode(" "),_c('Input',{attrs:{"label":"Passport Number","custom-class":"mt-6"}}),_vm._ssrNode(" "),_c('Select',{attrs:{"label":"Expiry Date","custom-class":"mt-6"}}),_vm._ssrNode(" "),_c('Input',{attrs:{"label":"Redress Number","custom-class":"mt-6"}}),_vm._ssrNode(" "),_c('Input',{attrs:{"label":"Known Traveler Number","custom-class":"mt-6"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mt-10 md:inline-block\">","</div>",[_c('Button',{attrs:{"value":"Submit Change"}})],1)],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/account/EditTravelDocument.vue?vue&type=template&id=409c9038&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/account/EditTravelDocument.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var EditTravelDocumentvue_type_script_lang_js_ = ({
  name: "AccountEditTravelDocument",
  methods: {}
});
// CONCATENATED MODULE: ./components/account/EditTravelDocument.vue?vue&type=script&lang=js&
 /* harmony default export */ var account_EditTravelDocumentvue_type_script_lang_js_ = (EditTravelDocumentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/account/EditTravelDocument.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  account_EditTravelDocumentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "62813c8e"
  
)

/* harmony default export */ var EditTravelDocument = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Input: __webpack_require__(28).default,Select: __webpack_require__(31).default,Button: __webpack_require__(29).default})


/***/ })

};;
//# sourceMappingURL=account-edit-travel-document.js.map