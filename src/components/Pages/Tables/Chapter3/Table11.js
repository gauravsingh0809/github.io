import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";

// This is Table 11 in Chapter 3 of SFR


const columns = [
    {
        name: "Year",
        selector: "Year",
        wrap: true,
    },
    {
        name: "Section",
        selector: "Section",
        wrap: true,
    },
    {
        name: "Budget Provision",
        selector: "Budget Provision",
        wrap: true,
        format: data => data["Budget Provision"].toLocaleString('en-IN')
    },
    {
        name: "Budget Provision",
        selector: "FIELD4",
        wrap: true,
        
    },
    {
        name: "Total",
        selector: "Total",
        wrap: true,
        
    },
    {
        name: "Expenditure",
        selector: "Expenditure",
        wrap: true,
        
    },
    {
        name: "Unutilized provision and its percentage",
        selector: "Unutilised provision and its percentage",
        wrap: true,
       
    }
];


const customStyles = styles;

const Table11 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 3.7 : Budget and Expenditure"
                    columns={columns}
                    data={ctx.tables3.Table11}
                    customStyles={customStyles}
                    striped
                    // conditionalRowStyles={conditionalRowStyles}
                    highlightOnHover
                    pointerOnHover
                    // noTableHead
                    // pagination
                />
            </Card>
        </div>
    );
}

export default Table11;