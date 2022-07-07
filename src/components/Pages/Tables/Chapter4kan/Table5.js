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
        name: "ಆರಂಭಿಕ ಶಿಲ್ಕು",
        selector: "ಆರಂಭಿಕ ಶಿಲ್ಕು",
        wrap: true,
        format: data => data["ಆರಂಭಿಕ ಶಿಲ್ಕು"].toLocaleString('en-IN')
    },
    {
        name: "ಸ್ವೀಕೃತಿಗಳು/ಠೇವಣಿಗಳು",
        selector: "ಸ್ವೀಕೃತಿಗಳು ಠೇವಣಿಗಳು",
        wrap: true,
        format: data => data["ಸ್ವೀಕೃತಿಗಳು ಠೇವಣಿಗಳು"].toLocaleString('en-IN')
    },
    {
        name: "ಹಿಂಪಡೆತಗಳು",
        selector: "ಹಿಂಪಡೆತಗಳು",
        wrap: true,
        format: data => data["ಹಿಂಪಡೆತಗಳು"].toLocaleString('en-IN')
    },
    {
        name: "ಆಂತಿಮ ಶಿಲ್ಕು",
        selector: "ಆಂತಿಮ ಶಿಲ್ಕು",
        wrap: true,
        format: data => data["ಆಂತಿಮ ಶಿಲ್ಕು"].toLocaleString('en-IN')
    }
];

const customStyles = styles;

const Table5kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ 4.5: ವೈಯಕ್ತಿಕ  ಠೇವಣಿ ಖಾತೆಗಳಲ್ಲಿ ಇರಿಸಲಾದ ನಿಧಿಗಳು"
                    columns={columns}
                    data={ctx.tables4kan.Table5}
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