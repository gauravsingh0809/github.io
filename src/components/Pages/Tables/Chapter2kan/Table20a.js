import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "ವಿವರಗಳು",
        selector: "0",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "ಮೊದಲನೆ ಹಣಕಾಸು ಆಯೋಗ",
        selector: "1",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["1"].toLocaleString('en-IN')
    },
    {
        name: "ಎರಡನೇ ಹಣಕಾಸು ಆಯೋಗ",
        selector: "2",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["2"].toLocaleString('en-IN')
    },
    {
        name: "ಮೂರನೆ ಹಣಕಾಸು ಆಯೋಗ",
        selector: "3",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["3"].toLocaleString('en-IN')
    },
    {
        name: "ನಾಲ್ಕನೇ ಹಣಕಾಸು ಆಯೋಗ",
        selector: "4",
        // grow:0.05,
        wrap: true,
        format: data => data["4"].toLocaleString('en-IN')
    }
];


const customStyles = styles;


const Table20akan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-೨.೨೦(ಎ): ರಾಜ್ಯದಲ್ಲಿ ರಚಿತವಾದ ವಿವಿಧ ಹಣಕಾಸು ಆಯೋಗಗಳ ವಿವರಗಳು"
                    columns={columns}
                    data={ctx.tables2kan.Table20a}
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

export default Table20akan;
