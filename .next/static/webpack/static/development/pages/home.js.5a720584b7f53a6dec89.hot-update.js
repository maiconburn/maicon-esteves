webpackHotUpdate("static/development/pages/home.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavBar */ "./components/NavBar.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-particles-js */ "./node_modules/react-particles-js/lib/particles.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
var _jsxFileName = "/Users/maiconesteves/Projects/portfolio/components/Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var particleOpt = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: false,
        value_area: 500
      },
      move: {
        enable: true,
        speed: 1
      }
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: ["push"]
      }
    }
  }
};

function Layout(props) {
  var Component = props.Component;
  var pageProps = props.pageProps;
  var router = props.router;
  var spring = {
    type: "spring",
    damping: 20,
    stiffness: 100,
    when: "afterChildren"
  };
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__["AnimatePresence"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "page-transition-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__["motion"].div, {
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
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: "header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx(_NavBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "edge-header",
    container: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx(react_particles_js__WEBPACK_IMPORTED_MODULE_5___default.a, {
    canvasClassName: "particle-header",
    width: "100%",
    params: particleOpt,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }))), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    maxWidth: "lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, props.children))));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=home.js.5a720584b7f53a6dec89.hot-update.js.map