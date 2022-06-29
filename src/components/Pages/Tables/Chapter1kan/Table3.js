import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "ಭಾದ್ಯತೆಗಳು",
        selector: "ಭಾದ್ಯತೆಗಳು",
        grow: 0.8,
        wrap: true,
        width:'35px',
    },
    
    {
        name: "__1",
        selector: "__1",
        grow:0.2,
        wrap: true,
        format: data => data["__1"].toLocaleString('en-IN')
    },
    {
        name: "__2",
        selector: "__2",
        grow: 0.2,
        wrap: true,
        format: data => data["__2"].toLocaleString('en-IN')
    },
    {
        name: "__3",
        selector: "__3",
        grow: 0.5,
        width:'150px',
        wrap: true,
        format: data => data["__3"].toLocaleString('en-IN')
    },
    {
        name: "ಆಸ್ತಿಗಳು",
        selector:"ಆಸ್ತಿಗಳು",
        grow: 0.5,
        wrap: true,
        width:'35px'
    },
    {
        name: "__4",
        selector: "__4",
        grow: 0.35,
        wrap: true,
        conditionalCellStyles: [
            {
                when: row => row["__4"] === 'Total',
                style: {
                    backgroundColor: 'rgba(63, 195, 128, 0.5)',
                    color: 'white',
                    '&:hover': {
                        cursor: 'pointer',
                    },
                },
            }
        ]
    },
    {
        name: "__5",
        selector: "__5",
        grow: 0.2,
        wrap: true,
        format: data => data["__5"].toLocaleString('en-IN')
    },
    {
        name: "__6",
        selector: "__6",
        grow: 0.2,
        wrap: true,
        format: data => data["__6"].toLocaleString('en-IN')
    },
    {
        name: "__7",
        selector: "__7",
        grow:0.05,
        wrap: true,
        format: data => data["__7"].toLocaleString('en-IN')
    },
];

const conditionalRowStyles = [
    {
        when: row => row["__3"] === 'Consolidated Fund' ||
            row["__3"] === 'Public Account',
        style: {
            backgroundColor: 'rgba(153, 165, 128, 0.9)',
        },
    }
]

const customStyles = styles;



const Table3kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ 1.3: ಆಸ್ತಿಗಳು ಮತ್ತು ಹೊಣೆಗಾರಿಕೆಗಳ ಸ್ಥಿತಿಯ ಸಾರಾಂಶs"
                    columns={columns}
                    data={ctx.tables1kan.Table3}
                    customStyles={customStyles}
                    striped
                    conditionalRowStyles={conditionalRowStyles}
                    highlightOnHover
                    pointerOnHover
                    // pagination
                />
            </Card>
        </div>
    );
}

export default Table3kan;
