import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "ಆರ್ಥಿಕ ನಿಯತಾಂಕಗಳು",
        selector: "ಆರ್ಥಿಕ ನಿಯತಾಂಕಗಳು",
        wrap: true,
        
    },
    {
        name: "ಕರ್ನಾಟಕ ವಿತ್ತೀಯ ಸುಧಾರಣಾ ಅಧಿನಿಯಮದ ಗುರಿ",
        selector: "ಕರ್ನಾಟಕ ವಿತ್ತೀಯ ಸುಧಾರಣಾ ಅಧಿನಿಯಮದ ಗುರಿ",
        wrap: true,
        
    },
   
    {
        name: "ಸಾಧನೆ",
        selector: "ಸಾಧನೆ",
        wrap: true,
        
    },
    {
        name: "ಸಾಧನೆ",
        selector: "4",
        wrap: true,
        
    },
    {
        name: "ಸಾಧನೆ",
        selector: "__1",
        wrap: true,
       
    },
    {
        name: "ಸಾಧನೆ",
        selector: "__2",
        wrap: true,
        
    },
    {
        name: "ಸಾಧನೆ",
        selector: "__3",
        wrap: true,
        
    },
];

const conditionalRowStyles = [
    {
        when: row => row["1"] === '2015 16',
        style: {
            backgroundColor: 'rgba(153, 165, 128, 0.9)',
        },
    }
]

const customStyles = styles;

const Table5kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-1.5: ಕರ್ನಾಟಕ ವಿತ್ತೀಯ ಸುಧಾರಣಾ ಅಧಿನಿಯಮದ ಗುರಿಗಳ ಅನುಸರಣೆ"
                    columns={columns}
                    data={ctx.tables1kan.Table5}
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

export default Table5kan;
