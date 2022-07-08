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
        wrap: true,
        grow:0.2
    },
    {
        name: "ಲೆಕ್ಕಪತ್ರ ಮಾನದಂಡ",
        selector: "ಲೆಕ್ಕಪತ್ರ ಮಾನದಂಡ",
        wrap: true,
    },
    {
        name: "ಐಜಿಎಎಸ್‌ನ ಸಾರ",
        selector: "ಐಜಿಎಎಸ್‌ನ ಸಾರ",
        wrap: true,
    },
    {
        name: "ಪ್ರಸ್ತುತ ಸ್ಥಿತಿ",
        selector: "ಪ್ರಸ್ತುತ ಸ್ಥಿತಿ",
        wrap: true,
        grow:0.2
    },
    {
        name: "ಕೊರತೆಯ ಪ್ರಭಾವ",
        selector: "ಕೊರತೆಯ ಪ್ರಭಾವ",
        wrap: true,
    }
];

const customStyles = styles;

const Table11kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ 4.11: ಲೆಕ್ಕಪತ್ರ ನಿರ್ವಹಣಾ ಮಾನದಂಡಗಳ ಅನುಸರಣೆ"
                    columns={columns}
                    data={ctx.tables4kan.Table11}
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

export default Table11kan;