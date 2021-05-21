self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/projects.js":
/*!********************************!*\
  !*** ./components/projects.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "tagList": function() { return /* binding */ tagList; },
/* harmony export */   "default": function() { return /* binding */ Projects; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_workfiles_personal_portofolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\workfiles\\personal\\portofolio\\components\\projects.js",
    _s = $RefreshSig$(),
    _this2 = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_workfiles_personal_portofolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var projects = [{
  title: "Kolese Loyola",
  type: "Web Application",
  thumbnail: '/static/loyola.jpg',
  scope: ['UI/UX', 'Web Development'],
  tags: [1, 3],
  description: "Kolese Loyola is a group of Projects that consist of New Student Admissions Applicaiton"
}, {
  title: "C-Smart",
  type: "Web Application",
  thumbnail: '/static/csmart.jpg',
  scope: ['UI/UX', 'Web Development'],
  tags: [2],
  description: "CSMART is a web application that functions as a Swift Message Investigation Tool. The main function of the application is to investigate problematic Swift Message Case and repair it through a specific set of processes depending on the type of case and the problem it encounters. CSMART consume Spring Boot API as the main backend system.\n    \nOn the front-end side, CSMART Utilize Angular 6 and bootstrap 4 CSS framework as the main foundation. With a combination of RxJS and a modular nature of Angular 6, making this application excels in term of speed performance, effectiveness, and accessibility.\n    "
}, {
  title: "Marketplace Auction Price",
  type: "Web Application",
  thumbnail: '/static/map.jpg',
  tags: [1, 3],
  scope: ['UI/UX', 'Web Development'],
  snapshot: ['/static/map1.jpg', '/static/map2.jpg'],
  description: "Market Auction Price is a service from IBID, the largest automotive auction center in Indonesia, which presents the market price statistics of auction cars in various graphic formats and details according to user needs. MAP is integrated with ACV (Astra Car Valuation) as a reliable and comprehensive standard for car valuation so that the analysis and price trends presented are more precise and accurate.\n    \nMAP helped the decision to buy a dream car with a sense of comfort within the budget. Know the market price of the car to be purchased in detail according to the conditions, location and within a certain time so that it can know the price trend.\n    "
}, {
  title: "Trav",
  type: "Mobile Design",
  thumbnail: '/static/trav2.jpg',
  tags: [3],
  description: 'We’re not selling “big agency services at small agency prices”. We deliver exceptional design solutions to complex business problems – extremely efficiently and delivered at lightning-fast pace.'
}, {
  title: "Volimond Lab",
  type: "Website",
  thumbnail: '/static/vmdlab1.jpg',
  tags: [3],
  snapshot: ['/static/vmdlab2.jpg'],
  description: 'We’re not selling “big agency services at small agency prices”. We deliver exceptional design solutions to complex business problems – extremely efficiently and delivered at lightning-fast pace.'
}];
var tagList = ['All Tags', 'React JS', 'Angular', 'UI/UX', 'Node JS', 'ExpressJS'];
function Projects() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      activeTags = _useState[0],
      setActiveTags = _useState[1];

  var activeProjects = activeTags ? projects.map(function (e) {
    return _objectSpread(_objectSpread({}, e), {}, {
      isHidden: !e.tags.includes(activeTags)
    });
  }) : projects;
  var activeProjectsLength = activeProjects.filter(function (e) {
    return !e.isHidden;
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "section padded full-height",
    style: {
      paddingTop: '80px'
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          textAlign: 'center',
          marginBottom: '2em'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "title",
          children: "This is what i've worked on"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
          className: "subtitle",
          children: "I'm a professional Web Developer."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          textAlign: 'center',
          marginBottom: '4em'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "tags",
          children: tagList.map(function (tag, i) {
            var key = i === 0 ? '' : i;
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "".concat(activeTags === key ? 'active' : ''),
              onClick: function onClick(_) {
                setActiveTags(key);
              },
              children: tag
            }, "tagItem".concat(i), false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "projects",
          children: activeProjects.map(function (project, projectId) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
              href: "/projects/".concat(projectId),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "project ".concat(project.isHidden ? 'hidden' : ''),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MyProject, _objectSpread({}, project), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 17
              }, _this)
            }, "projectItem".concat(projectId), false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "no-data ".concat(activeProjectsLength.length > 0 ? 'hidden' : ''),
          children: "I'm still working on it"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 5
  }, this);
}

