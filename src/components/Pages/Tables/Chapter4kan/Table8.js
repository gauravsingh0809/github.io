import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "ಕಿರು ಲೆಕ್ಕಶೀರ್ಷಿಕೆ",
        selector: "ಕಿರು ಲೆಕ್ಕಶೀರ್ಷಿಕೆ",
        wrap: true,
    },
    {
        name: "2018-19",
        selector: "2018 19",
        wrap: true,
    },
    {
        name: "2018-19",
        selector: "1",
        wrap: true,
    },
    {
        name: "2019-20",
        selector: "2019 20",
        wrap: true,
    },
    {
        name: "2019-20",
        selector: "__1",
        wrap: true,
    },
    {
        name: "2020-21",
        selector: "2020 21",
        wrap: true,
    },
    {
        name: "2020-21",
        selector: "__2",
        wrap: true,
    }
];

const customStyles = styles;

const Table8kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ 4.8: ಅಮಾನತ್ತು ಶೀರ್ಷಿಕೆಗಳಡಿಯ ಶಿಲ್ಕುಗಳು"
                    columns={columns}
                    data={ctx.tables4kan.Table8}
                    customStyles={customStyles}
                    striped
                    // conditionalRowStyles={conditionalRowStyles}
                    highlightOnHover
                    pointerOnHover
                    pagination
                />
            </Card>
        </div>
    );
}

export default Table8kan;