import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
  {
    name: "ವರ್ಷ",
    selector: "ವರ್ಷ",
    wrap: true,
    width:"80px"
  },
  {
    name: "ಅನುದಾನದ ಸ್ವರೂಪ",
    selector: "ಅನುದಾನದ ಸ್ವರೂಪ",
    wrap: true,
    format: data => data["ಅನುದಾನದ ಸ್ವರೂಪ"].toLocaleString('en-IN')
  },
  {
    name: "ಪಂಚಾಯತ್‌ರಾಜ್‌ ಸಂಸ್ಥೆಗಳು",
    selector: "ಪಂಚಾಯತ್‌ರಾಜ್‌ ಸಂಸ್ಥೆಗಳು",
    wrap: true,
    width:"120px",
    format: data => data["ಪಂಚಾಯತ್‌ರಾಜ್‌ ಸಂಸ್ಥೆಗಳು"].toLocaleString('en-IN')
  },
  {
    name: "ಪಂಚಾಯತ್‌ರಾಜ್‌ ಸಂಸ್ಥೆಗಳು",
    selector: "__6",
    wrap: true,
    width:"80px",
    format: data => data["__6"]
  },
  {
    name: "ಪಂಚಾಯತ್‌ರಾಜ್‌ ಸಂಸ್ಥೆಗಳು",
    selector: "__1",
    wrap: true,
    width:"80px",
    format: data => data["__1"].toLocaleString('en-IN')
  },
  {
    name: "ನಗರ ಸ್ಥಳೀಯ ಸಂಸ್ಥೆಗಳು",
    selector: "ನಗರ ಸ್ಥಳೀಯ ಸಂಸ್ಥೆಗಳು",
    wrap: true,
    width:"90px",
    format: data => data["ನಗರ ಸ್ಥಳೀಯ ಸಂಸ್ಥೆಗಳು"].toLocaleString('en-IN')
  },
  {
    name: "ನಗರ ಸ್ಥಳೀಯ ಸಂಸ್ಥೆಗಳು",
    selector: "__2",
    wrap: true,
    width:"120px",
    format: data => data["__2"].toLocaleString('en-IN')
  },
  {
    name: "ನಗರ ಸ್ಥಳೀಯ ಸಂಸ್ಥೆಗಳು",
    selector: "__3",
    wrap: true,
    width:"80px",
    format: data => data["__3"].toLocaleString('en-IN')
  },
  {
    name: "ಎಸ್‌ಡಿಆರ್‌ಎಮ್‌ಎಫ್‌",
    selector: "ಎಸ್‌ಡಿಆರ್‌ಎಮ್‌ಎಫ್‌",
    wrap: true,
    width:"90px",
    format: data => data["ಎಸ್‌ಡಿಆರ್‌ಎಮ್‌ಎಫ್‌"].toLocaleString('en-IN')
  },
 
  {
    name: "ಎಸ್‌ಡಿಆರ್‌ಎಮ್‌ಎಫ್",
    selector: "__4",
    wrap: true,
    width:"80px",
    format: data => data["__4"].toLocaleString('en-IN')
  },
  {
    name: "ಎಸ್‌ಡಿಆರ್‌ಎಮ್‌ಎಫ್",
    selector: "__5",
    wrap: true,
    // width:"80px",
    format: data => data["__5"].toLocaleString('en-IN')
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



const Table10kan = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಕೋಷ್ಟಕ-2.9: 2020-21ರಲ್ಲಿ ಶಿಫಾರಸು ಮಾಡಿದ ಅನುದಾನ ಮತ್ತು ವಾಸ್ತವ ಬಿಡುಗಡೆ"
          columns={columns}
          data={ctx.tables2kan.Table9}
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

export default Table10kan;
