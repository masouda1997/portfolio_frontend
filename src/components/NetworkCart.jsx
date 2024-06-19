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
		{ from: "skills", to: "MySQL" },
		{ from: "skills", to: "Python" },
		{ from: "skills", to: "Git" },

	
		{ from: "css", to: "sass" },
		{ from: "css", to: "tailwind" },
		{ from: "css", to: "bootstrap" },
		{ from: "css", to: "css module" },

		{ from: "JS", to: "react" },
		{ from: "JS", to: "ts" },
		{ from: "JS", to: "redux" },

		{ from: "react", to: "next" },
		
      { from: "Python", to: "django" },   
	];

	const chartOptions = {
		chart: {
			type: "networkgraph",
			plotBorderWidth: 1,
			spacingBottom: 0,
			spacingTop: 10,
			spacingLeft: 0,
			spacingRight: 0,
			width: 700,
			height: null,
			backgroundColor: null,
			plotBorderWidth: 0,
			style: {
				fontFamily: "serif",
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
					enabled: true, // Display node labels
					style: {
						fontSize: "16px", // Set the desired font size here
						// fontWeight: "bold",
						// color: 'black'
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
							radius: 17, // Custom size
							//   fillColor: 'green' // Custom color
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
						id: "MySQL",
						marker: {
							radius: 10, // Custom size
							//   fillColor: 'green' // Custom color
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
						id: "django",
						marker: {
							radius: 10, // Custom size
							//   fillColor: 'green' // Custom color
						},
					},
				
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
