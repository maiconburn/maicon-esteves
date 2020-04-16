webpackHotUpdate("static/development/pages/_app.js",{

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
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/theme */ "./src/theme.js");
/* harmony import */ var _src_styles_styles_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _src_styles_styles_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_src_styles_styles_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _phuocng_react_pdf_viewer_cjs_react_pdf_viewer_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css */ "./node_modules/@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css");
/* harmony import */ var _phuocng_react_pdf_viewer_cjs_react_pdf_viewer_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_phuocng_react_pdf_viewer_cjs_react_pdf_viewer_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");






var _jsxFileName = "/Users/maiconesteves/Projects/portfolio/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }












var MyApp = /*#__PURE__*/function (_App) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MyApp, _App);

  var _super = _createSuper(MyApp);

  function MyApp() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MyApp);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps() {
      react__WEBPACK_IMPORTED_MODULE_7___default.a.useEffect(function () {
        // Remove the server-side injected CSS.
        var jssStyles = document.querySelector('#jss-server-side');

        if (jssStyles) {
          jssStyles.parentElement.removeChild(jssStyles);
        }
      }, []);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          router = _this$props.router;
      var spring = {
        type: "spring",
        damping: 20,
        stiffness: 100,
        when: "afterChildren"
      };
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 7
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }
      }, "Maicon Esteves - Portfolio"), __jsx("meta", {
        name: "viewport",
        content: "minimum-scale=1, initial-scale=1, width=device-width",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }
      })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_15__["AnimatePresence"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "page-transition-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }
      }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_15__["motion"].div, {
        transition: spring,
        key: router.pathname,
        initial: {
          x: 300,
          opacity: 0
        },
        animate: {
          x: 0,
          opacity: 1
        },
        exit: {
          x: -300,
          opacity: 0
        },
        id: "page-transition-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }
      }, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["ThemeProvider"], {
        theme: _src_theme__WEBPACK_IMPORTED_MODULE_12__["default"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 15
        }
      }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 17
        }
      }), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        key: router.pathname,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 17
        }
      })))))));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_6___default.a);


MyApp.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.elementType.isRequired,
  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired
};

/***/ })

})
//# sourceMappingURL=_app.js.77412664cd3a2708eeee.hot-update.js.map