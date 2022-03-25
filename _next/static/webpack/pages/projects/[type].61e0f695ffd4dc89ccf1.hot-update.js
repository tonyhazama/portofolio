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
  var project;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvW3R5cGVdLmpzIl0sIm5hbWVzIjpbInByb2plY3RzIiwid29yayIsIndvcmtQcm9qZWN0cyIsImZ1biIsImZ1blByb2plY3RzIiwibGFiZWxzIiwiaWQiLCJzY29wZSIsInN1bW1hcnkiLCJ0YWdzIiwiZ29CYWNrIiwiZW4iLCJQcm9qZWN0RGV0YWlsIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsInR5cGUiLCJwcm9qZWN0SWQiLCJwcm9qZWN0IiwibGFiZWwiLCJ1c2VFZmZlY3QiLCJoZWlnaHQiLCJtYXJnaW5SaWdodCIsInRpdGxlIiwibWFyZ2luQm90dG9tIiwieWVhciIsIm1hcCIsImkiLCJkZXNjcmlwdGlvbiIsInRhZyIsInRhZ0xpc3QiLCJ0aHVtYm5haWwiLCJzbmFwc2hvdCIsInNQaWMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUc7QUFDZkMsTUFBSSxFQUFFQyxtREFEUztBQUVmQyxLQUFHLEVBQUVDLGtEQUFXQTtBQUZELENBQWpCO0FBS0EsSUFBTUMsTUFBTSxHQUFHO0FBQ2JDLElBQUUsRUFBRTtBQUNGQyxTQUFLLEVBQUUsT0FETDtBQUVGQyxXQUFPLEVBQUUsU0FGUDtBQUdGQyxRQUFJLEVBQUUsUUFISjtBQUlGQyxVQUFNLEVBQUU7QUFKTixHQURTO0FBT2JDLElBQUUsRUFBRTtBQUNGSixTQUFLLEVBQUUsT0FETDtBQUVGQyxXQUFPLEVBQUUsU0FGUDtBQUdGQyxRQUFJLEVBQUUsUUFISjtBQUlGQyxVQUFNLEVBQUU7QUFKTjtBQVBTLENBQWY7QUFlZSxTQUFTRSxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUFBOztBQUFBOztBQUMzQyxNQUFNQyxNQUFNLEdBQUdD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QTtBQUFBO0FBQUEsVUFERjtBQXdERDs7R0FwRXVCaEIsYTtVQUNQRyxxRDs7O0tBRE9ILGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvamVjdHMvW3R5cGVdLjYxZTBmNjk1ZmZkNGRjODljY2YxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGF1dGhvciBUb255IEhhemFtYVxyXG4gKiBAZW1haWwgdG9ueWhhemFtYTQ3MjFAZ21haWwuY29tXHJcbiAqIEBjcmVhdGUgZGF0ZSAyMDIxLTA1LTIyIDAyOjAxOjUxXHJcbiAqIEBtb2RpZnkgZGF0ZSAyMDIxLTA1LTIyIDAyOjAxOjUxXHJcbiAqIEBkZXNjIFRoaXMgaXMgbXkgcGVyc29uYWwgd2Vic2l0ZVxyXG4gKi9cclxuXHJcbiBpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBmdW5Qcm9qZWN0cywgd29ya1Byb2plY3RzLCB0YWdMaXN0IH0gZnJvbSAnLi4vLi4vY29uc3QnO1xyXG5pbXBvcnQgeyBBcnJvd0xlZnRPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmNvbnN0IHByb2plY3RzID0ge1xyXG4gIHdvcms6IHdvcmtQcm9qZWN0cyxcclxuICBmdW46IGZ1blByb2plY3RzXHJcbn07XHJcblxyXG5jb25zdCBsYWJlbHMgPSB7XHJcbiAgaWQ6IHtcclxuICAgIHNjb3BlOiAnU2NvcGUnLFxyXG4gICAgc3VtbWFyeTogJ1N1bW1hcnknLFxyXG4gICAgdGFnczogJ1N0YWNrcycsXHJcbiAgICBnb0JhY2s6ICdHbyBCYWNrJyxcclxuICB9LFxyXG4gIGVuOiB7XHJcbiAgICBzY29wZTogJ1Njb3BlJyxcclxuICAgIHN1bW1hcnk6ICdTdW1tYXJ5JyxcclxuICAgIHRhZ3M6ICdTdGFja3MnLFxyXG4gICAgZ29CYWNrOiAnR28gQmFjaycsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3REZXRhaWwocHJvcHMpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHR5cGUsIHByb2plY3RJZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGxldCBwcm9qZWN0O1xyXG4gIGNvbnN0IGxhYmVsID0gbGFiZWxzLmVuO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGUgJiYgcHJvamVjdElkKSB7XHJcbiAgICAgIHByb2plY3QgPSBwcm9qZWN0c1t0eXBlXVtwcm9qZWN0SWRdO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Qcm9qZWN0PC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAge3Byb2plY3QgJiYgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50IHByb2plY3QtZGV0YWlsXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17e2hlaWdodDogJzEwMCUnfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtZGVzY1wiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxBcnJvd0xlZnRPdXRsaW5lZCBzdHlsZT17e21hcmdpblJpZ2h0OiAnMWVtJ319IC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPntsYWJlbC5nb0JhY2t9PC9zcGFuPiAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj57cHJvamVjdC50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206ICcwcHgnfX0+e3Byb2plY3QudHlwZSB8fCAnUHJvamVjdCBUeXBlJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPntwcm9qZWN0LnllYXIgfHwgJy0nfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NvcGVcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPntsYWJlbC5zY29wZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAge3Byb2plY3Quc2NvcGUgJiYgcHJvamVjdC5zY29wZS5tYXAoKHNjb3BlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCIga2V5PXtgc2NvcGVJdGVtJHtpfWB9PntzY29wZX08L3A+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnlcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPntsYWJlbC5zdW1tYXJ5fTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+e3Byb2plY3QuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnc1wiPlxyXG4gICAgICAgICAgICAgICAge3Byb2plY3QudGFncyAmJiBwcm9qZWN0LnRhZ3MubWFwKCh0YWcsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGtleT17YHRhZ0l0ZW0ke2l9YH0+e3RhZ0xpc3RbdGFnXX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1waWN0dXJlXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9qZWN0LnRodW1ibmFpbH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LXNuYXBzaG90XCI+XHJcbiAgICAgICAgICAgIHtwcm9qZWN0LnNuYXBzaG90ICYmIHByb2plY3Quc25hcHNob3QubWFwKChzUGljLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic25hcHNob3QtaXRlbVwiIGtleT17YHNuYXBzaG90SXRlbSR7aX1gfT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3NQaWN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2Pn1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9