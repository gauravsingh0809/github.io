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
        wrap: true,
        // width:'35px',
    },
    {
        name: "Total Allocation",
        selector: "Total Allocation",
        // grow:0.05,
        wrap: true,
        format: data => data["Total Allocation"].toLocaleString('en-IN')
    },
    {
        name: "Total Category 'A' allocation",
        selector: "Total Category A allocation",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Total Category A allocation"].toLocaleString('en-IN')
    },
    {
        name: "Total Category 'B' allocation",
        selector: "Total Category B allocation",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Total Category B allocation"].toLocaleString('en-IN')
    },
    {
        name: "30% of Category 'B' allocation",
        selector: "30% of Category B allocation",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["30% of Category B allocation"].toLocaleString('en-IN')
    },
    {
        name: "Percentage of Category 'A' to total allocation",
        selector: "Percentage of Category A to total allocation",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Percentage of Category A to total allocation"].toLocaleString('en-IN')
    },
    {
        name: "Percentage of Category 'B' (30%) to total allocation",
        selector: "Percentage of Category B to total allocation",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Percentage of Category B to total allocation"].toLocaleString('en-IN')
    }
];

const customStyles = styles;

const Table1 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 3.1 – Category-wise allocation during 2016-17 to 2020-21"
                    columns={columns}
                    data={ctx.tables3.Table1}
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

export default Table1;