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
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "ಒಟ್ಟು ಹಂಚಿಕೆ",
        selector: "ಒಟ್ಟು ಹಂಚಿಕೆ",
        // grow:0.05,
        wrap: true,
        format: data => data["ಒಟ್ಟು ಹಂಚಿಕೆ"].toLocaleString('en-IN')
    },
    {
        name: "ವರ್ಗ ʼಎʼ ಒಟ್ಟು ಹಂಚಿಕೆ",
        selector: "ವರ್ಗ ʼಎʼ ಒಟ್ಟು ಹಂಚಿಕೆ",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["ವರ್ಗ ʼಎʼ ಒಟ್ಟು ಹಂಚಿಕೆ"].toLocaleString('en-IN')
    },
    {
        name: "ವರ್ಗ ʼಬಿʼ ಒಟ್ಟು ಹಂಚಿಕೆ",
        selector: "ವರ್ಗ ʼಬಿʼ ಒಟ್ಟು ಹಂಚಿಕೆ",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
       
    },
    {
        name: "ವರ್ಗ ʼಬಿʼ ಹಂಚಿಕೆಯ ಶೇಕಡ 30",
        selector: "ವರ್ಗ ʼಬಿʼ ಹಂಚಿಕೆಯ ಶೇಕಡ 30",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
       },
    {
        name: "ಒಟ್ಟು ಹಂಚಿಕೆಗೆ ವರ್ಗ ʼಎʼ ಶೇಕಡಾವಾರು",
        selector: "ಒಟ್ಟು ಹಂಚಿಕೆಗೆ ವರ್ಗ ʼಎʼ ಶೇಕಡಾವಾರು",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        
    },
  {
        name: "ಒಟ್ಟು ಹಂಚಿಕೆಗೆ ವರ್ಗ ʼಬಿʼ (ಶೇಕಡ 30) ಶೇಕಡಾವಾರು",
        selector: "ಒಟ್ಟು ಹಂಚಿಕೆಗೆ ವರ್ಗ ʼಬಿʼ (ಶೇಕಡ 30) ಶೇಕಡಾವಾರು",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        
    }
];

const customStyles = styles;

const Table1kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ 3.1: 2016-17ರಿಂದ 2020-21ರ ಅವಧಿಯಲ್ಲಿ ವರ್ಗವಾರು ಹಂಚಿಕೆ"
                    columns={columns}
                    data={ctx.tables3kan.Table1}
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

export default Table1kan;