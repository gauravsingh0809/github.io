import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "Year of Maturity",
        selector: "Year of Maturity",
        grow:2 ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "Maturity Profile",
        selector: "Maturity Profile",
        // grow:0.05,
        wrap: true,
        format: data => data["Maturity Profile"].toLocaleString('en-IN')
    },
    {
        name: "Amount",
        selector: "Amount",
        // grow:0.05,
        wrap: true,
        format: data => data["Amount"].toLocaleString('en-IN',{style: 'currency', currency: 'INR'})
    },
    {
        name: "",
        selector: "1",
        // grow:0.05,
        wrap: true,
        format: data => data["1"].toLocaleString('en-IN',{style: 'currency', currency: 'INR'})
    },
    {
        name: "",
        selector: "2",
        // grow:0.05,
        wrap: true,
        format: data => data["2"].toLocaleString('en-IN',{style: 'currency', currency: 'INR'})
    },
    {
        name: "Per cent of total Public Debt",
        selector: "Per cent of total Public Debt",
        // grow:0.05,
        wrap: true,
        format: data => data["Per cent of total Public Debt"].toLocaleString('en-IN')
    }
];

const customStyles = styles;

const Table34 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.34: Maturity profile of Public Debt"
                    columns={columns}
                    data={ctx.tables2.Table35 ? ctx.tables2.Table35.t35 : ""}
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

export default Table34;
