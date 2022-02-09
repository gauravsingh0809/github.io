import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "Year",
        selector: "Year",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "Total allocation for the year",
        selector: "Total allocation for the year",
        // grow:0.05,
        wrap: true,
        format: data => data["Total allocation for the year"].toLocaleString('en-IN')
    },
    {
        name: "Total Category A allocation",
        selector: "Total Category A allocation",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Total Category A allocation"].toLocaleString('en-IN')
    },
    {
        name: "Total Category B allocation",
        selector: "Total Category B allocation",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Total Category B allocation"].toLocaleString('en-IN')
    },
    {
        name: "30% of Category B allocation",
        selector: "30% of Category B allocation",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["30% of Category B allocation"].toLocaleString('en-IN')
    },
    {
        name: "Percentage of Category A to total allocation",
        selector: "Percentage of Category A to total allocation",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Percentage of Category A to total allocation"].toLocaleString('en-IN')
    },
    {
        name: "Percentage of Category B (30%) to total allocation",
        selector: "Percentage of Category B (30%) to total allocation",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Percentage of Category B (30%) to total allocation"].toLocaleString('en-IN')
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



const Table1 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 3.1: Category-wise allocation during 2015-16 to 2019-20"
                    columns={columns}
                    data={ctx.reportData.Chap3Tables.Table1}
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

export default Table1;