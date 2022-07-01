import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
  {
    name: "ಪ್ರಧಾನ ಲೆಕ್ಕ ಶೀರ್ಷಿಕೆ",
    selector: "ಪ್ರಧಾನ ಲೆಕ್ಕ ಶೀರ್ಷಿಕೆ",
    grow: 3,
    wrap: true,
  },
  {
    name: "2019 20",
    selector: "2019 20",
    wrap: true,
    format: data => data["2019 20"].toLocaleString('en-IN')
  },
  {
    name: "2020 21",
    selector: "2020 21",
    wrap: true,
    format: data => data["2020 21"].toLocaleString('en-IN')
  },
  {
    name: "ಏರಿಕೆ (+)/ ಇಳಿಕೆ (-)",
    selector: "ಏರಿಕೆ (+)/ ಇಳಿಕೆ (-)",
    wrap: true,
    format: data => data["ಏರಿಕೆ (+)/ ಇಳಿಕೆ (-)"].toLocaleString('en-IN')
  },
 

];


const customStyles = styles;


const Table15kan = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಕೋಷ್ಟಕ-2.14: 2019-20ಕ್ಕೆ ಹೋಲಿಸಿದರೆ 2020-21ರಲ್ಲಿ ರಾಜಸ್ವ ವೆಚ್ಚದಲ್ಲಿನ ವ್ಯತ್ಯಾಸ"
          columns={columns}
          data={ctx.tables2kan.Table14}
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

export default Table15kan;
