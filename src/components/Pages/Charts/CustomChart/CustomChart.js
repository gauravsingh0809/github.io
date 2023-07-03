import React from 'react';
import Plot from 'react-plotly.js';

import './CustomChart.css'

const CustomChart = (props) => {

  return (
    <div >
      <Plot
        config={{
          displaylogo: false,
          // responsive: true, // breaking the layout?
          modeBarButtonsToRemove: ['pan2d', 'select2d', 'lasso2d', 'resetScale2d', 'zoomOut2d',
            'zoomIn2d', 'toggleSpikelines'],
          scrollZoom: true,
          // staticPlot:true,
          // toImageButtonOptions: {
          //   format: 'svg', // one of png, svg, jpeg, webp
          //   filename: 'custom_image',
          //   height: 500,
          //   width: 700,
          //   scale: 1 // Multiply title/legend/axis/canvas sizes by this factor
          // },
          // displayModeBar:true,
          // showLink: true,
          // plotlyServerURL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSN7i69ZCzEqQi3sC2wxN8hY6SJaVaAOXZ_ynQOepTQv9jXnPGLB52S60kTpLeTB00JXIMCDecqoE-H/pubhtml?gid=0&single=true",
          // linkText: 'View source data!'
          doubleClickDelay: 700
        }}
        data={props.data}
        layout={{ 
          images: [{
            name: 'emblemwatermark_1',
            source: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/800px-Emblem_of_India.svg.png",
            xref: "paper",
            yref: "paper",
            x: 0.4,
            y: 0.9,
            sizex: 0.7,
            sizey: 0.7,
            opacity: 0.1,
            layer: "below"
          }],
          autosize: true,
           title: {
             text: 'Chart 1.1: Growth of India’s GDP and State’s GSDP',
            //  x:0.9,
            //  y:0.5
            },
            // showlegend:false,
            legend:{
              bgcolor:"#ffffff00",
              // bordercolor:"#acf0gd",
              // borderwidth:0.6,
              font:{
                family:"Open Sans",
                size:10,
                color:'black'
              },
              orientation:"v",
              itemsizing:"trace",
              itemwidth:30,
              x:0.7,
              y:1.15,
            },
            separators:".",
            paper_bgcolor:"ccc",
            plot_bgcolor:"fff",
            // borderwidth:"2px",
            // bordercolor:"acf",
            xaxis:{
              visible:true,
              color:'#cdg',
              title:{
                text:"Year"
              },
              type:"-",
              rangebreaks:{
                enabled:true
              }
            },
            yaxis:{
              autorange:false,
              rangemode:"normal",
              range:[0,20],
              tickmode:'linear',
              dtick:2,
              tick0:0,
              ticks:"outside"
            }
           }}
        useResizeHandler
        className="chart"
      />
    </div>
  );
}


export default CustomChart;