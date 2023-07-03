import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";
import { styles } from "../helpers";
import { MyContext } from "../../../../Context/MyProvider";

const customStyles = styles;
const columns = [
    {
        name: "ಕ್ರಮ ಸಂಖ್ಯೆ",
        selector: "ಕ್ರಮ ಸಂಖ್ಯೆ",
        grow:0.2 ,
        wrap: true,
        // width:'60px',
    },
    {
        name: "ಲೆಕ್ಕ ಶೀರ್ಷಿಕೆ/ಹೆಸರು",
        selector: "ಲೆಕ್ಕ ಶೀರ್ಷಿಕೆ/ಹೆಸರು",
        grow:2 ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "2019-20",
        selector: "2019-20",
        // grow:0.2 ,
        wrap: true,
        // width:'60px',
    },
    {
        name: "2020-21",
        selector: "2020-21",
        // grow:0.2 ,
        wrap: true,
        // width:'60px',
    },
    {
        name: "2021-22",
        selector: "2021-22",
        // grow:0.2 ,
        wrap: true,
        // width:'60px',
    }

];


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



const Table17kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ ೩.೧3: ಸತತ ಉಳಿತಾಯಗಳು "
                    columns={columns}
                    data={ctx.tables3kan.Table17}
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

export default Table17kan;