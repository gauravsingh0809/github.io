import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "ವರ್ಷದ ಕೊನೆಗೆ",
        selector: "ವರ್ಷದ ಕೊನೆಗೆ",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "ಅಪೂರ್ಣ ಯೋಜನೆಗಳ ಸಂಖ್ಯೆ",
        selector: "ಅಪೂರ್ಣ ಯೋಜನೆಗಳ ಸಂಖ್ಯೆ",
        // grow:0.05,
        wrap: true,
        
    },
    {
        name: "ಅಂದಾಜು ವೆಚ್ಚ",
        selector: "ಅಂದಾಜು ವೆಚ್ಚ",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
    },
    {
        name: "ವೆಚ್ಚ",
        selector: "ವೆಚ್ಚ",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        
    }
];

const conditionalRowStyles = [
  {
    when: row => row["ವರ್ಷದ ಕೊನೆಗೆ"] === 'ಒಟ್ಟು',
    style: {
      backgroundColor:  'rgba(153, 165, 128, 0.9)',
    }
  }
]

const customStyles = styles;

const Table26kan    = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-2.26: 31 ಮಾರ್ಚ್ 202೨ರಲ್ಲಿದ್ದಂತೆ ಒಂದು ಕೋಟಿಗಿಂತ ಹೆಚ್ಚಿನ ಅಪೂರ್ಣ ಯೋಜನೆಗಳ ವರ್ಷಾವಾರು ವಿವರ
                    (₹ಕೋಟಿಗಳಲ್ಲಿ)"
                    columns={columns}
                    data={ctx.tables2kan.Table26}
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

export default Table26kan  ;
