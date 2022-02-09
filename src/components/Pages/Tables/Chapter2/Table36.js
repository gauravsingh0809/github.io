import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "Year",
        selector: "Year",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "Real growth rate   g",
        selector: "Real growth rate   g",
        // grow:0.05,
        wrap: true,
        format: data => data["Real growth rate   g"].toLocaleString('en-IN')
    },
    {
        name: "Real Interest rate   r",
        selector: "Real Interest rate   r",
        // grow:0.05,
        wrap: true,
        format: data => data["Real Interest rate   r"].toLocaleString('en-IN')
    },
    {
        name: "gr",
        selector: "gr",
        // grow:0.05,
        wrap: true,
        format: data => data["gr"].toLocaleString('en-IN')
    },
    {
        name: "Primary Deficit Surplus   in crores",
        selector: "Primary Deficit Surplus   in crores",
        // grow:0.05,
        wrap: true,
        format: data => data["Primary Deficit Surplus   in crores"].toLocaleString('en-IN')
    },
    {
        name: "Remarks",
        selector: "Remarks",
        // grow:0.05,
        wrap: true,
        format: data => data["Remarks"].toLocaleString('en-IN')
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



const Table36 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.36: Debt Sustainability as per the Domar’s Model"
                    columns={columns}
                    data={ctx.reportData.Chap2Tables.Table36}
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

export default Table36;
