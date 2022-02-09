import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "Year of Maturity",
        selector: "Year of Maturity",
        grow:2 ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "Maturity Profile",
        selector: "Maturity Profile",
        // grow:0.05,
        wrap: true,
        format: data => data["Maturity Profile"].toLocaleString('en-IN')
    },
    {
        name: "Amount",
        selector: "Amount",
        // grow:0.05,
        wrap: true,
        format: data => data["Amount"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "1",
        // grow:0.05,
        wrap: true,
        format: data => data["1"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "2",
        // grow:0.05,
        wrap: true,
        format: data => data["2"].toLocaleString('en-IN')
    },
    {
        name: "Per cent of total Public Debt",
        selector: "Per cent of total Public Debt",
        // grow:0.05,
        wrap: true,
        format: data => data["Per cent of total Public Debt"].toLocaleString('en-IN')
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



const Table34 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.35: Maturity profile of Public Debt"
                    columns={columns}
                    data={ctx.reportData.Chap2Tables.Table34}
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

export default Table34;
