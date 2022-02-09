import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "Year",
        selector: "Year",
        wrap: true,
    },
    {
        name: "Opening Balance",
        selector: "Opening Balance",
        wrap: true,
        format: data => data["Opening Balance"].toLocaleString('en-IN')
    },
    {
        name: "Receipts/Deposits",
        selector: "ReceiptsDeposits",
        wrap: true,
        format: data => data["ReceiptsDeposits"].toLocaleString('en-IN')
    },
    {
        name: "Withdrawals",
        selector: "Withdrawals",
        wrap: true,
        format: data => data["Withdrawals"].toLocaleString('en-IN')
    },
    {
        name: "Closing balance",
        selector: "Closing balance",
        wrap: true,
        format: data => data["Closing balance"].toLocaleString('en-IN')
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



const Table5 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 4.5: Funds kept in PD Accounts"
                    columns={columns}
                    data={ctx.reportData.Chap4Tables.Table5}
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

export default Table5;