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
        name: "Type of Grant",
        selector: "Type of Grant",
        // grow:0.05,
        wrap: true,
        // format: data => data["Type of Grant"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "0",
        // grow:0.05,
        wrap: true,
        format: data => data["0"].toLocaleString('en-IN')
    },
    {
        name: "PRIs",
        selector: "PRIs",
        wrap: true,
        format: data => data["PRIs"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "1",
        wrap: true,
        format: data => data["1"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "2",
        wrap: true,
        format: data => data["2"].toLocaleString('en-IN')
    },
    {
        name: "ULBs",
        selector: "ULBs",
        wrap: true,
        format: data => data["ULBs"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "3",
        wrap: true,
        format: data => data["3"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "4",
        wrap: true,
        format: data => data["4"].toLocaleString('en-IN')
    },
    {
        name: "SDRF",
        selector: "SDRF",
        wrap: true,
        format: data => data["SDRF"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "5",
        wrap: true,
        format: data => data["5"].toLocaleString('en-IN')
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



const Table10 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.10: Transfer of recommended and actual release of grants during 2015-16 to 2019-20"
                    columns={columns}
                    data={ctx.reportData.Chap2Tables.Table10}
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

export default Table10;
