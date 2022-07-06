import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "ಕ್ರಮ ಸಂಖ್ಯೆ",
        selector: "ಕ್ರಮ ಸಂಖ್ಯೆ",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "ಇವುಗಳ ಸಂಬಂಧವಾಗಿ ಬಾಕಿ ಇರುವವು",
        selector: "ಇವುಗಳ ಸಂಬಂಧವಾಗಿ ಬಾಕಿ ಇರುವವು",
        // grow:0.05,
        wrap: true,
        format: data => data["ಇವುಗಳ ಸಂಬಂಧವಾಗಿ ಬಾಕಿ ಇರುವವು"].toLocaleString('en-IN')
    },
    {
        name: "ಮೊತ್ತ",
        selector: "ಮೊತ್ತ",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["ಮೊತ್ತ"].toLocaleString('en-IN')
    },
    {
        name: "ಮೊತ್",
        selector: "4",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["4"].toLocaleString('en-IN')
    },
    {
      name: "ವ್ಯತ್ಯಾಸ",
      selector: "ವ್ಯತ್ಯಾಸ",
      // grow: 0.05,
      // width:'110px',
      wrap: true,
      format: data => data["ವ್ಯತ್ಯಾಸ"].toLocaleString('en-IN')
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
                    title="ಕೋಷ್ಟಕ-2.24: ಹಣಕಾಸು ಲೆಕ್ಕಗಳ ಪ್ರಕಾರ ಇರುವ ಇಕ್ವಿಟಿ, ಸಾಲಗಳು ಮತ್ತು ಖಾತರಿಗಳು"
                    columns={columns}
                    data={ctx.tables2kan.Table24}
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
