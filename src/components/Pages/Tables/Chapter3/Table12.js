import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";

// This is Table 11 in Chapter 3 of SFR


const columns = [
    {
        name: "Year",
        selector: "Year",
        wrap: true,
    },
    {
        name: " ",
        selector: "1",
        wrap: true,
        sortable:true,
        format: data => data["1"].toLocaleString('en-IN')

    },
    {
        name: "Revenue",
        selector: "Revenue",
        wrap: true,
        sortable:true,
        format: data => data["Revenue"].toLocaleString('en-IN')
    },
    {
        name: " ",
        selector: "2",
        wrap: true,
        sortable:true,
        format: data => data["2"].toLocaleString('en-IN')
    },
    {
        name: " ",
        selector: "3",
        wrap: true,
        sortable:true,
        format: data => data["3"].toLocaleString('en-IN')
    },
    {
        name: "Capital",
        selector: "Capital",
        wrap: true,
        sortable:true,
        format: data => data["Capital"].toLocaleString('en-IN')
    },
    {
        name: " ",
        selector: "4",
        wrap: true,
        sortable:true,
        format: data => data["4"].toLocaleString('en-IN')
    }
];


const customStyles = styles;

const Table12 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 3.12 : Anticipated savings not surrendered/partially surrendered"
                    columns={columns}
                    data={ctx.tables3.Table12}
                    customStyles={customStyles}
                    striped
                    highlightOnHover
                    pointerOnHover
                />
            </Card>
        </div>
    );
}

export default Table12;