webpackJsonp([10],{

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rc_pagination_assets_index_less__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rc_pagination_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rc_pagination_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rc_pagination__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);





var itemRender = function itemRender(current, type) {
  if (type === 'page') {
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      'a',
      { href: '#' + current },
      current
    );
  }
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('a', { href: '#' + current });
};

__WEBPACK_IMPORTED_MODULE_3_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_rc_pagination__["a" /* default */], { total: 100, itemRender: itemRender }), document.getElementById('__react-content'));

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(206);


/***/ })

},[358]);
//# sourceMappingURL=itemRender.js.map