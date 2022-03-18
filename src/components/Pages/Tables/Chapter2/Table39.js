import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "Accounts",
        selector: "Accounts",
        grow: 2.5,
        wrap: true,
        // width:'35px',
    },
    {
        name: "Opening balance on 1 April 2020",
        selector: "Opening balance on 01-04-2020",
        // grow:0.05,
        wrap: true,
        format: data => data["Opening balance on 01-04-2020"].toLocaleString('en-IN')
    },
    {
        name: "Closing balance on 31 March 2021",
        selector: "Closing balance on 31-03-2021",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Closing balance on 31-03-2021"].toLocaleString('en-IN')
    }
];

const customStyles = styles;

const Table39 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.38: Cash Balances and their investment(in crores)"
                    columns={columns}
                    data={ctx.tables2.Table40 ? ctx.tables2.Table40.t40 : ""}
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

export default Table39;
