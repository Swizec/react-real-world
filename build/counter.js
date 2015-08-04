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

	'use strict';

	var React = __webpack_require__(2),
	    Counter = __webpack_require__(3);

	function RenderCounter(selector) {
	    React.render(React.createElement(Counter, null), document.querySelectorAll(selector)[0]);
	}

	if (typeof jQuery !== 'undefined') {
	    (function ($) {
	        var pluginName = "clickCounter",
	            defaults = {
	            value: 0
	        };

	        function Plugin(element, options) {
	            this.element = element;
	            this.settings = $.extend({}, defaults, options);
	            this._defaults = defaults;
	            this._name = pluginName;
	            this.init();
	        }

	        $.extend(Plugin.prototype, {
	            init: function init() {
	                this.component = React.render(React.createElement(Counter, { value: this.settings.value }), this.element);
	                return this;
	            },

	            val: function val(_val) {
	                if (!arguments.length) {
	                    return this.component.state.counter;
	                } else {
	                    this.settings.value = _val;
	                    this.init();
	                }
	            }
	        });

	        $.fn[pluginName] = function (options) {
	            return this.map(function () {
	                if (!$.data(this, 'plugin_' + pluginName)) {
	                    $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
	                }
	                return $.data(this, 'plugin_' + pluginName);
	            });
	        };
	    })(jQuery);
	}

	module.exports = RenderCounter;
	window.RenderCounter = RenderCounter;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);

	var TheButton = __webpack_require__(4),
	    Descriptor = __webpack_require__(5);

	var Counter = React.createClass({
	    displayName: 'Counter',

	    getInitialState: function getInitialState() {
	        return { counter: this.props.value || 0 };
	    },

	    inc: function inc() {
	        this.setState({
	            counter: this.state.counter + 1
	        });
	    },

	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        if (nextProps.value) {
	            this.setState({ counter: nextProps.value });
	        }
	    },

	    render: function render() {
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(Descriptor, { count: this.state.counter }),
	            React.createElement(TheButton, { clicked: this.inc })
	        );
	    }
	});

	module.exports = Counter;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(2);

	var TheButton = React.createClass({
	    displayName: "TheButton",

	    render: function render() {
	        return React.createElement(
	            "button",
	            { className: "btn btn-primary", onClick: this.props.clicked },
	            "The Button"
	        );
	    }
	});

	module.exports = TheButton;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);

	var Descriptor = React.createClass({
	    displayName: 'Descriptor',

	    render: function render() {
	        var text = React.createElement(
	            'p',
	            null,
	            'You\'ve clicked The Button ',
	            this.props.count,
	            ' times!'
	        );

	        if (this.props.count === 0) {
	            text = React.createElement(
	                'p',
	                null,
	                'You haven\'t clicked The Button yet!'
	            );
	        } else if (this.props.count === 1) {
	            text = React.createElement(
	                'p',
	                null,
	                'You only clicked The Button once!'
	            );
	        } else if (this.props.count === 2) {
	            text = React.createElement(
	                'p',
	                null,
	                'You clicked The Button twice!'
	            );
	        }

	        return text;
	    }
	});

	module.exports = Descriptor;

/***/ }
/******/ ]);