/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_css-loader@4.3.0@css-loader/dist/cjs.js?!./src/components/header/test.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/_css-loader@4.3.0@css-loader/dist/cjs.js??ref--5-1!./src/components/header/test.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/_css-loader@4.3.0@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@4.3.0@css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".src-components-header-test__test--1t5f9 {\\r\\n  background: pink;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"test\": \"src-components-header-test__test--1t5f9\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n\n\n//# sourceURL=webpack:///./src/components/header/test.css?./node_modules/_css-loader@4.3.0@css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/_css-loader@4.3.0@css-loader/dist/cjs.js?!./src/container/home/test.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/_css-loader@4.3.0@css-loader/dist/cjs.js??ref--5-1!./src/container/home/test.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/_css-loader@4.3.0@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@4.3.0@css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"body {\\r\\n  background: red;\\r\\n}\\r\\n.src-container-home-test__test--3HAvv {\\r\\n  background: yellowgreen;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"test\": \"src-container-home-test__test--3HAvv\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n\n\n//# sourceURL=webpack:///./src/container/home/test.css?./node_modules/_css-loader@4.3.0@css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/_css-loader@4.3.0@css-loader/dist/runtime/api.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_css-loader@4.3.0@css-loader/dist/runtime/api.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/_css-loader@4.3.0@css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/_isomorphic-style-loader@5.1.0@isomorphic-style-loader/insertCss.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_isomorphic-style-loader@5.1.0@isomorphic-style-loader/insertCss.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */\n\n\n\nvar inserted = {};\n\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode(\"0x\" + p1);\n  }));\n}\n\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(id);\n\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\nfunction insertCss(styles, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === void 0 ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === void 0 ? false : _ref$prepend,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;\n\n  var ids = [];\n\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = styles[i],\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n    var id = \"\" + prefix + moduleId + \"-\" + i;\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n    var elem = document.getElementById(id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n\n    if (sourceMap && typeof btoa === 'function') {\n      cssText += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + b64EncodeUnicode(JSON.stringify(sourceMap)) + \"*/\";\n      cssText += \"\\n/*# sourceURL=\" + sourceMap.file + \"?\" + id + \"*/\";\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n//# sourceMappingURL=insertCss.js.map\n\n\n//# sourceURL=webpack:///./node_modules/_isomorphic-style-loader@5.1.0@isomorphic-style-loader/insertCss.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ \"./src/components/header/index.js\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_header_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/store */ \"./src/components/header/store/index.js\");\n\n\n\n\n\nvar App = function App(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    staticContext: props.staticContext\n  }), Object(react_router_config__WEBPACK_IMPORTED_MODULE_2__[\"renderRoutes\"])(props.route.routes));\n};\n\nApp.loadData = function (store) {\n  //这个函数，负责在服务器端渲染之前，把这个路由需要的数据提前加载好\n  return store.dispatch(_components_header_store__WEBPACK_IMPORTED_MODULE_3__[\"actions\"].getHeaderInfo());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/Routers.js":
/*!************************!*\
  !*** ./src/Routers.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _container_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container/home */ \"./src/container/home/index.js\");\n/* harmony import */ var _container_translation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container/translation */ \"./src/container/translation/index.js\");\n/* harmony import */ var _container_not_found__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container/not_found */ \"./src/container/not_found/index.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\n\n\n //嵌套路由+二级路由\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  path: \"/\",\n  component: _App__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  loadData: _App__WEBPACK_IMPORTED_MODULE_3__[\"default\"].loadData,\n  routes: [{\n    path: \"/\",\n    component: _container_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    exact: true,\n    loadData: _container_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadData\n  }, {\n    path: \"/translation\",\n    component: _container_translation__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    exact: true,\n    loadData: _container_translation__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loadData\n  }, {\n    component: _container_not_found__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }]\n}]);\n\n//# sourceURL=webpack:///./src/Routers.js?");

/***/ }),

/***/ "./src/client/request.js":
/*!*******************************!*\
  !*** ./src/client/request.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ \"./src/util/index.js\");\n\n\nvar instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: \"/\",\n  params: {\n    secret: _util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].secret\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (instance);\n\n//# sourceURL=webpack:///./src/client/request.js?");

/***/ }),

