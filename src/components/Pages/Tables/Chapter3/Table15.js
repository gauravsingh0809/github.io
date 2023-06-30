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
        name: "Section",
        selector: "Section",
        wrap: true,
    },
    {
        name: "Budget Provision",
        selector: "Budget Provision",
        wrap: true,
       
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

const Table15 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 3.11 : Budget and Expenditure"
                    columns={columns}
                    data={ctx.tables3.Table15}
                    customStyles={customStyles}
                    striped
                    highlightOnHover
                    pointerOnHover
                />
            </Card>
        </div>
    );
}

export default Table15;