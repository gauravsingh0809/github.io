import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
  {
    name: "Company/Corporation",
    selector: "CompanyCorporation",
    grow:3 ,
    wrap: true,
    // width:'35px',
  },
  {
    name: "Cumulative loss at the end of 2016-17",
    selector: "Cumulative loss at the end of 2016-17",
    // grow:0.05,
    wrap: true,
    format: data => data["Cumulative loss at the end of 2016-17"].toLocaleString('en-IN')
  },
  {
    name: "Cumulative loss at the end of 2017-18",
    selector: "Cumulative loss at the end of 2017-18",
    // grow:0.05,
    wrap: true,
    format: data => data["Cumulative loss at the end of 2017-18"].toLocaleString('en-IN')
  },
  {
    name: "Cumulative loss at the end of 2018-19",
    selector: "Cumulative loss at the end of 2018-19",
    // grow:0.05,
    wrap: true,
    format: data => data["Cumulative loss at the end of 2018-19"].toLocaleString('en-IN')
  },
  {
    name: "Investment made up to 2019-20",
    selector: "Investment made up to 2019-20",
    // grow:0.05,
    wrap: true,
    format: data => data["Investment made up to 2019-20"].toLocaleString('en-IN')
  }
];


const customStyles = {
  header: {
    style: {
      fontSize: '22px',
      color: '#fff',
      backgroundColor: '#ff6359',
      minHeight: '56px',
      textAlign: "center",
    },
  },
  rows: {
    style: {
      minHeight: '50px', // override the row height
    }
  },
  headCells: {
    style: {
      '&:not(:last-of-type)': {
        borderRightStyle: 'solid',
        borderRightWidth: '1px',
        borderRightColor: "black",
      },
      fontSize: '12px',
      fontWeight: '500',
      textTransform: 'uppercase',
      padding: '10px'
    },
  },
  cells: {
    style: {
      '&:not(:last-of-type)': {
        borderRightStyle: 'solid',
        borderRightWidth: '1px',
        borderRightColor: '#aaa',
      },
      fontSize: '14px',
      paddingLeft: '8px',
      // backgroundColor: 'rgba(255,255,255,0)',
    },
  },
};



const Table23 = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="Table 2.23: Investments made in loss making Companies"
          columns={columns}
          data={ctx.reportData.Chap2Tables.Table23}
          customStyles={customStyles}
          striped
          // conditionalRowStyles={conditionalRowStyles}
          highlightOnHover
          pointerOnHover
        // pagination
        />
      </Card>
    </div>
  );
}

export default Table23;
