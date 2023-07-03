import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";
import { styles } from "../helpers";
import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "ಲೆಕ್ಕ ಶೀರ್ಷಿಕೆ/ಹೆಸರು",
        selector: "ಲೆಕ್ಕ ಶೀರ್ಷಿಕೆ/ಹೆಸರು",
        // grow:2 ,
        wrap: true,
        // width:'60px',
    },
    {
        name: "ಆಯವ್ಯಯ ಅಂದಾಜು",
        selector: "ಆಯವ್ಯಯ ಅಂದಾಜು",
        // grow:0.5 ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "ಪರಿಷ್ಕೃತ ಅಂದಾಜು",
        selector: "ಪರಿಷ್ಕೃತ ಅಂದಾಜು",
        // grow:0.2 ,
        wrap: true,
        // width:'60px',
    },
    {
        name: "ವೆಚ್ಚ",
        selector: "ವೆಚ್ಚ",
        // grow:0.5 ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "ಉಳಿತಾಯ*",
        selector: "ಉಳಿತಾಯ*",
        // grow:0.2 ,
        wrap: true,
        // width:'60px',
    },
    {
        name: "ಖಾತೆಯಲ್ಲಿ ಜಮೆ ಮಾಡಿದ್ದು (ವೆಚ್ಚವೆಂದು ತೋರಿಸಲಾಗಿದೆ)",
        selector: "ಖಾತೆಯಲ್ಲಿ ಜಮೆ ಮಾಡಿದ್ದು (ವೆಚ್ಚವೆಂದು ತೋರಿಸಲಾಗಿದೆ)",
        // grow:0.5 ,
        wrap: true,
        // width:'35px',
    },

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



const Table14kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-೩.೧0: ಅನುದಾನಗಳು, ವೆಚ್ಚ ಮತ್ತು ಬ್ಯಾಂಕ್‌ ಖಾತೆಗೆ ವರ್ಗಾವಣೆಗಳ ವಿವಿರಗಳು "
                    columns={columns}
                    data={ctx.tables3kan.Table14}
                    customStyles={customStyles}
                    striped
                    // conditionalRowStyles={conditionalRowStyles}
                    highlightOnHover
                    pointerOnHover
                    // noTableHead
                    // pagination
                />
            </Card>
        </div>
    );
}

export default Table14kan;