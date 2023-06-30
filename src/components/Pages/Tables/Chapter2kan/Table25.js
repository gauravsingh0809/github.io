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
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "ಒಟ್ಟು ಸಾಲಗಳ ಸಂಖ್ಯೆ",
        selector: "ಒಟ್ಟು ಸಾಲಗಳ ಸಂಖ್ಯೆ",
        // grow:0.05,
        wrap: true,
        format: data => data["ಒಟ್ಟು ಸಾಲಗಳ ಸಂಖ್ಯೆ"].toLocaleString('en-IN')
    },
    {
        name: "ಒಟ್ಟು ಮೊತ್ತ",
        selector: "ಒಟ್ಟು ಮೊತ್ತ",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["ಒಟ್ಟು ಮೊತ್ತ"].toLocaleString('en-IN')
    },
    {
        name: "ವರ್ಷದ ಕೊನೆಯಲ್ಲಿ ಬಾಕಿ ಇದ್ದ ಷರತ್ತುಗಳು ಮತ್ತು ನಿಬಂಧನೆಗಳು",
        selector: "ವರ್ಷದ ಕೊನೆಯಲ್ಲಿ ಬಾಕಿ ಇದ್ದ ಷರತ್ತುಗಳು ಮತ್ತು ನಿಬಂಧನೆಗಳು",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["ವರ್ಷದ ಕೊನೆಯಲ್ಲಿ ಬಾಕಿ ಇದ್ದ ಷರತ್ತುಗಳು ಮತ್ತು ನಿಬಂಧನೆಗಳು"].toLocaleString('en-IN')
    },
    {
      name: "ವರ್ಷದ ಕೊನೆಯಲ್ಲಿ ಬಾಕಿ ಇದ್ದ ಷರತ್ತುಗಳು ಮತ್ತು ನಿಬಂಧನೆಗಳು",
      selector: "1",
      // grow: 0.05,
      // width:'110px',
      wrap: true,
      format: data => data["1"].toLocaleString('en-IN')
  },
  {
    name: "ಮಾರ್ಚ್‌೨೦೨೨ರಲ್ಲಿ ಬಾಕಿ ಇದ್ದ ಷರತ್ತುಗಳು ಮತ್ತು ನಿಬಂಧನೆಗಳು",
    selector: "ಮಾರ್ಚ್‌೨೦೨೨ರಲ್ಲಿ ಬಾಕಿ ಇದ್ದ ಷರತ್ತುಗಳು ಮತ್ತು ನಿಬಂಧನೆಗಳು",
    // grow: 0.05,
    // width:'110px',
    wrap: true,
    format: data => data["ಮಾರ್ಚ್‌೨೦೨೨ರಲ್ಲಿ ಬಾಕಿ ಇದ್ದ ಷರತ್ತುಗಳು ಮತ್ತು ನಿಬಂಧನೆಗಳು"].toLocaleString('en-IN')
},
{
  name: "ಮಾರ್ಚ್‌೨೦೨೨ರಲ್ಲಿ ಬಾಕಿ ಇದ್ದ ಷರತ್ತುಗಳು ಮತ್ತು ನಿಬಂಧನೆಗಳು",
  selector: "2",
  // grow: 0.05,
  // width:'110px',
  wrap: true,
  format: data => data["2"].toLocaleString('en-IN')
}
];

const conditionalRowStyles = [
  {
    when: row => row["To the end of the Year"] === 'Total',
    style: {
      backgroundColor:  'rgba(153, 165, 128, 0.9)',
    }
  }
]

const customStyles = styles;

const Table25kan    = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-೨.೨೫: ೨೦೧೯-೨೦ರಿಂದ ೨೦೨೧-೨೨ರವರೆಗೂ ರಾಜ್ಯ ಸರ್ಕಾರವು ನೀಡಿದ ಸಾಲಗಳ ವಿವರಗಳು"
                    columns={columns}
                    data={ctx.tables2kan.Table25}
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

export default Table25kan ;
