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
        grow:0.2 ,
        // wrap: true,
        // width:'60px',
    },
    {
        name: "Grant",
        selector: "Grant",
        // grow:0.5 ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "Provision",
        selector: "Provision",
        grow:0.2,
        wrap: true,
        format: data => data["Provision"].toLocaleString('en-IN')
    },
    {
        name: "Expenditure",
        selector: "Expenditure",
        grow:0.2,
        wrap: true,
        format: data => data["Expenditure"].toLocaleString('en-IN')
    },
    {
        name: "Excess",
        selector: "Excess",
        grow:0.2,
        wrap: true,
        format: data => data["Excess"].toLocaleString('en-IN')
    }
];

const customStyles = styles;

const Table9 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 3.9: Excess expenditure over the provision during 2020-21 requiring regularization"
                    columns={columns}
                    data={ctx.tables3.Table9}
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

export default Table9;