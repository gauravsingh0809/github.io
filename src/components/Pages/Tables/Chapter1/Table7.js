import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "Sl.No",
        selector: "Sl No",
        wrap: true,
        width: '70px',
    },
    {
        name: "Nature of transaction",
        selector: "Nature of transaction",
        wrap: true,
        grow: 2,
    },
    {
        name: "Revenue Surplus",
        selector: "Revenue Surplus",
        wrap: true,
        format: data => data["Revenue Surplus"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "1",
        wrap: true,
        format: data => data["1"].toLocaleString('en-IN')
    },
    {
        name: "Fiscal Deficit",
        selector: "Fiscal Deficit",
        wrap: true,
        format: data => data["Fiscal Deficit"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "2",
        wrap: true,
        format: data => data["2"].toLocaleString('en-IN')
    },
];

const conditionalRowStyles = [
    {
        when: row => row["Nature of transaction"] === 'Total' || row["Nature of transaction"] === 'Net Impact',
        style: {
            backgroundColor: 'rgba(53, 165, 128, 0.5)',
        },
    },
    {
        when: row => row["Revenue Surplus"] === 'Over statement',
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

const Table7 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 1.7: Impact of certain transactions during 2019-20"
                    columns={columns}
                    data={ctx.reportData.Tables.Table7}
                    customStyles={customStyles}
                    conditionalRowStyles={conditionalRowStyles}
                    striped
                    highlightOnHover
                    pointerOnHover
                />
            </Card>
        </div>
    );
}

export default Table7;
