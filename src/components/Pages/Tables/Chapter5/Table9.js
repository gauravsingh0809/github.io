import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";
//import { Tooltip } from "@material-ui/core";



const columns = [
  {
    name: "Year",
    selector: "Year",
    sortable: true,
    grow: 0.5,
    wrap: true,
  },
  
  {
    name: "Net Income (` in crore)",
    selector: "Net Income",
    sortable: true,
    wrap: true,
  },
  {
    name: "Shareholders’ Fund (` in crore)",
    selector: "Shareholders Fund",
    sortable: true,
    wrap: true,
  },
  {
    name: "ROE (Percentage)",
    selector: "ROE",
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


const Table9 = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
        <Card>
            <DataTable
               title={ctx.tables5.T9H1}
               columns={columns}
               data={ctx.tables5.Table9}
                customStyles={customStyles}
                striped
                //conditionalRowStyles={conditionalRowStyles}
                highlightOnHover
                pointerOnHover
                // pagination
            />
        </Card>
    </div>
);
}

export default Table9;