/***/ "./src/components/header/index.js":
/*!****************************************!*\
  !*** ./src/components/header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/actions */ \"./src/components/header/store/actions.js\");\n/* harmony import */ var _test_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test.css */ \"./src/components/header/test.css\");\n/* harmony import */ var _test_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_test_css__WEBPACK_IMPORTED_MODULE_4__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\nvar Header = /*#__PURE__*/function (_React$Component) {\n  _inherits(Header, _React$Component);\n\n  var _super = _createSuper(Header);\n\n  function Header() {\n    _classCallCheck(this, Header);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(Header, [{\n    key: \"UNSAFE_componentWillMount\",\n    value: function UNSAFE_componentWillMount() {\n      if (this.props.staticContext) {\n        this.props.staticContext.css.push(_test_css__WEBPACK_IMPORTED_MODULE_4___default.a._getCss());\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: _test_css__WEBPACK_IMPORTED_MODULE_4___default.a.test\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/\"\n      }, \"\\u9996\\u9875\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), !this.props.isLogin ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        onClick: this.props.handleLoginClick\n      }, \"\\u767B\\u5F55\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/translation\"\n      }, \"\\u7FFB\\u8BD1\\u5217\\u8868\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        onClick: this.props.handleLogoutClick\n      }, \"\\u9000\\u51FA\")));\n    }\n  }]);\n\n  return Header;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    isLogin: state.header.isLogin\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    handleLoginClick: function handleLoginClick() {\n      dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_3__[\"login\"])());\n    },\n    handleLogoutClick: function handleLogoutClick() {\n      dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_3__[\"logout\"])());\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Header));\n\n//# sourceURL=webpack:///./src/components/header/index.js?");

/***/ }),

/***/ "./src/components/header/store/actions.js":
/*!************************************************!*\
  !*** ./src/components/header/store/actions.js ***!
  \************************************************/
/*! exports provided: getHeaderInfo, login, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getHeaderInfo\", function() { return getHeaderInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logout\", function() { return logout; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/components/header/store/constants.js\");\n\n\nvar changeLogin = function changeLogin(value) {\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"CHANGE_LOGIN\"],\n    value: value\n  };\n};\n\nvar getHeaderInfo = function getHeaderInfo() {\n  var url = \"/api/isLogin.json\";\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get(url).then(function (res) {\n      if (res.data.success) {\n        dispatch(changeLogin(res.data.data.login));\n      }\n    });\n  };\n};\n\nvar doLogin = function doLogin(value) {\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"DO_LOGIN\"],\n    value: value\n  };\n};\n\nvar login = function login() {\n  var url = \"/api/login.json\";\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get(url).then(function (res) {\n      if (res.data.success) {\n        dispatch(doLogin(true));\n      }\n    });\n  };\n};\n\nvar doLogout = function doLogout(value) {\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"DO_LOGOUT\"],\n    value: value\n  };\n};\n\nvar logout = function logout() {\n  var url = \"/api/logout.json\";\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get(url).then(function (res) {\n      dispatch(doLogout(false));\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/components/header/store/actions.js?");

/***/ }),

/***/ "./src/components/header/store/constants.js":
/*!**************************************************!*\
  !*** ./src/components/header/store/constants.js ***!
  \**************************************************/
/*! exports provided: CHANGE_LOGIN, DO_LOGIN, DO_LOGOUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHANGE_LOGIN\", function() { return CHANGE_LOGIN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DO_LOGIN\", function() { return DO_LOGIN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DO_LOGOUT\", function() { return DO_LOGOUT; });\nvar CHANGE_LOGIN = \"HEADER/LOGIN\";\nvar DO_LOGIN = \"HEADER/DO_LOGIN\";\nvar DO_LOGOUT = \"HEADER/DO_LOGOUT\";\n\n\n//# sourceURL=webpack:///./src/components/header/store/constants.js?");

/***/ }),

/***/ "./src/components/header/store/index.js":
/*!**********************************************!*\
  !*** ./src/components/header/store/index.js ***!
  \**********************************************/
/*! exports provided: reducer, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ \"./src/components/header/store/reducer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reducer\", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"./src/components/header/store/actions.js\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"actions\", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__; });\n\n\n\n\n//# sourceURL=webpack:///./src/components/header/store/index.js?");

/***/ }),

/***/ "./src/components/header/store/reducer.js":
/*!************************************************!*\
  !*** ./src/components/header/store/reducer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/components/header/store/constants.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar defaultState = {\n  isLogin: false\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"CHANGE_LOGIN\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLogin: action.value\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"DO_LOGIN\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLogin: action.value\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"DO_LOGOUT\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLogin: action.value\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/components/header/store/reducer.js?");

/***/ }),

