"use strict";
(self["webpackChunkproject_adventure"] = self["webpackChunkproject_adventure"] || []).push([["client_src_components_Ratings_RatingBreakdown_RatingOverview_jsx"],{

/***/ "./client/src/components/Ratings/RatingBreakdown/RatingOverview.jsx":
/*!**************************************************************************!*\
  !*** ./client/src/components/Ratings/RatingBreakdown/RatingOverview.jsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RatingOverview)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _contexts_ReviewMeta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../contexts/ReviewMeta */ "./client/src/contexts/ReviewMeta.jsx");
/* harmony import */ var _Star__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Star */ "./client/src/Star.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






function RatingOverview() {
  var score = 0;
  var helpfulness = null;
  var currentMeta = (0,_contexts_ReviewMeta__WEBPACK_IMPORTED_MODULE_1__.useMeta)();

  if (currentMeta) {
    var recommended = currentMeta.recommended,
        avgRating = currentMeta.avgRating;
    score = avgRating;
    var trueCT = Number(recommended["true"]);
    var falseCT = Number(recommended["false"]);
    helpfulness = Math.round(trueCT / (trueCT + falseCT) * 100);
  }

  var recommendationEntry = helpfulness ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    children: [helpfulness, "% of reviews recommend this product"]
  }) : '';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(RatingOverviewContainer, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(RatingHeading, {
      children: "RATINGS & REVIEWS"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(StarContainer, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Score, {
        children: score
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Star__WEBPACK_IMPORTED_MODULE_2__["default"], {
        score: score
      })]
    }), recommendationEntry]
  });
} // Style componnets

var RatingOverviewContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "RatingOverview__RatingOverviewContainer"
})(["display:flex;flex-direction:column;"]);
var RatingHeading = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h3.withConfig({
  displayName: "RatingOverview__RatingHeading"
})(["font-family:", ";color:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.fonts.title.family;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.primary;
});
var StarContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "RatingOverview__StarContainer"
})(["align-items:center;display:flex;flex-direction:row;"]);
var Score = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "RatingOverview__Score"
})(["padding-right:1rem;font-size:4rem;font-weight:bold"]);

/***/ })

}]);
//# sourceMappingURL=client_src_components_Ratings_RatingBreakdown_RatingOverview_jsx.bundle.js.map