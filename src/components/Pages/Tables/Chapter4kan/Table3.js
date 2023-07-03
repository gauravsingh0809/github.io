import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "ಬಾಕಿ ಇರುವ ವರ್ಷ",
        selector: "ಬಾಕಿ ಇರುವ ವರ್ಷ",
        wrap: true,
    },
    {
        name: "ಬಳಕೆ ಪ್ರಮಾಣಪತ್ರಗಳ ಸಂಖ್ಯೆ",
        selector: "ಬಳಕೆ ಪ್ರಮಾಣಪತ್ರಗಳ ಸಂಖ್ಯೆ",
        wrap: true,
       
    },
    {
        name: "ಮೊತ್ತ",
        selector: "ಮೊತ್ತ",
        wrap: true,
       
    }
];

const conditionalRowStyles = [
    {
        when: row => row["Year"] === 'Total',
        style: {
            backgroundColor: 'rgba(153, 165, 128, 0.9)',
        },
    }
  ]

const customStyles = styles;

const Table3kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-೪.3: ಬಾಕಿ ಇರುವ ಬಳಕೆ ಪ್ರಮಾಣಪತ್ರಗಳ ವರ್ಷಾವಾರು ವಿವರ"
                    columns={columns}
                    data={ctx.tables4kan.Table3}
                    customStyles={customStyles}
                    striped
                    highlightOnHover
                    pointerOnHover
                    conditionalRowStyles={conditionalRowStyles}
                />
            </Card>
        </div>
    );
}

export default Table3kan;