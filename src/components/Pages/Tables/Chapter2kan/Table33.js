import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "ಕಂಪನಿ/ನಿಗಮ/ಮಂಡಳಿ",
        selector: "ಕಂಪನಿ/ನಿಗಮ/ಮಂಡಳಿ",
        grow:0.1 ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "ಬಾಕಿ ಇರುವ ಆಯವ್ಯಯೇತರ ಸಾಲಗಳು",
        selector: "ಬಾಕಿ ಇರುವ ಆಯವ್ಯಯೇತರ ಸಾಲಗಳು",
        grow:2 ,
        wrap: true,
        // width:'35px',
    },
    {
        name: "೨೦೨೧-೨೨ರ ಅವಧಿಯಲ್ಲಿ ಸಾಲಗಳು",
        selector: "೨೦೨೧-೨೨ರ ಅವಧಿಯಲ್ಲಿ ಸಾಲಗಳು",
        // grow:0.05,
        wrap: true,
        
    },
    {
        name: "೨೦೨೧-೨೨ರಲ್ಲಿ ಮರುಪಾವತಿಗಳು",
        selector: "೨೦೨೧-೨೨ರಲ್ಲಿ ಮರುಪಾವತಿಗಳು",
        // grow: 0.05,
        // width:'110px',
        wrap: true,

    },
    {
        name: "",
        selector: "1",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
    },
    {
        name: "ಅಂತಿಮ ಶಿಲ್ಕು",
        selector: "ಅಂತಿಮ ಶಿಲ್ಕು",
        // grow: 0.05,
        // width:'110px',
        wrap: true,
    }
];

const customStyles = styles;

const conditionalRowStyles = [
    {
      when: row => row["ಕಂಪನಿ/ನಿಗಮ/ಮಂಡಳಿ"] === 'ಒಟ್ಟು',
      style: {
        backgroundColor:  'rgba(153, 165, 128, 0.9)',
      }
    }
  ]

const Table33kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-2.3೩: ಆಯವ್ಯಯ ಹೊರಗಿನ ಸಾಲಗಳ ಘಟಕವಾರು ಸ್ಥಿತಿ"
                    columns={columns}
                    data={ctx.tables2kan.Table33}
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

export default Table33kan;
