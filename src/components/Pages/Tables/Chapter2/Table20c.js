import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "S No",
        selector: "S No",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "Department",
        selector: "Department",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Department"].toLocaleString('en-IN')
    },
    {
        name: "Source/ Implementing Agency",
        selector: "1",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["1"].toLocaleString('en-IN')
    },
    {
        name: "Fund released",
        selector: "Fund released",
        // grow:0.05,
        wrap: true,
        format: data => data["Fund released"].toLocaleString('en-IN')
    },
    {
        name: "Fund utilised",
        selector: "Fund utilised",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Fund utilised"].toLocaleString('en-IN')
    },
];

const conditionalRowStyles = [
  {
    when: row => row["S No"] === 'Total',
    style: {
      backgroundColor: 'rgba(53, 65, 128, 0.9)',
    }
  }
]

const customStyles = styles;

const Table20c = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.20 (c): Details of funds released and utilised for control of 
                    COVID-19 during 2019-20 to 2021-22."
                    columns={columns}
                    data={ctx.tables2.Table20c}
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

export default Table20c;
