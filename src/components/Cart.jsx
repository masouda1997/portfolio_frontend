import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import networkgraph from 'highcharts/modules/networkgraph';

// Initialize the networkgraph module
networkgraph(Highcharts);


function NetworkChart({nodeColor}) {
   const networkData = [
      { from: "skills", to: "JS" },
      { from: "skills", to: "HTML" },
      { from: "skills", to: "Styles" },
      { from: "skills", to: "MySQL" },
      { from: "skills", to: "Python" },
      { from: "skills", to: "Redux" },
      { from: "skills", to: "Git" },
   
      { from: "JS", to: "react" },
      { from: "JS", to: "ts" },
      { from: "JS", to: "redux" },
   
   
   ];
   
   const chartOptions = {
       chart: {
           type: 'networkgraph',
           plotBorderWidth: 1
       },
       title: {
           text: 'Network Graph'
       },
       plotOptions: {
           networkgraph: {
               keys: ['from', 'to'], // Specify data source for connections
               layoutAlgorithm: {
                   enableSimulation: true // Enable node movements
               }
           }
       },
       series: [{
           data: networkData,
           name: 'My Network',
           marker: {
               radius: 20 ,// Set node size
               fillColor: nodeColor,
           },
           dataLabels: {
               enabled: true, // Display node labels
               style: {
                  fontSize: '20px', // Set the desired font size here
                  fontWeight: 'bold',
                  // color: 'black'
              }
           },
      //      nodes: [
      //       {
      //           id: 'skills',
      //           marker: {
      //               radius: 10, // Custom size
      //             //   fillColor: 'red' // Custom color
      //           }
      //       },
      //       {
      //           id: 'JS',
      //           marker: {
      //               radius: 15, // Custom size
      //             //   fillColor: 'green' // Custom color
      //           }
      //       },
      //       {
      //           id: 'react',
      //           marker: {
      //               radius: 20, // Custom size
      //             //   fillColor: nodeColor // Custom color
      //           }
      //       },
      //       {
      //           id: 'ts',
      //           marker: {
      //               radius: 25, // Custom size
      //             //   fillColor: 'orange' // Custom color
      //           }
      //       },
      //       {
      //           id: 'redux',
      //           marker: {
      //               radius: 30, // Custom size
      //             //   fillColor: 'purple' // Custom color
      //           }
      //       }
      //   ]
       }]
   };
   // const [primaryColor ,  setPrimaryColor] = useState(localStorage.getItem("primary-color"))
    return (
      <div style={{'backgroundColor':'transparent' , 'border':'none'}}>
         <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </div>
    );
}

export default NetworkChart;