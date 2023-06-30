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
        name: "Details",
        selector: "Details",
        // grow:0.05,
        wrap: true,
        format: data => data["Details"].toLocaleString('en-IN')
    },
    {
        name: "Quantity in metric tonnes",
        selector: "Quantity in metric tonnes",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Quantity in metric tonnes"].toLocaleString('en-IN')
    }
    
];


const customStyles = styles;

const Table6 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.7 Details of extraction outside the lease area and dispatch of minerals without permit as per DCB register."
                    columns={columns}
                    data={ctx.tables2.Table6}
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
