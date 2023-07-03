import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "Head of Account",
        selector: "Head of Account",
    },
    {
        name: "Institution",
        selector: "Institution",
        wrap: true,
    },
    {
        name: "Nature of expenditure",
        selector: "Nature of expenditure",
        // grow:0.2,
        wrap: true,
        
    },
    {
        name: "Amount (₹ in crore)",
        selector: "Amount",
        // grow:0.2,
        wrap: true,
        
    },
  
];

const customStyles = styles;

const Table7c = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title=" "
                    columns={columns}
                    data={ctx.tables3.Table7c}
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

export default Table7c;