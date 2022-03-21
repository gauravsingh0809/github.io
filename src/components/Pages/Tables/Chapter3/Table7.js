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
    },
    {
        name: "Number of grants covered",
        selector: "No of grants covered",
        wrap: true,
    },
    {
        name: "Number of cases",
        selector: "No of cases",
        // grow:0.2,
        wrap: true,
        format: data => data["No of cases"].toLocaleString('en-IN')
    },
    {
        name: "Amount",
        selector: "Amount",
        wrap: true,
        format: data => data["Amount"].toLocaleString('en-IN')
    }
];

const customStyles = styles;

const Table7 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 3.7: Additional amounts released through executive orders during 2018-19 to 2020-21"
                    columns={columns}
                    data={ctx.tables3.Table7}
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