self["webpackHotUpdate_N_E"]("pages/projects/[projectId]",{

/***/ "./pages/projects/[projectId].js":
/*!***************************************!*\
  !*** ./pages/projects/[projectId].js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ProjectDetail; }
/* harmony export */ });
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
/* harmony import */ var _components_projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/projects */ "./components/projects.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\workfiles\\personal\\portofolio\\pages\\projects\\[projectId].js",
    _s = $RefreshSig$();

/**
 * @author Tony Hazama
 * @email tonyhazama4721@gmail.com
 * @create date 2021-05-22 02:01:51
 * @modify date 2021-05-22 02:01:51
 * @desc This is my personal website
 */






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

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  var projectId = router.query.projectId;
  var project = _components_projects__WEBPACK_IMPORTED_MODULE_5__.projects[projectId] || {};
  var label = labels.en;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "root",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Project"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "shortcut icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "content project-detail",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container",
        style: {
          height: '100%'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "project-desc",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
              href: "/",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "custom-link",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.ArrowLeftOutlined, {
                  style: {
                    marginRight: '1em'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  children: label.goBack
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "heading",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              className: "title",
              children: project.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "label",
              style: {
                marginBottom: '0px'
              },
              children: project.type || 'Project Type'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text",
              children: project.year || '-'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "scope",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "label",
              children: label.scope
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, this), project.scope && project.scope.map(function (scope, i) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "text",
                children: scope
              }, "scopeItem".concat(i), false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 19
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "summary",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "label",
              children: label.summary
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text",
              children: project.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "tags",
              children: project.tags && project.tags.map(function (tag, i) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  children: _components_projects__WEBPACK_IMPORTED_MODULE_5__.tagList[tag]
                }, "tagItem".concat(i), false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 26
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "project-picture",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: project.thumbnail
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "project-snapshot",
          children: project.snapshot && project.snapshot.map(function (sPic, i) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "snapshot-item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: sPic
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 19
              }, _this)
            }, "snapshotItem".concat(i), false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

