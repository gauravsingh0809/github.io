import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";
import "./Tables.css";
import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "ಕ್ರಮ",
        selector: "ಕ್ರಮ",
        // sortable: true,
        grow: 0.3,
        cell: column =>
        (<div data-tag="allowColumnEvents">
            <div style={{ fontWeight: "bold", color: "#467880" }}>
                {column["ಕ್ರಮ"]}
            </div>
        </div>),
        conditionalCellStyles: [
            {
                when: row => row["ಕ್ರಮ"] === '',
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
        name: "ಘಟಕಗಳು",
        selector: "ಘಟಕಗಳು",
        // sortable: true,
        left: true,
        wrap:true,
        grow: 2.5,
        conditionalCellStyles: [
            {
                when: row => row["ಘಟಕಗಳು"] === "Revenue Receipts (1+2+3+4)" ||
                    row["ಘಟಕಗಳು"] === "Capital Receipts (6+7+8)" || row["ಘಟಕಗಳು"] === "Total Receipts (5+9)"
                    || row["ಘಟಕಗಳು"] === "Capital Expenditure (13+14)" || row["ಘಟಕಗಳು"] === "Total Disbursement out of Consolidated Fund (11+15+16)"
                    || row["ಘಟಕಗಳು"] === "Revenue Surplus/Deficit(5-11)" || row["ಘಟಕಗಳು"] === "Fiscal Deficit (-){(5+6+7)-(11+15)}"
                    || row["ಘಟಕಗಳು"] === 'Primary Deficit (-) (19-12)',
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
        name: "2019-೨೦",
        selector: "2019-೨೦",
        // sortable: true,
        right: true,
        format: data => data["2019-೨೦"].toLocaleString('en-IN'),
    },
    {
        name: "2020-೨೧",
        selector: "2020-೨೧",
        // sortable: true,
        right: true,
        format: data => data["2020-೨೧"].toLocaleString('en-IN'),
    },
    {
        name: "2020-೨೧__1",
        selector: "2020-೨೧__1",
        // sortable: true,
        right: true,
        format: data => data["2020-೨೧__1"].toLocaleString('en-IN'),
    },
    {
        name: "ವಾಸ್ತವಕ್ಕೆ ಆಯವ್ಯಯ ಅವಕಾಶದ ಶೇಕಡಾವಾರು",
        selector: "ವಾಸ್ತವಕ್ಕೆ ಆಯವ್ಯಯ ಅವಕಾಶದ ಶೇಕಡಾವಾರು",
        // sortable: true,
        right: true,
        // format: data => data["ವಾಸ್ತವಕ್ಕೆ ಆಯವ್ಯಯ ಅವಕಾಶದ ಶೇಕಡಾವಾರು"].toLocaleString('en-IN'),
    }
];

const conditionalRowStyles = [
    
    {
        when: row => row["ಘಟಕಗಳು"] === 'Section A: Revenue Receipts' ||
            row["ಘಟಕಗಳು"] === 'Section B: Capital Receipts' || row["ಘಟಕಗಳು"] === 'Section C: Expenditure/Disbursement'
            || row["ಘಟಕಗಳು"] === 'Section D:Fiscal Indicators',
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


const Table2kan = () => {

    const ctx = useContext(MyContext)
    console.log(ctx)

    return (
        <div
            className="App"
            style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    // title="ಕೋಷ್ಟಕ 1.2: ಆಯವ್ಯಯ ಅಂದಾಜುಗಳಿಗೆ ಹೋಲಿಸಿದಂತೆ ವಾಸ್ತವ ಹಣಕಾಸು ಫಲಿತಾಂಶಗಳು"
                    title={ctx.chapter1kannada.Content.t2h1}
                    
                    columns={columns}
                    data={ctx.tables1kan.Table2}
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

export default Table2kan;