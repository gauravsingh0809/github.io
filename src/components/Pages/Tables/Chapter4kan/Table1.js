import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
  {
    name: "ಸಂಸ್ಥೆಯ ಹೆಸರು",
    selector: "ಸಂಸ್ಥೆಯ ಹೆಸರು",
    wrap: true,
    grow: 2
  },
  {
    name: "ಬಡ್ಡಿ ಗಳಿಕೆ",
    selector: "1ಬಡ್ಡಿ ಗಳಿಕೆ",
    wrap: true,
    format: data => data["ಬಡ್ಡಿ ಗಳಿಕೆ"].toLocaleString('en-IN')
  },
  {
    name: "ಬಡ್ಡಿ ಗಳಿಕೆ",
    selector: "1",
    wrap: true,
   
  },
  {
    name: "ಬಡ್ಡಿ ಗಳಿಕೆ",
    selector: "2",
    wrap: true,
    format: data => data["2"].toLocaleString('en-IN')
  },
  {
    name: "ಬಡ್ಡಿ ಗಳಿಕೆ",
    selector: "3",
    wrap: true,
    format: data => data["3"].toLocaleString('en-IN')
  },
  {
    name: "ಬಡ್ಡಿ ಹಣದ ವ್ಯವಹೃತಿ",
    selector: "ಬಡ್ಡಿ ಹಣದ ವ್ಯವಹೃತಿ",
    grow: 3,
    wrap: true
  }
];

const customStyles = styles;

const Table1kan = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಕೋಷ್ಟಕ-4.1: ಸಂಸ್ಥೆಯು ಗಳಿಸಿದ ಬಡ್ಡಿ ಮತ್ತು ಅದರ ವ್ಯವಹೃತಿಯ  ವಿವರಗಳು"
          columns={columns}
          data={ctx.tables4kan.Table1}
          customStyles={customStyles}
          striped
          highlightOnHover
          pointerOnHover
        />
      </Card>
    </div>
  );
}

export default Table1kan;