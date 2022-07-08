import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "ವರ್ಷ",
        selector: "ವರ್ಷ",
        grow:0.2 ,
        wrap: true,
        // width:'60px',
    },
    {
        name: "ವಿಭಾಗ",
        selector: "ವಿಭಾಗ",
        grow:2 ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "ಆಯವ್ಯಯ ಅವಕಾಶ",
        selector: "ಆಯವ್ಯಯ ಅವಕಾಶ",
        // grow:0.2 ,
        wrap: true,
        // width:'60px',
    },
    {
        name: "ಒಟ್ಟು",
        selector: "ಒಟ್ಟು",
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
      name: "ಬಳಕೆ ಮಾಡದ ಅವಕಾಶ ಮತ್ತು ಶೇಕಡಾವಾರು",
      selector: "ಬಳಕೆ ಮಾಡದ ಅವಕಾಶ ಮತ್ತು ಶೇಕಡಾವಾರು",
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



const Table15kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ 3.15 ಆಯವ್ಯಯ ಮತ್ತು ವೆಚ್ಚ"
                    columns={columns}
                    data={ctx.tables3kan.Table15 }
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

export default Table15kan;