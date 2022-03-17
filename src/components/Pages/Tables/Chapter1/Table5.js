import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "Fiscal Parameters",
        selector: "Fiscal Parameters",
        wrap: true,
        format: data => data["Fiscal Parameters"].toLocaleString('en-IN')
    },
    {
        name: "KFRA Target",
        selector: "KFRA target",
        wrap: true,
        format: data => data["KFRA target"].toLocaleString('en-IN')
    },
    {
        name: "Achievement",
        selector: "1",
        wrap: true,
        format: data => data["1"].toLocaleString('en-IN')
    },
    {
        name: "Achievement",
        selector: "2",
        wrap: true,
        format: data => data["2"].toLocaleString('en-IN')
    },
    {
        name: "Achievement",
        selector: "Achievement",
        wrap: true,
        format: data => data["Achievement"].toLocaleString('en-IN')
    },
    {
        name: "Achievement",
        selector: "3",
        wrap: true,
        format: data => data["3"].toLocaleString('en-IN')
    },
    {
        name: "Achievement",
        selector: "4",
        wrap: true,
        format: data => data["4"].toLocaleString('en-IN')
    },
];

const conditionalRowStyles = [
    {
        when: row => row["1"] === '2015 16',
        style: {
            backgroundColor: 'rgba(153, 165, 128, 0.9)',
        },
    }
]

const customStyles = styles;

const Table5 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 1.5: Compliance with provisions of KFRA"
                    columns={columns}
                    data={ctx.tables1.Table5}
                    customStyles={customStyles}
                    striped
                    conditionalRowStyles={conditionalRowStyles}
                    highlightOnHover
                    pointerOnHover
                // pagination
                />
            </Card>
        </div>
    );
}

export default Table5;
