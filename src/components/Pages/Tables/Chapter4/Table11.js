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
        wrap: true,
        grow:0.2
    },
    {
        name: "Accounting Standards",
        selector: "Accounting Standards",
        wrap: true,
    },
    {
        name: "Essence of IGAS",
        selector: "Essence of IGAS",
        wrap: true,
    },
    {
        name: "Status",
        selector: "Status",
        wrap: true,
        grow:0.2
    },
    {
        name: "Impact of deficiency",
        selector: "Impact of deficiency",
        wrap: true,
    }
];

const customStyles = styles;

const Table11 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 4.11: Compliance to Accounting Standards."
                    columns={columns}
                    data={ctx.tables4.Table11 ? ctx.tables4.Table11.t11 : ""}
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

export default Table11;