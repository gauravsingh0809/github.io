import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "SlNo",
        selector: "Sl No",
        wrap: true,
        grow:0.1
    },
    {
        name: "Type of Grants",
        selector: "Type of Grants",
        wrap: true,
    },
    {
        name: "Unutilised Amount",
        selector: "Unutilised Amount",
        wrap: true,
        grow:0.2,
        format: data => data["Unutilised Amount"].toLocaleString('en-IN', {style: 'currency', currency: 'INR'})
    }
];

const customStyles = styles;

const Table7 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 4.6: Closing balances in PD Accounts"
                    columns={columns}
                    data={ctx.tables4.Table7 ? ctx.tables4.Table7.t7 : ""}
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

export default Table7;