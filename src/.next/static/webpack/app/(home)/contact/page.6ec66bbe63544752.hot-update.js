"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(home)/contact/page",{

/***/ "(app-pages-browser)/./src/components/cell/Input.jsx":
/*!***************************************!*\
  !*** ./src/components/cell/Input.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"(app-pages-browser)/./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* eslint-disable react/display-name */ \n\n\nconst Input = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(_c = (param, ref)=>{\n    let { label, placeholder, onChange, className, type = \"text\", disable = false, error, ...rest } = param;\n    // const inputRef = React.useRef();\n    // useImperativeHandle(ref, () => ({\n    // \tfocus: () => {\n    // \t\tinputRef.current.focus();\n    // \t},\n    // \tclear: () => {\n    // \t\tinputRef.current.value = '';\n    // \t},\n    // }));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-start items-start\",\n        children: [\n            label && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: label\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\14022287\\\\Desktop\\\\profile\\\\patience_alchemy\\\\src\\\\components\\\\cell\\\\Input.jsx\",\n                lineNumber: 20,\n                columnNumber: 20\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: type,\n                placeholder: placeholder,\n                onChange: onChange,\n                className: className,\n                disable: disable,\n                ref: ref,\n                ...rest\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\14022287\\\\Desktop\\\\profile\\\\patience_alchemy\\\\src\\\\components\\\\cell\\\\Input.jsx\",\n                lineNumber: 21,\n                columnNumber: 10\n            }, undefined),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: error\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\14022287\\\\Desktop\\\\profile\\\\patience_alchemy\\\\src\\\\components\\\\cell\\\\Input.jsx\",\n                lineNumber: 22,\n                columnNumber: 20\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\14022287\\\\Desktop\\\\profile\\\\patience_alchemy\\\\src\\\\components\\\\cell\\\\Input.jsx\",\n        lineNumber: 19,\n        columnNumber: 7\n    }, undefined);\n});\n_c1 = Input;\nInput.propTypes = {\n    label: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),\n    placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),\n    onChange: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,\n    className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),\n    type: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf([\n        \"text\",\n        \"email\",\n        \"password\",\n        \"number\"\n    ]),\n    disabled: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),\n    error: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)\n};\nInput.defaultProps = {\n    label: \"\",\n    placeholder: \"\",\n    className: \"\",\n    type: \"text\",\n    disabled: false,\n    error: \"\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\nvar _c, _c1;\n$RefreshReg$(_c, \"Input$forwardRef\");\n$RefreshReg$(_c1, \"Input\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NlbGwvSW5wdXQuanN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHFDQUFxQztBQUN5QjtBQUMzQjtBQUduQyxNQUFNSSxzQkFBUUYsaURBQVVBLE1BQUMsUUFBOEZHO1FBQTdGLEVBQUNDLEtBQUssRUFBR0MsV0FBVyxFQUFHQyxRQUFRLEVBQUdDLFNBQVMsRUFBR0MsT0FBSyxNQUFNLEVBQUVDLFVBQVEsS0FBSyxFQUFHQyxLQUFLLEVBQUcsR0FBR0MsTUFBSztJQUNsSCxtQ0FBbUM7SUFDbkMsb0NBQW9DO0lBQ3RDLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsTUFBTTtJQUNOLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsTUFBTTtJQUNOLE9BQU87SUFHTCxxQkFDRyw4REFBQ0M7UUFBSUwsV0FBVTs7WUFDWEgsdUJBQVMsOERBQUNBOzBCQUFPQTs7Ozs7OzBCQUNsQiw4REFBQ1M7Z0JBQU1MLE1BQU1BO2dCQUFNSCxhQUFhQTtnQkFBYUMsVUFBVUE7Z0JBQVVDLFdBQVdBO2dCQUFXRSxTQUFTQTtnQkFBU04sS0FBS0E7Z0JBQU0sR0FBR1EsSUFBSTs7Ozs7O1lBQzFIRCx1QkFBUyw4REFBQ0k7MEJBQU1KOzs7Ozs7Ozs7Ozs7QUFJMUI7O0FBRUFSLE1BQU1hLFNBQVMsR0FBRztJQUNmWCxPQUFPSCwwREFBZ0I7SUFDdkJJLGFBQWFKLDBEQUFnQjtJQUM3QkssVUFBVUwsd0RBQWMsQ0FBQ2lCLFVBQVU7SUFDbkNYLFdBQVdOLDBEQUFnQjtJQUMzQk8sTUFBTVAsdURBQWUsQ0FBQztRQUFDO1FBQVE7UUFBUztRQUFZO0tBQVM7SUFDN0RtQixVQUFVbkIsd0RBQWM7SUFDeEJTLE9BQU9ULDBEQUFnQjtBQUMxQjtBQUVBQyxNQUFNb0IsWUFBWSxHQUFHO0lBQ2xCbEIsT0FBTztJQUNQQyxhQUFhO0lBQ2JFLFdBQVc7SUFDWEMsTUFBTTtJQUNOWSxVQUFVO0lBQ1ZWLE9BQU87QUFDVjtBQUVBLCtEQUFlUixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NlbGwvSW5wdXQuanN4PzIxNDgiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZGlzcGxheS1uYW1lICovXHJcbmltcG9ydCBSZWFjdCAsIHt1c2VJbXBlcmF0aXZlSGFuZGxlLCBmb3J3YXJkUmVmfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcblxyXG5jb25zdCBJbnB1dCA9IGZvcndhcmRSZWYoKHtsYWJlbCAsIHBsYWNlaG9sZGVyICwgb25DaGFuZ2UgLCBjbGFzc05hbWUgLCB0eXBlPSd0ZXh0JywgZGlzYWJsZT1mYWxzZSAsIGVycm9yICwgLi4ucmVzdH0sIHJlZik9PntcclxuICAgLy8gY29uc3QgaW5wdXRSZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuICAgLy8gdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+ICh7XHJcblx0Ly8gXHRmb2N1czogKCkgPT4ge1xyXG5cdC8vIFx0XHRpbnB1dFJlZi5jdXJyZW50LmZvY3VzKCk7XHJcblx0Ly8gXHR9LFxyXG5cdC8vIFx0Y2xlYXI6ICgpID0+IHtcclxuXHQvLyBcdFx0aW5wdXRSZWYuY3VycmVudC52YWx1ZSA9ICcnO1xyXG5cdC8vIFx0fSxcclxuXHQvLyB9KSk7XHJcblxyXG5cclxuICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXN0YXJ0JyA+XHJcbiAgICAgICAgIHtsYWJlbCAmJiA8bGFiZWw+e2xhYmVsfTwvbGFiZWw+fVxyXG4gICAgICAgICA8aW5wdXQgdHlwZT17dHlwZX0gcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSBvbkNoYW5nZT17b25DaGFuZ2V9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBkaXNhYmxlPXtkaXNhYmxlfSByZWY9e3JlZn0gey4uLnJlc3R9Lz5cclxuICAgICAgICAge2Vycm9yICYmIDxzcGFuPntlcnJvcn08L3NwYW4+fVxyXG4gICAgICA8L2Rpdj5cclxuICAgKVxyXG4gICBcclxufSlcclxuXHJcbklucHV0LnByb3BUeXBlcyA9IHtcclxuICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICB0eXBlOiBQcm9wVHlwZXMub25lT2YoWyd0ZXh0JywgJ2VtYWlsJywgJ3Bhc3N3b3JkJywgJ251bWJlciddKSxcclxuICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICBlcnJvcjogUHJvcFR5cGVzLnN0cmluZyxcclxufVxyXG5cclxuSW5wdXQuZGVmYXVsdFByb3BzID0ge1xyXG4gICBsYWJlbDogJycsXHJcbiAgIHBsYWNlaG9sZGVyOiAnJyxcclxuICAgY2xhc3NOYW1lOiAnJyxcclxuICAgdHlwZTogJ3RleHQnLFxyXG4gICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgIGVycm9yOiAnJyxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUltcGVyYXRpdmVIYW5kbGUiLCJmb3J3YXJkUmVmIiwiUHJvcFR5cGVzIiwiSW5wdXQiLCJyZWYiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJjbGFzc05hbWUiLCJ0eXBlIiwiZGlzYWJsZSIsImVycm9yIiwicmVzdCIsImRpdiIsImlucHV0Iiwic3BhbiIsInByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwib25lT2YiLCJkaXNhYmxlZCIsImJvb2wiLCJkZWZhdWx0UHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/cell/Input.jsx\n"));

/***/ })

});