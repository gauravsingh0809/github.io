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
        wrap: true,
        grow:0.05
    },
    {
        name: "Head of Account",
        selector: "Head of Account",
        wrap: true,
        grow:2,
      

    },
    {
        name: "2019-20",
        selector: "2019-20",
        wrap: true,
        sortable:true,
        
    },
    {
        name: "2020-21",
        selector: "2020-21",
        wrap: true,
        sortable:true,
       
    },
    {
        name: "2021-22",
        selector: "2021-22",
        wrap: true,
        sortable:true,
       
    }
];


const customStyles = styles;

const Table13 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 3.9: Persistent savings"
                    columns={columns}
                    data={ctx.tables3.Table13}
                    customStyles={customStyles}
                    striped
                    highlightOnHover
                    pointerOnHover
                />
            </Card>
        </div>
    );
}

export default Table13;