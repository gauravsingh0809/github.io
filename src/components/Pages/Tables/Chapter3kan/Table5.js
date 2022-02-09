import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
  {
    name: "Year",
    selector: "Year",
    // grow:0.05,
    wrap: true,
    // format: data => data["Year"].toLocaleString('en-IN')
  },
  {
    name: "No of schemes",
    selector: "No of schemes",
    // grow: 0.05,
    // width:'110px',
    wrap: true,
    format: data => data["No of schemes"].toLocaleString('en-IN')
  },
  {
    name: " ",
    selector: "1",
    // grow: ,
    wrap: true,
    // width:'35px',
  },
  {
    name: "Allocation",
    selector: "Allocation",
    // grow: 0.05,
    // width:'110px',
    wrap: true,
    format: data => data["Allocation"].toLocaleString('en-IN')
  }, {
    name: " ",
    selector: "2",
    // grow: ,
    wrap: true,
    // width:'35px',
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



const Table5 = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="Table 3.5: Details of schemes and allocation of Grant No.23 under Category B"
          columns={columns}
          data={ctx.reportData.Chap3Tables.Table5}
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

export default Table5;