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

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _chart = __webpack_require__(1);

	var _chart2 = _interopRequireDefault(_chart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ChartjsHoverLinePlugin = exports.ChartjsHoverLinePlugin = function () {
		function ChartjsHoverLinePlugin() {
			// var parentEventHandler = Chart.Controller.prototype.eventHandler;

			// Chart.Controller.prototype.eventHandler = function() {
			// 	var orig = parentEventHandler.apply(this, arguments);
			// 	var eventPosition = Chart.helpers.getRelativePosition(arguments[0].native, this.chart);
			// 	var chartArea = this.chart.chartArea;
			// 	var yPos = Math.max(Math.min(eventPosition.y, chartArea.bottom),chartArea.top);

			// 	this.clear();
			// 	this.draw();

			// 	// Draw the horizontal line here
			// 	this.chart.ctx.beginPath();
			// 	this.chart.ctx.moveTo(chartArea.left, yPos);
			// 	this.chart.ctx.strokeStyle = "#000000";
			// 	this.chart.ctx.lineTo(chartArea.right, yPos);
			// 	this.chart.ctx.stroke();

			// 	return orig;
			// };

			_classCallCheck(this, ChartjsHoverLinePlugin);
		}

		_createClass(ChartjsHoverLinePlugin, [{
			key: 'beforeInit',
			value: function beforeInit(chart, options) {
				var parentEventHandler = _chart2.default.Controller.prototype.eventHandler;

				_chart2.default.Controller.prototype.eventHandler = function () {
					var orig = parentEventHandler.apply(this, arguments);
					var eventPosition = _chart2.default.helpers.getRelativePosition(arguments[0].native, this.chart);
					var chartArea = this.chart.chartArea;
					var yPos = Math.max(Math.min(eventPosition.y, chartArea.bottom), chartArea.top);

					this.clear();
					this.draw();

					// Draw the horizontal line here
					this.chart.ctx.beginPath();
					this.chart.ctx.moveTo(chartArea.left, yPos);
					this.chart.ctx.strokeStyle = "#000000";
					this.chart.ctx.lineTo(chartArea.right, yPos);
					this.chart.ctx.stroke();

					return orig;
				};
			}
		}]);

		return ChartjsHoverLinePlugin;
	}();

/***/ })
/******/ ]);