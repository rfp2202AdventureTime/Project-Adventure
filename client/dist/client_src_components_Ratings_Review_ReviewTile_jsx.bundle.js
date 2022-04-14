"use strict";
(self["webpackChunkproject_adventure"] = self["webpackChunkproject_adventure"] || []).push([["client_src_components_Ratings_Review_ReviewTile_jsx"],{

/***/ "./client/src/components/Ratings/Review/HighlightText.jsx":
/*!****************************************************************!*\
  !*** ./client/src/components/Ratings/Review/HighlightText.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HighlightText)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



function HighlightText(_ref) {
  var text = _ref.text,
      highlight = _ref.highlight;

  if (!highlight.trim()) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      children: text
    });
  }

  var regex = new RegExp("(".concat(highlight, ")"), 'gi');
  var parts = text.split(regex);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
    children: parts.filter(String).map(function (part, i) {
      return regex.test(part) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("mark", {
        children: part
      }, part.concat(i)) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        children: part
      }, part.concat(i));
    })
  });
}
HighlightText.propTypes = {
  text: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  highlight: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)
};

/***/ }),

/***/ "./client/src/components/Ratings/Review/PhotoEntry.jsx":
/*!*************************************************************!*\
  !*** ./client/src/components/Ratings/Review/PhotoEntry.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





function PhotoEntry(_ref) {
  var url = _ref.url,
      isSelected = _ref.isSelected,
      index = _ref.index;

  var handleClick = function handleClick() {
    isSelected(index);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Thumbnail, {
    thumbnail: url,
    onClick: handleClick
  });
}

var Thumbnail = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "PhotoEntry__Thumbnail"
})(["height:75px;width:75px;background:", ";background-size:cover;background-position:center;position:relative;cursor:pointer;"], function (_ref2) {
  var thumbnail = _ref2.thumbnail,
      theme = _ref2.theme;
  return thumbnail ? "url(".concat(thumbnail, ")") : theme.colors.background;
});
PhotoEntry.propTypes = {
  url: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  isSelected: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired),
  index: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number.isRequired)
};
PhotoEntry.defaultProps = {
  url: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhotoEntry);

/***/ }),

/***/ "./client/src/components/Ratings/Review/PhotoList.jsx":
/*!************************************************************!*\
  !*** ./client/src/components/Ratings/Review/PhotoList.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _PhotoEntry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhotoEntry */ "./client/src/components/Ratings/Review/PhotoEntry.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






function PhotoList(_ref) {
  var photos = _ref.photos,
      isSelected = _ref.isSelected;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(PhotoContainer, {
    children: photos.map(function (photo, index) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_PhotoEntry__WEBPACK_IMPORTED_MODULE_1__["default"], {
        isSelected: isSelected,
        url: photo.url,
        index: index
      }, photo.id);
    })
  });
}

var PhotoContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "PhotoList__PhotoContainer"
})(["display:flex;flex-direction:row;flex-wrap:wrap;justify-content:left;gap:20px;max-width:400px;padding:10px 0;"]);
PhotoList.propTypes = {
  photos: prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape()).isRequired,
  isSelected: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhotoList);

/***/ }),

/***/ "./client/src/components/Ratings/Review/ReviewContent.jsx":
/*!****************************************************************!*\
  !*** ./client/src/components/Ratings/Review/ReviewContent.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReviewContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _contexts_Shared_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../contexts/Shared.styled */ "./client/src/contexts/Shared.styled.js");
/* harmony import */ var _HighlightText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HighlightText */ "./client/src/components/Ratings/Review/HighlightText.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function ReviewContent(_ref) {
  var body = _ref.body,
      keyword = _ref.keyword;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showButton = _useState2[0],
      setShowButton = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(body),
      _useState4 = _slicedToArray(_useState3, 2),
      modifiedBody = _useState4[0],
      setModifiedBody = _useState4[1];

  var bodyCharLimit = 250;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (body.length > bodyCharLimit) {
      setShowButton(true);
      setModifiedBody(body.slice(0, bodyCharLimit).concat(' ...'));
    }
  }, [body]);

  var showMore = function showMore() {
    setShowButton(!showButton);
    setModifiedBody(body);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(ReviewContainer, {
    children: [keyword ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HighlightText__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: modifiedBody,
      highlight: keyword
    }) : modifiedBody, showButton ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_contexts_Shared_styled__WEBPACK_IMPORTED_MODULE_1__.MiniButton // showButton={showButton}
    , {
      onClick: showMore,
      children: "Show More"
    }) : '']
  });
} // Style components

var ReviewContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "ReviewContent__ReviewContainer"
})(["overflow-wrap:break-word;hyphens:manual;"]);
ReviewContent.propTypes = {
  body: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string.isRequired),
  keyword: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)
};
ReviewContent.defaultProps = {
  keyword: null
};

/***/ }),

/***/ "./client/src/components/Ratings/Review/ReviewTile.jsx":
/*!*************************************************************!*\
  !*** ./client/src/components/Ratings/Review/ReviewTile.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReviewTile)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Star__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Star */ "./client/src/Star.jsx");
/* harmony import */ var _PhotoList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PhotoList */ "./client/src/components/Ratings/Review/PhotoList.jsx");
/* harmony import */ var _ReviewContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ReviewContent */ "./client/src/components/Ratings/Review/ReviewContent.jsx");
/* harmony import */ var _UserInteraction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UserInteraction */ "./client/src/components/Ratings/Review/UserInteraction.jsx");
/* harmony import */ var _HighlightText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HighlightText */ "./client/src/components/Ratings/Review/HighlightText.jsx");
/* harmony import */ var _contexts_Shared_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../contexts/Shared.styled */ "./client/src/contexts/Shared.styled.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













function ReviewTile(_ref) {
  var review = _ref.review,
      addHelpVote = _ref.addHelpVote,
      reportReview = _ref.reportReview,
      keyword = _ref.keyword;
  var rating = review.rating,
      summary = review.summary,
      recommend = review.recommend,
      response = review.response,
      date = review.date,
      body = review.body,
      photos = review.photos,
      helpfulness = review.helpfulness;
  var convertedDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format('MMMM D, YYYY');
  var reviewId = review.review_id;
  var usernameDate = "".concat(review.reviewer_name, ",  ").concat(convertedDate);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showModal = _useState2[0],
      setShowModal = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      modalUrl = _useState4[0],
      setModalUrl = _useState4[1];

  var clickPhoto = function clickPhoto(i) {
    setModalUrl(photos[i].url);
    setShowModal(!showModal);
  };

  var clickExit = function clickExit() {
    setShowModal(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var espExit = function espExit(e) {
      if (e.key === 'Escape') {
        setShowModal(false);
      }
    };

    window.addEventListener('keydown', espExit);
    return function () {
      return window.removeEventListener('keydown', espExit);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(ReviewBlock, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(UserRatingRow, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Star__WEBPACK_IMPORTED_MODULE_2__["default"], {
        score: rating
      }), usernameDate]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ReviewHeading, {
      children: keyword ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_HighlightText__WEBPACK_IMPORTED_MODULE_6__["default"], {
        text: summary,
        highlight: keyword
      }) : summary
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ReviewContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
      keyword: keyword,
      body: body
    }), recommend && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Recommend, {
      children: " \u2713 I recommend this product"
    }), response && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(Response, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("b", {
          children: "Response from seller:"
        })
      }), response]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_PhotoList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      photos: photos,
      isSelected: clickPhoto
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_contexts_Shared_styled__WEBPACK_IMPORTED_MODULE_7__.ModalParent, {
      className: "ModalParent",
      showModal: showModal,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_contexts_Shared_styled__WEBPACK_IMPORTED_MODULE_7__.Modal, {
        className: "Modal",
        showModal: showModal,
        modal: modalUrl,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_contexts_Shared_styled__WEBPACK_IMPORTED_MODULE_7__.ModalClose, {
          onClick: clickExit,
          children: "\xD7"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_UserInteraction__WEBPACK_IMPORTED_MODULE_5__["default"], {
      addHelpVote: addHelpVote,
      reviewId: reviewId,
      helpfulness: helpfulness,
      reportReview: reportReview
    })]
  });
} // Style components

