import React, { useContext } from 'react';
import { MyContext } from '../../../Context/MyProvider';
import './Charts.css'
import Card from "@material-ui/core/Card";
import { CustomLineChart } from './CustomChart/CustomLineChart';
import { CustomBarChart } from './CustomChart/CustomBarChart';
import { CustomPieChart } from './CustomChart/CustomPieChart';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  cardColored: {
    margin: '20px 0 20px 0',
    padding: "10px 0 10px 0",
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "rgba(225,227,225,0.5)",
  },
  cardMargin: {
    margin: '20px 0 20px 0',
    padding: "10px 0 10px 0",
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
  }
});


const colorScheme = ["ef476f", "ffd166", "06d6a0", "118ab2", "073b4c"]

const Chart1 = () => {
  const char = useContext(MyContext)
  const classes = useStyles();
  const chart = char.charts1
  console.log("chart",chart.Chart1.map((item, index) => Object.keys(item)).filter(i => i !== "Year"))
  // console.log(chart.Chart1.filter((item, index) => Object.keys(item)[0] !== "Year"))
  // let k = chart.Chart1.map(item => Object.keys(item)[0]).filter(i => i !== "Year")
  // console.log(chart.Chart1.map(item => Object.keys(item)).filter(i => i !== "Year"))
  // console.log([].concat(...chart.Chart1.map(Object.keys)))
  let k = Array.from(new Set([].concat(...chart.Chart1.map(Object.keys)))).sort()
  console.log("k_final",k)


  let chartmap = chart
    ? chart.Chart1.filter((item, index) => index < (Object.keys(item).length))
      .map((item, ind) => {
        console.log("item",item)
        
        let data = {
          x: chart.Chart1.map((item, index) => item.Year),
          // y: chart.Chart1.map((item) => item[k[ind]]),
          y: chart.Chart1.map((item, index) => Object.values(item)[ind]),
          type: 'scatter',
          name: Object.keys(item)[ind],
          
          line: {
            shape: 'spline',
            smoothing: 0.1,
            width: 3
          },
        }
        return data
      }
      ) : "no data"

  return (
    char.themeChanger
      ?
      <Card className={classes.cardColored}>
        <CustomLineChart data={chartmap}
          title="Chart 1.1: Growth of India’s GDP and State’s GSDP"
          xaxisTitle="Year"
          yaxisTitle="In Percent"
          rangeStart="-12"
          rangeEnd="20"
          step="2"
        /></Card>
      : <Card className={classes.cardMargin}>
        <CustomLineChart data={chartmap}
          title="Chart 1.1: Growth of India’s GDP and State’s GSDP"
          xaxisTitle="Year"
          yaxisTitle="In Percent"
          rangeStart="-12"
          rangeEnd="20"
          step="2"
        />
      </Card>
  );
}

export default Chart1;


export const Chart2 = () => {

  const char = useContext(MyContext)
  const classes = useStyles();
  const chart = char.charts1

  let chartTwo = chart
    ? chart.Chart2.filter((item, index) => index < (Object.keys(item).length - 1))
      .map((item, ind) => {
        let data = {
          x: chart.Chart2.map((item) => item.Sector),
          y: chart.Chart2.map((item) => Object.values(item)[ind]),
          type: 'bar',
          name: Object.keys(item)[ind],
          hoverinfo: 'y',
          marker: {
            color: colorScheme[ind],
            opacity: 1,
          }
        }
        return data
      }
      ) : "no data"

  return (
    char.themeChanger
      ? <Card className={classes.cardColored}>
        <CustomBarChart
          data={chartTwo}
          title='Chart 1.2: Change in Sectoral contribution to GSDP (2015-16 and 2019-20)'
          xaxisTitle="Sector"
          yaxisTitle="Contribution to GDP(In percent)"
          rangeStart="0"
          rangeEnd="70"
          step="10"
        /></Card>
      : <Card className={classes.cardMargin}>
        <CustomBarChart
          data={chartTwo}
          title='Chart 1.2: Change in Sectoral contribution to GSDP (2015-16 and 2019-20)'
          xaxisTitle="Sector"
          yaxisTitle="Contribution to GDP(In percent)"
          rangeStart="0"
          rangeEnd="70"
          step="10"
        />
      </Card>
  )
}


