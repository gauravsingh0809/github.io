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
        wrap: true,
    },
    {
        name: "Number of UCs",
        selector: "Number of UCs",
        wrap: true,
        format: data => data["Number of UCs"].toLocaleString('en-IN')
    },
    {
        name: "Amount",
        selector: "Amount",
        wrap: true,
        format: data => data["Amount"].toLocaleString('en-IN')
    }
];

const conditionalRowStyles = [
    {
        when: row => row["Year"] === 'Total',
        style: {
            backgroundColor: 'rgba(153, 165, 128, 0.9)',
        },
    }
  ]

const customStyles = styles;

const Table3 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 4.3: Year wise break up of Outstanding UCs"
                    columns={columns}
                    data={ctx.tables4.Table3}
                    customStyles={customStyles}
                    striped
                    highlightOnHover
                    pointerOnHover
                    conditionalRowStyles={conditionalRowStyles}
                />
            </Card>
        </div>
    );
}

export default Table3;