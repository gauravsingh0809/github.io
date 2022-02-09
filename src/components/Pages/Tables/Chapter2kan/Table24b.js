import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "Sl No",
        selector: "Sl No",
        grow:0.1 ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "Outstanding in respect of",
        selector: "Outstanding in respect of",
        // grow:0.05,
        wrap: true,
        // format: data => data["Outstanding in respect of"].toLocaleString('en-IN')
    },
    {
        name: "Amount as per",
        selector: "Amount as per",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Amount as per"].toLocaleString('en-IN')
    },
    {
        name: " ",
        selector: "1",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["1"].toLocaleString('en-IN')
    },
    {
        name: "Difference",
        selector: "Difference",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        // format: data => data["Difference"].toLocaleString('en-IN')
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



const Table24b = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.25: Equity, loans and guarantees outstanding as per Finance Accounts vis-à-vis records of SPSUs"
                    columns={columns}
                    data={ctx.reportData.Chap2Tables.Table24b}
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

export default Table24b;
