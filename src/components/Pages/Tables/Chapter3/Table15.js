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
        format: data => data["Budget Provision"].toLocaleString('en-IN')
    },
    {
        name: "Total",
        selector: "Total",
        wrap: true,
        format: data => data["Total"].toLocaleString('en-IN')
    },
    {
        name: "Expenditure",
        selector: "Expenditure",
        wrap: true,
        format: data => data["Expenditure"].toLocaleString('en-IN')
    },
    {
        name: "Unutilized provision and its percentage",
        selector: "Unutilized provision and its percentage",
        wrap: true,
        format: data => data["Unutilized provision and its percentage"].toLocaleString('en-IN')
    }
];


const customStyles = styles;

const Table15 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 3.15 : Budget and Expenditure"
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