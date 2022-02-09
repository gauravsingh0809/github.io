import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "Year",
        selector: "Year",
        wrap: true,
    },
    {
        name: "Number of UCs",
        selector: "Number of UCs",
        wrap: true,
        format: data => data["Number of UCs"].toLocaleString('en-IN')
    },
    {
        name: "Amount",
        selector: "Amount",
        wrap: true,
        format: data => data["Amount"].toLocaleString('en-IN')
    }
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
            // backgroundColor: 'rgba(255,255,255,0)',
        },
    },
};



const Table3 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 4.3: Year wise break up of Outstanding UCs"
                    columns={columns}
                    data={ctx.reportData.Chap4Tables.Table3}
                    customStyles={customStyles}
                    striped
                    // conditionalRowStyles={conditionalRowStyles}
                    highlightOnHover
                    pointerOnHover
                // pagination
                />
            </Card>
        </div>
    );
}

export default Table3;