export const Chart3 = () => {
  const char = useContext(MyContext)
  const classes = useStyles();
  const chart = char.charts

  let chartmap = chart
    ? chart.Chart3.filter((item, index) => index < (Object.keys(item).length - 1))
      .map((item, ind) => {
        let data = {
          x: chart.Chart3.map(item => item.Year),
          y: chart.Chart3.map(item => Object.values(item)[ind]),
          type: 'scatter',
          name: Object.keys(item)[ind],
          text: chart.Chart3.map((item, index) => Object.values(item)[ind]),
          hoverinfo:"y",
          mode:"markers+lines+text",
          textposition:ind%2 ===0 ? "top-left" : "bottom-right",
          marker: {
            symbol: "131",
            color: colorScheme[ind],
            opacity: 1,
          },
          line: {
            shape: 'spline',
            smoothing: 0.1,
            width: 3
          },
        }
        return data
      }
      ) : "no data"

  return (
    char.themeChanger
      ? <Card className={classes.cardColored}>
        <CustomLineChart
          data={chartmap}
          title="Chart 1.3: Sectoral growth in GSDP"
          xaxisTitle="Year"
          yaxisTitle="In Percent"
          rangeStart="0"
          rangeEnd="30"
          step="3"
        /></Card>
      : <Card  className={classes.cardMargin}>
        <CustomLineChart
          data={chartmap}
          title="Chart 1.3: Sectoral growth in GSDP"
          xaxisTitle="Year"
          yaxisTitle="In Percent"
          rangeStart="0"
          rangeEnd="30"
          step="3"
        />
      </Card>
  );
}


export const Chart4 = () => {
  const char = useContext(MyContext)
  const classes = useStyles();

  const chart = char.charts
  let chartmap = chart
    ? chart.Chart4
      .filter((item, index) => index < (Object.keys(item).length - 1))
      .map((item, ind) => {
        let data = {
          labels: chart.Chart4.map(item => item.Sector),
          values: chart.Chart4.map(item => Object.values(item)[ind]),
          type: 'pie',
          name: chart.Chart4.map(item => item.Sector),
          hole: 0.3,
          pull: 0.1,
          hovertext: "share is",
          hoverinfo: 'text+label+percent',
          sort: true,
          marker: {
            colors: colorScheme,
            line: {
              color: '#acf'
            }
          },
        }
        return data
      }
      ) : "no data"

  return (
    char.themeChanger
      ? <Card className={classes.cardColored}>
        <CustomPieChart
          data={chartmap}
          title="Chart 1.4: Sectoral growth"
        />
      </Card >
      : <Card className={classes.cardMargin}>
        <CustomPieChart
          data={chartmap}
          title="Chart 1.4: Sectoral growth"
        />
      </Card>
  );
}


export const Chart5 = () => {
  const char = useContext(MyContext)
  const classes = useStyles();
  const chart = char.charts

  let chartmap = chart
    ? chart.Chart5.filter((item, index) => index < (Object.keys(item).length - 1))
      .map((item, ind) => {
        let data = {
          x: chart.Chart5.map(item => item.Year),
          y: chart.Chart5.map(item => Object.values(item)[ind]),
          type: 'scatter',
          name: Object.keys(item)[ind],
          text: chart.Chart3.map((item, index) => Object.values(item)[ind]),
          hoverinfo:"y",
          mode:"markers+lines+text",
          textposition:ind%2 ===0 ? "top-left" : "bottom-right",
          marker: {
            symbol: "131",
            color: colorScheme[ind],
            opacity: 1,
          },
          line: {
            shape: 'spline',
            smoothing: 0.1,
            width: 3
          },
        }
        return data
      }
      ) : "no data"

  return (
    char.themeChanger
      ? <Card className={classes.cardColored}>
        <CustomLineChart
          data={chartmap}
          title="Chart 1.6: Trends in deficit parameters"
          xaxisTitle="Year"
          yaxisTitle="In crores"
          rangeStart="-45000"
          rangeEnd="5000"
          step="5000"
          legendX="1"
        />
      </Card>
      : <Card className={classes.cardMargin}>
        <CustomLineChart
          data={chartmap}
          title="Chart 1.6: Trends in deficit parameters"
          xaxisTitle="Year"
          yaxisTitle="In crores"
          rangeStart="-45000"
          rangeEnd="5000"
          step="5000"
          legendX="1"
        />
      </Card>
  );
}




