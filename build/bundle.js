/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar React = __webpack_require__(2),\n    Counter = __webpack_require__(3);\n\nfunction RenderCounter(selector) {\n    React.render(React.createElement(Counter, null), document.querySelectorAll(selector)[0]);\n}\n\nmodule.exports = RenderCounter;\nwindow.RenderCounter = RenderCounter;//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qc3g/MGQ1OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQU0sS0FBSyxHQUFHLG1CQUFPLENBQUMsQ0FBTyxDQUFDO0lBQ3hCLE9BQU8sR0FBRyxtQkFBTyxDQUFDLENBQVcsQ0FBQyxDQUFDOztBQUVyQyxTQUFTLGFBQWEsQ0FBQyxRQUFRLEVBQUU7QUFDN0IsU0FBSyxDQUFDLE1BQU0sQ0FDUixvQkFBQyxPQUFPLE9BQUcsRUFDWCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3pDLENBQUM7Q0FDTDs7QUFFRCxNQUFNLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztBQUMvQixNQUFNLENBQUMsYUFBYSxHQUFHLGFBQWEiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpLFxuICAgICAgQ291bnRlciA9IHJlcXVpcmUoJy4vQ291bnRlcicpO1xuXG5mdW5jdGlvbiBSZW5kZXJDb3VudGVyKHNlbGVjdG9yKSB7XG4gICAgUmVhY3QucmVuZGVyKFxuICAgICAgICA8Q291bnRlciAvPixcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilbMF1cbiAgICApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlbmRlckNvdW50ZXI7XG53aW5kb3cuUmVuZGVyQ291bnRlciA9IFJlbmRlckNvdW50ZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tYWluLmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("module.exports = React;//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiPzlkZTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIlJlYWN0XCJcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar React = __webpack_require__(2);\n\nvar Counter = React.createClass({\n    displayName: 'Counter',\n\n    render: function render() {\n        return React.createElement(\n            'b',\n            null,\n            'Hello'\n        );\n    }\n});\n\nmodule.exports = Counter;//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ291bnRlci5qc3g/ODMyYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQU0sS0FBSyxHQUFHLG1CQUFPLENBQUMsQ0FBTyxDQUFDLENBQUM7O0FBRS9CLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUM5QixVQUFNLEVBQUUsa0JBQVk7QUFDaEIsZUFDSTs7OztTQUFZLENBQ2Q7S0FDTDtDQUNKLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8iLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5jb25zdCBDb3VudGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGI+SGVsbG88L2I+XG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ291bnRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL0NvdW50ZXIuanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);