import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "Works under",
        selector: "Works under",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "No of incomplete projects",
        selector: "No of incomplete projects",
        // grow:0.05,
        wrap: true,
        format: data => data["No of incomplete projects"].toLocaleString('en-IN')
    },
    {
        name: "Estimated cost",
        selector: "Estimated cost",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Estimated cost"].toLocaleString('en-IN')
    },
    {
        name: "Expenditure",
        selector: "Expenditure",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Expenditure"].toLocaleString('en-IN')
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

    title: {
        style: {
          fontColor: 'red',
          fontWeight: '900',
          width: "fit-content"
        }
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
        padding: '10px',
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



const Table26    = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.27: Department wise profile of 
                    incomplete projects which are more than one 
                    crore as on 31 March 2020
                    (` in crore)"
                    columns={columns}
                    data={ctx.reportData.Chap2Tables.Table26}
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

export default Table26;