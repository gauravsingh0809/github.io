import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "ವರ್ಷ",
        selector: "ವರ್ಷ",
        wrap: true,
    },
    {
        name: "ಪ್ರಾರಂಭಿಕ ಶಿಲ್ಕು",
        selector: "ಪ್ರಾರಂಭಿಕ ಶಿಲ್ಕು",
        wrap: true,
        format: data => data["ಪ್ರಾರಂಭಿಕ ಶಿಲ್ಕು"].toLocaleString('en-IN')
    },
    {
        name: "ಪ್ರಾರಂಭಿಕ ಶಿಲ್ಕು",
        selector: "1",
        wrap: true,
        format: data => data["1"].toLocaleString('en-IN')
    },
    {
        name: "ಸೇರ್ಪಡೆ",
        selector: "ಸೇರ್ಪಡೆ",
        wrap: true,
        format: data => data["ಸೇರ್ಪಡೆ"].toLocaleString('en-IN')
    },
    {
        name: "ಸೇರ್ಪಡೆ",
        selector: "__1",
        wrap: true,
        format: data => data["__1"].toLocaleString('en-IN')
    },
    {
        name: "ತೀರುವಳಿ",
        selector: "ತೀರುವಳಿ",
        wrap: true,
        format: data => data["ತೀರುವಳಿ"].toLocaleString('en-IN')
    },
    {
        name: "ತೀರುವಳಿ",
        selector: "__2",
        wrap: true,
        format: data => data["__2"].toLocaleString('en-IN')
    },
    {
        name: "ಅಂತಿಮ ಶಿಲ್ಕು",
        selector: "ಅಂತಿಮ ಶಿಲ್ಕು",
        wrap: true,
        format: data => data["ಅಂತಿಮ ಶಿಲ್ಕು"].toLocaleString('en-IN')
    },
    {
      name: "ಅಂತಿಮ ಶಿಲ್ಕು",
      selector: "__3",
      wrap: true,
      format: data => data["__3"].toLocaleString('en-IN')
  },
];

const customStyles = styles;

const Table4kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-4.4: ಸಂಕ್ಷಿಪ್ತ ಸಾದಿಲ್ವಾರು ಬಿಲ್ಗಳಿಗೆ  ಸವಿವರ ಬಿಲ್ಗಳ ಸಲ್ಲಿಕೆಯ ವರ್ಷವಾರು ಪ್ರಗತಿ"
                    columns={columns}
                    data={ctx.tables4kan.Table4}
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

export default Table4kan;