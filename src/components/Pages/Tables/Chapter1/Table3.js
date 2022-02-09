import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "",
        selector: "1",
        grow: 0,
        wrap: true,
        width:'35px',
    },
    {
        name: "",
        selector: "2",
        grow: 0.4,
        wrap: true,
        conditionalCellStyles: [
            {
                when: row => row["2"] === 'Total',
                style: {
                    backgroundColor: 'rgba(63, 195, 128, 0.5)',
                    color: 'white',
                    '&:hover': {
                        cursor: 'pointer',
                    },
                },
            },
        ]
    },
    {
        name: "Liabilities",
        selector: "Liabilities",
        grow:0.05,
        wrap: true,
        format: data => data["Liabilities"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "3",
        grow: 0.05,
        wrap: true,
        format: data => data["3"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "4",
        // grow: 0.05,
        width:'110px',
        wrap: true,
        format: data => data["4"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "5",
        grow: 0,
        wrap: true,
        width:'35px'
    },
    {
        name: "",
        selector: "6",
        grow: 0.4,
        wrap: true,
        conditionalCellStyles: [
            {
                when: row => row["6"] === 'Total',
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
        name: "Assets",
        selector: "Assets",
        grow: 0.05,
        wrap: true,
        format: data => data["Assets"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "7",
        grow: 0.05,
        wrap: true,
        format: data => data["7"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "8",
        grow:0.05,
        wrap: true,
        format: data => data["8"].toLocaleString('en-IN')
    },
];

const conditionalRowStyles = [
    {
        when: row => row["4"] === 'Consolidated Fund' ||
            row["4"] === 'Public Account',
        style: {
            backgroundColor: 'rgba(153, 165, 128, 0.9)',
        },
    }
]

const customStyles = {
    header: {
        style: {
            fontSize: '22px',
            color: '#fff',
            backgroundColor: '#ff6359',
            minHeight: '56px',
            textAlign: "center",
        },
    },
    rows: {
        style: {
            minHeight: '50px', // override the row height
        }
    },
    headCells: {
        style: {
            '&:not(:last-of-type)': {
                borderRightStyle: 'none',
                borderRightWidth: '0px',
                borderRightColor: "black",
            },
            fontSize: '14px',
            fontWeight: '500',
            textTransform: 'uppercase',
            padding: '10px',
            color: '#D72483'
        },
    },
    cells: {
        style: {
            '&:not(:last-of-type)': {
                borderRightStyle: 'solid',
                borderRightWidth: '1px',
                borderRightColor: '#aaa',
                // width: '120px',
                // minWidth: '40px',
            },
            fontSize: '12px',
            paddingLeft: '8px',
           
        },
    },
};



const Table3 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 1.3: Summarised position of Assets and Liabilities"
                    columns={columns}
                    data={ctx.reportData.Tables.Table3}
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

export default Table3;
