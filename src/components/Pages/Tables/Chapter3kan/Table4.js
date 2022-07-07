import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [

  {
    name: "ಕ್ರಮ ಸಂಖ್ಯೆ",
    selector: "ಕ್ರಮ ಸಂಖ್ಯೆ",
    grow:0.05,
    wrap: true,
    // format: data => data["್ರಮ ಸಂಖ್ಯೆ"].toLocaleString('en-IN')
  },
  {
    name: "ಆಯವ್ಯಯ ಭರವಸೆ",
    selector: "ಆಯವ್ಯಯ ಭರವಸೆ",
    wrap: true,
  },
  {
    name: "ತೆಗೆದುಕೊಂಡ ಕ್ರಮ",
    selector: "ತೆಗೆದುಕೊಂಡ ಕ್ರಮ",
    // grow: ,
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



const Table4kan = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಕೋಷ್ಟಕ 3.4: ಇನ್ನೂ ಕ್ರಮ ತೆಗೆದುಕೊಳ್ಳಬೇಕಾದ ಪ್ರಮುಖ ಉಪಕ್ರಮಗಳು"
          columns={columns}
          data={ctx.tables3kan.Table4}
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

export default Table4kan;