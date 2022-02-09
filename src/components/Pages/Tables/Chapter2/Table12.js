import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "",
        selector: "0",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "XIV FC assessment",
        selector: "XIV FC assessment",
        // grow:0.05,
        wrap: true,
        format: data => data["XIV FC assessment"].toLocaleString('en-IN')
    },
    {
        name: "Budget Estimates",
        selector: "Budget Estimates",
        // grow:0.05,
        wrap: true,
        format: data => data["Budget Estimates"].toLocaleString('en-IN')
    },
    {
        name: "Actual",
        selector: "Actual",
        wrap: true,
        format: data => data["Actual"].toLocaleString('en-IN')
    },
    {
        name: "Percentage variation of actual over",
        selector: "Percentage variation of actual over",
        wrap: true,
        format: data => data["Percentage variation of actual over"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "1",
        wrap: true,
        format: data => data["1"].toLocaleString('en-IN')
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



const Table12  = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.12: Tax and non-tax receipts vis-à-vis projections during 2019-20"
                    columns={columns}
                    data={ctx.reportData.Chap2Tables.Table12  }
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

export default Table12;
