import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";
import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    // {
    //     name: "Sl No",
    //     selector: "Sl No",
    //     // sortable: true,
    //     grow: 0.3,
    //     conditionalCellStyles: [
    //         {
    //             when: row => row["Sl No"] === '',
    //             style: {
    //                 backgroundColor: '#fff',
    //                 color: 'white',
    //                 '&:hover': {
    //                     cursor: 'pointer',
    //                 },
    //             },
    //         },
    //     ]
    // },
    // {
    //     name: "Components",
    //     selector: "Components",
    //     left: true,
    //     grow: 2.5,
    //     conditionalCellStyles: [
    //         {
    //             when: row => row["Components"] === "Revenue Receipts 1+2+3+4" ||
    //                 row["Components"] === "Capital Receipts 6+7+8" || row["Components"] === "Total Receipts 5+9"
    //                 || row["Components"] === "Total Expenditure(11+13+14)" || row["Components"] === "Revenue Surplus/Deficit(5-11)"
    //                 || row["Components"] === "Fiscal Deficit{(5+6+7)-15}" || row["Components"] === 'Primary Deficit (17-12)',
    //             style: {
    //                 backgroundColor: 'rgba(63, 195, 128, 0.5)',
    //                 color: 'white',
    //                 '&:hover': {
    //                     cursor: 'pointer',
    //                 },
    //             },
    //         },
    //     ]
    // },
    {
        name: "Statement number",
        selector: "Statement number",
        sortable: true,
        wrap:true,
        grow: 0.1
    },
    {
        name: "Layout",
        selector: "Layout",
        wrap:true
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
        },
    },
};


const Appendix1_2 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Appendix 1.2: Structure of Government Accounts"
                    columns={columns}
                    data={ctx.reportData.Appendices1.Appendix1_2}
                    customStyles={customStyles}
                    striped
                    highlightOnHover
                    pointerOnHover
                />
            </Card>
        </div>
    );
}

export default Appendix1_2;