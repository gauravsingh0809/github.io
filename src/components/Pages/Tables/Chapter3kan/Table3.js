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
        wrap: true
    },
    {
        name: "ವರ್ಗೀಕರಣ",
        selector: "ವರ್ಗೀಕರಣ",
        wrap: true
    },
    {
        name: "2020-21ರಲ್ಲಿ ಹಂಚಿಕೆ",
        selector: "2020-21ರಲ್ಲಿ ಹಂಚಿಕೆ",
        wrap: true,
        format: data => data["2020-21ರಲ್ಲಿ ಹಂಚಿಕೆ"].toLocaleString('en-IN')
    },
    {
        name: "ವೆಚ್ಚ",
        selector: "ವೆಚ್ಚ",
        wrap: true,
        format: data => data["ವೆಚ್ಚ"].toLocaleString('en-IN')
    },
    {
        name: "ಉಳಿತಾಯ (ಶೇಕಡ)",
        selector: "ಉಳಿತಾಯ (ಶೇಕಡ)",
        wrap: true,
        format: data => data["ಉಳಿತಾಯ (ಶೇಕಡ)"].toLocaleString('en-IN')
    }
];

const customStyles = styles;

const Table3kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ 3.3: ಮಕ್ಕಳ ಕೇಂದ್ರಿತ ಕಾರ್ಯಕ್ರಮ/ಯೋಜನೆಗಳ ಅಡಿಯಲ್ಲಿ ಹಂಚಿಕೆಯ ವಿವರಗಳು"
                    columns={columns}
                    data={ctx.tables3kan.Table3}    
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

export default Table3kan;