import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";



const columns = [
    {
        name: "Head of Account",
        selector: "Head of Account",
        wrap: true,
        grow:2
    },
    {
        name: "Budget Estimate",
        selector: "Budget",
        wrap: true,
        grow:0.05
    },
    {
        name: "Revised Estimate",
        selector: "Revised Estimate",
        wrap: true,
        sortable:true,
        
    },
    {
        name: "Expenditure",
        selector: "Expenditure",
        wrap: true,
        sortable:true,
       
    },
    {
        name: "Savings *",
        selector: "Savings",
        wrap: true,
        sortable:true,
        
    },
    {
        name: "Deposited in the account (Shown as Expenditure)",
        selector: "Deposited in the account (Shown as Expenditure)",
        wrap: true,
        sortable:true,
        
    }
    
];


const customStyles = styles;

const Table14 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 3.10: Details of Grants, Expenditure and transfers to Bank Account"
                    columns={columns}
                    data={ctx.tables3.Table14}
                    customStyles={customStyles}
                    striped
                    highlightOnHover
                    pointerOnHover
                />
            </Card>
        </div>
    );
}

export default Table14;