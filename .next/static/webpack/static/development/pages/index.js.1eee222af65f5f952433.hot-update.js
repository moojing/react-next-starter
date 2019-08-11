webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PayByCredit.js":
/*!***********************************!*\
  !*** ./components/PayByCredit.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context */ "./context/index.js");


var _jsxFileName = "/Users/mujing/Project/TimeRoom/week4-payment/components/PayByCredit.js";



var PayByCredit = function PayByCredit() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_3__["PaymentContext"]),
      paymentData = _useContext.paymentData,
      paymentDispatcher = _useContext.paymentDispatcher;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(paymentData.data),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      creditData = _useState2[0],
      setCreditData = _useState2[1];

  var onFormChange = function onFormChange(e) {
    var value = e.target.value;
    var name = e.target.name;
    setCreditData(function (prev) {
      var name = name.split('-');
      console.log('name: ', name);
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prev, {
        email: value
      });
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "\u4ED8\u6B3E\u4EBA\u4FE1\u7BB1"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "email",
    name: "email",
    onChange: onFormChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-credit form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, " \u4FE1\u7528\u5361\u5361\u865F\uFF1A"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    name: "creditNumber-0",
    maxLength: "4",
    onChange: onFormChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "separater",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, " - "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    name: "creditNumber-1",
    maxLength: "4",
    onChange: onFormChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "separater",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, " - "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    maxLength: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "separater",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, " - "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    maxLength: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "visa",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "VISA")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-expire form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, " \u6709\u6548\u5E74\u6708\uFF1A"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    name: "expireMonth",
    placeholder: "MM",
    onChange: onFormChange,
    maxLength: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "separater-expire",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "\u6708", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "/  ")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    placeholder: "YYYY",
    name: "expireYear",
    onChange: onFormChange,
    maxLength: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "separater-expire",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, " \u5E74 ")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-expire form-group form-cvv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, " \u80CC\u5F8C\u672B\u4E09\u78BC "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    name: "expireYear",
    onChange: onFormChange,
    placeholder: "CVV",
    maxLength: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PayByCredit);

/***/ })

})
//# sourceMappingURL=index.js.1eee222af65f5f952433.hot-update.js.map