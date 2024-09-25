import React from "react";
import Highcharts, { color } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import networkgraph from "highcharts/modules/networkgraph";

// Initialize the networkgraph module
networkgraph(Highcharts);

function NetworkChart({ nodeColor }) {
	const networkData = [
		{ from: "skills", to: "JS" },
		{ from: "skills", to: "HTML" },
		{ from: "skills", to: "css" },
		{ from: "skills", to: "SQL" },
		{ from: "skills", to: "Python" },
		{ from: "skills", to: "Git" },

		{ from: "css", to: "sass" },
		{ from: "css", to: "tailwind" },
		{ from: "css", to: "bootstrap" },
		{ from: "css", to: "css module" },

		{ from: "JS", to: "react" },
		{ from: "JS", to: "ts" },
		{ from: "JS", to: "redux" },
		{ from: "JS", to: "node" },

		{ from: "react", to: "next" },

		{ from:"node", to: "express"}
		   
	];

	const chartOptions = {
		chart: {
			type: "networkgraph",
			plotBorderWidth: 1,
			spacingBottom: 0,
			spacingTop: 10,
			spacingLeft: 0,
			spacingRight: 0,
			width: 900,
			height: null,
			backgroundColor: null,
			plotBorderWidth: 0,
			style: {
				fontFamily: "serif",
			},
		},
		credits: {
			position: {
				align: "left",
				verticalAlign: "bottom",
				x: -180,
				y: -10,
			},
		},
		title: {
			text: null,
		},
		plotOptions: {
			networkgraph: {
				keys: ["from", "to"], // Specify data source for connections
				layoutAlgorithm: {
					enableSimulation: true, // Enable node movements
				},
			},
		},
		series: [
			{
				data: networkData,
				name: "My Network",
				marker: {
					radius: 30, // Set node size
					fillColor: nodeColor,
				},
				dataLabels: {
					enabled: true,
					linkFormat: "",
					style: {
						fontSize: "1em",
						fontWeight: "normal",
					},
				},
				nodes: [
					{
						id: "skills",
						marker: {
							radius: 50, // Custom size
							fillColor: "#252525", // Custom color
						},
					},
					{
						id: "JS",
						marker: {
							radius: 30, // Custom size
							//   fillColor: 'green' // Custom color
						},
					},
					{
						id: "react",
						marker: {
							radius: 25, // Custom size
							//   fillColor: 'green' // Custom color
						},
					},
					{
						id: "next",
						marker: {
							radius: 17,
							fillColor:'#334443'
						},
					},
					{
						id: "ts",
						marker: {
							radius: 23, // Custom size
							//   fillColor: 'green' // Custom color
						},
					},
					{
						id: "redux",
						marker: {
							radius: 20, // Custom size
							//   fillColor: 'green' // Custom color
						},
					},
					{
						id: "SQL",
						marker: {
							radius: 10, 
							fillColor:'#334443'
						},
					},
					{
						id: "Git",
						marker: {
							radius: 20, // Custom size
							//   fillColor: 'green' // Custom color
						},
					},
					{
						id: "HTML",
						marker: {
							radius: 35, // Custom size
							//   fillColor: 'green' // Custom color
						},
					},
					{
						id: "css",
						marker: {
							radius: 35, // Custom size
							//   fillColor: 'green' // Custom color
						},
					},
					{
						id: "sass",
						marker: {
							radius: 20, // Custom size
							//   fillColor: 'green' // Custom color
						},
					},
					{
						id: "tailwind",
						marker: {
							radius: 30, // Custom size
							//   fillColor: 'green' // Custom color
						},
					},
					{
						id: "bootstrap",
						marker: {
							radius: 25, // Custom size
							//   fillColor: 'green' // Custom color
						},
					},
					{
						id: "css module",
						marker: {
							radius: 30, // Custom size
							//   fillColor: 'green' // Custom color
						},
					},
					{
						id: "HTML",
						marker: {
							radius: 35, // Custom size
							//   fillColor: 'green' // Custom color
						},
					},
					{
						id: "Python",
						marker: {
							radius: 20, // Custom size
							//   fillColor: 'green' // Custom color
						},
					},
					{
						id: "node",
						marker: {
							radius: 10, // Custom size
							//   fillColor: 'green' // Custom color
						},
					},
					{
						id:"express",
						marker:{
							radius:10,
							fillColor:'#334443'
						}
					}
				],
			},
		],
	};

	
	return (
		<div style={{ backgroundColor: "transparent", border: "none" }}>
			<HighchartsReact highcharts={Highcharts} options={chartOptions} />
		</div>
	);
}

export default NetworkChart;
