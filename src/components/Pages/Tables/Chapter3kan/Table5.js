import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "ವೆಚ್ಚದ ಸ್ವರೂಪ",
        selector: "ವೆಚ್ಚದ ಸ್ವರೂಪ",
        grow: 2,
        wrap: true
    },
    {
        name: "ವೆಚ್ಚದ ಸ್ವರೂಪ",
        selector: "1",
        wrap: true,
    },
    {
        name: "ಮೂಲ ಅನುದಾನ/ ವಿನಿಯೋಗ",
        selector: "ಮೂಲ ಅನುದಾನ/ ವಿನಿಯೋಗ",
        // grow:0.05,
        wrap: true,
        
    },
    {
        name: "ಪೂರಕ ಅನುದಾನ/ ವಿನಿಯೋಗ",
        selector: "ಪೂರಕ ಅನುದಾನ/ ವಿನಿಯೋಗ",
        // grow:0.05,
        wrap: true,
        format: data => data["ಪೂರಕ ಅನುದಾನ/ ವಿನಿಯೋಗ"].toLocaleString('en-IN')
    },
    {
        name: "ಒಟ್ಟು",
        selector: "ಒಟ್ಟು",
        // grow:0.05,
        wrap: true,
        format: data => data["ಒಟ್ಟು"].toLocaleString('en-IN')
    },
    {
        name: "ವಾಸ್ತವ ವೆಚ್ಚ",
        selector: "ವಾಸ್ತವ ವೆಚ್ಚ",
        // grow:0.05,
        wrap: true,
        format: data => data["ವಾಸ್ತವ ವೆಚ್ಚ"].toLocaleString('en-IN')
    },
    {
        name: "ಬಳಕೆ ಮಾಡದ ಅವಕಾಶ (-) / ಅವಕಾಶಕ್ಕಿಂತ ಅಧಿಕ (+)",
        selector: "ಬಳಕೆ ಮಾಡದ ಅವಕಾಶ (-) / ಅವಕಾಶಕ್ಕಿಂತ ಅಧಿಕ (+)",
        // grow:0.05,
        wrap: true,
        format: data => data["ಬಳಕೆ ಮಾಡದ ಅವಕಾಶ (-) / ಅವಕಾಶಕ್ಕಿಂತ ಅಧಿಕ (+)"].toLocaleString('en-IN')
    },
    {
        name: "ಅಧ್ಯರ್ಪಿಸಿದ ಮೊತ್ತತ",
        selector: "ಅಧ್ಯರ್ಪಿಸಿದ ಮೊತ್ತತ",
        // grow:0.05,
        wrap: true,
        
    },
    {
        name: "31 ಮಾರ್ಚ್‌ ರಂದು ಅಧ್ಯರ್ಪಿಸಿದ ಮೊತ್ತ",
        selector: "31 ಮಾರ್ಚ್‌ ರಂದು ಅಧ್ಯರ್ಪಿಸಿದ ಮೊತ್ತ",
        // grow:0.05,
        wrap: true,
        format: data => data["31 ಮಾರ್ಚ್‌ ರಂದು ಅಧ್ಯರ್ಪಿಸಿದ ಮೊತ್ತ"].toLocaleString('en-IN')
    },
    {
        name: "31 ಮಾರ್ಚ್‌ ರಂದು ಅಧ್ಯರ್ಪಿಸಿದ ಉಳಿತಾಯದ ಶೇಕಡವಾರು",
        selector: "31 ಮಾರ್ಚ್‌ ರಂದು ಅಧ್ಯರ್ಪಿಸಿದ ಉಳಿತಾಯದ ಶೇಕಡವಾರು",
        // grow:0.05,
        wrap: true,
        format: data => data["31 ಮಾರ್ಚ್‌ ರಂದು ಅಧ್ಯರ್ಪಿಸಿದ ಉಳಿತಾಯದ ಶೇಕಡವಾರು"].toLocaleString('en-IN')
    }
];

const customStyles = styles;

const Table5kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ 3.5: ಮೂಲ/ಪೂರಕ ಅವಕಾಶಗಳಿಗೆ ಪ್ರತಿಯಾಗಿ ವಾಸ್ತವಿಕ ವೆಚ್ಚದ ಸಾರಾಂಶ"
                    columns={columns}
                    data={ctx.tables3kan.Table5}
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

export default Table5kan;