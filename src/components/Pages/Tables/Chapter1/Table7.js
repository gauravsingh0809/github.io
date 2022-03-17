import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "Sl.No",
        selector: "Sl No",
        wrap: true,
        width: '70px',
    },
    {
        name: "Nature of transaction",
        selector: "Nature of transaction",
        wrap: true,
        grow: 2,
    },
    {
        name: "Revenue Deficit",
        selector: "Revenue Deficit",
        wrap: true,
        format: data => data["Revenue Deficit"].toLocaleString('en-IN')
    },
    {
        name: "Revenue Deficit",
        selector: "1",
        wrap: true,
        format: data => data["1"].toLocaleString('en-IN')
    },
    {
        name: "Fiscal Deficit",
        selector: "Fiscal Deficit",
        wrap: true,
        format: data => data["Fiscal Deficit"].toLocaleString('en-IN')
    },
    {
        name: "Fiscal Deficit",
        selector: "2",
        wrap: true,
        format: data => data["2"].toLocaleString('en-IN')
    },
];

const conditionalRowStyles = [
    {
        when: row => row["Sl No"] === 'Total',
        style: {
            backgroundColor: 'rgba(53, 165, 128, 0.5)',
        },
    },
    {
        when: row => row["Revenue Surplus"] === 'Over statement',
        style: {
            backgroundColor: 'rgba(153, 165, 128, 0.9)',
        },
    }
]

const customStyles = styles;

const Table7 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 1.7: Impact of certain transactions during 2020-21"
                    columns={columns}
                    data={ctx.tables1.Table7}
                    customStyles={customStyles}
                    conditionalRowStyles={conditionalRowStyles}
                    striped
                    highlightOnHover
                    pointerOnHover
                />
            </Card>
        </div>
    );
}

export default Table7;