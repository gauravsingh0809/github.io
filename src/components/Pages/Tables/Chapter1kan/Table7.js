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
        width: '70px',
    },
    
    {
        name: "ವಹಿವಾಟಿನ ಸ್ವರೂಪ",
        selector: "ವಹಿವಾಟಿನ ಸ್ವರೂಪ",
        wrap: true,
        grow: 2,
    },
    {
        name: "ರಾಜಸ್ವ ಕೊರತೆ",
        selector: "ರಾಜಸ್ವ ಕೊರತೆ",
        wrap: true,
        
    },
    {
        name: "ರಾಜಸ್ವ ಹೆಚ್ಚಳ",
        selector: "2",
        wrap: true,
       
    },
    {
        name: "ವಿತ್ತೀಯ ಕೊರತೆ",
        selector: "ವಿತ್ತೀಯ ಕೊರತೆ",
        wrap: true,
       
    },
    {
        name: "ವಿತ್ತೀಯ ಕೊರತೆ",
        selector: "__1",
        wrap: true,
        
    },
];

const conditionalRowStyles = [
    {
        when: row => row["ಕ್ರಮ ಸಂಖ್ಯೆ"] === 'ಒಟ್ಟು',
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
                    title="ಕೋಷ್ಟಕ-1.7: ೨೦೨೧-೨೨ರ ಅವಧಿಯಲ್ಲಿ ಕೆಲವು ಪ್ರಮುಖ ವಹಿವಾಟುಗಳ ಪರಿಣಾಮ"
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