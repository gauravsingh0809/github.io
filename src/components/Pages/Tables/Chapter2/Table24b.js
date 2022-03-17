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
        name: "Outstanding in respect of",
        selector: "Outstanding in respect of",
        // grow:0.05,
        wrap: true,
        format: data => data["Outstanding in respect of"].toLocaleString('en-IN')
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
        wrap: true,
        format: data => data["1"].toLocaleString('en-IN')
    },
    {
        name: "Difference",
        selector: "Difference",
        wrap: true,
        format: data => data["Difference"].toLocaleString('en-IN')
    }
];

const customStyles = styles;

const Table24b = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.24b: Equity, loans and guarantees outstanding as per Finance Accounts vis-à-vis records of SPSUs"
                    columns={columns}
                    data={ctx.tables2.Table25 ? ctx.tables2.Table25.t25 : ""}
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