export const Chart6 = () => {

  const char = useContext(MyContext)
  const classes = useStyles();
  const chart = char.charts

  let chartsix = chart
    ? chart.Chart6.filter((item, index) => index < (Object.keys(item).length - 1))
      .map((item, ind) => {
        let data = {
          x: chart.Chart6.map((item) => item.Year),
          y: chart.Chart6.map((item) => Object.values(item)[ind]),
          type: 'bar',
          name: Object.keys(item)[ind],
          hoverinfo: 'y',
          marker: {
            color: colorScheme[ind],
            opacity: 1,
          }
        }
        return data
      }
      ) : "no data"

  return (
    char.themeChanger ?
      <Card
        className={classes.cardColored}
      >
        <CustomBarChart
          data={chartsix}
          title='Chart 1.7: Trends in Surplus/Deficit relative to GSDP'
          xaxisTitle="Sector"
          yaxisTitle="Contribution to GDP"
          rangeStart="-2.7"
          rangeEnd="0.6"
          step="0.3"
        />
      </Card> :
      <Card
      className={classes.cardMargin}
      >
        <CustomBarChart
          data={chartsix}
          title='Chart 1.7: Trends in Surplus/Deficit relative to GSDP'
          xaxisTitle="Sector"
          yaxisTitle="Contribution to GDP"
          rangeStart="-2.7"
          rangeEnd="0.6"
          step="0.3"
        />
      </Card>
  );
}




//   const chart1 = [
//     {
//       name: 'GSDP Growth rate at current prices(scatter)',
//       type: 'scatter',
//       // visible: 'legendonly',
//       legendgroup: "current prices",
//       x: chart.Chart1 ? Object.keys(chart.Chart1) : "no type",
//       y: chart.Chart1 ? Object.values(chart.Chart1["2015-16"]) : "no type",
//       text: chart.Chart1 ? Object.keys(chart.Chart1["2015-16"]) : "no type",
//       hoverinfo: 'x',
//       marker: { color: 'rgb(156,125,9)' },
//     },
//     {
//       name: 'GDP Growth rate at current prices',
//       type: 'line',
//       legendgroup: "current prices",
//       x: chart.Chart1 ? Object.keys(chart.Chart1) : "no type",
//       y: chart.Chart1 ? Object.values(chart.Chart1["2016-17"]) : "no type",
//       text: chart.Chart1 ? Object.keys(chart.Chart1["2016-17"]) : "no type",
//       hoverinfo: 'x',
//       marker: { color: 'rgb(56,125,89' },
//     },
//     {
//       name: 'GSDP Growth rate at constant prices',
//       type: 'line',
//       legendgroup: "constant prices",
//       x: chart.Chart1 ? Object.keys(chart.Chart1) : "no type",
//       // y:[10,11,12,13],
//       // x:["2015-16","2016-17","2017-18","2018-19"],
//       y: chart.Chart1 ? Object.values(chart.Chart1["2017-18"]) : "no type",
//       text: chart.Chart1 ? Object.keys(chart.Chart1["2017-18"]) : "no type",
//       hoverinfo: 'text',
//       textposition: 'bottom left',
//       texttemplate: '%{text}<br>(%{x:.2f}, %{y:.2f})',
//       marker: {
//         color: 'rgb(156,25,9)',

//       },
//       line: {
//         width: 1,
//         color: 'blue',
//         shape: 'spline',
//         smoothing: 0.5,
//         dash: "dash",
//       },
//     },
//     {
//       name: 'GDP Growth rate at constant prices',
//       type: 'line',
//       legendgroup: "constant prices",
//       opacity: 0.75,
//       x: chart.Chart1 ? Object.keys(chart.Chart1) : "no type",
//       y: chart.Chart1 ? Object.values(chart.Chart1["2018-19"]) : "no type",
//       // y: [102928,237626,237273,238872],
//       text: chart.Chart1 ? Object.keys(chart.Chart1["2018-19"]) : "no type",
//       // hoverinfo: 'y',
//       // hovertext: "This is GDP",
//       hovertemplate: '%{text}<br>(%{x}, %{y:.2f})',
//       // texttemplate: '%{text}<br>(%{y:.2f}, %{y:.2f})', //Not working???
//       // textfont:{'family': "Times", 'size': [18, 21, 20], 'color': ["IndianRed", "MediumPurple", "DarkOrange"]},
//       // mode: 'markers',
//       mode: "line",
//       marker: {
//         // symbol: "209",
//         color: 'rgb(96,175,89',
//       },
//     },
//   ]