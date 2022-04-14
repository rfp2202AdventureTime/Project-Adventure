"use strict";
(self["webpackChunkproject_adventure"] = self["webpackChunkproject_adventure"] || []).push([["client_src_components_Ratings_RatingBreakdown_FactorList_jsx"],{

/***/ "./client/src/components/Ratings/RatingBreakdown/FactorBar.jsx":
/*!*********************************************************************!*\
  !*** ./client/src/components/Ratings/RatingBreakdown/FactorBar.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FactorBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _FactorEntry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FactorEntry */ "./client/src/components/Ratings/RatingBreakdown/FactorEntry.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






function FactorBar(_ref) {
  var factor = _ref.factor,
      score = _ref.score;
  var barWidth = 15;
  var width = "".concat(barWidth, "rem");
  var distanceToLeft = "".concat(Math.floor(barWidth * score / 5), "rem");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(FactorBlock, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      children: factor
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BarContainer, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Bar, {
        width: width,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Pointer, {
          left: distanceToLeft
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FactorDescirption, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_FactorEntry__WEBPACK_IMPORTED_MODULE_1__["default"], {
        factor: factor
      })
    })]
  });
} // Style components

var FactorBlock = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "FactorBar__FactorBlock"
})(["display:flex;flex-direction:column;padding:1rem 2.5rem 0 2rem;"]);
var BarContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "FactorBar__BarContainer"
})(["position:relative;padding-bottom:0.6rem;"]);
var Bar = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "FactorBar__Bar"
})(["top:0;left:0;vertical-align:left;display:inline-block;background-color:", ";overflow:hidden;width:", ";height:0.5rem;"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.background;
}, function (_ref3) {
  var width = _ref3.width;
  return width;
});
var Pointer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "FactorBar__Pointer"
})(["position:absolute;&:before{content:\"\u25BC\";}z-index:5;margin-top:-6px;font-size:0.87rem;margin-left:", ";"], function (props) {
  return props.left;
});
var FactorDescirption = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "FactorBar__FactorDescirption"
})(["display:flex;flex-direction:row;justify-content:space-between;font-size:0.8rem;"]);
FactorBar.propTypes = {
  factor: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired),
  score: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired)
};

/***/ }),

/***/ "./client/src/components/Ratings/RatingBreakdown/FactorEntry.jsx":
/*!***********************************************************************!*\
  !*** ./client/src/components/Ratings/RatingBreakdown/FactorEntry.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FactorEntry)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



function FactorEntry(_ref) {
  var factor = _ref.factor;
  var factorSummary = {
    Size: ['Too small', 'Perfect', 'Too large'],
    Width: ['Too narrow', 'Perfect', 'Too wide'],
    Comfort: ['Poor', '', 'Perfect'],
    Quality: ['Poor', '', 'Perfect'],
    Length: ['Runs short', 'Perfect', 'Runs long'],
    Fit: ['Runs tight', 'Perfect', 'Runs big']
  };
  return factorSummary[factor].map(function (characteristic, index) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      children: characteristic
    }, factor.concat(index));
  });
}
FactorEntry.propTypes = {
  factor: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)
};

/***/ }),

/***/ "./client/src/components/Ratings/RatingBreakdown/FactorList.jsx":
/*!**********************************************************************!*\
  !*** ./client/src/components/Ratings/RatingBreakdown/FactorList.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FactorList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _FactorBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FactorBar */ "./client/src/components/Ratings/RatingBreakdown/FactorBar.jsx");
/* harmony import */ var _contexts_ReviewMeta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../contexts/ReviewMeta */ "./client/src/contexts/ReviewMeta.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





function FactorList() {
  var meta = (0,_contexts_ReviewMeta__WEBPACK_IMPORTED_MODULE_2__.useMeta)();
  var factorBars = [];
  var factor = meta === null || meta === void 0 ? void 0 : meta.characteristics;
  Object.keys(factor).forEach(function (key) {
    if (factor[key].value) {
      factorBars.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_FactorBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
        factor: key,
        score: factor[key].value
      }, factor[key].id));
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Factor, {
    children: factorBars
  });
} // Style components

var Factor = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "FactorList__Factor"
})(["display:flex;flex-direction:column;"]);

/***/ })

}]);
//# sourceMappingURL=client_src_components_Ratings_RatingBreakdown_FactorList_jsx.bundle.js.map