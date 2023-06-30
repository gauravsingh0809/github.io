import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";

const columns = [
    
    {
        name: "ಕ್ರಮ ಸಂಖ್ಯೆ",
        selector: "ಕ್ರಮ ಸಂಖ್ಯೆ",
        // grow:0.05,
        wrap: true,
        // format: data => data["ಗುರುತಿಸುವಿಕೆ"].toLocaleString('en-IN')
    },
    {
        name: "ವರ್ಗ",
        selector: "ವರ್ಗ",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        
    },
    {
      name: "ಹಂಚಿಕೆ",
      selector: "ಹಂಚಿಕೆ",
      // grow: ,
      wrap: true,
      // width:'35px',
  },
  {
    name: "ಹಂಚಿಕೆ",
    selector: "3",
    // grow: ,
    wrap: true,
    // width:'35px',
},
  
{
  name: "ವೆಚ್ಚ",
  selector: "ವೆಚ್ಚ",
  // grow: ,
  wrap: true,
  // width:'35px',
},
{
  name: "ವೆಚ್ಚ",
  selector: "__1",
  // grow: ,
  wrap: true,
  // width:'35px',
},
{
  name: "ಒಟ್ಟು ಆಯವ್ಯಯ ಹಂಚಿಕೆಗೆ ಹಂಚಿಕೆಯ ಶೇಕಡಾವಾರು",
  selector: "ಒಟ್ಟು ಆಯವ್ಯಯ ಹಂಚಿಕೆಗೆ ಹಂಚಿಕೆಯ ಶೇಕಡಾವಾರು",
  // grow: ,
  wrap: true,
  // width:'35px',
},
{
  name: "ಒಟ್ಟು ಆಯವ್ಯಯ ಹಂಚಿಕೆಗೆ ಹಂಚಿಕೆಯ ಶೇಕಡಾವಾರು",
  selector: "__2",
  // grow: ,
  wrap: true,
  // width:'35px',
},


];
const conditionalRowStyles = [
  {
      when: row => row["ಕ್ರಮ ಸಂಖ್ಯೆ"] === 'ಒಟ್ಟು',
      style: {
          backgroundColor: 'rgba(53, 165, 128, 0.5)',
      },
  },
  {
      when: row => row["Revenue Surplus"] === 'Over statement',
      style: {
          backgroundColor: 'rgba(153, 165, 128, 0.9)',
      },
  }
]


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
                    title="ಕೋಷ್ಟಕ-೩.೨: ಮಕ್ಕಳ ಕೇಂದ್ರೀಕೃತ ಕಾರ್ಯಕ್ರಮ/ಯೋಜನೆಯಗಳಡಿಯಲ್ಲಿ ಹಂಚಿಕೆಗಳ ವಿವರಗಳು"
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