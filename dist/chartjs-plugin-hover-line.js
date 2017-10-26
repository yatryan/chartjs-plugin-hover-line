/*!
 * chartjs-plugin-hover-line.js
 * http://chartjs.org/
 * Version: 0.1.0
 * 
 * Copyright 2017 Taylor Ryan
 * Released under the MIT license
 * https://github.com/yatrayn/chartjs-plugin-hover-line/blob/master/LICENSE.md
 */
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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _chart = __webpack_require__(1);

	var _chart2 = _interopRequireDefault(_chart);

	var _plugin = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var plugin = new _plugin.ChartjsHoverLinePlugin();

	_chart2.default.pluginService.register(plugin);

	exports.default = plugin;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = Chart;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.ChartjsHoverLinePlugin = undefined;

	var _chart = __webpack_require__(1);

	var _chart2 = _interopRequireDefault(_chart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ChartjsHoverLinePlugin = exports.ChartjsHoverLinePlugin = function ChartjsHoverLinePlugin() {
		_classCallCheck(this, ChartjsHoverLinePlugin);

		var parentEventHandler = _chart2.default.Controller.prototype.eventHandler;

		_chart2.default.Controller.prototype.eventHandler = function () {
			var orig = parentEventHandler.apply(this, arguments);
			var eventPosition = _chart2.default.helpers.getRelativePosition(arguments[0].native, this.chart);
			var chartArea = this.chart.chartArea;

			var xPos = Math.max(Math.min(eventPosition.x, chartArea.right), chartArea.left);

			var lineEndpoints = {
				'x1': xPos,
				'y1': chartArea.top,
				'x2': xPos,
				'y2': chartArea.bottom
			};

			var options = _chart2.default.helpers.configMerge({
				horizontal: false,
				color: "#000000"
			}, this.chart.options.hoverLine);

			if (options.horizontal) {
				var yPos = Math.max(Math.min(eventPosition.y, chartArea.bottom), chartArea.top);

				lineEndpoints.x1 = chartArea.left;
				lineEndpoints.y1 = yPos;
				lineEndpoints.x2 = chartArea.right;
				lineEndpoints.y2 = yPos;
			}

			// CLear old line
			this.clear();
			this.draw();

			// Draw the line here
			this.chart.ctx.beginPath();
			this.chart.ctx.moveTo(lineEndpoints.x1, lineEndpoints.y1);
			this.chart.ctx.strokeStyle = options.color;
			this.chart.ctx.lineTo(lineEndpoints.x2, lineEndpoints.y2);
			this.chart.ctx.stroke();

			return orig;
		};
	};

/***/ })
/******/ ]);