_s(Projects, "96piPZARks1Daal48qxFdV48kTE=");

_c = Projects;

var MyProject = function MyProject(props) {
  var _props$title = props.title,
      title = _props$title === void 0 ? '' : _props$title,
      _props$type = props.type,
      type = _props$type === void 0 ? '' : _props$type,
      _props$tags = props.tags,
      tags = _props$tags === void 0 ? [] : _props$tags,
      thumbnail = props.thumbnail;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "project-picture"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "project-desc",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "project-title",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "project-type",
        children: type
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "project-tags",
        children: tags.map(function (tag, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: tagList[tag]
          }, "projectItem".concat(i), false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 11
          }, _this2);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, _this2)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }, _this2)]
  }, void 0, true);
};

_c2 = MyProject;

var _c, _c2;

$RefreshReg$(_c, "Projects");
$RefreshReg$(_c2, "MyProject");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0cy5qcyJdLCJuYW1lcyI6WyJwcm9qZWN0cyIsInRpdGxlIiwidHlwZSIsInRodW1ibmFpbCIsInNjb3BlIiwidGFncyIsImRlc2NyaXB0aW9uIiwic25hcHNob3QiLCJ0YWdMaXN0IiwiUHJvamVjdHMiLCJ1c2VTdGF0ZSIsImFjdGl2ZVRhZ3MiLCJzZXRBY3RpdmVUYWdzIiwiYWN0aXZlUHJvamVjdHMiLCJtYXAiLCJlIiwiaXNIaWRkZW4iLCJpbmNsdWRlcyIsImFjdGl2ZVByb2plY3RzTGVuZ3RoIiwiZmlsdGVyIiwicGFkZGluZ1RvcCIsInRleHRBbGlnbiIsIm1hcmdpbkJvdHRvbSIsInRhZyIsImkiLCJrZXkiLCJfIiwicHJvamVjdCIsInByb2plY3RJZCIsImxlbmd0aCIsIk15UHJvamVjdCIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxRQUFRLEdBQUcsQ0FDdEI7QUFDRUMsT0FBSyxFQUFFLGVBRFQ7QUFFRUMsTUFBSSxFQUFFLGlCQUZSO0FBR0VDLFdBQVMsRUFBRSxvQkFIYjtBQUlFQyxPQUFLLEVBQUUsQ0FDTCxPQURLLEVBRUwsaUJBRkssQ0FKVDtBQVFFQyxNQUFJLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQVJSO0FBU0VDLGFBQVc7QUFUYixDQURzQixFQVl0QjtBQUNFTCxPQUFLLEVBQUUsU0FEVDtBQUVFQyxNQUFJLEVBQUUsaUJBRlI7QUFHRUMsV0FBUyxFQUFFLG9CQUhiO0FBSUVDLE9BQUssRUFBRSxDQUNMLE9BREssRUFFTCxpQkFGSyxDQUpUO0FBUUVDLE1BQUksRUFBRSxDQUFDLENBQUQsQ0FSUjtBQVNFQyxhQUFXO0FBVGIsQ0Fac0IsRUF5QnRCO0FBQ0VMLE9BQUssRUFBRSwyQkFEVDtBQUVFQyxNQUFJLEVBQUUsaUJBRlI7QUFHRUMsV0FBUyxFQUFFLGlCQUhi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QztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUFBLGtCQUFnQ0Y7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUEsa0JBQStCQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0U7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQSxrQkFBK0JHLElBQUksQ0FBQ1MsR0FBTCxDQUFTLFVBQUNTLEdBQUQsRUFBTUMsQ0FBTjtBQUFBLDhCQUN0QztBQUFBLHNCQUErQmhCLE9BQU8sQ0FBQ2UsR0FBRDtBQUF0QyxrQ0FBeUJDLENBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRHNDO0FBQUEsU0FBVDtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUEsa0JBREY7QUFjRCxDQWhCRDs7TUFBTU0sUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hZGVmNzIyZjFlN2FmMjhhNjA3Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJLb2xlc2UgTG95b2xhXCIsIFxyXG4gICAgdHlwZTogXCJXZWIgQXBwbGljYXRpb25cIixcclxuICAgIHRodW1ibmFpbDogJy9zdGF0aWMvbG95b2xhLmpwZycsXHJcbiAgICBzY29wZTogW1xyXG4gICAgICAnVUkvVVgnLFxyXG4gICAgICAnV2ViIERldmVsb3BtZW50JyxcclxuICAgIF0sXHJcbiAgICB0YWdzOiBbMSwgM10sXHJcbiAgICBkZXNjcmlwdGlvbjogYEtvbGVzZSBMb3lvbGEgaXMgYSBncm91cCBvZiBQcm9qZWN0cyB0aGF0IGNvbnNpc3Qgb2YgTmV3IFN0dWRlbnQgQWRtaXNzaW9ucyBBcHBsaWNhaXRvbmAsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJDLVNtYXJ0XCIsIFxyXG4gICAgdHlwZTogXCJXZWIgQXBwbGljYXRpb25cIixcclxuICAgIHRodW1ibmFpbDogJy9zdGF0aWMvY3NtYXJ0LmpwZycsXHJcbiAgICBzY29wZTogW1xyXG4gICAgICAnVUkvVVgnLFxyXG4gICAgICAnV2ViIERldmVsb3BtZW50JyxcclxuICAgIF0sXHJcbiAgICB0YWdzOiBbMl0sXHJcbiAgICBkZXNjcmlwdGlvbjogYENTTUFSVCBpcyBhIHdlYiBhcHBsaWNhdGlvbiB0aGF0IGZ1bmN0aW9ucyBhcyBhIFN3aWZ0IE1lc3NhZ2UgSW52ZXN0aWdhdGlvbiBUb29sLiBUaGUgbWFpbiBmdW5jdGlvbiBvZiB0aGUgYXBwbGljYXRpb24gaXMgdG8gaW52ZXN0aWdhdGUgcHJvYmxlbWF0aWMgU3dpZnQgTWVzc2FnZSBDYXNlIGFuZCByZXBhaXIgaXQgdGhyb3VnaCBhIHNwZWNpZmljIHNldCBvZiBwcm9jZXNzZXMgZGVwZW5kaW5nIG9uIHRoZSB0eXBlIG9mIGNhc2UgYW5kIHRoZSBwcm9ibGVtIGl0IGVuY291bnRlcnMuIENTTUFSVCBjb25zdW1lIFNwcmluZyBCb290IEFQSSBhcyB0aGUgbWFpbiBiYWNrZW5kIHN5c3RlbS5cclxuICAgIFxcbk9uIHRoZSBmcm9udC1lbmQgc2lkZSwgQ1NNQVJUIFV0aWxpemUgQW5ndWxhciA2IGFuZCBib290c3RyYXAgNCBDU1MgZnJhbWV3b3JrIGFzIHRoZSBtYWluIGZvdW5kYXRpb24uIFdpdGggYSBjb21iaW5hdGlvbiBvZiBSeEpTIGFuZCBhIG1vZHVsYXIgbmF0dXJlIG9mIEFuZ3VsYXIgNiwgbWFraW5nIHRoaXMgYXBwbGljYXRpb24gZXhjZWxzIGluIHRlcm0gb2Ygc3BlZWQgcGVyZm9ybWFuY2UsIGVmZmVjdGl2ZW5lc3MsIGFuZCBhY2Nlc3NpYmlsaXR5LlxyXG4gICAgYCxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIk1hcmtldHBsYWNlIEF1Y3Rpb24gUHJpY2VcIiwgXHJcbiAgICB0eXBlOiBcIldlYiBBcHBsaWNhdGlvblwiLFxyXG4gICAgdGh1bWJuYWlsOiAnL3N0YXRpYy9tYXAuanBnJyxcclxuICAgIHRhZ3M6IFsxLCAzXSxcclxuICAgIHNjb3BlOiBbXHJcbiAgICAgICdVSS9VWCcsXHJcbiAgICAgICdXZWIgRGV2ZWxvcG1lbnQnLFxyXG4gICAgXSxcclxuICAgIHNuYXBzaG90OiBbXHJcbiAgICAgICcvc3RhdGljL21hcDEuanBnJyxcclxuICAgICAgJy9zdGF0aWMvbWFwMi5qcGcnXHJcbiAgICBdLFxyXG4gICAgZGVzY3JpcHRpb246IGBNYXJrZXQgQXVjdGlvbiBQcmljZSBpcyBhIHNlcnZpY2UgZnJvbSBJQklELCB0aGUgbGFyZ2VzdCBhdXRvbW90aXZlIGF1Y3Rpb24gY2VudGVyIGluIEluZG9uZXNpYSwgd2hpY2ggcHJlc2VudHMgdGhlIG1hcmtldCBwcmljZSBzdGF0aXN0aWNzIG9mIGF1Y3Rpb24gY2FycyBpbiB2YXJpb3VzIGdyYXBoaWMgZm9ybWF0cyBhbmQgZGV0YWlscyBhY2NvcmRpbmcgdG8gdXNlciBuZWVkcy4gTUFQIGlzIGludGVncmF0ZWQgd2l0aCBBQ1YgKEFzdHJhIENhciBWYWx1YXRpb24pIGFzIGEgcmVsaWFibGUgYW5kIGNvbXByZWhlbnNpdmUgc3RhbmRhcmQgZm9yIGNhciB2YWx1YXRpb24gc28gdGhhdCB0aGUgYW5hbHlzaXMgYW5kIHByaWNlIHRyZW5kcyBwcmVzZW50ZWQgYXJlIG1vcmUgcHJlY2lzZSBhbmQgYWNjdXJhdGUuXHJcbiAgICBcXG5NQVAgaGVscGVkIHRoZSBkZWNpc2lvbiB0byBidXkgYSBkcmVhbSBjYXIgd2l0aCBhIHNlbnNlIG9mIGNvbWZvcnQgd2l0aGluIHRoZSBidWRnZXQuIEtub3cgdGhlIG1hcmtldCBwcmljZSBvZiB0aGUgY2FyIHRvIGJlIHB1cmNoYXNlZCBpbiBkZXRhaWwgYWNjb3JkaW5nIHRvIHRoZSBjb25kaXRpb25zLCBsb2NhdGlvbiBhbmQgd2l0aGluIGEgY2VydGFpbiB0aW1lIHNvIHRoYXQgaXQgY2FuIGtub3cgdGhlIHByaWNlIHRyZW5kLlxyXG4gICAgYCxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlRyYXZcIiwgXHJcbiAgICB0eXBlOiBcIk1vYmlsZSBEZXNpZ25cIixcclxuICAgIHRodW1ibmFpbDogJy9zdGF0aWMvdHJhdjIuanBnJyxcclxuICAgIHRhZ3M6IFszXSxcclxuICAgIGRlc2NyaXB0aW9uOiAnV2XigJlyZSBub3Qgc2VsbGluZyDigJxiaWcgYWdlbmN5IHNlcnZpY2VzIGF0IHNtYWxsIGFnZW5jeSBwcmljZXPigJ0uIFdlIGRlbGl2ZXIgZXhjZXB0aW9uYWwgZGVzaWduIHNvbHV0aW9ucyB0byBjb21wbGV4IGJ1c2luZXNzIHByb2JsZW1zIOKAkyBleHRyZW1lbHkgZWZmaWNpZW50bHkgYW5kIGRlbGl2ZXJlZCBhdCBsaWdodG5pbmctZmFzdCBwYWNlLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJWb2xpbW9uZCBMYWJcIiwgXHJcbiAgICB0eXBlOiBcIldlYnNpdGVcIixcclxuICAgIHRodW1ibmFpbDogJy9zdGF0aWMvdm1kbGFiMS5qcGcnLFxyXG4gICAgdGFnczogWzNdLFxyXG4gICAgc25hcHNob3Q6IFtcclxuICAgICAgJy9zdGF0aWMvdm1kbGFiMi5qcGcnLFxyXG4gICAgXSxcclxuICAgIGRlc2NyaXB0aW9uOiAnV2XigJlyZSBub3Qgc2VsbGluZyDigJxiaWcgYWdlbmN5IHNlcnZpY2VzIGF0IHNtYWxsIGFnZW5jeSBwcmljZXPigJ0uIFdlIGRlbGl2ZXIgZXhjZXB0aW9uYWwgZGVzaWduIHNvbHV0aW9ucyB0byBjb21wbGV4IGJ1c2luZXNzIHByb2JsZW1zIOKAkyBleHRyZW1lbHkgZWZmaWNpZW50bHkgYW5kIGRlbGl2ZXJlZCBhdCBsaWdodG5pbmctZmFzdCBwYWNlLicsXHJcbiAgfSxcclxuXTtcclxuZXhwb3J0IGNvbnN0IHRhZ0xpc3QgPSBbJ0FsbCBUYWdzJywgJ1JlYWN0IEpTJywgJ0FuZ3VsYXInLCAnVUkvVVgnLCAnTm9kZSBKUycsICAnRXhwcmVzc0pTJ107XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0cygpIHtcclxuICBjb25zdCBbYWN0aXZlVGFncywgc2V0QWN0aXZlVGFnc10gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IGFjdGl2ZVByb2plY3RzID0gYWN0aXZlVGFncyA/IHByb2plY3RzLm1hcChlID0+ICh7XHJcbiAgICAuLi5lLFxyXG4gICAgaXNIaWRkZW46ICFlLnRhZ3MuaW5jbHVkZXMoYWN0aXZlVGFncylcclxuICB9KSkgOiBwcm9qZWN0cztcclxuICBjb25zdCBhY3RpdmVQcm9qZWN0c0xlbmd0aCA9IGFjdGl2ZVByb2plY3RzLmZpbHRlcihlID0+ICFlLmlzSGlkZGVuKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uIHBhZGRlZCBmdWxsLWhlaWdodFwiIHN0eWxlPXt7cGFkZGluZ1RvcDogJzgwcHgnfX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpbkJvdHRvbTogJzJlbSd9fT5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPlRoaXMgaXMgd2hhdCBpJ3ZlIHdvcmtlZCBvbjwvaDI+XHJcbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5JJ20gYSBwcm9mZXNzaW9uYWwgV2ViIERldmVsb3Blci48L2g0PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luQm90dG9tOiAnNGVtJ319PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzXCI+XHJcbiAgICAgICAgICAgIHt0YWdMaXN0Lm1hcCgodGFnLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3Qga2V5ID0gaSA9PT0gMCA/ICcnIDogaTtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHthY3RpdmVUYWdzID09PSBrZXkgPyAnYWN0aXZlJyA6ICcnfWB9IGtleT17YHRhZ0l0ZW0ke2l9YH0gb25DbGljaz17XyA9PiB7c2V0QWN0aXZlVGFncyhrZXkpfX0+XHJcbiAgICAgICAgICAgICAgICAgIHt0YWd9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzXCI+XHJcbiAgICAgICAgICAgIHthY3RpdmVQcm9qZWN0cy5tYXAoKHByb2plY3QsIHByb2plY3RJZCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvamVjdHMvJHtwcm9qZWN0SWR9YH0ga2V5PXtgcHJvamVjdEl0ZW0ke3Byb2plY3RJZH1gfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcHJvamVjdCAke3Byb2plY3QuaXNIaWRkZW4gPyAnaGlkZGVuJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgICAgICA8TXlQcm9qZWN0IHsuLi5wcm9qZWN0fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Buby1kYXRhICR7YWN0aXZlUHJvamVjdHNMZW5ndGgubGVuZ3RoID4gMCA/ICdoaWRkZW4nIDogJyd9YH0+XHJcbiAgICAgICAgICAgIEknbSBzdGlsbCB3b3JraW5nIG9uIGl0XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IE15UHJvamVjdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHt0aXRsZSA9ICcnLCB0eXBlID0gJycsIHRhZ3MgPSBbXSwgdGh1bWJuYWlsfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtcGljdHVyZVwiPlxyXG4gICAgICAgIHsvKiB7dGh1bWJuYWlsICYmIDxpbWcgc3JjPXtyZXF1aXJlKCcvc3RhdGljL2xveW9sYS5qcGcnKX0gYWx0PVwicHJvamVjdC10aHVtYm5haWxcIiAvPn0gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtZGVzY1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC10aXRsZVwiPnt0aXRsZX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtdHlwZVwiPnt0eXBlfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC10YWdzXCI+e3RhZ3MubWFwKCh0YWcsIGkpID0+IChcclxuICAgICAgICAgIDxzcGFuIGtleT17YHByb2plY3RJdGVtJHtpfWB9Pnt0YWdMaXN0W3RhZ119PC9zcGFuPlxyXG4gICAgICAgICkpfTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=