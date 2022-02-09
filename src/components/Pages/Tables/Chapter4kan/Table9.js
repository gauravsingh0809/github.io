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
        name: "Total No of Controlling officers",
        selector: "Total No of Controlling officers",
        wrap: true,
        format: data => data["Total No of Controlling officers"].toLocaleString('en-IN')
    },
    {
        name: "Fully reconciled",
        selector: "Fully reconciled",
        wrap: true,
        format: data => data["Fully reconciled"].toLocaleString('en-IN')
    },
    {
        name: "Partially Reconciled",
        selector: "Partially Reconciled",
        wrap: true,
        format: data => data["Partially Reconciled"].toLocaleString('en-IN')
    },
    {
        name: "Not reconciled at all",
        selector: "Not reconciled at all",
        wrap: true,
        format: data => data["Not reconciled at all"].toLocaleString('en-IN')
    },
    {
        name: "CCOs not transacted during the month",
        selector: "CCOs not transacted during the month",
        wrap: true,
    },
    {
        name: "Total Amount",
        selector: "Total Amount",
        wrap: true,
        format: data => data["Total Amount"].toLocaleString('en-IN')
    },
    {
        name: "Reconciled Amount",
        selector: "Reconciled Amount",
        wrap: true,
        format: data => data["Reconciled Amount"].toLocaleString('en-IN')
    },
    {
        name: "Percentage",
        selector: "Percentage",
        wrap: true,
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
                    title="Table 4.9: Status of Reconciliation of Receipts and Expenditure figures"
                    columns={columns}
                    data={ctx.reportData.Chap4Tables.Table9}
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