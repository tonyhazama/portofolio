webpackHotUpdate_N_E("pages/index",{

/***/ "./ sync recursive ^\\.\\/public.*$":
/*!*****************************!*\
  !*** . sync ^\.\/public.*$ ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./public/favicon.ico": "./public/favicon.ico",
	"./public/static/bg1.jpg": "./public/static/bg1.jpg",
	"./public/static/bg2.jpg": "./public/static/bg2.jpg",
	"./public/static/csmart.jpg": "./public/static/csmart.jpg",
	"./public/static/daw.jpg": "./public/static/daw.jpg",
	"./public/static/hehe.jpg": "./public/static/hehe.jpg",
	"./public/static/loyola.jpg": "./public/static/loyola.jpg",
	"./public/static/loyola1.jpg": "./public/static/loyola1.jpg",
	"./public/static/loyola2.jpg": "./public/static/loyola2.jpg",
	"./public/static/map.jpg": "./public/static/map.jpg",
	"./public/static/map1.jpg": "./public/static/map1.jpg",
	"./public/static/map2.jpg": "./public/static/map2.jpg",
	"./public/static/profile.jpg": "./public/static/profile.jpg",
	"./public/static/trav1.jpg": "./public/static/trav1.jpg",
	"./public/static/trav2.jpg": "./public/static/trav2.jpg",
	"./public/static/vmdlab1.jpg": "./public/static/vmdlab1.jpg",
	"./public/static/vmdlab2.jpg": "./public/static/vmdlab2.jpg",
	"./public/vercel.svg": "./public/vercel.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive ^\\.\\/public.*$";

/***/ }),

/***/ "./components/landing.js":
/*!*******************************!*\
  !*** ./components/landing.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Landing; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\workfiles\\personal\\portofolio\\components\\landing.js";

/**
 * @author Tony Hazama
 * @email tonyhazama4721@gmail.com
 * @create date 2021-05-22 02:01:51
 * @modify date 2021-05-22 02:01:51
 * @desc This is my personal website
 */
function Landing() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "section landing-section",
    style: {
      display: 'flex'
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "landing",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "img-container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: __webpack_require__(/*! ../public/static/profile.jpg */ "./public/static/profile.jpg")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "title",
          children: "I am Muhammad Sultoni"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: "subtitle",
          children: ["I'm a Professional Web Developer. Currently working at ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
            style: {
              color: '#fff'
            },
            children: "PT. Padepokan Tujuh Sembilan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 91
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
_c = Landing;

var _c;

$RefreshReg$(_c, "Landing");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./public/static/bg1.jpg":
/*!*******************************!*\
  !*** ./public/static/bg1.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bg1-6f4f2e9dedf4e7387644094efa6cc0eb.jpg";

/***/ }),

/***/ "./public/static/profile.jpg":
/*!***********************************!*\
  !*** ./public/static/profile.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/profile-99653695409d06bf72849f63cce15860.jpg";

/***/ }),

