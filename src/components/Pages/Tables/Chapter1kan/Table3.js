import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "ಹೊಣೆಗಾರಿಕೆಗಳು",
        selector: "ಹೊಣೆಗಾರಿಕೆಗಳು",
        grow: 3,
        wrap: true,
        width:'150px',
    },
    {
        name: "ಹೊಣೆಗಾರಿಕೆಗಳು",
        selector: "13",
        grow:0.2,
        wrap: true,
        
    },
    
    {
        name: "ಹೊಣೆಗಾರಿಕೆಗಳು",
        selector: "__1",
        grow:0.2,
        wrap: true,
        format: data => data["__1"].toLocaleString('en-IN')
    },
    {
        name: "ಹೊಣೆಗಾರಿಕೆಗಳು",
        selector: "__2",
        grow: 0.2,
        wrap: true,
        format: data => data["__2"].toLocaleString('en-IN')
    },
    {
        name: "ಶೇಕಡಾವಾರು",
        selector: "__3",
        grow: 0.5,
        width:'150px',
        wrap: true,
       
    },
    {
        name: "ಆಸ್ತಿಗಳು",
        selector:"ಆಸ್ತಿಗಳು",
        grow: 0.5,
        wrap: true,
        width:'155px'
    },
    {
        name: "ಆಸ್ತಿಗಳು",
        selector: "__4",
        grow: 0.35,
        wrap: true,
        conditionalCellStyles: [
            {
                when: row => row["__4"] === 'Total',
                style: {
                    backgroundColor: 'rgba(63, 195, 128, 0.5)',
                    color: 'white',
                    '&:hover': {
                        cursor: 'pointer',
                    },
                },
            }
        ]
    },
    {
        name: "ಆಸ್ತಿಗಳು",
        selector: "__5",
        grow: 0.2,
        wrap: true,
        
    },
    {
        name: "ಆಸ್ತಿಗಳು",
        selector: "__6",
        grow: 0.2,
        wrap: true,
       
    },
    {
        name: "ಆಸ್ತಿಗಳು",
        selector: "__7",
        grow:0.05,
        wrap: true,
       
    },
    {
        name: "ಆಸ್ತಿಗಳು",
        selector: "__8",
        grow:0.05,
        wrap: true,
       
    },
    {
        name: "_ಆಸ್ತಿಗಳು",
        selector: "__9",
        grow:0.05,
        wrap: true,
       
    },
    {
        name: "ಆಸ್ತಿಗಳು",
        selector: "__10",
        grow:0.05,
        wrap: true,
       
    }


];

const conditionalRowStyles = [
    {
        when: row => row["__3"] === 'Consolidated Fund' ||
            row["__3"] === 'Public Account',
        style: {
            backgroundColor: 'rgba(153, 165, 128, 0.9)',
        },
    }
]

const customStyles = styles;



const Table3kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-1.3: ಆಸ್ತಿಗಳು ಮತ್ತು ಹೊಣೆಗಾರಿಕೆಗಳ ಸಂಕ್ಷಿಪ್ತ ಸ್ಥಿತಿ"
                    columns={columns}
                    data={ctx.tables1kan.Table3}
                    customStyles={customStyles}
                    striped
                    conditionalRowStyles={conditionalRowStyles}
                    highlightOnHover
                    pointerOnHover
                    // pagination
                />
            </Card>
        </div>
    );
}

export default Table3kan;
