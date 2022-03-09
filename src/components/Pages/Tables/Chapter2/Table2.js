import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "",
        selector: "Type",
        wrap: true,
    },
    {
        name: "Particulars",
        selector: "Particulars",
        wrap: true,
    },
    {
        name: "2019-20",
        selector: "2019 20",
        wrap: true,
        format: data => data["2019 20"].toLocaleString('en-IN')
    },
    {
        name: "2020-21",
        selector: "2020 21",
        wrap: true,
        format: data => data["2020 21"].toLocaleString('en-IN')
    },
    {
        name: "Increase/Decrease",
        selector: "Increase or Decrease",
        wrap: true,
    },
  ];

const customStyles = styles;


const Table2 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.2: Details of Sources and Application of funds during 
                    2018-19 and 2019-20"
                    columns={columns}
                    data={ctx.tables2.Table2}
                    customStyles={customStyles}
                    striped
                    highlightOnHover
                    pointerOnHover
                />
            </Card>
        </div>
    );
}

export default Table2;
