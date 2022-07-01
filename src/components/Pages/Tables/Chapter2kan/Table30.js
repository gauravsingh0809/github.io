import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
  {
    name: "",
    selector: "1",
    // grow: ,
    wrap: true,
    // width:'35px',
  },
  {
    name: "",
    selector: "__1",
    // grow: ,
    wrap: true,
    // width:'35px',
  },
  {
    name: "2016 17",
    selector: "2016 17",
    // grow: 0.05,
    // width:'110px',
    wrap: true,
    format: data => data["2016 17"].toLocaleString('en-IN')
  },
  {
    name: "2017 18",
    selector: "2017 18",
    // grow: 0.05,
    // width:'110px',
    wrap: true,
    format: data => data["2017 18"].toLocaleString('en-IN')
  },
  {
    name: "2018 19",
    selector: "2018 19",
    // grow: 0.05,
    // width:'110px',
    wrap: true,
    format: data => data["2018 19"].toLocaleString('en-IN')
  },
  {
    name: "2019 20",
    selector: "2019 20",
    // grow: 0.05,
    // width:'110px',
    wrap: true,
    format: data => data["2019 20"].toLocaleString('en-IN')
  },
  {
    name: "2020 21",
    selector: "2020 21",
    // grow:0.05,
    wrap: true,
    format: data => data["2020 21"].toLocaleString('en-IN')
}
];

const customStyles = styles;

const Table30kan = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಕೋಷ್ಟಕ-2.30: ಘಟಕವಾರು ಸಾಲದ ಪ್ರವೃತ್ತಿಗಳು"
          columns={columns}
          data={ctx.tables2kan.Table30}
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

export default Table30kan;
