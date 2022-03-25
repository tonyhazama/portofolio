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
  var project = projects[type][projectId] || {};
  var label = labels.en;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log('dawdwa');
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "root",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Project"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "shortcut icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
                  lineNumber: 58,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: label.goBack
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "heading",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: "title",
              children: project.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "label",
              style: {
                marginBottom: '0px'
              },
              children: project.type || 'Project Type'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text",
              children: project.year || '-'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "scope",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "label",
              children: label.scope
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, this), project.scope && project.scope.map(function (scope, i) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text",
                children: scope
              }, "scopeItem".concat(i), false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 19
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "summary",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "label",
              children: label.summary
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text",
              children: project.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "tags",
              children: project.tags && project.tags.map(function (tag, i) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: _const__WEBPACK_IMPORTED_MODULE_5__["tagList"][tag]
                }, "tagItem".concat(i), false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 26
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "project-picture",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: project.thumbnail
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
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
                lineNumber: 93,
                columnNumber: 19
              }, _this)
            }, "snapshotItem".concat(i), false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvW3R5cGVdLmpzIl0sIm5hbWVzIjpbInByb2plY3RzIiwid29yayIsIndvcmtQcm9qZWN0cyIsImZ1biIsImZ1blByb2plY3RzIiwibGFiZWxzIiwiaWQiLCJzY29wZSIsInN1bW1hcnkiLCJ0YWdzIiwiZ29CYWNrIiwiZW4iLCJQcm9qZWN0RGV0YWlsIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsInR5cGUiLCJwcm9qZWN0SWQiLCJwcm9qZWN0IiwibGFiZWwiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiaGVpZ2h0IiwibWFyZ2luUmlnaHQiLCJ0aXRsZSIsIm1hcmdpbkJvdHRvbSIsInllYXIiLCJtYXAiLCJpIiwiZGVzY3JpcHRpb24iLCJ0YWciLCJ0YWdMaXN0IiwidGh1bWJuYWlsIiwic25hcHNob3QiLCJzUGljIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHO0FBQ2ZDLE1BQUksRUFBRUMsbURBRFM7QUFFZkMsS0FBRyxFQUFFQyxrREFBV0E7QUFGRCxDQUFqQjtBQUtBLElBQU1DLE1BQU0sR0FBRztBQUNiQyxJQUFFLEVBQUU7QUFDRkMsU0FBSyxFQUFFLE9BREw7QUFFRkMsV0FBTyxFQUFFLFNBRlA7QUFHRkMsUUFBSSxFQUFFLFFBSEo7QUFJRkMsVUFBTSxFQUFFO0FBSk4sR0FEUztBQU9iQyxJQUFFLEVBQUU7QUFDRkosU0FBSyxFQUFFLE9BREw7QUFFRkMsV0FBTyxFQUFFLFNBRlA7QUFHRkMsUUFBSSxFQUFFLFFBSEo7QUFJRkMsVUFBTSxFQUFFO0FBSk47QUFQUyxDQUFmO0FBZWUsU0FBU0UsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFBQTs7QUFBQTs7QUFDM0Ms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QUE7QUFBQSxVQURGO0FBd0REOztHQWxFdUJsQixhO1VBQ1BHLHFEOzs7S0FET0gsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy9bdHlwZV0uYjcxZjAxZDU0NDllNzMzNzZkZDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAYXV0aG9yIFRvbnkgSGF6YW1hXHJcbiAqIEBlbWFpbCB0b255aGF6YW1hNDcyMUBnbWFpbC5jb21cclxuICogQGNyZWF0ZSBkYXRlIDIwMjEtMDUtMjIgMDI6MDE6NTFcclxuICogQG1vZGlmeSBkYXRlIDIwMjEtMDUtMjIgMDI6MDE6NTFcclxuICogQGRlc2MgVGhpcyBpcyBteSBwZXJzb25hbCB3ZWJzaXRlXHJcbiAqL1xyXG5cclxuIGltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IGZ1blByb2plY3RzLCB3b3JrUHJvamVjdHMsIHRhZ0xpc3QgfSBmcm9tICcuLi8uLi9jb25zdCc7XHJcbmltcG9ydCB7IEFycm93TGVmdE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuY29uc3QgcHJvamVjdHMgPSB7XHJcbiAgd29yazogd29ya1Byb2plY3RzLFxyXG4gIGZ1bjogZnVuUHJvamVjdHNcclxufTtcclxuXHJcbmNvbnN0IGxhYmVscyA9IHtcclxuICBpZDoge1xyXG4gICAgc2NvcGU6ICdTY29wZScsXHJcbiAgICBzdW1tYXJ5OiAnU3VtbWFyeScsXHJcbiAgICB0YWdzOiAnU3RhY2tzJyxcclxuICAgIGdvQmFjazogJ0dvIEJhY2snLFxyXG4gIH0sXHJcbiAgZW46IHtcclxuICAgIHNjb3BlOiAnU2NvcGUnLFxyXG4gICAgc3VtbWFyeTogJ1N1bW1hcnknLFxyXG4gICAgdGFnczogJ1N0YWNrcycsXHJcbiAgICBnb0JhY2s6ICdHbyBCYWNrJyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdERldGFpbChwcm9wcykge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgdHlwZSwgcHJvamVjdElkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzW3R5cGVdW3Byb2plY3RJZF0gfHwge307XHJcbiAgY29uc3QgbGFiZWwgPSBsYWJlbHMuZW47XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnZGF3ZHdhJyk7XHJcbiAgfSwgW10pO1xyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlByb2plY3Q8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQgcHJvamVjdC1kZXRhaWxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7aGVpZ2h0OiAnMTAwJSd9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1kZXNjXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9gfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgPEFycm93TGVmdE91dGxpbmVkIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICcxZW0nfX0gLz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2xhYmVsLmdvQmFja308L3NwYW4+ICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPntwcm9qZWN0LnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIiBzdHlsZT17e21hcmdpbkJvdHRvbTogJzBweCd9fT57cHJvamVjdC50eXBlIHx8ICdQcm9qZWN0IFR5cGUnfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+e3Byb2plY3QueWVhciB8fCAnLSd9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY29wZVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+e2xhYmVsLnNjb3BlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICB7cHJvamVjdC5zY29wZSAmJiBwcm9qZWN0LnNjb3BlLm1hcCgoc2NvcGUsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIiBrZXk9e2BzY29wZUl0ZW0ke2l9YH0+e3Njb3BlfTwvcD5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+e2xhYmVsLnN1bW1hcnl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj57cHJvamVjdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzXCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvamVjdC50YWdzICYmIHByb2plY3QudGFncy5tYXAoKHRhZywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4ga2V5PXtgdGFnSXRlbSR7aX1gfT57dGFnTGlzdFt0YWddfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LXBpY3R1cmVcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb2plY3QudGh1bWJuYWlsfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3Qtc25hcHNob3RcIj5cclxuICAgICAgICAgICAge3Byb2plY3Quc25hcHNob3QgJiYgcHJvamVjdC5zbmFwc2hvdC5tYXAoKHNQaWMsIGkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbmFwc2hvdC1pdGVtXCIga2V5PXtgc25hcHNob3RJdGVtJHtpfWB9PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c1BpY30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==