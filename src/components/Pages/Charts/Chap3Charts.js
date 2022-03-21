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

  let chartTwo = chart
    ? chart.Chart3.filter((item, index) => index < (Object.keys(item).length  ))
      .map((item, ind) => {
        let data = {
          x: chart.Chart3.map((item) => item.month),
          y: chart.Chart3.map((item) => Object.values(item)[ind]),
          type: 'bar',
          showlegend:ind===2 ? false : true,
          width: 0.35,
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
          title='Chart 3.3: Monthly Receipts and Disbursements during 2020-21'
          xaxisTitle=" "
          yaxisTitle=" "
          rangeStart="0"
          rangeEnd="70000"
          step="5000"
          barmode="group"
          bargroupgap="0"
          bargap="0.4"
        /></Card>
      : <Card className={classes.cardMargin}>
        <CustomBarChart
          data={chartTwo}
          title='Chart 3.3: Monthly Receipts and Disbursements during 2020-21'
          xaxisTitle=" "
          yaxisTitle=" "
          rangeStart="0"
          rangeEnd="70000"
          step="5000"
          barmode="group"
          bargroupgap="0"
          bargap="0.4"
        />
      </Card>
  )
}

