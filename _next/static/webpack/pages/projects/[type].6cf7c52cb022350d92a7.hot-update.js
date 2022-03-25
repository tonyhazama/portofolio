webpackHotUpdate_N_E("pages/projects/[type]",{

/***/ "./pages/projects/[type].js":
/*!**********************************!*\
  !*** ./pages/projects/[type].js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectDetail; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../const */ "./const/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");


var _jsxFileName = "C:\\workfiles\\personal\\portofino\\pages\\projects\\[type].js",
    _s = $RefreshSig$();

/**
 * @author Tony Hazama
 * @email tonyhazama4721@gmail.com
 * @create date 2021-05-22 02:01:51
 * @modify date 2021-05-22 02:01:51
 * @desc This is my personal website
 */






var projects = {
  work: _const__WEBPACK_IMPORTED_MODULE_5__["workProjects"],
  fun: _const__WEBPACK_IMPORTED_MODULE_5__["funProjects"]
};
var labels = {
  id: {
    scope: 'Scope',
    summary: 'Summary',
    tags: 'Stacks',
    goBack: 'Go Back'
  },
  en: {
    scope: 'Scope',
    summary: 'Summary',
    tags: 'Stacks',
    goBack: 'Go Back'
  }
};
function ProjectDetail(props) {
  _s();

  var _this = this;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var _router$query = router.query,
      type = _router$query.type,
      projectId = _router$query.projectId;
  var project = {};
  var label = labels.en;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (type && projectId) {
      project = projects[type][projectId];
    }
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "root",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Project"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "shortcut icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this), project && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "content project-detail",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        style: {
          height: '100%'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "project-desc",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "custom-link",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["ArrowLeftOutlined"], {
                  style: {
                    marginRight: '1em'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: label.goBack
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "heading",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: "title",
              children: project.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "label",
              style: {
                marginBottom: '0px'
              },
              children: project.type || 'Project Type'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text",
              children: project.year || '-'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "scope",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "label",
              children: label.scope
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, this), project.scope && project.scope.map(function (scope, i) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text",
                children: scope
              }, "scopeItem".concat(i), false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 19
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "summary",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "label",
              children: label.summary
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text",
              children: project.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "tags",
              children: project.tags && project.tags.map(function (tag, i) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: _const__WEBPACK_IMPORTED_MODULE_5__["tagList"][tag]
                }, "tagItem".concat(i), false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 26
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "project-picture",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: project.thumbnail
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "project-snapshot",
          children: project.snapshot && project.snapshot.map(function (sPic, i) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "snapshot-item",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: sPic
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 19
              }, _this)
            }, "snapshotItem".concat(i), false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 19
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

_s(ProjectDetail, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = ProjectDetail;

var _c;

$RefreshReg$(_c, "ProjectDetail");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvW3R5cGVdLmpzIl0sIm5hbWVzIjpbInByb2plY3RzIiwid29yayIsIndvcmtQcm9qZWN0cyIsImZ1biIsImZ1blByb2plY3RzIiwibGFiZWxzIiwiaWQiLCJzY29wZSIsInN1bW1hcnkiLCJ0YWdzIiwiZ29CYWNrIiwiZW4iLCJQcm9qZWN0RGV0YWlsIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsInR5cGUiLCJwcm9qZWN0SWQiLCJwcm9qZWN0IiwibGFiZWwiLCJ1c2VFZmZlY3QiLCJoZWlnaHQiLCJtYXJnaW5SaWdodCIsInRpdGxlIiwibWFyZ2luQm90dG9tIiwieWVhciIsIm1hcCIsImkiLCJkZXNjcmlwdGlvbiIsInRhZyIsInRhZ0xpc3QiLCJ0aHVtYm5haWwiLCJzbmFwc2hvdCIsInNQaWMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUc7QUFDZkMsTUFBSSxFQUFFQyxtREFEUztBQUVmQyxLQUFHLEVBQUVDLGtEQUFXQTtBQUZELENBQWpCO0FBS0EsSUFBTUMsTUFBTSxHQUFHO0FBQ2JDLElBQUUsRUFBRTtBQUNGQyxTQUFLLEVBQUUsT0FETDtBQUVGQyxXQUFPLEVBQUUsU0FGUDtBQUdGQyxRQUFJLEVBQUUsUUFISjtBQUlGQyxVQUFNLEVBQUU7QUFKTixHQURTO0FBT2JDLElBQUUsRUFBRTtBQUNGSixTQUFLLEVBQUUsT0FETDtBQUVGQyxXQUFPLEVBQUUsU0FGUDtBQUdGQyxRQUFJLEVBQUUsUUFISjtBQUlGQyxVQUFNLEVBQUU7QUFKTjtBQVBTLENBQWY7QUFlZSxTQUFTRSxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUFBOztBQUFBOztBQUMzQyxNQUFNQyxNQUFNLEdBQUdD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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3REQ7O0dBcEV1QmhCLGE7VUFDUEcscUQ7OztLQURPSCxhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzL1t0eXBlXS42Y2Y3YzUyY2IwMjIzNTBkOTJhNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBhdXRob3IgVG9ueSBIYXphbWFcclxuICogQGVtYWlsIHRvbnloYXphbWE0NzIxQGdtYWlsLmNvbVxyXG4gKiBAY3JlYXRlIGRhdGUgMjAyMS0wNS0yMiAwMjowMTo1MVxyXG4gKiBAbW9kaWZ5IGRhdGUgMjAyMS0wNS0yMiAwMjowMTo1MVxyXG4gKiBAZGVzYyBUaGlzIGlzIG15IHBlcnNvbmFsIHdlYnNpdGVcclxuICovXHJcblxyXG4gaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgZnVuUHJvamVjdHMsIHdvcmtQcm9qZWN0cywgdGFnTGlzdCB9IGZyb20gJy4uLy4uL2NvbnN0JztcclxuaW1wb3J0IHsgQXJyb3dMZWZ0T3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5jb25zdCBwcm9qZWN0cyA9IHtcclxuICB3b3JrOiB3b3JrUHJvamVjdHMsXHJcbiAgZnVuOiBmdW5Qcm9qZWN0c1xyXG59O1xyXG5cclxuY29uc3QgbGFiZWxzID0ge1xyXG4gIGlkOiB7XHJcbiAgICBzY29wZTogJ1Njb3BlJyxcclxuICAgIHN1bW1hcnk6ICdTdW1tYXJ5JyxcclxuICAgIHRhZ3M6ICdTdGFja3MnLFxyXG4gICAgZ29CYWNrOiAnR28gQmFjaycsXHJcbiAgfSxcclxuICBlbjoge1xyXG4gICAgc2NvcGU6ICdTY29wZScsXHJcbiAgICBzdW1tYXJ5OiAnU3VtbWFyeScsXHJcbiAgICB0YWdzOiAnU3RhY2tzJyxcclxuICAgIGdvQmFjazogJ0dvIEJhY2snLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0RGV0YWlsKHByb3BzKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyB0eXBlLCBwcm9qZWN0SWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICBsZXQgcHJvamVjdCA9ICB7fTtcclxuICBjb25zdCBsYWJlbCA9IGxhYmVscy5lbjtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0eXBlICYmIHByb2plY3RJZCkge1xyXG4gICAgICBwcm9qZWN0ID0gcHJvamVjdHNbdHlwZV1bcHJvamVjdElkXTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+UHJvamVjdDwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIHtwcm9qZWN0ICYmIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCBwcm9qZWN0LWRldGFpbFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3toZWlnaHQ6ICcxMDAlJ319PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWRlc2NcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2B9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICA8QXJyb3dMZWZ0T3V0bGluZWQgc3R5bGU9e3ttYXJnaW5SaWdodDogJzFlbSd9fSAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57bGFiZWwuZ29CYWNrfTwvc3Bhbj4gIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+e3Byb2plY3QudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnMHB4J319Pntwcm9qZWN0LnR5cGUgfHwgJ1Byb2plY3QgVHlwZSd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj57cHJvamVjdC55ZWFyIHx8ICctJ308L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjb3BlXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj57bGFiZWwuc2NvcGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIHtwcm9qZWN0LnNjb3BlICYmIHByb2plY3Quc2NvcGUubWFwKChzY29wZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiIGtleT17YHNjb3BlSXRlbSR7aX1gfT57c2NvcGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5XCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj57bGFiZWwuc3VtbWFyeX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPntwcm9qZWN0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3NcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9qZWN0LnRhZ3MgJiYgcHJvamVjdC50YWdzLm1hcCgodGFnLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBrZXk9e2B0YWdJdGVtJHtpfWB9Pnt0YWdMaXN0W3RhZ119PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtcGljdHVyZVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17cHJvamVjdC50aHVtYm5haWx9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1zbmFwc2hvdFwiPlxyXG4gICAgICAgICAgICB7cHJvamVjdC5zbmFwc2hvdCAmJiBwcm9qZWN0LnNuYXBzaG90Lm1hcCgoc1BpYywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNuYXBzaG90LWl0ZW1cIiBrZXk9e2BzbmFwc2hvdEl0ZW0ke2l9YH0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzUGljfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj59XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==