/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* no static exports found */
/* all exports used */
/*!*********************************!*\
  !*** ./lib/components/Index.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"react\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"react-dom\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _App = __webpack_require__(/*! ./App */ 3);\n\nvar _App2 = _interopRequireDefault(_App);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9saWIvY29tcG9uZW50cy9JbmRleC5qcz8yNGY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xuXG5SZWFjdERvbS5yZW5kZXIoXG4gIDxBcHAgLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvY29tcG9uZW50cy9JbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/* no static exports found */
/* all exports used */
/*!***************************!*\
  !*** ./lib/testData.json ***!
  \***************************/
/***/ (function(module, exports) {

eval("module.exports = {\"data\":{\"articles\":[{\"id\":\"95c12a8f6c88953ca8f8a39da25546e6\",\"title\":\"Introducing React's Error Code System\",\"date\":\"Mon Jul 11 2016 00:00:00 GMT+0000 (UTC)\",\"authorId\":\"2c6aa2cfe3449467d329fa17d6ea230f\",\"body\":\"Building a better developer experience has been one of the things that React deeply cares about, and a crucial part of it is to detect anti-patterns/potential errors early and provide helpful error messages when things (may) go wrong. However, most of these only exist in development mode; in production, we avoid having extra expensive assertions and sending down full error messages in order to reduce the number of bytes sent over the wire.\"},{\"id\":\"cc7781c085cf37aabf120098085ff60c\",\"title\":\"Mixins Considered Harmful\",\"date\":\"Wed Jul 13 2016 00:00:00 GMT+0000 (UTC)\",\"authorId\":\"78ae672985c41fae0ecde0133f41bbfa\",\"body\":\"“How do I share the code between several components?” is one of the first questions that people ask when they learn React. Our answer has always been to use component composition for code reuse. You can define a component and use it in several other components. \\nIt is not always obvious how a certain pattern can be solved with composition. React is influenced by functional programming but it came into the field that was dominated by object-oriented libraries. It was hard for engineers both inside and outside of Facebook to give up on the patterns they were used to.\"},{\"id\":\"0a9afe5bb4ecbf4f7f1c77611e9bf1f9\",\"title\":\"Create Apps with No Configuration\",\"date\":\"Fri Jul 22 2016 00:00:00 GMT+0000 (UTC)\",\"authorId\":\"78ae672985c41fae0ecde0133f41bbfa\",\"body\":\"Create React App is a new officially supported way to create single-page React applications. It offers a modern build setup with no configuration. \\n\\nGetting Starte \\nInstallation \\nFirst, install the global package:\"},{\"id\":\"9b72140f27e62670dd7bdd1a9f61b48e\",\"title\":\"Relay: State of the State\",\"date\":\"Fri Aug 05 2016 00:00:00 GMT+0000 (UTC)\",\"authorId\":\"335fb02ec8f76c8515821ac9f266d276\",\"body\":\"This month marks a year since we released Relay and we'd like to share an update on the project and what's next. \\nA Year In Review \\nA year after launch, we're incredibly excited to see an active community forming around Relay and that companies such as Twitter are using Relay in production:\"},{\"id\":\"f4ab6de6e61c86f03f6fef46f7c407f1\",\"title\":\"React v15.5.0\",\"date\":\"Fri Apr 07 2017 00:00:00 GMT+0000 (UTC)\",\"authorId\":\"d85577ea34ae50f2dac5347b5219aa23\",\"body\":\"It's been exactly one year since the last breaking change to React. Our next major release, React 16, will include some exciting improvements, including a complete rewrite of React's internals. We take stability seriously, and are committed to bringing those improvements to all of our users with minimal effort.\\n To that end, today we're releasing React 15.5.0.\"}],\"authors\":[{\"id\":\"d85577ea34ae50f2dac5347b5219aa23\",\"firstName\":\"Andrew\",\"lastName\":\"Clark\",\"website\":\"https://twitter.com/acdlite\"},{\"id\":\"2c6aa2cfe3449467d329fa17d6ea230f\",\"firstName\":\"Keyan\",\"lastName\":\"Zhang\",\"website\":\"https://twitter.com/keyanzhang\"},{\"id\":\"78ae672985c41fae0ecde0133f41bbfa\",\"firstName\":\"Dan\",\"lastName\":\"Abramov\",\"website\":\"https://twitter.com/dan_abramov\"},{\"id\":\"335fb02ec8f76c8515821ac9f266d276\",\"firstName\":\"Joseph\",\"lastName\":\"Savona\",\"website\":\"https://twitter.com/en_JS\"}]}}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi90ZXN0RGF0YS5qc29uP2ZhYjkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XCJkYXRhXCI6e1wiYXJ0aWNsZXNcIjpbe1wiaWRcIjpcIjk1YzEyYThmNmM4ODk1M2NhOGY4YTM5ZGEyNTU0NmU2XCIsXCJ0aXRsZVwiOlwiSW50cm9kdWNpbmcgUmVhY3QncyBFcnJvciBDb2RlIFN5c3RlbVwiLFwiZGF0ZVwiOlwiTW9uIEp1bCAxMSAyMDE2IDAwOjAwOjAwIEdNVCswMDAwIChVVEMpXCIsXCJhdXRob3JJZFwiOlwiMmM2YWEyY2ZlMzQ0OTQ2N2QzMjlmYTE3ZDZlYTIzMGZcIixcImJvZHlcIjpcIkJ1aWxkaW5nIGEgYmV0dGVyIGRldmVsb3BlciBleHBlcmllbmNlIGhhcyBiZWVuIG9uZSBvZiB0aGUgdGhpbmdzIHRoYXQgUmVhY3QgZGVlcGx5IGNhcmVzIGFib3V0LCBhbmQgYSBjcnVjaWFsIHBhcnQgb2YgaXQgaXMgdG8gZGV0ZWN0IGFudGktcGF0dGVybnMvcG90ZW50aWFsIGVycm9ycyBlYXJseSBhbmQgcHJvdmlkZSBoZWxwZnVsIGVycm9yIG1lc3NhZ2VzIHdoZW4gdGhpbmdzIChtYXkpIGdvIHdyb25nLiBIb3dldmVyLCBtb3N0IG9mIHRoZXNlIG9ubHkgZXhpc3QgaW4gZGV2ZWxvcG1lbnQgbW9kZTsgaW4gcHJvZHVjdGlvbiwgd2UgYXZvaWQgaGF2aW5nIGV4dHJhIGV4cGVuc2l2ZSBhc3NlcnRpb25zIGFuZCBzZW5kaW5nIGRvd24gZnVsbCBlcnJvciBtZXNzYWdlcyBpbiBvcmRlciB0byByZWR1Y2UgdGhlIG51bWJlciBvZiBieXRlcyBzZW50IG92ZXIgdGhlIHdpcmUuXCJ9LHtcImlkXCI6XCJjYzc3ODFjMDg1Y2YzN2FhYmYxMjAwOTgwODVmZjYwY1wiLFwidGl0bGVcIjpcIk1peGlucyBDb25zaWRlcmVkIEhhcm1mdWxcIixcImRhdGVcIjpcIldlZCBKdWwgMTMgMjAxNiAwMDowMDowMCBHTVQrMDAwMCAoVVRDKVwiLFwiYXV0aG9ySWRcIjpcIjc4YWU2NzI5ODVjNDFmYWUwZWNkZTAxMzNmNDFiYmZhXCIsXCJib2R5XCI6XCLigJxIb3cgZG8gSSBzaGFyZSB0aGUgY29kZSBiZXR3ZWVuIHNldmVyYWwgY29tcG9uZW50cz/igJ0gaXMgb25lIG9mIHRoZSBmaXJzdCBxdWVzdGlvbnMgdGhhdCBwZW9wbGUgYXNrIHdoZW4gdGhleSBsZWFybiBSZWFjdC4gT3VyIGFuc3dlciBoYXMgYWx3YXlzIGJlZW4gdG8gdXNlIGNvbXBvbmVudCBjb21wb3NpdGlvbiBmb3IgY29kZSByZXVzZS4gWW91IGNhbiBkZWZpbmUgYSBjb21wb25lbnQgYW5kIHVzZSBpdCBpbiBzZXZlcmFsIG90aGVyIGNvbXBvbmVudHMuIFxcbkl0IGlzIG5vdCBhbHdheXMgb2J2aW91cyBob3cgYSBjZXJ0YWluIHBhdHRlcm4gY2FuIGJlIHNvbHZlZCB3aXRoIGNvbXBvc2l0aW9uLiBSZWFjdCBpcyBpbmZsdWVuY2VkIGJ5IGZ1bmN0aW9uYWwgcHJvZ3JhbW1pbmcgYnV0IGl0IGNhbWUgaW50byB0aGUgZmllbGQgdGhhdCB3YXMgZG9taW5hdGVkIGJ5IG9iamVjdC1vcmllbnRlZCBsaWJyYXJpZXMuIEl0IHdhcyBoYXJkIGZvciBlbmdpbmVlcnMgYm90aCBpbnNpZGUgYW5kIG91dHNpZGUgb2YgRmFjZWJvb2sgdG8gZ2l2ZSB1cCBvbiB0aGUgcGF0dGVybnMgdGhleSB3ZXJlIHVzZWQgdG8uXCJ9LHtcImlkXCI6XCIwYTlhZmU1YmI0ZWNiZjRmN2YxYzc3NjExZTliZjFmOVwiLFwidGl0bGVcIjpcIkNyZWF0ZSBBcHBzIHdpdGggTm8gQ29uZmlndXJhdGlvblwiLFwiZGF0ZVwiOlwiRnJpIEp1bCAyMiAyMDE2IDAwOjAwOjAwIEdNVCswMDAwIChVVEMpXCIsXCJhdXRob3JJZFwiOlwiNzhhZTY3Mjk4NWM0MWZhZTBlY2RlMDEzM2Y0MWJiZmFcIixcImJvZHlcIjpcIkNyZWF0ZSBSZWFjdCBBcHAgaXMgYSBuZXcgb2ZmaWNpYWxseSBzdXBwb3J0ZWQgd2F5IHRvIGNyZWF0ZSBzaW5nbGUtcGFnZSBSZWFjdCBhcHBsaWNhdGlvbnMuIEl0IG9mZmVycyBhIG1vZGVybiBidWlsZCBzZXR1cCB3aXRoIG5vIGNvbmZpZ3VyYXRpb24uIFxcblxcbkdldHRpbmcgU3RhcnRlIFxcbkluc3RhbGxhdGlvbiBcXG5GaXJzdCwgaW5zdGFsbCB0aGUgZ2xvYmFsIHBhY2thZ2U6XCJ9LHtcImlkXCI6XCI5YjcyMTQwZjI3ZTYyNjcwZGQ3YmRkMWE5ZjYxYjQ4ZVwiLFwidGl0bGVcIjpcIlJlbGF5OiBTdGF0ZSBvZiB0aGUgU3RhdGVcIixcImRhdGVcIjpcIkZyaSBBdWcgMDUgMjAxNiAwMDowMDowMCBHTVQrMDAwMCAoVVRDKVwiLFwiYXV0aG9ySWRcIjpcIjMzNWZiMDJlYzhmNzZjODUxNTgyMWFjOWYyNjZkMjc2XCIsXCJib2R5XCI6XCJUaGlzIG1vbnRoIG1hcmtzIGEgeWVhciBzaW5jZSB3ZSByZWxlYXNlZCBSZWxheSBhbmQgd2UnZCBsaWtlIHRvIHNoYXJlIGFuIHVwZGF0ZSBvbiB0aGUgcHJvamVjdCBhbmQgd2hhdCdzIG5leHQuIFxcbkEgWWVhciBJbiBSZXZpZXcgXFxuQSB5ZWFyIGFmdGVyIGxhdW5jaCwgd2UncmUgaW5jcmVkaWJseSBleGNpdGVkIHRvIHNlZSBhbiBhY3RpdmUgY29tbXVuaXR5IGZvcm1pbmcgYXJvdW5kIFJlbGF5IGFuZCB0aGF0IGNvbXBhbmllcyBzdWNoIGFzIFR3aXR0ZXIgYXJlIHVzaW5nIFJlbGF5IGluIHByb2R1Y3Rpb246XCJ9LHtcImlkXCI6XCJmNGFiNmRlNmU2MWM4NmYwM2Y2ZmVmNDZmN2M0MDdmMVwiLFwidGl0bGVcIjpcIlJlYWN0IHYxNS41LjBcIixcImRhdGVcIjpcIkZyaSBBcHIgMDcgMjAxNyAwMDowMDowMCBHTVQrMDAwMCAoVVRDKVwiLFwiYXV0aG9ySWRcIjpcImQ4NTU3N2VhMzRhZTUwZjJkYWM1MzQ3YjUyMTlhYTIzXCIsXCJib2R5XCI6XCJJdCdzIGJlZW4gZXhhY3RseSBvbmUgeWVhciBzaW5jZSB0aGUgbGFzdCBicmVha2luZyBjaGFuZ2UgdG8gUmVhY3QuIE91ciBuZXh0IG1ham9yIHJlbGVhc2UsIFJlYWN0IDE2LCB3aWxsIGluY2x1ZGUgc29tZSBleGNpdGluZyBpbXByb3ZlbWVudHMsIGluY2x1ZGluZyBhIGNvbXBsZXRlIHJld3JpdGUgb2YgUmVhY3QncyBpbnRlcm5hbHMuIFdlIHRha2Ugc3RhYmlsaXR5IHNlcmlvdXNseSwgYW5kIGFyZSBjb21taXR0ZWQgdG8gYnJpbmdpbmcgdGhvc2UgaW1wcm92ZW1lbnRzIHRvIGFsbCBvZiBvdXIgdXNlcnMgd2l0aCBtaW5pbWFsIGVmZm9ydC5cXG4gVG8gdGhhdCBlbmQsIHRvZGF5IHdlJ3JlIHJlbGVhc2luZyBSZWFjdCAxNS41LjAuXCJ9XSxcImF1dGhvcnNcIjpbe1wiaWRcIjpcImQ4NTU3N2VhMzRhZTUwZjJkYWM1MzQ3YjUyMTlhYTIzXCIsXCJmaXJzdE5hbWVcIjpcIkFuZHJld1wiLFwibGFzdE5hbWVcIjpcIkNsYXJrXCIsXCJ3ZWJzaXRlXCI6XCJodHRwczovL3R3aXR0ZXIuY29tL2FjZGxpdGVcIn0se1wiaWRcIjpcIjJjNmFhMmNmZTM0NDk0NjdkMzI5ZmExN2Q2ZWEyMzBmXCIsXCJmaXJzdE5hbWVcIjpcIktleWFuXCIsXCJsYXN0TmFtZVwiOlwiWmhhbmdcIixcIndlYnNpdGVcIjpcImh0dHBzOi8vdHdpdHRlci5jb20va2V5YW56aGFuZ1wifSx7XCJpZFwiOlwiNzhhZTY3Mjk4NWM0MWZhZTBlY2RlMDEzM2Y0MWJiZmFcIixcImZpcnN0TmFtZVwiOlwiRGFuXCIsXCJsYXN0TmFtZVwiOlwiQWJyYW1vdlwiLFwid2Vic2l0ZVwiOlwiaHR0cHM6Ly90d2l0dGVyLmNvbS9kYW5fYWJyYW1vdlwifSx7XCJpZFwiOlwiMzM1ZmIwMmVjOGY3NmM4NTE1ODIxYWM5ZjI2NmQyNzZcIixcImZpcnN0TmFtZVwiOlwiSm9zZXBoXCIsXCJsYXN0TmFtZVwiOlwiU2F2b25hXCIsXCJ3ZWJzaXRlXCI6XCJodHRwczovL3R3aXR0ZXIuY29tL2VuX0pTXCJ9XX19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvdGVzdERhdGEuanNvblxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/* no static exports found */
/* all exports used */
/*!************************!*\
  !*** ./lib/DataApi.js ***!
  \************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar DataApi = function () {\n  function DataApi(rawData) {\n    _classCallCheck(this, DataApi);\n\n    this.rawData = rawData;\n  }\n\n  _createClass(DataApi, [{\n    key: \"mapIntoObject\",\n    value: function mapIntoObject(arr) {\n      return arr.reduce(function (acc, curr) {\n        acc[curr.id] = curr;\n        return acc;\n      }, {});\n    }\n  }, {\n    key: \"getArticles\",\n    value: function getArticles() {\n      return this.mapIntoObject(this.rawData.articles);\n    }\n  }, {\n    key: \"getAuthors\",\n    value: function getAuthors() {\n      return this.mapIntoObject(this.rawData.authors);\n    }\n  }]);\n\n  return DataApi;\n}();\n\nexports.default = DataApi;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9saWIvRGF0YUFwaS5qcz9jMDQxIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIERhdGFBcGkge1xuICBjb25zdHJ1Y3RvcihyYXdEYXRhKSB7XG4gICAgdGhpcy5yYXdEYXRhID0gcmF3RGF0YTtcbiAgfVxuXG4gIG1hcEludG9PYmplY3QoYXJyKSB7XG4gICAgcmV0dXJuIGFyci5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xuICAgICAgYWNjW2N1cnIuaWRdID0gY3VycjtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuICB9XG5cbiAgZ2V0QXJ0aWNsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwSW50b09iamVjdCh0aGlzLnJhd0RhdGEuYXJ0aWNsZXMpO1xuICB9XG5cbiAgZ2V0QXV0aG9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXBJbnRvT2JqZWN0KHRoaXMucmF3RGF0YS5hdXRob3JzKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhQXBpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvRGF0YUFwaS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/* no static exports found */
/* all exports used */
/*!*******************************!*\
  !*** ./lib/components/App.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"react\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _ArticleList = __webpack_require__(/*! ./ArticleList */ 5);\n\nvar _ArticleList2 = _interopRequireDefault(_ArticleList);\n\nvar _DataApi = __webpack_require__(/*! ../DataApi */ 2);\n\nvar _DataApi2 = _interopRequireDefault(_DataApi);\n\nvar _testData = __webpack_require__(/*! ../testData */ 1);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar api = new _DataApi2.default(_testData.data);\n\nvar App = function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));\n\n    _this.articleActions = {\n      lookupAuthor: function lookupAuthor(authorId) {\n        return _this.state.authors[authorId];\n      }\n    };\n\n    _this.state = {\n      articles: api.getArticles(),\n      authors: api.getAuthors()\n    };\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(_ArticleList2.default, {\n        articles: this.state.articles,\n        articleActions: this.articleActions\n      });\n    }\n  }]);\n\n  return App;\n}(_react2.default.Component);\n\nexports.default = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9saWIvY29tcG9uZW50cy9BcHAuanM/ZmNjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQXJ0aWNsZUxpc3QgZnJvbSAnLi9BcnRpY2xlTGlzdCc7XG5cbmltcG9ydCBEYXRhQXBpIGZyb20gJy4uL0RhdGFBcGknO1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4uL3Rlc3REYXRhJztcblxuY29uc3QgYXBpID0gbmV3IERhdGFBcGkoZGF0YSk7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFydGljbGVzOiBhcGkuZ2V0QXJ0aWNsZXMoKSxcbiAgICAgIGF1dGhvcnM6IGFwaS5nZXRBdXRob3JzKCksXG4gICAgfTtcbiAgfVxuICBhcnRpY2xlQWN0aW9ucyA9IHtcbiAgICBsb29rdXBBdXRob3I6IGF1dGhvcklkID0+IHRoaXMuc3RhdGUuYXV0aG9yc1thdXRob3JJZF0sXG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEFydGljbGVMaXN0XG4gICAgICAgIGFydGljbGVzPXt0aGlzLnN0YXRlLmFydGljbGVzfVxuICAgICAgICBhcnRpY2xlQWN0aW9ucz17dGhpcy5hcnRpY2xlQWN0aW9uc31cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliL2NvbXBvbmVudHMvQXBwLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBUUE7QUFBQTtBQUFBO0FBREE7QUFDQTtBQU5BO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFNQTtBQUNBOzs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7Ozs7QUFsQkE7QUFDQTtBQW9CQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/* no static exports found */
