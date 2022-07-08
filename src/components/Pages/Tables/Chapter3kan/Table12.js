import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

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
    selector: "1",
    // grow:0.5 ,
    wrap: true,
    // width:'35px',
  },
  {
    name: "ರಾಜಸ್ವ",
    selector: "2",
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
    selector: "3",
    // grow:0.5 ,
    wrap: true,
    // width:'35px',
  },
  {
    name: "ಬಂಡವಾಳ",
    selector: "4",
    // grow:0.5 ,
    wrap: true,
    // width:'35px',
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



const Table12kan = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಕೋಷ್ಟಕ 3.12: ನಿರೀಕ್ಷಿತ ಉಳಿತಾಯಗಳು ಅಧ್ಯರ್ಪಣೆ ಆಗದಿರುವುದು/ಭಾಗಶಃ ಆಗಿರುವುದು."
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