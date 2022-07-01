import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "ಸಂವಿಧಾನ",
        selector: "1",
        grow: 2,
        wrap: true
    },
    {
        name: "Nature of Expenditure",
        selector: "Nature of Expenditure",
        wrap: true,
    },
    {
        name: "Original grant Appropriation",
        selector: "Original grant Appropriation",
        // grow:0.05,
        wrap: true,
        format: data => data["Original grant Appropriation"].toLocaleString('en-IN')
    },
    {
        name: "Supplementary grant Appropriation",
        selector: "Supplementary grant Appropriation",
        // grow:0.05,
        wrap: true,
        format: data => data["Supplementary grant Appropriation"].toLocaleString('en-IN')
    },
    {
        name: "Total",
        selector: "Total",
        // grow:0.05,
        wrap: true,
        format: data => data["Total"].toLocaleString('en-IN')
    },
    {
        name: "Actual expenditure",
        selector: "Actual expenditure",
        // grow:0.05,
        wrap: true,
        format: data => data["Actual expenditure"].toLocaleString('en-IN')
    },
    {
        name: "Unspent  Provision (-) / Excess over provision (+)",
        selector: "Unspent Provision Excess over provision",
        // grow:0.05,
        wrap: true,
        format: data => data["Unspent Provision Excess over provision"].toLocaleString('en-IN')
    },
    {
        name: "Amount surrendered",
        selector: "Amount surrendered",
        // grow:0.05,
        wrap: true,
        format: data => data["Amount surrendered"].toLocaleString('en-IN')
    },
    {
        name: "Amount surrendered on 31 March",
        selector: "Amount surrendered on 31 March",
        // grow:0.05,
        wrap: true,
        format: data => data["Amount surrendered on 31 March"].toLocaleString('en-IN')
    },
    {
        name: "Per cent of savings surrendered on 31 March",
        selector: "Per cent of savings surrendered on 31 March",
        // grow:0.05,
        wrap: true,
        format: data => data["Per cent of savings surrendered on 31 March"].toLocaleString('en-IN')
    }
];

const customStyles = styles;

const Table5 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 3.5: Summarised position of actual expenditure vis-à-vis original/supplementary provision"
                    columns={columns}
                    data={ctx.tables3.Table5}
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

export default Table5;