/* all exports used */
/*!***********************************!*\
  !*** ./lib/components/Article.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"react\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar styles = {\n  article: {\n    paddingBottom: 10,\n    borderBottomStyle: 'solid',\n    borderBottomColor: '#aaa',\n    borderBottomWidth: 1,\n    marginBottom: 10\n  },\n  title: {\n    fontWeight: 'bold'\n  },\n  date: {\n    fontSize: '0.8em',\n    color: '#888'\n  },\n  author: {\n    paddingTop: 10,\n    paddingBottom: 10\n  },\n  body: {\n    paddingLeft: 20\n  }\n};\nvar dateDisplay = function dateDisplay(dateString) {\n  return new Date(dateString).toDateString();\n};\n\nvar Article = function Article(props) {\n  var article = props.article,\n      actions = props.actions;\n\n  var author = actions.lookupAuthor(article.authorId);\n  return _react2.default.createElement(\n    'div',\n    { style: styles.article },\n    _react2.default.createElement(\n      'div',\n      { style: styles.title },\n      article.title\n    ),\n    _react2.default.createElement(\n      'div',\n      { style: styles.date },\n      dateDisplay(article.date)\n    ),\n    _react2.default.createElement(\n      'div',\n      { style: styles.author },\n      _react2.default.createElement(\n        'a',\n        { href: author.website },\n        author.firstName,\n        ' ',\n        author.lastName\n      )\n    ),\n    _react2.default.createElement(\n      'div',\n      { style: styles.body },\n      article.body\n    )\n  );\n};\n\nexports.default = Article;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9saWIvY29tcG9uZW50cy9BcnRpY2xlLmpzPzI1OWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3Qgc3R5bGVzID0ge1xuICBhcnRpY2xlOiB7XG4gICAgcGFkZGluZ0JvdHRvbTogMTAsXG4gICAgYm9yZGVyQm90dG9tU3R5bGU6ICdzb2xpZCcsXG4gICAgYm9yZGVyQm90dG9tQ29sb3I6ICcjYWFhJyxcbiAgICBib3JkZXJCb3R0b21XaWR0aDogMSxcbiAgICBtYXJnaW5Cb3R0b206IDEwLFxuICB9LFxuICB0aXRsZToge1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgfSxcbiAgZGF0ZToge1xuICAgIGZvbnRTaXplOiAnMC44ZW0nLFxuICAgIGNvbG9yOiAnIzg4OCcsXG4gIH0sXG4gIGF1dGhvcjoge1xuICAgIHBhZGRpbmdUb3A6IDEwLFxuICAgIHBhZGRpbmdCb3R0b206IDEwLFxuICB9LFxuICBib2R5OiB7XG4gICAgcGFkZGluZ0xlZnQ6IDIwLFxuICB9XG59O1xuY29uc3QgZGF0ZURpc3BsYXkgPSAoZGF0ZVN0cmluZykgPT5cbiAgbmV3IERhdGUoZGF0ZVN0cmluZykudG9EYXRlU3RyaW5nKCk7XG5cbmNvbnN0IEFydGljbGUgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBhcnRpY2xlLCBhY3Rpb25zIH0gPSBwcm9wcztcbiAgY29uc3QgYXV0aG9yID0gYWN0aW9ucy5sb29rdXBBdXRob3IoYXJ0aWNsZS5hdXRob3JJZCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGVzLmFydGljbGV9PlxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnRpdGxlfT57YXJ0aWNsZS50aXRsZX08L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5kYXRlfT5cbiAgICAgICAge2RhdGVEaXNwbGF5KGFydGljbGUuZGF0ZSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5hdXRob3J9PlxuICAgICAgICA8YSBocmVmPXthdXRob3Iud2Vic2l0ZX0+XG4gICAgICAgICAge2F1dGhvci5maXJzdE5hbWV9IHthdXRob3IubGFzdE5hbWV9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmJvZHl9PnthcnRpY2xlLmJvZHl9PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi9jb21wb25lbnRzL0FydGljbGUuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFuQkE7QUF1QkE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZBO0FBYUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/* no static exports found */
