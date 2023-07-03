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
        name: "Opening Balance",
        selector: "Opening Balance",
        wrap: true,
        format: data => data["Opening Balance"].toLocaleString('en-IN')
    },
    {
        name: " ",
        selector: "1",
        wrap: true,
        format: data => data["1"].toLocaleString('en-IN')
    },
    {
        name: "Addition",
        selector: "Addition",
        wrap: true,
        format: data => data["Addition"].toLocaleString('en-IN')
    },
    {
        name: " ",
        selector: "2",
        wrap: true,
        format: data => data["2"].toLocaleString('en-IN')
    },
    {
        name: "Clearance",
        selector: "Clearance",
        wrap: true,
        format: data => data["Clearance"].toLocaleString('en-IN')
    },
    {
        name: " ",
        selector: "3",
        wrap: true,
        format: data => data["3"].toLocaleString('en-IN')
    },
    {
        name: "Closing Balance",
        selector: "Closing Balance",
        wrap: true,
        format: data => data["Closing Balance"].toLocaleString('en-IN')
    },
    {
      name: " ",
      selector: "4",
      wrap: true,
      format: data => data["4"].toLocaleString('en-IN')
  },
];

const customStyles = styles;

const Table4 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 4.4: Year wise progress in submission of NDC bills against the AC bills"
                    columns={columns}
                    data={ctx.tables4.Table4}
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

export default Table4;