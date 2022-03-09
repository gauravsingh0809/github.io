import React from 'react';
import Plot from 'react-plotly.js';

import './CustomChart.css'

export const CustomBarhChart = (props) => {

  return (
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
          x: 0.50,
          y: 0.9,
          sizex: 0.7,
          sizey: 0.7,
          opacity: 0.1,
          layer: "below"
        }],
        autosize: true,
        barmode: props.barmode ? props.barmode : 'group',
        bargroupgap: props.bargroupgap ? props.bargroupgap : 0,
        bargap: props.bargap ? props.bargap : 0.3,
        title: {
          text: props.title,
        },
        legend: {
          bgcolor: "#ffffff00",
          bordercolor: "#ffffff00",
          borderwidth: 0.6,
          font: {
            family: "Open Sans",
            size: 10,
            color: 'black'
          },
          orientation: "h",
          itemsizing: "trace",
          itemwidth: 30,
          x: props.legendX ? props.legendX : 0.75,
          y: props.legendY ? props.legendY : 1.15,
          r:15
        },
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        margin:{
          l:props.marginLeft ? props.marginLeft : 100,
        },
        xaxis: {
          tickangle: 0,
          visible: true,
          // categoryorder:'total descending',
          color: '#cdg',
          title: {
            text: props.xaxisTitle
          },
          rangebreaks: {
            enabled: true
          }
        },

        yaxis: {
          // categoryorder:'total ascending',
          title: {
            text: props.yaxisTitle
          },
          autorange: true,
          range: [props.rangeStart, props.rangeEnd],
          // tickmode:'linear',
          dtick: props.step ? props.step : 10,
          tick0: 0,
          tickformat: ',g',
          ticks: "inside"
        }
      }}
      useResizeHandler
      className="chart"
    />
  );
}