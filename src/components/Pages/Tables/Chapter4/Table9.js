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
        grow:0.2
    },
    {
        name: "Head of account",
        selector: "Head of account",
        wrap: true,
        grow:0.4
    },
    {
        name: "Description",
        selector: "Description",
        wrap: true,
        grow:0.6
    },
    {
        name: "Amount",
        selector: "Amount",
        wrap: true,
        grow:0.4,
        format: data => data["Amount"].toLocaleString('en-IN')
    },
    {
        name: "Reason",
        selector: "Reason",
        wrap: true,
    }
];

const customStyles = styles;

const Table9 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 4.9: Adverse balance under DDR Heads"
                    columns={columns}
                    data={ctx.tables4.Table9 ? ctx.tables4.Table9.t9 : ""}
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

export default Table9;