/***/ "./src/components/header/test.css":
/*!****************************************!*\
  !*** ./src/components/header/test.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/_css-loader@4.3.0@css-loader/dist/cjs.js??ref--5-1!./test.css */ \"./node_modules/_css-loader@4.3.0@css-loader/dist/cjs.js?!./src/components/header/test.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/_isomorphic-style-loader@5.1.0@isomorphic-style-loader/insertCss.js */ \"./node_modules/_isomorphic-style-loader@5.1.0@isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/components/header/test.css?");

/***/ }),

/***/ "./src/container/home/index.js":
/*!*************************************!*\
  !*** ./src/container/home/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/actions */ \"./src/container/home/store/actions.js\");\n/* harmony import */ var _test_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test.css */ \"./src/container/home/test.css\");\n/* harmony import */ var _test_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_test_css__WEBPACK_IMPORTED_MODULE_3__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\nvar Home = /*#__PURE__*/function (_React$Component) {\n  _inherits(Home, _React$Component);\n\n  var _super = _createSuper(Home);\n\n  function Home() {\n    _classCallCheck(this, Home);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(Home, [{\n    key: \"getList\",\n    value: function getList() {\n      var newsList = this.props.newsList;\n      return newsList.map(function (l) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          key: l.id\n        }, l.title);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: _test_css__WEBPACK_IMPORTED_MODULE_3___default.a.test\n      }, this.getList());\n    }\n  }, {\n    key: \"UNSAFE_componentWillMount\",\n    value: function UNSAFE_componentWillMount() {\n      if (this.props.staticContext) {\n        this.props.staticContext.css.push(_test_css__WEBPACK_IMPORTED_MODULE_3___default.a._getCss());\n      }\n    } //服务器端渲染不执行\n\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      //防止注水后的重复加载\n      if (this.props.newsList.length === 0) {\n        this.props.getHomeList();\n      }\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    newsList: state.home.newsList\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getHomeList: function getHomeList() {\n      dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_2__[\"getHomeList\"])());\n    }\n  };\n};\n\nvar HomeExport = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Home);\n\nHomeExport.loadData = function (store) {\n  //这个函数，负责在服务器端渲染之前，把这个路由需要的数据提前加载好\n  return store.dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_2__[\"getHomeList\"])());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeExport);\n\n//# sourceURL=webpack:///./src/container/home/index.js?");

/***/ }),

/***/ "./src/container/home/store/actions.js":
/*!*********************************************!*\
  !*** ./src/container/home/store/actions.js ***!
  \*********************************************/
/*! exports provided: getHomeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getHomeList\", function() { return getHomeList; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/container/home/store/constants.js\");\n\n\nvar changeList = function changeList(value) {\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"CHANGE_HOME_LIST\"],\n    value: value\n  };\n};\n\nvar getHomeList = function getHomeList() {\n  //服务端和客户端请求不同处理\n  var url = \"/api/news.json\";\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get(url).then(function (res) {\n      if (res.data.success) {\n        dispatch(changeList(res.data.data));\n      }\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/container/home/store/actions.js?");

/***/ }),

/***/ "./src/container/home/store/constants.js":
/*!***********************************************!*\
  !*** ./src/container/home/store/constants.js ***!
  \***********************************************/
/*! exports provided: CHANGE_HOME_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHANGE_HOME_LIST\", function() { return CHANGE_HOME_LIST; });\nvar CHANGE_HOME_LIST = \"HOME/CHANGE_HOME_LIST\";\n\n//# sourceURL=webpack:///./src/container/home/store/constants.js?");

/***/ }),

/***/ "./src/container/home/store/index.js":
/*!*******************************************!*\
  !*** ./src/container/home/store/index.js ***!
  \*******************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ \"./src/container/home/store/reducer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reducer\", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/container/home/store/index.js?");

/***/ }),

/***/ "./src/container/home/store/reducer.js":
/*!*********************************************!*\
  !*** ./src/container/home/store/reducer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/container/home/store/constants.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar defaultState = {\n  newsList: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"CHANGE_HOME_LIST\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        newsList: action.value\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/container/home/store/reducer.js?");

/***/ }),

/***/ "./src/container/home/test.css":
/*!*************************************!*\
  !*** ./src/container/home/test.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/_css-loader@4.3.0@css-loader/dist/cjs.js??ref--5-1!./test.css */ \"./node_modules/_css-loader@4.3.0@css-loader/dist/cjs.js?!./src/container/home/test.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/_isomorphic-style-loader@5.1.0@isomorphic-style-loader/insertCss.js */ \"./node_modules/_isomorphic-style-loader@5.1.0@isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/container/home/test.css?");

/***/ }),

