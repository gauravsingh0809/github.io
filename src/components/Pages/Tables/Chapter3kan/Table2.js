import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    
    {
        name: "<ಗುರುತಿಸುವಿಕೆ",
        selector: "ಗುರುತಿಸುವಿಕೆ",
        // grow:0.05,
        wrap: true,
        // format: data => data["ಗುರುತಿಸುವಿಕೆ"].toLocaleString('en-IN')
    },
    {
        name: "ವರ್ಗೀಕರಣ",
        selector: "ವರ್ಗೀಕರಣ",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["ವರ್ಗೀಕರಣ"].toLocaleString('en-IN')
    },
    {
      name: "ಮಾನದಂಡ",
      selector: "ಮಾನದಂಡ",
      // grow: ,
      wrap: true,
      // width:'35px',
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
        padding: '10px',
        backgroundColor: "r#f0dca5"
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
                    title="ಕೋಷ್ಟಕ-3.2: ಮಕ್ಕಳ ಕೇಂದ್ರಿತ ಕಾರ್ಯಕ್ರಮ/ಯೋಜನೆಗಳ ಗುರುತಿಸುವಿಕೆ ಮತ್ತು ವರ್ಗೀಕರಣದ ಮಾನದಂಡ"
                    columns={columns}
                    data={ctx.tables3kan.Table2}
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