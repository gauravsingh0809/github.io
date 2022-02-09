import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";

const columns = [
    {
        name: "Parameters",
        selector: "Parameters",
        // grow: ,
        wrap: true,
        // width:'35px',
        conditionalCellStyles: [
          {
            when: row => row["Parameters"] === 'Buoyancy ratios[1]' 
            || row["Parameters"] === 'Revenue Buoyancy[2] w.r.t GSDP'
            || row["Parameters"] === "State's own revenue buoyancy[3] w.r.t GSDP",
            style: {
              backgroundColor: 'rgba(153, 165, 128, 0.7)',
              color: 'white',
              '&:hover': {
                cursor: 'pointer',
              },
            },
          },
        ]
    },
    
    {
        name: "2015-16",
        selector: "2015 16",
        // grow:0.05,
        wrap: true,
        format: data => data["2015 16"].toLocaleString('en-IN')
    },
    {
        name: "2016-17",
        selector: "2016 17",
        // grow: 0.05,
        wrap: true,
        format: data => data["2016 17"].toLocaleString('en-IN')
    },
    {
        name: "2017-18",
        selector: "2017 18",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["2017 18"].toLocaleString('en-IN')
    },
    {
        name: "2018-19",
        selector: "2018 19",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["2018 19"].toLocaleString('en-IN')
    },
    {
        name: "2019-20",
        selector: "2019 20",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["2019 20"].toLocaleString('en-IN')
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



const Table3 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.3: Trends and growth in Revenue Receipts"
                    columns={columns}
                    data={ctx.reportData.Chap2Tables.Table3}
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

export default Table3;
