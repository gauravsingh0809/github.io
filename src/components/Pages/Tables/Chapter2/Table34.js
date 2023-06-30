import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "Year of Maturity",
        selector: "Year of Maturity",
        grow:2 ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "Amount",
        selector: "Amount",
        // grow:0.05,
        wrap: true,
        format: data => data["Amount"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "1",
        // grow:0.05,
        wrap: true,
        format: data => data["1"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "2",
        // grow:0.05,
        wrap: true,
        format: data => data["2"].toLocaleString('en-IN')
    }
];

const customStyles = styles;

const conditionalRowStyles = [
    {
      when: row => row["Year of Maturity"] === 'Total',
      style: {
        backgroundColor: 'rgba(15, 38, 112, 0.4)',
      }
    }
  ]

const Table34 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.36: Maturity profile of Public Debt"
                    columns={columns}
                    data={ctx.tables2.Table35 ? ctx.tables2.Table35.t35 : ""}
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

export default Table34;
