import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";
import SortIcon from "@material-ui/icons/ArrowDownward";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "Liabilities",
        selector: "Liabilities",
        wrap: true,
        grow:2,
        conditionalCellStyles: [
            {
                when: row => row["Liabilities"] === 'Total Fiscal Liabilities' || 
                row["Liabilities"] === "Total Liabilities to GSDP in per cent",
                style: {
                    backgroundColor: 'rgba(63, 195, 128, 0.5)',
                    color: 'white',
                    fontWeight:500,
                    '&:hover': {
                        cursor: 'pointer',
                    },
                },
            },
        ]
    }, 
    {
        name: "2015-16",
        selector: "2015 16",
        wrap: true,
        format: data => data["2015 16"].toLocaleString('en-IN')
    },
     {
        name: "2016-17",
        selector: "2016 17",
        wrap: true,        
        format: data => data["2016 17"].toLocaleString('en-IN')
    },
     {
        name: "2017-18",
        selector: "2017 18",
        wrap: true,
        format: data => data["2017 18"].toLocaleString('en-IN')
    },
     {
        name: "2018-19",
        selector: "2018 19",
        wrap: true,
        format: data => data["2018 19"].toLocaleString('en-IN')
    },
    {
        name: "2019-20",
        selector: "2019 20",
        wrap: true,
        format: data => data["2019 20"].toLocaleString('en-IN')
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
                borderRightStyle: 'solid',
                borderRightWidth: '1px',
                borderRightColor: "black",
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
                    title="Table 1.4: Trends in Fiscal Liabilities and GSDP"
                    columns={columns}
                    data={ctx.reportData.Tables.Table4}
                    customStyles={customStyles}
                    striped
                    sortIcon={<SortIcon />}
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
