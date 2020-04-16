webpackHotUpdate("static/development/pages/resume.js",{

/***/ "./pages/resume.js":
/*!*************************!*\
  !*** ./pages/resume.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var react_simple_chatbot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-simple-chatbot */ "./node_modules/react-simple-chatbot/dist/react-simple-chatbot.js");
/* harmony import */ var react_simple_chatbot__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_simple_chatbot__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/maiconesteves/Projects/portfolio/pages/resume.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    title: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(3)
    },
    pdfobject: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  };
});

function Resume(PDF) {
  var classes = useStyles();
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    elevation: 5,
    className: "content-paper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    lg: 12,
    sm: 12,
    xs: 12,
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    align: "center",
    variant: "h3",
    component: "h1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }, "About Me"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    align: "center",
    variant: "subtitle1",
    component: "h2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, "subtitle")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    lg: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, __jsx(react_simple_chatbot__WEBPACK_IMPORTED_MODULE_6___default.a, {
    steps: [{
      id: '1',
      message: 'What is your name?',
      trigger: 'name'
    }, {
      id: 'name',
      user: true,
      trigger: '3'
    }, {
      id: '3',
      message: 'Hi {previousValue}! What is your gender?',
      trigger: 'gender'
    }, {
      id: 'gender',
      options: [{
        value: 'male',
        label: 'Male',
        trigger: '5'
      }, {
        value: 'female',
        label: 'Female',
        trigger: '5'
      }]
    }, {
      id: '5',
      message: 'How old are you?',
      trigger: 'age'
    }, {
      id: 'age',
      user: true,
      trigger: '7',
      validator: function validator(value) {
        if (isNaN(value)) {
          return 'value must be a number';
        } else if (value < 0) {
          return 'value must be positive';
        } else if (value > 120) {
          return "".concat(value, "? Come on!");
        }

        return true;
      }
    }, {
      id: '7',
      message: 'Great! Check out your summary',
      trigger: 'review'
    }, {
      id: 'review',
      component: __jsx(Review, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 44
        }
      }),
      asMessage: true,
      trigger: 'update'
    }, {
      id: 'update',
      message: 'Would you like to update some field?',
      trigger: 'update-question'
    }, {
      id: 'update-question',
      options: [{
        value: 'yes',
        label: 'Yes',
        trigger: 'update-yes'
      }, {
        value: 'no',
        label: 'No',
        trigger: 'end-message'
      }]
    }, {
      id: 'update-yes',
      message: 'What field would you like to update?',
      trigger: 'update-fields'
    }, {
      id: 'update-fields',
      options: [{
        value: 'name',
        label: 'Name',
        trigger: 'update-name'
      }, {
        value: 'gender',
        label: 'Gender',
        trigger: 'update-gender'
      }, {
        value: 'age',
        label: 'Age',
        trigger: 'update-age'
      }]
    }, {
      id: 'update-name',
      update: 'name',
      trigger: '7'
    }, {
      id: 'update-gender',
      update: 'gender',
      trigger: '7'
    }, {
      id: 'update-age',
      update: 'age',
      trigger: '7'
    }, {
      id: 'end-message',
      message: 'Thanks! Your data was submitted successfully!',
      end: true
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Resume);

/***/ })

})
//# sourceMappingURL=resume.js.5c030b9a494e2caccad4.hot-update.js.map