/***/ "./src/container/not_found/index.js":
/*!******************************************!*\
  !*** ./src/container/not_found/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar NotFound = /*#__PURE__*/function (_React$Component) {\n  _inherits(NotFound, _React$Component);\n\n  var _super = _createSuper(NotFound);\n\n  function NotFound() {\n    _classCallCheck(this, NotFound);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(NotFound, [{\n    key: \"UNSAFE_componentWillMount\",\n    value: function UNSAFE_componentWillMount() {\n      var staticContext = this.props.staticContext;\n      staticContext && (staticContext.notFound = true);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"404\"));\n    }\n  }]);\n\n  return NotFound;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotFound);\n\n//# sourceURL=webpack:///./src/container/not_found/index.js?");

/***/ }),

/***/ "./src/container/translation/index.js":
/*!********************************************!*\
  !*** ./src/container/translation/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/actions */ \"./src/container/translation/store/actions.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\nvar Tran = /*#__PURE__*/function (_React$Component) {\n  _inherits(Tran, _React$Component);\n\n  var _super = _createSuper(Tran);\n\n  function Tran() {\n    _classCallCheck(this, Tran);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(Tran, [{\n    key: \"getList\",\n    value: function getList() {\n      var tranList = this.props.tranList;\n      return tranList.map(function (l) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          key: l.id\n        }, l.title);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var isLogin = this.props.isLogin;\n      return isLogin ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, this.getList()) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Redirect\"], {\n        to: \"/\"\n      });\n    } //服务器端渲染不执行\n\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      //防止注水后的重复加载\n      if (this.props.tranList.length === 0) {\n        this.props.getTranList();\n      }\n    }\n  }]);\n\n  return Tran;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    tranList: state.tran.tranList,\n    isLogin: state.header.isLogin\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getTranList: function getTranList() {\n      dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_2__[\"getTranList\"])());\n    }\n  };\n};\n\nvar TranExport = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Tran);\n\nTranExport.loadData = function (store) {\n  //这个函数，负责在服务器端渲染之前，把这个路由需要的数据提前加载好\n  return store.dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_2__[\"getTranList\"])());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TranExport);\n\n//# sourceURL=webpack:///./src/container/translation/index.js?");

/***/ }),

/***/ "./src/container/translation/store/actions.js":
/*!****************************************************!*\
  !*** ./src/container/translation/store/actions.js ***!
  \****************************************************/
/*! exports provided: getTranList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTranList\", function() { return getTranList; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/container/translation/store/constants.js\");\n\n\nvar changeList = function changeList(value) {\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"CHANGE_TRAN_LIST\"],\n    value: value\n  };\n};\n\nvar getTranList = function getTranList() {\n  var url = \"/api/translations.json\";\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get(url).then(function (res) {\n      var list = [];\n\n      if (res.data.success) {\n        list = res.data.data;\n      }\n\n      dispatch(changeList(list));\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/container/translation/store/actions.js?");

/***/ }),

/***/ "./src/container/translation/store/constants.js":
/*!******************************************************!*\
  !*** ./src/container/translation/store/constants.js ***!
  \******************************************************/
/*! exports provided: CHANGE_TRAN_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHANGE_TRAN_LIST\", function() { return CHANGE_TRAN_LIST; });\nvar CHANGE_TRAN_LIST = \"TRAN/CHANGE_TRAN_LIST\";\n\n//# sourceURL=webpack:///./src/container/translation/store/constants.js?");

/***/ }),

/***/ "./src/container/translation/store/index.js":
/*!**************************************************!*\
  !*** ./src/container/translation/store/index.js ***!
  \**************************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ \"./src/container/translation/store/reducer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reducer\", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/container/translation/store/index.js?");

/***/ }),

