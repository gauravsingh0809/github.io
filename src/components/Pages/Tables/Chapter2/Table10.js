import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
  {
    name: "Year",
    selector: "Year",
    wrap: true,
    width:"80px"
  },
  {
    name: "Type of Grant",
    selector: "Type of Grant",
    wrap: true,
    format: data => data["Type of Grant"].toLocaleString('en-IN')
  },
  {
    name: "",
    selector: "1",
    wrap: true,
    width:"120px",
    format: data => data["1"].toLocaleString('en-IN')
  },
  {
    name: "RLB",
    selector: "RLB",
    wrap: true,
    width:"80px",
    format: data => data["RLB"].toLocaleString('en-IN')
  },
  {
    name: "",
    selector: "2",
    wrap: true,
    width:"90px",
    format: data => data["2"].toLocaleString('en-IN')
  },
  {
    name: "",
    selector: "3",
    wrap: true,
    width:"120px",
    format: data => data["3"].toLocaleString('en-IN')
  },
  {
    name: "ULBs",
    selector: "ULBs",
    wrap: true,
    width:"80px",
    format: data => data["ULBs"].toLocaleString('en-IN')
  },
  {
    name: "",
    selector: "4",
    wrap: true,
    width:"90px",
    format: data => data["4"].toLocaleString('en-IN')
  },
  {
    name: "",
    selector: "5",
    wrap: true,
    width:"120px",
    format: data => data["5"].toLocaleString('en-IN')
  },
  {
    name: "SDRMF",
    selector: "SDRMF",
    wrap: true,
    width:"80px",
    format: data => data["SDRMF"].toLocaleString('en-IN')
  },
  {
    name: "",
    selector: "6",
    wrap: true,
    // width:"80px",
    format: data => data["6"].toLocaleString('en-IN')
  }
];

const conditionalRowStyles = [
  {
      when: row => row["Year"] === 'Total',
      style: {
          backgroundColor: 'rgba(153, 165, 128, 0.9)',
      },
  }
]

const customStyles = styles;



const Table10 = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="Table 2.10: Recommended and actual release of grants during 2020-21"
          columns={columns}
          data={ctx.tables2.Table10}
          customStyles={customStyles}
          striped
          // conditionalRowStyles={conditionalRowStyles}
          highlightOnHover
          pointerOnHover
        // pagination
        />
      </Card>
    </div>
  );
}

export default Table10;
