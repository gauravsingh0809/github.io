import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "",
        selector: "0",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "XV FC assessment",
        selector: "XV FC assessment",
        // grow:0.05,
        wrap: true,
        format: data => data["XV FC assessment"].toLocaleString('en-IN',{style: 'currency', currency: 'INR'})
    },
    {
        name: "Budget Estimates",
        selector: "Budget Estimates",
        // grow:0.05,
        wrap: true,
        format: data => data["Budget Estimates"].toLocaleString('en-IN',{style: 'currency', currency: 'INR'})
    },
    {
        name: "Actual",
        selector: "Actual",
        wrap: true,
        format: data => data["Actual"].toLocaleString('en-IN',{style: 'currency', currency: 'INR'})
    },
    {
        name: "Percentage variation of actual over",
        selector: "Percentage variation of actual over",
        wrap: true,
        // format: data => data["Percentage variation of actual over"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "1",
        wrap: true,
        format: data => data["1"].toLocaleString('en-IN')
    }
];


const customStyles = styles;



const Table12  = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.12: Tax and non-tax receipts vis-à-vis projections during 2019-20"
                    columns={columns}
                    data={ctx.tables2.Table12  }
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

export default Table12;
