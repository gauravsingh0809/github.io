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
        grow:2 ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "ರಾಜ್ಯದ ಒಟ್ಟು ಆಂತರಿಕ ಉತ್ಪನ್ನ",
        selector: "ರಾಜ್ಯದ ಒಟ್ಟು ಆಂತರಿಕ ಉತ್ಪನ್ನ",
        // grow:0.05,
        wrap: true,
        
    },
    {
        name: "ಆಯವ್ಯಯದ ಹೊರಗಿನ ಸಾಲಗಳು",
        selector: "ಆಯವ್ಯಯದ ಹೊರಗಿನ ಸಾಲಗಳು",
        // grow:0.05,
        wrap: true,
       
    },
    {
        name: "ವಿತ್ತೀಯ ಕೊರತೆ",
        selector: "ವಿತ್ತೀಯ ಕೊರತೆ",
        // grow:0.05,
        wrap: true,
        
    },
    {
        name: "ವಿತ್ತೀಯ ಕೊರತೆ + ಆಯವ್ಯಯ ಹೊರಗಿನ ಸಾಲಗಳು",
        selector: "ವಿತ್ತೀಯ ಕೊರತೆ + ಆಯವ್ಯಯ ಹೊರಗಿನ ಸಾಲಗಳು",
        // grow:0.05,
        wrap: true,
        
    },
    {
        name: "ವಿತ್ತೀಯ ಕೊರತೆ/ರಾಜ್ಯದ ಒಟ್ಟು ಆಂತರಿಕ ಉತ್ಪನ್ನ",
        selector: "ವಿತ್ತೀಯ ಕೊರತೆ/ರಾಜ್ಯದ ಒಟ್ಟು ಆಂತರಿಕ ಉತ್ಪನ್ನ",
        // grow:0.05,
        wrap: true,
        
    },
    {
        name: "(ವಿತ್ತೀಯ ಕೊರತೆ+ಆಯವ್ಯಯ ಹೊರಗಿನ ಸಾಲಗಳು)/ರಾಜ್ಯದ ಒಟ್ಟು ಆಂತರಿಕ ಉತ್ಪನ್ನ",
        selector: "(ವಿತ್ತೀಯ ಕೊರತೆ+ಆಯವ್ಯಯ ಹೊರಗಿನ ಸಾಲಗಳು)/ರಾಜ್ಯದ ಒಟ್ಟು ಆಂತರಿಕ ಉತ್ಪನ್ನ",
        // grow:0.05,
        wrap: true,
        
    },
    {
        name: "ಬಾಕಿಸಾಲ/ ರಾಜ್ಯದ ಒಟ್ಟು ಆಂತರಿಕ ಉತ್ಪನ್ನ",
        selector: "ಬಾಕಿಸಾಲ/ ರಾಜ್ಯದ ಒಟ್ಟು ಆಂತರಿಕ ಉತ್ಪನ್ನ",
        // grow:0.05,
        wrap: true,
        
    }
];

const customStyles = styles;

const Table34kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-೨.೩೩(ಎ): ವಿತ್ತೀಯ ಸೂಚಕಗಳ ಮೇಲೆ ಆಯವ್ಯಯದ ಹೊರಗಿನ ಸಾಲಗಳ ಪ್ರಭಾವ"
                    columns={columns}
                    data={ctx.tables2kan.Table34}
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

export default Table34kan;
