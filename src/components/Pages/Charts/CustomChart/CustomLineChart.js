import React from 'react';
import Plot from 'react-plotly.js';

import './CustomChart.css'

export const CustomLineChart = (props) => {

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
            x: 0.4,
            y: 0.9,
            sizex: 0.7,
            sizey: 0.7,
            opacity: 0.1,
            layer: "below"
          }],
          autosize: true,
          title: {
            text: props.title,
          },
          legend: {
            bgcolor: "#ffffff00",
            font: {
              family: "Open Sans",
              size: 10,
              color: 'black'
            },
            orientation: "v",
            itemsizing: "trace",
            itemwidth: 30,
            x: props.legendX ? props.legendX : 0.7,
            y: props.legendY ? props.legendY : 1.15,
            r: 15
          },
          paper_bgcolor: 'rgba(0,0,0,0)',
          plot_bgcolor: 'rgba(0,0,0,0)',
          xaxis: {
            visible: true,
            color: '#cdg',
            tickformat: ',g',
              title: {
              text: props.xaxisTitle
            },
            type: "-",
            rangebreaks: {
              enabled: true
            }
          },
          yaxis: {
            title: {
              text: props.yaxisTitle
            },
            autorange: false,
            rangemode: "normal",
            tickformat: ',g',
            range: [props.rangeStart, props.rangeEnd],
            tickmode: 'linear',
            dtick: props.step ? props.step : 2,
            tick0: 0,
            ticks: "outside"
          },
          yaxis2: {
            title: props.y2axisTitle,
            rangemode: "normal",
            tickformat: ',g',
            // titlefont: {color: 'rgb(148, 103, 189)'},
            // tickfont: {color: 'rgb(148, 103, 189)'},
            overlaying: 'y',
            side: 'right',
            dtick: props.y2Step ? props.y2Step : 2,
            range: [props.y2RangeStart, props.y2RangeEnd],
          }
        }}
        useResizeHandler
        className="chart"
      />
    </div>
  );
}