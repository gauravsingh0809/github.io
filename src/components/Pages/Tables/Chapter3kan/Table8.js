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
        // wrap: true,
        // width:'60px',
    },
    {
        name: "Disbursements",
        selector: "Disbursements",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: " ",
        selector: "1",
        // grow:0.05,
        wrap: true,
        format: data => data["1"].toLocaleString('en-IN')
    },
    {
        name: "Savings (percentage of savings)",
        selector: "Savings (percentage of savings)",
        // grow:0.05,
        wrap: true,
        format: data => data["Savings (percentage of savings)"].toLocaleString('en-IN')
    },
    {
        name: " ",
        selector: "2",
        // grow:0.05,
        wrap: true,
        format: data => data["2"].toLocaleString('en-IN')
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
                    title="Table 3.8: Voted and Charged disbursements for the period from 2015-16 to 2019-20"
                    columns={columns}
                    data={ctx.reportData.Chap3Tables.Table8}
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

export default Table8;