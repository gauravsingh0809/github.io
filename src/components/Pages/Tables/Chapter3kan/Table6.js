import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "ವರ್ಷ",
        selector: "ವರ್ಷ",
        // grow: ,
        wrap: true,
        width:'90px',
    },
    {
        name: "ವಿತರಣೆಗಳು",
        selector: "ವಿತರಣೆಗಳು",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "ವಿತರಣೆಗಳು",
        selector: "1",
        // grow:0.05,
        wrap: true,
        // format: data => data["Action taken"].toLocaleString('en-IN')
    },
    {
      name: "ವಿತಉಳಿತಾಯಗಳು (ಉಳಿತಾಯದ ಶೇಕಡಾವಾರು)",
      selector: "ಉಳಿತಾಯಗಳು (ಉಳಿತಾಯದ ಶೇಕಡಾವಾರು)",
      // grow:0.05,
      wrap: true,
      // format: data => data["Action taken"].toLocaleString('en-IN')
  },
  {
    name: "ವಿತಉಳಿತಾಯಗಳು (ಉಳಿತಾಯದ ಶೇಕಡಾವಾರು)",
    selector: "2",
    // grow:0.05,
    wrap: true,
    // format: data => data["Action taken"].toLocaleString('en-IN')
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



const Table6kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ 3.6: 2016-17ರಿಂದ 2020-21ರ ಅವಧಿಯ ಪುರಸ್ಕೃತ ಮತ್ತು ಪ್ರಭೃತ ವಿತರಣೆಗಳು"
                    columns={columns}
                    data={ctx.tables3kan.Table6}   
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

export default Table6kan;