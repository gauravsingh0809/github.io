import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    
    {
        name: "Name of the Scheme",
        selector: "Name of the Scheme",
        // grow:0.05,
        wrap: true,
        // format: data => data["Name of the Scheme"].toLocaleString('en-IN')
    },
    {
        name: "Allocation",
        selector: "Allocation",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Allocation"].toLocaleString('en-IN')
    },
    {
      name: " ",
      selector: "1",
      // grow: ,
      wrap: true,
      // width:'35px',
  },
    {
        name: "Decrease in percentage",
        selector: "Decrease in percentage",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Decrease in percentage"].toLocaleString('en-IN')
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



const Table2 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 3.2: Decrease in allocation for women specific schemes"
                    columns={columns}
                    data={ctx.reportData.Chap3Tables.Table2}
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

export default Table2;