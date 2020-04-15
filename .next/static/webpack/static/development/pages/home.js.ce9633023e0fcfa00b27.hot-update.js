webpackHotUpdate("static/development/pages/home.js",{

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_RadarChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/RadarChart */ "./components/RadarChart.js");
var _jsxFileName = "/Users/maiconesteves/Projects/portfolio/pages/home.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    title: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(3)
    },
    image: {
      display: 'block',
      margin: '0 auto'
    }
  };
});

function Home() {
  var classes = useStyles();
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    elevation: 5,
    className: "content-paper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    container: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    lg: 12,
    sm: 12,
    xs: 12,
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "center",
    variant: "h3",
    component: "h1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, "About Me"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "center",
    variant: "subtitle1",
    component: "h2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, "subtitle")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    container: true,
    lg: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    lg: 3,
    sm: 3,
    xs: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/svg/programmer.svg",
    width: "50%",
    className: classes.image,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "center",
    variant: "h4",
    component: "h4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, "Technical")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    lg: 3,
    sm: 3,
    xs: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/svg/creative.svg",
    width: "50%",
    className: classes.image,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "center",
    variant: "h4",
    component: "h4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, "Creative")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    lg: 3,
    sm: 3,
    xs: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/svg/analytics.svg",
    width: "50%",
    className: classes.image,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "center",
    variant: "h4",
    component: "h4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, "Analytical")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    lg: 3,
    sm: 3,
    xs: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/svg/entrepreneur.svg",
    width: "50%",
    className: classes.image,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "center",
    variant: "h4",
    component: "h4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, "Entrepreneur"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    lg: 7,
    sm: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, "Graduated in Marketing and Technical Training in Software Development from Unopar - University of Northern Paran\xE1."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, "Collaborated in projects for large companies clients recognized brands in the Brazilian market such as ", __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "http://www.box1824.com.br/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 121
    }
  }, "BOX1824"), ", ", __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "http://yoagencia.digital/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 193
    }
  }, "Agencia Yo"), ", ", __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "https://www.briviadez.com.br/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 267
    }
  }, "BriviaDez"), ", ", __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "http://www.sapientag2.com.br/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 344
    }
  }, "Sapient AG2"), ", ", __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "https://www.mjvinnovation.com/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 423
    }
  }, "MJV Technology & Innovation"), ", ", __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "http://www.cubo.cc/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 519
    }
  }, "CUBOCC"), ", and others."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, "Tae Kwon Black Belt 2nd Dan."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, "Participated from 1998 to present."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, "Part of my home state Gaucho Taekwondo team for The Federa\xE7\xE3o Ga\xFAcha de Taekwondo (FGTKD)"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, "I participated in two Brazilian National Championships."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, "I believe that serving humanity is the best work one can do in their lifetime. Therefore, I try to be an active citizen. Some of such initiatives are listed below:"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }, "As a Teacher:"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, "Taught seven years of Tae Kwon Minister Do classes for children and teens 4-15 years. I developed my students in leadership, humility, perseverance, respect, altruism, self-control and more. These classes were free of charge because I wanted to give back to the community.")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    lg: 5,
    sm: 6,
    align: "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx(_components_RadarChart__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, "I taught a one-year technical computer course on web programming."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, "As a business owner:"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, "I am a founding member of two companies:"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, "Invalley Innovation and Design: consulting in innovation through the design, development of products, services, and strategies that improve people's lives."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, "Adeus Rotina: A secret box for couples, which delivers a different romantic or sexual experience every month in a surprise box."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, "In both of these companies, I am in charge of marketing and technology."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }, "As a volunteer:"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }, "Participated in Sonhar Acordado, an NGO, which aims to transfer positive values \u200Bto underprivileged children."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  }, "I consultant in Junior Achievement, a project that teaches teenagers to create their own companies."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }, "A member of Junior Chamber International, an NGO which seeks to develop and engage in various projects that have a positive impact on people's lives."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  }, "I hope I am able to convey how I see the world and how I am helping to make it a better place.")))));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=home.js.ce9633023e0fcfa00b27.hot-update.js.map