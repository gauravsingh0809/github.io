import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";

const columns = [
    {
        name: "Year",
        selector: "Year",
        wrap: true,
    },
    {
        name: "Opening Balance",
        selector: "Opening Balance",
        wrap: true,
        format: data => data["Opening Balance"].toLocaleString('en-IN')
    },
    {
        name: "Receipts/Deposits",
        selector: "ReceiptsDeposits",
        wrap: true,
        format: data => data["ReceiptsDeposits"].toLocaleString('en-IN')
    },
    {
        name: "Withdrawals",
        selector: "Withdrawals",
        wrap: true,
        format: data => data["Withdrawals"].toLocaleString('en-IN')
    },
    {
        name: "Closing balance",
        selector: "Closing balance",
        wrap: true,
        format: data => data["Closing balance"].toLocaleString('en-IN')
    }
];

const customStyles = styles;

const Table5kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ 4.5: ವೈಯಕ್ತಿಕ  ಠೇವಣಿ ಖಾತೆಗಳಲ್ಲಿ ಇರಿಸಲಾದ ನಿಧಿಗಳು"
                    columns={columns}
                    // data={ctx.tables5kan.Table5}
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

export default Table5kan;