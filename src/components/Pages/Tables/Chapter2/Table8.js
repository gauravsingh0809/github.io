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
        wrap: true,
    },
    
    {
        name: "To be transferred as per XIV FC recommendations",
        selector: "To be transferred as per XIV FC recommendations",
        wrap: true,
        format: data => data["To be transferred as per XIV FC recommendations"].toLocaleString('en-IN')
    },
    {
        name: "Actual tax devolution",
        selector: "Actual tax devolution",
        wrap: true,
        format: data => data["Actual tax devolution"].toLocaleString('en-IN')
    },
    {
        name: "Difference",
        selector: "Difference",
        wrap: true,
        format: data => data["Difference"].toLocaleString('en-IN')
    },
    
];


const customStyles = styles;



const Table8 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.8: State’s share in Union taxes and duties: Actual devolution vis-à-vis XIV FC recommendations"
                    columns={columns}
                    data={ctx.tables2.Table8}
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

export default Table8;
