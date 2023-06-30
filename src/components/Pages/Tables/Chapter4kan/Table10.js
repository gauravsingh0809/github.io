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
      
    },
    {
        name: "ಸಂಪೂರ್ಣವಾಗಿ ಲೆಕ್ಕ ಹೊಂದಾಣಿಕೆ ಮಾಡಿರುವುದು",
        selector: "ಸಂಪೂರ್ಣವಾಗಿ ಲೆಕ್ಕ ಹೊಂದಾಣಿಕೆ ಮಾಡಿರುವುದು",
        wrap: true,
       
    },
    {
        name: "ಭಾಗಶಃ ಲೆಕ್ಕ ಹೊಂದಾಣಿಕೆ ಮಾಡಿರುವುದು",
        selector: "ಭಾಗಶ: ಲೆಕ್ಕ ಹೊಂದಾಣಿಕೆ ಮಾಡಿರುವುದು",
        wrap: true,
        
    },
    {
        name: "ಲೆಕ್ಕ ಹೊಂದಾಣಿಕೆ ಮಾಡದೇ ಇರುವುದು",
        selector: "ಲೆಕ್ಕ ಹೊಂದಾಣಿಕೆ ಮಾಡದೇ ಇರುವುದು",
        wrap: true,
       
    },
    {
        name: "ವಹಿವಾಡು ನಡೆಸದ ನಿಯಂತ್ರಣ ಅಧಿಕಾರಿಗಳು",
        selector: "ವಹಿವಾಟು ನಡೆಸದ ನಿಯಂತ್ರಣ ಅಧಿಕಾರಿಗಳು",
        wrap: true,
    },
    {
        name: "ಒಟ್ಟು ಮೊತ್ತ",
        selector: "ಒಟ್ಟು ಮೊತ್ತ",
        wrap: true,
       
    },
    {
        name: "ಲೆಕ್ಕ ಹೊಂದಾಣಿಕೆಯಾದ ಮೊತ್ತ",
        selector: "ಲೆಕ್ಕ ಹೊಂದಾಣಿಕೆಯಾದ ಮೊತ್ತ",
        wrap: true,
        
    },
    {
        name: "ಶೇಕಡ",
        selector: "ಶೇಕಡ",
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
                    title="ಕೋಷ್ಟಕ-೪.೧೦: ಸ್ವೀಕೃತಿಗಳು ಮತ್ತು ವೆಚ್ಚದ ಅಂಕಿಗಳ ಸಮನ್ವಯದ ಸ್ಥಿತಿ"
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