import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: " ",
        selector: "Sl no",
        grow: 0,
        wrap: true,
        width:'35px',
    },
    {
        name: "",
        selector: "2",
        grow: 0.35,
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
        name: "Liabilities 2020-21",
        selector: "Liabilities 2020-21",
        grow: 0.2,
        wrap: true,
        
    },
    {
        name: "Liabilities 2021-22",
        selector: "Liabilities 2021-22",
        grow:0.2,
        wrap: true,
       
    },
    
    {
        name: "Percent increase/decrease",
        selector: "Per cent increase",
        // grow: 0.05,
        width:'150px',
        wrap: true,
        
    },
    {
        name: " ",
        selector: "Sl no__1",
        grow: 0,
        wrap: true,
        width:'35px'
    },
    {
        name: "",
        selector: "4",
        grow: 0.35,
        wrap: true,
        conditionalCellStyles: [
            {
                when: row => row["4"] === 'Total',
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
        name: "Assets 2020-21",
        selector: "Assets 2020-21",
        grow: 0.2,
        wrap: true,
        
    },
    {
        name: "Assets 2021-22",
        selector: "Assets 2021-22",
        grow: 0.2,
        wrap: true,
        
    },
  
    {
        name: "Percent increase/decrease",
        selector: "Per cent increase__1",
        grow:0.05,
        wrap: true,
       
    },
];

const conditionalRowStyles = [
    {
        when: row => row["Per cent increase"] === 'Consolidated Fund' ||
            row["Per cent increase"] === 'Public Account',
        style: {
            backgroundColor: 'rgba(153, 165, 128, 0.9)',
        },
    }
]

const customStyles = styles;



const Table3 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 1.3: Summarised position of Assets and Liabilities"
                    columns={columns}
                    data={ctx.tables1.Table3}
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
