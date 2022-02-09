import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "",
        selector: "ratio",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "AE/GSDP",
        selector: "AEGSDP",
        // grow:0.05,
        wrap: true,
        format: data => data["AEGSDP"].toLocaleString('en-IN')
    },
    {
        name: "CE/AE",
        selector: "CEAE",
        // grow:0.05,
        wrap: true,
        format: data => data["CEAE"].toLocaleString('en-IN')
    },
    {
        name: "DE/AE",
        selector: "DEAE",
        // grow:0.05,
        wrap: true,
        format: data => data["DEAE"].toLocaleString('en-IN')
    },
    {
        name: "Education/AE",
        selector: "EducationAE",
        // grow:0.05,
        wrap: true,
        format: data => data["EducationAE"].toLocaleString('en-IN')
    },
    {
        name: "Health/AE",
        selector: "HealthAE",
        // grow:0.05,
        wrap: true,
        format: data => data["HealthAE"].toLocaleString('en-IN')
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



const Table27 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.28: Fiscal priority of the States in 2019-20"
                    columns={columns}
                    data={ctx.reportData.Chap2Tables.Table27}
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

export default Table27;
