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
        wrap: true
    },
    {
        name: "Classification",
        selector: "Classification",
        wrap: true
    },
    {
        name: "Allocation during 2020-21",
        selector: "Allocation during 2020-21",
        wrap: true,
        format: data => data["Allocation during 2020-21"].toLocaleString('en-IN')
    },
    {
        name: "Expenditure",
        selector: "Expenditure",
        wrap: true,
        format: data => data["Expenditure"].toLocaleString('en-IN')
    },
    {
        name: "Savings (in percentage)",
        selector: "Savings (in percentage)",
        wrap: true,
        format: data => data["Savings (in percentage)"].toLocaleString('en-IN')
    }
];

const customStyles = styles;

const Table3 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 3.3: Details of allocation under Child Centric Programme/Schemes"
                    columns={columns}
                    data={ctx.tables3.Table3}
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

export default Table3;