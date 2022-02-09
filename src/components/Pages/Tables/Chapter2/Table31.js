import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "Company/ Corporation/ Board",
        selector: "CompanyCorporationBoard",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "Outstanding off budget borrowing",
        selector: "Outstanding off budget borrowing",
        // grow:0.05,
        wrap: true,
        format: data => data["Outstanding off budget borrowing"].toLocaleString('en-IN')
    },
    {
        name: "Borrowings during 2019 20",
        selector: "Borrowings during 2019 20",
        // grow:0.05,
        wrap: true,
        format: data => data["Borrowings during 2019 20"].toLocaleString('en-IN')
    },
    {
        name: "Repayment during 2019 20",
        selector: "Repayment during 2019 20",
        // grow:0.05,
        wrap: true,
        format: data => data["Repayment during 2019 20"].toLocaleString('en-IN')
    },
    {
        name: "Repayment",
        selector: "Repayment",
        // grow:0.05,
        wrap: true,
        format: data => data["Repayment"].toLocaleString('en-IN')
    },
    {
        name: "Closing Balance",
        selector: "Closing Balance",
        // grow:0.05,
        wrap: true,
        format: data => data["Closing Balance"].toLocaleString('en-IN')
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



const Table31 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.32: Entity-wise position of off-budget borrowings"
                    columns={columns}
                    data={ctx.reportData.Chap2Tables.Table31}
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

export default Table31;
