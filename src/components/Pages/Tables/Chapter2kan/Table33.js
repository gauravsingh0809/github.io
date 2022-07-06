import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "ವಿವರಗಳು",
        selector: "ವಿವರಗಳು",
        grow:0.1 ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "1",
        selector: "1",
        grow:2 ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "ಸ್ವೀಕೃತಿ",
        selector: "ಸ್ವೀಕೃತಿ",
        // grow:0.05,
        wrap: true,
        format: data => data["ಸ್ವೀಕೃತಿ"].toLocaleString('en-IN')
    },
    {
        name: "ವಿತರಣೆ",
        selector: "ವಿತರಣೆ",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["ವಿತರಣೆ"].toLocaleString('en-IN')
    },
    {
        name: "ನಿವ್ವಳ",
        selector: "ನಿವ್ವಳ",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["ನಿವ್ವಳ"].toLocaleString('en-IN')
    }
];

const customStyles = styles;

const Table33kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.33: Receipts and Disbursements under components financing the fiscal deficit during 2019-20"
                    columns={columns}
                    data={ctx.tables2kan.Table33}
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

export default Table33kan;
