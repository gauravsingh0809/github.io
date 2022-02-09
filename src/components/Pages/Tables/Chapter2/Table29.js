import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "Major Head of Account 2245  Relief on Account of Natural Calamities",
        selector: "Major Head of Account 2245  Relief on Account of Natural Calamities",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "Minor Head of Account",
        selector: "Minor Head of Account",
        // grow:0.05,
        wrap: true,
        format: data => data["Minor Head of Account"].toLocaleString('en-IN')
    },
    {
        name: "Expenditure during 2019 20",
        selector: "Expenditure during 2019 20",
        // grow:0.05,
        wrap: true,
        format: data => data["Expenditure during 2019 20"].toLocaleString('en-IN')
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



const Table29 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.30: Details of expenditure charged to Relief on Account of Natural Calamities"
                    columns={columns}
                    data={ctx.reportData.Chap2Tables.Table29}
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

export default Table29;
