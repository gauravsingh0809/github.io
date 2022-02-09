import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "Name of the entity",
        selector: "Name of the entity",
        grow:4 ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "As furnished by entity",
        selector: "As furnished by entity",
        // grow:0.05,
        wrap: true,
        format: data => data["As furnished by entity"].toLocaleString('en-IN')
    },
    {
        name: "As per FDALM section",
        selector: "As per FDALM section",
        // grow:0.05,
        wrap: true,
        format: data => data["As per FDALM section"].toLocaleString('en-IN')
    },
    {
        name: "Difference",
        selector: "Difference",
        // grow:0.05,
        wrap: true,
        format: data => data["Difference"].toLocaleString('en-IN')
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



const Table38 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.39: Variation in Guarantee Commission dues"
                    columns={columns}
                    data={ctx.reportData.Chap2Tables.Table38}
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

export default Table38;
