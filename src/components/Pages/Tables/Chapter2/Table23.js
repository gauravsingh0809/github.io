import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
  {
    name: "Statutory Company/Corporation",
    selector: "1",
    grow:3 ,
    wrap: true,
    // width:'35px',
  },
  {
    name: "Cumulative loss at the end of 2018-19",
    selector: "2",
    // grow:0.05,
    wrap: true,
    //format: data => data["2"].toLocaleString('en-IN')
  },
  {
    name: "Cumulative loss at the end of 2019-20",
    selector: "3",
    // grow:0.05,
    wrap: true,
    //format: data => data["3"].toLocaleString('en-IN')
  },
  {
    name: "Cumulative loss at the end of 2020-21",
    selector: "4",
    // grow:0.05,
    wrap: true,
    //format: data => data["4"].toLocaleString('en-IN')
  },
  {
    name: "Investment made up to 2021-22",
    selector: "5",
    // grow:0.05,
    wrap: true,
    //format: data => data["5"].toLocaleString('en-IN')
  }
];

const conditionalRowStyles = [
  {
    when: row => row["1"] === 'Total',
    style: {
      backgroundColor:  'rgba(153, 165, 128, 0.9)',
    }
  }
]

const customStyles = styles;

const Table23 = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="Table 2.23: Investments made in loss making Companies"
          columns={columns}
          data={ctx.tables2.Table23}
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

export default Table23;
