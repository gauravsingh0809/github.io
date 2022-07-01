import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "",
        selector: "1",
        grow:0.05 ,
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
        name: "ವಿವರಗಳು",
        selector: "ವಿವರಗಳು",
         grow:0.8,
        wrap: true,
      format: data => data["ವಿವರಗಳು"].toLocaleString('en-IN')
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
      name: "2020 21",
      selector: "2020 21",
      // grow: 0.05,
      // width:'110px',
      wrap: true,
      format: data => data["2020 21"].toLocaleString('en-IN')
  },
    {
        name: "ಹೆಚ್ಚಳ/ಇಳಿಕೆ",
        selector: "ಹೆಚ್ಚಳ/ಇಳಿಕೆ",
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



const Table2kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-2.2: 2019-20 ಮತ್ತು 2020-21ರಲ್ಲಿ ನಿಧಿಗಳ ಆಕರ ಮತ್ತು ಅನ್ವಯಗಳ ವಿವರಗಳು."
                    columns={columns}
                    data={ctx.tables2kan.Table2}
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

export default Table2kan;
