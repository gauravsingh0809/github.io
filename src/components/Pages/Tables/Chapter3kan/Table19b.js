import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "Year",
        selector: "Year",
        grow:0.1,
        wrap: true,
    },
    {
        name: "Savings",
        selector: "Savings",
        wrap: true,
    },
    {
        name: " ",
        selector: "S1",
        wrap: true,
    },
    {
        name: " ",
        selector: "S2",
        wrap: true,
    },
    {
        name: "Amount Surrendered",
        selector: "Amount Surrendered",
        wrap: true,
    },
    {
        name: " ",
        selector: "A1",
        wrap: true,
    },
    {
        name: " ",
        selector: "A2",
        wrap: true,
    },
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



const Table19b = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title=""
                    columns={columns}
                    data={ctx.reportData.Chap3Tables.Table19b}
                    customStyles={customStyles}
                    striped
                    highlightOnHover
                    pointerOnHover
                    // pagination
                    noHeader
                />
            </Card>
        </div>
    );
}

export default Table19b;