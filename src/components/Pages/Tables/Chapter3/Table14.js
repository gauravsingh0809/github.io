import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";

// This is Table 11 in Chapter 3 of SFR


const columns = [
    {
        name: "Year",
        selector: "Year",
        // grow:2 ,
        wrap: true,
        // width:'60px',
    },
    {
        name: "Section",
        selector: "Section",
        // grow:0.5 ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "Budget Provision",
        selector: "Budget Provision",
        // grow:0.2 ,
        wrap: true,
        // width:'60px',
    },
    {
        name: "Total",
        selector: "Total",
        // grow:0.5 ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "Expenditure",
        selector: "Expenditure",
        // grow:0.2 ,
        wrap: true,
        // width:'60px',
    },
    {
        name: "Unutilised provision and its percentage",
        selector: "Unutilised provision and its percentage",
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



const Table14 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 3.14: Budget and expenditure "
                    columns={columns}
                    data={ctx.reportData.Chap3Tables.Table14}
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

export default Table14;