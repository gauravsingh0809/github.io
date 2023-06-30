import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";
import { styles } from "../helpers";
import { MyContext } from "../../../../Context/MyProvider";


const columns = [
  {
    name: "ವರ್ಷ",
    selector: "ವರ್ಷ",
    grow: 0.2,
    // wrap: true,
    // width:'60px',
  },

  {
    name: "ರಾಜಸ್ವ",
    selector: "ರಾಜಸ್ವ",
    // grow:0.5 ,
    wrap: true,
    // width:'35px',
  },
  {
    name: "ರಾಜಸ್ವ",
    selector: "5",
    // grow:0.5 ,
    wrap: true,
    // width:'35px',
  },
  {
    name: "ರಾಜಸ್ವ",
    selector: "__1",
    // grow:0.5 ,
    wrap: true,
    // width:'35px',
  },
  {
    name: "ಬಂಡವಾಳ",
    selector: "ಬಂಡವಾಳ",
    // grow:0.5 ,
    wrap: true,
    // width:'35px',
  },
  {
    name: "ಬಂಡವಾಳ",
    selector: "__2",
    // grow:0.5 ,
    wrap: true,
    // width:'35px',
  },
  {
    name: "ಬಂಡವಾಳ",
    selector: "__3",
    // grow:0.5 ,
    wrap: true,
    // width:'35px',
  }
];

const customStyles = styles;
// const customStyles = {
//   header: {
//     style: {
//       fontSize: '22px',
//       color: '#fff',
//       backgroundColor: '#ff6359',
//       minHeight: '56px',
//       textAlign: "center",
//     },
//   },
//   rows: {
//     style: {
//       minHeight: '50px', // override the row height
//     }
//   },
//   headCells: {
//     style: {
//       '&:not(:last-of-type)': {
//         borderRightStyle: 'solid',
//         borderRightWidth: '1px',
//         borderRightColor: "black",
//       },
//       fontSize: '12px',
//       fontWeight: '500',
//       textTransform: 'uppercase',
//       padding: '10px'
//     },
//   },
//   cells: {
//     style: {
//       '&:not(:last-of-type)': {
//         borderRightStyle: 'solid',
//         borderRightWidth: '1px',
//         borderRightColor: '#aaa',
//       },
//       fontSize: '14px',
//       paddingLeft: '8px',
//       // backgroundColor: 'rgba(255,255,255,0)',
//     },
//   },
// };



const Table12kan = () => {
const customStyles = styles;
  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಕೋಷ್ಟಕ-೩.೮: ನಿರೀಕ್ಷಿತ ಉಳಿತಾಯಗಳನ್ನು ಅಧ್ಯರ್ಪಣೆ ಮಾಡದಿರುವುದು/ಭಾಗಶ: ಮಾಡಿರುವುದು "
          columns={columns}
          data={ctx.tables3kan.Table12}
          customStyles={customStyles}
          striped
          // conditionalRowStyles={conditionalRowStyles}
          highlightOnHover
          pointerOnHover
          noTableHead
        // pagination
        />
      </Card>
    </div>
  );
}

export default Table12kan;