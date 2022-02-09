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
        name: "To be transferred as per XIV FC recommendations",
        selector: "To be transferred as per XIV FC recommendations",
        // grow:0.05,
        wrap: true,
        format: data => data["To be transferred as per XIV FC recommendations"].toLocaleString('en-IN')
    },
    {
        name: "Actual tax devolution",
        selector: "Actual tax devolution",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Actual tax devolution"].toLocaleString('en-IN')
    },
    {
        name: "Difference",
        selector: "Difference",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Difference"].toLocaleString('en-IN')
    },
    
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



const Table8 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.8: State’s share in Union taxes and duties: Actual devolution vis-à-vis XIV FC recommendations"
                    columns={columns}
                    data={ctx.reportData.Chap2Tables.Table8}
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

export default Table8;
