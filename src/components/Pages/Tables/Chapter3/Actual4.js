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
        grow:0.05,
        wrap: true,
    },
    {
        name: "Budgetary Assurance",
        selector: "Budgetary Assurance",
        wrap: true
    },
    {
        name: "Action taken",
        selector: "Action taken",
        wrap: true
    }
];

const customStyles = styles;

const Actual4 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 3.4: Important initiatives where action was yet to be taken"
                    columns={columns}
                    data={ctx.tables3.Table4}
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

export default Actual4;