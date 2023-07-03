import React, { useContext } from 'react';
import { MyContext } from '../../../Context/MyProvider';
import './Charts.css'
import Card from "@material-ui/core/Card";
import { CustomBarChart } from './CustomChart/CustomBarChart';
import { makeStyles } from "@material-ui/core/styles";
import { CustomBarhChart } from './CustomChart/CustomBarhChart';


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


export const Chart1 = () => {
  const char = useContext(MyContext)
  const classes = useStyles()
  const chart = char.charts4

  const kastam = () => {
    let chartTwo = []
    for (let i = 0; i <= chart.Chart1.map((item) => Object.keys(item))[0].length - 2; i++) {
      chartTwo.push(
        {
          y: chart.Chart1.map((it) => it[chart.Chart1.map((item) => Object.keys(item))[0][0]]),
          x: chart.Chart1.map((it) => it[chart.Chart1.map((item) => Object.keys(item))[0][1]]),
          type: 'bar',
          // width: 0.4,
          name: chart.Chart1.map((item) => Object.keys(item))[0][0],
          hoverinfo: 'y',
          orientation: 'h',
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
        <CustomBarhChart
          data={kastam()}
          title="Chart 4.1: Outstanding UCs in respect of 05 Major Department for the grants paid upto 2018-19"
          xaxisTitle="In crores"
          yaxisTitle="Name of the Department"
          legendX="1"
          legendY="1"
        /></Card>
      : <Card >
        <CustomBarChart
          data={kastam()}
          title="Chart 4.1: Outstanding UCs in respect of 05 Major Department for the grants paid upto 2018-19"
          xaxisTitle="In crores"
          yaxisTitle="Name of the Department"
          rangeStart="0"
          rangeEnd="1200"
          step="200"
        />
      </Card>
  );
}
