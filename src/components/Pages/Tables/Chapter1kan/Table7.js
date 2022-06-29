import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "ಕ್ರಮ ಸಂಖ್ಯ",
        selector: "ಕ್ರಮ ಸಂಖ್ಯೆ",
        wrap: true,
        width: '70px',
    },
    {
        name: "ವಹಿವಾಟಿನ ಸ್ವರೂಪ",
        selector: "ವಹಿವಾಟಿನ ಸ್ವರೂಪ",
        wrap: true,
        grow: 2,
    },
    {
        name: "ರಾಜಸ್ವ ಹೆಚ್ಚಳ",
        selector: "ರಾಜಸ್ವ ಹೆಚ್ಚಳ-",
        wrap: true,
        format: data => data["ರಾಜಸ್ವ ಹೆಚ್ಚಳ-"].toLocaleString('en-IN')
    },
    {
        name: "ರಾಜಸ್ವ ಹೆಚ್ಚಳ",
        selector: "ರಾಜಸ್ವ ಹೆಚ್ಚಳ",
        wrap: true,
        format: data => data["ರಾಜಸ್ವ ಹೆಚ್ಚಳ"].toLocaleString('en-IN')
    },
    {
        name: "ವಿತ್ತೀಯ ಕೊರತೆ-",
        selector: "ವಿತ್ತೀಯ ಕೊರತೆ-",
        wrap: true,
        format: data => data["ವಿತ್ತೀಯ ಕೊರತೆ-"].toLocaleString('en-IN')
    },
    {
        name: "ವಿತ್ತೀಯ ಕೊರತೆ",
        selector: "ವಿತ್ತೀಯ ಕೊರತೆ",
        wrap: true,
        format: data => data["ವಿತ್ತೀಯ ಕೊರತೆ"].toLocaleString('en-IN')
    },
];

const conditionalRowStyles = [
    {
        when: row => row["Sl No"] === 'Total',
        style: {
            backgroundColor: 'rgba(53, 165, 128, 0.5)',
        },
    },
    {
        when: row => row["Revenue Surplus"] === 'Over statement',
        style: {
            backgroundColor: 'rgba(153, 165, 128, 0.9)',
        },
    }
]

const customStyles = styles;

const Table7kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ 1.7: 2020-21ರಲ್ಲಿ ಕೆಲವು ಪ್ರಮುಖ ವಹಿವಾಟುಗಳ ಪರಿಣಾಮ"
                    columns={columns}
                    data={ctx.tables1kan.Table7}
                    customStyles={customStyles}
                    conditionalRowStyles={conditionalRowStyles}
                    striped
                    highlightOnHover
                    pointerOnHover
                />
            </Card>
        </div>
    );
}

export default Table7kan;