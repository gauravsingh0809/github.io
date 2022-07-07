import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "ವರ್ಷ",
        selector: "ವರ್ಷ",
        grow: 2,
        wrap: true,
        // width:'60px',
    },
    {
        name: "ಒಟ್ಟು ಅನುದಾನಗಳಲ್ಲಿ ಒಳಗೊಂಡಿರುವುದು",
        selector: "ಒಟ್ಟು ಅನುದಾನಗಳಲ್ಲಿ ಒಳಗೊಂಡಿರುವುದು",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "ಪ್ರಕರಣಗಳ ಸಂಖ್ಯೆ",
        selector: "ಪ್ರಕರಣಗಳ ಸಂಖ್ಯೆ",
        // grow:0.05,
        wrap: true,
        format: data => data["ಪ್ರಕರಣಗಳ ಸಂಖ್ಯೆ"].toLocaleString('en-IN')
    },
    {
        name: "ಮೊತ್ತ",
        selector: "ಮೊತ್ತ",
        // grow:0.05,
        wrap: true,
        format: data => data["ಮೊತ್ತ"].toLocaleString('en-IN')
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



const Table7kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-3.7: ೨೦೧೮-೧೯ರಿಂದ ೨೦೨೦-೨೧ರ ಅವಧಿಯಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಾಹಕ ಆದೇಶಗಳ ಮೂಲಕ ಬಿಡುಗಡೆಯಾದ ಹೆಚ್ಚುವರಿ ಮೊತ್ತಗಳು"
                    columns={columns}
                    data={ctx.tables3kan.Table7}
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

export default Table7kan;