import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "ಕ್ರಮ ಸಂಖ್ಯೆ",
        selector: "ಕ್ರಮ ಸಂಖ್ಯೆ",
        // grow: ,
        // wrap: true,
        // width:'60px',
    },
    {
        name: "ಲೆಕ್ಕ ಶೀರ್ಷಿಕೆ",
        selector: "ಲೆಕ್ಕ ಶೀರ್ಷಿಕೆ",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "ಆಯವ್ಯಯ ಅವಕಾಶ",
        selector: "ಆಯವ್ಯಯ ಅವಕಾಶ",
        // grow:0.05,
        wrap: true,
        format: data => data["ಆಯವ್ಯಯ ಅವಕಾಶ"].toLocaleString('en-IN')
    },
    {
        name: "ಭರಿಸಿದ ವೆಚ್ಚ",
        selector: "ಭರಿಸಿದ ವೆಚ್ಚ",
        // grow:0.05,
        wrap: true,
        format: data => data["ಭರಿಸಿದ ವೆಚ್ಚ"].toLocaleString('en-IN')
    },
    {
        name: "ಬಿಡುಗಡೆಯಾದ ಮೊತ್ತ",
        selector: "ಬಿಡುಗಡೆಯಾದ ಮೊತ್ತ",
        // grow:0.05,
        wrap: true,
        format: data => data["ಬಿಡುಗಡೆಯಾದ ಮೊತ್ತ"].toLocaleString('en-IN')
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



const Table8kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ 3.8-ಸಂಬಳ ಪಾವತಿಗಾಗಿ ಬಂಡವಾಳ ವಿಭಾಗದ ಅಡಿಯಲ್ಲಿ ಬಿಡುಗಡೆಯಾದ ನಿಧಿಗಳು"
                    columns={columns}
                    data={ctx.tables3kan.Table8}
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

export default Table8kan;