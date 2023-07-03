import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";
import { styles } from "../helpers";
import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "ಲೆಕ್ಕ ಶೀರ್ಷಿಕೆ",
        selector: "ಲೆಕ್ಕ ಶೀರ್ಷಿಕೆ",
        // grow: ,
        // wrap: true,
        // width:'60px',
    },
    {
        name: "ಸಂಸ್ಥೆ",
        selector: "ಸಂಸ್ಥೆ",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "ವೆಚ್ಚದ ಸ್ವರೂಪ",
        selector: "ವೆಚ್ಚದ ಸ್ವರೂಪ",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "ಮೊತ್ತ (` ಕೋಟಿಗಳಲ್ಲಿ)",
        selector: "ಮೊತ್ತ",
        // grow:0.05,
        wrap: true,
       
    }
    
];

const customStyles = styles;
// const customStyles = {
//     header: {
//       style: {
//         fontSize: '22px',
//         color: '#fff',
//         backgroundColor: '#ff6359',
//         minHeight: '56px',
//         textAlign: "center",
//       },
//     },
//     rows: {
//       style: {
//         minHeight: '50px', // override the row height
//       }
//     },
//     headCells: {
//       style: {
//         '&:not(:last-of-type)': {
//           borderRightStyle: 'solid',
//           borderRightWidth: '1px',
//           borderRightColor: "black",
//         },
//         fontSize: '12px',
//         fontWeight: '500',
//         textTransform: 'uppercase',
//         padding: '10px'
//       },
//     },
//     cells: {
//       style: {
//         '&:not(:last-of-type)': {
//           borderRightStyle: 'solid',
//           borderRightWidth: '1px',
//           borderRightColor: '#aaa',
//         },
//         fontSize: '14px',
//         paddingLeft: '8px',
//         // backgroundColor: 'rgba(255,255,255,0)',
//       },
//     },
//   };



const Table8bkan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                   
                    columns={columns}
                    data={ctx.tables3kan.Table8b}
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

export default Table8bkan;