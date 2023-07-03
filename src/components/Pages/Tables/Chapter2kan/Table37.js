import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "ಅವಧಿ ಮುಕ್ತಾಯ ವರ್ಷ",
        selector: "ಅವಧಿ ಮುಕ್ತಾಯ ವರ್ಷ",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "",
        selector: "ಮೊತ್ತ",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        
    },
    {
        name: "ಮೊತ್ತ",
        selector: "1",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
       
    },
    {
        name: "",
        selector: "2",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        
    }
];

const customStyles = styles;
const conditionalRowStyles = [
    {
      when: row => row["ಅವಧಿ ಮುಕ್ತಾಯ ವರ್ಷ"] === 'ಒಟ್ಟು',
      style: {
        backgroundColor:  'rgba(153, 165, 128, 0.9)',
      }
    }
  ]

const Table37kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-2.3೬: ಸಾರ್ವಜನಿಕ ಋಣದ ಅವಧಿ ಪೂರ್ಣತೆಯ ಚಿತ್ರಣ"
                    columns={columns}
                    data={ctx.tables2kan.Table37}
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

export default Table37kan;