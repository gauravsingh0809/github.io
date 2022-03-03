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


export const Chart11a = () => {
  const char = useContext(MyContext)
  const classes = useStyles()
  const chart = char.charts2
  let chartmap = chart
    ? chart["Chart1-1"]
      .filter((item, index) => index < (Object.keys(item).length - 1))
      .map((item, ind) => {
        let data = {
          labels: chart["Chart1-1"].map(item => item.Column1),
          values: chart["Chart1-1"].map(item => Object.values(item)[ind]),
          type: 'pie',
          name: chart["Chart1-1"].map(item => item.Column1),
          hole: 0.3,
          pull: 0.1,
          hovertext: "share is",
          hoverinfo: 'text+label+percent',
          sort: true,
          //   domain: {
          //     column: 0
          //   },
          marker: {
            colors: colorScheme,
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
          title="Chart 2.1: Composition of resources"
        />
      </Card>
      : <Card className={classes.cardMargin}>
        <CustomPieChart
          data={chartmap}
          title="Chart 2.1: Composition of resources"
        />
      </Card>
  );
}

export const Chart12b = () => {
  const char = useContext(MyContext)
  const classes = useStyles()
  const chart = char.charts2
  let chartmap = chart
    ? chart["Chart1-2"]
      .filter((item, index) => index < (Object.keys(item).length - 1))
      .map((item, ind) => {
        let data = {
          labels: chart["Chart1-2"].map(item => item.Column1),
          values: chart["Chart1-2"].map(item => Object.values(item)[ind]),
          type: 'pie',
          name: chart["Chart1-2"].map(item => item.Column1),
          hole: 0.3,
          pull: 0.1,
          hovertext: "share is",
          hoverinfo: 'text+label+percent',
          sort: true,
          // domain: {
          //   column: 0
          // },
          marker: {
            colors: colorScheme,
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
          title="Chart 2.1: Composition of resources"
        />
      </Card>
      : <Card className={classes.cardMargin}>
        <CustomPieChart
          data={chartmap}
          title="Chart 2.1: Composition of resources"
        />
      </Card>
  );
}


export const Chart2 = () => {
  const char = useContext(MyContext)
  const classes = useStyles()
  const chart = char.charts2

  // console.log("chap1", chart, 'chap2', char.charts2)

  let chartmap = chart
    ? chart.Chart2.filter((item, index) => index < (Object.keys(item).length - 1))
      .map((item, ind) => {
        let data = {
          x: chart.Chart2.map((item, index) => item.Year),
          y: chart.Chart2.map((item, index) => Object.values(item)[ind]),
          type: ind === 1 ? 'bar' : 'scatter',
          yaxis: ind === 1 ? 'y2' : 'y1',
          name: Object.keys(item)[ind],
          text: chart.Chart2.map((item, index) => ind === 1 ? "Crores : " + Object.values(item)[ind] : "Percentage :" + Object.values(item)[ind]),
          mode: 'lines+markers',
          hoverinfo: 'text',
          marker: {
            symbol: "131",
            color: colorScheme[ind],
            opacity: 0.7,
            line: {
              color: 'rgb(8,48,107)',
              width: 1.5
            }
          },
          line: {
            shape: 'spline',
            smoothing: 0.1,
            width: 3,
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
          title="Chart 2.4: Trends of Revenue Receipts"
          xaxisTitle="Year"
          yaxisTitle="In Percent"
          rangeStart="0"
          rangeEnd="12"
          step="2"
          y2axisTitle="In Crore"
          y2RangeStart="0"
          y2RangeEnd="200000"
          y2Step="20000"
        /></Card>
      : <Card >
        <CustomLineChart data={chartmap}
          title="Chart 2.4: Trends of Revenue Receipts"
          xaxisTitle="Year"
          yaxisTitle="In Percent"
          rangeStart="0"
          rangeEnd="20"
          step="2"
          y2axisTitle="In Crore"
          y2RangeStart="0"
          y2RangeEnd="200000"
          y2Step="20000"
        />
      </Card>
  );
}

export const Chart3 = () => {
  const char = useContext(MyContext)
  const classes = useStyles()
  const chart = char.charts2

  let chartmap = chart
    ? chart.Chart3.filter((item, index) => index < (Object.keys(item).length - 1))
      .map((item, ind) => {
        let data = {
          x: chart.Chart3.map((item, index) => item.Year),
          y: chart.Chart3.map((item, index) => Object.values(item)[ind]),
          type: 'scatter',
          name: Object.keys(item)[ind],
          text: chart.Chart3.map((item, index) => Object.values(item)[ind]),
          hoverinfo: "none",
          mode: "markers+lines+text",
          textposition: "top",
          marker: {
            symbol: "131",
            color: colorScheme[ind],
            opacity: 1,
            line: {
              color: 'rgb(8,48,107)',
              width: 1.5
            }
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
      ?
      <Card className={classes.cardColored}>
        <CustomLineChart data={chartmap}
          title="Chart 2.5: Trends of components of Revenue Receipts"
          xaxisTitle="Year"
          yaxisTitle="In Crore"
          rangeStart="0"
          rangeEnd="120000"
          step="10000"
          legendX="0.8"
          legendY="1.2"
        /></Card>
      : <Card >
        <CustomLineChart data={chartmap}
          title="Chart 2.5: Trends of components of Revenue Receipts"
          xaxisTitle="Year"
          yaxisTitle="In Crore"
          rangeStart="0"
          rangeEnd="120000"
          step="10000"
        />
      </Card>
  );
}


export const Chart4 = () => {

  const char = useContext(MyContext)
  const classes = useStyles()
  const chart = char.charts2
  const kastam = () => {
    let chartTwo = []
    for (let i = 0; i <= chart.Chart4.map((item) => Object.keys(item))[0].length - 2; i++) {
      chartTwo.push(
        {
          x: chart.Chart4.map((i) => i.Year),
          y: chart.Chart4.map((it) => it[chart.Chart4.map((item) => Object.keys(item))[0][i]]),
          type: 'bar',
          // width: 0.4,
          name: chart.Chart4.map((item) => Object.keys(item))[0][i],
          hoverinfo: 'y',
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
      ? <Card className={classes.cardColored}>
        <CustomBarChart
          data={kastam()}
          title='Chart 2.6: Growth of Own Tax Revenue during 2015-20'
          xaxisTitle="Sector"
          yaxisTitle="Contribution to GDP"
          rangeStart="0"
          rangeEnd="120000"
          step="20000"
          barmode="stack"
          legendX="1"
          legendY="1.2"
        /></Card>
      : <Card className={classes.cardMargin}>
        <CustomBarChart
          data={kastam()}
          title='Chart 2.6: Growth of Own Tax Revenue during 2015-20"'
          xaxisTitle="Sector"
          yaxisTitle="Contribution to GDP"
          rangeStart="0"
          rangeEnd="120000"
          step="20000"
          barmode="stack"
          legendX="1"
          legendY="1.2"
        />
      </Card>
  )
}

export const Chart7 = () => {

  const char = useContext(MyContext)
  const classes = useStyles()
  const chart = char.charts2

  let chartTwo = chart
    ? chart.Chart7.filter((item, index) => index < (Object.keys(item).length - 1))
      .map((item, ind) => {
        let data = {
          x: chart.Chart7.map((item) => item.Year),
          y: chart.Chart7.map((item) => Object.values(item)[ind]),
          type: 'bar',
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
          title='Chart 2.7: Total Expenditure – Trends in share of its components'
          xaxisTitle="Sector"
          yaxisTitle="Contribution to GDP"
          rangeStart="0"
          rangeEnd="100"
          step="10"
          barmode="stack"
        /></Card>
      : <Card className={classes.cardMargin}>
        <CustomBarChart
          data={chartTwo}
          title='Chart 2.7: Total Expenditure – Trends in share of its components'
          xaxisTitle="Sector"
          yaxisTitle="Contribution to GDP"
          rangeStart="0"
          rangeEnd="100"
          step="10"
          barmode="stack"
        />
      </Card>
  )
}

export const Chart8 = () => {

  const char = useContext(MyContext)
  const classes = useStyles()
  const chart = char.charts2
  let chartTwo = chart
    ? chart.Chart8.filter((item, index) => index < (Object.keys(item).length - 1))
      .map((item, ind) => {
        let data = {
          x: chart.Chart8.map((item) => item.Year),
          y: chart.Chart8.map((item) => Object.values(item)[ind]),
          type: 'bar',
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
          title='Chart 2.8: Total expenditure – Expenditure by activities'
          xaxisTitle="Sector"
          yaxisTitle="Contribution to GDP"
          rangeStart="0"
          rangeEnd="100"
          step="10"
          barmode="stack"
        /></Card>
      : <Card className={classes.cardMargin}>
        <CustomBarChart
          data={chartTwo}
          title='Chart 2.8: Total expenditure – Expenditure by activities'
          xaxisTitle="Sector"
          yaxisTitle="Contribution to GDP"
          rangeStart="0"
          rangeEnd="100"
          step="10"
          barmode="stack"
        />
      </Card>
  )
}

export const Chart9 = () => {
  const char = useContext(MyContext)
  const classes = useStyles()
  const chart = char.charts2
  let chartmap = chart
    ? chart["Chart9"]
      .filter((item, index) => index < (Object.keys(item).length - 1))
      .map((item, ind) => {
        let data = {
          labels: chart["Chart9"].map(item => item.Sector),
          values: chart["Chart9"].map(item => Object.values(item)[ind]),
          type: 'pie',
          name: chart["Chart9"].map(item => item.Sector),
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
          title="Chart 2.9: Sector-wise distribution of revenue expenditure"
        />
      </Card>
      : <Card className={classes.cardMargin}>
        <CustomPieChart
          data={chartmap}
          title="Chart 2.9: Sector-wise distribution of revenue expenditure"
        />
      </Card>
  );
}


export const Chart10 = () => {

  const char = useContext(MyContext)
  const classes = useStyles()
  const chart = char.charts2

  const kastam = () => {
    let chartTwo = []
    for (let i = 0; i <= chart.Chart10.map((item) => Object.keys(item))[0].length - 2; i++) {
      chartTwo.push(
        {
          x: chart.Chart10.map((it) => it[chart.Chart10.map((item) => Object.keys(item))[0][i]]),
          y: chart.Chart10.map((i) => i.Year),
          type: 'bar',
          name: chart.Chart10.map((item) => Object.keys(item))[0][i],
          text: "Percentage : ",
          hoverinfo: 'text+x',
          width: 0.3,
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
      ? <Card className={classes.cardColored}>
        <CustomBarChart
          data={kastam()}
          title='Chart 2.10: Share of Committed Expenditure in Revenue Expenditure'
          xaxisTitle="Percentage"
          yaxisTitle="Year"
          rangeStart="2015-16"
          rangeEnd="2020-21"
          step="1"
          barmode="stack"
          legendX="1"
          legendY="1"
        /></Card>
      : <Card className={classes.cardMargin}>
        <CustomBarChart
          data={kastam()}
          title='Chart 2.10: Share of Committed Expenditure in Revenue Expenditure'
          xaxisTitle="Sector"
          yaxisTitle="Contribution to GDP"
          rangeStart="0"
          rangeEnd="100"
          step="5"
          barmode="stack"
        />
      </Card>
  )
}

export const Chart11 = () => {
  const char = useContext(MyContext)
  const classes = useStyles()
  const chart = char.charts2
  let chartmap = chart
    ? chart["Chart11"]
      .filter((item, index) => index < (Object.keys(item).length - 1))
      .map((item, ind) => {
        let data = {
          labels: chart["Chart11"].map(item => item.Sector),
          values: chart["Chart11"].map(item => Object.values(item)[1]),
          type: 'pie',
          name: chart["Chart11"].map(item => item.Sector),
          hole: 0.3,
          pull: 0.1,
          hovertext: "received subsidies of(in crores): ",
          hoverinfo: 'text+label+value',
          textinfo: 'value',
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
          title="Chart 2.11: Subsidies during 2019-20"
        />
      </Card>
      : <Card className={classes.cardMargin}>
        <CustomPieChart
          data={chartmap}
          title="Chart 2.11: Subsidies during 2019-20"
        />
      </Card>
  );
}

export const Chart12 = () => {
  const char = useContext(MyContext)
  const classes = useStyles()
  const chart = char.charts2

  // console.log("chap1", chart, 'chap2', char.charts2)

  let chartmap = chart
    ? chart.Chart12.filter((item, index) => index < (Object.keys(item).length - 1))
      .map((item, ind) => {
        let data = {
          x: chart.Chart12.map((item, index) => item.Year),
          y: chart.Chart12.map((item, index) => Object.values(item)[ind]),
          type: ind === 2 ? 'scatter' : 'bar',
          yaxis: ind === 2 ? 'y1' : 'y2',
          name: Object.keys(item)[ind],
          hoverinfo: 'y',
          marker: {
            symbol: "131",
            color: colorScheme[ind],
            opacity: 0.7,
            line: {
              color: 'rgb(8,48,107)',
              width: 1.5
            }
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
      ?
      <Card className={classes.cardColored}>
        <CustomLineChart data={chartmap}
          title="Chart 2.12: Trend of Capital Expenditure (inclusive of Loans and Advances) over the five-year period from 2015-16 to 2019-20"
          xaxisTitle="Year"
          yaxisTitle="In Percent"
          rangeStart="0"
          rangeEnd="120"
          step="10"
          y2axisTitle="In Crore"
          y2RangeStart="0"
          y2RangeEnd="45000"
          y2Step="5000"
        /></Card>
      : <Card >
        <CustomLineChart data={chartmap}
          title="Chart 2.12: Trend of Capital Expenditure (inclusive of Loans and Advances) over the five-year period from 2015-16 to 2019-20"
          xaxisTitle="Year"
          yaxisTitle="In Percent"
          rangeStart="0"
          rangeEnd="120"
          step="20"
          y2axisTitle="In Crore"
          y2RangeStart="0"
          y2RangeEnd="45000"
          y2Step="5000"
        />
      </Card>
  );
}


export const Chart13 = () => {

  const char = useContext(MyContext)
  const classes = useStyles()
  const chart = char.charts2
  let chartTwo = []
  for (let i = 0; i <= chart.Chart13.map((item) => Object.keys(item))[0].length - 2; i++) {
    chartTwo.push(
      {
        x: chart.Chart13 ? chart.Chart13.map((i) => i.Year) : "",
        y: chart.Chart13.map((it) => it[chart.Chart13.map((item) => Object.keys(item))[0][i]]),
        type: 'bar',
        // width: 0.4,
        name: chart.Chart13.map((item) => Object.keys(item))[0][i],
        hoverinfo: 'y',
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

  return (
    char.themeChanger
      ? <Card className={classes.cardColored}>
        <CustomBarChart
          data={chartTwo}
          title='Chart 2.13: Yearly changes in composition of Public Account balances'
          xaxisTitle="Sector"
          yaxisTitle="In crore"
          rangeStart="-7000"
          rangeEnd="7000"
          step="1000"
        // barmode="stack"
        /></Card>
      : <Card className={classes.cardMargin}>
        <CustomBarChart
          data={chartTwo}
          title='Chart 2.13: Yearly changes in composition of Public Account balances'
          xaxisTitle="Sector"
          yaxisTitle="In crores"
          rangeStart="-7000"
          rangeEnd="7000"
          step="1000"
        // barmode="stack"
        />
      </Card>
  )
}

export const Chart14 = () => {
  const char = useContext(MyContext)
  const classes = useStyles()
  const chart = char.charts2

  // console.log("chap1", chart, 'chap2', char.charts2)

  let chartmap = chart
    ? chart.Chart14.filter((item, index) => index < (Object.keys(item).length - 2))
      .map((item, ind) => {
        let data = {
          x: chart.Chart14.map((item, index) => item.Year),
          y: chart.Chart14.map((item, index) => Object.values(item)[ind]),
          type: ind === 0 ? 'scatter' : 'bar',
          yaxis: ind === 0 ? 'y1' : 'y2',
          name: Object.keys(item)[ind],
          hoverinfo: 'y',
          marker: {
            symbol: "131",
            color: colorScheme[ind],
            opacity: 0.7,
            line: {
              color: 'rgb(8,48,107)',
              width: 1.5
            }
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
      ?
      <Card className={classes.cardColored}>
        <CustomLineChart data={chartmap}
          title="Chart 2.14: Outstanding Debt and its percentage to GSDP during 2015-20"
          xaxisTitle="Year"
          yaxisTitle="In Percent"
          rangeStart="16"
          rangeEnd="20.5"
          step="0.5"
          y2axisTitle="In Crore"
          y2RangeStart="0"
          y2RangeEnd="400000"
          y2Step="50000"
        /></Card>
      : <Card >
        <CustomLineChart data={chartmap}
          title="Chart 2.14: Outstanding Debt and its percentage to GSDP during 2015-20"
          xaxisTitle="Year"
          yaxisTitle="In Percent"
          rangeStart="0"
          rangeEnd="120"
          step="20"
          y2axisTitle="In Crore"
          y2RangeStart="0"
          y2RangeEnd="45000"
          y2Step="5000"
        />
      </Card>
  );
}


export const Chart15 = () => {
  const char = useContext(MyContext)
  const classes = useStyles()
  const chart = char.charts2
  let chartmap = chart
    ? chart["Chart15"]
      .filter((item, index) => index < (Object.keys(item).length - 1))
      .map((item, ind) => {
        let data = {
          labels: chart.Chart15.map(item => item.Type),
          values: chart["Chart15"].map(item => Object.values(item)[0]),
          type: 'pie',
          name: chart["Chart15"].map(item => item.Type),
          hole: 0.3,
          pull: 0.1,
          hoverinfo: 'value+label+percent',
          textinfo: "value",
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
          title="Chart 2.15: Breakup of overall debt at the end of financial year 2019-20"
        />
      </Card>
      : <Card className={classes.cardMargin}>
        <CustomPieChart
          data={chartmap}
          title="Chart 2.15: Breakup of overall debt at the end of financial year 2019-20"
        />
      </Card>
  );
}

export const Chart16 = () => {

  const char = useContext(MyContext)
  const classes = useStyles()
  const chart = char.charts2

  let chartTwo = chart
    ? chart.Chart16.filter((item, index) => index < (Object.keys(item).length - 1))
      .map((item, ind) => {
        let data = {
          x: chart.Chart16.map((item) => item.Year),
          y: chart.Chart16.map((item) => Object.values(item)[ind]),
          type: 'bar',
          // width: 0.4,
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
          title='Chart 2.16: Internal Debt taken vis-à-vis repaid'
          xaxisTitle="Sector"
          yaxisTitle="Contribution to GDP"
          rangeStart="0"
          rangeEnd="60000"
          step="5000"
        /></Card>
      : <Card className={classes.cardMargin}>
        <CustomBarChart
          data={chartTwo}
          title='Chart 2.16: Internal Debt taken vis-à-vis repaid'
          xaxisTitle="Sector"
          yaxisTitle="Contribution to GDP"
          rangeStart="0"
          rangeEnd="60000"
          step="5000"
        />
      </Card>
  )
}

export const Chart17 = () => {
  const char = useContext(MyContext)
  const classes = useStyles()
  const chart = char.charts2
  // console.log(chart.Chart17)

  let chartmap = chart
    ? chart.Chart17.filter((item, index) => index < (Object.keys(item).length - 1))
      .map((item, ind) => {
        let data = {
          x: chart.Chart17.map((item) => item.Year),
          y: chart.Chart17.map((item) => Object.values(item)[ind]),
          type: 'scatter',
          name: Object.keys(item)[ind],
          text: chart.Chart17.map((item) => Object.values(item)[ind]),
          hoverinfo: "y",
          mode: "markers+lines+text",
          textposition: ind % 2 === 0 ? "top-left" : "bottom-right",
          marker: {
            symbol: "131",
            color: colorScheme[ind],
            opacity: 1,
            line: {
              color: 'rgb(8,48,107)',
              width: 1.5
            }
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
      ?
      <Card className={classes.cardColored}>
        <CustomLineChart data={chartmap}
          title="Chart 2.17: Component wise debt trends"
          xaxisTitle="Year"
          yaxisTitle="In Percent"
          rangeStart="-20000"
          rangeEnd="50000"
          step="5000"
          legendX="1"
        /></Card>
      : <Card >
        <CustomLineChart data={chartmap}
          title="Chart 2.17: Component wise debt trends"
          xaxisTitle="Year"
          yaxisTitle="In Percent"
          rangeStart="-20000"
          rangeEnd="50000"
          step="5000"
          legendX="1"
        />
      </Card>
  );
}


export const Chart18 = () => {

  const char = useContext(MyContext)
  const classes = useStyles()
  const chart = char.charts2

  let chartTwo = chart
    ? chart.Chart18.filter((item, index) => index < (Object.keys(item).length - 1))
      .map((item, ind) => {
        let data = {
          x: chart.Chart18.map((item) => item.Type),
          y: chart.Chart18.map((item) => Object.values(item)[ind]),
          type: 'scatter',
          name: Object.keys(item)[ind] + "1",
          text: chart.Chart18.map((item) => Object.values(item)[ind]),
          hoverinfo: "none",
          mode: "markers+lines+text",
          textposition: "top-left",
          marker: {
            color: colorScheme[ind],
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
        <CustomLineChart
          data={chartTwo}
          title='Chart 2.18: Trends of Debt Sustainability indicators'
          xaxisTitle="Sector"
          yaxisTitle="In crores"
          rangeStart="0"
          rangeEnd="40"
          step="5"
        /></Card>
      : <Card className={classes.cardMargin}>
        <CustomLineChart
          data={chartTwo}
          title='Chart 2.18: Trends of Debt Sustainability indicators'
          xaxisTitle="Sector"
          yaxisTitle="In crores"
          rangeStart="0"
          rangeEnd="40"
          step="5"
        />
      </Card>
  )
}

export const Chart19 = () => {
  const char = useContext(MyContext)
  const classes = useStyles()
  const chart = char.charts2

  let chartmap = chart
    ? chart.Chart19.filter((item, index) => index < (Object.keys(item).length - 2))
      .map((item, ind) => {
        let data = {
          x: chart.Chart19.map((item) => item.Year),
          y: chart.Chart19.map((item) => Object.values(item)[ind]),
          type: 'scatter',
          name: Object.keys(item)[ind],
          hoverinfo: 'y',
          marker: {
            symbol: "131",
            color: colorScheme[ind],
            opacity: 1,
            line: {
              color: 'rgb(8,48,107)',
              width: 1.5
            }
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
      ?
      <Card className={classes.cardColored}>
        <CustomLineChart data={chartmap}
          title="Chart 2.18: Market Loans vis-à-vis Cash Balance"
          xaxisTitle="Year"
          yaxisTitle="In Percent"
          rangeStart="0"
          rangeEnd="210000"
          step="40000"
        /></Card>
      : <Card >
        <CustomLineChart data={chartmap}
          title="Chart 2.18: Market Loans vis-à-vis Cash Balance"
          xaxisTitle="Year"
          yaxisTitle="In Percent"
          rangeStart="0"
          rangeEnd="210000"
          step="40000"
        />
      </Card>
  );
}


export const Chart20 = () => {
  const char = useContext(MyContext)
  const classes = useStyles()
  const chart = char.charts2

  let chartmap = chart
    ? chart.Chart20.filter((item, index) => index < (Object.keys(item).length - 1))
      .map((item, ind) => {
        let data = {
          x: chart.Chart20.map((item) => item.Month),
          y: chart.Chart20.map((item) => Object.values(item)[ind]),
          type: 'scatter',
          name: Object.keys(item)[ind],
          hoverinfo: 'y',
          marker: {
            symbol: "131",
            color: colorScheme[ind],
            opacity: 1,
            line: {
              color: 'rgb(8,48,107)',
              width: 1.5
            }
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
      ?
      <Card className={classes.cardColored}>
        <CustomLineChart data={chartmap}
          title="Chart 2.19: Month wise movement of Cash Balance Investment Account and market loans during 2019-20"
          xaxisTitle="Year"
          yaxisTitle="In Percent"
          rangeStart="0"
          rangeEnd="40000"
          step="8000"
        /></Card>
      : <Card >
        <CustomLineChart data={chartmap}
          title="Chart 2.19: Month wise movement of Cash Balance Investment Account and market loans during 2019-20"
          xaxisTitle="Year"
          yaxisTitle="In Percent"
          rangeStart="0"
          rangeEnd="40000"
          step="8000"
        />
      </Card>
  );
}



export const Chart21 = () => {
  const char = useContext(MyContext)
  const classes = useStyles()
  const chart = char.charts2

  let chartmap = chart
    ? chart.Chart21.filter((item, index) => index < (Object.keys(item).length))
      .map((item, ind) => {
        let data = {
          x: chart.Chart21.map((item) => item.Month),
          y: chart.Chart21.map((item) => Object.values(item)[ind]),
          type: 'scatter',
          name: Object.keys(item)[ind],
          showlegend: ind === 1 ? false : true,
          hoverinfo: 'y',
          marker: {
            symbol: "131",
            color: colorScheme[ind],
            opacity: 1,
            line: {
              color: 'rgb(8,48,107)',
              width: 1.5
            }
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
      ?
      <Card className={classes.cardColored}>
        <CustomLineChart data={chartmap}
          title="Chart 2.20: Month-wise movement of Cash Balances and Net Cash Balance Investments during the year"
          xaxisTitle="Year"
          yaxisTitle="In Percent"
          rangeStart="-8000"
          rangeEnd="20000"
          step="1000"
        /></Card>
      : <Card >
        <CustomLineChart data={chartmap}
          title="Chart 2.20: Month-wise movement of Cash Balances and Net Cash Balance Investments during the year"
          xaxisTitle="Year"
          yaxisTitle="In Percent"
          rangeStart="-8000"
          rangeEnd="20000"
          step="8000"
        />
      </Card>
  );
}