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
        // grow:0.05,
        wrap: true,
        format: data => data["ಕಿರು ಲೆಕ್ಕಶೀರ್ಷಿಕೆ"].toLocaleString('en-IN')
    },
    {
        name: "202021ರಲ್ಲಿ ವೆಚ್ಚ",
        selector: "202021ರಲ್ಲಿ ವೆಚ್ಚ",
        // grow:0.05,
        wrap: true,
        format: data => data["202021ರಲ್ಲಿ ವೆಚ್ಚ"].toLocaleString('en-IN')
    }
];

const customStyles = styles;

const Table29kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-2.29: ರಾಜ್ಯ ವಿಪತ್ತು ಪರಿಹಾರ ನಿಧಿ/ರಾಜ್ಯ ವಿಪತ್ತು ಉಪಶಮನ ನಿಧಿಗಳಡಿಯ ವಿವರಗಳು"
                    columns={columns}
                    data={ctx.tables2kan.Table29}
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

export default Table29kan;
