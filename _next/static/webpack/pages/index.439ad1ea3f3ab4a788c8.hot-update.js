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
  thumbnail: '/static/trav1.jpg',
  scope: ['UI/UX'],
  snapshot: ['/static/trav2.jpg'],
  tags: [3],
  description: "Trav is an Mobile app that focus on helping you planned out your next holiday trip. Trav will help you find the great spot for you to spend your time. A place to eat, place to stay, family destination, romantic place, adventure time, or maybe a beautiful place to take a photos? we got you covered. \n    \nA Clean design and responsive interaction, will help you plan the perfect trip you've been dreaming of. Combine that with over 500.000 Destination all around the globe, this app eliminate the needs to check each destination one by one, making it easier to make a perfect travel in a short time."
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
          lineNumber: 97,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
          className: "subtitle",
          children: "I'm a professional Web Developer."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
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
              lineNumber: 106,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
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
                  lineNumber: 119,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 17
              }, _this)
            }, "projectItem".concat(projectId), false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "no-data ".concat(activeProjectsLength.length > 0 ? 'hidden' : ''),
          children: "I'm still working on it"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 94,
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
        lineNumber: 138,
        columnNumber: 7
      }, _this2)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "project-desc",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "project-title",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "project-type",
        children: type
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "project-tags",
        children: tags.map(function (tag, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: tagList[tag]
          }, "projectItem".concat(i), false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 11
          }, _this2);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, _this2)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 140,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0cy5qcyJdLCJuYW1lcyI6WyJwcm9qZWN0cyIsInRpdGxlIiwidHlwZSIsInRodW1ibmFpbCIsInNjb3BlIiwidGFncyIsImRlc2NyaXB0aW9uIiwic25hcHNob3QiLCJ0YWdMaXN0IiwiUHJvamVjdHMiLCJ1c2VTdGF0ZSIsImFjdGl2ZVRhZ3MiLCJzZXRBY3RpdmVUYWdzIiwiYWN0aXZlUHJvamVjdHMiLCJtYXAiLCJlIiwiaXNIaWRkZW4iLCJpbmNsdWRlcyIsImFjdGl2ZVByb2plY3RzTGVuZ3RoIiwiZmlsdGVyIiwicGFkZGluZ1RvcCIsInRleHRBbGlnbiIsIm1hcmdpbkJvdHRvbSIsInRhZyIsImkiLCJrZXkiLCJfIiwicHJvamVjdCIsInByb2plY3RJZCIsImxlbmd0aCIsIk15UHJvamVjdCIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUM7QUFDRDtBQUVPLElBQU1BLFFBQVEsR0FBRyxDQUN0QjtBQUNFQyxPQUFLLEVBQUUsZUFEVDtBQUVFQyxNQUFJLEVBQUUsaUJBRlI7QUFHRUMsV0FBUyxFQUFFLG9CQUhiO0FBSUVDLE9BQUssRUFBRSxDQUNMLE9BREssRUFFTCxpQkFGSyxDQUpUO0FBUUVDLE1BQUksRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBUlI7QUFTRUMsYUFBVztBQVRiLENBRHNCLEVBWXRCO0FBQ0VMLE9BQUssRUFBRSxTQURUO0FBRUVDLE1BQUksRUFBRSxpQkFGUjtBQUdFQyxXQUFTLEVBQUUsb0JBSGI7QUFJRUMsT0FBSyxFQUFFLENBQ0wsT0FESyxFQUVMLGlCQUZLLENBSlQ7QUFRRUMsTUFBSSxFQUFFLENBQUMsQ0FBRCxDQVJSO0FBU0VDLGFBQVc7QUFUYixDQVpzQixFQXlCdEI7QUFDRUwsT0FBSyxFQUFFLDJCQURUO0FBRUVDLE1B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RDNCLENBQ0cxQixJQURIO0FBQUEsTUFDR0EsSUFESCw0QkFDVSxFQURWO0FBQUEsTUFDY0YsU0FEZCxHQUMyQjRCLEtBRDNCLENBQ2M1QixTQURkO0FBRTNCLHNCQUNFO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBQSw2QkFDQTtBQUFLLFdBQUcsRUFBRUE7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUU7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsa0JBQWdDRjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQSxrQkFBK0JDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUFBLGtCQUErQkcsSUFBSSxDQUFDUyxHQUFMLENBQVMsVUFBQ1MsR0FBRCxFQUFNQyxDQUFOO0FBQUEsOEJBQ3RDO0FBQUEsc0JBQStCaEIsT0FBTyxDQUFDZSxHQUFEO0FBQXRDLGtDQUF5QkMsQ0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEc0M7QUFBQSxTQUFUO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQSxrQkFERjtBQWNELENBaEJEOztNQUFNTSxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQzOWFkMWVhM2YzYWI0YTc4OGM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGF1dGhvciBUb255IEhhemFtYVxyXG4gKiBAZW1haWwgdG9ueWhhemFtYTQ3MjFAZ21haWwuY29tXHJcbiAqIEBjcmVhdGUgZGF0ZSAyMDIxLTA1LTIyIDAyOjAxOjUxXHJcbiAqIEBtb2RpZnkgZGF0ZSAyMDIxLTA1LTIyIDAyOjAxOjUxXHJcbiAqIEBkZXNjIFRoaXMgaXMgbXkgcGVyc29uYWwgd2Vic2l0ZVxyXG4gKi9cclxuXHJcbiBpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIktvbGVzZSBMb3lvbGFcIiwgXHJcbiAgICB0eXBlOiBcIldlYiBBcHBsaWNhdGlvblwiLFxyXG4gICAgdGh1bWJuYWlsOiAnL3N0YXRpYy9sb3lvbGEuanBnJyxcclxuICAgIHNjb3BlOiBbXHJcbiAgICAgICdVSS9VWCcsXHJcbiAgICAgICdXZWIgRGV2ZWxvcG1lbnQnLFxyXG4gICAgXSxcclxuICAgIHRhZ3M6IFsxLCAzXSxcclxuICAgIGRlc2NyaXB0aW9uOiBgS29sZXNlIExveW9sYSBpcyBhIGdyb3VwIG9mIFByb2plY3RzIHRoYXQgY29uc2lzdCBvZiBOZXcgU3R1ZGVudCBBZG1pc3Npb25zIEFwcGxpY2FpdG9uYCxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkMtU21hcnRcIiwgXHJcbiAgICB0eXBlOiBcIldlYiBBcHBsaWNhdGlvblwiLFxyXG4gICAgdGh1bWJuYWlsOiAnL3N0YXRpYy9jc21hcnQuanBnJyxcclxuICAgIHNjb3BlOiBbXHJcbiAgICAgICdVSS9VWCcsXHJcbiAgICAgICdXZWIgRGV2ZWxvcG1lbnQnLFxyXG4gICAgXSxcclxuICAgIHRhZ3M6IFsyXSxcclxuICAgIGRlc2NyaXB0aW9uOiBgQ1NNQVJUIGlzIGEgd2ViIGFwcGxpY2F0aW9uIHRoYXQgZnVuY3Rpb25zIGFzIGEgU3dpZnQgTWVzc2FnZSBJbnZlc3RpZ2F0aW9uIFRvb2wuIFRoZSBtYWluIGZ1bmN0aW9uIG9mIHRoZSBhcHBsaWNhdGlvbiBpcyB0byBpbnZlc3RpZ2F0ZSBwcm9ibGVtYXRpYyBTd2lmdCBNZXNzYWdlIENhc2UgYW5kIHJlcGFpciBpdCB0aHJvdWdoIGEgc3BlY2lmaWMgc2V0IG9mIHByb2Nlc3NlcyBkZXBlbmRpbmcgb24gdGhlIHR5cGUgb2YgY2FzZSBhbmQgdGhlIHByb2JsZW0gaXQgZW5jb3VudGVycy4gQ1NNQVJUIGNvbnN1bWUgU3ByaW5nIEJvb3QgQVBJIGFzIHRoZSBtYWluIGJhY2tlbmQgc3lzdGVtLlxyXG4gICAgXFxuT24gdGhlIGZyb250LWVuZCBzaWRlLCBDU01BUlQgVXRpbGl6ZSBBbmd1bGFyIDYgYW5kIGJvb3RzdHJhcCA0IENTUyBmcmFtZXdvcmsgYXMgdGhlIG1haW4gZm91bmRhdGlvbi4gV2l0aCBhIGNvbWJpbmF0aW9uIG9mIFJ4SlMgYW5kIGEgbW9kdWxhciBuYXR1cmUgb2YgQW5ndWxhciA2LCBtYWtpbmcgdGhpcyBhcHBsaWNhdGlvbiBleGNlbHMgaW4gdGVybSBvZiBzcGVlZCBwZXJmb3JtYW5jZSwgZWZmZWN0aXZlbmVzcywgYW5kIGFjY2Vzc2liaWxpdHkuXHJcbiAgICBgLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiTWFya2V0cGxhY2UgQXVjdGlvbiBQcmljZVwiLCBcclxuICAgIHR5cGU6IFwiV2ViIEFwcGxpY2F0aW9uXCIsXHJcbiAgICB0aHVtYm5haWw6ICcvc3RhdGljL21hcC5qcGcnLFxyXG4gICAgdGFnczogWzEsIDNdLFxyXG4gICAgc2NvcGU6IFtcclxuICAgICAgJ1VJL1VYJyxcclxuICAgICAgJ1dlYiBEZXZlbG9wbWVudCcsXHJcbiAgICBdLFxyXG4gICAgc25hcHNob3Q6IFtcclxuICAgICAgJy9zdGF0aWMvbWFwMS5qcGcnLFxyXG4gICAgICAnL3N0YXRpYy9tYXAyLmpwZydcclxuICAgIF0sXHJcbiAgICBkZXNjcmlwdGlvbjogYE1hcmtldCBBdWN0aW9uIFByaWNlIGlzIGEgc2VydmljZSBmcm9tIElCSUQsIHRoZSBsYXJnZXN0IGF1dG9tb3RpdmUgYXVjdGlvbiBjZW50ZXIgaW4gSW5kb25lc2lhLCB3aGljaCBwcmVzZW50cyB0aGUgbWFya2V0IHByaWNlIHN0YXRpc3RpY3Mgb2YgYXVjdGlvbiBjYXJzIGluIHZhcmlvdXMgZ3JhcGhpYyBmb3JtYXRzIGFuZCBkZXRhaWxzIGFjY29yZGluZyB0byB1c2VyIG5lZWRzLiBNQVAgaXMgaW50ZWdyYXRlZCB3aXRoIEFDViAoQXN0cmEgQ2FyIFZhbHVhdGlvbikgYXMgYSByZWxpYWJsZSBhbmQgY29tcHJlaGVuc2l2ZSBzdGFuZGFyZCBmb3IgY2FyIHZhbHVhdGlvbiBzbyB0aGF0IHRoZSBhbmFseXNpcyBhbmQgcHJpY2UgdHJlbmRzIHByZXNlbnRlZCBhcmUgbW9yZSBwcmVjaXNlIGFuZCBhY2N1cmF0ZS5cclxuICAgIFxcbk1BUCBoZWxwZWQgdGhlIGRlY2lzaW9uIHRvIGJ1eSBhIGRyZWFtIGNhciB3aXRoIGEgc2Vuc2Ugb2YgY29tZm9ydCB3aXRoaW4gdGhlIGJ1ZGdldC4gS25vdyB0aGUgbWFya2V0IHByaWNlIG9mIHRoZSBjYXIgdG8gYmUgcHVyY2hhc2VkIGluIGRldGFpbCBhY2NvcmRpbmcgdG8gdGhlIGNvbmRpdGlvbnMsIGxvY2F0aW9uIGFuZCB3aXRoaW4gYSBjZXJ0YWluIHRpbWUgc28gdGhhdCBpdCBjYW4ga25vdyB0aGUgcHJpY2UgdHJlbmQuXHJcbiAgICBgLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiVHJhdlwiLCBcclxuICAgIHR5cGU6IFwiTW9iaWxlIERlc2lnblwiLFxyXG4gICAgdGh1bWJuYWlsOiAnL3N0YXRpYy90cmF2MS5qcGcnLFxyXG4gICAgc2NvcGU6IFtcclxuICAgICAgJ1VJL1VYJyxcclxuICAgIF0sXHJcbiAgICBzbmFwc2hvdDogW1xyXG4gICAgICAnL3N0YXRpYy90cmF2Mi5qcGcnLFxyXG4gICAgXSxcclxuICAgIHRhZ3M6IFszXSxcclxuICAgIGRlc2NyaXB0aW9uOiBgVHJhdiBpcyBhbiBNb2JpbGUgYXBwIHRoYXQgZm9jdXMgb24gaGVscGluZyB5b3UgcGxhbm5lZCBvdXQgeW91ciBuZXh0IGhvbGlkYXkgdHJpcC4gVHJhdiB3aWxsIGhlbHAgeW91IGZpbmQgdGhlIGdyZWF0IHNwb3QgZm9yIHlvdSB0byBzcGVuZCB5b3VyIHRpbWUuIEEgcGxhY2UgdG8gZWF0LCBwbGFjZSB0byBzdGF5LCBmYW1pbHkgZGVzdGluYXRpb24sIHJvbWFudGljIHBsYWNlLCBhZHZlbnR1cmUgdGltZSwgb3IgbWF5YmUgYSBiZWF1dGlmdWwgcGxhY2UgdG8gdGFrZSBhIHBob3Rvcz8gd2UgZ290IHlvdSBjb3ZlcmVkLiBcclxuICAgIFxcbkEgQ2xlYW4gZGVzaWduIGFuZCByZXNwb25zaXZlIGludGVyYWN0aW9uLCB3aWxsIGhlbHAgeW91IHBsYW4gdGhlIHBlcmZlY3QgdHJpcCB5b3UndmUgYmVlbiBkcmVhbWluZyBvZi4gQ29tYmluZSB0aGF0IHdpdGggb3ZlciA1MDAuMDAwIERlc3RpbmF0aW9uIGFsbCBhcm91bmQgdGhlIGdsb2JlLCB0aGlzIGFwcCBlbGltaW5hdGUgdGhlIG5lZWRzIHRvIGNoZWNrIGVhY2ggZGVzdGluYXRpb24gb25lIGJ5IG9uZSwgbWFraW5nIGl0IGVhc2llciB0byBtYWtlIGEgcGVyZmVjdCB0cmF2ZWwgaW4gYSBzaG9ydCB0aW1lLmBcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlZvbGltb25kIExhYlwiLCBcclxuICAgIHR5cGU6IFwiV2Vic2l0ZVwiLFxyXG4gICAgdGh1bWJuYWlsOiAnL3N0YXRpYy92bWRsYWIxLmpwZycsXHJcbiAgICB0YWdzOiBbM10sXHJcbiAgICBzbmFwc2hvdDogW1xyXG4gICAgICAnL3N0YXRpYy92bWRsYWIyLmpwZycsXHJcbiAgICAgICcvc3RhdGljL3ZtZGxhYjIuanBnJyxcclxuICAgICAgJy9zdGF0aWMvdm1kbGFiMi5qcGcnLFxyXG4gICAgICAnL3N0YXRpYy92bWRsYWIyLmpwZycsXHJcbiAgICBdLFxyXG4gICAgZGVzY3JpcHRpb246IGBWTURMQUIgKHByb25vdW5jZWQgVi5NLkQgTGFiKSBpcyBhIE1vZGVybiBhbmQgU2ltcGxpc3RpYyBIVE1MNSBCYXNlZCBXZWIgdGVtcGxhdGUuIENhcmVmdWxseSBjb25zdHJ1Y3RlZCB1c2luZyBsYXRlc3QgdHJlbmRzIGluIHRlY2hub2xvZ3kgdG8gbWFrZSBpdCBsb29rIHByb2Zlc3Npb25hbCBhbmQgY2xhc3N5IGJ1dCBhbHNvIHVzZXIgZnJpZW5kbHkuIFN1aXRhYmxlIGZvciBldmVyeSB1c2UgY2FzZSwgc3RhcnRpbmcgZnJvbSBwZXJzb25hbCB3ZWIsIGNvbXBhbnkgcHJvZmlsZSwgbGFuZGluZyBwYWdlLCBwcm9kdWN0IGRlc2NyaXB0aW9uIGFuZCBvdGhlciBjb29sIHRoaW5ncy5cclxuICAgIFxcblRoaXMgaXMgbXkgcGVyc29uYWwgcHJvamVjdCBhbmQgYWxzbyBhIHByb2plY3QgdGhhdCBpIHdvcmsgb24sIHRvIGNvbXBsZXRlIGFzc2lnbm1lbnQgaW4gb25lIG9mIG15IGNsYXNzIGJhY2sgYXQgVm9jYXRpb25hbCBTY2hvb2wuYCxcclxuICB9LFxyXG5dO1xyXG5leHBvcnQgY29uc3QgdGFnTGlzdCA9IFsnQWxsIFRhZ3MnLCAnUmVhY3QgSlMnLCAnQW5ndWxhcicsICdVSS9VWCcsICdOb2RlIEpTJywgICdFeHByZXNzSlMnXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzKCkge1xyXG4gIGNvbnN0IFthY3RpdmVUYWdzLCBzZXRBY3RpdmVUYWdzXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgYWN0aXZlUHJvamVjdHMgPSBhY3RpdmVUYWdzID8gcHJvamVjdHMubWFwKGUgPT4gKHtcclxuICAgIC4uLmUsXHJcbiAgICBpc0hpZGRlbjogIWUudGFncy5pbmNsdWRlcyhhY3RpdmVUYWdzKVxyXG4gIH0pKSA6IHByb2plY3RzO1xyXG4gIGNvbnN0IGFjdGl2ZVByb2plY3RzTGVuZ3RoID0gYWN0aXZlUHJvamVjdHMuZmlsdGVyKGUgPT4gIWUuaXNIaWRkZW4pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gcGFkZGVkIGZ1bGwtaGVpZ2h0XCIgc3R5bGU9e3twYWRkaW5nVG9wOiAnODBweCd9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luQm90dG9tOiAnMmVtJ319PlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+VGhpcyBpcyB3aGF0IGkndmUgd29ya2VkIG9uPC9oMj5cclxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPkknbSBhIHByb2Zlc3Npb25hbCBXZWIgRGV2ZWxvcGVyLjwvaDQ+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206ICc0ZW0nfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3NcIj5cclxuICAgICAgICAgICAge3RhZ0xpc3QubWFwKCh0YWcsIGkpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBrZXkgPSBpID09PSAwID8gJycgOiBpO1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake2FjdGl2ZVRhZ3MgPT09IGtleSA/ICdhY3RpdmUnIDogJyd9YH0ga2V5PXtgdGFnSXRlbSR7aX1gfSBvbkNsaWNrPXtfID0+IHtzZXRBY3RpdmVUYWdzKGtleSl9fT5cclxuICAgICAgICAgICAgICAgICAge3RhZ31cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHNcIj5cclxuICAgICAgICAgICAge2FjdGl2ZVByb2plY3RzLm1hcCgocHJvamVjdCwgcHJvamVjdElkKSA9PiAoXHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9qZWN0cy8ke3Byb2plY3RJZH1gfSBrZXk9e2Bwcm9qZWN0SXRlbSR7cHJvamVjdElkfWB9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwcm9qZWN0ICR7cHJvamVjdC5pc0hpZGRlbiA/ICdoaWRkZW4nIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAgICAgIDxNeVByb2plY3Qgey4uLnByb2plY3R9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG5vLWRhdGEgJHthY3RpdmVQcm9qZWN0c0xlbmd0aC5sZW5ndGggPiAwID8gJ2hpZGRlbicgOiAnJ31gfT5cclxuICAgICAgICAgICAgSSdtIHN0aWxsIHdvcmtpbmcgb24gaXRcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgTXlQcm9qZWN0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge3RpdGxlID0gJycsIHR5cGUgPSAnJywgdGFncyA9IFtdLCB0aHVtYm5haWx9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1waWN0dXJlXCI+XHJcbiAgICAgIDxpbWcgc3JjPXt0aHVtYm5haWx9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtZGVzY1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC10aXRsZVwiPnt0aXRsZX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtdHlwZVwiPnt0eXBlfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC10YWdzXCI+e3RhZ3MubWFwKCh0YWcsIGkpID0+IChcclxuICAgICAgICAgIDxzcGFuIGtleT17YHByb2plY3RJdGVtJHtpfWB9Pnt0YWdMaXN0W3RhZ119PC9zcGFuPlxyXG4gICAgICAgICkpfTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=