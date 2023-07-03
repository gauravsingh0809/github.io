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
    name: "20೨೦ 2೧",
    selector: "20೨೦ 2೧",
    wrap: true,
    format: data => data["20೨೦ 2೧"].toLocaleString('en-IN')
  },
  {
    name: "202೧ 2೨",
    selector: "202೧ 2೨",
    wrap: true,
    format: data => data["202೧ 2೨"].toLocaleString('en-IN')
  },
  {
    name: "ಏರಿಕೆ (+)/ ಇಳಿಕೆ (-)",
    selector: "ಏರಿಕೆ (+)/ ಇಳಿಕೆ (-)",
    wrap: true,
    format: data => data["ಏರಿಕೆ (+)/ ಇಳಿಕೆ (-)"].toLocaleString('en-IN')
  },
  {
    name: "ಶೇಕಡಾವಾರು",
    selector: "ಶೇಕಡಾವಾರು",
    wrap: true,
    format: data => data["ಶೇಕಡಾವಾರು"].toLocaleString('en-IN')
  }
 

];


const customStyles = styles;


const Table15kan = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಕೋಷ್ಟಕ-2.1೫: 20೨೦-2೧ಕ್ಕೆ ಹೋಲಿಸಿದರೆ 202೧-2೨ರಲ್ಲಿ ರಾಜಸ್ವ ವೆಚ್ಚದಲ್ಲಿನ ವ್ಯತ್ಯಾಸ"
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
