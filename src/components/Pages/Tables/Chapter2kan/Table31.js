import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "ಕಂಪನಿ/ನಿಗಮ/ಮಂಡಳಿ",
        selector: "ಕಂಪನಿ ನಿಗಮ ಮಂಡಳಿ",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "ಬಾಕಿ ಇರುವ ಆಯವ್ಯಯೇತರ ಸಾಲಗಳು",
        selector: "ಬಾಕಿ ಇರುವ ಆಯವ್ಯಯೇತರ ಸಾಲಗಳು",
        // grow:0.05,
        wrap: true,
        format: data => data["ಬಾಕಿ ಇರುವ ಆಯವ್ಯಯೇತರ ಸಾಲಗಳು"].toLocaleString('en-IN')
    },
    {
        name: "೨೦೨೦-೨೧ರ ಅವಧಿಯಲ್ಲಿ ಸಾಲಗಳು",
        selector: "೨೦೨೦ ೨೧ರ ಅವಧಿಯಲ್ಲಿ ಸಾಲಗಳು",
        // grow:0.05,
        wrap: true,
        format: data => data["೨೦೨೦ ೨೧ರ ಅವಧಿಯಲ್ಲಿ ಸಾಲಗಳು"].toLocaleString('en-IN')
    },
    {
        name: "೨೦೨೦-೨೧ರಲ್ಲಿ ಮರುಪಾವತಿಗಳು",
        selector: "೨೦೨೦ ೨೧ರಲ್ಲಿ ಮರುಪಾವತಿಗಳು",
        // grow:0.05,
        wrap: true,
        format: data => data["೨೦೨೦ ೨೧ರಲ್ಲಿ ಮರುಪಾವತಿಗಳು"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "1",
        // grow:0.05,
        wrap: true,
        format: data => data["1"].toLocaleString('en-IN')
    },
    {
        name: "ಅಂತಿಮ ಶಿಲ್ಕು",
        selector: "ಅಂತಿಮ ಶಿಲ್ಕು",
        // grow:0.05,
        wrap: true,
        format: data => data["ಅಂತಿಮ ಶಿಲ್ಕು"].toLocaleString('en-IN')
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



const Table31kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-2.31: ಆಯವ್ಯಯ ಹೊರಗಿನ ಸಾಲಗಳ ಘಟಕವಾರು ಸ್ಥಿತಿ"
                    columns={columns}
                    data={ctx.tables2kan.Table31}
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

export default Table31kan;
