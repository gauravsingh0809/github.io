import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
  {
    name: "Section/Group",
    selector: "SectionGroup",
    wrap: true,
  },
  {
    name: "Apr",
    selector: "Apr",
    wrap: true,
  },
  {
    name: "May",
    selector: "May",
    wrap: true,
  },
  {
    name: "Jun",
    selector: "Jun",
    wrap: true,
  },
  {
    name: "Jul",
    selector: "Jul",
    wrap: true,
  },
  {
    name: "Aug",
    selector: "Aug",
    wrap: true,
  },
  {
    name: "Sep",
    selector: "Sep",
    wrap: true,
  },
  {
    name: "Oct",
    selector: "Oct",
    wrap: true,
  },
  {
    name: "Nov",
    selector: "Nov",
    wrap: true,
  },
  {
    name: "Dec",
    selector: "Dec",
    wrap: true,
  },
  {
    name: "Jan",
    selector: "Jan",
    wrap: true,
  },
  {
    name: "Feb",
    selector: "Feb",
    wrap: true,
  },
  {
    name: "Mar",
    selector: "Mar",
    wrap: true,
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



const Table11 = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="Table 4.11: Number of accounts excluded from Monthly Civil Accounts during 2019-20"
          columns={columns}
          data={ctx.reportData.Chap4Tables.Table11}
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

export default Table11;