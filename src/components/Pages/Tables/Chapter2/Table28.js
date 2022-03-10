import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "Sector",
        selector: "Sector",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "Sub Sector",
        selector: "Sub Sector",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "2015 16",
        selector: "2015 16",
        // grow:0.05,
        wrap: true,
        format: data => data["2015 16"].toLocaleString('en-IN')
    },
    {
        name: "2016 17",
        selector: "2016 17",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["2016 17"].toLocaleString('en-IN')
    },
    {
        name: "2017 18",
        selector: "2017 18",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["2017 18"].toLocaleString('en-IN')
    },
    {
        name: "2018 19",
        selector: "2018 19",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["2018 19"].toLocaleString('en-IN')
    },
    {
        name: "2019 20",
        selector: "2019 20",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["2019 20"].toLocaleString('en-IN')
    },
];


const customStyles = styles;


const Table28 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.29: Component-wise net balances in Public Account as of 31 March of the year"
                    columns={columns}
                    data={ctx.tables2.Table29 ? ctx.tables2.Table29.t29 : ""}
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

export default Table28;
