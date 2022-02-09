import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
  {
      name: "Major Heads of Account",
      selector: "Major Heads of Account",
      grow:3,
      wrap: true,
  },
  {
      name: "2018 19",
      selector: "2018 19",
      wrap: true,
      format: data => data["2018 19"].toLocaleString('en-IN')
  },
  {
      name: "2019 20",
      selector: "2019 20",
      wrap: true,
      format: data => data["2019 20"].toLocaleString('en-IN')
  },
  {
      name: "Increase Decrease (In crore )",
      selector: "Increase Decrease (In crore )",
      wrap: true,
      format: data => data["Increase Decrease (In crore )"].toLocaleString('en-IN')
  },
  {
      name: "Percentage",
      selector: "Percentage",
      wrap: true,
      format: data => data["Percentage"].toLocaleString('en-IN')
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



const Table21 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.21: Capital Expenditure during 2019-20 compared to 2018-19"
                    columns={columns}
                    data={ctx.reportData.Chap2Tables.Table21}
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

export default Table21;