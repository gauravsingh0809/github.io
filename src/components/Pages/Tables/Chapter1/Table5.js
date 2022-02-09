import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "Fiscal Parameters",
        selector: "Fiscal Parameters",
        wrap: true,
        format: data => data["Fiscal Parameters"].toLocaleString('en-IN')
    },
    {
        name: "KFRA Target",
        selector: "KFRA target",
        wrap: true,
        format: data => data["KFRA target"].toLocaleString('en-IN')
    },
    {
        name: " ",
        selector: "1",
        wrap: true,
        format: data => data["1"].toLocaleString('en-IN')
    },
    {
        name: " ",
        selector: "2",
        wrap: true,
        format: data => data["2"].toLocaleString('en-IN')
    },
    {
        name: "Achievement",
        selector: "Achievement",
        wrap: true,
        format: data => data["Achievement"].toLocaleString('en-IN')
    },
    {
        name: " ",
        selector: "3",
        wrap: true,
        format: data => data["3"].toLocaleString('en-IN')
    },
    {
        name: " ",
        selector: "4",
        wrap: true,
        format: data => data["4"].toLocaleString('en-IN')
    },
];

const conditionalRowStyles = [
    {
        when: row => row["1"] === '2015 16',
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
                borderRightStyle: 'solid',
                borderRightWidth: '1px',
                borderRightColor: "black"
            },
            '&:nth-child(n+3)': {
                borderRightStyle: 'none',
                borderRightWidth: '1px',
                borderRightColor: "black",
                backgroundColor:"#b89e9c"
            },
            fontSize: '14px',
            fontWeight: '500',
            textTransform: 'uppercase',
            padding: '10px',
            color: '#D95783'
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

const Table4 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 1.5: Compliance with provisions of KFRA"
                    columns={columns}
                    data={ctx.reportData.Tables.Table5}
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

export default Table4;
