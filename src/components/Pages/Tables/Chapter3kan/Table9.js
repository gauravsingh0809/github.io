import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "ಕ್ರಮ ಸಂಖ್ಯೆ",
        selector: "ಕ್ರಮ ಸಂಖ್ಯೆ",
        grow:0.5 ,
        // wrap: true,
        width:'60px',
    },
    {
        name: "ಅನುದಾನ",
        selector: "ಅನುದಾನ",
        grow:0.1 ,
        wrap: true,
        // width:'35px',
    },
    {
      name: "ಅವಕಾಶ",
      selector: "ಅವಕಾಶ",
      grow:0.3,
      wrap: true,
      format: data => data["ಅವಕಾಶ"].toLocaleString('en-IN')
  },
    {
        name: "ವೆಚ್ಚ",
        selector: "ವೆಚ್ಚ",
        grow:0.3,
        wrap: true,
        // format: data => data["Head of account"].toLocaleString('en-IN')
    },
    {
        name: "ಅಧಿಕ",
        selector: "ಅಧಿಕ",
        grow:0.3,
        wrap: true,
        format: data => data["ಅಧಿಕ"].toLocaleString('en-IN')
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



const Table9kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ 3.9: 2020-21ರಲ್ಲಿ ಸಕ್ರಮೀಕರಣದ ಅಗತ್ಯವಿರುವ ಅವಕಾಶಕ್ಕಿಂತಲೂ ಹೆಚ್ಚಾದ ವೆಚ್ಚ"
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