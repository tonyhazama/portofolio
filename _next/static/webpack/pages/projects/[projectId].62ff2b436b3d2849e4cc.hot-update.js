self["webpackHotUpdate_N_E"]("pages/projects/[projectId]",{

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

/**
 * @author Tony Hazama
 * @email tonyhazama4721@gmail.com
 * @create date 2021-05-22 02:01:51
 * @modify date 2021-05-22 02:01:51
 * @desc This is my personal website
 */


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
  snapshot: ['/static/trav1.jpg', '/static/trav2.jpg'],
  tags: [3],
  description: 'We’re not selling “big agency services at small agency prices”. We deliver exceptional design solutions to complex business problems – extremely efficiently and delivered at lightning-fast pace.'
}, {
  title: "Volimond Lab",
  type: "Website",
  thumbnail: '/static/vmdlab1.jpg',
  tags: [3],
  snapshot: ['/static/vmdlab2.jpg', '/static/vmdlab2.jpg', '/static/vmdlab2.jpg', '/static/vmdlab2.jpg'],
  description: "VMDLAB (pronounced V.M.D Lab) is a Modern and Simplistic HTML5 Based Web template. Carefully constructed using latest trends in technology to make it look professional and classy but also user friendly. Suitable for every use case, starting from personal web, company profile, landing page, product description and other cool things.\n    \nThis is my personal project and also a project that i work on, to complete assignment in one of my class back at Vocational School."
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
          lineNumber: 94,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
          className: "subtitle",
          children: "I'm a professional Web Developer."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
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
              lineNumber: 103,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
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
                  lineNumber: 116,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 17
              }, _this)
            }, "projectItem".concat(projectId), false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "no-data ".concat(activeProjectsLength.length > 0 ? 'hidden' : ''),
          children: "I'm still working on it"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 91,
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
      className: "project-picture",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: thumbnail
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 7
      }, _this2)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "project-desc",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "project-title",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "project-type",
        children: type
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "project-tags",
        children: tags.map(function (tag, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: tagList[tag]
          }, "projectItem".concat(i), false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 11
          }, _this2);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, _this2)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 137,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0cy5qcyJdLCJuYW1lcyI6WyJwcm9qZWN0cyIsInRpdGxlIiwidHlwZSIsInRodW1ibmFpbCIsInNjb3BlIiwidGFncyIsImRlc2NyaXB0aW9uIiwic25hcHNob3QiLCJ0YWdMaXN0IiwiUHJvamVjdHMiLCJ1c2VTdGF0ZSIsImFjdGl2ZVRhZ3MiLCJzZXRBY3RpdmVUYWdzIiwiYWN0aXZlUHJvamVjdHMiLCJtYXAiLCJlIiwiaXNIaWRkZW4iLCJpbmNsdWRlcyIsImFjdGl2ZVByb2plY3RzTGVuZ3RoIiwiZmlsdGVyIiwicGFkZGluZ1RvcCIsInRleHRBbGlnbiIsIm1hcmdpbkJvdHRvbSIsInRhZyIsImkiLCJrZXkiLCJfIiwicHJvamVjdCIsInByb2plY3RJZCIsImxlbmd0aCIsIk15UHJvamVjdCIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUM7QUFDRDtBQUVPLElBQU1BLFFBQVEsR0FBRyxDQUN0QjtBQUNFQyxPQUFLLEVBQUUsZUFEVDtBQUVFQyxNQUFJLEVBQUUsaUJBRlI7QUFHRUMsV0FBUyxFQUFFLG9CQUhiO0FBSUVDLE9BQUssRUFBRSxDQUNMLE9BREssRUFFTCxpQkFGSyxDQUpUO0FBUUVDLE1BQUksRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBUlI7QUFTRUMsYUFBVztBQVRiLENBRHNCLEVBWXRCO0FBQ0VMLE9BQUssRUFBRSxTQURUO0FBRUVDLE1BQUksRUFBRSxpQkFGUjtBQUdFQyxXQUFTLEVBQUUsb0JBSGI7QUFJRUMsT0FBSyxFQUFFLENBQ0wsT0FESyxFQUVMLGlCQUZLLENBSlQ7QUFRRUMsTUFBSSxFQUFFLENBQUMsQ0FBRCxDQVJSO0FBU0VDLGFBQVc7QUFUYixDQVpzQixFQXlCdEI7QUFDRUwsT0FBSyxFQUFFLDJCQURUO0FBRUVDLE1B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O0FBQUEsTUFDR0EsSUFESCw0QkFDVSxFQURWO0FBQUEsTUFDY0YsU0FEZCxHQUMyQjRCLEtBRDNCLENBQ2M1QixTQURkO0FBRTNCLHNCQUNFO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBQSw2QkFDQTtBQUFLLFdBQUcsRUFBRUE7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUU7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsa0JBQWdDRjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQSxrQkFBK0JDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUFBLGtCQUErQkcsSUFBSSxDQUFDUyxHQUFMLENBQVMsVUFBQ1MsR0FBRCxFQUFNQyxDQUFOO0FBQUEsOEJBQ3RDO0FBQUEsc0JBQStCaEIsT0FBTyxDQUFDZSxHQUFEO0FBQXRDLGtDQUF5QkMsQ0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEc0M7QUFBQSxTQUFUO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQSxrQkFERjtBQWNELENBaEJEOztNQUFNTSxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzL1twcm9qZWN0SWRdLjYyZmYyYjQzNmIzZDI4NDllNGNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGF1dGhvciBUb255IEhhemFtYVxyXG4gKiBAZW1haWwgdG9ueWhhemFtYTQ3MjFAZ21haWwuY29tXHJcbiAqIEBjcmVhdGUgZGF0ZSAyMDIxLTA1LTIyIDAyOjAxOjUxXHJcbiAqIEBtb2RpZnkgZGF0ZSAyMDIxLTA1LTIyIDAyOjAxOjUxXHJcbiAqIEBkZXNjIFRoaXMgaXMgbXkgcGVyc29uYWwgd2Vic2l0ZVxyXG4gKi9cclxuXHJcbiBpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIktvbGVzZSBMb3lvbGFcIiwgXHJcbiAgICB0eXBlOiBcIldlYiBBcHBsaWNhdGlvblwiLFxyXG4gICAgdGh1bWJuYWlsOiAnL3N0YXRpYy9sb3lvbGEuanBnJyxcclxuICAgIHNjb3BlOiBbXHJcbiAgICAgICdVSS9VWCcsXHJcbiAgICAgICdXZWIgRGV2ZWxvcG1lbnQnLFxyXG4gICAgXSxcclxuICAgIHRhZ3M6IFsxLCAzXSxcclxuICAgIGRlc2NyaXB0aW9uOiBgS29sZXNlIExveW9sYSBpcyBhIGdyb3VwIG9mIFByb2plY3RzIHRoYXQgY29uc2lzdCBvZiBOZXcgU3R1ZGVudCBBZG1pc3Npb25zIEFwcGxpY2FpdG9uYCxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkMtU21hcnRcIiwgXHJcbiAgICB0eXBlOiBcIldlYiBBcHBsaWNhdGlvblwiLFxyXG4gICAgdGh1bWJuYWlsOiAnL3N0YXRpYy9jc21hcnQuanBnJyxcclxuICAgIHNjb3BlOiBbXHJcbiAgICAgICdVSS9VWCcsXHJcbiAgICAgICdXZWIgRGV2ZWxvcG1lbnQnLFxyXG4gICAgXSxcclxuICAgIHRhZ3M6IFsyXSxcclxuICAgIGRlc2NyaXB0aW9uOiBgQ1NNQVJUIGlzIGEgd2ViIGFwcGxpY2F0aW9uIHRoYXQgZnVuY3Rpb25zIGFzIGEgU3dpZnQgTWVzc2FnZSBJbnZlc3RpZ2F0aW9uIFRvb2wuIFRoZSBtYWluIGZ1bmN0aW9uIG9mIHRoZSBhcHBsaWNhdGlvbiBpcyB0byBpbnZlc3RpZ2F0ZSBwcm9ibGVtYXRpYyBTd2lmdCBNZXNzYWdlIENhc2UgYW5kIHJlcGFpciBpdCB0aHJvdWdoIGEgc3BlY2lmaWMgc2V0IG9mIHByb2Nlc3NlcyBkZXBlbmRpbmcgb24gdGhlIHR5cGUgb2YgY2FzZSBhbmQgdGhlIHByb2JsZW0gaXQgZW5jb3VudGVycy4gQ1NNQVJUIGNvbnN1bWUgU3ByaW5nIEJvb3QgQVBJIGFzIHRoZSBtYWluIGJhY2tlbmQgc3lzdGVtLlxyXG4gICAgXFxuT24gdGhlIGZyb250LWVuZCBzaWRlLCBDU01BUlQgVXRpbGl6ZSBBbmd1bGFyIDYgYW5kIGJvb3RzdHJhcCA0IENTUyBmcmFtZXdvcmsgYXMgdGhlIG1haW4gZm91bmRhdGlvbi4gV2l0aCBhIGNvbWJpbmF0aW9uIG9mIFJ4SlMgYW5kIGEgbW9kdWxhciBuYXR1cmUgb2YgQW5ndWxhciA2LCBtYWtpbmcgdGhpcyBhcHBsaWNhdGlvbiBleGNlbHMgaW4gdGVybSBvZiBzcGVlZCBwZXJmb3JtYW5jZSwgZWZmZWN0aXZlbmVzcywgYW5kIGFjY2Vzc2liaWxpdHkuXHJcbiAgICBgLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiTWFya2V0cGxhY2UgQXVjdGlvbiBQcmljZVwiLCBcclxuICAgIHR5cGU6IFwiV2ViIEFwcGxpY2F0aW9uXCIsXHJcbiAgICB0aHVtYm5haWw6ICcvc3RhdGljL21hcC5qcGcnLFxyXG4gICAgdGFnczogWzEsIDNdLFxyXG4gICAgc2NvcGU6IFtcclxuICAgICAgJ1VJL1VYJyxcclxuICAgICAgJ1dlYiBEZXZlbG9wbWVudCcsXHJcbiAgICBdLFxyXG4gICAgc25hcHNob3Q6IFtcclxuICAgICAgJy9zdGF0aWMvbWFwMS5qcGcnLFxyXG4gICAgICAnL3N0YXRpYy9tYXAyLmpwZydcclxuICAgIF0sXHJcbiAgICBkZXNjcmlwdGlvbjogYE1hcmtldCBBdWN0aW9uIFByaWNlIGlzIGEgc2VydmljZSBmcm9tIElCSUQsIHRoZSBsYXJnZXN0IGF1dG9tb3RpdmUgYXVjdGlvbiBjZW50ZXIgaW4gSW5kb25lc2lhLCB3aGljaCBwcmVzZW50cyB0aGUgbWFya2V0IHByaWNlIHN0YXRpc3RpY3Mgb2YgYXVjdGlvbiBjYXJzIGluIHZhcmlvdXMgZ3JhcGhpYyBmb3JtYXRzIGFuZCBkZXRhaWxzIGFjY29yZGluZyB0byB1c2VyIG5lZWRzLiBNQVAgaXMgaW50ZWdyYXRlZCB3aXRoIEFDViAoQXN0cmEgQ2FyIFZhbHVhdGlvbikgYXMgYSByZWxpYWJsZSBhbmQgY29tcHJlaGVuc2l2ZSBzdGFuZGFyZCBmb3IgY2FyIHZhbHVhdGlvbiBzbyB0aGF0IHRoZSBhbmFseXNpcyBhbmQgcHJpY2UgdHJlbmRzIHByZXNlbnRlZCBhcmUgbW9yZSBwcmVjaXNlIGFuZCBhY2N1cmF0ZS5cclxuICAgIFxcbk1BUCBoZWxwZWQgdGhlIGRlY2lzaW9uIHRvIGJ1eSBhIGRyZWFtIGNhciB3aXRoIGEgc2Vuc2Ugb2YgY29tZm9ydCB3aXRoaW4gdGhlIGJ1ZGdldC4gS25vdyB0aGUgbWFya2V0IHByaWNlIG9mIHRoZSBjYXIgdG8gYmUgcHVyY2hhc2VkIGluIGRldGFpbCBhY2NvcmRpbmcgdG8gdGhlIGNvbmRpdGlvbnMsIGxvY2F0aW9uIGFuZCB3aXRoaW4gYSBjZXJ0YWluIHRpbWUgc28gdGhhdCBpdCBjYW4ga25vdyB0aGUgcHJpY2UgdHJlbmQuXHJcbiAgICBgLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiVHJhdlwiLCBcclxuICAgIHR5cGU6IFwiTW9iaWxlIERlc2lnblwiLFxyXG4gICAgdGh1bWJuYWlsOiAnL3N0YXRpYy90cmF2Mi5qcGcnLFxyXG4gICAgc25hcHNob3Q6IFtcclxuICAgICAgJy9zdGF0aWMvdHJhdjEuanBnJyxcclxuICAgICAgJy9zdGF0aWMvdHJhdjIuanBnJyxcclxuICAgIF0sXHJcbiAgICB0YWdzOiBbM10sXHJcbiAgICBkZXNjcmlwdGlvbjogJ1dl4oCZcmUgbm90IHNlbGxpbmcg4oCcYmlnIGFnZW5jeSBzZXJ2aWNlcyBhdCBzbWFsbCBhZ2VuY3kgcHJpY2Vz4oCdLiBXZSBkZWxpdmVyIGV4Y2VwdGlvbmFsIGRlc2lnbiBzb2x1dGlvbnMgdG8gY29tcGxleCBidXNpbmVzcyBwcm9ibGVtcyDigJMgZXh0cmVtZWx5IGVmZmljaWVudGx5IGFuZCBkZWxpdmVyZWQgYXQgbGlnaHRuaW5nLWZhc3QgcGFjZS4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiVm9saW1vbmQgTGFiXCIsIFxyXG4gICAgdHlwZTogXCJXZWJzaXRlXCIsXHJcbiAgICB0aHVtYm5haWw6ICcvc3RhdGljL3ZtZGxhYjEuanBnJyxcclxuICAgIHRhZ3M6IFszXSxcclxuICAgIHNuYXBzaG90OiBbXHJcbiAgICAgICcvc3RhdGljL3ZtZGxhYjIuanBnJyxcclxuICAgICAgJy9zdGF0aWMvdm1kbGFiMi5qcGcnLFxyXG4gICAgICAnL3N0YXRpYy92bWRsYWIyLmpwZycsXHJcbiAgICAgICcvc3RhdGljL3ZtZGxhYjIuanBnJyxcclxuICAgIF0sXHJcbiAgICBkZXNjcmlwdGlvbjogYFZNRExBQiAocHJvbm91bmNlZCBWLk0uRCBMYWIpIGlzIGEgTW9kZXJuIGFuZCBTaW1wbGlzdGljIEhUTUw1IEJhc2VkIFdlYiB0ZW1wbGF0ZS4gQ2FyZWZ1bGx5IGNvbnN0cnVjdGVkIHVzaW5nIGxhdGVzdCB0cmVuZHMgaW4gdGVjaG5vbG9neSB0byBtYWtlIGl0IGxvb2sgcHJvZmVzc2lvbmFsIGFuZCBjbGFzc3kgYnV0IGFsc28gdXNlciBmcmllbmRseS4gU3VpdGFibGUgZm9yIGV2ZXJ5IHVzZSBjYXNlLCBzdGFydGluZyBmcm9tIHBlcnNvbmFsIHdlYiwgY29tcGFueSBwcm9maWxlLCBsYW5kaW5nIHBhZ2UsIHByb2R1Y3QgZGVzY3JpcHRpb24gYW5kIG90aGVyIGNvb2wgdGhpbmdzLlxyXG4gICAgXFxuVGhpcyBpcyBteSBwZXJzb25hbCBwcm9qZWN0IGFuZCBhbHNvIGEgcHJvamVjdCB0aGF0IGkgd29yayBvbiwgdG8gY29tcGxldGUgYXNzaWdubWVudCBpbiBvbmUgb2YgbXkgY2xhc3MgYmFjayBhdCBWb2NhdGlvbmFsIFNjaG9vbC5gLFxyXG4gIH0sXHJcbl07XHJcbmV4cG9ydCBjb25zdCB0YWdMaXN0ID0gWydBbGwgVGFncycsICdSZWFjdCBKUycsICdBbmd1bGFyJywgJ1VJL1VYJywgJ05vZGUgSlMnLCAgJ0V4cHJlc3NKUyddO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdHMoKSB7XHJcbiAgY29uc3QgW2FjdGl2ZVRhZ3MsIHNldEFjdGl2ZVRhZ3NdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBhY3RpdmVQcm9qZWN0cyA9IGFjdGl2ZVRhZ3MgPyBwcm9qZWN0cy5tYXAoZSA9PiAoe1xyXG4gICAgLi4uZSxcclxuICAgIGlzSGlkZGVuOiAhZS50YWdzLmluY2x1ZGVzKGFjdGl2ZVRhZ3MpXHJcbiAgfSkpIDogcHJvamVjdHM7XHJcbiAgY29uc3QgYWN0aXZlUHJvamVjdHNMZW5ndGggPSBhY3RpdmVQcm9qZWN0cy5maWx0ZXIoZSA9PiAhZS5pc0hpZGRlbik7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbiBwYWRkZWQgZnVsbC1oZWlnaHRcIiBzdHlsZT17e3BhZGRpbmdUb3A6ICc4MHB4J319PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206ICcyZW0nfX0+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj5UaGlzIGlzIHdoYXQgaSd2ZSB3b3JrZWQgb248L2gyPlxyXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+SSdtIGEgcHJvZmVzc2lvbmFsIFdlYiBEZXZlbG9wZXIuPC9oND5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpbkJvdHRvbTogJzRlbSd9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnc1wiPlxyXG4gICAgICAgICAgICB7dGFnTGlzdC5tYXAoKHRhZywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGtleSA9IGkgPT09IDAgPyAnJyA6IGk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7YWN0aXZlVGFncyA9PT0ga2V5ID8gJ2FjdGl2ZScgOiAnJ31gfSBrZXk9e2B0YWdJdGVtJHtpfWB9IG9uQ2xpY2s9e18gPT4ge3NldEFjdGl2ZVRhZ3Moa2V5KX19PlxyXG4gICAgICAgICAgICAgICAgICB7dGFnfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0c1wiPlxyXG4gICAgICAgICAgICB7YWN0aXZlUHJvamVjdHMubWFwKChwcm9qZWN0LCBwcm9qZWN0SWQpID0+IChcclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2plY3RzLyR7cHJvamVjdElkfWB9IGtleT17YHByb2plY3RJdGVtJHtwcm9qZWN0SWR9YH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHByb2plY3QgJHtwcm9qZWN0LmlzSGlkZGVuID8gJ2hpZGRlbicgOiAnJ31gfT5cclxuICAgICAgICAgICAgICAgICAgPE15UHJvamVjdCB7Li4ucHJvamVjdH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbm8tZGF0YSAke2FjdGl2ZVByb2plY3RzTGVuZ3RoLmxlbmd0aCA+IDAgPyAnaGlkZGVuJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICBJJ20gc3RpbGwgd29ya2luZyBvbiBpdFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBNeVByb2plY3QgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7dGl0bGUgPSAnJywgdHlwZSA9ICcnLCB0YWdzID0gW10sIHRodW1ibmFpbH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LXBpY3R1cmVcIj5cclxuICAgICAgPGltZyBzcmM9e3RodW1ibmFpbH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1kZXNjXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LXRpdGxlXCI+e3RpdGxlfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC10eXBlXCI+e3R5cGV9PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LXRhZ3NcIj57dGFncy5tYXAoKHRhZywgaSkgPT4gKFxyXG4gICAgICAgICAgPHNwYW4ga2V5PXtgcHJvamVjdEl0ZW0ke2l9YH0+e3RhZ0xpc3RbdGFnXX08L3NwYW4+XHJcbiAgICAgICAgKSl9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==