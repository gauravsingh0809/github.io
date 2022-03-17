import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";
import "./Tables.css";
import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "Sl No",
        selector: "Sl No",
        // sortable: true,
        grow: 0.3,
        cell: column =>
        (<div data-tag="allowColumnEvents">
            <div style={{ fontWeight: "bold", color: "#467880" }}>
                {column["Sl No"]}
            </div>
        </div>),
        conditionalCellStyles: [
            {
                when: row => row["Sl No"] === '',
                style: {
                    backgroundColor: '#fff',
                    color: 'white',
                    '&:hover': {
                        cursor: 'pointer',
                    },
                },
            },
        ]
    },
    {
        name: "Components",
        selector: "Components",
        // sortable: true,
        left: true,
        wrap:true,
        grow: 2.5,
        conditionalCellStyles: [
            {
                when: row => row["Components"] === "Revenue Receipts (1+2+3+4)" ||
                    row["Components"] === "Capital Receipts (6+7+8)" || row["Components"] === "Total Receipts (5+9)"
                    || row["Components"] === "Capital Expenditure (13+14)" || row["Components"] === "Total Disbursement out of Consolidated Fund (11+15+16)"
                    || row["Components"] === "Revenue Surplus/Deficit(5-11)" || row["Components"] === "Fiscal Deficit (-){(5+6+7)-(11+15)}"
                    || row["Components"] === 'Primary Deficit (-) (19-12)',
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
        name: "Actuals for the year 2019-20",
        selector: "Actuals for the year 2019-20",
        // sortable: true,
        right: true,
        format: data => data["Actuals for the year 2019-20"].toLocaleString('en-IN'),
    },
    {
        name: "Budgetary provisions for the year 2020-21",
        selector: "Budgetary provisions for the year 2020-21",
        // sortable: true,
        right: true,
        format: data => data["Budgetary provisions for the year 2020-21"].toLocaleString('en-IN'),
    },
    {
        name: "Actuals for the year 2020-21",
        selector: "Actuals for the year 2020-21",
        // sortable: true,
        right: true,
        format: data => data["Actuals for the year 2020-21"].toLocaleString('en-IN'),
    },
    {
        name: "Percentage of Actual to Budgetary Provision",
        selector: "Percentage of Actual to Budgetary Provision",
        // sortable: true,
        right: true,
        // format: data => data["Percentage of Actual to Budgetary Provision"].toLocaleString('en-IN'),
    }
];

const conditionalRowStyles = [
    
    {
        when: row => row["Components"] === 'Section A: Revenue Receipts' ||
            row["Components"] === 'Section B: Capital Receipts' || row["Components"] === 'Section C: Expenditure/Disbursement'
            || row["Components"] === 'Section D:Fiscal Indicators',
        style: {
            backgroundColor: 'rgba(153, 165, 128, 0.9)',
            color: 'white',
            '&:hover': {
                cursor: 'pointer',
            },
        },
    }
]

const customStyles = styles;


const Table2 = () => {

    const ctx = useContext(MyContext)
    console.log(ctx)

    return (
        <div
            className="App"
            style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 1.2: Actual financial results vis-à-vis Budget Provisions"
                    columns={columns}
                    data={ctx.tables1.Table2}
                    defaultSortField="title"
                    sortIcon={<SortIcon />}
                    customStyles={customStyles}
                    striped
                    conditionalRowStyles={conditionalRowStyles}
                    highlightOnHover
                    pointerOnHover
                />
            </Card>
        </div>
    );
}

export default Table2;