_s(ProjectDetail, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvW3Byb2plY3RJZF0uanMiXSwibmFtZXMiOlsibGFiZWxzIiwiaWQiLCJzY29wZSIsInN1bW1hcnkiLCJ0YWdzIiwiZ29CYWNrIiwiZW4iLCJQcm9qZWN0RGV0YWlsIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwcm9qZWN0SWQiLCJxdWVyeSIsInByb2plY3QiLCJwcm9qZWN0cyIsImxhYmVsIiwiaGVpZ2h0IiwibWFyZ2luUmlnaHQiLCJ0aXRsZSIsIm1hcmdpbkJvdHRvbSIsInR5cGUiLCJ5ZWFyIiwibWFwIiwiaSIsImRlc2NyaXB0aW9uIiwidGFnIiwidGFnTGlzdCIsInRodW1ibmFpbCIsInNuYXBzaG90Iiwic1BpYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHO0FBQ2JDLElBQUUsRUFBRTtBQUNGQyxTQUFLLEVBQUUsT0FETDtBQUVGQyxXQUFPLEVBQUUsU0FGUDtBQUdGQyxRQUFJLEVBQUUsUUFISjtBQUlGQyxVQUFNLEVBQUU7QUFKTixHQURTO0FBT2JDLElBQUUsRUFBRTtBQUNGSixTQUFLLEVBQUUsT0FETDtBQUVGQyxXQUFPLEVBQUUsU0FGUDtBQUdGQyxRQUFJLEVBQUUsUUFISjtBQUlGQyxVQUFNLEVBQUU7QUFKTjtBQVBTLENBQWY7QUFlZSxTQUFTRSxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUFBOztBQUFBOztBQUMzQyxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRDJDLE1BRW5DQyxTQUZtQyxHQUVyQkYsTUFBTSxDQUFDRyxLQUZjLENBRW5DRCxTQUZtQztBQUczQyxNQUFNRSxPQUFPLEdBQUdDLDBEQUFRLENBQUNILFNBQUQsQ0FBUixJQUF1QixFQUF2QztB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QUE7QUFBQTtBQUFBO0FBQUEseUJBQVA7QUFDRCxlQUZnQjtBQURuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBaUNFO0FBQUssbUJBQVMsRUFBQyxpQkFBZjtBQUFBLGlDQUNFO0FBQUssZUFBRyxFQUFFVixPQUFPLENBQUNjO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpDRixlQW9DRTtBQUFLLG1CQUFTLEVBQUMsa0JBQWY7QUFBQSxvQkFDR2QsT0FBTyxDQUFDZSxRQUFSLElBQW9CZixPQUFPLENBQUNlLFFBQVIsQ0FBaUJOLEdBQWpCLENBQXFCLFVBQUNPLElBQUQsRUFBT04sQ0FBUCxFQUFhO0FBQ3JELGdDQUNFO0FBQUssdUJBQVMsRUFBQyxlQUFmO0FBQUEscUNBQ0U7QUFBSyxtQkFBRyxFQUFFTTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixxQ0FBbUROLENBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUFLRCxXQU5vQjtBQUR2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXBDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3REQ7O0dBOUR1QmhCLGE7VUFDUEcsa0Q7OztLQURPSCxhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzL1twcm9qZWN0SWRdLjRmMjU4MWNkMGE2MzI1OTJjMDg1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGF1dGhvciBUb255IEhhemFtYVxyXG4gKiBAZW1haWwgdG9ueWhhemFtYTQ3MjFAZ21haWwuY29tXHJcbiAqIEBjcmVhdGUgZGF0ZSAyMDIxLTA1LTIyIDAyOjAxOjUxXHJcbiAqIEBtb2RpZnkgZGF0ZSAyMDIxLTA1LTIyIDAyOjAxOjUxXHJcbiAqIEBkZXNjIFRoaXMgaXMgbXkgcGVyc29uYWwgd2Vic2l0ZVxyXG4gKi9cclxuXHJcbiBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgcHJvamVjdHMsIHRhZ0xpc3QgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Byb2plY3RzJztcclxuaW1wb3J0IHsgQXJyb3dMZWZ0T3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5jb25zdCBsYWJlbHMgPSB7XHJcbiAgaWQ6IHtcclxuICAgIHNjb3BlOiAnU2NvcGUnLFxyXG4gICAgc3VtbWFyeTogJ1N1bW1hcnknLFxyXG4gICAgdGFnczogJ1N0YWNrcycsXHJcbiAgICBnb0JhY2s6ICdHbyBCYWNrJyxcclxuICB9LFxyXG4gIGVuOiB7XHJcbiAgICBzY29wZTogJ1Njb3BlJyxcclxuICAgIHN1bW1hcnk6ICdTdW1tYXJ5JyxcclxuICAgIHRhZ3M6ICdTdGFja3MnLFxyXG4gICAgZ29CYWNrOiAnR28gQmFjaycsXHJcbiAgfSxcclxufSBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3REZXRhaWwocHJvcHMpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHsgcHJvamVjdElkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzW3Byb2plY3RJZF0gfHwge307XHJcbiAgY29uc3QgbGFiZWwgPSBsYWJlbHMuZW47XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlByb2plY3Q8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQgcHJvamVjdC1kZXRhaWxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7aGVpZ2h0OiAnMTAwJSd9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1kZXNjXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9gfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgPEFycm93TGVmdE91dGxpbmVkIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICcxZW0nfX0gLz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2xhYmVsLmdvQmFja308L3NwYW4+ICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPntwcm9qZWN0LnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIiBzdHlsZT17e21hcmdpbkJvdHRvbTogJzBweCd9fT57cHJvamVjdC50eXBlIHx8ICdQcm9qZWN0IFR5cGUnfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+e3Byb2plY3QueWVhciB8fCAnLSd9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY29wZVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+e2xhYmVsLnNjb3BlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICB7cHJvamVjdC5zY29wZSAmJiBwcm9qZWN0LnNjb3BlLm1hcCgoc2NvcGUsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIiBrZXk9e2BzY29wZUl0ZW0ke2l9YH0+e3Njb3BlfTwvcD5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+e2xhYmVsLnN1bW1hcnl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj57cHJvamVjdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzXCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvamVjdC50YWdzICYmIHByb2plY3QudGFncy5tYXAoKHRhZywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4ga2V5PXtgdGFnSXRlbSR7aX1gfT57dGFnTGlzdFt0YWddfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LXBpY3R1cmVcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb2plY3QudGh1bWJuYWlsfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3Qtc25hcHNob3RcIj5cclxuICAgICAgICAgICAge3Byb2plY3Quc25hcHNob3QgJiYgcHJvamVjdC5zbmFwc2hvdC5tYXAoKHNQaWMsIGkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbmFwc2hvdC1pdGVtXCIga2V5PXtgc25hcHNob3RJdGVtJHtpfWB9PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c1BpY30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==