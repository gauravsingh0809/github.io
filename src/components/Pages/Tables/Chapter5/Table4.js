import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";



const columns = [
  {
    name: "SI No",
    selector: "Sl No",
    sortable: true,
    grow: 0.5,
    wrap: true,
  },
  
  {
    name: "Activity",
    selector: "Activity",
    sortable: true,
    wrap: true,
  },
  {
    name: "No of PSUs",
    selector: "No of PSUs",
    sortable: true,
    wrap: true,
  },
  {
    name: "",
    selector: "_1",
    sortable: true,
    wrap: true,
  },
  {
    name: "Investment",
    selector: "Investment",
    sortable: true,
    wrap: true,
  },
  {
    name: "",
    selector: "_2",
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


const Table4 = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
        <Card>
            <DataTable
               title={ctx.tables5.T4H1 }
               columns={columns}
               data={ctx.tables5.Table4}
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

export default Table4;
