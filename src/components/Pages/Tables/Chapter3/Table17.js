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
        grow:0.05
    },
    {
        name: "Revenue",
        selector: "Revenue",
        wrap: true,
        grow:1
    },
    {
        name: "Revenue",
        selector: "FIELD3",
        wrap: true,
        sortable:true,
        
    },
    {
        name: "Revenue",
        selector: "FIELD4",
        wrap: true,
        sortable:true,
       
    },
    {
        name: "Capital",
        selector: "Capital",
        wrap: true,
        sortable:true,
        
    },
    {
        name: "Capital",
        selector: "FIELD6",
        wrap: true,
        sortable:true,
        
    },
    {
        name: "Capital",
        selector: "FIELD7",
        wrap: true,
        sortable:true,
       
    }
];


const customStyles = styles;

const Table17 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 3.12 : Anticipated savings not surrendered/partially surrendered"
                    columns={columns}
                    data={ctx.tables3.Table17}
                    customStyles={customStyles}
                    striped
                    highlightOnHover
                    pointerOnHover
                />
            </Card>
        </div>
    );
}

export default Table17;