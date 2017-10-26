'use strict';

import Chart from 'chart.js';

import { ChartjsHoverLinePlugin } from './plugin';

const plugin = new ChartjsHoverLinePlugin();

Chart.pluginService.register(plugin);

export default plugin;