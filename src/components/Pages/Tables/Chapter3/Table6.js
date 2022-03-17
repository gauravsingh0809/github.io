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
        // grow: ,
        // wrap: true,
        // width:'60px',
    },
    {
        name: "Disbursements",
        selector: "Disbursements",
        wrap: true,
        format: data => data["Disbursements"].toLocaleString('en-IN')
    },
    {
        name: " ",
        selector: "1",
        // grow:0.05,
        wrap: true,
        format: data => data["1"].toLocaleString('en-IN')
    },
    {
        name: "Savings (percentage of savings)",
        selector: "Savings (percentage of savings)",
        // grow:0.05,
        wrap: true,
        format: data => data["Savings (percentage of savings)"].toLocaleString('en-IN')
    },
    {
        name: " ",
        selector: "2",
        // grow:0.05,
        wrap: true,
        format: data => data["2"].toLocaleString('en-IN')
    }
];

const customStyles = styles;

const Table6 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 3.6: Voted and Charged disbursement for the period form 2016-17 to 2020-21"
                    columns={columns}
                    data={ctx.tables3.Table6}
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

export default Table6;