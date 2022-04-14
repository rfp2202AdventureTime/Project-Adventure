"use strict";
(self["webpackChunkproject_adventure"] = self["webpackChunkproject_adventure"] || []).push([["client_src_components_Ratings_RatingBreakdown_RatingList_jsx"],{

/***/ "./client/src/components/Ratings/RatingBreakdown/RatingBar.jsx":
/*!*********************************************************************!*\
  !*** ./client/src/components/Ratings/RatingBreakdown/RatingBar.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RatingBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@Contexts/ClickTracker'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _contexts_Shared_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../contexts/Shared.styled */ "./client/src/contexts/Shared.styled.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







function RatingBar(_ref) {
  var scorePct = _ref.scorePct,
      id = _ref.id,
      toggleFilter = _ref.toggleFilter;

  var _useTracking = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@Contexts/ClickTracker'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    widget: 'Rating_Bar_Sort'
  }),
      trackEvent = _useTracking.trackEvent;

  var handleClick = function handleClick(e) {
    trackEvent({
      element: 'Sort_by_Star'
    });
    var selected = e.target.className.slice(-1);
    toggleFilter(selected);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(RatingBarBlock, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_contexts_Shared_styled__WEBPACK_IMPORTED_MODULE_2__.ClickableText, {
      className: "".concat(id),
      onClick: handleClick,
      children: "".concat(id, " Star")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(GreyBar, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(GreenBar, {
        width: scorePct
      })
    })]
  });
} // Style components

var RatingBarBlock = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "RatingBar__RatingBarBlock"
})(["display:flex;flex-direction:row;align-items:baseline;padding:0 0.5rem 0.5rem 0.5rem;height:1.5rem;justify-content:flex-end;width:15rem;overflow:hidden;"]);
var GreyBar = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "RatingBar__GreyBar"
})(["left:1.3rem;position:relative;vertical-align:middle;display:inline-block;background-color:", ";overflow:hidden;width:10rem;height:0.5rem;"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.background;
});
var GreenBar = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "RatingBar__GreenBar"
})(["height:0.5rem;position:absolute;left:0;top:0;white-space:nowrap;overflow:hidden;background-color:#4CAF50;width:", ";"], function (_ref3) {
  var width = _ref3.width;
  return width;
});
RatingBar.propTypes = {
  scorePct: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string.isRequired),
  id: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string.isRequired),
  toggleFilter: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func.isRequired)
};

/***/ }),

/***/ "./client/src/components/Ratings/RatingBreakdown/RatingList.jsx":
/*!**********************************************************************!*\
  !*** ./client/src/components/Ratings/RatingBreakdown/RatingList.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RatingList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _contexts_ReviewMeta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../contexts/ReviewMeta */ "./client/src/contexts/ReviewMeta.jsx");
/* harmony import */ var _RatingBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RatingBar */ "./client/src/components/Ratings/RatingBreakdown/RatingBar.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable react/prop-types */







function RatingList(_ref) {
  var toggleFilter = _ref.toggleFilter,
      filterStatus = _ref.filterStatus,
      clearFilter = _ref.clearFilter;
  var starList = [];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    tags: [],
    filterOn: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      activeTags = _useState2[0],
      setActiveTags = _useState2[1];

  var currentMeta = (0,_contexts_ReviewMeta__WEBPACK_IMPORTED_MODULE_1__.useMeta)();

  if (currentMeta) {
    var ratings = currentMeta.ratings,
        totalCT = currentMeta.totalCT;
    var starArray = [5, 4, 3, 2, 1];
    starArray.forEach(function (key) {
      var currentCT = Number(ratings[key]);

      if (Number.isNaN(currentCT)) {
        starList.push({
          id: key,
          score: 0
        });
      } else {
        starList.push({
          id: key,
          score: currentCT / totalCT
        });
      }
    });
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var tags = [];

    if (filterStatus.filterCount) {
      Object.keys(filterStatus).forEach(function (key) {
        if (key !== 'filterCount') {
          // eslint-disable-next-line no-unused-expressions
          filterStatus[key] && tags.push("".concat(key, " Star"));
        }
      });
      setActiveTags({
        tags: tags,
        filterOn: true
      });
    } else {
      setActiveTags({
        tags: [],
        filterOn: false
      });
    }
  }, [filterStatus.filterCount]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Ratings, {
    children: [starList.map(function (item) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_RatingBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        scorePct: "".concat(Math.floor(item.score * 100), "%"),
        id: item.id.toString(),
        toggleFilter: toggleFilter
      }, item.id);
    }), activeTags.filterOn ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ClearFilter, {
      onClick: clearFilter,
      children: "Remove all filters"
    }) : '', activeTags.tags.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(SortingTags, {
      children: ['Active Tags are : ', activeTags.tags.join(', ')]
    }) : '']
  });
} // Style components

var Ratings = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "RatingList__Ratings"
})(["display:flex;flex-direction:column;padding:1rem;padding-right:3rem;"]); // TODO:make this pretty

var SortingTags = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "RatingList__SortingTags"
})([""]);
var ClearFilter = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button.withConfig({
  displayName: "RatingList__ClearFilter"
})(["background-color:transparent;border:none;text-decoration:underline;"]); // TODO: figure out nested proptype

RatingList.propTypes = {
  toggleFilter: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func.isRequired)
};

/***/ })

}]);
//# sourceMappingURL=client_src_components_Ratings_RatingBreakdown_RatingList_jsx.bundle.js.map