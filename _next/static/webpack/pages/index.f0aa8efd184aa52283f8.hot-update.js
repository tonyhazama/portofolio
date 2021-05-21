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
  thumbnail: '/static/trav2.jpg',
  snapshot: ['/static/trav1.jpg'],
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
          lineNumber: 93,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
          className: "subtitle",
          children: "I'm a professional Web Developer."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
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
              lineNumber: 102,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
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
                  lineNumber: 115,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 17
              }, _this)
            }, "projectItem".concat(projectId), false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "no-data ".concat(activeProjectsLength.length > 0 ? 'hidden' : ''),
          children: "I'm still working on it"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 90,
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
        lineNumber: 134,
        columnNumber: 7
      }, _this2)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "project-desc",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "project-title",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "project-type",
        children: type
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "project-tags",
        children: tags.map(function (tag, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: tagList[tag]
          }, "projectItem".concat(i), false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 11
          }, _this2);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, _this2)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 136,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0cy5qcyJdLCJuYW1lcyI6WyJwcm9qZWN0cyIsInRpdGxlIiwidHlwZSIsInRodW1ibmFpbCIsInNjb3BlIiwidGFncyIsImRlc2NyaXB0aW9uIiwic25hcHNob3QiLCJ0YWdMaXN0IiwiUHJvamVjdHMiLCJ1c2VTdGF0ZSIsImFjdGl2ZVRhZ3MiLCJzZXRBY3RpdmVUYWdzIiwiYWN0aXZlUHJvamVjdHMiLCJtYXAiLCJlIiwiaXNIaWRkZW4iLCJpbmNsdWRlcyIsImFjdGl2ZVByb2plY3RzTGVuZ3RoIiwiZmlsdGVyIiwicGFkZGluZ1RvcCIsInRleHRBbGlnbiIsIm1hcmdpbkJvdHRvbSIsInRhZyIsImkiLCJrZXkiLCJfIiwicHJvamVjdCIsInByb2plY3RJZCIsImxlbmd0aCIsIk15UHJvamVjdCIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUM7QUFDRDtBQUVPLElBQU1BLFFBQVEsR0FBRyxDQUN0QjtBQUNFQyxPQUFLLEVBQUUsZUFEVDtBQUVFQyxNQUFJLEVBQUUsaUJBRlI7QUFHRUMsV0FBUyxFQUFFLG9CQUhiO0FBSUVDLE9BQUssRUFBRSxDQUNMLE9BREssRUFFTCxpQkFGSyxDQUpUO0FBUUVDLE1BQUksRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBUlI7QUFTRUMsYUFBVztBQVRiLENBRHNCLEVBWXRCO0FBQ0VMLE9BQUssRUFBRSxTQURUO0FBRUVDLE1BQUksRUFBRSxpQkFGUjtBQUdFQyxXQUFTLEVBQUUsb0JBSGI7QUFJRUMsT0FBSyxFQUFFLENBQ0wsT0FESyxFQUVMLGlCQUZLLENBSlQ7QUFRRUMsTUFBSSxFQUFFLENBQUMsQ0FBRCxDQVJSO0FBU0VDLGFBQVc7QUFUYixDQVpzQixFQXlCdEI7QUFDRUwsT0FBSyxFQUFFLDJCQURUO0FBRUVDLE1B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LElBREgsNEJBQ1UsRUFEVjtBQUFBLE1BQ2NGLFNBRGQsR0FDMkI0QixLQUQzQixDQUNjNUIsU0FEZDtBQUUzQixzQkFDRTtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUEsNkJBQ0E7QUFBSyxXQUFHLEVBQUVBO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUFBLGtCQUFnQ0Y7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUEsa0JBQStCQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0U7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQSxrQkFBK0JHLElBQUksQ0FBQ1MsR0FBTCxDQUFTLFVBQUNTLEdBQUQsRUFBTUMsQ0FBTjtBQUFBLDhCQUN0QztBQUFBLHNCQUErQmhCLE9BQU8sQ0FBQ2UsR0FBRDtBQUF0QyxrQ0FBeUJDLENBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRHNDO0FBQUEsU0FBVDtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUEsa0JBREY7QUFjRCxDQWhCRDs7TUFBTU0sUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMGFhOGVmZDE4NGFhNTIyODNmOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBhdXRob3IgVG9ueSBIYXphbWFcclxuICogQGVtYWlsIHRvbnloYXphbWE0NzIxQGdtYWlsLmNvbVxyXG4gKiBAY3JlYXRlIGRhdGUgMjAyMS0wNS0yMiAwMjowMTo1MVxyXG4gKiBAbW9kaWZ5IGRhdGUgMjAyMS0wNS0yMiAwMjowMTo1MVxyXG4gKiBAZGVzYyBUaGlzIGlzIG15IHBlcnNvbmFsIHdlYnNpdGVcclxuICovXHJcblxyXG4gaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJLb2xlc2UgTG95b2xhXCIsIFxyXG4gICAgdHlwZTogXCJXZWIgQXBwbGljYXRpb25cIixcclxuICAgIHRodW1ibmFpbDogJy9zdGF0aWMvbG95b2xhLmpwZycsXHJcbiAgICBzY29wZTogW1xyXG4gICAgICAnVUkvVVgnLFxyXG4gICAgICAnV2ViIERldmVsb3BtZW50JyxcclxuICAgIF0sXHJcbiAgICB0YWdzOiBbMSwgM10sXHJcbiAgICBkZXNjcmlwdGlvbjogYEtvbGVzZSBMb3lvbGEgaXMgYSBncm91cCBvZiBQcm9qZWN0cyB0aGF0IGNvbnNpc3Qgb2YgTmV3IFN0dWRlbnQgQWRtaXNzaW9ucyBBcHBsaWNhaXRvbmAsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJDLVNtYXJ0XCIsIFxyXG4gICAgdHlwZTogXCJXZWIgQXBwbGljYXRpb25cIixcclxuICAgIHRodW1ibmFpbDogJy9zdGF0aWMvY3NtYXJ0LmpwZycsXHJcbiAgICBzY29wZTogW1xyXG4gICAgICAnVUkvVVgnLFxyXG4gICAgICAnV2ViIERldmVsb3BtZW50JyxcclxuICAgIF0sXHJcbiAgICB0YWdzOiBbMl0sXHJcbiAgICBkZXNjcmlwdGlvbjogYENTTUFSVCBpcyBhIHdlYiBhcHBsaWNhdGlvbiB0aGF0IGZ1bmN0aW9ucyBhcyBhIFN3aWZ0IE1lc3NhZ2UgSW52ZXN0aWdhdGlvbiBUb29sLiBUaGUgbWFpbiBmdW5jdGlvbiBvZiB0aGUgYXBwbGljYXRpb24gaXMgdG8gaW52ZXN0aWdhdGUgcHJvYmxlbWF0aWMgU3dpZnQgTWVzc2FnZSBDYXNlIGFuZCByZXBhaXIgaXQgdGhyb3VnaCBhIHNwZWNpZmljIHNldCBvZiBwcm9jZXNzZXMgZGVwZW5kaW5nIG9uIHRoZSB0eXBlIG9mIGNhc2UgYW5kIHRoZSBwcm9ibGVtIGl0IGVuY291bnRlcnMuIENTTUFSVCBjb25zdW1lIFNwcmluZyBCb290IEFQSSBhcyB0aGUgbWFpbiBiYWNrZW5kIHN5c3RlbS5cclxuICAgIFxcbk9uIHRoZSBmcm9udC1lbmQgc2lkZSwgQ1NNQVJUIFV0aWxpemUgQW5ndWxhciA2IGFuZCBib290c3RyYXAgNCBDU1MgZnJhbWV3b3JrIGFzIHRoZSBtYWluIGZvdW5kYXRpb24uIFdpdGggYSBjb21iaW5hdGlvbiBvZiBSeEpTIGFuZCBhIG1vZHVsYXIgbmF0dXJlIG9mIEFuZ3VsYXIgNiwgbWFraW5nIHRoaXMgYXBwbGljYXRpb24gZXhjZWxzIGluIHRlcm0gb2Ygc3BlZWQgcGVyZm9ybWFuY2UsIGVmZmVjdGl2ZW5lc3MsIGFuZCBhY2Nlc3NpYmlsaXR5LlxyXG4gICAgYCxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIk1hcmtldHBsYWNlIEF1Y3Rpb24gUHJpY2VcIiwgXHJcbiAgICB0eXBlOiBcIldlYiBBcHBsaWNhdGlvblwiLFxyXG4gICAgdGh1bWJuYWlsOiAnL3N0YXRpYy9tYXAuanBnJyxcclxuICAgIHRhZ3M6IFsxLCAzXSxcclxuICAgIHNjb3BlOiBbXHJcbiAgICAgICdVSS9VWCcsXHJcbiAgICAgICdXZWIgRGV2ZWxvcG1lbnQnLFxyXG4gICAgXSxcclxuICAgIHNuYXBzaG90OiBbXHJcbiAgICAgICcvc3RhdGljL21hcDEuanBnJyxcclxuICAgICAgJy9zdGF0aWMvbWFwMi5qcGcnXHJcbiAgICBdLFxyXG4gICAgZGVzY3JpcHRpb246IGBNYXJrZXQgQXVjdGlvbiBQcmljZSBpcyBhIHNlcnZpY2UgZnJvbSBJQklELCB0aGUgbGFyZ2VzdCBhdXRvbW90aXZlIGF1Y3Rpb24gY2VudGVyIGluIEluZG9uZXNpYSwgd2hpY2ggcHJlc2VudHMgdGhlIG1hcmtldCBwcmljZSBzdGF0aXN0aWNzIG9mIGF1Y3Rpb24gY2FycyBpbiB2YXJpb3VzIGdyYXBoaWMgZm9ybWF0cyBhbmQgZGV0YWlscyBhY2NvcmRpbmcgdG8gdXNlciBuZWVkcy4gTUFQIGlzIGludGVncmF0ZWQgd2l0aCBBQ1YgKEFzdHJhIENhciBWYWx1YXRpb24pIGFzIGEgcmVsaWFibGUgYW5kIGNvbXByZWhlbnNpdmUgc3RhbmRhcmQgZm9yIGNhciB2YWx1YXRpb24gc28gdGhhdCB0aGUgYW5hbHlzaXMgYW5kIHByaWNlIHRyZW5kcyBwcmVzZW50ZWQgYXJlIG1vcmUgcHJlY2lzZSBhbmQgYWNjdXJhdGUuXHJcbiAgICBcXG5NQVAgaGVscGVkIHRoZSBkZWNpc2lvbiB0byBidXkgYSBkcmVhbSBjYXIgd2l0aCBhIHNlbnNlIG9mIGNvbWZvcnQgd2l0aGluIHRoZSBidWRnZXQuIEtub3cgdGhlIG1hcmtldCBwcmljZSBvZiB0aGUgY2FyIHRvIGJlIHB1cmNoYXNlZCBpbiBkZXRhaWwgYWNjb3JkaW5nIHRvIHRoZSBjb25kaXRpb25zLCBsb2NhdGlvbiBhbmQgd2l0aGluIGEgY2VydGFpbiB0aW1lIHNvIHRoYXQgaXQgY2FuIGtub3cgdGhlIHByaWNlIHRyZW5kLlxyXG4gICAgYCxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlRyYXZcIiwgXHJcbiAgICB0eXBlOiBcIk1vYmlsZSBEZXNpZ25cIixcclxuICAgIHRodW1ibmFpbDogJy9zdGF0aWMvdHJhdjIuanBnJyxcclxuICAgIHNuYXBzaG90OiBbXHJcbiAgICAgICcvc3RhdGljL3RyYXYxLmpwZycsXHJcbiAgICBdLFxyXG4gICAgdGFnczogWzNdLFxyXG4gICAgZGVzY3JpcHRpb246ICdXZeKAmXJlIG5vdCBzZWxsaW5nIOKAnGJpZyBhZ2VuY3kgc2VydmljZXMgYXQgc21hbGwgYWdlbmN5IHByaWNlc+KAnS4gV2UgZGVsaXZlciBleGNlcHRpb25hbCBkZXNpZ24gc29sdXRpb25zIHRvIGNvbXBsZXggYnVzaW5lc3MgcHJvYmxlbXMg4oCTIGV4dHJlbWVseSBlZmZpY2llbnRseSBhbmQgZGVsaXZlcmVkIGF0IGxpZ2h0bmluZy1mYXN0IHBhY2UuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlZvbGltb25kIExhYlwiLCBcclxuICAgIHR5cGU6IFwiV2Vic2l0ZVwiLFxyXG4gICAgdGh1bWJuYWlsOiAnL3N0YXRpYy92bWRsYWIxLmpwZycsXHJcbiAgICB0YWdzOiBbM10sXHJcbiAgICBzbmFwc2hvdDogW1xyXG4gICAgICAnL3N0YXRpYy92bWRsYWIyLmpwZycsXHJcbiAgICAgICcvc3RhdGljL3ZtZGxhYjIuanBnJyxcclxuICAgICAgJy9zdGF0aWMvdm1kbGFiMi5qcGcnLFxyXG4gICAgICAnL3N0YXRpYy92bWRsYWIyLmpwZycsXHJcbiAgICBdLFxyXG4gICAgZGVzY3JpcHRpb246IGBWTURMQUIgKHByb25vdW5jZWQgVi5NLkQgTGFiKSBpcyBhIE1vZGVybiBhbmQgU2ltcGxpc3RpYyBIVE1MNSBCYXNlZCBXZWIgdGVtcGxhdGUuIENhcmVmdWxseSBjb25zdHJ1Y3RlZCB1c2luZyBsYXRlc3QgdHJlbmRzIGluIHRlY2hub2xvZ3kgdG8gbWFrZSBpdCBsb29rIHByb2Zlc3Npb25hbCBhbmQgY2xhc3N5IGJ1dCBhbHNvIHVzZXIgZnJpZW5kbHkuIFN1aXRhYmxlIGZvciBldmVyeSB1c2UgY2FzZSwgc3RhcnRpbmcgZnJvbSBwZXJzb25hbCB3ZWIsIGNvbXBhbnkgcHJvZmlsZSwgbGFuZGluZyBwYWdlLCBwcm9kdWN0IGRlc2NyaXB0aW9uIGFuZCBvdGhlciBjb29sIHRoaW5ncy5cclxuICAgIFxcblRoaXMgaXMgbXkgcGVyc29uYWwgcHJvamVjdCBhbmQgYWxzbyBhIHByb2plY3QgdGhhdCBpIHdvcmsgb24sIHRvIGNvbXBsZXRlIGFzc2lnbm1lbnQgaW4gb25lIG9mIG15IGNsYXNzIGJhY2sgYXQgVm9jYXRpb25hbCBTY2hvb2wuYCxcclxuICB9LFxyXG5dO1xyXG5leHBvcnQgY29uc3QgdGFnTGlzdCA9IFsnQWxsIFRhZ3MnLCAnUmVhY3QgSlMnLCAnQW5ndWxhcicsICdVSS9VWCcsICdOb2RlIEpTJywgICdFeHByZXNzSlMnXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzKCkge1xyXG4gIGNvbnN0IFthY3RpdmVUYWdzLCBzZXRBY3RpdmVUYWdzXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgYWN0aXZlUHJvamVjdHMgPSBhY3RpdmVUYWdzID8gcHJvamVjdHMubWFwKGUgPT4gKHtcclxuICAgIC4uLmUsXHJcbiAgICBpc0hpZGRlbjogIWUudGFncy5pbmNsdWRlcyhhY3RpdmVUYWdzKVxyXG4gIH0pKSA6IHByb2plY3RzO1xyXG4gIGNvbnN0IGFjdGl2ZVByb2plY3RzTGVuZ3RoID0gYWN0aXZlUHJvamVjdHMuZmlsdGVyKGUgPT4gIWUuaXNIaWRkZW4pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gcGFkZGVkIGZ1bGwtaGVpZ2h0XCIgc3R5bGU9e3twYWRkaW5nVG9wOiAnODBweCd9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luQm90dG9tOiAnMmVtJ319PlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+VGhpcyBpcyB3aGF0IGkndmUgd29ya2VkIG9uPC9oMj5cclxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPkknbSBhIHByb2Zlc3Npb25hbCBXZWIgRGV2ZWxvcGVyLjwvaDQ+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206ICc0ZW0nfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3NcIj5cclxuICAgICAgICAgICAge3RhZ0xpc3QubWFwKCh0YWcsIGkpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBrZXkgPSBpID09PSAwID8gJycgOiBpO1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake2FjdGl2ZVRhZ3MgPT09IGtleSA/ICdhY3RpdmUnIDogJyd9YH0ga2V5PXtgdGFnSXRlbSR7aX1gfSBvbkNsaWNrPXtfID0+IHtzZXRBY3RpdmVUYWdzKGtleSl9fT5cclxuICAgICAgICAgICAgICAgICAge3RhZ31cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHNcIj5cclxuICAgICAgICAgICAge2FjdGl2ZVByb2plY3RzLm1hcCgocHJvamVjdCwgcHJvamVjdElkKSA9PiAoXHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9qZWN0cy8ke3Byb2plY3RJZH1gfSBrZXk9e2Bwcm9qZWN0SXRlbSR7cHJvamVjdElkfWB9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwcm9qZWN0ICR7cHJvamVjdC5pc0hpZGRlbiA/ICdoaWRkZW4nIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAgICAgIDxNeVByb2plY3Qgey4uLnByb2plY3R9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG5vLWRhdGEgJHthY3RpdmVQcm9qZWN0c0xlbmd0aC5sZW5ndGggPiAwID8gJ2hpZGRlbicgOiAnJ31gfT5cclxuICAgICAgICAgICAgSSdtIHN0aWxsIHdvcmtpbmcgb24gaXRcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgTXlQcm9qZWN0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge3RpdGxlID0gJycsIHR5cGUgPSAnJywgdGFncyA9IFtdLCB0aHVtYm5haWx9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1waWN0dXJlXCI+XHJcbiAgICAgIDxpbWcgc3JjPXt0aHVtYm5haWx9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtZGVzY1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC10aXRsZVwiPnt0aXRsZX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtdHlwZVwiPnt0eXBlfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC10YWdzXCI+e3RhZ3MubWFwKCh0YWcsIGkpID0+IChcclxuICAgICAgICAgIDxzcGFuIGtleT17YHByb2plY3RJdGVtJHtpfWB9Pnt0YWdMaXN0W3RhZ119PC9zcGFuPlxyXG4gICAgICAgICkpfTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=