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
        name: "Opening Balance",
        selector: "Opening Balance",
        // grow:0.05,
        wrap: true,
        format: data => data["Opening Balance"].toLocaleString('en-IN')
    },
    {
        name: "Closing Balance",
        selector: "Closing Balance",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Closing Balance"].toLocaleString('en-IN')
    },
    {
        name: "IncreaseDecrease",
        selector: "IncreaseDecrease",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["IncreaseDecrease"].toLocaleString('en-IN')
    },
    {
        name: "Interest earned",
        selector: "Interest earned",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Interest earned"].toLocaleString('en-IN')
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



const Table40 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.41: Cash Balance Investment Account (Major Head-8673)"
                    columns={columns}
                    data={ctx.reportData.Chap2Tables.Table40}
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

export default Table40;
