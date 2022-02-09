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

const colorScheme = ["ef476f", "ffd166", "06d6a0", "118ab2", "073b4c", "7f5539", "baba08", "bde0fe"]

export const Chart3 = () => {
  const char = useContext(MyContext)
  const classes = useStyles()
  const chart = char.charts3
  // console.log(chart.Chart3)

  const kastam = () => {
    let chartTwo = []
    for (let i = 0; i <= chart.Chart3.map((item) => Object.keys(item))[0].length - 2; i++) {
      chartTwo.push(
        {
          x: chart.Chart3.map((i) => i.year),
          y: chart.Chart3.map((it) => it[chart.Chart3.map((item) => Object.keys(item))[0][i]]),
          type: 'scatter',
          // width: 0.4,
          name: chart.Chart3.map((item) => Object.keys(item))[0][i],
          text: chart.Chart3.map((it) => it[chart.Chart3.map((item) => Object.keys(item))[0][i]]),
          hoverinfo:"y",
          mode:"markers+lines+text",
          textposition: i%2 ===0 ? "top-left" : "bottom-right",
          marker: {
            color: colorScheme[i],
            opacity: 1,
            line: {
              color: 'rgb(8,48,107)',
              width: 1.5
            }
          }
        })
    }
    return chartTwo
  }

  return (
    char.themeChanger
      ?
      <Card className={classes.cardColored}>
        <CustomLineChart 
        data={kastam()}
          title="Chart 3.3: Budget allocation and expenditure in Category A schemes of three departments"
          xaxisTitle="Year"
          yaxisTitle="In Percent"
          rangeStart="0"
          rangeEnd="1200"
          step="200"
          legendX="1"
          legendY="1"
        /></Card>
      : <Card >
        <CustomLineChart 
        data={kastam()}
          title="Chart 3.3: Budget allocation and expenditure in Category A schemes of three departments"
          xaxisTitle="Year"
          yaxisTitle="In Percent"
          rangeStart="0"
          rangeEnd="1200"
          step="200"
        />
      </Card>
  );
}

export const Chart4 = () => {
  const char = useContext(MyContext)
  const classes = useStyles()
  const chart = char.charts3
  let chartmap = chart
    ? chart["Chart4"]
      .filter((item, index) => index < (Object.keys(item).length - 1))
      .map((item, ind) => {
        let data = {
          labels: chart["Chart4"].map(item => item["Audit observation"]),
          values: chart["Chart4"].map(item => Object.values(item)[1]),
          type: 'pie',
          name: chart["Chart4"].map(item => item.Sector),
          hole: 0.3,
          pull: 0.1,
          hovertext: "share is",
          hoverinfo: 'text+label+percent',
          sort: true,
          //   domain: {
          //     column: 0
          //   },
          marker: {
            colors: colorScheme[ind],
            line: {
              color: 'rgb(8,48,107)',
              width: 1.5
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
          title="Chart 3.4 : Number of schemes towards empowerment of women"
          legendX="1"
          legendY="1"
        />
      </Card>
      : <Card className={classes.cardMargin}>
        <CustomPieChart
          data={chartmap}
          title="Chart 3.4 : Number of schemes towards empowerment of women"
        />
      </Card>
  );
}

export const Chart6 = () => {

  const char = useContext(MyContext)
  const classes = useStyles()
  const chart = char.charts3

  let chartTwo = chart
    ? chart.Chart6.filter((item, index) => index < (Object.keys(item).length ))
      .map((item, ind) => {
        let data = {
          x: chart.Chart6.map((item) => item.Month),
          y: chart.Chart6.map((item) => Object.values(item)[ind]),
          type: 'bar',
          showlegend:ind===1 ? false : true,
          width: 0.4,
          name: Object.keys(item)[ind],
          hoverinfo: 'y',
          marker: {
            color: colorScheme[ind],
            opacity: 1,
            line: {
              color: 'rgb(8,48,107)',
              width: 1.5
            }
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
          title='Chart 3.6: Monthly receipts and Expenditure during 2019-20'
          xaxisTitle="Sector"
          yaxisTitle="Contribution to GDP"
          rangeStart="0"
          rangeEnd="45000"
          step="5000"
          barmode="group"
          bargroupgap="0"
          bargap="0.4"
        /></Card>
      : <Card className={classes.cardMargin}>
        <CustomBarChart
          data={chartTwo}
          title='Chart 3.6: Monthly receipts and Expenditure during 2019-20'
          xaxisTitle="Sector"
          yaxisTitle="Contribution to GDP"
          rangeStart="0"
          rangeEnd="45000"
          step="5000"
          barmode="group"
          bargroupgap="0"
          bargap="0.4"
        />
      </Card>
  )
}

