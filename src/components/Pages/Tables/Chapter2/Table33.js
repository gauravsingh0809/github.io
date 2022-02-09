import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "SlNo",
        selector: "SlNo",
        grow:0.1 ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "Particulars",
        selector: "Particulars",
        grow:2 ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "Receipt",
        selector: "Receipt",
        // grow:0.05,
        wrap: true,
        format: data => data["Receipt"].toLocaleString('en-IN')
    },
    {
        name: "Disbursement",
        selector: "Disbursement",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Disbursement"].toLocaleString('en-IN')
    },
    {
        name: "Net",
        selector: "Net",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Net"].toLocaleString('en-IN')
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



const Table33 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.34: Receipts and Disbursements under components financing the fiscal deficit during 2019-20"
                    columns={columns}
                    data={ctx.reportData.Chap2Tables.Table33}
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

export default Table33;
