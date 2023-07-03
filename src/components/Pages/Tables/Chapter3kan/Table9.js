import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";

const columns = [
    {
        name: "ಲೆಕ್ಕ ಶೀರ್ಷಿಕೆ /ವಿವರಣೆೆ",
        selector: "ಲೆಕ್ಕ ಶೀರ್ಷಿಕೆ /ವಿವರಣೆ",
        grow:0.5 ,
         wrap: true,
        width:'250px',
    },
    {
        name: "ಮೊದಲನೇ ತ್ರೈಮಾಸಿಕ",
        selector: "ಮೊದಲನೇ ತ್ರೈಮಾಸಿಕ",
        grow:0.1 ,
        wrap: true,
        // width:'35px',
    },
    {
      name: "ಎರಡನೇ ತ್ರೈಮಾಸಿಕ",
      selector: "ಎರಡನೇ ತ್ರೈಮಾಸಿಕ",
      grow:0.3,
      wrap: true,
     
  },
    {
        name: "ಮೂರನೇ ತ್ರೈಮಾಸಿಕ",
        selector: "ಮೂರನೇ ತ್ರೈಮಾಸಿಕ",
        grow:0.3,
        wrap: true,
        // format: data => data["Head of account"].toLocaleString('en-IN')
    },
    {
        name: "ನಾಲ್ಕನೇ ತ್ರೈಮಾಸಿಕ",
        selector: "ನಾಲ್ಕನೇ",
        grow:0.3,
        wrap: true,
        
    },
    {
      name: "ಒಟ್ಟು ವೆಚ್ಚ",
      selector: "ಒಟ್ಟು ವೆಚ್ಚ",
      grow:0.3,
      wrap: true,
      // format: data => data["Head of account"].toLocaleString('en-IN')
  },
  {
    name: "ಮಾರ್ಚ್‌ನಲ್ಲಿ ವೆಚ್ಚ",
    selector: "ಮಾರ್ಚ್‌ನಲ್ಲಿ ವೆಚ್ಚ",
    grow:0.3,
    wrap: true,
    // format: data => data["Head of account"].toLocaleString('en-IN')
},
{
  name: "ಒಟ್ಟು ವೆಚ್ಚಕ್ಕೆ ಮಾರ್ಚ್‌ ವೆಚ್ಚದ ಶೇಕಡಾವಾರು",
  selector: "ಒಟ್ಟು ವೆಚ್ಚಕ್ಕೆ ಮಾರ್ಚ್‌ ವೆಚ್ಚದ ಶೇಕಡಾವಾರು",
  grow:0.3,
  wrap: true,
  // format: data => data["Head of account"].toLocaleString('en-IN')
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



const Table9kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-೩.೬: ೨೦೨೨ರ ಮಾರ್ಚ್‌ನಲ್ಲಿ ವೆಚ್ಚದ ಪ್ರಮಾಣ"
                    columns={columns}
                    data={ctx.tables3kan.Table9}
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

export default Table9kan;