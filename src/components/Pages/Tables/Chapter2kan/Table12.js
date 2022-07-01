import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "",
        selector: "0",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "15ನೇ ಹಣಕಾಸು ಆಯೋಗದ ನಿರ್ಧರಣೆ",
        selector: "15ನೇ ಹಣಕಾಸು ಆಯೋಗದ ನಿರ್ಧರಣೆ",
        // grow:0.05,
        wrap: true,
        format: data => data["15ನೇ ಹಣಕಾಸು ಆಯೋಗದ ನಿರ್ಧರಣೆ"].toLocaleString('en-IN')
    },
    {
        name: "ಆಯವ್ಯಯ ಅಂದಾಜು",
        selector: "ಆಯವ್ಯಯ ಅಂದಾಜು",
        // grow:0.05,
        wrap: true,
        format: data => data["ಆಯವ್ಯಯ ಅಂದಾಜು"].toLocaleString('en-IN')
    },
    {
        name: "ವಾಸ್ತವ",
        selector: "ವಾಸ್ತವ",
        wrap: true,
        format: data => data["ವಾಸ್ತವ"].toLocaleString('en-IN')
    },
    {
        name: "ವಾಸ್ತವದ ಮೇಲಿನ ವ್ಯತ್ಯಾಸ ಶೇಕಡಾವಾರು",
        selector: "ವಾಸ್ತವದ ಮೇಲಿನ ವ್ಯತ್ಯಾಸ ಶೇಕಡಾವಾರು",
        wrap: true,
        // format: data => data["ವಾಸ್ತವದ ಮೇಲಿನ ವ್ಯತ್ಯಾಸ ಶೇಕಡಾವಾರು"].toLocaleString('en-IN')
    },
    {
        name: "ವಾಸ್ತವದ ಮೇಲಿನ ವ್ಯತ್ಯಾಸ ಶೇಕಡಾವಾರು",
        selector: "__1",
        wrap: true,
        format: data => data["__1"].toLocaleString('en-IN')
    }
];


const customStyles = styles;



const Table12kan  = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 2.11: Tax and non-tax receipts vis-à-vis projections during 2020-21"
                    columns={columns}
                    data={ctx.tables2kan.Table11  }
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

export default Table12kan;
