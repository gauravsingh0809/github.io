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
    name: "ಗಳಿಸಿದ ಬಡ್ಡಿ",
    selector: "ಗಳಿಸಿದ ಬಡ್ಡಿ",
    wrap: true,
  
  },
  {
    name: "ಗಳಿಸಿದ ಬಡ್ಡಿ",
    selector: "3",
    wrap: true,
   
  },
  {
    name: "ಗಳಿಸಿದ ಬಡ್ಡಿ",
    selector: "__1",
    wrap: true,

  },
  {
    name: "ಗಳಿಸಿದ ಬಡ್ಡಿ",
    selector: "__2",
    wrap: true,

  },
  {
    name: "ಬಡ್ಡಿ ಹಣದ ವ್ಯವಹಾರ",
    selector: "ಬಡ್ಡಿ ಹಣದ ವ್ಯವಹಾರ",
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
          title="ಕೋಷ್ಟಕ-೪.೧: ಗಳಿಸಿದ ಬಡ್ಡಿ ಮತ್ತು ಅದರ ವ್ಯವಹಾರದ ವಿವರಗಳು."
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