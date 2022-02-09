import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "Sl No",
        selector: "Sl No",
        // grow: ,
        // wrap: true,
        width:'60px',
    },
    {
        name: "Grant No",
        selector: "Grant No",
        grow:0.5 ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "Head of account",
        selector: "Head of account",
        grow:0.5,
        wrap: true,
        // format: data => data["Head of account"].toLocaleString('en-IN')
    },
    {
        name: "Budget Provision",
        selector: "Budget Provision",
        grow:0.05,
        wrap: true,
        format: data => data["Budget Provision"].toLocaleString('en-IN')
    },
    {
        name: "Remarks",
        selector: "Remarks",
        // grow:0.05,
        wrap: true,
        format: data => data["Remarks"].toLocaleString('en-IN')
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



const Table9 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 3.9: Error in Budgeting under voted/charged sections"
                    columns={columns}
                    data={ctx.reportData.Chap3Tables.Table9}
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

export default Table9;