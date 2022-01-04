"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./styles/palette.ts
var palette = __webpack_require__(760);
;// CONCATENATED MODULE: ./components/TodoList.tsx




const Container = (external_styled_components_default()).div`
    width: 100%;

    .todo-list-header{
        padding: 12px;
        border-bottom: 1px solid ${palette/* default.gray */.Z.gray};

        .todo-list-last-todo {
            font-size: 14px;
            span {
                margin-left: 8px;
            }
        }
    }
`;
const TodoList = ({ todos  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(Container, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "todo-list-header",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "todo-list-last-todo",
                children: [
                    "남은 TODO",
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        children: [
                            todos.length,
                            "개"
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const components_TodoList = (TodoList);

;// CONCATENATED MODULE: ./pages/index.tsx



//* todos 예시 파일 작성
const todos = [
    {
        id: 1,
        text: "알바 갔다오기",
        color: "red",
        checked: false
    },
    {
        id: 2,
        text: "마트가서 장보기",
        color: "orange",
        checked: false
    },
    {
        id: 3,
        text: "공부하기",
        color: "yellow",
        checked: true
    },
    {
        id: 4,
        text: "과제 제출하기",
        color: "green",
        checked: false
    },
    {
        id: 5,
        text: "운동하기",
        color: "blue",
        checked: false
    },
    {
        id: 6,
        text: "일찍 자기",
        color: "navy",
        checked: false
    }, 
];
const app = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(components_TodoList, {
        todos: todos,
        children: " "
    }));
};
/* harmony default export */ const pages = (app);


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
var __webpack_exports__ = (__webpack_exec__(495));
module.exports = __webpack_exports__;

})();