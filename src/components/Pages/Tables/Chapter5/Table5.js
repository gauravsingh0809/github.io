import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";



const columns = [
  {
    name: "Name of SPSE",
    selector: "Name of SPSE",
    sortable: true,
    grow: 0.5,
    wrap: true,
  },
  
  {
    name: "Net profit earned (` in crore)",
    selector: "Net profit earned",
    sortable: true,
    wrap: true,
  },
  {
    name: "Percentage of Profit to total SPEs profit",
    selector: "Percentage of Profit to total SPEs profit",
    sortable: true,
    wrap: true,
  }
];

const customStyles = styles;

const conditionalRowStyles = [
    {
      when: row => row["Name of SPSE"] === 'Total' ,
      style: {
        backgroundColor: 'rgba(15, 38, 112, 0.4)',
      }
    }
  ]


const Table5 = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
        <Card>
            <DataTable
               title={ctx.tables5.T5H1}
               columns={columns}
               data={ctx.tables5.Table5}
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

export default Table5;
