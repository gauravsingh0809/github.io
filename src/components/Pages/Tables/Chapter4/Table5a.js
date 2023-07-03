import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";

const columns = [
    {
        name: "Head of Account/Department",
        selector: "1",
        wrap: true,
    },
    {
        name: "No. of AC Bills Drawn",
        selector: "2",
        wrap: true,
       
    },
    {
        name: "No of NDC Bills delayed",
        selector: "3",
        wrap: true,
        
    },
    {
        name: "Amount of NDC Bills delayed",
        selector: "4",
        wrap: true,
        
    }

];

const customStyles = styles;

const Table5a = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 4.5: Details of AC Bills drawn under 2055(Police) and 2056-(Prisons) for the period from 2017-2022."
                    columns={columns}
                    data={ctx.tables4.Table5a ? ctx.tables4.Table5a : ""}
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

export default Table5a;