import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";


const columns = [
    {
        name: "ಆರ್ಥಿಕ ನಿಯತಾಂಕಗಳು",
        selector: "ಆರ್ಥಿಕ ನಿಯತಾಂಕಗಳು",
        wrap: true,
        format: data => data["ಆರ್ಥಿಕ ನಿಯತಾಂಕಗಳು"].toLocaleString('en-IN')
    },
    {
        name: "ಕರ್ನಾಟಕ ವಿತ್ತೀಯ ಸುಧಾರಣಾ ಅಧಿನಿಯಮದ ಗುರಿ",
        selector: "ಕರ್ನಾಟಕ ವಿತ್ತೀಯ ಸುಧಾರಣಾ ಅಧಿನಿಯಮದ ಗುರಿ",
        wrap: true,
        format: data => data["ಕರ್ನಾಟಕ ವಿತ್ತೀಯ ಸುಧಾರಣಾ ಅಧಿನಿಯಮದ ಗುರಿ"].toLocaleString('en-IN')
    },
    {
        name: "2016-17",
        selector: "2016-17",
        wrap: true,
        format: data => data["2016-17"].toLocaleString('en-IN')
    },
    {
        name: "2017-18",
        selector: "22017-18",
        wrap: true,
        format: data => data["2017-18"].toLocaleString('en-IN')
    },
    {
        name: "2018-19",
        selector: "2018-19",
        wrap: true,
        format: data => data["2018-19"].toLocaleString('en-IN')
    },
    {
        name: "2019-20",
        selector: "2019-20",
        wrap: true,
        format: data => data["2019-20"].toLocaleString('en-IN')
    },
    {
        name: "2020-21",
        selector: "2020-21",
        wrap: true,
        format: data => data["2020-21"].toLocaleString('en-IN')
    },
];

const conditionalRowStyles = [
    {
        when: row => row["1"] === '2015 16',
        style: {
            backgroundColor: 'rgba(153, 165, 128, 0.9)',
        },
    }
]

const customStyles = styles;

const Table5kan = () => {

    const ctx = useContext(MyContext)

    return (
        <div className="App" style={{ margin: "40px 0 40px 0" }} >
            <Card>
                <DataTable
                    title="ಕೋಷ್ಟಕ - 1.5: ಕರ್ನಾಟಕ ವಿತ್ತೀಯ ಸುಧಾರಣಾ ಕಾಯಿದೆಯ ಗುರಿಗಳ ಅನುಪಾಲನೆ"
                    columns={columns}
                    data={ctx.tables1kan.Table5}
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

export default Table5kan;
