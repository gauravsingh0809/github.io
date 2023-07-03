import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";



const columns = [
  {
    name: "Particulars",
    selector: "Particulars",
    sortable: true,
    grow: 0.5,
    wrap: true,
  },
  
  {
    name: "2019-20",
    selector: "2019 20",
    sortable: true,
  },
  {
    name: "2020 21",
    selector: "2020 21",
    sortable: true,
  },
  {
    name: "2021 22",
    selector: "2021 22",
    sortable: true,
  }
];

const customStyles = styles;


const Table1 = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
        <Card>
            <DataTable
               title={ctx.tables5.T1H1}
               columns={columns}
               data={ctx.tables5.Table1}
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

export default Table1;
