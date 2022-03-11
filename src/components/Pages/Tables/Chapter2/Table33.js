import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "Sl No",
        selector: "Sl No",
        grow:0.1 ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "Particulars",
        selector: "Particulars",
        grow:2 ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "Receipt",
        selector: "Receipt",
        // grow:0.05,
        wrap: true,
        format: data => data["Receipt"].toLocaleString('en-IN',{style: 'currency', currency: 'INR'})
    },
    {
        name: "Disbursement",
        selector: "Disbursement",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Disbursement"].toLocaleString('en-IN',{style: 'currency', currency: 'INR'})
    },
    {
        name: "Net",
        selector: "Net",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Net"].toLocaleString('en-IN',{style: 'currency', currency: 'INR'})
    }
];

const customStyles = styles;

const Table33 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.34: Receipts and Disbursements under components financing the fiscal deficit during 2019-20"
                    columns={columns}
                    data={ctx.tables2.Table34 ? ctx.tables2.Table34.t34 : ""}
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

export default Table33;
