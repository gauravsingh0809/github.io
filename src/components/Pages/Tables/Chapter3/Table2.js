import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "Identification",
        selector: "Identification",
        wrap: true,
    },
    {
        name: "Classification",
        selector: "Classification",
        wrap: true
    },
    {
      name: "Criteria",
      selector: "Criteria",
      wrap: true,
  }
];

const customStyles = styles;

const Table2 = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="Table 3.2: Criteria for identification and classification of Child Centric Programme/Schemes"
                    columns={columns}
                    data={ctx.tables3.Table2}
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

export default Table2;