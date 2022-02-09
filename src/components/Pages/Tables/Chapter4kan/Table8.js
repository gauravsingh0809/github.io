import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "SlNo",
        selector: "Sl No",
        wrap: true,
        grow:0.2
    },
    {
        name: "Head of account",
        selector: "Head of account",
        wrap: true,
        grow:0.4
    },
    {
        name: "Description",
        selector: "Description",
        wrap: true,
        grow:0.6
    },
    {
        name: "Amount",
        selector: "Amount",
        wrap: true,
        grow:0.4,
        format: data => data["Amount"].toLocaleString('en-IN')
    },
    {
        name: "Reason",
        selector: "Reason",
        wrap: true,
    }
];


const conditionalRowStyles = [
  {
    when: row => row["Sl No"] === 'Public Debt' || row["Sl No"] === 'Loans and Advances',
    style: (row) => ({
      backgroundColor: row["Sl No"] ? 'rgba(63, 195, 128, 0.9)' : "#fff",
      color: 'white',
      '&:hover': {
        cursor: 'pointer',
      },
    }),
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

const Table8 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 4.8: Adverse balance under DDR Heads"
                    columns={columns}
                    data={ctx.reportData.Chap4Tables.Table8}
                    customStyles={customStyles}
                    striped
                    conditionalRowStyles={conditionalRowStyles}
                    highlightOnHover
                    pointerOnHover
                    // pagination
                />
            </Card>
        </div>
    );
}

export default Table8;