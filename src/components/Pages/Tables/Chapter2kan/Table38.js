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
        grow: 2.5,
        wrap: true,
        // width:'35px',
    },
    {
        name: "1 ಏಪ್ರಿಲ್‌ 2020ರಲ್ಲಿ ಪ್ರಾರಂಭಿಕ ಶಿಲ್ಕು",
        selector: "1 ಏಪ್ರಿಲ್‌ 2020ರಲ್ಲಿ ಪ್ರಾರಂಭಿಕ ಶಿಲ್ಕು",
        // grow:0.05,
        wrap: true,
        
    },
    {
        name: "31 ಮಾರ್ಚ್‌ 2021ರಲ್ಲಿ ಅಂತಿಮ ಶಿಲ್ಕು",
        selector: "31 ಮಾರ್ಚ್‌ 2021ರಲ್ಲಿ ಅಂತಿಮ ಶಿಲ್ಕು",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
       
    }
];

const customStyles = styles;

const Table38kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-2.38: ನಗದು ಶಿಲ್ಕುಗಳು ಮತ್ತು ಅವುಗಳ ಹೂಡಿಕೆ"
                    columns={columns}
                    data={ctx.tables2kan.Table38}
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

export default Table38kan;
