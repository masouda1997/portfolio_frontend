import React from 'react';
import Highcharts, { color } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsMore from 'highcharts/highcharts-more';
import solidGauge from 'highcharts/modules/solid-gauge';

highchartsMore(Highcharts);
solidGauge(Highcharts);


const RadialChart = ({ chartColor }) => {
	const gaugeOptions = {
		chart: {
			type: "gauge",
			plotBackgroundColor: null,
			plotBackgroundImage: null,
			plotBorderWidth: null,
			plotShadow: false,
			// height: "80%",
         backgroundColor:'transparent'
		},

		title: {
			text: null,
		},

		pane: {
			startAngle: -110,
			endAngle: 110,
			background: null,
			center: ["50%", "75%"],
			size: "100%",
		},

		// the value axis
		yAxis: {
			min: 0,
			max: 100,
			tickPixelInterval:null,
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
					to: 35,
					color: chartColor, // green
					thickness: 10,
					borderRadius: "0",
				},{
               from:35,
               to:100,
               color:"#252525"
            }
				
			],
		},

		series: [
			{
				name: "learned",
				data: [35],
				tooltip: {
					valueSuffix: "%",
				},
				dataLabels: {
					format: "{y}%  java",
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
					backgroundColor: "gray",
					baseWidth: 5,
					baseLength: "0%",
					rearLength: "0%",
				},
				pivot: {
					backgroundColor: chartColor,
					radius: 6,
				},
			},
		],
	};

	return <HighchartsReact highcharts={Highcharts} options={gaugeOptions} />;
};

export default RadialChart;
