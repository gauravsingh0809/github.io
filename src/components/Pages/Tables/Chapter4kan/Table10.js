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
        wrap: true,
    },
    {
        name: "ನಿಯಂತ್ರಣ ಅಧಿಕಾರಿಗಳ ಸಂಖ್ಯೆ",
        selector: "ನಿಯಂತ್ರಣ ಅಧಿಕಾರಿಗಳ ಸಂಖ್ಯೆ",
        wrap: true,
        format: data => data["ನಿಯಂತ್ರಣ ಅಧಿಕಾರಿಗಳ ಸಂಖ್ಯೆ"].toLocaleString('en-IN')
    },
    {
        name: "ಪೂರ್ಣವಾಗಿ ಲೆಕ್ಕ ಹೊಂದಾಣಿಕೆ ಮಾಡಿರುವುದು",
        selector: "ಪೂರ್ಣವಾಗಿ ಲೆಕ್ಕ ಹೊಂದಾಣಿಕೆ ಮಾಡಿರುವುದು",
        wrap: true,
        format: data => data["ಪೂರ್ಣವಾಗಿ ಲೆಕ್ಕ ಹೊಂದಾಣಿಕೆ ಮಾಡಿರುವುದು"].toLocaleString('en-IN')
    },
    {
        name: "ಭಾಗಶಃ ಲೆಕ್ಕ ಹೊಂದಾಣಿಕೆ ಮಾಡಿರುವುದು",
        selector: "ಭಾಗಶಃ ಲೆಕ್ಕ ಹೊಂದಾಣಿಕೆ ಮಾಡಿರುವುದು",
        wrap: true,
        format: data => data["ಭಾಗಶಃ ಲೆಕ್ಕ ಹೊಂದಾಣಿಕೆ ಮಾಡಿರುವುದು"].toLocaleString('en-IN')
    },
    {
        name: "ಲೆಕ್ಕ ಹೊಂದಾಣಿಕೆ ಮಾಡದೇ ಇರುವುದು",
        selector: "ಲೆಕ್ಕ ಹೊಂದಾಣಿಕೆ ಮಾಡದೇ ಇರುವುದು",
        wrap: true,
        format: data => data["ಲೆಕ್ಕ ಹೊಂದಾಣಿಕೆ ಮಾಡದೇ ಇರುವುದು"].toLocaleString('en-IN')
    },
    {
        name: "ವಹಿವಾಡು ನಡೆಸದ ನಿಯಂತ್ರಣ ಅಧಿಕಾರಿಗಳು",
        selector: "ವಹಿವಾಡು ನಡೆಸದ ನಿಯಂತ್ರಣ ಅಧಿಕಾರಿಗಳು",
        wrap: true,
    },
    {
        name: "ಒಟ್ಟು ಮೊತ್ತ",
        selector: "ಒಟ್ಟು ಮೊತ್ತ",
        wrap: true,
        format: data => data["ಒಟ್ಟು ಮೊತ್ತ"].toLocaleString('en-IN')
    },
    {
        name: "ಲೆಕ್ಕ ಹೊಂದಾಣಿಕೆಯಾದ ಮೊತ್ತ",
        selector: "ಲೆಕ್ಕ ಹೊಂದಾಣಿಕೆಯಾದ ಮೊತ್ತ",
        wrap: true,
        format: data => data["ಲೆಕ್ಕ ಹೊಂದಾಣಿಕೆಯಾದ ಮೊತ್ತ"].toLocaleString('en-IN')
    },
    {
        name: "ಶತಾಂಶ",
        selector: "ಶತಾಂಶ",
        wrap: true,
    }
];

const customStyles = styles;

const Table10kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ 4.10: ಸ್ವೀಕೃತಿಗಳು ಮತ್ತು ವೆಚ್ಚದ ಅಂಕಿಗಳ ಸಮನ್ವಯದ ಸ್ಥಿತಿ"
                    columns={columns}
                    data={ctx.tables4kan.Table10}
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

export default Table10kan;