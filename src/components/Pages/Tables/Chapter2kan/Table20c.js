import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "ಕ್ರಮ ಸಂಖ್ಯೆ",
        selector: "0",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "ಇಲಾಖೆ",
        selector: "1",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["1"].toLocaleString('en-IN')
    },
    {
        name: "ಮೂಲ/ಅನುಷ್ಠಾನ ಸಂಸ್ಥೆ",
        selector: "2",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["2"].toLocaleString('en-IN')
    },
    {
        name: "ಬಿಡುಗಡೆ ಮಾಡಿದ ನಿಧಿ",
        selector: "3",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["3"].toLocaleString('en-IN')
    },
    {
        name: "ಬಳಸಿದ ನಿಧಿ",
        selector: "4",
        // grow:0.05,
        wrap: true,
        format: data => data["4"].toLocaleString('en-IN')
    }
];


const customStyles = styles;
const conditionalRowStyles = [
    {
        when: row => row["0"] === 'ಒಟ್ಟು ಮೊತ್ತ',
        style: {
            backgroundColor: 'rgba(153, 165, 128, 0.9)',
        },
    }
  ]


const Table20ckan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-೨.೨೦(ಸಿ): ಕೋವಿಡ್‌-೧೯ರ ನಿಯಂತ್ರಣಕ್ಕಾಗಿ ೨೦೧೯-೨೦ರಿಂದ ೨೦೨೧-೨೨ರ ಅವಧಿಯಲ್ಲಿ ಬಿಡುಗಡೆ ಮಾಡಿದ ಮತ್ತು ಬಳಸಿದ ನಿಧಿಗಳ ವಿವರ"
                    columns={columns}
                    data={ctx.tables2kan.Table20c}
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

export default Table20ckan;
