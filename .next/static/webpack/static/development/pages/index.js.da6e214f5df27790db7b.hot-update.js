webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PayByCredit.js":
/*!***********************************!*\
  !*** ./components/PayByCredit.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ "./context/index.js");
var _jsxFileName = "/Users/mujing/Project/TimeRoom/week4-payment/components/PayByCredit.js";



var PayByCredit = function PayByCredit() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_1__["PaymentContext"]),
      paymentData = _useContext.paymentData,
      paymentDispatcher = _useContext.paymentDispatcher;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "\u4ED8\u6B3E\u4EBA\u4FE1\u7BB1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "email",
    onChange: function onChange(e) {
      paymentDispatcher('credit', {
        email: e.target.value
      });
      console.log('paymentData', paymentData);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-credit form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, " \u4FE1\u7528\u5361\u5361\u865F\uFF1A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    maxLength: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "separater",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, " - "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    maxLength: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "separater",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, " - "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    maxLength: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "separater",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, " - "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    maxLength: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "visa",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "VISA")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-expire form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, " \u6709\u6548\u5E74\u6708\uFF1A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: "MM",
    maxLength: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "separater-expire",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "\u6708", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "/  ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: "YYYY",
    maxLength: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "separater-expire",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, " \u5E74 ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-expire form-group form-cvv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, " \u80CC\u5F8C\u672B\u4E09\u78BC "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: "CVV",
    maxLength: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PayByCredit);

/***/ })

})
//# sourceMappingURL=index.js.da6e214f5df27790db7b.hot-update.js.map