import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "Details",
        selector: "Details",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "First SFC",
        selector: "First SFC",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["First SFC"].toLocaleString('en-IN')
    },
    {
        name: "Second SFC",
        selector: "Second SFC",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Second SFC"].toLocaleString('en-IN')
    },
    {
        name: "Third SFC",
        selector: "Third SFC",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Third SFC"].toLocaleString('en-IN')
    },
    {
        name: "Fourth SFC",
        selector: "Fourth SFC",
        // grow:0.05,
        wrap: true,
        format: data => data["Fourth SFC"].toLocaleString('en-IN')
    }
];

const conditionalRowStyles = [
  {
    when: row => row["Details"] === 'Total',
    style: {
      backgroundColor: 'rgba(53, 65, 128, 0.9)',
    }
  }
]

const customStyles = styles;

const Table20a = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.20(a): Details of Various Finance Commissions constituted in the State"
                    columns={columns}
                    data={ctx.tables2.Table20a}
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

export default Table20a;
