import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";
import "./Tables.css";
import { styles } from "../helpers";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
  {
    name: "Type",
    selector: "Type",
    sortable: true,
    grow: 0.5,
  },
  
  {
    name: "Increase",
    selector: "Increase",
    sortable: true,
  },
];

const customStyles = styles;


const Table1 = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="Table 2.1: Changes in key fiscal aggregates in 2019-20 
          compared to 2018-19"
          columns={columns}
          data={ctx.tables2.Table1}
          defaultSortField="title"
          sortIcon={<SortIcon />}
          customStyles={customStyles}
          striped
          highlightOnHover
          pointerOnHover
          noTableHead={true}
        />
      </Card>
    </div>
  );
}

export default Table1;
