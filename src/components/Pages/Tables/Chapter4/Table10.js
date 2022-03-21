import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


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

const customStyles = styles;

const Table10 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 4.10: Status of Reconciliation of Receipts and Expenditure figures"
                    columns={columns}
                    data={ctx.tables4.Table10 ? ctx.tables4.Table10.t10 : ""}
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

export default Table10;