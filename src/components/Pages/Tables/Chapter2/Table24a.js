import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
  {
    name: " ",
    selector: "1",
    // grow: ,
    wrap: true,
    // width:'35px',
  },
  {
    name: " ",
    selector: "2",
    // grow:0.05,
    wrap: true,
    // format: data => data["Investment made up to 2019 20"].toLocaleString('en-IN')
  }
];

const customStyles = styles;

const Table24a = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title=" "
          columns={columns}
          data={ctx.reportData.Chap2Tables.Table24a}
          customStyles={customStyles}
          striped
          // conditionalRowStyles={conditionalRowStyles}
          highlightOnHover
          pointerOnHover
          noHeader
          noTableHead
        // pagination
        />
      </Card>
    </div>
  );
}

export default Table24a;
