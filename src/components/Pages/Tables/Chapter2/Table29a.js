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
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "Amount",
        selector: "Amount",
        // grow:0.05,
        wrap: true,
        format: data => data["Amount"].toLocaleString('en-IN')
    }
];

const customStyles = styles;

const conditionalRowStyles = [
    {
      when: row => row["Year"] === 'Total',
      style: {
        backgroundColor: 'rgba(15, 38, 112, 0.4)',
      }
    }
  ]

const Table29a = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.31: Details of Amount Transferred"
                    columns={columns}
                    data={ctx.tables2.Table29a}
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

export default Table29a;
