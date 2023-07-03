import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";



const columns = [
  {
    name: "Name of Sector",
    selector: "Name of Sector",
    sortable: true,
    grow: 0.5,
    wrap: true,
  },
  
  {
    name: "Total Equity",
    selector: "Total Equity",
    sortable: true,
  },
  {
    name: "State Government Equity",
    selector: "State Government Equity",
    sortable: true,
    wrap: true,
  },
  {
    name: "Total Long Term Loans",
    selector: "Total Long Term Loans",
    sortable: true,
    wrap: true,
  },
  {
    name: "State Government Loans",
    selector: "State Government Loans",
    sortable: true,
    wrap: true,
  },
  {
    name: "Total Equity and Long Term Loans",
    selector: "Total Equity and Long Term Loans",
    sortable: true,
    wrap: true,
  }
];

const customStyles = styles;

const conditionalRowStyles = [
    {
      when: row => row["Name of Sector"] === 'Total' ,
      style: {
        backgroundColor: 'rgba(15, 38, 112, 0.4)',
      }
    }
  ]


const Table2 = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
        <Card>
            <DataTable
               title={ctx.tables5.T2H1 }
               columns={columns}
               data={ctx.tables5.Table2}
                customStyles={customStyles}
                striped
                conditionalRowStyles={conditionalRowStyles}
                highlightOnHover
                pointerOnHover
                // pagination
            />
        </Card>
    </div>
);
}

export default Table2;
