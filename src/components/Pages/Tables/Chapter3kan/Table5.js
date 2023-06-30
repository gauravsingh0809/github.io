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
       
    },
    {
        name: "ಒಟ್ಟು",
        selector: "ಒಟ್ಟು",
        // grow:0.05,
        wrap: true,
       
    },
    {
        name: "ವಾಸ್ತವಿಕ ವೆಚ್ಚ",
        selector: "ವಾಸ್ತವಿಕ ವೆಚ್ಚ",
        // grow:0.05,
        wrap: true,
      
    },
    {
        name: "ಬಳಕೆ ಮಾಡದ ಅವಕಾಶ (-) / ಅವಕಾಶಕ್ಕಿಂತ ಅಧಿಕ (+)",
        selector: "ಬಳಕೆ ಮಾಡದ ಅವಕಾಶ (-) / ಅವಕಾಶಕ್ಕಿಂತ ಅಧಿಕ (+)",
        // grow:0.05,
        wrap: true,
      
    },
    {
        name: "ಅಧ್ಯರ್ಪಿಸಿದ ಮೊತ್ತ",
        selector: "ಅಧ್ಯರ್ಪಿಸಿದ ಮೊತ್ತ",
        // grow:0.05,
        wrap: true,
        
    },
    {
        name: "೩೧ ಮಾರ್ಚ್‌ ರಂದು ಅಧ್ಯರ್ಪಿಸಿದ ಮೊತ್ತ",
        selector: "೩೧ ಮಾರ್ಚ್‌ ರಂದು ಅಧ್ಯರ್ಪಿಸಿದ ಮೊತ್ತ",
        // grow:0.05,
        wrap: true,
       
    },
    {
        name: "ಮಾರ್ಚ್‌ ೩೧ರಂದು ಅಧ್ಯರ್ಪಿಸಿದ ಉಳಿತಾಯದ ಶೇಕಡಾವಾರು",
        selector: "ಮಾರ್ಚ್‌ ೩೧ರಂದು ಅಧ್ಯರ್ಪಿಸಿದ ಉಳಿತಾಯದ ಶೇಕಡಾವಾರು",
        // grow:0.05,
        wrap: true,
        
    }
];

const customStyles = styles;

const Table5kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-೩.೩: ೨೦೨೧-೨೨ರಲ್ಲಿ ಮೂಲ/ಪೂರಕ ಅವಕಾಶಗಳಿಗೆ ಪ್ರತಿಯಾಗಿ ವಾಸ್ತವಿಕ ವೆಚ್ಚದ ಸಾರಾಂಶ"
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