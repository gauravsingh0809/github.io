import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "Name of Department",
        selector: "Name of Department",
        wrap: true,
    },
    {
        name: "Cases of misappropriation losses thefts of Government material",
        selector: "Cases of misappropriation losses thefts of Government material",
        wrap: true,
    },
    {
        name: " ",
        selector: "1",
        wrap: true,
        grow:0.1
    },
    {
        name: "Reasons for the delay in final disposal of pending cases of misappropriation  losses  thefts etc",
        selector: "Reasons for the delay in final disposal of pending cases of misappropriation  losses  thefts etc",
        wrap: true,
    },
    {
        name: " ",
        selector: "2",
        wrap: true,
        grow:0.1
    }, 
    {
        name: " ",
        selector: "3",
        wrap: true,
        grow:0.1
    },
    {
        name: " ",
        selector: "4",
        wrap: true,
        grow:0.1
    },
    {
        name: " ",
        selector: "5",
        wrap: true,
    },
    {
        name: " ",
        selector: "6",
        wrap: true,
        grow:0.1
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



const Table12 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 4.12: Pending cases of misappropriation, losses and thefts etc."
                    columns={columns}
                    data={ctx.reportData.Chap4Tables.Table12}
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