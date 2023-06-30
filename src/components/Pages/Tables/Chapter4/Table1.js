import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
  {
    name: "Name of the Institution",
    selector: "Name of the Institution",
    wrap: true,
    grow: 2
  },
  {
    name: "Interest earned",
    selector: "Interest earned",
    wrap: true,
   
  },
  {
    name: "Interest earned",
    selector: "3",
    wrap: true,
    
  },
  {
    name: "Interest earned",
    selector: "__1",
    wrap: true,
    
  },
  {
    name: "Total",
    selector: "__2",
    wrap: true,
    
  },
  {
    name: "Treatment of the interest amount",
    selector: "Treatment of the interest amount",
    grow: 3,
    wrap: true
  }
];

const customStyles = styles;

const Table1 = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="Table 4.1 : Details of interest earned and its treatment"
          columns={columns}
          data={ctx.tables4.Table1}
          customStyles={customStyles}
          striped
          highlightOnHover
          pointerOnHover
        />
      </Card>
    </div>
  );
}

export default Table1;