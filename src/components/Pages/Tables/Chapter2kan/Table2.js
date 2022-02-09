import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "",
        selector: "Type",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    // {
    //     name: "",
    //     selector: "2",
    //     grow: 0.4,
    //     wrap: true,
    //     conditionalCellStyles: [
    //         {
    //             when: row => row["2"] === 'Total',
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
        name: "Particulars",
        selector: "Particulars",
        // grow:0.05,
        wrap: true,
        // format: data => data["Liabilities"].toLocaleString('en-IN')
    },
    {
        name: "2018 19",
        selector: "2018 19",
        // grow: 0.05,
        wrap: true,
        format: data => data["2018 19"].toLocaleString('en-IN')
    },
    {
        name: "2019 20",
        selector: "2019 20",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["2019 20"].toLocaleString('en-IN')
    },
    {
        name: "Increase/Decrease",
        selector: "Increase or Decrease",
        // grow: 0,
        wrap: true,
        // width:'35px'
    },
    // {
    //     name: "",
    //     selector: "6",
    //     grow: 0.4,
    //     wrap: true,
    //     conditionalCellStyles: [
    //         {
    //             when: row => row["6"] === 'Total',
    //             style: {
    //                 backgroundColor: 'rgba(63, 195, 128, 0.5)',
    //                 color: 'white',
    //                 '&:hover': {
    //                     cursor: 'pointer',
    //                 },
    //             },
    //         }
    //     ]
    // },
    // {
    //     name: "Assets",
    //     selector: "Assets",
    //     grow: 0.05,
    //     wrap: true,
    //     format: data => data["Assets"].toLocaleString('en-IN')
    // },
    // {
    //     name: "",
    //     selector: "7",
    //     grow: 0.05,
    //     wrap: true,
    //     format: data => data["7"].toLocaleString('en-IN')
    // },
    // {
    //     name: "",
    //     selector: "8",
    //     grow:0.05,
    //     wrap: true,
    //     format: data => data["8"].toLocaleString('en-IN')
    // },
];

// const conditionalRowStyles = [
//     {
//         when: row => row["4"] === 'Consolidated Fund' ||
//             row["4"] === 'Public Account',
//         style: {
//             backgroundColor: 'rgba(153, 165, 128, 0.9)',
//         },
//     }
// ]

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
        // backgroundColor: 'rgba(255,255,255,0)',
      },
    },
  };



const Table2 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.2: Details of Sources and Application of funds during 
                    2018-19 and 2019-20"
                    columns={columns}
                    data={ctx.reportData.Chap2Tables.Table2}
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

export default Table2;
