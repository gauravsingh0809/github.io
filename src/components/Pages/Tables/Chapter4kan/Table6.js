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
        grow:0.1
    },
    {
        name: "ಆಡಳಿತಾಧಿಕಾರಿ",
        selector: "ಆಡಳಿತಾಧಿಕಾರಿ",
        wrap: true,
    },
    {
        name: "ಮೊತ್ತ",
        selector: "ಮೊತ್ತ",
        wrap: true,
        grow:0.2,
        format: data => data["ಮೊತ್ತ"].toLocaleString('en-IN')
    }
];

const customStyles = styles;

const Table6kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-4.6: ವೈಯಕ್ತಿಕ ಠೇವಣಿ ಖಾತೆಗಳಲ್ಲಿನ ಅಂತಿಮ ಶಿಲ್ಕು"
                    columns={columns}
                    data={ctx.tables4kan.Table6}
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

export default Table6kan;