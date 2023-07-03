import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
  {
    name: " ",
    selector: "1",
    // grow: ,
    wrap: true,
    // width:'35px',
  },
  {
    name: " ",
    selector: "2",
    // grow:0.05,
    wrap: true,
    // format: data => data["Investment made up to 2019 20"].toLocaleString('en-IN')
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



const Table24a = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title=" "
          columns={columns}
          data={ctx.reportData.Chap2Tables.Table24a}
          customStyles={customStyles}
          striped
          // conditionalRowStyles={conditionalRowStyles}
          highlightOnHover
          pointerOnHover
          noHeader
          noTableHead
        // pagination
        />
      </Card>
    </div>
  );
}

export default Table24a;
