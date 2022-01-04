"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./styles/palette.ts
var palette = __webpack_require__(760);
;// CONCATENATED MODULE: ./components/Header.tsx




const Container = (external_styled_components_default()).div`
    display: flex;
    align-items: center;
    width: 100%auto;
    height: 52px;
    padding: 0 12px;
    border-bottom: 1px solid ${palette/* default.gray */.Z.gray};
    h1 {
        font-size: 21px;
    }
`;
const Header_Header = ()=>{
    return(/*#__PURE__*/ _jsx(Container, {
        children: /*#__PURE__*/ _jsx("h1", {
            children: "정영찬의 TodoList"
        })
    }));
};
/* harmony default export */ const components_Header = ((/* unused pure expression or super */ null && (Header_Header)));

;// CONCATENATED MODULE: external "styled-reset"
const external_styled_reset_namespaceObject = require("styled-reset");
var external_styled_reset_default = /*#__PURE__*/__webpack_require__.n(external_styled_reset_namespaceObject);
;// CONCATENATED MODULE: ./styles/GlobalStyle.ts


const globalStyle = external_styled_components_.css`
    ${(external_styled_reset_default())};
    * {
        box-sizing: border-box;
    }
    body{
        font-family: Noto Sans, Noto Sans KR;
    }
`;
const GlobalStyle_GlobalStyle = external_styled_components_.createGlobalStyle`
    ${globalStyle}
`;
/* harmony default export */ const styles_GlobalStyle = ((/* unused pure expression or super */ null && (GlobalStyle_GlobalStyle)));

;// CONCATENATED MODULE: ./pages/_app.tsx



const app = ({ Component , pageProps  })=>{
    return(/*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(GlobalStyle, {
            }),
            /*#__PURE__*/ _jsx(Header, {
            }),
            /*#__PURE__*/ _jsx(Component, {
                ...pageProps
            })
        ]
    }));
};


/***/ }),

/***/ 760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    red: "#FFAFBO",
    orange: "#FFC282",
    yellow: "#FCFFB0",
    green: "#E2FFAF",
    blue: "#AEE4FF",
    navy: "#B5C7ED",
    gray: "#E5E5E5",
    deep_red: "#F3456",
    deep_green: "#47E774"
});


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(728));
module.exports = __webpack_exports__;

})();