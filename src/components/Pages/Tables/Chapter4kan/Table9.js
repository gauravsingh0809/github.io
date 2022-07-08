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
        name: "ಲೆಕ್ಕ ಶೀರ್ಷಿಕೆ",
        selector: "ಲೆಕ್ಕ ಶೀರ್ಷಿಕೆ",
        wrap: true,
        grow:0.4
    },
    {
        name: "ವಿವರ",
        selector: "ವಿವರ",
        wrap: true,
        grow:0.6
    },
    {
        name: "ಮೊತ್ತ",
        selector: "ಮೊತ್ತ",
        wrap: true,
        grow:0.4,
        format: data => data["ಮೊತ್ತ"].toLocaleString('en-IN')
    },
    {
        name: "ಕಾರಣ",
        selector: "ಕಾರಣ",
        wrap: true,
    }
];

const customStyles = styles;

const Table9kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ 4.9: ಋಣ ಠೇವಣಿ ಇರಸಾಲು ಶೀರ್ಷಿಕೆಗಳ ಅಡಿಯಲ್ಲಿ ವ್ಯತಿರಿಕ್ತ ಶಿಲ್ಕುಗಳು"
                    columns={columns}
                    data={ctx.tables4kan.Table9}
                    customStyles={customStyles}
                    striped
                    highlightOnHover
                    pointerOnHover
                    // pagination
                />
            </Card>
        </div>
    );
}

export default Table9kan;