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
        
    },
    {
        name: "ಪ್ರಾರಂಭಿಕ ಶಿಲ್ಕು",
        selector: "4",
        wrap: true,
       
    },
    {
        name: "ಸೇರ್ಪಡೆ",
        selector: "ಸೇರ್ಪಡೆ",
        wrap: true,
        
    },
    {
        name: "ಸೇರ್ಪಡೆ",
        selector: "__1",
        wrap: true,
       
    },
    {
        name: "ತೀರುವಳಿ",
        selector: "ತೀರುವಳಿ",
        wrap: true,
        
    },
    {
        name: "ತೀರುವಳಿ",
        selector: "__2",
        wrap: true,
        
    },
    {
        name: "ಅಂತಿಮ ಶಿಲ್ಕು",
        selector: "ಅಂತಿಮ ಶಿಲ್ಕು",
        wrap: true,
        
    },
    {
      name: "ಅಂತಿಮ ಶಿಲ್ಕು",
      selector: "__3",
      wrap: true,
      
  },
];

const customStyles = styles;

const Table4kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-೪.೪: ಸಂಕ್ಷಿಪ್ತ ಸಾದಿಲ್ವಾರು ಬಿಲ್ಲುಗಳಿಗೆ ಸವಿವರ ಬಿಲ್ಲುಗಳ ಸಲ್ಲಿಕೆಯ ವರ್ಷಾವಾರು ಪ್ರಗತಿ "
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