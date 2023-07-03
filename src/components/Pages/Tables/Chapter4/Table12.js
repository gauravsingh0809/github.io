import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "Name of Department",
        selector: "Name of Department",
        wrap: true,
    },
    {
        name: "Cases of misappropriation losses thefts of Government material",
        selector: "Cases of misappropriation losses thefts of Government material",
        wrap: true,
    },
    {
        name: " ",
        selector: "1",
        wrap: true,
        grow:0.1
    },
    {
        name: "Reasons for the delay in final disposal of pending cases of misappropriation losses thefts etc",
        selector: "Reasons for the delay in final disposal of pending cases of misappropriation losses thefts etc",
        wrap: true,
    },
    {
        name: " ",
        selector: "2",
        wrap: true,
        grow:0.1
    }, 
    {
        name: " ",
        selector: "3",
        wrap: true,
        grow:0.1
    },
    {
        name: " ",
        selector: "4",
        wrap: true,
        grow:0.1
    },
    {
        name: " ",
        selector: "5",
        wrap: true,
    },
    {
        name: " ",
        selector: "6",
        wrap: true,
        grow:0.1
    },
];

const customStyles = styles;

const Table12 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 4.12: Pending cases of misappropriation, losses and thefts etc."
                    columns={columns}
                    data={ctx.tables4.Table12 ? ctx.tables4.Table12.t12 : ""}
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