webpackHotUpdate("static/development/pages/resume.js",{

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Badge */ "./node_modules/@material-ui/core/esm/Badge/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/esm/Menu/index.js");
/* harmony import */ var _material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Code */ "./node_modules/@material-ui/icons/Code.js");
/* harmony import */ var _material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "./node_modules/@material-ui/icons/AccountCircle.js");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/GitHub */ "./node_modules/@material-ui/icons/GitHub.js");
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/LinkedIn */ "./node_modules/@material-ui/icons/LinkedIn.js");
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "./node_modules/@material-ui/icons/Notifications.js");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");


var _jsxFileName = "/Users/maiconesteves/Projects/portfolio/components/NavBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    grow: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(0)
    },
    sectionDesktop: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      display: 'none'
    }, theme.breakpoints.up('md'), {
      display: 'flex'
    }),
    sectionMobile: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      display: 'flex'
    }, theme.breakpoints.up('md'), {
      display: 'none'
    })
  };
});

function Navbar() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      mobileMoreAnchorEl = _React$useState4[0],
      setMobileMoreAnchorEl = _React$useState4[1];

  var isMenuOpen = Boolean(anchorEl);
  var isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  var handleProfileMenuOpen = function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleMobileMenuClose = function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  };

  var handleMenuClose = function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  var handleMobileMenuOpen = function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  var menuId = 'primary-search-account-menu';

  var renderMenu = __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_11__["default"], {
    anchorEl: anchorEl,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    id: menuId,
    keepMounted: true,
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: isMenuOpen,
    onClose: handleMenuClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: handleMenuClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, "Profile"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: handleMenuClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, "My account"));

  var mobileMenuId = 'primary-search-account-menu-mobile';

  var renderMobileMenu = __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_11__["default"], {
    anchorEl: mobileMoreAnchorEl,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    id: mobileMenuId,
    keepMounted: true,
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: isMobileMenuOpen,
    onClose: handleMobileMenuClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, "About Me")), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "aria-label": "show 11 new notifications",
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_9__["default"], {
    badgeContent: 11,
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_16___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }))), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, "Notifications")), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "aria-label": "account of current user",
    "aria-controls": "primary-search-account-menu",
    "aria-haspopup": "true",
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  })), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, "Profile")));

  return __jsx("div", {
    className: classes.grow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    position: "static",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    edge: "start",
    className: classes.menuButton,
    color: "inherit",
    href: "index",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_18__["default"], {
    alt: "Profile Picture",
    src: "/img/maicon.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    edge: "start",
    color: "inherit",
    href: "index",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "h6",
    noWrap: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, "Portfolio - Maicon Esteves")), __jsx("div", {
    className: classes.grow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: classes.sectionDesktop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "inherit",
    href: "resume",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, "About Me"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "inherit",
    href: "home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }, "Messages"), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "inherit",
    target: "_blank",
    href: "https://www.linkedin.com/in/maiconburn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    edge: "end",
    target: "_blank",
    href: "https://github.com/maiconburn",
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: classes.sectionMobile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "aria-label": "show more",
    "aria-controls": mobileMenuId,
    "aria-haspopup": "true",
    onClick: handleMobileMenuOpen,
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_17___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 15
    }
  }))))), renderMobileMenu, renderMenu);
}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=resume.js.e2c65d77fbba0409d5ff.hot-update.js.map