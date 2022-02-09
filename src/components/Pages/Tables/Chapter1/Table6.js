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
        grow: 0.1,
    },
    {
        name: "Fiscal variables",
        selector: "Fiscal Variables",
        wrap: true,
        grow: 2,
        conditionalCellStyles: [
            {
                when: row => row["Fiscal Variables"] === 'Fiscal Deficit -/ Surplus +' 
                || row["Fiscal Variables"] === 'Revenue Deficit -/Surplus + 5-6'
                || row["Fiscal Variables"] === 'GSDP',
                style: {
                    backgroundColor: 'rgba(63, 195, 128, 0.5)',
                    color: 'white',
                    fontWeight: 500,
                    '&:hover': {
                        cursor: 'pointer',
                    },
                },
            },
        ]
    },
    {
        name: "Projection as per MTFP 2018-22",
        selector: "Projection as per MTFP 2018 22",
        wrap: true,
        format: data => data["Projection as per MTFP 2018 22"].toLocaleString('en-IN')
    },
    {
        name: "Actuals 2019-20",
        selector: "Actuals 2019 20",
        wrap: true,
        format: data => data["Actuals 2019 20"].toLocaleString('en-IN')
    },
    {
        name: "Variation in per cent",
        selector: "Variation in per cent",
        wrap: true,
        format: data => data["Variation in per cent"].toLocaleString('en-IN')
    },
];


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

const Table6 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 1.6: Actuals vis-à-vis projection in MTFP for 2019-20"
                    columns={columns}
                    data={ctx.reportData.Tables.Table6}
                    customStyles={customStyles}
                    striped
                    highlightOnHover
                    pointerOnHover
                // pagination
                />
            </Card>
        </div>
    );
}

export default Table6;
