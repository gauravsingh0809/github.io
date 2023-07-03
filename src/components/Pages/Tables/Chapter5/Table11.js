import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";
import { Tooltip } from "@material-ui/core";



const columns = [
  {
    name: "Sl. No.",
    selector: "Sl No",
    sortable: true,
    grow: 0.5,
    wrap: true,
  },
  
  {
    name: "Particulars",
    selector: "Particulars",
    sortable: true,
    wrap: true,
  },
  {
    name: "No. of Government Companies",
    selector: "No of Government Companies",
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


const Table11 = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
        <Card>
            <DataTable
               title={ctx.tables5.T11H1}
               columns={columns}
               data={ctx.tables5.Table11}
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

export default Table11;
