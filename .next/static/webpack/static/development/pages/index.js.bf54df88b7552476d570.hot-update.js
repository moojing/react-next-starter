webpackHotUpdate("static/development/pages/index.js",{

/***/ "./reducer/index.js":
/*!**************************!*\
  !*** ./reducer/index.js ***!
  \**************************/
/*! exports provided: PaymentFormReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentFormReducer", function() { return PaymentFormReducer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _utils_formSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/formSchema */ "./utils/formSchema.js");


function PaymentFormReducer(state, action) {
  if (state.method === action.method) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
      data: action.data
    });
  }

  switch (action.method) {
    case 'credit':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        data: _utils_formSchema__WEBPACK_IMPORTED_MODULE_1__["defaultSchema"].credit
      });

    case 'shop':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        data: _utils_formSchema__WEBPACK_IMPORTED_MODULE_1__["defaultSchema"].shop
      });

    case 'atm':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        data: _utils_formSchema__WEBPACK_IMPORTED_MODULE_1__["defaultSchema"].atm
      });

    default:
      throw new Error('No action is provided.');
  }
}

/***/ }),

/***/ "./utils/formSchema.js":
/*!*****************************!*\
  !*** ./utils/formSchema.js ***!
  \*****************************/
/*! exports provided: defaultSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSchema", function() { return defaultSchema; });
var defaultSchema = {
  credit: {
    email: '',
    creditNumber: ['', '', '', ''],
    expireMonth: '',
    expireYear: '',
    cvv: ''
  },
  shop: {},
  atm: {}
};

/***/ })

})
//# sourceMappingURL=index.js.bf54df88b7552476d570.hot-update.js.map