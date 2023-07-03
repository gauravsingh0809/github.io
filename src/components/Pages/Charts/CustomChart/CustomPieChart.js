import React from 'react';
import Plot from 'react-plotly.js';

import './CustomChart.css'

export const CustomPieChart = (props) => {
  return (
    <div >
      <Plot
        config={{
          displaylogo: false,
          modeBarButtonsToRemove: ['pan2d', 'select2d', 'lasso2d', 'resetScale2d', 'zoomOut2d',
            'zoomIn2d', 'toggleSpikelines'],
          scrollZoom: true,
          doubleClickDelay: 700
        }}
        data={props.data}
        layout={{ 
          images: [{
            name: 'emblemwatermark_1',
            source: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/800px-Emblem_of_India.svg.png",
            xref: "paper",
            yref: "paper",
            x: 0.42,
            y: 0.82,
            sizex: 0.75,
            sizey: 0.75,
            opacity: 0.1,
            layer: "below"
          }],
          autosize: true,
          // grid: {rows: 1, columns: 2},
           title: {
             text: props.title,
            },
            legend:{
              bgcolor:"#ffffff00",
              font:{
                family:"Open Sans",
                size:10,
                color:'black'
              },
              orientation:"v",
              itemsizing:"trace",
              itemwidth:30,
              x: props.legendX ? props.legendX : 0.7,
              y: props.legendY ? props.legendY : 1.15,
            },
            paper_bgcolor:"ccc",
            plot_bgcolor:"fff", 
           }}
        useResizeHandler
        className="chart"
      />
    </div>
  );
}