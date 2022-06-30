import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";
import "./Tables.css";
import { styles } from "../helpers";

import { MyContext } from "../../../../Context/MyProvider";


const columns = [
  {
    name: "1",
    selector: "1",
    sortable: true,
    grow: 0.5,
  },
  
  {
    name: "1.",
    selector: "2",
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
          title="ಕೋಷ್ಟಕ-2.1: 2019-20ಕ್ಕೆ ಹೋಲಿಸಿದಂತೆ 2020-21ರಲ್ಲಿ ಪ್ರಮುಖ ಹಣಕಾಸಿನ ಒಟ್ಟುಗಳಲ್ಲಿನ ಬದಲಾವಣೆಗಳು"
          columns={columns}
          data={ctx.tables2kan.Table1}
          defaultSortField="title"
          sortIcon={<SortIcon />}
          customStyles={customStyles}
          striped
          highlightOnHover
          pointerOnHover
          noTableHead={true}   // Hiding the column name
        />
      </Card>
    </div>
  );
}

export default Table1;
