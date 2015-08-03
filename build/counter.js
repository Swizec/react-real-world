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

	eval("'use strict';\n\nvar React = __webpack_require__(2),\n    Counter = __webpack_require__(3);\n\nfunction RenderCounter(selector) {\n    React.render(React.createElement(Counter, null), document.querySelectorAll(selector)[0]);\n}\n\nif (typeof jQuery !== 'undefined') {\n    (function ($) {\n        var pluginName = \"clickCounter\",\n            defaults = {};\n\n        function Plugin(element, options) {\n            this.element = element;\n            this.settings = $.extend({}, defaults, options);\n            this._defaults = defaults;\n            this._name = pluginName;\n            this.init();\n        }\n\n        $.extend(Plugin.prototype, {\n            init: function init() {\n                //console.log(\"Hello init\", this.element);\n                React.render(React.createElement(Counter, null), this.element);\n            }\n        });\n\n        $.fn[pluginName] = function (options) {\n            return this.each(function () {\n                if (!$.data(this, 'plugin_' + pluginName)) {\n                    $.data(this, 'plugin_' + pluginName, new Plugin(this, options));\n                }\n            });\n        };\n    })(jQuery);\n}\n\nmodule.exports = RenderCounter;\nwindow.RenderCounter = RenderCounter;//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qc3g/MGQ1OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQU0sS0FBSyxHQUFHLG1CQUFPLENBQUMsQ0FBTyxDQUFDO0lBQ3hCLE9BQU8sR0FBRyxtQkFBTyxDQUFDLENBQVcsQ0FBQyxDQUFDOztBQUVyQyxTQUFTLGFBQWEsQ0FBQyxRQUFRLEVBQUU7QUFDN0IsU0FBSyxDQUFDLE1BQU0sQ0FDUixvQkFBQyxPQUFPLE9BQUcsRUFDWCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3pDLENBQUM7Q0FDTDs7QUFFRCxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtBQUMvQixLQUFDLFVBQVUsQ0FBQyxFQUFFO0FBQ1YsWUFBSSxVQUFVLEdBQUcsY0FBYztZQUMzQixRQUFRLEdBQUcsRUFDVixDQUFDOztBQUVOLGlCQUFTLE1BQU0sQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQzlCLGdCQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixnQkFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDaEQsZ0JBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0FBQzFCLGdCQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztBQUN4QixnQkFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2Y7O0FBRUQsU0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO0FBQ3ZCLGdCQUFJLEVBQUUsZ0JBQVk7O0FBRWQscUJBQUssQ0FBQyxNQUFNLENBQ1Isb0JBQUMsT0FBTyxPQUFHLEVBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FDZixDQUFDO2FBQ0w7U0FDSixDQUFDLENBQUM7O0FBRUgsU0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxVQUFVLE9BQU8sRUFBRTtBQUNsQyxtQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVk7QUFDekIsb0JBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLEdBQUMsVUFBVSxDQUFDLEVBQUU7QUFDckMscUJBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsR0FBQyxVQUFVLEVBQUUsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7aUJBQ2pFO2FBQ0osQ0FBQyxDQUFDO1NBQ04sQ0FBQztLQUNMLEVBQUUsTUFBTSxDQUFDLENBQUM7Q0FDZDs7QUFFRCxNQUFNLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztBQUMvQixNQUFNLENBQUMsYUFBYSxHQUFHLGFBQWEiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpLFxuICAgICAgQ291bnRlciA9IHJlcXVpcmUoJy4vQ291bnRlcicpO1xuXG5mdW5jdGlvbiBSZW5kZXJDb3VudGVyKHNlbGVjdG9yKSB7XG4gICAgUmVhY3QucmVuZGVyKFxuICAgICAgICA8Q291bnRlciAvPixcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilbMF1cbiAgICApO1xufVxuXG5pZiAodHlwZW9mIGpRdWVyeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAoZnVuY3Rpb24gKCQpIHtcbiAgICAgICAgdmFyIHBsdWdpbk5hbWUgPSBcImNsaWNrQ291bnRlclwiLFxuICAgICAgICAgICAgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIFBsdWdpbihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLl9kZWZhdWx0cyA9IGRlZmF1bHRzO1xuICAgICAgICAgICAgdGhpcy5fbmFtZSA9IHBsdWdpbk5hbWU7XG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQuZXh0ZW5kKFBsdWdpbi5wcm90b3R5cGUsIHtcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiSGVsbG8gaW5pdFwiLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIFJlYWN0LnJlbmRlcihcbiAgICAgICAgICAgICAgICAgICAgPENvdW50ZXIgLz4sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQuZm5bcGx1Z2luTmFtZV0gPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEkLmRhdGEodGhpcywgJ3BsdWdpbl8nK3BsdWdpbk5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICQuZGF0YSh0aGlzLCAncGx1Z2luXycrcGx1Z2luTmFtZSwgbmV3IFBsdWdpbih0aGlzLCBvcHRpb25zKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfSkoalF1ZXJ5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZW5kZXJDb3VudGVyO1xud2luZG93LlJlbmRlckNvdW50ZXIgPSBSZW5kZXJDb3VudGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbWFpbi5qc3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("module.exports = React;//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiPzlkZTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIlJlYWN0XCJcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar React = __webpack_require__(2);\n\nvar TheButton = __webpack_require__(4),\n    Descriptor = __webpack_require__(5);\n\nvar Counter = React.createClass({\n    displayName: 'Counter',\n\n    getInitialState: function getInitialState() {\n        return { counter: 0 };\n    },\n\n    inc: function inc() {\n        this.setState({\n            counter: this.state.counter + 1\n        });\n    },\n\n    render: function render() {\n        return React.createElement(\n            'div',\n            null,\n            React.createElement(Descriptor, { count: this.state.counter }),\n            React.createElement(TheButton, { clicked: this.inc })\n        );\n    }\n});\n\nmodule.exports = Counter;//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ291bnRlci5qc3g/ODMyYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQU0sS0FBSyxHQUFHLG1CQUFPLENBQUMsQ0FBTyxDQUFDLENBQUM7O0FBRS9CLElBQU0sU0FBUyxHQUFHLG1CQUFPLENBQUMsQ0FBYSxDQUFDO0lBQ2xDLFVBQVUsR0FBRyxtQkFBTyxDQUFDLENBQWMsQ0FBQyxDQUFDOztBQUUzQyxJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDOUIsbUJBQWUsRUFBRSwyQkFBWTtBQUN6QixlQUFPLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBQztLQUN0Qjs7QUFFRCxPQUFHLEVBQUUsZUFBWTtBQUNiLFlBQUksQ0FBQyxRQUFRLENBQUM7QUFDVixtQkFBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFDLENBQUM7U0FDaEMsQ0FBQyxDQUFDO0tBQ047O0FBRUQsVUFBTSxFQUFFLGtCQUFZO0FBQ2hCLGVBQ0k7OztZQUNJLG9CQUFDLFVBQVUsSUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFRLEdBQUc7WUFDekMsb0JBQUMsU0FBUyxJQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBSSxHQUFHO1NBQzlCLENBQ1I7S0FDTDtDQUNKLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8iLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5jb25zdCBUaGVCdXR0b24gPSByZXF1aXJlKCcuL1RoZUJ1dHRvbicpLFxuICAgICAgRGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vRGVzY3JpcHRvcicpO1xuXG5jb25zdCBDb3VudGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge2NvdW50ZXI6IDB9XG4gICAgfSxcblxuICAgIGluYzogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNvdW50ZXI6IHRoaXMuc3RhdGUuY291bnRlcisxXG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPERlc2NyaXB0b3IgY291bnQ9e3RoaXMuc3RhdGUuY291bnRlcn0gLz5cbiAgICAgICAgICAgICAgICA8VGhlQnV0dG9uIGNsaWNrZWQ9e3RoaXMuaW5jfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ291bnRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL0NvdW50ZXIuanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nvar React = __webpack_require__(2);\n\nvar TheButton = React.createClass({\n    displayName: \"TheButton\",\n\n    render: function render() {\n        return React.createElement(\n            \"button\",\n            { className: \"btn btn-primary\", onClick: this.props.clicked },\n            \"The Button\"\n        );\n    }\n});\n\nmodule.exports = TheButton;//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvVGhlQnV0dG9uLmpzeD9mNDFiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBTSxLQUFLLEdBQUcsbUJBQU8sQ0FBQyxDQUFPLENBQUMsQ0FBQzs7QUFFL0IsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQ2hDLFVBQU0sRUFBRSxrQkFBWTtBQUNoQixlQUNJOztjQUFRLFNBQVMsRUFBQyxpQkFBaUIsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFROztTQUFvQixDQUN0RjtLQUNMO0NBQ0osQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUyIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmNvbnN0IFRoZUJ1dHRvbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17dGhpcy5wcm9wcy5jbGlja2VkfT5UaGUgQnV0dG9uPC9idXR0b24+XG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVGhlQnV0dG9uO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvVGhlQnV0dG9uLmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar React = __webpack_require__(2);\n\nvar Descriptor = React.createClass({\n    displayName: 'Descriptor',\n\n    render: function render() {\n        var text = React.createElement(\n            'p',\n            null,\n            'You\\'ve clicked The Button ',\n            this.props.count,\n            ' times!'\n        );\n\n        if (this.props.count === 0) {\n            text = React.createElement(\n                'p',\n                null,\n                'You haven\\'t clicked The Button yet!'\n            );\n        } else if (this.props.count === 1) {\n            text = React.createElement(\n                'p',\n                null,\n                'You only clicked The Button once!'\n            );\n        } else if (this.props.count === 2) {\n            text = React.createElement(\n                'p',\n                null,\n                'You clicked The Button twice!'\n            );\n        }\n\n        return text;\n    }\n});\n\nmodule.exports = Descriptor;//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvRGVzY3JpcHRvci5qc3g/N2VlOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQU0sS0FBSyxHQUFHLG1CQUFPLENBQUMsQ0FBTyxDQUFDLENBQUM7O0FBRS9CLElBQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUNqQyxVQUFNLEVBQUUsa0JBQVk7QUFDaEIsWUFBSSxJQUFJLEdBQUk7Ozs7WUFBOEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLOztTQUFhLENBQUM7O0FBRXhFLFlBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO0FBQ3hCLGdCQUFJLEdBQUk7Ozs7YUFBMkMsQ0FBQztTQUN2RCxNQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO0FBQzlCLGdCQUFJLEdBQUk7Ozs7YUFBeUMsQ0FBQztTQUNyRCxNQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO0FBQzlCLGdCQUFJLEdBQUk7Ozs7YUFBcUMsQ0FBQztTQUNqRDs7QUFFRCxlQUFPLElBQUksQ0FBQztLQUNmO0NBQ0osQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmNvbnN0IERlc2NyaXB0b3IgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ZXh0ID0gKDxwPllvdSd2ZSBjbGlja2VkIFRoZSBCdXR0b24ge3RoaXMucHJvcHMuY291bnR9IHRpbWVzITwvcD4pO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICB0ZXh0ID0gKDxwPllvdSBoYXZlbid0IGNsaWNrZWQgVGhlIEJ1dHRvbiB5ZXQhPC9wPik7XG4gICAgICAgIH1lbHNlIGlmICh0aGlzLnByb3BzLmNvdW50ID09PSAxKSB7XG4gICAgICAgICAgICB0ZXh0ID0gKDxwPllvdSBvbmx5IGNsaWNrZWQgVGhlIEJ1dHRvbiBvbmNlITwvcD4pO1xuICAgICAgICB9ZWxzZSBpZiAodGhpcy5wcm9wcy5jb3VudCA9PT0gMikge1xuICAgICAgICAgICAgdGV4dCA9ICg8cD5Zb3UgY2xpY2tlZCBUaGUgQnV0dG9uIHR3aWNlITwvcD4pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGVzY3JpcHRvcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL0Rlc2NyaXB0b3IuanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);