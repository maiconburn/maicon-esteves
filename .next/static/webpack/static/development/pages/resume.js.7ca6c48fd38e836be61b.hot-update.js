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
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NavBar */ "./components/NavBar.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _phuocng_react_pdf_viewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @phuocng/react-pdf-viewer */ "./node_modules/@phuocng/react-pdf-viewer/index.js");
/* harmony import */ var _phuocng_react_pdf_viewer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_phuocng_react_pdf_viewer__WEBPACK_IMPORTED_MODULE_6__);
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

function Resume() {
  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx(_components_NavBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fixed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 12,
    spacing: 5,
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    align: "center",
    variant: "h3",
    component: "h1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, "About Me"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    align: "center",
    variant: "subtitle1",
    component: "h2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, "subtitle")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx(_phuocng_react_pdf_viewer__WEBPACK_IMPORTED_MODULE_6__["Worker"], {
    workerUrl: "https://unpkg.com/pdfjs-dist@2.2.228/build/pdf.worker.min.js",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      height: '750px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 25
    }
  }, __jsx(_phuocng_react_pdf_viewer__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fileUrl: "https://docs.google.com/document/d/e/2PACX-1vTCxNnRqfB_vHH_T4FKgptWilRuNdjFhfnEZnMerjh51vTeWi-ukmP_Te-38qPvMfH9lbUEmZFVsMPY/pub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 29
    }
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Resume);

/***/ })

})
//# sourceMappingURL=resume.js.7ca6c48fd38e836be61b.hot-update.js.map