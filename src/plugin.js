'use strict';

import Chart from 'chart.js';

export class ChartjsHoverLinePlugin {
	constructor() {
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
	}

	beforeInit(chart, options) {
		var parentEventHandler = Chart.Controller.prototype.eventHandler;

		Chart.Controller.prototype.eventHandler = function() {
			var orig = parentEventHandler.apply(this, arguments);
			var eventPosition = Chart.helpers.getRelativePosition(arguments[0].native, this.chart);
			var chartArea = this.chart.chartArea;
			var yPos = Math.max(Math.min(eventPosition.y, chartArea.bottom),chartArea.top);

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
}