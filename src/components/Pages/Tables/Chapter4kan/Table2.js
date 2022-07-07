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
        name: "ಪ್ರಾರಂಭಿಕ ಶಿಲ್ಕು",
        selector: "ಪ್ರಾರಂಭಿಕ ಶಿಲ್ಕು",
        wrap: true,
        format: data => data["ಪ್ರಾರಂಭಿಕ ಶಿಲ್ಕು"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "1",
        wrap: true,
        format: data => data["1"].toLocaleString('en-IN')
    },
    {
        name: "ಸೇರ್ಪಡೆ",
        selector: "ಸೇರ್ಪಡೆ",
        wrap: true,
        format: data => data["ಸೇರ್ಪಡೆ"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "__1",
        wrap: true,
        format: data => data["__1"].toLocaleString('en-IN')
    },
    {
        name: "ತೀರುವಳಿ",
        selector: "ತೀರುವಳಿ",
        wrap: true,
        format: data => data["ತೀರುವಳಿ"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "__2",
        wrap: true,
        format: data => data["__2"].toLocaleString('en-IN')
    },
    {
        name: "ಸಲ್ಲಿಕೆಗೆ ಬಾಕಿ",
        selector: "ಸಲ್ಲಿಕೆಗೆ ಬಾಕಿ",
        wrap: true,
        format: data => data["ಸಲ್ಲಿಕೆಗೆ ಬಾಕಿ"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "__4",
        wrap: true,
        format: data => data["__4"].toLocaleString('en-IN')
    }
];

const customStyles = styles;

const Table2kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-4.2: 2020-21ಕ್ಕೆ ಬಾಕಿ ಇರುವ ಬಳಕೆ ಪ್ರಮಾಣಪತ್ರಗಳು"
                    columns={columns}
                    data={ctx.tables4kan.Table2}
                    customStyles={customStyles}
                    striped
                    highlightOnHover
                    pointerOnHover
                />
            </Card>
        </div>
    );
}

export default Table2kan;