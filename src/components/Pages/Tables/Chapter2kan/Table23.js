import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
  {
    name: "ಕಂಪನಿ/ಕಾರ್ಪೋರೇಶನ್",
    selector: "ಕಂಪನಿ/ಕಾರ್ಪೋರೇಶನ್",
    grow:3 ,
    wrap: true,
    // width:'35px',
  },
  {
    name: "2017-18ರ ಅಂತ್ಯದಲ್ಲಿದ್ದಂತೆ ಸಂಚಿತ ನಷ್ಟ",
    selector: "2017-18ರ ಅಂತ್ಯದಲ್ಲಿದ್ದಂತೆ ಸಂಚಿತ ನಷ್ಟ",
    // grow:0.05,
    wrap: true,
    
  },
  {
    name: "2018-19ರ ಅಂತ್ಯದಲ್ಲಿದ್ದಂತೆ ಸಂಚಿತ ನಷ್ಟ",
    selector: "2018-19ರ ಅಂತ್ಯದಲ್ಲಿದ್ದಂತೆ ಸಂಚಿತ ನಷ್ಟ",
    // grow:0.05,
    wrap: true,
    
  },
  {
    name: "2019-20ರ ಅಂತ್ಯದಲ್ಲಿದ್ದಂತೆ ಸಂಚಿತ ನಷ್ಟ",
    selector: "2019-20ರ ಅಂತ್ಯದಲ್ಲಿದ್ದಂತೆ ಸಂಚಿತ ನಷ್ಟ",
    // grow:0.05,
    wrap: true,
    
  },
  {
    name: "2020-21ರವರೆಗೆ ಮಾಡಿದ ಹೂಡಿಕೆಗಳು",
    selector: "2020-21ರವರೆಗೆ ಮಾಡಿದ ಹೂಡಿಕೆಗಳು",
    // grow:0.05,
    wrap: true,
    
  }
];

const conditionalRowStyles = [
  {
    when: row => row["CompanyCorporation"] === 'Total',
    style: {
      backgroundColor:  'rgba(153, 165, 128, 0.9)',
    }
  }
]

const customStyles = styles;

const Table23kan = () => {

  const ctx = useContext(MyContext)

  return (
    <div className="App" style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಕೋಷ್ಟಕ-2.22: ನಷ್ಟದಲ್ಲಿರುವ ಕಂಪನಿಗಳಲ್ಲಿ ಮಾಡಿರುವ ಹೂಡಿಕೆಗಳು"
          columns={columns}
          data={ctx.tables2kan.Table22}
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

export default Table23kan;
