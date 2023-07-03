import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";



const columns = [
  {
    name: "Year",
    selector: "Year",
    sortable: true,
    grow: 0.5,
    wrap: true,
  },
  
  {
    name: "No. of SPSEs which declared dividend",
    selector: "_1",
    sortable: true,
    wrap: true,
  },
  {
    name: "Paid Up Capital",
    selector: "Paid Up Capital",
    sortable: true,
    wrap: true,
  },
  {
    name: "Net Profit",
    selector: "Net Profit",
    sortable: true,
    wrap: true,
  },
  {
    name: "Dividend Declared",
    selector: "Dividend Declared",
    sortable: true,
    wrap: true,
  }
];

const customStyles = styles;

const conditionalRowStyles = [
    {
      when: row => row["Activity"] === 'Total' ,
      style: {
        backgroundColor: 'rgba(15, 38, 112, 0.4)',
      }
    }
  ]


const Table6 = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
        <Card>
            <DataTable
               title={ctx.tables5.T6H1 }
               columns={columns}
               data={ctx.tables5.Table6}
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

export default Table6;
