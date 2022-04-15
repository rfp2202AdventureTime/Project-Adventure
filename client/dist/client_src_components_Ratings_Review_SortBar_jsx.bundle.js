"use strict";
(self["webpackChunkproject_adventure"] = self["webpackChunkproject_adventure"] || []).push([["client_src_components_Ratings_Review_SortBar_jsx"],{

/***/ "./client/src/components/Ratings/Review/SortBar.jsx":
/*!**********************************************************!*\
  !*** ./client/src/components/Ratings/Review/SortBar.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SortBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





function SortBar(_ref) {
  var handleSort = _ref.handleSort,
      totalCT = _ref.totalCT,
      allCT = _ref.allCT;

  var sort = function sort(e) {
    handleSort(e.target.value);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(SortBarBlock, {
    children: ["Showing ".concat(totalCT, " reviews of ").concat(allCT, " reviews, sorted by"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(DropDown, {
      name: "sort",
      onChange: sort,
      id: "mySelect",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
        value: "relevant",
        children: "relevant"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
        value: "newest",
        children: "newest"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
        value: "helpful",
        children: "helpful"
      })]
    })]
  });
} // Style components

var SortBarBlock = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "SortBar__SortBarBlock"
})(["display:flex;flex-direction:row;margin:0.1rem 0.8rem 0.2rem 0.8rem;padding:0.25rem 1rem 0.25rem 1rem;font-size:medium;gap:0.4rem;"]);
var DropDown = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].select.withConfig({
  displayName: "SortBar__DropDown"
})(["font-weight:bold;color:", ";background-color:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.secondary;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.light;
});
SortBar.propTypes = {
  handleSort: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired),
  totalCT: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number.isRequired),
  allCT: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)
};
SortBar.defaultProps = {
  allCT: null
};

/***/ })

}]);
//# sourceMappingURL=client_src_components_Ratings_Review_SortBar_jsx.bundle.js.map