import React from 'react';
import Highcharts, { color } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsMore from 'highcharts/highcharts-more';
import solidGauge from 'highcharts/modules/solid-gauge';

highchartsMore(Highcharts);
solidGauge(Highcharts);


const RadialChart = ({ chartColor ,value , skill }) => {
	const gaugeOptions = {
		
		credits: {
			position: {
				align: "left",
				verticalAlign: "bottom",
				x: -180,
				y: -10,
			},
		},

		chart: {
			type: "gauge",
			plotBackgroundColor: null,
			plotBackgroundImage: null,
			plotBorderWidth: null,
			plotShadow: false,
			height: "70%",
			backgroundColor: "transparent",
		},

		title: {
			text: null,
		},

		pane: {
			startAngle: -180,
			endAngle: 180,
			background: null,
			center: ["50%", "50%"],
			size: "80%",
		},

		// the value axis
		yAxis: {
			min: 0,
			max: 100,
			tickPixelInterval: null,
			tickPosition: "inside",
			tickLength: 5,
			tickWidth: 1,
			minorTickInterval: null,
			labels: {
				distance: null,
				style: {
					fontSize: "14px",
				},
			},
			lineWidth: 0,
			plotBands: [
				{
					from: 0,
					to: value,
					color: chartColor,
					thickness: 10,
					borderRadius: "0",
				},
				{
					from: value,
					to: 100,
					color: "#252525",
				},
			],
		},

		series: [
			{
				name: "learned",
				data: [value],
				tooltip: {
					valueSuffix: "%",
				},
				dataLabels: {
					format: ` ${skill} {y}%`,
					borderWidth: 0,
					// color:
					// 	(Highcharts.defaultOptions.title &&
					// 		Highcharts.defaultOptions.title.style &&
					// 		Highcharts.defaultOptions.title.style.color) ||
					// 	"#111111",
					style: {
						fontSize: "16px",
					},
				},
				dial: {
					radius: "80%",
					backgroundColor: "#25252500 ",
					baseWidth: 5,
					baseLength: "0%",
					rearLength: "0%",
				},
				pivot: {
					backgroundColor: chartColor+'00',
					radius: 6,
				},
			},
		],
	};

	return <HighchartsReact highcharts={Highcharts} options={gaugeOptions} />;
};

export default RadialChart;
