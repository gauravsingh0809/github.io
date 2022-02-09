import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";
import "./Tables.css";
import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "Sl No",
        selector: "Sl No",
        // sortable: true,
        grow: 0.3,
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
        grow: 2.5,
        conditionalCellStyles: [
            {
                when: row => row["Components"] === "Revenue Receipts 1+2+3+4" ||
                    row["Components"] === "Capital Receipts 6+7+8" || row["Components"] === "Total Receipts 5+9"
                    || row["Components"] === "Total Expenditure(11+13+14)" || row["Components"] === "Revenue Surplus/Deficit(5-11)"
                    || row["Components"] === "Fiscal Deficit{(5+6+7)-15}" || row["Components"] === 'Primary Deficit (17-12)',
                style: {
                    backgroundColor: 'rgba(63, 195, 128, 0.5)',
                    color: 'white',
                    '&:hover': {
                        cursor: 'pointer',
                    },
                },
            },
        ]
        // format: data => data["India's GDP* in crore"].toLocaleString('en-IN',{ style: 'currency', currency: 'INR' }),
    },
    {
        name: "Actuals for the year 2018-19",
        selector: "Actuals for the year 2018-19",
        // sortable: true,
        right: true,
        format: data => data["Actuals for the year 2018-19"].toLocaleString('en-IN'),
    },
    {
        name: "Budgetary provisions for the year 2019-20",
        selector: "Budgetary provisions for the year 2019-20",
        // sortable: true,
        right: true,
        format: data => data["Budgetary provisions for the year 2019-20"].toLocaleString('en-IN'),
        // format: data => data["State's GSDP* in crore"].toLocaleString('en-IN',{ style: 'currency', currency: 'INR' })
    },
    {
        name: "Actuals for the year 2019-20",
        selector: "Actuals for the year 2019-20",
        // sortable: true,
        right: true,
        format: data => data["Actuals for the year 2019-20"].toLocaleString('en-IN'),
        // format: data => data["Growth rate in per cent__1"].toLocaleString('en-IN')
    },
    {
        name: "Percentage of Actual to Budgetary Provisions",
        selector: "Percentage of Actual to Budgetary Provisions",
        // sortable: true,
        right: true,
        format: data => data["Percentage of Actual to Budgetary Provisions"].toLocaleString('en-IN'),
    }
];

const conditionalRowStyles = [
    //   {
    //     when: row => row["Components"] == "Revenue Receipts 1+2+3+4" ||
    //     row["Components"] == "Capital Receipts 6+7+8" || row["Components"] == "Total Receipts 5+9"
    //     || row["Components"] == "Total Expenditure(11+13+14)" || row["Components"] == "Revenue Surplus/Deficit(5-11)"
    //     || row["Components"] == "Fiscal Deficit{(5+6+7)-15}" || row["Components"] == 'Primary Deficit (17-12)',
    //     style: {
    //       backgroundColor: 'rgba(63, 195, 128, 0.5)',
    //     },
    //   },
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

const customStyles = {
    header: {
        style: {
            fontSize: '22px',
            color: '#fff',
            backgroundColor: '#ff6359',
            minHeight: '56px',
            textAlign: "center",
            // paddingLeft: '170px',
            // paddingRight: '8px',
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
            fontSize: '12px',
            fontWeight: '500',
            textTransform: 'uppercase',
            padding: '10px'
        },
    },
    cells: {
        style: {
            '&:not(:last-of-type)': {
                borderRightStyle: 'solid',
                borderRightWidth: '1px',
                borderRightColor: '#aaa',
            },
            fontSize: '14px',
            paddingLeft: '8px',
        },
    },
};


const Table2 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 1.2: Actual financial results vis-à-vis Budget Provisions"
                    columns={columns}
                    data={ctx.reportData.Tables.Table2}
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