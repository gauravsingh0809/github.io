import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "Name of the Institutions",
        selector: "Name of the Institutions",
        wrap: true,
        grow:2
    },
    {
        name: "Interest earned",
        selector: "Interest earned",
        wrap: true,
        format: data => data["Interest earned"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "1",
        wrap: true,
        format: data => data["1"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "2",
        wrap: true,
        format: data => data["2"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "3",
        wrap: true,
        format: data => data["3"].toLocaleString('en-IN')
    },
    {
        name: "Treatment of the interest amount",
        selector: "Treatment of the interest amount",
        grow:3,
        wrap: true,
        format: data => data["Treatment of the interest amount"].toLocaleString('en-IN')
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
                    title="Table 4.1: Details of interest earned and its treatment"
                    columns={columns}
                    data={ctx.reportData.Chap4Tables.Table1}
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