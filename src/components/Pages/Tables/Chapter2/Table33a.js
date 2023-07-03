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
  },
  {
    name: "GSDP",
    selector: "GSDP",
    wrap: true,
    format: data => data["GSDP"].toLocaleString('en-IN')
  },
  {
    name: "Off Budget Borrowing",
    selector: "Off Budget Borrowing",
    // grow:0.05,
    wrap: true,
    format: data => data["Off Budget Borrowing"].toLocaleString('en-IN')
  },
  {
    name: "Fiscal Deficit",
    selector: "Fiscal Deficit",
    // grow:0.05,
    wrap: true,
    format: data => data["Fiscal Deficit"].toLocaleString('en-IN')
  },  
  {
    name: "Fiscal Deficit + Off Budget Borrowing",
    selector: "FDOBB",
    // grow:0.05,
    wrap: true,
    format: data => data["FDOBB"].toLocaleString('en-IN')
  },
 
  {
    name: "Fiscal Deficit/GSDP",
    selector: "FDGSDP",
    // grow:0.05,
    wrap: true,
    format: data => data["FDGSDP"].toLocaleString('en-IN')
  },
  {
    name: "Fiscal Deficit + Off Budget Borrowing/ GSDP",
    selector: "FDOBBGSDP",
    // grow:0.05,
    wrap: true,
    format: data => data["FDOBBGSDP"].toLocaleString('en-IN')
  },
  {
    name: "Outsanding debt/GSDP",
    selector: "ODGSDP",
    // grow:0.05,
    wrap: true,
    format: data => data["ODGSDP"].toLocaleString('en-IN')
  }
];

const customStyles = styles;

const conditionalRowStyles = [
  {
    when: row => row["CompanyCorporationBoard"] === 'Total',
    style: {
      backgroundColor: 'rgba(15, 38, 112, 0.4)',
    }
  }
]

const Table33a = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="Table 2.33 (a) :-Impact of Off Budget Borrowing on Fiscal Indicators"
          columns={columns}
          data={ctx.tables2.Table33a}
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

export default Table33a;
