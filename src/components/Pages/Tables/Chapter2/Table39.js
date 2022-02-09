import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "Accounts",
        selector: "Accounts",
        grow: 2.5,
        wrap: true,
        // width:'35px',
    },
    {
        name: "Opening balance on 1 April 2019",
        selector: "Opening balance on 1 April 2019",
        // grow:0.05,
        wrap: true,
        format: data => data["Opening balance on 1 April 2019"].toLocaleString('en-IN')
    },
    {
        name: "Closing balance on 31-03-2020",
        selector: "Closing balance on 31032020",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["Closing balance on 31032020"].toLocaleString('en-IN')
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



const Table39 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.40: Cash Balances and their investment(in crores)"
                    columns={columns}
                    data={ctx.reportData.Chap2Tables.Table39}
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

export default Table39;
