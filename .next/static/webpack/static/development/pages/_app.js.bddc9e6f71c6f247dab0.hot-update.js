webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
false,

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
false,

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
false,

/***/ "./node_modules/@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css":
false,

/***/ "./node_modules/@popmotion/easing/dist/easing.es.js":
false,

/***/ "./node_modules/@popmotion/popcorn/dist/popcorn.es.js":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css":
false,

/***/ "./node_modules/framer-motion/dist/framer-motion.es.js":
false,

/***/ "./node_modules/framesync/dist/framesync.es.js":
false,

/***/ "./node_modules/hey-listen/dist/hey-listen.es.js":
false,

/***/ "./node_modules/next/app.js":
false,

/***/ "./node_modules/next/dist/pages/_app.js":
false,

/***/ "./node_modules/popmotion/dist/popmotion.es.js":
false,

/***/ "./node_modules/style-value-types/dist/style-value-types.es.js":
false,

/***/ "./node_modules/stylefire/dist/stylefire.es.js":
false,

/***/ "./node_modules/tslib/tslib.es6.js":
false,

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/theme */ "./src/theme.js");
/* harmony import */ var _src_styles_styles_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _src_styles_styles_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_src_styles_styles_css__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "/Users/maiconesteves/Projects/portfolio/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







function MyApp(props) {
  var Component = props.Component,
      pageProps = props.pageProps;
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    // Remove the server-side injected CSS.
    var jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, "Maicon Esteves - Portfolio"), __jsx("meta", {
    name: "viewport",
    content: "minimum-scale=1, initial-scale=1, width=device-width",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: _src_theme__WEBPACK_IMPORTED_MODULE_6__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }))));
}
MyApp.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired,
  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};

/***/ })

})
//# sourceMappingURL=_app.js.bddc9e6f71c6f247dab0.hot-update.js.map