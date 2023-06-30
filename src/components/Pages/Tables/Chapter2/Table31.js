import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
  {
    name: "Company/ Corporation/ Board",
    selector: "CompanyCorporationBoard",
    wrap: true,
  },
  {
    name: "Outstanding off budget borrowing",
    selector: "Outstandingborrowing",
    wrap: true,
    format: data => data["Outstandingborrowing"].toLocaleString('en-IN')
  },
  {
    name: "Borrowings during 2021 22",
    selector: "Borrowings2020 21",
    // grow:0.05,
    wrap: true,
    format: data => data["Borrowings2020 21"].toLocaleString('en-IN')
  },
  {
    name: "Repayment during 2021 22",
    selector: "Repayment2021 22",
    // grow:0.05,
    wrap: true,
    format: data => data["Repayment2021 22"].toLocaleString('en-IN')
  },
  {
    name: "",
    selector: "Repayment",
    // grow:0.05,
    wrap: true,
    format: data => data["Repayment"].toLocaleString('en-IN')
  },
  {
    name: "Closing Balance",
    selector: "Closing Balance",
    // grow:0.05,
    wrap: true,
    format: data => data["Closing Balance"].toLocaleString('en-IN')
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

const Table31 = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="Table 2.33: Entity-wise position of off-budget borrowings"
          columns={columns}
          data={ctx.tables2.Table32.t32}
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

export default Table31;
