import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "ಕ್ರಮ ಸಂಖ್ಯೆ",
        selector: "ಕ್ರಮ ಸಂಖ್ಯೆ",
        wrap: true,
        grow: 0.1,
    },
    {
        name: "ಆರ್ಥಿಕ ಸ್ಥಿರಾಂಶಗಳು",
        selector: "ಆರ್ಥಿಕ ಸ್ಥಿರಾಂಶಗಳು",
        wrap: true,
        grow: 2,
        // conditionalCellStyles: [
        //     {
        //         when: row => row["ಆರ್ಥಿಕ ಸ್ಥಿರಾಂಕಗಳು"] === 'Fiscal Deficit (-)/ Surplus (+)' 
        //         || row["ಆರ್ಥಿಕ ಸ್ಥಿರಾಂಕಗಳು"] === 'Revenue Deficit (-)/Surplus (+) (5-6)'
        //         || row["ಆರ್ಥಿಕ ಸ್ಥಿರಾಂಕಗಳು"] === 'GSDP',
        //         style: {
        //             backgroundColor: 'rgba(63, 195, 128, 0.5)',
        //             color: 'white',
        //             fontWeight: 500,
        //             '&:hover': {
        //                 cursor: 'pointer',
        //             },
        //         },
        //     },
        // ]
    },
    {
        name: "2019-23ರ ಮಧ್ಯಂತರ ವಿತ್ತೀಯ ಅವಧಿಯ ಯೋಜನೆಯ ಪ್ರಕಾರ ಪ್ರಕ್ಷೇಪಣೆಗಳು",
        selector: "2019-23ರ ಮಧ್ಯಂತರ ವಿತ್ತೀಯ ಅವಧಿಯ ಯೋಜನೆಯ ಪ್ರಕಾರ ಪ್ರಕ್ಷೇಪಣೆಗಳು",
        wrap: true,
   
    },
    {
        name: "ವಾಸ್ತವಗಳು (2021-22)",
        selector: "ವಾಸ್ತವಗಳು",
        wrap: true,
       
    },
    {
        name: "ವ್ಯತ್ಯಾಸ (ಶೇಕಡಾವಾರು)",
        selector: "ವ್ಯತ್ಯಾಸ",
        wrap: true,
       
    },
];


const customStyles = styles;

const Table6kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ-1.6: 202೧-2೨ಕ್ಕೆ ಮಧ್ಯಮಾವಧಿ ವಿತ್ತೀಯ ಅವಧಿಯ ಯೋಜನೆಯ ಪ್ರಕ್ಷೇಪಣೆಗಳಿಗೆ ಪ್ರತಿಯಾಗಿ ವಾಸ್ತವಗಳು"
                    columns={columns}
                    data={ctx.tables1kan.Table6}
                    customStyles={customStyles}
                    striped
                    highlightOnHover
                    pointerOnHover
                // pagination
                />
            </Card>
        </div>
    );
}

export default Table6kan;
