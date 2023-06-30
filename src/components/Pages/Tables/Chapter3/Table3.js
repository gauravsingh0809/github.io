import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "Sl No",
        selector: "Sl No",
        wrap: true
    },
    {
        name: "Category",
        selector: "Classification",
        wrap: true
    },
    {
        name: "Allocation during 2020-21",
        selector: "Allocation during 2020-21",
        wrap: true,
       
    },
    {
        name: "Allocation during 2021-22",
        selector: "Allocation during 2021-22",
        wrap: true,
       
    },
    {
        name: "Expenditure (2020-21)",
        selector: "Expenditure",
        wrap: true,
        format: data => data["Expenditure"].toLocaleString('en-IN')
    },
    {
        name: "Expenditure (2021-22)",
        selector: "Expenditure1",
        wrap: true
     
    },
    {
        name: "Percentage of Allocation to total Budget allocation (2020-21) ",
        selector: "Savings (in percentage)",
        wrap: true,
       
    },
    {
        name: "Percentage of Allocation to total Budget allocation (2021-22) ",
        selector: "Savings",
        wrap: true,
        
    }
];

const customStyles = styles;

const Table3 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 3.2: Details of allocation under Child Centric Programme/Schemes"
                    columns={columns}
                    data={ctx.tables3.Table3}
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

export default Table3;