/***/ "./src/container/translation/store/reducer.js":
/*!****************************************************!*\
  !*** ./src/container/translation/store/reducer.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/container/translation/store/constants.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar defaultState = {\n  tranList: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"CHANGE_TRAN_LIST\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        tranList: action.value\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/container/translation/store/reducer.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/server/utils.js\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Routers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Routers */ \"./src/Routers.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ \"./src/store/index.js\");\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express_http_proxy__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_5__);\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar app = express();\nvar port = 3001;\n\n\n\n\n\n\napp.use(express.static(\"public\")); //发现请求是个静态文件，则去public根目录下面找\n\napp.use(\"/api\", express_http_proxy__WEBPACK_IMPORTED_MODULE_4___default()(\"http://47.95.113.63\", {\n  proxyReqPathResolver: function proxyReqPathResolver(req) {\n    return \"/ssr/api\" + req.url;\n  }\n}));\napp.get(\"*\", function (req, res) {\n  var store = Object(_store__WEBPACK_IMPORTED_MODULE_3__[\"getStore\"])(req); //拿到异步数据，并填充到store中，解决服务端componentDidMount不执行的问题\n  //store里面填充什么，需要结合当前用户请求地址和路由做判断\n\n  var matchedRoutes = Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__[\"matchRoutes\"])(_Routers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], req.path);\n  var promises = []; //循环matchRoutes，把匹配上的路由中，自定义静态方法loadData()都执行一边\n\n  matchedRoutes.map(function (mr) {\n    if (mr.route.loadData) {\n      var promise = new Promise(function (resovle, reject) {\n        //无论数据请求是否有误，正确走then，错误走catch。resovle都会被正确触发\n        mr.route.loadData(store).then(resovle).catch(resovle);\n      });\n      promises.push(promise);\n    }\n  });\n  Promise.all(promises).then(function () {\n    var context = {\n      css: []\n    };\n    var html = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(req, store, _Routers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], context); //重定向\n\n    if (context.action === \"REPLACE\") {\n      res.redirect(301, context.url);\n    } else if (context.notFound) {\n      //404\n      res.status(404); //修改状态码\n\n      res.send(html);\n    } else {\n      res.send(html);\n    }\n  });\n});\napp.listen(port, function () {\n  return console.log(\"Example app listening on port \".concat(port, \"!\"));\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/request.js":
/*!*******************************!*\
  !*** ./src/server/request.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ \"./src/util/index.js\");\n\n\n\nvar serverAxios = function serverAxios(req) {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n    baseURL: \"http://47.95.113.63/ssr\",\n    headers: {\n      cookie: req.get(\"cookie\") || \"\"\n    },\n    params: {\n      secret: _util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].secret\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (serverAxios);\n\n//# sourceURL=webpack:///./src/server/request.js?");

/***/ }),

/***/ "./src/server/utils.js":
/*!*****************************!*\
  !*** ./src/server/utils.js ***!
  \*****************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n//使用 react-dom/server renderToString编译react dom变成字符串，直接插入html中\n\n\n\n\n\nvar render = function render(req, store, routes, context) {\n  var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_0__[\"renderToString\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"Provider\"], {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"StaticRouter\"], {\n    location: req.path,\n    context: context\n  }, Object(react_router_config__WEBPACK_IMPORTED_MODULE_3__[\"renderRoutes\"])(routes))));\n  var cssStr = context.css.length ? context.css.join(\"\\n\") : \"\";\n  return \"\\n      <html>\\n        <head>\\n          <style>\".concat(cssStr, \"</style>\\n        </head>\\n        <body>\\n          <div id=\\\"root\\\">\").concat(content, \"</div>\\n          <script>\\n            window.context = \").concat(JSON.stringify(store.getState()), \"\\n          </script>\\n          <script src=\\\"/bundle.js\\\"></script>\\n        </body>\\n      </html>\");\n};\n\n//# sourceURL=webpack:///./src/server/utils.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: getStore, getClientStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStore\", function() { return getStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getClientStore\", function() { return getClientStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _container_home_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../container/home/store */ \"./src/container/home/store/index.js\");\n/* harmony import */ var _components_header_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header/store */ \"./src/components/header/store/index.js\");\n/* harmony import */ var _container_translation_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../container/translation/store */ \"./src/container/translation/store/index.js\");\n/* harmony import */ var _server_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../server/request */ \"./src/server/request.js\");\n/* harmony import */ var _client_request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client/request */ \"./src/client/request.js\");\n\n\n\n\n\n\n\nvar reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  home: _container_home_store__WEBPACK_IMPORTED_MODULE_2__[\"reducer\"],\n  header: _components_header_store__WEBPACK_IMPORTED_MODULE_3__[\"reducer\"],\n  tran: _container_translation_store__WEBPACK_IMPORTED_MODULE_4__[\"reducer\"]\n}); //使用thunk.withExtraArgument 传递不同 axios实例给 redux-thunk,从而服务端，客户端调用不同axios instance 请求\n\nvar getStore = function getStore(req) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducer, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(Object(_server_request__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(req))));\n};\nvar getClientStore = function getClientStore(defaultState) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducer, defaultState, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(_client_request__WEBPACK_IMPORTED_MODULE_6__[\"default\"])));\n};\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "./src/util/index.js":
/*!***************************!*\
  !*** ./src/util/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar secret = \"PP87ANTIPIRATE\";\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  secret: secret\n});\n\n//# sourceURL=webpack:///./src/util/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");\n\n//# sourceURL=webpack:///external_%22express-http-proxy%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });