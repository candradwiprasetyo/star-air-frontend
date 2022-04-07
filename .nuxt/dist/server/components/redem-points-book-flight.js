exports.ids = [23,12,19,26];
exports.modules = {

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/redemPoints/BookFlight.vue?vue&type=template&id=4f8fad26&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"pb-6 text-2xl font-semibold border-b font-noto-sans text-grayscale-900\">Book a Flight</div> <div class=\"w-full mt-6 md:flex\"><div class=\"flex-1\"><div class=\"p-3 border rounded-t-lg md:rounded-l-lg md:rounded-tr-none\"><div class=\"text-grayscale-400 text-2xs\">From</div> <input type=\"text\" value=\"Mumbai International Airport (MBR)\" class=\"w-full border-none outline-none\"></div></div> <div class=\"relative flex-1\"><div class=\"absolute hidden w-10 h-10 cursor-pointer md:inline\"><img"+(_vm._ssrAttr("src",__webpack_require__(50)))+" alt=\"Flip Button\" class=\"inline-block mt-4 -ml-5\"></div> <div class=\"absolute inline w-10 h-10 -mt-5 cursor-pointer md:hidden right-4\"><img"+(_vm._ssrAttr("src",__webpack_require__(49)))+" alt=\"Flip Button\" class=\"inline-block\"></div> <div class=\"p-3 border md:pl-8 rounded-b-xl md:rounded-none md:rounded-r-xl\"><div class=\"text-grayscale-400 text-2xs\">To</div> <input type=\"text\" value=\"Dubai International Airport (DOH)\" class=\"w-full border-none outline-none\"></div></div></div> "),_vm._ssrNode("<div class=\"mt-6\">","</div>",[_c('Select',{attrs:{"label":"Trip","border":"border rounded-lg md:rounded-l-lg"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mt-6 md:flex\">","</div>",[_vm._ssrNode("<div class=\"flex-1\">","</div>",[_c('Select',{attrs:{"label":"Depart","border":"border rounded-lg md:rounded-none md:rounded-l-lg"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex-1 mt-6 md:mt-0\">","</div>",[_c('Select',{attrs:{"label":"Return","border":"border rounded-lg md:rounded-none md:rounded-r-lg"}})],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mt-6\">","</div>",[_c('Select',{attrs:{"label":"Passanger/Class","border":"border rounded-lg md:rounded-l-lg"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mt-10 md:inline-block\">","</div>",[_c('Button',{attrs:{"value":"Show Flights"}})],1)],2)}
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
installComponents(component, {Input: __webpack_require__(28).default,Select: __webpack_require__(31).default,Button: __webpack_require__(29).default})


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

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/flip-button-mobile.01b06a6.svg";

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/flip-button.42f5fc9.svg";

/***/ })

};;
//# sourceMappingURL=redem-points-book-flight.js.map