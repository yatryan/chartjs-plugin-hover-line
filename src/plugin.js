'use strict';

import Chart from 'chart.js';

export class ChartjsHoverLinePlugin {
	constructor() {
		var parentEventHandler = Chart.Controller.prototype.eventHandler;

		Chart.Controller.prototype.eventHandler = function() {
			var orig = parentEventHandler.apply(this, arguments);
			var eventPosition = Chart.helpers.getRelativePosition(arguments[0].native, this.chart);
			var chartArea = this.chart.chartArea;

			var xPos = Math.max(Math.min(eventPosition.x, chartArea.right),chartArea.left);

			var lineEndpoints = {
				'x1': xPos,
				'y1': chartArea.top,
				'x2': xPos,
				'y2': chartArea.bottom
			}

			var options = Chart.helpers.configMerge({
				horizontal: false,
				color: "#000000",
			}, this.chart.options.hoverLine);

			if (options.horizontal) {
				var yPos = Math.max(Math.min(eventPosition.y, chartArea.bottom),chartArea.top);

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
	}
}