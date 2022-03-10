import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "State Goods and Service Tax",
        selector: "State Goods and Service Tax",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    
    {
        name: "2018 19",
        selector: "2018 19",
        // grow:0.05,
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
    {
        name: "Increase/ Decrease",
        selector: "Increase or Decrease",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Increase or Decrease"].toLocaleString('en-IN')
    },
    
];


const customStyles = styles;

const Table6 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.6: Components of State’s non-tax revenue"
                    columns={columns}
                    data={ctx.reportData.Chap2Tables.Table6}
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

export default Table6;
