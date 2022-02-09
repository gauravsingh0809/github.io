import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "Sl No",
        selector: "Sl No",
        grow:0.1,
        wrap: true,
    },
    {
        name: "Head of Account and Nomenclature",
        selector: "Head of Account and Nomenclature",
        wrap: true,
        grow:2
    },
    {
        name: "Total Expenditure",
        selector: "Total Expenditure",
        wrap: true,
    },
    {
        name: "Expenditure during last quarter",
        selector: "Expenditure during last quarter",
        wrap: true,
    },
    {
        name: " ",
        selector: "last1",
        wrap: true,
    },
    {
        name: "Expenditure during March",
        selector: "Expenditure during March",
        wrap: true,
    },
    {
        name:" ",
        selector:"last2",
        wrap:true
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

const Table22 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 3.22: Rush of expenditure during 2019-20"
                    columns={columns}
                    data={ctx.reportData.Chap3Tables.Table22}
                    customStyles={customStyles}
                    striped
                    highlightOnHover
                    pointerOnHover
                    // pagination
                />
            </Card>
        </div>
    );
}

export default Table22;