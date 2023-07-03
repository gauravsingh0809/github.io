import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "",
        selector: "ratio",
        wrap: true,
    },
    {
        name: "AE/GSDP",
        selector: "AEGSDP",
        wrap: true,
        format: data => data["AEGSDP"].toLocaleString('en-IN')
    },
    {
        name: "CE/AE",
        selector: "CEAE",
        wrap: true,
        format: data => data["CEAE"].toLocaleString('en-IN')
    },
    {
        name: "DE/AE",
        selector: "DEAE",
        wrap: true,
        format: data => data["DEAE"].toLocaleString('en-IN')
    },
    {
        name: "Education/AE",
        selector: "EducationAE",
        wrap: true,
        format: data => data["EducationAE"].toLocaleString('en-IN')
    },
    {
        name: "Health/AE",
        selector: "HealthAE",
        wrap: true,
        format: data => data["HealthAE"].toLocaleString('en-IN')
    }
];

const customStyles = styles;

const Table27 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.28: Fiscal priority of the States in 2021-22"
                    columns={columns}
                    data={ctx.tables2.Table28 ? ctx.tables2.Table28.t28 : ""}
                    customStyles={customStyles}
                    striped
                    highlightOnHover
                    pointerOnHover
                />
            </Card>
        </div>
    );
}

export default Table27;
