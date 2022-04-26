exports.ids = [9];
exports.modules = {

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/account/StarPoints.vue?vue&type=template&id=03819462&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"w-full pb-0 mb-6 border rounded-xl text-grayscale-500\"><div class=\"p-6 border-b\"><div class=\"flex\"><div class=\"text-lg font-semibold font-noto-sans text-grayscale-900\">Star Points Activity</div></div></div> <div class=\"p-6 overflow-hidden\"><div class=\"\n          mt-6\n          md:px-0 md:-mx-0\n          px-6\n          -mx-6\n          md:w-full\n          w-[100vw]\n          overflow-auto\n        \"><table class=\"table-auto md:w-full custom-table w-[1200px]\"><thead><tr><th>Date</th> <th>Type</th> <th>Star Points</th></tr></thead> <tbody>"+(_vm._ssrList((_vm.overviewData),function(data,index){return ("<tr><td>"+_vm._ssrEscape(_vm._s(data.entry_date))+"</td> <td>"+_vm._ssrEscape(_vm._s(data.action))+"</td> <td>"+_vm._ssrEscape(_vm._s(data.points))+"</td></tr>")}))+"</tbody> <tfoot><tr><th colspan=\"3\"> </th></tr></tfoot></table></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/account/StarPoints.vue?vue&type=template&id=03819462&

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(34);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/account/StarPoints.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var StarPointsvue_type_script_lang_js_ = ({
  name: "StarPointActivity",

  data() {
    return {
      userData: [],
      overviewData: []
    };
  },

  methods: {
    loadUser() {
      let userData = external_js_cookie_default.a.get('star_air_login') ? JSON.parse(external_js_cookie_default.a.get('star_air_login')) : '';
      this.userData = userData;
      this.loadData();
    },

    loadData() {
      let formDataDetail = new FormData();
      formDataDetail.append('member_email', this.userData.email);
      formDataDetail.append('token', this.$config.myToken);
      this.$axios.$post('/member/get-member-points', formDataDetail).then(response => {
        this.overviewData = response.result;
      }).catch(function (error) {
        console.log(error);
      });
    }

  },

  mounted() {
    this.loadUser();
  }

});
// CONCATENATED MODULE: ./components/account/StarPoints.vue?vue&type=script&lang=js&
 /* harmony default export */ var account_StarPointsvue_type_script_lang_js_ = (StarPointsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/account/StarPoints.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  account_StarPointsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4f319138"
  
)

/* harmony default export */ var StarPoints = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=account-star-points.js.map