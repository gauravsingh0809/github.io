import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "ಶೀರ್ಷಿಕೆ",
        selector: "ಶೀರ್ಷಿಕೆ",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "ಆಯವ್ಯಯ",
        selector: "ಆಯವ್ಯಯ",
        // grow:0.05,
        wrap: true,
        format: data => data["ಆಯವ್ಯಯ"].toLocaleString('en-IN')
    },
    {
        name: "ವೆಚ್ಚ",
        selector: "ವೆಚ್ಚ",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["ವೆಚ್ಚ"].toLocaleString('en-IN')
    },
    {
        name: "ಬಳಕೆ ಶೇಕಡಾವಾರು",
        selector: "ಬಳಕೆ ಶೇಕಡಾವಾರು",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["ಬಳಕೆ ಶೇಕಡಾವಾರು"].toLocaleString('en-IN')
    }
];

const customStyles = styles;

const Table16kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-2.15: ಉದ್ದೇಶ ಶೀರ್ಷಿಕೆವಾರು ಆಯವ್ಯಯ ಅನುಮೋದನೆಗೆ ಪ್ರತಿಯಾಗಿ ವೆಚ್ಚ"
                    columns={columns}
                    data={ctx.tables2kan.Table15}
                    customStyles={customStyles}
                    striped
                    highlightOnHover
                    pointerOnHover
                />
            </Card>
        </div>
    );
}

export default Table16kan;
