module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/home.js": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavBar */ "./components/NavBar.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-particles-js */ "react-particles-js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/maiconesteves/Projects/portfolio/components/Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const particleOpt = {
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default.a, {
    component: "header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(_NavBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "edge-header",
    container: true,
    lg: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx(react_particles_js__WEBPACK_IMPORTED_MODULE_5___default.a, {
    canvasClassName: "particle-header",
    width: "100%",
    params: particleOpt,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }))), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default.a, {
    maxWidth: "lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, props.children));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Badge */ "@material-ui/core/Badge");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Menu */ "@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Code */ "@material-ui/icons/Code");
/* harmony import */ var _material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "@material-ui/icons/AccountCircle");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/GitHub */ "@material-ui/icons/GitHub");
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/LinkedIn */ "@material-ui/icons/LinkedIn");
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "@material-ui/icons/Notifications");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "@material-ui/icons/MoreVert");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_16__);
var _jsxFileName = "/Users/maiconesteves/Projects/portfolio/components/NavBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(0)
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));

function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';

  const renderMenu = __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_9___default.a, {
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
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
    onClick: handleMenuClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, "Profile"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
    onClick: handleMenuClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, "My account"));

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_9___default.a, {
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
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, "About Me")), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    "aria-label": "show 11 new notifications",
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_7___default.a, {
    badgeContent: 11,
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_14___default.a, {
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
  }, "Notifications")), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
  }, __jsx(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_11___default.a, {
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
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    position: "static",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
  }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_16___default.a, {
    alt: "Profile Picture",
    src: "/img/maicon.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    edge: "start",
    color: "inherit",
    href: "index",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, "About Me"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }, "Messages"), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    color: "inherit",
    target: "_blank",
    href: "https://www.linkedin.com/in/maiconburn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
  }, __jsx(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_12___default.a, {
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
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
  }, __jsx(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 15
    }
  }))))), renderMobileMenu, renderMenu);
}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/RadarChart.js":
/*!**********************************!*\
  !*** ./components/RadarChart.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/maiconesteves/Projects/portfolio/components/RadarChart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Chart = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-apexcharts */ "react-apexcharts", 7)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-apexcharts */ "react-apexcharts")],
    modules: ['react-apexcharts']
  }
});

class RadarChart extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        name: 'Series 1',
        data: [4, 2, 3, 4, 5, 6]
      }],
      options: {
        chart: {
          toolbar: {
            show: false
          },
          height: 350,
          type: 'radar'
        },
        dataLabels: {
          enabled: true
        },
        plotOptions: {
          radar: {
            size: 140,
            polygons: {
              strokeColor: '#e9e9e9',
              fill: {
                colors: ['#f8f8f8', '#fff']
              }
            }
          }
        },
        xaxis: {
          categories: ['Frontend', 'Backend', 'Server', 'Marketing', 'Business', 'Management']
        }
      }
    };
  }

  render() {
    return __jsx(Chart, {
      options: this.state.options,
      series: this.state.series,
      type: "radar",
      height: 350,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 7
      }
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (RadarChart);

/***/ }),

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_RadarChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/RadarChart */ "./components/RadarChart.js");
var _jsxFileName = "/Users/maiconesteves/Projects/portfolio/pages/home.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(3)
  },
  image: {
    display: 'block',
    margin: '0 auto'
  }
}));

function Home() {
  const classes = useStyles();
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5___default.a, {
    elevation: 5,
    className: "content-paper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    container: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    align: "center",
    variant: "h3",
    component: "h1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, "About Me"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    align: "center",
    variant: "subtitle1",
    component: "h2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, "subtitle")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    container: true,
    lg: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    align: "center",
    variant: "h4",
    component: "h4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, "Technical")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    align: "center",
    variant: "h4",
    component: "h4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, "Creative")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    align: "center",
    variant: "h4",
    component: "h4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, "Analytical")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    align: "center",
    variant: "h4",
    component: "h4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, "Entrepreneur"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
  }, "Collaborated in projects for large companies clients recognized brands in the Brazilian market such as ", __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "http://www.box1824.com.br/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 121
    }
  }, "BOX1824"), ", ", __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "http://yoagencia.digital/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 193
    }
  }, "Agencia Yo"), ", ", __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://www.briviadez.com.br/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 267
    }
  }, "BriviaDez"), ", ", __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "http://www.sapientag2.com.br/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 344
    }
  }, "Sapient AG2"), ", ", __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://www.mjvinnovation.com/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 423
    }
  }, "MJV Technology & Innovation"), ", ", __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
  }, "Taught seven years of Tae Kwon Minister Do classes for children and teens 4-15 years. I developed my students in leadership, humility, perseverance, respect, altruism, self-control and more. These classes were free of charge because I wanted to give back to the community.")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
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

/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/home.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/maiconesteves/Projects/portfolio/pages/home.js */"./pages/home.js");


/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ "@material-ui/core/Badge":
/*!******************************************!*\
  !*** external "@material-ui/core/Badge" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),

/***/ "@material-ui/core/Box":
/*!****************************************!*\
  !*** external "@material-ui/core/Box" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Link":
/*!*****************************************!*\
  !*** external "@material-ui/core/Link" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "@material-ui/core/Menu":
/*!*****************************************!*\
  !*** external "@material-ui/core/Menu" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/AccountCircle":
/*!***************************************************!*\
  !*** external "@material-ui/icons/AccountCircle" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountCircle");

/***/ }),

/***/ "@material-ui/icons/Code":
/*!******************************************!*\
  !*** external "@material-ui/icons/Code" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Code");

/***/ }),

/***/ "@material-ui/icons/GitHub":
/*!********************************************!*\
  !*** external "@material-ui/icons/GitHub" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/GitHub");

/***/ }),

/***/ "@material-ui/icons/LinkedIn":
/*!**********************************************!*\
  !*** external "@material-ui/icons/LinkedIn" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LinkedIn");

/***/ }),

/***/ "@material-ui/icons/MoreVert":
/*!**********************************************!*\
  !*** external "@material-ui/icons/MoreVert" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoreVert");

/***/ }),

/***/ "@material-ui/icons/Notifications":
/*!***************************************************!*\
  !*** external "@material-ui/icons/Notifications" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Notifications");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apexcharts":
/*!***********************************!*\
  !*** external "react-apexcharts" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apexcharts");

/***/ }),

/***/ "react-particles-js":
/*!*************************************!*\
  !*** external "react-particles-js" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-particles-js");

/***/ })

/******/ });
//# sourceMappingURL=home.js.map