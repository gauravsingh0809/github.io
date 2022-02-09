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
        // width:'60px',
    },
    {
        name: "Due Date for Submission",
        selector: "Due Date for Submission",
        // grow:0.5 ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "Water Resource Department",
        selector: "Water Resource Department",
        // grow:0.2 ,
        wrap: true,
        // width:'60px',
    },
    {
        name: " ",
        selector: "Water1",
        // grow:0.5 ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "Minor Irrigation Department",
        selector: "Minor Irrigation Department",
        // grow:0.5 ,
        wrap: true,
        // width:'35px',
    },
    {
        name: " ",
        selector: "Minor1",
        // grow:0.2 ,
        wrap: true,
        // width:'60px',
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



const Table18 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 3.18: Delay in submission of Budget proposal"
                    columns={columns}
                    data={ctx.reportData.Chap3Tables.Table18}
                    customStyles={customStyles}
                    striped
                    // conditionalRowStyles={conditionalRowStyles}
                    highlightOnHover
                    pointerOnHover
                    // noTableHead
                    // pagination
                />
            </Card>
        </div>
    );
}

export default Table18;