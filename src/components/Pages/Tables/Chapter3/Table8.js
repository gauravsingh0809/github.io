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
        name: "Head of Account",
        selector: "Head of Account",
        // grow:0.5 ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "Budget provision",
        selector: "Budget provision",
        grow:0.2,
        wrap: true,
        format: data => data["Budget provision"].toLocaleString('en-IN')
    },
    {
        name: "Expenditure incurred",
        selector: "Expenditure incurred",
        grow:0.2,
        wrap: true,
        format: data => data["Expenditure incurred"].toLocaleString('en-IN')
    },
    {
        name: "Amount released",
        selector: "Amount released",
        grow:0.2,
        wrap: true,
        format: data => data["Amount released"].toLocaleString('en-IN')
    }
];

const customStyles = styles;

const Table8 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 3.8: Funds released under capital section for payment of salaries"
                    columns={columns}
                    data={ctx.tables3.Table8}
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