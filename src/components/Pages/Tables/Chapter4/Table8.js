import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "Minor Head",
        selector: "Minor Head",
        wrap: true,
    },
    {
        name: "2018-19",
        selector: "2018 19",
        wrap: true,
    },
    {
        name: "",
        selector: "1",
        wrap: true,
    },
    {
        name: "2019-20",
        selector: "2019 20",
        wrap: true,
    },
    {
        name: "",
        selector: "2",
        wrap: true,
    },
    {
        name: "2020-21",
        selector: "2020 21",
        wrap: true,
    },
    {
        name: "",
        selector: "3",
        wrap: true,
    }
];

const customStyles = styles;

const Table8 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 4.8: Balances under Suspense and Remittance Head"
                    columns={columns}
                    data={ctx.tables4.Table8 ? ctx.tables4.Table8.t8 : ""}
                    customStyles={customStyles}
                    striped
                    // conditionalRowStyles={conditionalRowStyles}
                    highlightOnHover
                    pointerOnHover
                    pagination
                />
            </Card>
        </div>
    );
}

export default Table8;