/***/ "./public/static/profilepic2.jpg":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4gc3luYyBeXFwuXFwvcHVibGljLiokIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xhbmRpbmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9zdGF0aWMvYmcxLmpwZyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL3N0YXRpYy9wcm9maWxlLmpwZyJdLCJuYW1lcyI6WyJMYW5kaW5nIiwiZGlzcGxheSIsInJlcXVpcmUiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWdCLFNBQVNBLE9BQVQsR0FBbUI7QUFFakMsc0JBQ0U7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBeUMsU0FBSyxFQUFFO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQWhEO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxTQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLGVBQWY7QUFBQSxpQ0FDRTtBQUFLLGVBQUcsRUFBRUMsbUJBQU8sQ0FBQyxpRUFBRDtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUlFO0FBQUksbUJBQVMsRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLGVBS0U7QUFBSSxtQkFBUyxFQUFDLFVBQWQ7QUFBQSw2RkFBZ0Y7QUFBRyxpQkFBSyxFQUFFO0FBQUNDLG1CQUFLLEVBQUU7QUFBUixhQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWFEO0tBZndCSCxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSekIsaUY7Ozs7Ozs7Ozs7O0FDQUEscUYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWUwNGNhMTgyYjVjZmIxMjY3M2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9wdWJsaWMvZmF2aWNvbi5pY29cIjogXCIuL3B1YmxpYy9mYXZpY29uLmljb1wiLFxuXHRcIi4vcHVibGljL3N0YXRpYy9iZzEuanBnXCI6IFwiLi9wdWJsaWMvc3RhdGljL2JnMS5qcGdcIixcblx0XCIuL3B1YmxpYy9zdGF0aWMvYmcyLmpwZ1wiOiBcIi4vcHVibGljL3N0YXRpYy9iZzIuanBnXCIsXG5cdFwiLi9wdWJsaWMvc3RhdGljL2NzbWFydC5qcGdcIjogXCIuL3B1YmxpYy9zdGF0aWMvY3NtYXJ0LmpwZ1wiLFxuXHRcIi4vcHVibGljL3N0YXRpYy9kYXcuanBnXCI6IFwiLi9wdWJsaWMvc3RhdGljL2Rhdy5qcGdcIixcblx0XCIuL3B1YmxpYy9zdGF0aWMvaGVoZS5qcGdcIjogXCIuL3B1YmxpYy9zdGF0aWMvaGVoZS5qcGdcIixcblx0XCIuL3B1YmxpYy9zdGF0aWMvbG95b2xhLmpwZ1wiOiBcIi4vcHVibGljL3N0YXRpYy9sb3lvbGEuanBnXCIsXG5cdFwiLi9wdWJsaWMvc3RhdGljL2xveW9sYTEuanBnXCI6IFwiLi9wdWJsaWMvc3RhdGljL2xveW9sYTEuanBnXCIsXG5cdFwiLi9wdWJsaWMvc3RhdGljL2xveW9sYTIuanBnXCI6IFwiLi9wdWJsaWMvc3RhdGljL2xveW9sYTIuanBnXCIsXG5cdFwiLi9wdWJsaWMvc3RhdGljL21hcC5qcGdcIjogXCIuL3B1YmxpYy9zdGF0aWMvbWFwLmpwZ1wiLFxuXHRcIi4vcHVibGljL3N0YXRpYy9tYXAxLmpwZ1wiOiBcIi4vcHVibGljL3N0YXRpYy9tYXAxLmpwZ1wiLFxuXHRcIi4vcHVibGljL3N0YXRpYy9tYXAyLmpwZ1wiOiBcIi4vcHVibGljL3N0YXRpYy9tYXAyLmpwZ1wiLFxuXHRcIi4vcHVibGljL3N0YXRpYy9wcm9maWxlLmpwZ1wiOiBcIi4vcHVibGljL3N0YXRpYy9wcm9maWxlLmpwZ1wiLFxuXHRcIi4vcHVibGljL3N0YXRpYy90cmF2MS5qcGdcIjogXCIuL3B1YmxpYy9zdGF0aWMvdHJhdjEuanBnXCIsXG5cdFwiLi9wdWJsaWMvc3RhdGljL3RyYXYyLmpwZ1wiOiBcIi4vcHVibGljL3N0YXRpYy90cmF2Mi5qcGdcIixcblx0XCIuL3B1YmxpYy9zdGF0aWMvdm1kbGFiMS5qcGdcIjogXCIuL3B1YmxpYy9zdGF0aWMvdm1kbGFiMS5qcGdcIixcblx0XCIuL3B1YmxpYy9zdGF0aWMvdm1kbGFiMi5qcGdcIjogXCIuL3B1YmxpYy9zdGF0aWMvdm1kbGFiMi5qcGdcIixcblx0XCIuL3B1YmxpYy92ZXJjZWwuc3ZnXCI6IFwiLi9wdWJsaWMvdmVyY2VsLnN2Z1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcL3B1YmxpYy4qJFwiOyIsIi8qKlxyXG4gKiBAYXV0aG9yIFRvbnkgSGF6YW1hXHJcbiAqIEBlbWFpbCB0b255aGF6YW1hNDcyMUBnbWFpbC5jb21cclxuICogQGNyZWF0ZSBkYXRlIDIwMjEtMDUtMjIgMDI6MDE6NTFcclxuICogQG1vZGlmeSBkYXRlIDIwMjEtMDUtMjIgMDI6MDE6NTFcclxuICogQGRlc2MgVGhpcyBpcyBteSBwZXJzb25hbCB3ZWJzaXRlXHJcbiAqL1xyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExhbmRpbmcoKSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gbGFuZGluZy1zZWN0aW9uXCIgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZGluZ1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKCcuLi9wdWJsaWMvc3RhdGljL3Byb2ZpbGUuanBnJyl9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkkgYW0gTXVoYW1tYWQgU3VsdG9uaTwvaDE+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5JJ20gYSBQcm9mZXNzaW9uYWwgV2ViIERldmVsb3Blci4gQ3VycmVudGx5IHdvcmtpbmcgYXQgPGIgc3R5bGU9e3tjb2xvcjogJyNmZmYnfX0+UFQuIFBhZGVwb2thbiBUdWp1aCBTZW1iaWxhbjwvYj48L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9iZzEtNmY0ZjJlOWRlZGY0ZTczODc2NDQwOTRlZmE2Y2MwZWIuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Byb2ZpbGUtOTk2NTM2OTU0MDlkMDZiZjcyODQ5ZjYzY2NlMTU4NjAuanBnXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==