/* all exports used */
/*!***************************************!*\
  !*** ./lib/components/ArticleList.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"react\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Article = __webpack_require__(/*! ./Article */ 4);\n\nvar _Article2 = _interopRequireDefault(_Article);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ArticleList = function ArticleList(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    Object.values(props.articles).map(function (article) {\n      return _react2.default.createElement(_Article2.default, {\n        key: article.id,\n        article: article,\n        actions: props.articleActions\n      });\n    })\n  );\n};\n\nexports.default = ArticleList;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9saWIvY29tcG9uZW50cy9BcnRpY2xlTGlzdC5qcz9jZDdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBBcnRpY2xlIGZyb20gJy4vQXJ0aWNsZSc7XG5cbmNvbnN0IEFydGljbGVMaXN0ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtPYmplY3QudmFsdWVzKHByb3BzLmFydGljbGVzKS5tYXAoYXJ0aWNsZSA9PlxuICAgICAgICA8QXJ0aWNsZVxuICAgICAgICAgIGtleT17YXJ0aWNsZS5pZH1cbiAgICAgICAgICBhcnRpY2xlPXthcnRpY2xlfVxuICAgICAgICAgIGFjdGlvbnM9e3Byb3BzLmFydGljbGVBY3Rpb25zfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVMaXN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi9jb21wb25lbnRzL0FydGljbGVMaXN0LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFEQTtBQVVBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/* no static exports found */
/* all exports used */
/*!******************************************************!*\
  !*** multi babel-polyfill ./lib/components/Index.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

(function webpackMissingModule() { throw new Error("Cannot find module \"babel-polyfill\""); }());
module.exports = __webpack_require__(/*! ./lib/components/Index.js */0);


/***/ })
/******/ ]);