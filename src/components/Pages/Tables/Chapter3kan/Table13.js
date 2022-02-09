import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "Major Head/Description",
        selector: "Major HeadDescription",
        grow:2 ,
        wrap: true,
        // width:'60px',
    },
    {
        name: "1st Qtr",
        selector: "1st Qtr",
        // grow:0.5 ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "2nd Qtr",
        selector: "2nd Qtr",
        // grow:0.2 ,
        wrap: true,
        // width:'60px',
    },
    {
        name: "3rd Qtr",
        selector: "3rd  Qtr",
        // grow:0.5 ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "4th Qtr",
        selector: "4th Qtr",
        // grow:0.2 ,
        wrap: true,
        // width:'60px',
    },
    {
        name: "Total Expenditure",
        selector: "Total Expenditure",
        // grow:0.5 ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "Expenditure in March",
        selector: "Expenditure in March",
        // grow:0.2 ,
        wrap: true,
        // width:'60px',
    },
    {
        name: "Expenditure in March as a percentage of TE",
        selector: "Expenditure in March as a percentage of TE",
        // grow:0.5 ,
        wrap: true,
        // width:'35px',
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



const Table13 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 3.13: Quantum of Expenditure in March"
                    columns={columns}
                    data={ctx.reportData.Chap3Tables.Table13}
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

export default Table13;