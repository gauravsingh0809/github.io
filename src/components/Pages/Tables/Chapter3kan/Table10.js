import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "ಲೆಕ್ಕಶೀರ್ಷಿಕೆ/ವಿವರಣೆ",
        selector: "ಲೆಕ್ಕಶೀರ್ಷಿಕೆ/ವಿವರಣೆ",
        grow:0.2 ,
        // wrap: true,
        // width:'60px',
    },
    {
        name: "ಮೊದಲನೇ ತ್ರೈಮಾಸಿಕ",
        selector: "ಮೊದಲನೇ ತ್ರೈಮಾಸಿಕ",
        // grow:0.5 ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "ಎರಡನೇ ತ್ರೈಮಾಸಿಕ",
        selector: "ಎರಡನೇ ತ್ರೈಮಾಸಿಕ",
        grow:0.2,
        wrap: true,
        // format: data => data["ಎರಡನೇ ತ್ರೈಮಾಸಿಕ"].toLocaleString('en-IN')
    },
    {
      name: "ಮೂರನೇ  ತ್ರೈಮಾಸಿಕ",
      selector: "ಮೂರನೇ  ತ್ರೈಮಾಸಿಕ",
      grow:0.2,
      wrap: true,
      // format: data => data["ಮೂರನೇ  ತ್ರೈಮಾಸಿಕ"].toLocaleString('en-IN')
  },
  {
    name: "ಅಂತಿಮ ತ್ರೈಮಾಸಿಕ",
    selector: "ಅಂತಿಮ ತ್ರೈಮಾಸಿಕ",
    grow:0.2,
    wrap: true,
    // format: data => data["ಅಂತಿಮ ತ್ರೈಮಾಸಿಕ"].toLocaleString('en-IN')
},
{
  name: "ಒಟ್ಟು ವೆಚ್ಚ",
  selector: "ಒಟ್ಟು ವೆಚ್ಚ",
  grow:0.2,
  wrap: true,
  // format: data => data["ಒಟ್ಟು ವೆಚ್ಚ"].toLocaleString('en-IN')
},
{
  name: "ಮಾರ್ಚ್‌ನಲ್ಲಿ ವೆಚ್ಚ",
  selector: "ಮಾರ್ಚ್‌ನಲ್ಲಿ ವೆಚ್ಚ",
  grow:0.2,
  wrap: true,
  // format: data => data["ಮಾರ್ಚ್‌ನಲ್ಲಿ ವೆಚ್ಚ"].toLocaleString('en-IN')
},
{
  name: "ಒಟ್ಟು ವೆಚ್ಚಕ್ಕೆ ಮಾರ್ಚ್‌ ವೆಚ್ಚದ ಶೇಕಡಾವಾರು",
  selector: "ಒಟ್ಟು ವೆಚ್ಚಕ್ಕೆ ಮಾರ್ಚ್‌ ವೆಚ್ಚದ ಶೇಕಡಾವಾರು",
  grow:0.2,
  wrap: true,
  // format: data => data["ಒಟ್ಟು ವೆಚ್ಚಕ್ಕೆ ಮಾರ್ಚ್‌ ವೆಚ್ಚದ ಶೇಕಡಾವಾರು"].toLocaleString('en-IN')
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



const Table10 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ 3.10: ೨೦೨೧ರ ಮಾರ್ಚ್‌ನಲ್ಲಿ ವೆಚ್ಚದ ಪ್ರಮಾಣ"
                    columns={columns}
                    data={ctx.tables3kan.Table10}
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

export default Table10;