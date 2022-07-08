import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "ಕ್ರಮ ಸಂಖ್ಯೆ",
        selector: "ಕ್ರಮ ಸಂಖ್ಯೆ",
        grow:0.2 ,
        wrap: true,
        // width:'60px',
    },
    {
        name: "ಲೆಕ್ಕಶೀರ್ಷಿಕೆ",
        selector: "ಲೆಕ್ಕಶೀರ್ಷಿಕೆ",
        grow:2 ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "ಒಟ್ಟು ವೆಚ್ಚ",
        selector: "ಒಟ್ಟು ವೆಚ್ಚ",
        // grow:0.2 ,
        wrap: true,
        // width:'60px',
    },
    {
        name: "ಕೊನೆಯ ತ್ರೈಮಾಸಿಕದ ವೆಚ್ಚ",
        selector: "ಕೊನೆಯ ತ್ರೈಮಾಸಿಕದ ವೆಚ್ಚ",
        // grow:0.2 ,
        wrap: true,
        // width:'60px',
    },
    {
        name: "ಕೊನೆಯ ತ್ರೈಮಾಸಿಕದ ವೆಚ್ಚ",
        selector: "2",
        // grow:0.2 ,
        wrap: true,
        // width:'60px',
    },
    {
        name: "ಮಾರ್ಚ್‌ನಲ್ಲಿನ ವೆಚ್ಚ",
        selector: "ಮಾರ್ಚ್‌ನಲ್ಲಿನ ವೆಚ್ಚ",
        // grow:0.2 ,
        wrap: true,
        // width:'60px',
    },
    {
      name: "ಮಾರ್ಚ್‌ನಲ್ಲಿನ ವೆಚ್",
      selector: "__1",
      // grow:0.2 ,
      wrap: true,
      // width:'60px',
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



const Table17kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ 3.17: ವೆಚ್ಚದ ಒತ್ತಡ"
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