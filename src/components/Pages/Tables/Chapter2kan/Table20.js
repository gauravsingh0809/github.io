import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
  {
    name: "ಪ್ರಧಾನ ಲೆಕ್ಕಶೀರ್ಷಿಕೆ",
    selector: "ಪ್ರಧಾನ ಲೆಕ್ಕಶೀರ್ಷಿಕೆ",
    // grow: ,
    wrap: true,
    // width:'35px',
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
  }, {
    name: "ಹೆಚ್ಚಳ (+)/ ಇಳಿಕೆ (-) ಮೊತ್ತ",
    selector: "ಹೆಚ್ಚಳ (+)/ ಇಳಿಕೆ (-) ಮೊತ್ತ",
    // grow: 0.05,
    // width:'110px',
    wrap: true,
    format: data => data["ಹೆಚ್ಚಳ (+)/ ಇಳಿಕೆ (-) ಮೊತ್ತ"].toLocaleString('en-IN')
  }, {
    name: "ವ್ಯತ್ಯಾಸ ಶೇಕಡ",
    selector: "ವ್ಯತ್ಯಾಸ ಶೇಕಡ",
    // grow: 0.05,
    // width:'110px',
    wrap: true,
    format: data => data["ವ್ಯತ್ಯಾಸ ಶೇಕಡ"].toLocaleString('en-IN')
  },

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



const Table20kan = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಕೋಷ್ಟಕ-2.20: 2019-20ಕ್ಕೆ ಹೋಲಿಸಿದಂತೆ 2020-21ರಲ್ಲಿ ಬಂಡವಾಳ ವೆಚ್ಚ"
          columns={columns}
          data={ctx.tables2kan.Table20}
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

export default Table20kan;
