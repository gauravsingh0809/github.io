import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "ಪ್ರಧಾನ ಲೆಕ್ಕಶೀರ್ಷಿಕೆ",
        selector: "0",
        // grow: ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "20೨೦-2೧",
        selector: "20೨೦ 2೧",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["20೨೦ 2೧"].toLocaleString('en-IN')
    },
    {
        name: "202೧-2೨",
        selector: "202೧ 2೨",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["202೧ 2೨"].toLocaleString('en-IN')
    },
    {
        name: "ಹೆಚ್ಚಳ (+)/ ಇಳಿಕೆ (-)",
        selector: "3",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
        format: data => data["3"].toLocaleString('en-IN')
    },
    {
        name: "ವ್ಯತ್ಯಾಸ ಶೇಕಡ",
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


const Table20dkan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-2.2೧: 20೨೦-2೧ಕ್ಕೆ ಹೋಲಿಸಿದಂತೆ 202೧-2೨ರಲ್ಲಿ ಬಂಡವಾಳ ವೆಚ್ಚ"
                    columns={columns}
                    data={ctx.tables2kan.Table20d}
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

export default Table20dkan;
