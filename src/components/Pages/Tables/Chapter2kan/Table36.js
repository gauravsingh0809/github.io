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
        grow: 0.1,
        wrap: true,
        // width:'35px',
    },
    {
        name: "ವಿವರಗಳು",
        selector: "ವಿವರಗಳು",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "ಸ್ವೀಕೃತಿ",
        selector: "ಸ್ವೀಕೃತಿ",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        
    },
    {
        selector: "ವಿತರಣೆ",
        name: "ವಿತರಣೆ",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
       
    },
    {
        name: "ನಿವ್ವಳ",
        selector: "ನಿವ್ವಳ",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
       
    }
];


const customStyles = styles;

const Table36kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-2.36: ಸಾಲ ಪಡೆದ ನಿಧಿಯ ಬಳಕೆ"
                    columns={columns}
                    data={ctx.tables2kan.Table36}
                    customStyles={customStyles}
                    striped
                    highlightOnHover
                    pointerOnHover
                />
            </Card>
        </div>
    );
}

export default Table36kan;
