import React from "react";
import Highcharts, { color } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import networkgraph from "highcharts/modules/networkgraph";
import { graphNetworkData } from "@/constants";

// Initialize the networkgraph module
networkgraph(Highcharts);


function NetworkChart({ nodeColor }) {
	

	const chartOptions = {
		chart: {
			type: "networkgraph",
			plotBorderWidth: 1,
			spacingBottom: 0,
			spacingTop: 10,
			spacingLeft: 0,
			spacingRight: 0,
			// width: 900,
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
				data: graphNetworkData,
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
		<HighchartsReact highcharts={Highcharts} options={chartOptions} />
	);
}

export default NetworkChart;
