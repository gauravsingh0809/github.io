import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
    {
        name: "Sl No",
        selector: "Sl No",
        grow:0.1,
        wrap: true,
    },
    {
        name: "Major Head",
        selector: "Major Head",
        wrap: true
    },
    {
        name: "2017-18",
        selector: "2017-18",
        wrap: true,
    },
    {
        name: "2018-19",
        selector: "2018-19",
        wrap: true,
    },
    {
        name: "2019-20",
        selector: "2019-20",
        wrap: true,
    },
    {
        name: "Total",
        selector: "Total",
        wrap: true,
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
                    title="Table 3.21: Misclassification of salary expenditure under capital head"
                    columns={columns}
                    data={ctx.reportData.Chap3Tables.Table21}
                    customStyles={customStyles}
                    striped
                    highlightOnHover
                    pointerOnHover
                    // pagination
                />
            </Card>
        </div>
    );
}

export default Table21;