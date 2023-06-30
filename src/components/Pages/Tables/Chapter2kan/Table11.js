import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "ರಾಜ್ಯದ ಆದಾಯದ ಮೂಲಗಳು",
        selector: "1",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name:"೧೫ನೇ ಹಣಕಾಸು ಆಯೋಗದ ನಿರ್ಧರಣೆ",
        selector:"೧೫ನೇ ಹಣಕಾಸು ಆಯೋಗದ ನಿರ್ಧರಣೆ",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        sortable:true,
        format: data => data["೧೫ನೇ ಹಣಕಾಸು ಆಯೋಗದ ನಿರ್ಧರಣೆ"].toLocaleString('en-IN')
    },
    {
        name: "ಆಯವ್ಯಯ ಅಂದಾಜು",
        selector: "ಆಯವ್ಯಯ ಅಂದಾಜು",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["ಆಯವ್ಯಯ ಅಂದಾಜು"].toLocaleString('en-IN')
    },
    {
        name: "ವಾಸ್ತವ",
        selector: "ವಾಸ್ತವ",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["ವಾಸ್ತವ"].toLocaleString('en-IN')
    },
    {
        name: "ವಾಸ್ತವದ ಮೇಲಿನ ವ್ಯತ್ಯಾಸ ಶೇಕಡಾವಾರು",
        selector: "ವಾಸ್ತವದ ಮೇಲಿನ ವ್ಯತ್ಯಾಸ ಶೇಕಡಾವಾರು",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["ವಾಸ್ತವದ ಮೇಲಿನ ವ್ಯತ್ಯಾಸ ಶೇಕಡಾವಾರು"].toLocaleString('en-IN')
    },
    {
        name: "",
        selector: "2",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["2"].toLocaleString('en-IN')
    }
];


const customStyles = styles;

const Table11kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-2.1೨: 202೧-2೨ರಲ್ಲಿ ಪ್ರಕ್ಷೇಪಗಳಿಗೆ ಮುಖಾಮುಖಿಯಾಗಿ ತೆರಿಗೆ ಮತ್ತು ತೆರಿಗೆಯೇತರ ಸ್ವೀಕೃತಿಗಳು"
                    columns={columns}
                    data={ctx.tables2kan.Table11}
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

export default Table11kan;
