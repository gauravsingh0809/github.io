import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
  {
      name: "Major Heads of Account",
      selector: "Major Heads of Account",
      grow:3,
      wrap: true,
  },
  {
      name: "2019 20",
      selector: "2019 20",
      wrap: true,
      format: data => data["2019 20"].toLocaleString('en-IN',{style: 'currency', currency: 'INR'})
  },
  {
      name: "2020 21",
      selector: "2020 21",
      wrap: true,
      format: data => data["2020 21"].toLocaleString('en-IN',{style: 'currency', currency: 'INR'})
  },
  {
      name: "Increase Decrease (In crore )",
      selector: "Increase Decrease (In crore )",
      wrap: true,
      format: data => data["Increase Decrease (In crore )"].toLocaleString('en-IN',{style: 'currency', currency: 'INR'})
  },
  {
      name: "Variation in percentage",
      selector: "Variation in percentage",
      wrap: true,
      format: data => data["Variation in percentage"].toLocaleString('en-IN')
  }
];

const customStyles = styles;

const Table21 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.20: Capital Expenditure during 2019-20 compared to 2018-19"
                    columns={columns}
                    data={ctx.tables2.Table21}
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

export default Table21;