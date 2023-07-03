import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "ಇಲಾಖೆ",
        selector: "ಇಲಾಖೆ",
        wrap: true,
    },
    {
        name: "ಹಣ ಪಡೆದ ಸಂಕ್ಷಿಪ್ತ ಸಾಧಿಲ್ವಾರು ಬಿಲ್ಲುಗಳ ಸಂಖ್ಯೆ",
        selector: "ಹಣ ಪಡೆದ ಸಂಕ್ಷಿಪ್ತ ಸಾಧಿಲ್ವಾರು ಬಿಲ್ಲುಗಳ ಸಂಖ್ಯೆ",
        wrap: true,
       
    },
    {
        name: "ವಿಳಂಬ ಮಾಡಿದ ಪಾವತಿಗಲ್ಲದ ಸವಿವರ ಸಾದಿಲ್ವಾರು ಬಿಲ್ಲುಗಳ ಸಂಖ್ಯೆ",
        selector: "ವಿಳಂಬ ಮಾಡಿದ ಪಾವತಿಗಲ್ಲದ ಸವಿವರ ಸಾದಿಲ್ವಾರು ಬಿಲ್ಲುಗಳ ಸಂಖ್ಯೆ",
        wrap: true,
       
    },
    {
        name: "ವಿಳಂಬ ಮಾಡಿದ ಪಾವತಿಗಲ್ಲದ ಸವಿವರ ಸಾದಿಲ್ವಾರು ಬಿಲ್ಲುಗಳ ಮೊತ್ತ",
        selector: "ವಿಳಂಬ ಮಾಡಿದ ಪಾವತಿಗಲ್ಲದ ಸವಿವರ ಸಾದಿಲ್ವಾರು ಬಿಲ್ಲುಗಳ ಮೊತ್ತ",
        wrap: true,
       
    },
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

const Table4akan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-೪.೫: ೨೦೫೫ (ಪೊಲೀಸ್‌) ಮತ್ತು ೨೦೫೬ (ಕಾರಾಗೃಹಗಳು) ಅಡಿಯಲ್ಲಿ ಹಣಪಡೆದ ಸಂಕ್ಷಿಪ್ತ ಸಾದಿಲ್ವಾರು ಬಿಲ್ಲುಗಳ ವಿವರಗಳು"
                    columns={columns}
                    data={ctx.tables4kan.Table4a}
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

export default Table4akan;