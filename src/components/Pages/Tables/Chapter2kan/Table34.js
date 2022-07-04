import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "ಅವಧಿ ಮುಕ್ತಾಯ ವರ್ಷ",
        selector: "ಅವಧಿ ಮುಕ್ತಾಯ ವರ್ಷ",
        grow:2 ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "ಅವಧಿ",
        selector: "ಅವಧಿ",
        // grow:0.05,
        wrap: true,
        format: data => data["ಅವಧಿ"].toLocaleString('en-IN')
    },
    {
        name: "ಮೊತ್ತ",
        selector: "ಮೊತ್ತ",
        // grow:0.05,
        wrap: true,
        format: data => data["ಮೊತ್ತ"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "1",
        // grow:0.05,
        wrap: true,
        format: data => data["1"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "__1",
        // grow:0.05,
        wrap: true,
        format: data => data["__1"].toLocaleString('en-IN')
    },
    {
        name: "ಒಟ್ಟು ಸಾರ್ವಜನಿಕ ಋಣದ ಶೇಕಡ",
        selector: "ಒಟ್ಟು ಸಾರ್ವಜನಿಕ ಋಣದ ಶೇಕಡ",
        // grow:0.05,
        wrap: true,
        format: data => data["ಒಟ್ಟು ಸಾರ್ವಜನಿಕ ಋಣದ ಶೇಕಡ"].toLocaleString('en-IN')
    }
];

const customStyles = styles;

const Table34kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-2.34: ಸಾರ್ವಜನಿಕ ಋಣದ ಅವಧಿ ಪೂರ್ಣತೆಯ ಚಿತ್ರಣ"
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
