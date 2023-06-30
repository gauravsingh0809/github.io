import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
  {
    name: "ರಾಜ್ಯ ಸರಕು ಮತ್ತು ಸೇವಾ ತೆರಿಗೆ",
    selector: "ರಾಜ್ಯ ಸರಕು ಮತ್ತು ಸೇವಾ ತೆರಿಗೆ",
    // grow: ,
    wrap: true,
    // width:'35px',
},
{
    name: "2020-21",
    selector: "2020-21",
    // grow: 0.05,
    // width:'110px',
    wrap: true,
    format: data => data["2020-21"].toLocaleString('en-IN')
},

{
    name: "2021-22",
    selector: "2021-22",
    // grow:0.05,
    sortable:true,
    wrap: true,
    format: data => data["2021-22"].toLocaleString('en-IN')
},
{
    name: "ಏರಿಕೆ/ಇಳಿಕೆ",
    selector: "ಏರಿಕೆ/ಇಳಿಕೆ",
    // grow: 0.05,
    // width:'110px',
    wrap: true,
    format: data => data["ಏರಿಕೆ/ಇಳಿಕೆ"].toLocaleString('en-IN')
},

];

const customStyles = styles;

const Table5kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-2.5: ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಸರಕು ಮತ್ತು ಸೇವಾ ತೆರಿಗೆ ಸ್ವೀಕೃತಿಗಳು"
                    columns={columns}
                    data={ctx.tables2kan.Table5}
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
