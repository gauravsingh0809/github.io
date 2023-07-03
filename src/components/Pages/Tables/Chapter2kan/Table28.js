import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "",
        selector: "1",
        wrap: true,
    },
    {
        name: "ಒವೆ/ರಾಒಆಉ",
        selector: "ಒವೆ/ರಾಒಆಉ",
        wrap: true,
       
    },
    {
        name: "ಬಂವೆ/ಒವೆ",
        selector: "ಬಂವೆ/ಒವೆ",
        wrap: true,
    },
    
    {
        name: "ಅವೆ/ಒವೆ",
        selector: "ಅವೆ/ಒವೆ",
        wrap: true,
        
    },
    {
        name: "ಶಿಕ್ಷಣ/ಒವೆ",
        selector: "ಶಿಕ್ಷಣ/ಒವೆ",
        wrap: true,
        
    },
    {
        name: "ಆರೋಗ್ಯ/ಒವೆ",
        selector: "ಆರೋಗ್ಯ/ಒವೆ",
        wrap: true,
        
    }
];

const customStyles = styles;

const Table28kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-2.2೮: 202೧-2೨ರಲ್ಲಿ ರಾಜ್ಯಗಳ ಹಣಕಾಸಿನ ಆದ್ಯತೆ"
                    columns={columns}
                    data={ctx.tables2kan.Table28}
                    customStyles={customStyles}
                    striped
                    highlightOnHover
                    pointerOnHover
                />
            </Card>
        </div>
    );
}

export default Table28kan;