var ReviewBlock = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "ReviewTile__ReviewBlock"
})(["display:flex;flex-direction:column;margin:0.4rem 0.8rem 0.4rem 0.8rem;padding:0.25rem 1rem 0.25rem 1rem;background-color:", ";&:hover{box-shadow:0 0 6px ", "};"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.offWhite;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.hoverShadow;
});
var UserRatingRow = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "ReviewTile__UserRatingRow"
})(["display:flex;flex-direction:row;justify-content:space-between;font-size:small;"]);
var ReviewHeading = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].p.withConfig({
  displayName: "ReviewTile__ReviewHeading"
})(["font-weight:bold;font-size:medium;padding:1rem 0 1rem 0;"]);
var Response = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "ReviewTile__Response"
})(["background-color:", ";padding:0.7rem;margin:0.7rem;box-shadow:0 0 6px ", ""], function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.tertiary;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.hoverShadow;
});
var Recommend = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "ReviewTile__Recommend"
})(["padding:0.7rem 0.7rem 0 0.7rem;font-style:italic;"]);
ReviewTile.propTypes = {
  addHelpVote: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func.isRequired),
  reportReview: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func.isRequired),
  keyword: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string),
  review: prop_types__WEBPACK_IMPORTED_MODULE_10___default().shape().isRequired
};
ReviewTile.defaultProps = {
  keyword: null
};

/***/ }),

/***/ "./client/src/components/Ratings/Review/UserInteraction.jsx":
/*!******************************************************************!*\
  !*** ./client/src/components/Ratings/Review/UserInteraction.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Helpfulness)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Contexts_ClickTracker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Contexts/ClickTracker */ "./client/src/contexts/ClickTracker.jsx");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _contexts_Shared_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../contexts/Shared.styled */ "./client/src/contexts/Shared.styled.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function Helpfulness(_ref) {
  var addHelpVote = _ref.addHelpVote,
      helpfulness = _ref.helpfulness,
      reportReview = _ref.reportReview,
      reviewId = _ref.reviewId;

  var _useTracking = (0,_Contexts_ClickTracker__WEBPACK_IMPORTED_MODULE_1__["default"])({
    widget: 'User_Interaction_Review'
  }),
      trackEvent = _useTracking.trackEvent;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(helpfulness),
      _useState2 = _slicedToArray(_useState, 2),
      helpCount = _useState2[0],
      setHelpCount = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      voteLimiter = _useState4[0],
      setvoteLimiter = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState6 = _slicedToArray(_useState5, 2),
      reportLimiter = _useState6[0],
      setReportLimiter = _useState6[1];

  var vote = function vote() {
    if (voteLimiter) {
      trackEvent({
        element: 'vote_for_helpful_review'
      });
      addHelpVote(reviewId);
      setHelpCount(helpCount + 1);
    }

    setvoteLimiter(voteLimiter && false);
  };

  var report = function report() {
    if (reportLimiter) {
      trackEvent({
        element: 'report_a_review'
      });
      reportReview(reviewId);
    }

    setReportLimiter(reportLimiter && false);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(HelpfulnessContainer, {
    children: ['Helpful? ', voteLimiter ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_contexts_Shared_styled__WEBPACK_IMPORTED_MODULE_2__.ClickableText, {
      onClick: vote,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdOutlineThumbUp, {})
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ClickableText2, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdThumbUp, {})
    }), "(", helpCount, ")", '    |   ', reportLimiter ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_contexts_Shared_styled__WEBPACK_IMPORTED_MODULE_2__.ClickableText, {
      onClick: report,
      children: "Report"
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      children: " Reported"
    })]
  });
} // Style components

var HelpfulnessContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "UserInteraction__HelpfulnessContainer"
})(["display:flex;flex-direction:row;gap:0.7rem;"]);
var ClickableText2 = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(_contexts_Shared_styled__WEBPACK_IMPORTED_MODULE_2__.ClickableText).withConfig({
  displayName: "UserInteraction__ClickableText2"
})(["cursor:pointer;"]);
Helpfulness.propTypes = {
  helpfulness: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number.isRequired),
  reviewId: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number.isRequired),
  addHelpVote: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func.isRequired),
  reportReview: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func.isRequired)
};

/***/ })

}]);
//# sourceMappingURL=client_src_components_Ratings_Review_ReviewTile_jsx.bundle.js.map