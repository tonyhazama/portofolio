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
  tags: [3],
  description: 'We’re not selling “big agency services at small agency prices”. We deliver exceptional design solutions to complex business problems – extremely efficiently and delivered at lightning-fast pace.'
}, {
  title: "Volimond Lab",
  type: "Website",
  thumbnail: '/static/vmdlab1.jpg',
  tags: [3],
  snapshot: ['/static/vmdlab2.jpg'],
  description: "VMDLAB (pronounced V.M.D Lab) is a Modern and Simplistic HTML5 Based Web template. \n    Carefully constructed using latest trends in technology to make it look professional \n    and classy but also user friendly. Suitable for every use case, starting from personal web, \n    company profile, landing page, product description and other cool things.\n    \n\n    This is my personal project and also a project that i work on, \n    to complete assignment in one of my class back at Vocational School."
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
          lineNumber: 92,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
          className: "subtitle",
          children: "I'm a professional Web Developer."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
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
              lineNumber: 101,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
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
                  lineNumber: 114,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 17
              }, _this)
            }, "projectItem".concat(projectId), false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "no-data ".concat(activeProjectsLength.length > 0 ? 'hidden' : ''),
          children: "I'm still working on it"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 89,
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
        lineNumber: 133,
        columnNumber: 7
      }, _this2)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "project-desc",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "project-title",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "project-type",
        children: type
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "project-tags",
        children: tags.map(function (tag, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: tagList[tag]
          }, "projectItem".concat(i), false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 11
          }, _this2);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, _this2)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 135,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0cy5qcyJdLCJuYW1lcyI6WyJwcm9qZWN0cyIsInRpdGxlIiwidHlwZSIsInRodW1ibmFpbCIsInNjb3BlIiwidGFncyIsImRlc2NyaXB0aW9uIiwic25hcHNob3QiLCJ0YWdMaXN0IiwiUHJvamVjdHMiLCJ1c2VTdGF0ZSIsImFjdGl2ZVRhZ3MiLCJzZXRBY3RpdmVUYWdzIiwiYWN0aXZlUHJvamVjdHMiLCJtYXAiLCJlIiwiaXNIaWRkZW4iLCJpbmNsdWRlcyIsImFjdGl2ZVByb2plY3RzTGVuZ3RoIiwiZmlsdGVyIiwicGFkZGluZ1RvcCIsInRleHRBbGlnbiIsIm1hcmdpbkJvdHRvbSIsInRhZyIsImkiLCJrZXkiLCJfIiwicHJvamVjdCIsInByb2plY3RJZCIsImxlbmd0aCIsIk15UHJvamVjdCIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUM7QUFDRDtBQUVPLElBQU1BLFFBQVEsR0FBRyxDQUN0QjtBQUNFQyxPQUFLLEVBQUUsZUFEVDtBQUVFQyxNQUFJLEVBQUUsaUJBRlI7QUFHRUMsV0FBUyxFQUFFLG9CQUhiO0FBSUVDLE9BQUssRUFBRSxDQUNMLE9BREssRUFFTCxpQkFGSyxDQUpUO0FBUUVDLE1BQUksRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBUlI7QUFTRUMsYUFBVztBQVRiLENBRHNCLEVBWXRCO0FBQ0VMLE9BQUssRUFBRSxTQURUO0FBRUVDLE1BQUksRUFBRSxpQkFGUjtBQUdFQyxXQUFTLEVBQUUsb0JBSGI7QUFJRUMsT0FBSyxFQUFFLENBQ0wsT0FESyxFQUVMLGlCQUZLLENBSlQ7QUFRRUMsTUFBSSxFQUFFLENBQUMsQ0FBRCxDQVJSO0FBU0VDLGFBQVc7QUFUYixDQVpzQixFQXlCdEI7QUFDRUwsT0FBSyxFQUFFLDJCQURUO0FBRUVDLE1B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c0JBQ0U7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBLDZCQUNBO0FBQUssV0FBRyxFQUFFQTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBQSxrQkFBZ0NGO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUFBLGtCQUErQkM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUdFO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUEsa0JBQStCRyxJQUFJLENBQUNTLEdBQUwsQ0FBUyxVQUFDUyxHQUFELEVBQU1DLENBQU47QUFBQSw4QkFDdEM7QUFBQSxzQkFBK0JoQixPQUFPLENBQUNlLEdBQUQ7QUFBdEMsa0NBQXlCQyxDQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURzQztBQUFBLFNBQVQ7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBLGtCQURGO0FBY0QsQ0FoQkQ7O01BQU1NLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvamVjdHMvW3Byb2plY3RJZF0uMGEzMzc5YzlkMGYxZDEyMTZlNjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAYXV0aG9yIFRvbnkgSGF6YW1hXHJcbiAqIEBlbWFpbCB0b255aGF6YW1hNDcyMUBnbWFpbC5jb21cclxuICogQGNyZWF0ZSBkYXRlIDIwMjEtMDUtMjIgMDI6MDE6NTFcclxuICogQG1vZGlmeSBkYXRlIDIwMjEtMDUtMjIgMDI6MDE6NTFcclxuICogQGRlc2MgVGhpcyBpcyBteSBwZXJzb25hbCB3ZWJzaXRlXHJcbiAqL1xyXG5cclxuIGltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5leHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiS29sZXNlIExveW9sYVwiLCBcclxuICAgIHR5cGU6IFwiV2ViIEFwcGxpY2F0aW9uXCIsXHJcbiAgICB0aHVtYm5haWw6ICcvc3RhdGljL2xveW9sYS5qcGcnLFxyXG4gICAgc2NvcGU6IFtcclxuICAgICAgJ1VJL1VYJyxcclxuICAgICAgJ1dlYiBEZXZlbG9wbWVudCcsXHJcbiAgICBdLFxyXG4gICAgdGFnczogWzEsIDNdLFxyXG4gICAgZGVzY3JpcHRpb246IGBLb2xlc2UgTG95b2xhIGlzIGEgZ3JvdXAgb2YgUHJvamVjdHMgdGhhdCBjb25zaXN0IG9mIE5ldyBTdHVkZW50IEFkbWlzc2lvbnMgQXBwbGljYWl0b25gLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQy1TbWFydFwiLCBcclxuICAgIHR5cGU6IFwiV2ViIEFwcGxpY2F0aW9uXCIsXHJcbiAgICB0aHVtYm5haWw6ICcvc3RhdGljL2NzbWFydC5qcGcnLFxyXG4gICAgc2NvcGU6IFtcclxuICAgICAgJ1VJL1VYJyxcclxuICAgICAgJ1dlYiBEZXZlbG9wbWVudCcsXHJcbiAgICBdLFxyXG4gICAgdGFnczogWzJdLFxyXG4gICAgZGVzY3JpcHRpb246IGBDU01BUlQgaXMgYSB3ZWIgYXBwbGljYXRpb24gdGhhdCBmdW5jdGlvbnMgYXMgYSBTd2lmdCBNZXNzYWdlIEludmVzdGlnYXRpb24gVG9vbC4gVGhlIG1haW4gZnVuY3Rpb24gb2YgdGhlIGFwcGxpY2F0aW9uIGlzIHRvIGludmVzdGlnYXRlIHByb2JsZW1hdGljIFN3aWZ0IE1lc3NhZ2UgQ2FzZSBhbmQgcmVwYWlyIGl0IHRocm91Z2ggYSBzcGVjaWZpYyBzZXQgb2YgcHJvY2Vzc2VzIGRlcGVuZGluZyBvbiB0aGUgdHlwZSBvZiBjYXNlIGFuZCB0aGUgcHJvYmxlbSBpdCBlbmNvdW50ZXJzLiBDU01BUlQgY29uc3VtZSBTcHJpbmcgQm9vdCBBUEkgYXMgdGhlIG1haW4gYmFja2VuZCBzeXN0ZW0uXHJcbiAgICBcXG5PbiB0aGUgZnJvbnQtZW5kIHNpZGUsIENTTUFSVCBVdGlsaXplIEFuZ3VsYXIgNiBhbmQgYm9vdHN0cmFwIDQgQ1NTIGZyYW1ld29yayBhcyB0aGUgbWFpbiBmb3VuZGF0aW9uLiBXaXRoIGEgY29tYmluYXRpb24gb2YgUnhKUyBhbmQgYSBtb2R1bGFyIG5hdHVyZSBvZiBBbmd1bGFyIDYsIG1ha2luZyB0aGlzIGFwcGxpY2F0aW9uIGV4Y2VscyBpbiB0ZXJtIG9mIHNwZWVkIHBlcmZvcm1hbmNlLCBlZmZlY3RpdmVuZXNzLCBhbmQgYWNjZXNzaWJpbGl0eS5cclxuICAgIGAsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJNYXJrZXRwbGFjZSBBdWN0aW9uIFByaWNlXCIsIFxyXG4gICAgdHlwZTogXCJXZWIgQXBwbGljYXRpb25cIixcclxuICAgIHRodW1ibmFpbDogJy9zdGF0aWMvbWFwLmpwZycsXHJcbiAgICB0YWdzOiBbMSwgM10sXHJcbiAgICBzY29wZTogW1xyXG4gICAgICAnVUkvVVgnLFxyXG4gICAgICAnV2ViIERldmVsb3BtZW50JyxcclxuICAgIF0sXHJcbiAgICBzbmFwc2hvdDogW1xyXG4gICAgICAnL3N0YXRpYy9tYXAxLmpwZycsXHJcbiAgICAgICcvc3RhdGljL21hcDIuanBnJ1xyXG4gICAgXSxcclxuICAgIGRlc2NyaXB0aW9uOiBgTWFya2V0IEF1Y3Rpb24gUHJpY2UgaXMgYSBzZXJ2aWNlIGZyb20gSUJJRCwgdGhlIGxhcmdlc3QgYXV0b21vdGl2ZSBhdWN0aW9uIGNlbnRlciBpbiBJbmRvbmVzaWEsIHdoaWNoIHByZXNlbnRzIHRoZSBtYXJrZXQgcHJpY2Ugc3RhdGlzdGljcyBvZiBhdWN0aW9uIGNhcnMgaW4gdmFyaW91cyBncmFwaGljIGZvcm1hdHMgYW5kIGRldGFpbHMgYWNjb3JkaW5nIHRvIHVzZXIgbmVlZHMuIE1BUCBpcyBpbnRlZ3JhdGVkIHdpdGggQUNWIChBc3RyYSBDYXIgVmFsdWF0aW9uKSBhcyBhIHJlbGlhYmxlIGFuZCBjb21wcmVoZW5zaXZlIHN0YW5kYXJkIGZvciBjYXIgdmFsdWF0aW9uIHNvIHRoYXQgdGhlIGFuYWx5c2lzIGFuZCBwcmljZSB0cmVuZHMgcHJlc2VudGVkIGFyZSBtb3JlIHByZWNpc2UgYW5kIGFjY3VyYXRlLlxyXG4gICAgXFxuTUFQIGhlbHBlZCB0aGUgZGVjaXNpb24gdG8gYnV5IGEgZHJlYW0gY2FyIHdpdGggYSBzZW5zZSBvZiBjb21mb3J0IHdpdGhpbiB0aGUgYnVkZ2V0LiBLbm93IHRoZSBtYXJrZXQgcHJpY2Ugb2YgdGhlIGNhciB0byBiZSBwdXJjaGFzZWQgaW4gZGV0YWlsIGFjY29yZGluZyB0byB0aGUgY29uZGl0aW9ucywgbG9jYXRpb24gYW5kIHdpdGhpbiBhIGNlcnRhaW4gdGltZSBzbyB0aGF0IGl0IGNhbiBrbm93IHRoZSBwcmljZSB0cmVuZC5cclxuICAgIGAsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJUcmF2XCIsIFxyXG4gICAgdHlwZTogXCJNb2JpbGUgRGVzaWduXCIsXHJcbiAgICB0aHVtYm5haWw6ICcvc3RhdGljL3RyYXYyLmpwZycsXHJcbiAgICB0YWdzOiBbM10sXHJcbiAgICBkZXNjcmlwdGlvbjogJ1dl4oCZcmUgbm90IHNlbGxpbmcg4oCcYmlnIGFnZW5jeSBzZXJ2aWNlcyBhdCBzbWFsbCBhZ2VuY3kgcHJpY2Vz4oCdLiBXZSBkZWxpdmVyIGV4Y2VwdGlvbmFsIGRlc2lnbiBzb2x1dGlvbnMgdG8gY29tcGxleCBidXNpbmVzcyBwcm9ibGVtcyDigJMgZXh0cmVtZWx5IGVmZmljaWVudGx5IGFuZCBkZWxpdmVyZWQgYXQgbGlnaHRuaW5nLWZhc3QgcGFjZS4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiVm9saW1vbmQgTGFiXCIsIFxyXG4gICAgdHlwZTogXCJXZWJzaXRlXCIsXHJcbiAgICB0aHVtYm5haWw6ICcvc3RhdGljL3ZtZGxhYjEuanBnJyxcclxuICAgIHRhZ3M6IFszXSxcclxuICAgIHNuYXBzaG90OiBbXHJcbiAgICAgICcvc3RhdGljL3ZtZGxhYjIuanBnJyxcclxuICAgIF0sXHJcbiAgICBkZXNjcmlwdGlvbjogYFZNRExBQiAocHJvbm91bmNlZCBWLk0uRCBMYWIpIGlzIGEgTW9kZXJuIGFuZCBTaW1wbGlzdGljIEhUTUw1IEJhc2VkIFdlYiB0ZW1wbGF0ZS4gXHJcbiAgICBDYXJlZnVsbHkgY29uc3RydWN0ZWQgdXNpbmcgbGF0ZXN0IHRyZW5kcyBpbiB0ZWNobm9sb2d5IHRvIG1ha2UgaXQgbG9vayBwcm9mZXNzaW9uYWwgXHJcbiAgICBhbmQgY2xhc3N5IGJ1dCBhbHNvIHVzZXIgZnJpZW5kbHkuIFN1aXRhYmxlIGZvciBldmVyeSB1c2UgY2FzZSwgc3RhcnRpbmcgZnJvbSBwZXJzb25hbCB3ZWIsIFxyXG4gICAgY29tcGFueSBwcm9maWxlLCBsYW5kaW5nIHBhZ2UsIHByb2R1Y3QgZGVzY3JpcHRpb24gYW5kIG90aGVyIGNvb2wgdGhpbmdzLlxyXG4gICAgXFxuXHJcbiAgICBUaGlzIGlzIG15IHBlcnNvbmFsIHByb2plY3QgYW5kIGFsc28gYSBwcm9qZWN0IHRoYXQgaSB3b3JrIG9uLCBcclxuICAgIHRvIGNvbXBsZXRlIGFzc2lnbm1lbnQgaW4gb25lIG9mIG15IGNsYXNzIGJhY2sgYXQgVm9jYXRpb25hbCBTY2hvb2wuYCxcclxuICB9LFxyXG5dO1xyXG5leHBvcnQgY29uc3QgdGFnTGlzdCA9IFsnQWxsIFRhZ3MnLCAnUmVhY3QgSlMnLCAnQW5ndWxhcicsICdVSS9VWCcsICdOb2RlIEpTJywgICdFeHByZXNzSlMnXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzKCkge1xyXG4gIGNvbnN0IFthY3RpdmVUYWdzLCBzZXRBY3RpdmVUYWdzXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgYWN0aXZlUHJvamVjdHMgPSBhY3RpdmVUYWdzID8gcHJvamVjdHMubWFwKGUgPT4gKHtcclxuICAgIC4uLmUsXHJcbiAgICBpc0hpZGRlbjogIWUudGFncy5pbmNsdWRlcyhhY3RpdmVUYWdzKVxyXG4gIH0pKSA6IHByb2plY3RzO1xyXG4gIGNvbnN0IGFjdGl2ZVByb2plY3RzTGVuZ3RoID0gYWN0aXZlUHJvamVjdHMuZmlsdGVyKGUgPT4gIWUuaXNIaWRkZW4pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gcGFkZGVkIGZ1bGwtaGVpZ2h0XCIgc3R5bGU9e3twYWRkaW5nVG9wOiAnODBweCd9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luQm90dG9tOiAnMmVtJ319PlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+VGhpcyBpcyB3aGF0IGkndmUgd29ya2VkIG9uPC9oMj5cclxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPkknbSBhIHByb2Zlc3Npb25hbCBXZWIgRGV2ZWxvcGVyLjwvaDQ+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206ICc0ZW0nfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3NcIj5cclxuICAgICAgICAgICAge3RhZ0xpc3QubWFwKCh0YWcsIGkpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBrZXkgPSBpID09PSAwID8gJycgOiBpO1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake2FjdGl2ZVRhZ3MgPT09IGtleSA/ICdhY3RpdmUnIDogJyd9YH0ga2V5PXtgdGFnSXRlbSR7aX1gfSBvbkNsaWNrPXtfID0+IHtzZXRBY3RpdmVUYWdzKGtleSl9fT5cclxuICAgICAgICAgICAgICAgICAge3RhZ31cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHNcIj5cclxuICAgICAgICAgICAge2FjdGl2ZVByb2plY3RzLm1hcCgocHJvamVjdCwgcHJvamVjdElkKSA9PiAoXHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9qZWN0cy8ke3Byb2plY3RJZH1gfSBrZXk9e2Bwcm9qZWN0SXRlbSR7cHJvamVjdElkfWB9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwcm9qZWN0ICR7cHJvamVjdC5pc0hpZGRlbiA/ICdoaWRkZW4nIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAgICAgIDxNeVByb2plY3Qgey4uLnByb2plY3R9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG5vLWRhdGEgJHthY3RpdmVQcm9qZWN0c0xlbmd0aC5sZW5ndGggPiAwID8gJ2hpZGRlbicgOiAnJ31gfT5cclxuICAgICAgICAgICAgSSdtIHN0aWxsIHdvcmtpbmcgb24gaXRcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgTXlQcm9qZWN0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge3RpdGxlID0gJycsIHR5cGUgPSAnJywgdGFncyA9IFtdLCB0aHVtYm5haWx9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1waWN0dXJlXCI+XHJcbiAgICAgIDxpbWcgc3JjPXt0aHVtYm5haWx9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtZGVzY1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC10aXRsZVwiPnt0aXRsZX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtdHlwZVwiPnt0eXBlfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC10YWdzXCI+e3RhZ3MubWFwKCh0YWcsIGkpID0+IChcclxuICAgICAgICAgIDxzcGFuIGtleT17YHByb2plY3RJdGVtJHtpfWB9Pnt0YWdMaXN0W3RhZ119PC9zcGFuPlxyXG4gICAgICAgICkpfTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=