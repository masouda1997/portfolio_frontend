import React from 'react';
import Highcharts, { color } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsMore from 'highcharts/highcharts-more';
import solidGauge from 'highcharts/modules/solid-gauge';

highchartsMore(Highcharts);
solidGauge(Highcharts);


const RadialChart = ({ chartColor , value, skill }) => {
	const gaugeOptions = {
		chart: {
			credits: false,
			type: "gauge",
			plotBackgroundColor: null,
			plotBackgroundImage: null,
			plotBorderWidth: null,
			plotShadow: true,
			height: "70%",
         backgroundColor:'transparent'
		},

		title: {
			text: null,
		},

		pane: {
			startAngle: -110,
			endAngle: 110,
			background: null,
			center: ["50%", "50%"],
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
					to: value,
					color: chartColor, // green
					thickness: 10,
					borderRadius: "0",
				},{
               from:value,
               to:100,
               color:"#353535"
            }
				
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
					format: `{y}% ${skill}`,
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
					backgroundColor: "#353535",
					baseWidth: 5,
					baseLength: "1%",
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
