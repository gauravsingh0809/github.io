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
    name: "ಕಿರು ಲೆಕ್ಕಶೀರ್ಷಿಕೆ",
    selector: "ಕಿರು ಲೆಕ್ಕಶೀರ್ಷಿಕೆ",
    // grow: ,
    wrap: true,
    // width:'35px',
  },
  {
    name: "202೧ 2೨ರಲ್ಲಿ ವೆಚ್ಚ",
    selector: "202೧-2೨ರಲ್ಲಿ ವೆಚ್ಚ",
    // grow: 0.05,
    // width:'110px',
    wrap: true,
    
  }
];

const customStyles = styles;

const Table30kan = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಕೋಷ್ಟಕ-2.೩೦: ರಾಜ್ಯ ವಿಪತ್ತು ಪರಿಹಾರ ನಿಧಿ/ರಾಜ್ಯ ವಿಪತ್ತು ಉಪಶಮನ ನಿಧಿಗಳಡಿಯ ವೆಚ್ಚಗಳು/ಸ್ವೀಕೃತಿಗಳ ವಿವರಗಳು"
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
