webpackHotUpdate("static/development/pages/resume.js",{

/***/ "./components/CvChat.js":
/*!******************************!*\
  !*** ./components/CvChat.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_simple_chatbot__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-simple-chatbot */ "./node_modules/react-simple-chatbot/dist/react-simple-chatbot.js");
/* harmony import */ var react_simple_chatbot__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_simple_chatbot__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");





var _jsxFileName = "/Users/maiconesteves/Projects/portfolio/components/CvChat.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var theme = {
  background: '#f5f8fb',
  fontFamily: 'Roboto',
  headerBgColor: '#2274A5',
  headerFontColor: '#fff',
  headerFontSize: '18px',
  botBubbleColor: '#2274A5',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a'
};

var Review = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Review, _Component);

  var _super = _createSuper(Review);

  function Review(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Review);

    _this = _super.call(this, props);
    _this.state = {
      name: '',
      gender: '',
      age: ''
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Review, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var steps = this.props.steps;
      var name = steps.name,
          gender = steps.gender,
          age = steps.age;
      this.setState({
        name: name,
        gender: gender,
        age: age
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          name = _this$state.name,
          gender = _this$state.gender,
          age = _this$state.age;
      return __jsx("div", {
        style: {
          width: '100%'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 7
        }
      }, __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 9
        }
      }, "Summary"), __jsx("table", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }
      }, __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }
      }, __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }
      }, __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 15
        }
      }, "Name"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 15
        }
      }, name.value)), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 13
        }
      }, __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 15
        }
      }, "Gender"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 15
        }
      }, gender.value)), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }
      }, __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 15
        }
      }, "Age"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 15
        }
      }, age.value)))));
    }
  }]);

  return Review;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Review.propTypes = {
  steps: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object
};
Review.defaultProps = {
  steps: undefined
};
var steps = [{
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 18
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
}];

var CvChat = /*#__PURE__*/function (_Component2) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(CvChat, _Component2);

  var _super2 = _createSuper(CvChat);

  function CvChat() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CvChat);

    return _super2.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CvChat, [{
    key: "render",
    value: function render() {
      return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_8__["ThemeProvider"], {
        theme: theme,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 9
        }
      }, __jsx(react_simple_chatbot__WEBPACK_IMPORTED_MODULE_7___default.a, {
        steps: steps,
        className: "chatBot",
        botAvatar: "/img/maicon.png",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 13
        }
      }), ";");
    }
  }]);

  return CvChat;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CvChat);

/***/ })

})
//# sourceMappingURL=resume.js.d3815156815162b78330.hot-update.js.map