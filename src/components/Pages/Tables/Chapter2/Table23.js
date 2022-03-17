import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
  {
    name: "Company/Corporation",
    selector: "CompanyCorporation",
    grow:3 ,
    wrap: true,
    // width:'35px',
  },
  {
    name: "Cumulative loss at the end of 2017-18",
    selector: "Cumulative loss at the end of 2017-18",
    // grow:0.05,
    wrap: true,
    format: data => data["Cumulative loss at the end of 2017-18"].toLocaleString('en-IN')
  },
  {
    name: "Cumulative loss at the end of 2018-19",
    selector: "Cumulative loss at the end of 2018-19",
    // grow:0.05,
    wrap: true,
    format: data => data["Cumulative loss at the end of 2018-19"].toLocaleString('en-IN')
  },
  {
    name: "Cumulative loss at the end of 2019-20",
    selector: "Cumulative loss at the end of 2019-20",
    // grow:0.05,
    wrap: true,
    format: data => data["Cumulative loss at the end of 2019-20"].toLocaleString('en-IN')
  },
  {
    name: "Investment made up to 2020-21",
    selector: "Investment made up to 2020-21",
    // grow:0.05,
    wrap: true,
    format: data => data["Investment made up to 2020-21"].toLocaleString('en-IN')
  }
];

const conditionalRowStyles = [
  {
    when: row => row["CompanyCorporation"] === 'Total',
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
          title="Table 2.22: Investments made in loss making Companies"
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
