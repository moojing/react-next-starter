webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PayByCredit.js":
/*!***********************************!*\
  !*** ./components/PayByCredit.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context */ "./context/index.js");




var _jsxFileName = "/Users/mujing/Project/TimeRoom/week4-payment/components/PayByCredit.js";



var PayByCredit = function PayByCredit() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_5__["PaymentContext"]),
      paymentData = _useContext.paymentData,
      paymentDispatcher = _useContext.paymentDispatcher;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(paymentData.data),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      creditData = _useState2[0],
      setCreditData = _useState2[1];

  var onFormChange = function onFormChange(e) {
    var value = e.target.value;
    var name = e.target.name;
    console.log('creditData', creditData);
    setCreditData(function (prev) {
      var inputName = name.split('-')[0];
      var inputIndex = inputName.split('-')[1];

      if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2___default()(prev[inputName]) && inputName.split('-')[1]) {
        var newCredit = prev[inputName];
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prev);
      } else {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prev, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, inputName, value));
      }
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "\u4ED8\u6B3E\u4EBA\u4FE1\u7BB1"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "email",
    name: "email",
    onChange: onFormChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "form-credit form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, " \u4FE1\u7528\u5361\u5361\u865F\uFF1A"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "text",
    name: "creditNumber-0",
    maxLength: "4",
    onChange: onFormChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "separater",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, " - "), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "text",
    name: "creditNumber-1",
    maxLength: "4",
    onChange: onFormChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "separater",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, " - "), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "text",
    name: "creditNumber-2",
    maxLength: "4",
    onChange: onFormChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "separater",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, " - "), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "text",
    name: "creditNumber-3",
    maxLength: "4",
    onChange: onFormChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "visa",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "VISA")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "form-expire form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, " \u6709\u6548\u5E74\u6708\uFF1A"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "text",
    name: "expireMonth",
    placeholder: "MM",
    onChange: onFormChange,
    maxLength: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "separater-expire",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "\u6708", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "/  ")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "text",
    placeholder: "YYYY",
    name: "expireYear",
    onChange: onFormChange,
    maxLength: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "separater-expire",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, " \u5E74 ")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "form-expire form-group form-cvv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, " \u80CC\u5F8C\u672B\u4E09\u78BC "), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "text",
    name: "expireYear",
    onChange: onFormChange,
    placeholder: "CVV",
    maxLength: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PayByCredit);

/***/ })

})
//# sourceMappingURL=index.js.7b55ea784c43c1bfc3ff.hot-update.js.map