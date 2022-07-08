import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "ಇಲಾಖೆಯ ಹೆಸರು",
        selector: "ಇಲಾಖೆಯ ಹೆಸರು",
        wrap: true,
    },
    {
        name: "ಸರ್ಕಾರದ ಸವತ್ತುಗಳ ದುರ್ಬಳಕೆ, ನಷ್ಟ, ಕಳ್ಳತನ ಇತ್ಯಾದಿ",
        selector: "ಸರ್ಕಾರದ ಸವತ್ತುಗಳ ದುರ್ಬಳಕೆ, ನಷ್ಟ, ಕಳ್ಳತನ ಇತ್ಯಾದಿ",
        wrap: true,
    },
    {
        name: " ",
        selector: "1",
        wrap: true,
        grow:0.1
    },
    {
        name: "ಬಾಕಿ ಇರುವ ದುರ್ಬಳಕೆ, ನಷ್ಟ, ಕಳ್ಳತನ ಇತ್ಯಾದಿಗಳ ಅಂತಿಮ ವಿಲೇವಾರಿಯಲ್ಲಿನ ವಿಳಂಬಕ್ಕೆ ಕಾರಣಗಳು",
        selector: "ಬಾಕಿ ಇರುವ ದುರ್ಬಳಕೆ, ನಷ್ಟ, ಕಳ್ಳತನ ಇತ್ಯಾದಿಗಳ ಅಂತಿಮ ವಿಲೇವಾರಿಯಲ್ಲಿನ ವಿಳಂಬಕ್ಕೆ ಕಾರಣಗಳು",
        wrap: true,
    },
    {
        name: " ",
        selector: "__1",
        wrap: true,
        grow:0.1
    }, 
    {
        name: " ",
        selector: "__2",
        wrap: true,
        grow:0.1
    },
    {
        name: " ",
        selector: "__3",
        wrap: true,
        grow:0.1
    },
    {
        name: " ",
        selector: "__4",
        wrap: true,
    },
    {
        name: " ",
        selector: "__5",
        wrap: true,
        grow:0.1
    },
];

const customStyles = styles;

const Table12kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ 4.12: ದುರುಪಯೋಗ, ನಷ್ಟ ಮತ್ತು ಕಳ್ಳತನ ಇತ್ಯಾದಿಗಳ ಬಾಕಿ ಉಳಿದಿರುವ ಪ್ರಕರಣಗಳು"
                    columns={columns}
                    data={ctx.tables4kan.Table12}
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

export default Table12kan;